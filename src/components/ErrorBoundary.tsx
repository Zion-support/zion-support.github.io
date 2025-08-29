import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, ArrowLeft, Bug, X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
  enableRecovery?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
  showDetails: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
      showDetails: false
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
    // Log error to console
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Update state
    this.setState({
      error,
      errorInfo
    });

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log to external service (if available)
    this.logErrorToService(error, errorInfo);
  }

  private static generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private logErrorToService(error: Error, errorInfo: ErrorInfo) {
    try {
      // Log to analytics service if available
      if (window.gtag) {
        window.gtag('event', 'exception', {
          description: error.message,
          fatal: true,
          error_id: this.state.errorId
        });
      }

      // Log to console for development
      if (process.env.NODE_ENV === 'development') {
        console.group('🚨 Error Details');
        console.error('Error:', error);
        console.error('Error Info:', errorInfo);
        console.error('Error ID:', this.state.errorId);
        console.error('Component Stack:', errorInfo.componentStack);
        console.groupEnd();
      }
    } catch (loggingError) {
      console.warn('Failed to log error:', loggingError);
    }
  }

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
      showDetails: false
    });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleGoBack = () => {
    window.history.back();
  };

  private toggleDetails = () => {
    this.setState(prev => ({
      showDetails: !prev.showDetails
    }));
  };

  private copyErrorDetails = () => {
    if (this.state.error && this.state.errorInfo) {
      const errorDetails = `
Error ID: ${this.state.errorId}
Error: ${this.state.error.message}
Stack: ${this.state.error.stack}
Component Stack: ${this.state.errorInfo.componentStack}
URL: ${window.location.href}
User Agent: ${navigator.userAgent}
Timestamp: ${new Date().toISOString()}
      `.trim();

      navigator.clipboard.writeText(errorDetails).then(() => {
        // Show success message
        const notification = document.createElement('div');
        notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50';
        notification.textContent = 'Error details copied to clipboard';
        document.body.appendChild(notification);
        
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 3000);
      }).catch(() => {
        console.warn('Failed to copy error details');
      });
    }
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <motion.div
          className="min-h-screen bg-futuristic flex items-center justify-center p-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="max-w-2xl w-full bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center">
            {/* Error Icon */}
            <motion.div
              className="mx-auto w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-6"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <AlertTriangle className="w-10 h-10 text-red-400" />
            </motion.div>

            {/* Error Title */}
            <h1 className="text-3xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>

            {/* Error Message */}
            <p className="text-slate-300 mb-6 text-lg">
              We encountered an unexpected error. Our team has been notified and is working to fix it.
            </p>

            {/* Error ID */}
            {this.state.errorId && (
              <div className="bg-slate-800/50 rounded-lg p-3 mb-6">
                <p className="text-slate-400 text-sm">
                  Error ID: <span className="font-mono text-zion-cyan">{this.state.errorId}</span>
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <motion.button
                onClick={this.handleRetry}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <RefreshCw className="w-5 h-5" />
                Try Again
              </motion.button>

              <motion.button
                onClick={this.handleGoBack}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-600 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </motion.button>

              <motion.button
                onClick={this.handleGoHome}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-600 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Home className="w-5 h-5" />
                Go Home
              </motion.button>
            </div>

            {/* Error Details Toggle */}
            <div className="border-t border-slate-700 pt-6">
              <motion.button
                onClick={this.toggleDetails}
                className="flex items-center justify-center gap-2 mx-auto text-slate-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Bug className="w-4 h-4" />
                {this.state.showDetails ? 'Hide' : 'Show'} Technical Details
              </motion.button>

              {/* Error Details */}
              <AnimatePresence>
                {this.state.showDetails && (
                  <motion.div
                    className="mt-4 text-left"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-slate-800/50 rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-white font-semibold">Error Details</h3>
                        <button
                          onClick={this.copyErrorDetails}
                          className="text-xs bg-slate-700 hover:bg-slate-600 px-2 py-1 rounded text-slate-300 hover:text-white transition-colors"
                        >
                          Copy
                        </button>
                      </div>
                      
                      {this.state.error && (
                        <div className="space-y-2">
                          <div>
                            <span className="text-slate-400 text-sm">Message:</span>
                            <p className="text-red-400 font-mono text-sm break-words">
                              {this.state.error.message}
                            </p>
                          </div>
                          
                          {this.state.error.stack && (
                            <div>
                              <span className="text-slate-400 text-sm">Stack Trace:</span>
                              <pre className="text-slate-300 font-mono text-xs overflow-x-auto bg-slate-900 p-2 rounded">
                                {this.state.error.stack}
                              </pre>
                            </div>
                          )}
                        </div>
                      )}

                      {this.state.errorInfo && (
                        <div>
                          <span className="text-slate-400 text-sm">Component Stack:</span>
                          <pre className="text-slate-300 font-mono text-xs overflow-x-auto bg-slate-900 p-2 rounded mt-1">
                            {this.state.errorInfo.componentStack}
                          </pre>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Help Text */}
            <div className="mt-6 text-slate-500 text-sm">
              <p>
                If this problem persists, please contact our support team with the Error ID above.
              </p>
            </div>
          </div>
        </motion.div>
      );
    }

    return this.props.children;
  }
}

// Hook for functional components to catch errors
export function useErrorHandler() {
  const [error, setError] = React.useState<Error | null>(null);

  const handleError = React.useCallback((error: Error) => {
    setError(error);
    console.error('Error caught by useErrorHandler:', error);
  }, []);

  const clearError = React.useCallback(() => {
    setError(null);
  }, []);

  return { error, handleError, clearError };
}

// Higher-order component for error boundaries
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Partial<Props>
) {
  return function WrappedComponent(props: P) {
    return (
      <ErrorBoundary {...errorBoundaryProps}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}
