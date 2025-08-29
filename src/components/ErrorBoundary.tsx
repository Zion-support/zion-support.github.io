import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, Bug, XCircle, AlertCircle } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
  showStackTrace: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
      showStackTrace: false
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: this.generateErrorId()
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      // // // // console.error('Error caught by boundary:', error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Send error to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      this.reportError(error, errorInfo);
    }
  }

  private static generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private reportError = async (error: Error, errorInfo: ErrorInfo) => {
    try {
      // In a real app, you'd send this to your error monitoring service
      // like Sentry, LogRocket, or a custom endpoint
      const errorReport = {
        errorId: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href
      };

      // Example: Send to monitoring service
      // await fetch('/api/error-reporting', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(errorReport)
      // });

      // // // // console.log('Error reported:', errorReport);
    } catch (reportingError) {
      // // // // console.warn('Failed to report error:', reportingError);
    }
  };

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
      showStackTrace: false
    });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private toggleStackTrace = () => {
    this.setState(prev => ({ showStackTrace: !prev.showStackTrace }));
  };

  private copyErrorDetails = async () => {
    if (this.state.error && this.state.errorInfo) {
      const errorDetails = `
Error ID: ${this.state.errorId}
Message: ${this.state.error.message}
Stack: ${this.state.error.stack}
Component Stack: ${this.state.errorInfo.componentStack}
URL: ${window.location.href}
Timestamp: ${new Date().toISOString()}
      `.trim();

      try {
        await navigator.clipboard.writeText(errorDetails);
        // You could show a toast notification here
        // // // // console.log('Error details copied to clipboard');
      } catch (err) {
        // // // // console.warn('Failed to copy error details:', err);
      }
    }
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl w-full bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8"
          >
            {/* Error Header */}
            <div className="text-center mb-6">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-4"
              >
                <XCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
              </motion.div>
              
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                We've encountered an unexpected error. Our team has been notified.
              </p>
            </div>

            {/* Error Details */}
            {this.state.error && (
              <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center">
                    <AlertCircle className="w-4 h-4 mr-2 text-red-500" />
                    Error Details
                  </h3>
                  <button
                    onClick={this.toggleStackTrace}
                    className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {this.state.showStackTrace ? 'Hide' : 'Show'} Details
                  </button>
                </div>
                
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Error ID:</strong> {this.state.errorId}
                </p>
                
                {this.state.showStackTrace && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3"
                  >
                    <details className="text-xs">
                      <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline mb-2">
                        Technical Details
                      </summary>
                      <div className="bg-gray-100 dark:bg-slate-600 rounded p-3 font-mono text-xs overflow-x-auto">
                        <p className="text-red-600 dark:text-red-400 mb-2">
                          {this.state.error.message}
                        </p>
                        <pre className="whitespace-pre-wrap text-gray-700 dark:text-gray-300">
                          {this.state.error.stack}
                        </pre>
                      </div>
                    </details>
                  </motion.div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleRetry}
                className="flex-1 sm:flex-none flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleGoHome}
                className="flex-1 sm:flex-none flex items-center justify-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </motion.button>
            </div>

            {/* Additional Help */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                Still having issues? We're here to help.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <button
                  onClick={this.copyErrorDetails}
                  className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center justify-center"
                >
                  <Bug className="w-3 h-3 mr-1" />
                  Copy Error Details
                </button>
                
                <a
                  href="/contact"
                  className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center justify-center"
                >
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  Contact Support
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hook for functional components to handle errors
export function useErrorHandler() {
  const [error, setError] = React.useState<Error | null>(null);

  const handleError = React.useCallback((error: Error) => {
    setError(error);
    // // // // console.error('Error caught by hook:', error);
  }, []);

  const clearError = React.useCallback(() => {
    setError(null);
  }, []);

  return { error, handleError, clearError };
}

// Higher-order component for error handling
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Partial<Props>
) {
  return function WithErrorBoundary(props: P) {
    return (
      <ErrorBoundary {...errorBoundaryProps}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}
