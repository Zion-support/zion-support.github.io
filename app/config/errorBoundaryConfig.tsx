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
   * Custom error message to display
   */
  customMessage?: string
  /**
   * Whether to enable error reporting
   */
  enableReporting: boolean
  /**
   * Error reporting endpoint
   */
  reportingEndpoint?: string
  /**
   * Fallback UI components
   */
  fallbackComponents: {
    /**
     * Main error component
     */
    ErrorComponent: React.ComponentType<{ error: Error; resetError: () => void }>
    /**
     * Loading component
     */
    LoadingComponent: React.ComponentType
  }
}

export const defaultErrorBoundaryConfig: ErrorBoundaryConfig = {
  logErrors: true,
  showDetails: false,
  enableReporting: true,
  reportingEndpoint: '/api/errors',
  fallbackComponents: {
    ErrorComponent: ({ resetError }) => (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-lg font-medium text-gray-900 text-center mb-2">
            Something went wrong
          </h2>
          <p className="text-sm text-gray-500 text-center mb-4">
            We're sorry, but something unexpected happened. Please try again.
          </p>
          <button
            onClick={resetError}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Try again
          </button>
        </div>
      </div>
    ),
    LoadingComponent: () => (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }
}