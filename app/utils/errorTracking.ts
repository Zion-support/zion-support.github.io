<<<<<<< HEAD
'use client';
/**;
 * Advanced Error Tracking and Reporting System;
 * Provides comprehensive error tracking with categorization and analytics;
 */;
export enum ErrorSeverity {/* TODO: Fix JSX expression */,}}}
export enum ErrorCategory {Network = 'network',;}
  Validation = 'validation',;
  Authorization = 'authorization',;
  Runtime = 'runtime',;
  Configuration = 'configuration',;
  ExternalService = 'external_service'}}
export interface ErrorMetadata {category: ErrorCategory,}
  userId?: string;
  sessionId?: string;
  context?: Record<string, unknown>
  stackTrace?: string;
  userAgent?: string;,;
  url?: string;}}
export interface TrackedError {id: string,}
  url?: string;
  lastSeen: number,
}

class ErrorTrackingService {
  private static instance: ErrorTrackingService,
  private errors: Map<string, TrackedError> = new Map()
  private errorListeners: Array<(error: TrackedError) => void> = []
  private maxStoredErrors = 1000;
  private constructor() {,
    this.setupGlobalErrorHandlers(</div>
  static getInstance(): ErrorTrackingService {
    if (!ErrorTrackingService.instance) {
      ErrorTrackingService.instance = new ErrorTrackingService()
=======
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
    }
    return ErrorTrackingService.instance;
  }

<<<<<<< HEAD
=======
  /**
   * Set up global error handlers
   */
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  private setupGlobalErrorHandlers(): void {
    if (typeof window === 'undefined') return;

    // Handle unhandled errors
    window.addEventListener('error', (event) => {
<<<<<<< HEAD
      this.trackError(new Error(event.message), {
        category: ErrorCategory.Runtime;
        severity: ErrorSeverity.High;
        context: {
          filename: event.filename;
          lineno: event.lineno;
          colno: event.colno;
        }
      })
    })

  lastSeen: number,}}
class ErrorTrackingService {private static instance: ErrorTrackingService,}
  private errors: Map<string, TrackedError> = new Map();
  private errorListeners: Array<(error: TrackedError) => void> = [],
  private maxStoredErrors = 1000,
  private constructor() {,}this.setupGlobalErrorHandlers()}
static getInstance(): ErrorTrackingService {if (!ErrorTrackingService.instance) {}
      ErrorTrackingService.instance = new ErrorTrackingService()}}
    return ErrorTrackingService.instance;
  }
private setupGlobalErrorHandlers(): void {if (typeof window === 'undefined') return;}
    // Global error handler;
    window.addEventListener('error', (event) => {
      this.trackError(new Error(event.message), {
        category: ErrorCategory.Runtime;,
        severity: ErrorSeverity.High;,
        context: {,
          filename: event.filename;,
    // Unhandled promise rejection handler;
    window.addEventListener('unhandledrejection', (event) => {}this.trackError(new Error(`Unhandled Promise Rejection: ${event.reason,)}`), {category: ErrorCategory.Runtime,
        severity: ErrorSeverity.High;,}context: {reason: event.reason ,}})
    })
  }
trackError(error: Error),
    metadata: Partial<ErrorMetadata> & {category: ErrorCategory, severity: ErrorSeverity ,}): string {const errorId = this.generateErrorId(error.message);}
    const now = Date.now();
    const trackedError: TrackedError = {,
      id: errorId,
      message: error.message;,
      metadata: {,
        category: metadata.category;,
        severity: metadata.severity;,
        userId: metadata.userId;,
        sessionId: metadata.sessionId;,
        context: metadata.context;,
        category: ErrorCategory.Runtime;
        severity: ErrorSeverity.High;

  trackError(error: Error),
    metadata: Partial<ErrorMetadata> & { category: ErrorCategory; severity: ErrorSeverity }
  ): string {
    const errorId = this.generateErrorId(error.message)
    const now = Date.now()

    const trackedError: TrackedError = {
      id: errorId,
      message: error.message;
      metadata: {
        category: metadata.category;
        severity: metadata.severity;
        userId: metadata.userId;
        sessionId: metadata.sessionId;
        context: metadata.context;
        tags: metadata.tags;
        timestamp: now,
        stackTrace: error.stack;
        userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined;
        url: typeof window !== 'undefined' ? window.location.href : undefined;
      },

    // Check if error already exists;
    const existingError = this.errors.get(errorId)
    if (existingError) {
      existingError.occurrences++
      existingError.lastSeen = now;
      this.errors.set(errorId, existingError)
    } else {
      this.errors.set(errorId, trackedError)

      // Clean up old errors if we exceed the limit;
      if (this.errors.size > this.maxStoredErrors) {
        const oldestError = Array.from(this.errors.values())
          .sort((a, b) => a.firstSeen - b.firstSeen)[0]
        this.errors.delete(oldestError.id)
      }
// Check if error already exists;
    const existingError = this.errors.get(errorId);
    if (existingError) {existingError.occurrences++;
      existingError.lastSeen = now;
      this.errors.set(errorId, existingError)}} else {this.errors.set(errorId, trackedError);}
      // Clean up old errors if we exceed the limit;
// Log the error;
    logger.error('Error tracked', {)
    );
      errorId);
      message: error.message),
      category: metadata.category),
      severity: metadata.severity;,}})
    // Notify listeners;
    this.notifyListeners(trackedError);
    // Report to external service (in production);
    if (process.env['NODE_ENV'] === 'production') {this.reportToExternalService(errorId).catch(err => {)}logger.error('Failed to report error to external service', {error: err.message ,)})
      })
