/**
 * Enhanced Error Handler
 * Provides comprehensive error handling, logging, and user feedback
 */

import { ErrorInfo, ReactNode } from 'react';

export interface ErrorDetails {
  message: string;
  stack?: string;
  componentStack?: string;
  errorBoundary?: string;
  timestamp: string;
  userAgent: string;
  url: string;
  userId?: string;
  sessionId?: string;
}

export interface ErrorHandlerConfig {
  enableLogging: boolean;
  enableReporting: boolean;
  enableUserFeedback: boolean;
  logLevel: 'error' | 'warn' | 'info' | 'debug';
  maxRetries: number;
  retryDelay: number;
}

class EnhancedErrorHandler {
  private config: ErrorHandlerConfig;
  private errorQueue: ErrorDetails[] = [];
  private retryCount = 0;

  constructor(config: Partial<ErrorHandlerConfig> = {}) {
    this.config = {
      enableLogging: true,
      enableReporting: true,
      enableUserFeedback: true,
      logLevel: 'error',
      maxRetries: 3,
      retryDelay: 1000,
      ...config
    };
  }

  /**
   * Handle JavaScript errors
   */
  handleError(error: Error, errorInfo?: ErrorInfo): void {
    const errorDetails: ErrorDetails = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo?.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: this.getUserId(),
      sessionId: this.getSessionId()
    };

