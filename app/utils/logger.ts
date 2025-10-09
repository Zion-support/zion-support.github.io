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
  DEBUG: 'debug',
};

interface LogEntry {
  level: string;
  message: string;
  timestamp: string;
  component?: string;
  data?: any;
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development';

  private log(level: string, message: string, data?: any, component?: string) {
    const entry: LogEntry = {
      level,
      message,
      timestamp: new Date().toISOString(),
      component,
      data,
    };

    if (this.isDevelopment) {
      console[level as keyof Console]?.(`[${entry.timestamp}] ${entry.component ? `[${entry.component}] ` : ''}${message}`, data || '');
    }

    // In production, you might want to send logs to a service
    // this.sendToLogService(entry);
  }

  error(message: string, data?: any, component?: string) {
    this.log(LOG_LEVELS.ERROR, message, data, component);
  }

  warn(message: string, data?: any, component?: string) {
    this.log(LOG_LEVELS.WARN, message, data, component);
  }

  info(message: string, data?: any, component?: string) {
    this.log(LOG_LEVELS.INFO, message, data, component);
  }

  debug(message: string, data?: any, component?: string) {
    this.log(LOG_LEVELS.DEBUG, message, data, component);
  }

  private sendToLogService(entry: LogEntry) {
    // Implementation for sending logs to external service
    // fetch('/api/logs', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(entry)
    // }).catch(console.error);
  }
}

export const logger = new Logger();