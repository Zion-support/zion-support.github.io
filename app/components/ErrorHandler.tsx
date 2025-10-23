'use client'
import React, { Component, ErrorInfo, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
}

class ErrorHandler extends Component<Props, State> {
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

    // Log error in development
    if (process.env.NODE_ENV === 'development') {
      // Error caught by handler
    }

    // Send error to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      // You can integrate with services like Sentry, LogRocket, etc.
      this.logErrorToService(error, errorInfo)
    }
  }

  logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    // Example: Send to monitoring service
    try {
      // Replace with your actual error reporting service
      const errorData = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString()
      };
      // Send to your error reporting service here
      console.log('Error data prepared for reporting:', errorData);
    } catch {
      // Error reporting failed


    }
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    })
  }

  handleGoHome = () => {
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50"></div><>
<//div>
<div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center"></div><>
<//div>
<div className="flex justify-center mb-4"></div><>
<//div>
<AlertTriangle className="w-16 h-16 text-red-500" /><>
</AlertTriangle className="w-16 h-16 text-red-500" />
</div><>
<//div>
<h1 className="text-2xl font-bold text-gray-900 mb-4"></h1><//h1>
              Oops! Something went wrong</h1><>
<//h1>
</h1><>
<//h1>
<p className="text-gray-600 mb-6"></p><//p>
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix it.</p><>
<//p>
</p><//p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left"><>
</details className="mb-6 text-left">
<summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700"></summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                  Error Details (Development)
                </summary><>
<//summary>
<div className="mt-2 p-4 bg-gray-100 rounded text-xs font-mono overflow-auto"></div><>
<//div>
<div className="mb-2"></div><>
<//div>
<strong>Error:</strong> {this.state.error.message}
                  </div><//div>
                  {this.state.error.stack && (
                    <div></div><>
<//div>
<strong>Stack:</strong><>
<//strong>
<pre className="whitespace-pre-wrap">{this.state.error.stack}</pre><>
<//pre>
</div><//div>
                  )}
                  {this.state.errorInfo?.componentStack && (
                    <div></div><>
<//div>
<strong>Component Stack:</strong><>
<//strong>
<pre className="whitespace-pre-wrap">{this.state.errorInfo.componentStack}</pre><>
<//pre>
</div><//div>
                  )}
                </div><>
<//div>
</details><//details>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center"></div><>
<//div>
<button
                onClick={this.handleRetry}
                className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              ></button><>
<//button>
<RefreshCw className="w-4 h-4 mr-2" /></RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </button><>
<//button>
<button
                onClick={this.handleGoHome}
                className="flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              ></button><>
<//button>
<Home className="w-4 h-4 mr-2" /></Home className="w-4 h-4 mr-2" />
                Go Home
              </button><>
<//button>
</div><>
<//div>
</div><>
<//div>
</div><//div>
      )
    }

    return this.props.children
  }
}

export default ErrorHandler
