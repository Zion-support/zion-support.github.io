import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, Bug, X, Copy, Download, Send, Shield, Zap, CheckCircle } from 'lucide-react';

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
  showDetails: boolean;
  isReporting: boolean;
  reportSent: boolean;
  errorId: string;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false,
      isReporting: false,
      reportSent: false,
      errorId: this.generateErrorId()
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Report error to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.reportError(error, errorInfo);
    }
  }

  private generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private async reportError(error: Error, errorInfo: ErrorInfo) {
    try {
      const errorReport = {
        errorId: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href
      };

      // Send to error reporting service
      await fetch('/api/errors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(errorReport)
      });
    } catch (reportError) {
      console.error('Failed to report error:', reportError);
    }
  }

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false,
      isReporting: false,
      reportSent: false,
      errorId: this.generateErrorId()
    });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleReload = () => {
    window.location.reload();
  };

  private toggleDetails = () => {
    this.setState(prevState => ({ showDetails: !prevState.showDetails }));
  };

  private copyErrorDetails = () => {
    const errorDetails = {
      errorId: this.state.errorId,
      message: this.state.error?.message,
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack,
      timestamp: new Date().toISOString(),
      url: window.location.href
    };

    navigator.clipboard.writeText(JSON.stringify(errorDetails, null, 2));
  };

  private downloadErrorReport = () => {
    const errorDetails = {
      errorId: this.state.errorId,
      message: this.state.error?.message,
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent
    };

    const blob = new Blob([JSON.stringify(errorDetails, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `error-report-${this.state.errorId}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  private sendErrorReport = async () => {
    this.setState({ isReporting: true });
    
    try {
      const errorReport = {
        errorId: this.state.errorId,
        message: this.state.error?.message,
        stack: this.state.error?.stack,
        componentStack: this.state.errorInfo?.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href
      };

      await fetch('/api/errors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(errorReport)
      });

      this.setState({ reportSent: true, isReporting: false });
    } catch (error) {
      console.error('Failed to send error report:', error);
      this.setState({ isReporting: false });
    }
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8"
          >
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <AlertTriangle className="w-10 h-10 text-red-600" />
              </motion.div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Oops! Something went wrong
              </h1>
              
              <p className="text-gray-600 text-lg mb-6">
                We're sorry, but something unexpected happened. Our team has been notified.
              </p>

              {this.state.error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <p className="text-red-800 font-medium">
                    Error: {this.state.error.message}
                  </p>
                  <p className="text-red-600 text-sm mt-1">
                    Error ID: {this.state.errorId}
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleRetry}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <RefreshCw className="w-5 h-5" />
                Try Again
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleGoHome}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Home className="w-5 h-5" />
                Go Home
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleReload}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <RefreshCw className="w-5 h-5" />
                Reload Page
              </motion.button>
            </div>

            {this.props.showDetails && this.state.error && (
              <div className="border-t pt-6">
                <button
                  onClick={this.toggleDetails}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors mb-4"
                >
                  <Bug className="w-5 h-5" />
                  {this.state.showDetails ? 'Hide' : 'Show'} Error Details
                </button>

                {this.state.showDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-gray-50 rounded-lg p-4 space-y-4"
                  >
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Error Message</h3>
                      <pre className="text-sm text-gray-700 bg-white p-3 rounded border overflow-x-auto">
                        {this.state.error.message}
                      </pre>
                    </div>

                    {this.state.error.stack && (
                      <div>
                        <h3 className="font-medium text-gray-900 mb-2">Stack Trace</h3>
                        <pre className="text-sm text-gray-700 bg-white p-3 rounded border overflow-x-auto max-h-40">
                          {this.state.error.stack}
                        </pre>
                      </div>
                    )}

                    {this.state.errorInfo?.componentStack && (
                      <div>
                        <h3 className="font-medium text-gray-900 mb-2">Component Stack</h3>
                        <pre className="text-sm text-gray-700 bg-white p-3 rounded border overflow-x-auto max-h-40">
                          {this.state.errorInfo.componentStack}
                        </pre>
                      </div>
                    )}

                    <div className="flex gap-2">
                      <button
                        onClick={this.copyErrorDetails}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors text-sm"
                      >
                        <Copy className="w-4 h-4" />
                        Copy Details
                      </button>

                      <button
                        onClick={this.downloadErrorReport}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors text-sm"
                      >
                        <Download className="w-4 h-4" />
                        Download Report
                      </button>

                      {this.props.enableReporting && (
                        <button
                          onClick={this.sendErrorReport}
                          disabled={this.state.isReporting || this.state.reportSent}
                          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm disabled:opacity-50"
                        >
                          {this.state.isReporting ? (
                            <RefreshCw className="w-4 h-4 animate-spin" />
                          ) : this.state.reportSent ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : (
                            <Send className="w-4 h-4" />
                          )}
                          {this.state.isReporting ? 'Sending...' : this.state.reportSent ? 'Sent' : 'Send Report'}
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>
            )}

            <div className="text-center text-sm text-gray-500 mt-6">
              <p>If this problem persists, please contact our support team.</p>
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;