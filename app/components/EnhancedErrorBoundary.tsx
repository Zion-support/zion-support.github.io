'use client';
import React, {Component, ErrorInfo, ReactNode} from 'react';

interface Props {children: ReactNode;,}
  fallback?: ReactNode;}interface State {hasError: boolean;,}
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { ErrorBoundaryFallback } from './EnhancedLoadingStates';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;}class EnhancedErrorBoundary extends Component<Props, State> {constructor(props: Props) {,
    super(props);
    this.state = { hasError: false ,}}

  static getDerivedStateFromError(error: Error): State {,}
    return {hasError: true, error}}}
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {,
    this.setState({)
      error,
      errorInfo;})

    // Log error to console in development;
    if (process.env.NODE_ENV === 'development') {console.error('Error caught by boundary:', error, errorInfo);}// Send error to analytics in production;
    if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined' && 'gtag' in window) {const gtag = (window as {gtag: (command: string, action: string, parameters: Record<string, unknown>) => void}}).gtag;
      gtag('event', 'exception', {)
        description: error.message,
        fatal: false;,})
    }
  }

  render() {if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;}return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">)</div>
          <div className="max-w-md mx-auto text-center p-8">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-6">We're sorry, but something unexpected happened. Please try refreshing the page.</p>
            </p>
            <button;
              onClick={() =>window.location.reload()</button>}className="bg-cyan-500 hover: bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition-colors",
            >
              Refresh Page;
            </button>
          </div>
        </div>
      );
      errorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {
      // You can integrate with error tracking services like Sentry here
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <ErrorBoundaryFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;