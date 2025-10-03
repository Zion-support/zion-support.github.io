import { NextApiRequest, NextApiResponse  } from 'next';
export interface ApiError extends Error  {statusCode?: number;
  isOperational?: boolean;
}

export class AppError extends Error implements ApiError {/* content */}
  public statusCode: number;
  public isOperational: boolean;

  constructor(message: string, statusCode: number = 500) {/* content */}
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorHandler = (err: ApiError, req: NextApiRequest, res: NextApiResponse) => {/* content */}
  const { statusCode = 500, message } = err;

  // Log error for monitoring
   
  console.error(`API Error [${statusCode}]: ${message}`, {/* content */}
    url: req.url,
    method: req.method,
    timestamp: new Date().toISOString(),
    userAgent: req.headers['user-agent'],
    ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
  });

  res.status(statusCode).json({/* content */}
    error: {/* content */}
      message: process.env.NODE_ENV === 'production' ? 'Internal Server Error' : message,
      statusCode,
      timestamp: new Date().toISOString()
    }
  });
};

export const asyncHandler = (fn: Function) => (req: NextApiRequest, res: NextApiResponse, next: Function) => {/* content */}
  Promise.resolve(fn(req, res, next)).catch((error: any) => next(error));
};
