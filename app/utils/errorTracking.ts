// Error tracking utility

export interface ErrorTrackingConfig {
  enableConsoleLogging?: boolean;
  enableServerReporting?: boolean;
  enableUserFeedback?: boolean;
  enablePerformanceTracking?: boolean;
  maxQueueSize?: number;
  flushInterval?: number;
  enableRetry?: boolean;
  maxRetries?: number;
}

export interface ErrorEvent {
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

export class ErrorTracking {
  private config: Required<ErrorTrackingConfig>;
  private errorQueue: ErrorEvent[] = [];
  private flushTimer?: NodeJS.Timeout;
  private sessionId: string;
  private userId?: string;

  constructor(config: ErrorTrackingConfig = {}) {
    this.config = {
      enableConsoleLogging: true,
      enableServerReporting: true,
      enableUserFeedback: true,
      enablePerformanceTracking: true,
      maxQueueSize: 100,
      flushInterval: 30000, // 30 seconds
      enableRetry: true,
      maxRetries: 3,
      ...config
    };

    this.sessionId = this.generateSessionId();
    this.initializeGlobalHandlers();
    this.startFlushTimer();
  }

  /**
   * Track an error
   */
  trackError(error: Error, context: ErrorContext = {}): void {
    const errorEvent = this.createErrorEvent(error, context);
    
    this.addToQueue(errorEvent);
    
    if (this.config.enableConsoleLogging) {
      this.logError(errorEvent);
    }

    if (this.config.enableUserFeedback) {
      this.showUserFeedback(errorEvent);
    }
  }

  /**
   * Track React error boundary error
   */
  trackReactError(error: Error, errorInfo: React.ErrorInfo, context: ErrorContext = {}): void {
    this.trackError(error, {
      ...context,
      componentStack: errorInfo.componentStack,
      errorBoundary: true
    });
  }

  /**
   * Track async error
   */
  trackAsyncError(error: Error, context: ErrorContext = {}): void {
    this.trackError(error, {
      ...context,
      async: true
    });
  }

  /**
   * Track network error
   */
  trackNetworkError(error: Error, url: string, method: string, context: ErrorContext = {}): void {
    this.trackError(error, {
      ...context,
      network: true,
      url,
      method
    });
  }

  /**
   * Track performance error
   */
  trackPerformanceError(error: Error, metric: string, value: number, context: ErrorContext = {}): void {
    this.trackError(error, {
      ...context,
      performance: true,
      metric,
      value
    });
  }

  /**
   * Set user ID
   */
  setUserId(userId: string): void {
    this.userId = userId;
  }

  /**
   * Add error to queue
   */
  private addToQueue(errorEvent: ErrorEvent): void {
    this.errorQueue.push(errorEvent);

    // Enforce max queue size
    if (this.errorQueue.length > this.config.maxQueueSize) {
      this.errorQueue.shift();
    }

    // Flush immediately for critical errors
    if (errorEvent.severity === 'critical') {
      this.flushQueue();
    }
  }

  /**
   * Create error event
   */
  private createErrorEvent(error: Error, context: ErrorContext): ErrorEvent {
    return {
      id: this.generateErrorId(),
      message: error.message,
      stack: error.stack,
      type: error.name,
      severity: this.determineSeverity(error, context),
      context,
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
   * Log error to console
   */
  private logError(errorEvent: ErrorEvent): void {
    const logMessage = `[${errorEvent.severity.toUpperCase()}] ${errorEvent.message}`;
    
    switch (errorEvent.severity) {
      case 'critical':
        console.error(logMessage, errorEvent);
        break;
      case 'high':
        console.error(logMessage, errorEvent);
        break;
      case 'medium':
        console.warn(logMessage, errorEvent);
        break;
      case 'low':
        console.info(logMessage, errorEvent);
        break;
    }
  }

  /**
   * Show user feedback
   */
  private showUserFeedback(errorEvent: ErrorEvent): void {
    // Only show feedback for high and critical errors
    if (errorEvent.severity === 'low' || errorEvent.severity === 'medium') {
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
   * Flush error queue
   */
  private flushQueue(): void {
    if (this.errorQueue.length === 0) return;

    const errorsToSend = [...this.errorQueue];
    this.errorQueue = [];

    this.sendErrors(errorsToSend);
  }

  /**
   * Send errors to server
   */
  private sendErrors(errors: ErrorEvent[]): void {
    fetch('/api/errors/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ errors })
    }).catch(error => {
      console.error('Failed to send error reports:', error);
      
      // Re-add errors to queue for retry
      if (this.config.enableRetry) {
        this.errorQueue.unshift(...errors);
      }
    });
  }

  /**
   * Start flush timer
   */
  private startFlushTimer(): void {
    this.flushTimer = setInterval(() => {
      this.flushQueue();
    }, this.config.flushInterval);
  }

  /**
   * Initialize global error handlers
   */
  private initializeGlobalHandlers(): void {
    // Global error handler
    window.addEventListener('error', (event) => {
      this.trackError(event.error, {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.trackAsyncError(new Error(event.reason), {
        type: 'unhandled_promise_rejection'
      });
    });

    // Network error handler
    window.addEventListener('unhandledrejection', (event) => {
      if (event.reason && event.reason.name === 'TypeError' && event.reason.message.includes('fetch')) {
        this.trackNetworkError(event.reason, '', 'GET');
      }
    });
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
   * Generate error ID
   */
  private generateErrorId(): string {
    return `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
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
  getErrorStats(): { totalErrors: number; errorsBySeverity: Record<string, number>; errorsByType: Record<string, number> } {
    const errorsBySeverity: Record<string, number> = {};
    const errorsByType: Record<string, number> = {};
    
    this.errorQueue.forEach(error => {
      errorsBySeverity[error.severity] = (errorsBySeverity[error.severity] || 0) + 1;
      errorsByType[error.type] = (errorsByType[error.type] || 0) + 1;
    });

    return {
      totalErrors: this.errorQueue.length,
      errorsBySeverity,
      errorsByType
    };
  }

  /**
   * Clear error queue
   */
  clearErrorQueue(): void {
    this.errorQueue = [];
  }

  /**
   * Destroy error tracking
   */
  destroy(): void {
    if (this.flushTimer) {
      clearInterval(this.flushTimer);
    }
    this.flushQueue();
  }
}

export default ErrorTracking;