import React from 'react';
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
  private userId?: string;
  private isOnline = true;

  private constructor() {
    this.sessionId = this.generateSessionId();
    this.setupEventListeners();
    this.setupErrorHandlers();
  }

  static getInstance(): EnhancedErrorMonitoring {
    if (!EnhancedErrorMonitoring.instance) {
      EnhancedErrorMonitoring.instance = new EnhancedErrorMonitoring();
    }
    return EnhancedErrorMonitoring.instance;
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private setupEventListeners(): void {
    if (typeof window === 'undefined') return;

    // Online/offline status
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.flushErrorQueue();
    });

    window.addEventListener('offline', () => {
      this.isOnline = false;
    });

    // Page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        this.flushErrorQueue();
      }
    });
  }

  private setupErrorHandlers(): void {
    if (typeof window === 'undefined') return;

    // Global JavaScript errors
    window.addEventListener('error', (event) => {
      this.handleError(new Error(event.message), {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        category: 'javascript'
      });
    });

    // Unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.handleError(new Error(event.reason?.message || 'Unhandled promise rejection'), {
        reason: event.reason,
        category: 'promise'
      });
    });

    // Resource loading errors
    window.addEventListener('error', (event) => {
      if (event.target !== window) {
        const target = event.target as HTMLElement;
        const src = (target as HTMLImageElement).src || (target as HTMLAnchorElement).href;
        this.handleError(new Error(`Resource loading error: ${src}`), {
          resource: src,
          category: 'resource'
        });
      }
    }, true);

    // Network errors
    window.addEventListener('unhandledrejection', (event) => {
      if (event.reason?.status) {
        this.handleError(new Error(`Network error: ${event.reason.status} ${event.reason.statusText}`), {
          status: event.reason.status,
          statusText: event.reason.statusText,
          category: 'network'
        });
      }
    });
  }

  private handleError(error: Error, context: Partial<ErrorContext> = {}): void {
    const errorContext: ErrorContext = {
      sessionId: this.sessionId,
      userId: this.userId,
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      ...context
    };

    const errorReport: ErrorReport = {
      id: this.generateErrorId(error, errorContext),
      message: error.message,
      stack: error.stack,
      context: errorContext,
      severity: this.determineSeverity(error, errorContext),
      category: context.category || 'javascript',
      resolved: false,
      occurrences: 1,
      firstSeen: errorContext.timestamp,
      lastSeen: errorContext.timestamp
    };

    // Check if this error already exists
    const existingError = this.errorQueue.find(e => e.id === errorReport.id);
    if (existingError) {
      existingError.occurrences++;
      existingError.lastSeen = errorContext.timestamp;
    } else {
      this.errorQueue.push(errorReport);
      
      // Keep queue size manageable
      if (this.errorQueue.length > this.maxQueueSize) {
        this.errorQueue.shift();
      }
    }

    // Log in development
    if (process.env['NODE_ENV'] === 'development') {
      console.error('Error captured:', errorReport);
    }

    // Send to external service if online
    if (this.isOnline) {
      this.sendErrorReport(errorReport);
    }
  }

  private generateErrorId(error: Error, context: ErrorContext): string {
    const key = `${error.message}-${context.filename}-${context.lineno}-${context.colno}`;
    return btoa(key).replace(/[^a-zA-Z0-9]/g, '').substr(0, 16);
  }

  private determineSeverity(error: Error, context: ErrorContext): 'low' | 'medium' | 'high' | 'critical' {
    // Critical: Errors that prevent core functionality
    if (error.message.includes('Cannot read property') || 
        error.message.includes('Cannot read properties') ||
        error.message.includes('is not a function')) {
      return 'critical';
    }

    // High: Network errors, resource loading failures
    if (context.category === 'network' || context.category === 'resource') {
      return 'high';
    }

    // Medium: Promise rejections, component errors
    if (context.category === 'promise' || context.component) {
      return 'medium';
    }

    // Low: Everything else
    return 'low';
  }

  private async sendErrorReport(errorReport: ErrorReport): Promise<void> {
    try {
      // Send to Google Analytics if available
      if ('gtag' in window) {
        (window as any).gtag('event', 'exception', {
          description: errorReport.message,
          fatal: errorReport.severity === 'critical',
          custom_map: {
            error_id: errorReport.id,
            category: errorReport.category,
            severity: errorReport.severity,
            occurrences: errorReport.occurrences,
          }
        });
      }

      // Send to custom error reporting service
      await fetch('/api/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorReport)
      });
    } catch (error) {
      console.error('Failed to send error report:', error);
    }
  }

  private async flushErrorQueue(): Promise<void> {
    if (!this.isOnline || this.errorQueue.length === 0) return;

    const errorsToSend = [...this.errorQueue];
    this.errorQueue = [];

    for (const errorReport of errorsToSend) {
      await this.sendErrorReport(errorReport);
    }
  }

  /**
   * Manually report an error
   */
  reportError(error: Error, context: Partial<ErrorContext> = {}): void {
    this.handleError(error, context);
  }

  /**
   * Set user ID for error tracking
   */
  setUserId(userId: string): void {
    this.userId = userId;
  }

  /**
   * Get error reports
   */
  getErrorReports(): ErrorReport[] {
    return [...this.errorQueue];
  }

  /**
   * Get error summary
   */
  getErrorSummary(): {
    total: number;
    bySeverity: Record<string, number>;
    byCategory: Record<string, number>;
    unresolved: number;
  } {
    const total = this.errorQueue.length;
    const bySeverity: Record<string, number> = {};
    const byCategory: Record<string, number> = {};
    let unresolved = 0;

    this.errorQueue.forEach(error => {
      bySeverity[error.severity] = (bySeverity[error.severity] || 0) + 1;
      byCategory[error.category] = (byCategory[error.category] || 0) + 1;
      if (!error.resolved) unresolved++;
    });

    return {
      total,
      bySeverity,
      byCategory,
      unresolved
    };
  }

  /**
   * Mark error as resolved
   */
  markErrorResolved(errorId: string): void {
    const error = this.errorQueue.find(e => e.id === errorId);
    if (error) {
      error.resolved = true;
    }
  }

  /**
   * Clear all errors
   */
  clearErrors(): void {
    this.errorQueue = [];
  }
}

// Create singleton instance
export const errorMonitoring = EnhancedErrorMonitoring.getInstance();

// Export convenience functions
export const reportError = (error: Error, context?: Partial<ErrorContext>) => 
  errorMonitoring.reportError(error, context);
export const setUserId = (userId: string) => errorMonitoring.setUserId(userId);
export const getErrorReports = () => errorMonitoring.getErrorReports();
export const getErrorSummary = () => errorMonitoring.getErrorSummary();
export const markErrorResolved = (errorId: string) => errorMonitoring.markErrorResolved(errorId);
export const clearErrors = () => errorMonitoring.clearErrors();

export default errorMonitoring;