'use client';

import React from 'react';

/**
 * Advanced Error Handler
 * Comprehensive error handling utilities for React applications
 */

export interface AppError extends Error {
  code?: string;
  statusCode?: number;
  context?: string;
  timestamp?: string;
}

export class ErrorHandler {
  private static instance: ErrorHandler;
  private errors: AppError[] = [];
  private maxErrors = 10;

  private constructor() {}

  static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  /**
   * Handle and log an error
   */
  handleError(error: Error, context?: string): AppError {
    const appError: AppError = {
      ...error,
      context,
      timestamp: new Date().toISOString(),
    };

    // Add to errors array
    this.errors.unshift(appError);
    if (this.errors.length > this.maxErrors) {
      this.errors = this.errors.slice(0, this.maxErrors);
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error handled:', appError);
    }

    // Report to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.reportError(appError);
    }

    return appError;
  }

  /**
   * Report error to external service
   */
  private async reportError(error: AppError): Promise<void> {
    try {
      const endpoint = process.env.REACT_APP_ERROR_REPORTING_ENDPOINT;
      if (!endpoint) return;

      await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: error.message,
          stack: error.stack,
          context: error.context,
          timestamp: error.timestamp,
          url: window.location.href,
          userAgent: navigator.userAgent,
        }),
      });
    } catch (reportingError) {
      console.error('Failed to report error:', reportingError);
    }
  }

  /**
   * Get recent errors
   */
  getRecentErrors(): AppError[] {
    return [...this.errors];
  }

  /**
   * Clear all errors
   */
  clearErrors(): void {
    this.errors = [];
  }

  /**
   * Create a custom error
   */
  createError(message: string, code?: string, statusCode?: number): AppError {
    const error = new Error(message) as AppError;
    error.code = code;
    error.statusCode = statusCode;
    error.timestamp = new Date().toISOString();
    return error;
  }
}

/**
 * Error Boundary Hook
 */
export function useErrorHandler() {
  const errorHandler = ErrorHandler.getInstance();

  const handleError = React.useCallback((error: Error, context?: string) => {
    return errorHandler.handleError(error, context);
  }, [errorHandler]);

  const createError = React.useCallback((message: string, code?: string, statusCode?: number) => {
    return errorHandler.createError(message, code, statusCode);
  }, [errorHandler]);

  return {
    handleError,
    createError,
    getRecentErrors: errorHandler.getRecentErrors.bind(errorHandler),
    clearErrors: errorHandler.clearErrors.bind(errorHandler),
  };
}

/**
 * Error Boundary Component
 */
interface ErrorBoundaryState {
  hasError: boolean;
  error: AppError | null;
}

export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{ fallback?: React.ComponentType<{ error: AppError; resetError: () => void }> }>,
  ErrorBoundaryState
> {
  private errorHandler = ErrorHandler.getInstance();

  constructor(props: React.PropsWithChildren<{ fallback?: React.ComponentType<{ error: AppError; resetError: () => void }> }>) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error: error as AppError,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    const appError = this.errorHandler.handleError(error, errorInfo.componentStack);
    this.setState({ error: appError });
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError && this.state.error) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return <FallbackComponent error={this.state.error} resetError={this.resetError} />;
    }

    return this.props.children;
  }
}

/**
 * Default Error Fallback Component
 */
function DefaultErrorFallback({ error, resetError }: { error: AppError; resetError: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Something went wrong
          </h2>
          <p className="text-gray-600 mb-4">
            {error.message || 'An unexpected error occurred'}
          </p>
          {process.env.NODE_ENV === 'development' && error.stack && (
            <pre className="text-xs bg-gray-100 p-4 rounded overflow-auto mb-4">
              {error.stack}
            </pre>
          )}
          <div className="flex space-x-3 justify-center">
            <button
              onClick={resetError}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Try Again
            </button>
            <button
              onClick={() => window.location.href = '/'}
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorHandler;