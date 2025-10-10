'use client'
/**
 * Advanced Error Tracking and Reporting System
 * Provides comprehensive error tracking with categorization and analytics
 */
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

  private setupGlobalErrorHandlers(): void {
    if (typeof window === 'undefined') return

    // Global error handler
    window.addEventListener('error', (event) => {
      this.trackError(new Error(event.message), {
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
    window.addEventListener('unhandledrejection', (event) => {
      this.trackError(new Error(`Unhandled Promise Rejection: ${event.reason}`), {
        category: ErrorCategory.Runtime,
        severity: ErrorSeverity.High,
        context: { reason: event.reason }
      })
    })
  }

  trackError(
    error: Error,
    metadata: Partial<ErrorMetadata> & { category: ErrorCategory; severity: ErrorSeverity }
  ): string {
    const errorId = this.generateErrorId(error.message)
    const now = Date.now()

    const trackedError: TrackedError = {
      id: errorId,
      message: error.message,
      metadata: {
        category: metadata.category,
        severity: metadata.severity,
        userId: metadata.userId,
        sessionId: metadata.sessionId,
        context: metadata.context,
        tags: metadata.tags,
        timestamp: now,
        stackTrace: error.stack,
        userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
        url: typeof window !== 'undefined' ? window.location.href : undefined
      },
      occurrences: 1,
      firstSeen: now,
      lastSeen: now
    }

    // Check if error already exists
    const existingError = this.errors.get(errorId)
    if (existingError) {
      existingError.occurrences++
      existingError.lastSeen = now
      this.errors.set(errorId, existingError)
    } else {
      this.errors.set(errorId, trackedError)
      
      // Clean up old errors if we exceed the limit
      if (this.errors.size > this.maxStoredErrors) {
        const oldestError = Array.from(this.errors.values())
          .sort((a, b) => a.firstSeen - b.firstSeen)[0]
        this.errors.delete(oldestError.id)
      }
    }

    // Log the error
    logger.error('Error tracked', {
      errorId,
      message: error.message,
      category: metadata.category,
      severity: metadata.severity
    })

    // Notify listeners
    this.notifyListeners(trackedError)

    // Report to external service (in production)
    if (process.env.NODE_ENV === 'production') {
      this.reportToExternalService(errorId).catch(err => {
        logger.error('Failed to report error to external service', { error: err.message })
      })
    }

    return errorId
  }

  private generateErrorId(message: string): string {
    const timestamp = Date.now().toString(36)
    const hash = this.simpleHash(message)
    return `err_${timestamp}_${hash}`
  }

  private simpleHash(str: string): string {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i)
      hash = ((hash << 5) - hash) + char
      hash = hash & hash // Convert to 32-bit integer
    }
    return Math.abs(hash).toString(36)
  }

  addListener(listener: (error: TrackedError) => void): void {
    this.errorListeners.push(listener)
  }

  removeListener(listener: (error: TrackedError) => void): void {
    this.errorListeners = this.errorListeners.filter(l => l !== listener)
  }

  private notifyListeners(error: TrackedError): void {
    this.errorListeners.forEach(listener => {
      try {
        listener(error)
      } catch (listenerError) {
        logger.error('Error in error listener', { error: listenerError.message })
      }
    })
  }

  private async reportToExternalService(errorId: string): Promise<void> {
    // In a real implementation, this would send to an external service
    // like Sentry, LogRocket, or a custom error reporting service
    logger.info('Error reported to external service', { errorId })
  }

  getErrors(): TrackedError[] {
    return Array.from(this.errors.values())
  }

  getErrorById(id: string): TrackedError | undefined {
    return this.errors.get(id)
  }

  clearErrors(): void {
    this.errors.clear()
  }

  getErrorStats(): {
    total: number
    byCategory: Record<ErrorCategory, number>
    bySeverity: Record<ErrorSeverity, number>
  } {
    const errors = this.getErrors()
    const byCategory: Record<ErrorCategory, number> = {} as Record<ErrorCategory, number>
    const bySeverity: Record<ErrorSeverity, number> = {} as Record<ErrorSeverity, number>

    // Initialize counters
    Object.values(ErrorCategory).forEach(category => {
      byCategory[category] = 0
    })
    Object.values(ErrorSeverity).forEach(severity => {
      bySeverity[severity] = 0
    })

    // Count errors
    errors.forEach(error => {
      byCategory[error.metadata.category]++
      bySeverity[error.metadata.severity]++
    })

    return {
      total: errors.length,
      byCategory,
      bySeverity
    }
  }
}

// Export singleton instance
export const errorTracking = ErrorTrackingService.getInstance()