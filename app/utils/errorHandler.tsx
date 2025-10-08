/**
 * Advanced Error Handler
 * Comprehensive error handling utilities for React applications
 */

import React, { ErrorInfo, useCallback } from 'react';

// Error types
export enum ErrorType {
  RUNTIME = 'RUNTIME',
  NETWORK = 'NETWORK',
  VALIDATION = 'VALIDATION',
  AUTHENTICATION = 'AUTHENTICATION',
  AUTHORIZATION = 'AUTHORIZATION',
  NOT_FOUND = 'NOT_FOUND',
  SERVER = 'SERVER',
  CLIENT = 'CLIENT',
  UNKNOWN = 'UNKNOWN',
}

// Error severity levels
export enum ErrorSeverity {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL',
}

// Error interface
export interface AppError {
  id: string;
  type: ErrorType;
  severity: ErrorSeverity;
  message: string;
  stack?: string;
  timestamp: Date;
  userId?: string;
  sessionId?: string;
  url?: string;
  userAgent?: string;
  componentStack?: string;
  context?: Record<string, unknown>;
  resolved?: boolean;
  retryCount?: number;
}

// Error handler configuration
export interface ErrorHandlerConfig {
  enableLogging: boolean;
  enableReporting: boolean;
  enableRetry: boolean;
  maxRetries: number;
  retryDelay: number;
  enableUserNotification: boolean;
  enableConsoleLogging: boolean;
  enableNetworkLogging: boolean;
  reportEndpoint?: string;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

// Default configuration
export const defaultErrorHandlerConfig: ErrorHandlerConfig = {
  enableLogging: true,
  enableReporting: true,
  enableRetry: true,
  maxRetries: 3,
  retryDelay: 1000,
  enableUserNotification: true,
  enableConsoleLogging: true,
  enableNetworkLogging: true,
  logLevel: 'error',
};

// Error Handler class
export class ErrorHandler {
  private static instance: ErrorHandler;
  private config: ErrorHandlerConfig;
  private errors: AppError[] = [];
  private retryQueue: Array<{ error: AppError; retryCount: number }> = [];

  constructor(config: Partial<ErrorHandlerConfig> = {}) {
    this.config = { ...defaultErrorHandlerConfig, ...config };
  }

