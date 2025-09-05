import React, { Component, ErrorInfo, ReactNode } from 'react';
interface Props {
  children: ReactNode;
  level?: string;
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
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
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
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });

    // Log error to external service (e.g., Sentry)
    if (typeof window !== 'undefined' && (window as any).Sentry) {
      (window as any).Sentry.captureException(error, { extra: errorInfo });
    }
  }

  handleReload = () => {
    window.location.reload();
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
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
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
              </button>
              
              <button
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
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;