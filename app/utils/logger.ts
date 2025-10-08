/**
 * Logger Utility
 * Provides structured logging with different log levels and context
 */

import { isDevelopment, isProduction } from '../config/appConfig';

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
}

export interface LogContext {
  component?: string;
  action?: string;
  userId?: string;
  sessionId?: string;
  [key: string]: unknown;
}

export interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  context?: LogContext;
  error?: Error;
}

class Logger {
  private minLevel: LogLevel;
  private logs: LogEntry[] = [];
  private maxLogSize: number = 1000;

  constructor(minLevel: LogLevel = LogLevel.INFO) {
    this.minLevel = minLevel;
  }

  /**
   * Set minimum log level
   */
  setMinLevel(level: LogLevel): void {
    this.minLevel = level;
  }

  /**
   * Create a log entry
   */
  private createLogEntry(
    level: LogLevel,
    message: string,
    context?: LogContext,
    error?: Error
  ): LogEntry {
    return {
      timestamp: new Date().toISOString(),
      level,
      message,
      context,
      error,
    };
  }

  /**
   * Store log entry
   */
  private storeLog(entry: LogEntry): void {
    this.logs.push(entry);
    if (this.logs.length > this.maxLogSize) {
      this.logs = this.logs.slice(-this.maxLogSize);
    }
  }

  /**
   * Format log message for console
   */
  private formatMessage(entry: LogEntry): string {
    const levelName = LogLevel[entry.level];
    let message = `[${entry.timestamp}] ${levelName}: ${entry.message}`;
    
    if (entry.context && Object.keys(entry.context).length > 0) {
      message += ` | Context: ${JSON.stringify(entry.context)}`;
    }
    
    return message;
  }

  /**
   * Log a message with a specific level
   */
  private log(
    level: LogLevel,
    message: string,
    context?: LogContext,
    error?: Error
  ): void {
    if (level < this.minLevel) {
      return;
    }

    const entry = this.createLogEntry(level, message, context, error);
    this.storeLog(entry);

    // Only output to console in development or for errors/warnings in production
    if (isDevelopment() || level >= LogLevel.WARN) {
      const formattedMessage = this.formatMessage(entry);

      switch (level) {
        case LogLevel.DEBUG:
          if (process.env['NODE_ENV'] === 'development') { if (import.meta.env.DEV) { console.debug(formattedMessage); } }
          break;
        case LogLevel.INFO:
          if (process.env['NODE_ENV'] === 'development') { if (import.meta.env.DEV) { console.info(formattedMessage); } }
          break;
        case LogLevel.WARN:
          console.warn(formattedMessage);
          if (error) console.warn(error);
          break;
        case LogLevel.ERROR:
          console.error(formattedMessage);
          if (error) console.error(error);
          break;
      }
    }

    // Send errors to monitoring service in production
    if (isProduction() && level === LogLevel.ERROR && error) {
      this.sendToMonitoring(entry);
    }
  }

  /**
   * Send error to monitoring service
   */
  private sendToMonitoring(entry: LogEntry): void {
    // In production, this would send to a monitoring service like Sentry
    // For now, we'll just store it
    if (typeof window !== 'undefined' && (window as unknown as { errorMonitoring?: unknown }).errorMonitoring) {
      try {
        // Send to error monitoring service
        const monitoring = (window as unknown as { errorMonitoring: { captureException: (error: Error, context?: LogContext) => void } }).errorMonitoring;
        if (entry.error) {
          monitoring.captureException(entry.error, entry.context);
        }
      } catch (e) {
        console.error('Failed to send error to monitoring:', e);
      }
    }
  }

  /**
   * Debug level logging
   */
  debug(message: string, context?: LogContext): void {
    this.log(LogLevel.DEBUG, message, context);
  }

  /**
   * Info level logging
   */
  info(message: string, context?: LogContext): void {
    this.log(LogLevel.INFO, message, context);
  }

  /**
   * Warning level logging
   */
  warn(message: string, context?: LogContext, error?: Error): void {
    this.log(LogLevel.WARN, message, context, error);
  }

  /**
   * Error level logging
   */
  error(message: string, error?: Error, context?: LogContext): void {
    this.log(LogLevel.ERROR, message, context, error);
  }

  /**
   * Get recent logs
   */
  getRecentLogs(count: number = 100): LogEntry[] {
    return this.logs.slice(-count);
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

  /**
   * Log performance metrics (development only)
   */
  perf(label: string, value: number, unit = 'ms'): void {
    this.debug(`${label}: ${value}${unit}`, { component: 'performance' });
  }

  /**
   * Group related logs (development only)
   */
  group(label: string, fn: () => void): void {
    if (isDevelopment()) {
      console.group(label);
      fn();
      console.groupEnd();
    }
  }

  /**
   * Log with custom styling (development only)
   */
  styled(message: string, style: string): void {
    if (isDevelopment()) {
      if (process.env['NODE_ENV'] === 'development') { if (import.meta.env.DEV) { console.log(`%c${message}`, style); } }
    }
  }

  /**
   * Log lifecycle events
   */
  lifecycle(message: string, component: string): void {
    this.info(message, { component });
  }

  /**
   * Log performance metrics
   */
  performance(message: string, metrics: Record<string, unknown>, component: string): void {
    this.info(message, { component, ...metrics });
  }
}

// Create and export singleton instance
const logger = new Logger(isDevelopment() ? LogLevel.DEBUG : LogLevel.INFO);

export { logger };
export default logger;