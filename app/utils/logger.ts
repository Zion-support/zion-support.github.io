interface LogLevel { ERROR: 'error';
  WARN: 'warn';
  INFO: 'info';
  DEBUG: 'debug'; }
const LOG_LEVELS: LogLevel = { ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
  DEBUG: 'debug' };
type LogLevelType = LogLevel[keyof LogLevel];
interface LogEntry { level: LogLevelType;
  message: string;
  timestamp: string;
  context?: Record<string, unknown>;
  error?: Error; }
class Logger { private isDevelopment = process.env.NODE_ENV === 'development';
  private isProduction = process.env.NODE_ENV === 'production';
  private formatMessage(entry: LogEntry): string {
    const { level, message, timestamp, context, error } = entry;
    let formattedMessage = `[${ timestamp }] ${ level.toUpperCase() }: ${ message }`;
    if (context && Object.keys(context).length > 0) { formattedMessage += `\nContext: ${JSON.stringify(context, null, 2) }`;
    }
    if (error) { formattedMessage += `\nError: ${error.message }\nStack: ${ error.stack }`;
    }
    return formattedMessage;
  }
  private log(level: LogLevelType, message: string, context?: Record<string, unknown>, error?: Error): void { const entry: LogEntry = {
      level,
      message,
      timestamp: new Date().toISOString(),
      context,
      error };
    const formattedMessage = this.formatMessage(entry);
    // Console logging
    switch (level) { case 'error':
        break;
      case 'warn':
        break;
      case 'info':
        break;
      case 'debug':
        if (this.isDevelopment) {
          }
        break;
    }
    // Send to external service in production
    if (this.isProduction && (level === 'error' || level === 'warn')) { this.sendToExternalService(entry); }
  }
  private sendToExternalService(entry: LogEntry): void { // In a real application, you would send this to a logging service
    // like Sentry, LogRocket, or your own logging API
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'error', {
        error_message: entry.message,
        error_level: entry.level,
        error_context: entry.context ? JSON.stringify(entry.context) : undefined,
        error_stack: entry.error?.stack });
    }
  }
  error(message: string, context?: Record<string, unknown>, error?: Error): void { this.log(LOG_LEVELS.ERROR, message, context, error); }
  warn(message: string, context?: Record<string, unknown>): void { this.log(LOG_LEVELS.WARN, message, context); }
  info(message: string, context?: Record<string, unknown>): void { this.log(LOG_LEVELS.INFO, message, context); }
  debug(message: string, context?: Record<string, unknown>): void { this.log(LOG_LEVELS.DEBUG, message, context); }
  // Performance logging
  performance(operation: string, duration: number, context?: Record<string, unknown>): void { this.info(`Performance: ${operation } took ${ duration }ms`, context);
  }
  // User action logging
  userAction(action: string, context?: Record<string, unknown>): void { this.info(`User Action: ${action }`, context);
  }
  // API logging
  apiCall(method: string, url: string, status: number, duration?: number, context?: Record<string, unknown>): void { const level = status >= 400 ? 'error' : 'info';
    this.log(level, `API ${method } ${ url } - ${ status }`, { ...context, duration });
  }
}
// Export singleton instance
export const logger = new Logger();
export default logger;