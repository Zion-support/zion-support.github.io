
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('Error caught by boundary:', error, errorInfo);
    
    // Send error to monitoring service
    if (typeof gtag !== 'undefined') {
      gtag('event', 'exception', {
        description: error.message,
        fatal: false
      });
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
            <h2 className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
              Something went wrong
            </h2>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
