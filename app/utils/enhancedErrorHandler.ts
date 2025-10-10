'use client';

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
  category: 'syntax' | 'runtime' | 'network' | 'security' | 'performance' | 'unknown';
  fingerprint: string;
  count: number;
  firstOccurrence: string;
  lastOccurrence: string;
}

interface ErrorHandlerConfig {
  enableReporting: boolean;
  enableRecovery: boolean;
  enableRetry: boolean;
  maxRetries: number;
  retryDelay: number;
  enableOfflineQueue: boolean;
  enableUserFeedback: boolean;
  enableAutoRecovery: boolean;
  enablePerformanceTracking: boolean;
}

class EnhancedErrorHandler {
  private config: ErrorHandlerConfig;
  private errorQueue: ErrorReport[] = [];
  private errorCounts: Map<string, number> = new Map();
  private retryAttempts: Map<string, number> = new Map();
  private isInitialized = false;

  constructor(config: Partial<ErrorHandlerConfig> = {}) {
    this.config = {
      enableReporting: true,
      enableRecovery: true,
      enableRetry: true,
      maxRetries: 3,
      retryDelay: 1000,
      enableOfflineQueue: true,
      enableUserFeedback: true,
      enableAutoRecovery: true,
      enablePerformanceTracking: true,
      ...config
    };

    this.initialize();
  }

  /**
   * Initialize error handler
   */
  private initialize(): void {
    if (this.isInitialized) return;

    this.setupGlobalErrorHandlers();
    this.setupUnhandledRejectionHandler();
    this.setupResourceErrorHandler();
    this.setupNetworkErrorHandler();
    this.setupPerformanceErrorHandler();
    this.setupOfflineQueue();

    this.isInitialized = true;
  }

  /**
   * Setup global error handlers
   */
  private setupGlobalErrorHandlers(): void {
    window.addEventListener('error', (event) => {
      this.handleError(event.error, {
        type: 'javascript',
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno
      });
    });

    window.addEventListener('unhandledrejection', (event) => {
      this.handleError(event.reason, {
        type: 'promise',
        message: event.reason?.message || 'Unhandled Promise Rejection'
      });
    });
  }

  /**
   * Setup unhandled rejection handler
   */
  private setupUnhandledRejectionHandler(): void {
    window.addEventListener('unhandledrejection', (event) => {
      this.handleError(event.reason, {
        type: 'promise',
        message: event.reason?.message || 'Unhandled Promise Rejection'
      });
    });
  }

  /**
   * Setup resource error handler
   */
  private setupResourceErrorHandler(): void {
    window.addEventListener('error', (event) => {
      if (event.target !== window) {
        this.handleError(new Error(`Resource failed to load: ${event.target}`), {
          type: 'resource',
          message: `Failed to load resource: ${event.target}`,
          element: event.target
        });
      }
    }, true);
  }

