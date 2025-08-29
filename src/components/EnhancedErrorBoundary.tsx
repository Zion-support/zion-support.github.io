import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, ArrowLeft, Bug, Shield, Zap } from 'lucide-react';

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
}

export class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      errorInfo,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    });

    // Log error to console
    console.error('Error Boundary caught an error:', error, errorInfo);

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // In production, you might want to send this to an error reporting service
    // Example: Sentry.captureException(error, { extra: errorInfo });
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  handleGoBack = () => {
    window.history.back();
  };

  handleReportError = () => {
    const { error, errorInfo, errorId } = this.state;
    if (error && errorInfo) {
      const errorReport = {
        errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent
      };

      // In production, send this to your error reporting service
      console.log('Error Report:', errorReport);
      
      // For now, just copy to clipboard
      navigator.clipboard.writeText(JSON.stringify(errorReport, null, 2))
        .then(() => alert('Error details copied to clipboard'))
        .catch(() => alert('Failed to copy error details'));
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
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-red-200 dark:border-red-700 overflow-hidden"
          >
            {/* Error Header */}
            <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 text-white text-center">
              <motion.div
                animate={{ 
                  rotate: [0, -10, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
                className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <AlertTriangle className="w-8 h-8" />
              </motion.div>
              <h1 className="text-2xl font-bold mb-2">Oops! Something went wrong</h1>
              <p className="text-red-100">
                We've encountered an unexpected error. Our team has been notified.
              </p>
            </div>

            {/* Error Content */}
            <div className="p-6 space-y-6">
              {/* Error ID */}
              {this.state.errorId && (
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                    <Bug className="w-4 h-4" />
                    <span>Error ID: <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">{this.state.errorId}</code></span>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {this.state.error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-4">
                  <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2 flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    Error Details
                  </h3>
                  <p className="text-red-700 dark:text-red-300 text-sm">
                    {this.state.error.message}
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={this.handleRetry}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 font-medium"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Try Again</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={this.handleGoHome}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 font-medium"
                >
                  <Home className="w-4 h-4" />
                  <span>Go Home</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={this.handleGoBack}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Go Back</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={this.handleReportError}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-medium"
                >
                  <Zap className="w-4 h-4" />
                  <span>Report Issue</span>
                </motion.button>
              </div>

              {/* Technical Details (Optional) */}
              {this.props.showDetails && this.state.errorInfo && (
                <details className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <summary className="cursor-pointer font-medium text-gray-700 dark:text-gray-200 mb-2">
                    Technical Details
                  </summary>
                  <pre className="text-xs text-gray-600 dark:text-gray-400 overflow-auto">
                    {this.state.errorInfo.componentStack}
                  </pre>
                </details>
              )}

              {/* Help Text */}
              <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                <p>
                  If this problem persists, please contact our support team with the Error ID above.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Export as ErrorBoundary for backward compatibility
export const ErrorBoundary = EnhancedErrorBoundary;