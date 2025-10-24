<<<<<<< HEAD
// Logger utilities
export const logger = {
  // Add logging functions here
};
=======
// Logger utility
// Add utility functions here

class Logger {
  private level: number;

  constructor(level: number = 1) {
    this.level = level;
  }

  private shouldLog(level: number): boolean {
    return level >= this.level;
  }

  private formatMessage(level: string, message: string, ..._args: unknown[]): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level}] ${message}`;
  }

  debug(message: string, ...args: unknown[]): void {
    if (this.shouldLog(0)) {
      console.debug(this.formatMessage('DEBUG', message), ...args);
    }
  }

  info(message: string, ...args: unknown[]): void {
    if (this.shouldLog(1)) {
      console.info(this.formatMessage('INFO', message), ...args);
    }
  }

  warn(message: string, ...args: unknown[]): void {
    if (this.shouldLog(2)) {
      console.warn(this.formatMessage('WARN', message), ...args);
    }
  }

  error(message: string, ...args: unknown[]): void {
    if (this.shouldLog(3)) {
      console.error(this.formatMessage('ERROR', message), ...args);
    }
  }

  setLevel(level: number): void {
    this.level = level;
  }
}

export const logger = new Logger();

export default logger;
>>>>>>> cursor/fix-errors-and-merge-to-main-70e6
