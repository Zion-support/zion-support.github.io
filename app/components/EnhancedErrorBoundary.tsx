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
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      lastErrorTime: Date.now(),
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { onError, enableErrorReporting = true } = this.props;
    const { errorId, retryCount } = this.state;

    // Update state with error info
    this.setState({
      errorInfo,
    });

    // Call custom error handler
    if (onError) {
      onError(error, errorInfo, errorId);
    }

    // Report error if enabled
    if (enableErrorReporting) {
      this.reportError(error, errorInfo, errorId, retryCount);
    }

    // Log error in development
    if (process.env.NODE_ENV === 'development') {
      console.error('🚨 Error Boundary caught an error:', error);
      console.error('Error Info:', errorInfo);
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

  private generateSessionId(): string {
    try {
      return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    } catch {
      return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
  }

  private async reportError(
    error: Error,
    errorInfo: ErrorInfo,
    errorId: string,
    retryCount: number
  ): Promise<void> {
    try {
      const errorReport: ErrorReport = {
        errorId,
        error: {
          name: error.name,
          message: error.message,
          stack: error.stack,
        },
        errorInfo: {
          componentStack: errorInfo.componentStack || '',
        },
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        sessionId: this.sessionId,
        retryCount,
        userId: this.getUserId(),
        buildVersion: process.env.REACT_APP_VERSION || 'unknown',
      };

      // Send to error reporting service
      await fetch('/api/error-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorReport),
      });

      // Send to analytics if enabled
      if (this.props.enableAnalytics && typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', 'error_boundary_error', {
          event_category: 'Error',
          event_label: error.name,
          value: retryCount,
        });
      }
    } catch (reportError) {
      console.error('Failed to report error:', reportError);
    }
  }

  private getUserId(): string | undefined {
    try {
      // Try to get user ID from localStorage or other sources
      return localStorage.getItem('userId') || undefined;
    } catch {
      return undefined;
    }
  }

  private handleRetry = (): void => {
    const { maxRetries = 3, retryDelay = 1000 } = this.props;
    const { retryCount } = this.state;

    if (retryCount >= maxRetries) {
      return;
    }

    // Clear any existing timeout
    if (this.retryTimeoutId) {
      clearTimeout(this.retryTimeoutId);
    }

    // Retry after delay
    this.retryTimeoutId = setTimeout(() => {
      this.setState(prevState => ({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: '',
        retryCount: prevState.retryCount + 1,
      }));
    }, retryDelay);
  };

  private handleReload = (): void => {
    window.location.reload();
  };

  private handleGoHome = (): void => {
    window.location.href = '/';
  };

  private handleReportBug = (): void => {
    const { error, errorId } = this.state;
    const subject = encodeURIComponent(`Error Report - ${errorId}`);
    const body = encodeURIComponent(`
Error ID: ${errorId}
Error: ${error?.name}: ${error?.message}
URL: ${window.location.href}
User Agent: ${navigator.userAgent}
Time: ${new Date().toISOString()}
    `);
    
    window.open(`mailto:support@ziontechgroup.com?subject=${subject}&body=${body}`);
  };

  componentWillUnmount() {
    if (this.retryTimeoutId) {
      clearTimeout(this.retryTimeoutId);
    }
  }

  render() {
    const { hasError, error, errorInfo, errorId, retryCount } = this.state;
    const { children, fallback, enableRetry = true, maxRetries = 3 } = this.props;

    if (hasError) {
      if (fallback) {
        return fallback;
      }

      return (
        <div className='min-h-screen flex items-center justify-center bg-gray-50 px-4'>
          <div className='max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center'>
            <div className='mb-4'>
              <div className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100'>
                <svg
                  className='h-6 w-6 text-red-600'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z'
                  />
                </svg>
              </div>
            </div>

            <h1 className='text-lg font-medium text-gray-900 mb-2'>
              Something went wrong
            </h1>

            <p className='text-sm text-gray-600 mb-6'>
              We&apos;re sorry, but something unexpected happened. Please try again
              or contact support if the problem persists.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className='mb-4 text-left'>
                <summary className='cursor-pointer text-sm font-medium text-gray-700 mb-2'>
                  Error Details (Development)
                </summary>
                <div className='bg-gray-100 p-3 rounded text-xs font-mono text-gray-800 overflow-auto'>
                  <div className='mb-2'>
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong>Component Stack:</strong>
                      <pre className='mt-1 whitespace-pre-wrap'>
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
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
                          <pre className="mt-2 text-xs overflow-auto whitespace-pre-wrap">
                            {errorInfo.componentStack}
                          </pre>
                        </details>
                      )}
                    </div>
                  </details>
                </div>
              )}

              <div className="mt-6 space-y-3">
                {enableRetry && retryCount < maxRetries && (
                  <button
                    onClick={this.handleRetry}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={retryCount >= maxRetries}
                  >
                    Try Again ({maxRetries - retryCount} attempts left)
                  </button>
                )}
                
                <button
                  onClick={this.handleReload}
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Reload Page
                </button>
                
                <button
                  onClick={this.handleGoHome}
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Go to Homepage
                </button>

                <button
                  onClick={this.handleReportBug}
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Report Bug
                </button>
              </div>

              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">
                  If this problem persists, please contact our support team at{' '}
                  <a
                    href="mailto:support@ziontechgroup.com"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    support@ziontechgroup.com
                  </a>
                </p>
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