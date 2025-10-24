'use client'
import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
<<<<<<< HEAD
  children: ReactNode

interface State {
  hasError: boolean
  error?: Error
=======
  children: ReactNode,
}

interface State {
  hasError: boolean,
  error?: Error;
}
>>>>>>> cursor/fix-errors-and-merge-to-main-998c

class ErrorBoundaryWrapper extends Component<Props, State> {
  constructor(props: Props) {,
    super(props)
<<<<<<< HEAD
    this.state = { hasError: false}
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error}
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
=======
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {,
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {,
>>>>>>> cursor/fix-errors-and-merge-to-main-998c
    // Log error for debugging in development
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log('Error caught by boundary:', error, errorInfo)}
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <div className="text-center p-8"> </div><h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-6">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-emerald-600 hover: bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200",
            >
              Try Again
            </button>
          </div>
        </div>

    return this.props.children}
export default ErrorBoundaryWrapper