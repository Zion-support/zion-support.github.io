<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
    
    // Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      // Add your error logging service here
      // e.g., Sentry, LogRocket, etc.
    }
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zion-blue-dark to-zion-purple-dark p-6">
          <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center">
            <div className="mb-6">
              <svg
                className="mx-auto h-16 w-16 text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Oops! Something went wrong
            </h2>
            <p className="text-zion-slate-light mb-6">
              We're sorry for the inconvenience. Please try refreshing the page or contact support if the problem persists.
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="text-left mb-6 text-sm">
                <summary className="cursor-pointer text-red-300 font-semibold mb-2">
                  Error Details (Development Only)
                </summary>
                <pre className="bg-black/20 p-4 rounded overflow-auto text-xs text-red-200">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
            <div className="flex gap-4 justify-center">
              <button
                onClick={this.handleReset}
                className="bg-zion-cyan hover:bg-zion-blue-light text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Try Again
              </button>
              <a
                href="/"
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Go Home
              </a>
            </div>
          </div>
=======
import React from 'react';

interface ErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`errorboundary-component ${className}`}>
      {children || (
        <div className="p-4 text-center text-gray-600">
          <h3 className="text-lg font-semibold mb-2">ErrorBoundary</h3>
          <p>Component placeholder - implementation needed</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-8d57
        </div>
      )}
    </div>
  );
};

export default ErrorBoundary;
