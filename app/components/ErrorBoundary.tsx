'use client'
import React, { Component, ErrorInfo, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
    this.setState({ error, errorInfo })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full text-center">
            {/* Error Icon */}
            <div className="relative mb-8">
              <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text animate-pulse">
                Oops!
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500/20 rounded-full animate-bounce">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
            </div>

            {/* Error Message */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Something went wrong
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              We&apos;re sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>

            {/* Error Details (Development only) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-8 p-4 bg-red-900/20 border border-red-500/50 rounded-lg text-left">
                <h3 className="text-red-400 font-semibold mb-2">Error Details:</h3>
                <pre className="text-red-300 text-sm overflow-auto">
                  {this.state.error.toString()}
                </pre>
                {this.state.errorInfo && (
                  <pre className="text-red-300 text-sm overflow-auto mt-2">
                    {this.state.errorInfo.componentStack}
                  </pre>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Try Again
              </button>
              
              <Link
                href="/"
                className="bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300 flex items-center justify-center"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
            </div>

            {/* Additional Help */}
            <div className="mt-12">
              <p className="text-gray-400 mb-4">Still having trouble?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Contact Support
                </Link>
                <Link href="/status" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Check Status
                </Link>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary