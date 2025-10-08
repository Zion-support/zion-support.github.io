/**
 * Advanced Error Tracking and Reporting System
 * Provides comprehensive error tracking with categorization and analytics
 */

import { logger } from './logger';

export enum ErrorSeverity {
  Low = 'low',
  Medium = 'medium',
  High = 'high',
  Critical = 'critical',
}

export enum ErrorCategory {
  Network = 'network',
  Validation = 'validation',
  Authorization = 'authorization',
  Runtime = 'runtime',
  Configuration = 'configuration',
  ExternalService = 'external_service',
}

export interface ErrorMetadata {
  category: ErrorCategory;
  severity: ErrorSeverity;
  userId?: string;
  sessionId?: string;
  context?: Record<string, unknown>;
  tags?: string[];
  timestamp: number;
  stackTrace?: string;
  userAgent?: string;
  url?: string;
}

export interface TrackedError {
  id: string;
  message: string;
  metadata: ErrorMetadata;
  occurrences: number;
  firstSeen: number;
  lastSeen: number;
}

class ErrorTrackingService {
  private static instance: ErrorTrackingService;
  private errors: Map<string, TrackedError> = new Map();
  private errorListeners: Array<(error: TrackedError) => void> = [];
  private maxStoredErrors = 1000;

  private constructor() {
    this.setupGlobalErrorHandlers();
  }

  static getInstance(): ErrorTrackingService {
    if (!ErrorTrackingService.instance) {
      ErrorTrackingService.instance = new ErrorTrackingService();
    }
    return ErrorTrackingService.instance;
  }

