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

// Error interface
export interface AppError {
  type: ErrorType
  severity: ErrorSeverity
  message: string
  code?: string
  details?: Record<string, unknown>
  timestamp: Date
  stack?: string
  userId?: string
  sessionId?: string
  url?: string
  userAgent?: string
}

// Error context interface
export interface ErrorContext {
  userId?: string
  sessionId?: string
  url?: string
  userAgent?: string
  additionalData?: Record<string, unknown>
}

// Error handler class
export class ErrorHandler {
  private static instance: ErrorHandler
  private errorLog: AppError[] = []
  private maxLogSize = 1000

  private constructor() {}

  public static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler()
    }
    return ErrorHandler.instance
  }

  public handleError(
    error: Error | AppError,
    context?: ErrorContext,
    errorInfo?: ErrorInfo
  ): AppError {
    const appError = this.createAppError(error, context, errorInfo)
    this.logError(appError)
    this.reportError(appError)
    return appError
  }

  private createAppError(
    error: Error | AppError,
    context?: ErrorContext,
    errorInfo?: ErrorInfo
  ): AppError {
    if ('type' in error) {
      return error as AppError
    }

    const appError: AppError = {
      type: this.determineErrorType(error),
      severity: this.determineErrorSeverity(error),
      message: error.message || 'Unknown error occurred',
      code: this.extractErrorCode(error),
      details: {
        stack: error.stack,
        ...(errorInfo && { componentStack: errorInfo.componentStack })
      },
      timestamp: new Date(),
      stack: error.stack,
      ...context
    }

    return appError
  }

  private determineErrorType(error: Error): ErrorType {
    const message = error.message.toLowerCase()
    
    if (message.includes('network') || message.includes('fetch')) {
      return ErrorType.NETWORK
    }
    if (message.includes('validation') || message.includes('invalid')) {
      return ErrorType.VALIDATION
    }
    if (message.includes('auth') || message.includes('login')) {
      return ErrorType.AUTHENTICATION
    }
    if (message.includes('permission') || message.includes('unauthorized')) {
      return ErrorType.AUTHORIZATION
    }
    if (message.includes('not found') || message.includes('404')) {
      return ErrorType.NOT_FOUND
    }
    if (message.includes('server') || message.includes('500')) {
      return ErrorType.SERVER
    }
    
    return ErrorType.RUNTIME
  }

  private determineErrorSeverity(error: Error): ErrorSeverity {
    const message = error.message.toLowerCase()
    
    if (message.includes('critical') || message.includes('fatal')) {
      return ErrorSeverity.CRITICAL
    }
    if (message.includes('error') || message.includes('failed')) {
      return ErrorSeverity.HIGH
    }
    if (message.includes('warning') || message.includes('caution')) {
      return ErrorSeverity.MEDIUM
    }
    
    return ErrorSeverity.LOW
  }

  private extractErrorCode(error: Error): string | undefined {
    const match = error.message.match(/\[(\w+)\]/)
    return match ? match[1] : undefined
  }

  private logError(error: AppError): void {
    this.errorLog.push(error)
    
    // Keep only the most recent errors
    if (this.errorLog.length > this.maxLogSize) {
      this.errorLog = this.errorLog.slice(-this.maxLogSize)
    }
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error logged:', error)
    }
  }

  private reportError(_error: AppError): void {
    // In a real application, you would send this to an error reporting service
    // like Sentry, LogRocket, or Bugsnag
    if (process.env.NODE_ENV === 'production') {
      // Example: send to error reporting service
      // errorReportingService.captureException(error)
    }
  }

  public getErrorLog(): AppError[] {
    return [...this.errorLog]
  }

  public clearErrorLog(): void {
    this.errorLog = []
  }

  public getErrorStats(): {
    total: number
    byType: Record<ErrorType, number>
    bySeverity: Record<ErrorSeverity, number>
  } {
    const stats = {
      total: this.errorLog.length,
      byType: {} as Record<ErrorType, number>,
      bySeverity: {} as Record<ErrorSeverity, number>
    }

    // Initialize counters
    Object.values(ErrorType).forEach(type => {
      stats.byType[type] = 0
    })
    Object.values(ErrorSeverity).forEach(severity => {
      stats.bySeverity[severity] = 0
    })

    // Count errors
    this.errorLog.forEach(error => {
      stats.byType[error.type]++
      stats.bySeverity[error.severity]++
    })

    return stats
  }
}

// React Error Boundary Component
export class ErrorBoundary extends React.Component<
  {
    children: React.ReactNode
    fallback?: React.ComponentType<{ error: AppError; resetError: () => void }>
    onError?: (error: AppError) => void
  },
  { hasError: boolean; error: AppError | null }
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ComponentType<{ error: AppError; resetError: () => void }>; onError?: (error: AppError) => void }) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): { hasError: boolean; error: AppError | null } {
    const errorHandler = ErrorHandler.getInstance()
    const appError = errorHandler.handleError(error)
    return { hasError: true, error: appError }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    const errorHandler = ErrorHandler.getInstance()
    const appError = errorHandler.handleError(error, undefined, errorInfo)
    
    if (this.props.onError) {
      this.props.onError(appError)
    }
  }

  render(): React.ReactNode {
    if (this.state.hasError && this.state.error) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback
      return (
        <FallbackComponent
          error={this.state.error}
          resetError={() => this.setState({ hasError: false, error: null })}
        />
      )
    }

    return this.props.children
  }
}

// Default Error Fallback Component
const DefaultErrorFallback: React.FC<{
  error: AppError
  resetError: () => void
}> = ({ error, resetError }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-medium text-gray-900">Something went wrong</h3>
            <p className="text-sm text-gray-500">Error Type: {error.type}</p>
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-sm text-gray-600">{error.message}</p>
        </div>
        
        <div className="flex space-x-3">
          <button
            onClick={resetError}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Try again
          </button>
          <button
            onClick={() => window.location.reload()}
            className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Reload page
          </button>
        </div>
      </div>
    </div>
  )
}

// Hook for using error handler
export const useErrorHandler = () => {
  const errorHandler = ErrorHandler.getInstance()
  
  const handleError = useCallback((error: Error | AppError, context?: ErrorContext) => {
    return errorHandler.handleError(error, context)
  }, [errorHandler])

  return {
    handleError,
    getErrorLog: errorHandler.getErrorLog.bind(errorHandler),
    clearErrorLog: errorHandler.clearErrorLog.bind(errorHandler),
    getErrorStats: errorHandler.getErrorStats.bind(errorHandler)
  }
}

export default ErrorHandler