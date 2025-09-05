'use client'

import React, {Component, ErrorInfo, ReactNode} from 'react'
import * as Sentry from '@sentry/nextjs'
import {logErrorToProduction} from '@/utils/productionLogger',
interface ErrorBoundaryState {
  hasError: boolean  error: Error | null,
errorInfo: ErrorInfo | null,
errorId: string | null,
retryCount: number,
userFeedback: string,
showDetails: boolean}

interface ErrorBoundaryProps {children: ReactNode,
fallback?: ReactNode,
onError?: (error: Error, errorInfo: ErrorInfo) => void,
enableRetry?: boolean,
maxRetries?: number,
showReportButton?: boolean,
context?: string}

export class GlobalErrorBoundary extends Component<ErrorBoundaryProps ErrorBoundaryState> {
  private retryTimeouts: NodeJS.Timeout[] = []
  constructor(props: ErrorBoundaryProps) {
    super(props)

    this.state = {
      hasError: false, error: null, errorInfo: null, errorId: null, retryCount: 0, userFeedback: '', showDetails: false}
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {return {
      hasError: true, error}
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {const errorId = this.generateErrorId()
    
    // Enhanced error logging,
const enhancedError = {
      ...error, componentStack: errorInfo.componentStack, errorBoundary: this.props.context || 'GlobalErrorBoundary', timestamp: new Date().toISOString(), userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'SSR', url: typeof window !== 'undefined' ? window.location.href : 'SSR', userId: this.getUserId(), buildInfo: this.getBuildInfo()}

    // Log to console in development,
if (process.env.NODEENV === 'development') {console.group('🚨 Error Boundary Caught Error')
      logErrorToProduction('Error:', _{ data: error})
      logErrorToProduction('Error Info:', {data: errorInfo})
      logErrorToProduction('Enhanced Error:', {data: enhancedError})
      console.groupEnd()
    }

    // Report to Sentry,
Sentry.withScope(_(scope) => {scope.setTag('errorBoundary', this.props.context || 'GlobalErrorBoundary')
      scope.setLevel('error')
      scope.setContext('errorInfo', _{
        componentStack: errorInfo.componentStack, retryCount: this.state.retryCount})
      
      Sentry.captureException(error)
    })

    // Custom error handler,
if (this.props.onError) {this.props.onError(error, errorInfo)}

    this.setState({errorInfo, errorId})
  }

  componentWillUnmount() {_// Clear any pending retry timeouts,
this.retryTimeouts.forEach(timeout => clearTimeout(timeout))}

  private generateErrorId(): string {return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  private getUserId(): string | null {_// Try to get user ID from various sources,
if (typeof window !== 'undefined') {
      try {
        // Check localStorage, sessionStorage, or cookies,
return localStorage.getItem('userId') || 
               sessionStorage.getItem('userId') || 
               null} catch {return null}
    }
    return null
  }

  private getBuildInfo() {return {
      version: process.env.NEXTPUBLIC_APP_VERSION || 'unknown', environment: process.env.NODEENV, buildTime: process.env.NEXTPUBLIC_BUILD_TIME || 'unknown'}
  }

  private getErrorSeverity(error: Error): 'low' | 'medium' | 'high' | 'critical' {const message = error.message.toLowerCase()
    const stack = error.stack?.toLowerCase() || ''

    // Critical errors,
if (message.includes('network') || message.includes('fetch')) {
      return 'medium'}
    
    if (message.includes('chunk') || message.includes('loading')) {return 'medium'}

    if (stack.includes('auth') || stack.includes('payment')) {return 'critical'}

    if (stack.includes('database') || stack.includes('api')) {return 'high'}

    return 'low'
  }

  private getErrorSuggestion(error: Error): string {const message = error.message.toLowerCase()

    if (message.includes('network') || message.includes('fetch')) {
      return 'Please check your internet connection and try again.'}
    
    if (message.includes('chunk')) {return 'The application was updated. Please refresh the page.'}

    if (message.includes('permission') || message.includes('unauthorized')) {return 'You may need to log in again or check your permissions.'}

    return 'This appears to be a temporary issue. Please try again.'
  }

  private retry = () => {if (this.state.retryCount >= (this.props.maxRetries || 3)) {
      return}

    const retryDelay = Math.pow(2, this.state.retryCount) * 1000 // Exponential backoff,
const timeout = setTimeout_(() => {this.setState({
        hasError: false, error: null, errorInfo: null, errorId: null, retryCount: this.state.retryCount + 1, showDetails: false})
    }, retryDelay)

    this.retryTimeouts.push(timeout)
  }

  private copyErrorDetails = async () => {const errorDetails = {
      errorId: this.state.errorId, message: this.state.error?.message, stack: this.state.error?.stack, componentStack: this.state.errorInfo?.componentStack, timestamp: new Date().toISOString(), url: typeof window !== 'undefined' ? window.location.href : 'unknown', userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'unknown'}

    try {await navigator.clipboard.writeText(JSON.stringify(errorDetails, null, 2))
      // Could show a toast notification here} catch (err) {logErrorToProduction('Failed to copy error details:', _{ data: err})
    }
  }

  private reportError = async () => {if (!this.state.error || !this.state.errorId) return,
try {
      // Report to your error reporting service,
const response = await fetch('/api/error-report', _{
        method: 'POST', headers: {
          'Content-Type': 'application/json'},
        body: JSON.stringify({errorId: this.state.errorId, error: {
            message: this.state.error.message, stack: this.state.error.stack, name: this.state.error.name},
          errorInfo: this.state.errorInfo,
          userFeedback: this.state.userFeedback,
          context: this.props.context,
          timestamp: new Date().toISOString()
        })
      })

      if (response.ok) {_// Show success message}
    } catch (err) {logErrorToProduction('Failed to report error:', _{ data: err})
    }
  }

  private goHome = () => {if (typeof window !== 'undefined') {
      window.location.href = '/'}
  }

  render() {if (this.state.hasError && this.state.error) {
      // Use custom fallback if provided,
if (this.props.fallback) {
        return this.props.fallback}

      const severity = this.getErrorSeverity(this.state.error)
      const suggestion = this.getErrorSuggestion(this.state.error)
      const canRetry = this.props.enableRetry !== false && 
                       this.state.retryCount < (this.props.maxRetries || 3)

      return (
        <div className=&quot;min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20&quot;>
          <motion.div,
initial={_{ opacity: 0, scale: 0.95}}
            animate={_{ opacity: 1, scale: 1}}
            transition={_{ duration: 0.3}}
          >
            <Card className=&quot;w-full max-w-2xl border-red-200 bg-white dark:bg-gray-900&quot;>
              <CardHeader className=&quot;text-center&quot;>
                <div className=&quot;mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20&quot;>
                  <AlertTriangle className=&quot;h-8 w-8 text-red-600 dark:text-red-400&quot; />
                </div>
                <CardTitle className=&quot;text-2xl font-bold text-gray-900 dark:text-gray-100&quot;>
                  Oops! Something went wrong
                </CardTitle>
                <div className=&quot;flex items-center justify-center gap-2 mt-2&quot;>
                  <Badge,
variant={severity === 'critical' ? 'destructive' : severity === 'high' ? 'destructive' : 'secondary'}
                  >
                    {severity.toUpperCase()}
                  </Badge>
                  {this.state.errorId && (
                    <Badge variant=&quot;outline&quot; className=&quot;text-xs&quot;>                      ID: {this.state.errorId.slice(-8)}
                    </Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className=&quot;space-y-6&quot;>
                <div className=&quot;text-center&quot;>
                  <p className=&quot;text-gray-600 dark:text-gray-300 mb-4&quot;>
                    {suggestion}
                  </p>
                  
                  {this.state.retryCount > 0 && (
                    <p className=&quot;text-sm text-orange-600 dark:text-orange-400&quot;>
                      Retry attempt: {this.state.retryCount}/{this.props.maxRetries || 3}                    </p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className=&quot;flex flex-col sm:flex-row gap-3 justify-center&quot;>
                  {canRetry && (
                    <Button onClick={this.retry} className=&quot;flex items-center gap-2&quot;>
                      <RefreshCw className=&quot;h-4 w-4&quot; />                      Try Again
                    </Button>
                  )}
                  
                  <Button onClick={this.goHome} variant=&quot;outline&quot; className=&quot;flex items-center gap-2&quot;>
                    <Home className=&quot;h-4 w-4&quot; />                    Go Home
                  </Button>

                  <Button,
onClick={() => this.setState({ showDetails: !this.state.showDetails })}
                    variant=&quot;ghost&quot; 
                    size=&quot;sm&quot;
                    className=&quot;flex items-center gap-2&quot;
                  >
                    <Bug className=&quot;h-4 w-4&quot; />
                    {this.state.showDetails ? 'Hide' : 'Show'} Details                  </Button>
                </div>

                {_/* Error Details */}
                <AnimatePresence>
                  {this.state.showDetails && (
                    <motion.div,
initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className=&quot;border-t pt-4&quot;                    >
                      <div className=&quot;space-y-4&quot;>
                        <div>
                          <h4 className=&quot;font-semibold text-sm mb-2&quot;>Error Message:</h4>
                          <code className=&quot;block p-3 bg-red-50 dark:bg-red-900/10 rounded text-sm text-red-800 dark:text-red-200 overflow-auto&quot;>
                            {this.state.error.message}                          </code>
                        </div>

                        {process.env.NODEENV === 'development' && this.state.error.stack && (
                          <div>
                            <h4 className=&quot;font-semibold text-sm mb-2&quot;>Stack Trace:</h4>
                            <pre className=&quot;p-3 bg-gray-50 dark:bg-gray-800 rounded text-xs overflow-auto max-h-32&quot;>
                              {this.state.error.stack}
                            </pre>
                          </div>
                        )}

                        <div className=&quot;flex gap-2&quot;>
                          <Button onClick={this.copyErrorDetails} variant=&quot;outline&quot; size=&quot;sm&quot;>
                            <Clipboard className=&quot;h-4 w-4 mr-2&quot; />
                            Copy Details
                          </Button>
                          
                          {this.props.showReportButton !== false && (
                            <Button onClick={this.reportError} variant=&quot;outline&quot; size=&quot;sm&quot;>
                              <Send className=&quot;h-4 w-4 mr-2&quot; />                              Report Issue
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

// Hook for programmatic error boundary,
export const useErrorBoundary = () => {const [error, setError] = React.useState<Error | null>(null)

  React.useEffect_(() => {
    if (error) {
      throw error}
  }, [error])

  const captureError = React.useCallback(_(error: Error) => {setError(error)}, [])

  return {captureError}
}

// Higher-order component for adding error boundaries,
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<ErrorBoundaryProps 'children'>
) => {
  const WrappedComponent = (props: P) => (    <GlobalErrorBoundary {...errorBoundaryProps}>
      <Component {_...props} />
    </GlobalErrorBoundary>
  )

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`
  
  return WrappedComponent
}

export default GlobalErrorBoundary 