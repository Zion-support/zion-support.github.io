import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  RefreshCw, 
  Home, 
  Bug, 
  FileText, 
  Copy, 
  X,
  AlertCircle,
  Info,
  Zap,
  CheckCircle
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
  showStack: boolean;
  errorId: string;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      showStack: false,
      errorId: ''
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      errorInfo
    });

    // Log error to console
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log to external service (you can replace this with your error logging service)
    this.logErrorToService(error, errorInfo);
  }

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    try {
      // Example: Send to error logging service
      const errorData = {
        id: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        // Add any other relevant information
      };

      // You can send this to your error logging service
      console.log('Error logged:', errorData);
      
      // Example: Send to external service
      // fetch('/api/errors', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(errorData)
      // });
    } catch (logError) {
      console.error('Failed to log error:', logError);
    }
  };

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      showStack: false
    });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleCopyError = () => {
    if (this.state.error && this.state.errorInfo) {
      const errorText = `
Error Details:
Message: ${this.state.error.message}
Stack: ${this.state.error.stack}
Component Stack: ${this.state.errorInfo.componentStack}
Error ID: ${this.state.errorId}
Timestamp: ${new Date().toISOString()}
URL: ${window.location.href}
User Agent: ${navigator.userAgent}
      `.trim();

      navigator.clipboard.writeText(errorText).then(() => {
        // Show success feedback
        const button = document.querySelector('[data-copy-button]') as HTMLButtonElement;
        if (button) {
          const originalText = button.innerHTML;
          button.innerHTML = '<CheckCircle className="w-4 h-4" /> Copied!';
          button.classList.add('text-green-600');
          setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.remove('text-green-600');
          }, 2000);
        }
      }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = errorText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      });
    }
  };

  private toggleStack = () => {
    this.setState(prev => ({ showStack: !prev.showStack }));
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4"
        >
          <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl border border-red-200 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Oops! Something went wrong</h1>
                  <p className="text-red-100 mt-1">
                    We've encountered an unexpected error and our team has been notified.
                  </p>
                </div>
              </div>
            </div>

            {/* Error Details */}
            <div className="p-6">
              <div className="space-y-4">
                {/* Error Message */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-red-800 mb-1">Error Message</h3>
                      <p className="text-red-700 text-sm font-mono break-words">
                        {this.state.error?.message || 'Unknown error occurred'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Error ID */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bug className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Error ID:</span>
                    </div>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded font-mono text-gray-700">
                      {this.state.errorId}
                    </code>
                  </div>
                </div>

                {/* Stack Trace Toggle */}
                {this.state.errorInfo && (
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={this.toggleStack}
                      className="w-full p-4 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between text-left"
                    >
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-gray-500" />
                        <span className="font-medium text-gray-700">
                          {this.state.showStack ? 'Hide' : 'Show'} Technical Details
                        </span>
                      </div>
                      <motion.div
                        animate={{ rotate: this.state.showStack ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="w-4 h-4 text-gray-500" />
                      </motion.div>
                    </button>
                    
                    {this.state.showStack && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-gray-200 p-4 bg-gray-900 text-green-400 font-mono text-xs overflow-x-auto"
                      >
                        <div className="space-y-2">
                          <div>
                            <span className="text-yellow-400">Component Stack:</span>
                            <pre className="mt-1 whitespace-pre-wrap">
                              {this.state.errorInfo.componentStack}
                            </pre>
                          </div>
                          {this.state.error?.stack && (
                            <div>
                              <span className="text-yellow-400">Error Stack:</span>
                              <pre className="mt-1 whitespace-pre-wrap">
                                {this.state.error.stack}
                              </pre>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </div>
                )}

                {/* Helpful Information */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-blue-800 mb-2">What you can do:</h3>
                      <ul className="text-blue-700 text-sm space-y-1">
                        <li>• Try refreshing the page</li>
                        <li>• Check your internet connection</li>
                        <li>• Clear your browser cache</li>
                        <li>• Contact support if the problem persists</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button
                  onClick={this.handleRetry}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <RefreshCw className="w-4 h-4" />
                  Try Again
                </button>
                
                <button
                  onClick={this.handleGoHome}
                  className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:from-gray-600 hover:to-gray-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Home className="w-4 h-4" />
                  Go Home
                </button>
              </div>

              {/* Additional Actions */}
              <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-gray-200">
                <button
                  onClick={this.handleCopyError}
                  data-copy-button
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <Copy className="w-4 h-4" />
                  Copy Error Details
                </button>
                
                <button
                  onClick={() => window.location.reload()}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <Zap className="w-4 h-4" />
                  Hard Refresh
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <p className="text-center text-sm text-gray-500">
                If this problem continues, please contact our support team with the Error ID above.
              </p>
            </div>
          </div>
        </motion.div>
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
    
    // Re-throw the error to trigger error boundaries
    throw error;
  }, []);
}
