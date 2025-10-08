/**
 * Logger utility for consistent logging across the application
 */

export type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'lifecycle' | 'performance';

interface LogEntry {
  level: LogLevel;
  message: string;
  context?: string;
  data?: any;
  timestamp: string;
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development';

  private log(level: LogLevel, message: string, context?: string, data?: any): void {
    if (!this.isDevelopment && level === 'debug') {
      return;
    }

    const entry: LogEntry = {
      level,
      message,
      context,
      data,
      timestamp: new Date().toISOString(),
    };

    const logMessage = `[${entry.timestamp}] ${entry.level.toUpperCase()}${context ? ` [${context}]` : ''}: ${message}`;

    switch (level) {
      case 'debug':
        console.debug(logMessage, data || '');
        break;
      case 'info':
        console.info(logMessage, data || '');
        break;
      case 'warn':
        console.warn(logMessage, data || '');
        break;
      case 'error':
        console.error(logMessage, data || '');
        break;
      case 'lifecycle':
        console.log(`🔄 ${logMessage}`, data || '');
        break;
      case 'performance':
        console.log(`⚡ ${logMessage}`, data || '');
        break;
    }
  }

  debug(message: string, context?: string, data?: any): void {
    this.log('debug', message, context, data);
  }

  info(message: string, context?: string, data?: any): void {
    this.log('info', message, context, data);
  }

  warn(message: string, context?: string, data?: any): void {
    this.log('warn', message, context, data);
  }

  error(message: string, context?: string, data?: any): void {
    this.log('error', message, context, data);
  }

  lifecycle(message: string, context?: string, data?: any): void {
    this.log('lifecycle', message, context, data);
  }

  performance(message: string, context?: string, data?: any): void {
    this.log('performance', message, context, data);
  }
}

export const logger = new Logger();