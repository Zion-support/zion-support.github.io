'use client'
import React, { Component, ErrorInfo, ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
}

class GlobalErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Global Error Boundary caught an error:', error, errorInfo)
    this.setState({
      error,
      errorInfo
    })
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined })
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <Helmet>
            <title>Error - Zion Tech Group</title>
            <meta name="description" content="An error occurred while loading the page." />
          </Helmet>
          
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
              <div className="mb-6">
                <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-white mb-2">
                  Oops! Something went wrong
                </h1>
                <p className="text-gray-300 mb-6">
                  We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists.
                </p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={this.handleReset}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  <RefreshCw className="mr-2 w-5 h-5" />
                  Try Again
                </button>
                
                <button
                  onClick={() => window.location.href = '/'}
                  className="w-full border border-gray-300 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Home className="mr-2 w-5 h-5" />
                  Go Home
                </button>
              </div>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-6 text-left">
                  <summary className="text-sm text-gray-400 cursor-pointer hover:text-white">
                    Error Details (Development)
                  </summary>
                  <div className="mt-2 p-4 bg-black/20 rounded-lg text-xs text-gray-300 overflow-auto max-h-40">
                    <pre>{this.state.error.toString()}</pre>
                    {this.state.errorInfo && (
                      <pre className="mt-2">{this.state.errorInfo.componentStack}</pre>
                    )}
                  </div>
                </details>
              )}
            </div>
          </div>
        </>
      )
    }

    return this.props.children
  }
}

export default GlobalErrorBoundary