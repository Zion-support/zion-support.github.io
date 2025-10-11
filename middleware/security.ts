import { Request, Response, NextFunction } from 'express';
import { securityHeaders, applySecurityHeaders } from '../utils/securityUtils';
import { createRateLimiter, defaultRateLimitConfig } from '../utils/rateLimiting';

const rateLimiter = createRateLimiter(defaultRateLimitConfig);

export const securityMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Apply security headers
  applySecurityHeaders(res);
  
  // Rate limiting
  const clientId = req.ip || req.connection.remoteAddress || 'unknown';
  if (!rateLimiter.isAllowed(clientId)) {
    return res.status(429).json({
      error: 'Too Many Requests',
      message: 'Rate limit exceeded. Please try again later.',
      retryAfter: Math.ceil((rateLimiter.getResetTime(clientId) - Date.now()) / 1000)
    });
  }
  
  // Add rate limit headers
  res.setHeader('X-RateLimit-Limit', defaultRateLimitConfig.maxRequests);
  res.setHeader('X-RateLimit-Remaining', rateLimiter.getRemainingRequests(clientId));
  res.setHeader('X-RateLimit-Reset', rateLimiter.getResetTime(clientId));
  
  next();
};

export const helmetMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Additional security headers
  res.setHeader('X-Permitted-Cross-Domain-Policies', 'none');
  res.setHeader('X-Download-Options', 'noopen');
  res.setHeader('X-Powered-By', '');
  
  next();
};