// Logger utility functions

export interface LoggerConfig {
  enabled: boolean;
}

export class Logger {
  private config: LoggerConfig;

  constructor(config: Partial<LoggerConfig> = {}) {
    this.config = {
      enabled: true,
      ...config
    };
  }

  init(): void {
    if (this.config.enabled) {
      console.log('Logger initialized');
    }
  }
}

export const logger = new Logger();
export default logger;
