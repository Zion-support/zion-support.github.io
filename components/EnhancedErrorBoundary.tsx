'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

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
}

class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null
    };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
<<<<<<< HEAD
      console.error('Error caught by boundary: ', error, errorInfo);
    }

    // Send error to monitoring service
    this.logErrorToService(error, errorInfo);

    // Call custom error handler
    this.props.onError?.(error, errorInfo);
  }

=======
<<<<<<< HEAD
      console.error('Error caught by boundary: ', error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
=======
      console.error('Error caught by boundary: ', error, errorInfo)}
    // Send error to monitoring service;
    this.logErrorToService(error, errorInfo);
    // Call custom error handler;
    this.props.onError?.(error, errorInfo)}
>>>>>>> main
  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    // In a real application, you would send this to your error monitoring service;
    // like Sentry, LogRocket, or Bugsnag;
    try {
      // Example: Send to analytics;
      if (typeof gtag !== 'undefined') {
<<<<<<< HEAD
        gtag('event', 'exception', {
          description: error.message,
          fatal: false
        });
      }

      // Example: Send to custom endpoint
      fetch('/api/error-reporting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          error: {
            message: error.message,
            stack: error.stack,
            componentStack: errorInfo.componentStack
          },
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          url: window.location.href
        })
      }).catch(console.error);
    } catch (loggingError) {
      console.error('Failed to log error to service:', loggingError);
    }
  };
=======
        gtag('event,exception', {
          description: error.message, fatal: false})}
      // Example: Send to custom endpoint;
      fetch('/api/error-reporting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'}, body: JSON.stringify({
          error: {
            message: error.message, stack: error.stack, name: error.name},
          errorInfo: {
            componentStack: errorInfo.componentStack}, timestamp: new Date().toISOString(), userAgent: navigator.userAgent,
          url: window.location.href})}).catch(() => {
        // Silently fail if error reporting fails})} catch (reportingError) {
      // Silently fail if error reporting fails}
>>>>>>> main
  }
>>>>>>> main

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
<<<<<<< HEAD
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
<<<<<<< HEAD
              <div className='ml-3'>
                <h3 className='text-lg font-medium text-gray-900'>
                  Something went wrong
                </h3>
                <p className='text-sm text-gray-500'>
                  We&apos;re sorry, but something unexpected happened.''
                </p>
=======
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Something went wrong</h2>
                <p className="text-sm text-gray-600">We're sorry for the inconvenience</p>
>>>>>>> main
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-700">
                An unexpected error occurred. Our team has been notified and is working to fix this issue.
=======
              <div className="flex-shrink-0">
                <svg
<<<<<<< HEAD
                  className="h-8 w-8 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
=======
                  className='h-8 w-8 text-red-500'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
>>>>>>> main
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">
                  Something went wrong
                </h3>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                We're sorry, but something unexpected happened. Please try refreshing the page.
>>>>>>> main
              </p>
            </div>

            {this.props.showDetails && this.state.error && (
              <details className="mb-4">
<<<<<<< HEAD
                <summary className="cursor-pointer text-sm font-medium text-gray-700 mb-2">
                  Error Details
                </summary>
                <div className="bg-gray-100 rounded p-3 text-xs font-mono text-gray-600 overflow-auto max-h-32">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  {this.state.error.stack && (
                    <div>
                      <strong>Stack:</strong>
                      <pre className="whitespace-pre-wrap mt-1">{this.state.error.stack}</pre>
=======
                <summary className="text-sm font-medium text-gray-700 cursor-pointer">
                  Error Details
                </summary>
                <div className="mt-2 p-3 bg-gray-100 rounded text-xs font-mono text-gray-800 overflow-auto">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong>Component Stack:</strong>
                      <pre className="whitespace-pre-wrap">
                        {this.state.errorInfo.componentStack}
                      </pre>
>>>>>>> main
                    </div>
                  )}
                </div>
              </details>
            )}

            <div className="flex space-x-3">
              <button
                onClick={() => window.location.reload()}
<<<<<<< HEAD
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Reload Page
              </button>
              <button
                onClick={() => window.history.back()}
                className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-300 transition-colors"
              >
                Go Back
              </button>
=======
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Refresh Page
              </button>
              <button
                onClick={() => this.setState({ hasError: false, error: null, errorInfo: null })}
                className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Try Again
              </button>
<<<<<<< HEAD
=======
              <button
                onClick={this.handleReload}
                className='flex-1 bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'>
                Reload Page
              </button>
            </div>
            <div className='mt-4 text-center'>
              <p className='text-xs text-gray-500'>
                If this problem persists, please{' '}
                <a
                  href='/contact'
                  className='text-blue-600 hover: text-blue-500'>
                  contact support
                </a>
              </p>
>>>>>>> main
>>>>>>> main
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;