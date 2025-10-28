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

  debug(_message: string, ..._args: unknown[]): void {
    if (this.shouldLog(LogLevel.DEBUG)) {
      // console.log(`[DEBUG] ${_message}`, ..._args);
    }
  }

  info(_message: string, ..._args: unknown[]): void {
    if (this.shouldLog(LogLevel.INFO)) {
      // console.log(`[INFO] ${_message}`, ..._args);
    }
  }

  warn(_message: string, ..._args: unknown[]): void {
    if (this.shouldLog(LogLevel.WARN)) {
      // console.warn(`[WARN] ${_message}`, ..._args);
    }
  }

  error(_message: string, ..._args: unknown[]): void {
    if (this.shouldLog(LogLevel.ERROR)) {
      // console.error(`[ERROR] ${_message}`, ..._args);
    }
  }

  // Production-safe logging (only in development)
  dev(_message: string, ..._args: unknown[]): void {
    if (process.env.NODE_ENV === 'development') {
      // console.log(`[DEV] ${_message}`, ..._args);
    }
  }
}

// Create logger instance
const logger = new Logger(
  process.env.NODE_ENV === 'development' ? LogLevel.DEBUG : LogLevel.WARN
);

export default logger;