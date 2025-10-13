import React, { Component, ErrorInfo, ReactNode } from 'react';
<<<<<<< HEAD
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import React, { Component, ReactNode } from 'react';
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export default class EnhancedErrorBoundary extends Component<Props, State> {
=======

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

class EnhancedErrorBoundary extends Component<Props, State> {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d10
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
<<<<<<< HEAD
      errorInfo: null
    };
=======
      errorInfo: null,
      errorId: ''
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d10
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    if (process.env['NODE_ENV'] === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Log error to external service in production
    if (process.env['NODE_ENV'] === 'production') {
      this.logErrorToService(error, errorInfo);
    }

    this.setState({
      error,
      errorInfo
    });

<<<<<<< HEAD
    // Log error to console in development
    if (process.env['NODE_ENV'] === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({ error, errorInfo });
  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };
=======
    // Call custom error handler if provided
    this.props.onError?.(error, errorInfo);
  }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d10

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    const errorData = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: this.getUserId(),
      sessionId: this.getSessionId()
    };

    // Send to error reporting service
    fetch('/api/errors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(errorData),
    }).catch(console.error);
  };

  private getUserId = (): string | null => {
    // Get user ID from localStorage, cookies, or context
    try {
      return localStorage.getItem('userId');
    } catch {
      return null;
    }
  };

  private getSessionId = (): string => {
    // Get or create session ID
    try {
      let sessionId = sessionStorage.getItem('sessionId');
      if (!sessionId) {
        sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        sessionStorage.setItem('sessionId', sessionId);
      }
      return sessionId;
    } catch {
      return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
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

  private handleReload = () => {
    window.location.reload();
  };

  private handleReportBug = () => {
    const errorData = {
      errorId: this.state.errorId,
      error: this.state.error?.message,
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack,
      url: window.location.href,
      timestamp: new Date().toISOString()
    };

    // Open email client with error details
    const subject = encodeURIComponent(`Bug Report - Error ID: ${this.state.errorId}`);
    const body = encodeURIComponent(`
Error Details:
${JSON.stringify(errorData, null, 2)}

Please describe what you were doing when this error occurred:
[Your description here]
    `);
    
    window.open(`mailto:support@ziontechgroup.com?subject=${subject}&body=${body}`);
  };

  render() {
    if (this.state.hasError) {
<<<<<<< HEAD
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
            <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-6" />
=======
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center">
            <div className="text-6xl mb-4">⚠️</div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d10
            <h1 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-300 mb-6">
<<<<<<< HEAD
              We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists.
            </p>
            
            {process.env['NODE_ENV'] === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="text-sm text-gray-400 cursor-pointer mb-2">
                  Error Details (Development)
                </summary>
                <div className="bg-black/20 p-3 rounded text-xs text-red-300 font-mono">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong>Stack:</strong>
                      <pre className="mt-1 whitespace-pre-wrap">
=======
              We're sorry, but something unexpected happened. Our team has been notified.
            </p>
            
            {process.env['NODE_ENV'] === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-cyan-400 hover:text-cyan-300 mb-2">
                  Error Details (Development)
                </summary>
                <div className="bg-black/50 p-4 rounded text-xs text-red-400 overflow-auto max-h-40">
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d10
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
<<<<<<< HEAD
              <Link
                to="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </div>
    if (this.retryCount < this.maxRetries) {
      this.retryCount++
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: '',
      })
=======
              </details>
            )}

            <div className="space-y-3">
              <button
                onClick={this.handleRetry}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded transition-colors"
              >
                Try Again
              </button>
              
              <button
                onClick={this.handleReload}
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded transition-colors"
              >
                Reload Page
              </button>
              
              <button
                onClick={this.handleReportBug}
                className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded transition-colors"
              >
                Report Bug
              </button>
            </div>

            <div className="mt-6 text-sm text-gray-400">
              Error ID: {this.state.errorId}
            </div>
          </div>
        </div>
      );
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d10
    }
  }
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors"
            >
              Try again
            </button>
}
<<<<<<< HEAD
export default EnhancedErrorBoundary;
=======

export default EnhancedErrorBoundary;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d10
