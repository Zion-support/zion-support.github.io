import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableErrorReporting?: boolean;
  maxRetries?: number;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string;
  retryCount: number;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  private maxRetries: number;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      retryCount: 0
    };
    this.maxRetries = props.maxRetries || 3;
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Enhanced error reporting
    if (this.props.enableErrorReporting) {
      this.reportError(error, errorInfo);
    }
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    // Error reporting logic would go here
    console.error('Error reported:', error, errorInfo);
  };

  private handleRetry = () => {
    if (this.state.retryCount < this.maxRetries) {
      this.setState(prevState => ({
        hasError: false,
        error: undefined,
        errorInfo: undefined,
        errorId: undefined,
        retryCount: prevState.retryCount + 1
      }));
    }
  };

  private handleReset = () => {
    this.setState({
      hasError: false,
      error: undefined,
      errorInfo: undefined,
      errorId: undefined,
      retryCount: 0
    });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }
      const { retryCount, error, errorId } = this.state;
      const canRetry = retryCount < this.maxRetries;

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Something went wrong</h2>
            <p className="text-gray-600 mb-4">
              We're sorry, but something unexpected happened. Please try again.
            </p>
            {errorId && (
              <p className="text-sm text-gray-500 mb-4">Error ID: {errorId}</p>
            )}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {canRetry && (
                <button
                  onClick={this.handleRetry}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Try Again ({this.maxRetries - retryCount} attempts left)
                </button>
              )}
              <button
                onClick={this.handleReset}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
              >
                Reset
              </button>
            </div>
            {process.env.NODE_ENV === 'development' && error && (
              <details className="mt-4 text-left">
                <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded overflow-auto">
                  {error.toString()}
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

export default EnhancedErrorBoundary;