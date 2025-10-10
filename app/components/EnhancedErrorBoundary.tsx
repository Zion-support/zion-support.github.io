'use client';
import React, {Component, ErrorInfo, ReactNode}from 'react';

<<<<<<< HEAD
interface Props {children: ReactNode;,}
  fallback?: ReactNode;}interface State {hasError: boolean;,}
=======
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
>>>>>>> cursor/analyze-improve-and-deploy-application-e11d
  error?: Error;
  errorInfo?: ErrorInfo;}class EnhancedErrorBoundary extends Component<Props, State> {constructor(props: Props) {,
    super(props);
<<<<<<< HEAD
    this.state = { hasError: false ,}}

  static getDerivedStateFromError(error: Error): State {,}
    return {hasError: true, error}}}
=======
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }
>>>>>>> cursor/analyze-improve-and-deploy-application-e11d

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {,
    this.setState({)
      error,
<<<<<<< HEAD
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
=======
      errorInfo
    });

    // Log error to analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
      gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        error_boundary: true
      });
    }

    // Call custom error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-lg p-8 text-center">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>
            
            <div className="space-y-4">
              <button
                onClick={this.handleRetry}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Try Again
              </button>
              
              <a
                href="/"
                className="block w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Go Home
              </a>
              
              <a
                href="/contact"
                className="block w-full border border-gray-400 text-gray-300 hover:bg-gray-400 hover:text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Report Issue
              </a>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300">
                  Error Details (Development)
                </summary>
                <div className="mt-2 p-4 bg-black/20 rounded text-xs font-mono text-red-300 overflow-auto max-h-40">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  <div className="mb-2">
                    <strong>Stack:</strong>
                    <pre className="whitespace-pre-wrap mt-1">
                      {this.state.error.stack}
                    </pre>
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong>Component Stack:</strong>
                      <pre className="whitespace-pre-wrap mt-1">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}
>>>>>>> cursor/analyze-improve-and-deploy-application-e11d
          </div>
        </div>
      );
    }

    return this.props.children;
  }
};

export default EnhancedErrorBoundary;