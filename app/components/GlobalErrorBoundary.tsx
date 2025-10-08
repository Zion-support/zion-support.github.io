import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class GlobalErrorBoundary extends Component<Props, State> {
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
      errorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Send error to monitoring service
    this.logErrorToService(error, errorInfo);
  }

  logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    // Send to error monitoring service (Sentry, LogRocket, etc.)
    if (typeof window !== 'undefined') {
      const errorData = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        userId: this.getUserId(),
        sessionId: this.getSessionId()
      };

      // Send to analytics
      if ((window as any).gtag) {
        (window as any).gtag('event', 'exception', {
          description: error.message,
          fatal: false,
          custom_map: {
            error_stack: error.stack,
            component_stack: errorInfo.componentStack
          }
        });
      }

      // Send to custom error endpoint
      fetch('/api/error-reporting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorData)
      }).catch(err => {
        console.error('Failed to send error report:', err);
      });
    }
  };

  getUserId = (): string | undefined => {
    // Get user ID from localStorage, session, or auth context
    return localStorage.getItem('userId') || undefined;
  };

  getSessionId = (): string => {
    // Generate or retrieve session ID
    let sessionId = sessionStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = Math.random().toString(36).substring(2) + Date.now().toString(36);
      sessionStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
  };

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
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
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  Oops! Something went wrong
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                  We're sorry, but something unexpected happened. Our team has been notified.
                </p>
              </div>

              <div className="mt-6">
                <div className="flex flex-col space-y-3">
                  <button
                    onClick={this.handleRetry}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Try Again
                  </button>
                  <button
                    onClick={this.handleReload}
                    className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Reload Page
                  </button>
                  <a
                    href="/"
                    className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Go Home
                  </a>
                </div>
              </div>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-md">
                  <h3 className="text-sm font-medium text-red-800 mb-2">Error Details (Development Only)</h3>
                  <pre className="text-xs text-red-700 whitespace-pre-wrap overflow-auto max-h-40">
                    {this.state.error.toString()}
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export { GlobalErrorBoundary };