  static getInstance(config?: Partial<ErrorHandlerConfig>): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler(config);
    }
    return ErrorHandler.instance;
  }

  // Handle error
  handleError(error: Error, errorInfo?: ErrorInfo, context?: Record<string, unknown>): AppError {
    const appError: AppError = {
      id: this.generateErrorId(),
      type: this.determineErrorType(error),
      severity: this.determineErrorSeverity(error),
      message: error.message,
      stack: error.stack,
      timestamp: new Date(),
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
      componentStack: errorInfo?.componentStack ?? undefined,
      context,
      resolved: false,
      retryCount: 0,
    };

    this.errors.push(appError);

    if (this.config.enableLogging) {
      this.logError(appError);
    }

    if (this.config.enableReporting) {
      this.reportError(appError);
    }

    if (this.config.enableUserNotification) {
      this.notifyUser(appError);
    }

    if (this.config.enableRetry && this.shouldRetry(appError)) {
      this.scheduleRetry(appError);
    }

    return appError;
  }

  // Handle network error
  handleNetworkError(error: Error, url: string, status?: number): AppError {
    const appError: AppError = {
      id: this.generateErrorId(),
      type: ErrorType.NETWORK,
      severity: this.determineNetworkErrorSeverity(status),
      message: error.message,
      stack: error.stack,
      timestamp: new Date(),
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
      context: { networkUrl: url, statusCode: status },
      resolved: false,
      retryCount: 0,
    };

    this.errors.push(appError);

    if (this.config.enableLogging) {
      this.logError(appError);
    }

    if (this.config.enableReporting) {
      this.reportError(appError);
    }

    return appError;
  }

  // Handle validation error
  handleValidationError(field: string, message: string, value?: unknown): AppError {
    const appError: AppError = {
      id: this.generateErrorId(),
      type: ErrorType.VALIDATION,
      severity: ErrorSeverity.LOW,
      message: `Validation error in ${field}: ${message}`,
      timestamp: new Date(),
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      context: { field, value },
      resolved: false,
      retryCount: 0,
    };

    this.errors.push(appError);

    if (this.config.enableLogging) {
      this.logError(appError);
    }

    return appError;
  }

  // Generate unique error ID
  private generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // Determine error type
  private determineErrorType(error: Error): ErrorType {
    const message = error.message.toLowerCase();
    const stack = error.stack?.toLowerCase() || '';

    if (message.includes('network') || message.includes('fetch') || message.includes('axios')) {
      return ErrorType.NETWORK;
    }

    if (message.includes('validation') || message.includes('invalid')) {
      return ErrorType.VALIDATION;
    }

    if (message.includes('auth') || message.includes('login') || message.includes('token')) {
      return ErrorType.AUTHENTICATION;
    }

    if (message.includes('permission') || message.includes('unauthorized')) {
      return ErrorType.AUTHORIZATION;
    }

    if (message.includes('not found') || message.includes('404')) {
      return ErrorType.NOT_FOUND;
    }

    if (message.includes('server') || message.includes('500')) {
      return ErrorType.SERVER;
    }

    if (stack.includes('react') || stack.includes('component')) {
      return ErrorType.CLIENT;
    }

    return ErrorType.UNKNOWN;
  }

  // Determine error severity
  private determineErrorSeverity(error: Error): ErrorSeverity {
    const message = error.message.toLowerCase();

    if (message.includes('critical') || message.includes('fatal')) {
      return ErrorSeverity.CRITICAL;
    }

    if (message.includes('error') || message.includes('exception')) {
      return ErrorSeverity.HIGH;
    }

    if (message.includes('warning') || message.includes('deprecated')) {
      return ErrorSeverity.MEDIUM;
    }

    return ErrorSeverity.LOW;
  }

  // Determine network error severity
  private determineNetworkErrorSeverity(status?: number): ErrorSeverity {
    if (!status) return ErrorSeverity.MEDIUM;

    if (status >= 500) return ErrorSeverity.HIGH;
    if (status >= 400) return ErrorSeverity.MEDIUM;
    return ErrorSeverity.LOW;
  }

  // Log error
  private logError(error: AppError) {
    if (this.config.enableConsoleLogging) {
      const logMessage = `[${error.severity}] ${error.type}: ${error.message}`;
      
      switch (error.severity) {
        case ErrorSeverity.CRITICAL:
        case ErrorSeverity.HIGH:
          if (process.env.NODE_ENV === 'development') console.error(logMessage, error); }
          break;
        case ErrorSeverity.MEDIUM:
          if (process.env.NODE_ENV === 'development') console.warn(logMessage, error); }
          break;
        case ErrorSeverity.LOW:
          if (process.env['NODE_ENV'] === 'development') { if (import.meta.env.DEV) { if (process.env.NODE_ENV === 'development') console.info(logMessage, error); } } }
          break;
      }
    }

    if (this.config.enableNetworkLogging) {
      this.logToNetwork(error);
    }
  }

  // Log to network
  private async logToNetwork(error: AppError) {
    if (!this.config.reportEndpoint) return;

    try {
      await fetch(this.config.reportEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(error),
      });
    } catch (err) {
      if (process.env.NODE_ENV === 'development') console.error('Failed to log error to network:', err); }
    }
  }

  // Report error
  private async reportError(error: AppError) {
    if (!this.config.reportEndpoint) return;

    try {
      await fetch(this.config.reportEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...error,
          timestamp: error.timestamp.toISOString(),
        }),
      });
    } catch (err) {
      if (process.env.NODE_ENV === 'development') console.error('Failed to report error:', err); }
    }
  }

  // Notify user
  private notifyUser(error: AppError) {
    if (typeof window === 'undefined') return;

    const notification = document.createElement('div');
    notification.className = 'error-notification';
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${this.getNotificationColor(error.severity)};
      color: white;
      padding: 15px;
      border-radius: 5px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      z-index: 10000;
      max-width: 400px;
      font-family: Arial, sans-serif;
    `;

    notification.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong>${error.severity} Error</strong>
          <p style="margin: 5px 0 0 0; font-size: 14px;">${error.message}</p>
        </div>
        <button onclick="this.parentElement.parentElement.remove()" style="
          background: none;
          border: none;
          color: white;
          font-size: 18px;
          cursor: pointer;
          margin-left: 10px;
        ">×</button>
      </div>
    `;

    document.body.appendChild(notification);

    // Auto-remove after 5 seconds for non-critical errors
    if (error.severity !== ErrorSeverity.CRITICAL) {
      setTimeout(() => {
        if (notification.parentElement) {
          notification.remove();
        }
      }, 5000);
    }
  }

  // Get notification color based on severity
  private getNotificationColor(severity: ErrorSeverity): string {
    switch (severity) {
      case ErrorSeverity.CRITICAL:
        return '#dc3545';
      case ErrorSeverity.HIGH:
        return '#fd7e14';
      case ErrorSeverity.MEDIUM:
        return '#ffc107';
      case ErrorSeverity.LOW:
        return '#28a745';
      default:
        return '#6c757d';
    }
  }

  // Check if error should be retried
  private shouldRetry(error: AppError): boolean {
    return (
      error.type === ErrorType.NETWORK &&
      error.retryCount! < this.config.maxRetries &&
      error.severity !== ErrorSeverity.CRITICAL
    );
  }

  // Schedule retry
  private scheduleRetry(error: AppError) {
    const retryItem = { error, retryCount: error.retryCount! + 1 };
    this.retryQueue.push(retryItem);

    setTimeout(() => {
      this.retryError(retryItem);
    }, this.config.retryDelay * retryItem.retryCount);
  }

  // Retry error
  private async retryError(retryItem: { error: AppError; retryCount: number }) {
    try {
      // Implement retry logic based on error type
      if (retryItem.error.type === ErrorType.NETWORK) {
        // Retry network request
        if (process.env['NODE_ENV'] === 'development') { if (import.meta.env.DEV) { if (process.env.NODE_ENV === 'development') console.log(`Retrying network request (attempt ${retryItem.retryCount})`); } }
        // Add your retry logic here
      }
    } catch {
      if (retryItem.retryCount < this.config.maxRetries) {
        this.scheduleRetry(retryItem.error);
      } else {
        if (process.env.NODE_ENV === 'development') console.error('Max retries exceeded for error:', retryItem.error); }
      }
    }
  }

  // Get all errors
  getErrors(): AppError[] {
    return [...this.errors];
  }

  // Get errors by type
  getErrorsByType(type: ErrorType): AppError[] {
    return this.errors.filter(error => error.type === type);
  }

  // Get errors by severity
  getErrorsBySeverity(severity: ErrorSeverity): AppError[] {
    return this.errors.filter(error => error.severity === severity);
  }

  // Get unresolved errors
  getUnresolvedErrors(): AppError[] {
    return this.errors.filter(error => !error.resolved);
  }

  // Mark error as resolved
  markErrorResolved(errorId: string): boolean {
    const error = this.errors.find(e => e.id === errorId);
    if (error) {
      error.resolved = true;
      return true;
    }
    return false;
  }

  // Clear resolved errors
  clearResolvedErrors(): void {
    this.errors = this.errors.filter(error => !error.resolved);
  }

  // Clear all errors
  clearAllErrors(): void {
    this.errors = [];
    this.retryQueue = [];
  }

  // Get error statistics
  getErrorStatistics() {
    const total = this.errors.length;
    const byType = this.errors.reduce((acc, error) => {
      acc[error.type] = (acc[error.type] || 0) + 1;
      return acc;
    }, {} as Record<ErrorType, number>);

    const bySeverity = this.errors.reduce((acc, error) => {
      acc[error.severity] = (acc[error.severity] || 0) + 1;
      return acc;
    }, {} as Record<ErrorSeverity, number>);

    const resolved = this.errors.filter(error => error.resolved).length;
    const unresolved = total - resolved;

    return {
      total,
      resolved,
      unresolved,
      byType,
      bySeverity,
    };
  }

  /**
   * Initialize error handler
   */
  init(): void {
    if (typeof window !== 'undefined') {
      // Set up global error handler
      window.addEventListener('error', (event) => {
        this.handleError(event.error || new Error(event.message));
      });

      // Set up unhandled promise rejection handler
      window.addEventListener('unhandledrejection', (event) => {
        this.handleError(new Error(event.reason));
      });
    }
  }

}

