/**
 * Enhanced Logger Utility
 * Provides structured logging with different levels and contexts
 */

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  FATAL = 4,
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
  private currentLevel: LogLevel;
  private context: LogContext;
  private enableConsole: boolean;
  private enableRemote: boolean;
  private remoteEndpoint?: string;

  constructor(options: {
    level?: LogLevel;
    context?: LogContext;
    enableConsole?: boolean;
    enableRemote?: boolean;
    remoteEndpoint?: string;
  } = {}) {
    this.currentLevel = options.level || LogLevel.INFO;
    this.context = options.context || {};
    this.enableConsole = options.enableConsole !== false;
    this.enableRemote = options.enableRemote || false;
    this.remoteEndpoint = options.remoteEndpoint;
  }

  private shouldLog(level: LogLevel): boolean {
    return level >= this.currentLevel;
  }

  private formatMessage(level: LogLevel, message: string, context?: LogContext, error?: Error): string {
    const timestamp = new Date().toISOString();
    const levelName = LogLevel[level];
    const contextStr = context ? ` [${JSON.stringify(context)}]` : '';
    const errorStr = error ? ` [Error: ${error.message}]` : '';
    
    return `[${timestamp}] ${levelName}${contextStr}${errorStr}: ${message}`;
  }

  private async sendToRemote(metadata: LogMetadata): Promise<void> {
    if (!this.enableRemote || !this.remoteEndpoint) return;

    try {
      await fetch(this.remoteEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(metadata)
      });
    } catch (error) {
      console.warn('Failed to send log to remote endpoint:', error);
    }
  }

  private log(level: LogLevel, message: string, context?: LogContext, error?: Error): void {
    if (!this.shouldLog(level)) return;

    const mergedContext = { ...this.context, ...context };
    const metadata: LogMetadata = {
      timestamp: new Date().toISOString(),
      level,
      message,
      context: mergedContext,
      error,
    };

    // Console logging
    if (this.enableConsole) {
      const formattedMessage = this.formatMessage(level, message, mergedContext, error);
      
      switch (level) {
        case LogLevel.DEBUG:
          console.debug(formattedMessage);
          break;
        case LogLevel.INFO:
          console.info(formattedMessage);
          break;
        case LogLevel.WARN:
          console.warn(formattedMessage);
          break;
        case LogLevel.ERROR:
        case LogLevel.FATAL:
          console.error(formattedMessage);
          if (error) {
            console.error(error.stack);
          }
          break;
      }
    }

    // Remote logging
    if (this.enableRemote) {
      this.sendToRemote(metadata).catch(err => 
        console.warn('Failed to send log remotely:', err)
      );
    }
  }

  debug(message: string, context?: LogContext): void {
    this.log(LogLevel.DEBUG, message, context);
  }

  info(message: string, context?: LogContext): void {
    this.log(LogLevel.INFO, message, context);
  }

  warn(message: string, context?: LogContext): void {
    this.log(LogLevel.WARN, message, context);
  }

  error(message: string, error?: Error, context?: LogContext): void {
    this.log(LogLevel.ERROR, message, context, error);
  }

  fatal(message: string, error?: Error, context?: LogContext): void {
    this.log(LogLevel.FATAL, message, context, error);
  }

  setLevel(level: LogLevel): void {
    this.currentLevel = level;
  }

  setContext(context: LogContext): void {
    this.context = { ...this.context, ...context };
  }

  clearContext(): void {
    this.context = {};
  }

  // Performance logging
  time(label: string): void {
    console.time(label);
  }

  timeEnd(label: string): void {
    console.timeEnd(label);
  }

  // Group logging
  group(label: string): void {
    console.group(label);
  }

  groupEnd(): void {
    console.groupEnd();
  }

  // Table logging
  table(data: unknown[]): void {
    console.table(data);
  }

  // Trace logging
  trace(message: string, context?: LogContext): void {
    this.debug(message, context);
    console.trace();
  }
}

// Create default logger instance
const logger = new Logger({
  level: process.env.NODE_ENV === 'development' ? LogLevel.DEBUG : LogLevel.INFO,
  enableConsole: true,
  enableRemote: process.env.NODE_ENV === 'production',
  remoteEndpoint: process.env.REACT_APP_LOG_ENDPOINT,
});

export default logger;

// Export individual log functions for convenience
export const { debug, info, warn, error, fatal, time, timeEnd, group, groupEnd, table, trace } = logger;