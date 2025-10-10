import React, { Component, ErrorInfo, ReactNode } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';
=======
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-69ae
=======
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595

interface Props {
  children: ReactNode;
<<<<<<< HEAD
=======
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-9813
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595
}

interface State {
  hasError: boolean;
<<<<<<< HEAD
<<<<<<< HEAD
  error?: Error;
=======
  error?: Error;
  errorInfo?: ErrorInfo;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-69ae
}

class EnhancedErrorBoundary extends Component<Props, State> {
<<<<<<< HEAD
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-3xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Refresh Page
            </button>
=======
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
}

class EnhancedErrorBoundary extends Component<Props, State> {
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595
  private retryCount = 0;
  private maxRetries = 3;

  constructor(props: Props) {
    super(props);
<<<<<<< HEAD
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
<<<<<<< HEAD
      errorId: null
=======
      errorId: '',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595
    };
=======
    this.state = { hasError: false };
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-69ae
  }

<<<<<<< HEAD
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
=======
  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    };
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });

<<<<<<< HEAD
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
<<<<<<< HEAD
      console.error('Error Boundary caught an error:', error, errorInfo);
    }

=======
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Report error to monitoring service
    this.reportError(error, errorInfo);

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595
    // Call custom error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
<<<<<<< HEAD

    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo);
    }
  }

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    try {
      // Example: Send to error tracking service
      const errorData = {
=======
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    try {
      // Send error to monitoring service
      const errorReport = {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        errorId: this.state.errorId,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
<<<<<<< HEAD
        userId: this.getUserId(),
        sessionId: this.getSessionId()
      };

      // Send to your error tracking service
=======
        retryCount: this.retryCount,
      };

      // Send to your error reporting service
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595
      fetch('/api/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
<<<<<<< HEAD
        body: JSON.stringify(errorData)
      }).catch(console.error);
    } catch (loggingError) {
      console.error('Failed to log error:', loggingError);
    }
  };

  private getUserId = (): string | null => {
    // Get user ID from your auth system
    return localStorage.getItem('userId') || null;
  };

  private getSessionId = (): string => {
    // Get or create session ID
    let sessionId = sessionStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
  };

  private handleRetry = () => {
    if (this.retryCount < this.maxRetries) {
      this.retryCount++;
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: null
      });
    } else {
      // Reset retry count and reload page
      this.retryCount = 0;
      window.location.reload();
    }
  };

  private handleReload = () => {
    window.location.reload();
  };

