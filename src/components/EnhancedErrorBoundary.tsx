<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
=======
'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-6f5b
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
>>>>>>> 83e4988d0b484747cc68fa307caba20f45af70a7

interface ErrorBoundaryState {
  hasError: boolean;
<<<<<<< HEAD
  error?: Error;
}

class EnhancedErrorBoundary extends React.Component<
  React.PropsWithChildren<{}>,
  ErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false };
=======
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorCount: number;
}

/**
 * Enhanced Error Boundary with automatic recovery and user-friendly UI
 */
class EnhancedErrorBoundary extends Component<Props, State> {
  private resetTimeout: NodeJS.Timeout | null = null;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorCount: 0,
    };
>>>>>>> 83e4988d0b484747cc68fa307caba20f45af70a7
  }

<<<<<<< HEAD
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by enhanced boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold text-red-400 mb-2">Something went wrong</h2>
          <p className="text-gray-300">Please refresh the page or try again later.</p>
=======
  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Update state with error info
    this.setState((prevState) => ({
      errorInfo,
      errorCount: prevState.errorCount + 1,
    }));

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Auto-reset after multiple errors (circuit breaker pattern)
    if (this.state.errorCount >= 3) {
      this.scheduleReset();
    }

    // Send error to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo);
    }
  }

  componentWillUnmount() {
    if (this.resetTimeout) {
      clearTimeout(this.resetTimeout);
    }
  }

  private scheduleReset() {
    // Reset after 5 seconds to prevent infinite error loops
    this.resetTimeout = setTimeout(() => {
      this.handleReset();
    }, 5000);
  }

  private logErrorToService(error: Error, errorInfo: ErrorInfo) {
    // Placeholder for error tracking service (e.g., Sentry, LogRocket)
    const errorData = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    };

    // Send to your error tracking service
    console.error('Error logged:', errorData);
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorCount: 0,
    });
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-6">
          <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-red-500/20 p-4 rounded-full">
                <AlertTriangle className="w-12 h-12 text-red-400" />
              </div>
            </div>

            <h1 className="text-3xl font-bold text-white text-center mb-4">
              Oops! Something went wrong
            </h1>

            <p className="text-gray-300 text-center mb-8">
              We're sorry for the inconvenience. Our team has been notified and we're working on fixing this issue.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4 mb-6 overflow-auto max-h-60">
                <p className="text-red-300 font-mono text-sm mb-2">
                  <strong>Error:</strong> {this.state.error.message}
                </p>
                {this.state.error.stack && (
                  <pre className="text-red-400 text-xs overflow-auto">
                    {this.state.error.stack}
                  </pre>
                )}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleReset}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <RefreshCw className="w-5 h-5" />
                Try Again
              </button>

              <button
                onClick={this.handleReload}
                className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <RefreshCw className="w-5 h-5" />
                Reload Page
              </button>

              <Link
                to="/"
                className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <Home className="w-5 h-5" />
                Go Home
              </Link>
            </div>

            {this.state.errorCount >= 3 && (
              <div className="mt-6 text-center">
                <p className="text-yellow-400 text-sm">
                  Multiple errors detected. Page will auto-reset in 5 seconds...
                </p>
              </div>
            )}
          </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-6f5b
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;
