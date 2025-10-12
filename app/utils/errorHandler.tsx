'use client'
/**
 * Advanced Error Handler
 * Comprehensive error handling utilities for React applications
 */
import React, { ErrorInfo, useCallback } from 'react'

// Error types
export enum ErrorType {
  RUNTIME = 'RUNTIME',
  NETWORK = 'NETWORK',
  VALIDATION = 'VALIDATION',
  AUTHENTICATION = 'AUTHENTICATION',
  AUTHORIZATION = 'AUTHORIZATION',
  NOT_FOUND = 'NOT_FOUND',
  SERVER = 'SERVER',
  CLIENT = 'CLIENT',
  UNKNOWN = 'UNKNOWN'
}

// Error severity levels
export enum ErrorSeverity {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

// Error context interface
export interface ErrorContext {
  userId?: string
  sessionId?: string
  timestamp: Date
  userAgent: string
  url: string
  componentStack?: string
  additionalData?: Record<string, unknown>
}

// Error interface
export interface AppError {
  type: ErrorType
  severity: ErrorSeverity
  message: string
  code?: string
  context: ErrorContext
  originalError?: Error
  stack?: string
}

// Error handler class
export class ErrorHandler {
  private static instance: ErrorHandler
  private errorLog: AppError[] = []
  private maxLogSize = 100

  private constructor() {}

  static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler()
    }
    return ErrorHandler.instance
  }

  // Create error from various sources
  createError(
    type: ErrorType,
    message: string,
    severity: ErrorSeverity = ErrorSeverity.MEDIUM,
    originalError?: Error,
    additionalData?: Record<string, unknown>
  ): AppError {
    const context: ErrorContext = {
      timestamp: new Date(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'Server',
      url: typeof window !== 'undefined' ? window.location.href : 'Server',
      additionalData
    }

    return {
      type,
      severity,
      message,
      context,
      originalError,
      stack: originalError?.stack
    }
  }

  // Log error
  logError(error: AppError): void {
    this.errorLog.push(error)
    
    // Keep only the most recent errors
    if (this.errorLog.length > this.maxLogSize) {
      this.errorLog = this.errorLog.slice(-this.maxLogSize)
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error logged:', error)
    }

    // Send to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.sendToExternalService(error)
    }
  }

  // Send error to external service
  private sendToExternalService(error: AppError): void {
    // Implement your error reporting service here
    // e.g., Sentry, LogRocket, etc.
    console.log('Sending error to external service:', error)
  }

  // Get error log
  getErrorLog(): AppError[] {
    return [...this.errorLog]
  }

  // Clear error log
  clearErrorLog(): void {
    this.errorLog = []
  }

  // Get errors by type
  getErrorsByType(type: ErrorType): AppError[] {
    return this.errorLog.filter(error => error.type === type)
  }

  // Get errors by severity
  getErrorsBySeverity(severity: ErrorSeverity): AppError[] {
    return this.errorLog.filter(error => error.severity === severity)
  }
}

// React hook for error handling
export const useErrorHandler = () => {
  const errorHandler = ErrorHandler.getInstance()

  const handleError = useCallback((
    type: ErrorType,
    message: string,
    severity: ErrorSeverity = ErrorSeverity.MEDIUM,
    originalError?: Error,
    additionalData?: Record<string, unknown>
  ) => {
    const error = errorHandler.createError(type, message, severity, originalError, additionalData)
    errorHandler.logError(error)
    return error
  }, [errorHandler])

  const getErrorLog = useCallback(() => {
    return errorHandler.getErrorLog()
  }, [errorHandler])

  const clearErrorLog = useCallback(() => {
    errorHandler.clearErrorLog()
  }, [errorHandler])

  return {
    handleError,
    getErrorLog,
    clearErrorLog,
    ErrorType,
    ErrorSeverity
  }
}

// Error boundary component
interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error: AppError; resetError: () => void }>
  onError?: (error: AppError) => void
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: AppError
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  private errorHandler = ErrorHandler.getInstance()

  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const appError = this.errorHandler.createError(
      ErrorType.RUNTIME,
      error.message,
      ErrorSeverity.HIGH,
      error,
      { componentStack: errorInfo.componentStack }
    )

    this.errorHandler.logError(appError)
    this.setState({ error: appError })

    if (this.props.onError) {
      this.props.onError(appError)
    }
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback
        return <FallbackComponent error={this.state.error!} resetError={this.resetError} />
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <button
              onClick={this.resetError}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Try Again
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorHandler