import React, { Component, ErrorInfo, ReactNode } from 'react';
import { ErrorBoundaryState } from '../types';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  level?: 'page' | 'component' | 'critical';
}

class ErrorBoundary extends Component<Props, ErrorBoundaryState> {
  private retryCount = 0;
  private maxRetries = 3;

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      // Here you would typically send to an error reporting service
      console.error('Production error:', { error, errorInfo });
    }
  }

  handleReset = () => {
    if (this.retryCount < this.maxRetries) {
      this.retryCount++;
      this.setState({ hasError: false, error: undefined, errorInfo: undefined });
    } else {
      // Redirect to home page after max retries
      if (typeof window !== 'undefined') {
        window.location.href = '/';
      }
    }
  };

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className={`${this.props.level === 'page' ? 'min-h-screen' : 'min-h-64'} bg-slate-950 flex items-center justify-center p-4`}>
          <div className="text-center text-white max-w-md mx-auto">
            <div className="mb-6">
              {this.props.level === 'critical' ? (
                <div className="w-16 h-16 mx-auto mb-4 bg-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
              ) : (
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              )}
            </div>
            
            <h1 className="text-2xl font-bold mb-4">
              {this.props.level === 'critical' ? 'Critical Error' : 'Something went wrong'}
            </h1>
            
            <p className="text-slate-300 mb-6">
              {this.props.level === 'critical' 
                ? 'A critical error occurred. Please refresh the page or contact support if the problem persists.'
                : 'We encountered an unexpected error. Don\'t worry, we\'re working to fix it.'
              }
            </p>

            {this.state.error && process.env.NODE_ENV === 'development' && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-sm text-slate-400 hover:text-slate-300">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 p-3 bg-slate-800 rounded text-xs overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={this.handleReset}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
              >
                {this.retryCount < this.maxRetries ? 'Try Again' : 'Go Home'}
              </button>
              
              {this.props.level === 'page' && (
                <button 
                  onClick={() => typeof window !== 'undefined' && window.location.reload()}
                  className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition-colors"
                >
                  Refresh Page
                </button>
              )}
            </div>

            {this.retryCount > 0 && (
              <p className="mt-4 text-sm text-slate-400">
                Retry attempt: {this.retryCount}/{this.maxRetries}
              </p>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;