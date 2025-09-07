export interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
  errorBoundary?: string;
  timestamp: number;
  userAgent?: string;
  url?: string;
  userId?: string;
}

export interface ErrorReport {
  id: string;
  type: 'error' | 'warning' | 'info';
  severity: 'low' | 'medium' | 'high' | 'critical';
  category: 'javascript' | 'network' | 'resource' | 'user' | 'system';
  error: ErrorInfo;
  context?: Record<string, any>;
  resolved?: boolean;
}

class ErrorHandler {
  private errors: ErrorReport[] = [];
  private maxErrors = 100;
  private reportEndpoint?: string;

  constructor(reportEndpoint?: string) {
    this.reportEndpoint = reportEndpoint;
    this.setupGlobalErrorHandlers();
  }

  private setupGlobalErrorHandlers() {
    if (typeof window === 'undefined') return;

    // Handle unhandled JavaScript errors
    window.addEventListener('error', (event) => {
      this.handleError({
        message: event.message,
        stack: event.error?.stack,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      }, {
        type: 'error',
        severity: 'high',
        category: 'javascript',
        context: {
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
        }
      });
    });

    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.handleError({
        message: event.reason?.message || 'Unhandled promise rejection',
        stack: event.reason?.stack,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      }, {
        type: 'error',
        severity: 'high',
        category: 'javascript',
        context: {
          reason: event.reason,
        }
      });
    });

    // Handle resource loading errors
    window.addEventListener('error', (event) => {
      if (event.target !== window) {
        this.handleError({
          message: `Resource loading error: ${event.target}`,
          timestamp: Date.now(),
          userAgent: navigator.userAgent,
          url: window.location.href,
        }, {
          type: 'error',
          severity: 'medium',
          category: 'resource',
          context: {
            target: event.target,
            type: (event.target as any)?.tagName,
          }
        });
      }
    }, true);
  }

  public handleError(error: ErrorInfo, metadata: Partial<ErrorReport> = {}) {
    const errorReport: ErrorReport = {
      id: this.generateErrorId(),
      type: 'error',
      severity: 'medium',
      category: 'javascript',
      error,
      context: {},
      resolved: false,
      ...metadata,
    };

    this.errors.push(errorReport);
    
    // Keep only the most recent errors
    if (this.errors.length > this.maxErrors) {
      this.errors = this.errors.slice(-this.maxErrors);
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error captured:', errorReport);
    }

    // Send to reporting endpoint if available
    if (this.reportEndpoint) {
      this.sendErrorReport(errorReport);
    }

    return errorReport.id;
  }

  public handleWarning(message: string, context?: Record<string, any>) {
    const errorReport: ErrorReport = {
      id: this.generateErrorId(),
      type: 'warning',
      severity: 'low',
      category: 'user',
      error: {
        message,
        timestamp: Date.now(),
        userAgent: typeof window !== 'undefined' ? navigator.userAgent : undefined,
        url: typeof window !== 'undefined' ? window.location.href : undefined,
      },
      context,
      resolved: false,
    };

    this.errors.push(errorReport);
    return errorReport.id;
  }

  public handleInfo(message: string, context?: Record<string, any>) {
    const errorReport: ErrorReport = {
      id: this.generateErrorId(),
      type: 'info',
      severity: 'low',
      category: 'system',
      error: {
        message,
        timestamp: Date.now(),
        userAgent: typeof window !== 'undefined' ? navigator.userAgent : undefined,
        url: typeof window !== 'undefined' ? window.location.href : undefined,
      },
      context,
      resolved: false,
    };

    this.errors.push(errorReport);
    return errorReport.id;
  }

  public getErrors(): ErrorReport[] {
    return [...this.errors];
  }

  public getErrorsBySeverity(severity: ErrorReport['severity']): ErrorReport[] {
    return this.errors.filter(error => error.severity === severity);
  }

  public getErrorsByCategory(category: ErrorReport['category']): ErrorReport[] {
    return this.errors.filter(error => error.category === category);
  }

  public getUnresolvedErrors(): ErrorReport[] {
    return this.errors.filter(error => !error.resolved);
  }

  public resolveError(errorId: string): boolean {
    const error = this.errors.find(e => e.id === errorId);
    if (error) {
      error.resolved = true;
      return true;
    }
    return false;
  }

  public clearErrors(): void {
    this.errors = [];
  }

  public clearResolvedErrors(): void {
    this.errors = this.errors.filter(error => !error.resolved);
  }

  private generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private async sendErrorReport(errorReport: ErrorReport): Promise<void> {
    if (!this.reportEndpoint) return;

    try {
      await fetch(this.reportEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorReport),
      });
    } catch (error) {
      console.error('Failed to send error report:', error);
    }
  }

  public getErrorSummary(): {
    total: number;
    byType: Record<string, number>;
    bySeverity: Record<string, number>;
    byCategory: Record<string, number>;
    unresolved: number;
  } {
    const summary = {
      total: this.errors.length,
      byType: {} as Record<string, number>,
      bySeverity: {} as Record<string, number>,
      byCategory: {} as Record<string, number>,
      unresolved: 0,
    };

    this.errors.forEach(error => {
      summary.byType[error.type] = (summary.byType[error.type] || 0) + 1;
      summary.bySeverity[error.severity] = (summary.bySeverity[error.severity] || 0) + 1;
      summary.byCategory[error.category] = (summary.byCategory[error.category] || 0) + 1;
      if (!error.resolved) summary.unresolved++;
    });

    return summary;
  }
}

// Create singleton instance
export const errorHandler = new ErrorHandler(process.env.NEXT_PUBLIC_ERROR_REPORTING_ENDPOINT);

// Export convenience functions
export const handleError = (error: ErrorInfo, metadata?: Partial<ErrorReport>) => 
  errorHandler.handleError(error, metadata);

export const handleWarning = (message: string, context?: Record<string, any>) => 
  errorHandler.handleWarning(message, context);

export const handleInfo = (message: string, context?: Record<string, any>) => 
  errorHandler.handleInfo(message, context);

export const getErrors = () => errorHandler.getErrors();
export const getErrorSummary = () => errorHandler.getErrorSummary();
export const resolveError = (errorId: string) => errorHandler.resolveError(errorId);
export const clearErrors = () => errorHandler.clearErrors();

export default errorHandler;