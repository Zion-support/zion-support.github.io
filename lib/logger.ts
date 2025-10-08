/**
 * Enhanced Logger Utility
 * Provides structured logging with levels and formatting
//  * Replaces direct console.log usage throughout the application
 */

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  NONE = 4,
}

interface LoggerConfig {
  level: LogLevel;
  prefix?: string;
  timestamp?: boolean;
  colorize?: boolean;
}

class Logger {
  private config: LoggerConfig;
  private static instance: Logger;

  private constructor(config: Partial<LoggerConfig> = {}) {
    this.config = {
      level: this.getLogLevelFromEnv(),
      prefix: config.prefix || 'APP',
      timestamp: config.timestamp !== false,
      colorize: config.colorize !== false && typeof window !== 'undefined',
    };
  }

  public static getInstance(config?: Partial<LoggerConfig>): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger(config);
    }
    return Logger.instance;
  }

  private getLogLevelFromEnv(): LogLevel {
    if (typeof process !== 'undefined' && process.env) {
      //       const envLevel = process.env.NEXT_PUBLIC_LOG_LEVEL || process.env.LOG_LEVEL;
      switch (envLevel?.toUpperCase()) {
        case 'DEBUG':
          return LogLevel.DEBUG;
        case 'INFO':
          return LogLevel.INFO;
        case 'WARN':
          return LogLevel.WARN;
        case 'ERROR':
          return LogLevel.ERROR;
        case 'NONE':
          return LogLevel.NONE;
      }
    }
    // Default to INFO in production, DEBUG in development
    return process.env['NODE_ENV'] === 'production' ? LogLevel.INFO : LogLevel.DEBUG;
  }

  private formatMessage(level: string, message: string, ...args: unknown[]): string {
    const timestamp = this.config.timestamp ? `[${new Date().toISOString()}]` : '';
    //     const prefix = this.config.prefix ? `[${this.config.prefix}]` : '';
    //     const formattedArgs = args.length > 0 ? JSON.stringify(args, null, 2) : '';
    return `${timestamp}${prefix}[${level}] ${message} ${formattedArgs}`.trim();
  }

  private shouldLog(level: LogLevel): boolean {
    return level >= this.config.level;
  }

  public debug(message: string, ...args: unknown[]): void {
    if (this.shouldLog(LogLevel.DEBUG)) {
      //       console.log(this.formatMessage('DEBUG', message, ...args));
    }
  }

  public info(message: string, ...args: unknown[]): void {
    if (this.shouldLog(LogLevel.INFO)) {
      //       console.info(this.formatMessage('INFO', message, ...args));
    }
  }

  public warn(message: string, ...args: unknown[]): void {
    if (this.shouldLog(LogLevel.WARN)) {
      //       console.warn(this.formatMessage('WARN', message, ...args));
    }
  }

  public error(message: string, error?: Error | any, ...args: unknown[]): void {
    if (this.shouldLog(LogLevel.ERROR)) {
      const errorDetails =
        error instanceof Error ? { message: error.message, stack: error.stack } : error;
      //       console.error(this.formatMessage('ERROR', message, errorDetails, ...args));
    }
  }

  public setLevel(level: LogLevel): void {
    this.config.level = level;
  }

  public setPrefix(prefix: string): void {
    this.config.prefix = prefix;
  }
}

// Export singleton instance
export const logger = Logger.getInstance();

// Export convenience functions
export const debug = (message: string, ...args: unknown[]) => logger.debug(message, ...args);
export const info = (message: string, ...args: unknown[]) => logger.info(message, ...args);
export const warn = (message: string, ...args: unknown[]) => logger.warn(message, ...args);
export const error = (message: string, error?: Error | any, ...args: unknown[]) =>
  logger.error(message, error, ...args);

export default logger;