  /**
   * Setup network error handler
   */
  private setupNetworkErrorHandler(): void {
    // Override fetch to catch network errors
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      try {
        const response = await originalFetch(...args);
        if (!response.ok) {
          this.handleError(new Error(`Network error: ${response.status}`), {
            type: 'network',
            message: `HTTP ${response.status}: ${response.statusText}`,
            url: args[0] as string
          });
        }
        return response;
      } catch (error) {
        this.handleError(error as Error, {
          type: 'network',
          message: 'Network request failed',
          url: args[0] as string
        });
        throw error;
      }
    };
  }

  /**
   * Setup performance error handler
   */
  private setupPerformanceErrorHandler(): void {
    if (!this.config.enablePerformanceTracking) return;

    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) { // Tasks longer than 50ms
            this.handleError(new Error('Long task detected'), {
              type: 'performance',
              message: `Long task: ${entry.duration}ms`,
              duration: entry.duration
            });
          }
        }
      });
      observer.observe({ entryTypes: ['longtask'] });
    }
  }

  /**
   * Setup offline queue
   */
  private setupOfflineQueue(): void {
    if (!this.config.enableOfflineQueue) return;

    window.addEventListener('online', () => {
      this.flushOfflineQueue();
    });

    // Load offline queue on initialization
    this.loadOfflineQueue();
  }

  /**
   * Handle error
   */
  private handleError(error: Error, context: Partial<ErrorContext> = {}): void {
    const errorReport = this.createErrorReport(error, context);
    
    // Update error counts
    const count = this.errorCounts.get(errorReport.fingerprint) || 0;
    this.errorCounts.set(errorReport.fingerprint, count + 1);
    errorReport.count = count + 1;

    // Add to queue
    this.errorQueue.push(errorReport);

    // Attempt recovery
    if (this.config.enableRecovery) {
      this.attemptRecovery(error, errorReport);
    }

    // Report error
    if (this.config.enableReporting) {
      this.reportError(errorReport);
    }

    // Show user feedback
    if (this.config.enableUserFeedback && errorReport.severity === 'critical') {
      this.showUserFeedback(errorReport);
    }
  }

  /**
   * Create error report
   */
  private createErrorReport(error: Error, context: Partial<ErrorContext> = {}): ErrorReport {
    const fingerprint = this.generateFingerprint(error, context);
    const now = new Date().toISOString();

    return {
      id: this.generateId(),
      type: context.type || 'javascript',
      message: error.message,
      stack: error.stack,
      context: {
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: now,
        ...context
      },
      severity: this.determineSeverity(error, context),
      category: this.categorizeError(error, context),
      fingerprint,
      count: 1,
      firstOccurrence: now,
      lastOccurrence: now
    };
  }

  /**
   * Generate error fingerprint
   */
  private generateFingerprint(error: Error, context: Partial<ErrorContext> = {}): string {
    const key = `${error.message}-${context.component}-${context.url}`;
    return btoa(key).replace(/[^a-zA-Z0-9]/g, '');
  }

  /**
   * Determine error severity
   */
  private determineSeverity(error: Error, context: Partial<ErrorContext> = {}): ErrorReport['severity'] {
    if (error.message.includes('ChunkLoadError') || error.message.includes('Loading chunk')) {
      return 'medium';
    }
    
    if (error.message.includes('NetworkError') || error.message.includes('fetch')) {
      return 'medium';
    }
    
    if (error.message.includes('SyntaxError') || error.message.includes('ReferenceError')) {
      return 'high';
    }
    
    if (error.message.includes('TypeError') && error.message.includes('Cannot read property')) {
      return 'high';
    }
    
    return 'low';
  }

  /**
   * Categorize error
   */
  private categorizeError(error: Error, context: Partial<ErrorContext> = {}): ErrorReport['category'] {
    if (error.message.includes('SyntaxError')) {
      return 'syntax';
    }
    
    if (error.message.includes('NetworkError') || error.message.includes('fetch')) {
      return 'network';
    }
    
    if (error.message.includes('SecurityError')) {
      return 'security';
    }
    
    if (context.type === 'performance') {
      return 'performance';
    }
    
    return 'runtime';
  }

  /**
   * Attempt recovery
   */
  private attemptRecovery(error: Error, errorReport: ErrorReport): void {
    if (!this.config.enableAutoRecovery) return;

    const fingerprint = errorReport.fingerprint;
    const attempts = this.retryAttempts.get(fingerprint) || 0;

    if (attempts < this.config.maxRetries) {
      this.retryAttempts.set(fingerprint, attempts + 1);
      
      setTimeout(() => {
        this.executeRecoveryStrategy(error, errorReport);
      }, this.config.retryDelay * Math.pow(2, attempts));
    }
  }

  /**
   * Execute recovery strategy
   */
  private executeRecoveryStrategy(error: Error, errorReport: ErrorReport): void {
    switch (errorReport.category) {
      case 'network':
        this.recoverFromNetworkError(error, errorReport);
        break;
      case 'runtime':
        this.recoverFromRuntimeError(error, errorReport);
        break;
      case 'performance':
        this.recoverFromPerformanceError(error, errorReport);
        break;
      default:
        this.recoverFromGenericError(error, errorReport);
    }
  }

  /**
   * Recover from network error
   */
  private recoverFromNetworkError(error: Error, errorReport: ErrorReport): void {
    // Retry failed requests
    if (error.message.includes('fetch')) {
      // Implementation would retry the failed request
      console.log('Retrying failed network request...');
    }
  }

  /**
   * Recover from runtime error
   */
  private recoverFromRuntimeError(error: Error, errorReport: ErrorReport): void {
    // Reload page for critical errors
    if (errorReport.severity === 'critical') {
      window.location.reload();
    }
  }

  /**
   * Recover from performance error
   */
  private recoverFromPerformanceError(error: Error, errorReport: ErrorReport): void {
    // Clear caches or reduce load
    if ('caches' in window) {
      caches.keys().then(names => {
        names.forEach(name => caches.delete(name));
      });
    }
  }

  /**
   * Recover from generic error
   */
  private recoverFromGenericError(error: Error, errorReport: ErrorReport): void {
    // Log error and continue
    console.warn('Error recovered:', error.message);
  }

  /**
   * Report error
   */
  private async reportError(errorReport: ErrorReport): Promise<void> {
    try {
      if (navigator.onLine) {
        await this.sendErrorReport(errorReport);
      } else {
        this.addToOfflineQueue(errorReport);
      }
    } catch (error) {
      console.error('Failed to report error:', error);
    }
  }

  /**
   * Send error report
   */
  private async sendErrorReport(errorReport: ErrorReport): Promise<void> {
    const response = await fetch('/api/errors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(errorReport)
    });

    if (!response.ok) {
      throw new Error(`Failed to send error report: ${response.status}`);
    }
  }

  /**
   * Add to offline queue
   */
  private addToOfflineQueue(errorReport: ErrorReport): void {
    if (!this.config.enableOfflineQueue) return;

    const queue = this.getOfflineQueue();
    queue.push(errorReport);
    localStorage.setItem('error-queue', JSON.stringify(queue));
  }

  /**
   * Get offline queue
   */
  private getOfflineQueue(): ErrorReport[] {
    try {
      const stored = localStorage.getItem('error-queue');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  /**
   * Load offline queue
   */
  private loadOfflineQueue(): void {
    const queue = this.getOfflineQueue();
    this.errorQueue.push(...queue);
    localStorage.removeItem('error-queue');
  }

  /**
   * Flush offline queue
   */
  private async flushOfflineQueue(): Promise<void> {
    const queue = this.getOfflineQueue();
    for (const errorReport of queue) {
      try {
        await this.sendErrorReport(errorReport);
      } catch (error) {
        console.error('Failed to flush error report:', error);
      }
    }
    localStorage.removeItem('error-queue');
  }

  /**
   * Show user feedback
   */
  private showUserFeedback(errorReport: ErrorReport): void {
    // Implementation would show user-friendly error message
    console.error('Critical error occurred:', errorReport.message);
  }

  /**
   * Generate unique ID
   */
  private generateId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Get error statistics
   */
  getErrorStatistics(): {
    totalErrors: number;
    errorCounts: Record<string, number>;
    errorTypes: Record<string, number>;
    errorSeverities: Record<string, number>;
  } {
    const errorTypes: Record<string, number> = {};
    const errorSeverities: Record<string, number> = {};

    this.errorQueue.forEach(error => {
      errorTypes[error.type] = (errorTypes[error.type] || 0) + 1;
      errorSeverities[error.severity] = (errorSeverities[error.severity] || 0) + 1;
    });

    return {
      totalErrors: this.errorQueue.length,
      errorCounts: Object.fromEntries(this.errorCounts),
      errorTypes,
      errorSeverities
    };
  }

  /**
   * Clear error queue
   */
  clearErrorQueue(): void {
    this.errorQueue = [];
    this.errorCounts.clear();
    this.retryAttempts.clear();
  }
}

// Create singleton instance
export const errorHandler = new EnhancedErrorHandler();

export default EnhancedErrorHandler;