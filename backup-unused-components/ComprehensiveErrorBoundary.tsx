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
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
interface Props;
import { AlertTriangle, RefreshCw, Home, Mail, Bug } from 'lucide-react';
import logger from '../../utils/logger';

interface Props {
  children: ReactNode;
interface Props ,
    children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State;
interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string;
  retryCount: number;
}
interface State ,
    hasError: boolean;,
    error: Error | null;,
    errorInfo: ErrorInfo | null;,
    errorId: string;

class ComprehensiveErrorBoundary extends Component<Props, State> {
  private retryTimeoutId?: NodeJS.Timeout;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      retryCount: 0
    };
  }
    this.state = ,
    hasError: false,
        error: null,
        errorInfo: null,
        errorId: ''
;

  static getDerivedStateFromError(error: Error): Partial<State>
    return;
      hasError: true,
  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }
    return ,
    hasError: true,
      error,
        errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
;

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    this.setState({
      error,
      errorInfo;
);
    // Log error to console in development;
    if (process.env.NODE_ENV === 'development')

    // Log error to external service in production;
    if (process.env.NODE_ENV === 'production')
      this.logErrorToService(error, errorInfo);

    // Call custom error handler if provided;
    if (this.props.onError)
      errorInfo,
      errorId
    });

    // Log error using logger
    logger.error('ComprehensiveErrorBoundary caught an error:', error, errorInfo);

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

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
;
    // For now, just log to console;
;
  handleRetry = () =>
    this.setState(
    // Report to error tracking service in production
    if (process.env.NODE_ENV === 'production') {
      this.reportError(error, errorInfo, errorId);
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
      hasError: false,
      error: undefined,
      errorInfo: undefined,
      errorId: undefined,
      retryCount: prevState.retryCount + 1
    }));
  };

  private handleReload = () => {
    this.setState(,
    hasError: false,
        error: null,
        errorInfo: null,
        errorId: ''
);
;
  handleReload = () =>
    window.location.reload();
;
  render()
    if (this.state.hasError)
      // Custom fallback UI;
      if (this.props.fallback)
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
  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const { error, errorId, retryCount } = this.state;
      const isRetryable = retryCount < 3;

      // Default error UI;
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4"></div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"></div>
                <AlertTriangle className="w-8 h-8 text-red-400"></h1>
                Oops! Something went wrong;
              </h1>
              <p className="text-gray-300 mb-6 leading-relaxed"></div>
                  <h3 className="text-red-400 font-semibold mb-2"></p>
                    {this.state.error.message}
                  </p>

                    <details className="mt-2"></summary>
                        Stack Trace;
                      </summary>
                      <pre className="text-red-300 text-xs mt-2 overflow-auto"></div>
                <button;
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
            {/* Error Icon */}
            <div className="w-20 h-20 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center" />
            </div>

            {/* Error Title */}
            <h1 className="text-3 xl font-bold text-white mb-4">
              We're sorry, but something unexpected happened. Our team has been notified.
            </p>

            {/* Error Details (Development only) */}
            {process.env.NODE_ENV === 'development' && error && (
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6 text-left">Error Details:</h3>
                <p className="text-red-300 text-sm mb-2">
                  <strong>Error ID:</strong> {errorId}
                </p>
                {error.stack && (
                  <details className="mt-2">Stack Trace</summary>
                    <pre className="text-red-300 text-xs mt-2 overflow-auto max-h-32">
              {isRetryable && (
                <button
                  onClick={this.handleRetry}
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform"
                <button>
  onClick={this.handleReload}>
  className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group" />
                  Reload Page;
                </button>
  </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"
                  className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center group">
  className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center group" />
                  Go Home;
                </Link>
                <Link;
                  to="/contact"bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"/contact"bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"w-5 h-5 mr-2 group-hover:scale-110 transition-transform"text-gray-400 text-sm mt-6"w-5 h-5"flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"w-5 h-5"flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"w-5 h-5"mt-6 pt-6 border-t border-gray-600"flex items-center justify-center gap-2 mx-auto text-gray-400 hover:text-white transition-colors"w-4 h-4"mt-4 text-xs text-gray-500">
                Error ID: {errorId}
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
export default ComprehensiveErrorBoundary;
</State>
export default ComprehensiveErrorBoundary;

