/**
 * Comprehensive Error Logging System
 * Provides structured error logging with different severity levels
 */

export enum ErrorSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical',
}

export interface ErrorLogEntry {
  timestamp: string;
  severity: ErrorSeverity;
  message: string;
  error?: Error;
  context?: Record<string, unknown>;
  userAgent?: string;
  url?: string;
  stackTrace?: string;
}

class ErrorLogger {
  private logs: ErrorLogEntry[] = [];
  private maxLogs = 1000;

  /**
   * Log an error with context
   */
  log(
    message: string,
    severity: ErrorSeverity = ErrorSeverity.MEDIUM,
    error?: Error,
    context?: Record<string, unknown>
  ): void {
    const entry: ErrorLogEntry = {
      timestamp: new Date().toISOString(),
      severity,
      message,
      error,
      context,
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      stackTrace: error?.stack,
    };

    // Add to internal log
    this.logs.push(entry);
    if (this.logs.length > this.maxLogs) {
      this.logs.shift();
    }

    // Console logging in development
    if (process.env['NODE_ENV'] === 'development') {
      this.logToConsole(entry);
    }

    // Send to external logging service in production
    if (process.env['NODE_ENV'] === 'production' && severity === ErrorSeverity.CRITICAL) {
      this.sendToExternalService(entry);
    }
  }

  /**
   * Log to console with appropriate styling
   */
  private logToConsole(entry: ErrorLogEntry): void {
    const styles: Record<ErrorSeverity, string> = {
      [ErrorSeverity.LOW]: 'color: #4ade80',
      [ErrorSeverity.MEDIUM]: 'color: #fbbf24',
      [ErrorSeverity.HIGH]: 'color: #fb923c',
      [ErrorSeverity.CRITICAL]: 'color: #ef4444; font-weight: bold',
    };

    console.group(`%c[${entry.severity.toUpperCase()}] ${entry.message}`, styles[entry.severity]);
    console.log('Timestamp:', entry.timestamp);
    if (entry.error) {
      console.error('Error:', entry.error);
    }
    if (entry.context) {
      console.log('Context:', entry.context);
    }
    if (entry.stackTrace) {
      console.log('Stack Trace:', entry.stackTrace);
    }
    console.groupEnd();
  }

  /**
   * Send error to external logging service
   */
  private async sendToExternalService(entry: ErrorLogEntry): Promise<void> {
    try {
      // In production, you would send to a service like Sentry, LogRocket, etc.
      const endpoint = process.env.NEXT_PUBLIC_ERROR_LOG_ENDPOINT;

      if (!endpoint) {
        return;
      }

      await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...entry,
          error: entry.error
            ? {
                message: entry.error.message,
                name: entry.error.name,
                stack: entry.error.stack,
              }
            : undefined,
        }),
      });
    } catch (error) {
      // Silently fail to avoid infinite loop
      console.error('Failed to send error to external service:', error);
    }
  }

  /**
   * Get recent logs
   */
  getRecentLogs(count: number = 10): ErrorLogEntry[] {
    return this.logs.slice(-count);
  }

  /**
   * Get logs by severity
   */
  getLogsBySeverity(severity: ErrorSeverity): ErrorLogEntry[] {
    return this.logs.filter(log => log.severity === severity);
  }

  /**
   * Clear all logs
   */
  clearLogs(): void {
    this.logs = [];
  }

  /**
   * Export logs as JSON
   */
  exportLogs(): string {
    return JSON.stringify(this.logs, null, 2);
  }
}

// Singleton instance
const errorLogger = new ErrorLogger();

// Convenience functions
export const logError = (message: string, error?: Error, context?: Record<string, unknown>) =>
  errorLogger.log(message, ErrorSeverity.MEDIUM, error, context);

export const logCritical = (message: string, error?: Error, context?: Record<string, unknown>) =>
  errorLogger.log(message, ErrorSeverity.CRITICAL, error, context);

export const logWarning = (message: string, context?: Record<string, unknown>) =>
  errorLogger.log(message, ErrorSeverity.LOW, undefined, context);

export const logInfo = (message: string, context?: Record<string, unknown>) =>
  errorLogger.log(message, ErrorSeverity.LOW, undefined, context);

export default errorLogger;
