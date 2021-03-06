import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { observer } from 'mobx-react/native';

import { colors } from '../../utils/Styles';
import appStore from '../../stores/appStore';
import IntroScreen from '../screen/Intro';
import NotFoundScreen from '../screen/NotFound';
import InfoScreen from '../screen/Info';

const routeConfig = {
  Intro: {
    screen: IntroScreen,
    navigationOptions: {
      title: 'Intro',
    },
    path: 'intro',
  },
  NotFound: {
    screen: NotFoundScreen,
    path: 'NotFound',
  },
  Info: {
    screen: InfoScreen,
    path: 'Info',
  },

};

const navigatorConfig = {
  initialRouteName: 'Info',
  // header: null,
  // headerMode: 'none',
  gesturesEnabled: true,
  statusBarStyle: 'light-content',
  navigationOptions: {
    headerStyle: {
      headerBackTitle: null,
      backgroundColor: colors.dodgerBlue,
      borderBottomColor: 'transparent',
      borderBottomWidth: 0,
      elevation: 0,
    },
    headerTitleStyle: { color: 'white' },
    headerTintColor: 'white',
  },
};

const RootStackNavigator = createStackNavigator(routeConfig, navigatorConfig);

interface IProps {
  navigation: any;
}

@observer
class RootNavigator extends React.Component<IProps> {
  private static router = RootStackNavigator.router;

  public render() {
    return <RootStackNavigator navigation={this.props.navigation}/>;
  }
}

export default RootNavigator;
