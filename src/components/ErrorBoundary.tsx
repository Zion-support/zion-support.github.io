import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, ArrowLeft, Bug, Shield } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Generate unique error ID for tracking
    const errorId = `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    this.setState({
      errorInfo,
      errorId
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // In production, you might want to send this to an error reporting service
    // Example: Sentry.captureException(error, { extra: errorInfo });
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  handleGoBack = () => {
    window.history.back();
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Error Icon */}
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Oops! Something went wrong</h1>
              <p className="text-slate-400 text-lg">
                We encountered an unexpected error. Our team has been notified.
              </p>
            </div>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-8 p-4 bg-slate-800/50 rounded-lg border border-slate-700 text-left">
                <h3 className="text-lg font-semibold text-red-400 mb-2 flex items-center">
                  <Bug className="w-5 h-5 mr-2" />
                  Error Details (Development)
                </h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-slate-400">Message:</span>
                    <span className="text-red-300 ml-2">{this.state.error.message}</span>
                  </div>
                  <div>
                    <span className="text-slate-400">Stack:</span>
                    <pre className="text-red-300 mt-1 text-xs overflow-x-auto">
                      {this.state.error.stack}
                    </pre>
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <span className="text-slate-400">Component Stack:</span>
                      <pre className="text-red-300 mt-1 text-xs overflow-x-auto">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Error ID for Support */}
            {this.state.errorId && (
              <div className="mb-8 p-3 bg-slate-800/30 rounded-lg border border-slate-700">
                <p className="text-slate-400 text-sm">
                  Error ID: <span className="text-cyan-400 font-mono">{this.state.errorId}</span>
                </p>
                <p className="text-slate-500 text-xs mt-1">
                  Please include this ID when contacting support
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleRetry}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Try Again
              </button>

              <button
                onClick={this.handleGoBack}
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 font-medium rounded-lg transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </button>

              <button
                onClick={this.handleGoHome}
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 font-medium rounded-lg transition-all duration-300"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </button>
            </div>

            {/* Support Information */}
            <div className="mt-8 p-4 bg-slate-800/20 rounded-lg border border-slate-700/50">
              <div className="flex items-center justify-center mb-2">
                <Shield className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-medium">Need Help?</span>
              </div>
              <p className="text-slate-400 text-sm">
                If this problem persists, please contact our support team at{' '}
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="text-cyan-400 hover:text-cyan-300 underline"
                >
                  support@ziontechgroup.com
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hook for functional components to catch errors
export function useErrorHandler() {
  return (error: Error, errorInfo?: ErrorInfo) => {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by hook:', error, errorInfo);
    }

    // In production, you might want to send this to an error reporting service
    // Example: Sentry.captureException(error, { extra: errorInfo });
  };
}

// Higher-order component for wrapping components with error boundary
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: ReactNode,
  onError?: (error: Error, errorInfo: ErrorInfo) => void
) {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary fallback={fallback} onError={onError}>
      <Component {...props} />
    </ErrorBoundary>
  );

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;

  return WrappedComponent;
}
