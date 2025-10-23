// Enhanced error handler utility
export interface ErrorHandlerEnhancedConfig {
  enabled: boolean
  maxErrors: number
  reportToConsole: boolean
  reportToService?: boolean
  serviceEndpoint?: string
  includeStackTrace: boolean
  includeUserAgent: boolean
  includeUrl: boolean
  retryAttempts: number
  retryDelay: number
}

export interface EnhancedErrorInfo {
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
  retryCount: number
}

export class ErrorHandlerEnhanced {
  private config: ErrorHandlerEnhancedConfig
  private errors: EnhancedErrorInfo[] = []
  private errorIdCounter = 0

  constructor(config: ErrorHandlerEnhancedConfig) {
    this.config = {
      includeStackTrace: true,
      includeUserAgent: true,
      includeUrl: true,
      retryAttempts: 3,
      retryDelay: 1000,
      ...config
    }
  }

  handleError(
    error: Error,
    context?: Record<string, any>,
    severity: 'low' | 'medium' | 'high' | 'critical' = 'medium',
    userId?: string,
    sessionId?: string
  ): string {
    if (!this.config.enabled) return ''

    const errorId = `error_${++this.errorIdCounter}_${Date.now()}`
    
    const errorInfo: EnhancedErrorInfo = {
      id: errorId,
      message: error.message,
      stack: this.config.includeStackTrace ? error.stack : undefined,
      timestamp: new Date(),
      url: this.config.includeUrl ? window.location.href : undefined,
      userAgent: this.config.includeUserAgent ? navigator.userAgent : undefined,
      userId,
      sessionId,
      context,
      severity,
      retryCount: 0
    }

    this.errors.push(errorInfo)

    if (this.config.reportToConsole) {
      console.error('Enhanced error handled:', errorInfo)
    }

    if (this.config.reportToService && this.config.serviceEndpoint) {
      this.reportToServiceWithRetry(errorInfo)
    }

    // Keep only the most recent errors
    if (this.errors.length > this.config.maxErrors) {
      this.errors = this.errors.slice(-this.config.maxErrors)
    }

    return errorId
  }

  private async reportToServiceWithRetry(errorInfo: EnhancedErrorInfo): Promise<void> {
    let lastError: Error | null = null

    for (let attempt = 0; attempt < this.config.retryAttempts; attempt++) {
      try {
        await this.sendErrorToService(errorInfo)
        return // Success
      } catch (error) {
        lastError = error as Error
        errorInfo.retryCount = attempt + 1

        if (attempt < this.config.retryAttempts - 1) {
          await new Promise(resolve => setTimeout(resolve, this.config.retryDelay))
        }
      }
    }

    console.error('Failed to report error to service after retries:', lastError)
  }

  private async sendErrorToService(errorInfo: EnhancedErrorInfo): Promise<void> {
    const response = await fetch(this.config.serviceEndpoint!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(errorInfo)
    })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }
  }

  getErrorById(id: string): EnhancedErrorInfo | undefined {
    return this.errors.find(error => error.id === id)
  }

  getErrorsBySeverity(severity: EnhancedErrorInfo['severity']): EnhancedErrorInfo[] {
    return this.errors.filter(error => error.severity === severity)
  }

  getErrorsByUser(userId: string): EnhancedErrorInfo[] {
    return this.errors.filter(error => error.userId === userId)
  }

  getErrorStats(): Record<string, number> {
    const stats: Record<string, number> = {}
    
    this.errors.forEach(error => {
      stats[error.severity] = (stats[error.severity] || 0) + 1
    })

    return stats
  }

  getRetryStats(): Record<string, number> {
    const stats: Record<string, number> = {}
    
    this.errors.forEach(error => {
      const retryKey = `retry_${error.retryCount}`
      stats[retryKey] = (stats[retryKey] || 0) + 1
    })

    return stats
  }

  getAllErrors(): EnhancedErrorInfo[] {
    return [...this.errors]
  }

  clearErrors(): void {
    this.errors = []
  }

  exportErrors(): EnhancedErrorInfo[] {
    return [...this.errors]
  }
}

export default ErrorHandlerEnhanced