  /**
   * Set up global error handlers
   */
  private setupGlobalErrorHandlers(): void {
    if (typeof window === 'undefined') return;

    // Handle unhandled errors
    window.addEventListener('error', event => {
      this.trackError(event.error || new Error(event.message), {
        category: ErrorCategory.Runtime,
        severity: ErrorSeverity.High,
        context: {
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
        },
      });
    });

    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', event => {
      this.trackError(new Error(`Unhandled Promise Rejection: ${event.reason}`), {
        category: ErrorCategory.Runtime,
        severity: ErrorSeverity.Critical,
        context: { reason: event.reason },
      });
    });
  }

  /**
   * Track an error with metadata
   */
  trackError(
    error: Error,
    metadata: Partial<ErrorMetadata> & { category: ErrorCategory; severity: ErrorSeverity }
  ): string {
    const errorId = this.generateErrorId(error.message);
    const timestamp = Date.now();

    const fullMetadata: ErrorMetadata = {
      ...metadata,
      timestamp,
      stackTrace: error.stack,
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
    };

    const existingError = this.errors.get(errorId);

    if (existingError) {
      // Update existing error
      existingError.occurrences++;
      existingError.lastSeen = timestamp;
      existingError.metadata = fullMetadata;
    } else {
      // Create new error entry
      const trackedError: TrackedError = {
        id: errorId,
        message: error.message,
        metadata: fullMetadata,
        occurrences: 1,
        firstSeen: timestamp,
        lastSeen: timestamp,
      };

      this.errors.set(errorId, trackedError);

      // Notify listeners
      this.notifyListeners(trackedError);

      // Maintain max stored errors
      if (this.errors.size > this.maxStoredErrors) {
        const oldestKey = Array.from(this.errors.keys())[0];
        this.errors.delete(oldestKey);
      }
    }

    // Log the error
    logger.error(`[${metadata.severity.toUpperCase()}] ${error.message}`, error, 'ErrorTracking', {
      error_id: errorId,
      category: metadata.category,
      ...metadata.context,
    });

    // Send to external service if critical
    if (metadata.severity === ErrorSeverity.Critical) {
      this.reportToExternalService(errorId);
    }

    return errorId;
  }

  /**
   * Generate a unique error ID based on the message
   */
  private generateErrorId(message: string): string {
    // Simple hash function for error ID
    let hash = 0;
    for (let i = 0; i < message.length; i++) {
      const char = message.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return `err_${Math.abs(hash).toString(36)}`;
  }

  /**
   * Add an error listener
   */
  addListener(listener: (error: TrackedError) => void): void {
    this.errorListeners.push(listener);
  }

  /**
   * Remove an error listener
   */
  removeListener(listener: (error: TrackedError) => void): void {
    this.errorListeners = this.errorListeners.filter(l => l !== listener);
  }

  /**
   * Notify all listeners of a new error
   */
  private notifyListeners(error: TrackedError): void {
    this.errorListeners.forEach(listener => {
      try {
        listener(error);
      } catch (listenerError) {
        logger.error('Error in error listener', listenerError as Error);
      }
    });
  }

  /**
   * Report critical errors to external service
   */
  private async reportToExternalService(errorId: string): Promise<void> {
    const error = this.errors.get(errorId);
    if (!error) return;

    try {
      if (typeof window !== 'undefined' && 'fetch' in window) {
        await fetch('/api/error-report', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(error),
        });
      }
    } catch (reportError) {
      logger.error('Failed to report error to external service', reportError as Error);
    }
  }

  /**
   * Get all tracked errors
   */
  getErrors(): TrackedError[] {
    return Array.from(this.errors.values());
  }

  /**
   * Get errors by category
   */
  getErrorsByCategory(category: ErrorCategory): TrackedError[] {
    return this.getErrors().filter(e => e.metadata.category === category);
  }

  /**
   * Get errors by severity
   */
  getErrorsBySeverity(severity: ErrorSeverity): TrackedError[] {
    return this.getErrors().filter(e => e.metadata.severity === severity);
  }

  /**
   * Get error statistics
   */
  getStatistics(): {
    total: number;
    byCategory: Record<ErrorCategory, number>;
    bySeverity: Record<ErrorSeverity, number>;
    topErrors: TrackedError[];
  } {
    const errors = this.getErrors();

    const byCategory = {} as Record<ErrorCategory, number>;
    const bySeverity = {} as Record<ErrorSeverity, number>;

    errors.forEach(error => {
      byCategory[error.metadata.category] =
        (byCategory[error.metadata.category] || 0) + error.occurrences;
      bySeverity[error.metadata.severity] =
        (bySeverity[error.metadata.severity] || 0) + error.occurrences;
    });

    const topErrors = errors.sort((a, b) => b.occurrences - a.occurrences).slice(0, 10);

    return {
      total: errors.length,
      byCategory,
      bySeverity,
      topErrors,
    };
  }

  /**
   * Clear all errors
   */
  clearErrors(): void {
    this.errors.clear();
  }

  /**
   * Clear errors older than specified time
   */
  clearOldErrors(maxAge: number): void {
    const now = Date.now();
    for (const [id, error] of this.errors.entries()) {
      if (now - error.lastSeen > maxAge) {
        this.errors.delete(id);
      }
    }
  }
}

export const errorTracking = ErrorTrackingService.getInstance();
export default ErrorTrackingService;

// Export convenience functions for easier testing and usage
export const trackError = (error: Error, options?: Partial<Omit<ErrorMetadata, 'timestamp'>>) => {
  const category = options?.category || ErrorCategory.Runtime;
  const severity = options?.severity || ErrorSeverity.Medium;

  return errorTracking.trackError(error, {
    ...options,
    category,
    severity,
  });
};

export const getErrorStatistics = () => {
  const stats = errorTracking.getStatistics();
  const errors = errorTracking.getErrors().map(error => ({
    ...error,
    context: error.metadata.context,
  }));
  return {
    total: stats.total,
    byCategory: stats.byCategory,
    bySeverity: stats.bySeverity,
    errors,
  };
};

export const clearErrorHistory = () => errorTracking.clearErrors();
export const addErrorListener = (listener: (error: TrackedError) => void) =>
  errorTracking.addListener(listener);
export const removeErrorListener = (listener: (error: TrackedError) => void) =>
  errorTracking.removeListener(listener);
