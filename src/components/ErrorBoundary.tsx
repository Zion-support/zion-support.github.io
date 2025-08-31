import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  resetKeys?: any[];
  retryCount?: number;
  maxRetries?: number;
  showErrorDetails?: boolean;
  enableErrorReporting?: boolean;
  errorReportingEndpoint?: string;
  enableRecovery?: boolean;
  recoveryTimeout?: number;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  retryCount: number;
  isRecovering: boolean;
  lastErrorTime: number;
  errorStack: string[];
}

export class ErrorBoundary extends Component<Props, State> {
  private errorReportingTimeout: NodeJS.Timeout | null = null;
  private recoveryTimeout: NodeJS.Timeout | null = null;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0,
      isRecovering: false,
      lastErrorTime: 0,
      errorStack: [],
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      lastErrorTime: Date.now(),
      errorStack: error.stack ? error.stack.split('\n').slice(0, 10) : [],
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      errorInfo,
    });

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Report error to external service if enabled
    if (this.props.enableErrorReporting) {
      this.reportError(error, errorInfo);
    }

    // Log error for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    // Attempt recovery if enabled
    if (this.props.enableRecovery) {
      this.attemptRecovery();
    }
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    // Reset error state when resetKeys change
    if (this.props.resetKeys && prevProps.resetKeys !== this.props.resetKeys) {
      this.resetErrorState();
    }

    // Check if we should attempt recovery
    if (this.state.hasError && !prevState.hasError && this.props.enableRecovery) {
      this.attemptRecovery();
    }
  }

  componentWillUnmount() {
    // Clean up timeouts
    if (this.errorReportingTimeout) {
      clearTimeout(this.errorReportingTimeout);
    }
    if (this.recoveryTimeout) {
      clearTimeout(this.recoveryTimeout);
    }
  }

  private reportError = async (error: Error, errorInfo: ErrorInfo) => {
    if (!this.props.errorReportingEndpoint) return;

    try {
      const errorReport = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        retryCount: this.state.retryCount,
        sessionId: this.getSessionId(),
      };

      // Debounce error reporting to avoid spam
      if (this.errorReportingTimeout) {
        clearTimeout(this.errorReportingTimeout);
      }

      this.errorReportingTimeout = setTimeout(async () => {
        try {
          await fetch(this.props.errorReportingEndpoint!, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(errorReport),
          });
        } catch (reportError) {
          console.warn('Failed to report error:', reportError);
        }
      }, 1000);
    } catch (reportError) {
      console.warn('Error reporting failed:', reportError);
    }
  };

  private attemptRecovery = () => {
    const { maxRetries = 3, recoveryTimeout = 5000 } = this.props;
    const { retryCount, lastErrorTime } = this.state;

    // Check if we've exceeded max retries
    if (retryCount >= maxRetries) {
      console.warn('Max retry attempts exceeded');
      return;
    }

    // Check if enough time has passed since last error
    const timeSinceLastError = Date.now() - lastErrorTime;
    if (timeSinceLastError < recoveryTimeout) {
      console.log('Waiting before attempting recovery...');
      return;
    }

    this.setState({ isRecovering: true });

    // Attempt recovery after timeout
    this.recoveryTimeout = setTimeout(() => {
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        retryCount: retryCount + 1,
        isRecovering: false,
      });
    }, recoveryTimeout);
  };

  private resetErrorState = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0,
      isRecovering: false,
      lastErrorTime: 0,
      errorStack: [],
    });
  };

  private handleRetry = () => {
    this.resetErrorState();
  };

  private handleReset = () => {
    this.resetErrorState();
    // Force a complete re-render
    window.location.reload();
  };

  private getSessionId = (): string => {
    // Generate a simple session ID for error tracking
    if (!sessionStorage.getItem('errorBoundarySessionId')) {
      const sessionId = Math.random().toString(36).substring(2, 15);
      sessionStorage.setItem('errorBoundarySessionId', sessionId);
    }
    return sessionStorage.getItem('errorBoundarySessionId') || 'unknown';
  };

  private getErrorContext = (): string => {
    const { error, errorInfo } = this.state;
    if (!error || !errorInfo) return 'Unknown error context';

    // Extract component name from component stack
    const componentStack = errorInfo.componentStack;
    const componentMatch = componentStack.match(/in\s+(\w+)/);
    const componentName = componentMatch ? componentMatch[1] : 'Unknown Component';

    return `${componentName}: ${error.name}`;
  };

  render() {
    const {
      children,
      fallback,
      showErrorDetails = false,
      enableRecovery = false,
    } = this.props;

    const {
      hasError,
      error,
      errorInfo,
      retryCount,
      isRecovering,
      errorStack,
    } = this.state;

    if (hasError) {
      // Custom fallback UI
      if (fallback) {
        return fallback;
      }

      // Default error UI
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 flex items-center justify-center p-4"
        >
          <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl border border-red-200 overflow-hidden">
            {/* Error Header */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 px-6 py-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">Application Error</h1>
                  <p className="text-red-100 text-sm">Something went wrong</p>
                </div>
              </div>
            </div>

            {/* Error Content */}
            <div className="px-6 py-6">
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  {this.getErrorContext()}
                </h2>
                <p className="text-gray-600 mb-4">
                  {error?.message || 'An unexpected error occurred while rendering this component.'}
                </p>

                {showErrorDetails && error && (
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Error Details:</h3>
                    <div className="text-xs text-gray-600 font-mono space-y-1">
                      <div><strong>Type:</strong> {error.name}</div>
                      <div><strong>Message:</strong> {error.message}</div>
                      {errorStack.length > 0 && (
                        <div>
                          <strong>Stack:</strong>
                          <div className="mt-1 ml-2">
                            {errorStack.map((line, index) => (
                              <div key={index} className="text-gray-500">{line}</div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {retryCount > 0 && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-blue-700">
                        Recovery attempt {retryCount} of {this.props.maxRetries || 3}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={this.handleRetry}
                  disabled={isRecovering}
                  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
                >
                  {isRecovering ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Recovering...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <span>Try Again</span>
                    </>
                  )}
                </button>

                <button
                  onClick={this.handleReset}
                  className="flex-1 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>Reset App</span>
                </button>

                <button
                  onClick={() => window.history.back()}
                  className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span>Go Back</span>
                </button>
              </div>

              {/* Help Section */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 text-center">
                  If this problem persists, please contact our support team or check our{' '}
                  <a href="/support" className="text-blue-500 hover:text-blue-600 underline">
                    support documentation
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      );
    }

    return children;
  }
}

// Hook for functional components to handle errors
export const useErrorHandler = () => {
  const [error, setError] = React.useState<Error | null>(null);

  const handleError = React.useCallback((error: Error) => {
    setError(error);
    console.error('Error caught by useErrorHandler:', error);
  }, []);

  const clearError = React.useCallback(() => {
    setError(null);
  }, []);

  return { error, handleError, clearError };
};

// Higher-order component for error handling
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Partial<Props>
) => {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  );

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  return WrappedComponent;
};

// Global error handler for unhandled errors
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    console.error('Unhandled error:', event.error);
  });

  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
  });
}
