"use client";
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
  next: NextFunction,
) => Promise<unknown> | unknown;

/**
 * Middleware executor
 */
export class MiddlewareExecutor {
  private middlewares: Middleware[] = [];

  /**
   * Add middleware to the chain
   */
  use(middleware: Middleware): this {
    this.middlewares.push(middleware);
    return this;
  }

  /**
   * Execute middleware chain
   */
  async execute(context: MiddlewareContext): Promise<unknown> {
    let index = 0;
    const next = async () => {
      if (index >= this.middlewares.length) {
        return context.response?.data;
      }
      const middleware = this.middlewares[index++];
      return await middleware(context, next);
    };
    return await next();
  }
}

/**
 * Logging middleware
 */
export const loggingMiddleware: Middleware = async (context, next) => {
  const startTime = Date.now();

  try {
    const result = await next();
    const duration = Date.now() - startTime;
    return result;
  } catch (error) {
    throw error;
  }
};

/**
 * Authentication middleware
 */
export const authMiddleware: Middleware = async (context, next) => {
  const token = getAuthToken();
  if (token) {
    context.request.headers["Authorization"] = `Bearer ${token}`;
  }
  return await next();
};

/**
 * Get authentication token from storage
 */
function getAuthToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("authToken");
}

/**
 * Error handling middleware
 */
export const errorHandlingMiddleware: Middleware = async (context, next) => {
  try {
    return await next();
  } catch (error) {
    // Transform error into a standardized format
    const standardError = {
      message: error instanceof Error ? error.message : "Unknown error",
      status: context.response?.status || 500,
      method: context.request.method,
    };
    throw standardError;
  }
};

/**
 * Rate limiting middleware
 */
export const rateLimitMiddleware = (
  maxRequests: number,
  windowMs: number,
): Middleware => {
  const requests = new Map<string, number[]>();
  return async (context, next) => {
    const key = context.request.url;
    const now = Date.now();
    const timestamps = requests.get(key) || [];
    // Remove expired timestamps
    const validTimestamps = timestamps.filter((t) => now - t < windowMs);
    if (validTimestamps.length >= maxRequests) {
      throw new Error("Rate limit exceeded");
    }
    validTimestamps.push(now);
    requests.set(key, validTimestamps);
    return await next();
  };
};

/**
 * Caching middleware
 */
export const cachingMiddleware = (ttl: number): Middleware => {
  const cache = new Map<string, { data: unknown; timestamp: number }>();
  return async (context, next) => {
    const key = context.request.url;
    if (context.request.method !== "GET") {
      return await next();
    }
    const cached = cache.get(key);
    if (cached && Date.now() - cached.timestamp < ttl) {
      return cached.data;
    }
    const result = await next();
    cache.set(key, {
      data: result,
      timestamp: Date.now(),
    });
    return result;
  };
};

/**
 * Retry middleware
 */
export const retryMiddleware = (
  maxRetries: number,
  delay: number,
): Middleware => {
  return async (context, next) => {
    let lastError: Error | null = null;
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        return await next();
      } catch (error) {
        lastError = error as Error;
        if (attempt < maxRetries) {
          await new Promise((resolve) =>
            setTimeout(resolve, delay * Math.pow(2, attempt)),
          );
        }
      }
    }
    throw lastError;
  };
};

/**
 * Timeout middleware
 */
export const timeoutMiddleware = (timeoutMs: number): Middleware => {
  return async (context, next) => {
    return await Promise.race([
      next(),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Request timeout")), timeoutMs),
      ),
    ]);
  };
};

/**
 * Request transformation middleware
 */
export const transformRequestMiddleware = (
  transformer: (
    context: MiddlewareContext,
  ) => MiddlewareContext | Promise<MiddlewareContext>,
): Middleware => {
  return async (context, next) => {
    const transformedContext = await transformer(context);
    return await next();
  };
};

/**
 * Response transformation middleware
 */
export const transformResponseMiddleware = (
  transformer: (data: unknown) => unknown | Promise<unknown>,
): Middleware => {
  return async (context, next) => {
    const result = await next();
    return await transformer(result);
  };
};

/**
 * Create default middleware chain
 */
export function createDefaultMiddlewareChain(): MiddlewareExecutor {
  const executor = new MiddlewareExecutor();
  return executor
    .use(loggingMiddleware)
    .use(errorHandlingMiddleware)
    .use(authMiddleware)
    .use(timeoutMiddleware(30000))
    .use(retryMiddleware(2, 1000));
}

export default {
  MiddlewareExecutor,
  loggingMiddleware,
  authMiddleware,
  errorHandlingMiddleware,
  rateLimitMiddleware,
  cachingMiddleware,
  retryMiddleware,
  timeoutMiddleware,
  transformRequestMiddleware,
  transformResponseMiddleware,
  createDefaultMiddlewareChain,
};
