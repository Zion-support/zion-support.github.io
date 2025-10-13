<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  fallback?: ReactNode;
'use client;

import React, { Component, ErrorInfo, ReactNode } from 'react;
'use client';
<<<<<<< HEAD
<<<<<<< HEAD
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

  onError?: (error: Error, errorInfo: ErrorInfo) => void;
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Phone } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232

  error?: Error;

  error: Error | null;

  errorInfo: ErrorInfo | null;

=======
import React, { Component, ErrorInfo, ReactNode } from 'react';
<<<<<<< HEAD
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from 'lucide-react';
=======

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
import { Link } from 'react-router-dom';
=======
import React, { Component, ErrorInfo, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f74
=======
'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-10c6
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { FileWarning } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-139b

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f74
=======
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableErrorReporting?: boolean;
  enableRetry?: boolean;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-139b
}

interface State {
<<<<<<< HEAD
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
=======
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
>>>>>>> cursor/fix-errors-and-merge-to-main-f512
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
<<<<<<< HEAD
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    // Update state so the next render will show the fallback UI
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-f512
    return { hasError: true, error };
=======
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    }
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null
    }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    // Log the error to console and any error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f74
    this.setState({
      error,
      errorInfo
    });

<<<<<<< HEAD
<<<<<<< HEAD
    // You can also log the error to an error reporting service here
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false
      });
=======
    // Log error to console in development
    if (process.env['NODE_ENV'] === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo)
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
=======
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log error to console in development
    if (process.env['NODE_ENV'] === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Log error to analytics in production
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: {
          stack: error.stack
        }
      });
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f74
    }
=======
    console.error('ErrorBoundary caught an error:', error, errorInfo);
>>>>>>> cursor/fix-errors-and-merge-to-main-f512
  }

<<<<<<< HEAD
<<<<<<< HEAD
  handleGoHome = () => {
    window.location.href = /;

            {process.env['NODE_ENV'] === 'development && this.state.error && (

              <details className="mb-6 text-left>
                <summary className="text-red-400 cursor-pointer mb-2>
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
                  <pre className="text-xs text-red-300 whitespace-pre-wrap overflow-auto max-h-32">
                    {this.state.error.toString()}
                  </pre>
                  {this.state.errorInfo && (
                    <pre className="text-xs text-red-300 whitespace-pre-wrap overflow-auto max-h-32 mt-2">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  )}
                </div>
              )}
function DefaultErrorFallback({ error }: { error?: Error }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-gray-900 to-red-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-6 text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Something went wrong</h2>
        <p className="text-gray-600 mb-4">
          We're sorry, but something unexpected happened. Please try refreshing the page.
        </p>
        {process.env['NODE_ENV'] === 'development' && error && (
          <details className="text-left bg-gray-100 p-3 rounded text-sm">
            <summary className="cursor-pointer font-medium mb-2">Error Details</summary>
            <pre className="whitespace-pre-wrap text-xs text-gray-700">
              {error.message}
              {error.stack && `\n\nStack trace:\n${error.stack}`}
            </pre>
          </details>
        )}
        <button
          onClick={() => window.location.reload()}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
}

export default ErrorBoundary;
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
=======
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    if (process.env['NODE_ENV'] === 'development') {
       
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

<<<<<<< HEAD
    // Report error to monitoring service in production
    if (process.env['NODE_ENV'] === 'production') {
      // Send to error tracking service
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as unknown as { gtag: (command: string, eventName: string, parameters: Record<string, unknown>) => void }).gtag('event', 'exception', {
          description: error.message,
          fatal: false
        });
      }
    }
    
    this.setState({ errorInfo });
    
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    if (this.props.enableErrorReporting && process.env['NODE_ENV'] === 'development') {
       
      console.error('Error caught by boundary:', error, errorInfo);
    }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
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
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Something went wrong
            </h2>
            <p className="text-gray-600 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
