import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showErrorDetails?: boolean;
  enableRecovery?: boolean;
  maxRetries?: number;
  retryDelay?: number;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  retryCount: number;
  isRecovering: boolean;
  errorId: string;
  userAgent: string;
  timestamp: string;
  componentStack: string;
}

interface ErrorReport {
  errorId: string;
  timestamp: string;
  error: {
    name: string;
    message: string;
    stack: string;
  };
  errorInfo: {
    componentStack: string;
  };
  userAgent: string;
  url: string;
  retryCount: number;
  sessionId: string;
}

export class ErrorBoundary extends Component<Props, State> {
  private retryTimeout: NodeJS.Timeout | null = null;
  private sessionId: string;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0,
      isRecovering: false,
      errorId: '',
      userAgent: '',
      timestamp: '',
      componentStack: ''
    };
    
    // Generate unique session ID for error tracking
    this.sessionId = this.generateSessionId();
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      errorInfo,
      componentStack: errorInfo.componentStack
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error Boundary caught an error:', error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Report error to external service
    this.reportError(error, errorInfo);

    // Track error in analytics
    this.trackError(error);
  }

  componentWillUnmount() {
    if (this.retryTimeout) {
      clearTimeout(this.retryTimeout);
    }
  }

  private generateSessionId(): string {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  private reportError(error: Error, errorInfo: ErrorInfo) {
    const errorReport: ErrorReport = {
      errorId: this.state.errorId,
      timestamp: this.state.timestamp,
      error: {
        name: error.name,
        message: error.message,
        stack: error.stack || ''
      },
      errorInfo: {
        componentStack: errorInfo.componentStack
      },
      userAgent: this.state.userAgent,
      url: window.location.href,
      retryCount: this.state.retryCount,
      sessionId: this.sessionId
    };

    // Send error report to external service (e.g., Sentry, LogRocket)
    this.sendErrorReport(errorReport);

    // Store error in localStorage for debugging
    this.storeErrorLocally(errorReport);
  }

  private sendErrorReport(errorReport: ErrorReport) {
    // Example: Send to external error reporting service
    if (process.env.REACT_APP_ERROR_REPORTING_URL) {
      fetch(process.env.REACT_APP_ERROR_REPORTING_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorReport),
      }).catch(() => {
        // Silently fail if error reporting fails
      });
    }
  }

  private storeErrorLocally(errorReport: ErrorReport) {
    try {
      const existingErrors = JSON.parse(localStorage.getItem('zion_errors') || '[]');
      existingErrors.push(errorReport);
      
      // Keep only last 10 errors
      if (existingErrors.length > 10) {
        existingErrors.splice(0, existingErrors.length - 10);
      }
      
      localStorage.setItem('zion_errors', JSON.stringify(existingErrors));
    } catch {
      // Silently fail if localStorage is not available
    }
  }

  private trackError(error: Error) {
    // Track error in analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: true,
        error_id: this.state.errorId
      });
    }
  }

  private handleRetry = () => {
    const { maxRetries = 3, retryDelay = 1000 } = this.props;
    
    if (this.state.retryCount >= maxRetries) {
      this.handleReset();
      return;
    }

    this.setState(prevState => ({
      retryCount: prevState.retryCount + 1,
      isRecovering: true
    }));

    // Attempt recovery after delay
    this.retryTimeout = setTimeout(() => {
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        isRecovering: false
      });
    }, retryDelay * (this.state.retryCount + 1));
  };

  private handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0,
      isRecovering: false,
      errorId: '',
      userAgent: '',
      timestamp: '',
      componentStack: ''
    });

    // Clear any pending retry
    if (this.retryTimeout) {
      clearTimeout(this.retryTimeout);
      this.retryTimeout = null;
    }
  };

  private handleReportToSupport = () => {
    const { error, errorId, timestamp } = this.state;
    
    if (error) {
      const subject = encodeURIComponent(`Error Report - ${errorId}`);
      const body = encodeURIComponent(`
Error Details:
- Error ID: ${errorId}
- Timestamp: ${timestamp}
- Error: ${error.message}
- URL: ${window.location.href}
- User Agent: ${navigator.userAgent}

Please describe what you were doing when this error occurred:
      `);
      
      window.open(`mailto:support@ziontechgroup.com?subject=${subject}&body=${body}`);
    }
  };

  private handleCopyErrorDetails = () => {
    const { error, errorInfo, errorId, timestamp } = this.state;
    
    if (error && errorInfo) {
      const errorDetails = `
Error ID: ${errorId}
Timestamp: ${timestamp}
Error: ${error.message}
Stack: ${error.stack}
Component Stack: ${errorInfo.componentStack}
URL: ${window.location.href}
User Agent: ${navigator.userAgent}
      `;
      
      navigator.clipboard.writeText(errorDetails).then(() => {
        // Show success message
        this.showToast('Error details copied to clipboard');
      }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = errorDetails;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        this.showToast('Error details copied to clipboard');
      });
    }
  };

  private showToast(message: string) {
    // Create and show a temporary toast message
    const toast = document.createElement('div');
    toast.className = 'fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 3000);
  }

  render() {
    const { children, fallback, showErrorDetails = false, enableRecovery = true } = this.props;
    const { hasError, error, errorInfo, retryCount, isRecovering, errorId, maxRetries = 3 } = this.props;

    if (hasError) {
      // Custom fallback UI
      if (fallback) {
        return fallback;
      }

      // Default error UI
      return (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4"
          >
            <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 text-center">
              {/* Error Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center"
              >
                <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </motion.div>

              {/* Error Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold text-white mb-4"
              >
                Oops! Something went wrong
              </motion.h1>

              {/* Error Message */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-slate-300 mb-6"
              >
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
              </motion.p>

              {/* Error ID */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-slate-800/50 rounded-lg p-4 mb-6"
              >
                <p className="text-slate-400 text-sm mb-2">Error ID for support:</p>
                <code className="text-cyan-400 font-mono text-lg">{errorId}</code>
              </motion.div>

              {/* Error Details (if enabled) */}
              {showErrorDetails && error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ delay: 0.6 }}
                  className="bg-slate-800/50 rounded-lg p-4 mb-6 text-left"
                >
                  <details className="text-slate-300">
                    <summary className="cursor-pointer text-cyan-400 font-medium mb-2">
                      Technical Details
                    </summary>
                    <div className="space-y-2 text-sm">
                      <p><strong>Error:</strong> {error.message}</p>
                      {error.stack && (
                        <div>
                          <strong>Stack Trace:</strong>
                          <pre className="bg-slate-900/50 p-2 rounded text-xs overflow-x-auto">
                            {error.stack}
                          </pre>
                        </div>
                      )}
                      {errorInfo?.componentStack && (
                        <div>
                          <strong>Component Stack:</strong>
                          <pre className="bg-slate-900/50 p-2 rounded text-xs overflow-x-auto">
                            {errorInfo.componentStack}
                          </pre>
                        </div>
                      )}
                    </div>
                  </details>
                </motion.div>
              )}

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                {/* Retry Button */}
                {enableRecovery && retryCount < maxRetries && (
                  <button
                    onClick={this.handleRetry}
                    disabled={isRecovering}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isRecovering ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Recovering...
                      </span>
                    ) : (
                      `Try Again (${retryCount + 1}/${maxRetries})`
                    )}
                  </button>
                )}

                {/* Reset Button */}
                <button
                  onClick={this.handleReset}
                  className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Start Over
                </button>

                {/* Copy Error Details */}
                {showErrorDetails && (
                  <button
                    onClick={this.handleCopyErrorDetails}
                    className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors duration-200"
                  >
                    Copy Details
                  </button>
                )}

                {/* Report to Support */}
                <button
                  onClick={this.handleReportToSupport}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Report Issue
                </button>
              </motion.div>

              {/* Additional Help */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 text-slate-400 text-sm"
              >
                <p>Need immediate help? Contact our support team:</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                  <a
                    href="mailto:support@ziontechgroup.com"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    support@ziontechgroup.com
                  </a>
                  <a
                    href="tel:+1-555-123-4567"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    +1-555-123-4567
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      );
    }

    return children;
  }
}

// Higher-order component for error boundary
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<Props, 'children'>
) {
  return function WithErrorBoundary(props: P) {
    return (
      <ErrorBoundary {...errorBoundaryProps}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}

// Hook for error boundary state
export function useErrorBoundary() {
  const [error, setError] = React.useState<Error | null>(null);
  const [errorInfo, setErrorInfo] = React.useState<ErrorInfo | null>(null);

  const handleError = React.useCallback((error: Error, errorInfo: ErrorInfo) => {
    setError(error);
    setErrorInfo(errorInfo);
  }, []);

  const clearError = React.useCallback(() => {
    setError(null);
    setErrorInfo(null);
  }, []);

  return {
    error,
    errorInfo,
    handleError,
    clearError,
    hasError: !!error
  };
}
