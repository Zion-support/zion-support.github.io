import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, ArrowLeft, Bug, MessageCircle } from 'lucide-react';

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
  errorId: string | null;
  isReporting: boolean;
  showTechnicalDetails: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
      isReporting: boolean,
      showTechnicalDetails: false,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: this.generateErrorId(),
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

    // Report error to monitoring service (if enabled)
    if (this.props.enableReporting) {
      this.reportError(error, errorInfo);
    }
  }

  private static generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private reportError = async (error: Error, errorInfo: ErrorInfo) => {
    this.setState({ isReporting: true });
    
    try {
      // Here you would typically send the error to your error reporting service
      // For example: Sentry, LogRocket, Bugsnag, etc.
      const errorReport = {
        id: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        userId: this.getUserId(), // Implement based on your auth system
      };

      // Simulate error reporting
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Error reported:', errorReport);
    } catch (reportingError) {
      console.error('Failed to report error:', reportingError);
    } finally {
      this.setState({ isReporting: false });
    }
  };

  private getUserId(): string | null {
    // Implement based on your authentication system
    // This is just a placeholder
    return localStorage.getItem('userId') || null;
  }

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
      showTechnicalDetails: false,
    });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleGoBack = () => {
    window.history.back();
  };

  private handleContactSupport = () => {
    // Implement contact support functionality
    window.location.href = '/contact';
  };

  private toggleTechnicalDetails = () => {
    this.setState(prev => ({
      showTechnicalDetails: !prev.showTechnicalDetails,
    }));
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <motion.div
          className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-2xl w-full bg-white dark:bg-zion-slate rounded-2xl shadow-2xl p-8">
            {/* Error Header */}
            <div className="text-center mb-8">
              <motion.div
                className="w-20 h-20 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
              >
                <AlertTriangle className="w-10 h-10 text-red-500" />
              </motion.div>
              
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                We're sorry, but something unexpected happened. Our team has been notified.
              </p>
            </div>

            {/* Error Details */}
            {this.state.error && (
              <div className="bg-gray-50 dark:bg-zion-slate-light rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Error Details
                  </span>
                  <button
                    onClick={this.toggleTechnicalDetails}
                    className="text-sm text-zion-blue hover:text-zion-blue-dark transition-colors"
                  >
                    {this.state.showTechnicalDetails ? 'Hide' : 'Show'} Technical Details
                  </button>
                </div>
                
                {this.state.showTechnicalDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2 text-sm"
                  >
                    <div className="font-mono text-red-600 dark:text-red-400 break-words">
                      {this.state.error.message}
                    </div>
                    {this.state.errorId && (
                      <div className="text-gray-500 dark:text-gray-400">
                        Error ID: {this.state.errorId}
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <motion.button
                onClick={this.handleRetry}
                className="flex items-center justify-center space-x-2 bg-zion-blue hover:bg-zion-blue-dark text-white font-medium py-3 px-6 rounded-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <RefreshCw className="w-5 h-5" />
                <span>Try Again</span>
              </motion.button>

              <motion.button
                onClick={this.handleGoHome}
                className="flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 dark:bg-zion-slate-light dark:hover:bg-zion-slate dark:text-gray-700 dark:text-white font-medium py-3 px-6 rounded-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Home className="w-5 h-5" />
                <span>Go Home</span>
              </motion.button>
            </div>

            {/* Additional Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.button
                onClick={this.handleGoBack}
                className="flex items-center justify-center space-x-2 text-zion-blue hover:text-zion-blue-dark font-medium py-2 px-4 rounded-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Go Back</span>
              </motion.button>

              <motion.button
                onClick={this.handleContactSupport}
                className="flex items-center justify-center space-x-2 text-zion-blue hover:text-zion-blue-dark font-medium py-2 px-4 rounded-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contact Support</span>
              </motion.button>
            </div>

            {/* Error Reporting Status */}
            {this.props.enableReporting && (
              <div className="mt-6 text-center">
                {this.state.isReporting ? (
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <div className="w-4 h-4 border-2 border-zion-blue border-t-transparent rounded-full animate-spin"></div>
                    <span>Reporting error...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2 text-sm text-green-600 dark:text-green-400">
                    <Bug className="w-4 h-4" />
                    <span>Error reported to our team</span>
                  </div>
                )}
              </div>
            )}

            {/* Helpful Information */}
            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                Need help?
              </h3>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                If this problem persists, please contact our support team. We're here to help you get back on track.
              </p>
            </div>
          </div>
        </motion.div>
      );
    }

    return this.props.children;
  }
}

// Hook for functional components to handle errors
export const useErrorHandler = () => {
  const [error, setError] = React.useState<Error | null>(null);

  const handleError = React.useCallback((error: Error) => {
    setError(error);
    console.error('Error caught by hook:', error);
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
