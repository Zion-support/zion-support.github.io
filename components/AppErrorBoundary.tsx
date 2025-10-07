import React, { Component, type ErrorInfo, type ReactNode } from 'react';

interface ErrorFallbackProps {
  error: Error;
  resetError: () => void;
}

function ErrorFallback({ error, resetError }: ErrorFallbackProps) {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='max-w-md w-full bg-white shadow-lg rounded-lg p-6'>
        <div className='flex items-center mb-4'>
          <div className='flex-shrink-0'>
            <svg
              className='h-8 w-8 text-red-600'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 9v2m0 4h.01m-6.938 4h13?.856c1.54 0 2.502-1.667 1.732-2?.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77?.833.192 2.5 1.732 2.5z'
              />
            </svg>
          </div>
          <div className='ml-3'>
            <h3 className='text-lg font-medium text-gray-900'>
              Something went wrong
            </h3>
          </div>
        </div>
        <div className='mb-4'>
          <p className='text-sm text-gray-600 mb-2'>
            An unexpected error occurred:
          </p>
          <pre className='text-xs bg-gray-100 p-2 rounded overflow-auto max-h-32 text-gray-800'>
            {error.message}
          </pre>
        </div>
        <div className='flex space-x-3'>
          <button
            onClick={resetError}
            className='bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            Try again
          </button>
          <button
            onClick={() => window?.location.reload()}
            className='bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500'
          >
            Reload page
          </button>
        </div>
      </div>
    </div>
  );
}

interface AppErrorBoundaryProps {
  children: ReactNode;
}

interface AppErrorBoundaryState {
  hasError: boolean;
  error: Error | undefined;
}

export class AppErrorBoundary extends Component<
  AppErrorBoundaryProps,
  AppErrorBoundaryState
> {
  constructor(props: AppErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: undefined };
  }

  static getDerivedStateFromError(error: Error): AppErrorBoundaryState {
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
<<<<<<< HEAD
    // Log error for monitoring (in production, this would go to a monitoring service)
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }
=======
    // eslint-disable-next-line no-console
    console.error('Error caught by boundary:', error, errorInfo);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e7b
    // Here you could send error to monitoring service
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  override render() {
    if (this.state.hasError && this.state.error) {
      return (
        <ErrorFallback error={this.state.error} resetError={this.resetError} />
      );
    }

    return this.props.children;
  }
}
