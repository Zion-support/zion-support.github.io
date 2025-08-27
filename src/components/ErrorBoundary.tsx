import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, Bug, Shield, Zap } from 'lucide-react';

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
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      errorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo);
    }
  }

  private logErrorToService = async (error: Error, errorInfo: ErrorInfo) => {
    try {
      const errorData = {
        errorId: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        // Add any additional context you want to capture
      };

      // You can send this to your error tracking service
      // Example: Sentry, LogRocket, etc.
      console.error('Error logged:', errorData);
      
      // Uncomment and configure your error tracking service
      // await fetch('/api/error-log', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(errorData)
      // });
    } catch (logError) {
      console.error('Failed to log error:', logError);
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

  private handleReportIssue = () => {
    const errorDetails = `
Error ID: ${this.state.errorId}
Error: ${this.state.error?.message}
Stack: ${this.state.error?.stack}
Component Stack: ${this.state.errorInfo?.componentStack}
URL: ${window.location.href}
Timestamp: ${new Date().toISOString()}
    `;
    
    // You can customize this to open your issue reporting system
    const mailtoLink = `mailto:support@ziontechgroup.com?subject=Error Report - ${this.state.errorId}&body=${encodeURIComponent(errorDetails)}`;
    window.open(mailtoLink);
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl w-full bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-red-500/20 p-8 text-center"
          >
            {/* Error Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="mx-auto w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-6"
            >
              <AlertTriangle className="w-10 h-10 text-red-400" />
            </motion.div>

            {/* Error Title */}
            <h1 className="text-3xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>

            {/* Error Message */}
            <p className="text-gray-300 text-lg mb-6">
              We encountered an unexpected error. Our team has been notified and is working to fix it.
            </p>

            {/* Error ID */}
            <div className="bg-slate-700/50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-400 mb-2">Error ID:</p>
              <code className="text-cyan-400 font-mono text-sm break-all">
                {this.state.errorId}
              </code>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleRetry}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleGoHome}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors"
              >
                <Home className="w-4 h-4" />
                Go Home
              </motion.button>
            </div>

            {/* Additional Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleReportIssue}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 font-medium rounded-lg transition-colors border border-red-500/30"
              >
                <Bug className="w-4 h-4" />
                Report Issue
              </motion.button>
            </div>

            {/* Error Details (Development Only) */}
            {this.props.showDetails && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-cyan-400 hover:text-cyan-300 mb-4">
                  Show Error Details
                </summary>
                <div className="bg-slate-900/50 rounded-lg p-4 overflow-auto max-h-64">
                  <pre className="text-xs text-red-400 whitespace-pre-wrap">
                    {this.state.error.stack}
                  </pre>
                  {this.state.errorInfo && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Component Stack:</h4>
                      <pre className="text-xs text-yellow-400 whitespace-pre-wrap">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}

            {/* Helpful Tips */}
            <div className="mt-8 p-4 bg-slate-700/30 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                What you can do:
              </h3>
              <ul className="text-sm text-gray-400 space-y-1 text-left">
                <li>• Refresh the page and try again</li>
                <li>• Clear your browser cache and cookies</li>
                <li>• Check your internet connection</li>
                <li>• Contact our support team if the issue persists</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="mt-6 text-sm text-gray-500">
              <p>Need immediate help? Contact us at{' '}
                <a 
                  href="mailto:support@ziontechgroup.com" 
                  className="text-cyan-400 hover:text-cyan-300 underline"
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

// Hook for functional components to trigger error boundary
export const useErrorHandler = () => {
  return (error: Error, errorInfo?: ErrorInfo) => {
    // This will trigger the error boundary if called within one
    throw error;
  };
};

// Higher-order component for wrapping components with error boundary
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Partial<Props>
) => {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  );
  
  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  return WrappedComponent;
};

export default ErrorBoundary;
