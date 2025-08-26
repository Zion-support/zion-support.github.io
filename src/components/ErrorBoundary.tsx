import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, Mail, Phone, AlertCircle } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
    };
  }

  static getDerivedStateFromError(error: Error): State {
    // Generate a unique error ID for tracking
    const errorId = `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    return {
      hasError: true,
      error,
      errorInfo: null,
      errorId
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo);
    }

    this.setState({
      errorInfo
    });
  }

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    try {
      // Send error to external logging service
      const errorData = {
        errorId: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        version: process.env.REACT_APP_VERSION || '1.0.0'
      };

      // You can implement your own error logging service here
      // Example: fetch('/api/errors', { method: 'POST', body: JSON.stringify(errorData) });
      
      console.error('Error logged:', errorData);
    } catch (loggingError) {
      console.error('Failed to log error:', loggingError);
    }
  };

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
    });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleContactSupport = () => {
    window.location.href = '/contact';
  };

  private handleCallSupport = () => {
    window.location.href = 'tel:+13024640950';
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl w-full bg-zion-slate/50 backdrop-blur-xl rounded-2xl border border-zion-cyan/20 p-8 text-center"
          >
            {/* Error Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-6"
            >
              <AlertTriangle className="w-10 h-10 text-red-400" />
            </motion.div>

            {/* Error Title */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl font-bold text-white mb-4"
            >
              Oops! Something went wrong
            </motion.h1>

            {/* Error Message */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-300 mb-6 leading-relaxed"
            >
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </motion.p>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-left"
              >
                <h3 className="text-sm font-semibold text-red-400 mb-2">Error Details (Development):</h3>
                <p className="text-xs text-red-300 font-mono break-all">
                  {this.state.error.message}
                </p>
                {this.state.errorInfo && (
                  <details className="mt-2">
                    <summary className="text-xs text-red-300 cursor-pointer">Component Stack</summary>
                    <pre className="text-xs text-red-300 mt-2 whitespace-pre-wrap">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </details>
                )}
              </motion.div>
            )}

            {/* Error ID */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-6 p-3 bg-zion-slate/30 rounded-lg"
            >
              <p className="text-xs text-gray-400 mb-1">Error Reference ID:</p>
              <p className="text-sm font-mono text-zion-cyan">{this.state.errorId}</p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center px-6 py-3 bg-zion-cyan text-white rounded-lg font-semibold hover:bg-zion-cyan/90 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-zion-cyan/30"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </button>

              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center px-6 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-zion-cyan/30"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </button>
            </motion.div>

            {/* Support Options */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 pt-6 border-t border-zion-cyan/20"
            >
              <p className="text-sm text-gray-400 mb-4">Need immediate help?</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={this.handleContactSupport}
                  className="flex items-center justify-center px-4 py-2 bg-zion-blue/20 text-zion-blue rounded-lg hover:bg-zion-blue/30 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-zion-blue/30"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Support
                </button>

                <button
                  onClick={this.handleCallSupport}
                  className="flex items-center justify-center px-4 py-2 bg-zion-purple/20 text-zion-purple rounded-lg hover:bg-zion-purple/30 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-zion-purple/30"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call +1 (302) 464-0950
                </button>
              </div>
            </motion.div>

            {/* Additional Help */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg"
            >
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-left">
                  <h4 className="text-sm font-semibold text-blue-400 mb-1">Pro Tip</h4>
                  <p className="text-xs text-blue-300">
                    If this error persists, try clearing your browser cache or using a different browser. 
                    You can also check our <a href="/status" className="underline hover:text-blue-200">status page</a> for any ongoing issues.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;