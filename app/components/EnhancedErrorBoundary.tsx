import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  enableErrorReporting?: boolean;
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
    this.setState({
      error,
      errorInfo,
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error('🚨 Error Boundary caught an error:', error);
      // eslint-disable-next-line no-console
      console.error('Error Info:', errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Report error to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.reportError(error, errorInfo);
>>>>>>> e63efe09618661008f9e1f2fa8c21e8a7549bc53
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Send error to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to error monitoring service
      // errorMonitoringService.captureException(error, { extra: errorInfo });
    }
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    // Here you would typically send the error to an external service
    // like Sentry, LogRocket, or your own error reporting service
    console.error('Error reported:', {
      error: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
    });
  };

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  private handleReload = () => {
    window.location.reload();
  };

  render() {
    const { children, fallback } = this.props;
    const { hasError, error, errorInfo } = this.state;

    if (hasError) {
      if (fallback) {
        return fallback;
      }

      const errorId = Math.random().toString(36).substr(2, 9);

      return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                  <svg
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                  Oops! Something went wrong
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  We&apos;re sorry, but something unexpected happened. Our team has been notified.
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Error ID: {errorId}
                </p>
              </div>

              {process.env.NODE_ENV === 'development' && error && (
                <div className="mt-6">
                  <details className="bg-red-50 border border-red-200 rounded-md p-4">
                    <summary className="cursor-pointer font-medium text-red-800">
                      Error Details (Development Only)
                    </summary>
                    <div className="mt-2 text-sm text-red-700">
                      <p><strong>Error:</strong> {error.name}: {error.message}</p>
                      {error.stack && (
                        <pre className="mt-2 text-xs overflow-auto whitespace-pre-wrap">
                          {error.stack}
                        </pre>
                      )}
                      {errorInfo && (
                        <details className="mt-2">
                          <summary className="cursor-pointer font-medium">Component Stack</summary>
                </div>
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                  Oops! Something went wrong
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  We&apos;re sorry, but something unexpected happened. Our team has been notified.
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Error ID: {errorId}
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <button
                  onClick={this.handleRetry}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Try Again
                </button>
                <button
                  onClick={this.handleReload}
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Reload Page
                </button>
                <a
                  href="/"
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Go to Homepage
                </a>
              </div>

              {process.env.NODE_ENV === 'development' && error && (
                <div className="mt-6">
                  <details className="bg-red-50 border border-red-200 rounded-md p-4">
                    <summary className="cursor-pointer font-medium text-red-800">
                      Error Details (Development Only)
                    </summary>
                    <div className="mt-2 text-sm text-red-700">
                      <p><strong>Error:</strong> {error.name}: {error.message}</p>
                      {error.stack && (
                        <pre className="mt-2 text-xs overflow-auto whitespace-pre-wrap">
                          {error.stack}
                        </pre>
                      )}
                      {errorInfo && (
                        <details className="mt-2">
                          <summary className="cursor-pointer font-medium">Component Stack</summary>
                          <pre className="mt-2 text-xs overflow-auto whitespace-pre-wrap">
                            {errorInfo.componentStack}
                          </pre>
                        </details>
                      )}
                    </div>
                  </details>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    return children;
  }
}

export default EnhancedErrorBoundary;