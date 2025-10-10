'use client';

/**
 * Enhanced Error Tracking Utility
 * Provides comprehensive error tracking with detailed context
 */

export interface ErrorContext {
  component?: string;
  action?: string;
  userId?: string;
  sessionId?: string;
  metadata?: Record<string, unknown>;
}

export interface TrackedError {
  message: string;
  stack?: string;
  context: ErrorContext;
  timestamp: string;
  userAgent: string;
  url: string;
}

class EnhancedErrorTracker {
  private errors: TrackedError[] = [];
  private maxErrors = 100;
  private sessionId: string;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.setupGlobalErrorHandler();
  }

  private generateSessionId(): string {
    return `${Date.now()}-${Math.random().toString(36).substring(7)}`;
  }

  private setupGlobalErrorHandler(): void {
    window.addEventListener('error', (event) => {
      this.trackError(event.error, {
        component: 'global',
        action: 'error'
      });
    });

    window.addEventListener('unhandledrejection', (event) => {
      this.trackError(event.reason, {
        component: 'global',
        action: 'unhandledrejection'
      });
    });
  }

  trackError(error: Error, context: ErrorContext = {}): void {
    const trackedError: TrackedError = {
      message: error.message,
      stack: error.stack,
      context: {
        ...context,
        sessionId: this.sessionId
      },
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    this.errors.push(trackedError);

    // Keep only the most recent errors
    if (this.errors.length > this.maxErrors) {
      this.errors = this.errors.slice(-this.maxErrors);
    }

    // Send to error reporting service
    this.sendErrorReport(trackedError);
  }

  private async sendErrorReport(error: TrackedError): Promise<void> {
    try {
      await fetch('/api/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(error)
      });
    } catch (err) {
      console.error('Failed to send error report:', err);
    }
  }

  getErrors(): TrackedError[] {
    return [...this.errors];
  }

  clearErrors(): void {
    this.errors = [];
  }

  getErrorCount(): number {
    return this.errors.length;
  }
}

// Create singleton instance
export const errorTracker = new EnhancedErrorTracker();

export default EnhancedErrorTracker;