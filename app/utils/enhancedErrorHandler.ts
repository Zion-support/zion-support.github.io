// Enhanced error handling utility
export interface ErrorInfo {
  message: string
  stack?: string
  timestamp: Date
  context?: Record<string, any>
  severity: 'low' | 'medium' | 'high' | 'critical'
  userId?: string
  sessionId?: string
}

export interface ErrorHandlerConfig {
  enabled: boolean
  maxErrors: number
  reportToConsole: boolean
  reportToService?: boolean
  serviceEndpoint?: string
}

export class EnhancedErrorHandler {
  private config: ErrorHandlerConfig
  private errors: ErrorInfo[] = [];

  constructor(config: ErrorHandlerConfig) {
    this.config = config
  }

  handleError(
    error: Error, 
    context?: Record<string, any>, 
    severity: 'low' | 'medium' | 'high' | 'critical' = 'medium',
    userId?: string,
    sessionId?: string
  ): void {
    if (!this.config.enabled) return

    const errorInfo: ErrorInfo = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date(),
      context,
      severity,
      userId,
      sessionId
    }

    this.errors.push(errorInfo)

    if (this.config.reportToConsole) {
      console.error('Error handled:', errorInfo)
    }

    if (this.config.reportToService && this.config.serviceEndpoint) {
      this.reportToService(errorInfo)
    }

    // Keep only the most recent errors
    if (this.errors.length > this.config.maxErrors) {
      this.errors = this.errors.slice(-this.config.maxErrors
  )
  );
}
  private async reportToService(errorInfo: ErrorInfo): Promise<void> {
    try {
      await fetch(this.config.serviceEndpoint!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(errorInfo)
      })
    } catch (error) {
      console.error('Failed to report error to service:', error
  )
  );
}
  getErrors(): ErrorInfo[] {
    return [...this.errors];
  }

  getErrorsBySeverity(severity: ErrorInfo['severity']): ErrorInfo[] {
    return this.errors.filter(error => error.severity === severity)
  }

  getErrorsByUser(userId: string): ErrorInfo[] {
    return this.errors.filter(error => error.userId === userId)
  }

  clearErrors(): void {
    this.errors = [];
  }

  getErrorStats(): Record<string, number> {
    const stats: Record<string, number> = {}
    
    this.errors.forEach(error => {
      stats[error.severity] = (stats[error.severity] || 0) + 1
    })

    return stats
  }
}

export default EnhancedErrorHandler;
