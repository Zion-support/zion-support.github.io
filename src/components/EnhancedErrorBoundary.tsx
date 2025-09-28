/**
 * Enhanced Error Boundary Component
 * Provides advanced error handling with user-friendly UI and error reporting
 */

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableReporting?: boolean;
  enableRetry?: boolean;
  enableDebugMode?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
  retryCount: number;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  private maxRetries = 3;
  private retryDelay = 1000; // 1 second

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
      retryCount: 0
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
      errorInfo
    });

    // Log error details
    console.error('🚨 Error Boundary caught an error:', error);
    console.error('📊 Error Info:', errorInfo);

    // Report error if enabled
    if (this.props.enableReporting !== false) {
      this.reportError(error, errorInfo);
    }

    // Call custom error handler
    this.props.onError?.(error, errorInfo);
  }

  /**
   * Report error to monitoring service
   */
  private reportError(error: Error, errorInfo: ErrorInfo) {
    const errorReport = {
      id: this.state.errorId,
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      retryCount: this.state.retryCount
    };

    // In production, this would be sent to an error monitoring service
    console.log('📤 Error Report:', errorReport);

    // Store in localStorage for debugging
    try {
      const existingReports = JSON.parse(localStorage.getItem('errorReports') || '[]');
      existingReports.push(errorReport);
      
      // Keep only last 10 reports
      if (existingReports.length > 10) {
        existingReports.splice(0, existingReports.length - 10);
      }
      
      localStorage.setItem('errorReports', JSON.stringify(existingReports));
    } catch (e) {
      console.warn('Failed to store error report:', e);
    }
  }

  /**
   * Handle retry
   */
  private handleRetry = () => {
    if (this.state.retryCount >= this.maxRetries) {
      console.warn('Max retries reached');
      return;
    }

    this.setState(prevState => ({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
      retryCount: prevState.retryCount + 1
    }));
  };

  /**
   * Handle refresh
   */
  private handleRefresh = () => {
    window.location.reload();
  };

  /**
   * Handle go home
   */
  private handleGoHome = () => {
    window.location.href = '/';
  };

  /**
   * Copy error details to clipboard
   */
  private copyErrorDetails = async () => {
    const errorDetails = {
      error: this.state.error?.message,
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack,
      timestamp: new Date().toISOString()
    };

    try {
      await navigator.clipboard.writeText(JSON.stringify(errorDetails, null, 2));
      console.log('📋 Error details copied to clipboard');
    } catch (e) {
      console.error('Failed to copy error details:', e);
    }
  };

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <svg className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">
                  Something went wrong
                </h3>
                <p className="text-sm text-gray-500">
                  We're sorry, but something unexpected happened.
                </p>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-600">
                Error ID: <code className="bg-gray-100 px-1 rounded text-xs">{this.state.errorId}</code>
              </p>
              {this.state.retryCount > 0 && (
                <p className="text-sm text-gray-600 mt-1">
                  Retry attempt: {this.state.retryCount}/{this.maxRetries}
                </p>
              )}
            </div>

            {this.props.enableDebugMode && (
              <details className="mb-4">
                <summary className="text-sm font-medium text-gray-700 cursor-pointer">
                  Debug Information
                </summary>
                <div className="mt-2 p-3 bg-gray-100 rounded text-xs">
                  <pre className="whitespace-pre-wrap overflow-auto max-h-32">
                    {this.state.error?.stack}
                  </pre>
                </div>
              </details>
            )}

            <div className="flex flex-col space-y-2">
              {this.props.enableRetry !== false && this.state.retryCount < this.maxRetries && (
                <button
                  onClick={this.handleRetry}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Try Again
                </button>
              )}
              
              <button
                onClick={this.handleRefresh}
                className="w-full bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
              >
                Refresh Page
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
              >
                Go Home
              </button>
              
              {this.props.enableDebugMode && (
                <button
                  onClick={this.copyErrorDetails}
                  className="w-full bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition-colors"
                >
                  Copy Error Details
                </button>
              )}
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500">
                If this problem persists, please contact support with the Error ID above.
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;