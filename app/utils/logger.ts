/**
 * Enhanced Logger Utility
 * Production-ready logging with multiple levels and formatting
 */

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  FATAL = 4,
}

export interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: Date;
  context?: string;
  metadata?: Record<string, unknown>;
  stack?: string;
}

export interface LoggerConfig {
  minLevel: LogLevel;
  enableConsole: boolean;
  enableRemote: boolean;
  remoteEndpoint?: string;
  maxBufferSize: number;
  batchSize: number;
  flushInterval: number;
}

class Logger {
  private config: LoggerConfig = {
    minLevel: process.env['NODE_ENV'] === 'production' ? LogLevel.WARN : LogLevel.DEBUG,
    enableConsole: true,
    enableRemote: process.env['NODE_ENV'] === 'production',
    maxBufferSize: 100,
    batchSize: 10,
    flushInterval: 30000, // 30 seconds
  };

  private buffer: LogEntry[] = [];
  private flushTimer?: NodeJS.Timeout;

  constructor() {
    if (typeof window !== 'undefined' && this.config.enableRemote) {
      this.startFlushTimer();
      
      // Flush on page unload
      window.addEventListener('beforeunload', () => this.flush());
    }
  }

  /**
   * Parse arguments to determine context and metadata
   */
  private parseArgs(
    contextOrMetadata?: string | Record<string, unknown>,
    metadata?: Record<string, unknown>
  ): [string | undefined, Record<string, unknown> | undefined] {
    if (typeof contextOrMetadata === 'string') {
      return [contextOrMetadata, metadata];
    }
    return [undefined, contextOrMetadata];
  }

  /**
   * Log a debug message
   */
  debug(message: string, contextOrMetadata?: string | Record<string, unknown>, metadata?: Record<string, unknown>): void {
    const [context, meta] = this.parseArgs(contextOrMetadata, metadata);
    this.log(LogLevel.DEBUG, message, context, meta);
  }

  /**
   * Log an info message
   */
  info(message: string, contextOrMetadata?: string | Record<string, unknown>, metadata?: Record<string, unknown>): void {
    const [context, meta] = this.parseArgs(contextOrMetadata, metadata);
    this.log(LogLevel.INFO, message, context, meta);
  }

  /**
   * Log a warning message
   */
  warn(message: string, contextOrMetadata?: string | Record<string, unknown>, metadata?: Record<string, unknown>): void {
    const [context, meta] = this.parseArgs(contextOrMetadata, metadata);
    this.log(LogLevel.WARN, message, context, meta);
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
    let context: string | undefined;
    let meta: Record<string, unknown> | undefined;

    if (errorOrContextOrMetadata instanceof Error) {
      error = errorOrContextOrMetadata;
      [context, meta] = this.parseArgs(contextOrMetadata, metadata);
    } else {
      [context, meta] = this.parseArgs(errorOrContextOrMetadata, contextOrMetadata as Record<string, unknown> | undefined);
    }

    const entry: LogEntry = {
      level: LogLevel.ERROR,
      message,
      timestamp: new Date(),
      context,
      metadata: {
        ...meta,
        error: error ? {
          name: error.name,
          message: error.message,
          stack: error.stack,
        } : undefined,
      },
      stack: error?.stack,
    };

    this.processLog(entry);
  }

  /**
   * Log a fatal error message
   */
  fatal(
    message: string,
    errorOrContextOrMetadata?: Error | string | Record<string, unknown>,
    contextOrMetadata?: string | Record<string, unknown>,
    metadata?: Record<string, unknown>
  ): void {
    let error: Error | undefined;
    let context: string | undefined;
    let meta: Record<string, unknown> | undefined;

    if (errorOrContextOrMetadata instanceof Error) {
      error = errorOrContextOrMetadata;
      [context, meta] = this.parseArgs(contextOrMetadata, metadata);
    } else {
      [context, meta] = this.parseArgs(errorOrContextOrMetadata, contextOrMetadata as Record<string, unknown> | undefined);
    }

    const entry: LogEntry = {
      level: LogLevel.FATAL,
      message,
      timestamp: new Date(),
      context,
      metadata: {
        ...meta,
        error: error ? {
          name: error.name,
          message: error.message,
          stack: error.stack,
        } : undefined,
      },
      stack: error?.stack,
    };

    this.processLog(entry);
    // Immediately flush fatal errors
    this.flush();
  }

  /**
   * Log performance metrics
   */
  perf(metric: string, value: number, metadata?: Record<string, unknown>): void {
    this.info(`Performance: ${metric} = ${value}ms`, 'Performance', {
      metric,
      value,
      ...metadata,
    });
  }

  /**
   * Group related log messages
   */
  group(label: string, fn?: () => void): void {
    if (this.config.enableConsole && typeof console.group === 'function') {
      console.group(label);
      if (fn) {
        try {
          fn();
        } finally {
          console.groupEnd();
        }
      }
    } else if (fn) {
      fn();
    }
  }

  /**
   * Create a child logger with a specific context
   */
  child(context: string): ContextLogger {
    return new ContextLogger(this, context);
  }

  /**
   * End a console group
   */
  groupEnd(): void {
    if (this.config.enableConsole && typeof console.groupEnd === 'function') {
      console.groupEnd();
    }
  }

