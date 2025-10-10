// Error reporter utility

export interface ErrorReporterConfig {
  enableConsole?: boolean;
  enableServer?: boolean;
  enableUserFeedback?: boolean;
  enableRetry?: boolean;
  maxRetries?: number;
  retryDelay?: number;
  batchSize?: number;
  flushInterval?: number;
}

export interface ErrorReport {
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
  lineNumber?: number;
  columnNumber?: number;
  fileName?: string;
}

export interface ErrorContext {
  component?: string;
  action?: string;
  props?: Record<string, any>;
  state?: Record<string, any>;
  [key: string]: any;
}

export class ErrorReporter {
  private config: Required<ErrorReporterConfig>;
  private reports: ErrorReport[] = [];
  private flushTimer?: NodeJS.Timeout;
  private sessionId: string;
  private userId?: string;

  constructor(config: ErrorReporterConfig = {}) {
    this.config = {
      enableConsole: true,
      enableServer: true,
      enableUserFeedback: true,
      enableRetry: true,
      maxRetries: 3,
      retryDelay: 1000,
      batchSize: 10,
      flushInterval: 30000, // 30 seconds
      ...config
    };

    this.sessionId = this.generateSessionId();
    this.startFlushTimer();
  }

  /**
   * Report an error
   */
  reportError(error: Error, context: ErrorContext = {}): void {
    const report = this.createErrorReport(error, context);
    
    this.addToReports(report);
    
    if (this.config.enableConsole) {
      this.logToConsole(report);
    }

    if (this.config.enableUserFeedback) {
      this.showUserFeedback(report);
    }

    // Flush immediately for critical errors
    if (report.severity === 'critical') {
      this.flushReports();
    }
  }

  /**
   * Report React error boundary error
   */
  reportReactError(error: Error, errorInfo: React.ErrorInfo, context: ErrorContext = {}): void {
    this.reportError(error, {
      ...context,
      componentStack: errorInfo.componentStack,
      errorBoundary: true
    });
  }

  /**
   * Report async error
   */
  reportAsyncError(error: Error, context: ErrorContext = {}): void {
    this.reportError(error, {
      ...context,
      async: true
    });
  }

  /**
   * Report network error
   */
  reportNetworkError(error: Error, url: string, method: string, context: ErrorContext = {}): void {
    this.reportError(error, {
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
   * Create error report
   */
  private createErrorReport(error: Error, context: ErrorContext): ErrorReport {
    return {
      id: this.generateReportId(),
      message: error.message,
      stack: error.stack,
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
      lineNumber: this.extractLineNumber(error.stack),
      columnNumber: this.extractColumnNumber(error.stack),
      fileName: this.extractFileName(error.stack)
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
   * Add report to reports array
   */
  private addToReports(report: ErrorReport): void {
    this.reports.push(report);

    // Flush if batch size reached
    if (this.reports.length >= this.config.batchSize) {
      this.flushReports();
    }
  }

  /**
   * Log to console
   */
  private logToConsole(report: ErrorReport): void {
    const logMessage = `[${report.severity.toUpperCase()}] ${report.message}`;
    
    switch (report.severity) {
      case 'critical':
        console.error(logMessage, report);
        break;
      case 'high':
        console.error(logMessage, report);
        break;
      case 'medium':
        console.warn(logMessage, report);
        break;
      case 'low':
        console.info(logMessage, report);
        break;
    }
  }

  /**
   * Show user feedback
   */
  private showUserFeedback(report: ErrorReport): void {
    // Only show feedback for high and critical errors
    if (report.severity === 'low' || report.severity === 'medium') {
      return;
    }

    // Create user feedback element
    const feedback = document.createElement('div');
    feedback.className = 'error-feedback';
    feedback.innerHTML = `
      <div class="error-feedback-content">
        <h3>Something went wrong</h3>
        <p>We're sorry, but something unexpected happened. Our team has been notified.</p>
        <button onclick="this.parentElement.parentElement.remove()">Dismiss</button>
      </div>
    `;
    
    feedback.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #f8f9fa;
      border: 1px solid #dee2e6;
      border-radius: 8px;
      padding: 16px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      z-index: 10000;
      max-width: 300px;
    `;

    document.body.appendChild(feedback);

    // Auto-remove after 10 seconds
    setTimeout(() => {
      if (feedback.parentElement) {
        feedback.remove();
      }
    }, 10000);
  }

  /**
   * Flush reports to server
   */
  private flushReports(): void {
    if (this.reports.length === 0) return;

    const reportsToSend = [...this.reports];
    this.reports = [];

    this.sendReports(reportsToSend);
  }

  /**
   * Send reports to server
   */
  private sendReports(reports: ErrorReport[]): void {
    fetch('/api/errors/report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ reports })
    }).catch(error => {
      console.error('Failed to send error reports:', error);
      
      // Re-add reports to queue for retry
      if (this.config.enableRetry) {
        this.reports.unshift(...reports);
      }
    });
  }

  /**
   * Start flush timer
   */
  private startFlushTimer(): void {
    this.flushTimer = setInterval(() => {
      this.flushReports();
    }, this.config.flushInterval);
  }

  /**
   * Extract line number from stack trace
   */
  private extractLineNumber(stack?: string): number | undefined {
    if (!stack) return undefined;
    
    const match = stack.match(/at .*:(\d+):\d+/);
    return match ? parseInt(match[1]) : undefined;
  }

  /**
   * Extract column number from stack trace
   */
  private extractColumnNumber(stack?: string): number | undefined {
    if (!stack) return undefined;
    
    const match = stack.match(/at .*:\d+:(\d+)/);
    return match ? parseInt(match[1]) : undefined;
  }

  /**
   * Extract file name from stack trace
   */
  private extractFileName(stack?: string): string | undefined {
    if (!stack) return undefined;
    
    const match = stack.match(/at .* \((.+):\d+:\d+\)/);
    return match ? match[1] : undefined;
  }

  /**
   * Generate report ID
   */
  private generateReportId(): string {
    return `report-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Generate session ID
   */
  private generateSessionId(): string {
    return `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Get error statistics
   */
  getErrorStats(): {
    totalReports: number;
    reportsBySeverity: Record<string, number>;
    reportsByType: Record<string, number>;
    oldestReport: number;
    newestReport: number;
  } {
    const reportsBySeverity: Record<string, number> = {};
    const reportsByType: Record<string, number> = {};
    let oldestReport = Date.now();
    let newestReport = 0;

    this.reports.forEach(report => {
      reportsBySeverity[report.severity] = (reportsBySeverity[report.severity] || 0) + 1;
      reportsByType[report.type] = (reportsByType[report.type] || 0) + 1;
      oldestReport = Math.min(oldestReport, report.timestamp);
      newestReport = Math.max(newestReport, report.timestamp);
    });

    return {
      totalReports: this.reports.length,
      reportsBySeverity,
      reportsByType,
      oldestReport,
      newestReport
    };
  }

  /**
   * Clear error reports
   */
  clearReports(): void {
    this.reports = [];
  }

  /**
   * Destroy error reporter
   */
  destroy(): void {
    if (this.flushTimer) {
      clearInterval(this.flushTimer);
    }
    this.flushReports();
  }
}

export default ErrorReporter;