import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: undefined, errorInfo: undefined };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: undefined };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  handleReportError = () => {
    const { error, errorInfo } = this.state;
    if (error && errorInfo) {
      // In a real app, you would send this to your error reporting service
      console.error('Reporting error:', { error, errorInfo });
    }
  };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to monitoring service
    console.error('Error caught by boundary:', error, errorInfo);
    
    // Send to analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'exception', {
        description: error.message,
        fatal: false,
      });
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong!</h2>
            <p className="text-gray-600 mb-4">
              We're sorry, but something unexpected happened. Please try again.
            </p>
            <button
              onClick={() => this.setState({ hasError: false, error: undefined, errorInfo: undefined })}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;