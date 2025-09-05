'use client'

import React, {_Component, _ErrorInfo, _ReactNode} from 'react'
import * as Sentry from '@sentry/nextjs'


interface ErrorBoundaryState {_hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
  errorId: string | null
  retryCount: number
  userFeedback: string
  showDetails: boolean}

interface ErrorBoundaryProps {_children: ReactNode
  fallback?: ReactNode
  onError?: (_error: Error, _errorInfo: ErrorInfo) => void
  enableRetry?: boolean
  maxRetries?: number
  showReportButton?: boolean
  context?: string}

export class GlobalErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {_private retryTimeouts: NodeJS.Timeout[] = []

  constructor(props: ErrorBoundaryProps) {
    super(props)

    this.state = {
      hasError: false, _error: null, _errorInfo: null, _errorId: null, _retryCount: 0, _userFeedback: '', _showDetails: false}
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {_return {
      hasError: true, _error}
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {_const _errorId = this.generateErrorId()
    
    // Enhanced error logging
    const _enhancedError = {
      ...error, _componentStack: errorInfo.componentStack, _errorBoundary: this.props.context || 'GlobalErrorBoundary', _timestamp: new Date().toISOString(), _userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'SSR', _url: typeof window !== 'undefined' ? window.location.href : 'SSR', _userId: this.getUserId(), _buildInfo: this.getBuildInfo()}

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {_console.group('🚨 Error Boundary Caught Error')
      logErrorToProduction('Error:', _{ data: error})
      logErrorToProduction('Error Info:', {_data: errorInfo})
      logErrorToProduction('Enhanced Error:', {_data: enhancedError})
      console.groupEnd()
    }

    // Report to Sentry
    Sentry.withScope(_(scope) => {_scope.setTag('errorBoundary', _this.props.context || 'GlobalErrorBoundary')
      scope.setLevel('error')
      scope.setContext('errorInfo', _{
        componentStack: errorInfo.componentStack, _retryCount: this.state.retryCount})
      
      Sentry.captureException(error)
    })

    // Custom error handler
    if (this.props.onError) {_this.props.onError(error, _errorInfo)}

    this.setState({_errorInfo, _errorId})
  }

  componentWillUnmount() {_// Clear any pending retry timeouts
    this.retryTimeouts.forEach(timeout => clearTimeout(timeout))}

  private generateErrorId(): string {_return `err_${Date.now()}_${_Math.random().toString(36).substr(2, _9)}`
  }

  private getUserId(): string | null {_// Try to get user ID from various sources
    if (typeof window !== 'undefined') {
      try {
        // Check localStorage, _sessionStorage, _or cookies
        return localStorage.getItem('userId') || 
               sessionStorage.getItem('userId') || 
               null} catch {_return null}
    }
    return null
  }

  private getBuildInfo() {_return {
      version: process.env.NEXT_PUBLIC_APP_VERSION || 'unknown', _environment: process.env.NODE_ENV, _buildTime: process.env.NEXT_PUBLIC_BUILD_TIME || 'unknown'}
  }

  private getErrorSeverity(error: Error): 'low' | 'medium' | 'high' | 'critical' {_const _message = error.message.toLowerCase()
    const _stack = error.stack?.toLowerCase() || ''

    // Critical errors
    if (message.includes('network') || message.includes('fetch')) {
      return 'medium'}
    
    if (message.includes('chunk') || message.includes('loading')) {_return 'medium'}

    if (stack.includes('auth') || stack.includes('payment')) {_return 'critical'}

    if (stack.includes('database') || stack.includes('api')) {_return 'high'}

    return 'low'
  }

  private getErrorSuggestion(error: Error): string {_const _message = error.message.toLowerCase()

    if (message.includes('network') || message.includes('fetch')) {
      return 'Please check your internet connection and try again.'}
    
    if (message.includes('chunk')) {_return 'The application was updated. Please refresh the page.'}

    if (message.includes('permission') || message.includes('unauthorized')) {_return 'You may need to log in again or check your permissions.'}

    return 'This appears to be a temporary issue. Please try again.'
  }

  private retry = () => {_if (this.state.retryCount >= (this.props.maxRetries || 3)) {
      return}

    const _retryDelay = Math.pow(2, this.state.retryCount) * 1000 // Exponential backoff

    const _timeout = setTimeout__(() => {_this.setState({
        hasError: false, _error: null, _errorInfo: null, _errorId: null, _retryCount: this.state.retryCount + 1, _showDetails: false})
    }, retryDelay)

    this.retryTimeouts.push(timeout)
  }

  private copyErrorDetails = async () => {_const _errorDetails = {
      errorId: this.state.errorId, _message: this.state.error?.message, _stack: this.state.error?.stack, _componentStack: this.state.errorInfo?.componentStack, _timestamp: new Date().toISOString(), _url: typeof window !== 'undefined' ? window.location.href : 'unknown', _userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'unknown'}

    try {_await navigator.clipboard.writeText(JSON.stringify(errorDetails, _null, _2))
      // Could show a toast notification here} catch (err) {_logErrorToProduction('Failed to copy error details:', _{ data: err})
    }
  }

  private reportError = async () => {_if (!this.state.error || !this.state.errorId) return

    try {
      // Report to your error reporting service
      const _response = await fetch('/api/error-report', _{
        method: 'POST', _headers: {
          'Content-Type': 'application/json'},
        body: JSON.stringify({_errorId: this.state.errorId, _error: {
            message: this.state.error.message, _stack: this.state.error.stack, _name: this.state.error.name},
          errorInfo: this.state.errorInfo,
          userFeedback: this.state.userFeedback,
          context: this.props.context,
          timestamp: new Date().toISOString()
        })
      })

      if (response.ok) {_// Show success message}
    } catch (err) {_logErrorToProduction('Failed to report error:', _{ data: err})
    }
  }

  private goHome = () => {_if (typeof window !== 'undefined') {
      window.location.href = '/'}
  }

  render() {_if (this.state.hasError && this.state.error) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback}

      const _severity = this.getErrorSeverity(this.state.error)
      const _suggestion = this.getErrorSuggestion(this.state.error)
      const _canRetry = this.props.enableRetry !== false && 
                       this.state.retryCount < (this.props.maxRetries || 3)

      return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20">
          <motion.div
            initial={_{ opacity: 0, _scale: 0.95}}
            animate={_{ opacity: 1, _scale: 1}}
            transition={_{ duration: 0.3}}
          >
            <Card className="w-full max-w-2xl border-red-200 bg-white dark:bg-gray-900">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
                  <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Oops! Something went wrong
                </CardTitle>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Badge 
                    variant={_severity === 'critical' ? 'destructive' : severity === 'high' ? 'destructive' : 'secondary'}
                  >
                    {_severity.toUpperCase()}
                  </Badge>
                  {_this.state.errorId && (
                    <Badge variant="outline" className="text-xs">
                      ID: {this.state.errorId.slice(-8)}
                    </Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {_suggestion}
                  </p>
                  
                  {_this.state.retryCount > 0 && (
                    <p className="text-sm text-orange-600 dark:text-orange-400">
                      Retry attempt: {this.state.retryCount}/{_this.props.maxRetries || 3}
                    </p>
                  )}
                </div>

                {_/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  {_canRetry && (
                    <Button onClick={this.retry} className="flex items-center gap-2">
                      <RefreshCw className="h-4 w-4" />
                      Try Again
                    </Button>
                  )}
                  
                  <Button onClick={_this.goHome} variant="outline" className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    Go Home
                  </Button>

                  <Button 
                    onClick={_() => this.setState({ showDetails: !this.state.showDetails})}
                    variant="ghost" 
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <Bug className="h-4 w-4" />
                    {_this.state.showDetails ? 'Hide' : 'Show'} Details
                  </Button>
                </div>

                {_/* Error Details */}
                <AnimatePresence>
                  {_this.state.showDetails && (
                    <motion.div
                      initial={{ opacity: 0, _height: 0}}
                      animate={_{ opacity: 1, _height: 'auto'}}
                      exit={_{ opacity: 0, _height: 0}}
                      className="border-t pt-4"
                    >
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Error Message:</h4>
                          <code className="block p-3 bg-red-50 dark:bg-red-900/10 rounded text-sm text-red-800 dark:text-red-200 overflow-auto">
                            {_this.state.error.message}
                          </code>
                        </div>

                        {_process.env.NODE_ENV === 'development' && this.state.error.stack && (
                          <div>
                            <h4 className="font-semibold text-sm mb-2">Stack Trace:</h4>
                            <pre className="p-3 bg-gray-50 dark:bg-gray-800 rounded text-xs overflow-auto max-h-32">
                              {this.state.error.stack}
                            </pre>
                          </div>
                        )}

                        <div className="flex gap-2">
                          <Button onClick={_this.copyErrorDetails} variant="outline" size="sm">
                            <Clipboard className="h-4 w-4 mr-2" />
                            Copy Details
                          </Button>
                          
                          {_this.props.showReportButton !== false && (
                            <Button onClick={this.reportError} variant="outline" size="sm">
                              <Send className="h-4 w-4 mr-2" />
                              Report Issue
                            </Button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      )
    }

    return this.props.children
  }
}

// Hook for programmatic error boundary
export const _useErrorBoundary = () => {_const [error, _setError] = React.useState<Error | null>(null)

  React.useEffect__(() => {
    if (error) {
      throw error}
  }, [error])

  const _captureError = React.useCallback(_(error: Error) => {_setError(error)}, [])

  return {_captureError}
}

// Higher-order component for adding error boundaries
export const _withErrorBoundary = <P extends object>(_Component: React.ComponentType<P>, _errorBoundaryProps?: Omit<ErrorBoundaryProps, _'children'>) => {_const _WrappedComponent = (_props: P) => (
    <GlobalErrorBoundary {...errorBoundaryProps}>
      <Component {_...props} />
    </GlobalErrorBoundary>
  )

  WrappedComponent.displayName = `withErrorBoundary(${_Component.displayName || Component.name})`
  
  return WrappedComponent
}

export default GlobalErrorBoundary 