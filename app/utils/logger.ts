// Enhanced logging utility for better error tracking and debugging
export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
}

interface LogEntry {
  level: LogLevel;
  message: string;
  context?: string;
  data?: Record<string, unknown>;
  timestamp: string;
  userAgent?: string;
  url?: string;
}

class Logger {
  private static instance: Logger;
  private logLevel: LogLevel;
  private isDevelopment: boolean;

  private constructor() {
    this.isDevelopment = process.env.NODE_ENV === 'development';
    this.logLevel = this.isDevelopment ? LogLevel.DEBUG : LogLevel.WARN;
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private shouldLog(level: LogLevel): boolean {
    return level >= this.logLevel;
  }

  private createLogEntry(
    level: LogLevel,
    message: string,
    context?: string,
    data?: Record<string, unknown>
  ): LogEntry {
    return {
      level,
      message,
      context,
      data,
      timestamp: new Date().toISOString(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
    };
  }

  private logToConsole(entry: LogEntry): void {
    const { level, message, context, data, timestamp } = entry;
    const contextStr = context ? `[${context}]` : '';
    const dataStr = data ? ` ${JSON.stringify(data)}` : '';

    switch (level) {
      case LogLevel.DEBUG:
        console.debug(`${timestamp} ${contextStr} DEBUG: ${message}${dataStr}`);
        break;
      case LogLevel.INFO:
        console.info(`${timestamp} ${contextStr} INFO: ${message}${dataStr}`);
        break;
      case LogLevel.WARN:
        console.warn(`${timestamp} ${contextStr} WARN: ${message}${dataStr}`);
        break;
      case LogLevel.ERROR:
        console.error(`${timestamp} ${contextStr} ERROR: ${message}${dataStr}`);
        break;
    }
  }

  private logToAnalytics(entry: LogEntry): void {
    if (typeof window === 'undefined' || !(window as any).gtag) return;

    const eventName = `log_${LogLevel[entry.level].toLowerCase()}`;
    (window as any).gtag('event', eventName, {
      message: entry.message,
      context: entry.context,
      data: entry.data,
      timestamp: entry.timestamp,
    });
  }

  private log(level: LogLevel, message: string, context?: string, data?: Record<string, unknown>): void {
    if (!this.shouldLog(level)) return;

    const entry = this.createLogEntry(level, message, context, data);

    // Always log to console in development
    if (this.isDevelopment) {
      this.logToConsole(entry);
    }

    // Log to analytics in production for errors and warnings
    if (!this.isDevelopment && (level === LogLevel.ERROR || level === LogLevel.WARN)) {
      this.logToAnalytics(entry);
    }
  }

  public debug(message: string, context?: string, data?: Record<string, unknown>): void {
    this.log(LogLevel.DEBUG, message, context, data);
  }

  public info(message: string, context?: string, data?: Record<string, unknown>): void {
    this.log(LogLevel.INFO, message, context, data);
  }

  public warn(message: string, context?: string, data?: Record<string, unknown>): void {
    this.log(LogLevel.WARN, message, context, data);
  }

  public error(message: string, context?: string, data?: Record<string, unknown>): void {
    this.log(LogLevel.ERROR, message, context, data);
  }

  public setLogLevel(level: LogLevel): void {
    this.logLevel = level;
  }
}

// Export singleton instance
export const logger = Logger.getInstance();

// Convenience functions
export const logDebug = (message: string, context?: string, data?: Record<string, unknown>) => 
  logger.debug(message, context, data);

export const logInfo = (message: string, context?: string, data?: Record<string, unknown>) => 
  logger.info(message, context, data);

export const logWarn = (message: string, context?: string, data?: Record<string, unknown>) => 
  logger.warn(message, context, data);

export const logError = (message: string, context?: string, data?: Record<string, unknown>) => 
  logger.error(message, context, data);