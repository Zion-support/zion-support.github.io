// Enhanced Error Handler
export class AppError extends Error {
  statusCode: number;
  isOperational: boolean;
  timestamp: string;

  constructor(message: string, statusCode: number = 500, isOperational: boolean = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.timestamp = new Date().toISOString();
    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorHandler = (error: AppError | Error) => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  console.error({
    message: error.message,
    stack: isDevelopment ? error.stack : undefined,
    timestamp: new Date().toISOString(),
    statusCode: (error as AppError).statusCode || 500
  });

  return {
    message: (error as AppError).isOperational ? error.message : 'An unexpected error occurred',
    statusCode: (error as AppError).statusCode || 500
  };
};

export const asyncHandler = (fn: Function) => (req: any, res: any, next: any) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
