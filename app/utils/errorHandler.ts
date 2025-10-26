// Error handling utilities,
export interface AppError {
  message: string;
  code?: string;
  statusCode?: number;
  details?: Record<string, unknown>;
}

export class CustomError extends Error {
  public code?: string;
  public statusCode?: number;
  public details?: Record<string, unknown>;

  constructor(message: string, code?: string, statusCode?: number, details?: Record<string, unknown>) {
    super(message);
    this.name = 'CustomError';
    this.code = code ?? undefined;
    this.statusCode = statusCode ?? undefined;
    this.details = details ?? undefined;
  }
}

export const handleError = (error: unknown): AppError => {
  if (error instanceof CustomError) {
    return {
      message: error.message,
      code: error.code ?? undefined,
      statusCode: error.statusCode ?? undefined,
      details: error.details ?? undefined,
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
  
  // In production, you would send this to your error monitoring service
  // Example: sendToErrorService(error, context);
};

export const createError = (message: string, code?: string, statusCode?: number, details?: Record<string, unknown>): CustomError => {
  return new CustomError(message, code, statusCode, details);
};