import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  level?: string;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
<<<<<<< HEAD
=======
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className=&quot;min-h-screen bg-slate-950 flex items-center justify-center&quot;>
          <div className=&quot;text-center text-white&quot;>
            <h1 className=&quot;text-2xl font-bold mb-4&quot;>Something went wrong</h1>
            <p className=&quot;text-slate-300 mb-4&quot;>
              {this.state.error?.message || 'An unexpected error occurred'}
            </p>
            <button
              onClick={() => window.location.reload()}
              className=&quot;px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700&quot;
            >
              Reload Page
            </button>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });

    // Call the onError prop if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log error to external service (e.g., Sentry)
    if (typeof window !== 'undefined' && (window as any).Sentry) {
      (window as any).Sentry.captureException(error, { extra: errorInfo });
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
<<<<<<< HEAD
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-slate-900 rounded-lg border border-slate-700 p-6 text-center">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-white mb-2">
              Something went wrong
            </h1>
            <p className="text-slate-300 mb-6">
              {this.props.level === 'page' 
                ? 'We encountered an error while loading this page.'
                : 'An unexpected error occurred.'
              }
=======
        <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center px-6&quot;>
          <div className=&quot;max-w-2xl mx-auto text-center&quot;>
            <div className=&quot;w-24 h-24 rounded-full bg-red-500/20 mx-auto mb-8 flex items-center justify-center&quot;>
              <AlertTriangle className=&quot;w-12 h-12 text-red-400&quot; />
            </div>
            
            <h1 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6&quot;>
              Oops! Something went wrong
            </h1>
            
            <p className=&quot;text-lg text-white/70 mb-8 leading-relaxed&quot;>
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            </p>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
<<<<<<< HEAD
              <details className="mb-6 text-left">
                <summary className="text-slate-400 cursor-pointer mb-2">
                  Error Details (Development)
                </summary>
                <pre className="text-xs text-red-400 bg-slate-800 p-3 rounded overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => window.location.reload()}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Reload Page
=======
              <details className=&quot;text-left bg-white/5 rounded-xl p-6 mb-8 border border-white/10&quot;>
                <summary className=&quot;text-white/80 font-medium cursor-pointer mb-4&quot;>
                  Error Details (Development)
                </summary>
                <div className=&quot;space-y-3 text-sm&quot;>
                  <div>
                    <strong className=&quot;text-red-400&quot;>Error:</strong>
                    <pre className=&quot;mt-2 p-3 bg-red-500/10 rounded-lg overflow-x-auto text-red-300&quot;>
                      {this.state.error.toString()}
                    </pre>
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong className=&quot;text-red-400&quot;>Stack Trace:</strong>
                      <pre className=&quot;mt-2 p-3 bg-red-500/10 rounded-lg overflow-x-auto text-red-300 text-xs&quot;>
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}

            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <button
                onClick={this.handleReload}
                className=&quot;px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2&quot;
              >
                <RefreshCw className=&quot;w-5 h-5&quot; />
                Try Again
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              </button>
              <button
<<<<<<< HEAD
                onClick={() => window.location.href = '/'}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold text-white transition-colors"
              >
                <Home className="w-4 h-4" />
                Go Home
              </button>
            </div>
=======
                onClick={this.handleGoHome}
                className=&quot;px-6 py-3 border border-white/20 hover:border-white/40 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10 flex items-center justify-center gap-2&quot;
              >
                <Home className=&quot;w-5 h-5&quot; />
                Go Home
              </button>
            </div>

            <div className=&quot;mt-8 pt-8 border-t border-white/10&quot;>
              <p className=&quot;text-white/50 text-sm&quot;>
                If this problem persists, please contact our support team at{' '}
                <a 
                  href=&quot;mailto:support@ziontechgroup.com&quot; 
                  className=&quot;text-cyan-400 hover:text-cyan-300 transition-colors duration-300&quot;
                >
                  support@ziontechgroup.com
                </a>
              </p>
            </div>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;