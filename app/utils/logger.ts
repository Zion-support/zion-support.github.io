/**
 * Enhanced Logger Utility
 * Provides structured logging with different levels and contexts
 */
export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  FATAL = 4
}
export interface LogContext {
  component?: string;
  action?: string;
  userId?: string;
  sessionId?: string;
  requestId?: string;
  [key: string]: unknown;
}
export interface LogMetadata {
  timestamp?: string;
  level?: LogLevel;
  message?: string;
  context?: LogContext;
  error?: Error;
  [key: string]: unknown;
}
class Logger {
  private logLevel: LogLevel;
  private isDevelopment: boolean;
  constructor() {
    this.logLevel = process.env.NODE_ENV === 'development' ? LogLevel.DEBUG : LogLevel.INFO;
    this.isDevelopment = process.env.NODE_ENV === 'development';
  }
  /**
   * Set the minimum log level
   */
  setLogLevel(level: LogLevel): void {
    this.logLevel = level;
  }
  /**
   * Get the current log level
   */
  getLogLevel(): LogLevel {
    return this.logLevel;
  }
  /**
   * Log a debug message
   */
  debug(message: string, context?: LogContext, metadata?: Record<string, unknown>): void {
    this.log(LogLevel.DEBUG, message, context, metadata);
  }
  /**
   * Log an info message
   */
  info(message: string, context?: LogContext, metadata?: Record<string, unknown>): void {
    this.log(LogLevel.INFO, message, context, metadata);
  }
  /**
   * Log a warning message
   */
  warn(message: string, context?: LogContext, metadata?: Record<string, unknown>): void {
    this.log(LogLevel.WARN, message, context, metadata);
  }
  /**
   * Log an error message
   */
  error(
    message: string,
    errorOrContextOrMetadata?: Error | string | Record<string, unknown>,
    contextOrMetadata?: string | Record<string, unknown>,
    metadata?: Record<string, unknown>
  ): void {
    let error: Error | undefined;
    let context: LogContext | undefined;
    let meta: Record<string, unknown> | undefined;
    // Handle different parameter combinations
    if (errorOrContextOrMetadata instanceof Error) {
      error = errorOrContextOrMetadata;
      context = contextOrMetadata as LogContext;
      meta = metadata;
    } else if (typeof errorOrContextOrMetadata === 'string') {
      context = { component: errorOrContextOrMetadata };
      meta = contextOrMetadata as Record<string, unknown>;
    } else if (typeof errorOrContextOrMetadata === 'object') {
      context = errorOrContextOrMetadata as LogContext;
      meta = contextOrMetadata as Record<string, unknown>;
    }
    this.log(LogLevel.ERROR, message, context, { ...meta, error });
  }
  /**
   * Log a fatal error message
   */
  fatal(message: string, context?: LogContext, metadata?: Record<string, unknown>): void {
    this.log(LogLevel.FATAL, message, context, metadata);
  }
  /**
   * Core logging method
   */
  private log(
    level: LogLevel,
    message: string,
    context?: LogContext,
    metadata?: Record<string, unknown>
  ): void {
    // Check if we should log this level
    if (level < this.logLevel) {
      return;
    }
    const logEntry: LogMetadata = {
      timestamp: new Date().toISOString(),
      level,
      message,
      context,
      ...metadata
    };
    // Format the log entry
    const formattedMessage = this.formatLogEntry(logEntry);
    // Output to console in development
    if (this.isDevelopment && typeof console !== 'undefined') {
      this.outputToConsole(level, formattedMessage, logEntry);
    }
    // In production, you might want to send to a logging service
    if (!this.isDevelopment) {
      this.sendToLoggingService(logEntry);
    }
  }
  /**
   * Format a log entry for output
   */
  private formatLogEntry(entry: LogMetadata): string {
    const levelStr = this.getLevelString(entry.level || LogLevel.INFO);
    const timestamp = entry.timestamp || new Date().toISOString();
    const contextStr = entry.context ? ` [${this.formatContext(entry.context)}]` : '';
    const metadataStr = entry.metadata ? ` ${JSON.stringify(entry.metadata)}` : '';
    return `[${timestamp}] ${levelStr}${contextStr}: ${entry.message}${metadataStr}`;
  }
  /**
   * Format context object for display
   */
  private formatContext(context: LogContext): string {
    const parts: string[] = [];
    if (context.component) parts.push(`component:${context.component}`);
    if (context.action) parts.push(`action:${context.action}`);
    if (context.userId) parts.push(`user:${context.userId}`);
    if (context.sessionId) parts.push(`session:${context.sessionId}`);
    if (context.requestId) parts.push(`request:${context.requestId}`);
    return parts.join(', ');
  }
  /**
   * Output to console with appropriate styling
   */
  private outputToConsole(level: LogLevel, message: string, entry: LogMetadata): void {
    if (typeof console === 'undefined') return;
    const styles = this.getConsoleStyles(level);
    switch (level) {
      case LogLevel.DEBUG:

        break;
      case LogLevel.INFO:

        break;
      case LogLevel.WARN:

        break;
      case LogLevel.ERROR:
      case LogLevel.FATAL:
        console.error(`%c${message}`, styles, entry);
        break;
    }
  }
  /**
   * Get console styles for different log levels
   */
  private getConsoleStyles(level: LogLevel): string {
    switch (level) {
      case LogLevel.DEBUG:
        return 'color: #6B7280; font-weight: normal;';
      case LogLevel.INFO:
        return 'color: #3B82F6; font-weight: normal;';
      case LogLevel.WARN:
        return 'color: #F59E0B; font-weight: bold;';
      case LogLevel.ERROR:
        return 'color: #EF4444; font-weight: bold;';
      case LogLevel.FATAL:
        return 'color: #DC2626; font-weight: bold; background: #FEF2F2;';
      default:
        return 'color: #6B7280; font-weight: normal;';
    }
  }
  /**
   * Send log entry to external logging service
   */
  private sendToLoggingService(entry: LogMetadata): void {
    // In a real application, you would send this to your logging service
    // For example: Sentry, LogRocket, DataDog, etc.
    // Example implementation:
    // fetch('/api/logs', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(entry)
    // }).catch(err => {
    //   console.error('Failed to send log to service:', err);
    // });
  }
  /**
   * Get string representation of log level
   */
  private getLevelString(level: LogLevel): string {
    switch (level) {
      case LogLevel.DEBUG:
        return 'DEBUG';
      case LogLevel.INFO:
        return 'INFO';
      case LogLevel.WARN:
        return 'WARN';
      case LogLevel.ERROR:
        return 'ERROR';
      case LogLevel.FATAL:
        return 'FATAL';
      default:
        return 'UNKNOWN';
    }
  }
}
export const logger = new Logger();