import { ErrorReport, ErrorContext, ErrorSeverity } from '../types/app.types';

class ErrorHandler {
  private errors: ErrorReport[] = [];

  reportError(error: Error, context: ErrorContext = {}): string {
    const errorId = this.generateErrorId();
    const errorReport: ErrorReport = {
      id: errorId,
      message: error.message,
      stack: error.stack,
      context: {
        ...context,
        url: context.url || window.location.href,
        userAgent: context.userAgent || navigator.userAgent,
        timestamp: context.timestamp || new Date().toISOString()
      },
      severity: this.determineSeverity(error),
      resolved: false,
      createdAt: new Date().toISOString()
    };

    this.errors.push(errorReport);
    this.logError(errorReport);
    return errorId;
  }

  getErrors(): ErrorReport[] {
    return [...this.errors];
  }

  getErrorById(id: string): ErrorReport | undefined {
    return this.errors.find(error => error.id === id);
  }

  getErrorStats(): {
    total: number;
    resolved: number;
    unresolved: number;
    bySeverity: Record<string, number>;
  } {
    const total = this.errors.length;
    const resolved = this.errors.filter(e => e.resolved).length;
    const unresolved = total - resolved;
    const bySeverity = this.errors.reduce((acc, error) => {
      acc[error.severity] = (acc[error.severity] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      total,
      resolved,
      unresolved,
      bySeverity
    };
  }

  private generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private determineSeverity(error: Error): ErrorSeverity {
    if (error.name === 'ChunkLoadError' || error.message.includes('Loading chunk')) {
      return 'low';
    }
    if (error.message.includes('Network') || error.message.includes('fetch')) {
      return 'medium';
    }
    if (error.message.includes('TypeError') || error.message.includes('ReferenceError')) {
      return 'high';
    }
    return 'medium';
  }

  private logError(errorReport: ErrorReport): void {
    // Log to console only in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error reported:', errorReport);
    }
    
    // Send to external logging service in production
    if (process.env.NODE_ENV === 'production') {
      this.sendToExternalService(errorReport);
    }
  }

  private async sendToExternalService(errorReport: ErrorReport): Promise<void> {
    try {
      // Send to your preferred error tracking service
      // Example implementations for different services:
      
      // Sentry
      if (typeof window !== 'undefined' && (window as any).Sentry) {
        (window as any).Sentry.captureException(new Error(errorReport.message), {
          tags: {
            component: errorReport.context.component,
            action: errorReport.context.action,
          },
          extra: errorReport.context,
        });
      }
      
      // LogRocket
      if (typeof window !== 'undefined' && (window as any).LogRocket) {
        (window as any).LogRocket.captureException(new Error(errorReport.message));
      }
      
      // Custom API endpoint
      await fetch('/api/error-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorReport),
      });
    } catch (error) {
      console.warn('Failed to send error to external service:', error);
    }
  }

  /**
   * Clear all errors
   */
  clearErrors(): void {
    this.errors = [];
  }

  /**
   * Mark an error as resolved
   * @param errorId - ID of the error to resolve
   */
  resolveError(errorId: string): boolean {
    const error = this.errors.find(e => e.id === errorId);
    if (error) {
      error.resolved = true;
      return true;
    }
    return false;
  }

  /**
   * Get errors by severity
   * @param severity - Severity level to filter by
   * @returns Array of errors with the specified severity
   */
  getErrorsBySeverity(severity: ErrorSeverity): ErrorReport[] {
    return this.errors.filter(error => error.severity === severity);
  }

  /**
   * Get recent errors (last N errors)
   * @param count - Number of recent errors to return
   * @returns Array of recent errors
   */
  getRecentErrors(count: number = 10): ErrorReport[] {
    return this.errors
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, count);
  }
}

export const errorHandler = new ErrorHandler();