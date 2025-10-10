<<<<<<< HEAD
'use client';
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174

<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';

interface Props {}
  children: ReactNode;
  fallback?: ReactNode;
<<<<<<< HEAD
=======
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
}

<<<<<<< HEAD
interface State {
<<<<<<< HEAD
  hasError: boolean;,
    error: Error | null;
  errorInfo: ErrorInfo | null;
}

class EnhancedErrorBoundary extends Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false;
      error: null;
      errorInfo: null;
    };
  }

  static getDerivedStateFromError(error: Error): State {,
    return {,
      hasError: true;
=======
interface State {}
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class EnhancedErrorBoundary extends Component<Props, State> {}
  constructor(props: Props) {}
    super(props);
    this.state = {}
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error): State {}
    return {}
      hasError: true,
>>>>>>> origin/merge-error-fixes
      error,
      errorInfo: null;
    };
=======
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
  }

<<<<<<< HEAD
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
<<<<<<< HEAD
<<<<<<< HEAD
    this.setState({
=======
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {}
    this.setState({)}
>>>>>>> origin/merge-error-fixes
=======
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  maxRetries?: number;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  retryCount: number;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  private maxRetries: number;

  constructor(props: Props) {
    super(props);
    this.state = { 
      hasError: false,
      retryCount: 0
    };
    this.maxRetries = props.maxRetries || 3;
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      retryCount: 0
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
      error,
      errorInfo
    });

<<<<<<< HEAD
<<<<<<< HEAD
    // Log error to console in development)
    if (process.env.NODE_ENV === 'development') {
=======
    this.setState({)
      error)
      errorInfo;
    // Log error to console in development;
    if (process.env.NODE_ENV === 'development') {,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Log error to external service in production;
    if (process.env.NODE_ENV === 'production') {
      // Here you would typically send the error to a service like Sentry;
=======
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {}
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {}
      // Here you would typically send the error to a service like Sentry
>>>>>>> origin/merge-error-fixes
      console.error('Error caught by boundary:', error);
    }
  }

<<<<<<< HEAD
  handleRetry = () => {
<<<<<<< HEAD
    this.setState({
=======
  handleRetry = () => {}
    this.setState({)}
>>>>>>> origin/merge-error-fixes
      hasError: false,
      error: null,)
    errorInfo: null
=======
    this.setState({)
      hasError: false),
      error: null),
      errorInfo: null;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
    });
  };

  handleReload = () => {}
    window.location.reload();
  };

  handleGoHome = () => {}
    window.location.href = '/';
  };

  render() {}
    if (this.state.hasError) {}
      if (this.props.fallback) {}
=======
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by EnhancedErrorBoundary:', error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log error to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      // Here you would typically send the error to a monitoring service
      // like Sentry, LogRocket, Bugsnag, etc.
    }
  }

  handleRetry = () => {
    if (this.state.retryCount < this.maxRetries) {
      this.setState(prevState => ({
        hasError: false,
        error: undefined,
        errorInfo: undefined,
        retryCount: prevState.retryCount + 1
      }));
    }
  };

  handleReset = () => {
    this.setState({
      hasError: false,
      error: undefined,
      errorInfo: undefined,
      retryCount: 0
    });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
        return this.props.fallback;
      }
<<<<<<< HEAD
</Props>
      return (</Props>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4"></div>
          <div className="max-w-md w-full bg-slate-800/50 backdrop-blur-sm border border-red-400/20 rounded-xl p-8 text-center"></div>
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6"></div>
              <AlertTriangle className="w-8 h-8 text-red-400" />
            <h1 className="text-2xl font-bold text-white mb-4">Oops! Something went wrong</h1><p className="text-gray-300 mb-6">We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.</p>
            </p>

<<<<<<< HEAD
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="text-red-400 cursor-pointer font-medium mb-2">Error Details (Development)</summary>
=======

      return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-slate-800/50 backdrop-blur-sm border border-red-400/20 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong;
            </h1>
            
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.
            </p>

<<<<<<< HEAD
            {process.env.NODE_ENV === 'development' && this.state.error && ()
              <details className="mb-6 text-left">)
                <summary className="text-red-400 cursor-pointer font-medium mb-2">)
=======
            {process.env.NODE_ENV === 'development' && this.state.error && (}
              <details className="mb-6 text-left">
                <summary className="text-red-400 cursor-pointer font-medium mb-2">
>>>>>>> origin/merge-error-fixes
                  Error Details (Development)
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                </summary>
                <div className="bg-slate-900/50 rounded-lg p-4 text-sm"></div>
                  <pre className="text-red-300 whitespace-pre-wrap">{this.state.error.toString()}</pre>
                  </pre>
<<<<<<< HEAD
                  {this.state.errorInfo && (
                    <pre className="text-gray-400 whitespace-pre-wrap mt-2">{this.state.errorInfo.componentStack}</pre>
=======
                  {this.state.errorInfo && (}
                    <pre className="text-gray-400 whitespace-pre-wrap mt-2">
                      {this.state.errorInfo.componentStack}
>>>>>>> origin/merge-error-fixes
                    </pre>
                  )}
                </div>
              </details>
            )}

