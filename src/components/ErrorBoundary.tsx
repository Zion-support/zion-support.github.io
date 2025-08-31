import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, ArrowLeft, Bug, AlertCircle, X, Info } from 'lucide-react';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
  isReporting: boolean;
  showDetails: boolean;
  retryCount: number;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  maxRetries?: number;
  enableReporting?: boolean;
  enableRecovery?: boolean;
  className?: string;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
      isReporting: false,
      showDetails: false,
      retryCount: 0
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({ errorInfo });
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.group('Error Details');
      console.error('Error:', error);
      console.error('Error Info:', errorInfo);
      console.error('Component Stack:', errorInfo.componentStack);
      console.groupEnd();
    }

    // Generate error report
    this.generateErrorReport(error, errorInfo);
  }

  generateErrorReport = (error: Error, errorInfo: ErrorInfo) => {
    const report = {
      errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      error: {
        name: error.name,
        message: error.message,
        stack: error.stack
      },
      errorInfo: {
        componentStack: errorInfo.componentStack
      },
      retryCount: this.state.retryCount
    };

    // Store error report in localStorage for debugging
    try {
      const existingReports = JSON.parse(localStorage.getItem('error-reports') || '[]');
      existingReports.push(report);
      localStorage.setItem('error-reports', JSON.stringify(existingReports.slice(-10))); // Keep last 10
    } catch (e) {
      console.warn('Failed to store error report:', e);
    }

    // Send to error reporting service if enabled
    if (this.props.enableReporting) {
      this.sendErrorReport(report);
    }
  };

  sendErrorReport = async (report: any) => {
    this.setState({ isReporting: true });
    
    try {
      // Send to your error reporting service
      // Example: Sentry, LogRocket, etc.
      const response = await fetch('/api/error-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(report),
      });

      if (!response.ok) {
        throw new Error('Failed to send error report');
      }

      console.log('Error report sent successfully');
    } catch (e) {
      console.warn('Failed to send error report:', e);
    } finally {
      this.setState({ isReporting: false });
    }
  };

  handleRetry = () => {
    if (this.state.retryCount >= (this.props.maxRetries || 3)) {
      this.handleReset();
      return;
    }

    this.setState(prevState => ({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: prevState.retryCount + 1
    }));
  };

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
      retryCount: 0
    });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  handleGoBack = () => {
    window.history.back();
  };

  toggleDetails = () => {
    this.setState(prevState => ({
      showDetails: !prevState.showDetails
    }));
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const { error, errorInfo, errorId, isReporting, showDetails, retryCount } = this.state;
      const maxRetries = this.props.maxRetries || 3;
      const canRetry = retryCount < maxRetries;

      return (
        <div className={`min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 flex items-center justify-center p-4 ${this.props.className || ''}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl border border-red-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="w-6 h-6 text-white" />
                  <h1 className="text-xl font-bold text-white">Something went wrong</h1>
                </div>
                <button
                  onClick={this.handleReset}
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Close error"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bug className="w-8 h-8 text-red-600" />
                </div>
                
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  We're sorry, but something unexpected happened
                </h2>
                
                <p className="text-gray-600 mb-4">
                  Our team has been notified and we're working to fix this issue. 
                  You can try again or return to the homepage.
                </p>

                {error && (
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <p className="text-sm text-gray-700 font-mono">
                      {error.message || 'An unknown error occurred'}
                    </p>
                  </div>
                )}

                {errorId && (
                  <div className="text-xs text-gray-500 mb-4">
                    Error ID: <code className="bg-gray-100 px-2 py-1 rounded">{errorId}</code>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                {canRetry && (
                  <button
                    onClick={this.handleRetry}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Try Again ({maxRetries - retryCount} attempts left)</span>
                  </button>
                )}
                
                <button
                  onClick={this.handleGoBack}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Go Back</span>
                </button>
                
                <button
                  onClick={this.handleGoHome}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <Home className="w-4 h-4" />
                  <span>Go Home</span>
                </button>
              </div>

              {/* Error Details Toggle */}
              {errorInfo && (
                <div className="border-t border-gray-200 pt-4">
                  <button
                    onClick={this.toggleDetails}
                    className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <Info className="w-4 h-4" />
                    <span>{showDetails ? 'Hide' : 'Show'} technical details</span>
                  </button>
                  
                  {showDetails && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 bg-gray-50 rounded-lg p-4 overflow-auto max-h-64"
                    >
                      <h4 className="font-medium text-gray-900 mb-2">Component Stack:</h4>
                      <pre className="text-xs text-gray-700 whitespace-pre-wrap">
                        {errorInfo.componentStack}
                      </pre>
                      
                      {error?.stack && (
                        <>
                          <h4 className="font-medium text-gray-900 mb-2 mt-4">Error Stack:</h4>
                          <pre className="text-xs text-gray-700 whitespace-pre-wrap">
                            {error.stack}
                          </pre>
                        </>
                      )}
                    </motion.div>
                  )}
                </div>
              )}

              {/* Reporting Status */}
              {this.props.enableReporting && (
                <div className="mt-4 text-center">
                  {isReporting ? (
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Sending error report...</span>
                    </div>
                  ) : (
                    <p className="text-xs text-gray-500">
                      This error has been automatically reported to our team
                    </p>
                  )}
                </div>
              )}

              {/* Help Section */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-blue-800">
                    <p className="font-medium mb-1">Need help?</p>
                    <p className="mb-2">
                      If this problem persists, please contact our support team.
                    </p>
                    <a
                      href="/contact"
                      className="text-blue-600 hover:text-blue-800 underline font-medium"
                    >
                      Contact Support
                    </a>
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

// Hook for functional components to handle errors
export function useErrorHandler() {
  const [error, setError] = React.useState<Error | null>(null);

  const handleError = React.useCallback((error: Error) => {
    console.error('Error caught by useErrorHandler:', error);
    setError(error);
  }, []);

  const clearError = React.useCallback(() => {
    setError(null);
  }, []);

  return { error, handleError, clearError };
}

// Higher-order component for error boundaries
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<ErrorBoundaryProps, 'children'>
) {
  return function WithErrorBoundary(props: P) {
    return (
      <ErrorBoundary {...errorBoundaryProps}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}

// Default export
export default ErrorBoundary;
