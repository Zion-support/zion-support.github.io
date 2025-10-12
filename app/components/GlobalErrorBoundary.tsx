'use client'
import React, { Component, ErrorInfo, ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
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
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
          <Helmet>
            <title>Error | Zion Tech Group</title>
            <meta name="description" content="An error occurred. Please try again." />
          </Helmet>
          
          <div className="text-center p-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-300 mb-8">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default GlobalErrorBoundary