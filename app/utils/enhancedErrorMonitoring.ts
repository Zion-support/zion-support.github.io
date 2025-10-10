import React from 'react'
/**
 * Enhanced Error Monitoring System for Zion Tech Group Website
 * Provides comprehensive error tracking, reporting, and recovery
 */

interface ErrorContext {
  userId?: string;
  sessionId: string;
  url: string;
  userAgent: string;
  timestamp: string;
  component?: string;
  action?: string;
  metadata?: Record<string, unknown>;
  filename?: string;
  lineno?: number;
  colno?: number;
  reason?: any;
  resource?: string;
  status?: number;
  statusText?: string;
  category?: string;
  duration?: number;
  startTime?: number;
  memoryUsage?: number;
}
interface ErrorReport {
  id: string;
  message: string;
  stack?: string;
  context: ErrorContext;
  severity: 'low' | 'medium' | 'high' | 'critical';
  category: 'javascript' | 'network' | 'promise' | 'resource' | 'custom';
  resolved: boolean;
  occurrences: number;
  firstSeen: string;
  lastSeen: string;
}
class EnhancedErrorMonitoring {
  private static instance: EnhancedErrorMonitoring;
  private errorQueue: ErrorReport[] = [];
  private maxQueueSize = 1000;
  private sessionId: string;
<<<<<<< HEAD
  private userId?: string;
  private isOnline = true;
=======
  private userId?: string
  private isOnline = true
>>>>>>> cursor/fix-errors-and-merge-to-main-a0f3

