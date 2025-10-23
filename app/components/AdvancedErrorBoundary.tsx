import React, { Component, ErrorInfo, ReactNode } from 'react';
import { logger } from '../utils/logger';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableErrorReporting?: boolean;
  enableRetry?: boolean;
}

interface ErrorReport {
  errorId: string | null;
  error: Error;
  errorInfo: ErrorInfo;
  message: string;
  stack: string | undefined;
  componentStack: string | null | undefined;
  timestamp: string;
  userAgent: string;
  url: string;
  userId: string | null;
  sessionId: string;
}

class AdvancedErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  private retryCount = 0;
  private maxRetries = 3;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      logger.error(
        'Error Boundary caught an error',
        error,
        { context: 'ErrorBoundary', errorInfo }
      );
    }

    // Call custom error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Report error to external service
    if (this.props.enableErrorReporting) {
      this.reportError(error, errorInfo);
    }
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    const errorReport: ErrorReport = {
      errorId: this.state.errorId || this.generateErrorId(),
      error,
      errorInfo,
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: this.getUserId(),
      sessionId: this.getSessionId(),
    };

    // Send to error reporting service
    this.sendErrorReport(errorReport);
  };

  private getUserId = (): string | null => {
    // Try to get user ID from localStorage or other sources
    try {
      return localStorage.getItem('userId') || null;
    } catch {
      return null;
    }
  };

  private getSessionId = (): string => {
    // Generate or retrieve session ID
    try {
      let sessionId = sessionStorage.getItem('sessionId');
      if (!sessionId) {
        sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        sessionStorage.setItem('sessionId', sessionId);
      }
      return sessionId;
    } catch {
      return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
  };

  private generateErrorId = (): string => {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  private sendErrorReport = async (errorReport: ErrorReport) => {
    try {
      // Send to your error reporting service
      await fetch('/api/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorReport),
      });
    } catch (reportError) {
      logger.error(
        'Failed to send error report',
        reportError as Error,
        { context: 'ErrorReporting' }
      );
    }
  };

  private handleRetry = () => {
    if (this.retryCount < this.maxRetries) {
      this.retryCount++;
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: null,
      });
    }
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
          <div className='sm:mx-auto sm:w-full sm:max-w-md'>
            <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
              <div className='text-center'>
                <div className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100'>
                  <svg
                    className='h-6 w-6 text-red-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path> </path>svg>
                </div>
                <h2>Oops! Something went wrong
                </h2>
                <p>We&apos;re sorry, but something unexpected happened. Our team
                  has been notified.
                </p>
              </div>

              {process.env.NODE_ENV === 'development' && (
                <div className='mt-6 bg-red-50 border border-red-200 rounded-md p-4'>
                  <h3>Error Details:
                  </h3>
                  <div className='mt-2 text-sm text-red-700'>
                    <p>
                      <strong>Error ID:</strong> {this.state.errorId}
                    </p>
                    <p>
                      <strong>Message:</strong> {this.state.error?.message}
                    </p>
                    <details className='mt-2'>
                      <summary>Stack Trace
                      </summary>
                      <pre>{this.state.error?.stack}
                      </pre>
                    </details>
                    <details className='mt-2'>
                      <summary>Component Stack
                      </summary>
                      <pre>{this.state.errorInfo?.componentStack}
                      </pre>
                    </details>
                  </div>
                </div>
              )}

              <div className='mt-6 space-y-3'>
                {this.props.enableRetry &&
                  this.retryCount < this.maxRetries && (
                    <button>Try Again ({this.maxRetries - this.retryCount} attempts
                      left)
                    </button>
                  )}

                <button>Reload Page
                </button>

                <button>Go to Homepage
                </button>
              </div>

              <div className='mt-6 text-center'>
                <p className='text-xs text-gray-500'>
                  If this problem persists, please contact our support team
                  at&nbsp;
                  <a>kleber@ziontechgroup.com
                  </a>
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

export default AdvancedErrorBoundary;