    this.logError(errorDetails);
    this.queueError(errorDetails);
    this.showUserFeedback(error);
  }

  /**
   * Handle promise rejections
   */
  handlePromiseRejection(event: PromiseRejectionEvent): void {
    const error = event.reason instanceof Error ? event.reason : new Error(String(event.reason));
    
    const errorDetails: ErrorDetails = {
      message: `Unhandled Promise Rejection: ${error.message}`,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: this.getUserId(),
      sessionId: this.getSessionId()
    };

    this.logError(errorDetails);
    this.queueError(errorDetails);
  }

  /**
   * Handle network errors
   */
  handleNetworkError(error: Error, requestInfo?: RequestInit): void {
    const errorDetails: ErrorDetails = {
      message: `Network Error: ${error.message}`,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: this.getUserId(),
      sessionId: this.getSessionId()
    };

    this.logError(errorDetails);
    this.queueError(errorDetails);
  }

  /**
   * Log error to console and external service
   */
  private logError(errorDetails: ErrorDetails): void {
    if (!this.config.enableLogging) return;

    // Console logging
    // // console.error('🚨 Error Details:', errorDetails);

    // External logging (Sentry, LogRocket, etc.)
    if (this.config.enableReporting) {
      this.reportError(errorDetails);
    }
  }

  /**
   * Queue error for batch reporting
   */
  private queueError(errorDetails: ErrorDetails): void {
    this.errorQueue.push(errorDetails);

    // Process queue if it gets too large
    if (this.errorQueue.length >= 10) {
      this.processErrorQueue();
    }
  }

  /**
   * Process queued errors
   */
  private async processErrorQueue(): Promise<void> {
    if (this.errorQueue.length === 0) return;

    const errors = [...this.errorQueue];
    this.errorQueue = [];

    try {
      await this.sendErrorsToService(errors);
    } catch (error) {
      // // console.error('Failed to send errors to service:', error);
      // Re-queue errors for retry
      this.errorQueue.unshift(...errors);
    }
  }

  /**
   * Send errors to external service
   */
  private async sendErrorsToService(errors: ErrorDetails[]): Promise<void> {
    // This would integrate with your error reporting service
    // For now, we'll just log them
    // // console.log('📤 Sending errors to service:', errors.length);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  /**
   * Report error to external service
   */
  private reportError(errorDetails: ErrorDetails): void {
    // Integration with Sentry, LogRocket, or other error reporting service
    if (typeof window !== 'undefined' && (window as any).Sentry) {
      (window as any).Sentry.captureException(new Error(errorDetails.message), {
        extra: errorDetails
      });
    }
  }

  /**
   * Show user-friendly error feedback
   */
  private showUserFeedback(error: Error): void {
    if (!this.config.enableUserFeedback) return;

    // Create user-friendly error message
    const userMessage = this.getUserFriendlyMessage(error);
    
    // Show toast notification or modal
    this.showNotification(userMessage, 'error');
  }

  /**
   * Get user-friendly error message
   */
  private getUserFriendlyMessage(error: Error): string {
    const message = error.message.toLowerCase();

    if (message.includes('network') || message.includes('fetch')) {
      return 'Connection error. Please check your internet connection and try again.';
    }

    if (message.includes('timeout')) {
      return 'Request timed out. Please try again.';
    }

    if (message.includes('unauthorized') || message.includes('401')) {
      return 'Please log in to continue.';
    }

    if (message.includes('forbidden') || message.includes('403')) {
      return 'You don\'t have permission to perform this action.';
    }

    if (message.includes('not found') || message.includes('404')) {
      return 'The requested resource was not found.';
    }

    return 'Something went wrong. Please try again or contact support if the problem persists.';
  }

  /**
   * Show notification to user
   */
  private showNotification(message: string, type: 'error' | 'warning' | 'info'): void {
    // This would integrate with your notification system
    // // console.log(`🔔 ${type.toUpperCase()}: ${message}`);
    
    // You could use a toast library like react-hot-toast here
    if (typeof window !== 'undefined' && (window as any).toast) {
      (window as any).toast[type](message);
    }
  }

  /**
   * Get user ID from storage or context
   */
  private getUserId(): string | undefined {
    try {
      return localStorage.getItem('userId') || undefined;
    } catch {
      return undefined;
    }
  }

  /**
   * Get session ID
   */
  private getSessionId(): string {
    try {
      let sessionId = sessionStorage.getItem('sessionId');
      if (!sessionId) {
        sessionId = this.generateSessionId();
        sessionStorage.setItem('sessionId', sessionId);
      }
      return sessionId;
    } catch {
      return this.generateSessionId();
    }
  }

  /**
   * Generate unique session ID
   */
  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Retry failed operation
   */
  async retry<T>(operation: () => Promise<T>): Promise<T> {
    try {
      return await operation();
    } catch (error) {
      if (this.retryCount < this.config.maxRetries) {
        this.retryCount++;
        // // console.log(`🔄 Retrying operation (${this.retryCount}/${this.config.maxRetries})...`);
        
        await new Promise(resolve => 
          setTimeout(resolve, this.config.retryDelay * this.retryCount)
        );
        
        return this.retry(operation);
      } else {
        this.retryCount = 0;
        throw error;
      }
    }
  }

  /**
   * Initialize error handling
   */
  initialize(): void {
    // Handle uncaught errors
    window.addEventListener('error', (event) => {
      this.handleError(event.error);
    });

    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.handlePromiseRejection(event);
    });

    // Process error queue on page unload
    window.addEventListener('beforeunload', () => {
      this.processErrorQueue();
    });

    // Process error queue periodically
    setInterval(() => {
      this.processErrorQueue();
    }, 30000); // Every 30 seconds
  }

  /**
   * Update configuration
   */
  updateConfig(newConfig: Partial<ErrorHandlerConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  /**
   * Get current configuration
   */
  getConfig(): ErrorHandlerConfig {
    return { ...this.config };
  }

  /**
   * Clear error queue
   */
  clearErrorQueue(): void {
    this.errorQueue = [];
  }

  /**
   * Get error statistics
   */
  getErrorStats(): { totalErrors: number; queuedErrors: number; retryCount: number } {
    return {
      totalErrors: this.errorQueue.length,
      queuedErrors: this.errorQueue.length,
      retryCount: this.retryCount
    };
  }
}

// Create singleton instance
export const errorHandler = new EnhancedErrorHandler();

// Initialize error handling
if (typeof window !== 'undefined') {
  errorHandler.initialize();
}

export default EnhancedErrorHandler;