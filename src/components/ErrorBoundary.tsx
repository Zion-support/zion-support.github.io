import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, ArrowLeft, Bug, Shield, Zap } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  resetKey?: string | number;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
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
    this.setState({
      error,
      errorInfo
    });

    // Log error to console for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Send error to error reporting service (e.g., Sentry)
    this.reportError(error, errorInfo);
  }

  componentDidUpdate(prevProps: Props) {
    // Reset error state when resetKey changes
    if (prevProps.resetKey !== this.props.resetKey) {
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: '',
        retryCount: 0
      });
    }
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    // In a real application, you would send this to your error reporting service
    // For now, we'll just log it to console
    console.group('Error Report');
    console.log('Error ID:', this.state.errorId);
    console.log('Error:', error);
    console.log('Error Info:', errorInfo);
    console.log('Component Stack:', errorInfo.componentStack);
    console.log('User Agent:', navigator.userAgent);
    console.log('URL:', window.location.href);
    console.log('Timestamp:', new Date().toISOString());
    console.groupEnd();

    // You could also send this to an analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: true
      });
    }
  };

  private handleRetry = () => {
    this.setState(prevState => ({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: prevState.retryCount + 1
    }));
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleGoBack = () => {
    window.history.back();
  };

  private handleReportIssue = () => {
    const errorDetails = {
      errorId: this.state.errorId,
      message: this.state.error?.message,
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack,
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString()
    };

    // Create a mailto link with error details
    const subject = encodeURIComponent(`Error Report - ${this.state.errorId}`);
    const body = encodeURIComponent(JSON.stringify(errorDetails, null, 2));
    const mailtoLink = `mailto:support@ziontechgroup.com?subject=${subject}&body=${body}`;
    
    window.open(mailtoLink);
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-zion-slate flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl w-full bg-zion-slate-light border border-zion-cyan/20 rounded-2xl p-8 text-center"
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
            <h1 className="text-3xl font-bold text-zion-text-primary mb-4">
              Oops! Something went wrong
            </h1>

            {/* Error Message */}
            <p className="text-zion-text-secondary mb-6 text-lg">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>

            {/* Error Details (Collapsible) */}
            <details className="mb-6 text-left">
              <summary className="cursor-pointer text-zion-cyan hover:text-zion-cyan/80 transition-colors mb-2">
                <span className="flex items-center gap-2">
                  <Bug className="w-4 h-4" />
                  Technical Details
                </span>
              </summary>
              <div className="bg-zion-slate p-4 rounded-lg text-sm text-zion-text-secondary font-mono overflow-x-auto">
                <div className="mb-2">
                  <strong>Error ID:</strong> {this.state.errorId}
                </div>
                <div className="mb-2">
                  <strong>Message:</strong> {this.state.error?.message}
                </div>
                {this.state.error?.stack && (
                  <div className="mb-2">
                    <strong>Stack:</strong>
                    <pre className="mt-1 text-xs overflow-x-auto">{this.state.error.stack}</pre>
                  </div>
                )}
              </div>
            </details>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleRetry}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300"
              >
                <RefreshCw className="w-5 h-5" />
                Try Again
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleGoBack}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-zion-slate border border-zion-cyan/30 text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/10 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleGoHome}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-zion-slate border border-zion-cyan/30 text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/10 transition-all duration-300"
              >
                <Home className="w-5 h-5" />
                Go Home
              </motion.button>
            </div>

            {/* Additional Help */}
            <div className="mt-8 pt-6 border-t border-zion-cyan/20">
              <div className="flex items-center justify-center gap-6 text-sm text-zion-text-secondary">
                <button
                  onClick={this.handleReportIssue}
                  className="flex items-center gap-2 hover:text-zion-cyan transition-colors"
                >
                  <Shield className="w-4 h-4" />
                  Report Issue
                </button>
                <a
                  href="/help"
                  className="flex items-center gap-2 hover:text-zion-cyan transition-colors"
                >
                  <Zap className="w-4 h-4" />
                  Get Help
                </a>
              </div>
            </div>

            {/* Retry Counter */}
            {this.state.retryCount > 0 && (
              <div className="mt-4 text-xs text-zion-text-secondary">
                Retry attempts: {this.state.retryCount}
              </div>
            )}
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Higher-order component for functional components
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<Props, 'children'>
) => {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  );

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  return WrappedComponent;
};

// Hook for functional components to catch errors
export const useErrorHandler = () => {
  const handleError = (error: Error, errorInfo?: any) => {
    console.error('Error caught by useErrorHandler:', error, errorInfo);
    
    // You can add custom error handling logic here
    // For example, sending to an error reporting service
    
    // Re-throw the error to be caught by the nearest ErrorBoundary
    throw error;
  };

  return { handleError };
};
