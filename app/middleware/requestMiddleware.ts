/**
 * Request Middleware System
 * Provides middleware for handling requests and responses
 */

export type NextFunction = () => Promise<unknown> | unknown;

export interface MiddlewareContext {
  request: {
    url: string;
    method: string;
    headers: Record<string, string>;
    body?: unknown;
  };
  response?: {
    status: number;
    data?: unknown;
    headers?: Record<string, string>;
  };
  metadata: Record<string, unknown>;
}

export type Middleware = (
  context: MiddlewareContext,
  next: NextFunction
) => Promise<unknown> | unknown;

/**
 * Middleware executor
 */
export class MiddlewareExecutor {
  private middlewares: Middleware[] = [];

  constructor(middlewares: Middleware[] = []) {
    this.middlewares = middlewares;
  }

  /**
   * Add middleware to the chain
   */
  use(middleware: Middleware): void {
    this.middlewares.push(middleware);
  }

  /**
   * Execute all middlewares in sequence
   */
  async execute(context: MiddlewareContext): Promise<unknown> {
    let index = 0;

    const next = async (): Promise<unknown> => {
      if (index >= this.middlewares.length) {
        return Promise.resolve();
      }

      const middleware = this.middlewares[index++];
      return middleware(context, next);
    };

    return next();
  }
}

/**
 * Logging middleware
 */
export const loggingMiddleware: Middleware = async (context, next) => {
  const start = Date.now();
  
  console.log(`[${new Date().toISOString()}] ${context.request.method} ${context.request.url}`);
  
  try {
    const result = await next();
    const duration = Date.now() - start;
    
    console.log(`[${new Date().toISOString()}] ${context.request.method} ${context.request.url} - ${duration}ms`);
    
    return result;
  } catch (error) {
    const duration = Date.now() - start;
    console.error(`[${new Date().toISOString()}] ${context.request.method} ${context.request.url} - ERROR - ${duration}ms`, error);
    throw error;
  }
};

/**
 * Error handling middleware
 */
export const errorHandlingMiddleware: Middleware = async (context, next) => {
  try {
    return await next();
  } catch (error) {
    console.error('Middleware error:', error);
    
    context.response = {
      status: 500,
      data: { error: 'Internal server error' },
      headers: { 'Content-Type': 'application/json' }
    };
    
    throw error;
  }
};

/**
 * CORS middleware
 */
export const corsMiddleware: Middleware = async (context, next) => {
  const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'];
  const origin = context.request.headers.origin || context.request.headers.Origin;
  
  if (origin && allowedOrigins.includes(origin)) {
    context.response = {
      ...context.response,
      headers: {
        ...context.response?.headers,
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Credentials': 'true',
      }
    };
  }
  
  return next();
};

/**
 * Rate limiting middleware
 */
export const rateLimitMiddleware: Middleware = async (context, next) => {
  // Simple rate limiting based on IP
  const ip = context.request.headers['x-forwarded-for'] || 
             context.request.headers['x-real-ip'] || 
             'unknown';
  
  // This is a simplified implementation
  // In production, use a proper rate limiting library
  const rateLimitKey = `rate_limit_${ip}`;
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 100;
  
  // This would typically use Redis or similar
  // For now, we'll just pass through
  return next();
};

/**
 * Request validation middleware
 */
export const validationMiddleware: Middleware = async (context, next) => {
  // Basic request validation
  if (!context.request.url || !context.request.method) {
    context.response = {
      status: 400,
      data: { error: 'Invalid request' },
      headers: { 'Content-Type': 'application/json' }
    };
    return;
  }
  
  return next();
};

/**
 * Default middleware stack
 */
export const defaultMiddlewares: Middleware[] = [
  loggingMiddleware,
  errorHandlingMiddleware,
  corsMiddleware,
  rateLimitMiddleware,
  validationMiddleware,
];

/**
 * Create a middleware executor with default middlewares
 */
export const createMiddlewareExecutor = (additionalMiddlewares: Middleware[] = []): MiddlewareExecutor => {
  return new MiddlewareExecutor([...defaultMiddlewares, ...additionalMiddlewares]);
};

export default MiddlewareExecutor;