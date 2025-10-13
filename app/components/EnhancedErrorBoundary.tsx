<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import React, { Component, ReactNode } from 'react';
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export default class EnhancedErrorBoundary extends Component<Props, State> {
=======
=======
import { RefreshCw, Home, AlertTriangle } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1061

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
<<<<<<< HEAD
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
=======

interface Props {
  children: ReactNode;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1061
=======
import React, { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
=======
'use client';
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
import React, { Component, ErrorInfo, ReactNode } from 'react';

import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
=======
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableErrorReporting?: boolean;
  enableRetry?: boolean;
  showErrorDetails?: boolean;
  className?: string;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
}

interface State {
  hasError: boolean;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
}

class EnhancedErrorBoundary extends Component<Props, State> {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d10
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
<<<<<<< HEAD
      errorInfo: null
    };
=======
      errorInfo: null,
      errorId: ''
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d10
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    if (process.env['NODE_ENV'] === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Log error to external service in production
    if (process.env['NODE_ENV'] === 'production') {
      this.logErrorToService(error, errorInfo);
    }

<<<<<<< HEAD
    this.setState({
      error,
      errorInfo
    });

<<<<<<< HEAD
    // Log error to console in development
    if (process.env['NODE_ENV'] === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({ error, errorInfo });
  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };
=======
    // Call custom error handler if provided
    this.props.onError?.(error, errorInfo);
  }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d10

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    const errorData = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: this.getUserId(),
      sessionId: this.getSessionId()
    };

    // Send to error reporting service
    fetch('/api/errors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(errorData),
    }).catch(console.error);
  };

  private getUserId = (): string | null => {
    // Get user ID from localStorage, cookies, or context
    try {
      return localStorage.getItem('userId');
    } catch {
      return null;
    }
  };

  private getSessionId = (): string => {
    // Get or create session ID
    try {
      let sessionId = sessionStorage.getItem('sessionId');
      if (!sessionId) {
        sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        sessionStorage.setItem('sessionId', sessionId);
      }
      return sessionId;
    } catch {
      return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
  };

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
    });
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleReportBug = () => {
    const errorData = {
      errorId: this.state.errorId,
      error: this.state.error?.message,
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack,
      url: window.location.href,
      timestamp: new Date().toISOString()
    };

    // Open email client with error details
    const subject = encodeURIComponent(`Bug Report - Error ID: ${this.state.errorId}`);
    const body = encodeURIComponent(`
Error Details:
${JSON.stringify(errorData, null, 2)}

Please describe what you were doing when this error occurred:
[Your description here]
    `);
    
    window.open(`mailto:support@ziontechgroup.com?subject=${subject}&body=${body}`);
  };

  render() {
    if (this.state.hasError) {
<<<<<<< HEAD
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
            <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-6" />
=======
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center">
            <div className="text-6xl mb-4">⚠️</div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d10
            <h1 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-300 mb-6">
<<<<<<< HEAD
              We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists.
=======
  error?: Error;
=======
  error?: Error;
  errorInfo?: ErrorInfo;
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1061
}

class EnhancedErrorBoundary extends Component<Props, State> {
=======
  error?: Error;
}

class EnhancedErrorBoundary extends Component<Props, State> {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

=======
  error?: Error;
=======
  errorId?: string;
  retryCount: number;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
}

class EnhancedErrorBoundary extends Component<Props, State> {
  private maxRetries = 3;

  constructor(props: Props) {
    super(props);
<<<<<<< HEAD
    this.state = { hasError: false };
  }

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
=======
    this.state = { 
      hasError: false, 
      retryCount: 0 
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { 
      hasError: true, 
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  }

<<<<<<< HEAD
<<<<<<< HEAD
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
<<<<<<< HEAD
<<<<<<< HEAD
    console.error('Error caught by boundary:', error, errorInfo);
=======
    console.error('EnhancedErrorBoundary caught an error:', error, errorInfo);
    this.setState({ error, errorInfo });
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1061
=======
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Enhanced Error Boundary caught an error:', error, errorInfo);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
=======
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
=======
    this.setState({ errorInfo });
    
    // Call custom error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Enhanced error reporting
    if (this.props.enableErrorReporting) {
      this.reportError(error, errorInfo);
    }

    // Log to console in development
    if (process.env['NODE_ENV'] === 'development') {
      console.group('🚨 Error Boundary Caught Error');
      console.error('Error:', error);
      console.error('Error Info:', errorInfo);
      console.error('Component Stack:', errorInfo.componentStack);
      console.groupEnd();
    }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    const errorReport = {
      errorId: this.state.errorId,
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      retryCount: this.state.retryCount,
      userId: this.getUserId(),
      sessionId: this.getSessionId(),
    };

    // Send to error reporting service
    this.sendErrorReport(errorReport);

    // Send to analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: {
          error_id: this.state.errorId,
          retry_count: this.state.retryCount,
        }
      });
    }
  };

  private sendErrorReport = async (errorReport: any) => {
    try {
      // In a real app, you would send this to your error reporting service
      // For now, we'll just log it
<<<<<<< HEAD
      console.log('Error Report:', errorReport);
      
=======
       
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1256
      // Example: Send to error reporting service
      // await fetch('/api/errors', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(errorReport)
      // });
    } catch (reportingError) {
      console.warn('Failed to send error report:', reportingError);
    }
  };

  private getUserId = (): string | null => {
    // Get user ID from localStorage, cookies, or context
    return localStorage.getItem('userId') || null;
  };

  private getSessionId = (): string => {
    let sessionId = sessionStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
  };

  private handleRetry = () => {
    if (this.state.retryCount < this.maxRetries) {
      this.setState(prevState => ({
        hasError: false,
        error: undefined,
        errorInfo: undefined,
        retryCount: prevState.retryCount + 1
      }));
    } else {
      // Max retries reached, reload the page
      window.location.reload();
    }
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private copyErrorDetails = () => {
    const errorDetails = {
      errorId: this.state.errorId,
      message: this.state.error?.message,
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack,
      timestamp: new Date().toISOString(),
      url: window.location.href,
    };

    navigator.clipboard.writeText(JSON.stringify(errorDetails, null, 2))
      .then(() => {
        // Show success message
        const button = document.getElementById('copy-error-details');
        if (button) {
          const originalText = button.textContent;
          button.textContent = 'Copied!';
          setTimeout(() => {
            button.textContent = originalText;
          }, 2000);
        }
      })
      .catch(() => {
<<<<<<< HEAD
        console.warn('Failed to copy error details');
      });
=======
         
        });
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1256
  };

  render() {
    if (this.state.hasError) {
<<<<<<< HEAD
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<<<<<<< HEAD
          <div className="max-w-md mx-auto text-center p-8">
=======
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const { retryCount, error, errorInfo, errorId } = this.state;
      const canRetry = retryCount < this.maxRetries;

      return (
<<<<<<< HEAD
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1061
            <h1 className="text-2xl font-bold text-white mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-300 mb-6">
<<<<<<< HEAD
=======
          <div className="text-center p-8 max-w-md mx-auto">
            <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-white mb-4">Oops! Something went wrong</h1>
            <p className="text-gray-300 mb-8">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
              We're sorry, but something unexpected happened. Please try refreshing the page.
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
=======
              We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists.
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1061
=======
  return (
    <>
      <Helmet>
        <title>EnhancedErrorBoundary | Zion Tech Group</title>
        <meta name="description" content="Professional EnhancedErrorBoundary services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="EnhancedErrorBoundary, AI solutions, IT services, Zion Tech Group, enhancederrorboundary" />
      </Helmet>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our EnhancedErrorBoundary?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our enhancederrorboundary solutions deliver unmatched performance, security, and scalability.
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1507
            </p>
<<<<<<< HEAD
            
            {process.env['NODE_ENV'] === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="text-sm text-gray-400 cursor-pointer mb-2">
                  Error Details (Development)
                </summary>
                <div className="bg-black/20 p-3 rounded text-xs text-red-300 font-mono">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong>Stack:</strong>
                      <pre className="mt-1 whitespace-pre-wrap">
=======
              We're sorry, but something unexpected happened. Our team has been notified.
            </p>
            
            {process.env['NODE_ENV'] === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-cyan-400 hover:text-cyan-300 mb-2">
                  Error Details (Development)
                </summary>
                <div className="bg-black/50 p-4 rounded text-xs text-red-400 overflow-auto max-h-40">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  <div className="mb-2">
                    <strong>Stack:</strong>
                    <pre className="whitespace-pre-wrap mt-1">
                      {this.state.error.stack}
                    </pre>
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong>Component Stack:</strong>
                      <pre className="whitespace-pre-wrap mt-1">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d10
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
<<<<<<< HEAD
              <Link
                to="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </div>
    if (this.retryCount < this.maxRetries) {
      this.retryCount++
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: '',
      })
=======
              </details>
            )}

            <div className="space-y-3">
              <button
                onClick={this.handleRetry}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded transition-colors"
              >
<<<<<<< HEAD
                Try Again
=======
                Refresh Page
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
              </button>
              
              <button
<<<<<<< HEAD
                onClick={this.handleReload}
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded transition-colors"
              >
                Reload Page
              </button>
              
              <button
                onClick={this.handleReportBug}
                className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded transition-colors"
              >
                Report Bug
              </button>
            </div>
<<<<<<< HEAD

            <div className="mt-6 text-sm text-gray-400">
              Error ID: {this.state.errorId}
            </div>
          </div>
        </div>
<<<<<<< HEAD
      );
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d10
    }
  }
      return (
=======
      return this.props.fallback || (
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
        <div className="min-h-screen flex items-center justify-center bg-slate-900">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-4">We're sorry, but something unexpected happened.</p>
            <button
<<<<<<< HEAD
              onClick={() => this.setState({ hasError: false })}
              className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors"
            >
              Try again
=======
              onClick={() => window.location.reload()}
              className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors"
            >
              Reload Page
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
            </button>
}
<<<<<<< HEAD
export default EnhancedErrorBoundary;
=======
=======
      </section>
    </div>
    </>
  );
};
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1507

