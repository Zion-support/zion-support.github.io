/**
 * Error Handler
 * Comprehensive error handling and logging system
 */

export interface AppError {
  message: string;
  code?: string;
  statusCode?: number;
  stack?: string;
  context?: string;
  timestamp?: number;
}

export interface ErrorContext {
  component?: string;
  action?: string;
  userId?: string;
  sessionId?: string;
  url?: string;
  userAgent?: string;
  [key: string]: any;
}

class ErrorHandler {
  private errors: AppError[] = [];
  private maxErrors: number = 100;

  constructor() {
    this.setupGlobalErrorHandling();
  }

  /**
   * Setup global error handling
   */
  private setupGlobalErrorHandling(): void {
    if (typeof window === 'undefined') return;

    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.handleError(new Error(event.reason), {
        type: 'unhandled_promise_rejection',
        reason: event.reason,
      });
    });

    // Handle global errors
    window.addEventListener('error', (event) => {
      this.handleError(event.error || new Error(event.message), {
        type: 'global_error',
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
      });
    });
  }

  /**
   * Create a new AppError
   */
  createError(
    message: string,
    code?: string,
    statusCode?: number,
    context?: string
  ): AppError {
    return {
      message,
      code,
      statusCode,
      stack: new Error().stack,
      context,
      timestamp: Date.now(),
    };
  }

  /**
   * Handle an error
   */
  handleError(error: Error | AppError, context?: ErrorContext): void {
    const appError: AppError = this.normalizeError(error);
    
    // Add context information
    if (context) {
      appError.context = JSON.stringify(context);
    }

    // Add to errors array
    this.errors.push(appError);
    
    // Keep only the most recent errors
    if (this.errors.length > this.maxErrors) {
      this.errors = this.errors.slice(-this.maxErrors);
    }

    // Log error
    this.logError(appError, context?.component);

    // Track error in analytics
    try {
      import('./analytics').then(({ trackError }) => {
        trackError(new Error(appError.message), { 
          context: context?.component, 
          code: appError.code, 
          statusCode: appError.statusCode 
        });
      }).catch(() => {
        // Silently fail if analytics is not available
      });
    } catch {
      // Silently fail if analytics is not available
    }
  }

  /**
   * Normalize error to AppError format
   */
  private normalizeError(error: Error | AppError): AppError {
    if ('code' in error) {
      return error as AppError;
    }

    return {
      message: error.message,
      stack: error.stack,
      timestamp: Date.now(),
    };
  }

  /**
   * Log error
   */
  logError(error: AppError, context?: string): void {
    if (process.env.NODE_ENV === 'development') {
      console.error(`[${context || 'App'}] Error:`, error);
    }

    // In production, you would send this to your error monitoring service
    // Example: sendToErrorService(error, context);
  }

  /**
   * Get all errors
   */
  getErrors(): AppError[] {
    return [...this.errors];
  }

  /**
   * Get errors by code
   */
  getErrorsByCode(code: string): AppError[] {
    return this.errors.filter(error => error.code === code);
  }

  /**
   * Get recent errors
   */
  getRecentErrors(count: number = 10): AppError[] {
    return this.errors.slice(-count);
  }

  /**
   * Clear all errors
   */
  clearErrors(): void {
    this.errors = [];
  }

  /**
   * Get error statistics
   */
  getErrorStats(): {
    total: number;
    byCode: Record<string, number>;
    byContext: Record<string, number>;
    recent: number;
  } {
    const stats = {
      total: this.errors.length,
      byCode: {} as Record<string, number>,
      byContext: {} as Record<string, number>,
      recent: 0,
    };

    const oneHourAgo = Date.now() - 60 * 60 * 1000;

    this.errors.forEach(error => {
      // Count by code
      if (error.code) {
        stats.byCode[error.code] = (stats.byCode[error.code] || 0) + 1;
      }

      // Count by context
      if (error.context) {
        stats.byContext[error.context] = (stats.byContext[error.context] || 0) + 1;
      }

      // Count recent errors
      if (error.timestamp && error.timestamp > oneHourAgo) {
        stats.recent++;
      }
    });

    return stats;
  }
}

// Create singleton instance
export const errorHandler = new ErrorHandler();

// Export convenience functions
export const createError = (message: string, code?: string, statusCode?: number, context?: string) =>
  errorHandler.createError(message, code, statusCode, context);

export const handleError = (error: Error | AppError, context?: ErrorContext) =>
  errorHandler.handleError(error, context);

export const logError = (error: AppError, context?: string) =>
  errorHandler.logError(error, context);

export default errorHandler;