<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
interface Props { children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void }
interface State { hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
  errorId: string }
import React, { Component, ErrorInfo, ReactNode } from 'react';'
import { Helmet } from 'react-helmet-async';
interface Props { children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void; }
}
interface State { hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string; }
=======
<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
=======
import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
>>>>>>> origin/main
}

interface State {
  hasError: boolean;
<<<<<<< HEAD
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
=======
  error?: Error;
>>>>>>> origin/main
>>>>>>> origin/main
}

class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
<<<<<<< HEAD
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
<<<<<<< HEAD
      errorId: "" }
      errorInfo: null,'
      errorId: "" }
=======
      errorId: ''
>>>>>>> origin/main
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    });

    // Log error to console in development
<<<<<<< HEAD
    if (process.env.NODE_ENV === 'development') { console.error('Error caught by boundary:', error, errorInfo) }
    // Call custom error handler
    this.props.onError?.(error, errorInfo)
    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') { this.logErrorToService(error, errorInfo) }
      errorInfo}
    });
    // Log error to console in development'
    if (process.env.NODE_ENV === 'development') { '
      console.error('Error caught by boundary:', error, errorInfo); }
    }
    // Call custom error handler
    this.props.onError?.(error, errorInfo);
    // Log error to external service in production'
    if (process.env.NODE_ENV === 'production') { this.logErrorToService(error, errorInfo); }
=======
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo);
>>>>>>> origin/main
    }
  }

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    // In a real application, you would send this to your error tracking service
    // For example: Sentry, LogRocket, Bugsnag, etc.
    try {
      const errorData = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        errorId: this.state.errorId,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href
      };
<<<<<<< HEAD
      // Example: Send to error tracking service
      // errorTrackingService.captureException(error, { extra: errorData });
      '
      console.error('Error logged to service:', errorData);
    } catch (loggingError) { '
      console.error('Failed to log error to service:', loggingError); }
    }
      // errorTrackingService.captureException(error, { extra: errorData })
      console.error('Error logged to service:', errorData)} catch (loggingError) { console.error('Failed to log error to service:', loggingError) }
  }
=======

      // Example: Send to your error tracking service
      // errorTrackingService.captureException(errorData);
      console.log('Error logged to service:', errorData);
    } catch (loggingError) {
      console.error('Failed to log error to service:', loggingError);
    }
  };

>>>>>>> origin/main
  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
<<<<<<< HEAD
      errorInfo: null,'
      errorId: "" }
    });
  }
  private handleReload = () => { window.location.reload(); }
  private handleGoHome = () => { window.location.href = '/'; }
    })}
  private handleReload = () => { window.location.reload() }
  private handleGoHome = () => { window.location.href = '/' }
    window.location.reload();}
  };
  private handleGoHome = () => { '
    window.location.href = '/'; }
