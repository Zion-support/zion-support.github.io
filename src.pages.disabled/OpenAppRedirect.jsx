
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


import _React from 'react' export default OpenAppRedirect';



:src.pages.disabled/OpenAppRedirect.jsx
:src.pages.disabled/OpenAppRedirect.jsx
:src.pages.disabled/OpenAppRedirect.jsx
ursor/add-new-services-and-deploy-updates-0462
:src.pages.disabled/OpenAppRedirect.jsx
:temp_exclude/src.pages.disabled/OpenAppRedirect.jsx






:src.pages.disabled/OpenAppRedirect.jsx
