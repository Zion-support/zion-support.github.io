<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  RefreshCw, 
  Home, 
  Bug, 
  Shield, 
  Zap, 
  ArrowLeft,
  Copy,
  CheckCircle,
  X
} from 'lucide-react';

interface Props {
  children: ReactNode;
  FallbackComponent?: React.ComponentType<{ error: Error; resetErrorBoundary: () => void }>;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
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
  showDetails?: boolean;
  enableReporting?: boolean;
  reportEndpoint?: string;
}

interface State {













  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
<<<<<<< HEAD
  isReporting: boolean;
  reportSent: boolean;
  showStack: boolean;
  retryCount: number;
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
      errorId: '',
      isReporting: boolean,
      reportSent: false,
      showStack: false,
      retryCount: 0
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
    this.setState({ errorInfo });
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error Boundary caught an error:', error, errorInfo);
    }

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
    }

    // Auto-report error if enabled
    if (this.props.enableReporting) {
      this.reportError(error, errorInfo);
    }
  }

  // Generate error report
  private generateErrorReport = (error: Error, errorInfo: ErrorInfo) => {
    const report = {
      errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      error: {
        name: error.name,
        message: error.message,
        stack: error.stack
      },
      componentStack: errorInfo.componentStack,
      environment: {
        nodeEnv: process.env.NODE_ENV,
        version: process.env.npm_package_version || 'unknown',
        buildTime: process.env.BUILD_TIME || 'unknown'
      }
    };

    return report;
  };

  // Report error to backend
  private reportError = async (error: Error, errorInfo: ErrorInfo) => {
    if (!this.props.reportEndpoint) return;

    this.setState({ isReporting: true });

    try {
      const report = this.generateErrorReport(error, errorInfo);
      
      const response = await fetch(this.props.reportEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(report)
      });

      if (response.ok) {
        this.setState({ reportSent: true });
      }
    } catch (reportError) {
      console.error('Failed to report error:', reportError);
    } finally {
      this.setState({ isReporting: false });
    }
  };

