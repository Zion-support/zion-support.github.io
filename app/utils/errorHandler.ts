/**
 * Advanced Error Handler
 * Provides comprehensive error handling and reporting utilities
 */

export interface ErrorInfo {
  message: string;
  stack?: string;
  component?: string;
  props?: any;
  errorBoundary?: string;
  timestamp: number;
  userAgent: string;
  url: string;
  userId?: string;
  sessionId?: string;
}

export interface ErrorReport {
  error: ErrorInfo;
  context: {
    userAgent: string;
    url: string;
    timestamp: number;
    userId?: string;
    sessionId?: string;
  };
  severity: 'low' | 'medium' | 'high' | 'critical';
  category: 'javascript' | 'network' | 'resource' | 'component' | 'unknown';
}

class ErrorHandler {
  private errors: ErrorInfo[] = [];
  private maxErrors = 100;
  private isReportingEnabled = true;
  private reportEndpoint = '/api/errors';

  /**
   * Initialize error handler
   */
  init(): void {
    this.setupGlobalErrorHandlers();
    this.setupUnhandledRejectionHandler();
    this.setupResourceErrorHandler();
    this.setupConsoleErrorHandler();
  }

  /**
   * Setup global error handlers
   */
  private setupGlobalErrorHandlers(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (event) => {
        this.handleError({
          message: event.message,
          stack: event.error?.stack,
          component: 'Global',
          timestamp: Date.now(),
          userAgent: navigator.userAgent,
          url: window.location.href,
        }, 'javascript');
      });

      window.addEventListener('unhandledrejection', (event) => {
        this.handleError({
          message: event.reason?.message || 'Unhandled Promise Rejection',
          stack: event.reason?.stack,
          component: 'Promise',
          timestamp: Date.now(),
          userAgent: navigator.userAgent,
          url: window.location.href,
        }, 'javascript');
      });
    }
  }

  /**
   * Setup unhandled rejection handler
   */
  private setupUnhandledRejectionHandler(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('unhandledrejection', (event) => {
        this.handleError({
          message: `Unhandled Promise Rejection: ${event.reason}`,
          stack: event.reason?.stack,
          component: 'Promise',
          timestamp: Date.now(),
          userAgent: navigator.userAgent,
          url: window.location.href,
        }, 'javascript');
      });
    }
  }

  /**
   * Setup resource error handler
   */
  private setupResourceErrorHandler(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (event) => {
        if (event.target !== window) {
          this.handleError({
            message: `Resource Error: ${event.target}`,
            component: 'Resource',
            timestamp: Date.now(),
            userAgent: navigator.userAgent,
            url: window.location.href,
          }, 'resource');
        }
      }, true);
    }
  }

  /**
   * Setup console error handler
   */
  private setupConsoleErrorHandler(): void {
    if (typeof window !== 'undefined') {
      const originalConsoleError = console.error;
      console.error = (...args) => {
        this.handleError({
          message: args.join(' '),
          component: 'Console',
          timestamp: Date.now(),
          userAgent: navigator.userAgent,
          url: window.location.href,
        }, 'javascript');
        originalConsoleError.apply(console, args);
      };
    }
  }

  /**
   * Handle error
   */
  handleError(errorInfo: ErrorInfo, category: ErrorReport['category'] = 'unknown'): void {
    // Add to errors array
    this.errors.push(errorInfo);

    // Keep only the last maxErrors
    if (this.errors.length > this.maxErrors) {
      this.errors = this.errors.slice(-this.maxErrors);
    }

    // Determine severity
    const severity = this.determineSeverity(errorInfo, category);

    // Create error report
    const report: ErrorReport = {
      error: errorInfo,
      context: {
        userAgent: errorInfo.userAgent,
        url: errorInfo.url,
        timestamp: errorInfo.timestamp,
        userId: errorInfo.userId,
        sessionId: errorInfo.sessionId,
      },
      severity,
      category,
    };

    // Log error
    this.logError(report);

    // Report error if enabled
    if (this.isReportingEnabled) {
      this.reportError(report);
    }

    // Show user-friendly error message for critical errors
    if (severity === 'critical') {
      this.showUserError('A critical error occurred. Please refresh the page.');
    }
  }

  /**
   * Determine error severity
   */
  private determineSeverity(errorInfo: ErrorInfo, category: ErrorReport['category']): ErrorReport['severity'] {
    const message = errorInfo.message.toLowerCase();

    // Critical errors
    if (
      message.includes('chunk') ||
      message.includes('loading') ||
      message.includes('network') ||
      message.includes('timeout') ||
      category === 'network'
    ) {
      return 'critical';
    }

    // High severity errors
    if (
      message.includes('component') ||
      message.includes('render') ||
      message.includes('hydration') ||
      category === 'component'
    ) {
      return 'high';
    }

    // Medium severity errors
    if (
      message.includes('warning') ||
      message.includes('deprecated') ||
      category === 'resource'
    ) {
      return 'medium';
    }

    // Low severity errors
    return 'low';
  }

  /**
   * Log error
   */
  private logError(report: ErrorReport): void {
    const logMessage = `[${report.severity.toUpperCase()}] ${report.category}: ${report.error.message}`;
    
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
   * Report error to server
   */
  private async reportError(report: ErrorReport): Promise<void> {
    try {
      await fetch(this.reportEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(report),
      });
    } catch (error) {
      console.warn('Failed to report error:', error);
    }
  }

  /**
   * Show user-friendly error message
   */
  private showUserError(message: string): void {
    // Create error notification
    const notification = document.createElement('div');
    notification.className = 'error-notification';
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #ff4444;
      color: white;
      padding: 15px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      z-index: 10000;
      max-width: 400px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    `;
    notification.textContent = message;

    // Add close button
    const closeButton = document.createElement('button');
    closeButton.textContent = '×';
    closeButton.style.cssText = `
      background: none;
      border: none;
      color: white;
      font-size: 20px;
      cursor: pointer;
      float: right;
      margin-left: 10px;
    `;
    closeButton.onclick = () => notification.remove();

    notification.appendChild(closeButton);
    document.body.appendChild(notification);

    // Auto-remove after 10 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 10000);
  }

  /**
   * Get error statistics
   */
  getErrorStats(): {
    total: number;
    bySeverity: Record<ErrorReport['severity'], number>;
    byCategory: Record<ErrorReport['category'], number>;
    recent: ErrorInfo[];
  } {
    const bySeverity = {
      low: 0,
      medium: 0,
      high: 0,
      critical: 0,
    };

    const byCategory = {
      javascript: 0,
      network: 0,
      resource: 0,
      component: 0,
      unknown: 0,
    };

    this.errors.forEach(error => {
      const severity = this.determineSeverity(error, 'unknown');
      bySeverity[severity]++;
      
      // Determine category based on error message
      const message = error.message.toLowerCase();
      if (message.includes('network') || message.includes('fetch')) {
        byCategory.network++;
      } else if (message.includes('component') || message.includes('render')) {
        byCategory.component++;
      } else if (message.includes('resource') || message.includes('image')) {
        byCategory.resource++;
      } else {
        byCategory.javascript++;
      }
    });

    return {
      total: this.errors.length,
      bySeverity,
      byCategory,
      recent: this.errors.slice(-10),
    };
  }

  /**
   * Clear errors
   */
  clearErrors(): void {
    this.errors = [];
  }

  /**
   * Enable/disable error reporting
   */
  setReportingEnabled(enabled: boolean): void {
    this.isReportingEnabled = enabled;
  }

  /**
   * Set report endpoint
   */
  setReportEndpoint(endpoint: string): void {
    this.reportEndpoint = endpoint;
  }

  /**
   * Generate error report
   */
  generateErrorReport(): string {
    const stats = this.getErrorStats();
    const recentErrors = stats.recent;

    return `
Error Report:
============
Total Errors: ${stats.total}

By Severity:
- Critical: ${stats.bySeverity.critical}
- High: ${stats.bySeverity.high}
- Medium: ${stats.bySeverity.medium}
- Low: ${stats.bySeverity.low}

By Category:
- JavaScript: ${stats.byCategory.javascript}
- Network: ${stats.byCategory.network}
- Resource: ${stats.byCategory.resource}
- Component: ${stats.byCategory.component}
- Unknown: ${stats.byCategory.unknown}

Recent Errors:
${recentErrors.map(error => `- ${error.message} (${new Date(error.timestamp).toLocaleString()})`).join('\n')}

Recommendations:
${stats.bySeverity.critical > 0 ? '- Address critical errors immediately' : ''}
${stats.bySeverity.high > 5 ? '- High error count detected, review error handling' : ''}
${stats.byCategory.network > 0 ? '- Check network connectivity and API endpoints' : ''}
${stats.byCategory.resource > 0 ? '- Verify resource URLs and loading strategies' : ''}
    `.trim();
  }
}

// Export singleton instance
export const errorHandler = new ErrorHandler();

// Export utility functions
export const handleError = (errorInfo: ErrorInfo, category?: ErrorReport['category']) => 
  errorHandler.handleError(errorInfo, category);
export const getErrorStats = () => errorHandler.getErrorStats();
export const clearErrors = () => errorHandler.clearErrors();
export const generateErrorReport = () => errorHandler.generateErrorReport();