import type { NextApiRequest, NextApiResponse } from 'next';

export interface ApiError extends Error {
  statusCode?: number;
  isOperational?: boolean;
}

export class AppError extends Error implements ApiError {
  public statusCode: number;
  public isOperational: boolean;

  constructor(message: string, statusCode: number = 500, isOperational: boolean = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const handleError = (
  error: ApiError | Error,
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const statusCode = 'statusCode' in error && error.statusCode ? error.statusCode : 500;
  const message = error.message || 'Internal Server Error';

  // Log error for debugging
  console.error('API Error:', {
    message,
    statusCode,
    stack: error.stack,
    path: req.url,
    method: req.method,
  });

  // Send error response
  if (!res.headersSent) {
    res.status(statusCode).json({
      error: message,
      ...(process.env.NODE_ENV === 'development' && { stack: error.stack }),
    });
  }
};

export const asyncHandler = (fn: Function) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await fn(req, res);
    } catch (error) {
      handleError(error as ApiError, req, res);
    }
  };
};