import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      errorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo);
    }
  }

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    try {
      // Send error to your error tracking service (e.g., Sentry, LogRocket)
      const errorData = {
        errorId: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent
      };

      // Example: Send to your API endpoint
      fetch('/api/error-log', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorData),
      }).catch(() => {
        // Silently fail if error logging fails
      });
    } catch (logError) {
      // Silently fail if error logging fails
    }
  };

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
    });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleReportIssue = () => {
    const subject = encodeURIComponent(`Error Report - ${this.state.errorId}`);
    const body = encodeURIComponent(`
Error ID: ${this.state.errorId}
Error: ${this.state.error?.message}
URL: ${window.location.href}
Time: ${new Date().toISOString()}

Please describe what you were doing when this error occurred:
    `);
    
    window.location.href = `mailto:support@ziontechgroup.com?subject=${subject}&body=${body}`;
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-slate-800 rounded-2xl p-8 shadow-2xl border border-slate-700">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
              
              <h1 className="text-3xl font-bold text-white mb-4">
                Oops! Something went wrong
              </h1>
              
              <p className="text-slate-300 mb-6">
                We've encountered an unexpected error. Our team has been notified and is working to fix it.
              </p>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="text-left mb-6 p-4 bg-slate-700 rounded-lg">
                  <summary className="text-slate-300 cursor-pointer font-medium mb-2">
                    Error Details (Development)
                  </summary>
                  <div className="text-sm text-slate-400 space-y-2">
                    <div>
                      <strong>Message:</strong> {this.state.error.message}
                    </div>
                    <div>
                      <strong>Stack:</strong>
                      <pre className="mt-1 text-xs overflow-x-auto">
                        {this.state.error.stack}
                      </pre>
                    </div>
                    {this.state.errorInfo && (
                      <div>
                        <strong>Component Stack:</strong>
                        <pre className="mt-1 text-xs overflow-x-auto">
                          {this.state.errorInfo.componentStack}
                        </pre>
                      </div>
                    )}
                  </div>
                </details>
              )}

              <div className="text-sm text-slate-400 mb-6">
                Error ID: <code className="bg-slate-700 px-2 py-1 rounded">{this.state.errorId}</code>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={this.handleRetry}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  Try Again
                </button>
                
                <button
                  onClick={this.handleGoHome}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors"
                >
                  <Home className="w-4 h-4" />
                  Go Home
                </button>
                
                <button
                  onClick={this.handleReportIssue}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Report Issue
                </button>
              </div>

              <p className="text-xs text-slate-500 mt-6">
                If this problem persists, please contact our support team with the Error ID above.
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
