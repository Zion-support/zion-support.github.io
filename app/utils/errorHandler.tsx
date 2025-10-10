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

// Error severity levels
export enum ErrorSeverity {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

// Error interface
export interface AppError {
  type: ErrorType;
  severity: ErrorSeverity;
  message: string;
  code?: string;
  details?: any;
  timestamp: Date;
  stack?: string;
  userId?: string;
  sessionId?: string;
  url?: string;
  userAgent?: string;
}

// Error handler class
export class ErrorHandler {
  private static instance: ErrorHandler;
  private errorLog: AppError[] = [];
  private maxLogSize = 100;

  private constructor() {}

  public static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  public logError(error: AppError): void {
    this.errorLog.push(error);
    
    // Keep only the last maxLogSize errors
    if (this.errorLog.length > this.maxLogSize) {
      this.errorLog = this.errorLog.slice(-this.maxLogSize);
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error logged:', error);
    }

    // Send to external logging service in production
    if (process.env.NODE_ENV === 'production') {
      this.sendToExternalService(error);
    }
  }

  private sendToExternalService(error: AppError): void {
    // Implement external logging service integration
    // e.g., Sentry, LogRocket, etc.
    try {
      // Example: fetch('/api/log-error', { method: 'POST', body: JSON.stringify(error) })
    } catch (err) {
      console.error('Failed to send error to external service:', err);
    }
  }

  public getErrors(): AppError[] {
    return [...this.errorLog];
  }

  public clearErrors(): void {
    this.errorLog = [];
  }

  public getErrorCount(): number {
    return this.errorLog.length;
  }
}

// React Error Boundary Component
interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  private errorHandler = ErrorHandler.getInstance();

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const appError: AppError = {
      type: ErrorType.RUNTIME,
      severity: ErrorSeverity.HIGH,
      message: error.message,
      code: error.name,
      details: {
        componentStack: errorInfo.componentStack,
        errorBoundary: errorInfo.errorBoundary
      },
      timestamp: new Date(),
      stack: error.stack,
      url: window.location.href,
      userAgent: navigator.userAgent
    };

    this.errorHandler.logError(appError);

    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  private resetError = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return <FallbackComponent error={this.state.error!} resetError={this.resetError} />;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <svg className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">Something went wrong</h3>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
            </div>
            <div className="mt-4">
              <button
                onClick={this.resetError}
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Try again
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Custom hook for error handling
export const useErrorHandler = () => {
  const errorHandler = ErrorHandler.getInstance();

  const handleError = useCallback((error: Error, context?: string) => {
    const appError: AppError = {
      type: ErrorType.RUNTIME,
      severity: ErrorSeverity.MEDIUM,
      message: error.message,
      code: error.name,
      details: { context, originalError: error.message },
      timestamp: new Date(),
      stack: error.stack,
      url: window.location.href,
      userAgent: navigator.userAgent
    };

    errorHandler.logError(appError);
  }, []);

  const handleAsyncError = useCallback(async (asyncFn: () => Promise<any>, context?: string) => {
    try {
      return await asyncFn();
    } catch (error) {
      handleError(error as Error, context);
      throw error;
    }
  }, [handleError]);

  return {
    handleError,
    handleAsyncError,
    getErrors: errorHandler.getErrors.bind(errorHandler),
    clearErrors: errorHandler.clearErrors.bind(errorHandler),
    getErrorCount: errorHandler.getErrorCount.bind(errorHandler)
  };
};

// Utility functions
export const createError = (
  type: ErrorType,
  message: string,
  severity: ErrorSeverity = ErrorSeverity.MEDIUM,
  details?: any
): AppError => ({
  type,
  severity,
  message,
  details,
  timestamp: new Date(),
  url: typeof window !== 'undefined' ? window.location.href : undefined,
  userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined
});

export const isNetworkError = (error: any): boolean => {
  return error?.name === 'NetworkError' || 
         error?.message?.includes('fetch') ||
         error?.message?.includes('network');
};

export const isValidationError = (error: any): boolean => {
  return error?.name === 'ValidationError' ||
         error?.message?.includes('validation') ||
         error?.message?.includes('invalid');
};