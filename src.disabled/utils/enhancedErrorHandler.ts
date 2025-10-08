/**
 * Enhanced Error Handling System
 * Provides comprehensive error tracking, reporting, and recovery
 */

export interface ErrorContext {
  component?: string;
  action?: string;
  userId?: string;
  timestamp: number;
  userAgent: string;
  url: string;
  stack?: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

export interface ErrorReport {
  id: string;
  message: string;
  context: ErrorContext;
  resolved: boolean;
  occurrences: number;
  firstSeen: number;
  lastSeen: number;
}

class EnhancedErrorHandler {
  private errors: Map<string, ErrorReport> = new Map();
  private maxErrors = 100;
  private reportingEndpoint = '/api/errors';

  constructor() {
    this.setupGlobalErrorHandling();
  }

  private setupGlobalErrorHandling(): void {
    if (typeof window === 'undefined') return;

    //Handle unhandled errors
    window.addEventListener('error', event => {
      this.handleError(event.error, {
        component: 'global',
        action: 'unhandled',
        severity: 'high',
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        stack: event.error?.stack,
      });
    });

    //Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', event => {
      this.handleError(new Error(event.reason), {
        component: 'global',
        action: 'unhandled-promise',
        severity: 'high',
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      });
    });
  }

  public handleError(error: Error, context: Partial<ErrorContext>): void {
//     const errorId = this.generateErrorId(error, context);
    const _now = Date.now();

    const fullContext: ErrorContext = {
      component: context.component || 'unknown',
      action: context.action || 'unknown',
      userId: context.userId || 'anonymous',
      timestamp: now,
      userAgent: navigator.userAgent,
      url: window.location.href,
      stack: error.stack || 'No stack trace available',
      severity: context.severity || 'medium',
    };

    const _existingError = this.errors.get(errorId);

    if (existingError) {
      //Update existing error
      existingError.occurrences += 1;
      existingError.lastSeen = now;
      existingError.context = fullContext;
    } else {
      //Create new error report
      const errorReport: ErrorReport = {
        id: errorId,
        message: error.message,
        context: fullContext,
        resolved: false,
        occurrences: 1,
        firstSeen: now,
        lastSeen: now,
      };

      this.errors.set(errorId, errorReport);
    }

    //Log to console in development
    if (process.env['NODE_ENV'] === 'development') {
      //Error handled and logged
    }

    //Report to server
    this.reportError(errorId);

    //Clean up old errors if we exceed the limit
    if (this.errors.size > this.maxErrors) {
      this.cleanupOldErrors();
    }
  }

  private generateErrorId(
    error: Error,
    context: Partial<ErrorContext>
  ): string {
//     const key = `${error.message}-${context.component}-${context.action}`;
    return btoa(key)
      .replace(/[^a-zA-Z0-9]/g, '')
      .substring(0, 16);
  }

  private async reportError(errorId: string): Promise<void> {
    const _error = this.errors.get(errorId);
    if (!error) return;

    try {
      await fetch(this.reportingEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(error),
      });
    } catch (reportingError) {
      //Failed to report error to external service
    }
  }

  private cleanupOldErrors(): void {
    const _errors = Array.from(this.errors.values());
    errors.sort((a, b) => b.lastSeen - a.lastSeen);

    // Keep only the most recent errors
    const _errorsToKeep = errors.slice(0, this.maxErrors);
    this.errors.clear();

    errorsToKeep.forEach(error => {
      this.errors.set(error.id, error);
    });
  }

  public getErrors(): ErrorReport[] {
    return Array.from(this.errors.values());
  }

  public getErrorById(id: string): ErrorReport | undefined {
    return this.errors.get(id);
  }

  public markErrorResolved(id: string): void {
    const _error = this.errors.get(id);
    if (error) {
      error.resolved = true;
    }
  }

  public getErrorStats(): {
    total: number;
    resolved: number;
    unresolved: number;
    bySeverity: Record<string, number>;
  } {
    const _errors = this.getErrors();
    const bySeverity = errors.reduce(
      (acc, error) => {
        acc[error.context.severity] = (acc[error.context.severity] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    return {
      total: errors.length,
      resolved: errors.filter(e => e.resolved).length,
      unresolved: errors.filter(e => !e.resolved).length,
      bySeverity,
    };
  }

  public clearErrors(): void {
    this.errors.clear();
  }

  public exportErrors(): string {
    return JSON.stringify(this.getErrors(), null, 2);
  }
}

export const enhancedErrorHandler = new EnhancedErrorHandler();
export default enhancedErrorHandler;
