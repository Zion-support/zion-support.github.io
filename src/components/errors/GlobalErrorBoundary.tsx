'use client'
import React, { Component, ErrorInfo, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle, RefreshCw, Home, Bug, Send, Clipboard } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
  retryCount: number;
  userFeedback: string;
  showDetails: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableRetry?: boolean;
  maxRetries?: number;
  showReportButton?: boolean;
  context?: string;
}

export class GlobalErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  private retryTimeouts: NodeJS.Timeout[] = []

  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
      retryCount: 0,
      userFeedback: '',
      showDetails: false,
    }
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
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
      console.error('ErrorBoundary caught an error:', error, errorInfo)
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }
  }

  componentWillUnmount() {
    // Clear any pending retry timeouts
    this.retryTimeouts.forEach(timeout => clearTimeout(timeout))
  }

  handleRetry = () => {
    const { maxRetries = 3 } = this.props
    const { retryCount } = this.state

    if (retryCount < maxRetries) {
      this.setState(prevState => ({
        hasError: false,
        error: null,
        errorInfo: null,
        retryCount: prevState.retryCount + 1,
      }))
    }
  }

  handleGoHome = () => {
    window.location.href = '/'
  }

  handleRefresh = () => {
    window.location.reload()
  }

  handleFeedbackChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ userFeedback: e.target.value })
  }

  handleSendFeedback = () => {
    const { error, errorId, userFeedback } = this.state
    console.log('User feedback:', { errorId, feedback: userFeedback, error: error?.message })
    // Here you would typically send the feedback to your backend
    this.setState({ userFeedback: '' })
  }

  toggleDetails = () => {
    this.setState(prevState => ({ showDetails: !prevState.showDetails }))
  }

  render() {
    const { hasError, error, errorInfo, retryCount, userFeedback, showDetails } = this.state
    const { children, fallback, enableRetry = true, maxRetries = 3, showReportButton = true } = this.props

    if (hasError) {
      if (fallback) {
        return fallback
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle className="flex items-center text-red-600">
                <AlertTriangle className="h-6 w-6 mr-2" />
                Something went wrong
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <Bug className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Oops! We encountered an error
                </h2>
                <p className="text-gray-600 mb-6">
                  We're sorry for the inconvenience. Our team has been notified and is working to fix this issue.
                </p>
              </div>

              {showReportButton && (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-2">
                      Help us improve by sharing what you were doing when this error occurred:
                    </label>
                    <textarea
                      id="feedback"
                      value={userFeedback}
                      onChange={this.handleFeedbackChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={3}
                      placeholder="Describe what you were doing when the error occurred..."
                    />
                  </div>
                  <Button onClick={this.handleSendFeedback} className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Feedback
                  </Button>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                {enableRetry && retryCount < maxRetries && (
                  <Button onClick={this.handleRetry} className="flex-1">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Try Again ({retryCount}/{maxRetries})
                  </Button>
                )}
                <Button onClick={this.handleRefresh}  className="flex-1">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh Page
                </Button>
                <Button onClick={this.handleGoHome}  className="flex-1">
                  <Home className="h-4 w-4 mr-2" />
                  Go Home
                </Button>
              </div>

              {process.env.NODE_ENV === 'development' && error && (
                <div className="mt-6">
                  <Button
                    onClick={this.toggleDetails}
                    
                    size="sm"
                    className="mb-3"
                  >
                    <Clipboard className="h-4 w-4 mr-2" />
                    {showDetails ? 'Hide' : 'Show'} Error Details
                  </Button>
                  {showDetails && (
                    <div className="bg-gray-100 p-4 rounded-md text-sm font-mono overflow-auto">
                      <div className="text-red-600 font-bold mb-2">Error:</div>
                      <div className="mb-4">{error.message}</div>
                      {errorInfo && (
                        <>
                          <div className="text-red-600 font-bold mb-2">Component Stack:</div>
                          <div className="whitespace-pre-wrap">{errorInfo.componentStack}</div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )
    }

    return children
  }
}

// HOC for wrapping components with error boundary
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<ErrorBoundaryProps, 'children'>
) {
  const WrappedComponent = (props: P) => (
    <GlobalErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </GlobalErrorBoundary>
  )
  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`
  return WrappedComponent
}

export default GlobalErrorBoundary