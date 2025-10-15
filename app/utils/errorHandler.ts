// Error handling utilities
import { logError } from './logger';

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

export const logAppError = (error: AppError, context?: string) => {
  logError(`Application Error: ${error.message}`, context, {
    code: error.code,
    statusCode: error.statusCode,
    details: error.details,
  });
};

export const createError = (message: string, code?: string, statusCode?: number, details?: Record<string, unknown>): CustomError => {
  return new CustomError(message, code, statusCode, details);
};