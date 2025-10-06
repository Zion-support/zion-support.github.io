<<<<<<< HEAD
<<<<<<< HEAD
import { Component, type ErrorInfo, type ReactNode } from 'react';
import React, { Component, type ErrorInfo, type ReactNode } from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e62
import React, { Component, type ErrorInfo, type ReactNode } from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-cfe1
=======
import React, { Component, type ErrorInfo, type ReactNode } from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-96bc
=======
import React, { Component, type ErrorInfo, type ReactNode } from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-debd
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

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Report error to analytics/monitoring service
    this.reportError(error, errorInfo);
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    // Report to external service (e.g., Sentry, LogRocket, etc.)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: {
          error_id: this.state.errorId,
          component_stack: errorInfo.componentStack
        }
      });
    }
  };

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorId: undefined });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <AlertTriangle className="h-12 w-12 text-red-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-600 mb-6">
              We're sorry, but something unexpected happened. Please try again.
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-4 text-left">
                <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded overflow-auto">
                  {this.state.error.message}
                  {'\n\n'}
                  {this.state.error.stack}
                </pre>
              </details>
            )}
            <div className="flex gap-3 justify-center">
              <button
                onClick={this.handleRetry}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <RefreshCw className="h-4 w-4" />
                Try Again
              </button>
              <button
                onClick={this.handleGoHome}
                className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Home className="h-4 w-4" />
                Go Home
              </button>
            </div>
<<<<<<< HEAD
            <button
              onClick={() => window.location.reload()}
              className="mt-4 text-gray-400 hover:text-white text-sm underline"
            >
              Or refresh the page
            </button>
=======
            {this.state.errorId && (
              <p className="text-xs text-gray-400 mt-4">
                Error ID: {this.state.errorId}
              </p>
            )}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-96bc
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
<<<<<<< HEAD
<<<<<<< HEAD
export default ErrorBoundary;
>>>>>>> cursor/fix-errors-and-merge-to-main-cfe1
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-96bc
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-debd
