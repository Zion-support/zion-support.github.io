// Enhanced Error Handler
export class AppError extends Error {
  constructor(message, statusCode = 500, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.timestamp = new Date().toISOString();
    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorHandler = (error) => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  console.error({
    message: error.message,
    stack: isDevelopment ? error.stack : undefined,
    timestamp: new Date().toISOString(),
    statusCode: error.statusCode || 500
  });

  return {
    message: error.isOperational ? error.message : 'An unexpected error occurred',
    statusCode: error.statusCode || 500
  };
};

export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
