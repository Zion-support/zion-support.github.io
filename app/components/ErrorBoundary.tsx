'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import Link from 'next/link';
import { FileWarning, RefreshCw, Home, AlertCircle } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableErrorReporting?: boolean;
  enableRetry?: boolean;
  maxRetries?: number;
  resetKeys?: Array<string | number>;
  level?: 'page' | 'component' | 'section';
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  retryCount: number;
  errorStack?: string[];
}

class ErrorBoundary extends Component<Props, State> {
  private resetTimer?: NodeJS.Timeout;

  constructor(props: Props) {
    super(props);
    this.state = { 
      hasError: false,
      retryCount: 0,
      errorStack: []
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return { 
      hasError: true, 
      error,
      retryCount: 0,
      errorStack: []
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const errorDetails = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      level: this.props.level || 'component'
    };

    // Log error to console in development
    if (process.env['NODE_ENV'] === 'development') {
      // eslint-disable-next-line no-console
      console.error('ErrorBoundary caught an error:', {
        error,
        errorInfo,
        ...errorDetails
      });
    }

    // Report error to monitoring service in production
    if (process.env['NODE_ENV'] === 'production') {
      // Send to error tracking service
      if (typeof window !== 'undefined') {
        // Send to external error tracking (e.g., Sentry, LogRocket)
        this.reportErrorToService(error, errorInfo, errorDetails);

        // Also send to Google Analytics if available
        if ('gtag' in window) {
          (window as unknown as { gtag: (command: string, eventName: string, parameters: Record<string, unknown>) => void }).gtag('event', 'exception', {
            description: error.message,
            fatal: this.props.level === 'page',
            ...errorDetails
          });
        }
      }
    }
    
    this.setState((prevState) => ({ 
      errorInfo,
      errorStack: [...(prevState.errorStack || []), error.message]
    }));
    
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    if (this.props.enableErrorReporting && process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Auto-retry if enabled
    if (this.props.enableRetry && this.state.retryCount < (this.props.maxRetries || 3)) {
      this.scheduleRetry();
    }
  }

  componentDidUpdate(prevProps: Props) {
    // Reset error state if reset keys change
    if (this.props.resetKeys && prevProps.resetKeys) {
      const hasChanged = this.props.resetKeys.some(
        (key, index) => key !== prevProps.resetKeys?.[index]
      );
      
      if (hasChanged && this.state.hasError) {
        this.resetErrorBoundary();
      }
    }
  }

  componentWillUnmount() {
    if (this.resetTimer) {
      clearTimeout(this.resetTimer);
    }
  }

  private scheduleRetry() {
    this.resetTimer = setTimeout(() => {
      this.setState((prevState) => ({
        hasError: false,
        error: undefined,
        errorInfo: undefined,
        retryCount: prevState.retryCount + 1
      }));
    }, 2000); // Retry after 2 seconds
  }

  private reportErrorToService(error: Error, errorInfo: ErrorInfo, details: Record<string, unknown>) {
    // Implement your error reporting service integration here
    // Example: Sentry.captureException(error, { contexts: { react: errorInfo, ...details } });
    
    // For now, we'll just store it locally
    try {
      const errorLog = {
        ...details,
        error: {
          name: error.name,
          message: error.message,
          stack: error.stack
        },
        errorInfo: {
          componentStack: errorInfo.componentStack
        }
      };
      
      // Store in localStorage for debugging
      if (typeof window !== 'undefined' && window.localStorage) {
        const existingLogs = JSON.parse(localStorage.getItem('error-logs') || '[]');
        existingLogs.push(errorLog);
        // Keep only last 10 errors
        localStorage.setItem('error-logs', JSON.stringify(existingLogs.slice(-10)));
      }
    } catch (e) {
      // Silent fail - don't create more errors
      console.error('Failed to log error:', e);
    }
  }

  resetErrorBoundary = () => {
    this.setState({
      hasError: false,
      error: undefined,
      errorInfo: undefined,
      retryCount: 0,
      errorStack: []
    });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const isPageLevel = this.props.level === 'page';
      const canRetry = this.props.enableRetry && this.state.retryCount < (this.props.maxRetries || 3);

      return (
        <div className={`${isPageLevel ? 'min-h-screen' : 'min-h-[400px]'} flex items-center justify-center bg-gray-50 p-4`}>
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-6">
              <div className="relative inline-block">
                <FileWarning className="mx-auto h-16 w-16 text-red-500" />
                {canRetry && (
                  <div className="absolute -top-1 -right-1 h-6 w-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <RefreshCw className="h-4 w-4 text-white animate-spin" />
                  </div>
                )}
              </div>
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {isPageLevel ? 'Oops! Something went wrong' : 'Component Error'}
            </h1>
            
            <p className="text-gray-600 mb-6">
              {canRetry 
                ? `Attempting to recover... (Attempt ${this.state.retryCount + 1}/${this.props.maxRetries || 3})`
                : "We're sorry for the inconvenience. Please try refreshing the page."
              }
            </p>

            {this.state.errorStack && this.state.errorStack.length > 1 && (
              <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-amber-800">
                    Multiple errors detected ({this.state.errorStack.length})
                  </p>
                </div>
              </div>
            )}
            
            <div className="space-y-3">
              <button
                onClick={this.resetErrorBoundary}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <RefreshCw className="h-5 w-5" />
                Try Again
              </button>
              
              {isPageLevel && (
                <Link
                  href="/"
                  className="flex items-center justify-center gap-2 w-full border-2 border-red-600 text-red-600 hover:bg-red-50 font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  <Home className="h-5 w-5" />
                  Go to Homepage
                </Link>
              )}
            </div>
            
            {this.props.enableErrorReporting && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4" />
                  Error Details (for developers)
                </summary>
                <div className="mt-2 p-4 bg-gray-100 rounded text-xs font-mono">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  {this.state.error.stack && (
                    <div className="mb-2">
                      <strong>Stack:</strong>
                      <pre className="mt-1 overflow-auto max-h-40 text-xs">
                        {this.state.error.stack}
                      </pre>
                    </div>
                  )}
                  {this.state.errorInfo?.componentStack && (
                    <div>
                      <strong>Component Stack:</strong>
                      <pre className="mt-1 overflow-auto max-h-40 text-xs">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;