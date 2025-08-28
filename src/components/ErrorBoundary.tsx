import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  RefreshCw, 
  Home, 
  Bug, 
  X, 
  Copy, 
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';

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
  showDetails: boolean;
  copied: boolean;
  recoveryAttempts: number;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false,
      copied: false,
      recoveryAttempts: 0
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to console
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log to external service (e.g., Sentry, LogRocket)
    this.logErrorToService(error, errorInfo);
  }

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    try {
      // Example: Send to analytics service
      if (window.gtag) {
        window.gtag('event', 'exception', {
          description: error.message,
          fatal: true
        });
      }

      // Example: Send to custom error tracking
      fetch('/api/error-log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: error.message,
          stack: error.stack,
          componentStack: errorInfo.componentStack,
          timestamp: new Date().toISOString(),
          url: window.location.href,
          userAgent: navigator.userAgent
        })
      }).catch(() => {
        // Silently fail if error logging fails
      });
    } catch (loggingError) {
      console.warn('Failed to log error to service:', loggingError);
    }
  };

  private handleRetry = () => {
    this.setState(prevState => ({
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false,
      recoveryAttempts: prevState.recoveryAttempts + 1
    }));
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleCopyError = async () => {
    const errorDetails = this.getErrorDetails();
    try {
      await navigator.clipboard.writeText(errorDetails);
      this.setState({ copied: true });
      setTimeout(() => this.setState({ copied: false }), 2000);
    } catch (err) {
      console.warn('Failed to copy error details:', err);
    }
  };

  private getErrorDetails = (): string => {
    const { error, errorInfo } = this.state;
    if (!error) return '';

    return `Error: ${error.message}
Stack: ${error.stack}
Component Stack: ${errorInfo?.componentStack || 'N/A'}
URL: ${window.location.href}
User Agent: ${navigator.userAgent}
Timestamp: ${new Date().toISOString()}`;
  };

  private handleToggleDetails = () => {
    this.setState(prevState => ({
      showDetails: !prevState.showDetails
    }));
  };

  render() {
    if (this.state.hasError) {
      const { fallback, showDetails: showDetailsProp, enableRecovery = true } = this.props;
      const { error, errorInfo, showDetails, copied, recoveryAttempts } = this.state;

      // Use custom fallback if provided
      if (fallback) {
        return fallback;
      }

      // Show recovery options if enabled and attempts < 3
      const canRecover = enableRecovery && recoveryAttempts < 3;

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl w-full bg-slate-800/95 backdrop-blur-sm border border-slate-700 rounded-xl shadow-2xl p-6"
          >
            {/* Header */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-red-500/20 rounded-full">
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Something went wrong</h1>
                <p className="text-slate-400">We encountered an unexpected error</p>
              </div>
            </div>

            {/* Error Message */}
            <div className="bg-slate-900/50 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <Bug className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-2">Error Details</h3>
                  <p className="text-red-300 font-mono text-sm break-words">
                    {error?.message || 'An unknown error occurred'}
                  </p>
                </div>
              </div>
            </div>

            {/* Recovery Options */}
            {canRecover && (
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-blue-300 font-semibold mb-2">Recovery Options</h3>
                    <p className="text-blue-200 text-sm mb-3">
                      We can try to recover from this error. This is attempt {recoveryAttempts + 1} of 3.
                    </p>
                    <div className="flex space-x-3">
                      <button
                        onClick={this.handleRetry}
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                      >
                        <RefreshCw className="w-4 h-4" />
                        <span>Try Again</span>
                      </button>
                      <button
                        onClick={this.handleGoHome}
                        className="flex items-center space-x-2 px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-lg transition-colors"
                      >
                        <Home className="w-4 h-4" />
                        <span>Go Home</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Error Details Toggle */}
            <div className="mb-6">
              <button
                onClick={this.handleToggleDetails}
                className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
              >
                {showDetails ? (
                  <>
                    <X className="w-4 h-4" />
                    <span>Hide Technical Details</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-4 h-4" />
                    <span>Show Technical Details</span>
                  </>
                )}
              </button>
            </div>

            {/* Technical Details */}
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-4"
              >
                {/* Error Stack */}
                {error?.stack && (
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">Error Stack</h4>
                    <pre className="text-xs text-slate-300 overflow-x-auto whitespace-pre-wrap">
                      {error.stack}
                    </pre>
                  </div>
                )}

                {/* Component Stack */}
                {errorInfo?.componentStack && (
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">Component Stack</h4>
                    <pre className="text-xs text-slate-300 overflow-x-auto whitespace-pre-wrap">
                      {errorInfo.componentStack}
                    </pre>
                  </div>
                )}

                {/* Copy Error Details */}
                <div className="flex justify-end">
                  <button
                    onClick={this.handleCopyError}
                    className="flex items-center space-x-2 px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-lg transition-colors"
                  >
                    {copied ? (
                      <>
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Error Details</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              {!canRecover && (
                <button
                  onClick={this.handleGoHome}
                  className="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <Home className="w-4 h-4" />
                  <span>Go to Homepage</span>
                </button>
              )}
              
              <button
                onClick={() => window.location.reload()}
                className="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white rounded-lg transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reload Page</span>
              </button>
            </div>

            {/* Contact Support */}
            <div className="mt-6 pt-6 border-t border-slate-700 text-center">
              <p className="text-slate-400 text-sm">
                If this problem persists, please{' '}
                <a 
                  href="/contact" 
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  contact our support team
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hook-based error boundary for functional components
export function useErrorHandler() {
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    if (error) {
      // Log the error
      console.error('Error caught by useErrorHandler:', error);
      
      // You can also send it to an error reporting service
      if (process.env.NODE_ENV === 'production') {
        // Send to error reporting service
      }
    }
  }, [error]);

  const handleError = React.useCallback((error: Error) => {
    setError(error);
  }, []);

  const clearError = React.useCallback(() => {
    setError(null);
  }, []);

  return { error, handleError, clearError };
}

// Higher-order component for error boundaries
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: ReactNode,
  onError?: (error: Error, errorInfo: ErrorInfo) => void
) {
  return function WithErrorBoundary(props: P) {
    return (
      <ErrorBoundary fallback={fallback} onError={onError}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}

// Global error handler for unhandled errors
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    console.error('Unhandled error:', event.error);
  });

  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
  });
}
