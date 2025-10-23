import React, { Component, ErrorInfo, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react'

interface AdvancedErrorBoundaryProps {
  children: ReactNode;
  className?: string;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorReport {
  errorId: string;
  error: Error;
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
  errorId?: string
}

class AdvancedErrorBoundary extends Component<AdvancedErrorBoundaryProps, State> {
  constructor(props: AdvancedErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  private generateErrorId = (): string => {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    const errorReport: ErrorReport = {
      errorId: this.state.errorId || this.generateErrorId(),
      error,
    }
    // You can send this to your error reporting service
    console.error('Error Report:', errorReport)
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
      errorId: this.generateErrorId()
    })
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo)
    }
    
    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo)
    }
  }

  logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    // You can integrate with services like Sentry, LogRocket, etc.
    const errorData = {
      error: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    }
    
    // Example: Send to your error reporting service
    // fetch('/api/error-report', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(errorData)
    // })
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined })
  }

  handleGoHome = () => {
    window.location.href = '/'
  }

  handleReportError = () => {
    if (this.state.error) {
      this.reportError(this.state.error, this.state.errorInfo!)
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={`min-h-screen bg-gradient-to-br from-red-900 via-gray-900 to-red-900 flex items-center justify-center p-4 ${this.props.className || ''}`}>
          <div className="max-w-2xl w-full text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-red-500/30">
              <div className="flex items-center justify-center mb-6">
                <AlertTriangle className="w-16 h-16 text-red-400" />
              </div>
              
              <h1 className="text-3xl font-bold text-white mb-4">Something went wrong</h1>
              <p className="text-gray-300 mb-6">
                We&apos;re sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
              </p>
              
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="bg-red-900/50 rounded-lg p-4 mb-6 text-left">
                  <h3 className="text-red-300 font-semibold mb-2">Error Details:</h3>
                  <pre className="text-red-200 text-sm overflow-auto">
                    {this.state.error.message}
                    {this.state.error.stack}
                  </pre>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={this.handleRetry}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Try Again
                </button>
                
                <button
                  onClick={this.handleGoHome}
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Go Home
                </button>
                
                <button
                  onClick={this.handleReportError}
                  className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Report Issue
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default AdvancedErrorBoundary
