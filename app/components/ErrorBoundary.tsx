import React, { Component, ReactNode, ErrorInfo } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }

  handleReset = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className='min-h-screen flex items-center justify-center bg-gray-50'>
          <div className='max-w-md w-full bg-white shadow-lg rounded-lg p-6'>
            <div className='text-center'>
              <h1 className='text-2xl font-bold text-red-600 mb-4'>
                Oops! Something went wrong
              </h1>
              <p className='text-gray-600 mb-4'>
                We apologize for the inconvenience. An unexpected error has occurred.
              </p>
              {this.state.error && (
                <div className='bg-red-50 border border-red-200 rounded p-4 mb-4 text-left'>
                  <p className='text-sm text-red-800 font-mono'>
                    {this.state.error.toString()}
                  </p>
                </div>
              )}
              <div className='flex gap-4 justify-center'>
                <button
                  onClick={this.handleReset}
                  className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors'
                >
                  Try Again
                </button>
                <button
                  onClick={() => window.location.reload()}
                  className='bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded transition-colors'
                >
                  Reload Page
                </button>
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