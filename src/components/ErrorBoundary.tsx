import React, { Component, ErrorInfo, ReactNode } from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  RefreshCw, 
  Home, 
  Bug, 
  Shield, 
  Zap, 
  ArrowLeft,
  Copy,
  CheckCircle,
  X
} from 'lucide-react';

interface Props {
  children: ReactNode;
  FallbackComponent?: React.ComponentType<{ error: Error; resetErrorBoundary: () => void }>;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  onReset?: () => void;
  showDetails?: boolean;
  enableReporting?: boolean;
  reportEndpoint?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
  isReporting: boolean;
  reportSent: boolean;
  showStack: boolean;
  retryCount: number;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
      isReporting: boolean,
      reportSent: false,
      showStack: false,
      retryCount: 0
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
      console.error('Error Boundary caught an error:', error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Auto-report error if enabled
    if (this.props.enableReporting) {
      this.reportError(error, errorInfo);
    }
  }

  // Generate error report
  private generateErrorReport = (error: Error, errorInfo: ErrorInfo) => {
    const report = {
      errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      error: {
        name: error.name,
        message: error.message,
        stack: error.stack
      },
      componentStack: errorInfo.componentStack,
      environment: {
        nodeEnv: process.env.NODE_ENV,
        version: process.env.npm_package_version || 'unknown',
        buildTime: process.env.BUILD_TIME || 'unknown'
      }
    };

    return report;
  };

  // Report error to backend
  private reportError = async (error: Error, errorInfo: ErrorInfo) => {
    if (!this.props.reportEndpoint) return;

    this.setState({ isReporting: true });

    try {
      const report = this.generateErrorReport(error, errorInfo);
      
      const response = await fetch(this.props.reportEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(report)
      });

      if (response.ok) {
        this.setState({ reportSent: true });
      }
    } catch (reportError) {
      console.error('Failed to report error:', reportError);
    } finally {
      this.setState({ isReporting: false });
    }
  };

  // Reset error boundary
  private resetErrorBoundary = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
      reportSent: false,
      showStack: false,
      retryCount: this.state.retryCount + 1
    });

    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  // Copy error details to clipboard
  private copyErrorDetails = async () => {
    if (!this.state.error || !this.state.errorInfo) return;

    const errorText = `
Error ID: ${this.state.errorId}
Error: ${this.state.error.name}
Message: ${this.state.error.message}
Stack: ${this.state.error.stack}
Component Stack: ${this.state.errorInfo.componentStack}
URL: ${window.location.href}
Timestamp: ${new Date().toISOString()}
    `.trim();

    try {
      await navigator.clipboard.writeText(errorText);
      // Show temporary success message
      setTimeout(() => this.setState({ reportSent: false }), 2000);
    } catch (err) {
      console.error('Failed to copy error details:', err);
    }
  };

  // Navigate back
  private goBack = () => {
    window.history.back();
  };

  // Navigate home
  private goHome = () => {
    window.location.href = '/';
=======
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from 'lucide-react';
interface Props extends React.PropsWithChildren<{}> {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}
interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
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
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error,
      errorInfo,
      errorId
    });
    // // // // // // // console.error('ErrorBoundary caught an error:', error, errorInfo);
    // Call custom error handler if provided
=======
    // Call the onError callback if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
      // // // // // // // console.log('Error logged:', errorData);
      // Example: Send to external service
      // fetch('/api/errors', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(errorData)
      // });
    } catch (logError) {
      // // // // // // // console.error('Failed to log error:', logError);
    }
  };
