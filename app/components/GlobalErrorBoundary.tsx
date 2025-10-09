import React, { Component, ErrorInfo, ReactNode } from 'react';
import EnhancedErrorBoundary from './EnhancedErrorBoundary';

interface Props {
  children: ReactNode;
}

class GlobalErrorBoundary extends Component<Props> {
  render() {
    return (
      <EnhancedErrorBoundary
        enableErrorReporting={true}
        maxRetries={3}
        onError={(error, errorInfo) => {
          // Global error handling
          console.error('Global error caught:', error, errorInfo);
        }}
      >
        {this.props.children}
      </EnhancedErrorBoundary>
    );
  }
}

export { GlobalErrorBoundary };