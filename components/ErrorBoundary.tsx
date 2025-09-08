'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
interface Props {
  children: ReactNode;
  level?: string;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}
interface State {
  hasError: boolean;
  error?: Error;
}
class ErrorBoundary extends Component<Props State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error }
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);    this.setState({
      error
      errorInfo
    });
    // Log error to external service (e.g., Sentry)
    if (typeof window !== 'undefined' && (window as any).Sentry) {
      (window as any).Sentry.captureException(error, { extra: errorInfo });    }
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
// Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      // Here you would typically send to an error reporting service
      console.error('Production error:', error, errorInfo);
    }
  }
  handleReload = () => {
    window.location.reload();
  }
  handleGoHome = () => {
    window.location.href = '/';  }
  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 text-center mb-2">
              Something went wrong
            </h2>
            <p className="text-gray-600 text-center mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="text-left bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
                <summary className="text-white/80 font-medium cursor-pointer mb-4">
                  Error Details (Development)
                </summary>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-red-400">Error:</strong>
                    <pre className="mt-2 p-3 bg-red-500/10 rounded-lg overflow-x-auto text-red-300">
                      {this.state.error.toString()}
                    </pre>
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong className="text-red-400">Stack Trace:</strong>
                      <pre className="mt-2 p-3 bg-red-500/10 rounded-lg overflow-x-auto text-red-300 text-xs">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}                </div>
              </details>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => typeof window !== 'undefined' && window.location.reload()}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Refresh Page
              </button>
              <button
                onClick={() => typeof window !== 'undefined' && (window.location.href = '/')}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Go Home
              </button>
            </div>
            {typeof process !== 'undefined' && process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="text-slate-400 cursor-pointer">Error Details</summary>
                <pre className="mt-2 text-xs text-red-400 bg-slate-800 p-3 rounded overflow-auto">
                  {this.state.error.stack}
                </pre>
              </details>
            )}
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
          </div>
    // Log the error to an error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ error, errorInfo });
    
    // Call the onError prop if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback |(
        <div style={{
          padding: '20px'
          textAlign: 'center'
          border: '1px solid #ff6b6b'
          borderRadius: '8px'
          backgroundColor: '#ffe0e0'
          margin: '20px'
        }}>
          <h2>Something went wrong.</h2>
          <p>We're sorry, but something unexpected happened.</p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 20px'
              backgroundColor: '#ff6b6b'
              color: 'white'
              border: 'none'
              borderRadius: '4px'
              cursor: 'pointer'
            }}
          >
            Reload Page
          </button>
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details style={{ marginTop: '20px', textAlign: 'left' }}>
              <summary>Error Details (Development)</summary>
              <pre style={{
                backgroundColor: '#f5f5f5'
                padding: '10px'
                borderRadius: '4px'
                overflow: 'auto'
                fontSize: '12px'
              }}>
                {this.state.error.toString()}
                {this.state.errorInfo?.componentStack}
              </pre>
            </details>
          )}
        </div>
      );
    }
    return this.props.children;
  }
}
class ErrorBoundary extends Component<Props, State> {constructor(props: Props) {;
    super(props);
    this.state = { hasError: false }
}
  static getDerivedStateFromError(error: Error): State {return { hasError: true, error }
}
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ error, errorInfo });
}
  handleRetry = () => {this.setState({ hasError: false, error: undefined, errorInfo: undefined });
}
  render() {if (this.state.hasError) {;
      if (this.props.fallback) {;
        return this.props.fallback;
}
      return (;
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">;
          <div className="max-w-md w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">;
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">;
              <AlertTriangle className="w-8 h-8 text-red-400" />;
            </div>;
            <h1 className="text-2xl font-bold text-white mb-4">;
              Something went wrong;
            </h1>;
            <p className="text-gray-300 mb-6">;
              We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists.;
            </p>;
            {process.env.NODE_ENV === 'development' && this.state.error && (;
              <details className="text-left mb-6">;
                <summary className="text-gray-400 cursor-pointer mb-2">;
                  Error Details (Development);
                </summary>;
                <pre className="text-xs text-red-400 bg-black/20 p-3 rounded overflow-auto">;
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>;
              </details>;
            )}
            <div className="flex flex-col sm:flex-row gap-4">;
              <button;
                onClick={this.handleRetry}
                className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">;
                <RefreshCw className="w-4 h-4" />;
                <span>Try Again</span>;
              </button>;
              <button;
                onClick={() => window.location.reload()}
                className="bg-transparent border border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">;
                Refresh Page;
              </button>;
            </div>;
          </div>;
        </div>;
      );
}
    return this.props.children;
}
}
export default ErrorBoundary;