// Logger utilities
export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3
}

export interface LogContext {
  [key: string]: unknown;
}

export interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: number;
  context?: LogContext;
  userId?: string;
}

class Logger {
  private logLevel: LogLevel = LogLevel.INFO;
  private logs: LogEntry[] = [];

  setLogLevel(level: LogLevel): void {
    this.logLevel = level;
  }

  private shouldLog(level: LogLevel): boolean {
    return level >= this.logLevel;
  }

  private log(level: LogLevel, message: string, context?: LogContext, userId?: string): void {
    if (!this.shouldLog(level)) {
      return;
    }

    const entry: LogEntry = {
      level,
      message,
      timestamp: Date.now(),
      context,
      userId
    };

    this.logs.push(entry);

    // Console output
    const levelName = LogLevel[level];
    const timestamp = new Date(entry.timestamp).toISOString();
    const contextStr = context ? ` ${JSON.stringify(context)}` : '';
    const userStr = userId ? ` [User: ${userId}]` : '';

    console[levelName.toLowerCase() as keyof Console](
      `[${timestamp}] ${levelName}: ${message}${contextStr}${userStr}`
    );
  }

  debug(message: string, context?: LogContext, userId?: string): void {
    this.log(LogLevel.DEBUG, message, context, userId);
  }

  info(message: string, context?: LogContext, userId?: string): void {
    this.log(LogLevel.INFO, message, context, userId);
  }

  warn(message: string, context?: LogContext, userId?: string): void {
    this.log(LogLevel.WARN, message, context, userId);
  }

  error(message: string, context?: LogContext, userId?: string): void {
    this.log(LogLevel.ERROR, message, context, userId);
  }

  getLogs(level?: LogLevel): LogEntry[] {
    if (level !== undefined) {
      return this.logs.filter(log => log.level === level);
    }
    return [...this.logs];
  }

  clearLogs(): void {
    this.logs = [];
  }

  exportLogs(): string {
    return JSON.stringify(this.logs, null, 2);
  }
}

// Export singleton instance
export const logger = new Logger();

// Export utility functions
export const logDebug = (message: string, context?: LogContext, userId?: string): void => {
  logger.debug(message, context, userId);
};

export const logInfo = (message: string, context?: LogContext, userId?: string): void => {
  logger.info(message, context, userId);
};

export const logWarn = (message: string, context?: LogContext, userId?: string): void => {
  logger.warn(message, context, userId);
};

export const logError = (message: string, context?: LogContext, userId?: string): void => {
  logger.error(message, context, userId);
};

// Set log level based on environment
if (typeof window !== 'undefined') {
  const isDevelopment = process.env.NODE_ENV === 'development';
  logger.setLogLevel(isDevelopment ? LogLevel.DEBUG : LogLevel.INFO);
}