/**
 * Centralized logging utility for the application
 * Provides structured logging with different levels and environments
 */

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
}

interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  context?: string;
  data?: Record<string, unknown>;
  error?: Error;
}

class Logger {
  private currentLevel: LogLevel;
  private isDevelopment: boolean;

  constructor() {
    this.isDevelopment = process.env.NODE_ENV === 'development';
    this.currentLevel = this.isDevelopment ? LogLevel.DEBUG : LogLevel.INFO;
  }

  private shouldLog(level: LogLevel): boolean {
    return level >= this.currentLevel;
  }

  private formatMessage(entry: LogEntry): string {
    const { level, message, timestamp, context, data, error } = entry;
    const levelName = LogLevel[level];
    const contextStr = context ? `[${context}]` : '';
    const dataStr = data ? ` | Data: ${JSON.stringify(data)}` : '';
    const errorStr = error ? ` | Error: ${error.message}` : '';
    
    return `${timestamp} ${levelName}${contextStr} ${message}${dataStr}${errorStr}`;
  }

  private log(level: LogLevel, message: string, context?: string, data?: Record<string, unknown>, error?: Error): void {
    if (!this.shouldLog(level)) return;

    const entry: LogEntry = {
      level,
      message,
      timestamp: new Date().toISOString(),
      context,
      data,
      error,
    };

    const formattedMessage = this.formatMessage(entry);

    // Use appropriate console method based on level
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
         
console.error(formattedMessage);
        break;
    }

    // In production, also send to external logging service
    if (!this.isDevelopment && level >= LogLevel.ERROR) {
      this.sendToExternalLogger(entry);
    }
  }

  private async sendToExternalLogger(entry: LogEntry): Promise<void> {
    try {
      // Send to external logging service (e.g., Sentry, LogRocket, etc.)
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag('event', 'error_logged', {
          event_category: 'Error',
          event_label: entry.message,
          value: entry.level,
        });
      }
    } catch (error) {
      // Fallback to console if external logging fails
       
console.error('Failed to send log to external service:', error);
    }
  }

  debug(message: string, context?: string, data?: Record<string, unknown>): void {
    this.log(LogLevel.DEBUG, message, context, data);
  }

  info(message: string, context?: string, data?: Record<string, unknown>): void {
    this.log(LogLevel.INFO, message, context, data);
  }

  warn(message: string, context?: string, data?: Record<string, unknown>): void {
    this.log(LogLevel.WARN, message, context, data);
  }

  error(message: string, context?: string, data?: Record<string, unknown>, error?: Error): void {
    this.log(LogLevel.ERROR, message, context, data, error);
  }

  // Performance logging
  performance(message: string, metrics: Record<string, unknown>, context?: string): void {
    this.log(LogLevel.INFO, message, context || 'Performance', metrics);
  }

  // Application lifecycle logging
  lifecycle(event: string, context?: string, data?: Record<string, unknown>): void {
    this.log(LogLevel.INFO, `App ${event}`, context || 'Lifecycle', data);
  }
}

// Export singleton instance
export const logger = new Logger();

// Export individual methods for convenience
export const { debug, info, warn, error, performance, lifecycle } = logger;
