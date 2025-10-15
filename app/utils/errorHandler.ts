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
  const errorLog = {
    ...error,
    context: context || 'App',
    timestamp: new Date().toISOString(),
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown',
    url: typeof window !== 'undefined' ? window.location.href : 'Unknown',
  };

  if (process.env.NODE_ENV === 'development') {
    console.error(`[${context || 'App'}] Error:`, errorLog);
  }
  
  // Store error in localStorage for debugging
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const existingErrors = JSON.parse(localStorage.getItem('errorLogs') || '[]');
      existingErrors.push(errorLog);
      localStorage.setItem('errorLogs', JSON.stringify(existingErrors.slice(-20))); // Keep last 20 errors
    }
  } catch {
    // Ignore localStorage errors
  }
  
  // In production, you would send this to your error monitoring service
  // Example: sendToErrorService(errorLog);
};

export const createError = (message: string, code?: string, statusCode?: number, details?: any): CustomError => {
  return new CustomError(message, code, statusCode, details);
};