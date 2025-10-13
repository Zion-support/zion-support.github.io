/**
 * Performance Logger Utility
 * Centralized logging for performance metrics with environment-based controls
 */

interface PerformanceLog {
  level: 'info' | 'warn' | 'error';
  message: string;
  data?: any;
  timestamp: number;
}

class PerformanceLogger {
  private isDevelopment = process.env.NODE_ENV === 'development';
  private logs: PerformanceLog[] = [];

  log(level: 'info' | 'warn' | 'error', message: string, data?: any) {
    const logEntry: PerformanceLog = {
      level,
      message,
      data,
      timestamp: Date.now(),
    };

    this.logs.push(logEntry);

    // Only log to console in development
    if (this.isDevelopment) {
      switch (level) {
        case 'info':
          console.log(`[PERF] ${message}`, data);
          break;
        case 'warn':
          console.warn(`[PERF] ${message}`, data);
          break;
        case 'error':
          console.error(`[PERF] ${message}`, data);
          break;
      }
    }

    // Send to analytics in production
    if (!this.isDevelopment && typeof window !== 'undefined') {
      this.sendToAnalytics(logEntry);
    }
  }

  private sendToAnalytics(logEntry: PerformanceLog) {
    // Send to Google Analytics or other analytics service
    if ((window as any).gtag) {
      (window as any).gtag('event', 'performance_log', {
        level: logEntry.level,
        message: logEntry.message,
        data: logEntry.data,
        timestamp: logEntry.timestamp,
      });
    }
  }

  getLogs() {
    return this.logs;
  }

  clearLogs() {
    this.logs = [];
  }
}

export const performanceLogger = new PerformanceLogger();
export default performanceLogger;