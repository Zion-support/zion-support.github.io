/**
 * Enhanced Error Handling System
 * Provides comprehensive error tracking, reporting, and recovery mechanisms
 */

interface ErrorContext {
  userId?: string;
  sessionId?: string;
  url: string;
  userAgent: string;
  timestamp: string;
  component?: string;
  action?: string;
  props?: Record<string, unknown>;
  state?: Record<string, unknown>;
}

interface ErrorReport {
  id: string;
  type: 'javascript' | 'promise' | 'resource' | 'network' | 'custom';
  message: string;
  stack?: string;
  context: ErrorContext;
  severity: 'low' | 'medium' | 'high' | 'critical';
  category:
    | 'syntax'
    | 'runtime'
    | 'network'
    | 'security'
    | 'performance'
    | 'unknown';
  tags: string[];
  metadata: Record<string, unknown>;
  resolved: boolean;
  resolvedAt?: string;
  resolvedBy?: string;
}

interface ErrorHandlerConfig {
  enableConsoleLogging: boolean;
  enableRemoteReporting: boolean;
  enableErrorRecovery: boolean;
  enableErrorCategorization: boolean;
  enableErrorAggregation: boolean;
  enablePerformanceImpact: boolean;
  maxErrorsPerMinute: number;
  errorRetentionDays: number;
  remoteEndpoint?: string;
  apiKey?: string;
}

class EnhancedErrorHandler {
  private config: ErrorHandlerConfig;
  private errors: ErrorReport[] = [];
  private errorCounts: Map<string, number> = new Map();
  private errorCategories: Map<string, number> = new Map();
  private lastErrorTime: number = 0;
  private errorRateLimit: number = 0;
  private isInitialized: boolean = false;

  constructor(config: Partial<ErrorHandlerConfig> = {}) {
    this.config = {
      enableConsoleLogging: true,
      enableRemoteReporting: false,
      enableErrorRecovery: true,
      enableErrorCategorization: true,
      enableErrorAggregation: true,
      enablePerformanceImpact: true,
      maxErrorsPerMinute: 10,
      errorRetentionDays: 30,
      ...config,
    };

    this.initialize();
  }

