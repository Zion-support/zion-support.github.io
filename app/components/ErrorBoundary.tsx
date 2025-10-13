<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
=======
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
=======
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4fed

interface ErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
=======
import React from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8
}

<<<<<<< HEAD
<<<<<<< HEAD
export default function ErrorBoundary({ className = '', children }: ErrorBoundaryProps) {
  return (
    <div className={`${className}`}>
=======
export default function ErrorBoundary({ className = '', children, ...props }: ErrorBoundaryProps) {
  return (
    <div className={`error-boundary-component ${className}`} {...props}>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
      {children}
    </div>
  );
}
=======
export default function ErrorBoundary({ className = '', children, ...props }: ErrorBoundaryProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
import { useState, useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
interface Props {
  children: ReactNode;
=======


import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {,
    children: ReactNode;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
  fallback?: ReactNode;
}

interface State {,
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
<<<<<<< HEAD
    return { hasError: true, error };
=======
    return {,
    hasError: true,
      error
    };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to monitoring service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // In production, you would send this to your error monitoring service
    if (process.env.NODE_ENV === 'production') {
      // Example: sendErrorToService(error, errorInfo);
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
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-slate-800/50 backdrop-blur-sm border border-red-500/20 rounded-lg p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/20 flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>
<<<<<<< HEAD

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="text-red-400 cursor-pointer mb-2">
                  Error Details (Development)
                </summary>
                <div className="bg-slate-900/50 p-4 rounded text-xs text-gray-300 overflow-auto max-h-40">
                  <div className="font-mono">
                    <div className="text-red-400 font-bold">Error:</div>
                    <div className="mb-2">{this.state.error.toString()}</div>
                    <div className="text-red-400 font-bold">Stack Trace:</div>
                    <div>{this.state.error.stack}</div>
                  </div>
                </div>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button>
  onClick={this.handleRetry}>
  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </button>
<<<<<<< HEAD
              
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
=======
              <button>
  onClick={this.handleGoHome}>
  className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </button>
            </div>
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-8">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Refresh Page
            </button>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2fa5
          </div>
        </div>
      );
    }

    return this.props.children;
  }
<<<<<<< HEAD
}

export default ErrorBoundary;
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2fa5
