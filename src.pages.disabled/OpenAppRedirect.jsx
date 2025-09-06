
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
import React from \'react\' export default OpenAppRedirect\';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


import _React from 'react' export default OpenAppRedirect';


import _React from 'react' export default OpenAppRedirect';

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
:src.pages.disabled/OpenAppRedirect.jsx
import _React from 'react' export default OpenAppRedirect';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4:temp_exclude/src.pages.disabled/OpenAppRedirect.jsx
=======
:src.pages.disabled/OpenAppRedirect.jsx
import _React from 'react' export default OpenAppRedirect';
:src.pages.disabled/OpenAppRedirect.jsx
import _React from 'react' export default OpenAppRedirect';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import _React from 'react' export default OpenAppRedirect';
ursor/add-new-services-and-deploy-updates-0462
:src.pages.disabled/OpenAppRedirect.jsx
import _React from 'react' export default OpenAppRedirect';
:temp_exclude/src.pages.disabled/OpenAppRedirect.jsx
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======



import _React from 'react' export default OpenAppRedirect';


import _React from 'react' export default OpenAppRedirect';

:src.pages.disabled/OpenAppRedirect.jsx
import _React from 'react' export default OpenAppRedirect';
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import _React from 'react' export default OpenAppRedirect';
import _React from 'react' export default OpenAppRedirect';
import _React from 'react' export default OpenAppRedirect';
import _React from 'react' export default OpenAppRedirect';
