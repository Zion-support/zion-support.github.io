/**
 * Simple logger utility for development and production
 */

export interface LogLevel {
  DEBUG: 'debug';
  INFO: 'info';
  WARN: 'warn';
  ERROR: 'error';
}

export const LOG_LEVELS: LogLevel = {
  DEBUG: 'debug',
  INFO: 'info',
  WARN: 'warn',
  ERROR: 'error',
};

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development';

  debug(message: string, data?: any): void {
    if (this.isDevelopment && typeof console !== 'undefined') {
      console.debug(`[DEBUG] ${message}`, data || '');
    }
  }

  info(message: string, data?: any): void {
    if (typeof console !== 'undefined') {
      console.info(`[INFO] ${message}`, data || '');
    }
  }

  warn(message: string, data?: any): void {
    if (typeof console !== 'undefined') {
      console.warn(`[WARN] ${message}`, data || '');
    }
  }

  error(message: string, error?: Error | any): void {
    if (typeof console !== 'undefined') {
      console.error(`[ERROR] ${message}`, error || '');
    }
  }
}

export const logger = new Logger();