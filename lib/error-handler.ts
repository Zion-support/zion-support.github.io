=======
import type { NextApiRequest, NextApiResponse } from 'next';

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
=======
import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
import { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4b0f
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cfbc
=======
import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> origin/main
export interface ApiError extends Error {
  statusCode?: number;
  isOperational?: boolean;
}
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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4b0f
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cfbc
=======
>>>>>>> origin/main

export class AppError extends Error implements ApiError {
  public statusCode: number;
  public isOperational: boolean;

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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4b0f
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cfbc
=======
>>>>>>> origin/main
  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}
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
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4b0f
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cfbc
=======

>>>>>>> origin/main
export const errorHandler = (
  err: ApiError,
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { statusCode = 500, message } = err;
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
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4b0f
=======
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cfbc
=======

>>>>>>> origin/main
  // Log error for monitoring
  if (process.env['NODE_ENV'] === 'development') {
    // eslint-disable-next-line no-console
    console.error(`API Error [${statusCode}]: ${message}`, {
    url: req.url,
    method: req.method,
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
    timestamp: new Date().toISOString(),
    userAgent: req.headers['user-agent'],
    ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
  });
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
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4b0f
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cfbc
=======
    timestamp: new Date().toISOString(),
    userAgent: req.headers['user-agent'],
    ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    });
  }

>>>>>>> origin/main
  res.status(statusCode).json({
    error: {
      message:
        process.env['NODE_ENV'] === 'production'
          ? 'Internal Server Error'
          : message,
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
      statusCode,
      timestamp: new Date().toISOString()
=======
      statusCode,
      timestamp: new Date().toISOString()
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
      statusCode,
      timestamp: new Date().toISOString()
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
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
      ...(process.env['NODE_ENV'] === 'development' && { stack: err.stack })
    }
  });
};

export const asyncHandler = (fn: Function) => {
  return (req: NextApiRequest, res: NextApiResponse) => {
    Promise.resolve(fn(req, res)).catch((err) => {
=======
      statusCode,
      timestamp: new Date().toISOString(),
    },
  });
};

export const asyncHandler = (fn: (req: NextApiRequest, res: NextApiResponse) => Promise<void> | void) => {
  return (req: NextApiRequest, res: NextApiResponse) => {
    Promise.resolve(fn(req, res)).catch(err => {
>>>>>>> origin/main
      errorHandler(err, req, res);
    });
  };
};
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
=======
>>>>>>> 73aae067a8789e7f94c7cf242d65c42e6717fb43
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
=======

export const asyncHandler =
  (fn: Function) =>
  (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    Promise.resolve(fn(req, res, next)).catch((error: Error) => next(error));
  };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======

export const asyncHandler =
  (fn: Function) =>
  (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    Promise.resolve(fn(req, res, next)).catch((error: Error) => next(error));
  };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
=======
  (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    Promise.resolve(fn(req, res, next)).catch((error: Error) => next(error));
  };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4b0f
=======
  (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    Promise.resolve(fn(req, res, next)).catch((error: Error) => next(error));
  };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cfbc
=======
>>>>>>> origin/main
