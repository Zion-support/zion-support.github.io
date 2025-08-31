import React, { Component, ErrorInfo, ReactNode } from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
=======
import { motion, AnimatePresence } from 'framer-motion';
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
import { 
  AlertTriangle, 
  RefreshCw, 
  Home, 
  ArrowLeft, 
  Bug, 
  Mail, 
  Phone,
  MessageCircle,
  Zap,
  Shield,
  Activity
} from 'lucide-react';
<<<<<<< HEAD
import { AnimatePresence } from 'framer-motion';

=======
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
<<<<<<< HEAD
  enableReporting?: boolean;
}

=======
}
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
<<<<<<< HEAD
=======
  showErrorDetails: boolean;
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  errorId: string;
  showTechnicalDetails: boolean;
  isReporting: boolean;
  reportSent: boolean;
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
export class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
      showTechnicalDetails: false,
      isReporting: false,
      reportSent: false
    };
<<<<<<< HEAD
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    // Generate unique error ID for tracking
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
=======
  static getDerivedStateFromError(error: Error): State {
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    return {
      hasError: true,
      error,
      errorId
    };
<<<<<<< HEAD
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
    
    // Log error to console
    console.error('Error Boundary Caught Error:', error, errorInfo);
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Send error to analytics/monitoring service
    this.sendErrorToAnalytics(error, errorInfo);
  }

  private sendErrorToAnalytics = (error: Error, errorInfo: ErrorInfo) => {
=======
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });
    // Log error to console
    // // // // // // // console.error('Error caught by boundary:', error, errorInfo);
