'use client';

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
  }

  componentWillUnmount() {
    if (this.retryTimeoutId) {
      clearTimeout(this.retryTimeoutId);
    }
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
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
        userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'Unknown',
        url: typeof window !== 'undefined' ? window.location.href : 'Unknown',
        sessionId: this.sessionId,
        retryCount,
        buildVersion: process.env.NEXT_PUBLIC_BUILD_VERSION || 'unknown',
      };

      // Send to error reporting service
      if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
        // Example: Send to error reporting service
        // Uncomment to enable error reporting to a backend service
        /*
        await fetch('/api/error-report', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(errorReport),
        });
        */

        // Send to analytics if enabled
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (this.props.enableAnalytics && (window as any).gtag) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (window as any).gtag('event', 'exception', {
            description: error.message,
            fatal: false,
            custom_map: {
              error_id: errorId,
              component: errorInfo.componentStack?.split('\n')[0] || 'Unknown',
              retry_count: retryCount.toString(),
            },
          });
        }
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
  }

  private handleRetry = (): void => {
    const { maxRetries = 3, retryDelay = 1000 } = this.props;
    const { retryCount } = this.state;

    if (retryCount < maxRetries) {
      this.setState(
        (prevState) => ({
          hasError: false,
          error: null,
          errorInfo: null,
          retryCount: prevState.retryCount + 1,
        }),
        () => {
          // Retry after delay
          this.retryTimeoutId = setTimeout(() => {
            // Force re-render to retry
            this.forceUpdate();
          }, retryDelay);
        }
      );
    }
  };

  private handleReset = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0,
    });
  };

  render() {
    const { children, fallback, enableRetry = true, maxRetries = 3 } = this.props;
    const { hasError, error, errorInfo, retryCount } = this.state;

    if (hasError) {
      // Custom fallback UI
      if (fallback) {
        return fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
              <svg
                className="w-6 h-6 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            
            <div className="text-center">
              <h1 className="text-lg font-medium text-gray-900 mb-2">
                Something went wrong
              </h1>
              <p className="text-sm text-gray-600 mb-4">
                We're sorry, but something unexpected happened. Please try again.
              </p>
              
              {process.env.NODE_ENV === 'development' && error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-left">
                  <p className="text-xs text-red-800 font-mono">
                    <strong>Error:</strong> {error.message}
                  </p>
                  {errorInfo && (
                    <p className="text-xs text-red-700 font-mono mt-1">
                      <strong>Component Stack:</strong>
                      <br />
                      {errorInfo.componentStack}
                    </p>
                  )}
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                {enableRetry && retryCount < maxRetries && (
                  <button
                    onClick={this.handleRetry}
                    className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Try Again ({maxRetries - retryCount} attempts left)
                  </button>
                )}
                
                <button
                  onClick={this.handleReset}
                  className="px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Reset
                </button>
              </div>
              
              {retryCount >= maxRetries && (
                <p className="text-xs text-gray-500 mt-2">
                  Maximum retry attempts reached. Please refresh the page.
                </p>
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