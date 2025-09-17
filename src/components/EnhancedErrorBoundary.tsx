import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
    
    // Report to error tracking service in production
    if (process.env.NODE_ENV === 'production') {
      // Here you would integrate with services like Sentry, LogRocket, etc.
      console.error('Production error:', error);
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-red-900 via-gray-900 to-red-800 text-white flex items-center justify-center p-4">
          <div className="text-center max-w-2xl mx-auto">
            <div className="mb-8">
              <div className="text-6xl mb-4">⚠️</div>
              <h1 className="text-3xl font-bold mb-4 text-red-300">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-300 mb-6 text-lg">
                We encountered an unexpected error. Don't worry, our team has been notified.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 mb-8 text-left">
              <h2 className="text-xl font-semibold mb-3 text-red-300">Error Details:</h2>
              <p className="text-sm text-gray-300 mb-2">
                <strong>Error:</strong> {this.state.error?.message || 'Unknown error'}
              </p>
              {process.env.NODE_ENV === 'development' && this.state.errorInfo && (
                <details className="mt-4">
                  <summary className="cursor-pointer text-blue-300 hover:text-blue-200">
                    Stack Trace
                  </summary>
                  <pre className="mt-2 text-xs text-gray-400 overflow-auto max-h-40 bg-gray-900 p-3 rounded">
                    {this.state.errorInfo.componentStack}
                  </pre>
                </details>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleRetry}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Try Again
              </button>
              <button
                onClick={() => window.location.reload()}
                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Reload Page
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Go Home
              </button>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>If this problem persists, please contact our support team.</p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;