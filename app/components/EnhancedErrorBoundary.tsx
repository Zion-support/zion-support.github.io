'use client'
import React, { Component, ErrorInfo, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
  showDetails?: boolean
}

interface State {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
  errorId: string
}

class EnhancedErrorBoundary extends Component<Props, State> {
  private retryCount = 0
  private maxRetries = 3

  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
    }
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    })

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error Boundary caught an error:', error, errorInfo)
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }

    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo)
    }
  }

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    // In a real application, you would send this to an error tracking service
    // like Sentry, LogRocket, or Bugsnag
    const errorData = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    }

    // Example: Send to error tracking service
    // errorTrackingService.captureException(error, errorData)
    
    console.error('Error logged to service:', errorData)
  }

  private handleRetry = () => {
    if (this.retryCount < this.maxRetries) {
      this.retryCount++
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: '',
      })
    }
  }

  private handleReload = () => {
    window.location.reload()
  }

  private handleGoHome = () => {
    window.location.href = '/'
  }

  private handleReportBug = () => {
    const errorData = {
      errorId: this.state.errorId,
      message: this.state.error?.message,
      stack: this.state.error?.stack,
      url: window.location.href,
      timestamp: new Date().toISOString(),
    }

    // In a real application, you would open a bug report form or send to support
    const bugReportUrl = `/support?error=${encodeURIComponent(JSON.stringify(errorData))}`
    window.open(bugReportUrl, '_blank')
  }

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              {/* Error Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-10 h-10 text-red-400" />
                </div>
              </div>

              {/* Error Message */}
              <h1 className="text-3xl font-bold text-white mb-4">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-300 mb-6 text-lg">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
              </p>

              {/* Error ID */}
              <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-400 mb-2">Error ID:</p>
                <code className="text-cyan-400 font-mono text-sm">
                  {this.state.errorId}
                </code>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                {this.retryCount < this.maxRetries && (
                  <button
                    onClick={this.handleRetry}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <RefreshCw className="w-5 h-5 mr-2" />
                    Try Again
                  </button>
                )}
                
                <button
                  onClick={this.handleReload}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Reload Page
                </button>
                
                <button
                  onClick={this.handleGoHome}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Go Home
                </button>
              </div>

              {/* Report Bug Button */}
              <button
                onClick={this.handleReportBug}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center justify-center mx-auto"
              >
                <Bug className="w-4 h-4 mr-2" />
                Report this issue
              </button>

              {/* Error Details (Development Only) */}
              {this.props.showDetails && this.state.error && process.env.NODE_ENV === 'development' && (
                <details className="mt-8 text-left">
                  <summary className="text-gray-400 cursor-pointer hover:text-white transition-colors duration-300 mb-4">
                    Error Details (Development)
                  </summary>
                  <div className="bg-slate-900/50 rounded-lg p-4 overflow-auto">
                    <div className="mb-4">
                      <h4 className="text-red-400 font-semibold mb-2">Error Message:</h4>
                      <code className="text-red-300 text-sm break-words">
                        {this.state.error.message}
                      </code>
                    </div>
                    
                    {this.state.error.stack && (
                      <div className="mb-4">
                        <h4 className="text-red-400 font-semibold mb-2">Stack Trace:</h4>
                        <pre className="text-gray-300 text-xs overflow-auto whitespace-pre-wrap">
                          {this.state.error.stack}
                        </pre>
                      </div>
                    )}
                    
                    {this.state.errorInfo?.componentStack && (
                      <div>
                        <h4 className="text-red-400 font-semibold mb-2">Component Stack:</h4>
                        <pre className="text-gray-300 text-xs overflow-auto whitespace-pre-wrap">
                          {this.state.errorInfo.componentStack}
                        </pre>
                      </div>
                    )}
                  </div>
                </details>
              )}

              {/* Retry Count */}
              {this.retryCount > 0 && (
                <p className="text-sm text-gray-500 mt-4">
                  Retry attempts: {this.retryCount}/{this.maxRetries}
                </p>
              )}
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default EnhancedErrorBoundary