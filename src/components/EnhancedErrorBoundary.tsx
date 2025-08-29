import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug, X, Info } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  showDetails: boolean;
  errorId: string;
}

export class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false,
      errorId: ''
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: this.generateErrorId()
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console
    console.error('Error caught by boundary:', error, errorInfo);

    // Update state
    this.setState({
      error,
      errorInfo
    });

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log to external service (e.g., Sentry, LogRocket)
    this.logErrorToService(error, errorInfo);

    // Send error report to analytics
    this.sendErrorAnalytics(error, errorInfo);
  }

  private static generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private logErrorToService(error: Error, errorInfo: ErrorInfo) {
    try {
      // Example: Send to external error tracking service
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'exception', {
          description: error.message,
          fatal: true,
          error_id: this.state.errorId
        });
      }
    } catch (e) {
      console.warn('Failed to log error to external service:', e);
    }
  }

  private sendErrorAnalytics(error: Error, errorInfo: ErrorInfo) {
    try {
      // Send to analytics service
      const errorData = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        errorId: this.state.errorId
      };

      // Example: Send to analytics endpoint
      fetch('/api/analytics/error', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(errorData)
      }).catch(() => {
        // Silently fail if analytics endpoint is not available
      });
    } catch (e) {
      console.warn('Failed to send error analytics:', e);
    }
  }

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false
    });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleReportBug = () => {
    const errorData = {
      errorId: this.state.errorId,
      message: this.state.error?.message,
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack,
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString()
    };

    // Open email client with error details
    const subject = encodeURIComponent(`Bug Report - Error ID: ${this.state.errorId}`);
    const body = encodeURIComponent(`
Error Report

Error ID: ${this.state.errorId}
Message: ${this.state.error?.message}
URL: ${window.location.href}
Timestamp: ${new Date().toISOString()}

Please describe what you were doing when this error occurred:

Stack Trace:
${this.state.error?.stack}

Component Stack:
${this.state.errorInfo?.componentStack}
    `);

    window.open(`mailto:support@ziontechgroup.com?subject=${subject}&body=${body}`);
  };

  private toggleDetails = () => {
    this.setState(prev => ({ showDetails: !prev.showDetails }));
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
            {/* Error Header */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-10 h-10 text-red-400" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-300 text-lg">
                We're sorry, but something unexpected happened. Our team has been notified.
              </p>
            </div>

            {/* Error Details */}
            <div className="bg-white/5 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-300">Error ID</span>
                <code className="text-xs bg-white/10 px-2 py-1 rounded text-cyan-400">
                  {this.state.errorId}
                </code>
              </div>
              <div className="text-sm text-gray-400">
                {this.state.error?.message || 'Unknown error occurred'}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Try Again</span>
              </button>

              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center space-x-2 bg-slate-600 hover:bg-slate-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                <Home className="w-4 h-4" />
                <span>Go Home</span>
              </button>

              <button
                onClick={this.handleReportBug}
                className="flex items-center justify-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                <Bug className="w-4 h-4" />
                <span>Report Bug</span>
              </button>
            </div>

            {/* Error Details Toggle */}
            <div className="border-t border-white/10 pt-6">
              <button
                onClick={this.toggleDetails}
                className="flex items-center justify-center space-x-2 w-full text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-lg p-3"
              >
                {this.state.showDetails ? (
                  <>
                    <X className="w-4 h-4" />
                    <span>Hide Details</span>
                  </>
                ) : (
                  <>
                    <Info className="w-4 h-4" />
                    <span>Show Details</span>
                  </>
                )}
              </button>

              {this.state.showDetails && (
                <div className="mt-4 space-y-4">
                  {/* Error Stack */}
                  {this.state.error?.stack && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-300 mb-2">Stack Trace</h4>
                      <pre className="text-xs text-gray-400 bg-black/20 p-3 rounded overflow-x-auto">
                        {this.state.error.stack}
                      </pre>
                    </div>
                  )}

                  {/* Component Stack */}
                  {this.state.errorInfo?.componentStack && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-300 mb-2">Component Stack</h4>
                      <pre className="text-xs text-gray-400 bg-black/20 p-3 rounded overflow-x-auto">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}

                  {/* Environment Info */}
                  <div className="grid grid-cols-2 gap-4 text-xs text-gray-400">
                    <div>
                      <span className="font-medium">URL:</span>
                      <div className="break-all">{window.location.href}</div>
                    </div>
                    <div>
                      <span className="font-medium">User Agent:</span>
                      <div className="break-all">{navigator.userAgent}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Help Text */}
            <div className="text-center mt-6 text-sm text-gray-400">
              <p>
                If this problem persists, please contact our support team at{' '}
                <a 
                  href="mailto:support@ziontechgroup.com" 
                  className="text-cyan-400 hover:text-cyan-300 underline"
                >
                  support@ziontechgroup.com
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Export as ErrorBoundary for backward compatibility
export const ErrorBoundary = EnhancedErrorBoundary;