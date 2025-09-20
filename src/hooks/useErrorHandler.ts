import { useCallback, useRef, useState } from 'react';
import { ErrorResponse, LoggerConfig } from '../types/common';

interface ErrorHandlerOptions {
  logger?: LoggerConfig;
  onError?: (error: Error, context?: any) => void;
  showNotification?: boolean;
  fallbackMessage?: string;
}

interface ErrorContext {
  component?: string;
  action?: string;
  userId?: string;
  timestamp?: string;
  metadata?: Record<string, any>;
}

export const useErrorHandler = (options: ErrorHandlerOptions = {}) => {
  const [errors, setErrors] = useState<Map<string, Error>>(new Map());
  const errorCountRef = useRef(0);
  const lastErrorTimeRef = useRef<number>(0);

  const logError = useCallback((error: Error, context?: ErrorContext) => {
    const errorId = `error_${Date.now()}_${++errorCountRef.current}`;
    const timestamp = new Date().toISOString();

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.group(`🚨 Error ${errorId}`);
      console.error('Error:', error);
      console.error('Stack:', error.stack);
      console.error('Context:', context);
      console.error('Timestamp:', timestamp);
      console.groupEnd();
    }

    // Log to remote service in production
    if (options.logger?.enableRemote && options.logger?.remoteEndpoint) {
      fetch(options.logger.remoteEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          error: {
            name: error.name,
            message: error.message,
            stack: error.stack,
          },
          context: {
            ...context,
            timestamp,
            userAgent: navigator.userAgent,
            url: window.location.href,
            referrer: document.referrer,
          },
          logger: options.logger.context,
        }),
      }).catch((loggingError) => {
        console.error('Failed to log error to remote service:', loggingError);
      });
    }

    // Store error locally
    setErrors(prev => new Map(prev).set(errorId, error));

    // Auto-remove old errors (keep last 10)
    if (errors.size > 10) {
      const sortedErrors = Array.from(errors.entries()).sort(
        ([a], [b]) => parseInt(b.split('_')[1]) - parseInt(a.split('_')[1])
      );
      const recentErrors = sortedErrors.slice(0, 10);
      setErrors(new Map(recentErrors));
    }

    return errorId;
  }, [errors, options.logger]);

  const handleError = useCallback((
    error: Error | string,
    context?: ErrorContext
  ): string => {
    const errorObj = typeof error === 'string' ? new Error(error) : error;
    
    // Add context to error object
    if (context) {
      (errorObj as any).context = context;
    }

    const errorId = logError(errorObj, context);

    // Call custom error handler
    if (options.onError) {
      options.onError(errorObj, context);
    }

    // Show notification if enabled
    if (options.showNotification) {
      // This would integrate with your notification system
      console.warn('Error notification:', errorObj.message);
    }

    return errorId;
  }, [logError, options]);

  const handleAsyncError = useCallback(async <T>(
    asyncFn: () => Promise<T>,
    context?: ErrorContext
  ): Promise<T | null> => {
    try {
      return await asyncFn();
    } catch (error) {
      handleError(error as Error, context);
      return null;
    }
  }, [handleError]);

  const clearError = useCallback((errorId: string) => {
    setErrors(prev => {
      const newErrors = new Map(prev);
      newErrors.delete(errorId);
      return newErrors;
    });
  }, []);

  const clearAllErrors = useCallback(() => {
    setErrors(new Map());
  }, []);

  const getErrorCount = useCallback(() => {
    return errors.size;
  }, [errors]);

  const getRecentErrors = useCallback((limit: number = 5) => {
    return Array.from(errors.entries())
      .sort(([a], [b]) => parseInt(b.split('_')[1]) - parseInt(a.split('_')[1]))
      .slice(0, limit)
      .map(([id, error]) => ({ id, error }));
  }, [errors]);

  const isErrorRateHigh = useCallback(() => {
    const now = Date.now();
    const timeSinceLastError = now - lastErrorTimeRef.current;
    
    // Consider error rate high if more than 5 errors in the last minute
    if (timeSinceLastError < 60000 && errorCountRef.current > 5) {
      return true;
    }
    
    // Reset counter after 1 minute
    if (timeSinceLastError > 60000) {
      errorCountRef.current = 0;
    }
    
    lastErrorTimeRef.current = now;
    return false;
  }, []);

  const createErrorBoundaryHandler = useCallback(() => {
    return (error: Error, errorInfo: { componentStack: string }) => {
      handleError(error, {
        component: 'ErrorBoundary',
        action: 'componentDidCatch',
        metadata: {
          componentStack: errorInfo.componentStack,
        },
      });
    };
  }, [handleError]);

  return {
    handleError,
    handleAsyncError,
    clearError,
    clearAllErrors,
    getErrorCount,
    getRecentErrors,
    isErrorRateHigh,
    createErrorBoundaryHandler,
    errors: Array.from(errors.entries()).map(([id, error]) => ({ id, error })),
  };
};

