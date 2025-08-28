import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, ArrowLeft, Bug, Shield, Zap } from 'lucide-react';

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
  isRecovering: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
      showDetails: false,
      isRecovering: false
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
    
    // Log error to console
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log error to external service (if available)
    this.logErrorToService(error, errorInfo);
  }

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    try {
      // You can integrate with services like Sentry, LogRocket, etc.
      if (typeof window !== 'undefined' && (window as any).Sentry) {
        (window as any).Sentry.captureException(error, {
          contexts: {
            react: {
              componentStack: errorInfo.componentStack
            }
          },
          tags: {
            errorBoundary: true,
            errorId: this.state.errorId
          }
        });
      }
    } catch (logError) {
      console.warn('Failed to log error to external service:', logError);
    }
  };

  private handleRetry = () => {
    this.setState({ isRecovering: true });
    
    // Attempt to recover by resetting the error state
    setTimeout(() => {
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: null,
        showDetails: false,
        isRecovering: false
      });
    }, 1000);
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleGoBack = () => {
    window.history.back();
  };

  private toggleDetails = () => {
    this.setState(prev => ({ showDetails: !prev.showDetails }));
  };

  private copyErrorDetails = () => {
    if (this.state.error && this.state.errorInfo) {
      const errorDetails = `
Error Details:
${this.state.error.toString()}

Component Stack:
${this.state.errorInfo.componentStack}

Error ID: ${this.state.errorId}
Timestamp: ${new Date().toISOString()}
URL: ${window.location.href}
User Agent: ${navigator.userAgent}
      `.trim();

      navigator.clipboard.writeText(errorDetails).then(() => {
        // Show success feedback
        const button = document.getElementById('copy-error-btn');
        if (button) {
          const originalText = button.textContent;
          button.textContent = 'Copied!';
          button.classList.add('bg-green-600');
          setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('bg-green-600');
          }, 2000);
        }
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

      const { error, errorInfo, errorId, showDetails, isRecovering } = this.state;

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="max-w-2xl w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl shadow-2xl p-8"
          >
            {/* Error Header */}
            <div className="text-center mb-8">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: 'easeInOut' 
                }}
                className="inline-flex items-center justify-center w-20 h-20 bg-red-500/20 rounded-full mb-6"
              >
                <AlertTriangle className="w-10 h-10 text-red-400" />
              </motion.div>
              
              <h1 className="text-3xl font-bold text-white mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-slate-300 text-lg">
                We've encountered an unexpected error. Our team has been notified.
              </p>
            </div>

            {/* Error ID */}
            {errorId && (
              <div className="bg-slate-700/50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300 text-sm">Error ID:</span>
                  <code className="text-zion-cyan font-mono text-sm bg-slate-800 px-2 py-1 rounded">
                    {errorId}
                  </code>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={this.handleRetry}
                disabled={isRecovering}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-zion-cyan hover:bg-zion-cyan/80 disabled:bg-slate-600 text-white font-medium rounded-lg transition-colors"
              >
                {isRecovering ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>Recovering...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    <span>Try Again</span>
                  </>
                )}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={this.handleGoHome}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors"
              >
                <Home className="w-5 h-5" />
                <span>Go Home</span>
              </motion.button>
            </div>

            {/* Additional Actions */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleGoBack}
                className="flex items-center space-x-2 px-4 py-2 text-slate-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Go Back</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.toggleDetails}
                className="flex items-center space-x-2 px-4 py-2 text-slate-400 hover:text-white transition-colors"
              >
                <Bug className="w-4 h-4" />
                <span>{showDetails ? 'Hide' : 'Show'} Details</span>
              </motion.button>
            </div>

            {/* Error Details */}
            {showDetails && error && errorInfo && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-slate-900/50 rounded-lg p-4 border border-slate-600"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-zion-cyan" />
                    Technical Details
                  </h3>
                  <button
                    id="copy-error-btn"
                    onClick={this.copyErrorDetails}
                    className="px-3 py-1 bg-zion-cyan hover:bg-zion-cyan/80 text-white text-sm rounded transition-colors"
                  >
                    Copy Details
                  </button>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="text-red-400 font-medium mb-2">Error Message:</h4>
                    <pre className="bg-slate-800 p-3 rounded text-red-300 overflow-x-auto">
                      {error.toString()}
                    </pre>
                  </div>
                  
                  <div>
                    <h4 className="text-yellow-400 font-medium mb-2">Component Stack:</h4>
                    <pre className="bg-slate-800 p-3 rounded text-yellow-300 overflow-x-auto text-xs">
                      {errorInfo.componentStack}
                    </pre>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Help Section */}
            <div className="text-center text-slate-400 text-sm">
              <p className="mb-2">
                If this problem persists, please contact our support team.
              </p>
              <p>
                Reference Error ID: <span className="font-mono text-zion-cyan">{errorId}</span>
              </p>
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
    console.error('Error caught by useErrorHandler:', error);
  }, []);

  const clearError = React.useCallback(() => {
    setError(null);
  }, []);

  return { error, handleError, clearError };
}

// Higher-order component for error handling
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
