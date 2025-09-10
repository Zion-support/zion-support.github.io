interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
  timestamp: string;
  userAgent: string;
  url: string;
  userId?: string;
  sessionId?: string;
}

class ErrorLogger {
  private sessionId: string;
  private userId?: string;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.initializeErrorHandling();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeErrorHandling(): void {
    // Global error handler
    window.addEventListener('error', (event) => {
      this.logError({
        message: event.message,
        stack: event.error?.stack,
        componentStack: undefined,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        userId: this.userId,
        sessionId: this.sessionId
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.logError({
        message: `Unhandled Promise Rejection: ${event.reason}`,
        stack: event.reason?.stack,
        componentStack: undefined,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        userId: this.userId,
        sessionId: this.sessionId
      });
    });
  }

  setUserId(userId: string): void {
    this.userId = userId;
  }

  logError(errorInfo: ErrorInfo): void {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      // // console.error('Error logged:', errorInfo);
    }

    // In production, you would typically send to an error reporting service
    if (process.env.NODE_ENV === 'production') {
      this.sendToErrorService(errorInfo);
    }

    // Store in localStorage for debugging
    this.storeErrorLocally(errorInfo);
  }

  private async sendToErrorService(errorInfo: ErrorInfo): Promise<void> {
    try {
      // Example: Send to Sentry, LogRocket, or custom error service
      // await fetch('/api/errors', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(errorInfo)
      // });
      
      // // console.log('Error would be sent to service:', errorInfo);
    } catch (error) {
      // // console.error('Failed to send error to service:', error);
    }
  }

  private storeErrorLocally(errorInfo: ErrorInfo): void {
    try {
      const errors = this.getStoredErrors();
      errors.push(errorInfo);
      
      // Keep only last 50 errors
      if (errors.length > 50) {
        errors.splice(0, errors.length - 50);
      }
      
      localStorage.setItem('app_errors', JSON.stringify(errors));
    } catch (error) {
      // // console.error('Failed to store error locally:', error);
    }
  }

  getStoredErrors(): ErrorInfo[] {
    try {
      const stored = localStorage.getItem('app_errors');
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      // // console.error('Failed to retrieve stored errors:', error);
      return [];
    }
  }

  clearStoredErrors(): void {
    try {
      localStorage.removeItem('app_errors');
    } catch (error) {
      // // console.error('Failed to clear stored errors:', error);
    }
  }

  // Performance monitoring
  logPerformanceMetric(metric: string, value: number, unit: string = 'ms'): void {
    const performanceInfo = {
      metric,
      value,
      unit,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      sessionId: this.sessionId,
      userId: this.userId
    };

    if (process.env.NODE_ENV === 'development') {
      // // console.log('Performance metric:', performanceInfo);
    }

    // Store performance metrics
    this.storePerformanceMetric(performanceInfo);
  }

  private storePerformanceMetric(metric: unknown): void {
    try {
      const metrics = this.getStoredPerformanceMetrics();
      metrics.push(metric);
      
      // Keep only last 100 metrics
      if (metrics.length > 100) {
        metrics.splice(0, metrics.length - 100);
      }
      
      localStorage.setItem('app_performance', JSON.stringify(metrics));
    } catch (error) {
      // // console.error('Failed to store performance metric:', error);
    }
  }

  getStoredPerformanceMetrics(): unknown[] {
    try {
      const stored = localStorage.getItem('app_performance');
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      // // console.error('Failed to retrieve stored performance metrics:', error);
      return [];
    }
  }

  // User action tracking
  logUserAction(action: string, details?: unknown): void {
    const actionInfo = {
      action,
      details,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      sessionId: this.sessionId,
      userId: this.userId
    };

    if (process.env.NODE_ENV === 'development') {
      // // console.log('User action:', actionInfo);
    }

    // Store user actions
    this.storeUserAction(actionInfo);
  }

  private storeUserAction(action: unknown): void {
    try {
      const actions = this.getStoredUserActions();
      actions.push(action);
      
      // Keep only last 200 actions
      if (actions.length > 200) {
        actions.splice(0, actions.length - 200);
      }
      
      localStorage.setItem('app_user_actions', JSON.stringify(actions));
    } catch (error) {
      // // console.error('Failed to store user action:', error);
    }
  }

  getStoredUserActions(): unknown[] {
    try {
      const stored = localStorage.getItem('app_user_actions');
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      // // console.error('Failed to retrieve stored user actions:', error);
      return [];
    }
  }
}

// Create singleton instance
export const errorLogger = new ErrorLogger();

// Export types
export type { ErrorInfo };