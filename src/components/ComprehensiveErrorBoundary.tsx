'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import ModernLoadingSpinner from './ModernLoadingSpinner';
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableErrorReporting?: boolean;
  maxRetries?: number;
  showRetryButton?: boolean;
}
interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string;
  retryCount: number;
  isRetrying: boolean;
}
class ComprehensiveErrorBoundary extends Component<Props, State> {
  private maxRetries: number;
  constructor(props: Props) {
    super(props);
    this.state = { 
      hasError: false, 
      retryCount: 0,
      isRetrying: false,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
    this.maxRetries = props.maxRetries || 3;
  }
  static getDerivedStateFromError(error: Error): Partial<State> {
    return { 
      hasError: true, 
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      retryCount: 0,
      isRetrying: false
    };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
    if (this.props.enableErrorReporting) {
      this.reportError(error, errorInfo);
    }
  }
  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    // Enhanced error reporting
    const errorReport = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      retryCount: this.state.retryCount
    };
    // Send to error reporting service
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: {
          error_id: this.state.errorId,
          retry_count: this.state.retryCount
        }
      });
    }
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      }
  };
  private handleRetry = async () => {
    if (this.state.retryCount < this.maxRetries) {
      this.setState({ isRetrying: true });
      // Simulate retry delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.setState(prevState => ({
        hasError: false,
        error: undefined,
        errorInfo: undefined,
        retryCount: prevState.retryCount + 1,
        isRetrying: false
      }));
    }
  };
  private handleReload = () => {
    window.location.reload();
  };
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      if (this.state.isRetrying) {
        return (
          <ModernLoadingSpinner 
            size="lg" 
            text="Retrying..." 
            fullScreen={true}
          />
        );
      }
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="cyber-card hologram-card max-w-2xl w-full p-8 text-center">
            <div className="text-6xl mb-6">⚠️</div>
            <h1 className="text-3xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-300 mb-6">
              We encountered an unexpected error. Our team has been notified and is working to fix it.
            </p>
            <div className="bg-gray-800 rounded-lg p-4 mb-6 text-left">
              <h3 className="text-white font-semibold mb-2">Error Details:</h3>
              <p className="text-sm text-gray-300 mb-2">
                <strong>Error ID:</strong> {this.state.errorId}
              </p>
              <p className="text-sm text-gray-300 mb-2">
                <strong>Message:</strong> {this.state.error?.message || 'Unknown error'}
              </p>
              <p className="text-sm text-gray-300">
                <strong>Retry Attempts:</strong> {this.state.retryCount} / {this.maxRetries}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {this.state.retryCount < this.maxRetries && (
                <button
                  onClick={this.handleRetry}
                  className="cyber-button"
                  aria-label={`Retry loading content. ${this.maxRetries - this.state.retryCount} attempts remaining.`}
                >
                  🔄 Try Again ({this.maxRetries - this.state.retryCount} left)
                </button>
              )}
              <button
                onClick={this.handleReload}
                className="cyber-button"
                aria-label="Reload the entire page"
              >
                🔄 Reload Page
              </button>
              <a
                href="/contact"
                className="cyber-button"
                aria-label="Contact support for help with this error"
              >
                📞 Contact Support
              </a>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error?.stack && (
              <details className="mt-6 text-left">
                <summary className="text-white cursor-pointer hover:text-cyan-400">
                  Technical Details (Development)
                </summary>
                <pre className="mt-2 p-4 bg-gray-900 rounded text-xs text-gray-300 overflow-auto">
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ComprehensiveErrorBoundary;