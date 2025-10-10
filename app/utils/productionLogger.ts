/**
 * Production-ready logger that removes console statements in production
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogEntry {
  level: LogLevel;
  message: string;
  data?: unknown;
  timestamp: string;
  context?: string;
}

class ProductionLogger {
  private isDevelopment = process.env.NODE_ENV === 'development';
  private isProduction = process.env.NODE_ENV === 'production';

  private log(level: LogLevel, message: string, data?: unknown, context?: string): void {
    const entry: LogEntry = {
      level,
      message,
      data,
      timestamp: new Date().toISOString(),
      context
    };

    // Only log in development
    if (this.isDevelopment) {
      switch (level) {
        case 'debug':
          console.debug(`[${context || 'APP'}] ${message}`, data);
          break;
        case 'info':
          console.info(`[${context || 'APP'}] ${message}`, data);
          break;
        case 'warn':
          console.warn(`[${context || 'APP'}] ${message}`, data);
          break;
        case 'error':
          console.error(`[${context || 'APP'}] ${message}`, data);
          break;
      }
    }

    // In production, send critical errors to monitoring service
    if (this.isProduction && level === 'error') {
      this.sendToMonitoring(entry);
    }
  }

  private sendToMonitoring(entry: LogEntry): void {
    // Send to analytics/monitoring service
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'error_log', {
        error_message: entry.message,
        error_context: entry.context,
        error_timestamp: entry.timestamp,
        event_category: 'Error'
      });
    }
  }

  debug(message: string, data?: unknown, context?: string): void {
    this.log('debug', message, data, context);
  }

  info(message: string, data?: unknown, context?: string): void {
    this.log('info', message, data, context);
  }

  warn(message: string, data?: unknown, context?: string): void {
    this.log('warn', message, data, context);
  }

  error(message: string, data?: unknown, context?: string): void {
    this.log('error', message, data, context);
  }
}

export const logger = new ProductionLogger();
export default logger;