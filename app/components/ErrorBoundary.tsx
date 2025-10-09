import React, { Component, ErrorInfo, ReactNode } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import Link from 'next/link';
import { FileWarning } from 'lucide-react';
=======
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
>>>>>>> cursor/analyze-improve-and-deploy-application-7970
=======
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-398f

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
<<<<<<< HEAD
=======
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
>>>>>>> cursor/fix-errors-and-merge-to-main-398f
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
<<<<<<< HEAD
    this.setState({
      error,
      errorInfo
    });

=======
    this.setState({ error, errorInfo });
    
>>>>>>> cursor/fix-errors-and-merge-to-main-398f
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
<<<<<<< HEAD

    // Send error to analytics/monitoring service
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: {
          error_stack: error.stack || '',
          error_info: errorInfo.componentStack || ''
        }
      });
=======
    
    // Call custom error handler if provided
    this.props.onError?.(error, errorInfo);
    
    // Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      // Here you would typically send the error to your error reporting service
      // Example: Sentry.captureException(error, { extra: errorInfo });
>>>>>>> cursor/fix-errors-and-merge-to-main-398f
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
<<<<<<< HEAD
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-gray-800 rounded-xl shadow-2xl p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
=======
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
>>>>>>> cursor/fix-errors-and-merge-to-main-398f
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-300 mb-6">
<<<<<<< HEAD
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-6 p-4 bg-gray-900 rounded-lg text-left">
                <h3 className="text-sm font-semibold text-red-400 mb-2">Error Details:</h3>
                <pre className="text-xs text-gray-300 whitespace-pre-wrap overflow-auto max-h-32">
                  {this.state.error.message}
                </pre>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors"
=======
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.
            </p>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="text-sm text-gray-400 cursor-pointer mb-2">
                  Error Details (Development Only)
                </summary>
                <div className="bg-black/50 rounded-lg p-4 text-xs text-red-300 font-mono overflow-auto">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  <div>
                    <strong>Stack:</strong>
                    <pre className="mt-1 whitespace-pre-wrap">
                      {this.state.error.stack}
                    </pre>
                  </div>
                  {this.state.errorInfo && (
                    <div className="mt-2">
                      <strong>Component Stack:</strong>
                      <pre className="mt-1 whitespace-pre-wrap">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors duration-200"
>>>>>>> cursor/fix-errors-and-merge-to-main-398f
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </button>
<<<<<<< HEAD
<<<<<<< HEAD
              <Link
                href="/"
                className="block w-full border-2 border-red-600 text-red-600 hover:bg-red-50 font-semibold py-3 px-6 rounded-lg transition-colors"
=======
              
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors"
>>>>>>> cursor/analyze-improve-and-deploy-application-7970
=======
              
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200"
>>>>>>> cursor/fix-errors-and-merge-to-main-398f
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </button>
            </div>
<<<<<<< HEAD

            <div className="mt-6 text-sm text-gray-400">
              If this problem persists, please contact our support team.
=======
            
            <div className="mt-6 text-sm text-gray-400">
              <p>If this problem persists, please contact our support team.</p>
              <p className="mt-2">
                <a 
                  href="mailto:support@ziontechgroup.com" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  support@ziontechgroup.com
                </a>
              </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-398f
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;