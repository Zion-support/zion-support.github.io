import React, { Component, ErrorInfo, ReactNode } from 'react';
<<<<<<< HEAD
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
=======
>>>>>>> cursor/comprehensive-app-audit-and-update-8a56

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
<<<<<<< HEAD
  error: Error | null;
  errorInfo: ErrorInfo | null;
=======
  error?: Error;
  errorInfo?: ErrorInfo;
>>>>>>> cursor/comprehensive-app-audit-and-update-8a56
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
<<<<<<< HEAD
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
=======
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
>>>>>>> cursor/comprehensive-app-audit-and-update-8a56
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {
<<<<<<< HEAD
      // Here you would typically send the error to an error reporting service
      console.error('Production error:', error, errorInfo);
    }
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  };

=======
      // Here you would typically send the error to a logging service
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }

>>>>>>> cursor/comprehensive-app-audit-and-update-8a56
  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
<<<<<<< HEAD
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-slate-800 rounded-lg shadow-lg p-6 text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full">
              <AlertTriangle className="w-8 h-8 text-red-500" />
=======
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20">
            <div className="w-16 h-16 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
>>>>>>> cursor/comprehensive-app-audit-and-update-8a56
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-2">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-300 mb-6">
<<<<<<< HEAD
              We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-sm text-gray-400 hover:text-white mb-2 flex items-center gap-2">
                  <RefreshCw className="w-4 h-4" />
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs text-red-300 bg-slate-900 p-3 rounded overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}

            <div className="space-y-3">
              <button
                onClick={this.handleRetry}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </button>
              
              <Link
                to="/"
                className="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4" />
                Go Home
              </Link>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700">
              <p className="text-sm text-gray-400">
                If this problem continues, please{' '}
                <Link to="/contact" className="text-blue-400 hover:text-blue-300 underline">
                  contact our support team
                </Link>
              </p>
=======
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            
            <div className="space-y-4">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Refresh Page
              </button>
              
              <button
                onClick={() => window.location.href = '/'}
                className="w-full border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Go Home
              </button>
>>>>>>> cursor/comprehensive-app-audit-and-update-8a56
            </div>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="text-sm text-gray-400 cursor-pointer hover:text-white">
                  Error Details (Development)
                </summary>
                <div className="mt-2 p-4 bg-slate-800/50 rounded text-xs text-gray-300 overflow-auto">
                  <pre>{this.state.error.toString()}</pre>
                  {this.state.errorInfo && (
                    <pre className="mt-2">{this.state.errorInfo.componentStack}</pre>
                  )}
                </div>
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