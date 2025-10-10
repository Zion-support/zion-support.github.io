'use client';
/**
 * Advanced Error Handler
 * Comprehensive error handling utilities for React applications
 */
import React, { ErrorInfo, useCallback } from 'react';

// Error types
export enum ErrorType {
  RUNTIME = 'RUNTIME',
  NETWORK = 'NETWORK',
  VALIDATION = 'VALIDATION',
  AUTHENTICATION = 'AUTHENTICATION',
  AUTHORIZATION = 'AUTHORIZATION',
  NOT_FOUND = 'NOT_FOUND',
  SERVER = 'SERVER',
  CLIENT = 'CLIENT',
  UNKNOWN = 'UNKNOWN'
}

export interface ErrorDetails {
  type: ErrorType;
  message: string;
  code?: string | number;
  stack?: string;
  context?: Record<string, any>;
  timestamp: Date;
  userId?: string;
  sessionId?: string;
}

export interface ErrorHandlerConfig {
  enableLogging: boolean;
  enableReporting: boolean;
  enableRecovery: boolean;
  maxRetries: number;
  retryDelay: number;
}

class ErrorHandler {
  private config: ErrorHandlerConfig;
  private errorQueue: ErrorDetails[] = [];
  private retryCount: Map<string, number> = new Map();

  constructor(config: Partial<ErrorHandlerConfig> = {}) {
    this.config = {
      enableLogging: true,
      enableReporting: true,
      enableRecovery: true,
      maxRetries: 3,
      retryDelay: 1000,
      ...config
    };
  }

  private categorizeError(error: Error): ErrorType {
    if (error.name === 'TypeError' || error.name === 'ReferenceError') {
      return ErrorType.RUNTIME;
    }
    if (error.message.includes('fetch') || error.message.includes('network')) {
      return ErrorType.NETWORK;
    }
    if (error.message.includes('validation') || error.message.includes('invalid')) {
      return ErrorType.VALIDATION;
    }
    if (error.message.includes('unauthorized') || error.message.includes('auth')) {
      return ErrorType.AUTHENTICATION;
    }
    if (error.message.includes('forbidden') || error.message.includes('permission')) {
      return ErrorType.AUTHORIZATION;
    }
    if (error.message.includes('404') || error.message.includes('not found')) {
      return ErrorType.NOT_FOUND;
    }
    if (error.message.includes('500') || error.message.includes('server')) {
      return ErrorType.SERVER;
    }
    return ErrorType.UNKNOWN;
  }

  private createErrorDetails(error: Error, context?: Record<string, any>): ErrorDetails {
    return {
      type: this.categorizeError(error),
      message: error.message,
      code: (error as any).code,
      stack: error.stack,
      context,
      timestamp: new Date(),
      userId: (context as any)?.userId,
      sessionId: (context as any)?.sessionId
    };
  }

  private async logError(errorDetails: ErrorDetails): Promise<void> {
    if (!this.config.enableLogging) return;

    console.error('Error Details:', {
      type: errorDetails.type,
      message: errorDetails.message,
      code: errorDetails.code,
      context: errorDetails.context,
      timestamp: errorDetails.timestamp
    });

    // Add to error queue for batch processing
    this.errorQueue.push(errorDetails);
  }

  private async reportError(errorDetails: ErrorDetails): Promise<void> {
    if (!this.config.enableReporting) return;

    try {
      // In a real application, you would send this to your error reporting service
      await fetch('/api/error-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorDetails)
      });
    } catch (reportingError) {
      console.error('Failed to report error:', reportingError);
    }
  }

  private async attemptRecovery(errorDetails: ErrorDetails): Promise<boolean> {
    if (!this.config.enableRecovery) return false;

    const errorKey = `${errorDetails.type}-${errorDetails.message}`;
    const retryCount = this.retryCount.get(errorKey) || 0;

    if (retryCount >= this.config.maxRetries) {
      return false;
    }

    this.retryCount.set(errorKey, retryCount + 1);

    // Implement recovery logic based on error type
    switch (errorDetails.type) {
      case ErrorType.NETWORK:
        // Wait and retry
        await new Promise(resolve => setTimeout(resolve, this.config.retryDelay * (retryCount + 1)));
        return true;
      case ErrorType.AUTHENTICATION:
        // Redirect to login or refresh token
        if (typeof window !== 'undefined') {
          window.location.href = '/login';
        }
        return false;
      case ErrorType.VALIDATION:
        // Show user-friendly error message
        return false;
      default:
        return false;
    }
  }

  async handleError(error: Error, context?: Record<string, any>): Promise<void> {
    const errorDetails = this.createErrorDetails(error, context);
    
    await this.logError(errorDetails);
    await this.reportError(errorDetails);
    
    const canRecover = await this.attemptRecovery(errorDetails);
    
    if (!canRecover) {
      // Handle non-recoverable errors
      this.showUserFriendlyError(errorDetails);
    }
  }

  private showUserFriendlyError(errorDetails: ErrorDetails): void {
    if (typeof window === 'undefined') return;

    let userMessage = 'An unexpected error occurred. Please try again.';

    switch (errorDetails.type) {
      case ErrorType.NETWORK:
        userMessage = 'Network error. Please check your connection and try again.';
        break;
      case ErrorType.VALIDATION:
        userMessage = 'Please check your input and try again.';
        break;
      case ErrorType.AUTHENTICATION:
        userMessage = 'Please log in to continue.';
        break;
      case ErrorType.AUTHORIZATION:
        userMessage = 'You do not have permission to perform this action.';
        break;
      case ErrorType.NOT_FOUND:
        userMessage = 'The requested resource was not found.';
        break;
      case ErrorType.SERVER:
        userMessage = 'Server error. Please try again later.';
        break;
    }

    // Show error message to user (implement based on your UI framework)
    console.error('User Error:', userMessage);
  }

  // React Error Boundary integration
  handleReactError = (error: Error, errorInfo: ErrorInfo): void => {
    const context = {
      componentStack: errorInfo.componentStack,
      errorBoundary: true
    };
    
    this.handleError(error, context);
  };

  // Clear error queue (useful for testing)
  clearErrorQueue(): void {
    this.errorQueue = [];
    this.retryCount.clear();
  }

  // Get error statistics
  getErrorStats(): { total: number; byType: Record<string, number> } {
    const byType: Record<string, number> = {};
    
    this.errorQueue.forEach(error => {
      byType[error.type] = (byType[error.type] || 0) + 1;
    });

    return {
      total: this.errorQueue.length,
      byType
    };
  }
}

// Export singleton instance
export const errorHandler = new ErrorHandler();

// React Error Boundary Component
interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    errorHandler.handleReactError(error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return (
          <FallbackComponent
            error={this.state.error!}
            resetError={() => this.setState({ hasError: false, error: undefined })}
          />
        );
      }

      return (
        <div className="error-boundary">
          <h2>Something went wrong.</h2>
          <button onClick={() => this.setState({ hasError: false, error: undefined })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hook for error handling
export const useErrorHandler = () => {
  const handleError = useCallback((error: Error, context?: Record<string, any>) => {
    errorHandler.handleError(error, context);
  }, []);

  return { handleError };
};

export default errorHandler;