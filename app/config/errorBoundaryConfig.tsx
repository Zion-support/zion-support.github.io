/**
 * Error Boundary Configuration
 * Centralized configuration for error handling across the application
 */
import React from 'react'

export interface ErrorBoundaryConfig {
  /**
   * Whether to log errors to console
   */
  logErrors: boolean
  /**
   * Whether to show detailed error messages
   */
  showDetails: boolean
  /**
   * Whether to send errors to external service
   */
  reportErrors: boolean
  /**
   * Error reporting endpoint
   */
  reportingEndpoint?: string
  /**
   * Whether to show error overlay in development
   */
  showErrorOverlay: boolean
  /**
   * Maximum number of errors to store
   */
  maxStoredErrors: number
  /**
   * Custom error messages by error type
   */
  customMessages: Record<string, string>
  /**
   * Fallback UI components
   */
  fallbackComponents: {
    ErrorFallback: React.ComponentType<any>
    LoadingFallback: React.ComponentType<any>
  }
}

export const defaultErrorBoundaryConfig: ErrorBoundaryConfig = {
  logErrors: true,
  showDetails: process.env.NODE_ENV === 'development',
  reportErrors: process.env.NODE_ENV === 'production',
  reportingEndpoint: process.env.REACT_APP_ERROR_REPORTING_ENDPOINT,
  showErrorOverlay: process.env.NODE_ENV === 'development',
  maxStoredErrors: 10,
  customMessages: {
    'ChunkLoadError': 'The application has been updated. Please refresh the page.',
    'NetworkError': 'Network connection failed. Please check your internet connection.',
    'TimeoutError': 'The request timed out. Please try again.',
    'UnknownError': 'An unexpected error occurred. Please try again later.'
  },
  fallbackComponents: {
    ErrorFallback: ({ error, resetError }: { error: Error; resetError: () => void }) => (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h1 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix it.
            </p>
            <button
              onClick={resetError}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    ),
    LoadingFallback: () => (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white">Loading...</p>
        </div>
      </div>
    )
  }
}

export default defaultErrorBoundaryConfig