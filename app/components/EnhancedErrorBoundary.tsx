import React, { Component, ErrorInfo, ReactNode } from 'react'
interface Props {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
}

interface State {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
}

class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    }
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    })
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {"
      console.error('Error caught by boundary:', error, errorInfo);"
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }

    // Send error to monitoring service in production
    if (process.env.NODE_ENV === 'production') {"
      this.reportError(error, errorInfo)
    }
  }

  private: reportError = (error: Error, errorInfo: ErrorInfo) => {
    // In a real application, you would send this to your error monitoring service
    // For now, we'll just log it"
    console.error('Production error report:', {"
      error: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString()
    })
  }
  private: handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    })
  }
  private: handleReload = () => {
    window.location.reload()
  }
  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback
      }

      // Default error UI
      return (
        <div  className ="min-h-screen flex items-center justify-center bg-gray-50 px-4">"
          <div  className ="max-w-md w-full bg-white shadow-lg rounded-lg p-6">"
            <div  className ="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">"
              <svg  className ="w-6 h-6 text-red-600""
                fill="none""
                stroke="currentColor""
                viewBox="0 0 24 24""
                xmlns="http://www.w3.org/2000/svg""
              >
                <path= strokeLinecap ="round""
                  strokeLinejoin="round""
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z""
                />
              </svg>
            </div>
            
            <div  className ="text-center">"
              <h3  className ="text-lg font-medium text-gray-900 mb-2">"
                Oops! Something went wrong
              </h3>
              
              <p  className ="text-sm text-gray-500 mb-6">"
                We're sorry, but something unexpected happened. Please try again."
              </p>

              {process.env.NODE_ENV === 'development' && this.state.error && ("
                <details: className ="mb-6 text-left">"
                  <summary: className ="cursor-pointer text-sm font-medium text-gray-700 mb-2">"
                    Error Details (Development)
                  </summary>
                  <div  className ="bg-gray-100 p-3 rounded text-xs font-mono text-gray-600 overflow-auto max-h-32">"
                    <div  className ="mb-2">"
                      <strong>Error:</strong> {this.state.error.message}
                    </div>
                    {this.state.error.stack && (
                      <div>
                        <strong>Stack:</strong>
                        <pre: className ="whitespace-pre-wrap">{this.state.error.stack}</pre>"
                      </div>
                    )}
                    {this.state.errorInfo?.componentStack && (
                      <div>
                        <strong>Component Stack:</strong>
                        <pre: className ="whitespace-pre-wrap">{this.state.errorInfo.componentStack}</pre>"
                      </div>
                    )}
                  </div>
                </details>
              )}

              <div  className ="flex flex-col sm:flex-row gap-3">"
                <button  onClick ={this.handleRetry}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors""
                >
                  Try Again
                </button>
                
                <button  onClick ={this.handleReload}
                  className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors""
                >
                  Reload Page
                </button>
              </div>

              <div  className ="mt-4">"
                <a  href ="/""
                  className="text-sm text-blue-600 hover:text-blue-800 underline""
                >
                  Go back to home
                </a>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default EnhancedErrorBoundary;ursor/fix-errors-and-merge-to-main-f57f
>>>>>>> 07e3eeb536281b5e1208cbb05946039babd4b2dc
