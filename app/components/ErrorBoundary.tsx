<<<<<<< HEAD
'use client';

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
import React, { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Phone } from 'lucide-react';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: any;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
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

    // In production, you would send this to your error reporting service
    // Example: Sentry.captureException(error, { extra: errorInfo });
  }

  handleRefresh = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
<<<<<<< HEAD
        <div className="min-h-screen bg-gradient-to-br from-red-900 via-gray-900 to-red-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-10 h-10 text-red-400" />
=======
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
            </div>
            
            <h1 className="text-3xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>
<<<<<<< HEAD

=======
            
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="bg-red-900/50 rounded-lg p-4 mb-6 text-left">
                <h3 className="text-red-400 font-semibold mb-2">Error Details:</h3>
                <pre className="text-sm text-red-200 whitespace-pre-wrap">
                  {this.state.error.toString()}
                </pre>
                {this.state.errorInfo && (
                  <pre className="text-sm text-red-200 whitespace-pre-wrap mt-2">
                    {this.state.errorInfo.componentStack}
                  </pre>
                )}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleRefresh}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Try Again
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-gray-400 text-sm mb-4">
                If this problem persists, please contact our support team:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="text-blue-400 hover:text-blue-300 flex items-center justify-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  support@ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;