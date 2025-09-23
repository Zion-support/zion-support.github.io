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

class ProductionLogger {
  private isProduction: boolean;

  constructor() {
    this.isProduction = process.env.NODE_ENV === 'production';
  }

  private log(level: string, message: string, ...args: any[]) {
    if (this.isProduction) {
      // In production, only log errors and warnings
      if (level === 'error' || level === 'warn') {
        console[level](message, ...args);
      }
    } else {
      // In development, log everything
      console[level](message, ...args);
    }
  }

  error(message: string, ...args: any[]) {
    this.log(LOG_LEVELS.ERROR, message, ...args);
  }

  warn(message: string, ...args: any[]) {
    this.log(LOG_LEVELS.WARN, message, ...args);
  }

  info(message: string, ...args: any[]) {
    this.log(LOG_LEVELS.INFO, message, ...args);
  }

  debug(message: string, ...args: any[]) {
    this.log(LOG_LEVELS.DEBUG, message, ...args);
  }
}

export const productionLogger = new ProductionLogger();
export default productionLogger;