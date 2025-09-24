'use client';

import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
<<<<<<< HEAD
    const errorDetails = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'unknown',
      url: typeof window !== 'undefined' ? window.location.href : 'unknown',
    };

    // eslint-disable-next-line no-console
    console.group('🚨 Error Boundary Caught Error');
    // eslint-disable-next-line no-console
    console.error('Error:', error);
    // eslint-disable-next-line no-console
    console.error('Error Info:', errorInfo);
    // eslint-disable-next-line no-console
    console.error('Full Details:', errorDetails);
    // eslint-disable-next-line no-console
    console.groupEnd();

    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: true,
      });
    }

    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-console
      console.log('Error would be sent to error tracking service:', errorDetails);
=======
    // Log error for debugging in development
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error('ErrorBoundary caught an error:', error, errorInfo);
>>>>>>> origin/main
    }
    this.setState({
      error,
      errorInfo,
    });
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return (
          <FallbackComponent
            error={this.state.error!}
            resetError={this.resetError}
          />
        );
      }

      return (
        <div className='min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900'>
          <div className='max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6'>
            <div className='flex items-center justify-center w-12 h-12 mx-auto bg-red-100 dark:bg-red-900/20 rounded-full mb-4'>
              <svg
                className='w-6 h-6 text-red-600 dark:text-red-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z'
                />
              </svg>
            </div>

            <h2 className='text-xl font-semibold text-gray-900 dark:text-white text-center mb-2'>
              Something went wrong
            </h2>

            <p className='text-gray-600 dark:text-gray-300 text-center mb-6'>
              We're sorry, but something unexpected happened. Please try
              refreshing the page.
            </p>

            <div className='space-y-3'>
              <button
                onClick={this.resetError}
                className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200'
              >
                Try Again
              </button>

              <button
                onClick={() => window.location.reload()}
                className='w-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200'
              >
                Refresh Page
              </button>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className='mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded text-sm'>
                <summary className='cursor-pointer font-medium text-gray-700 dark:text-gray-300'>
                  Error Details (Development)
                </summary>
                <pre className='mt-2 text-xs text-red-600 dark:text-red-400 overflow-auto'>
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

<<<<<<< HEAD
function DefaultErrorFallback({ error, resetError }: { error?: Error; resetError: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 text-center mb-2">Something went wrong</h2>
        <p className="text-gray-600 text-center mb-4">We&apos;re sorry, but something unexpected happened. Please try again.</p>
        {process.env.NODE_ENV === 'development' && error && (
          <details className="mb-4 p-3 bg-gray-100 rounded text-sm">
            <summary className="cursor-pointer font-medium">Error Details</summary>
            <pre className="mt-2 text-xs overflow-auto">{error.stack}</pre>
          </details>
        )}
        <div className="flex space-x-3">
          <button onClick={resetError} className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Try Again</button>
          <button onClick={() => (window.location.href = '/')} className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">Go Home</button>
        </div>
      </div>
    </div>
  );
}

=======
>>>>>>> origin/main
export default ErrorBoundary;
