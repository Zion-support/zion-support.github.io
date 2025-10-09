/**
 * Enhanced Error Handler Utility
 * Provides comprehensive error tracking and handling capabilities
 */

export interface ErrorInfo {
  id: string;
  message: string;
  stack?: string;
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  context: {
    timestamp: string;
    url: string;
    userAgent: string;
    component?: string;
    userId?: string;
    sessionId?: string;
  };
  metadata?: Record<string, any>;
}

export interface ErrorStats {
  totalErrors: number;
  errorsByType: Record<string, number>;
  errorsByCategory: Record<string, number>;
  errorsBySeverity: Record<string, number>;
  recentErrors: ErrorInfo[];
}

class EnhancedErrorHandler {
  private errors: ErrorInfo[] = [];
  private maxErrors = 1000;
  private errorCounts: Record<string, number> = {};

  constructor() {
    this.setupGlobalErrorHandlers();
  }

  private setupGlobalErrorHandlers() {
    if (typeof window === 'undefined') return;

    // Global error handler
    window.addEventListener('error', (event) => {
      this.handleError(new Error(event.message), {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.handleError(
        new Error(event.reason?.message || 'Unhandled Promise Rejection'),
        { reason: event.reason }
      );
    });
  }

  handleError(error: Error, context?: Record<string, any>): string {
    const errorInfo: ErrorInfo = {
      id: this.generateErrorId(),
      message: error.message,
      stack: error.stack,
      type: error.constructor.name,
      severity: this.determineSeverity(error),
      context: {
        timestamp: new Date().toISOString(),
        url: typeof window !== 'undefined' ? window.location.href : 'server',
        userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'server',
        ...context,
      },
      metadata: context,
    };

    this.addError(errorInfo);
    this.logError(errorInfo);

    return errorInfo.id;
  }

  private generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private determineSeverity(error: Error): 'low' | 'medium' | 'high' | 'critical' {
    const message = error.message.toLowerCase();
    
    if (message.includes('network') || message.includes('fetch')) {
      return 'medium';
    }
    if (message.includes('chunk') || message.includes('loading')) {
      return 'low';
    }
    if (message.includes('memory') || message.includes('out of memory')) {
      return 'high';
    }
    if (message.includes('syntax') || message.includes('reference')) {
      return 'critical';
    }
    
    return 'medium';
  }

  private addError(errorInfo: ErrorInfo) {
    this.errors.unshift(errorInfo);
    
    // Keep only the most recent errors
    if (this.errors.length > this.maxErrors) {
      this.errors = this.errors.slice(0, this.maxErrors);
    }

    // Update error counts
    this.errorCounts[errorInfo.type] = (this.errorCounts[errorInfo.type] || 0) + 1;
  }

  private logError(errorInfo: ErrorInfo) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error tracked:', errorInfo);
    }

    // In production, you would send this to an external service
    if (process.env.NODE_ENV === 'production') {
      this.sendToExternalService(errorInfo);
    }
  }

  private sendToExternalService(errorInfo: ErrorInfo) {
    // In a real implementation, this would send data to an external service
    console.log('Sending error to external service:', errorInfo);
  }

  getErrorStats(): ErrorStats {
    const errorsByType: Record<string, number> = {};
    const errorsByCategory: Record<string, number> = {};
    const errorsBySeverity: Record<string, number> = {};

    this.errors.forEach(error => {
      errorsByType[error.type] = (errorsByType[error.type] || 0) + 1;
      errorsBySeverity[error.severity] = (errorsBySeverity[error.severity] || 0) + 1;
      
      // Categorize errors
      const category = this.categorizeError(error);
      errorsByCategory[category] = (errorsByCategory[category] || 0) + 1;
    });

    return {
      totalErrors: this.errors.length,
      errorsByType,
      errorsByCategory,
      errorsBySeverity,
      recentErrors: this.errors.slice(0, 10), // Last 10 errors
    };
  }

  private categorizeError(error: ErrorInfo): string {
    if (error.type.includes('NetworkError') || error.message.includes('fetch')) {
      return 'Network';
    }
    if (error.type.includes('TypeError') || error.type.includes('ReferenceError')) {
      return 'JavaScript';
    }
    if (error.message.includes('chunk') || error.message.includes('loading')) {
      return 'Loading';
    }
    if (error.message.includes('memory')) {
      return 'Memory';
    }
    return 'Other';
  }

  clearErrors() {
    this.errors = [];
    this.errorCounts = {};
  }

  getErrors(): ErrorInfo[] {
    return [...this.errors];
  }
}

export const errorHandler = new EnhancedErrorHandler();
export default errorHandler;