=======
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-8">We're sorry, but something unexpected happened.</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-f512
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Reload Page
            </button>
<<<<<<< HEAD
            {process.env['NODE_ENV'] === 'development' && this.state.error && (
              <details className="mt-4 text-left">
                <summary className="cursor-pointer text-sm text-gray-500">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded overflow-auto">
                  {this.state.error.stack}
                </pre>
              </details>
            )}
export default ErrorBoundary
=======
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ error, errorInfo });
=======
    // Log error to analytics in production
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.toString(),
        fatal: false,
      });
    }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-139b
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };
=======
    // Log error to external service in production
    if (process.env['NODE_ENV'] === 'production') {
      // Here you would typically send the error to a service like Sentry
      console.error('ErrorBoundary caught an error:', error, errorInfo)
    }
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    })
  }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
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
    this.setState({ error, errorInfo });
    
    // Log error to console in development
    if (process.env['NODE_ENV'] === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log error to external service in production
    if (process.env['NODE_ENV'] === 'production') {
      // Here you would typically send the error to a service like Sentry, LogRocket, etc.
      console.error('Application error:', error);
    }
  }

  render() {
    if (this.state.hasError) {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1507
      if (this.props.fallback) {
        return this.props.fallback;
      }

<<<<<<< HEAD
      // Default fallback UI
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1507
      return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
<<<<<<< HEAD
          <div className="max-w-md w-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
=======
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-139b
              <AlertTriangle className="w-8 h-8 text-red-400" />
=======
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-6">
              <FileWarning className="mx-auto h-16 w-16 text-red-500" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
=======
          <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-4">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1507
              Oops! Something went wrong
            </h1>
<<<<<<< HEAD
            
            <p className="text-gray-300 mb-6">
<<<<<<< HEAD
<<<<<<< HEAD
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix it.
=======
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-139b
            </p>

            {process.env['NODE_ENV'] === 'development' && this.state.error && (
              <details className="mb-6 text-left">
<<<<<<< HEAD
                <summary className="text-cyan-400 cursor-pointer mb-2">
                  Error Details (Development)
                </summary>
                <div className="bg-slate-900/50 p-4 rounded-lg text-sm text-gray-300 font-mono overflow-auto max-h-40">
                  <div className="text-red-400 mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  <div className="text-yellow-400">
                    <strong>Stack:</strong>
                    <pre className="whitespace-pre-wrap mt-1">
                      {this.state.error.stack}
                    </pre>
                  </div>
=======
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                  <AlertTriangle className="h-8 w-8 text-red-400" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
=======
                <summary className="text-red-400 cursor-pointer mb-2">
                  Error Details (Development)
                </summary>
                <div className="bg-red-900/20 p-4 rounded-lg text-sm">
                  <pre className="text-red-300 whitespace-pre-wrap">
                    {this.state.error.toString()}
                  </pre>
                  {this.state.errorInfo && (
                    <pre className="text-red-300 whitespace-pre-wrap mt-2">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  )}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-139b
                </div>
              </div>

<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleRetry}
<<<<<<< HEAD
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
=======
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-139b
=======
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.
            </p>

            {process.env['NODE_ENV'] === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="text-red-400 cursor-pointer mb-2">
                  Error Details (Development Only)
                </summary>
                <pre className="text-xs text-gray-400 bg-black/20 p-4 rounded overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}

            <div className="space-y-4">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1507
              >
                Reload Page
              </button>
              
<<<<<<< HEAD
<<<<<<< HEAD
              <Link
                to="/"
                className="border border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
=======
              <button
<<<<<<< HEAD
                onClick={this.handleGoHome}
                className="flex items-center justify-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors"
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-10c6
=======
              <button
                onClick={this.handleGoHome}
                className="inline-flex items-center px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group"
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-139b
=======
                onClick={() => window.location.href = '/'}
                className="w-full border border-white/30 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300"
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1507
              >
                Go Home
              </button>
              
              <button
                onClick={() => window.history.back()}
                className="w-full border border-white/30 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Go Back
              </button>
            </div>

<<<<<<< HEAD
<<<<<<< HEAD
            <div className="mt-6 pt-6 border-t border-gray-700/50">
              <p className="text-gray-400 text-sm">
                If this problem persists, please{' '}
                <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  contact our support team
                </Link>
=======
              <h1 className="text-3xl font-bold text-white mb-4">
                Oops! Something went wrong
              </h1>
              
              <p className="text-gray-300 mb-8 text-lg">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
              </p>

              {process.env['NODE_ENV'] === 'development' && this.state.error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6 text-left">
                  <h3 className="text-red-400 font-semibold mb-2">Error Details:</h3>
                  <pre className="text-red-300 text-sm overflow-auto">
                    {this.state.error.toString()}
                  </pre>
                  {this.state.errorInfo && (
                    <pre className="text-red-300 text-sm mt-2 overflow-auto">
=======
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <svg className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">
                  Something went wrong
                </h3>
              </div>
=======
            <div className="mt-8 text-sm text-gray-400">
              <p>If this problem persists, please contact our support team:</p>
              <p className="text-cyan-400">kleber@ziontechgroup.com</p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-139b
=======
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-sm text-gray-400 mb-2">
                Need help? Contact our support team:
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                kleber@ziontechgroup.com
              </a>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1507
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
            </div>
            <div className="mt-4 flex space-x-3">
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Refresh Page
              </button>
              <button
                onClick={() => this.setState({ hasError: false, error: undefined, errorInfo: undefined })}
                className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Try Again
              </button>
            </div>
            {process.env['NODE_ENV'] === 'development' && this.state.error && (
              <details className="mt-4">
                <summary className="text-sm font-medium text-gray-700 cursor-pointer">
                  Error Details (Development)
                </summary>
                <div className="mt-2 p-3 bg-gray-100 rounded-md">
                  <pre className="text-xs text-gray-600 whitespace-pre-wrap">
                    {this.state.error.stack}
                  </pre>
                  {this.state.errorInfo && (
                    <pre className="text-xs text-gray-600 whitespace-pre-wrap mt-2">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f74
                      {this.state.errorInfo.componentStack}
                    </pre>
                  )}
                </div>
<<<<<<< HEAD
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={this.handleRetry}
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <RefreshCw className="h-4 w-4" />
                  <span>Try Again</span>
                </button>

                <Link
                  to="/"
                  className="border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Home className="h-4 w-4" />
                  <span>Go Home</span>
                </Link>

                <button
                  onClick={() => window.history.back()}
                  className="border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Go Back</span>
                </button>
              </div>

              <div className="mt-8 text-sm text-gray-400">
                <p>
                  If this problem persists, please contact our support team at{' '}
                  <a 
                    href="mailto:kleber@ziontechgroup.com" 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                  >
                    kleber@ziontechgroup.com
                  </a>
                </p>
              </div>
            </div>
=======
              </details>
            )}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f74
=======
              <p className="text-gray-600 mb-6">
                We&apos;re sorry for the inconvenience. Please try refreshing the page.
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => window.location.reload()}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Refresh Page
                </button>
                <Link
                  href="/"
                  className="block w-full border-2 border-red-600 text-red-600 hover:bg-red-50 font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Go to Homepage
                </Link>
              </div>
              {this.props.enableErrorReporting && this.state.error && (
                <details className="mt-6 text-left">
                  <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                    Error Details
                  </summary>
                  <div className="mt-2 p-4 bg-gray-100 rounded text-xs">
                    <div className="mb-2">
                      <strong>Error:</strong> {this.state.error.message}
                    </div>
                  </div>
                </details>
              )}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-f512
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default ErrorBoundary;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
=======
export default ErrorBoundary;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f74
=======
export default ErrorBoundary;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
=======
export default ErrorBoundary;
>>>>>>> cursor/fix-errors-and-merge-to-main-f512
