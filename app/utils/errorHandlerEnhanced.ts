/**
 * Enhanced Error Handler
 * Provides comprehensive error handling and logging
 */

export class AppError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;

  constructor(message: string, statusCode: number = 500, isOperational: boolean = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorHandler = (error: AppError | Error) => {
  const isDevelopment = process.env['NODE_ENV'] === 'development';
  const appError = error instanceof AppError ? error : new AppError(error.message);

  console.error({
    message: appError.message,
    stack: isDevelopment ? appError.stack : undefined,
    timestamp: new Date().toISOString(),
    statusCode: appError.statusCode || 500,
  });

  return {
    message: appError.isOperational ? appError.message : 'An unexpected error occurred',
    statusCode: appError.statusCode || 500,
  };
};

export const asyncHandler = (fn: Function) => (req: any, res: any, next: any) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default errorHandler;