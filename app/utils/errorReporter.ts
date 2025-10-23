// Error reporter utility
export interface ErrorReport {
  id: string
  message: string
  stack?: string
  timestamp: Date
  url: string
  userAgent: string
  userId?: string
  sessionId?: string
  context?: Record<string, any>
  severity: 'low' | 'medium' | 'high' | 'critical'
}

export interface ErrorReporterConfig {
  enabled: boolean
  endpoint: string
  apiKey?: string
  maxRetries: number
  retryDelay: number
  batchSize: number
  flushInterval: number
}

export class ErrorReporter {
  private config: ErrorReporterConfig
  private reports: ErrorReport[] = []
  private flushTimer?: NodeJS.Timeout

  constructor(config: ErrorReporterConfig) {
    this.config = {
      maxRetries: 3,
      retryDelay: 1000,
      batchSize: 10,
      flushInterval: 30000,
      ...config
    }
  }

  reportError(
    error: Error,
    context?: Record<string, any>,
    severity: 'low' | 'medium' | 'high' | 'critical' = 'medium',
    userId?: string,
    sessionId?: string
  ): string {
    if (!this.config.enabled) return ''

    const reportId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    
    const report: ErrorReport = {
      id: reportId,
      message: error.message,
      stack: error.stack,
      timestamp: new Date(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      userId,
      sessionId,
      context,
      severity
    }

    this.reports.push(report)

    // Auto-flush if batch size reached
    if (this.reports.length >= this.config.batchSize) {
      this.flush()
    }

    return reportId
  }

  async flush(): Promise<void> {
    if (this.reports.length === 0) return

    const reportsToSend = [...this.reports]
    this.reports = []

    try {
      await this.sendReports(reportsToSend)
    } catch (error) {
      console.error('Failed to send error reports:', error)
      // Re-add reports to queue for retry
      this.reports.unshift(...reportsToSend)
    }
  }

  private async sendReports(reports: ErrorReport[]): Promise<void> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json'
    }

    if (this.config.apiKey) {
      headers['Authorization'] = `Bearer ${this.config.apiKey}`
    }

    let lastError: Error | null = null

    for (let attempt = 0; attempt < this.config.maxRetries; attempt++) {
      try {
        const response = await fetch(this.config.endpoint, {
          method: 'POST',
          headers,
          body: JSON.stringify({ reports })
        })

        if (response.ok) {
          return // Success
        }

        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      } catch (error) {
        lastError = error as Error
        
        if (attempt < this.config.maxRetries - 1) {
          await new Promise(resolve => setTimeout(resolve, this.config.retryDelay))
        }
      }
    }

    throw lastError || new Error('Failed to send error reports')
  }

  startAutoFlush(): void {
    if (this.flushTimer) return

    this.flushTimer = setInterval(() => {
      this.flush()
    }, this.config.flushInterval)
  }

  stopAutoFlush(): void {
    if (this.flushTimer) {
      clearInterval(this.flushTimer)
      this.flushTimer = undefined
    }
  }

  getPendingReports(): ErrorReport[] {
    return [...this.reports]
  }

  clearPendingReports(): void {
    this.reports = []
  }
}

export default ErrorReporter