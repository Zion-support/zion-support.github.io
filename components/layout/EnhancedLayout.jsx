
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import React from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <div className="min - h-screen flex flex - col">;
      <EnhancedNavigation />;
      <main className="flex - 1">;
        {children}
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  );
}
export default EnhancedLayout;

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
      </main>;
      <EnhancedFooter />;
    </div>);
},
export default EnhancedLayout;
;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
