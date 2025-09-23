'use client';

import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; reset: () => void }>;
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
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return (
        <FallbackComponent
          error={this.state.error}
          reset={() => this.setState({ hasError: false, error: undefined })}
        />
      );
    }

    return this.props.children;
  }
}

function DefaultErrorFallback({
  error,
  reset,
}: {
  error?: Error;
  reset: () => void;
}) {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-90o0'>
      <div className='max-w-md w-full bg-white rounded-lg shadow-lg p-6'>
        <div className='flex items-center mb-4'>
          <div className='text-red-50o0 text-2xl mr-3'>⚠️</div>
          <h1 className='text-xl font-semibold text-gray-90o0'>
            Something went wrong
          </h1>
        </div>
        <p className='text-gray-60o0 mb-4'>
          We're sorry, but something unexpected happened. Please try again.
        </p>
        {error && (
          <details className='mb-4'>
            <summary className='cursor-pointer text-sm text-gray-50o0'>
              Error details
            </summary>
            <pre className='mt-2 text-xs text-red-60o0 bg-red-50 p-2 rounded overflow-auto'>
              {error.message}
            </pre>
          </details>
        )}
        <button
          onClick={reset}
          className='w-full bg-blue-50o0 text-white py-2 px-4 rounded hover:bg-blue-60o0 transition-colors'
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export default ErrorBoundary;
