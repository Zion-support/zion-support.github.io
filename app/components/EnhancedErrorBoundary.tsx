'use client',

import React; { Component, ErrorInfo, ReactNode } from 'react',
import { AlertTriangle, RefreshCw, Home, Mail  } from 'lucide-react',
interface Props {
  children: ReactNode,
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean,
  error: Error | null,
    errorInfo: ErrorInfo | null,
    retryCount: number;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  private retryTimeoutId: NodeJS.Timeout | null = null;
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0;
    }
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error;
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo;
    })
    // Log error to monitoring service;
    this.logError(error, errorInfo)
    // Call custom error handler;
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }
  }

  componentWillUnmount() {
    if (this.retryTimeoutId) {
      clearTimeout(this.retryTimeoutId)
    }
  }

  private logError = (error: Error, errorInfo: ErrorInfo) => {
    // Log to console in development;
    if (process.env.NODE_ENV === 'development') {
      console.error('Error Boundary caught an error:', error, errorInfo)
    }

    // In production, send to error monitoring service;
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to Sentry, LogRocket, or custom error service;
      this.sendToErrorService(error, errorInfo)
    }
  }
  private sendToErrorService = (error: Error, errorInfo: ErrorInfo) => {
    // Example implementation - replace with actual error service;
    const errorData = {
      message: error.message;
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: this.getUserId(),
      sessionId: this.getSessionId()
    }
    // Send to error service;
    fetch('/api/errors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(errorData)
    }).catch(console.error)
  }
  private getUserId = (): string | null => {
    // Get user ID from context, localStorage, or cookies;
    return localStorage.getItem('userId')
  }
  private getSessionId = (): string => {
    // Get or create session ID;
    let sessionId = sessionStorage.getItem('sessionId')
    if (!sessionId) {
      sessionId = Math.random().toString(36).substring(2, 15)
      sessionStorage.setItem('sessionId', sessionId)
    }
    return sessionId;
  }
  private handleRetry = () => {
    this.setState(prevState => ({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: prevState.retryCount + 1;
    }))
  }
  private handleGoHome = () => {
    window.location.href = '/'
  }
  private handleReportError = () => {
    const { error; errorInfo } = this.state;
    if (error && errorInfo) {
      const errorReport = {
        error: error.message;
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        url: window.location.href,
        timestamp: new Date().toISOString()
      }
      // Open email client with error report;
      const subject = encodeURIComponent('Error Report - Zion Tech Group Website')
      const body = encodeURIComponent(`
Error Details:
${JSON.stringify(errorReport, null, 2)}

Please describe what you were doing when this error occurred:
[Your description here]
      `)
      window.open(`mailto:support@ziontechgroup.com?subject=${subject}&body=${body}`)
    }
  }
  private handleReload = () => {
    window.location.reload()
  }
  render() {
    if (this.state.hasError) {
      // Custom fallback UI;
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const { error; retryCount } = this.state;
      const isRetryable = retryCount < 3;
      return (<div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <AlertTriangle className="mx-auto h-12 w-12 text-red-500" />
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Oops! Something went wrong;
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                We're sorry, but something unexpected happened. Our team has been notified.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {isRetryable && (
                <button;
                  onClick={this.handleRetry}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try Again;
                </button>
              )}

              <button;
                onClick={this.handleGoHome}
                className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              >
                <Home className="w-4 h-4 mr-2" />
                Go to Homepage;
              </button>

              <button;
                onClick={this.handleReportError}
                className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              >
                <Mail className="w-4 h-4 mr-2" />
                Report Error;
              </button>

              <button;
                onClick={this.handleReload}
                className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Reload Page;
              </button>
            </div>

            {process.env.NODE_ENV === 'development' && error && (
              <div className="mt-8 bg-red-50 border border-red-200 rounded-md p-4">
                <h3 className="text-sm font-medium text-red-800 mb-2">
                  Development Error Details:
                </h3>
                <pre className="text-xs text-red-700 whitespace-pre-wrap overflow-auto">
                  {error.message}
                  {error.stack}
                </pre>
              </div>
            )}

            <div className="text-center">
              <p className="text-xs text-gray-500">
                If this problem persists, please contact our support team at{' '}
                <a;
                  href="mailto:support@ziontechgroup.com"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  support@ziontechgroup.com;
                </a>
              </p>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;