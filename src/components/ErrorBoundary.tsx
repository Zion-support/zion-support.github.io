<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react.ts';
<<<<<<< HEAD
import { motion  } from 'framer-motion.ts';
import { AlertTriangle,
  RefreshCw,
  Home,
  Bug,
  FileText,
  Copy,
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  RefreshCw, 
  Home, 
  Bug, 
  FileText, 
  Copy, 
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
  X,
  AlertCircle,
  Info,
  Zap,
  CheckCircle
<<<<<<< HEAD
interface Props extends React.PropsWithChildren<{}> {

  children: anyReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo)  => void;
  showDetails?: boolean;
=======
} from 'lucide-react';

interface Props extends React.PropsWithChildren<{}> {

  children: anyReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo)  => void;

}
>>>>>>> 0db51c83ec2639597974243032be26f90b238361

interface State {

  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  showStack: boolean;
  errorId: string;
=======
import { AlertTriangle, RefreshCw, Home, ArrowLeft  
} from 'lucide-react.ts';

interface Props extends React.PropsWithChildren<{}> {
  children: anyReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo)  => void;
}

interface State {

  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;

}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
<<<<<<< HEAD
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      showStack: false,
      errorId: ''
    };

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    };
=======
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
<<<<<<< HEAD
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo,
      errorId
    });

<<<<<<< HEAD
    // Log error to console
<<<<<<< HEAD
    // // // console.error('ErrorBoundary caught an error:', error, errorInfo);
=======
    // // // // // // // console.error('ErrorBoundary caught an error:', error, errorInfo);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
=======
    this.setState({
      errorInfo
    });

    // Log error to console
    console.error('ErrorBoundary caught an error:', error, errorInfo);
>>>>>>> 0db51c83ec2639597974243032be26f90b238361

    // Call custom error handler if provided
=======
    // Call the onError callback if provided
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
<<<<<<< HEAD
=======
    }
>>>>>>> 0db51c83ec2639597974243032be26f90b238361

<<<<<<< HEAD
    // Log to external service (you can replace this with your error logging service)
    this.logErrorToService(error, errorInfo);
<<<<<<< HEAD
=======
  }
>>>>>>> 0db51c83ec2639597974243032be26f90b238361

  private logErrorToService = (error: anyError, errorInfo: ErrorInfo)  => {
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
<<<<<<< HEAD
      // // // console.error('Failed to log error:', logError);

=======
      // // // // // // // console.error('Failed to log error:', logError);
    }
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
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
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
=======
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
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
  };

  private handleGoHome = () => {;
    window.location.href = '/';
  };

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
  private handleCopyError = () => {
    if (this.state.error && this.state.errorInfo) {
      const errorText = `
Error Details: anyMessage: ${this.state.error.message}
Stack: ${this.state.error.stack}
Component Stack: ${this.state.errorInfo.componentStack}
Error ID: ${this.state.errorId}
Timestamp: ${new Date().toISOString()}
URL: ${window.location.href}
User Agent: ${navigator.userAgent}
      `.trim();

      navigator.clipboard.writeText(errorText).then(()  => {
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
<<<<<<< HEAD

=======
    }
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
  };

  private toggleStack = () => {
    this.setState(prev => ({ showStack: !prev.showStack }));
=======
  private handleGoBack = () => {
    window.history.back();
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;

      // Default error UI
      return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4"

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
<<<<<<< HEAD
=======
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 text-center">
            {/* Error Icon */}
            <div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
=======
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
            </div>

            {/* Error Title */}
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Oops! Something went wrong
            </h1>

            {/* Error Message */}
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We encountered an unexpected error. Please try again or contact support if the problem persists.
            </p>

<<<<<<< HEAD
            {/* Error Details (Development only) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Error Details (Development)
                </summary>
                <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 text-xs font-mono text-gray-800 dark:text-gray-200 overflow-auto">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
=======
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
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
                  </div>
                  {this.state.error.stack && (
                    <div>
                      <strong>Stack:</strong>
                      <pre className="whitespace-pre-wrap mt-1">{this.state.error.stack}</pre>
                    </div>
                  )}
                  {this.state.errorInfo?.componentStack && (
                    <div>
                      <strong>Component Stack:</strong>
                      <pre className="whitespace-pre-wrap mt-1">{this.state.errorInfo.componentStack}</pre>
                    </div>
                  )}
                </div>
              </details>
            )}

<<<<<<< HEAD
                {/* Stack Trace Toggle */}
                {this.state.errorInfo && (
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={this.toggleStack}
                      className="w-full p-4 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between text-left"

                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-gray-500" />
                        <span className="font-medium text-gray-700">
                          {this.state.showStack ? 'Hide' : 'Show'} Technical Details
                        </span>
                      </div>
                      <motion.div
                        animate={{ rotate: this.state.showStack ? 180 : 0 }}
                        transition={{ duration: 0.2 }}

                        <X className="w-4 h-4 text-gray-500" />
                      </motion.div>
                    </button>

                    {this.state.showStack && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-gray-200 p-4 bg-gray-900 text-green-400 font-mono text-xs overflow-x-auto"

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

                  <RefreshCw className="w-4 h-4" />
                  Try Again
                </button>

                <button
                  onClick={this.handleGoHome}
                  className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:from-gray-600 hover:to-gray-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"

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

                  <Copy className="w-4 h-4" />
                  Copy Error Details
                </button>

                <button
                  onClick={() => window.location.reload()}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"

                  <Zap className="w-4 h-4" />
                  Hard Refresh
                </button>
              </div>
<<<<<<< HEAD
=======
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
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
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
          </div>
        </div>
=======
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <p className="text-center text-sm text-gray-500">
                If this problem continues, please contact our support team with the Error ID above.
              </p>
            </div>
          </div>
        </motion.div>
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
      );

    return this.props.children;


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

  const handleError = React.useCallback((error: anyError)  => {
    setError(error);
  }, []);

  const clearError = React.useCallback(() => {
    setError(null);
  }, []);

  return { error, handleError, clearError };
}

<<<<<<< HEAD
// Higher-order component for error boundaries
=======
// Higher-order component for functional components
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
export function withErrorBoundary<P extends object>(
  Component: anyReact.ComponentType<P>,
  fallback?: ReactNode,
  onError?: (error: Error, errorInfo: ErrorInfo)  => void
) {
  return function WithErrorBoundary(...args: any[]): any {
    return (
      <ErrorBoundary fallback={fallback} onError={onError}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };

<<<<<<< HEAD
// Hook for functional components to catch errors
export function useErrorHandler(...args: any[]): any {
  return React.useCallback((error: anyError, errorInfo?: ErrorInfo)  => {
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
// Global error handler for unhandled errors
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    console.error('Unhandled error: any', event.error);
  });

  window.addEventListener('unhandledrejection', (event)  => {
    console.error('Unhandled promise rejection:', event.reason);
  });
}
<<<<<<< HEAD
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
=======
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
