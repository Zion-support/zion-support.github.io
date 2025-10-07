import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorId?: string;
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
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Report error to analytics/monitoring service
    this.reportError(error, errorInfo);

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    // Report to external service (e.g., Sentry, LogRocket, etc.)
    try {
      if (typeof window !== 'undefined' && (window as unknown as { gtag?: (command: string, eventName: string, parameters: Record<string, unknown>) => void }).gtag) {
        (window as unknown as { gtag: (command: string, eventName: string, parameters: Record<string, unknown>) => void }).gtag('event', 'exception', {
          description: error.message,
          fatal: false,
          custom_map: {
            error_id: this.state.errorId,
            component_stack: errorInfo.componentStack,
          },
        });
      }
      
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
      }
    } catch (reportingError) {
      // Silently fail if error reporting fails
      console.error('Failed to report error:', reportingError);
    }
  };

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorId: undefined });
  };

  private handleGoHome = () => {
    if (window?.location) {
      window.location.href = '/';
    }
  };

  override render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gray-900" role="alert" aria-live="assertive">
          <div className="text-center p-8 max-w-md">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-6">
              We&apos;re sorry, but something unexpected happened. Our team has been notified.
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
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </button>
              <button
                onClick={this.handleGoHome}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4" />
                Go Home
              </button>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 text-gray-400 hover:text-white text-sm underline"
            >
              Or refresh the page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;