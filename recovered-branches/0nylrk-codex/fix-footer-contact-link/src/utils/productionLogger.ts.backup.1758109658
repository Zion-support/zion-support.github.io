<<<<<<< HEAD
// Production-safe logging utility

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogEntry {
  level: LogLevel;
  message: string;
  data?: any;
  timestamp: string;
  url?: string;
  userAgent?: string;
}

class ProductionLogger {
  private isDevelopment: boolean;
  private logLevel: LogLevel;

  constructor() {
    this.isDevelopment = process.env.NODE_ENV === 'development';
    this.logLevel = this.isDevelopment ? 'debug' : 'warn';
  }

  private shouldLog(level: LogLevel): boolean {
    const levels: Record<LogLevel, number> = {
      debug: 0,
      info: 1,
      warn: 2,
      error: 3,
    };
    return levels[level] >= levels[this.logLevel];
  }

  private createLogEntry(level: LogLevel, message: string, data?: any): LogEntry {
    return {
      level,
      message,
      data,
      timestamp: new Date().toISOString(),
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : undefined,
=======
/**
 * Production-safe logging utility
 * Provides different logging levels and formats for production environments
 */

export enum LogLevel {
  ERROR = 0,
  WARN = 1,
  INFO = 2,
  DEBUG = 3,
  TRACE = 4
}

export interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  data?: any;
  context?: string;
}

class ProductionLogger {
  private logLevel: LogLevel;
  private isProduction: boolean;
  private context?: string;

  constructor(logLevel: LogLevel = LogLevel.INFO, context?: string) {
    this.logLevel = logLevel;
    this.isProduction = process.env.NODE_ENV === 'production';
    this.context = context;
  }

  private shouldLog(level: LogLevel): boolean {
    return level <= this.logLevel;
  }

  private formatMessage(level: LogLevel, message: string, data?: any): LogEntry {
    return {
      timestamp: new Date().toISOString(),
      level,
      message,
      data,
      context: this.context
>>>>>>> cursor/create-and-deploy-new-content-ee06
    };
  }

  private log(level: LogLevel, message: string, data?: any): void {
    if (!this.shouldLog(level)) return;

<<<<<<< HEAD
    const logEntry = this.createLogEntry(level, message, data);

    if (this.isDevelopment) {
      // In development, use console methods with colors
      const colors: Record<LogLevel, string> = {
        debug: '#6B7280',
        info: '#3B82F6',
        warn: '#F59E0B',
        error: '#EF4444',
      };

      const style = `color: ${colors[level]}; font-weight: bold;`;
      console[level](`%c[${level.toUpperCase()}] ${message}`, style, data || '');
    } else {
      // In production, send to logging service or store locally
      this.sendToLoggingService(logEntry);
    }
  }

  private sendToLoggingService(logEntry: LogEntry): void {
    // In production, you would typically send logs to a service like:
    // - Sentry
    // - LogRocket
    // - DataDog
    // - Custom logging endpoint

    // For now, we'll store in localStorage as a fallback
=======
    const logEntry = this.formatMessage(level, message, data);
    
    if (this.isProduction) {
      // In production, only log to console for errors and warnings
      if (level <= LogLevel.WARN) {
        console.error(JSON.stringify(logEntry));
      }
      // Send to external logging service if available
      this.sendToExternalLogger(logEntry);
    } else {
      // In development, use console methods with colors
      this.logToConsole(level, message, data);
    }
  }

  private logToConsole(level: LogLevel, message: string, data?: any): void {
    const timestamp = new Date().toLocaleTimeString();
    const contextStr = this.context ? `[${this.context}]` : '';
    
    switch (level) {
      case LogLevel.ERROR:
        console.error(`🔴 ${timestamp} ${contextStr}`, message, data || '');
        break;
      case LogLevel.WARN:
        console.warn(`🟡 ${timestamp} ${contextStr}`, message, data || '');
        break;
      case LogLevel.INFO:
        console.info(`🔵 ${timestamp} ${contextStr}`, message, data || '');
        break;
      case LogLevel.DEBUG:
        console.debug(`🟢 ${timestamp} ${contextStr}`, message, data || '');
        break;
      case LogLevel.TRACE:
        console.trace(`⚪ ${timestamp} ${contextStr}`, message, data || '');
        break;
    }
  }

  private sendToExternalLogger(logEntry: LogEntry): void {
    // In a real application, you would send this to your logging service
    // For now, we'll just store it in memory or localStorage for debugging
>>>>>>> cursor/create-and-deploy-new-content-ee06
    try {
      const logs = JSON.parse(localStorage.getItem('app_logs') || '[]');
      logs.push(logEntry);
      
<<<<<<< HEAD
      // Keep only last 100 logs
=======
      // Keep only the last 100 logs
>>>>>>> cursor/create-and-deploy-new-content-ee06
      if (logs.length > 100) {
        logs.splice(0, logs.length - 100);
      }
      
      localStorage.setItem('app_logs', JSON.stringify(logs));
    } catch (error) {
<<<<<<< HEAD
      // Silently fail if localStorage is not available
    }
  }

  debug(message: string, data?: any): void {
    this.log('debug', message, data);
  }

  info(message: string, data?: any): void {
    this.log('info', message, data);
  }

  warn(message: string, data?: any): void {
    this.log('warn', message, data);
  }

  error(message: string, data?: any): void {
    this.log('error', message, data);
  }

  // Get stored logs (useful for debugging in production)
  getStoredLogs(): LogEntry[] {
    try {
      return JSON.parse(localStorage.getItem('app_logs') || '[]');
    } catch {
=======
      // If localStorage fails, just ignore
    }
  }

  error(message: string, data?: any): void {
    this.log(LogLevel.ERROR, message, data);
  }

  warn(message: string, data?: any): void {
    this.log(LogLevel.WARN, message, data);
  }

  info(message: string, data?: any): void {
    this.log(LogLevel.INFO, message, data);
  }

  debug(message: string, data?: any): void {
    this.log(LogLevel.DEBUG, message, data);
  }

  trace(message: string, data?: any): void {
    this.log(LogLevel.TRACE, message, data);
  }

  setContext(context: string): void {
    this.context = context;
  }

  setLogLevel(level: LogLevel): void {
    this.logLevel = level;
  }

  getLogs(): LogEntry[] {
    try {
      return JSON.parse(localStorage.getItem('app_logs') || '[]');
    } catch (error) {
>>>>>>> cursor/create-and-deploy-new-content-ee06
      return [];
    }
  }

<<<<<<< HEAD
  // Clear stored logs
  clearStoredLogs(): void {
    try {
      localStorage.removeItem('app_logs');
    } catch {
      // Silently fail
    }
  }

  // Set log level dynamically
  setLogLevel(level: LogLevel): void {
    this.logLevel = level;
  }
}

// Create singleton instance
const productionLogger = new ProductionLogger();

export default productionLogger;
export { ProductionLogger, type LogLevel, type LogEntry };
=======
  clearLogs(): void {
    localStorage.removeItem('app_logs');
  }
}

// Create default logger instance
const logger = new ProductionLogger();

// Export convenience functions
export const log = {
  error: (message: string, data?: any) => logger.error(message, data),
  warn: (message: string, data?: any) => logger.warn(message, data),
  info: (message: string, data?: any) => logger.info(message, data),
  debug: (message: string, data?: any) => logger.debug(message, data),
  trace: (message: string, data?: any) => logger.trace(message, data),
  setContext: (context: string) => logger.setContext(context),
  setLogLevel: (level: LogLevel) => logger.setLogLevel(level),
  getLogs: () => logger.getLogs(),
  clearLogs: () => logger.clearLogs()
};

export default ProductionLogger;
>>>>>>> cursor/create-and-deploy-new-content-ee06
