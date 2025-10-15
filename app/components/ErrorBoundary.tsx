'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
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
    this.setState({
      error,
      errorInfo
    });
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
          }
    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {
      // Here you would typically send the error to a service like Sentry
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
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
          <div className="max-w-md mx-auto text-center px-4">
            <div className="mb-8">
              <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-white mb-2">Something went wrong</h1>
              <p className="text-gray-300 mb-6">
                We&apos;re sorry, but something unexpected happened. Please try again or contact support if the problem persists.
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={this.handleRetry}
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <RefreshCw className="w-5 h-5" />
                <span>Try Again</span>
              </button>

              <Link
                to="/"
                className="w-full bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Home className="w-5 h-5" />
                <span>Go Home</span>
              </Link>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-sm text-gray-400 hover:text-white">
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
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;