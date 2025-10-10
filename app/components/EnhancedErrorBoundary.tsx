'use client'
import React, { Component, ErrorInfo, ReactNode } from 'react'
interface Props {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
}

class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    })
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo)
    }

    // Send error to analytics/monitoring service
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag
      gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        error_info: errorInfo.componentStack
      })
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }

    // Send error report
    this.sendErrorReport(error, errorInfo)
  }

  sendErrorReport = (error: Error, errorInfo: ErrorInfo) => {
    const errorReport = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    }
    // Send error report to your error tracking service
    console.log('Error report:', errorReport)
    // You can implement actual error reporting here
    // e.g., send to Sentry, LogRocket, etc.
  }
  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined })
  }
  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback
      }

      // Default error UI
      return (
        <div> </div><div> </div><div> </div><svg> </svg><path> </path></svg>
            </div>
            
            <h1>Oops! Something went wrong
            </h1></h1>
            
            <p>We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.
            </p></p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details> </details><summary>Error Details (Development)
                </summary></summary>
                <div> </div><div> </div><strong>Error:</strong> {this.state.error.message}
                  </div>
                  <div> </div><strong>Stack:</strong>
                    <pre>{this.state.error.stack}
                    </pre></pre>
                  </div>
                  {this.state.errorInfo && (
                    <div> </div><strong>Component Stack:</strong>
                      <pre>{this.state.errorInfo.componentStack}
                      </pre></pre>
                    </div>
                  )}
                </div>
              </details>
            )}

            <div> </div><button>Try Again
              </button></button>
              
              <button
                onClick={() => window.location.href = '/'}
                className="w-full border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Go Home
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default EnhancedErrorBoundary