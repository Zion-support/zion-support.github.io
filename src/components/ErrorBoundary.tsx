import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });

    // Log error to analytics service
    this.logErrorToService(error, errorInfo);
  }

  private logErrorToService(error: Error, errorInfo: ErrorInfo) {
    // In production, send to error tracking service
    if (process.env.NODE_ENV === 'production') {
      // Example: Sentry, LogRocket, etc.
      console.log('Error logged to service:', {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString()
      });
    }
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  private handleReportError = () => {
    const { error, errorInfo } = this.state;
    const errorReport = {
      message: error?.message,
      stack: error?.stack,
      componentStack: errorInfo?.componentStack,
      userAgent: navigator.userAgent,
      url: window.location.href,
      timestamp: new Date().toISOString()
    };

    // Send error report via email or API
    const mailtoLink = `mailto:support@ziontechgroup.com?subject=Error Report&body=${encodeURIComponent(JSON.stringify(errorReport, null, 2))}`;
    window.open(mailtoLink);
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
                We encountered an unexpected error. Our team has been notified and is working to fix it.
              </p>

              {/* Error Details (Development Only) */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mb-6 text-left">
                  <summary className="cursor-pointer text-zion-cyan hover:text-zion-cyan/80 mb-2">
                    Error Details (Development)
                  </summary>
                  <div className="bg-zion-slate-dark/50 rounded-lg p-4 text-sm font-mono text-red-300 overflow-auto">
                    <div className="mb-2">
                      <strong>Error:</strong> {this.state.error.message}
                    </div>
                    {this.state.error.stack && (
                      <div>
                        <strong>Stack:</strong>
                        <pre className="whitespace-pre-wrap mt-1">{this.state.error.stack}</pre>
                      </div>
                    )}
                    {this.state.errorInfo?.componentStack && (
                      <div>
                        <strong>Component Stack:</strong>
                        <pre className="whitespace-pre-wrap mt-1">{this.state.errorInfo.componentStack}</pre>
                      </div>
                    )}
                  </div>
                </details>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={this.handleRetry}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-zion-cyan hover:bg-zion-cyan/80 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
                >
                  <RefreshCw className="w-5 h-5" />
                  Try Again
                </button>

                <Link
                  to="/"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-zion-blue hover:bg-zion-blue/80 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
                >
                  <Home className="w-5 h-5" />
                  Go Home
                </Link>

                <button
                  onClick={this.handleReportError}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-zion-purple hover:bg-zion-purple/80 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  Report Issue
                </button>
              </div>

              {/* Additional Help */}
              <div className="mt-8 text-zion-cyan/60 text-sm">
                <p>If this problem persists, please contact our support team.</p>
                <p className="mt-2">
                  <a 
                    href="mailto:support@ziontechgroup.com" 
                    className="text-zion-cyan hover:text-zion-cyan/80 underline"
                  >
                    support@ziontechgroup.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
