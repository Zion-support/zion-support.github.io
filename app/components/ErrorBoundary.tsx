'use client';

import { Component, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home, Bug, Copy } from 'lucide-react'
import Button from './Button'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void
  showErrorDetails?: boolean
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: React.ErrorInfo
  errorId?: string
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { 
      hasError: true, 
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    
    this.setState({ errorInfo })
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }

    // Send error to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      this.reportError(error, errorInfo)
    }
  }

  private reportError = async (error: Error, errorInfo: React.ErrorInfo) => {
    try {
      const errorReport = {
        errorId: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        userId: this.getUserId(),
        sessionId: this.getSessionId()
      }

      // Send to error reporting service
      await fetch('/api/errors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(errorReport)
      })
    } catch (reportingError) {
      console.error('Failed to report error:', reportingError)
    }
  }

  private getUserId = () => {
    // Get user ID from localStorage, cookies, or context
    return localStorage.getItem('userId') || 'anonymous'
  }

  private getSessionId = () => {
    // Get session ID from localStorage or generate one
    let sessionId = sessionStorage.getItem('sessionId')
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      sessionStorage.setItem('sessionId', sessionId)
    }
    return sessionId
  }

  private copyErrorDetails = () => {
    const errorDetails = {
      errorId: this.state.errorId,
      message: this.state.error?.message,
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack,
      timestamp: new Date().toISOString(),
      url: window.location.href
    }

    navigator.clipboard.writeText(JSON.stringify(errorDetails, null, 2))
      .then(() => {
        // You could show a toast notification here
        console.log('Error details copied to clipboard')
      })
      .catch(console.error)
  }

  handleReset = () => {
    this.setState({ 
      hasError: false, 
      error: undefined, 
      errorInfo: undefined,
      errorId: undefined
    })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      const showDetails = this.props.showErrorDetails || process.env.NODE_ENV === 'development'

      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
          <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-10 h-10 text-red-600 dark:text-red-400" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              We're sorry for the inconvenience. Our team has been notified and we're working to fix this issue.
            </p>

            {this.state.errorId && (
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  <strong>Error ID:</strong> {this.state.errorId}
                </p>
                <p className="text-blue-600 dark:text-blue-300 text-xs mt-1">
                  Please include this ID if you contact support
                </p>
              </div>
            )}

            {showDetails && this.state.error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6 text-left">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-red-800 dark:text-red-200">Error Details:</h3>
                  <Button
                    onClick={this.copyErrorDetails}
                    variant="ghost"
                    size="sm"
                    leftIcon={<Copy className="w-4 h-4" />}
                    ariaLabel="Copy error details to clipboard"
                  >
                    Copy
                  </Button>
                </div>
                <div className="space-y-2">
                  <div>
                    <strong className="text-red-700 dark:text-red-300">Message:</strong>
                    <pre className="text-sm text-red-600 dark:text-red-400 mt-1 whitespace-pre-wrap">
                      {this.state.error.message}
                    </pre>
                  </div>
                  {this.state.error.stack && (
                    <div>
                      <strong className="text-red-700 dark:text-red-300">Stack Trace:</strong>
                      <pre className="text-xs text-red-600 dark:text-red-400 mt-1 whitespace-pre-wrap overflow-auto max-h-40">
                        {this.state.error.stack}
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={this.handleReset} 
                variant="primary"
                leftIcon={<RefreshCw className="w-4 h-4" />}
              >
                Try Again
              </Button>
              
              <Button 
                onClick={() => window.location.href = '/'} 
                variant="outline"
                leftIcon={<Home className="w-4 h-4" />}
              >
                <RefreshCw className="w-5 h-5" />
                Try Again
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="px-6 py-3 border border-white/20 hover:border-white/40 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                Go Home
              </Button>

              <Button 
                onClick={() => window.location.reload()} 
                variant="secondary"
                leftIcon={<RefreshCw className="w-4 h-4" />}
              >
                Reload Page
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                If this problem persists, please{' '}
                <a 
                  href="/contact" 
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  contact our support team
                </a>
                {' '}with the error ID above.
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
