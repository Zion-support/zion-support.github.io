import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AlertTriangle, 
  RefreshCw, 
  Home, 
  ArrowLeft, 
  Bug, 
  X, 
  Info,
  Download,
  Share2
} from 'lucide-react';

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
  showErrorDetails: boolean;
  errorId: string;
}

export class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      showErrorDetails: false,
      errorId: this.generateErrorId()
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
      showErrorDetails: false,
      errorId: `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to console
    console.error('Error Boundary caught an error:', error, errorInfo);

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log to external service (e.g., Sentry, LogRocket)
    this.logErrorToService(error, errorInfo);

    // Send error report to analytics
    this.sendErrorReport(error, errorInfo);
  }

  generateErrorId(): string {
    return `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  logErrorToService(error: Error, errorInfo: ErrorInfo) {
    try {
      // Example: Send to external error tracking service
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'exception', {
          description: error.message,
          fatal: true,
          error_id: this.state.errorId
        });
      }
    } catch (e) {
      console.warn('Failed to log error to service:', e);
    }
  }

  sendErrorReport(error: Error, errorInfo: ErrorInfo) {
    try {
      // Example: Send error report to analytics
      const errorReport = {
        id: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      };

      // Send to analytics endpoint
      fetch('/api/analytics/error', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(errorReport)
      }).catch(e => console.warn('Failed to send error report:', e));
    } catch (e) {
      console.warn('Failed to prepare error report:', e);
    }
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      showErrorDetails: false,
      errorId: this.generateErrorId()
    });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  handleGoBack = () => {
    window.history.back();
  };

  handleToggleErrorDetails = () => {
    this.setState(prev => ({
      showErrorDetails: !prev.showErrorDetails
    }));
  };

  handleCopyErrorDetails = async () => {
    if (!this.state.error) return;

    const errorText = `
Error Details:
Message: ${this.state.error.message}
Stack: ${this.state.error.stack}
Component Stack: ${this.state.errorInfo?.componentStack}
Error ID: ${this.state.errorId}
URL: ${window.location.href}
Timestamp: ${new Date().toISOString()}
    `.trim();

    try {
      await navigator.clipboard.writeText(errorText);
      // Show success message
      this.showToast('Error details copied to clipboard');
    } catch (e) {
      console.warn('Failed to copy error details:', e);
      // Fallback: create temporary textarea
      const textarea = document.createElement('textarea');
      textarea.value = errorText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      this.showToast('Error details copied to clipboard');
    }
  };

  handleShareError = async () => {
    if (!this.state.error) return;

    const shareData = {
      title: 'Error Report - Zion Tech Group',
      text: `I encountered an error: ${this.state.error.message}`,
      url: `${window.location.origin}/error-report/${this.state.errorId}`
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(shareData.url);
        this.showToast('Error report link copied to clipboard');
      }
    } catch (e) {
      console.warn('Failed to share error:', e);
    }
  };

  showToast = (message: string) => {
    // Create and show a toast notification
    const toast = document.createElement('div');
    toast.className = 'fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="max-w-2xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-red-200 dark:border-red-800 p-8"
          >
            {/* Error Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full mb-4">
                <AlertTriangle className="w-10 h-10 text-red-600 dark:text-red-400" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                We're sorry, but something unexpected happened. Our team has been notified.
              </p>
            </div>

            {/* Error ID */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Error ID:</span>
                <code className="text-sm font-mono bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                  {this.state.errorId}
                </code>
              </div>
            </div>

            {/* Error Details (Collapsible) */}
            {this.props.showDetails && this.state.error && (
              <div className="mb-6">
                <button
                  onClick={this.handleToggleErrorDetails}
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Bug className="w-4 h-4" />
                  {this.state.showErrorDetails ? 'Hide' : 'Show'} Error Details
                </button>
                
                <AnimatePresence>
                  {this.state.showErrorDetails && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 bg-red-50 dark:bg-red-900/20 rounded-lg p-4 overflow-hidden"
                    >
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-medium text-red-800 dark:text-red-200 mb-1">
                            Error Message:
                          </h4>
                          <p className="text-sm text-red-700 dark:text-red-300 font-mono">
                            {this.state.error.message}
                          </p>
                        </div>
                        
                        {this.state.error.stack && (
                          <div>
                            <h4 className="text-sm font-medium text-red-800 dark:text-red-200 mb-1">
                              Stack Trace:
                            </h4>
                            <pre className="text-xs text-red-700 dark:text-red-300 font-mono bg-red-100 dark:bg-red-900/40 p-3 rounded overflow-x-auto">
                              {this.state.error.stack}
                            </pre>
                          </div>
                        )}
                        
                        {this.state.errorInfo?.componentStack && (
                          <div>
                            <h4 className="text-sm font-medium text-red-800 dark:text-red-200 mb-1">
                              Component Stack:
                            </h4>
                            <pre className="text-xs text-red-700 dark:text-red-300 font-mono bg-red-100 dark:bg-red-900/40 p-3 rounded overflow-x-auto">
                              {this.state.errorInfo.componentStack}
                            </pre>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <RefreshCw className="w-5 h-5" />
                Try Again
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
              >
                <Home className="w-5 h-5" />
                Go Home
              </button>
            </div>

            {/* Secondary Actions */}
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={this.handleGoBack}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>
              
              {this.props.showDetails && this.state.error && (
                <>
                  <button
                    onClick={this.handleCopyErrorDetails}
                    className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Copy Details
                  </button>
                  
                  <button
                    onClick={this.handleShareError}
                    className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                    Share Report
                  </button>
                </>
              )}
            </div>

            {/* Help Section */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <Info className="w-4 h-4" />
                  Need help?
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  If this problem persists, please contact our support team with the Error ID above.
                </p>
                <div className="mt-3 space-x-4">
                  <a
                    href="/contact"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Contact Support
                  </a>
                  <a
                    href="/help"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Help Center
                  </a>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={this.handleRetry}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Close error dialog"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hook for functional components to handle errors
export function useErrorHandler() {
  const handleError = (error: Error, errorInfo?: ErrorInfo) => {
    console.error('Error caught by hook:', error, errorInfo);
    
    // Log to external service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: false
      });
    }
    
    // You can also send to your error tracking service here
  };

  return { handleError };
}

// Higher-order component for error handling
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Partial<Props>
) {
  return function WithErrorBoundary(props: P) {
    return (
      <EnhancedErrorBoundary {...errorBoundaryProps}>
        <Component {...props} />
      </EnhancedErrorBoundary>
    );
  };
}

export default EnhancedErrorBoundary;
