import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
  retryCount: number;
  lastErrorTime: number;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo, errorId: string) => void;
  enableErrorReporting?: boolean;
  enableRetry?: boolean;
  maxRetries?: number;
  retryDelay?: number;
  enableAnalytics?: boolean;
}

interface ErrorReport {
  errorId: string;
  error: {
    name: string;
    message: string;
    stack?: string;
  };
  errorInfo: {
    componentStack: string;
  };
  timestamp: string;
  userAgent: string;
  url: string;
  sessionId: string;
  retryCount: number;
  userId?: string;
  buildVersion?: string;
}

class EnhancedErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  private retryTimeoutId: NodeJS.Timeout | null = null;
  private sessionId: string;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
      retryCount: 0,
      lastErrorTime: 0,
    };
    this.sessionId = this.generateSessionId();
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
      errorId: Math.random().toString(36).substr(2, 9),
      lastErrorTime: Date.now(),
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { enableErrorReporting = true } = this.props;
    const { retryCount } = this.state;

    // Report error if enabled
    if (enableErrorReporting) {
      this.reportError(error, errorInfo, this.state.errorId, retryCount);
    }

    // Log error in development
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error('🚨 Error Boundary caught an error:', error);
      // eslint-disable-next-line no-console
      console.error('Error Info:', errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo, this.state.errorId);
    }

    // Report error to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.reportError(error, errorInfo, this.state.errorId, retryCount);
    }
  }

  private generateSessionId(): string {
    try {
      return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    } catch {
      return `session_${Date.now()}`;
    }
  }

  private reportError = (error: Error, errorInfo: ErrorInfo, errorId: string, retryCount: number) => {
    try {
      const errorReport: ErrorReport = {
        errorId,
        error: {
          name: error.name,
          message: error.message,
          stack: error.stack,
        },
        errorInfo: {
          componentStack: errorInfo.componentStack,
        },
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        sessionId: this.sessionId,
        retryCount,
        buildVersion: process.env.REACT_APP_VERSION || '1.0.0',
      };

      // Send to error monitoring service
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as unknown as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag('event', 'exception', {
          description: error.message,
          fatal: false,
          errorId,
        });
      }

      // Log error report in development
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log('Error Report:', errorReport);
      }
    } catch (reportingError) {
      // eslint-disable-next-line no-console
      console.error('Failed to report error:', reportingError);
    }
  };

  private handleRetry = () => {
    const { maxRetries = 3, retryDelay = 1000 } = this.props;
    const { retryCount } = this.state;

    if (retryCount < maxRetries) {
      this.setState(prevState => ({
        hasError: false,
        error: null,
        errorInfo: null,
        retryCount: prevState.retryCount + 1,
      }));
    } else {
      // eslint-disable-next-line no-console
      console.warn('Maximum retry attempts reached');
    }
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0,
    });
  };

  componentWillUnmount() {
    if (this.retryTimeoutId) {
      clearTimeout(this.retryTimeoutId);
    }
  }

  render() {
    const { hasError, error, errorInfo, errorId } = this.state;
    const { children, fallback, enableRetry = true } = this.props;

    if (hasError) {
      if (fallback) {
        return fallback;
      }

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
                          <pre className="mt-1 text-xs overflow-auto whitespace-pre-wrap">
                            {errorInfo.componentStack}
                          </pre>
                        </details>
                      )}
                    </div>
                  </details>
                </div>
              )}

              <div className="mt-6 space-y-3">
                {enableRetry && (
                  <button
                    onClick={this.handleRetry}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Try Again
                  </button>
                )}
                <button
                  onClick={this.handleReload}
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Reload Page
                </button>
                <button
                  onClick={this.handleReset}
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return children;
  }
}

export default EnhancedErrorBoundary;