<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
=======
import React, { Component, ErrorInfo, ReactNode } from 'react.ts';
<<<<<<< HEAD
import { motion               } from 'framer-motion.ts';
import { AlertTriangle,
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
import { motion, AnimatePresence               } from 'framer-motion.ts';
import { AlertTriangle, 
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  RefreshCw, 
  Home, 
  ArrowLeft, 
  Bug, 
<<<<<<< HEAD
  Mail, 
  Phone,
  MessageCircle,
  Zap,
  Shield,
  Activity
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

interface Props {
  children: ReactNode;
=======
  X, 
  Info,
  Download,
  Share2
              } from 'lucide-react.ts';

>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
interface Props extends React.PropsWithChildren<{}> {

  children: anyanyanyanyanyanyanyanyanyanyanyanyanyanyReactNode;
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo)               => void;
  showDetails?: boolean;
<<<<<<< HEAD
  enableReporting?: boolean;
=======
<<<<<<< HEAD
  className?: string;
=======

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
}

interface State {














  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
<<<<<<< HEAD
  showTechnicalDetails: boolean;
  isReporting: boolean;
  reportSent: boolean;
=======














>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
}

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
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    // Generate unique error ID for tracking
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    return {
      hasError: true,
      error,
      errorId
    };
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
    try {
<<<<<<< HEAD
      // Send to Google Analytics (if available)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'exception', {
=======
      // Example: Send to external error tracking service
      if (typeof window !== 'undefined' && (window as ).gtag) {
        (window as ).gtag('event', 'exception', {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
          description: error.message,
          fatal: false,
          error_id: this.state.errorId
        });
      }

      // Send to custom error tracking service
      if (this.props.enableReporting) {
        this.reportErrorToService(error, errorInfo);
      }
    } catch (analyticsError) {
      console.warn('Failed to send error to analytics:', analyticsError);
    }
  };

  private reportErrorToService = async (error: Error, errorInfo: ErrorInfo) => {
    try {
      this.setState({ isReporting: true });

      const errorReport = {
        errorId: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
        userId: this.getUserId(),
        sessionId: this.getSessionId()
      };

<<<<<<< HEAD
      // Send to your error reporting service
      const response = await fetch('/api/error-reporting', {
        method: 'POST',
=======
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
        method: anyanyanyanyanyanyanyanyanyanyanyanyanyany'POST',
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
        headers: {
          'Content-Type': 'application/json',
        },
<<<<<<< HEAD
        body: JSON.stringify(errorReport),
=======
        body: JSON.stringify(errorReport)
      }).catch(e               => console.warn('Failed to send error report:', e));
    } catch (e) {
      console.warn('Failed to prepare error report:', e);
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    }
  }
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2

<<<<<<< HEAD
  private handleRetry = () => {
    this.setState({ isRecovering: anyanyanyanyanyanyanyanyanyanyanyanyanyanytrue });

    // Attempt to recover by clearing error state
    setTimeout(()               => {
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: null,
        isRecovering: false
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
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
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
      showTechnicalDetails: false,
      reportSent: false
    });
  };

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

<<<<<<< HEAD
  private copyErrorDetails = async () => {
    if (this.state.error && this.state.errorInfo) {
      const errorText = `
Error Details:
Message: ${this.state.error.message}
=======
  handleCopyErrorDetails = async () => {
    if (!this.state.error) return;

    const errorText = `
Error Details: anyanyanyanyanyanyanyanyanyanyanyanyanyanyMessage: ${this.state.error.message}
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
Stack: ${this.state.error.stack}
Component Stack: ${this.state.errorInfo.componentStack}
Error ID: ${this.state.errorId}
URL: ${window.location.href}
Timestamp: ${new Date().toISOString()}
      `;

<<<<<<< HEAD
      try {
        await navigator.clipboard.writeText(errorText);
        // Show success message
        alert('Error details copied to clipboard');
      } catch {
=======
<<<<<<< HEAD
      navigator.clipboard.writeText(errorText).then(()               => {
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
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = errorText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Error details copied to clipboard');
      }
    }
  };

<<<<<<< HEAD
=======
  showToast = (message: anyanyanyanyanyanyanyanyanyanyanyanyanyanystring)               => {
    // Create and show a toast notification
    const toast = document.createElement('div');
    toast.className = 'fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  };

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
          >
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
<<<<<<< HEAD
export const useErrorHandler = () => {
  const handleError = (error: Error, errorInfo?: any) => {
    console.error('Error caught by useErrorHandler:', error, errorInfo);
    
    // Send to error reporting service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'exception', {
=======
export function useErrorHandler(...args: any[]): any {
  const handleError = (error: anyanyanyanyanyanyanyanyanyanyanyanyanyanyError, errorInfo?: ErrorInfo)               => {
    console.error('Error caught by hook:', error, errorInfo);
    
    // Log to external service
    if (typeof window !== 'undefined' && (window as ).gtag) {
      (window as ).gtag('event', 'exception', {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
        description: error.message,
        fatal: false
      });
    }
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
  return function WithErrorBoundary(...args: any[]): any {
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
export const useErrorBoundary: [any, React.Dispatch<React.SetStateAction<any>>] = () => {
  const [error, setError] = React.useState<any>(null);

  React.useEffect(() => {
    const handleError = (event: anyanyanyanyanyanyanyanyanyanyanyanyanyanyErrorEvent)               => {
      setError(event.error);
    };

    const handleUnhandledRejection = (event: anyanyanyanyanyanyanyanyanyanyanyanyanyanyPromiseRejectionEvent)               => {
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
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
