import React, { Component, ErrorInfo, ReactNode } from 'react';
import { ExclamationTriangleIcon, ArrowPathIcon, HomeIcon } from '@heroicons/react/24/outline';

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

class ErrorBoundary extends Component<Props, State> {
  private retryCount = 0;
  private maxRetries = 3;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Send error to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      this.reportError(error, errorInfo);
    }
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    // You can integrate with error monitoring services like Sentry, LogRocket, etc.
    const errorReport = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    // Store in localStorage for debugging
    const errors = JSON.parse(localStorage.getItem('error-reports') || '[]');
    errors.push(errorReport);
    localStorage.setItem('error-reports', JSON.stringify(errors.slice(-10))); // Keep only last 10 errors
  };

  private handleRetry = () => {
    if (this.retryCount < this.maxRetries) {
      this.retryCount++;
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: null
      });
    } else {
      window.location.reload();
    }
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const isRetryAvailable = this.retryCount < this.maxRetries;

      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
          <div className="max-w-md w-full mx-4">
            <div className="bg-slate-800 rounded-xl p-8 shadow-2xl border border-slate-700">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-500/20 rounded-full mb-6">
                  <ExclamationTriangleIcon className="w-8 h-8 text-red-400" />
                </div>
                
                <h1 className="text-2xl font-bold text-white mb-4">
                  Oops! Something went wrong
                </h1>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  We encountered an unexpected error. Don't worry, our team has been notified and we're working to fix it.
                </p>

                {process.env.NODE_ENV === 'development' && this.state.error && (
                  <details className="mb-6 text-left">
                    <summary className="cursor-pointer text-sm text-gray-400 hover:text-white mb-2">
                      Error Details (Development)
                    </summary>
                    <div className="bg-slate-900 rounded-lg p-4 text-xs text-red-300 font-mono overflow-auto max-h-32">
                      <div className="mb-2">
                        <strong>Error:</strong> {this.state.error.message}
                      </div>
                      {this.state.error.stack && (
                        <div>
                          <strong>Stack:</strong>
                          <pre className="whitespace-pre-wrap mt-1">{this.state.error.stack}</pre>
                        </div>
                      )}
                    </div>
                  </details>
                )}

                <div className="space-y-3">
                  {isRetryAvailable && (
                    <button
                      onClick={this.handleRetry}
                      className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
                    >
                      <ArrowPathIcon className="w-5 h-5 mr-2" />
                      Try Again ({this.maxRetries - this.retryCount} attempts left)
                    </button>
                  )}
                  
                  <button
                    onClick={this.handleGoHome}
                    className="w-full flex items-center justify-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors duration-200"
                  >
                    <HomeIcon className="w-5 h-5 mr-2" />
                    Go to Homepage
                  </button>
                  
                  {!isRetryAvailable && (
                    <button
                      onClick={() => window.location.reload()}
                      className="w-full flex items-center justify-center px-6 py-3 bg-gray-600 hover:bg-gray-500 text-white font-semibold rounded-lg transition-colors duration-200"
                    >
                      <ArrowPathIcon className="w-5 h-5 mr-2" />
                      Reload Page
                    </button>
                  )}
                </div>

                {this.state.errorId && (
                  <p className="text-xs text-gray-500 mt-4">
                    Error ID: {this.state.errorId}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
