'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
import React, { Component, ErrorInfo, ReactNode } from 'react';
}

interface State {
  hasError: boolean;
  error?: Error;
}

interface State {
  hasError: boolean;
  errorInfo?: ErrorInfo;
      })    }

    // console.error removed for production
};

  handleRetry = () => {}
    this.setState({}
      hasError: false,
      error: null,
      errorInfo: null
    })
  };
  
  handleGoHome = () => {}
    window.location.href = '/';
  };

  render() {}
    if (this.state.hasError) {}
      // Custom fallback UI
      if (this.props.fallback) {}
        return this.props.fallback;

      }

      // Default error UI
      return (

        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4>
          <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center>
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6>
              <AlertTriangle className="w-8 h-8 text-red-400 />
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-4>
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-300 mb-6>
              Were sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.
            </p>

            {process.env['NODE_ENV'] === 'development' && this.state.error && (}
              <details className="mb-6 text-left">
                <summary className="text-red-400 cursor-pointer mb-2">
                  Error Details (Development)
                </summary>
                <div className="bg-red-900/20 p-4 rounded-lg text-sm text-red-300 font-mono overflow-auto>
                  <div className="mb-2>
                    <strong>Error:</strong> {this.state.error.message}

                  </div>
                  {this.state.error.stack && (}
                    <div className="mb-2">
                      <strong>Stack:</strong>
                      <pre className="whitespace-pre-wrap mt-1>
                        {this.state.error.stack}

                      </pre>
                    </div>
                  )}
                  {this.state.errorInfo && (}
                    <div>
                      <strong>Component Stack:</strong>
                      <pre className="whitespace-pre-wrap mt-1>
                        {this.state.errorInfo.componentStack}

                      </pre>
                    </div>
                  )}

                </div>
                </details>
              )}

            <div className="flex flex-col sm:flex-row gap-4>
              <button
                onClick={this.handleRetry}

                className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300
              >
                <RefreshCw className="w-4 h-4 />
                Try Again
              </button>
              
              <button
                onClick={this.handleGoHome}

                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 border border-white/20
              >
                <Home className="w-4 h-4 />
                Go Home
              </button>
            </div>

            <div className="mt-6 text-sm text-gray-400>
              <p>If this problem persists, please contact our support team:</p>
              <p className="mt-2>
                <a 
                  href="mailto:support@ziontechgroup.com 
                  className="text-cyan-400 hover:text-cyan-300
                >
                  support@ziontechgroup.com
                </a>
              </p>
            </div>
  error?: Error;
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
      errorInfo,
    });

    // Log error to console in development
    if (process.env['NODE_ENV'] === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Send error to analytics if available
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: false,
      });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
      errorInfo: null
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  handleReload = () => {window.location.reload();}handleGoHome = () => {window.location.href = '/';}render() {if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;}return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">)</div>
          <div className="max-w-md w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-lg p-8 text-center border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition-colors"
            >
              Try again
            </button>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
          <div className="max-w-md w-full">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
              <div className="mb-6">
                <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-white mb-2">
                  Oops! Something went wrong
                </h1>
                <p className="text-gray-300 mb-6">
                  We're sorry, but something unexpected happened. Please try again or contact support if the problem persists.
                </p>
              </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </button>
            </div>

              <div className="space-y-3">
                <button
                  onClick={this.handleRetry}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Try Again
                </button>
                <button
                  onClick={this.handleGoHome}
                  className="w-full border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Go Home
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-sm text-gray-400">
                  If this problem continues, please contact our support team.
                </p>
                <a
                  href="/contact"
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                >
                  Contact Support
                </a>
              </div>
            </div>
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-xl p-6 text-center">
            <div className="text-red-400 text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Refresh Page
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Go Home
              </button>
            </div>
            {process.env['NODE_ENV'] === 'development' && this.state.error && (
              <details className="mt-4 text-left">
                <summary className="text-gray-400 cursor-pointer">Error Details</summary>
                <pre className="text-xs text-red-400 mt-2 overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback || <DefaultErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

            <p className="text-gray-300 mb-6">We're sorry, but something unexpected happened. Please try refreshing the page or go back to the home page.</p>
              <div className="mb-6 p-4 bg-red-900/20 rounded-lg text-left">
                <h3 className="text-red-400 font-semibold mb-2">Error Details:</h3>
                <pre className="text-xs text-red-300 whitespace-pre-wrap">
                  {this.state.error.toString()}
                </pre>
                {this.state.errorInfo && (
                  <pre className="text-xs text-red-300 whitespace-pre-wrap mt-2">
                    {this.state.errorInfo.componentStack}
                  </pre>
                )}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleRefresh}
                className="flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
                <pre className="text-xs text-red-400 bg-slate-900/50 p-3 rounded overflow-auto">{this.state.error.toString()</p>}{this.state.errorInfo?.componentStack}
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
              <button;
                onClick={this.handleReload}className="flex items-center justify-center space-x-2 bg-cyan-600 hover: bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200",
              <button;
                onClick={this.handleGoHome}className="flex items-center justify-center space-x-2 border border-cyan-600 text-cyan-400 hover: bg-cyan-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200",
                className="flex items-center justify-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-sm text-gray-400 mb-3">
                Still having trouble? Contact our support team:
              </p>
              <a
                href="mailto:support@ziontechgroup.com"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                support@ziontechgroup.com
              <p className="text-sm text-gray-400 mb-3">
                Still having trouble? Contact our support team: </p>,
              <a;
                href="mailto: kleber@ziontechgroup.com",
                className="inline-flex items-center text-cyan-400 hover: text-cyan-300 transition-colors">,
                <Phone className="w-4 h-4 mr-2" />
                kleber@ziontechgroup.com;

export default ErrorBoundary;
export default ErrorBoundary;
import React, { Component, ErrorInfo, ReactNode } from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'
'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from 'lucide-react';
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

    // Log error to monitoring service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // You can also log the error to an error reporting service here
    // Example: logErrorToService(error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists.
            </p>

            {process.env['NODE_ENV'] === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="text-sm text-gray-400 cursor-pointer hover:text-gray-300 mb-2">
                  Error Details (Development)
                </summary>
                <div className="bg-slate-900/50 rounded-lg p-4 text-xs text-red-300 font-mono overflow-auto max-h-32">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  <div>
                    <strong>Stack:</strong>
                    <pre className="whitespace-pre-wrap mt-1">
                      {this.state.error.stack}
                    </pre>
                  </div>
                </div>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </button>
              
              <Link
                to="/"
                className="flex items-center justify-center px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-700/50">
              <p className="text-sm text-gray-400 mb-2">
                Still having trouble?
              </p>
              <Link
                to="/contact"
                className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
