<<<<<<< HEAD
import React from 'react';

interface ProductionErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ProductionErrorBoundary({ className = '', children }: ProductionErrorBoundaryProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';
<<<<<<< HEAD
<<<<<<< HEAD
interface Props;
=======
import logger from '../../utils/logger';

interface Props {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
  children: ReactNode;
=======
interface Props ,
    children: ReactNode;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
  fallback?: ReactNode;
}

<<<<<<< HEAD
<<<<<<< HEAD
interface State;
=======
interface State {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
  hasError: boolean;
=======
interface State ,
    hasError: boolean;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string;
}

class ProductionErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

<<<<<<< HEAD
  static getDerivedStateFromError(error: Error): State;
    // Update state so the next render will show the fallback UI;
    return;
=======
  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
<<<<<<< HEAD
    return { 
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
      hasError: true, 
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

<<<<<<< HEAD
  componentDidCatch(error: Error, errorInfo: ErrorInfo) 
    // Log error details;
    this.setState(
      error,
      errorInfo,
        errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
);
    // Log to console in development;
    if (process.env.NODE_ENV === 'development') 

    // In production, you would typically send this to an error reporting service;
    if (process.env.NODE_ENV === 'production') 
=======
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error details
    this.setState({
      error,
      errorInfo,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    });

    // Log error using logger
    logger.error('Error caught by ProductionErrorBoundary:', error, errorInfo);

    // In production, you would typically send this to an error reporting service
    if (process.env.NODE_ENV === 'production') {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
      this.logErrorToService(error, errorInfo);
    }
  }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
  private logErrorToService = async (error: Error, errorInfo: ErrorInfo) => 
    try;
      const errorData = 
=======
  private logErrorToService = async (error: Error, errorInfo: ErrorInfo) => {
    try {
      const errorData = {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        errorId: this.state.errorId,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        userId: 'anonymous', // You would get this from your auth context;
        sessionId: this.getSessionId(),
<<<<<<< HEAD
=======
  private logErrorToService = async (error: Error, errorInfo: ErrorInfo) => 
    try 
      const errorData = ,
    message: error.message,
          stack: error.stack,
          componentStack: errorInfo.componentStack,
          errorId: this.state.errorId,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          url: window.location.href,
          userId: 'anonymous', // You would get this from your auth context,
    sessionId: this.getSessionId(),
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
;
      // Send to your error reporting service;
=======
      };

      // Send to your error reporting service
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
      // Example: Sentry, LogRocket, Bugsnag, etc.
<<<<<<< HEAD
      await fetch('/api/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorData),
<<<<<<< HEAD
=======
      await fetch('/api/errors', ,
    method: 'POST',
          headers: 
          'Content-Type': 'application/json',
,
          body: JSON.stringify(errorData),
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
);
 catch (reportingError) 
      // Fallback: log to console if reporting fails;
;
  private getSessionId = (): string => 
    // Generate or retrieve session ID;
=======
      });
    } catch (reportingError) {
      // Fallback: log to console if reporting fails
      console.error('Failed to report error:', reportingError);
    }
  };

  private getSessionId = (): string => {
    // Generate or retrieve session ID
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
    let sessionId = sessionStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
  };

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
<<<<<<< HEAD
  };

  private handleReportError = () => {
    const errorDetails = {
      errorId: this.state.errorId,
      message: this.state.error?.message,
      stack: this.state.error?.stack,
      url: window.location.href,
      timestamp: new Date().toISOString(),
<<<<<<< HEAD
=======
;
  private handleReportError = () => 
    const errorDetails = ,
    errorId: this.state.errorId,
        message: this.state.error?.message,
        stack: this.state.error?.stack,
        url: window.location.href,
        timestamp: new Date().toISOString(),
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
;
    // Create mailto link with error details;
=======
    };

    // Create mailto link with error details
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
    const subject = `Error Report - ${this.state.errorId}`;
    const body = `Error Details:\n\n${JSON.stringify(errorDetails, null, 2)}`;
    const mailtoLink = `mailto:support@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(mailtoLink);
<<<<<<< HEAD
;
  render() 
    if (this.state.hasError) 
      // Custom fallback UI;
      if (this.props.fallback) 
=======
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
<<<<<<< HEAD
  </div>
            <h1 className="text-2xl font-bold text-white mb-4"></h1>
              Oops! Something went wrong;
=======
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
            </h1>
            
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="text-cyan-400 cursor-pointer mb-2">
                  Error Details (Development)
                </summary>
                <div className="bg-black/20 p-4 rounded-lg text-sm font-mono text-gray-300 overflow-auto max-h-40">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
<<<<<<< HEAD
  </div>
                  <div></div>
=======
                  </div>
                  <div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
                    <strong>Stack:</strong>
                    <pre className="whitespace-pre-wrap mt-1">
                      {this.state.error.stack}
                    </pre>
  </div>
  </div>
              </details>
            )}

<<<<<<< HEAD
            <div className="space-y-3"></div>
<<<<<<< HEAD
              <button;
=======
            <div className="space-y-3">
              <button
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
                onClick={this.handleRetry}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
=======
              <button>
  onClick={this.handleRetry}>
  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
              >
                <RefreshCw className="w-5 h-5" />
                <span>Try Again</span>
              </button>
<<<<<<< HEAD
<<<<<<< HEAD
              <button;
=======

              <button
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
                onClick={this.handleReload}
                className="w-full bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
=======
              <button>
  onClick={this.handleReload}>
  className="w-full bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
              >
                <RefreshCw className="w-5 h-5" />
                <span>Reload Page</span>
              </button>
<<<<<<< HEAD
<<<<<<< HEAD
              <button;
=======

              <button
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
                onClick={this.handleGoHome}
                className="w-full bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
=======
              <button>
  onClick={this.handleGoHome}>
  className="w-full bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
              >
                <Home className="w-5 h-5" />
                <span>Go Home</span>
              </button>
<<<<<<< HEAD
<<<<<<< HEAD
              <button;
=======

              <button
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
                onClick={this.handleReportError}
                className="w-full bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
=======
              <button>
  onClick={this.handleReportError}>
  className="w-full bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
              >
                <Mail className="w-5 h-5" />
                <span>Report Error</span>
              </button>
<<<<<<< HEAD
  </div>
              <p className="text-xs text-gray-400 mt-4"></p>
                Error ID: {this.state.errorId}
              </p>
  </div>
  </div>
=======
            </div>

            {this.state.errorId && (
              <p className="text-xs text-gray-400 mt-4">
                Error ID: {this.state.errorId}
              </p>
            )}
          </div>
        </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
      );
    }

    return this.props.children;
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
export default ProductionErrorBoundary;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
  }
}

export default ProductionErrorBoundary;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======
export default ProductionErrorBoundary;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
=======
export default ProductionErrorBoundary;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
