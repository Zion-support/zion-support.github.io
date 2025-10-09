'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail, Phone } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  retryCount: number;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  private maxRetries = 3;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error
    };
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

    // Send error to analytics/monitoring service
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: {
          error_boundary: true,
          component_stack: errorInfo.componentStack
        }
      });
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Send error to external monitoring service
    this.reportError(error, errorInfo);
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    // In a real application, you would send this to your error monitoring service
    // like Sentry, LogRocket, or Bugsnag
    const errorReport = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: this.getUserId() // You would implement this method
    };

    // Example: Send to external service
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/error-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorReport)
      }).catch(console.error);
    }
  };

  private getUserId = (): string | null => {
    // Implement user identification logic
    // This could be from localStorage, cookies, or context
    return localStorage.getItem('userId') || null;
  };

  private handleRetry = () => {
    if (this.state.retryCount < this.maxRetries) {
      this.setState(prevState => ({
        hasError: false,
        error: null,
        errorInfo: null,
        retryCount: prevState.retryCount + 1
      }));
    } else {
      // After max retries, reload the page
      window.location.reload();
    }
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleContactSupport = () => {
    window.location.href = '/contact';
  };

  private handleCallSupport = () => {
    window.location.href = 'tel:+13024640950';
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full">
            <div className="cyber-card p-8 text-center">
              <div className="text-6xl mb-6 text-red-400">
                <AlertTriangle className="mx-auto" />
              </div>
              
              <h1 className="text-3xl font-bold text-white mb-4 neon-text">
                Oops! Something went wrong
              </h1>
              
              <p className="text-gray-300 mb-6 text-lg">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.
              </p>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mb-6 text-left">
                  <summary className="text-cyan-400 cursor-pointer mb-2">
                    Error Details (Development Only)
                  </summary>
                  <div className="bg-gray-800 p-4 rounded-lg text-sm text-gray-300 overflow-auto">
                    <div className="mb-2">
                      <strong>Error:</strong> {this.state.error.message}
                    </div>
                    {this.state.error.stack && (
                      <div className="mb-2">
                        <strong>Stack Trace:</strong>
                        <pre className="whitespace-pre-wrap mt-1">{this.state.error.stack}</pre>
                      </div>
                    )}
                    {this.state.errorInfo && (
                      <div>
                        <strong>Component Stack:</strong>
                        <pre className="whitespace-pre-wrap mt-1">{this.state.errorInfo.componentStack}</pre>
                      </div>
                    )}
                  </div>
                </details>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button
                  onClick={this.handleRetry}
                  className="cyber-button px-6 py-3 flex items-center justify-center gap-2"
                  disabled={this.state.retryCount >= this.maxRetries}
                >
                  <RefreshCw className="w-5 h-5" />
                  {this.state.retryCount >= this.maxRetries ? 'Max Retries Reached' : `Try Again (${this.state.retryCount}/${this.maxRetries})`}
                </button>
                
                <button
                  onClick={this.handleReload}
                  className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-5 h-5" />
                  Reload Page
                </button>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-lg font-semibold text-white mb-4">Need Help?</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <button
                    onClick={this.handleGoHome}
                    className="flex items-center justify-center gap-2 p-4 border border-gray-600 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                  >
                    <Home className="w-5 h-5" />
                    Go Home
                  </button>
                  
                  <button
                    onClick={this.handleContactSupport}
                    className="flex items-center justify-center gap-2 p-4 border border-gray-600 rounded-lg hover:border-pink-400 hover:text-pink-400 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    Contact Support
                  </button>
                  
                  <button
                    onClick={this.handleCallSupport}
                    className="flex items-center justify-center gap-2 p-4 border border-gray-600 rounded-lg hover:border-green-400 hover:text-green-400 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    Call Us
                  </button>
                </div>
              </div>

              <div className="mt-6 text-sm text-gray-400">
                <p>Error ID: {Date.now().toString(36)}</p>
                <p>If this problem persists, please contact our support team.</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;