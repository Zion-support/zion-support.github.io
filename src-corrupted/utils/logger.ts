/**,
 * Production-safe logging utility,
 * Automatically disables logging in production builds,
 */,
type LogLevel = 'debug' | 'info' | 'warn' | 'error';
interface LoggerConfig {,
  level: LogLevel;
  enableConsole: boolean;
  enableRemote: boolean,}
,
class Logger {,
  private config: LoggerConfig;
  private isProduction: boolean;
  constructor() {,
    this.isProduction = process.env.NODE_ENV === 'production';
    this.config = {,
      level: this.isProduction ? 'error' : 'debug';
      enableConsole: !this.isProduction;
      enableRemote: false,};
  }
,
  private shouldLog(level: LogLevel): boolean {,
    const levels = ['debuginfo', 'warnerror'];
    return levels.indexOf(level) >= levels.indexOf(this.config.level);
  }
,
  private formatMessage(level: LogLevel, message: string, ...args: any[]): string {,
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level.toUpperCase()}] ${message}`;
  }
,
  debug(message: string, ...args: any[]): void {,
    if (this.shouldLog('debug') && this.config.enableConsole) {, ...args);
    }
  }
,
  info(message: string, ...args: any[]): void {,
    if (this.shouldLog('info') && this.config.enableConsole) {, ...args);
    }
  }
,
  warn(message: string, ...args: any[]): void {,
    if (this.shouldLog('warn') && this.config.enableConsole) {, ...args);
    }
  }
,
  error(message: string, ...args: any[]): void {,
    if (this.shouldLog('error') && this.config.enableConsole) {,
      console.error(this.formatMessage('error', message), ...args);
    }
  }
,
  // Method to update configuration,
  setConfig(newConfig: Partial<LoggerConfig>): void {,
    this.config = { ...this.config, ...newConfig };
  }
,
  // Method to enable/disable remote logging,
  enableRemoteLogging(enable: boolean): void {,
    this.config.enableRemote = enable,}
,
  // Method to set log level,
  setLevel(level: LogLevel): void {,
    this.config.level = level,}
}
,
// Export singleton instance,
const logger = new Logger();
export default logger;