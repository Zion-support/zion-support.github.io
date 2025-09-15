<<<<<<< HEAD
=======

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from \'react\' export default Settings const Settings = () => { return (<> <Helmet> <title > Settings - Zion Tech Group</title> <meta name=\'description\' content=\'Configure your Zion Tech Group account settings. Customize notifications,security,and preferences.\' / / /> </Helmet> <div className=\'min - h-screen bg - gray - 50 py - 12\'> <div className=\'max - w-7xl mx - auto px - 4 \"sm\": px: - 6 lg:px: - 8\'> <div className=\'text - center mb - 12\'> <h1 className=\'text - 4xl font - bold text - gray - 900 mb - 4\'> Settings </h1> <p className=\'text - xl text - gray - 600 max - w-3xl mx - auto\'> Configure your account setting,s,notifications,security preferences,and more. </p> </div> <div className=\'bg - white rounded - lg shadow - lg p - 8\'> <p className=\'text - gray - 600 text - center\'> Settings page coming soon. We\"re building comprehensive account configuration options. </p> </div> </div> </div> </>) }\'';
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5


import _React from 'react' export default Settings const Settings = () => { return (<> <Helmet> <title > Settings - Zion Tech Group</title> <meta name='description' content='Configure your Zion Tech Group account settings. Customize notifications,security,and preferences.' / / /> </Helmet> <div className='min - h-screen bg - gray - 50 py - 12'> <div className='max - w-7xl mx - auto px - 4 "sm": px: - 6 lg:px: - 8'> <div className='text - center mb - 12'> <h1 className='text - 4xl font - bold text - gray - 900 mb - 4'> Settings </h1> <p className='text - xl text - gray - 600 max - w-3xl mx - auto'> Configure your account setting,s,notifications,security preferences,and more. </p> </div> <div className='bg - white rounded - lg shadow - lg p - 8'> <p className='text - gray - 600 text - center'> Settings page coming soon. We"re building comprehensive account configuration options. </p> </div> </div> </div> </>) }'';


import _React from 'react' export default Settings const Settings = () => { return (<> <Helmet> <title > Settings - Zion Tech Group</title> <meta name='description' content='Configure your Zion Tech Group account settings. Customize notifications,security,and preferences.' / / /> </Helmet> <div className='min - h-screen bg - gray - 50 py - 12'> <div className='max - w-7xl mx - auto px - 4 "sm": px: - 6 lg:px: - 8'> <div className='text - center mb - 12'> <h1 className='text - 4xl font - bold text - gray - 900 mb - 4'> Settings </h1> <p className='text - xl text - gray - 600 max - w-3xl mx - auto'> Configure your account setting,s,notifications,security preferences,and more. </p> </div> <div className='bg - white rounded - lg shadow - lg p - 8'> <p className='text - gray - 600 text - center'> Settings page coming soon. We"re building comprehensive account configuration options. </p> </div> </div> </div> </>) }'';

:src.pages.disabled/Settings.jsx
import _React from 'react' export default Settings const Settings = () => { return (<> <Helmet> <title > Settings - Zion Tech Group</title> <meta name='description' content='Configure your Zion Tech Group account settings. Customize notifications,security,and preferences.' / / /> </Helmet> <div className='min - h-screen bg - gray - 50 py - 12'> <div className='max - w-7xl mx - auto px - 4 "sm": px: - 6 lg:px: - 8'> <div className='text - center mb - 12'> <h1 className='text - 4xl font - bold text - gray - 900 mb - 4'> Settings </h1> <p className='text - xl text - gray - 600 max - w-3xl mx - auto'> Configure your account setting,s,notifications,security preferences,and more. </p> </div> <div className='bg - white rounded - lg shadow - lg p - 8'> <p className='text - gray - 600 text - center'> Settings page coming soon. We"re building comprehensive account configuration options. </p> </div> </div> </div> </>) }'';
:src.pages.disabled/Settings.jsx
import _React from 'react' export default Settings const Settings = () => { return (<> <Helmet> <title > Settings - Zion Tech Group</title> <meta name='description' content='Configure your Zion Tech Group account settings. Customize notifications,security,and preferences.' / / /> </Helmet> <div className='min - h-screen bg - gray - 50 py - 12'> <div className='max - w-7xl mx - auto px - 4 "sm": px: - 6 lg:px: - 8'> <div className='text - center mb - 12'> <h1 className='text - 4xl font - bold text - gray - 900 mb - 4'> Settings </h1> <p className='text - xl text - gray - 600 max - w-3xl mx - auto'> Configure your account setting,s,notifications,security preferences,and more. </p> </div> <div className='bg - white rounded - lg shadow - lg p - 8'> <p className='text - gray - 600 text - center'> Settings page coming soon. We"re building comprehensive account configuration options. </p> </div> </div> </div> </>) }'';
<<<<<<< HEAD
:src.pages.disabled/Settings.jsx
import _React from 'react' export default Settings const Settings = () => { return (<> <Helmet> <title > Settings - Zion Tech Group</title> <meta name='description' content='Configure your Zion Tech Group account settings. Customize notifications,security,and preferences.' / / /> </Helmet> <div className='min - h-screen bg - gray - 50 py - 12'> <div className='max - w-7xl mx - auto px - 4 "sm": px: - 6 lg:px: - 8'> <div className='text - center mb - 12'> <h1 className='text - 4xl font - bold text - gray - 900 mb - 4'> Settings </h1> <p className='text - xl text - gray - 600 max - w-3xl mx - auto'> Configure your account setting,s,notifications,security preferences,and more. </p> </div> <div className='bg - white rounded - lg shadow - lg p - 8'> <p className='text - gray - 600 text - center'> Settings page coming soon. We"re building comprehensive account configuration options. </p> </div> </div> </div> </>) }'';
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import _React from 'react' export default Settings const Settings = () => { return (<> <Helmet> <title > Settings - Zion Tech Group</title> <meta name='description' content='Configure your Zion Tech Group account settings. Customize notifications,security,and preferences.' / / /> </Helmet> <div className='min - h-screen bg - gray - 50 py - 12'> <div className='max - w-7xl mx - auto px - 4 "sm": px: - 6 lg:px: - 8'> <div className='text - center mb - 12'> <h1 className='text - 4xl font - bold text - gray - 900 mb - 4'> Settings </h1> <p className='text - xl text - gray - 600 max - w-3xl mx - auto'> Configure your account setting,s,notifications,security preferences,and more. </p> </div> <div className='bg - white rounded - lg shadow - lg p - 8'> <p className='text - gray - 600 text - center'> Settings page coming soon. We"re building comprehensive account configuration options. </p> </div> </div> </div> </>) }'';
ursor/add-new-services-and-deploy-updates-0462
:src.pages.disabled/Settings.jsx
import _React from 'react' export default Settings const Settings = () => { return (<> <Helmet> <title > Settings - Zion Tech Group</title> <meta name='description' content='Configure your Zion Tech Group account settings. Customize notifications,security,and preferences.' / / /> </Helmet> <div className='min - h-screen bg - gray - 50 py - 12'> <div className='max - w-7xl mx - auto px - 4 "sm": px: - 6 lg:px: - 8'> <div className='text - center mb - 12'> <h1 className='text - 4xl font - bold text - gray - 900 mb - 4'> Settings </h1> <p className='text - xl text - gray - 600 max - w-3xl mx - auto'> Configure your account setting,s,notifications,security preferences,and more. </p> </div> <div className='bg - white rounded - lg shadow - lg p - 8'> <p className='text - gray - 600 text - center'> Settings page coming soon. We"re building comprehensive account configuration options. </p> </div> </div> </div> </>) }'';
:temp_exclude/src.pages.disabled/Settings.jsx



import _React from 'react' export default Settings const Settings = () => { return (<> <Helmet> <title > Settings - Zion Tech Group</title> <meta name='description' content='Configure your Zion Tech Group account settings. Customize notifications,security,and preferences.' / / /> </Helmet> <div className='min - h-screen bg - gray - 50 py - 12'> <div className='max - w-7xl mx - auto px - 4 "sm": px: - 6 lg:px: - 8'> <div className='text - center mb - 12'> <h1 className='text - 4xl font - bold text - gray - 900 mb - 4'> Settings </h1> <p className='text - xl text - gray - 600 max - w-3xl mx - auto'> Configure your account setting,s,notifications,security preferences,and more. </p> </div> <div className='bg - white rounded - lg shadow - lg p - 8'> <p className='text - gray - 600 text - center'> Settings page coming soon. We"re building comprehensive account configuration options. </p> </div> </div> </div> </>) }'';


import _React from 'react' export default Settings const Settings = () => { return (<> <Helmet> <title > Settings - Zion Tech Group</title> <meta name='description' content='Configure your Zion Tech Group account settings. Customize notifications,security,and preferences.' / / /> </Helmet> <div className='min - h-screen bg - gray - 50 py - 12'> <div className='max - w-7xl mx - auto px - 4 "sm": px: - 6 lg:px: - 8'> <div className='text - center mb - 12'> <h1 className='text - 4xl font - bold text - gray - 900 mb - 4'> Settings </h1> <p className='text - xl text - gray - 600 max - w-3xl mx - auto'> Configure your account setting,s,notifications,security preferences,and more. </p> </div> <div className='bg - white rounded - lg shadow - lg p - 8'> <p className='text - gray - 600 text - center'> Settings page coming soon. We"re building comprehensive account configuration options. </p> </div> </div> </div> </>) }'';

:src.pages.disabled/Settings.jsx
import _React from 'react' export default Settings const Settings = () => { return (<> <Helmet> <title > Settings - Zion Tech Group</title> <meta name='description' content='Configure your Zion Tech Group account settings. Customize notifications,security,and preferences.' / / /> </Helmet> <div className='min - h-screen bg - gray - 50 py - 12'> <div className='max - w-7xl mx - auto px - 4 "sm": px: - 6 lg:px: - 8'> <div className='text - center mb - 12'> <h1 className='text - 4xl font - bold text - gray - 900 mb - 4'> Settings </h1> <p className='text - xl text - gray - 600 max - w-3xl mx - auto'> Configure your account setting,s,notifications,security preferences,and more. </p> </div> <div className='bg - white rounded - lg shadow - lg p - 8'> <p className='text - gray - 600 text - center'> Settings page coming soon. We"re building comprehensive account configuration options. </p> </div> </div> </div> </>) }'';
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import _React from 'react' export default Settings const Settings = () => { return (<> <Helmet> <title > Settings - Zion Tech Group</title> <meta name='description' content='Configure your Zion Tech Group account settings. Customize notifications,security,and preferences.' / / /> </Helmet> <div className='min - h-screen bg - gray - 50 py - 12'> <div className='max - w-7xl mx - auto px - 4 "sm": px: - 6 lg:px: - 8'> <div className='text - center mb - 12'> <h1 className='text - 4xl font - bold text - gray - 900 mb - 4'> Settings </h1> <p className='text - xl text - gray - 600 max - w-3xl mx - auto'> Configure your account setting,s,notifications,security preferences,and more. </p> </div> <div className='bg - white rounded - lg shadow - lg p - 8'> <p className='text - gray - 600 text - center'> Settings page coming soon. We"re building comprehensive account configuration options. </p> </div> </div> </div> </>) }'';
>>>>>>> origin/merged-prs
import _React from 'react' export default Settings const Settings = () => { return (<> <Helmet> <title > Settings - Zion Tech Group</title> <meta name='description' content='Configure your Zion Tech Group account settings. Customize notifications,security,and preferences.' / / /> </Helmet> <div className='min - h-screen bg - gray - 50 py - 12'> <div className='max - w-7xl mx - auto px - 4 "sm": px: - 6 lg:px: - 8'> <div className='text - center mb - 12'> <h1 className='text - 4xl font - bold text - gray - 900 mb - 4'> Settings </h1> <p className='text - xl text - gray - 600 max - w-3xl mx - auto'> Configure your account setting,s,notifications,security preferences,and more. </p> </div> <div className='bg - white rounded - lg shadow - lg p - 8'> <p className='text - gray - 600 text - center'> Settings page coming soon. We"re building comprehensive account configuration options. </p> </div> </div> </div> </>) }'';
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
import _React from 'react' export default Settings const Settings = () => { return (<> <Helmet> <title > Settings - Zion Tech Group</title> <meta name='description' content='Configure your Zion Tech Group account settings. Customize notifications,security,and preferences.' / / /> </Helmet> <div className='min - h-screen bg - gray - 50 py - 12'> <div className='max - w-7xl mx - auto px - 4 "sm": px: - 6 lg:px: - 8'> <div className='text - center mb - 12'> <h1 className='text - 4xl font - bold text - gray - 900 mb - 4'> Settings </h1> <p className='text - xl text - gray - 600 max - w-3xl mx - auto'> Configure your account setting,s,notifications,security preferences,and more. </p> </div> <div className='bg - white rounded - lg shadow - lg p - 8'> <p className='text - gray - 600 text - center'> Settings page coming soon. We"re building comprehensive account configuration options. </p> </div> </div> </div> </>) }'';
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
import _React from 'react' export default Settings const Settings = () => { return (<> <Helmet> <title > Settings - Zion Tech Group</title> <meta name='description' content='Configure your Zion Tech Group account settings. Customize notifications,security,and preferences.' / / /> </Helmet> <div className='min - h-screen bg - gray - 50 py - 12'> <div className='max - w-7xl mx - auto px - 4 "sm": px: - 6 lg:px: - 8'> <div className='text - center mb - 12'> <h1 className='text - 4xl font - bold text - gray - 900 mb - 4'> Settings </h1> <p className='text - xl text - gray - 600 max - w-3xl mx - auto'> Configure your account setting,s,notifications,security preferences,and more. </p> </div> <div className='bg - white rounded - lg shadow - lg p - 8'> <p className='text - gray - 600 text - center'> Settings page coming soon. We"re building comprehensive account configuration options. </p> </div> </div> </div> </>) }'';
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