  /**
   * Flush buffered logs to remote endpoint
   */
  async flush(): Promise<void> {
    if (this.buffer.length === 0 || !this.config.enableRemote) {
      return;
    }

    const logs = [...this.buffer];
    this.buffer = [];

    try {
      if (this.config.remoteEndpoint) {
        await fetch(this.config.remoteEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ logs }),
        });
      }
    } catch (error) {
      console.error('Failed to flush logs:', error);
      // Put logs back in buffer if flush failed
      this.buffer = [...logs, ...this.buffer];
    }
  }

  /**
   * Set logger configuration
   */
  configure(config: Partial<LoggerConfig>): void {
    this.config = { ...this.config, ...config };

    if (this.flushTimer) {
      clearInterval(this.flushTimer);
    }

    if (this.config.enableRemote) {
      this.startFlushTimer();
    }
  }

  /**
   * Core logging method
   */
  private log(
    level: LogLevel,
    message: string,
    context?: string,
    metadata?: Record<string, unknown>
  ): void {
    const entry: LogEntry = {
      level,
      message,
      timestamp: new Date(),
      context,
      metadata,
    };

    this.processLog(entry);
  }

  /**
   * Process a log entry
   */
  private processLog(entry: LogEntry): void {
    // Check if log level meets minimum threshold
    if (entry.level < this.config.minLevel) {
      return;
    }

    // Console output
    if (this.config.enableConsole) {
      this.writeToConsole(entry);
    }

    // Buffer for remote logging
    if (this.config.enableRemote) {
      this.addToBuffer(entry);
    }
  }

  /**
   * Write log entry to console
   */
  private writeToConsole(entry: LogEntry): void {
    const prefix = `[${this.getLevelName(entry.level)}]`;
    const timestamp = entry.timestamp.toISOString();
    const context = entry.context ? `[${entry.context}]` : '';
    const message = `${timestamp} ${prefix} ${context} ${entry.message}`;

    switch (entry.level) {
      case LogLevel.DEBUG:
        console.debug(message, entry.metadata);
        break;
      case LogLevel.INFO:
        console.info(message, entry.metadata);
        break;
      case LogLevel.WARN:
        console.warn(message, entry.metadata);
        break;
      case LogLevel.ERROR:
      case LogLevel.FATAL:
        console.error(message, entry.metadata);
        if (entry.stack) {
          console.error(entry.stack);
        }
        break;
    }
  }

  /**
   * Add log entry to buffer
   */
  private addToBuffer(entry: LogEntry): void {
    this.buffer.push(entry);

    // Trim buffer if it exceeds max size
    if (this.buffer.length > this.config.maxBufferSize) {
      this.buffer = this.buffer.slice(-this.config.maxBufferSize);
    }

    // Flush if buffer reaches batch size
    if (this.buffer.length >= this.config.batchSize) {
      this.flush();
    }
  }

  /**
   * Start periodic flush timer
   */
  private startFlushTimer(): void {
    this.flushTimer = setInterval(() => {
      this.flush();
    }, this.config.flushInterval);
  }

  /**
   * Get human-readable log level name
   */
  private getLevelName(level: LogLevel): string {
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

/**
 * Context Logger - provides logging with a fixed context
 */
class ContextLogger {
  constructor(private logger: Logger, private context: string) {}

  debug(message: string, metadata?: Record<string, unknown>): void {
    this.logger.debug(message, this.context, metadata);
  }

  info(message: string, metadata?: Record<string, unknown>): void {
    this.logger.info(message, this.context, metadata);
  }

  warn(message: string, metadata?: Record<string, unknown>): void {
    this.logger.warn(message, this.context, metadata);
  }

  error(message: string, error?: Error, metadata?: Record<string, unknown>): void {
    this.logger.error(message, error, this.context, metadata);
  }

  fatal(message: string, error?: Error, metadata?: Record<string, unknown>): void {
    this.logger.fatal(message, error, this.context, metadata);
  }

  perf(metric: string, value: number, metadata?: Record<string, unknown>): void {
    this.logger.perf(metric, value, { ...metadata, context: this.context });
  }

  group(label: string, fn: () => void): void {
    this.logger.group(`${this.context}: ${label}`, fn);
  }

  child(subContext: string): ContextLogger {
    return new ContextLogger(this.logger, `${this.context}:${subContext}`);
  }
}

// Export singleton instance
export const logger = new Logger();

// Export convenience functions
export const debug = (message: string, context?: string, metadata?: Record<string, unknown>) =>
  logger.debug(message, context, metadata);
export const info = (message: string, context?: string, metadata?: Record<string, unknown>) =>
  logger.info(message, context, metadata);
export const warn = (message: string, context?: string, metadata?: Record<string, unknown>) =>
  logger.warn(message, context, metadata);
export const error = (
  message: string,
  err?: Error,
  context?: string,
  metadata?: Record<string, unknown>
) => logger.error(message, err, context, metadata);
export const fatal = (
  message: string,
  err?: Error,
  context?: string,
  metadata?: Record<string, unknown>
) => logger.fatal(message, err, context, metadata);

export default logger;