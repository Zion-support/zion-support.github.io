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
import { AnimatePresence } from 'framer-motion';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
  enableReporting?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
  showDetails: boolean;
  isReporting: boolean;
  reportSent: boolean;
  retryCount: number;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
      showDetails: false,
      isReporting: false,
      reportSent: false,
      retryCount: 0
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    // Generate unique error ID for tracking
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    return {
      hasError: true,
      error,
      errorId,
      retryCount: 0
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

    // Report error to external service (optional)
    this.reportError(error, errorInfo);
  }

  // Report error to external service
  private reportError = async (error: Error, errorInfo: ErrorInfo) => {
    if (!this.props.enableReporting) return;

    try {
      this.setState({ isReporting: true });

      // Example error reporting to external service
      const errorReport = {
        id: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
        version: process.env.npm_package_version || 'unknown'
      };

      // Send to error reporting service (replace with your service)
      await fetch('/api/errors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(errorReport)
      });

      this.setState({ reportSent: true });
    } catch (reportError) {
      console.warn('Failed to report error:', reportError);
    } finally {
      this.setState({ isReporting: false });
    }
  };

  // Retry the component
  private handleRetry = () => {
    this.setState(prevState => ({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: prevState.retryCount + 1
    }));
  };

  // Go to home page
  private handleGoHome = () => {
    window.location.href = '/';
  };

  // Toggle error details
  private toggleDetails = () => {
    this.setState(prevState => ({
      showDetails: !prevState.showDetails
    }));
  };

  // Copy error details to clipboard
  private copyErrorDetails = async () => {
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

    try {
      await navigator.clipboard.writeText(errorText);
      // Show success message
      this.setState({ reportSent: true });
      setTimeout(() => this.setState({ reportSent: false }), 2000);
    } catch (err) {
      console.warn('Failed to copy error details:', err);
    }
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
          <motion.div
            className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-red-200 dark:border-red-800"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-t-2xl">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-8 h-8" />
                <div>
                  <h1 className="text-2xl font-bold">Something went wrong</h1>
                  <p className="text-red-100 mt-1">
                    We encountered an unexpected error. Don't worry, we're working to fix it.
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Error Summary */}
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-medium text-red-800 dark:text-red-200">
                      Error Information
                    </h3>
                    <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                      {this.state.error?.message || 'An unexpected error occurred'}
                    </p>
                    <div className="mt-2 text-xs text-red-600 dark:text-red-400">
                      Error ID: {this.state.errorId}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={this.handleRetry}
                  className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <RefreshCw className="w-5 h-5" />
                  <span>Try Again</span>
                </button>
                
                <button
                  onClick={this.handleGoHome}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Home className="w-5 h-5" />
                  <span>Go Home</span>
                </button>
              </div>

              {/* Error Details Toggle */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <button
                  onClick={this.toggleDetails}
                  className="w-full flex items-center justify-between text-left p-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200"
                >
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    {this.state.showDetails ? 'Hide' : 'Show'} Technical Details
                  </span>
                  <motion.div
                    animate={{ rotate: this.state.showDetails ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </button>

                {/* Error Details */}
                <AnimatePresence>
                  {this.state.showDetails && (
                    <motion.div
                      className="mt-3 bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-auto max-h-64"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="space-y-3">
                        <div>
                          <div className="text-cyan-400 font-semibold">Error Message:</div>
                          <div className="text-red-300">{this.state.error?.message}</div>
                        </div>
                        
                        {this.state.error?.stack && (
                          <div>
                            <div className="text-cyan-400 font-semibold">Stack Trace:</div>
                            <div className="text-gray-300 whitespace-pre-wrap">
                              {this.state.error.stack}
                            </div>
                          </div>
                        )}
                        
                        {this.state.errorInfo?.componentStack && (
                          <div>
                            <div className="text-cyan-400 font-semibold">Component Stack:</div>
                            <div className="text-gray-300 whitespace-pre-wrap">
                              {this.state.errorInfo.componentStack}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Copy Button */}
                      <button
                        onClick={this.copyErrorDetails}
                        className="mt-3 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-xs transition-colors duration-200"
                      >
                        Copy Details
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Error Reporting Status */}
              {this.props.enableReporting && (
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Bug className="w-5 h-5 text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Error Reporting
                      </span>
                    </div>
                    
                    {this.state.isReporting ? (
                      <div className="flex items-center space-x-2 text-yellow-600">
                        <RotateCcw className="w-4 h-4 animate-spin" />
                        <span className="text-sm">Reporting...</span>
                      </div>
                    ) : this.state.reportSent ? (
                      <div className="flex items-center space-x-2 text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm">Reported</span>
                      </div>
                    ) : (
                      <div className="text-sm text-gray-500">
                        Automatic
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Help Information */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-medium text-blue-800 dark:text-blue-200">
                      Need Help?
                    </h3>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      If this error persists, please contact our support team with the Error ID above.
                    </p>
                    <div className="mt-2 flex space-x-3">
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
              </div>
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}
