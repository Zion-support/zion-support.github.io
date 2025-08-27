import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, ArrowLeft, Bug, Shield, Zap } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Generate a unique error ID for tracking
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    this.setState({
      error,
      errorInfo,
      errorId
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // In production, you could send this to an error reporting service
    // Example: Sentry.captureException(error, { extra: errorInfo });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  handleGoBack = () => {
    window.history.back();
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl w-full"
          >
            {/* Error Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mx-auto w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-6"
              >
                <AlertTriangle className="w-10 h-10 text-red-400" />
              </motion.div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Oops! Something went wrong
              </h1>
              
              <p className="text-gray-300 text-lg">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
              </p>
            </div>

            {/* Error Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 mb-8"
            >
              <div className="flex items-center mb-4">
                <Bug className="w-5 h-5 text-yellow-400 mr-2" />
                <h2 className="text-lg font-semibold text-white">Error Details</h2>
              </div>
              
              {this.state.error && (
                <div className="mb-4">
                  <p className="text-red-400 font-mono text-sm break-words">
                    {this.state.error.message}
                  </p>
                </div>
              )}
              
              {this.state.errorId && (
                <div className="text-sm text-gray-400">
                  Error ID: <span className="font-mono">{this.state.errorId}</span>
                </div>
              )}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Try Again
              </button>
              
              <button
                onClick={this.handleGoBack}
                className="flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </button>
            </motion.div>

            {/* Help Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-center"
            >
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-gray-400 text-sm">Need help?</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <a
                  href="/contact"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  Contact Support
                </a>
                <span className="text-gray-600 hidden sm:inline">•</span>
                <a
                  href="/help"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  Help Center
                </a>
                <span className="text-gray-600 hidden sm:inline">•</span>
                <a
                  href="/status"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  System Status
                </a>
              </div>
            </motion.div>

            {/* Technical Info for Developers */}
            {process.env.NODE_ENV === 'development' && this.state.errorInfo && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
              >
                <details className="text-left">
                  <summary className="text-red-400 font-semibold cursor-pointer mb-2">
                    Technical Details (Development Only)
                  </summary>
                  <pre className="text-xs text-red-300 overflow-auto">
                    {this.state.errorInfo.componentStack}
                  </pre>
                </details>
              </motion.div>
            )}
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
      // Log error or send to error reporting service
      console.error('Error caught by useErrorHandler:', error);
    }
  }, [error]);

  return {
    error,
    setError,
    clearError: () => setError(null)
  };
}

// Error boundary wrapper component
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: ReactNode
) {
  return function WrappedComponent(props: P) {
    return (
      <ErrorBoundary fallback={fallback}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}
