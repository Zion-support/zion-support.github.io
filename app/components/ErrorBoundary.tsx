<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
=======
<<<<<<< HEAD
'use client;

import React, { Component, ErrorInfo, ReactNode } from 'react;
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8

import { AlertTriangle, RefreshCw, Home } from lucide-react;

interface Props {}
  children: ReactNode;
<<<<<<< HEAD

  fallback?: ReactNode;

  onError?: (error: Error, errorInfo: ErrorInfo) => void;

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
>>>>>>> origin/cursor/ad-creation-and-management-f267
}

interface State {
  hasError: boolean;
<<<<<<< HEAD
  error?: Error;
  errorInfo?: ErrorInfo;
=======
<<<<<<< HEAD

  error: Error | null;

  errorInfo: ErrorInfo | null;

>>>>>>> origin/cursor/ad-creation-and-management-f267
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log the error to console and any error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo
    });

    // You can also log the error to an error reporting service here
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false
<<<<<<< HEAD
      });
    }
  }
=======
      })    }

    // console.error removed for production
};

  handleRetry = () => {}
    this.setState({}
      hasError: false,
      error: null,
      errorInfo: null
<<<<<<< HEAD
    })  };

  handleGoHome = () => {
    window.location.href = /;

=======
    })
  };
  
  handleGoHome = () => {}
    window.location.href = '/';
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
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

<<<<<<< HEAD
            {process.env['NODE_ENV'] === 'development && this.state.error && (

              <details className="mb-6 text-left>
                <summary className="text-red-400 cursor-pointer mb-2>
=======
            {process.env['NODE_ENV'] === 'development' && this.state.error && (}
              <details className="mb-6 text-left">
                <summary className="text-red-400 cursor-pointer mb-2">
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                  Error Details (Development)
                </summary>
                <div className="bg-red-900/20 p-4 rounded-lg text-sm text-red-300 font-mono overflow-auto>
                  <div className="mb-2>
                    <strong>Error:</strong> {this.state.error.message}

                  </div>
<<<<<<< HEAD
                  {this.state.error.stack && (

                    <div className="mb-2>
=======
                  {this.state.error.stack && (}
                    <div className="mb-2">
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                      <strong>Stack:</strong>
                      <pre className="whitespace-pre-wrap mt-1>
                        {this.state.error.stack}

                      </pre>
                    </div>
                  )}
<<<<<<< HEAD

                  {this.state.errorInfo && (

=======
                  {this.state.errorInfo && (}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
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
=======
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
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition-colors"
            >
              Try again
            </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
          </div>
        </div>
      );
>>>>>>> origin/cursor/ad-creation-and-management-f267

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback || <DefaultErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

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