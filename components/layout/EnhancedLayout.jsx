
;
  return (<div className='min-h-screen flex flex-col'>;

import React from 'react';'
import EnhancedNavigation from './EnhancedNavigation';'
import EnhancedFooter from './EnhancedFooter';'
  )
},

<<<<<<< HEAD
=======
export default EnhancedLayout;
import React from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';
const EnhancedLayout = ({ children }) => {

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from 'react';
import PropTypes from 'prop-types';
import EnhancedFooter from './EnhancedFooter';


<<<<<<< HEAD



  return (
    <div>
      <main>
        {children}




=======
;
  return (<div className="min-h-screen flex flex-col">;

import React from 'react';'
import EnhancedNavigation from './EnhancedNavigation';'
import EnhancedFooter from './EnhancedFooter';'
  )
},

export default EnhancedLayout;
>>>>>>> origin/cursor/delete-old-data-records-6bba