=======
        body: JSON.stringify(errorReport),
      }).catch(() => {
        // Silently fail if error reporting fails
      });
    } catch (reportingError) {
      // Silently fail if error reporting fails
    }
  };

  private handleRetry = () => {
    if (this.retryCount < this.maxRetries) {
      this.retryCount++;
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: '',
      });
    } else {
      // Reset retry count and reload page
      this.retryCount = 0;
      window.location.reload();
    }
  };

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595
  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleReportBug = () => {
<<<<<<< HEAD
    const errorData = {
      error: this.state.error?.message,
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack,
      errorId: this.state.errorId,
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString()
    };

    const mailtoLink = `mailto:support@ziontechgroup.com?subject=Error Report - ${this.state.errorId}&body=${encodeURIComponent(JSON.stringify(errorData, null, 2))}`;
    window.open(mailtoLink);
=======
    // Log error to analytics or error reporting service
    console.error('Error caught by boundary:', error, errorInfo);
    
    // You can integrate with error reporting services here
    // Example: Sentry.captureException(error, { extra: errorInfo });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-69ae
=======
    const errorDetails = {
      errorId: this.state.errorId,
      message: this.state.error?.message,
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack,
      userAgent: navigator.userAgent,
      url: window.location.href,
      timestamp: new Date().toISOString(),
    };

    const mailtoLink = `mailto:support@ziontechgroup.com?subject=Error Report - ${this.state.errorId}&body=${encodeURIComponent(JSON.stringify(errorDetails, null, 2))}`;
    window.open(mailtoLink);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
<<<<<<< HEAD
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
<<<<<<< HEAD
          <div className="max-w-2xl w-full">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
              {/* Error Icon */}
              <div className="w-20 h-20 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-10 h-10 text-red-400" />
=======
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
          <div className="max-w-md mx-auto text-center p-8">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-6">
                <AlertTriangle className="w-12 h-12 text-white" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-69ae
              </div>
              <h1 className="text-3xl font-bold text-white mb-4">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-300 mb-6">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
              </p>
<<<<<<< HEAD

              {/* Error Details (Development Only) */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6 text-left">
                  <h3 className="text-red-400 font-semibold mb-2">Error Details:</h3>
                  <pre className="text-red-300 text-sm overflow-auto">
                    {this.state.error.message}
                    {this.state.error.stack && `\n\n${this.state.error.stack}`}
                  </pre>
                </div>
              )}

              {/* Error ID */}
              {this.state.errorId && (
                <p className="text-gray-400 text-sm mb-6">
                  Error ID: <code className="bg-gray-800 px-2 py-1 rounded">{this.state.errorId}</code>
                </p>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={this.handleRetry}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  {this.retryCount < this.maxRetries ? 'Try Again' : 'Reload Page'}
                </button>

                <button
                  onClick={this.handleGoHome}
                  className="inline-flex items-center px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Go Home
                </button>

                <button
                  onClick={this.handleReportBug}
                  className="inline-flex items-center px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <Bug className="w-5 h-5 mr-2" />
                  Report Bug
                </button>
              </div>

              {/* Help Text */}
              <div className="mt-8 text-sm text-gray-400">
                <p>
                  If this problem persists, please contact our support team at{' '}
                  <a 
                    href="mailto:support@ziontechgroup.com" 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    support@ziontechgroup.com
                  </a>
                </p>
              </div>
            </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-9813
=======
            </div>

            <div className="space-y-4">
              <button
                onClick={this.handleRetry}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Try Again
              </button>

              <Link
                to="/"
                className="w-full bg-white/10 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>

              <a
                href="mailto:support@ziontechgroup.com"
                className="w-full bg-white/5 text-gray-300 font-medium py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Support
              </a>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="text-gray-400 cursor-pointer hover:text-white transition-colors">
                  Error Details (Development)
                </summary>
                <div className="mt-4 p-4 bg-black/50 rounded-lg text-sm text-red-400 font-mono overflow-auto">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  <div className="mb-2">
                    <strong>Stack:</strong>
                    <pre className="mt-1 whitespace-pre-wrap">{this.state.error.stack}</pre>
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong>Component Stack:</strong>
                      <pre className="mt-1 whitespace-pre-wrap">{this.state.errorInfo.componentStack}</pre>
                    </div>
                  )}
                </div>
              </details>
            )}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-69ae
=======
          <div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-300 mb-4">
                We're sorry, but something unexpected happened. Our team has been notified.
              </p>
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="text-left bg-black/20 rounded-lg p-4 mb-4">
                  <summary className="cursor-pointer text-red-400 font-medium mb-2">
                    Error Details (Development)
                  </summary>
                  <pre className="text-xs text-gray-300 whitespace-pre-wrap">
                    {this.state.error.message}
                    {'\n\n'}
                    {this.state.error.stack}
                  </pre>
                </details>
              )}
            </div>

            <div className="space-y-3">
              <button
                onClick={this.handleRetry}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                {this.retryCount < this.maxRetries ? 'Try Again' : 'Reload Page'}
              </button>

              <button
                onClick={this.handleGoHome}
                className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </button>

              <button
                onClick={this.handleReportBug}
                className="w-full bg-red-500/20 hover:bg-red-500/30 text-red-400 font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <Bug className="w-5 h-5 mr-2" />
                Report Bug
              </button>
            </div>

            <div className="mt-6 text-xs text-gray-400">
              Error ID: {this.state.errorId}
            </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;
