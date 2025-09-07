<<<<<<< HEAD:src.disabled/src/pages.disabled/KnowledgeBase.tsx
import * as React from 'react';
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
import React from 'react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:backup-problematic-files/src.pages.disabled/AIAnalytics.jsx

  return (

    <div className={className || ''}>
      <h1>KnowledgeBase</h1>
      <p>This component is under development.</p>
    </div>

}

};