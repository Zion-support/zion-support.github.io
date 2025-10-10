// Error logger utility

export interface ErrorLoggerConfig {
  enableConsole?: boolean;
  enableServer?: boolean;
  enableLocalStorage?: boolean;
  enableSessionStorage?: boolean;
  maxLogs?: number;
  enableStackTraces?: boolean;
  enablePerformance?: boolean;
  enableUserContext?: boolean;
}

export interface ErrorLogEntry {
  id: string;
  message: string;
  stack?: string;
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  context: ErrorContext;
  timestamp: number;
  userId?: string;
  sessionId: string;
  userAgent: string;
  url: string;
  performance?: {
    memory?: number;
    timing?: number;
  };
}

export interface ErrorContext {
  component?: string;
  action?: string;
  props?: Record<string, any>;
  state?: Record<string, any>;
  [key: string]: any;
}

export class ErrorLogger {
  private config: Required<ErrorLoggerConfig>;
  private logs: ErrorLogEntry[] = [];
  private sessionId: string;
  private userId?: string;

  constructor(config: ErrorLoggerConfig = {}) {
    this.config = {
      enableConsole: true,
      enableServer: true,
      enableLocalStorage: false,
      enableSessionStorage: false,
      maxLogs: 1000,
      enableStackTraces: true,
      enablePerformance: true,
      enableUserContext: true,
      ...config
    };

    this.sessionId = this.generateSessionId();
    this.loadFromStorage();
  }

  /**
   * Log an error
   */
  logError(error: Error, context: ErrorContext = {}): void {
    const logEntry = this.createLogEntry(error, context);
    
    this.addToLogs(logEntry);
    
    if (this.config.enableConsole) {
      this.logToConsole(logEntry);
    }

    if (this.config.enableServer) {
      this.logToServer(logEntry);
    }

    if (this.config.enableLocalStorage) {
      this.logToLocalStorage(logEntry);
    }

    if (this.config.enableSessionStorage) {
      this.logToSessionStorage(logEntry);
    }
  }

  /**
   * Log React error boundary error
   */
  logReactError(error: Error, errorInfo: React.ErrorInfo, context: ErrorContext = {}): void {
    this.logError(error, {
      ...context,
      componentStack: errorInfo.componentStack,
      errorBoundary: true
    });
  }

  /**
   * Log async error
   */
  logAsyncError(error: Error, context: ErrorContext = {}): void {
    this.logError(error, {
      ...context,
      async: true
    });
  }

  /**
   * Log network error
   */
  logNetworkError(error: Error, url: string, method: string, context: ErrorContext = {}): void {
    this.logError(error, {
      ...context,
      network: true,
      url,
      method
    });
  }

  /**
   * Set user ID
   */
  setUserId(userId: string): void {
    this.userId = userId;
  }

  /**
   * Create log entry
   */
  private createLogEntry(error: Error, context: ErrorContext): ErrorLogEntry {
    return {
      id: this.generateLogId(),
      message: error.message,
      stack: this.config.enableStackTraces ? error.stack : undefined,
      type: error.name,
      severity: this.determineSeverity(error, context),
      context: {
        ...context,
        timestamp: Date.now(),
        sessionId: this.sessionId
      },
      timestamp: Date.now(),
      userId: this.userId,
      sessionId: this.sessionId,
      userAgent: navigator.userAgent,
      url: window.location.href,
      performance: this.config.enablePerformance ? this.getPerformanceData() : undefined
    };
  }

  /**
   * Determine error severity
   */
  private determineSeverity(error: Error, context: ErrorContext): 'low' | 'medium' | 'high' | 'critical' {
    // Critical errors
    if (error.name === 'ChunkLoadError' || 
        error.message.includes('Loading chunk') ||
        error.message.includes('Script error')) {
      return 'critical';
    }

    // High severity errors
    if (error.name === 'TypeError' || 
        error.name === 'ReferenceError' ||
        error.name === 'SyntaxError') {
      return 'high';
    }

    // Medium severity errors
    if (error.name === 'NetworkError' || 
        error.message.includes('fetch') ||
        error.message.includes('timeout')) {
      return 'medium';
    }

    // Low severity errors
    return 'low';
  }

  /**
   * Add log entry to logs array
   */
  private addToLogs(logEntry: ErrorLogEntry): void {
    this.logs.push(logEntry);

    // Enforce max logs
    if (this.logs.length > this.config.maxLogs) {
      this.logs.shift();
    }
  }

