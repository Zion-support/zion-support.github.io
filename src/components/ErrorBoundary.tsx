import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, Bug, X } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
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

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
    
    // Log error to console for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
    
    // Send error to monitoring service (e.g., Sentry)
    this.reportError(error, errorInfo);
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    try {
      // Send to analytics or monitoring service
      if (window.gtag) {
        window.gtag('event', 'exception', {
          description: error.message,
          fatal: true,
          custom_map: {
            error_id: this.state.errorId,
            error_stack: error.stack,
            error_info: JSON.stringify(errorInfo)
          }
        });
      }
    } catch (reportingError) {
      console.error('Error reporting failed:', reportingError);
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

  private handleReportBug = () => {
    const errorDetails = {
      errorId: this.state.errorId,
      message: this.state.error?.message,
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack,
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString()
    };

    // Open email client with error details
    const subject = encodeURIComponent(`Bug Report - Error ID: ${this.state.errorId}`);
    const body = encodeURIComponent(`
Error Details:
${JSON.stringify(errorDetails, null, 2)}

Please describe what you were doing when this error occurred:
    `);
    
    window.open(`mailto:bugs@ziontechgroup.com?subject=${subject}&body=${body}`);
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-futuristic flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl w-full bg-zion-slate/80 backdrop-blur-xl border border-zion-cyan/30 rounded-3xl p-8 text-center"
          >
            {/* Error Icon */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <AlertTriangle className="w-10 h-10 text-white" />
            </motion.div>

            {/* Error Message */}
            <h1 className="text-3xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-zion-text-secondary mb-6">
              We've encountered an unexpected error. Our team has been notified and is working to fix it.
            </p>

            {/* Error ID */}
            <div className="bg-zion-slate/50 rounded-xl p-4 mb-6">
              <p className="text-sm text-zion-text-secondary mb-2">Error ID:</p>
              <code className="text-zion-cyan font-mono text-sm break-all">
                {this.state.errorId}
              </code>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleRetry}
                className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Try Again
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleGoHome}
                className="flex items-center justify-center px-6 py-3 border border-zion-cyan/50 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan/10 transition-all duration-300"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleReportBug}
                className="flex items-center justify-center px-6 py-3 border border-zion-purple/50 text-zion-purple font-semibold rounded-xl hover:bg-zion-purple/10 transition-all duration-300"
              >
                <Bug className="w-5 h-5 mr-2" />
                Report Bug
              </motion.button>
            </div>

            {/* Technical Details (Collapsible) */}
            {this.state.error && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-zion-text-secondary hover:text-zion-cyan transition-colors">
                  Technical Details
                </summary>
                <div className="mt-4 bg-zion-slate/50 rounded-xl p-4 overflow-auto max-h-64">
                  <pre className="text-xs text-zion-text-secondary whitespace-pre-wrap">
                    {this.state.error.stack}
                  </pre>
                </div>
              </details>
            )}

            {/* Contact Information */}
            <div className="mt-8 pt-6 border-t border-zion-slate/30">
              <p className="text-sm text-zion-text-secondary">
                Need immediate assistance? Contact us at{' '}
                <a 
                  href="mailto:support@ziontechgroup.com" 
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
                >
                  support@ziontechgroup.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Functional component wrapper for easier use
export function ErrorBoundaryWrapper({ children, ...props }: Props) {
  return (
    <ErrorBoundary {...props}>
      {children}
    </ErrorBoundary>
  );
}
