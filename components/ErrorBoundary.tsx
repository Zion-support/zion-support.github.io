'use client';'
''
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {

  constructor(props: Props) {

    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): State {

    return { hasError: true, error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {

    this.setState({

      error,
      errorInfo});
'
    // Log error to console in development''
    if (process.env.NODE_ENV === 'development') {
'
''
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {

      this.props.onError(error, errorInfo);
    }
'
    // Log to external service in production''
    if (process.env.NODE_ENV === 'production') {
'
      // You can integrate with services like Sentry, LogRocket, etc.''
      console.error('Production error:', {

        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent});
    }
  }

  render() {
    if (this.state.hasError) {

      // Custom fallback UI
      if (this.props.fallback) {

        return this.props.fallback;
      }

      // Default error UI
      return()
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">""
          <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">""
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-900 mb-4">"
              <svg""
                className="h-6 w-6 text-red-600 dark:text-red-400"""
                fill="none"""
                viewBox="0 0 24 24"""
                stroke="currentColor"
              >"
                <path""
                  strokeLinecap="round"""
                  strokeLinejoin="round""
                  strokeWidth={2}""
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>"
            ""
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Something went wrong
            </h2>"
            "'"
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">''
              We're sorry, but something unexpected happened. Our team has been notified.
            </p>'
''"
            {process.env.NODE_ENV === 'development' && this.state.error && (""
              <details className="text-left mb-4">""
                <summary className="cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Error Details (Development)"
                </summary>""
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-xs font-mono text-gray-800 dark:text-gray-200 overflow-auto">""
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>"
                  {this.state.error.stack && (""
                    <div className="mb-2">"
                      <strong>Stack:</strong>""
                      <pre className="whitespace-pre-wrap break-words">
                        {this.state.error.stack}
                      </pre>
                    </div>
                  )}
                  {this.state.errorInfo && (
                    <div>"
                      <strong>Component Stack:</strong>""
                      <pre className="whitespace-pre-wrap break-words">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}"
""
            <div className="flex space-x-3">
              <button"
                onClick={() => window.location.reload()}""
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Reload Page
              </button>
              
              <button"
                onClick={() => this.setState({ hasError: false, error: null, errorInfo: null })}""
                className="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Try Again
              </button>
            </div>"
""
            <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">'"
              <p>If the problem persists, please contact support.</p>'"'"
              <p className="mt-1">Error ID: {this.state.error?.message?.slice(0, 8) || 'unknown'}</p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hook for functional components
export const useErrorHandler = () => {
  const handleError = (error: Error, errorInfo?: ErrorInfo) => {
'
''
    console.error('Error caught by useErrorHandler:', error, errorInfo);
    
    // You can add custom error handling logic here
    // For example, sending to an error reporting service'
    ''
    if (process.env.NODE_ENV === 'production') {
'
      // Production error logging''
      console.error('Production error:', {

        message: error.message,
        stack: error.stack,
        componentStack: errorInfo?.componentStack,
        timestamp: new Date().toISOString(),
        url: window.location.href});
    }
  };

  return { handleError };
};
'"
export default ErrorBoundary;'"'"