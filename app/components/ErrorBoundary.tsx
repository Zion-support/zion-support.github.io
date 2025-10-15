import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';

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

class ErrorBoundary extends Component<Props, State> {
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
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Update state with error details
    this.setState({
      error,
      errorInfo
    });

    // Call custom error handler if provided
    this.props.onError?.(error, errorInfo);

    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo);
    }
  }

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    // In a real application, you would send this to an error reporting service
    // like Sentry, LogRocket, or Bugsnag
    const errorData = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    // Example: Send to error reporting service
    // fetch('/api/errors', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(errorData)
    // });

    // Only log in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error logged:', errorData);
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

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleReportBug = () => {
    const errorDetails = {
      error: this.state.error?.message,
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack,
      errorId: this.state.errorId,
      url: window.location.href,
      timestamp: new Date().toISOString()
    };

    // Create mailto link with error details
    const subject = `Bug Report - Error ID: ${this.state.errorId}`;
    const body = `Error Details:\n\n${JSON.stringify(errorDetails, null, 2)}`;
    const mailtoLink = `mailto:kleber@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
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
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
            {/* Error Icon */}
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-10 h-10 text-white" />
            </div>

            {/* Error Title */}
            <h1 className="text-3xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>

            {/* Error Message */}
            <p className="text-gray-300 mb-6 text-lg">
              We encountered an unexpected error. Don't worry, our team has been notified and is working to fix it.
            </p>

            {/* Error ID */}
            <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-400 mb-2">Error ID:</p>
              <code className="text-cyan-400 font-mono text-sm break-all">
                {this.state.errorId}
              </code>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleRetry}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-300" />
                Try Again
              </button>

              <button
                onClick={this.handleReload}
                className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-300" />
                Reload Page
              </button>

              <button
                onClick={this.handleGoHome}
                className="border border-purple-400 text-purple-400 px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Go Home
              </button>
            </div>

            {/* Report Bug Button */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <button
                onClick={this.handleReportBug}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center justify-center group text-sm"
              >
                <Bug className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Report this bug to our team
              </button>
            </div>

            {/* Development Error Details */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="text-gray-400 cursor-pointer hover:text-white transition-colors">
                  Error Details (Development)
                </summary>
                <div className="mt-4 bg-slate-900/50 rounded-lg p-4 overflow-auto">
                  <pre className="text-xs text-red-400 whitespace-pre-wrap">
                    {this.state.error.stack}
                  </pre>
                  {this.state.errorInfo && (
                    <pre className="text-xs text-yellow-400 whitespace-pre-wrap mt-4">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  )}
                </div>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Higher-order component for easier usage
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

// Hook for error boundary context
export const useErrorHandler = () => {
  const handleError = (error: Error, errorInfo?: ErrorInfo) => {
    // Only log in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by useErrorHandler:', error, errorInfo);
    }
    
    // You can add custom error handling logic here
    // For example, sending to an error reporting service
  };

  return { handleError };
};

export default ErrorBoundary;