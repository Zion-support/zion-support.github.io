import React, { Component, ErrorInfo, ReactNode } from 'react';
import { FileWarning } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
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
    return { hasError: true, error };
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

    // Log error to analytics in production
    if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
      // Send to error tracking service
      if ('gtag' in window) {
        (window as unknown as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag('event', 'exception', {
          description: error.message,
          fatal: false
        });
      }
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
<<<<<<< HEAD
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <svg className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">
                  Something went wrong
                </h3>
=======
        this.props.fallback || (
          <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50'>
            <div className='max-w-md w-full mx-4'>
              <div className='bg-white rounded-2xl shadow-xl p-8 text-center'>
                <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4'>
<<<<<<< HEAD
                  <FileWarning className='w-8 h-8 text-red-600' />
=======
<<<<<<< HEAD
                  <span className='text-4xl text-red-600'>⚠️</span>
=======
                  <FileWarning className='w-8 h-8 text-red-600' />
>>>>>>> cursor/fix-errors-and-merge-to-main-32ba
>>>>>>> 73bd67674ef5ee67febe1c7bc72f795ff8e93e28
                </div>
                <h1 className='text-2xl font-bold text-gray-900 mb-2'>
                  Oops! Something went wrong
                </h1>
                <p className='text-gray-600 mb-6'>
                  We're sorry for the inconvenience. Please try refreshing the
                  page.
                </p>
                <div className='space-y-3'>
                  <button
                    onClick={() => window.location.reload()}
                    className='w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors'
                  >
                    Refresh Page
                  </button>
                  <a
                    href='/'
                    className='block w-full border-2 border-red-600 text-red-600 hover:bg-red-50 font-semibold py-3 px-6 rounded-lg transition-colors'
                  >
                    Go to Homepage
                  </a>
                </div>
>>>>>>> 66f2409a72d6502f743b9af976ac4e828aac768e
              </div>
            </div>
            
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-4">
                <summary className="text-sm font-medium text-gray-700 cursor-pointer">
                  Error Details (Development)
                </summary>
                <div className="mt-2 p-3 bg-gray-100 rounded text-xs font-mono text-gray-800 overflow-auto">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  <div>
                    <strong>Stack:</strong>
                    <pre className="whitespace-pre-wrap">{this.state.error.stack}</pre>
                  </div>
                  {this.state.errorInfo && (
                    <div className="mt-2">
                      <strong>Component Stack:</strong>
                      <pre className="whitespace-pre-wrap">{this.state.errorInfo.componentStack}</pre>
                    </div>
                  )}
                </div>
              </details>
            )}

            <div className="mt-6 flex space-x-3">
              <button
                onClick={() => window.location.reload()}
                className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors"
              >
                Refresh Page
              </button>
              <button
                onClick={() => this.setState({ hasError: false, error: undefined, errorInfo: undefined })}
                className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-300 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;