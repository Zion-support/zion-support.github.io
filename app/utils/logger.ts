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

  debug(): void {
    if (this.shouldLog(LogLevel.DEBUG)) { /* empty */ }
  }

  info(): void {
    if (this.shouldLog(LogLevel.INFO)) { /* empty */ }
  }

  warn(): void {
    if (this.shouldLog(LogLevel.WARN)) { /* empty */ }
  }

  error(): void {
    if (this.shouldLog(LogLevel.ERROR)) { /* empty */ }
  }

  // Production-safe logging (only in development)
  dev(): void {
    if (process.env.NODE_ENV === 'development') { /* empty */ }
  }
}

// Create logger instance
const logger = new Logger(
  process.env.NODE_ENV === 'development' ? LogLevel.DEBUG : LogLevel.WARN
);

export default logger;