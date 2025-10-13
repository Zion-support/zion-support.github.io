<<<<<<< HEAD
import React from 'react';

interface ComprehensiveErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ComprehensiveErrorBoundary({ className = '', children }: ComprehensiveErrorBoundaryProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';
<<<<<<< HEAD
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
interface Props;
=======
import { AlertTriangle, RefreshCw, Home, Mail, Bug } from 'lucide-react';
import logger from '../../utils/logger';

interface Props {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
  children: ReactNode;
=======
interface Props ,
    children: ReactNode;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

<<<<<<< HEAD
<<<<<<< HEAD
interface State;
=======
interface State {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string;
  retryCount: number;
}
=======
interface State ,
    hasError: boolean;,
    error: Error | null;,
    errorInfo: ErrorInfo | null;,
    errorId: string;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c

class ComprehensiveErrorBoundary extends Component<Props, State> {
  private retryTimeoutId?: NodeJS.Timeout;

  constructor(props: Props) {
    super(props);
<<<<<<< HEAD
    this.state = { 
      hasError: false, 
      retryCount: 0 
    };
  }
=======
    this.state = ,
    hasError: false,
        error: null,
        errorInfo: null,
        errorId: ''
;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c

<<<<<<< HEAD
  static getDerivedStateFromError(error: Error): Partial<State> 
<<<<<<< HEAD
    return;
      hasError: true,
=======
  static getDerivedStateFromError(error: Error): Partial<State> {
    return { 
      hasError: true, 
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }
=======
    return ,
    hasError: true,
      error,
        errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    this.setState({
      error,
<<<<<<< HEAD
      errorInfo;
);
    // Log error to console in development;
    if (process.env.NODE_ENV === 'development') 

    // Log error to external service in production;
    if (process.env.NODE_ENV === 'production') 
      this.logErrorToService(error, errorInfo);

    // Call custom error handler if provided;
    if (this.props.onError) 
=======
      errorInfo,
      errorId
    });

    // Log error using logger
    logger.error('ComprehensiveErrorBoundary caught an error:', error, errorInfo);

    // Call custom error handler if provided
    if (this.props.onError) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
      this.props.onError(error, errorInfo);
    }

<<<<<<< HEAD
<<<<<<< HEAD
  logErrorToService = (error: Error, errorInfo: ErrorInfo) => 
    // In a real application, you would send this to an error reporting service;
    // like Sentry, LogRocket, or Bugsnag;
    const errorData = 
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href;
=======
  logErrorToService = (error: Error, errorInfo: ErrorInfo) => 
    // In a real application, you would send this to an error reporting service
    // like Sentry, LogRocket, or Bugsnag
    const errorData = ,
    message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        errorId: this.state.errorId,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
;
    // For now, just log to console;
;
  handleRetry = () => 
<<<<<<< HEAD
    this.setState(
=======
    // Report to error tracking service in production
    if (process.env.NODE_ENV === 'production') {
      this.reportError(error, errorInfo, errorId);
    }
  }

  private reportError = async (error: Error, errorInfo: ErrorInfo, errorId: string) => {
    try {
      const errorReport = {
        errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        retryCount: this.state.retryCount
      };

      // Send to error tracking service
      await fetch('/api/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorReport),
      });
    } catch (reportingError) {
      logger.error('Failed to report error:', reportingError);
    }
  };

  private handleRetry = () => {
    this.setState(prevState => ({
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
      hasError: false,
      error: undefined,
      errorInfo: undefined,
      errorId: undefined,
      retryCount: prevState.retryCount + 1
    }));
  };

  private handleReload = () => {
=======
    this.setState(,
    hasError: false,
        error: null,
        errorInfo: null,
        errorId: ''
);
;
  handleReload = () => 
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
    window.location.reload();
<<<<<<< HEAD
;
  render() 
    if (this.state.hasError) 
      // Custom fallback UI;
      if (this.props.fallback) 
=======
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleReportBug = () => {
    const { error, errorId } = this.state;
    const subject = `Bug Report - Error ID: ${errorId}`;
    const body = `Error: ${error?.message}\n\nStack Trace:\n${error?.stack}\n\nPlease describe what you were doing when this error occurred:`;
    
    const mailtoUrl = `mailto:kleber@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl);
  };

  componentWillUnmount() {
    if (this.retryTimeoutId) {
      clearTimeout(this.retryTimeoutId);
    }
  }

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
        return this.props.fallback;
      }

      const { error, errorId, retryCount } = this.state;
      const isRetryable = retryCount < 3;

<<<<<<< HEAD
      // Default error UI;
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4"></div>
          <div className="max-w-2xl mx-auto text-center"></div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"></div>
              <div className="w-16 h-16 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center"></div>
                <AlertTriangle className="w-8 h-8 text-red-400" />
  </div>
              <h1 className="text-3xl font-bold text-white mb-4"></h1>
                Oops! Something went wrong;
              </h1>
              <p className="text-gray-300 mb-6 leading-relaxed"></p>
                We're sorry, but something unexpected happened. Our team has been notified;
                and is working to fix the issue. In the meantime, you can try refreshing;
                the page or returning to the homepage.
              </p>
              
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6 text-left"></div>
                  <h3 className="text-red-400 font-semibold mb-2">Error Details:</h3>
                  <p className="text-red-300 text-sm font-mono break-all"></p>
                    {this.state.error.message}
                  </p>
                  
                    <details className="mt-2"></details>
                      <summary className="text-red-400 cursor-pointer text-sm"></summary>
                        Stack Trace;
                      </summary>
                      <pre className="text-red-300 text-xs mt-2 overflow-auto"></pre>
                        {this.state.error.stack}
                      </pre>
                    </details>
  </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6"></div>
<<<<<<< HEAD
                <button;
=======
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-red-500/20">
            {/* Error Icon */}
            <div className="w-20 h-20 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-10 h-10 text-red-400" />
            </div>

            {/* Error Title */}
            <h1 className="text-3xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>

            {/* Error Message */}
            <p className="text-gray-300 mb-6 text-lg">
              We're sorry, but something unexpected happened. Our team has been notified.
            </p>

            {/* Error Details (Development only) */}
            {process.env.NODE_ENV === 'development' && error && (
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6 text-left">
                <h3 className="text-red-400 font-semibold mb-2">Error Details:</h3>
                <p className="text-red-300 text-sm mb-2">
                  <strong>Message:</strong> {error.message}
                </p>
                <p className="text-red-300 text-sm">
                  <strong>Error ID:</strong> {errorId}
                </p>
                {error.stack && (
                  <details className="mt-2">
                    <summary className="text-red-400 cursor-pointer text-sm">Stack Trace</summary>
                    <pre className="text-red-300 text-xs mt-2 overflow-auto max-h-32">
                      {error.stack}
                    </pre>
                  </details>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {isRetryable && (
                <button
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
                  onClick={this.handleRetry}
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
=======
                <button>
  onClick={this.handleRetry}>
  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
                >
<<<<<<< HEAD
                  <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform" />
                  Try Again;
                </button>
<<<<<<< HEAD
                <button;
                  onClick={this.handleReload}
                  className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
=======
                <button>
  onClick={this.handleReload}>
  className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
                >
                  <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform" />
                  Reload Page;
                </button>
  </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
<<<<<<< HEAD
                <Link;
                  to="/"
                  className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
=======
                <Link>
  to="/">
  className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
                >
                  <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Go Home;
                </Link>
<<<<<<< HEAD
                <Link;
                  to="/contact"
                  className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
=======
                <Link>
  to="/contact">
  className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
                >
                  <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Contact Support;
                </Link>
  </div>
                <p className="text-gray-400 text-sm mt-6"></p>
                  Error ID: {this.state.errorId}
                </p>
  </div>
  </div>
  </div>
=======
                  <RefreshCw className="w-5 h-5" />
                  Try Again
                </button>
              )}
              
              <button
                onClick={this.handleReload}
                className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                <RefreshCw className="w-5 h-5" />
                Reload Page
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                <Home className="w-5 h-5" />
                Go Home
              </button>
            </div>

            {/* Report Bug Button */}
            <div className="mt-6 pt-6 border-t border-gray-600">
              <button
                onClick={this.handleReportBug}
                className="flex items-center justify-center gap-2 mx-auto text-gray-400 hover:text-white transition-colors"
              >
                <Bug className="w-4 h-4" />
                Report this issue
              </button>
            </div>

            {/* Error ID for support */}
            {errorId && (
              <div className="mt-4 text-xs text-gray-500">
                Error ID: {errorId}
              </div>
            )}
          </div>
        </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
      );
    }

    return this.props.children;
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
export default ComprehensiveErrorBoundary;
</State>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
export default ComprehensiveErrorBoundary;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
