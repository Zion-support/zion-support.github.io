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
  CheckCircle,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
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

  static getDerivedStateFromError(error: Error): State {
    return { 
      hasError: true, 
      error,
      errorInfo: null,
      showStack: false,
      errorId: this.generateErrorId()
    };
  }

  private static generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });

    // Log error to external service (e.g., Sentry)
    if (process.env.NODE_ENV === 'production') {
      // You can integrate with error reporting services here
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack
      });
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

      // Here you would send errorData to your error logging service
      // For now, we'll just log it to console
      console.error('Error logged:', errorData);
    } catch (loggingError) {
      console.error('Failed to log error:', loggingError);
    }
  };

  handleRetry = () => {
    this.setState({ 
      hasError: false, 
      error: null, 
      errorInfo: null,
      showStack: false,
      errorId: ''
    });
  };

  toggleStack = () => {
    this.setState(prevState => ({ showStack: !prevState.showStack }));
  };

  copyErrorDetails = () => {
    const errorDetails = `
Error: ${this.state.error?.message}
Stack: ${this.state.error?.stack}
Component Stack: ${this.state.errorInfo?.componentStack}
URL: ${window.location.href}
Timestamp: ${new Date().toISOString()}
    `.trim();

    navigator.clipboard.writeText(errorDetails).then(() => {
      // Show success message
      console.log('Error details copied to clipboard');
    }).catch(() => {
      console.error('Failed to copy error details');
    });
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
          className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 flex items-center justify-center p-4"
        >
          <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl border border-red-200 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 text-white">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-8 h-8 text-red-100" />
                <div>
                  <h1 className="text-2xl font-bold">Something went wrong</h1>
                  <p className="text-red-100 mt-1">
                    We've encountered an unexpected error
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="space-y-4">
                {/* Error Message */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-red-800">Error Details</h3>
                      <p className="text-red-700 mt-1 text-sm">
                        {this.state.error?.message || 'An unknown error occurred'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Error ID */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Info className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Error ID:</span>
                      <code className="text-xs bg-gray-200 px-2 py-1 rounded font-mono">
                        {this.state.errorId}
                      </code>
                    </div>
                    <button
                      onClick={this.copyErrorDetails}
                      className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </button>
                  </div>
                </div>

                {/* Stack Trace Toggle */}
                {this.state.errorInfo && (
                  <div className="space-y-3">
                    <button
                      onClick={this.toggleStack}
                      className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      <Bug className="w-4 h-4" />
                      <span>
                        {this.state.showStack ? 'Hide' : 'Show'} Technical Details
                      </span>
                    </button>

                    {this.state.showStack && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-xs overflow-auto max-h-64"
                      >
                        <div className="space-y-2">
                          <div className="text-yellow-400">
                            Component Stack:
                          </div>
                          <pre className="whitespace-pre-wrap">
                            {this.state.errorInfo.componentStack}
                          </pre>
                          {this.state.error?.stack && (
                            <>
                              <div className="text-yellow-400 mt-4">
                                Error Stack:
                              </div>
                              <pre className="whitespace-pre-wrap">
                                {this.state.error.stack}
                              </pre>
                            </>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    onClick={this.handleRetry}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Try Again</span>
                  </button>
                  
                  <Link
                    to="/"
                    className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <Home className="w-4 h-4" />
                    <span>Go Home</span>
                  </Link>
                </div>

                {/* Additional Help */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Info className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-blue-800">Need Help?</h3>
                      <p className="text-blue-700 mt-1 text-sm">
                        If this error persists, please contact our support team with the Error ID above.
                      </p>
                      <div className="mt-3 flex space-x-3">
                        <Link
                          to="/contact"
                          className="inline-flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <span>Contact Support</span>
                          <ArrowLeft className="w-4 h-4 rotate-180" />
                        </Link>
                        <Link
                          to="/help"
                          className="inline-flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <span>Help Center</span>
                          <ArrowLeft className="w-4 h-4 rotate-180" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
