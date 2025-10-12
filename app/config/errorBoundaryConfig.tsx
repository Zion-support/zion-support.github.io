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
    NetworkErrorFallback: React.ComponentType<any>
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
    'ChunkLoadError': 'A new version of the app is available. Please refresh the page.',
    'NetworkError': 'Network connection failed. Please check your internet connection.',
    'TimeoutError': 'The request timed out. Please try again.',
    'ValidationError': 'Please check your input and try again.',
    'AuthenticationError': 'Please log in to continue.',
    'AuthorizationError': 'You do not have permission to perform this action.',
    'NotFoundError': 'The requested resource was not found.',
    'ServerError': 'Something went wrong on our end. Please try again later.',
    'UnknownError': 'An unexpected error occurred. Please try again.'
  },
  fallbackComponents: {
    ErrorFallback: ({ error, resetError }: { error: Error; resetError: () => void }) => (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Something went wrong</h2>
          <p className="text-gray-600 mb-4">
            We're sorry, but something unexpected happened. Please try again.
          </p>
          <button
            onClick={resetError}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    ),
    LoadingFallback: () => (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    ),
    NetworkErrorFallback: ({ retry }: { retry: () => void }) => (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Network Error</h2>
          <p className="text-gray-600 mb-4">
            Please check your internet connection and try again.
          </p>
          <button
            onClick={retry}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }
}

export const createErrorBoundaryConfig = (overrides: Partial<ErrorBoundaryConfig> = {}): ErrorBoundaryConfig => {
  return {
    ...defaultErrorBoundaryConfig,
    ...overrides
  }
}