// Logger utility functions

interface LogLevel {
  ERROR: 'error';
  WARN: 'warn';
  INFO: 'info';
  DEBUG: 'debug';
}

interface LogEntry {
  level: keyof LogLevel;
  message: string;
  data?: any;
  timestamp: string;
  error?: Error;
}

class Logger {
  private static instance: Logger;
  private logs: LogEntry[] = [];
  private maxLogs = 1000;

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  init(): void {
    // Initialize logger
    this.logs = [];
  }

  process(data: any): any {
    return data;
  }

  cleanup(): void {
    this.logs = [];
  }

  private addLog(level: keyof LogLevel, message: string, data?: any, error?: Error): void {
    const logEntry: LogEntry = {
      level,
      message,
      data,
      timestamp: new Date().toISOString(),
      error
    };

    this.logs.push(logEntry);

    // Keep only the last maxLogs entries
    if (this.logs.length > this.maxLogs) {
      this.logs = this.logs.slice(-this.maxLogs);
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console[level](`[${logEntry.timestamp}] ${message}`, data || '', error || '');
    }
  }

  error(message: string, data?: any, error?: Error): void {
    this.addLog('ERROR', message, data, error);
  }

  warn(message: string, data?: any): void {
    this.addLog('WARN', message, data);
  }

  info(message: string, data?: any): void {
    this.addLog('INFO', message, data);
  }

  debug(message: string, data?: any): void {
    this.addLog('DEBUG', message, data);
  }

  getLogs(): LogEntry[] {
    return [...this.logs];
  }

  clearLogs(): void {
    this.logs = [];
  }
}

export const logger = Logger.getInstance();
export default logger;