// Utility function to create error classes
export class AppError extends Error {
  public readonly code: string;
  public readonly context?: any;
  public readonly timestamp: string;

  constructor(message: string, code: string = 'UNKNOWN_ERROR', context?: any) {
    super(message);
    this.name = 'AppError';
    this.code = code;
    this.context = context;
    this.timestamp = new Date().toISOString();
  }
}

export class ValidationError extends AppError {
  constructor(message: string, field?: string) {
    super(message, 'VALIDATION_ERROR', { field });
    this.name = 'ValidationError';
  }
}

export class NetworkError extends AppError {
  constructor(message: string, statusCode?: number) {
    super(message, 'NETWORK_ERROR', { statusCode });
    this.name = 'NetworkError';
  }
}

export class AuthenticationError extends AppError {
  constructor(message: string = 'Authentication required') {
    super(message, 'AUTHENTICATION_ERROR');
    this.name = 'AuthenticationError';
  }
}

export class AuthorizationError extends AppError {
  constructor(message: string = 'Insufficient permissions') {
    super(message, 'AUTHORIZATION_ERROR');
    this.name = 'AuthorizationError';
  }
}

export class RateLimitError extends AppError {
  constructor(message: string = 'Rate limit exceeded', retryAfter?: number) {
    super(message, 'RATE_LIMIT_ERROR', { retryAfter });
    this.name = 'RateLimitError';
  }
}

// Error recovery strategies
export const createRetryStrategy = (maxRetries: number = 3, delay: number = 1000) => {
  return async <T>(
    fn: () => Promise<T>,
    onRetry?: (attempt: number, error: Error) => void
  ): Promise<T> => {
    let lastError: Error;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return await fn();
      } catch (error) {
        lastError = error as Error;
        
        if (attempt < maxRetries) {
          onRetry?.(attempt, lastError);
          await new Promise(resolve => setTimeout(resolve, delay * attempt));
        }
      }
    }
    
    throw lastError!;
  };
};

// Error reporting utilities
export const reportError = async (error: Error, context?: any) => {
  // This would integrate with your error reporting service (e.g., Sentry, Bugsnag)
  console.error('Error reported:', error, context);
};

export const isNetworkError = (error: Error): boolean => {
  return error.name === 'NetworkError' || 
         error.message.includes('fetch') ||
         error.message.includes('network') ||
         error.message.includes('timeout');
};

export const isValidationError = (error: Error): boolean => {
  return error.name === 'ValidationError' || error.name === 'AppError';
};

export const getErrorMessage = (error: Error | string): string => {
  if (typeof error === 'string') {
    return error;
  }
  
  if (error instanceof AppError) {
    return error.message;
  }
  
  return error.message || 'An unexpected error occurred';
};

export const getErrorCode = (error: Error): string => {
  if (error instanceof AppError) {
    return error.code;
  }
  
  return 'UNKNOWN_ERROR';
};

export default useErrorHandler;