  /**
   * Log to console
   */
  private logToConsole(logEntry: ErrorLogEntry): void {
    const logMessage = `[${logEntry.severity.toUpperCase()}] ${logEntry.message}`;
    
    switch (logEntry.severity) {
      case 'critical':
        console.error(logMessage, logEntry);
        break;
      case 'high':
        console.error(logMessage, logEntry);
        break;
      case 'medium':
        console.warn(logMessage, logEntry);
        break;
      case 'low':
        console.info(logMessage, logEntry);
        break;
    }
  }

  /**
   * Log to server
   */
  private logToServer(logEntry: ErrorLogEntry): void {
    fetch('/api/errors/log', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(logEntry)
    }).catch(error => {
      console.error('Failed to send error log to server:', error);
    });
  }

  /**
   * Log to localStorage
   */
  private logToLocalStorage(logEntry: ErrorLogEntry): void {
    try {
      const existingLogs = JSON.parse(localStorage.getItem('error_logs') || '[]');
      existingLogs.push(logEntry);
      
      // Keep only last 100 logs in localStorage
      if (existingLogs.length > 100) {
        existingLogs.splice(0, existingLogs.length - 100);
      }
      
      localStorage.setItem('error_logs', JSON.stringify(existingLogs));
    } catch (error) {
      console.error('Failed to save error log to localStorage:', error);
    }
  }

  /**
   * Log to sessionStorage
   */
  private logToSessionStorage(logEntry: ErrorLogEntry): void {
    try {
      const existingLogs = JSON.parse(sessionStorage.getItem('error_logs') || '[]');
      existingLogs.push(logEntry);
      
      // Keep only last 50 logs in sessionStorage
      if (existingLogs.length > 50) {
        existingLogs.splice(0, existingLogs.length - 50);
      }
      
      sessionStorage.setItem('error_logs', JSON.stringify(existingLogs));
    } catch (error) {
      console.error('Failed to save error log to sessionStorage:', error);
    }
  }

  /**
   * Load logs from storage
   */
  private loadFromStorage(): void {
    if (this.config.enableLocalStorage) {
      try {
        const logs = JSON.parse(localStorage.getItem('error_logs') || '[]');
        this.logs = [...this.logs, ...logs];
      } catch (error) {
        console.error('Failed to load error logs from localStorage:', error);
      }
    }

    if (this.config.enableSessionStorage) {
      try {
        const logs = JSON.parse(sessionStorage.getItem('error_logs') || '[]');
        this.logs = [...this.logs, ...logs];
      } catch (error) {
        console.error('Failed to load error logs from sessionStorage:', error);
      }
    }
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
   * Generate log ID
   */
  private generateLogId(): string {
    return `log-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Generate session ID
   */
  private generateSessionId(): string {
    return `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Get all logs
   */
  getLogs(): ErrorLogEntry[] {
    return [...this.logs];
  }

  /**
   * Get logs by severity
   */
  getLogsBySeverity(severity: string): ErrorLogEntry[] {
    return this.logs.filter(log => log.severity === severity);
  }

  /**
   * Get logs by type
   */
  getLogsByType(type: string): ErrorLogEntry[] {
    return this.logs.filter(log => log.type === type);
  }

  /**
   * Get logs by time range
   */
  getLogsByTimeRange(startTime: number, endTime: number): ErrorLogEntry[] {
    return this.logs.filter(log => log.timestamp >= startTime && log.timestamp <= endTime);
  }

  /**
   * Clear all logs
   */
  clearLogs(): void {
    this.logs = [];
    
    if (this.config.enableLocalStorage) {
      localStorage.removeItem('error_logs');
    }
    
    if (this.config.enableSessionStorage) {
      sessionStorage.removeItem('error_logs');
    }
  }

  /**
   * Export logs as JSON
   */
  exportLogs(): string {
    return JSON.stringify(this.logs, null, 2);
  }

  /**
   * Get log statistics
   */
  getLogStats(): {
    totalLogs: number;
    logsBySeverity: Record<string, number>;
    logsByType: Record<string, number>;
    oldestLog: number;
    newestLog: number;
  } {
    const logsBySeverity: Record<string, number> = {};
    const logsByType: Record<string, number> = {};
    let oldestLog = Date.now();
    let newestLog = 0;

    this.logs.forEach(log => {
      logsBySeverity[log.severity] = (logsBySeverity[log.severity] || 0) + 1;
      logsByType[log.type] = (logsByType[log.type] || 0) + 1;
      oldestLog = Math.min(oldestLog, log.timestamp);
      newestLog = Math.max(newestLog, log.timestamp);
    });

    return {
      totalLogs: this.logs.length,
      logsBySeverity,
      logsByType,
      oldestLog,
      newestLog
    };
  }
}

export default ErrorLogger;