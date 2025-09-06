
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
import React from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';
<<<<<<< HEAD
=======
const EnhancedLayout = ({ children }) => {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  return (
    <div className="min - h-screen flex flex - col">;
      <EnhancedNavigation />;
      <main className="flex - 1">;
        {children}
<<<<<<< HEAD
      </main>
      <EnhancedFooter />
    </div>

  );
}
export default EnhancedLayout;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
      </main>;
      <EnhancedFooter />;
    </div>);
},
export default EnhancedLayout;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