<<<<<<< HEAD
  // Reset error boundary
  private resetErrorBoundary = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
      reportSent: false,
      showStack: false,
      retryCount: this.state.retryCount + 1
    });

    if (this.props.onReset) {
      this.props.onReset();
    }
  };

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
  private goHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      // Use custom fallback component if provided
      if (this.props.FallbackComponent) {
        return (
          <this.props.FallbackComponent
            error={this.state.error!}
            resetErrorBoundary={this.resetErrorBoundary}
          />
        );
      }

      // Default error UI
      return (
        <motion.div
          className="min-h-screen bg-gradient-to-br from-zion-slate-900 via-zion-slate-800 to-zion-slate-900 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-2xl w-full">
            {/* Error Header */}
            <motion.div
              className="text-center mb-8"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-10 h-10 text-red-500" />
              </div>
              <h1 className="text-4xl font-bold text-white mb-2">Oops! Something went wrong</h1>
              <p className="text-zion-slate-300 text-lg">
                We've encountered an unexpected error. Our team has been notified.
              </p>
              <div className="mt-2 text-sm text-zion-slate-400">
                Error ID: {this.state.errorId}
              </div>
            </motion.div>

            {/* Error Details */}
            <motion.div
              className="bg-zion-slate-800/50 backdrop-blur-sm rounded-xl p-6 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white flex items-center">
                  <Bug className="w-5 h-5 mr-2 text-zion-cyan" />
                  Error Details
                </h2>
                <button
                  onClick={() => this.setState({ showStack: !this.state.showStack })}
                  className="text-zion-slate-400 hover:text-white transition-colors"
                >
                  {this.state.showStack ? 'Hide' : 'Show'} Stack
                </button>
              </div>

              {this.state.error && (
                <div className="space-y-3">
                  <div>
                    <span className="text-zion-slate-400">Type:</span>
                    <span className="ml-2 text-white font-mono">{this.state.error.name}</span>
                  </div>
                  <div>
                    <span className="text-zion-slate-400">Message:</span>
                    <span className="ml-2 text-white">{this.state.error.message}</span>
                  </div>
                  
                  {this.state.showStack && this.state.error.stack && (
                    <div className="mt-4">
                      <span className="text-zion-slate-400 block mb-2">Stack Trace:</span>
                      <pre className="bg-zion-slate-900 p-3 rounded-lg text-xs text-zion-slate-300 overflow-x-auto">
                        {this.state.error.stack}
                      </pre>
                    </div>
                  )}

                  {this.state.showStack && this.state.errorInfo && (
                    <div className="mt-4">
                      <span className="text-zion-slate-400 block mb-2">Component Stack:</span>
                      <pre className="bg-zion-slate-900 p-3 rounded-lg text-xs text-zion-slate-300 overflow-x-auto">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              )}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-wrap gap-3 justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {/* Primary Actions */}
              <button
                onClick={this.resetErrorBoundary}
                className="px-6 py-3 bg-zion-cyan hover:bg-zion-cyan/80 text-white rounded-lg font-medium transition-colors flex items-center space-x-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Try Again</span>
              </button>

              <button
                onClick={this.goBack}
                className="px-6 py-3 bg-zion-slate-700 hover:bg-zion-slate-600 text-white rounded-lg font-medium transition-colors flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Go Back</span>
              </button>

              <button
                onClick={this.goHome}
                className="px-6 py-3 bg-zion-slate-700 hover:bg-zion-slate-600 text-white rounded-lg font-medium transition-colors flex items-center space-x-2"
              >
                <Home className="w-4 h-4" />
                <span>Go Home</span>
              </button>

              {/* Utility Actions */}
              <button
                onClick={this.copyErrorDetails}
                className="px-4 py-3 bg-zion-slate-700 hover:bg-zion-slate-600 text-white rounded-lg font-medium transition-colors flex items-center space-x-2"
                title="Copy error details to clipboard"
              >
                {this.state.reportSent ? (
                  <CheckCircle className="w-4 h-4 text-zion-green" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                <span>{this.state.reportSent ? 'Copied!' : 'Copy Details'}</span>
              </button>
            </motion.div>

            {/* Error Reporting Status */}
            {this.props.enableReporting && (
              <motion.div
                className="mt-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {this.state.isReporting ? (
                  <div className="flex items-center justify-center space-x-2 text-zion-slate-400">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-zion-cyan"></div>
                    <span>Reporting error...</span>
                  </div>
                ) : this.state.reportSent ? (
                  <div className="flex items-center justify-center space-x-2 text-zion-green">
                    <CheckCircle className="w-4 h-4" />
                    <span>Error reported successfully</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2 text-zion-slate-400">
                    <Shield className="w-4 h-4" />
                    <span>Error automatically reported to our team</span>
                  </div>
                )}
              </motion.div>
            )}

            {/* Retry Count */}
            {this.state.retryCount > 0 && (
              <motion.div
                className="mt-4 text-center text-sm text-zion-slate-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Retry attempt: {this.state.retryCount}
              </motion.div>
            )}

            {/* Help Section */}
            <motion.div
              className="mt-8 text-center text-sm text-zion-slate-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="mb-2">Still having issues? Contact our support team:</p>
              <div className="flex items-center justify-center space-x-4">
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="text-zion-cyan hover:text-zion-cyan/80 transition-colors"
                >
                  support@ziontechgroup.com
                </a>
                <span>•</span>
                <a
                  href="/contact"
                  className="text-zion-cyan hover:text-zion-cyan/80 transition-colors"
                >
                  Contact Form
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      );
    }

    return this.props.children;
  }
}

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
    setError(error);
  }, []);

  const clearError = React.useCallback(() => {
    setError(null);
  }, []);

  return { error, handleError, clearError };
}

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
