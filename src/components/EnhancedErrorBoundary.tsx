/**
 * Enhanced Error Boundary Component
 * Provides comprehensive error handling with recovery options
 */

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug, Copy, CheckCircle } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
  isRecovering: boolean;
  recoveryAttempts: number;
  copied: boolean;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  private maxRecoveryAttempts = 3;
  private retryTimeout: NodeJS.Timeout | null = null;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
      isRecovering: false,
      recoveryAttempts: 0,
      copied: false
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
      errorInfo,
      error
    });

    // Log error to external service
    this.logError(error, errorInfo);

    // Call custom error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Report to analytics
    this.reportError(error, errorInfo);
  }

  private logError = (error: Error, _errorInfo: ErrorInfo) => {
    const errorData = {
      message: error.message,
      stack: error.stack,
      componentStack: _errorInfo.componentStack,
      errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    // In a real application, you would send this to your error logging service
    console.error('Error Boundary caught an error:', errorData);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private reportError = (error: Error, _errorInfo: ErrorInfo) => {
    // Report to analytics service
    if (typeof window !== 'undefined' && (window as Window & { gtag?: (event: string, data: Record<string, unknown>) => void }).gtag) {
      (window as Window & { gtag: (event: string, data: Record<string, unknown>) => void }).gtag('event', 'exception', {
        description: error.message,
        fatal: false
      });
    }
  };

  private handleRetry = () => {
    if (this.state.recoveryAttempts >= this.maxRecoveryAttempts) {
      return;
    }

    this.setState(prevState => ({
      isRecovering: true,
      recoveryAttempts: prevState.recoveryAttempts + 1
    }));

    // Clear error state after a brief delay
    this.retryTimeout = setTimeout(() => {
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        isRecovering: false
      });
    }, 1000);
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private copyErrorDetails = async () => {
    const errorDetails = {
      error: this.state.error?.message,
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack,
      errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
      url: window.location.href
    };

    try {
      await navigator.clipboard.writeText(JSON.stringify(errorDetails, null, 2));
      this.setState({ copied: true });
      setTimeout(() => this.setState({ copied: false }), 2000);
    } catch (err) {
      console.error('Failed to copy error details:', err);
    }
  };

  componentWillUnmount() {
    if (this.retryTimeout) {
      clearTimeout(this.retryTimeout);
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-red-200 dark:border-red-800">
            <div className="p-8 text-center">
              {/* Error Icon */}
              <div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6">
                <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>

              {/* Error Title */}
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Oops! Something went wrong
              </h1>

              {/* Error Message */}
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We encountered an unexpected error. Our team has been notified and is working to fix it.
              </p>

              {/* Error ID */}
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Error ID:</p>
                <code className="text-sm font-mono text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">
                  {this.state.errorId}
                </code>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                {this.state.recoveryAttempts < this.maxRecoveryAttempts && (
                  <button
                    onClick={this.handleRetry}
                    disabled={this.state.isRecovering}
                    className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {this.state.isRecovering ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        Recovering...
                      </>
                    ) : (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Try Again
                      </>
                    )}
                  </button>
                )}

                <button
                  onClick={this.handleReload}
                  className="flex items-center justify-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Reload Page
                </button>

                <button
                  onClick={this.handleGoHome}
                  className="flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </button>
              </div>

              {/* Technical Details */}
              <details className="text-left">
                <summary className="cursor-pointer text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 mb-4 flex items-center">
                  <Bug className="w-4 h-4 mr-2" />
                  Technical Details
                </summary>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Error Details:</h4>
                    <button
                      onClick={this.copyErrorDetails}
                      className="flex items-center text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                    >
                      {this.state.copied ? (
                        <>
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 mr-1" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="text-xs text-gray-600 dark:text-gray-300 overflow-auto max-h-32">
                    {this.state.error?.message}
                  </pre>
                  {this.state.error?.stack && (
                    <details className="mt-2">
                      <summary className="cursor-pointer text-xs text-gray-500 dark:text-gray-400">
                        Stack Trace
                      </summary>
                      <pre className="text-xs text-gray-600 dark:text-gray-300 overflow-auto max-h-32 mt-2">
                        {this.state.error.stack}
                      </pre>
                    </details>
                  )}
                </div>
              </details>

              {/* Recovery Attempts Info */}
              {this.state.recoveryAttempts > 0 && (
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Recovery attempts: {this.state.recoveryAttempts}/{this.maxRecoveryAttempts}
                </p>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;