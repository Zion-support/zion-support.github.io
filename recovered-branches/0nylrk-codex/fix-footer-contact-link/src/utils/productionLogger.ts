<<<<<<< HEAD
/**
 * Production-safe logging utilities
 */

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: number;
  context?: Record<string, any>;
  error?: Error;
}
=======
<<<<<<< HEAD
// Production logger utility for handling logging in production environment

=======
// Production logger utility
>>>>>>> main
interface LogLevel {
  ERROR: 'error';
  WARN: 'warn';
  INFO: 'info';
  DEBUG: 'debug';
}

const LOG_LEVELS: LogLevel = {
  ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
<<<<<<< HEAD
  DEBUG: 'debug'
};

interface LoggerOptions {
  enableConsole?: boolean;
  enableRemote?: boolean;
  remoteEndpoint?: string;
  logLevel?: keyof LogLevel;
}

class ProductionLogger {
  private options: Required<LoggerOptions>;
  private isDevelopment: boolean;

  constructor(options: LoggerOptions = {}) {
    this.isDevelopment = process.env.NODE_ENV === 'development';
    this.options = {
      enableConsole: options.enableConsole ?? true,
      enableRemote: options.enableRemote ?? false,
      remoteEndpoint: options.remoteEndpoint ?? '/api/logs',
      logLevel: options.logLevel ?? 'INFO'
    };
  }

  private shouldLog(level: keyof LogLevel): boolean {
    const levelPriority = {
      ERROR: 0,
      WARN: 1,
      INFO: 2,
      DEBUG: 3
    };

    return levelPriority[level] <= levelPriority[this.options.logLevel];
  }

  private formatMessage(level: string, message: string, data?: any): string {
    const timestamp = new Date().toISOString();
    const formattedData = data ? ` | Data: ${JSON.stringify(data)}` : '';
    return `[${timestamp}] [${level}] ${message}${formattedData}`;
  }

  private async sendToRemote(level: string, message: string, data?: any): Promise<void> {
    if (!this.options.enableRemote) return;

    try {
      await fetch(this.options.remoteEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          level,
          message,
          data,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          url: window.location.href
        })
      });
    } catch (error) {
      // Silently fail for remote logging
      console.warn('Failed to send log to remote endpoint:', error);
    }
  }

  error(message: string, data?: any): void {
    if (!this.shouldLog('ERROR')) return;

    const formattedMessage = this.formatMessage('ERROR', message, data);
    
    if (this.options.enableConsole) {
      console.error(formattedMessage);
    }

    if (!this.isDevelopment) {
      this.sendToRemote('ERROR', message, data);
    }
  }

  warn(message: string, data?: any): void {
    if (!this.shouldLog('WARN')) return;

    const formattedMessage = this.formatMessage('WARN', message, data);
    
    if (this.options.enableConsole) {
      console.warn(formattedMessage);
    }

    if (!this.isDevelopment) {
      this.sendToRemote('WARN', message, data);
    }
  }

  info(message: string, data?: any): void {
    if (!this.shouldLog('INFO')) return;

    const formattedMessage = this.formatMessage('INFO', message, data);
    
    if (this.options.enableConsole) {
      console.info(formattedMessage);
    }

    if (!this.isDevelopment) {
      this.sendToRemote('INFO', message, data);
    }
  }

  debug(message: string, data?: any): void {
    if (!this.shouldLog('DEBUG')) return;

    const formattedMessage = this.formatMessage('DEBUG', message, data);
    
    if (this.options.enableConsole) {
      console.debug(formattedMessage);
    }

    if (!this.isDevelopment) {
      this.sendToRemote('DEBUG', message, data);
=======
  DEBUG: 'debug',
};
>>>>>>> cursor/create-and-deploy-new-content-7720

class ProductionLogger {
  private isDevelopment = process.env.NODE_ENV === 'development';
  private logHistory: LogEntry[] = [];
  private maxHistorySize = 100;

  private createLogEntry(level: LogLevel, message: string, context?: Record<string, any>, error?: Error): LogEntry {
    return {
      level,
      message,
      timestamp: Date.now(),
      context,
      error,
    };
  }

  private addToHistory(entry: LogEntry): void {
    this.logHistory.push(entry);
    
    // Keep only the most recent entries
    if (this.logHistory.length > this.maxHistorySize) {
      this.logHistory = this.logHistory.slice(-this.maxHistorySize);
    }
  }

  private shouldLog(level: LogLevel): boolean {
    if (this.isDevelopment) {
      return true;
    }

    // In production, only log warnings and errors
    return level === 'warn' || level === 'error';
  }

  debug(message: string, context?: Record<string, any>): void {
    const entry = this.createLogEntry('debug', message, context);
    
    if (this.shouldLog('debug')) {
      console.debug(`[DEBUG] ${message}`, context || '');
    }
    
    this.addToHistory(entry);
  }

<<<<<<< HEAD
  info(message: string, context?: Record<string, any>): void {
    const entry = this.createLogEntry('info', message, context);
    
    if (this.shouldLog('info')) {
      console.info(`[INFO] ${message}`, context || '');
=======
  debug(message: string, ...args: any[]): void {
    if (this.shouldLog(LOG_LEVELS.DEBUG)) {
      console.debug(`[DEBUG] ${message}`, ...args);
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-7720
    }
    
    this.addToHistory(entry);
  }

  warn(message: string, context?: Record<string, any>): void {
    const entry = this.createLogEntry('warn', message, context);
    
    if (this.shouldLog('warn')) {
      console.warn(`[WARN] ${message}`, context || '');
    }
    
    this.addToHistory(entry);
  }

  error(message: string, error?: Error, context?: Record<string, any>): void {
    const entry = this.createLogEntry('error', message, context, error);
    
    if (this.shouldLog('error')) {
      console.error(`[ERROR] ${message}`, error || '', context || '');
    }
    
    this.addToHistory(entry);
  }

  getLogHistory(): LogEntry[] {
    return [...this.logHistory];
  }

  clearHistory(): void {
    this.logHistory = [];
  }

  exportLogs(): string {
    return JSON.stringify(this.logHistory, null, 2);
  }
}

<<<<<<< HEAD
// Create singleton instance
export const logger = new ProductionLogger();

// Convenience functions
export const logDebug = (message: string, context?: Record<string, any>): void => {
  logger.debug(message, context);
};

export const logInfo = (message: string, context?: Record<string, any>): void => {
  logger.info(message, context);
};

export const logWarn = (message: string, context?: Record<string, any>): void => {
  logger.warn(message, context);
};

export const logError = (message: string, error?: Error, context?: Record<string, any>): void => {
  logger.error(message, error, context);
};

export const getLogHistory = (): LogEntry[] => {
  return logger.getLogHistory();
};

export const clearLogHistory = (): void => {
  logger.clearHistory();
};

export const exportLogs = (): string => {
  return logger.exportLogs();
};

export default logger;
=======
<<<<<<< HEAD
// Create default logger instance
const productionLogger = new ProductionLogger();

// Convenience exports
export const logInfo = (message: string, data?: any) => productionLogger.info(message, data);
export const logWarn = (message: string, data?: any) => productionLogger.warn(message, data);
export const logError = (message: string, data?: any) => productionLogger.error(message, data);
export const logDebug = (message: string, data?: any) => productionLogger.debug(message, data);
export const logErrorToProduction = (message: string, data?: any) => productionLogger.error(message, data);

export default productionLogger;
export { ProductionLogger, LOG_LEVELS };
export type { LoggerOptions };
=======
export const productionLogger = new ProductionLogger();
export default productionLogger;
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-7720