=======
    console.error('Error Boundary caught an error:', error, errorInfo);
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    // Log to external service (e.g., Sentry, LogRocket)
    this.logErrorToService(error, errorInfo);
    // Send error report to analytics
    this.sendErrorReport(error, errorInfo);
  }
  generateErrorId(): string {
    return `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }
  logErrorToService(error: Error, errorInfo: ErrorInfo) {
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    try {
      // Send to Google Analytics (if available)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'exception', {
          description: error.message,
          fatal: false,
          error_id: this.state.errorId
        });
      }
<<<<<<< HEAD

      // Send to custom error tracking service
      if (this.props.enableReporting) {
        this.reportErrorToService(error, errorInfo);
      }
    } catch (analyticsError) {
      console.warn('Failed to send error to analytics:', analyticsError);
    }
  };

  private reportErrorToService = async (error: Error, errorInfo: ErrorInfo) => {
=======
    } catch (e) {
      console.warn('Failed to log error to service:', e);
    }
  }
  sendErrorReport(error: Error, errorInfo: ErrorInfo) {
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    try {
      this.setState({ isReporting: true });

      const errorReport = {
        errorId: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        url: window.location.href,
<<<<<<< HEAD
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
        userId: this.getUserId(),
        sessionId: this.getSessionId()
      };

      // Send to your error reporting service
      const response = await fetch('/api/error-reporting', {
=======
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight
      };
      // // // // // // // console.error('Failed to log error:', logError);
=======
      // Send to analytics endpoint
      fetch('/api/analytics/error', {
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
<<<<<<< HEAD
        body: JSON.stringify(errorReport),
      });

      if (response.ok) {
        this.setState({ reportSent: true });
      }
    } catch (reportError) {
      console.warn('Failed to report error:', reportError);
    } finally {
      this.setState({ isReporting: false });
    }
  };

  private getUserId = (): string => {
    // Get user ID from localStorage, session, or other sources
    try {
      return localStorage.getItem('userId') || 'anonymous';
    } catch {
      return 'anonymous';
    }
  };

  private getSessionId = (): string => {
    // Get session ID from localStorage or generate one
    try {
      let sessionId = localStorage.getItem('sessionId');
      if (!sessionId) {
        sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        localStorage.setItem('sessionId', sessionId);
      }
      return sessionId;
    } catch {
      return `session_${Date.now()}`;
    }
  };

  private handleRetry = () => {
=======
        body: JSON.stringify(errorReport)
      }).catch(e => console.warn('Failed to send error report:', e));
    } catch (e) {
      console.warn('Failed to prepare error report:', e);
    }
  }
  handleRetry = () => {
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
      showTechnicalDetails: false,
      reportSent: false
    });
  };
<<<<<<< HEAD

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleGoBack = () => {
    window.history.back();
  };

  private toggleTechnicalDetails = () => {
    this.setState(prev => ({ 
      showTechnicalDetails: !prev.showTechnicalDetails 
    }));
  };

  private copyErrorDetails = async () => {
    if (this.state.error && this.state.errorInfo) {
      const errorText = `
=======
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
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
Error Details:
Message: ${this.state.error.message}
Stack: ${this.state.error.stack}
Component Stack: ${this.state.errorInfo.componentStack}
Error ID: ${this.state.errorId}
URL: ${window.location.href}
Timestamp: ${new Date().toISOString()}
<<<<<<< HEAD
      `;

      try {
        await navigator.clipboard.writeText(errorText);
        // Show success message
        alert('Error details copied to clipboard');
      } catch {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = errorText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Error details copied to clipboard');
=======
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
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
      }
    }
  };
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
<<<<<<< HEAD
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
=======
      // Default error UI
      return (
        <div className = "min-h-screen bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 flex items-center justify-center p-4">
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
          >
<<<<<<< HEAD
            {/* Header */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 text-white text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <AlertTriangle className="w-12 h-12" />
                <div>
                  <h1 className="text-2xl font-bold">Something went wrong</h1>
                  <p className="text-red-100">We're sorry for the inconvenience</p>
                </div>
              </div>
              <div className="bg-red-400/20 rounded-lg p-3">
                <p className="text-sm font-mono">Error ID: {this.state.errorId}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Error Message */}
=======
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
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
              <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  An unexpected error occurred
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Our team has been notified and we're working to fix this issue. 
                  You can try refreshing the page or contact support if the problem persists.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={this.handleRetry}
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <RefreshCw className="w-5 h-5" />
                  <span>Try Again</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={this.handleGoBack}
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Go Back</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={this.handleGoHome}
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  <Home className="w-5 h-5" />
                  <span>Go Home</span>
                </motion.button>
              </div>

              {/* Error Reporting */}
              {this.props.enableReporting && (
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Bug className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                        Help us improve
                      </h3>
                      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                        This error has been automatically reported to our team. 
                        You can also provide additional details if needed.
                      </p>
                      {!this.state.reportSent ? (
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => this.reportErrorToService(this.state.error!, this.state.errorInfo!)}
                          disabled={this.state.isReporting}
                          className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                        >
                          {this.state.isReporting ? 'Reporting...' : 'Report Error'}
                        </motion.button>
                      ) : (
                        <div className="flex items-center space-x-2 text-sm text-green-700 dark:text-green-300">
                          <Shield className="w-4 h-4" />
                          <span>Error reported successfully</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Technical Details Toggle */}
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={this.toggleTechnicalDetails}
                  className="flex items-center justify-center space-x-2 mx-auto px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                >
                  <Activity className="w-4 h-4" />
                  <span>
                    {this.state.showTechnicalDetails ? 'Hide' : 'Show'} Technical Details
                  </span>
                </motion.button>
              </div>

              {/* Technical Details */}
              <AnimatePresence>
                {this.state.showTechnicalDetails && this.state.error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        Technical Details
                      </h3>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={this.copyErrorDetails}
                        className="px-3 py-1 text-xs bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
                      >
                        Copy Details
                      </motion.button>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium text-gray-700 dark:text-gray-300">Error:</span>
                        <span className="ml-2 font-mono text-red-600 dark:text-red-400">
                          {this.state.error.message}
                        </span>
                      </div>
                      
                      {this.state.error.stack && (
                        <div>
                          <span className="font-medium text-gray-700 dark:text-gray-300">Stack:</span>
                          <pre className="mt-1 p-2 bg-gray-100 dark:bg-gray-600 rounded text-xs overflow-x-auto">
                            {this.state.error.stack}
                          </pre>
                        </div>
                      )}
                      
                      {this.state.errorInfo?.componentStack && (
                        <div>
                          <span className="font-medium text-gray-700 dark:text-gray-300">Component Stack:</span>
                          <pre className="mt-1 p-2 bg-gray-100 dark:bg-gray-600 rounded text-xs overflow-x-auto">
                            {this.state.errorInfo.componentStack}
                          </pre>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Contact Support */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="text-center">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-3">
                    Need help? Contact our support team
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="mailto:support@ziontechgroup.com"
                      className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email Support</span>
                    </a>
                    <a
                      href="tel:+1-555-0123"
                      className="flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Support</span>
                    </a>
                    <a
                      href="/contact"
                      className="flex items-center justify-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Contact Form</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
<<<<<<< HEAD
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Higher-order component for wrapping components with error boundary
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Partial<Props>
) => {
  const WrappedComponent = (props: P) => (
    <EnhancedErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </EnhancedErrorBoundary>
  );

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  return WrappedComponent;
};

// Hook for functional components to handle errors
export const useErrorHandler = () => {
  const handleError = (error: Error, errorInfo?: any) => {
    console.error('Error caught by useErrorHandler:', error, errorInfo);
    
    // Send to error reporting service
=======
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
    return this.props.children;
// Hook for functional components to handle errors
export function useErrorHandler() {
  const handleError = (error: Error, errorInfo?: ErrorInfo) => {
    console.error('Error caught by hook:', error, errorInfo);
    // Log to external service
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: false
      });
    }
<<<<<<< HEAD
=======
    // You can also send to your error tracking service here
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  };
  return { handleError };
<<<<<<< HEAD
};
=======
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
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
