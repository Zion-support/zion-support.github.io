import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  level?: 'page' | 'component' | 'section';
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ error, errorInfo });
    
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
          <div className="text-center text-white max-w-md">
            <h1 className="text-2xl font-bold mb-4">
              {this.props.level === 'page' ? 'Something went wrong' : 'An error occurred'}
            </h1>
            <p className="text-slate-300 mb-6">
              {this.props.level === 'page' 
                ? 'We apologize for the inconvenience. Please try refreshing the page.'
                : 'This component encountered an error and could not be displayed.'
              }
            </p>
            <div className="space-y-2">
              <button 
                onClick={() => window.location.reload()} 
                className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors mr-2"
              >
                Refresh Page
              </button>
              <button 
                onClick={() => this.setState({ hasError: false, error: undefined, errorInfo: undefined })} 
                className="px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
              >
                Try Again
              </button>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-4 text-left">
                <summary className="cursor-pointer text-sm text-slate-400 hover:text-slate-300">
                  Error Details
                </summary>
                <pre className="mt-2 text-xs text-red-400 bg-slate-900 p-2 rounded overflow-auto">
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

export default ErrorBoundary;