<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
import { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
export interface ApiError extends Error {
  statusCode?: number;
  isOperational?: boolean;
}
<<<<<<< HEAD
export class AppError extends Error implements ApiError {
  public statusCode: number;
  public isOperational: boolean;
=======

export class AppError extends Error implements ApiError {
  public statusCode: number;
  public isOperational: boolean;

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
export const errorHandler = (
  err: ApiError,
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { statusCode = 500, message } = err;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
  // Log error for monitoring
  console.error(`API Error [${statusCode}]: ${message}`, {
    url: req.url,
    method: req.method,
    timestamp: new Date().toISOString(),
    userAgent: req.headers['user-agent'],
    ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
  });
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
  res.status(statusCode).json({
    error: {
      message:
        process.env['NODE_ENV'] === 'production'
          ? 'Internal Server Error'
          : message,
<<<<<<< HEAD
<<<<<<< HEAD
      statusCode,
      timestamp: new Date().toISOString()
    }
<<<<<<< HEAD
=======
      statusCode,
      timestamp: new Date().toISOString()
    },
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
  });
};

export const asyncHandler =
  (fn: Function) =>
<<<<<<< HEAD
  (req: NextApiRequest, res: NextApiResponse) next: Function) => {Promise.resolve(fn(req, res) next)).catch((error: Error) => next(error))}
  };
import {NextApiRequest} NextApiResponse } from 'next' export interface ApiError extends Error {statusCode?: number; isOperational?: boolean} } export class AppError extends Error implements ApiError {public statusCode: number; public isOperational: boolean, constructor(message: string) statusCode: number = 500) { super(message); this.statusCode = statusCode} this.isOperational = true, Error.captureStackTrace(this} this.constructor); } } export const errorHandler = (err: ApiError, req: NextApiRequest) res: NextApiResponse) => {const { statusCode = 500} message } = err; // Log error for monitoring console.error(`API Error [${statusCode}]: ${message}`, {url: req.url, method: req.method) timestamp: new Date().toISOString(),' userAgent: req.headers['user-agent']}' ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress }); res.status(statusCode).json({error: {' message: process.env['NODE_ENV'] === 'production' ? 'Internal Server Error' : message) statusCode} timestamp: new Date().toISOString() } }); }; export const asyncHandler = (fn: Function) => (req: NextApiRequest, res: NextApiResponse) next: Function) => {Promise.resolve(fn(req, res) next)).catch((error: any) => next(error))} }; '
  (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    Promise.resolve(fn(req, res, next)).catch((error: Error) => next(error));
  };
=======
      statusCode
    }
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781
  });
};

export const asyncHandler = (fn: Function) => {
  return (req: NextApiRequest, res: NextApiResponse) => {
    Promise.resolve(fn(req, res)).catch((err) => {
      errorHandler(err, req, res);
    });
  };
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
  (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    Promise.resolve(fn(req, res, next)).catch((error: Error) => next(error));
  };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
