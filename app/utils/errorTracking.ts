// Advanced Error Tracking and Reporting System
// Provides comprehensive error tracking with categorization and analytics

export enum ErrorSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical'
}

export enum ErrorCategory {
  Network = 'network',
  Validation = 'validation',
  Authentication = 'authentication',
  Authorization = 'authorization',
  Business = 'business',
  System = 'system'
}

export interface ErrorReport {
  id: string;
  message: string;
  stack?: string;
  severity: ErrorSeverity;
  category: ErrorCategory;
  timestamp: Date;
  userId?: string;
  sessionId?: string;
  url?: string;
  userAgent?: string;
  metadata?: Record<string, any>;
}

export class ErrorTracker {
  private static instance: ErrorTracker;
  private errors: ErrorReport[] = [];

  static getInstance(): ErrorTracker {
    if (!ErrorTracker.instance) {
      ErrorTracker.instance = new ErrorTracker();
    }
    return ErrorTracker.instance;
  }

  trackError(error: Error, severity: ErrorSeverity = ErrorSeverity.MEDIUM, category: ErrorCategory = ErrorCategory.System): void {
    const errorReport: ErrorReport = {
      id: this.generateId(),
      message: error.message,
      stack: error.stack,
      severity,
      category,
      timestamp: new Date(),
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined
    };

    this.errors.push(errorReport);
    this.reportError(errorReport);
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  private reportError(errorReport: ErrorReport): void {
    // In a real application, you would send this to your error reporting service
    console.error('Error tracked:', errorReport);
  }

  getErrors(): ErrorReport[] {
    return [...this.errors];
  }

  clearErrors(): void {
    this.errors = [];
  }
}

export default ErrorTracker;