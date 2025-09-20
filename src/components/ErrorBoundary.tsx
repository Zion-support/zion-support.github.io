import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from './ui/button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorId?: string;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { 
      hasError: true, 
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Send to error reporting service
    this.reportError(error, errorInfo);
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    const errorReport = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: this.getUserId(),
    };

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error Report:', errorReport);
    }

    // Send to error reporting service in production
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to Sentry, LogRocket, or custom service
      this.sendToErrorService(errorReport);
    }
  };

  private sendToErrorService = (errorReport: any) => {
    // Example implementation - replace with your error service
    try {
      fetch('/api/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorReport),
      }).catch(console.error);
    } catch (e) {
      console.error('Failed to send error report:', e);
    }
  };

  private getUserId = (): string | null => {
    // Get user ID from your auth system
    try {
      return localStorage.getItem('userId') || null;
    } catch {
      return null;
    }
  };

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorId: undefined });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-xl p-8 text-center">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            
            <h2 className="text-2xl font-bold text-white mb-2">
              Oops! Something went wrong
            </h2>
            
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Our team has been notified.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="text-gray-400 cursor-pointer mb-2">
                  Error Details (Development Only)
                </summary>
                <div className="bg-gray-900 p-4 rounded text-sm text-red-400 font-mono whitespace-pre-wrap overflow-auto max-h-40">
                  {this.state.error.toString()}
                </div>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={this.handleRetry}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
              
              <Button
                onClick={this.handleGoHome}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Button>
            </div>

            {this.state.errorId && (
              <p className="text-xs text-gray-500 mt-4">
                Error ID: {this.state.errorId}
              </p>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;