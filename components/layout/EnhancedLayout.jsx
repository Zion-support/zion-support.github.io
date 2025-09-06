<<<<<<< HEAD
<<<<<<< HEAD

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
    <div className="min-h-screen flex flex-col">;
      <EnhancedNavigation />;
      <main className="flex-1">;
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
import React from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';
  )
};
export default EnhancedLayout;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