=======
    });
  };

  private handleReload = () => {
    window.location.reload();
  };

  private copyErrorDetails = () => {
    const errorDetails = {
      error: this.state.error?.message,
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack,
      errorId: this.state.errorId,
      timestamp: new Date().toISOString()
    };

    navigator.clipboard.writeText(JSON.stringify(errorDetails, null, 2))
      .then(() => {
        alert('Error details copied to clipboard');
      })
      .catch(() => {
        alert('Failed to copy error details');
      });
>>>>>>> origin/main
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
<<<<<<< HEAD
        <>
          <Helmet>
            <title>Error - Zion Tech Group</title>
            <meta name="robots" content="noindex, nofollow" />
          </Helmet>
          <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
            <div className="max-w-md w-full bg-slate-800 rounded-lg shadow-xl p-8 text-center">
              { /* Error Icon */ }
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-500/20 rounded-full mb-6">
                <svg 
                  className="w-8 h-8 text-red-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={ 2 }
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" 
                  />
                </svg>
              </div>
              { /* Error Title */ }
              <h1 className="text-2xl font-bold text-white mb-4">
                Oops! Something went wrong
              </h1>
              { /* Error Message */ }
              <p className="text-gray-300 mb-6 leading-relaxed">'
                We're sorry, but something unexpected happened. Our team has been notified 
                and is working to fix this issue.
              </p>
              { /* Error ID for support */ }
              { this.state.errorId && (
                <div className="bg-slate-700 rounded-lg p-3 mb-6">
                  <p className="text-sm text-gray-400 mb-1">Error ID:</p>
                  <code className="text-xs text-cyan-400 font-mono break-all"> }
                    { this.state.errorId }
                  </code>
                </div>
              )}
              { /* Action Buttons */ }
              <div className="space-y-3">
                <button
                  onClick={ this.handleRetry }
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-800"
                >
                  Try Again
                </button>
                <div className="flex space-x-3">
                  <button
                    onClick={ this.handleGoHome }
                    className="flex-1 border border-slate-600 text-gray-300 px-4 py-2 rounded-lg font-semibold hover:bg-slate-700 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-800"
                  >
                    Go Home
                  </button>
                  <button
                    onClick={ this.handleReload }
                    className="flex-1 border border-slate-600 text-gray-300 px-4 py-2 rounded-lg font-semibold hover:bg-slate-700 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-800"
                  >
                    Reload Page
                  </button>
                </div>
              </div>
              { /* Support Information */ }
              <div className="mt-8 pt-6 border-t border-slate-700">
                <p className="text-sm text-gray-400 mb-2">
                  Still having trouble? Contact our support team:
                </p>
                <div className="text-sm text-cyan-400">
                  <p>Email: kleber@ziontechgroup.com</p>
                  <p>Phone: +1-302-464-0950</p>
                </div>
              </div>
              {/* Development Error Details */}'
              { process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-6 text-left">
                  <summary className="text-sm text-gray-400 cursor-pointer hover:text-white">
                    Error Details (Development)
                  </summary>
                  <div className="mt-2 p-3 bg-slate-900 rounded text-xs text-red-400 font-mono overflow-auto max-h-40">
                    <div className="mb-2"> }
                      <strong>Error:</strong> { this.state.error.message }
                    </div>
                    <div className="mb-2">
                      <strong>Stack:</strong>
                      <pre className="whitespace-pre-wrap mt-1">
                        { this.state.error.stack }
                      </pre>
                    </div>
                    { this.state.errorInfo && (
                      <div>
                        <strong>Component Stack:</strong>
                        <pre className="whitespace-pre-wrap mt-1"> }
                          { this.state.errorInfo.componentStack }
                        </pre>
                      </div>
                    )}
                  </div>
                </details>
              )}
=======
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
            <div className="mb-6">
              <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-white mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-300 mb-6">
                We're sorry, but something unexpected happened. Our team has been notified.
              </p>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-6 p-4 bg-red-900/20 rounded-lg text-left">
                <h3 className="text-lg font-semibold text-red-400 mb-2">Error Details:</h3>
                <pre className="text-sm text-gray-300 whitespace-pre-wrap">
                  {this.state.error.message}
                </pre>
                {this.state.error.stack && (
                  <details className="mt-2">
                    <summary className="text-sm text-gray-400 cursor-pointer">Stack Trace</summary>
                    <pre className="text-xs text-gray-400 mt-2 whitespace-pre-wrap">
                      {this.state.error.stack}
                    </pre>
                  </details>
                )}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button
                onClick={this.handleRetry}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </button>
              
              <button
                onClick={this.handleReload}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Reload Page
              </button>
              
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </div>

            {process.env.NODE_ENV === 'development' && (
              <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Error ID: {this.state.errorId}</span>
                  <button
                    onClick={this.copyErrorDetails}
                    className="text-xs text-cyan-400 hover:text-cyan-300"
                  >
                    Copy Details
                  </button>
                </div>
                <div className="text-xs text-gray-500">
                  This error has been logged for debugging purposes.
                </div>
              </div>
            )}

            <div className="mt-6 text-sm text-gray-400">
              If this problem persists, please contact our support team.
>>>>>>> origin/main
            </div>
          </div>
=======
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
          </details>
>>>>>>> origin/main
        </div>
      );
    }

    return this.props.children;
  }
}

<<<<<<< HEAD
export default EnhancedErrorBoundary;
=======
export default EnhancedErrorBoundary;
>>>>>>> origin/main
