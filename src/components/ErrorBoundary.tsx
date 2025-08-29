import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  RefreshCw, 
  Home, 
  Bug, 
  X, 
  Info,
  AlertCircle,
  CheckCircle,
  RotateCcw
} from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
  enableRecovery?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
  isRecovering: boolean;
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
      isRecovering: false,
      showTechnicalDetails: false
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
      errorInfo
    });

    // Log error to console
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Send error to error reporting service (if available)
    this.reportError(error, errorInfo);
  }

  private static generateErrorId(): string {
    return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    // In a real application, you would send this to your error reporting service
    // For example: Sentry, LogRocket, Bugsnag, etc.
    try {
      const errorReport = {
        errorId: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        // Add any additional context you want to capture
      };

      // Example: Send to analytics or error reporting service
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'exception', {
          description: error.message,
          fatal: true
        });
      }

      // Store in localStorage for debugging (remove in production)
      const errorLog = JSON.parse(localStorage.getItem('errorLog') || '[]');
      errorLog.push(errorReport);
      localStorage.setItem('errorLog', JSON.stringify(errorLog.slice(-10))); // Keep last 10 errors

    } catch (reportingError) {
      console.error('Failed to report error:', reportingError);
    }
  };

  private handleRetry = async () => {
    this.setState({ isRecovering: true });
    
    try {
      // Wait a bit to simulate recovery process
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset error state
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: null,
        isRecovering: false
      });
    } catch (recoveryError) {
      console.error('Recovery failed:', recoveryError);
      this.setState({ isRecovering: false });
    }
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleRefresh = () => {
    window.location.reload();
  };

  private toggleTechnicalDetails = () => {
    this.setState(prev => ({
      showTechnicalDetails: !prev.showTechnicalDetails
    }));
  };

  private copyErrorDetails = () => {
    if (this.state.error && this.state.errorInfo) {
      const errorText = `
Error Details:
Message: ${this.state.error.message}
Stack: ${this.state.error.stack}
Component Stack: ${this.state.errorInfo.componentStack}
Error ID: ${this.state.errorId}
URL: ${window.location.href}
Timestamp: ${new Date().toISOString()}
      `;
      
      navigator.clipboard.writeText(errorText).then(() => {
        // Show success message
        const button = document.getElementById('copy-error-btn');
        if (button) {
          const originalText = button.textContent;
          button.textContent = 'Copied!';
          button.classList.add('text-green-500');
          setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('text-green-500');
          }, 2000);
        }
      }).catch(() => {
        console.error('Failed to copy error details');
      });
    }
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-red-50 dark:bg-red-900/20 px-6 py-4 border-b border-red-200 dark:border-red-800">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-8 w-8 text-red-500" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-red-800 dark:text-red-200">
                    Something went wrong
                  </h1>
                  <p className="text-sm text-red-600 dark:text-red-300">
                    We've encountered an unexpected error
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-6 py-6">
              <div className="space-y-4">
                {/* Error Message */}
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                        Error Details
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {this.state.error?.message || 'An unknown error occurred'}
                      </p>
                      {this.state.errorId && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                          Error ID: <code className="bg-gray-200 dark:bg-gray-600 px-1 py-0.5 rounded">{this.state.errorId}</code>
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Recovery Options */}
                {this.props.enableRecovery !== false && (
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <Info className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-blue-900 dark:text-blue-200 mb-2">
                          What you can do:
                        </h3>
                        <ul className="text-sm text-blue-800 dark:text-blue-300 space-y-1">
                          <li>• Try refreshing the page</li>
                          <li>• Go back to the home page</li>
                          <li>• Contact support if the problem persists</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    onClick={this.handleRetry}
                    disabled={this.state.isRecovering}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    {this.state.isRecovering ? (
                      <>
                        <RotateCcw className="h-4 w-4 animate-spin" />
                        <span>Recovering...</span>
                      </>
                    ) : (
                      <>
                        <RefreshCw className="h-4 w-4" />
                        <span>Try Again</span>
                      </>
                    )}
                  </button>
                  
                  <button
                    onClick={this.handleRefresh}
                    className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <RefreshCw className="h-4 w-4" />
                    <span>Refresh Page</span>
                  </button>
                  
                  <button
                    onClick={this.handleGoHome}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <Home className="h-4 w-4" />
                    <span>Go Home</span>
                  </button>
                </div>

                {/* Technical Details Toggle */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={this.toggleTechnicalDetails}
                    className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                  >
                    <Bug className="h-4 w-4" />
                    <span>
                      {this.state.showTechnicalDetails ? 'Hide' : 'Show'} Technical Details
                    </span>
                  </button>
                </div>

                {/* Technical Details */}
                {this.state.showTechnicalDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                        Technical Information
                      </h4>
                      <button
                        id="copy-error-btn"
                        onClick={this.copyErrorDetails}
                        className="text-xs bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-300 px-2 py-1 rounded transition-colors"
                      >
                        Copy Details
                      </button>
                    </div>
                    
                    {this.state.error?.stack && (
                      <div className="space-y-2">
                        <h5 className="text-xs font-medium text-gray-700 dark:text-gray-300">Stack Trace:</h5>
                        <pre className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-x-auto">
                          {this.state.error.stack}
                        </pre>
                      </div>
                    )}
                    
                    {this.state.errorInfo?.componentStack && (
                      <div className="space-y-2">
                        <h5 className="text-xs font-medium text-gray-700 dark:text-gray-300">Component Stack:</h5>
                        <pre className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-x-auto">
                          {this.state.errorInfo.componentStack}
                        </pre>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-t border-gray-200 dark:border-gray-600">
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>Need help? Contact our support team</span>
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  support@ziontechgroup.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hook for functional components to handle errors
export function useErrorHandler() {
  const [error, setError] = React.useState<Error | null>(null);

  const handleError = React.useCallback((error: Error) => {
    setError(error);
    console.error('Error caught by useErrorHandler:', error);
  }, []);

  const clearError = React.useCallback(() => {
    setError(null);
  }, []);

  return { error, handleError, clearError };
}

// Higher-order component for error boundaries
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Partial<Props>
) {
  return function WrappedComponent(props: P) {
    return (
      <ErrorBoundary {...errorBoundaryProps}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}
