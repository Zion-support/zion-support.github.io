// Enhanced error tracking utility
export interface ErrorTrackingConfig {
  enabled: boolean
  maxErrors: number
  reportToConsole: boolean
  reportToService?: boolean
  serviceEndpoint?: string
  includeStackTrace: boolean
  includeUserAgent: boolean
  includeUrl: boolean
}

export interface TrackedError {
  id: string
  message: string
  stack?: string
  timestamp: Date
  url?: string
  userAgent?: string
  userId?: string
  sessionId?: string
  context?: Record<string, any>
  severity: 'low' | 'medium' | 'high' | 'critical'
}

export class EnhancedErrorTracking {
  private config: ErrorTrackingConfig
  private errors: TrackedError[] = []
  private errorIdCounter = 0

  constructor(config: ErrorTrackingConfig) {
    this.config = config
  }

  trackError(
    error: Error,
    context?: Record<string, any>,
    severity: 'low' | 'medium' | 'high' | 'critical' = 'medium',
    userId?: string,
    sessionId?: string
  ): string {
    if (!this.config.enabled) return ''

    const errorId = `error_${++this.errorIdCounter}_${Date.now()}`
    
    const trackedError: TrackedError = {
      id: errorId,
      message: error.message,
      stack: this.config.includeStackTrace ? error.stack : undefined,
      timestamp: new Date(),
      url: this.config.includeUrl ? window.location.href : undefined,
      userAgent: this.config.includeUserAgent ? navigator.userAgent : undefined,
      userId,
      sessionId,
      context,
      severity
    }

    this.errors.push(trackedError)

    if (this.config.reportToConsole) {
      console.error('Tracked error:', trackedError)
    }

    if (this.config.reportToService && this.config.serviceEndpoint) {
      this.reportToService(trackedError)
    }

    // Keep only the most recent errors
    if (this.errors.length > this.config.maxErrors) {
      this.errors = this.errors.slice(-this.config.maxErrors)
    }

    return errorId
  }

  private async reportToService(error: TrackedError): Promise<void> {
    try {
      await fetch(this.config.serviceEndpoint!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(error)
      })
    } catch (reportError) {
      console.error('Failed to report error to service:', reportError)
    }
  }

  getErrorById(id: string): TrackedError | undefined {
    return this.errors.find(error => error.id === id)
  }

  getErrorsBySeverity(severity: TrackedError['severity']): TrackedError[] {
    return this.errors.filter(error => error.severity === severity)
  }

  getErrorsByUser(userId: string): TrackedError[] {
    return this.errors.filter(error => error.userId === userId)
  }

  getErrorStats(): Record<string, number> {
    const stats: Record<string, number> = {}
    
    this.errors.forEach(error => {
      stats[error.severity] = (stats[error.severity] || 0) + 1
    })

    return stats
  }

  getAllErrors(): TrackedError[] {
    return [...this.errors]
  }

  clearErrors(): void {
    this.errors = []
  }

  exportErrors(): TrackedError[] {
    return [...this.errors]
  }
}

export default EnhancedErrorTracking