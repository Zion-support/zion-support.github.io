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
   * Custom error message
   */
  customMessage?: string
  /**
   * Whether to enable retry functionality
   */
  enableRetry: boolean
  /**
   * Maximum number of retry attempts
   */
  maxRetries: number
  /**
   * Retry delay in milliseconds
   */
  retryDelay: number
  /**
   * Whether to show error boundary in production
   */
  showInProduction: boolean
  /**
   * Custom error component
   */
  customErrorComponent?: React.ComponentType<{
    error: Error
    errorInfo: React.ErrorInfo
    retry: () => void
  }>
}

export const defaultErrorBoundaryConfig: ErrorBoundaryConfig = {
  logErrors: true,
  showDetails: process.env.NODE_ENV === 'development',
  reportErrors: process.env.NODE_ENV === 'production',
  reportingEndpoint: process.env.REACT_APP_ERROR_REPORTING_ENDPOINT,
  showErrorOverlay: process.env.NODE_ENV === 'development',
  maxStoredErrors: 10,
  customMessage: 'Something went wrong. Please try again.',
  enableRetry: true,
  maxRetries: 3,
  retryDelay: 1000,
  showInProduction: true
}

export const createErrorBoundaryConfig = (overrides: Partial<ErrorBoundaryConfig> = {}): ErrorBoundaryConfig => {
  return {
    ...defaultErrorBoundaryConfig,
    ...overrides
  }
}

export const errorBoundaryConfigs = {
  development: createErrorBoundaryConfig({
    showDetails: true,
    showErrorOverlay: true,
    logErrors: true,
    reportErrors: false
  }),
  production: createErrorBoundaryConfig({
    showDetails: false,
    showErrorOverlay: false,
    logErrors: false,
    reportErrors: true
  }),
  testing: createErrorBoundaryConfig({
    showDetails: true,
    showErrorOverlay: false,
    logErrors: false,
    reportErrors: false,
    enableRetry: false
  })
}

export default defaultErrorBoundaryConfig