import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, Bug, Mail, Copy, CheckCircle } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

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
  showDetails: boolean;
  copied: boolean;
}

export class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false,
      copied: false,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // Log error to console for development
    console.error('Error caught by boundary:', error, errorInfo);

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo);
    }
  }

  private logErrorToService = async (error: Error, errorInfo: ErrorInfo) => {
    try {
      const errorData = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        version: process.env.REACT_APP_VERSION || 'unknown',
      };

      // Send to your error logging service
      await fetch('/api/errors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(errorData),
      });
    } catch (logError) {
      console.error('Failed to log error:', logError);
    }
  };

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false,
    });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleCopyError = async () => {
    if (this.state.error && this.state.errorInfo) {
      const errorText = `
Error Details:
${this.state.error.message}

Stack Trace:
${this.state.error.stack}

Component Stack:
${this.state.errorInfo.componentStack}

URL: ${window.location.href}
User Agent: ${navigator.userAgent}
Timestamp: ${new Date().toISOString()}
      `;

      try {
        await navigator.clipboard.writeText(errorText);
        this.setState({ copied: true });
        setTimeout(() => this.setState({ copied: false }), 2000);
      } catch (err) {
        console.error('Failed to copy error:', err);
      }
    }
  };

  private handleReportBug = () => {
    const subject = encodeURIComponent('Bug Report - Zion Tech Group Website');
    const body = encodeURIComponent(`
I encountered an error on the Zion Tech Group website.

Error Details:
${this.state.error?.message || 'Unknown error'}

URL: ${window.location.href}
Browser: ${navigator.userAgent}
Time: ${new Date().toISOString()}

Please provide any additional context about what you were doing when this error occurred.
    `);

    window.open(`mailto:support@ziontechgroup.com?subject=${subject}&body=${body}`);
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl border border-red-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 text-white text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <AlertTriangle size={40} />
              </motion.div>
              <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
              <p className="text-red-100">
                We're sorry, but an unexpected error has occurred
              </p>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="text-center mb-6">
                <p className="text-gray-600 mb-4">
                  Don't worry! This is likely a temporary issue. Here are some things you can try:
                </p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={this.handleRetry}
                  className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors"
                >
                  <RefreshCw size={20} />
                  <span>Try Again</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={this.handleGoHome}
                  className="flex items-center justify-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-lg font-medium transition-colors"
                >
                  <Home size={20} />
                  <span>Go Home</span>
                </motion.button>
              </div>

              {/* Additional Actions */}
              <div className="flex flex-wrap gap-3 justify-center mb-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={this.handleCopyError}
                  className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm transition-colors"
                >
                  {this.state.copied ? (
                    <>
                      <CheckCircle size={16} className="text-green-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span>Copy Error</span>
                    </>
                  )}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={this.handleReportBug}
                  className="flex items-center space-x-2 bg-orange-100 hover:bg-orange-200 text-orange-700 px-3 py-2 rounded-lg text-sm transition-colors"
                >
                  <Bug size={16} />
                  <span>Report Bug</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => this.setState({ showDetails: !this.state.showDetails })}
                  className="flex items-center space-x-2 bg-purple-100 hover:bg-purple-200 text-purple-700 px-3 py-2 rounded-lg text-sm transition-colors"
                >
                  <Bug size={16} />
                  <span>{this.state.showDetails ? 'Hide' : 'Show'} Details</span>
                </motion.button>
              </div>

              {/* Error Details */}
              <AnimatePresence>
                {this.state.showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <h3 className="font-semibold text-gray-800 mb-2">Error Information</h3>
                      {this.state.error && (
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="font-medium text-gray-700">Message:</span>
                            <p className="text-red-600 font-mono bg-red-50 p-2 rounded mt-1">
                              {this.state.error.message}
                            </p>
                          </div>
                          {this.state.error.stack && (
                            <div>
                              <span className="font-medium text-gray-700">Stack Trace:</span>
                              <pre className="text-xs text-gray-600 bg-gray-100 p-2 rounded mt-1 overflow-x-auto">
                                {this.state.error.stack}
                              </pre>
                            </div>
                          )}
                          {this.state.errorInfo?.componentStack && (
                            <div>
                              <span className="font-medium text-gray-700">Component Stack:</span>
                              <pre className="text-xs text-gray-600 bg-gray-100 p-2 rounded mt-1 overflow-x-auto">
                                {this.state.errorInfo.componentStack}
                              </pre>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Contact Support */}
              <div className="text-center pt-4 border-t border-gray-200">
                <p className="text-gray-500 text-sm mb-2">
                  Still having issues? Contact our support team
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={this.handleReportBug}
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                >
                  <Mail size={16} />
                  <span>Get Help</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;