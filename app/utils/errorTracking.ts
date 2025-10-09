'use client'
/**
 * Advanced Error Tracking and Reporting System
 * Provides comprehensive error tracking with categorization and analytics
 */
import { logger } from './logger'

export enum ErrorSeverity {
  Low = 'low',
  Medium = 'medium',
  High = 'high',
  Critical = 'critical'
}

export enum ErrorCategory {
  Network = 'network',
  Validation = 'validation',
  Authorization = 'authorization',
  Runtime = 'runtime',
  Configuration = 'configuration',
  ExternalService = 'external_service'
}

export interface ErrorMetadata {
  category: ErrorCategory
  severity: ErrorSeverity
  userId?: string
  sessionId?: string
  context?: Record<string, unknown>
  tags?: string[]
  timestamp: number
  stackTrace?: string
  userAgent?: string
  url?: string
}

export interface TrackedError {
  id: string
  message: string
  metadata: ErrorMetadata
  occurrences: number
  firstSeen: number
  lastSeen: number
}

class ErrorTrackingService {
  private static instance: ErrorTrackingService
  private errors: Map<string, TrackedError> = new Map()
  private errorListeners: Array<(error: TrackedError) => void> = []
  private maxStoredErrors = 1000

  private constructor() {
    this.setupGlobalErrorHandlers()
  }

  static getInstance(): ErrorTrackingService {
    if (!ErrorTrackingService.instance) {
      ErrorTrackingService.instance = new ErrorTrackingService()
    }
    return ErrorTrackingService.instance
  }

  /**
   * Set up global error handlers
   */
  private setupGlobalErrorHandlers(): void {
    if (typeof window === 'undefined') return

    // Global error handler
    window.addEventListener('error', event => {
      this.trackError(event.error || new Error(event.message), {
        category: ErrorCategory.Runtime,
        severity: ErrorSeverity.High,
        context: {
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno
        }
      })
    })

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', event => {
      this.trackError(new Error(`Unhandled Promise Rejection: ${event.reason}`), {
        category: ErrorCategory.Runtime,
        severity: ErrorSeverity.Medium,
        context: { reason: event.reason }
      })
    })
  }

  /**
   * Track an error
   */
  trackError(
    error: Error,
    metadata: Partial<ErrorMetadata> & { category: ErrorCategory; severity: ErrorSeverity }
  ): string {
    const errorId = this.generateErrorId(error.message)
    const now = Date.now()

    // Get or create tracked error
    let trackedError = this.errors.get(errorId)
    if (trackedError) {
      // Update existing error
      trackedError.occurrences++
      trackedError.lastSeen = now
      trackedError.metadata = {
        ...trackedError.metadata,
        ...metadata,
        timestamp: now
      }
    } else {
      // Create new tracked error
      trackedError = {
        id: errorId,
        message: error.message,
        metadata: {
          ...metadata,
          timestamp: now,
          stackTrace: error.stack,
          userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
          url: typeof window !== 'undefined' ? window.location.href : undefined
        },
        occurrences: 1,
        firstSeen: now,
        lastSeen: now
      }
      this.errors.set(errorId, trackedError)
    }

    // Log error
    logger.error('Error tracked', { errorId, error: trackedError })

    // Notify listeners
    this.notifyListeners(trackedError)

    // Report to external service if configured
    this.reportToExternalService(errorId)

    // Clean up old errors if we exceed the limit
    if (this.errors.size > this.maxStoredErrors) {
      const sortedErrors = Array.from(this.errors.values())
        .sort((a, b) => b.lastSeen - a.lastSeen)
        .slice(0, this.maxStoredErrors)
      
      this.errors.clear()
      sortedErrors.forEach(error => this.errors.set(error.id, error))
    }

    return errorId
  }

  /**
   * Generate a unique error ID
   */
  private generateErrorId(message: string): string {
    const hash = message.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0)
      return a & a
    }, 0)
    return `error_${Math.abs(hash)}_${Date.now()}`
  }

  /**
   * Add error listener
   */
  addListener(listener: (error: TrackedError) => void): void {
    this.errorListeners.push(listener)
  }

  /**
   * Remove error listener
   */
  removeListener(listener: (error: TrackedError) => void): void {
    this.errorListeners = this.errorListeners.filter(l => l !== listener)
  }

  /**
   * Notify all listeners
   */
  private notifyListeners(error: TrackedError): void {
    this.errorListeners.forEach(listener => {
      try {
        listener(error)
      } catch (listenerError) {
        console.error('Error in error listener:', listenerError)
      }
    })
  }

  /**
   * Report error to external service
   */
  private async reportToExternalService(errorId: string): Promise<void> {
    const error = this.errors.get(errorId)
    if (!error) return

    try {
      if (typeof window !== 'undefined' && 'fetch' in window) {
        await fetch('/api/errors', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(error)
        })
      }
    } catch (reportError) {
      console.error('Failed to report error to external service:', reportError)
    }
  }

  /**
   * Get all tracked errors
   */
  getErrors(): TrackedError[] {
    return Array.from(this.errors.values())
  }

  /**
   * Get errors by category
   */
  getErrorsByCategory(category: ErrorCategory): TrackedError[] {
    return this.getErrors().filter(error => error.metadata.category === category)
  }

  /**
   * Get errors by severity
   */
  getErrorsBySeverity(severity: ErrorSeverity): TrackedError[] {
    return this.getErrors().filter(error => error.metadata.severity === severity)
  }

  /**
   * Clear all errors
   */
  clearErrors(): void {
    this.errors.clear()
  }

  /**
   * Get error statistics
   */
  getErrorStats(): {
    total: number
    byCategory: Record<ErrorCategory, number>
    bySeverity: Record<ErrorSeverity, number>
    recentErrors: number
  } {
    const errors = this.getErrors()
    const now = Date.now()
    const oneHourAgo = now - (60 * 60 * 1000)

    const byCategory = errors.reduce((acc, error) => {
      acc[error.metadata.category] = (acc[error.metadata.category] || 0) + 1
      return acc
    }, {} as Record<ErrorCategory, number>)

    const bySeverity = errors.reduce((acc, error) => {
      acc[error.metadata.severity] = (acc[error.metadata.severity] || 0) + 1
      return acc
    }, {} as Record<ErrorSeverity, number>)

    const recentErrors = errors.filter(error => error.lastSeen > oneHourAgo).length

    return {
      total: errors.length,
      byCategory,
      bySeverity,
      recentErrors
    }
  }
}

// Export singleton instance
export const errorTracking = ErrorTrackingService.getInstance()

// Export convenience functions
export const trackError = (error: Error, metadata: Partial<ErrorMetadata> & { category: ErrorCategory; severity: ErrorSeverity }) =>
  errorTracking.trackError(error, metadata)

export const addErrorListener = (listener: (error: TrackedError) => void) =>
  errorTracking.addListener(listener)

export const removeErrorListener = (listener: (error: TrackedError) => void) =>
  errorTracking.removeListener(listener)

export const getErrors = () => errorTracking.getErrors()

export const getErrorStats = () => errorTracking.getErrorStats()

export const clearErrors = () => errorTracking.clearErrors()

export default errorTracking
