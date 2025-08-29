import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, ArrowLeft, Bug, MessageCircle } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
  enableReporting?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
  showDetails: boolean;
  isReporting: boolean;
  reportSent: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
      showDetails: false,
      isReporting: false,
      reportSent: false
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
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
    
    // Report error to monitoring service (e.g., Sentry)
    this.reportError(error, errorInfo);
  }

  private reportError = async (error: Error, errorInfo: ErrorInfo) => {
    if (!this.props.enableReporting) return;
    
    this.setState({ isReporting: true });
    
    try {
      // Example error reporting to a service
      const errorReport = {
        errorId: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        version: process.env.REACT_APP_VERSION || '1.0.0'
      };
      
      // Send to error reporting service
      await fetch('/api/error-reporting', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(errorReport)
      });
      
      this.setState({ reportSent: true });
    } catch (reportError) {
      console.warn('Failed to report error:', reportError);
    } finally {
      this.setState({ isReporting: false });
    }
  };

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
      showDetails: false,
      reportSent: false
    });
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

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-gradient-to-br from-red-900 via-slate-900 to-red-900 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            {/* Error Icon */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <AlertTriangle className="w-12 h-12 text-white" />
            </motion.div>

            {/* Error Message */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl font-bold text-white mb-4"
            >
              Oops! Something went wrong
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg text-red-200 mb-8 max-w-lg mx-auto"
            >
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </motion.p>

            {/* Error ID */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-red-800/50 border border-red-700 rounded-lg p-4 mb-8"
            >
              <p className="text-sm text-red-200 mb-2">Error Reference ID:</p>
              <code className="text-red-300 font-mono text-sm bg-red-900/50 px-2 py-1 rounded">
                {this.state.errorId}
              </code>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <button
                onClick={this.handleRetry}
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                Try Again
              </button>
              
              <button
                onClick={this.handleGoBack}
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="px-6 py-3 bg-slate-600 hover:bg-slate-500 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                Go Home
              </button>
            </motion.div>

            {/* Error Details Toggle */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mb-6"
            >
              <button
                onClick={this.toggleDetails}
                className="text-red-300 hover:text-white transition-colors flex items-center gap-2 mx-auto"
              >
                <Bug className="w-4 h-4" />
                {this.state.showDetails ? 'Hide' : 'Show'} Technical Details
              </button>
            </motion.div>

            {/* Error Details */}
            <AnimatePresence>
              {this.state.showDetails && this.state.error && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-left overflow-hidden"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">Error Details</h3>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-slate-400">Error:</span>
                      <code className="text-red-300 ml-2 font-mono break-all">
                        {this.state.error.message}
                      </code>
                    </div>
                    
                    {this.state.error.stack && (
                      <div>
                        <span className="text-slate-400">Stack Trace:</span>
                        <pre className="text-red-300 mt-2 text-xs overflow-x-auto bg-slate-900/50 p-3 rounded border border-slate-700">
                          {this.state.error.stack}
                        </pre>
                      </div>
                    )}
                    
                    {this.state.errorInfo?.componentStack && (
                      <div>
                        <span className="text-slate-400">Component Stack:</span>
                        <pre className="text-red-300 mt-2 text-xs overflow-x-auto bg-slate-900/50 p-3 rounded border border-slate-700">
                          {this.state.errorInfo.componentStack}
                        </pre>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Error Reporting Status */}
            {this.props.enableReporting && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-6"
              >
                {this.state.isReporting ? (
                  <div className="flex items-center justify-center gap-2 text-yellow-300">
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Reporting error...</span>
                  </div>
                ) : this.state.reportSent ? (
                  <div className="flex items-center justify-center gap-2 text-green-300">
                    <MessageCircle className="w-4 h-4" />
                    <span>Error reported successfully</span>
                  </div>
                ) : (
                  <div className="text-slate-400 text-sm">
                    This error has been automatically reported to our team
                  </div>
                )}
              </motion.div>
            )}

            {/* Help Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="mt-8 pt-6 border-t border-red-800/50"
            >
              <p className="text-sm text-red-300 mb-3">
                Still having issues? We're here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm">
                <a
                  href="/contact"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Contact Support
                </a>
                <span className="text-red-600">•</span>
                <a
                  href="/help"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Help Center
                </a>
                <span className="text-red-600">•</span>
                <a
                  href="/status"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  System Status
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hook for functional components to catch errors
export const useErrorBoundary = () => {
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      setError(event.error);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      setError(new Error(event.reason));
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return error;
};

// Higher-order component for error boundaries
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
