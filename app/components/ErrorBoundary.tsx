'use client';
import React, { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Phone } from 'lucide-react';
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: any;
}
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
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
    }
    // You can also log the error to an error reporting service here
    // Example: logErrorToService(error, errorInfo);
  }
  handleRefresh = () => {
    window.location.reload();
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
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">
              Oops! Something went wrong;
  </
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page or go back to the home page.
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="text-sm text-gray-400 cursor-pointer mb-2">
                  Error Details (Development)
                </summary>
                <pre className="text-xs text-red-400 bg-slate-900/50 p-3 rounded overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleRefresh}
                className="flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors">
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again;
  </
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors">
                <Home className="w-4 h-4 mr-2" />
                Go Home;
  </
            </div>
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-sm text-gray-400 mb-3">
                Still having trouble? Contact our support team:
              </p>
              <a
                href="mailto:support@ziontechgroup.com"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                support@ziontechgroup.com;
  </
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
  </a>
  </button>
  </button>
  </h1>