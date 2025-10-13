<<<<<<< HEAD
  fallback?: ReactNode;
'use client;

import React, { Component, ErrorInfo, ReactNode } from 'react;
'use client';
import React, { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Phone } from 'lucide-react';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: any;
}

import { AlertTriangle, RefreshCw, Home } from lucide-react;

interface Props {}
  children: ReactNode;

  fallback?: ReactNode;
=======
import React, { Component, ErrorInfo, ReactNode } from 'react'.

interface Props {
  children: ReactNode.
  fallback?: ReactNode.
}

interface State {
  hasError: boolean.
  error?: Error.

import { AlertTriangle, RefreshCw, Home } from lucide-react.

interface Props {}
  children: ReactNode.

  fallback?: ReactNode.
>>>>>>> origin/main

  onError?: (error: Error, errorInfo: ErrorInfo) => void.

<<<<<<< HEAD
  error?: Error;

  error: Error | null;

  errorInfo: ErrorInfo | null;

=======
}

interface State {
  hasError: boolean.
  error?: Error.
  errorInfo?: ErrorInfo.
>>>>>>> origin/main
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props).
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log the error to console and any error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo).
    
    this.setState({
      error,
      errorInfo.
    }).

    // You can also log the error to an error reporting service here
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {'
        description: error.message,
<<<<<<< HEAD
        fatal: false
      });
    }
  }
    })  };

  handleGoHome = () => {
    window.location.href = /;

            {process.env['NODE_ENV'] === 'development && this.state.error && (
=======
        fatal: false.
      }).
    }
  }
  };

  render() {}
    if (this.state.hasError) {}
      // Custom fallback UI.
      if (this.props.fallback) {}
        return this.props.fallback.

      }

      // Default error UI.
      return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4>"
          <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center>"
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6>"
              <AlertTriangle className="w-8 h-8 text-red-400 />
            <h1 className="text-2xl font-bold text-white mb-4>
