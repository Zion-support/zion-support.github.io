
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

=======

import _React from 'react' export default OpenAppRedirect';

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
:src.pages.disabled/OpenAppRedirect.jsx
import _React from 'react' export default OpenAppRedirect';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4:temp_exclude/src.pages.disabled/OpenAppRedirect.jsx
import _React from 'react' export default OpenAppRedirect';
import _React from 'react' export default OpenAppRedirect';
import _React from 'react' export default OpenAppRedirect';
import _React from 'react' export default OpenAppRedirect';

