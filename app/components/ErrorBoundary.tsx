import React, { Component, ErrorInfo, ReactNode } from 'react';
<<<<<<< HEAD
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
=======
import { Link } from 'react-router-dom';
import { ExclamationTriangleIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
>>>>>>> cursor/analyze-improve-and-deploy-application-b99c

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
>>>>>>> cursor/analyze-improve-and-deploy-application-b99c
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

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
<<<<<<< HEAD
<<<<<<< HEAD
    console.error('ErrorBoundary caught an error:', error, errorInfo);
<<<<<<< HEAD
    
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
=======
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-b99c
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-3b5b
    this.setState({
      error,
      errorInfo
    });
<<<<<<< HEAD

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {
      // Here you would typically send the error to a service like Sentry
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
=======
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
>>>>>>> cursor/analyze-improve-and-deploy-application-b99c
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
          <div className="max-w-md w-full bg-slate-800 rounded-lg shadow-xl p-8 text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-500/20 rounded-full mb-6">
<<<<<<< HEAD
              <AlertTriangle className="w-8 h-8 text-red-400" />
=======
              <ExclamationTriangleIcon className="w-8 h-8 text-red-400" />
>>>>>>> cursor/analyze-improve-and-deploy-application-b99c
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-300 mb-6">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              We're sorry, but something unexpected happened. Please try refreshing the page.
=======
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.
>>>>>>> cursor/analyze-improve-and-deploy-application-c97f
=======
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix it.
>>>>>>> cursor/analyze-improve-and-deploy-application-b99c
=======
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.
>>>>>>> cursor/analyze-improve-and-deploy-application-3b5b
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="text-sm text-gray-400 cursor-pointer hover:text-white">
<<<<<<< HEAD
                  Error Details (Development Only)
                </summary>
                <div className="mt-2 p-4 bg-slate-900 rounded text-xs text-red-400 font-mono overflow-auto">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong>Stack Trace:</strong>
                      <pre className="mt-1 whitespace-pre-wrap">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                <RefreshCw className="w-4 h-4" />
=======
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
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ArrowPathIcon className="w-5 h-5" />
>>>>>>> cursor/analyze-improve-and-deploy-application-b99c
                Try Again
              </button>
              
              <Link
                to="/"
<<<<<<< HEAD
                className="flex items-center justify-center gap-2 border-2 border-purple-400 text-purple-300 px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                <Home className="w-4 h-4" />
                Go Home
              </Link>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-700">
              <p className="text-sm text-gray-400">
                If this problem persists, please{' '}
                <Link to="/contact" className="text-purple-400 hover:text-purple-300">
                  contact our support team
                </Link>
              </p>
            </div>
=======
                className="block w-full border-2 border-purple-400 text-purple-300 px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Go Home
              </Link>
            </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-b99c
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default Component;