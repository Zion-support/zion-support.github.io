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
  CheckCircle
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
  showDetails: boolean;
  errorId: string;
  recoveryAttempts: number;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false,
      errorId: '',
      recoveryAttempts: 0
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
    this.setState({
      errorInfo,
      recoveryAttempts: this.state.recoveryAttempts + 1
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log error to external service (e.g., Sentry) in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo);
    }
  }

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    try {
      // Example: Log to external service
      const errorData = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        errorId: this.state.errorId
      };

      // In a real app, send this to your error tracking service
      console.log('Error logged to service:', errorData);
    } catch (loggingError) {
      console.error('Failed to log error to service:', loggingError);
    }
  };

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false
    });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleReportIssue = () => {
    const errorData = {
      error: this.state.error?.message,
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack,
      errorId: this.state.errorId,
      url: window.location.href
    };

    // Create a mailto link with error details
    const subject = encodeURIComponent(`Error Report - ${this.state.errorId}`);
    const body = encodeURIComponent(`
Error Report

Error ID: ${this.state.errorId}
URL: ${window.location.href}
Error: ${this.state.error?.message}

Please describe what you were doing when this error occurred:

Stack Trace:
${this.state.error?.stack}

Component Stack:
${this.state.errorInfo?.componentStack}
    `);

    window.open(`mailto:support@ziontechgroup.com?subject=${subject}&body=${body}`);
  };

  private toggleDetails = () => {
    this.setState(prev => ({ showDetails: !prev.showDetails }));
  };

  private getErrorType = (error: Error): 'runtime' | 'network' | 'validation' | 'unknown' => {
    if (error.name === 'TypeError' || error.name === 'ReferenceError') {
      return 'runtime';
    }
    if (error.message.includes('fetch') || error.message.includes('network')) {
      return 'network';
    }
    if (error.message.includes('validation') || error.message.includes('invalid')) {
      return 'validation';
    }
    return 'unknown';
  };

  private getErrorIcon = (errorType: ReturnType<typeof this.getErrorType>) => {
    switch (errorType) {
      case 'runtime':
        return <Bug className="w-6 h-6 text-red-500" />;
      case 'network':
        return <AlertCircle className="w-6 h-6 text-yellow-500" />;
      case 'validation':
        return <Info className="w-6 h-6 text-blue-500" />;
      default:
        return <AlertTriangle className="w-6 h-6 text-red-500" />;
    }
  };

  private getErrorMessage = (error: Error, errorType: ReturnType<typeof this.getErrorType>) => {
    switch (errorType) {
      case 'runtime':
        return 'Something went wrong with the application. This might be a temporary issue.';
      case 'network':
        return 'There was a problem connecting to our servers. Please check your internet connection.';
      case 'validation':
        return 'The information provided is not valid. Please check your input and try again.';
      default:
        return 'An unexpected error occurred. Our team has been notified.';
    }
  };

  private getRecoverySuggestion = (errorType: ReturnType<typeof this.getErrorType>) => {
    switch (errorType) {
      case 'runtime':
        return 'Try refreshing the page or clearing your browser cache.';
      case 'network':
        return 'Check your internet connection and try again.';
      case 'validation':
        return 'Review the information you entered and ensure it meets the requirements.';
      default:
        return 'Try refreshing the page or contact support if the problem persists.';
    }
  };

  render() {
    if (this.state.hasError) {
      const errorType = this.getErrorType(this.state.error!);
      const errorIcon = this.getErrorIcon(errorType);
      const errorMessage = this.getErrorMessage(this.state.error!, errorType);
      const recoverySuggestion = this.getRecoverySuggestion(errorType);

      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center p-4"
        >
          <div className="max-w-2xl w-full bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-zion-cyan/20 p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {errorIcon}
              </div>
              <h1 className="text-3xl font-bold text-zion-slate-dark mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-zion-slate text-lg">
                We're sorry for the inconvenience
              </p>
            </div>

            {/* Error Details */}
            <div className="bg-zion-slate/5 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-zion-slate-dark">
                  Error Details
                </h2>
                <button
                  onClick={this.toggleDetails}
                  className="text-zion-cyan hover:text-zion-cyan/80 transition-colors"
                >
                  {this.state.showDetails ? 'Hide' : 'Show'} Details
                </button>
              </div>

              <p className="text-zion-slate mb-4">{errorMessage}</p>
              <p className="text-zion-slate/80 text-sm">{recoverySuggestion}</p>

              {/* Error ID */}
              <div className="mt-4 p-3 bg-zion-slate/10 rounded-lg">
                <p className="text-xs text-zion-slate/60">
                  Error ID: <span className="font-mono text-zion-cyan">{this.state.errorId}</span>
                </p>
              </div>

              {/* Detailed Error Information */}
              {this.state.showDetails && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 space-y-3"
                >
                  {this.state.error && (
                    <div>
                      <h3 className="text-sm font-semibold text-zion-slate-dark mb-2">Error Message</h3>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <p className="text-sm text-red-700 font-mono break-words">
                          {this.state.error.message}
                        </p>
                      </div>
                    </div>
                  )}

                  {this.state.errorInfo && (
                    <div>
                      <h3 className="text-sm font-semibold text-zion-slate-dark mb-2">Component Stack</h3>
                      <div className="bg-zion-slate/10 border border-zion-slate/200 rounded-lg p-3 max-h-32 overflow-y-auto">
                        <pre className="text-xs text-zion-slate/80 whitespace-pre-wrap">
                          {this.state.errorInfo.componentStack}
                        </pre>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </div>

            {/* Recovery Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan/80 hover:to-zion-blue/80 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <RefreshCw className="w-5 h-5" />
                <span>Try Again</span>
              </button>

              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-zion-cyan/30 hover:border-zion-cyan text-zion-cyan hover:text-white font-semibold rounded-xl transition-all duration-300 hover:bg-zion-cyan"
              >
                <Home className="w-5 h-5" />
                <span>Go Home</span>
              </button>

              <button
                onClick={this.handleReportIssue}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-zion-slate/10 hover:bg-zion-slate/20 text-zion-slate-dark font-semibold rounded-xl transition-all duration-300"
              >
                <AlertTriangle className="w-5 h-5" />
                <span>Report Issue</span>
              </button>
            </div>

            {/* Additional Help */}
            <div className="text-center">
              <p className="text-zion-slate/80 text-sm mb-4">
                If this problem continues, please contact our support team
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm text-zion-slate/60">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Error logged</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Info className="w-4 h-4 text-blue-500" />
                  <span>Support notified</span>
                </div>
              </div>
            </div>

            {/* Recovery Attempts */}
            {this.state.recoveryAttempts > 1 && (
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center space-x-2 text-yellow-800">
                  <AlertTriangle className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    Recovery attempt #{this.state.recoveryAttempts}
                  </span>
                </div>
                <p className="text-sm text-yellow-700 mt-2">
                  Multiple errors detected. Consider refreshing the page or clearing your browser cache.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      );
    }

    return this.props.children;
  }
}

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

// Higher-order component for error handling
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
