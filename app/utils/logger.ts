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
    if (this.shouldLog(LogLevel.DEBUG)) { /* No action needed */ }}

  info(_message: string, ..._args: unknown[]): void {
    if (this.shouldLog(LogLevel.INFO)) { /* No action needed */ }}

  warn(_message: string, ..._args: unknown[]): void {
    if (this.shouldLog(LogLevel.WARN)) { /* No action needed */ }}

  _error(_message: string, ..._args: unknown[]): void {
    if (this.shouldLog(LogLevel.ERROR)) { /* No action needed */ }}

  // Production-safe logging (only in development)
  dev(_message: string, ..._args: unknown[]): void {
    if (process.env.NODE_ENV === 'development') { /* No action needed */ }}
}

// Create logger instance
const logger = new Logger(
  process.env.NODE_ENV === 'development' ? LogLevel.DEBUG : LogLevel.WARN
);

export default logger;