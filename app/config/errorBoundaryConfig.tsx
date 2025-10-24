'use client'
import React from 'react'

/**
 * Error Boundary Configuration
 * Centralized configuration for error handling across the application
 */

export interface ErrorBoundaryConfig {
  /**
   * Whether to log errors to console
   */
  logErrors: boolean
  
  /**
   * Whether to show error details to users
   */
  showErrorDetails: boolean
  
  /**
   * Custom error message to display
   */
  customErrorMessage?: string
  
  /**
   * Whether to enable error reporting
   */
  enableErrorReporting: boolean
}

export const defaultErrorBoundaryConfig: ErrorBoundaryConfig = {
  logErrors: true,
  showErrorDetails: false,
  customErrorMessage: 'Something went wrong. Please try again later.',
  enableErrorReporting: false
}

export const ErrorBoundaryContext = React.createContext<ErrorBoundaryConfig>(defaultErrorBoundaryConfig)