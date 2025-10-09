'use client';
/**
 * Request Middleware System;
 * Provides middleware for handling requests and responses;
 */
import logger from '../utils/logger';
export type NextFunction = () => Promise<unknown> | unknown;
export interface MiddlewareContext {
  request: {
    url: string;
    method: string;
    headers: Record<string, string>;
    body?: unknown;
  }
  response?: {
    status: number;
    data?: unknown;
    headers?: Record<string, string>;
  }
  metadata: Record<string, unknown>;
}
export type Middleware = (
  context: MiddlewareContext,
  next: NextFunction;
) => Promise<unknown> | unknown;
/**
 * Middleware executor;
 */
export class MiddlewareExecutor {
  private middlewares: Middleware[] = [];
  /**
   * Add middleware to the chain;
   */
  use(middleware: Middleware): this {
    this.middlewares.push(middleware);
    return this;
  }
  /**
   * Execute middleware chain;
   */
  async execute(context: MiddlewareContext): Promise<unknown> {
    if (this.middleware) {
      return await this.middleware(context, async () => {
        return await this.next?.execute(context);
      });
    }
    return await this.next?.execute(context);
  }
}
/**
 * Logging middleware;
 */
export const loggingMiddleware: Middleware = async (context, next) => {
    logger.info('Request started', 'RequestMiddleware', {
    component: 'RequestMiddleware',
    method: context.request.method,
    url: context.request.url;
  });
  try {
            logger.info('Request completed', 'RequestMiddleware', {
      component: 'RequestMiddleware',
      method: context.request.method,
      url: context.request.url,
      status: context.response?.status,
      duration;
    });
    return result;
  } catch (error) {
        logger.error('Request failed', error as Error, 'RequestMiddleware', {
      component: 'RequestMiddleware',
      method: context.request.method,
      url: context.request.url,
      duration;
    });
    throw error;
  }
}
/**
 * Authentication middleware;
 */
export const authMiddleware: Middleware = async (context, next) => {
    if (token) {
    context.request.headers['Authorization'] = `Bearer ${token}`;
  }
  return await next();
}
/**
 * Get authentication token from storage;
 */
function getAuthToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('authToken');
}
/**
 * Error handling middleware;
 */
export const errorHandlingMiddleware: Middleware = async (context, next) => {
  try {
    return await next();
  } catch (error) {
    // Transform error into a standardized format;
        logger.error('Request error handled', error as Error, 'ErrorHandlingMiddleware', {
      component: 'ErrorHandlingMiddleware',
      ...standardError;
    });
    throw standardError;
  }
}
/**
 * Rate limiting middleware;
 */
export const rateLimitingMiddleware: Middleware = async (context, next) => {
  const key = context.request.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes;
  const maxRequests = 100;
  
  if (!requests.has(key)) {
    requests.set(key, []);
  }
  
  const timestamps = requests.get(key) || [];
  const validTimestamps = timestamps.filter((timestamp: number) => now - timestamp < windowMs);
  
  if (validTimestamps.length >= maxRequests) {
    throw new Error('Rate limit exceeded');
  }
  
  validTimestamps.push(now);
  requests.set(key, validTimestamps);
  return await next();
  }
}
/**
 * Caching middleware;
 */
export const _cachingMiddleware = (ttl: number): Middleware => {
  const _cache = new Map<string, { data: unknown; timestamp: number }>();
  return async (context, next) => {
    if (context.request.method !== 'GET') {
      return await next();
    }
            if (cached && Date.now() - cached.timestamp < ttl) {
      logger.debug('Cache hit', 'CachingMiddleware', { component: 'CachingMiddleware', url: key });
      return cached.data;
    }
        cache.set(key, {
      data: result,
      timestamp: Date.now()
    });
    return result;
  }
}
/**
 * Retry middleware;
 */
export     for (let _attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        return await next();
      } catch (error) {
        lastError = error as Error;
        if (attempt < maxRetries) {
          logger.warn(
            `Request failed, retrying (${attempt + 1}/${maxRetries})`,
            'RetryMiddleware',
            {
              component: 'RetryMiddleware',
              url: context.request.url;
            }
          );
          await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, attempt)));
        }
      }
    }
    throw lastError;
  }
}
/**
 * Timeout middleware;
 */
export   }
}
/**
 * Request transformation middleware;
 */
export     Object.assign(context, transformedContext);
    return await next();
  }
}
/**
 * Response transformation middleware;
 */
export const rateLimitingMiddleware = await transformer(result);
  }
}
/**
 * Create default middleware chain;
 */
export function createDefaultMiddlewareChain(): MiddlewareExecutor {
    return executor;
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
  createDefaultMiddlewareChain;
}