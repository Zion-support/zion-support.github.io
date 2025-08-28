import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  RefreshCw, 
  Home, 
  Bug, 
  X, 
  Copy, 
  Download,
  MessageCircle
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

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
  errorId: string;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false,
      errorId: ''
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: this.generateErrorId()
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

    // Send error to error reporting service (e.g., Sentry)
    this.reportError(error, errorInfo);

    // Log error to localStorage for debugging
    this.logErrorToStorage(error, errorInfo);
  }

  private static generateErrorId(): string {
    return `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  private reportError(error: Error, errorInfo: ErrorInfo) {
    // This would integrate with your error reporting service
    // Example: Sentry.captureException(error, { extra: errorInfo });
    
    try {
      // Send to analytics or error tracking service
      if (window.gtag) {
        window.gtag('event', 'exception', {
          description: error.message,
          fatal: true
        });
      }
    } catch (e) {
      console.warn('Failed to report error:', e);
    }
  }

  private logErrorToStorage(error: Error, errorInfo: ErrorInfo) {
    try {
      const errorLog = {
        timestamp: new Date().toISOString(),
        errorId: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        url: window.location.href,
        userAgent: navigator.userAgent
      };

      const existingLogs = JSON.parse(localStorage.getItem('error-logs') || '[]');
      existingLogs.unshift(errorLog);
      
      // Keep only last 10 errors
      if (existingLogs.length > 10) {
        existingLogs.splice(10);
      }
      
      localStorage.setItem('error-logs', JSON.stringify(existingLogs));
    } catch (e) {
      console.warn('Failed to log error to storage:', e);
    }
  }

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false
    });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleToggleDetails = () => {
    this.setState(prev => ({
      showDetails: !prev.showDetails
    }));
  };

  private handleCopyError = () => {
    if (this.state.error && this.state.errorInfo) {
      const errorText = `
Error Details:
Message: ${this.state.error.message}
Stack: ${this.state.error.stack}
Component Stack: ${this.state.errorInfo.componentStack}
URL: ${window.location.href}
Error ID: ${this.state.errorId}
      `.trim();

      navigator.clipboard.writeText(errorText).then(() => {
        // Show success message
        this.showToast('Error details copied to clipboard');
      }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = errorText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        this.showToast('Error details copied to clipboard');
      });
    }
  };

  private handleDownloadError = () => {
    if (this.state.error && this.state.errorInfo) {
      const errorData = {
        timestamp: new Date().toISOString(),
        errorId: this.state.errorId,
        message: this.state.error.message,
        stack: this.state.error.stack,
        componentStack: this.state.errorInfo.componentStack,
        url: window.location.href,
        userAgent: navigator.userAgent
      };

      const blob = new Blob([JSON.stringify(errorData, null, 2)], {
        type: 'application/json'
      });
      
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `error-${this.state.errorId}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  private showToast(message: string) {
    // Create a simple toast notification
    const toast = document.createElement('div');
    toast.className = 'fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-md shadow-lg z-50';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 3000);
  }

  private getErrorMessage(): string {
    if (!this.state.error) return 'An unexpected error occurred';

    const error = this.state.error;
    
    // Provide user-friendly error messages based on error type
    if (error.name === 'TypeError') {
      return 'There was a problem with the data format. Please try refreshing the page.';
    }
    
    if (error.name === 'NetworkError' || error.message.includes('fetch')) {
      return 'There was a problem connecting to our servers. Please check your internet connection and try again.';
    }
    
    if (error.message.includes('chunk')) {
      return 'There was a problem loading the page content. Please refresh the page to try again.';
    }
    
    return 'Something went wrong. Please try refreshing the page or contact support if the problem persists.';
  }

  private getErrorCategory(): string {
    if (!this.state.error) return 'Unknown';
    
    const error = this.state.error;
    
    if (error.name === 'TypeError') return 'Data Error';
    if (error.name === 'NetworkError' || error.message.includes('fetch')) return 'Network Error';
    if (error.message.includes('chunk')) return 'Loading Error';
    if (error.message.includes('syntax')) return 'Code Error';
    
    return 'Application Error';
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl w-full bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-red-50 dark:bg-red-900/20 px-6 py-4 border-b border-red-200 dark:border-red-800">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-red-100 dark:bg-red-800 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-red-900 dark:text-red-100">
                    {this.getErrorCategory()}
                  </h1>
                  <p className="text-red-700 dark:text-red-300">
                    Error ID: {this.state.errorId}
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bug className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <h2 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-2">
                  Oops! Something went wrong
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  {this.getErrorMessage()}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={this.handleRetry}
                  className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Try Again</span>
                </button>
                
                <button
                  onClick={this.handleGoHome}
                  className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                >
                  <Home className="w-4 h-4" />
                  <span>Go Home</span>
                </button>
              </div>

              {/* Error Details Toggle */}
              <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                <button
                  onClick={this.handleToggleDetails}
                  className="w-full flex items-center justify-between text-left text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                >
                  <span>Technical Details</span>
                  <motion.div
                    animate={{ rotate: this.state.showDetails ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Error Details */}
                <AnimatePresence>
                  {this.state.showDetails && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 space-y-3"
                    >
                      {this.state.error && (
                        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-4 space-y-3">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-slate-900 dark:text-slate-100">
                              Error Message
                            </h4>
                            <div className="flex space-x-2">
                              <button
                                onClick={this.handleCopyError}
                                className="p-2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
                                title="Copy error details"
                              >
                                <Copy className="w-4 h-4" />
                              </button>
                              <button
                                onClick={this.handleDownloadError}
                                className="p-2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
                                title="Download error report"
                              >
                                <Download className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                          
                          <div className="bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 p-3">
                            <pre className="text-xs text-slate-700 dark:text-slate-300 whitespace-pre-wrap break-words">
                              {this.state.error.message}
                            </pre>
                          </div>
                        </div>
                      )}

                      {this.state.errorInfo && (
                        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-4">
                          <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-3">
                            Component Stack
                          </h4>
                          <div className="bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 p-3">
                            <pre className="text-xs text-slate-700 dark:text-slate-300 whitespace-pre-wrap break-words">
                              {this.state.errorInfo.componentStack}
                            </pre>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Support Contact */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                <div className="flex items-start space-x-3">
                  <MessageCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                  <div className="text-sm">
                    <p className="text-blue-900 dark:text-blue-100 font-medium mb-1">
                      Need help?
                    </p>
                    <p className="text-blue-700 dark:text-blue-300">
                      If this error persists, please contact our support team with the Error ID above.
                    </p>
                  </div>
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

// Higher-order component for functional components
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<Props, 'children'>
) {
  return function WrappedComponent(props: P) {
    return (
      <ErrorBoundary {...errorBoundaryProps}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}

// Hook for functional components to catch errors
export function useErrorHandler() {
  return React.useCallback((error: Error, errorInfo?: ErrorInfo) => {
    console.error('Error caught by useErrorHandler:', error, errorInfo);
    
    // You can add custom error handling logic here
    // For example, sending to an error reporting service
    
    // Re-throw the error to trigger the nearest error boundary
    throw error;
  }, []);
}
