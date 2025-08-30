import React, { Component, ErrorInfo, ReactNode } from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  RefreshCw,
  Home,
  Bug,
  X,
  Info,
  Copy,
  ExternalLink,
  Shield,
  Zap
=======
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

>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
<<<<<<< HEAD
  className?: string;
=======
}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
<<<<<<< HEAD
  errorId: string | null;
  showDetails: boolean;
  isRecovering: boolean;
=======
  showErrorDetails: boolean;
  errorId: string;
}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

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

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
      showErrorDetails: false,
      errorId: `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to console
<<<<<<< HEAD
<<<<<<< HEAD
    // // // console.error('Error caught by boundary:', error, errorInfo);
=======
    // // // // // // // console.error('Error caught by boundary:', error, errorInfo);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
=======
    console.error('Error Boundary caught an error:', error, errorInfo);
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);

<<<<<<< HEAD
    // Log to external service (in production)
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo);


  private static generateErrorId(): string {
    return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  private logErrorToService(error: Error, errorInfo: ErrorInfo) {
    // This would typically send to a service like Sentry, LogRocket, etc.
=======
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
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
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

      };

<<<<<<< HEAD
      // Example: Send to analytics service
      if (window.gtag) {
        window.gtag('event', 'exception', {
          description: error.message,
          fatal: true
        });

      // Store in localStorage for debugging
      const errors = JSON.parse(localStorage.getItem('error-log') || '[]');
      errors.push(errorData);
      localStorage.setItem('error-log', JSON.stringify(errors.slice(-10))); // Keep last 10 errors
    } catch (logError) {
<<<<<<< HEAD
      // // // console.error('Failed to log error:', logError);

=======
      // // // // // // // console.error('Failed to log error:', logError);
=======
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
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    }
  }
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2

<<<<<<< HEAD
  private handleRetry = () => {
    this.setState({ isRecovering: true });

    // Attempt to recover by clearing error state
    setTimeout(() => {
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: null,
        isRecovering: false
      });
    }, 1000);
=======
  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      showErrorDetails: false,
      errorId: this.generateErrorId()
    });
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  };

  handleGoHome = () => {;
    window.location.href = '/';
  };

  handleGoBack = () => {;
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

<<<<<<< HEAD
      navigator.clipboard.writeText(errorText).then(() => {
        // Show success feedback
        const button = document.querySelector('[data-copy-button]') as HTMLButtonElement;
        if (button) {
          const originalText = button.textContent;
          button.textContent = 'Copied!';
          button.disabled = true;
          setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
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

=======
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
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
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

      // Default error UI
      return (
<<<<<<< HEAD
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 ${this.props.className || ''}`}

          <div className="max-w-2xl w-full">
            {/* Error Header */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-center mb-8"

              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500/20 rounded-full mb-4">
                <AlertTriangle className="w-10 h-10 text-red-400" />
=======
        <div className = "min-h-screen bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="max-w-2xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-red-200 dark:border-red-800 p-8"
          >
            {/* Error Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full mb-4">
                <AlertTriangle className="w-10 h-10 text-red-600 dark:text-red-400" />
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                We're sorry, but something unexpected happened. Our team has been notified.
              </p>
            </div>

<<<<<<< HEAD
            {/* Error Details */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 mb-6"

              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white flex items-center space-x-2">
                  <Bug className="w-5 h-5 text-red-400" />
                  <span>Error Details</span>
                </h2>
                <button
                  onClick={this.toggleDetails}
                  className="text-sm text-gray-400 hover:text-white transition-colors"

                  {this.state.showDetails ? 'Hide' : 'Show'} Details
                </button>
=======
            {/* Error ID */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Error ID:</span>
                <code className="text-sm font-mono bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                  {this.state.errorId}
                </code>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              </div>
            </div>

<<<<<<< HEAD
              {this.state.showDetails && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4"

                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-2">Error ID</div>
                    <div className="font-mono text-white text-sm">{this.state.errorId}</div>
                  </div>

                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-2">Error Message</div>
                    <div className="text-white">{this.state.error?.message}</div>
                  </div>

                  {this.state.error?.stack && (
                    <div className="bg-slate-900/50 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-2">Stack Trace</div>
                      <pre className="text-xs text-gray-300 overflow-x-auto whitespace-pre-wrap">
                        {this.state.error.stack}
                      </pre>
                    </div>
=======
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
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Action Buttons */}
<<<<<<< HEAD
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"

              <button
                onClick={this.handleRetry}
                disabled={this.state.isRecovering}
                className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"

                <RefreshCw className={`w-5 h-5 ${this.state.isRecovering ? 'animate-spin' : ''}`} />
                <span>{this.state.isRecovering ? 'Recovering...' : 'Try Again'}</span>
=======
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <RefreshCw className="w-5 h-5" />
                Try Again
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              </button>
              
              <button
                onClick={this.handleGoHome}
<<<<<<< HEAD
                className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors duration-200"

=======
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
              >
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                <Home className="w-5 h-5" />
                Go Home
              </button>
            </div>

<<<<<<< HEAD
            {/* Additional Actions */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3 justify-center"

              <button
                onClick={this.handleCopyError}
                data-copy-button
                className="flex items-center space-x-2 px-4 py-2 bg-slate-700 text-gray-300 rounded-lg hover:bg-slate-600 hover:text-white transition-colors duration-200"

                <Copy className="w-4 h-4" />
                <span>Copy Error</span>
=======
            {/* Secondary Actions */}
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={this.handleGoBack}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
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

<<<<<<< HEAD
              <button
                onClick={this.handleReportIssue}
                className="flex items-center space-x-2 px-4 py-2 bg-slate-700 text-gray-300 rounded-lg hover:bg-slate-600 hover:text-white transition-colors duration-200"

                <ExternalLink className="w-4 h-4" />
                <span>Report Issue</span>
              </button>
            </motion.div>

            {/* Help Information */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-center"

              <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
                <Shield className="w-4 h-4" />
                <span>Need help? Contact our support team</span>
              </div>
              <div className="mt-2 text-xs text-gray-600">
                Error ID: {this.state.errorId}
              </div>
            </motion.div>
          </div>
        </motion.div>
=======
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
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      );

    return this.props.children;


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

<<<<<<< HEAD
  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  return WrappedComponent;
};

// Hook for functional components
export const useErrorBoundary = () => {
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      setError(event.error);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      setError(new Error(event.reason));
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return error;
};}}}}}}}}}}}}}}}}}}}
=======
export default EnhancedErrorBoundary;
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
