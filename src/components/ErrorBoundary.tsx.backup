import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';
=======
import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
>>>>>>> main
}

interface State {
  hasError: boolean;
  error?: Error;
  errorId?: string;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { 
      hasError: true, 
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
>>>>>>> main
>>>>>>> main
    console.error('ErrorBoundary caught an error:', error, errorInfo);
=======
    console.error('Error caught by boundary:', error, errorInfo);
>>>>>>> main
    
    // Report error to analytics/monitoring service
    this.reportError(error, errorInfo);
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  handleRetry = () => {
>>>>>>> main
    this.setState({ hasError: false });
  };

  handleGoHome = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  };

    this.setState({ hasError: false } as State);
  override render() {
  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    // Report to external service (e.g., Sentry, LogRocket, etc.)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: {
          error_id: this.state.errorId,
          component_stack: errorInfo.componentStack
        }
      });
    }
  };

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorId: undefined });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

>>>>>>> main
>>>>>>> main
>>>>>>> main
  override render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
          <div className="text-center p-8 max-w-md">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Our team has been notified.
            </p>
            {this.state.errorId && (
              <p className="text-gray-400 mb-4 text-sm">
                Error ID: {this.state.errorId}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleRetry}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </button>
              <button
                onClick={this.handleGoHome}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4" />
                Go Home
              </button>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 text-gray-400 hover:text-white text-sm underline"
            >
              Or refresh the page
            </button>
=======
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  override render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => this.setState({ hasError: false, error: undefined })}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Try again
            </button>
=======
  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Error caught by boundary
  }

  override render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
          <div className="text-center p-8">
            <div className="w-16 h-16 text-red-500 mx-auto mb-4 text-6xl">⚠️</div>
            <div className="text-6xl mb-4">⚠️</div>
            <div className="w-16 h-16 text-red-500 mx-auto mb-4 text-6xl">⚠️</div>
            <div className="w-16 h-16 text-red-500 mx-auto mb-4 text-6xl">⚠️</div>
            <div className="w-16 h-16 text-red-500 mx-auto mb-4 text-6xl">⚠️</div>
            <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">!</span>
            </div>
            <div className="w-16 h-16 text-red-500 mx-auto mb-4 text-6xl">⚠️</div>
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Refresh Page
            </button>
            <p className="text-gray-400 mb-8">We're working to fix this issue.</p>
>>>>>>> main
>>>>>>> main
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
export default ErrorBoundary;
export default ErrorBoundary;
>>>>>>> main
