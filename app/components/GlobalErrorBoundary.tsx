import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug, Mail } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
}

class GlobalErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: `global_error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Global Error caught by GlobalErrorBoundary:', error, errorInfo);
    }

    // Send error to monitoring service
    this.logErrorToService(error, errorInfo);

    // Call custom error handler if provided
    this.props.onError?.(error, errorInfo);
  }

  logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    try {
      const errorData = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        errorId: this.state.errorId,
        level: 'global',
      };

      // Send to error reporting service
      if (typeof window !== 'undefined' && (window as any).Sentry) {
        (window as any).Sentry.captureException(error, {
          tags: {
            component: 'GlobalErrorBoundary',
            errorId: this.state.errorId,
          },
          extra: errorData,
        });
      }

      // Store in localStorage for debugging
      const errors = JSON.parse(localStorage.getItem('global-error-log') || '[]');
      errors.push(errorData);
      localStorage.setItem('global-error-log', JSON.stringify(errors.slice(-5))); // Keep last 5 errors

      console.log('Global error data for reporting:', errorData);
    } catch (reportingError) {
      console.warn('Global error reporting failed:', reportingError);
    }
  };

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  handleReportBug = () => {
    const errorData = {
      errorId: this.state.errorId,
      message: this.state.error?.message,
      stack: this.state.error?.stack,
      url: window.location.href,
      timestamp: new Date().toISOString(),
    };

    const subject = `Global Error Report - Error ID: ${this.state.errorId}`;
    const body = `Please describe what you were doing when this error occurred:\n\n\n\nError Details:\n${JSON.stringify(errorData, null, 2)}`;
    
    const mailtoLink = `mailto:kleber@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
          <div className="max-w-lg w-full bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-8 text-center border border-white/20">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <AlertTriangle className="w-20 h-20 text-red-400" />
                <Bug className="w-8 h-8 text-red-300 absolute -bottom-2 -right-2" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-white mb-4">
              Critical Error
            </h1>
            
            <p className="text-gray-300 mb-6 text-lg">
              We're experiencing a critical system error. Our technical team has been automatically notified and is working to resolve this issue.
            </p>

            {this.state.errorId && (
              <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                <p className="text-sm text-gray-400 mb-2">Error ID:</p>
                <p className="text-sm font-mono text-cyan-400 break-all">{this.state.errorId}</p>
              </div>
            )}

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 mb-2">
                  Error Details (Development)
                </summary>
                <div className="p-4 bg-black/20 rounded text-xs font-mono overflow-auto max-h-40">
                  <div className="mb-2">
                    <strong className="text-red-400">Error:</strong> 
                    <span className="text-gray-300 ml-1">{this.state.error.message}</span>
                  </div>
                  {this.state.error.stack && (
                    <div>
                      <strong className="text-red-400">Stack:</strong>
                      <pre className="whitespace-pre-wrap text-gray-300 mt-1">{this.state.error.stack}</pre>
                    </div>
                  )}
                  {this.state.errorInfo?.componentStack && (
                    <div>
                      <strong className="text-red-400">Component Stack:</strong>
                      <pre className="whitespace-pre-wrap text-gray-300 mt-1">{this.state.errorInfo.componentStack}</pre>
                    </div>
                  )}
                </div>
              </details>
            )}

            <div className="space-y-3">
              <button
                onClick={this.handleRetry}
                className="w-full flex items-center justify-center px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Try Again
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="w-full flex items-center justify-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </button>

              <button
                onClick={this.handleReportBug}
                className="w-full flex items-center justify-center px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors font-medium"
              >
                <Mail className="w-5 h-5 mr-2" />
                Report This Issue
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm text-gray-500">
                For immediate assistance, contact our support team at{' '}
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  kleber@ziontechgroup.com
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

export default GlobalErrorBoundary;