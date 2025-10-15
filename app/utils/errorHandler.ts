// Error handling utilities
export interface AppError {
  message: string;
  code?: string | undefined;
  statusCode?: number | undefined;
  details?: any;
}

export class CustomError extends Error {
  public code?: string | undefined;
  public statusCode?: number | undefined;
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
  
  // Enhanced error reporting for production
  if (process.env.NODE_ENV === 'production') {
    // Send to error monitoring service
    sendToErrorService(error, context);
    
    // Store in localStorage for debugging
    try {
      const errorLog = {
        ...error,
        context,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      };
      
      const existingErrors = JSON.parse(localStorage.getItem('errorLogs') || '[]');
      existingErrors.push(errorLog);
      localStorage.setItem('errorLogs', JSON.stringify(existingErrors.slice(-20))); // Keep last 20 errors
    } catch {
      // Ignore localStorage errors
    }
  }
};

const sendToErrorService = async (error: AppError, context?: string) => {
  try {
    await fetch('/api/error-report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...error,
        context,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      }),
    });
  } catch {
    // Silently fail if error reporting fails
  }
};

export const createError = (message: string, code?: string, statusCode?: number, details?: any): CustomError => {
  return new CustomError(message, code, statusCode, details);
};