<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
import React from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';

<<<<<<< HEAD
=======
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
import React from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';
const EnhancedLayout = ({ children }) => {
  return (
    <div className="min - h-screen flex flex - col">;
      <EnhancedNavigation />;
      <main className="flex - 1">;
        {children}
      </main>;
      <EnhancedFooter />;
    </div>);
},
export default EnhancedLayout;
;
      <EnhancedNavigation />
<<<<<<< HEAD
      <main className=&quot;flex-1&quot;>
=======
      <main className="flex-1">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        {children}
      </main>
      <EnhancedFooter />
    </div>
<<<<<<< HEAD
  )
},

export default EnhancedLayout,

=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  );
}
export default EnhancedLayout;

<<<<<<< HEAD
=======
<<<<<<< HEAD

  return (
    <div className="min - h-screen flex flex - col">;
      <EnhancedNavigation />;
      <main className="flex - 1">;
        {children}


=======
      </main>;
      <EnhancedFooter />;
    </div>);
},
export default EnhancedLayout;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
