<<<<<<< HEAD
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

  );
}
export default EnhancedLayout;
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
