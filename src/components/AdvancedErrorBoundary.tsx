import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

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

class AdvancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // Log error to monitoring service
    console.error('Error caught by boundary:', error, errorInfo);

    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  override render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className='min-h-screen flex items-center justify-center bg-gray-50'>
          <div className='max-w-md w-full bg-white shadow-lg rounded-lg p-6'>
            <div className='flex items-center mb-4'>
              <div className='flex-shrink-0'>
                <svg
                  className='h-8 w-8 text-red-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z'
                  />
                </svg>
              </div>
              <div className='ml-3'>
                <h3 className='text-lg font-medium text-gray-900'>
                  Something went wrong
                </h3>
              </div>
            </div>
            <div className='mt-2'>
              <p className='text-sm text-gray-500'>
                We're sorry, but something unexpected happened. Please try
                refreshing the page.
              </p>
            </div>
            {process.env['NODE_ENV'] === 'development' && this.state.error && (
              <details className='mt-4'>
                <summary className='cursor-pointer text-sm font-medium text-gray-700'>
                  Error Details (Development)
                </summary>
                <div className='mt-2 p-3 bg-gray-100 rounded text-xs text-gray-600 overflow-auto'>
                  <div className='font-semibold'>Error:</div>
                  <div className='mb-2'>{this.state.error.message}</div>
                  <div className='font-semibold'>Stack Trace:</div>
                  <pre className='whitespace-pre-wrap'>
                    {this.state.error.stack}
                  </pre>
                  {this.state.errorInfo && (
                    <>
                      <div className='font-semibold mt-2'>Component Stack:</div>
                      <pre className='whitespace-pre-wrap'>
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </>
                  )}
                </div>
              </details>
            )}
            <div className='mt-6'>
              <button
                onClick={() => window.location.reload()}
                className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default AdvancedErrorBoundary;
