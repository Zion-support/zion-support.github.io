import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
  retryCount: number;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo, errorId: string) => void;
  maxRetries?: number;
  enableReporting?: boolean;
  enableRecovery?: boolean;
}

class EnhancedErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  private retryTimeoutId: NodeJS.Timeout | null = null;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
      retryCount: 0
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { onError, enableReporting = true } = this.props;
    const { errorId } = this.state;

    // Update state with error info
    this.setState({
      error,
      errorInfo,
      errorId
    });

    // Report error to external service
    if (enableReporting) {
      this.reportError(error, errorInfo, errorId);
    }

    // Call custom error handler
    if (onError) {
      onError(error, errorInfo, errorId);
    }

    // Log error for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  private reportError = (error: Error, errorInfo: ErrorInfo, errorId: string) => {
    const errorReport = {
      errorId,
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: localStorage.getItem('analytics_user_id') || 'anonymous',
      sessionId: localStorage.getItem('analytics_session_id') || 'unknown'
    };

    // Send to error reporting service
    if (typeof (window as Window & { gtag?: (command: string, event: string, data: Record<string, unknown>) => void }).gtag === 'function') {
      (window as Window & { gtag: (command: string, event: string, data: Record<string, unknown>) => void }).gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: {
          error_id: errorId,
          component_stack: errorInfo.componentStack
        }
      });
    }

    // Store error locally for debugging
    const errors = JSON.parse(localStorage.getItem('error_reports') || '[]');
    errors.push(errorReport);
    localStorage.setItem('error_reports', JSON.stringify(errors.slice(-50))); // Keep last 50 errors

    // Send to external error reporting service (if configured)
    if (process.env.REACT_APP_ERROR_REPORTING_URL) {
      fetch(process.env.REACT_APP_ERROR_REPORTING_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorReport)
      }).catch(err => {
        console.warn('Failed to send error report:', err);
      });
    }
  };

  private handleRetry = () => {
    const { maxRetries = 3 } = this.props;
    const { retryCount } = this.state;

    if (retryCount < maxRetries) {
      this.setState(prevState => ({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: '',
        retryCount: prevState.retryCount + 1
      }));
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
      errorId: '',
      retryCount: 0
    });
  };

  componentDidMount() {
    // Set up global error handler for unhandled errors
    window.addEventListener('unhandledrejection', this.handleUnhandledRejection);
    window.addEventListener('error', this.handleGlobalError);
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.handleUnhandledRejection);
    window.removeEventListener('error', this.handleGlobalError);
    
    if (this.retryTimeoutId) {
      clearTimeout(this.retryTimeoutId);
    }
  }

  private handleUnhandledRejection = (event: PromiseRejectionEvent) => {
    const error = new Error(`Unhandled Promise Rejection: ${event.reason}`);
    this.reportError(error, { componentStack: 'Global Promise Rejection' } as ErrorInfo, `promise_${Date.now()}`);
  };

  private handleGlobalError = (event: ErrorEvent) => {
    const error = new Error(event.message);
    error.stack = `Global Error: ${event.filename}:${event.lineno}:${event.colno}`;
    this.reportError(error, { componentStack: 'Global Error Handler' } as ErrorInfo, `global_${Date.now()}`);
  };

  render() {
    const { hasError, error, errorInfo, errorId, retryCount } = this.state;
    const { children, fallback, maxRetries = 3, enableRecovery = true } = this.props;
    // Note: children is used in the return statement below

    if (hasError) {
      // Use custom fallback if provided
      if (fallback) {
        return fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 text-red-500">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Oops! Something went wrong
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                We&apos;re sorry, but something unexpected happened. Our team has been notified.
              </p>
              {process.env.NODE_ENV === 'development' && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
                  <h3 className="text-sm font-medium text-red-800">Error Details:</h3>
                  <p className="mt-1 text-sm text-red-700">
                    <strong>Error ID:</strong> {errorId}
                  </p>
                  <p className="mt-1 text-sm text-red-700">
                    <strong>Message:</strong> {error?.message}
                  </p>
                  {errorInfo && (
                    <details className="mt-2">
                      <summary className="text-sm font-medium text-red-800 cursor-pointer">
                        Component Stack
                      </summary>
                      <pre className="mt-1 text-xs text-red-600 whitespace-pre-wrap">
                        {errorInfo.componentStack}
                      </pre>
                    </details>
                  )}
                </div>
              )}
            </div>

            <div className="mt-8 space-y-4">
              {enableRecovery && retryCount < maxRetries && (
                <button
                  onClick={this.handleRetry}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Try Again ({maxRetries - retryCount} attempts left)
                </button>
              )}

              <button
                onClick={this.handleReset}
                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Reset Application
              </button>

              <button
                onClick={this.handleReload}
                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Reload Page
              </button>

              <div className="text-center">
                <p className="text-xs text-gray-500">
                  If the problem persists, please contact support with Error ID: {errorId}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;