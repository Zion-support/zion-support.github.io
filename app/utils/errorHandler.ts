import { logger } from './logger';

export interface ErrorContext {
  component?: string;
  action?: string;
  userId?: string;
  sessionId?: string;
  url?: string;
  userAgent?: string;
  timestamp?: string;
  additionalData?: any;
}

export interface ErrorReport {
  id: string;
  message: string;
  stack?: string;
  context: ErrorContext;
  severity: 'low' | 'medium' | 'high' | 'critical';
  resolved: boolean;
  createdAt: string;
  resolvedAt?: string;
}

class ErrorHandler {
  private static instance: ErrorHandler;
  private errors: ErrorReport[] = [];
  private maxErrors = 100;

  static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  private generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private determineSeverity(error: Error, context: ErrorContext): 'low' | 'medium' | 'high' | 'critical' {
    // Critical: Network errors, authentication failures, payment issues
    if (error.message.includes('Network') || 
        error.message.includes('Authentication') ||
        error.message.includes('Payment') ||
        error.message.includes('Security')) {
      return 'critical';
    }

    // High: Component crashes, API failures, data corruption
    if (error.message.includes('Component') ||
        error.message.includes('API') ||
        error.message.includes('Data') ||
        error.message.includes('Render')) {
      return 'high';
    }

    // Medium: Performance issues, validation errors
    if (error.message.includes('Performance') ||
        error.message.includes('Validation') ||
        error.message.includes('Timeout')) {
      return 'medium';
    }

    // Low: UI issues, minor bugs
    return 'low';
  }

  reportError(error: Error, context: ErrorContext = {});: string {
    const errorId = this.generateErrorId();
    const errorReport: ErrorReport = {
      id: errorId,
      message: error.message,
      stack: error.stack,
      context: {
        ...context,
        url: context.url || window.location.href,
        userAgent: context.userAgent || navigator.userAgent,
        timestamp: context.timestamp || new Date().toISOString(),
      },
      severity: this.determineSeverity(error, context),
      resolved: false,
      createdAt: new Date().toISOString(),
    };

    this.errors.push(errorReport);

    // Keep only the last maxErrors entries
    if (this.errors.length > this.maxErrors) {
      this.errors = this.errors.slice(-this.maxErrors);
    }

    // Log the error
    logger.error('Error reported', {
      errorId,
      message: error.message,
      severity: errorReport.severity,
      context: errorReport.context,
    }, error);

    // Send to external error reporting service in production
    if (process.env.NODE_ENV === 'production') {
      this.sendToExternalService(errorReport);
    }

    return errorId;
  }

  private async sendToExternalService(errorReport: ErrorReport): Promise<void> {
    try {
      await fetch('/api/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorReport),
      });;
    } catch (error) {
      logger.error('Failed to send error to external service', { error });;
    }
  }

  getErrors(): ErrorReport[] {
    return [...this.errors];
  }

  getErrorById(id: string): ErrorReport | undefined {
    return this.errors.find(error => error.id === id);
  }

  resolveError(id: string): boolean {
    const error = this.errors.find(e => e.id === id);
    if (error) {
      error.resolved = true;
      error.resolvedAt = new Date().toISOString();
      logger.info('Error resolved', { errorId: id });;
      return true;
    }
    return false;
  }

  clearResolvedErrors(): void {
    this.errors = this.errors.filter(error => !error.resolved);
    logger.info('Cleared resolved errors');
  }

  clearAllErrors(): void {
    this.errors = [];
    logger.info('Cleared all errors');
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
      bySeverity,
    };
  }
}

export const errorHandler = ErrorHandler.getInstance();
export default errorHandler;