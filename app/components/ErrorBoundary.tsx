<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
=======
'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';
>>>>>>> 2e5e52a4eac9cfecef52ec8f7193a2474fdee36e

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
<<<<<<< HEAD
=======
    // Update state so the next render will show the fallback UI
>>>>>>> 2e5e52a4eac9cfecef52ec8f7193a2474fdee36e
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
<<<<<<< HEAD
    this.setState({
      error,
      errorInfo,
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      }

    // Call custom error handler if provided
    this.props.onError?.(error, errorInfo);

    // Log to error reporting service in production
    if (process.env.NODE_ENV === 'production') {
      // Here you would typically send the error to a service like Sentry
      }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
=======
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {
      // Send error to monitoring service
      this.logErrorToService(error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    this.setState({ error, errorInfo });
  }

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    // In a real application, you would send this to your error monitoring service
    // For example: Sentry, LogRocket, Bugsnag, etc.
    try {
      const errorData = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      };

      // Example: Send to analytics
      if ('gtag' in window) {
        (window as any).gtag('event', 'exception', {
          description: error.message,
          fatal: false,
        });
      }

      // Example: Send to custom endpoint
      fetch('/api/error-reporting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorData),
      }).catch((fetchError) => {
        console.error('Failed to send error report:', fetchError);
      });
    } catch (loggingError) {
      console.error('Error logging failed:', loggingError);
    }
  };

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  private handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
>>>>>>> 2e5e52a4eac9cfecef52ec8f7193a2474fdee36e
      if (this.props.fallback) {
        return this.props.fallback;
      }

<<<<<<< HEAD
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/20 flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists.
=======
      // Default fallback UI
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-600 mb-6">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
>>>>>>> 2e5e52a4eac9cfecef52ec8f7193a2474fdee36e
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
<<<<<<< HEAD
                <summary className="cursor-pointer text-sm text-gray-400 hover:text-white mb-2">
                  Error Details (Development)
                </summary>
                <div className="bg-red-900/20 border border-red-500/20 rounded-lg p-4 text-xs font-mono text-red-300 overflow-auto max-h-32">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong>Stack:</strong>
=======
                <summary className="cursor-pointer text-sm font-medium text-gray-700 mb-2">
                  Error Details (Development Only)
                </summary>
                <div className="bg-gray-100 p-3 rounded text-xs font-mono text-gray-800 overflow-auto">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  <div className="mb-2">
                    <strong>Stack:</strong>
                    <pre className="whitespace-pre-wrap mt-1">
                      {this.state.error.stack}
                    </pre>
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong>Component Stack:</strong>
>>>>>>> 2e5e52a4eac9cfecef52ec8f7193a2474fdee36e
                      <pre className="whitespace-pre-wrap mt-1">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}

<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleRetry}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform" />
                Try Again
              </button>
              
              <Link
                to="/"
                className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Go Home
              </Link>
            </div>

            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-sm text-gray-400 mb-2">
                Still having trouble?
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
              >
                Contact Support
=======
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={this.handleRetry}
                className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={this.handleReload}
                className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
              >
                Reload Page
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-2">
                If this problem persists, please contact our support team:
              </p>
              <a
                href="mailto:support@ziontechgroup.com"
                className="text-indigo-600 hover:text-indigo-500 text-sm font-medium"
              >
                support@ziontechgroup.com
>>>>>>> 2e5e52a4eac9cfecef52ec8f7193a2474fdee36e
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;