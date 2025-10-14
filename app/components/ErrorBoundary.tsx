import React, { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowPathIcon, HomeIcon } from '@heroicons/react/24/outline';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: any;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null
    };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    this.setState({
      error,
      errorInfo
    });
    
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
        <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="bg-slate-800 rounded-xl p-8 shadow-xl">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowPathIcon className="w-8 h-8 text-white" />
              </div>
              
              <h1 className="text-2xl font-bold text-white mb-4">
                Something went wrong
              </h1>
              
              <p className="text-gray-300 mb-6">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
              
              <div className="space-y-4">
                <button
                  onClick={() => window.location.reload()}
                  className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                >
                  <ArrowPathIcon className="w-5 h-5" />
                  Refresh Page
                </button>
                
                <Link
                  to="/"
                  className="w-full bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-colors flex items-center justify-center gap-2"
                >
                  <HomeIcon className="w-5 h-5" />
                  Go Home
                </Link>
              </div>
              
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-6 text-left">
                  <summary className="text-sm text-gray-400 cursor-pointer hover:text-white">
                    Error Details (Development)
                  </summary>
                  <pre className="mt-2 text-xs text-red-400 bg-slate-900 p-3 rounded overflow-auto">
                    {this.state.error.toString()}
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </details>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;