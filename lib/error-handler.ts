<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
import { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======
import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
import { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======
import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======
import { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======
import { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
import { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======
import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
export interface ApiError extends Error {
  statusCode?: number;
  isOperational?: boolean;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export class AppError extends Error implements ApiError {
  public statusCode: number;
  public isOperational: boolean;
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008

export class AppError extends Error implements ApiError {
  public statusCode: number;
  public isOperational: boolean;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
export const errorHandler = (
  err: ApiError,
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { statusCode = 500, message } = err;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
  // Log error for monitoring
  console.error(`API Error [${statusCode}]: ${message}`, {
    url: req.url,
    method: req.method,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
    timestamp: new Date().toISOString(),
    userAgent: req.headers['user-agent'],
    ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
  });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
  res.status(statusCode).json({
    error: {
      message:
        process.env['NODE_ENV'] === 'production'
          ? 'Internal Server Error'
          : message,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      statusCode,
      timestamp: new Date().toISOString()
    }
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
      statusCode,
      timestamp: new Date().toISOString()
<<<<<<< HEAD
=======
      statusCode,
      timestamp: new Date().toISOString()
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
    },
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======
      statusCode,
      timestamp: new Date().toISOString()
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-698a
    }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======
      statusCode,
      timestamp: new Date().toISOString()
    }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
      statusCode,
      timestamp: new Date().toISOString()
    }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
  });
};

export const asyncHandler =
  (fn: Function) =>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    Promise.resolve(fn(req, res, next)).catch((error: Error) => next(error));
  };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
  (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    Promise.resolve(fn(req, res, next)).catch((error: Error) => next(error));
  };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======
  (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    Promise.resolve(fn(req, res, next)).catch((error: Error) => next(error));
  };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
    stack: err.stack
  });

  res.status(statusCode).json({
    error: {
      message: message || 'Internal Server Error',
      statusCode,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    }
  });
};

export const asyncHandler = (fn: Function) => {
  return (req: NextApiRequest, res: NextApiResponse) => {
    Promise.resolve(fn(req, res)).catch((err) => {
      errorHandler(err, req, res);
    });
  };
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======
  (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    Promise.resolve(fn(req, res, next)).catch((error: Error) => next(error));
  };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======
  (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    Promise.resolve(fn(req, res, next)).catch((error: Error) => next(error));
  };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
  (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    Promise.resolve(fn(req, res, next)).catch((error: Error) => next(error));
  };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
  (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    Promise.resolve(fn(req, res, next)).catch((error: Error) => next(error));
  };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
  (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    Promise.resolve(fn(req, res, next)).catch((error: Error) => next(error));
  };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======
  (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    Promise.resolve(fn(req, res, next)).catch((error: Error) => next(error));
  };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
