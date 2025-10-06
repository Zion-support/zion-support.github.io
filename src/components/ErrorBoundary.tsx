<<<<<<< HEAD
import React, { Component, type ErrorInfo, type ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';
=======
<<<<<<< HEAD
import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
=======
<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
=======
<<<<<<< HEAD
import { Component, type ErrorInfo, type ReactNode } from 'react';
=======
<<<<<<< HEAD
import { Component, type ErrorInfo, type ReactNode } from 'react';
=======
<<<<<<< HEAD
import { Component, type ErrorInfo, type ReactNode } from 'react';
=======
<<<<<<< HEAD
import { Component, type ErrorInfo, type ReactNode } from 'react';
=======
<<<<<<< HEAD
import { Component, type ErrorInfo, type ReactNode } from 'react';
=======
<<<<<<< HEAD
import { Component, type ErrorInfo, type ReactNode } from 'react';
=======
import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
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
      errorId: `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
    console.error('ErrorBoundary caught an error:', error, errorInfo);
=======
    console.error('Error caught by boundary:', error, errorInfo);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
    
    // Call the onError callback if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Report to error tracking service
    if (typeof window !== 'undefined' && 'console' in window) {
      console.error('Error details:', {
        error: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        errorId: this.state.errorId
      });
    }
=======
    // Error caught by boundary
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e98c
  }

<<<<<<< HEAD
  handleRetry = () => {
    this.setState({ hasError: false });
  };

  handleGoHome = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  };

  override render() {
=======
<<<<<<< HEAD
  override render() {
=======
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

  render() {
>>>>>>> main
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <AlertTriangle className="h-12 w-12 text-red-500" />
            </div>
            
            <h1 className="text-xl font-semibold text-gray-900 mb-2">
              Something went wrong
            </h1>
            
            <p className="text-gray-600 mb-6">
              We're sorry, but something unexpected happened. Please try again.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-left">
                <p className="text-sm text-red-800 font-mono">
                  {this.state.error.message}
                </p>
                {this.state.errorId && (
                  <p className="text-xs text-red-600 mt-1">
                    Error ID: {this.state.errorId}
                  </p>
                )}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
              >
                <Home className="h-4 w-4 mr-2" />
                Go Home
              </button>
            </div>
<<<<<<< HEAD
=======
            <button
              onClick={() => window.location.reload()}
              className="mt-4 text-gray-400 hover:text-white text-sm underline"
            >
              Or refresh the page
            </button>
=======
    return { hasError: true, error };
  }

<<<<<<< HEAD
  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
=======
<<<<<<< HEAD
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
>>>>>>> main
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
<<<<<<< HEAD
            <div className="w-16 h-16 text-red-500 mx-auto mb-4 text-6xl">⚠️</div>
=======
<<<<<<< HEAD
            <div className="text-6xl mb-4">⚠️</div>
=======
<<<<<<< HEAD
            <div className="w-16 h-16 text-red-500 mx-auto mb-4 text-6xl">⚠️</div>
=======
<<<<<<< HEAD
            <div className="w-16 h-16 text-red-500 mx-auto mb-4 text-6xl">⚠️</div>
=======
<<<<<<< HEAD
            <div className="w-16 h-16 text-red-500 mx-auto mb-4 text-6xl">⚠️</div>
=======
<<<<<<< HEAD
            <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">!</span>
            </div>
=======
            <div className="w-16 h-16 text-red-500 mx-auto mb-4 text-6xl">⚠️</div>
>>>>>>> main
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;