export enum ErrorCategory {/* TODO: Fix JSX expression */,}}}
export interface ErrorMetadata {/* TODO: Fix JSX expression */,}}}
export interface TrackedError {/* TODO: Fix JSX expression */,}}}
class ErrorTrackingService {/* TODO: Fix JSX expression */,}}}
  static getInstance(): ErrorTrackingService {/* TODO: Fix JSX expression */,}}}
    return ErrorTrackingService.instance;
  }
  /**;
   * Set up global error handlers;
   */;
  private setupGlobalErrorHandlers(): void {/* TODO: Fix JSX expression */,}}}
      })
    })
    // Handle unhandled promise rejections;
    window.addEventListener('unhandledrejection', event => {/* TODO: Fix JSX expression */,)})
  Rejection: ${event.reason,}`), {/* TODO: Fix JSX expression */,}n: event.reason ,}
      })
    })
  }
  /**;
   * Track an error with metadata;
   */;
  trackError(erro,;)
  r: Error,
    metadat,;
  a: Partial<ErrorMetadata> & {/* TODO: Fix JSX expression */,}y: ErrorSeverity ,})
  ): string {/* TODO: Fix JSX expression */,}}}
      severity: metadata.severity;
    })

    // Notify listeners;
      this.reportToExternalService(errorId).catch(err => {)
    return ErrorTrackingService.instance;
      });
    });
    // Handle unhandled promise rejections;
    window.addEventListener('unhandledrejection', event => {/* TODO: Fix JSX expression */})
  Rejection: ${event.reason}`), {/* TODO: Fix JSX expression */}
  n: event.reason }
      });
    });
  a: Partial<ErrorMetadata> & {/* TODO: Fix JSX expression */}
  y: ErrorSeverity })
  ): string {/* TODO: Fix JSX expression */}
    };
    const existingError = this.errors.get(errorId);
    if (existingError) {/* TODO: Fix JSX expression */}
    } else {/* TODO: Fix JSX expression */}
      };
    const existingError = this.errors.get(errorId);
    if (existingError) {/* TODO: Fix JSX expression */,}} else {/* TODO: Fix JSX expression */,}}}
=======
      this.trackError(
        event.error || new Error(event.message),
        {
          category: ErrorCategory.Runtime,
          severity: ErrorSeverity.High,
          context: {
            filename: event.filename,
            lineno: event.lineno,
            colno: event.colno,
          },
        }
      );
    });

    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.trackError(
        new Error(`Unhandled Promise Rejection: ${event.reason}`),
        {
          category: ErrorCategory.Runtime,
          severity: ErrorSeverity.Critical,
          context: { reason: event.reason },
        }
      );
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

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      this.errors.set(errorId, trackedError);

      // Notify listeners
      this.notifyListeners(trackedError);
