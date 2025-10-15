import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // In production, you might want to send this to an error reporting service
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to error reporting service
      // errorReportingService.captureException(error, { 
      //   extra: errorInfo,
      //   tags: { component: 'ErrorBoundary' },
      //   user: { id: this.state.errorId }
      // });
    }
  }

  handleRetry = () => {
    this.setState({ 
      hasError: false, 
      error: null, 
      errorInfo: null,
      errorId: null 
    });
  };

  handleReload = () => {
    window.location.reload();
  };

  handleReportError = () => {
    const { error, errorInfo, errorId } = this.state;
    if (error) {
      // In a real app, you might want to open a support ticket or send an email
      const errorReport = {
        errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo?.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href
      };
      
      console.log('Error Report:', errorReport);
      
      // You could send this to your error reporting service
      // errorReportingService.captureException(error, { extra: errorReport });
    }
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const { error, errorId } = this.state;
      const isDevelopment = process.env.NODE_ENV === 'development';

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900" role="alert" aria-live="polite">
          <div className="max-w-lg w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mx-4">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-100 dark:bg-red-900 rounded-full mb-4" aria-hidden="true">
              <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            
            <div className="text-center">
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                We're sorry, but something unexpected happened. Our team has been notified.
              </p>
              
              {isDevelopment && error && (
                <details className="mb-4 text-left">
                  <summary className="cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Error Details (Development)
                  </summary>
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-xs font-mono text-gray-800 dark:text-gray-200 overflow-auto max-h-32">
                    <div><strong>Error ID:</strong> {errorId}</div>
                    <div><strong>Message:</strong> {error.message}</div>
                    {error.stack && (
                      <div><strong>Stack:</strong><pre className="whitespace-pre-wrap">{error.stack}</pre></div>
                    )}
                  </div>
                </details>
              )}
              
              <div className="space-y-3">
                <button
                  onClick={this.handleRetry}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                  aria-label="Try to continue without reloading"
                >
                  Try Again
                </button>
                
                <button
                  onClick={this.handleReload}
                  className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
                  aria-label="Reload the page to try again"
                >
                  Reload Page
                </button>
                
                <button
                  onClick={this.handleReportError}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
                  aria-label="Report this error to our support team"
                >
                  Report Error
                </button>
              </div>
              
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                Error ID: {errorId}
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
