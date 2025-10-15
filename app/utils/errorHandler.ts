// Error handling utilities
export interface AppError {
  message: string;
  code?: string | undefined;
  statusCode?: number | undefined;
  details?: any;
}

export class CustomError extends Error {
  public code?: string;
  public statusCode?: number;
  public details?: any;

  constructor(message: string, code?: string, statusCode?: number, details?: any) {
    super(message);
    this.name = 'CustomError';
    this.code = code ?? undefined;
    this.statusCode = statusCode ?? undefined;
    this.details = details;
  }
}

export const handleError = (error: unknown): AppError => {
  if (error instanceof CustomError) {
    return {
      message: error.message,
      code: error.code ?? undefined,
      statusCode: error.statusCode ?? undefined,
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

export const logError = (_error: AppError, _context?: string) => {
  if (process.env.NODE_ENV === 'development') {
    // Error logged for development debugging
  }
  
  // In production, you would send this to your error monitoring service
  // Example: sendToErrorService(error, context);
};

export const createError = (message: string, code?: string, statusCode?: number, details?: any): CustomError => {
  return new CustomError(message, code, statusCode, details);
};