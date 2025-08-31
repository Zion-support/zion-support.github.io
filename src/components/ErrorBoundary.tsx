<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  RefreshCw, 
  Home, 
  ArrowLeft, 
  Bug, 
  FileText, 
  MessageCircle,
  X,
  CheckCircle,
  Info
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

interface Props {
  children: ReactNode;
  FallbackComponent?: React.ComponentType<{ error: Error; errorInfo: ErrorInfo; resetError: () => void }>;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
<<<<<<< HEAD
  onReset?: () => void;
=======
import React, { Component, ErrorInfo, ReactNode } from 'react.ts';
<<<<<<< HEAD
import { motion               } from 'framer-motion.ts';
import { AlertTriangle,
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
interface Props extends React.PropsWithChildren<{}> {

  children: anyanyanyanyanyanyanyanyanyanyanyanyanyanyReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo)               => void;
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
=======
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
  showDetails?: boolean;
  autoRecover?: boolean;
  maxRetries?: number;
}

interface State {













  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
<<<<<<< HEAD
  errorId: string;
<<<<<<< HEAD
  isReporting: boolean;
  reportSent: boolean;
  showStack: boolean;
=======
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
  retryCount: number;
  isRecovering: boolean;
  showErrorDetails: boolean;
  errorId: string;
}

=======
=======
import { AlertTriangle, RefreshCw, Home, ArrowLeft  
 
 
 
 
 
 
 
 
 
 
 
 
 
} from 'lucide-react.ts';

interface Props extends React.PropsWithChildren<{}> {
  children: anyanyanyanyanyanyanyanyanyanyanyanyanyanyReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo)               => void;
}

interface State {














  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;














}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0,
      isRecovering: false,
      showErrorDetails: false,
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
    const { onError, autoRecover, maxRetries = 3 } = this.props;
    const { retryCount } = this.state;

    // Log error
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    // Call custom error handler
    if (onError) {
      onError(error, errorInfo);
    }

<<<<<<< HEAD
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
<<<<<<< HEAD
=======

<<<<<<< HEAD
    // Log to external service (you can replace this with your error logging service)
    this.logErrorToService(error, errorInfo);

  private logErrorToService = (error: anyanyanyanyanyanyanyanyanyanyanyanyanyanyError, errorInfo: ErrorInfo)               => {
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
<<<<<<< HEAD
      // // // console.log('Error logged:', errorData);
=======
      // // // // // // // console.log('Error logged:', errorData);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2

      // Example: Send to external service
      // fetch('/api/errors', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(errorData)
      // });
    } catch (logError) {
<<<<<<< HEAD
      // // // console.error('Failed to log error:', logError);

=======
      // // // // // // // console.error('Failed to log error:', logError);
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
=======
    // Auto-recovery logic
    if (autoRecover && retryCount < maxRetries) {
      this.setState(prev => ({ 
        retryCount: prev.retryCount + 1,
        isRecovering: true 
      }));

      // Attempt recovery after a delay
      setTimeout(() => {
        this.setState({ 
          hasError: false, 
          error: null, 
          errorInfo: null,
          isRecovering: false 
        });
      }, 2000 + (retryCount * 1000)); // Exponential backoff
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
    }

    // Send error to analytics/monitoring service
    this.reportError(error, errorInfo);
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    try {
      // This would typically send to your error reporting service
      // Example: Sentry, LogRocket, Bugsnag, etc.
      const errorReport = {
        error: {
          name: error.name,
          message: error.message,
          stack: error.stack,
          componentStack: errorInfo.componentStack
        },
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        errorId: this.state.errorId
      };

      // Send to your error reporting endpoint
      fetch('/api/error-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(errorReport)
      }).catch(() => {
        // Fallback: log to console if reporting fails
        console.log('Error report:', errorReport);
      });
    } catch (reportingError) {
      console.warn('Failed to report error:', reportingError);
    }
  };

