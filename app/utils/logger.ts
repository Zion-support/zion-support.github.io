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
  DEBUG: 'debug'
};

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development';
  private isProduction = process.env.NODE_ENV === 'production';

  private log(level: keyof LogLevel, message: string, data?: any) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level: LOG_LEVELS[level],
      message,
      data,
      url: typeof window !== 'undefined' ? window.location.href : 'unknown'
    };

    // In development, log to console
    if (this.isDevelopment) {
      const consoleMethod = level === 'ERROR' ? 'error' : 
                           level === 'WARN' ? 'warn' : 
                           level === 'INFO' ? 'info' : 'log';
      (console as any)[consoleMethod](`[${timestamp}] ${message}`, data);
    }

    // Store logs for debugging
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        const logs = JSON.parse(localStorage.getItem('appLogs') || '[]');
        logs.push(logEntry);
        // Keep only last 100 logs
        localStorage.setItem('appLogs', JSON.stringify(logs.slice(-100)));
      } catch {
        // Ignore localStorage errors
      }
    }

    // In production, send to external logging service
    if (this.isProduction && level === 'ERROR') {
      this.sendToExternalService(logEntry);
    }
  }

  private sendToExternalService(_logEntry: any) {
    // Example: Send to external logging service
    // fetch('/api/logs', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(logEntry)
    // }).catch(() => {
    //   // Ignore network errors
    // });
  }

  error(message: string, data?: any) {
    this.log('ERROR', message, data);
  }

  warn(message: string, data?: any) {
    this.log('WARN', message, data);
  }

  info(message: string, data?: any) {
    this.log('INFO', message, data);
  }

  debug(message: string, data?: any) {
    this.log('DEBUG', message, data);
  }

  getLogs() {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        return JSON.parse(localStorage.getItem('appLogs') || '[]');
      } catch {
        return [];
      }
    }
    return [];
  }

  clearLogs() {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('appLogs');
    }
  }
}

export const logger = new Logger();