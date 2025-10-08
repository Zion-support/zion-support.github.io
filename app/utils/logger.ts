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
   * Log an error message
   */
  error(message: string, error?: Error | any, context?: LogContext): void {
    if (this.logLevel <= LogLevel.ERROR) {
      const logData: LogMetadata = {
        timestamp: new Date().toISOString(),
        level: LogLevel.ERROR,
        message,
        context,
        error: error instanceof Error ? error : undefined,
      };

      if (this.isDevelopment) {
        console.error(`[ERROR] ${message}`, error, context);
      } else {
        // In production, you might want to send to a logging service
        console.error(JSON.stringify(logData));
      }
    }
  }

  /**
   * Log a warning message
   */
  warn(message: string, context?: LogContext): void {
    if (this.logLevel <= LogLevel.WARN) {
      const logData: LogMetadata = {
        timestamp: new Date().toISOString(),
        level: LogLevel.WARN,
        message,
        context,
      };

      if (this.isDevelopment) {
        console.warn(`[WARN] ${message}`, context);
      } else {
        console.warn(JSON.stringify(logData));
      }
    }
  }

  /**
   * Log an info message
   */
  info(message: string, context?: LogContext): void {
    if (this.logLevel <= LogLevel.INFO) {
      const logData: LogMetadata = {
        timestamp: new Date().toISOString(),
        level: LogLevel.INFO,
        message,
        context,
      };

      if (this.isDevelopment) {
        console.info(`[INFO] ${message}`, context);
      } else {
        console.info(JSON.stringify(logData));
      }
    }
  }

  /**
   * Log a debug message
   */
  debug(message: string, context?: LogContext): void {
    if (this.logLevel <= LogLevel.DEBUG) {
      const logData: LogMetadata = {
        timestamp: new Date().toISOString(),
        level: LogLevel.DEBUG,
        message,
        context,
      };

      if (this.isDevelopment) {
        console.debug(`[DEBUG] ${message}`, context);
      }
    }
  }

  /**
   * Log a fatal error message
   */
  fatal(message: string, error?: Error, context?: LogContext): void {
    if (this.logLevel <= LogLevel.FATAL) {
      const logData: LogMetadata = {
        timestamp: new Date().toISOString(),
        level: LogLevel.FATAL,
        message,
        context,
        error,
      };

      console.error(`[FATAL] ${message}`, error, context);
      
      // In production, you might want to send to a critical error service
      if (!this.isDevelopment) {
        console.error(JSON.stringify(logData));
      }
    }
  }

  /**
   * Log performance metrics
   */
  performance(operation: string, duration: number, context?: LogContext): void {
    const logData: LogMetadata = {
      timestamp: new Date().toISOString(),
      level: LogLevel.INFO,
      message: `Performance: ${operation} took ${duration}ms`,
      context: {
        ...context,
        operation,
        duration,
        type: 'performance',
      },
    };

    if (this.isDevelopment) {
      console.info(`[PERF] ${operation} took ${duration}ms`, context);
    } else {
      console.info(JSON.stringify(logData));
    }
  }

  /**
   * Log user actions
   */
  userAction(action: string, context?: LogContext): void {
    const logData: LogMetadata = {
      timestamp: new Date().toISOString(),
      level: LogLevel.INFO,
      message: `User Action: ${action}`,
      context: {
        ...context,
        action,
        type: 'user_action',
      },
    };

    if (this.isDevelopment) {
      console.info(`[USER] ${action}`, context);
    } else {
      console.info(JSON.stringify(logData));
    }
  }

  /**
   * Log API calls
   */
  apiCall(method: string, url: string, status: number, duration?: number, context?: LogContext): void {
    const logData: LogMetadata = {
      timestamp: new Date().toISOString(),
      level: LogLevel.INFO,
      message: `API Call: ${method} ${url} - ${status}`,
      context: {
        ...context,
        method,
        url,
        status,
        duration,
        type: 'api_call',
      },
    };

    if (this.isDevelopment) {
      console.info(`[API] ${method} ${url} - ${status}${duration ? ` (${duration}ms)` : ''}`, context);
    } else {
      console.info(JSON.stringify(logData));
    }
  }
}

// Create and export a singleton instance
export const logger = new Logger();

// Export the class for testing
export { Logger };