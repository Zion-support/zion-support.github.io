'use client'
/**
 * Advanced Error Tracking and Reporting System
 * Provides comprehensive error tracking with categorization and analytics
 */
import { logger } from './enhancedLogger'

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

    // Handle unhandled errors
    window.addEventListener('error', (event) => {
      this.trackError(
        new Error(event.message),
        {
          category: ErrorCategory.Runtime,
          severity: ErrorSeverity.High,
          context: {
            filename: event.filename,
            lineno: event.lineno,
            colno: event.colno
          }
        }
      )
    })

    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.trackError(
        new Error(event.reason?.message || 'Unhandled promise rejection'),
        {
          category: ErrorCategory.Runtime,
          severity: ErrorSeverity.High,
          context: {
            reason: event.reason
          }
        }
      )
    })
  }

  /**
   * Track an error with metadata
   */
  trackError(error: Error, metadata: Partial<ErrorMetadata>): void {
    const errorId = this.generateErrorId(error)
    const now = Date.now()
    
    const fullMetadata: ErrorMetadata = {
      category: metadata.category || ErrorCategory.Runtime,
      severity: metadata.severity || ErrorSeverity.Medium,
      userId: metadata.userId || this.getUserId(),
      sessionId: metadata.sessionId || this.getSessionId(),
      context: metadata.context || {},
      tags: metadata.tags || [],
      timestamp: now,
      stackTrace: error.stack,
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
      url: typeof window !== 'undefined' ? window.location.href : undefined
    }

    const existingError = this.errors.get(errorId)
    
    if (existingError) {
      // Update existing error
      existingError.occurrences += 1
      existingError.lastSeen = now
      existingError.metadata = fullMetadata
    } else {
      // Create new tracked error
      const trackedError: TrackedError = {
        id: errorId,
        message: error.message,
        metadata: fullMetadata,
        occurrences: 1,
        firstSeen: now,
        lastSeen: now
      }
      
      this.errors.set(errorId, trackedError)
      
      // Maintain max errors limit
      if (this.errors.size > this.maxStoredErrors) {
        const oldestError = Array.from(this.errors.values())
          .sort((a, b) => a.firstSeen - b.firstSeen)[0]
        this.errors.delete(oldestError.id)
      }
    }

    // Log the error
    logger.error(`Error tracked: ${error.message}`, {
      errorId,
      category: fullMetadata.category,
      severity: fullMetadata.severity,
      occurrences: existingError?.occurrences || 1
    })

    // Notify listeners
    this.errorListeners.forEach(listener => {
      try {
        listener(this.errors.get(errorId)!)
      } catch (listenerError) {
        console.error('Error in error listener:', listenerError)
      }
    })
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
    return Array.from(this.errors.values())
      .filter(error => error.metadata.category === category)
  }

  /**
   * Get errors by severity
   */
  getErrorsBySeverity(severity: ErrorSeverity): TrackedError[] {
    return Array.from(this.errors.values())
      .filter(error => error.metadata.severity === severity)
  }

  /**
   * Get error statistics
   */
  getStatistics(): {
    total: number
    byCategory: Record<string, number>
    bySeverity: Record<string, number>
    topErrors: TrackedError[]
  } {
    const errors = Array.from(this.errors.values())
    const byCategory: Record<string, number> = {}
    const bySeverity: Record<string, number> = {}

    errors.forEach(error => {
      byCategory[error.metadata.category] = (byCategory[error.metadata.category] || 0) + 1
      bySeverity[error.metadata.severity] = (bySeverity[error.metadata.severity] || 0) + 1
    })

    const topErrors = errors
      .sort((a, b) => b.occurrences - a.occurrences)
      .slice(0, 10)

    return {
      total: errors.length,
      byCategory,
      bySeverity,
      topErrors
    }
  }

  /**
   * Clear all errors
   */
  clearErrors(): void {
    this.errors.clear()
  }

  /**
   * Add error listener
   */
  addErrorListener(listener: (error: TrackedError) => void): void {
    this.errorListeners.push(listener)
  }

  /**
   * Remove error listener
   */
  removeErrorListener(listener: (error: TrackedError) => void): void {
    const index = this.errorListeners.indexOf(listener)
    if (index > -1) {
      this.errorListeners.splice(index, 1)
    }
  }

  /**
   * Generate unique error ID based on error message and stack
   */
  private generateErrorId(error: Error): string {
    const message = error.message
    const stack = error.stack || ''
    const hash = this.simpleHash(message + stack)
    return `error_${hash}`
  }

  /**
   * Simple hash function
   */
  private simpleHash(str: string): string {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i)
      hash = ((hash << 5) - hash) + char
      hash = hash & hash // Convert to 32-bit integer
    }
    return Math.abs(hash).toString(36)
  }

  /**
   * Get user ID from storage
   */
  private getUserId(): string | undefined {
    if (typeof window === 'undefined') return undefined
    try {
      return localStorage.getItem('userId') || undefined
    } catch {
      return undefined
    }
  }

  /**
   * Get session ID from storage
   */
  private getSessionId(): string | undefined {
    if (typeof window === 'undefined') return undefined
    try {
      return sessionStorage.getItem('sessionId') || undefined
    } catch {
      return undefined
    }
  }
}

// Export singleton instance
export const errorTracking = ErrorTrackingService.getInstance()

// Export default
export default ErrorTrackingService