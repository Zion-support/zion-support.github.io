import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorId: `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    
    // Log error to monitoring service (e.g., Sentry, LogRocket)
    this.logErrorToService(error, errorInfo);
    
    this.setState({
      error,
      errorInfo
    });
  }

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    // In a real application, you would send this to your error monitoring service
    const errorData = {
      errorId: this.state.errorId,
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    // Example: Send to monitoring service
    // analytics.capture('error', errorData);
    console.log('Error data for monitoring service:', errorData);
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleContactSupport = () => {
    const subject = encodeURIComponent(`Error Report - ${this.state.errorId}`);
    const body = encodeURIComponent(`
Error Details:
- Error ID: ${this.state.errorId}
- URL: ${window.location.href}
- User Agent: ${navigator.userAgent}
- Error Message: ${this.state.error?.message}
- Timestamp: ${new Date().toISOString()}

Please provide any additional context about what you were doing when this error occurred.
    `);
    
    window.open(`mailto:kleber@ziontechgroup.com?subject=${subject}&body=${body}`);
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl w-full bg-zion-slate border border-zion-cyan/20 rounded-2xl p-8 text-center"
          >
            {/* Error Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-red-500/10 rounded-full mb-6"
            >
              <AlertTriangle className="w-10 h-10 text-red-400" />
            </motion.div>

            {/* Error Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl font-bold text-white mb-4"
            >
              Oops! Something went wrong
            </motion.h1>

            {/* Error Message */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-400 mb-6 leading-relaxed"
            >
              We've encountered an unexpected error. Our team has been notified and is working to fix this issue.
              {this.state.errorId && (
                <span className="block mt-2 text-sm">
                  Error ID: <code className="bg-zion-slate-light px-2 py-1 rounded text-zion-cyan">{this.state.errorId}</code>
                </span>
              )}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {/* Reload Button */}
              <button
                onClick={this.handleReload}
                className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300 transform hover:scale-105"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Try Again
              </button>

              {/* Home Button */}
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center px-6 py-3 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </button>

              {/* Contact Support Button */}
              <button
                onClick={this.handleContactSupport}
                className="flex items-center justify-center px-6 py-3 border-2 border-zion-purple text-zion-purple rounded-lg font-semibold hover:bg-zion-purple hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Support
              </button>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 pt-6 border-t border-zion-cyan/20"
            >
              <p className="text-sm text-gray-500 mb-2">
                Need immediate assistance?
              </p>
              <div className="flex items-center justify-center gap-4 text-sm">
                <a
                  href="tel:+13024640950"
                  className="flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 mr-1" />
                  +1 (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 mr-1" />
                  kleber@ziontechgroup.com
                </a>
              </div>
            </motion.div>

            {/* Debug Information (only in development) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <motion.details
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-6 text-left"
              >
                <summary className="cursor-pointer text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300">
                  Debug Information
                </summary>
                <div className="mt-4 p-4 bg-zion-slate-light rounded-lg text-xs text-gray-400 font-mono overflow-auto max-h-64">
                  <div><strong>Error:</strong> {this.state.error.message}</div>
                  <div><strong>Stack:</strong></div>
                  <pre className="mt-2 whitespace-pre-wrap">{this.state.error.stack}</pre>
                  {this.state.errorInfo && (
                    <>
                      <div className="mt-4"><strong>Component Stack:</strong></div>
                      <pre className="mt-2 whitespace-pre-wrap">{this.state.errorInfo.componentStack}</pre>
                    </>
                  )}
                </div>
              </motion.details>
            )}
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
