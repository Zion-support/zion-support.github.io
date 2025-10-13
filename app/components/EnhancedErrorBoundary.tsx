import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';

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
  retryCount: number;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  private maxRetries = 3;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Call custom error handler if provided
    this.props.onError?.(error, errorInfo);

    // Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo);
    }
  }

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    // Here you would integrate with your error reporting service
    // Examples: Sentry, LogRocket, Bugsnag, etc.
    try {
      // Example: Sentry.captureException(error, { extra: errorInfo });
      console.error('Error logged to service:', error.message);
    } catch (loggingError) {
      console.error('Failed to log error to service:', loggingError);
    }
  };

  private handleRetry = () => {
    if (this.state.retryCount < this.maxRetries) {
      this.setState(prevState => ({
        hasError: false,
        error: null,
        errorInfo: null,
        retryCount: prevState.retryCount + 1,
      }));
    }
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleReportBug = () => {
    const errorDetails = {
      message: this.state.error?.message,
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    };

    // Open email client with error details
    const subject = encodeURIComponent('Bug Report - Zion Tech Group Website');
    const body = encodeURIComponent(`
Error Details:
${JSON.stringify(errorDetails, null, 2)}

Please describe what you were doing when this error occurred:
    `);

    window.open(`mailto:kleber@ziontechgroup.com?subject=${subject}&body=${body}`);
  };

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const canRetry = this.state.retryCount < this.maxRetries;

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-10 h-10 text-red-500" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
              </p>
            </div>

            {/* Error details for development */}
            {this.props.showDetails && process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-left">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Error Details:</h3>
                <pre className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap overflow-auto">
                  {this.state.error.message}
                  {this.state.error.stack && `\n\nStack trace:\n${this.state.error.stack}`}
                </pre>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {canRetry && (
                <button
                  onClick={this.handleRetry}
                  className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
                >
                  <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform" />
                  Try Again ({this.maxRetries - this.state.retryCount} attempts left)
                </button>
              )}

              <button
                onClick={this.handleReload}
                className="flex items-center justify-center px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 group"
              >
                <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform" />
                Reload Page
              </button>

              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 group"
              >
                <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Go Home
              </button>

              <button
                onClick={this.handleReportBug}
                className="flex items-center justify-center px-6 py-3 border border-red-300 dark:border-red-600 text-red-700 dark:text-red-300 rounded-lg font-semibold hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300 group"
              >
                <Bug className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Report Bug
              </button>
            </div>

            {/* Contact information */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Need immediate assistance?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="text-cyan-600 dark:text-cyan-400 hover:underline"
                >
                  kleber@ziontechgroup.com
                </a>
                <a
                  href="tel:+13024640950"
                  className="text-cyan-600 dark:text-cyan-400 hover:underline"
                >
                  +1 (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;