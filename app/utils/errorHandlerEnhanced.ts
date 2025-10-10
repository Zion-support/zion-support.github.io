'use client';
<<<<<<< HEAD
// Enhanced Error Handler;
export class AppError extends Error {
=======
// Enhanced Error Handler
export class AppError extends Error {}
>>>>>>> origin/merge-error-fixes
  statusCode: number;
  isOperational: boolean;
  timestamp: string;
  constructor(message: string, statusCode = 500, isOperational = true) {}
    super(message)
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.timestamp = new Date().toISOString()
    Error.captureStackTrace(this, this.constructor)
  }
}
export const errorHandler = (error: AppError | Error) => {}
  const isDevelopment = process.env.NODE_ENV === 'development'
  const appError = error instanceof AppError ? error : new AppError(error.message);

<<<<<<< HEAD
  .toISOString()
    statusCode: appError.statusCode || 500;
  return {,
=======
  .toISOString(),
    statusCode: appError.statusCode || 500

  return {}
>>>>>>> origin/merge-error-fixes
    message: appError.isOperational ? appError.message : 'An unexpected error occurred',
    statusCode: appError.statusCode || 500;
  };
};
<<<<<<< HEAD
export const asyncHandler = (fn: (req: unknown, res: unknown, next: unknown) => unknown) => (req: unknown, res: unknown, next: unknown) => {,
  Promise.resolve(fn(req, res, next)).catch((error: unknown) => {,
    if (next && typeof next === 'function') {,
=======
export const asyncHandler = (fn: (req: unknown, res: unknown, next: unknown) => unknown) => (req: unknown, res: unknown, next: unknown) => {}
  Promise.resolve(fn(req, res, next)).catch((error: unknown) => {}
    if (next && typeof next === 'function') {}
>>>>>>> origin/merge-error-fixes
      next(error);
    }

};
