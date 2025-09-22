'use client'

import { Component, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Bug, Home, Mail, Github } from 'lucide-react'
import Button from './Button'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void
  showErrorDetails?: boolean
  enableErrorReporting?: boolean
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: React.ErrorInfo
  errorId?: string
  retryCount: number
}

export default class ErrorBoundary extends Component<Props, State> {
  private maxRetries = 3

  constructor(props: Props) {
    super(props)
    this.state = { 
      hasError: false, 
      retryCount: 0 
    }
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    return { 
      hasError: true, 
      error,
      errorId
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    
    this.setState({ errorInfo })

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }

    // Enhanced error reporting
    if (this.props.enableErrorReporting !== false) {
      this.reportError(error, errorInfo)
    }
  }

  private reportError = (error: Error, errorInfo: React.ErrorInfo) => {
    const errorReport = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      retryCount: this.state.retryCount,
      // Additional context
      timestamp: Date.now(),
      buildId: process.env.NEXT_PUBLIC_BUILD_ID || 'unknown',
      version: process.env.NEXT_PUBLIC_APP_VERSION || 'unknown'
    }

    // Send to error reporting service
    try {
      fetch('/api/errors/report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorReport)
      }).catch(() => {
        // Silently fail if error reporting endpoint is not available
        console.warn('Failed to report error to server')
      })
    } catch (reportingError) {
      console.warn('Failed to send error report:', reportingError)
    }

    // Log to console with structured format
    console.group('🚨 Error Report')
    console.error('Error:', error)
    console.error('Error Info:', errorInfo)
    console.error('Error ID:', this.state.errorId)
    console.error('Retry Count:', this.state.retryCount)
    console.groupEnd()
  }

  handleReset = () => {
    const newRetryCount = this.state.retryCount + 1
    
    if (newRetryCount <= this.maxRetries) {
      this.setState({ 
        hasError: false, 
        error: undefined, 
        errorInfo: undefined,
        retryCount: newRetryCount
      })
    } else {
      // After max retries, redirect to home
      window.location.href = '/'
    }
  }

  handleGoHome = () => {
    window.location.href = '/'
  }

  handleReportBug = () => {
    const { error, errorInfo, errorId } = this.state
    const subject = encodeURIComponent(`Bug Report - Error ID: ${errorId}`)
    const body = encodeURIComponent(`
Error Details:
- Error ID: ${errorId}
- Message: ${error?.message || 'Unknown error'}
- URL: ${window.location.href}
- User Agent: ${navigator.userAgent}
- Timestamp: ${new Date().toISOString()}

Please describe what you were doing when this error occurred:
[Your description here]

Stack Trace:
${error?.stack || 'No stack trace available'}

Component Stack:
${errorInfo?.componentStack || 'No component stack available'}
    `)

    window.open(`mailto:support@ziontechgroup.com?subject=${subject}&body=${body}`)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      const { error, errorInfo, retryCount } = this.state
      const canRetry = retryCount < this.maxRetries
      const showDetails = this.props.showErrorDetails !== false && process.env.NODE_ENV === 'development'

      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
          <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 text-center border border-white/20">
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-10 h-10 text-red-400" />
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h2>
            
            <p className="text-gray-300 mb-6 text-lg">
              We're sorry for the inconvenience. An unexpected error has occurred.
              {retryCount > 0 && (
                <span className="block mt-2 text-sm text-yellow-400">
                  Attempt {retryCount + 1} of {this.maxRetries + 1}
                </span>
              )}
            </p>

            {showDetails && error && (
              <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-6 mb-6 text-left backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Bug className="w-5 h-5 text-red-400" />
                  <h3 className="font-semibold text-red-300">Error Details (Development)</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-red-200 font-medium">Error ID:</span>
                    <span className="text-red-300 ml-2 font-mono text-sm">{this.state.errorId}</span>
                  </div>
                  <div>
                    <span className="text-red-200 font-medium">Message:</span>
                    <pre className="text-sm text-red-300 whitespace-pre-wrap mt-1 p-2 bg-red-950/30 rounded border">
                      {error.message}
                    </pre>
                  </div>
                  {error.stack && (
                    <div>
                      <span className="text-red-200 font-medium">Stack Trace:</span>
                      <pre className="text-xs text-red-300 whitespace-pre-wrap overflow-auto max-h-32 mt-1 p-2 bg-red-950/30 rounded border">
                        {error.stack}
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {canRetry && (
                <button
                  onClick={this.handleReset}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200 font-medium inline-flex items-center justify-center"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Try Again
                </button>
              )}
              
              <button
                onClick={this.handleGoHome}
                className="border border-gray-300 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200 font-medium inline-flex items-center justify-center"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </button>

              <button
                onClick={this.handleReportBug}
                className="border border-gray-300 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200 font-medium inline-flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Report Bug
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                If this problem persists, please contact our support team with Error ID: 
                <span className="font-mono text-blue-400 ml-1">{this.state.errorId}</span>
              </p>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}