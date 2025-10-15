// Error handling utilities
export interface AppError {
  message: string;
  code?: string;
  statusCode?: number;
  details?: any;
}

export class CustomError extends Error {
  public code?: string;
  public statusCode?: number;
  public details?: any;

  constructor(message: string, code?: string, statusCode?: number, details?: any) {
    super(message);
    this.name = 'CustomError';
    this.code = code;
    this.statusCode = statusCode;
    this.details = details;
  }
}

export const handleError = (error: unknown): AppError => {
  if (error instanceof CustomError) {
    return {
      message: error.message,
      code: error.code,
      statusCode: error.statusCode,
      details: error.details,
    };
  }

  if (error instanceof Error) {
    return {
      message: error.message,
      code: 'UNKNOWN_ERROR',
    };
  }

  return {
    message: 'An unexpected error occurred',
    code: 'UNKNOWN_ERROR',
  };
};

export const logError = (error: AppError, context?: string) => {
  if (process.env.NODE_ENV === 'development') {
    console.error(`[${context || 'App'}] Error:`, error);
  }
  
  // In production, send to error monitoring service
  if (process.env.NODE_ENV === 'production') {
    sendToErrorService(error, context);
  }
};

// Enhanced error monitoring service integration
const sendToErrorService = async (error: AppError, context?: string) => {
  try {
    // Send to custom error endpoint
    await fetch('/api/error-report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        error: {
          message: error.message,
          code: error.code,
          statusCode: error.statusCode,
          details: error.details,
        },
        context: context || 'Unknown',
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        userId: getUserId(), // If you have user authentication
        sessionId: getSessionId(),
      }),
    });
  } catch (reportingError) {
    // Fallback: store in localStorage for later retry
    storeErrorForRetry(error, context);
  }
};

// Store errors for later retry when offline
const storeErrorForRetry = (error: AppError, context?: string) => {
  try {
    const storedErrors = JSON.parse(localStorage.getItem('pendingErrors') || '[]');
    storedErrors.push({
      error,
      context,
      timestamp: new Date().toISOString(),
    });
    
    // Keep only last 50 errors to prevent storage bloat
    if (storedErrors.length > 50) {
      storedErrors.splice(0, storedErrors.length - 50);
    }
    
    localStorage.setItem('pendingErrors', JSON.stringify(storedErrors));
  } catch (storageError) {
    console.warn('Failed to store error for retry:', storageError);
  }
};

// Retry sending stored errors when back online
export const retryStoredErrors = async () => {
  try {
    const storedErrors = JSON.parse(localStorage.getItem('pendingErrors') || '[]');
    
    if (storedErrors.length === 0) return;
    
    const errorsToRetry = [...storedErrors];
    const successfulRetries: number[] = [];
    
    for (let i = 0; i < errorsToRetry.length; i++) {
      try {
        await sendToErrorService(errorsToRetry[i].error, errorsToRetry[i].context);
        successfulRetries.push(i);
      } catch (error) {
        // Keep this error for next retry
      }
    }
    
    // Remove successfully sent errors
    const remainingErrors = errorsToRetry.filter((_, index) => !successfulRetries.includes(index));
    localStorage.setItem('pendingErrors', JSON.stringify(remainingErrors));
    
    if (successfulRetries.length > 0) {
      console.log(`[ErrorHandler] Retried ${successfulRetries.length} stored errors`);
    }
  } catch (error) {
    console.warn('Failed to retry stored errors:', error);
  }
};

// Helper functions
const getUserId = (): string | null => {
  // Implement based on your authentication system
  return localStorage.getItem('userId');
};

const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('sessionId');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('sessionId', sessionId);
  }
  return sessionId;
};

export const createError = (message: string, code?: string, statusCode?: number, details?: any): CustomError => {
  return new CustomError(message, code, statusCode, details);
};