  /**
   * Initialize the error handler
   */
  private initialize(): void {
    if (this.isInitialized) return;

    this.setupGlobalErrorHandlers();
    this.setupUnhandledRejectionHandler();
    this.setupResourceErrorHandler();
    this.setupNetworkErrorHandler();
    this.setupPerformanceErrorHandler();
    this.setupErrorRecovery();
    this.setupErrorCleanup();

    this.isInitialized = true;
     
    if (process.env['NODE_ENV'] === 'development') {
      if (process.env.NODE_ENV === 'development') console.log('🛡️ Enhanced Error Handler initialized'); }
    }
  }

  /**
   * Setup global error handlers
   */
  private setupGlobalErrorHandlers(): void {
    window.addEventListener('error', event => {
      this.handleError({
        type: 'javascript',
        message: event.message,
        stack: event.error?.stack,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error,
      });
    });
  }

  /**
   * Setup unhandled promise rejection handler
   */
  private setupUnhandledRejectionHandler(): void {
    window.addEventListener('unhandledrejection', event => {
      this.handleError({
        type: 'promise',
        message: event.reason?.message || String(event.reason),
        stack: event.reason?.stack,
        reason: event.reason,
      });
    });
  }

  /**
   * Setup resource error handler
   */
  private setupResourceErrorHandler(): void {
    window.addEventListener(
      'error',
      event => {
        if (event.target !== window) {
          const target = event.target as HTMLElement & {
            src?: string;
            href?: string;
          };
          this.handleError({
            type: 'resource',
            message: `Failed to load resource: ${target?.src || target?.href}`,
            element: event.target?.constructor.name,
            src: target?.src || target?.href,
          });
        }
      },
      true
    );
  }

  /**
   * Setup network error handler
   */
  private setupNetworkErrorHandler(): void {
    // Monitor fetch requests
    const originalFetch = window.fetch;
    window.fetch = async (...args: Parameters<typeof fetch>) => {
      try {
        const response = await originalFetch(...args);
        if (!response.ok) {
          this.handleError({
            type: 'network',
            message: `Network request failed: ${response.status} ${response.statusText}`,
            url: args[0] as string,
            status: response.status,
            statusText: response.statusText,
          });
        }
        return response;
      } catch (error) {
        this.handleError({
          type: 'network',
          message: `Network request failed: ${error}`,
          url: args[0] as string,
          error: error instanceof Error ? error : new Error(String(error)),
        });
        throw error;
      }
    };
  }

  /**
   * Setup performance error handler
   */
  private setupPerformanceErrorHandler(): void {
    if (!this.config.enablePerformanceImpact) return;

    // Monitor long tasks that might indicate performance issues
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver(list => {
          list.getEntries().forEach(entry => {
            if (entry.duration > 100) {
              // Tasks longer than 100ms
              this.handleError({
                type: 'custom',
                message: `Long task detected: ${entry.duration.toFixed(2)}ms`,
                duration: entry.duration,
                category: 'performance',
              });
            }
          });
        });
        observer.observe({ type: 'longtask', buffered: true });
      } catch (error) {
        // eslint-disable-next-line no-console
        if (process.env.NODE_ENV === 'development') console.warn('Failed to setup performance error handler:', error); }
      }
    }
  }

  /**
   * Setup error recovery mechanisms
   */
  private setupErrorRecovery(): void {
    if (!this.config.enableErrorRecovery) return;

    // Auto-recovery for common errors
    setInterval(() => {
      this.attemptErrorRecovery();
    }, 30000); // Check every 30 seconds
  }

  /**
   * Setup error cleanup
   */
  private setupErrorCleanup(): void {
    // Clean up old errors
    setInterval(
      () => {
        this.cleanupOldErrors();
      },
      24 * 60 * 60 * 1000
    ); // Daily cleanup
  }

  /**
   * Handle error with comprehensive processing
   */
  private handleError(errorData: {
    type: ErrorReport['type'];
    message: string;
    stack?: string;
    filename?: string;
    lineno?: number;
    colno?: number;
    error?: Error;
    reason?: unknown;
    element?: string;
    src?: string;
    url?: string;
    status?: number;
    statusText?: string;
    duration?: number;
    category?: string;
  }): void {
    // Rate limiting
    if (!this.checkRateLimit()) {
      return;
    }

    const errorReport = this.createErrorReport(errorData);
    this.processError(errorReport);
  }

  /**
   * Create comprehensive error report
   */
  private createErrorReport(errorData: {
    type: ErrorReport['type'];
    message: string;
    stack?: string;
    filename?: string;
    lineno?: number;
    colno?: number;
    error?: Error;
    reason?: unknown;
    element?: string;
    src?: string;
    url?: string;
    status?: number;
    statusText?: string;
    duration?: number;
    category?: string;
  }): ErrorReport {
    const context = this.getErrorContext();
    const severity = this.determineSeverity(errorData);
    const category = this.categorizeError(errorData);
    const tags = this.generateTags(errorData);

    return {
      id: this.generateErrorId(),
      type: errorData.type,
      message: errorData.message,
      stack: errorData.stack,
      context,
      severity,
      category,
      tags,
      metadata: {
        filename: errorData.filename,
        lineno: errorData.lineno,
        colno: errorData.colno,
        element: errorData.element,
        src: errorData['src'],
        url: errorData.url,
        status: errorData.status,
        statusText: errorData.statusText,
        duration: errorData.duration,
      },
      resolved: false,
    };
  }

  /**
   * Process error report
   */
  private processError(errorReport: ErrorReport): void {
    // Add to errors array
    this.errors.push(errorReport);

    // Update counters
    this.updateErrorCounts(errorReport);

    // Console logging
    if (this.config.enableConsoleLogging) {
      this.logError(errorReport);
    }

    // Remote reporting
    if (this.config.enableRemoteReporting) {
      this.reportToRemote(errorReport);
    }

    // Error aggregation
    if (this.config.enableErrorAggregation) {
      this.aggregateError(errorReport);
    }

    // Performance impact
    if (this.config.enablePerformanceImpact) {
      this.assessPerformanceImpact(errorReport);
    }
  }

  /**
   * Get error context
   */
  private getErrorContext(): ErrorContext {
    return {
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      sessionId: this.getSessionId(),
      userId: this.getUserId(),
    };
  }

  /**
   * Determine error severity
   */
  private determineSeverity(errorData: {
    type: ErrorReport['type'];
    message: string;
    status?: number;
    element?: string;
  }): ErrorReport['severity'] {
    if (
      errorData.type === 'network' &&
      errorData.status &&
      errorData.status >= 500
    ) {
      return 'critical';
    }
    if (
      errorData.type === 'javascript' &&
      errorData.message.includes('Cannot read property')
    ) {
      return 'high';
    }
    if (errorData.type === 'resource' && errorData.element === 'img') {
      return 'medium';
    }
    if (errorData.type === 'promise') {
      return 'medium';
    }
    return 'low';
  }

  /**
   * Categorize error
   */
  private categorizeError(errorData: {
    type: ErrorReport['type'];
    message: string;
  }): ErrorReport['category'] {
    if (errorData.type === 'network') {
      return 'network';
    }
    if (errorData.type === 'resource') {
      return 'performance';
    }
    if (
      errorData.message.includes('SecurityError') ||
      errorData.message.includes('CORS')
    ) {
      return 'security';
    }
    if (errorData.message.includes('SyntaxError')) {
      return 'syntax';
    }
    if (errorData.type === 'promise') {
      return 'runtime';
    }
    return 'unknown';
  }

  /**
   * Generate error tags
   */
  private generateTags(errorData: {
    filename?: string;
    type: ErrorReport['type'];
    duration?: number;
  }): string[] {
    const tags: string[] = [];

    if (errorData.filename) {
      tags.push('client-side');
    }
    if (errorData.type === 'network') {
      tags.push('network');
    }
    if (errorData.type === 'resource') {
      tags.push('resource');
    }
    if (errorData.duration && errorData.duration > 1000) {
      tags.push('slow');
    }

    return tags;
  }

  /**
   * Generate unique error ID
   */
  private generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Get session ID
   */
  private getSessionId(): string {
    let sessionId = sessionStorage.getItem('error_session_id');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('error_session_id', sessionId);
    }
    return sessionId;
  }

  /**
   * Get user ID
   */
  private getUserId(): string | undefined {
    return localStorage.getItem('user_id') || undefined;
  }

  /**
   * Check rate limiting
   */
  private checkRateLimit(): boolean {
    const now = Date.now();
    const timeDiff = now - this.lastErrorTime;

    if (timeDiff < 60000) {
      // Within 1 minute
      this.errorRateLimit++;
      if (this.errorRateLimit > this.config.maxErrorsPerMinute) {
        return false;
      }
    } else {
      this.errorRateLimit = 1;
    }

    this.lastErrorTime = now;
    return true;
  }

  /**
   * Update error counters
   */
  private updateErrorCounts(errorReport: ErrorReport): void {
    const key = `${errorReport.type}_${errorReport.category}`;
    this.errorCounts.set(key, (this.errorCounts.get(key) || 0) + 1);
    this.errorCategories.set(
      errorReport.category,
      (this.errorCategories.get(errorReport.category) || 0) + 1
    );
  }

  /**
   * Log error to console
   */
  private logError(errorReport: ErrorReport): void {
    const emoji = this.getSeverityEmoji(errorReport.severity);
    // eslint-disable-next-line no-console
    console.group(`${emoji} Error Report: ${errorReport.id}`);
    // eslint-disable-next-line no-console
    if (process.env.NODE_ENV === 'development') console.error('Message:', errorReport.message); }
    // eslint-disable-next-line no-console
    if (process.env.NODE_ENV === 'development') console.error('Type:', errorReport.type); }
    // eslint-disable-next-line no-console
    if (process.env.NODE_ENV === 'development') console.error('Severity:', errorReport.severity); }
    // eslint-disable-next-line no-console
    if (process.env.NODE_ENV === 'development') console.error('Category:', errorReport.category); }
    // eslint-disable-next-line no-console
    if (process.env.NODE_ENV === 'development') console.error('Context:', errorReport.context); }
    // eslint-disable-next-line no-console
    if (process.env.NODE_ENV === 'development') console.error('Metadata:', errorReport.metadata); }
    if (errorReport.stack) {
      // eslint-disable-next-line no-console
      if (process.env.NODE_ENV === 'development') console.error('Stack:', errorReport.stack); }
    }
    // eslint-disable-next-line no-console
    console.groupEnd();
  }

  /**
   * Get severity emoji
   */
  private getSeverityEmoji(severity: ErrorReport['severity']): string {
    switch (severity) {
      case 'critical':
        return '🚨';
      case 'high':
        return '🔴';
      case 'medium':
        return '🟡';
      case 'low':
        return '🟢';
      default:
        return '❓';
    }
  }

  /**
   * Report to remote service
   */
  private async reportToRemote(errorReport: ErrorReport): Promise<void> {
    if (!this.config.remoteEndpoint) return;

    try {
      await fetch(this.config.remoteEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.config.apiKey}`,
        },
        body: JSON.stringify(errorReport),
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      if (process.env.NODE_ENV === 'development') console.warn('Failed to report error to remote service:', error); }
    }
  }

  /**
   * Aggregate error data
   */
  private aggregateError(errorReport: ErrorReport): void {
    // This could be expanded to include more sophisticated aggregation
    // eslint-disable-next-line no-console
    if (process.env.NODE_ENV === 'development') console.log(
      `📊 Error aggregated: ${errorReport.type} - ${errorReport.category}`
    ); }
  }

  /**
   * Assess performance impact
   */
  private assessPerformanceImpact(errorReport: ErrorReport): void {
    if (
      errorReport.type === 'resource' ||
      errorReport.category === 'performance'
    ) {
      // eslint-disable-next-line no-console
      if (process.env.NODE_ENV === 'development') console.warn('⚠️ Performance impact detected from error'); }
    }
  }

  /**
   * Attempt error recovery
   */
  private attemptErrorRecovery(): void {
    const recentErrors = this.errors.filter(
      error =>
        !error.resolved &&
        Date.now() - new Date(error.context.timestamp).getTime() < 300000 // Last 5 minutes
    );

    if (recentErrors.length > 5) {
       
      if (process.env['NODE_ENV'] === 'development') { 
        if (process.env.NODE_ENV === 'development') console.log('🔄 Attempting error recovery...'); } 
      }
      // Implement recovery strategies here
      this.clearErrorState();
    }
  }

  /**
   * Clear error state
   */
  private clearErrorState(): void {
    // Reset error counters
    this.errorCounts.clear();
    this.errorCategories.clear();
    this.errorRateLimit = 0;

     
    if (process.env['NODE_ENV'] === 'development') { 
      if (process.env.NODE_ENV === 'development') console.log('🧹 Error state cleared'); } 
    }
  }

  /**
   * Clean up old errors
   */
  private cleanupOldErrors(): void {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - this.config.errorRetentionDays);

    this.errors = this.errors.filter(
      error => new Date(error.context.timestamp) > cutoffDate
    );

     
    if (process.env['NODE_ENV'] === 'development') { 
      if (process.env.NODE_ENV === 'development') console.log(`🧹 Cleaned up old errors, ${this.errors.length} remaining`); } 
    }
  }

  /**
   * Get error statistics
   */
  public getErrorStatistics(): {
    totalErrors: number;
    errorsByType: Record<string, number>;
    errorsByCategory: Record<string, number>;
    errorsBySeverity: Record<string, number>;
    recentErrors: ErrorReport[];
  } {
    const errorsByType: Record<string, number> = {};
    const errorsByCategory: Record<string, number> = {};
    const errorsBySeverity: Record<string, number> = {};

    this.errors.forEach(error => {
      errorsByType[error.type] = (errorsByType[error.type] || 0) + 1;
      errorsByCategory[error.category] =
        (errorsByCategory[error.category] || 0) + 1;
      errorsBySeverity[error.severity] =
        (errorsBySeverity[error.severity] || 0) + 1;
    });

    const recentErrors = this.errors
      .filter(error => !error.resolved)
      .sort(
        (a, b) =>
          new Date(b.context.timestamp).getTime() -
          new Date(a.context.timestamp).getTime()
      )
      .slice(0, 10);

    return {
      totalErrors: this.errors.length,
      errorsByType,
      errorsByCategory,
      errorsBySeverity,
      recentErrors,
    };
  }

  /**
   * Export error data
   */
  public exportErrorData(): string {
    return JSON.stringify(
      {
        errors: this.errors,
        statistics: this.getErrorStatistics(),
        config: this.config,
        timestamp: new Date().toISOString(),
      },
      null,
      2
    );
  }

  /**
   * Manually report error
   */
  public reportError(message: string, context?: Partial<ErrorContext>): string {
    const errorReport = this.createErrorReport({
      type: 'custom',
      message,
      ...context,
    });

    this.processError(errorReport);
    return errorReport.id;
  }
}

// Export singleton instance
export const errorHandler = new EnhancedErrorHandler();

// Export class for custom instances
export {
  EnhancedErrorHandler,
  type ErrorReport,
  type ErrorContext,
  type ErrorHandlerConfig,
};
