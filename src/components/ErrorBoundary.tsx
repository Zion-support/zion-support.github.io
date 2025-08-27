import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  RefreshCw, 
  Home, 
  Bug, 
  Mail, 
  X, 
  Info,
  ArrowLeft,
  Shield
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
  errorId: string;
  showTechnicalDetails: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
      showTechnicalDetails: false
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    // Generate a unique error ID for tracking
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    return {
      hasError: true,
      error,
      errorId
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Send error to error reporting service (e.g., Sentry)
    this.reportError(error, errorInfo);
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    try {
      // Example: Send to error reporting service
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'exception', {
          description: error.message,
          fatal: true,
          custom_map: {
            error_id: this.state.errorId,
            error_stack: error.stack,
            component_stack: errorInfo.componentStack
          }
        });
      }

      // Example: Send to custom error endpoint
      fetch('/api/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          errorId: this.state.errorId,
          message: error.message,
          stack: error.stack,
          componentStack: errorInfo.componentStack,
          url: window.location.href,
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString()
        })
      }).catch(() => {
        // Silently fail if error reporting fails
      });
    } catch (reportingError) {
      // Silently fail if error reporting fails
      console.error('Failed to report error:', reportingError);
    }
  };

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
      showTechnicalDetails: false
    });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleReportBug = () => {
    const subject = encodeURIComponent(`Bug Report - Error ID: ${this.state.errorId}`);
    const body = encodeURIComponent(`
Error Details:
- Error ID: ${this.state.errorId}
- URL: ${window.location.href}
- Message: ${this.state.error?.message}
- Stack: ${this.state.error?.stack}

Please describe what you were doing when this error occurred:
    `);
    
    window.open(`mailto:bugs@ziontechgroup.com?subject=${subject}&body=${body}`);
  };

  private toggleTechnicalDetails = () => {
    this.setState(prev => ({
      showTechnicalDetails: !prev.showTechnicalDetails
    }));
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-2xl w-full bg-slate-800/50 backdrop-blur-xl border border-red-500/20 rounded-2xl shadow-2xl shadow-red-500/10 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 p-6 border-b border-red-500/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-white">Something went wrong</h1>
                    <p className="text-red-300">We've encountered an unexpected error</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-red-300 mb-1">Error ID</div>
                  <div className="text-sm font-mono text-red-400 bg-red-500/10 px-2 py-1 rounded">
                    {this.state.errorId}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Error Message */}
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Bug className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-red-300 mb-2">Error Details</h3>
                    <p className="text-red-200 text-sm">
                      {this.state.error?.message || 'An unexpected error occurred'}
                    </p>
                  </div>
                </div>
              </div>

              {/* User Guidance */}
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-blue-300 mb-2">What you can do</h3>
                    <ul className="text-blue-200 text-sm space-y-1">
                      <li>• Try refreshing the page</li>
                      <li>• Go back to the homepage</li>
                      <li>• Report this bug to our team</li>
                      <li>• Check your internet connection</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Technical Details Toggle */}
              <div className="border border-slate-600/50 rounded-lg overflow-hidden">
                <button
                  onClick={this.toggleTechnicalDetails}
                  className="w-full p-4 bg-slate-700/50 hover:bg-slate-700/70 transition-colors flex items-center justify-between text-left"
                >
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-300 font-medium">Technical Details</span>
                  </div>
                  <motion.div
                    animate={{ rotate: this.state.showTechnicalDetails ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-4 h-4 text-slate-400" />
                  </motion.div>
                </button>
                
                {this.state.showTechnicalDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-slate-600/50 p-4 bg-slate-800/30"
                  >
                    <div className="space-y-3">
                      {this.state.error?.stack && (
                        <div>
                          <h4 className="text-sm font-medium text-slate-300 mb-2">Stack Trace</h4>
                          <pre className="text-xs text-slate-400 bg-slate-900/50 p-3 rounded overflow-x-auto">
                            {this.state.error.stack}
                          </pre>
                        </div>
                      )}
                      
                      {this.state.errorInfo?.componentStack && (
                        <div>
                          <h4 className="text-sm font-medium text-slate-300 mb-2">Component Stack</h4>
                          <pre className="text-xs text-slate-400 bg-slate-900/50 p-3 rounded overflow-x-auto">
                            {this.state.errorInfo.componentStack}
                          </pre>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={this.handleRetry}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Try Again</span>
                </button>
                
                <button
                  onClick={this.handleGoHome}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-slate-600 hover:bg-slate-700 text-white rounded-lg transition-colors font-medium"
                >
                  <Home className="w-4 h-4" />
                  <span>Go Home</span>
                </button>
                
                <button
                  onClick={this.handleReportBug}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-medium"
                >
                  <Mail className="w-4 h-4" />
                  <span>Report Bug</span>
                </button>
              </div>

              {/* Additional Help */}
              <div className="text-center">
                <p className="text-slate-400 text-sm">
                  If this problem persists, please contact our support team
                </p>
                <a
                  href="/contact"
                  className="text-blue-400 hover:text-blue-300 text-sm underline mt-1 inline-block"
                >
                  Get Support
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
  const handleError = (error: Error, errorInfo?: any) => {
    // Log error
    console.error('Error caught by hook:', error, errorInfo);
    
    // Send to error reporting service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false
      });
    }
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
      <ErrorBoundary {...errorBoundaryProps}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}

// Global error handler for unhandled errors
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    console.error('Unhandled error:', event.error);
  });

  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
  });
}
