'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorReport {
  errorId: string | null;
  error: Error;
  errorInfo: ErrorInfo;
  message: string;
  stack: string | undefined;
  componentStack: string | null | undefined;
  timestamp: string;
  userAgent: string;
  url: string;
  userId: string | null;
  sessionId: string;
}

class AdvancedErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      error,
      errorInfo,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Send error report
    this.reportError(error, errorInfo);
  }

  private reportError = (error: Error, errorInfo: ErrorInfo): void => {
    const errorReport: ErrorReport = {
      errorId: this.state.errorId,
      error,
      errorInfo,
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: this.getUserId(),
      sessionId: this.getSessionId()
    };

    // In a real application, you would send this to your error reporting service
    console.error('Error Report:', errorReport);
  };

  private getUserId = (): string | null => {
    // Implement user ID retrieval logic
    return null;
  };

  private getSessionId = (): string => {
    // Generate or retrieve session ID
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
          <div className="max-w-md mx-auto text-center p-6">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-red-400 mb-2">
                Something went wrong
              </h2>
              <p className="text-gray-300 mb-4">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
            </div>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="text-left bg-gray-800 p-4 rounded-lg mb-4">
                <summary className="cursor-pointer text-yellow-400 font-semibold mb-2">
                  Error Details (Development)
                </summary>
                <div className="text-sm">
                  <p className="text-red-400 font-mono mb-2">
                    {this.state.error.message}
                  </p>
                  <pre className="text-xs text-gray-400 overflow-auto max-h-32">
                    {this.state.error.stack}
                  </pre>
                  {this.state.errorInfo && (
                    <pre className="text-xs text-gray-400 overflow-auto max-h-32 mt-2">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  )}
                </div>
              </details>
            )}

            <div className="space-y-2">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded transition-colors"
              >
                Refresh Page
              </button>
              <button
                onClick={() => this.setState({ hasError: false, error: null, errorInfo: null, errorId: null })}
                className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default AdvancedErrorBoundary;