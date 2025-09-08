import React, { Component, ErrorInfo, ReactNode } from 'react';
<<<<<<< HEAD
=======
import { getErrorBoundaryFallback, logger } from '@/utils/errorHandler';
>>>>>>> origin/main

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
<<<<<<< HEAD
=======
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
>>>>>>> origin/main
}

interface State {
  hasError: boolean;
<<<<<<< HEAD
  error?: Error;
  errorInfo?: ErrorInfo;
=======
  error: Error | null;
>>>>>>> origin/main
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
<<<<<<< HEAD
    this.state = { hasError: false };
=======
    this.state = { hasError: false, error: null };
>>>>>>> origin/main
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

<<<<<<< HEAD
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
=======
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    logger.error('Error boundary caught an error', error, {
      componentStack: errorInfo.componentStack,
      errorBoundary: 'ErrorBoundary',
    });

    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  private handleRetry = (): void => {
    this.setState({ hasError: false, error: null });
  };

  private handleReload = (): void => {
    window.location.reload();
  };

  render(): ReactNode {
>>>>>>> origin/main
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

<<<<<<< HEAD
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <svg
                  className="h-8 w-8 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">
                  Something went wrong
                </h3>
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
                <div className="mt-2 p-3 bg-gray-100 rounded text-xs font-mono text-gray-600 overflow-auto">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong>Stack Trace:</strong>
                      <pre className="whitespace-pre-wrap">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}
            <div className="mt-6">
              <button
                onClick={() => window.location.reload()}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Refresh Page
              </button>
=======
      const errorInfo = this.state.error ? getErrorBoundaryFallback(this.state.error) : {
        title: 'Something went wrong',
        message: 'An unexpected error occurred.',
        action: 'Try Again',
      };

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
              <svg
                className="w-6 h-6 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            
            <div className="text-center">
              <h1 className="text-xl font-semibold text-gray-900 mb-2">
                {errorInfo.title}
              </h1>
              <p className="text-gray-600 mb-6">
                {errorInfo.message}
              </p>
              
              <div className="flex space-x-3 justify-center">
                <button
                  onClick={this.handleRetry}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  {errorInfo.action}
                </button>
                <button
                  onClick={this.handleReload}
                  className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
                >
                  Reload Page
                </button>
              </div>
>>>>>>> origin/main
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

<<<<<<< HEAD
export default ErrorBoundary;
=======
// Hook for functional components
export function useErrorHandler() {
  const handleError = React.useCallback((error: Error, context?: Record<string, unknown>) => {
    logger.error('Error in functional component', error, context);
  }, []);

  return { handleError };
}

// Higher-order component for error handling
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<Props, 'children'>
) {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  );

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  
  return WrappedComponent;
}
>>>>>>> origin/main
