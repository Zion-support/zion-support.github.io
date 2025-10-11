import type { NextApiRequest, NextApiResponse } from 'next';

import type { NextApiRequest, NextApiResponse } from 'next';

import type { NextApiRequest, NextApiResponse } from 'next';

import { NextApiRequest, NextApiResponse } from 'next';

import { NextApiRequest, NextApiResponse } from 'next';

import type { NextApiRequest, NextApiResponse } from 'next';

import { NextApiRequest, NextApiResponse } from 'next';

import type { NextApiRequest, NextApiResponse } from 'next';

import type { NextApiRequest, NextApiResponse } from 'next';

import type { NextApiRequest, NextApiResponse } from 'next';

import { NextApiRequest, NextApiResponse } from 'next';

import type { NextApiRequest, NextApiResponse } from 'next';

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












export const errorHandler = (
  err: ApiError,
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { statusCode = 500, message } = err;
  
  







  

  

  // Log error for monitoring
  if (process.env['NODE_ENV'] === 'development') {
    // eslint-disable-next-line no-console
//     console.error(`API Error [${statusCode}]: ${message}`, {
    url: req.url,
    method: req.method,
    timestamp: new Date().toISOString(),
    userAgent: req.headers['user-agent'],
    ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
  });











    timestamp: new Date().toISOString(),
    userAgent: req.headers['user-agent'],
    ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    });
  }

  res.status(statusCode).json({
    error: {
      message:
        process.env['NODE_ENV'] === 'production'
          ? 'Internal Server Error'
          : message,
      statusCode,
      timestamp: new Date().toISOString()
      statusCode,
      timestamp: new Date().toISOString()
      statusCode,
      timestamp: new Date().toISOString()
    },
      statusCode,
      timestamp: new Date().toISOString()
    }
      statusCode,
      timestamp: new Date().toISOString()
    }
      statusCode,
      timestamp: new Date().toISOString()
    }
  });
};

export const asyncHandler =
  (fn: Function) =>
  (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    Promise.resolve(fn(req, res, next)).catch((error: Error) => next(error));
  };
  (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    Promise.resolve(fn(req, res, next)).catch((error: Error) => next(error));
  };
  (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    Promise.resolve(fn(req, res, next)).catch((error: Error) => next(error));
  };
    stack: err.stack
  });

  res.status(statusCode).json({
    error: {
      message: message || 'Internal Server Error',
      statusCode,
      ...(process.env['NODE_ENV'] === 'development' && { stack: err.stack })
    }
  });
};

export const asyncHandler = (fn: Function) => {
  return (req: NextApiRequest, res: NextApiResponse) => {
    Promise.resolve(fn(req, res)).catch((err) => {
      statusCode,
      timestamp: new Date().toISOString(),
    },
  });
};

export const asyncHandler = (fn: (req: NextApiRequest, res: NextApiResponse) => Promise<void> | void) => {
  return (req: NextApiRequest, res: NextApiResponse) => {
    Promise.resolve(fn(req, res)).catch(err => {
      errorHandler(err, req, res);
    });
  };
};
  (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    Promise.resolve(fn(req, res, next)).catch((error: Error) => next(error));
  };
  (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    Promise.resolve(fn(req, res, next)).catch((error: Error) => next(error));
  };
  (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    Promise.resolve(fn(req, res, next)).catch((error: Error) => next(error));
  };
  (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    Promise.resolve(fn(req, res, next)).catch((error: Error) => next(error));
  };
  (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    Promise.resolve(fn(req, res, next)).catch((error: Error) => next(error));
  };
  (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    Promise.resolve(fn(req, res, next)).catch((error: Error) => next(error));
  };

export const asyncHandler =
  (fn: Function) =>
  (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    Promise.resolve(fn(req, res, next)).catch((error: Error) => next(error));
  };

export const asyncHandler =
  (fn: Function) =>
  (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    Promise.resolve(fn(req, res, next)).catch((error: Error) => next(error));
  };
  (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    Promise.resolve(fn(req, res, next)).catch((error: Error) => next(error));
  };
  (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    Promise.resolve(fn(req, res, next)).catch((error: Error) => next(error));
  };
