'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
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
    
    // Enhanced error reporting
    const errorReport = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: 'anonymous', // Add user ID if available
    };

    // Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      // Send to analytics
      if ('gtag' in window) {
        (window as any).gtag('event', 'exception', {
          description: error.message,
          fatal: true,
          custom_map: {
            component_stack: errorInfo.componentStack,
          }
        });
      }
      
      // Send to error reporting service
      fetch('/api/error-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorReport),
      }).catch(console.error);
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-slate-900">
          <div className="text-center p-8 max-w-md mx-auto">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Our team has been notified and we're working to fix it.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => window.location.reload()}
                className="cyber-button px-6 py-3 w-full"
                aria-label="Refresh the page to try again"
              >
                Refresh Page
              </button>
              <button
                onClick={() => window.history.back()}
                className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg w-full hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                aria-label="Go back to the previous page"
              >
                Go Back
              </button>
              <a
                href="/"
                className="block text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                aria-label="Return to the home page"
              >
                Return to Home
              </a>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="text-gray-400 cursor-pointer hover:text-white transition-colors">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 p-4 bg-slate-800 rounded text-xs text-red-400 overflow-auto">
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;