<<<<<<< HEAD
      // Maintain max stored errors;
    });
    // Send to external service if critical;
    if (metadata.severity === ErrorSeverity.Critical) {/* TODO: Fix JSX expression */}
=======

      // Maintain max stored errors
      if (this.errors.size > this.maxStoredErrors) {
        const oldestKey = Array.from(this.errors.keys())[0];
        this.errors.delete(oldestKey);
      }
    }

    // Log the error
    logger.error(
      `[${metadata.severity.toUpperCase()}] ${error.message}`,
      error,
      'ErrorTracking',
      {
        error_id: errorId,
        category: metadata.category,
        ...metadata.context,
      }
    );

    // Send to external service if critical
    if (metadata.severity === ErrorSeverity.Critical) {
      this.reportToExternalService(errorId);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
    }

    return errorId;
  }

<<<<<<< HEAD
  private generateErrorId(message: string): string {,
    const timestamp = Date.now().toString(36),
    const hash = this.simpleHash(message),
    return `err_${timestamp}_${hash}`
  }

  private simpleHash(str: string): string {
    const timestamp = Date.now().toString(36),;
    const hash = this.simpleHash(message),}return `err_${timestamp}_${hash}`;
private simpleHash(str: string): string {,}
    let hash = 0;
    for (let i = 0; i < str.length, i++) {
      const char = str.charCodeAt(i),
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash // Convert to 32-bit integer;
    }
    return Math.abs(hash).toString(36)
  }

  addListener(listener: (error: TrackedError) => void): void {,
    this.errorListeners.push(listener</div>
  removeListener(listener: (error: TrackedError) => void): void {,
    this.errorListeners = this.errorListeners.filter(l => l !== listener</div>
  private notifyListeners(error: TrackedError): void {,
    this.errorListeners.forEach(listener => {)
      try {)
        listener(error)} catch (listenerError) {
    this.errorListeners.forEach(listener => {);
      try {)}}listener(error)} catch (listenerError) {}logger.error('Error in error listener', {error: listenerError.message ,)})
  /**;
   * Generate a unique error ID based on the message;
   */;
  private generateErrorId(messag);
  e: string): string {/* TODO: Fix JSX expression */,}}}`;
    return `err_${Math.abs(hash).toString(36)}`;
  }
  /**;
   * Add an error listener;
   */;
  addListener(listene,;)
  removeListener(listene,;)
    return `err_${Math.abs(hash).toString(36)}`;
  addListener(listene,
  r: (erro)
  removeListener(listene,
  r: (erro)
    })
  }

  private async reportToExternalService(errorId: string): Promise<void> {,
    // In a real implementation, this would send to an external service;
    // like Sentry, LogRocket, or a custom error reporting service;
    // In a real implementation, this would send to an external service;
    // like Sentry, LogRocket, or a custom error reporting service;}logger.info('Error reported to external service', {errorId)})
getErrors(): TrackedError[] {return Array.from(this.errors.values())}}
getErrorById(id: string): TrackedError | undefined {,}
    ,}return this.errors.get(id)}
clearErrors(): void {this.errors.clear()}}}
getErrorStats(): {total: number,
    byCategory: Record<ErrorCategory>,
    bySeverity: Record<ErrorSeverity, number>}} {const errors = this.getErrors()}const byCategory: Record<ErrorCategory, number> = {}as Record<ErrorCategory>
    const bySeverity: Record<ErrorSeverity, number> = {}as Record<ErrorSeverity>
    const byCategory: Record<ErrorCategory, number> = {} as Record<ErrorCategory>;
    const bySeverity: Record<ErrorSeverity, number> = {} as Record<ErrorSeverity>;
    // Initialize counters;
    Object.values(ErrorCategory).forEach(category => {)
    );
      byCategory[category] = 0;)}})
    Object.values(ErrorSeverity).forEach(severity => {)
    );
      bySeverity[severity] = 0;)}})
    // Count errors;
    errors.forEach(error => {)
    );
      byCategory[error.metadata.category]++);
      bySeverity[error.metadata.severity]++)}})
    return {total: errors.length,}
      byCategory,;
      bySeverity;}}
// Export singleton instance;
export const errorTracking = ErrorTrackingService.getInstance();
  /**;
   * Report critical errors to external service;
   */;
  private async reportToExternalService(errorI);
  d: string): Promise<void> {/* TODO: Fix JSX expression */,}s: {'Content-Type': 'application/json' ,},;
          bod,;
    return Array.from(this.errors.values())
  }

  getErrorById(id: string): TrackedError | undefined {,
    return this.errors.get(id</div>
  clearErrors(): void {
    this.errors.clear()
    bySeverity: Record<ErrorSeverity, number>
  } {
    const errors = this.getErrors()
    const byCategory: Record<ErrorCategory, number> = {} as Record<ErrorCategory, number>
    const bySeverity: Record<ErrorSeverity, number> = {} as Record<ErrorSeverity, number>
    // Initialize counters;
    Object.values(ErrorCategory).forEach(category => {)
      byCategory[category] = 0;)
    })
    Object.values(ErrorSeverity).forEach(severity => {)
      bySeverity[severity] = 0;)
    })

    // Count errors;
    errors.forEach(error => {)
      byCategory[error.metadata.category]++)
      bySeverity[error.metadata.severity]++)
    })

      bySeverity;
        });
      }
    } catch (reportError) {/* TODO: Fix JSX expression */}
    }
  /**;
   * Get all tracked errors;
   */
  getErrors(): TrackedError[] {/* TODO: Fix JSX expression */}
  }
  /**
   * Get errors by category;
   */
  getErrorsByCategory(categor)
  y: ErrorCategory): TrackedError[] {/* TODO: Fix JSX expression */}
  }
  /**
   * Get errors by severity;
   */
  getErrorsBySeverity(severit)
  y: ErrorSeverity): TrackedError[] {/* TODO: Fix JSX expression */}
  }
  /**
   * Get error statistics;
   */
  getStatistics(): {/* TODO: Fix JSX expression */}
  } {/* TODO: Fix JSX expression */}
    const byCategory = {} as Record<ErrorCategory, number>;
    const bySeverity = {} as Record<ErrorSeverity, number>;
    errors.forEach(error => {/* TODO: Fix JSX expression */})
    });
    const topErrors = errors.sort((a, b) => b.occurrences - a.occurrences).slice(0, 10);
    return {/* TODO: Fix JSX expression */}
    };
  }
  /**
   * Clear all errors;
   */
  clearErrors(): void {/* TODO: Fix JSX expression */}
  }
  /**
   * Clear errors older than specified time;
   */
  clearOldErrors(maxAg)
  e: number): void {/* TODO: Fix JSX expression */}
      }
export const trackError = (erro)
  r: Error, options?: Partial<Omit<ErrorMetadata, 'timestamp'>>) => {/* TODO: Fix JSX expression */}
  });
};
export const getErrorStatistics = () => {/* TODO: Fix JSX expression */}
  }));
  return {/* TODO: Fix JSX expression */}
  };
};
export const addErrorListener = (listene,;
  r: (erro),
  r: TrackedError) => void) =>,
  errorTracking.addListener(listener),
export const removeErrorListener = (listene,;
  r: (erro);,
  r: TrackedError) => void) =>,
=======
  /**
   * Generate a unique error ID based on the message
   */
  private generateErrorId(message: string): string {
    // Simple hash function for error ID
    let hash = 0;
    for (let i = 0; i < message.length; i++) {
      const char = message.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
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
      byCategory[error.metadata.category] = (byCategory[error.metadata.category] || 0) + error.occurrences;
      bySeverity[error.metadata.severity] = (bySeverity[error.metadata.severity] || 0) + error.occurrences;
    });

    const topErrors = errors
      .sort((a, b) => b.occurrences - a.occurrences)
      .slice(0, 10);

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
export const trackError = (
  error: Error,
  options?: Partial<Omit<ErrorMetadata, 'timestamp'>>
) => {
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
