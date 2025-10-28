// Logger utility for production-ready logging

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
}

class Logger {
  private level: LogLevel;

  constructor(level: LogLevel = LogLevel.INFO) {
    this.level = level;
  }

  private shouldLog(level: LogLevel): boolean {
    return level >= this.level;
  }

  debug(message: string, ...args: unknown[]): void {
    if (this.shouldLog(LogLevel.DEBUG)) {
    // Empty block
  }
  }

  info(message: string, ...args: unknown[]): void {
    if (this.shouldLog(LogLevel.INFO)) {
    // Empty block
  }
  }

  warn(message: string, ...args: unknown[]): void {
    if (this.shouldLog(LogLevel.WARN)) {
    // Empty block
  }
  }

  error(message: string, ...args: unknown[]): void {
    if (this.shouldLog(LogLevel.ERROR)) {
      console.error(message, ...args);
    }
  }

  // Production-safe logging (only in development)
  dev(message: string, ...args: unknown[]): void {
    if (process.env.NODE_ENV === 'development') {
      console.log(message, ...args);
    }
  }
}

// Create logger instance
const logger = new Logger();

export default logger;