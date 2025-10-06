import React, { Component, type ErrorInfo, type ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error | undefined;
  errorId?: string | undefined;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log error to external service (e.g., Sentry, LogRocket, etc.)
    this.logErrorToService(error, errorInfo);
  }

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    // Example: Send to external logging service
    try {
      // Replace with your actual logging service
      console.log('Logging error to service:', {
        error: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        errorId: this.state.errorId,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href
      });
    } catch (loggingError) {
      console.error('Failed to log error to service:', loggingError);
    }
  };

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorId: undefined });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  override render() {
    if (this.state.hasError) {
<<<<<<< HEAD
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-6">
              <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Something went wrong
              </h1>
              <p className="text-gray-600 mb-4">
                We're sorry, but something unexpected happened. Please try again.
              </p>
              {this.state.error && (
                <details className="text-left bg-gray-100 p-3 rounded text-sm text-gray-700 mb-4">
                  <summary className="cursor-pointer font-medium">Error Details</summary>
                  <pre className="mt-2 whitespace-pre-wrap break-words">
                    {this.state.error.message}
                  </pre>
                </details>
              )}
            </div>
            
            <div className="space-y-3">
              <button
                onClick={this.handleRetry}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
=======
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
          <div className="text-center p-8 max-w-md">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Our team has been notified.
            </p>
            {this.state.errorId && (
              <p className="text-gray-400 mb-4 text-sm">
                Error ID: {this.state.errorId}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleRetry}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
>>>>>>> cursor/fix-errors-and-merge-to-main-83ba
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </button>
              
              <button
                onClick={this.handleGoHome}
<<<<<<< HEAD
                className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors flex items-center justify-center gap-2"
=======
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
>>>>>>> cursor/fix-errors-and-merge-to-main-83ba
              >
                <Home className="w-4 h-4" />
                Go Home
              </button>
            </div>
<<<<<<< HEAD

            {this.state.errorId && (
              <p className="text-xs text-gray-500 mt-4">
                Error ID: {this.state.errorId}
              </p>
            )}
=======
            {this.state.errorId && (
              <p className="text-xs text-gray-400 mt-4">
                Error ID: {this.state.errorId}
              </p>
            )}
            <button
              onClick={() => window.location.reload()}
              className="mt-4 text-gray-400 hover:text-white text-sm underline"
            >
              Or refresh the page
            </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-83ba
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

<<<<<<< HEAD
export default ErrorBoundary;
=======
export default ErrorBoundary;
>>>>>>> cursor/fix-errors-and-merge-to-main-83ba