  private constructor() {
    this.sessionId = this.generateSessionId()
    this.initializeMonitoring()
    this.setupNetworkMonitoring()
  }
  static getInstance(): EnhancedErrorMonitoring {
    if (!EnhancedErrorMonitoring.instance) {
      EnhancedErrorMonitoring.instance = new EnhancedErrorMonitoring()
    }
    return EnhancedErrorMonitoring.instance
  }
  /**
   * Initialize comprehensive error monitoring
   */
  private initializeMonitoring(): void {
    if (typeof window === 'undefined') return

    // JavaScript errors
    window.addEventListener('error', (event) => {
      this.handleError(event.error || new Error(event.message), {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        category: 'javascript'
      })
    })

    // Unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.handleError(new Error(`Unhandled Promise Rejection: ${event.reason}`), {
        reason: event.reason,
        category: 'promise'
      })
    })

    // Resource loading errors
    window.addEventListener('error', (event) => {
      if (event.target !== window) {
        this.handleError(new Error(`Resource loading error: ${event.target}`), {
          resource: (event.target as any).src || (event.target as any).href,
          category: 'resource'
        })
      }
    }, true)

    // Network errors
    this.setupNetworkErrorMonitoring()

    // Performance monitoring
    this.setupPerformanceErrorMonitoring()
  }
  /**
   * Setup network error monitoring
   */
  private setupNetworkErrorMonitoring(): void {
    const originalFetch = window.fetch
    const self = this

    window.fetch = async function(...args) {
      try {
        const response = await originalFetch.apply(this, args)
        
        if (!response.ok) {
          self.handleError(new Error(`HTTP ${response.status}: ${response.statusText}`), {
            url: args[0] as string,
            status: response.status,
            statusText: response.statusText,
            category: 'network'
          })
        }
        return response
      } catch (error) {
        self.handleError(error as Error, {
          url: args[0] as string
          category: 'network'
        })
        throw error
      }
    }
  }
  /**
   * Setup performance error monitoring
   */
  private setupPerformanceErrorMonitoring(): void {
    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) { // Tasks longer than 50ms
            this.handleError(new Error(`Long task detected: ${entry.duration}ms`), {
              duration: entry.duration
              startTime: entry.startTime
              category: 'performance'
            })
          }
        }
      }).observe({ entryTypes: ['longtask'] })

      // Monitor memory leaks
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'memory') {
            if (memory.usedJSHeapSize > 100 * 1024 * 1024) { // 100MB
              this.handleError(new Error(`High memory usage detected: ${memory.usedJSHeapSize / 1024 / 1024}MB`), {
                memoryUsage: memory.usedJSHeapSize
                category: 'performance'
              })
            }
          }
        }
      }).observe({ entryTypes: ['memory'] })
    }
  }
  /**
   * Setup network status monitoring
   */
  private setupNetworkMonitoring(): void {
    if (typeof window === 'undefined') return

    window.addEventListener('online', () => {
      this.isOnline = true
      this.flushErrorQueue()
    })

    window.addEventListener('offline', () => {
      this.isOnline = false
    })
  }
  /**
   * Handle error with comprehensive context
   */
  handleError(error: Error, context: Partial<ErrorContext> = {}): void {
    const errorReport: ErrorReport = {
      id: this.generateErrorId()
      message: error.message
      stack: error.stack
      context: {
        sessionId: this.sessionId
        userId: this.userId
        url: window.location.href
        userAgent: navigator.userAgent
        timestamp: new Date().toISOString()
        ...context
      }
      severity: this.calculateSeverity(error, context)
      category: (context.category as 'javascript' | 'network' | 'promise' | 'resource' | 'custom') || 'javascript'
      resolved: false,
      occurrences: 1,
      firstSeen: new Date().toISOString()
      lastSeen: new Date().toISOString()
    }
    // Check if similar error already exists
    const existingError = this.findSimilarError(errorReport)
    if (existingError) {
      existingError.occurrences++
      existingError.lastSeen = new Date().toISOString()
    } else {
      this.errorQueue.push(errorReport)
    }
    // Keep queue size manageable
    if (this.errorQueue.length > this.maxQueueSize) {
      this.errorQueue.shift()
    }
    // Send to external service if online
    if (this.isOnline) {
      this.sendErrorReport(errorReport)
    }
    // Log to console in development
    if (process.env['NODE_ENV'] === 'development') {
      console.error('Error captured:', errorReport)
    }
  }
  /**
   * Find similar error in queue
   */
  private findSimilarError(newError: ErrorReport): ErrorReport | undefined {
    return this.errorQueue.find(error => 
      error.message === newError.message &&
      error.context.url === newError.context.url &&
      error.category === newError.category
    )
  }
  /**
   * Calculate error severity
   */
  private calculateSeverity(error: Error, context: Partial<ErrorContext>): 'low' | 'medium' | 'high' | 'critical' {
    // Critical: Network errors, unhandled promise rejections
    if (context.category === 'network' || context.category === 'promise') {
      return 'critical'
    }
    // High: JavaScript errors in critical components
    if (context.component && ['App', 'Router', 'Auth'].includes(context.component)) {
      return 'high'
    }
    // Medium: Resource loading errors
    if (context.category === 'resource') {
      return 'medium'
    }
    // Low: Other errors
    return 'low'
  }
  /**
   * Send error report to external service
   */
  private async sendErrorReport(errorReport: ErrorReport): Promise<void> {
    try {
      await fetch('/api/errors', {
        method: 'POST'
        headers: {
          'Content-Type': 'application/json'
        }
        body: JSON.stringify(errorReport)
      })
    } catch (error) {
      // If sending fails, keep in queue for retry
      console.warn('Failed to send error report:', error)
    }
  }
  /**
   * Flush error queue when back online
   */
  private async flushErrorQueue(): Promise<void> {
    if (!this.isOnline) return

    const errorsToSend = [...this.errorQueue]
    this.errorQueue = []

    for (const error of errorsToSend) {
      await this.sendErrorReport(error)
    }
  }
  /**
   * Generate unique session ID
   */
  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }
  /**
   * Generate unique error ID
   */
  private generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }
  /**
   * Set user ID for error context
   */
  setUserId(userId: string): void {
    this.userId = userId
  }
  /**
   * Get error statistics
   */
  getErrorStats(): {
    total: number,
    bySeverity: Record<string, number>
    byCategory: Record<string, number>
    recent: ErrorReport[]
  } {
    const recent = this.errorQueue
      .filter(error => Date.now() - new Date(error.lastSeen).getTime() < 24 * 60 * 60 * 1000) // Last 24 hours
      .sort((a, b) => new Date(b.lastSeen).getTime() - new Date(a.lastSeen).getTime())

    const bySeverity = this.errorQueue.reduce((acc, error) => {
      acc[error.severity] = (acc[error.severity] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    const byCategory = this.errorQueue.reduce((acc, error) => {
      acc[error.category] = (acc[error.category] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    return {
      total: this.errorQueue.length
      bySeverity
      byCategory
      recent: recent.slice(0, 10)
    }
  }
  /**
   * Clear resolved errors
   */
  clearResolvedErrors(): void {
    this.errorQueue = this.errorQueue.filter(error => !error.resolved)
  }
  /**
   * Mark error as resolved
   */
  markErrorResolved(errorId: string): void {
    const error = this.errorQueue.find(e => e.id === errorId)
    if (error) {
      error.resolved = true
    }
  }
  /**
   * Get error report for debugging
   */
  getErrorReport(): string {
    const stats = this.getErrorStats()
    
    return `
# Error Monitoring Report

## Summary
- Total Errors: ${stats.total}
- Recent Errors (24h): ${stats.recent.length}
## By Severity
${Object.entries(stats.bySeverity).map(([severity, count]) => `- ${severity}: ${count}`).join('\n')}
## By Category
${Object.entries(stats.byCategory).map(([category, count]) => `- ${category}: ${count}`).join('\n')}
## Recent Errors
${stats.recent.map(error => `
### ${error.message}
- Severity: ${error.severity}
- Category: ${error.category}
- Occurrences: ${error.occurrences}
- Last Seen: ${error.lastSeen}
- URL: ${error.context.url}
`).join('\n')}
    `.trim()
  }
}
// Export singleton instance
export const enhancedErrorMonitoring = EnhancedErrorMonitoring.getInstance()
export default enhancedErrorMonitoring