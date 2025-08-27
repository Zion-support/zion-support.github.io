import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
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
}
export class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });
    // Log error to console
    console.error('🚨 Error Boundary Caught Error:', error, errorInfo);
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
    // Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      // You can integrate with Sentry, LogRocket, or other error tracking services here
      this.logErrorToService(error, errorInfo);
    }
  }
  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    try {
      // Example: Send to analytics or error tracking service
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'exception', {
          description: error.message,
          fatal: true
        });
      }
    } catch (e) {
      console.warn('Failed to log error to external service:', e);
    }
  };
  private handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };
  private handleReload = () => {
    window.location.reload();
  };
  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            {/* Error Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-24 h-24 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center"
            >
              <svg className="w-12 h-12 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </motion.div>
            {/* Error Message */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold text-white mb-4"
            >
              Oops! Something went wrong
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-red-200 mb-8 text-lg"
            >
              We encountered an unexpected error. Our team has been notified and is working to fix it.
            </motion.p>
            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={this.handleRetry}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Try Again
              </button>
              <button
                onClick={this.handleReload}
                className="px-6 py-3 bg-red-800 hover:bg-red-900 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Reload Page
              </button>
            </motion.div>
            {/* Error Details (Development Only) */}
            {this.props.showDetails && this.state.error && (
              <motion.details
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ delay: 0.6 }}
                className="mt-8 text-left bg-black/20 rounded-lg p-4"
              >
                <summary className="cursor-pointer text-red-300 font-semibold mb-2">
                  Error Details (Development)
                </summary>
                <div className="text-red-200 text-sm space-y-2">
                  <div>
                    <strong>Error:</strong> {this.state.error.toString()}
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong>Component Stack:</strong>
                      <pre className="mt-2 p-2 bg-black/40 rounded text-xs overflow-x-auto">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </motion.details>
            )}
            {/* Support Contact */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-8 text-red-300 text-sm"
            >
              Need help? Contact our support team at{' '}
              <a href="mailto:support@ziontechgroup.com" className="text-red-200 hover:text-white underline">
                support@ziontechgroup.com
              </a>
            </motion.div>
          </motion.div>
        </div>
      );
    }
    return this.props.children;
  }
}