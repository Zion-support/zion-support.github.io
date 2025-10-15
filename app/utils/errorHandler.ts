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

    // Store in localStorage for debugging
    this.storeErrorLocally(errorReport);
  }

  private async sendToExternalService(errorReport: ErrorReport): Promise<void> {
    try {
      // Send to your error monitoring service
      await fetch('/api/error-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorReport),
      });
    } catch (error) {
      // Fallback: store in localStorage if external service fails
      console.warn('Failed to send error to external service:', error);
      this.storeErrorLocally(errorReport);
    }
  }

  private storeErrorLocally(errorReport: ErrorReport): void {
    try {
      const existingErrors = JSON.parse(localStorage.getItem('errorLogs') || '[]');
      existingErrors.push(errorReport);
      // Keep only the last 50 errors
      const recentErrors = existingErrors.slice(-50);
      localStorage.setItem('errorLogs', JSON.stringify(recentErrors));
    } catch (error) {
      // Ignore localStorage errors
      console.warn('Failed to store error locally:', error);
    }
  }
}

export const errorHandler = new ErrorHandler();