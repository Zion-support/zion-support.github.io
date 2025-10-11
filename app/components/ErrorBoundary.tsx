'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Phone } from 'lucide-react';

interface Props {
  children: ReactNode;
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
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-red-900 via-gray-900 to-red-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-gray-800 rounded-lg shadow-2xl p-8 text-center">
            <div className="mb-6">
              <AlertTriangle className="h-16 w-16 text-red-400 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-white mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-300 mb-6">
                We're sorry, but something unexpected happened. Our team has been notified.
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={this.handleRetry}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
              >
                <RefreshCw className="h-5 w-5 mr-2" />
                Try Again
              </button>

              <button
                onClick={this.handleReload}
                className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
              >
                <RefreshCw className="h-5 w-5 mr-2" />
                Reload Page
              </button>

              <div className="flex space-x-4">
                <a
                  href="/"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  <Home className="h-5 w-5 mr-2" />
                  Go Home
                </a>

                <a
                  href="/contact"
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Contact Support
                </a>
              </div>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-gray-400 hover:text-white mb-2">
                  Error Details (Development)
                </summary>
                <div className="bg-gray-900 p-4 rounded-lg overflow-auto">
                  <pre className="text-red-400 text-sm">
                    {this.state.error.toString()}
                    {this.state.errorInfo?.componentStack}
                  </pre>
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