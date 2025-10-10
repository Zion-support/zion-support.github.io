<<<<<<< HEAD
'use client'
import React, { Component, ErrorInfo, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home, Phone } from 'lucide-react';

=======
'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}
interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
}
<<<<<<< HEAD

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error for monitoring in production
    if (process.env.NODE_ENV === 'production') {
      // In production, you would send this to an error reporting service
      // Example: errorReportingService.captureException(error, { extra: errorInfo })
    }
    this.setState({ error, errorInfo })
  }

  handleReload = () => {
    window.location.reload()
  }

  handleGoHome = () => {
    window.location.href = '/'
  }

=======
class ErrorBoundary extends Component<Props, State> {
constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    }
  };
  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null
    }
  };
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    })
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      // console.error removed for production
}
    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo);
    }
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  };
  logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    // In a real application, you would send this to an error reporting service
    // like Sentry, LogRocket, or Bugsnag
    const errorData = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };
    // Example: Send to analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      const gtag = (window as any).gtag;
      gtag('event', 'exception', {
        description: error.message,
        fatal: false
      });
    }
    // console.error removed for production
};
  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    })
  };
  handleGoHome = () => {
    window.location.href = '/';
  }
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }
<<<<<<< HEAD

=======
      // Default error UI
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page or go back to the home page.
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="text-sm text-gray-400 cursor-pointer mb-2">
                  Error Details (Development)
                </summary>
<<<<<<< HEAD
                <pre className="text-xs text-red-400 bg-slate-900/50 p-3 rounded overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleReload}
                className="flex items-center justify-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
=======
                <div className="bg-red-900/20 p-4 rounded-lg text-sm text-red-300 font-mono overflow-auto">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  {this.state.error.stack && (
                    <div className="mb-2">
                      <strong>Stack:</strong>
                      <pre className="whitespace-pre-wrap mt-1">
                        {this.state.error.stack}
                      </pre>
                    </div>
                  )};
                </div>
                </details>
              )};
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={this.handleRetry}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                <RefreshCw className="w-4 h-4" />
                <span>Reload Page</span>
              </button>
<<<<<<< HEAD
              
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center space-x-2 border border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
=======
              <button onClick={this.handleGoHome}
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 border border-white/20">
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                <Home className="w-4 h-4" />
                <span>Go Home</span>
              </button>
            </div>
<<<<<<< HEAD

            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-sm text-gray-400 mb-3">
                Still having trouble? Contact our support team:
=======
            <div className="mt-6 text-sm text-gray-400">
              <p>If this problem persists, please contact our support team:</p>
              <p className="mt-2">
                <a href="mailto:support@ziontechgroup.com" 
                  className="text-cyan-400 hover:text-cyan-300">
                  support@ziontechgroup.com
                </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
=======
      );
    };
    return this.props.children;
  };
};
export default ErrorBoundary;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
