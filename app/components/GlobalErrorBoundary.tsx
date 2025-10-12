'use client'
import React, { Component, ErrorInfo, ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react'

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
    console.error('GlobalErrorBoundary caught an error:', error, errorInfo)
    this.setState({
      error,
      errorInfo
    })
  }

  handleReload = () => {
    window.location.reload()
  }

  handleGoHome = () => {
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center px-4">
          <Helmet>
            <title>Error - Zion Tech Group</title>
            <meta name="description" content="An error occurred. Please try again or contact support." />
          </Helmet>
          
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-10 h-10 text-red-400" />
              </div>
              
              <h1 className="text-4xl font-bold text-white mb-4">
                Oops! Something went wrong
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
              </p>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6 text-left">
                  <h3 className="text-red-400 font-semibold mb-2">Error Details:</h3>
                  <pre className="text-red-300 text-sm overflow-auto">
                    {this.state.error.toString()}
                  </pre>
                  {this.state.errorInfo && (
                    <pre className="text-red-300 text-sm mt-2 overflow-auto">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  )}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={this.handleReload}
                  className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  <RefreshCw className="mr-2 h-5 w-5" />
                  Try Again
                </button>
                
                <button
                  onClick={this.handleGoHome}
                  className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Home className="mr-2 h-5 w-5" />
                  Go Home
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-gray-400 mb-4">
                  If this problem persists, please contact our support team:
                </p>
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  support@ziontechgroup.com
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

export default GlobalErrorBoundary