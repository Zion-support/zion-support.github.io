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
  errorId: string;
}
class EnhancedErrorBoundary extends Component<Props, State> {
  private retryCount = 0;
  private maxRetries = 3;
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
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
    this.setState({
      error,
      errorInfo
    });
    // Log error to console
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    // Log error to external service
    this.logError(error, errorInfo);
    // Call custom error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }
  private logError = (error: Error, errorInfo: ErrorInfo) => {
    const errorData = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      retryCount: this.retryCount
    };
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.group('🚨 Error Details');
      console.error('Error:', error);
      console.error('Error Info:', errorInfo);
      console.error('Error Data:', errorData);
      console.groupEnd();
    }
    // Send to error reporting service
    this.sendToErrorService(errorData);
  };
  private sendToErrorService = (errorData: any) => {
    // In a real application, you would send this to your error reporting service
    // like Sentry, LogRocket, or Bugsnag
    try {
      // Example: Send to analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'exception', {
          description: errorData.message,
          fatal: false,
          custom_map: {
            error_id: errorData.errorId,
            retry_count: errorData.retryCount
          }
        });
      }
    } catch (e) {
      console.warn('Failed to send error to reporting service:', e);
    }
  };
  private handleRetry = () => {
    if (this.retryCount < this.maxRetries) {
      this.retryCount++;
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: ''
      });
    } else {
      // Reset retry count and reload page
      this.retryCount = 0;
      window.location.reload();
    }
  };
  private handleReload = () => {
    window.location.reload();
  };
  private handleReportBug = () => {
    const errorData = {
      errorId: this.state.errorId,
      message: this.state.error?.message,
      stack: this.state.error?.stack,
      url: window.location.href,
      timestamp: new Date().toISOString()
    };
    // Create a mailto link with error details
    const subject = encodeURIComponent(`Bug Report - Error ID: ${this.state.errorId}`);
    const body = encodeURIComponent(`
Error Details:
- Error ID: ${this.state.errorId}
- Message: ${this.state.error?.message}
- URL: ${window.location.href}
- Timestamp: ${new Date().toISOString()}
- User Agent: ${navigator.userAgent}
Please describe what you were doing when this error occurred:
[Your description here]
    `);
    window.open(`mailto:support@ziontechgroup.com?subject=${subject}&body=${body}`);
  };
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="min-h-screen bg-gradient-to-br from-red-900 via-gray-900 to-red-800 text-white flex items-center justify-center p-4"
        >
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-8"
            >
              <div className="text-6xl mb-4">🚨</div>
              <h1 className="text-4xl font-bold mb-4 text-red-400">
                Oops! Something went wrong
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                We're sorry, but something unexpected happened. Our team has been notified.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-800 bg-opacity-50 rounded-lg p-6 mb-8"
            >
              <h2 className="text-lg font-semibold mb-4 text-yellow-400">
                Error Details
              </h2>
              <div className="text-left space-y-2 text-sm">
                <p><strong>Error ID:</strong> {this.state.errorId}</p>
                <p><strong>Message:</strong> {this.state.error?.message}</p>
                <p><strong>Time:</strong> {new Date().toLocaleString()}</p>
                <p><strong>Retry Attempt:</strong> {this.retryCount + 1} of {this.maxRetries + 1}</p>
              </div>
            </motion.div>
            {this.props.showDetails && this.state.errorInfo && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ delay: 0.6 }}
                className="bg-gray-800 bg-opacity-50 rounded-lg p-4 mb-8 text-left"
              >
                <h3 className="text-lg font-semibold mb-2 text-yellow-400">
                  Technical Details
                </h3>
                <pre className="text-xs text-gray-300 overflow-auto max-h-40">
                  {this.state.error?.stack}
                </pre>
              </motion.div>
            )}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={this.handleRetry}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105"
              >
                {this.retryCount < this.maxRetries ? 'Try Again' : 'Reload Page'}
              </button>
              <button
                onClick={this.handleReload}
                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105"
              >
                Reload Page
              </button>
              <button
                onClick={this.handleReportBug}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105"
              >
                Report Bug
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 text-sm text-gray-400"
            >
              <p>
                If this problem persists, please contact our support team with the Error ID above.
              </p>
            </motion.div>
          </div>
        </motion.div>
      );
    }
    return this.props.children;
  }
}
export default EnhancedErrorBoundary;
