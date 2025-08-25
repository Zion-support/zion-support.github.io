<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { 
  AlertTriangle, 
  RefreshCw, 
  Home, 
  Mail, 
  Bug, 
  Copy,
  CheckCircle,
  ArrowLeft,
  Zap,
  Shield
} from 'lucide-react';
=======
import React, { Component, ReactNode } from 'react';
import { Button } from './ui/button';
import { AlertTriangle } from 'lucide-react'
import {logErrorToProduction} from '@/utils/productionLogger';

>>>>>>> autobot/2025-08-24T03-49-38-332Z

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
<<<<<<< HEAD
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
=======
>>>>>>> autobot/2025-08-24T03-49-38-332Z
}

interface State {
  hasError: boolean;
<<<<<<< HEAD
  error: Error | null;
  errorInfo: ErrorInfo | null;
  showDetails: boolean;
  copied: boolean;
  errorId: string | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: props.showDetails || false,
      copied: false,
      errorId: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
      showDetails: false,
      copied: false,
      errorId: ErrorBoundary.generateErrorId()
    };
  }

  static generateErrorId(): string {
    return `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Send error to analytics/monitoring service
    this.logErrorToService(error, errorInfo);
  }

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    try {
      // Example: Send to error reporting service
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'exception', {
          description: error.message,
          fatal: false,
          stack: error.stack,
          componentStack: errorInfo.componentStack
        });
      }

      // Example: Send to custom error endpoint
      fetch('/api/error-log', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: error.message,
          stack: error.stack,
          componentStack: errorInfo.componentStack,
          url: window.location.href,
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString(),
          errorId: this.state.errorId
        })
      }).catch(() => {
        // Silently fail if error logging fails
      });
    } catch (loggingError) {
      console.error('Failed to log error:', loggingError);
    }
  };

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false,
      copied: false,
      errorId: null
    });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleCopyError = async () => {
    if (this.state.error && this.state.errorInfo) {
      const errorReport = `
Error Report - ${new Date().toISOString()}
Error ID: ${this.state.errorId}

Error: ${this.state.error.message}
Stack: ${this.state.error.stack}
Component Stack: ${this.state.errorInfo.componentStack}
URL: ${window.location.href}
User Agent: ${navigator.userAgent}
      `.trim();

      try {
        await navigator.clipboard.writeText(errorReport);
        this.setState({ copied: true });
        setTimeout(() => this.setState({ copied: false }), 2000);
      } catch (err) {
        console.error('Failed to copy error:', err);
      }
    }
  };

  private handleReportError = () => {
    if (this.state.error) {
      const subject = encodeURIComponent(`Bug Report: ${this.state.error.message} [${this.state.errorId}]`);
      const body = encodeURIComponent(`
Hi Zion Tech Group Team,

I encountered an error while using the website:

Error ID: ${this.state.errorId}
Error: ${this.state.error.message}
URL: ${window.location.href}
Time: ${new Date().toISOString()}

Please let me know if you need any additional information.

Best regards,
      `);
      
      window.open(`mailto:support@ziontechgroup.com?subject=${subject}&body=${body}`);
    }
  };

  private toggleDetails = () => {
    this.setState(prev => ({ showDetails: !prev.showDetails }));
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
=======
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    logErrorToProduction('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
>>>>>>> autobot/2025-08-24T03-49-38-332Z
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
<<<<<<< HEAD
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 text-white">
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8" />
                <div>
                  <h1 className="text-2xl font-bold">Something went wrong</h1>
                  <p className="text-red-100 mt-1">
                    We're sorry, but something unexpected happened. Our team has been notified.
                  </p>
                  {this.state.errorId && (
                    <p className="text-red-100 text-sm mt-2">
                      Error ID: {this.state.errorId}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Error Message */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Error Details
                </h2>
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <p className="text-red-800 dark:text-red-200 font-mono text-sm">
                    {this.state.error?.message || 'An unknown error occurred'}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <button
                  onClick={this.handleRetry}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  Try Again
                </button>
                
                <button
                  onClick={this.handleGoHome}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
                >
                  <Home className="w-4 h-4" />
                  Go Home
                </button>
              </div>

              {/* Additional Actions */}
              <div className="flex flex-wrap gap-2 mb-6">
                <button
                  onClick={this.handleCopyError}
                  className="flex items-center gap-2 px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md transition-colors"
                >
                  {this.state.copied ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy Error
                    </>
                  )}
                </button>
                
                <button
                  onClick={this.handleReportError}
                  className="flex items-center gap-2 px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Report Bug
                </button>
                
                <button
                  onClick={this.toggleDetails}
                  className="flex items-center gap-2 px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md transition-colors"
                >
                  <Bug className="w-4 h-4" />
                  {this.state.showDetails ? 'Hide' : 'Show'} Details
                </button>
              </div>

              {/* Error Details */}
              {this.state.showDetails && (
                <div className="space-y-4">
                  {/* Stack Trace */}
                  {this.state.error?.stack && (
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Stack Trace
                      </h3>
                      <pre className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto text-xs text-gray-800 dark:text-gray-200 font-mono">
                        {this.state.error.stack}
                      </pre>
                    </div>
                  )}

                  {/* Component Stack */}
                  {this.state.errorInfo?.componentStack && (
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Component Stack
                      </h3>
                      <pre className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto text-xs text-gray-800 dark:text-gray-200 font-mono">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}

                  {/* Environment Info */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Environment Information
                    </h3>
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 text-xs text-gray-800 dark:text-gray-200 font-mono">
                      <div>URL: {window.location.href}</div>
                      <div>User Agent: {navigator.userAgent}</div>
                      <div>Timestamp: {new Date().toISOString()}</div>
                      <div>Error ID: {this.state.errorId}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Help Text */}
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Need help?</strong> If this error persists, please contact our support team at{' '}
                  <a 
                    href="mailto:support@ziontechgroup.com" 
                    className="underline hover:no-underline"
                  >
                    support@ziontechgroup.com
                  </a>
                  {' '}or call us at{' '}
                  <a 
                    href="tel:+1-302-464-0950" 
                    className="underline hover:no-underline"
                  >
                    +1 (302) 464-0950
                  </a>
                </p>
              </div>
            </div>
          </div>
=======
        <div style={{ border: '5px solid red', padding: '20px', textAlign: 'center', backgroundColor: 'lightyellow' }}>
          <h1>CUSTOM ERROR BOUNDARY (ErrorBoundary.tsx) TRIGGERED!</h1>
          <p>If you see this, the page component crashed.</p>
          {this.state.error && <pre>{this.state.error.message}</pre>}
          <button onClick={() => window.location.reload()}>Refresh Page</button>
          <button onClick={() => window.location.href = '/'}>Go Home</button>
>>>>>>> autobot/2025-08-24T03-49-38-332Z
        </div>
      );
    }

    return this.props.children;
  }
}
<<<<<<< HEAD

export { ErrorBoundary };
=======
>>>>>>> autobot/2025-08-24T03-49-38-332Z