export default EnhancedErrorBoundary;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d10
=======
                onClick={() => this.setState({ hasError: false })}
                className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Try Again
              </button>
            </div>
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1061
=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <RefreshCw className="w-5 h-5" />
                <span>Try Again</span>
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Home className="w-5 h-5" />
                <span>Go Home</span>
              </button>
            </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
=======
        <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 ${this.props.className || ''}`}>
          <div className="max-w-2xl w-full mx-4">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {/* Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Oops! Something went wrong
                </h1>
                <p className="text-gray-600 mb-4">
                  We're sorry for the inconvenience. Our team has been notified about this issue.
                </p>
                {errorId && (
                  <p className="text-sm text-gray-500 font-mono">
                    Error ID: {errorId}
                  </p>
                )}
              </div>

              {/* Error Details (if enabled) */}
              {this.props.showErrorDetails && error && (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Error Details
                  </h3>
                  <div className="text-xs text-gray-600 font-mono">
                    <div className="mb-1">
                      <strong>Message:</strong> {error.message}
                    </div>
                    {error.stack && (
                      <div className="mb-1">
                        <strong>Stack:</strong>
                        <pre className="whitespace-pre-wrap mt-1 text-xs">
                          {error.stack.split('\n').slice(0, 5).join('\n')}
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="space-y-3">
                {canRetry ? (
                  <button
                    onClick={this.handleRetry}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Try Again ({this.maxRetries - retryCount} attempts left)
                  </button>
                ) : (
                  <button
                    onClick={this.handleReload}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Reload Page
                  </button>
                )}

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={this.handleGoHome}
                    className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                  >
                    <Home className="w-4 h-4 mr-2" />
                    Go Home
                  </button>

                  {this.props.showErrorDetails && (
                    <button
                      id="copy-error-details"
                      onClick={this.copyErrorDetails}
                      className="border-2 border-gray-300 text-gray-600 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                    >
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Copy Details
                    </button>
                  )}
                </div>
              </div>

              {/* Retry Count */}
              {retryCount > 0 && (
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500">
                    Retry attempts: {retryCount}/{this.maxRetries}
                  </p>
                </div>
              )}
            </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
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
export default EnhancedErrorBoundary;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
=======
export default EnhancedErrorBoundary;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1061
=======
export default EnhancedErrorBoundary;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
=======
export default EnhancedErrorBoundary;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
