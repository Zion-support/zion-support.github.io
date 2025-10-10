// Enhanced logger utility

export interface LoggerConfig {
  level?: 'debug' | 'info' | 'warn' | 'error';
  enableConsole?: boolean;
  enableServer?: boolean;
  enableLocalStorage?: boolean;
  maxLogs?: number;
  enableTimestamps?: boolean;
  enableStackTraces?: boolean;
  enablePerformance?: boolean;
}

export interface LogEntry {
  id: string;
  level: string;
  message: string;
  data?: any;
  timestamp: number;
  stack?: string;
  performance?: {
    memory?: number;
    timing?: number;
  };
  context?: Record<string, any>;
}

export class EnhancedLogger {
  private config: Required<LoggerConfig>;
  private logs: LogEntry[] = [];
  private logLevels = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3
  };

  constructor(config: LoggerConfig = {}) {
    this.config = {
      level: 'info',
      enableConsole: true,
      enableServer: false,
      enableLocalStorage: false,
      maxLogs: 1000,
      enableTimestamps: true,
      enableStackTraces: true,
      enablePerformance: true,
      ...config
    };

    this.initializePerformanceMonitoring();
  }

  /**
   * Log debug message
   */
  debug(message: string, data?: any, context?: Record<string, any>): void {
    this.log('debug', message, data, context);
  }

  /**
   * Log info message
   */
  info(message: string, data?: any, context?: Record<string, any>): void {
    this.log('info', message, data, context);
  }

  /**
   * Log warning message
   */
  warn(message: string, data?: any, context?: Record<string, any>): void {
    this.log('warn', message, data, context);
  }

  /**
   * Log error message
   */
  error(message: string, data?: any, context?: Record<string, any>): void {
    this.log('error', message, data, context);
  }

  /**
   * Log message with custom level
   */
  log(level: string, message: string, data?: any, context?: Record<string, any>): void {
    // Check if log level is enabled
    if (this.logLevels[level as keyof typeof this.logLevels] < this.logLevels[this.config.level]) {
      return;
    }

    const logEntry: LogEntry = {
      id: this.generateLogId(),
      level,
      message,
      data,
      timestamp: Date.now(),
      context
    };

    // Add stack trace if enabled
    if (this.config.enableStackTraces && level === 'error') {
      logEntry.stack = this.getStackTrace();
    }

    // Add performance data if enabled
    if (this.config.enablePerformance) {
      logEntry.performance = this.getPerformanceData();
    }

    // Add to logs array
    this.addToLogs(logEntry);

    // Console logging
    if (this.config.enableConsole) {
      this.logToConsole(logEntry);
    }

    // Server logging
    if (this.config.enableServer) {
      this.logToServer(logEntry);
    }

    // Local storage logging
    if (this.config.enableLocalStorage) {
      this.logToLocalStorage(logEntry);
    }
  }

  /**
   * Add log entry to logs array
   */
  private addToLogs(logEntry: LogEntry): void {
    this.logs.push(logEntry);

    // Enforce max logs
    if (this.logs.length > this.config.maxLogs) {
      this.logs.shift();
    }
  }

  /**
   * Log to console
   */
  private logToConsole(logEntry: LogEntry): void {
    const timestamp = this.config.enableTimestamps ? `[${new Date(logEntry.timestamp).toISOString()}] ` : '';
    const message = `${timestamp}[${logEntry.level.toUpperCase()}] ${logEntry.message}`;

    switch (logEntry.level) {
      case 'debug':
        console.debug(message, logEntry.data, logEntry.context);
        break;
      case 'info':
        console.info(message, logEntry.data, logEntry.context);
        break;
      case 'warn':
        console.warn(message, logEntry.data, logEntry.context);
        break;
      case 'error':
        console.error(message, logEntry.data, logEntry.context, logEntry.stack);
        break;
      default:
        console.log(message, logEntry.data, logEntry.context);
        break;
    }
  }

  /**
   * Log to server
   */
  private logToServer(logEntry: LogEntry): void {
    fetch('/api/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(logEntry)
    }).catch(error => {
      console.error('Failed to send log to server:', error);
    });
  }

  /**
   * Log to local storage
   */
  private logToLocalStorage(logEntry: LogEntry): void {
    try {
      const existingLogs = JSON.parse(localStorage.getItem('enhanced_logs') || '[]');
      existingLogs.push(logEntry);
      
      // Keep only last 100 logs in localStorage
      if (existingLogs.length > 100) {
        existingLogs.splice(0, existingLogs.length - 100);
      }
      
      localStorage.setItem('enhanced_logs', JSON.stringify(existingLogs));
    } catch (error) {
      console.error('Failed to save log to localStorage:', error);
    }
  }

  /**
   * Get stack trace
   */
  private getStackTrace(): string {
    const stack = new Error().stack;
    return stack ? stack.split('\n').slice(2).join('\n') : '';
  }

  /**
   * Get performance data
   */
  private getPerformanceData(): { memory?: number; timing?: number } {
    const performance: { memory?: number; timing?: number } = {};

    // Memory usage
    if ('memory' in performance) {
      performance.memory = (performance as any).memory.usedJSHeapSize;
    }

    // Timing
    if (window.performance) {
      performance.timing = window.performance.now();
    }

    return performance;
  }

  /**
   * Initialize performance monitoring
   */
  private initializePerformanceMonitoring(): void {
    if (!this.config.enablePerformance) return;

    // Monitor memory usage
    setInterval(() => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        if (memory.usedJSHeapSize > 50 * 1024 * 1024) { // 50MB
          this.warn('High memory usage detected', {
            usedJSHeapSize: memory.usedJSHeapSize,
            totalJSHeapSize: memory.totalJSHeapSize,
            jsHeapSizeLimit: memory.jsHeapSizeLimit
          });
        }
      }
    }, 30000); // Check every 30 seconds
  }

  /**
   * Generate log ID
   */
  private generateLogId(): string {
    return `log-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Get all logs
   */
  getLogs(): LogEntry[] {
    return [...this.logs];
  }

  /**
   * Get logs by level
   */
  getLogsByLevel(level: string): LogEntry[] {
    return this.logs.filter(log => log.level === level);
  }

  /**
   * Get logs by time range
   */
  getLogsByTimeRange(startTime: number, endTime: number): LogEntry[] {
    return this.logs.filter(log => log.timestamp >= startTime && log.timestamp <= endTime);
  }

  /**
   * Clear all logs
   */
  clearLogs(): void {
    this.logs = [];
  }

  /**
   * Export logs as JSON
   */
  exportLogs(): string {
    return JSON.stringify(this.logs, null, 2);
  }

  /**
   * Import logs from JSON
   */
  importLogs(json: string): void {
    try {
      const importedLogs = JSON.parse(json);
      if (Array.isArray(importedLogs)) {
        this.logs = [...this.logs, ...importedLogs];
      }
    } catch (error) {
      this.error('Failed to import logs', error);
    }
  }

  /**
   * Get log statistics
   */
  getLogStats(): {
    totalLogs: number;
    logsByLevel: Record<string, number>;
    oldestLog: number;
    newestLog: number;
  } {
    const logsByLevel: Record<string, number> = {};
    let oldestLog = Date.now();
    let newestLog = 0;

    this.logs.forEach(log => {
      logsByLevel[log.level] = (logsByLevel[log.level] || 0) + 1;
      oldestLog = Math.min(oldestLog, log.timestamp);
      newestLog = Math.max(newestLog, log.timestamp);
    });

    return {
      totalLogs: this.logs.length,
      logsByLevel,
      oldestLog,
      newestLog
    };
  }
}

export default EnhancedLogger;