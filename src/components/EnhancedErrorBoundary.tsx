import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, Bug, XCircle, AlertCircle, Send } from 'lucide-react';

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
  errorId: string | null;
  showStackTrace: boolean;
  isReporting: boolean;
  reportSent: boolean;
}

export class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
      showStackTrace: false,
      isReporting: false,
      reportSent: false
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
    
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    if (process.env.NODE_ENV === 'production') {
      this.reportError(error, errorInfo);
    }
  }

  private reportError = async (error: Error, errorInfo: ErrorInfo) => {
    if (!this.props.enableReporting) return;
    
    this.setState({ isReporting: true });
    
    try {
      const errorReport = {
        errorId: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        pathname: window.location.pathname
      };

      // Send to error reporting service
      await fetch('/api/error-reporting', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(errorReport)
      });

      this.setState({ reportSent: true });
    } catch (reportingError) {
      console.warn('Failed to report error:', reportingError);
    } finally {
      this.setState({ isReporting: false });
    }
  };

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
      showStackTrace: false,
      reportSent: false
    });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private toggleStackTrace = () => {
    this.setState(prev => ({ showStackTrace: !prev.showStackTrace }));
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8"
          >
            {/* Error Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <AlertTriangle className="w-10 h-10 text-red-600" />
              </motion.div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-600">
                We're sorry, but something unexpected happened. Our team has been notified.
              </p>
            </div>

            {/* Error Details */}
            {this.state.error && (
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Bug className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">Error Details</span>
                </div>
                <p className="text-sm text-gray-600 font-mono">
                  {this.state.error.message}
                </p>
                {this.state.errorId && (
                  <p className="text-xs text-gray-500 mt-1">
                    Error ID: {this.state.errorId}
                  </p>
                )}
              </div>
            )}

            {/* Stack Trace Toggle */}
            {this.state.errorInfo && (
              <div className="mb-6">
                <button
                  onClick={this.toggleStackTrace}
                  className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <AlertCircle className="w-4 h-4" />
                  {this.state.showStackTrace ? 'Hide' : 'Show'} Technical Details
                </button>
                
                {this.state.showStackTrace && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-3 bg-gray-900 text-green-400 p-4 rounded-lg overflow-auto max-h-64"
                  >
                    <pre className="text-xs">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </motion.div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={this.handleRetry}
                className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={this.handleGoHome}
                className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4" />
                Go Home
              </motion.button>
            </div>

            {/* Error Reporting Status */}
            {this.props.enableReporting && (
              <div className="mt-6 text-center">
                {this.state.isReporting ? (
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                    Sending error report...
                  </div>
                ) : this.state.reportSent ? (
                  <div className="flex items-center justify-center gap-2 text-sm text-green-600">
                    <Send className="w-4 h-4" />
                    Error report sent successfully
                  </div>
                ) : (
                  <p className="text-xs text-gray-500">
                    This error has been automatically reported to our team
                  </p>
                )}
              </div>
            )}

            {/* Help Text */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                If this problem persists, please contact our support team
              </p>
              <a
                href="/contact"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Get Help
              </a>
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;