<<<<<<< HEAD
            <div className="space-y-3">
              <button;
=======
            <div className="space-y-3"></div>
              <button
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                onClick={this.handleRetry}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover: from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
<<<<<<< HEAD
                <RefreshCw className="w-4 h-4 mr-2" >Try Again</RefreshCw>
              </RefreshCw>
              
              <button
=======
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again;
              </button>,
              ,
              <button;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                onClick={this.handleReload}
                className="w-full bg-slate-700 hover: bg-slate-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
<<<<<<< HEAD
                <RefreshCw className="w-4 h-4 mr-2" >Reload Page</RefreshCw>
              </RefreshCw>
              
              <button
=======
                <RefreshCw className="w-4 h-4 mr-2" />
                Reload Page;
              </button>,
              ,
              <button;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                onClick={this.handleGoHome}
                className="w-full bg-slate-600 hover: bg-slate-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
<<<<<<< HEAD
                <Home className="w-4 h-4 mr-2" >Go Home</Home>
              </Home>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-700"></div>
              <p className="text-sm text-gray-400 mb-2">If this problem persists, please contact our support team:</p>
              </p>
<<<<<<< HEAD
=======
                <Home className="w-4 h-4 mr-2" />
                Go Home;
              </button>
            </div>
,
            <div className="mt-6 pt-4 border-t border-gray-700">,
              <p className="text-sm text-gray-400 mb-2">,
                If this problem persists, please contact our support team: </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
              <div className="flex flex-col sm:flex-row gap-2 text-sm">
                <a;
                  href="mailto:support@ziontechgroup.com"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
<<<<<<< HEAD
                >support@ziontechgroup.com<span className="hidden sm:inline text-gray-500">•<a
=======
              <div className="flex flex-col sm:flex-row gap-2 text-sm"></div>
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >support@ziontechgroup.com<span className="hidden sm:inline text-gray-500">•</span><a
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  href="tel:+13024640950"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >+1 (302) 464-0950</a>
=======
                >
                  support@ziontechgroup.com;
                </a>
                <span className="hidden sm:inline text-gray-500">•</span>
                <a;
                  href="tel:+13024640950"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  +1 (302) 464-0950;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                </a>
              </div>
            </div>
          </div>,
        </div>,
=======
    this.setState({ error, errorInfo });
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log error to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      // Send to error tracking service
      // eslint-disable-next-line no-console
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
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
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-lg p-8 text-center border border-white/20">
            <div className="mb-6">
              <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-white mb-2">Oops! Something went wrong</h1>
              <p className="text-gray-300 mb-6">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix it.
              </p>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-6 p-4 bg-red-900/20 rounded-lg text-left">
                <h3 className="text-red-400 font-semibold mb-2">Error Details:</h3>
                <p className="text-red-300 text-sm mb-2">{this.state.error.message}</p>
                {this.state.errorInfo && (
                  <details className="text-red-300 text-xs">
                    <summary className="cursor-pointer">Stack Trace</summary>
                    <pre className="mt-2 whitespace-pre-wrap">{this.state.errorInfo.componentStack}</pre>
                  </details>
                )}
              </div>
=======
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-lg p-8 text-center border border-white/20">
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix it.
            </p>
            
            {this.state.retryCount < this.maxRetries && (
              <button
                onClick={this.handleRetry}
                className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors mr-4"
              >
                Try Again ({this.maxRetries - this.state.retryCount} attempts left)
              </button>
            )}
            
            <button
              onClick={this.handleReset}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              Reset
            </button>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="text-gray-400 cursor-pointer">Error Details</summary>
                <pre className="mt-2 text-xs text-red-400 bg-black/20 p-2 rounded overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
            )}

            <div className="space-y-3">
              <button
                onClick={this.handleRetry}
                className="w-full bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </button>
              
              <button
                onClick={this.handleReload}
                className="w-full bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Reload Page
              </button>
              
              <a
                href="/"
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4" />
                Go Home
              </a>
              
              <a
                href="mailto:support@ziontechgroup.com?subject=Error Report"
                className="w-full border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Report Issue
              </a>
            </div>

            <div className="mt-6 text-sm text-gray-400">
              <p>If this problem persists, please contact our support team:</p>
              <p className="mt-1">
                <a href="mailto:support@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                  support@ziontechgroup.com
                </a>
              </p>
              <p className="mt-1">
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">
                  (302) 464-0950
                </a>
              </p>
            </div>
          </div>
        </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;