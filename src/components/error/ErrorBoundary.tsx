import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      // TODO: Implement error logging service (e.g., Sentry, LogRocket)
      console.error('Production error:', error.message);
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  handleGoBack = () => {
    window.history.back();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-zion-cyan/20 shadow-2xl">
            <div className="text-center">
              {/* Error Icon */}
              <div className="mx-auto w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
                <AlertTriangle className="w-10 h-10 text-red-400" />
              </div>

              {/* Error Title */}
              <h1 className="text-3xl font-bold text-white mb-4">
                Oops! Something went wrong
              </h1>

              {/* Error Message */}
              <p className="text-zion-cyan/80 text-lg mb-6">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
              </p>

              {/* Error Details (Development Only) */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="text-left bg-black/20 rounded-lg p-4 mb-6 text-sm">
                  <summary className="cursor-pointer text-zion-cyan font-medium mb-2">
                    Error Details (Development)
                  </summary>
                  <div className="text-red-300 font-mono">
                    <p className="mb-2"><strong>Error:</strong> {this.state.error.message}</p>
                    {this.state.errorInfo && (
                      <p><strong>Component Stack:</strong></p>
                    )}
                    <pre className="text-xs overflow-auto">
                      {this.state.errorInfo?.componentStack}
                    </pre>
                  </div>
                </details>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={this.handleRetry}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark font-semibold rounded-lg transition-all duration-200 hover:scale-105"
                >
                  <RefreshCw className="w-4 h-4" />
                  Try Again
                </button>

                <button
                  onClick={this.handleGoBack}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border border-zion-purple/30 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Go Back
                </button>

                <button
                  onClick={this.handleGoHome}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-zion-blue/20 hover:bg-zion-blue/30 text-zion-blue border border-zion-blue/30 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  <Home className="w-4 h-4" />
                  Go Home
                </button>
              </div>

              {/* Contact Support */}
              <div className="mt-8 pt-6 border-t border-zion-cyan/20">
                <p className="text-zion-cyan/60 text-sm mb-2">
                  Still having issues?
                </p>
                <a
                  href="/contact"
                  className="text-zion-cyan hover:text-zion-cyan/80 underline transition-colors"
                >
                  Contact our support team
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}