export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  FATAL = 4
}

export interface LogContext {
  userId?: string;
  sessionId?: string;
  component?: string;
  action?: string;
  [key: string]: unknown;
}

class Logger {
  private logLevel: LogLevel = LogLevel.INFO;
  private logs: Array<{
    level: LogLevel;
    message: string;
    context?: LogContext;
    metadata?: Record<string, unknown>;
    timestamp: number;
  }> = [];

  setLogLevel(level: LogLevel): void {
    this.logLevel = level;
  }

  getLogLevel(): LogLevel {
    return this.logLevel;
  }

  debug(message: string, context?: LogContext, metadata?: Record<string, unknown>): void {
    this.log(LogLevel.DEBUG, message, context, metadata);
  }

  info(message: string, context?: LogContext, metadata?: Record<string, unknown>): void {
    this.log(LogLevel.INFO, message, context, metadata);
  }

  warn(message: string, context?: LogContext, metadata?: Record<string, unknown>): void {
    this.log(LogLevel.WARN, message, context, metadata);
  }

  error(message: string, context?: LogContext, metadata?: Record<string, unknown>): void {
    this.log(LogLevel.ERROR, message, context, metadata);
  }

  fatal(message: string, context?: LogContext, metadata?: Record<string, unknown>): void {
    this.log(LogLevel.FATAL, message, context, metadata);
  }

  private log(level: LogLevel, message: string, context?: LogContext, metadata?: Record<string, unknown>): void {
    if (level < this.logLevel) {
      return;
    }

    const logEntry = {
      level,
      message,
      context,
      metadata,
      timestamp: Date.now()
    };

    this.logs.push(logEntry);

    // In production, you might want to send logs to a service
    if (process.env.NODE_ENV === 'development') {
      const levelName = LogLevel[level];
      const timestamp = new Date(logEntry.timestamp).toISOString();
      const contextStr = context ? ` [${JSON.stringify(context)}]` : '';
      const metadataStr = metadata ? ` ${JSON.stringify(metadata)}` : '';
      
      console.log(`[${timestamp}] ${levelName}: ${message}${contextStr}${metadataStr}`);
    }
  }

  getLogs(): Array<{
    level: LogLevel;
    message: string;
    context?: LogContext;
    metadata?: Record<string, unknown>;
    timestamp: number;
  }> {
    return [...this.logs];
  }

  clearLogs(): void {
    this.logs = [];
  }

  exportLogs(): string {
    return JSON.stringify(this.logs, null, 2);
  }
}

// Create a singleton instance
const logger = new Logger();

export default logger;