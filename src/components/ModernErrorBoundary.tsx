import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, ArrowLeft, Bug, Shield } from 'lucide-react';

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
  showDetails: boolean;
}

export class ModernErrorBoundary extends Component<Props, State> {

  constructor(props: Props) {

    super(props);
    this.state = {

      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false
    };
  }

  static getDerivedStateFromError(error: Error): State {

    return {

      hasError: true,
      error,
      errorInfo: null,
      showDetails: false
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {

    this.setState({

      error,
      errorInfo
    });

    if (this.props.onError) {

      this.props.onError(error, errorInfo);
    }

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {

      // // console.error('Error caught by ModernErrorBoundary:', error, errorInfo);
    }
  }

  reportError = () => {

    if (this.state.error) {

      // In a real app, you would send this to an error reporting service
      // // console.error('Error reported:', this.state.error);
    }
  };

  handleRetry = () => {

    this.setState({

      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false
    });
  };

  handleGoHome = () => {

    window.location.href = '/';
  };

  handleGoBack = () => {

    window.history.back();
  };

  toggleDetails = () => {

    this.setState(prevState => ({

      showDetails: !prevState.showDetails
    }));
  };

  render() {

    if (this.state.hasError) {

      if (this.props.fallback) {

        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6 text-white">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-8 h-8" />
                <div>
                  <h1 className="text-2xl font-bold">Something went wrong</h1>
                  <p className="text-red-100">We've encountered an unexpected error</p>
                </div>
              </div>
            </div>

            {/* Error Message */}
            <div className="p-6">
              <div className="mb-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We apologize for the inconvenience. An error has occurred and our team has been notified.
                </p>
                {this.state.error && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                    <p className="text-red-800 dark:text-red-200 font-mono text-sm">
                      {this.state.error.message}
                    </p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button
                  onClick={this.handleRetry}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <RefreshCw className="w-5 h-5" />
                  <span>Try Again</span>
                </button>
                <button
                  onClick={this.handleGoHome}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <Home className="w-5 h-5" />
                  <span>Go Home</span>
                </button>
                <button
                  onClick={this.handleGoBack}
                  className="flex-1 bg-gray-500 hover:bg-gray-600 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Go Back</span>
                </button>
              </div>

              {/* Technical Details Toggle */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <button
                  onClick={this.toggleDetails}
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                >
                  <Bug className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {this.state.showDetails ? 'Hide' : 'Show'} Technical Details
                  </span>
                </button>
              </div>

              {/* Technical Details */}
              {this.state.showDetails && this.state.errorInfo && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 bg-gray-50 dark:bg-gray-900 rounded-lg p-4 overflow-auto max-h-64"
                >
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Component Stack:</h4>
                      <pre className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                    {this.state.error && (
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Error Stack:</h4>
                        <pre className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto">
                          {this.state.error.stack}
                        </pre>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Help Text */}
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <p className="font-medium text-gray-900 dark:text-white mb-1">Need help?</p>
                  <p>If this error persists, please contact our support team with the technical details above.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Partial<Props>
) => {

  const WrappedComponent = (props: P) => (
    <ModernErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ModernErrorBoundary>
  );
  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  return WrappedComponent;
};