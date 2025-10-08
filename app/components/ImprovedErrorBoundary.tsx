'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableErrorReporting?: boolean;
  enableRetry?: boolean;
  maxRetries?: number;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorId: string;
  retryCount: number;
  lastErrorTime: number;
}

class ImprovedErrorBoundary extends Component<Props, State> {
  private maxRetries: number;
  private retryTimeout: NodeJS.Timeout | null = null;

  constructor(props: Props) {
    super(props);
    this.maxRetries = props.maxRetries || 3;
    
    this.state = {
      hasError: false,
      error: null,
      errorId: '',
      retryCount: 0,
      lastErrorTime: 0,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      lastErrorTime: Date.now(),
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Report error to monitoring service
    if (this.props.enableErrorReporting) {
      this.reportError(error, errorInfo);
    }

    // Call custom error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    // In a real application, you would send this to your error reporting service
    const errorReport = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      retryCount: this.state.retryCount,
    };

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error Report:', errorReport);
    }

    // Send to error reporting service (e.g., Sentry, LogRocket, etc.)
    // Example: Sentry.captureException(error, { extra: errorReport });
  };

  private handleRetry = () => {
    if (this.state.retryCount < this.maxRetries) {
      this.setState(prevState => ({
        hasError: false,
        error: null,
        errorId: '',
        retryCount: prevState.retryCount + 1,
      }));
    }
  };

  private handleReload = () => {
    window.location.reload();
  };

  componentWillUnmount() {
    if (this.retryTimeout) {
      clearTimeout(this.retryTimeout);
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const { retryCount, error, errorId } = this.state;
      const canRetry = retryCount < this.maxRetries;
      const isRecentError = Date.now() - this.state.lastErrorTime < 5000;

      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50">
          <div className="max-w-lg w-full bg-white rounded-xl shadow-2xl p-8 text-center mx-4">
            <div className="text-6xl mb-6">⚠️</div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-lg text-gray-600 mb-6">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>

            {process.env.NODE_ENV === 'development' && error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-left">
                <h3 className="font-semibold text-red-800 mb-2">Error Details:</h3>
                <p className="text-sm text-red-700 font-mono break-all">
                  {error.message}
                </p>
                <p className="text-xs text-red-600 mt-2">
                  Error ID: {errorId}
                </p>
              </div>
            )}

            <div className="space-y-3">
              {canRetry && this.props.enableRetry && (
                <button
                  onClick={this.handleRetry}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Try Again ({this.maxRetries - retryCount} attempts left)
                </button>
              )}
              
              <button
                onClick={this.handleReload}
                className="w-full bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-gray-300"
              >
                Reload Page
              </button>

              <a
                href="/"
                className="block w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-300"
              >
                Go to Homepage
              </a>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              <p>If this problem persists, please contact our support team.</p>
              <p className="mt-2">
                <a 
                  href="tel:+13024640950" 
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  📞 (302) 464-0950
                </a>
              </p>
            </div>

            {isRecentError && (
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  ⚡ This error just occurred. Our system is automatically trying to recover...
                </p>
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ImprovedErrorBoundary;