=======
    // Log to error reporting service in production
    if (process.env.NODE_ENV === 'production') {
      // You can integrate with services like Sentry, LogRocket, etc.
      console.error('Production error:', {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack
      });
    }
  }
  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };
  private handleGoHome = () => {;
    window.location.href = '/';
  };
  private handleGoBack = () => {
    window.history.back();
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  };
  render() {
    if (this.state.hasError) {
<<<<<<< HEAD
      // Use custom fallback component if provided
      if (this.props.FallbackComponent) {
        return (
          <this.props.FallbackComponent
            error={this.state.error!}
            resetErrorBoundary={this.resetErrorBoundary}
          />
        );
      }

      // Default error UI
      return (
        <motion.div
          className="min-h-screen bg-gradient-to-br from-zion-slate-900 via-zion-slate-800 to-zion-slate-900 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-2xl w-full">
            {/* Error Header */}
            <motion.div
              className="text-center mb-8"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-10 h-10 text-red-500" />
              </div>
              <h1 className="text-4xl font-bold text-white mb-2">Oops! Something went wrong</h1>
              <p className="text-zion-slate-300 text-lg">
                We've encountered an unexpected error. Our team has been notified.
              </p>
              <div className="mt-2 text-sm text-zion-slate-400">
                Error ID: {this.state.errorId}
              </div>
            </motion.div>

            {/* Error Details */}
            <motion.div
              className="bg-zion-slate-800/50 backdrop-blur-sm rounded-xl p-6 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white flex items-center">
                  <Bug className="w-5 h-5 mr-2 text-zion-cyan" />
                  Error Details
                </h2>
                <button
                  onClick={() => this.setState({ showStack: !this.state.showStack })}
                  className="text-zion-slate-400 hover:text-white transition-colors"
                >
                  {this.state.showStack ? 'Hide' : 'Show'} Stack
                </button>
              </div>

              {this.state.error && (
                <div className="space-y-3">
                  <div>
                    <span className="text-zion-slate-400">Type:</span>
                    <span className="ml-2 text-white font-mono">{this.state.error.name}</span>
=======
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      // Default error UI
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 text-center">
            {/* Error Icon */}
            <div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
            </div>
            {/* Error Title */}
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Oops! Something went wrong
            </h1>
            {/* Error Message */}
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We encountered an unexpected error. Please try again or contact support if the problem persists.
            </p>
            {/* Error Details (Development only) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Error Details (Development)
                </summary>
                <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 text-xs font-mono text-gray-800 dark:text-gray-200 overflow-auto">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                  </div>
                  <div>
                    <span className="text-zion-slate-400">Message:</span>
                    <span className="ml-2 text-white">{this.state.error.message}</span>
                  </div>
                  
                  {this.state.showStack && this.state.error.stack && (
                    <div className="mt-4">
                      <span className="text-zion-slate-400 block mb-2">Stack Trace:</span>
                      <pre className="bg-zion-slate-900 p-3 rounded-lg text-xs text-zion-slate-300 overflow-x-auto">
                        {this.state.error.stack}
                      </pre>
                    </div>
                  )}

                  {this.state.showStack && this.state.errorInfo && (
                    <div className="mt-4">
                      <span className="text-zion-slate-400 block mb-2">Component Stack:</span>
                      <pre className="bg-zion-slate-900 p-3 rounded-lg text-xs text-zion-slate-300 overflow-x-auto">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
<<<<<<< HEAD
              )}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-wrap gap-3 justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {/* Primary Actions */}
              <button
                onClick={this.resetErrorBoundary}
                className="px-6 py-3 bg-zion-cyan hover:bg-zion-cyan/80 text-white rounded-lg font-medium transition-colors flex items-center space-x-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Try Again</span>
              </button>

              <button
                onClick={this.goBack}
                className="px-6 py-3 bg-zion-slate-700 hover:bg-zion-slate-600 text-white rounded-lg font-medium transition-colors flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Go Back</span>
              </button>

              <button
                onClick={this.goHome}
                className="px-6 py-3 bg-zion-slate-700 hover:bg-zion-slate-600 text-white rounded-lg font-medium transition-colors flex items-center space-x-2"
              >
                <Home className="w-4 h-4" />
                <span>Go Home</span>
              </button>

              {/* Utility Actions */}
              <button
                onClick={this.copyErrorDetails}
                className="px-4 py-3 bg-zion-slate-700 hover:bg-zion-slate-600 text-white rounded-lg font-medium transition-colors flex items-center space-x-2"
                title="Copy error details to clipboard"
              >
                {this.state.reportSent ? (
                  <CheckCircle className="w-4 h-4 text-zion-green" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                <span>{this.state.reportSent ? 'Copied!' : 'Copy Details'}</span>
              </button>
            </motion.div>

            {/* Error Reporting Status */}
            {this.props.enableReporting && (
              <motion.div
                className="mt-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {this.state.isReporting ? (
                  <div className="flex items-center justify-center space-x-2 text-zion-slate-400">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-zion-cyan"></div>
                    <span>Reporting error...</span>
                  </div>
                ) : this.state.reportSent ? (
                  <div className="flex items-center justify-center space-x-2 text-zion-green">
                    <CheckCircle className="w-4 h-4" />
                    <span>Error reported successfully</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2 text-zion-slate-400">
                    <Shield className="w-4 h-4" />
                    <span>Error automatically reported to our team</span>
                  </div>
                )}
              </motion.div>
            )}

            {/* Retry Count */}
            {this.state.retryCount > 0 && (
              <motion.div
                className="mt-4 text-center text-sm text-zion-slate-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Retry attempt: {this.state.retryCount}
              </motion.div>
            )}

            {/* Help Section */}
            <motion.div
              className="mt-8 text-center text-sm text-zion-slate-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="mb-2">Still having issues? Contact our support team:</p>
              <div className="flex items-center justify-center space-x-4">
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="text-zion-cyan hover:text-zion-cyan/80 transition-colors"
                >
                  support@ziontechgroup.com
                </a>
                <span>•</span>
                <a
                  href="/contact"
                  className="text-zion-cyan hover:text-zion-cyan/80 transition-colors"
                >
                  Contact Form
                </a>
              </div>
            </motion.div>
=======
              </details>
            )}
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </button>
              <button
                onClick={this.handleGoBack}
                className="flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </button>
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </button>
            </div>
            {/* Support Contact */}
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Need help? Contact our support team
              </p>
              <a
                href="mailto:support@ziontechgroup.com"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                support@ziontechgroup.com
              </a>
            </div>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
          </div>
        </motion.div>
      );
<<<<<<< HEAD
    }

    return this.props.children;
  }
}

=======
    return this.props.children;
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
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
<<<<<<< HEAD
}

=======
    // // // // // // // console.error('Error caught by useErrorHandler:', error, errorInfo);
    // You can add custom error handling logic here
    // For example, sending to an error reporting service
    // Re-throw the error to trigger error boundaries
    throw error;
  }, []);
}}}}}}}}}}}}}}}}
=======
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
// Global error handler for unhandled errors
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    console.error('Unhandled error:', event.error);
  });
  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
  });
}
