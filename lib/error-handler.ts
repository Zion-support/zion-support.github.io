export class AppError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;

  constructor(message: string, statusCode: number = 500, isOperational: boolean = true) {
    super(message);
    this.name = 'AppError';
    this.statusCode = Number.isInteger(statusCode) ? statusCode : 500;
    this.isOperational = isOperational;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppError);
    }
  }
}

type NextLikeRequest = {
  url?: string;
  method?: string;
  headers?: Record<string, string | string[]>;
};

type NextLikeResponse = {
  status: (code: number) => NextLikeResponse;
  json: (body: unknown) => NextLikeResponse;
};

export function errorHandler(error: unknown, _req: NextLikeRequest, res: NextLikeResponse) {
  const isAppError = error instanceof AppError;
  const statusCode = isAppError ? error.statusCode : 500;
  const message = isAppError ? error.message : 'Internal Server Error';

  res.status(statusCode).json({
    error: {
      message,
      statusCode,
      timestamp: new Date().toISOString(),
    },
  });
}

export function asyncHandler<
  TReq = NextLikeRequest,
  TRes = NextLikeResponse,
  TNext = (err?: unknown) => void
>(handler: (req: TReq, res: TRes, next: TNext) => Promise<unknown>) {
  return (req: TReq, res: TRes, next: TNext) => {
    return Promise.resolve(handler(req, res, next)).catch((err) => errorHandler(err, req, res as unknown as NextLikeResponse));
  };
}

import { NextApiRequest, NextApiResponse } from 'next';

export interface ApiError extends Error {
  statusCode?: number;
  isOperational?: boolean;
}

export class AppError extends Error implements ApiError {
  public statusCode: number;
  public isOperational: boolean;

  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorHandler = (err: ApiError, req: NextApiRequest, res: NextApiResponse) => {
  const { statusCode = 500, message } = err;

  // Log error for monitoring
  console.error(`API Error [${statusCode}]: ${message}`, {
    url: req.url,
    method: req.method,
    timestamp: new Date().toISOString(),
    userAgent: req.headers['user-agent'],
    ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
  });

  res.status(statusCode).json({
    error: {
      message: process.env.NODE_ENV === 'production' ? 'Internal Server Error' : message,
      statusCode,
      timestamp: new Date().toISOString()
    }
  });
};

export const asyncHandler = (fn: Function) => (req: NextApiRequest, res: NextApiResponse, next: Function) => {
  Promise.resolve(fn(req, res, next)).catch((error: any) => next(error));
};