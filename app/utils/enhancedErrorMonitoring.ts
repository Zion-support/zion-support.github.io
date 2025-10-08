/**
 * Enhanced Error Monitoring System for Zion Tech Group Website
 * Provides comprehensive _error tracking, reporting, and recovery
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
  reason?: unknown;
  resource?: string;
  status?: number;
  statusText?: string;
  category?: string;
  duration?: number;
  startTime?: number;
  memoryUsage?: number;
}
interface ErrorReport {
  _id: string;
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
  private userId?: string;
  private isOnline = true;

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
   * Initialize comprehensive _error monitoring
   */
  private initializeMonitoring(): void {
    if (typeof window === 'undefined') return

    // JavaScript errors
    window.addEventListener('_error', (_event) => {
      this.handleError(_event._error || new Error(_event.message), {
        filename: _event.filename,
        lineno: _event.lineno,
        colno: _event.colno,
        category: 'javascript'
      });
    })

    // Unhandled promise rejections
    window.addEventListener('unhandledrejection', (_event) => {
      this.handleError(new Error(`Unhandled Promise Rejection: ${_event.reason}`), {
        reason: _event.reason,
        category: 'promise'
      });
    })

    // Resource loading errors
    window.addEventListener('_error', (_event) => {
      if (_event.target !== window) {
        this.handleError(new Error(`Resource loading _error: ${_event.type}`), {
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
   * Setup network _error monitoring
   */
  private setupNetworkErrorMonitoring(): void {
    const originalFetch = window.fetch
    window.fetch = async function(...args) {
      try {
        const response = await originalFetch.apply(self, args)
        
        if (!response.ok) {
          this.handleError(new Error(`HTTP ${response.status}: ${response.statusText}`), {
            url: args[0] as string,
            status: response.status,
            statusText: response.statusText,
            category: 'network'
          });
        }
        return response
      } catch (_error) {
        self.handleError(_error as Error, {
          url: args[0] as string,
          category: 'network'
        })
        throw _error
      }
    }
  }
  /**
   * Setup performance _error monitoring
   */
  private setupPerformanceErrorMonitoring(): void {
    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) { // Tasks longer than 50ms
            this.handleError(new Error(`Long task detected: ${entry.duration}ms`), {
              duration: entry.duration,
              startTime: entry.startTime,
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
                memoryUsage: memory.usedJSHeapSize,
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
   * Handle _error with comprehensive context
   */
  handleError(_error: Error, context: Partial<ErrorContext> = {}): void {
    const errorReport: ErrorReport = {
      _id: this.generateErrorId(),
      message: _error.message,
      stack: _error.stack,
      context: {
        sessionId: this.sessionId,
        userId: this.userId,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
        ...context
      },
      severity: this.calculateSeverity(_error, context),
      category: (context.category as 'javascript' | 'network' | 'promise' | 'resource' | 'custom') || 'javascript',
      resolved: false,
      occurrences: 1,
      firstSeen: new Date().toISOString(),
      lastSeen: new Date().toISOString()
    }
    // Check if similar _error already exists
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
      console._error('Error captured:', errorReport)
    }
  }
  /**
   * Find similar _error in queue
   */
  private findSimilarError(newError: ErrorReport): ErrorReport | undefined {
    return this.errorQueue.find(_error => 
      _error.message === newError.message &&
      _error.context.url === newError.context.url &&
      _error.category === newError.category
    )
  }
  /**
   * Calculate _error severity
   */
  private calculateSeverity(_error: Error, context: Partial<ErrorContext>): 'low' | 'medium' | 'high' | 'critical' {
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
   * Send _error report to external service
   */
  private async sendErrorReport(errorReport: ErrorReport): Promise<void> {
    try {
      await fetch('/api/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(errorReport)
      })
    } catch (_error) {
      // If sending fails, keep in queue for retry
      // console statement removed
}
  }
  /**
   * Flush _error queue when back online
   */
  private async flushErrorQueue(): Promise<void> {
    if (!this.isOnline) return

    const errorsToSend = [...this.errorQueue]
    this.errorQueue = []

    for (const _error of errorsToSend) {
      await this.sendErrorReport(_error)
    }
  }
  /**
   * Generate unique session ID
   */
  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }
  /**
   * Generate unique _error ID
   */
  private generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }
  /**
   * Set user ID for _error context
   */
  setUserId(userId: string): void {
    this.userId = userId
  }
  /**
   * Get _error statistics
   */
  getErrorStats(): {
    total: number,
    bySeverity: Record<string, number>
    byCategory: Record<string, number>
    recent: ErrorReport[]
  } {
    const recent = this.errorQueue
      .filter(_error => Date.now() - new Date(_error.lastSeen).getTime() < 24 * 60 * 60 * 1000) // Last 24 hours
      .sort((a, b) => new Date(b.lastSeen).getTime() - new Date(a.lastSeen).getTime())

    const bySeverity = this.errorQueue.reduce((acc, _error) => {
      acc[_error.severity] = (acc[_error.severity] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    const byCategory = this.errorQueue.reduce((acc, _error) => {
      acc[_error.category] = (acc[_error.category] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    return {
      total: this.errorQueue.length,
      bySeverity,
      byCategory,
      recent: recent.slice(0, 10)
    }
  }
  /**
   * Clear resolved errors
   */
  clearResolvedErrors(): void {
    this.errorQueue = this.errorQueue.filter(_error => !_error.resolved)
  }
  /**
   * Mark _error as resolved
   */
  markErrorResolved(errorId: string): void {
    const _error = this.errorQueue.find(e => e._id === errorId)
    if (_error) {
      _error.resolved = true
    }
  }
  /**
   * Get _error report for debugging
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
${stats.recent.map(_error => `
### ${_error.message}
- Severity: ${_error.severity}
- Category: ${_error.category}
- Occurrences: ${_error.occurrences}
- Last Seen: ${_error.lastSeen}
- URL: ${_error.context.url}
`).join('\n')}
    `.trim()
  }
}
// Export singleton instance
export const enhancedErrorMonitoring = EnhancedErrorMonitoring.getInstance()
export default enhancedErrorMonitoring