<<<<<<< HEAD
<<<<<<< HEAD
  // Reset error boundary
  private resetErrorBoundary = () => {
=======
  private resetError = () => {
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0,
      isRecovering: false,
      showErrorDetails: false
    });
  };

<<<<<<< HEAD
  // Copy error details to clipboard
  private copyErrorDetails = async () => {
    if (!this.state.error || !this.state.errorInfo) return;

    const errorText = `
Error ID: ${this.state.errorId}
Error: ${this.state.error.name}
Message: ${this.state.error.message}
=======
<<<<<<< HEAD
  private handleCopyError = () => {
    if (this.state.error && this.state.errorInfo) {
      const errorText = `
Error Details: anyanyanyanyanyanyanyanyanyanyanyanyanyanyMessage: ${this.state.error.message}
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
Stack: ${this.state.error.stack}
Component Stack: ${this.state.errorInfo.componentStack}
URL: ${window.location.href}
<<<<<<< HEAD
Timestamp: ${new Date().toISOString()}
    `.trim();
=======
User Agent: ${navigator.userAgent}
      `.trim();

      navigator.clipboard.writeText(errorText).then(()               => {
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

      }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = errorText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      });
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894

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
=======
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
  private goHome = () => {
    window.location.href = '/';
  };

  private goBack = () => {
    window.history.back();
  };

  private copyErrorDetails = () => {
    const { error, errorInfo, errorId } = this.state;
    if (!error) return;

    const errorDetails = `
Error ID: ${errorId}
Error: ${error.name}
Message: ${error.message}
Stack: ${error.stack}
Component Stack: ${errorInfo?.componentStack}
URL: ${window.location.href}
Timestamp: ${new Date().toISOString()}
    `.trim();

    navigator.clipboard.writeText(errorDetails).then(() => {
      // Show success message
      this.setState(prev => ({
        showErrorDetails: false
      }));
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = errorDetails;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    });
  };

  private toggleErrorDetails = () => {
    this.setState(prev => ({
      showErrorDetails: !prev.showErrorDetails
    }));
  };

  render() {
    const { 
      children, 
      FallbackComponent, 
      showDetails = false,
      autoRecover = false,
      maxRetries = 3
    } = this.props;

    const { 
      hasError, 
      error, 
      errorInfo, 
      retryCount, 
      isRecovering,
      showErrorDetails,
      errorId 
    } = this.state;

    if (hasError) {
      // Use custom fallback component if provided
      if (FallbackComponent) {
        return (
          <FallbackComponent
            error={error!}
            errorInfo={errorInfo!}
            resetError={this.resetError}
          />
        );
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl w-full bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 text-center"
          >
            {/* Error Icon */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Bug className="w-10 h-10 text-red-400" />
            </motion.div>

            {/* Error Title */}
            <h1 className="text-3xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>

            {/* Error Message */}
            <p className="text-lg text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>

            {/* Error ID */}
            <div className="bg-white/10 rounded-lg p-3 mb-6">
              <p className="text-sm text-gray-400">
                Error ID: <span className="font-mono text-zion-cyan">{errorId}</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button
                onClick={this.resetError}
                disabled={isRecovering}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-zion-cyan hover:bg-zion-cyan-dark disabled:bg-gray-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 disabled:transform-none"
              >
                {isRecovering ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    Recovering...
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-5 h-5" />
                    Try Again
                  </>
                )}
              </button>

              <button
                onClick={this.goHome}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20"
              >
                <Home className="w-5 h-5" />
                Go Home
              </button>

              <button
                onClick={this.goBack}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
            </div>

            {/* Auto-recovery Info */}
            {autoRecover && retryCount < maxRetries && (
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 text-blue-300 mb-2">
                  <Info className="w-5 h-5" />
                  <span className="font-medium">Auto-recovery in progress</span>
                </div>
                <p className="text-sm text-blue-200">
                  Attempt {retryCount + 1} of {maxRetries}. This page will automatically reload in a few seconds.
                </p>
              </div>
            )}

            {/* Error Details Toggle */}
            <div className="border-t border-white/20 pt-6">
              <button
                onClick={this.toggleErrorDetails}
                className="flex items-center justify-center gap-2 mx-auto text-gray-400 hover:text-white transition-colors"
              >
                <FileText className="w-4 h-4" />
                {showErrorDetails ? 'Hide' : 'Show'} Technical Details
              </button>
            </div>

            {/* Error Details */}
            <AnimatePresence>
              {showErrorDetails && error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 text-left"
                >
                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-white">Error Details</h3>
                      <button
                        onClick={this.copyErrorDetails}
                        className="flex items-center gap-2 px-3 py-1 bg-zion-cyan hover:bg-zion-cyan-dark text-white text-sm rounded-lg transition-colors"
                      >
                        <CheckCircle className="w-4 h-4" />
                        Copy
                      </button>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="text-gray-400">Error:</span>
                        <span className="text-red-400 ml-2">{error.name}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Message:</span>
                        <span className="text-white ml-2">{error.message}</span>
                      </div>
                      {error.stack && (
                        <div>
                          <span className="text-gray-400">Stack:</span>
                          <pre className="text-xs text-gray-300 mt-1 bg-black/50 p-2 rounded overflow-x-auto">
                            {error.stack}
                          </pre>
                        </div>
                      )}
                      {errorInfo?.componentStack && (
                        <div>
                          <span className="text-gray-400">Component Stack:</span>
                          <pre className="text-xs text-gray-300 mt-1 bg-black/50 p-2 rounded overflow-x-auto">
                            {errorInfo.componentStack}
                          </pre>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Contact Support */}
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-sm text-gray-400 mb-3">
                Still having issues? Contact our support team
              </p>
              <div className="flex items-center justify-center gap-4">
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Email Support
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Call Support
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      );
    }

    return children;
  }
}

<<<<<<< HEAD
// Hook-based error boundary for functional components
export function useErrorHandler(...args: any[]): any {
  const [error, setError] = React.useState<any>(null);

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

  const handleError = React.useCallback((error: anyanyanyanyanyanyanyanyanyanyanyanyanyanyError)               => {
=======
// Hook for functional components to handle errors
export const useErrorHandler = () => {
  const [error, setError] = React.useState<Error | null>(null);

  const handleError = React.useCallback((error: Error) => {
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
    setError(error);
    console.error('Error caught by useErrorHandler:', error);
  }, []);

  const clearError = React.useCallback(() => {
    setError(null);
  }, []);

  return { error, handleError, clearError };
};

<<<<<<< HEAD
// Higher-order component for error boundaries
export function withErrorBoundary<P extends object>(
  Component: anyanyanyanyanyanyanyanyanyanyanyanyanyanyReact.ComponentType<P>,
  fallback?: ReactNode,
  onError?: (error: Error, errorInfo: ErrorInfo)               => void
) {
  return function WithErrorBoundary(...args: any[]): any {
    return (
      <ErrorBoundary fallback={fallback} onError={onError}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}
=======
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
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089

<<<<<<< HEAD
=======
<<<<<<< HEAD
// Hook for functional components to catch errors
export function useErrorHandler(...args: anyanyanyanyanyanyanyanyanyanyanyanyanyany[]): any {
  return React.useCallback((error: anyError, errorInfo?: ErrorInfo)               => {
<<<<<<< HEAD
    // // // console.error('Error caught by useErrorHandler:', error, errorInfo);
=======
    // // // // // // // console.error('Error caught by useErrorHandler:', error, errorInfo);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2

    // You can add custom error handling logic here
    // For example, sending to an error reporting service

    // Re-throw the error to trigger error boundaries
    throw error;
  }, []);
}}}}}}}}}}}}}}}}
=======
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
// Global error handler for unhandled errors
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    console.error('Unhandled error: anyanyanyanyanyanyanyanyanyanyanyanyanyany', event.error);
  });

  window.addEventListener('unhandledrejection', (event)               => {
    console.error('Unhandled promise rejection:', event.reason);
  });
}