// React error boundary component
export class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  private errorHandler: ErrorHandler;

  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
    this.errorHandler = ErrorHandler.getInstance();
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.errorHandler.handleError(error, errorInfo, {
      component: 'ErrorBoundary',
    });
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>Something went wrong</h2>
          <p>We're sorry, but something unexpected happened.</p>
          <button
            onClick={() => this.setState({ hasError: false, error: undefined })}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// React hook for error handling
export const useErrorHandler = () => {
  const errorHandler = ErrorHandler.getInstance();

  const handleError = useCallback((error: Error, context?: Record<string, unknown>) => {
    return errorHandler.handleError(error, undefined, context);
  }, [errorHandler]);

  const handleNetworkError = useCallback((error: Error, url: string, status?: number) => {
    return errorHandler.handleNetworkError(error, url, status);
  }, [errorHandler]);

  const handleValidationError = useCallback((field: string, message: string, value?: unknown) => {
    return errorHandler.handleValidationError(field, message, value);
  }, [errorHandler]);

  return {
    handleError,
    handleNetworkError,
    handleValidationError,
    getErrors: () => errorHandler.getErrors(),
    getErrorStatistics: () => errorHandler.getErrorStatistics(),
    clearResolvedErrors: () => errorHandler.clearResolvedErrors(),
  };
};

export default ErrorHandler;