<<<<<<< HEAD
              Oops! Something went wrong
            <p className="text-gray-300 mb-6>
              Were sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.
            {process.env['NODE_ENV'] === 'development && this.state.error && (
=======
              Oops! Something went wrong.
            </h1>
            
            <p className="text-gray-300 mb-6>
              Were sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.
            </p>

            {process.env['NODE_ENV'] === 'development && this.state.error && ('
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
>>>>>>> origin/main

              <details className="mb-6 text-left>"
                <summary className="text-red-400 cursor-pointer mb-2>
<<<<<<< HEAD
                  {this.state.error.stack && (

                    <div className="mb-2>

                  {this.state.errorInfo && (

    console.error('Error caught by boundary:', error, errorInfo);
        <div className="min-h-screen flex items-center justify-center bg-slate-900">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-4">We're sorry, but something unexpected happened.</p>
              {process.env['NODE_ENV'] === 'development' && this.state.error && (
                <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-left">
                  <h3 className="text-sm font-semibold text-red-400 mb-2">Error Details:</h3>
=======
                  Error Details (Development)
<<<<<<< HEAD
                <div className="bg-red-900/20 p-4 rounded-lg text-sm text-red-300 font-mono overflow-auto>
=======
                </summary>
                <div className="bg-red-900/20 p-4 rounded-lg text-sm text-red-300 font-mono overflow-auto>"
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
                  <div className="mb-2>
                    <strong>Error:</strong> {this.state.error.message}
                  {this.state.error.stack && (

                    <div className="mb-2>
                      <strong>Stack:
                      <pre className="whitespace-pre-wrap mt-1>
                        {this.state.error.stack}
                  )}

                  {this.state.errorInfo && (
                      <strong>Component Stack:
                      <pre className="whitespace-pre-wrap mt-1>
                        {this.state.errorInfo.componentStack}
                  )}
              )}

            <div className="flex flex-col sm:flex-row gap-4>
              <button.
                onClick={this.handleRetry}

                className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300.
              >
                <RefreshCw className="w-4 h-4 />
<<<<<<< HEAD
                Try Again
              <button
=======
                Try Again.
              </button>
              
              <button.
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
                onClick={this.handleGoHome}

                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 border border-white/20.
              >
                <Home className="w-4 h-4 />
<<<<<<< HEAD
                Go Home
=======
                Go Home.
              </button>
            </div>

>>>>>>> cursor/fix-errors-and-merge-to-main-9706
            <div className="mt-6 text-sm text-gray-400>
              <p>If this problem persists, please contact our support team:
              <p className="mt-2>
                <a 
                  href="mailto:support@ziontechgroup.com "
                  className="text-cyan-400 hover:text-cyan-300.
                >
<<<<<<< HEAD
                  support@ziontechgroup.com
  error?: Error;
=======
                  support@ziontechgroup.com.
                </a>
              </p>
            </div>
  error?: Error.
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props).
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo).
  }

  render() {
    if (this.state.hasError) {
      const Component = () => {
  
        return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">"
          <div className="max-w-md w-full">"
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">"
              <div className="mb-6">"
                <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />"
                <h1 className="text-2xl font-bold text-white mb-2">
<<<<<<< HEAD
                  Oops! Something went wrong
                <p className="text-gray-300 mb-6">
                  We're sorry, but something unexpected happened. Please try again or contact support if the problem persists.
              {process.env['NODE_ENV'] === 'development' && this.state.error && (
                <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-left">
                  <h3 className="text-sm font-semibold text-red-400 mb-2">Error Details:
=======
                  Oops! Something went wrong.
                </h1>
                <p className="text-gray-300 mb-6">"
                  We're sorry, but something unexpected happened. Please try again or contact support if the problem persists.'
                </p>
              </div>

              {process.env['NODE_ENV'] === 'development' && this.state.error && ('
                <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-left">"
                  <h3 className="text-sm font-semibold text-red-400 mb-2">Error Details:</h3>"
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
>>>>>>> origin/main
                  <pre className="text-xs text-red-300 whitespace-pre-wrap overflow-auto max-h-32">
                    {this.state.error.toString()}
                  {this.state.errorInfo && (
                    <pre className="text-xs text-red-300 whitespace-pre-wrap overflow-auto max-h-32 mt-2">
                      {this.state.errorInfo.componentStack}
                  )}
              )}
<<<<<<< HEAD
=======

              <div className="space-y-3">
                <button.
                  onClick={this.handleRetry}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
<<<<<<< HEAD
                  Try Again
                <button
=======
                  Try Again.
                </button>
                <button.
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
                  onClick={this.handleGoHome}
                  className="w-full border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center"
                >
                  <Home className="w-5 h-5 mr-2" />
<<<<<<< HEAD
                  Go Home
              <div className="mt-6 pt-6 border-t border-white/20">
=======
                  Go Home.
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">"
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
                <p className="text-sm text-gray-400">
                  If this problem continues, please contact our support team.
                <a
                  href="/contact"
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                >
<<<<<<< HEAD
                  Contact Support
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-xl p-6 text-center">
            <div className="text-red-400 text-6xl mb-4">⚠️
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
=======
                  Contact Support.
                </a>
              </div>
            </div>
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">"
          <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-xl p-6 text-center">"
            <div className="text-red-400 text-6xl mb-4">⚠️</div>"
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>"
            <p className="text-gray-300 mb-6">"
              We're sorry, but something unexpected happened. Please try refreshing the page.'
            </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
            <div className="space-y-3">
              <button.
                onClick={() => window.location.reload()}
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
<<<<<<< HEAD
                Refresh Page
=======
                Refresh Page.
              </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
              <button
                onClick={() => window.location.href = '/'}
                className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
<<<<<<< HEAD
                Go Home
            {process.env['NODE_ENV'] === 'development' && this.state.error && (
              <details className="mt-4 text-left">
                <summary className="text-gray-400 cursor-pointer">Error Details
=======
                Go Home.
              </button>
            </div>
            {process.env['NODE_ENV'] === 'development' && this.state.error && ('
              <details className="mt-4 text-left">"
                <summary className="text-gray-400 cursor-pointer">Error Details</summary>"
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
                <pre className="text-xs text-red-400 mt-2 overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
            )}
<<<<<<< HEAD
      );
=======
          </div>
        </div>
      ).
>>>>>>> cursor/fix-errors-and-merge-to-main-9706

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI.
      return this.props.fallback || <DefaultErrorFallback error={this.state.error} />.
    }

    return this.props.children.
  }
}

>>>>>>> origin/main
function DefaultErrorFallback({ error }: { error?: Error }) {
  const Component = () => {
  
    return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-gray-900 to-red-900 flex items-center justify-center p-4">"
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-6 text-center">"
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">"
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">"
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
<<<<<<< HEAD
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Something went wrong
        <p className="text-gray-600 mb-4">
          We're sorry, but something unexpected happened. Please try refreshing the page.
        {process.env['NODE_ENV'] === 'development' && error && (
          <details className="text-left bg-gray-100 p-3 rounded text-sm">
            <summary className="cursor-pointer font-medium mb-2">Error Details
=======
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Something went wrong</h2>"
        <p className="text-gray-600 mb-4">"
          We're sorry, but something unexpected happened. Please try refreshing the page.'
        </p>
        {process.env['NODE_ENV'] === 'development' && error && ('
          <details className="text-left bg-gray-100 p-3 rounded text-sm">"
            <summary className="cursor-pointer font-medium mb-2">Error Details</summary>"
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
            <pre className="whitespace-pre-wrap text-xs text-gray-700">
              {error.message}
              {error.stack && `\n\nStack trace:\n${error.stack}`}
        )}
        <button.
          onClick={() => window.location.reload()}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
        >
<<<<<<< HEAD
          Refresh Page
  );
=======
          Refresh Page.
        </button>
      </div>
    </div>
  ).
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
}

<<<<<<< HEAD
export default ErrorBoundary;
  hasError: boolean
  error?: Error
=======
export default ErrorBoundary.
export default ErrorBoundary.
import React, { Component, ErrorInfo, ReactNode } from 'react'
import React, { AlertTriangle, RefreshCw } from 'lucide-react'.
'use client'.
import React, { Component, ErrorInfo, ReactNode } from 'react'.
import React, { AlertTriangle, RefreshCw, Home, ArrowLeft } from 'lucide-react'.
import React, { Link } from 'react-router-dom'.
interface Props {
  children: ReactNode.
  fallback?: ReactNode.
}

interface State {
  hasError: boolean.
  error?: Error.
>>>>>>> origin/main
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false.
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined })
  }

  public render() {
<<<<<<< HEAD
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
=======
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback.
      }

      const Component = () => {
  
        return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">"
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">"
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />"
>>>>>>> origin/main
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
<<<<<<< HEAD
              Something went wrong
            <p className="text-gray-600 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            <button
=======
              Something went wrong.
            </h2>
            <p className="text-gray-600 mb-6">"
              We're sorry, but something unexpected happened. Please try refreshing the page.'
            </p>
            <button.
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
              onClick={this.handleRetry}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
<<<<<<< HEAD
              Try Again
            {process.env['NODE_ENV'] === 'development' && this.state.error && (
              <details className="mt-4 text-left">
=======
              Try Again.
            </button>
            {process.env['NODE_ENV'] === 'development' && this.state.error && ('
              <details className="mt-4 text-left">"
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
                <summary className="cursor-pointer text-sm text-gray-500">
                  Error Details (Development)
                <pre className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded overflow-auto">
                  {this.state.error.stack}
            )}
<<<<<<< HEAD
export default ErrorBoundary
=======
<<<<<<< HEAD
      );
=======
          </div>
        </div>
      ).
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
    }

    return this.props.children.
  }
}

<<<<<<< HEAD
export default ErrorBoundary;
</div></div></div></div></p></p></p></p></p></p>
=======
export default ErrorBoundary.
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
>>>>>>> origin/main
