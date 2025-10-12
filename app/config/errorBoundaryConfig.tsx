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
   * Custom error messages
   */
  customMessages?: {
    generic?: string
    network?: string
    timeout?: string
    notFound?: string
  }
  /**
   * Retry configuration
   */
  retryConfig?: {
    maxRetries: number
    retryDelay: number
    exponentialBackoff: boolean
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
    generic: 'Something went wrong. Please try again.',
    network: 'Network error. Please check your connection.',
    timeout: 'Request timed out. Please try again.',
    notFound: 'The requested resource was not found.'
  },
  retryConfig: {
    maxRetries: 3,
    retryDelay: 1000,
    exponentialBackoff: true
  }
}

export const ErrorBoundaryContext = React.createContext<ErrorBoundaryConfig>(defaultErrorBoundaryConfig)

export const useErrorBoundaryConfig = () => {
  const context = React.useContext(ErrorBoundaryContext)
  if (!context) {
    throw new Error('useErrorBoundaryConfig must be used within an ErrorBoundaryProvider')
  }
  return context
}

export const ErrorBoundaryProvider: React.FC<{
  children: React.ReactNode
  config?: Partial<ErrorBoundaryConfig>
}> = ({ children, config = {} }) => {
  const mergedConfig = { ...defaultErrorBoundaryConfig, ...config }

  return (
    <ErrorBoundaryContext.Provider value={mergedConfig}>
      {children}
    </ErrorBoundaryContext.Provider>
  )
}