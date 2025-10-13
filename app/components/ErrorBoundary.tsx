import React, { Component, ErrorInfo, ReactNode } from 'react';
<<<<<<< HEAD
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
import { ExclamationTriangleIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
>>>>>>> cursor/website-audit-and-update-with-deployment-2b79
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-7aca
=======
import { Link } from 'react-router-dom';
import { ExclamationTriangleIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
>>>>>>> cursor/analyze-improve-and-deploy-application-705a

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
error: Error | null;
  errorInfo: ErrorInfo | null;
=======
error?: Error;
  errorInfo?: ErrorInfo;
>>>>>>> cursor/website-audit-and-update-with-deployment-2b79
=======
  error: Error | null;
  errorInfo: ErrorInfo | null;
>>>>>>> cursor/analyze-improve-and-deploy-application-7aca
=======
  error?: Error;
  errorInfo?: ErrorInfo;
>>>>>>> cursor/analyze-improve-and-deploy-application-705a
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: undefined,
      errorInfo: undefined
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: undefined
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    console.error('ErrorBoundary caught an error:', error, errorInfo);
<<<<<<< HEAD
    
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-7aca
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-705a
    this.setState({
      error,
      errorInfo
    });
<<<<<<< HEAD
<<<<<<< HEAD
// Log error to console in development
=======
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-705a

    // Log error to console in development
>>>>>>> cursor/analyze-improve-and-deploy-application-7aca
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
<<<<<<< HEAD
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
<<<<<<< HEAD
=======
this.setState({
      error,
      errorInfo
    });
}

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
>>>>>>> cursor/website-audit-and-update-with-deployment-2b79
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-7aca
=======
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
>>>>>>> cursor/analyze-improve-and-deploy-application-705a
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
<<<<<<< HEAD
<<<<<<< HEAD
<AlertTriangle className="w-8 h-8 text-red-400" />
=======
<ExclamationTriangleIcon className="w-8 h-8 text-red-400" />
>>>>>>> cursor/website-audit-and-update-with-deployment-2b79
=======
              <AlertTriangle className="w-8 h-8 text-red-400" />
>>>>>>> cursor/analyze-improve-and-deploy-application-7aca
=======
              <ExclamationTriangleIcon className="w-8 h-8 text-red-400" />
>>>>>>> cursor/analyze-improve-and-deploy-application-705a
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-300 mb-6">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              We're sorry, but something unexpected happened. Please try refreshing the page.
=======
              We're sorry, but something unexpected happened. Please try refreshing the page.
>>>>>>> cursor/fix-errors-and-merge-to-main-fd3e
=======
We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.
We're sorry, but something unexpected happened. Our team has been notified and is working to fix it.
>>>>>>> cursor/website-audit-and-update-with-deployment-2b79
=======
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.
>>>>>>> cursor/analyze-improve-and-deploy-application-7aca
=======
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix it.
>>>>>>> cursor/analyze-improve-and-deploy-application-705a
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="text-sm text-gray-400 cursor-pointer hover:text-white">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
Error Details (Development Only)
=======
                  Error Details (Development Only)
>>>>>>> cursor/analyze-improve-and-deploy-application-7aca
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
<<<<<<< HEAD
=======
Error Details (Development)
=======
                  Error Details (Development)
>>>>>>> cursor/analyze-improve-and-deploy-application-705a
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
<<<<<<< HEAD
>>>>>>> cursor/website-audit-and-update-with-deployment-2b79
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-7aca
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-705a
                Try Again
              </button>
              
              <Link
                to="/"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
className="flex items-center justify-center gap-2 border-2 border-purple-400 text-purple-300 px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
=======
                className="flex items-center justify-center gap-2 border-2 border-purple-400 text-purple-300 px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
>>>>>>> cursor/analyze-improve-and-deploy-application-7aca
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
<<<<<<< HEAD
=======
className="block w-full border-2 border-purple-400 text-purple-300 px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
=======
                className="block w-full border-2 border-purple-400 text-purple-300 px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
>>>>>>> cursor/analyze-improve-and-deploy-application-705a
              >
                Go Home
              </Link>
            </div>
<<<<<<< HEAD
>>>>>>> cursor/website-audit-and-update-with-deployment-2b79
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-7aca
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-705a
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
