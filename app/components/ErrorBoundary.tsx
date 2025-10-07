import React, { Component, ErrorInfo, ReactNode } from 'react';
import Link from 'next/link';
import { FileWarning } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableErrorReporting?: boolean;
  enableRetry?: boolean;
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
    this.setState({ errorInfo });
    
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    if (this.props.enableErrorReporting) {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        this.props.fallback || (
          <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50'>
            <div className='max-w-md w-full mx-4'>
              <div className='bg-white rounded-2xl shadow-xl p-8 text-center'>
                <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4'>
                  <FileWarning className='w-8 h-8 text-red-600' />
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
                  <Link
                    href='/'
                    className='block w-full border-2 border-red-600 text-red-600 hover:bg-red-50 font-semibold py-3 px-6 rounded-lg transition-colors'
                  >
                    Go to Homepage
                  </Link>
                </div>
                {this.props.enableErrorReporting && this.state.error && (
                  <details className="mt-6 text-left">
                    <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                      Error Details
                    </summary>
                    <div className="mt-2 p-4 bg-gray-100 rounded text-xs">
                      <div className="mb-2">
                        <strong>Error:</strong> {this.state.error.message}
                      </div>
                      {this.state.errorInfo && (
                        <div>
                          <strong>Component Stack:</strong>
                          <pre className="whitespace-pre-wrap">{this.state.errorInfo.componentStack}</pre>
                        </div>
                      )}
                    </div>
                  </details>
                )}
              </div>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;