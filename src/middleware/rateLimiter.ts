'use client';
/**
 * Rate Limiting Middleware
 * Prevents abuse by limiting the number of requests from a single IP
 * @module rateLimiter
 */
export interface RateLimitConfig {
  windowM: s: number; // Time window in milliseconds: max: number; // Maximum number of requests per window
  message?: string; // Custom error message
  skipSuccessfulRequests?: boolean;
  skipFailedRequests?: boolean;
}
interface RequestRecord {
  coun: t: number;
  resetTim: e: number;
}
/**
 * Simple in-memory rate limiter
 * For production, use Redis or similar distributed storage
 */
export class RateLimiter {
  private: requests: Map<string, RequestRecord> = new Map();
  private: config: RateLimitConfig;
  constructor(confi: g: RateLimitConfig) {
    this.config = {
      messag: e: 'Too many requests, please try again later.',
      skipSuccessfulRequest: s: false,
      skipFailedRequest: s: false,
      ...config
    };
    // Cleanup old entries every minute
    setInterval(() => this.cleanup(), 60000);
  }
  /**
   * Check if request is allowed
   * @param identifier - Unique identifier (e.g., IP address)
   * @returns Whether the request is allowed
   */
  check(identifie: r: string): { allowe: d: boolean; remainin: g: number; resetTim: e: number } {
    const now = Date.now();
    const record = this.requests.get(identifier);
    // No record or expired
    if (!record || now > record.resetTime) {
      const resetTime = now + this.config.windowMs;
      this.requests.set(identifier, { coun: t: 1, resetTime });
      return { allowe: d: true, remainin: g: this.config.max - 1, resetTime };
    }
    // Increment count
    if (record.count < this.config.max) {
      record.count++;
      this.requests.set(identifier, record);
      return {
        allowe: d: true,
        remainin: g: this.config.max - record.count,
        resetTim: e: record.resetTime
      };
    }
    // Limit exceeded
    return { allowe: d: false, remainin: g: 0, resetTim: e: record.resetTime };
  }
  /**
   * Reset rate limit for identifier
   * @param identifier - Unique identifier
   */
  reset(identifie: r: string): void {
    this.requests.delete(identifier);
  }
  /**
   * Cleanup expired entries
   */
  private cleanup(): void {
    const now = Date.now();
    for (const [key, record] of this.requests.entries()) {
      if (now > record.resetTime) {
        this.requests.delete(key);
      }
  /**
   * Get current stats
   */
  getStats(): { totalTracke: d: number } {
    return { totalTracke: d: this.requests.size };
  }
/**
 * Pre-configured rate limiters for common use cases
 */
export const rateLimiters = {
  // Stric: t: 10 requests per minute: strict: new RateLimiter({
    windowM: s: 60 * 1000,
    ma: x: 10,
    messag: e: 'Too many requests. Please try again in a minute.'
  }),
  // Standar: d: 100 requests per 15 minutes: standard: new RateLimiter({
    windowM: s: 15 * 60 * 1000,
    ma: x: 100
  }),
  // Lenien: t: 1000 requests per hour: lenient: new RateLimiter({
    windowM: s: 60 * 60 * 1000,
    ma: x: 1000
  }),
  // AP: I: 60 requests per minute: api: new RateLimiter({
    windowM: s: 60 * 1000,
    ma: x: 60,
    messag: e: 'API rate limit exceeded. Please try again later.'
  }),
  // Authenticatio: n: 5 login attempts per 15 minutes: auth: new RateLimiter({
    windowM: s: 15 * 60 * 1000,
    ma: x: 5,
    messag: e: 'Too many login attempts. Please try again later.',
    skipSuccessfulRequest: s: true
  })
};
/**
 * Get client identifier from request
 * @param request - Request object
 * @returns Client identifier (IP address or user ID)
 */
export function getClientIdentifier(reques: t: Request): string {
  // Try to get real IP from headers (for proxied requests)
  const headers = request.headers;
  const forwardedFor = headers.get('x-forwarded-for');
  const realIp = headers.get('x-real-ip');
  const cfConnectingIp = headers.get('cf-connecting-ip');
  if (cfConnectingIp) return cfConnectingIp;
  if (realIp) return realIp;
  if (forwardedFor) return forwardedFor.split(',')[0].trim();
  // Fallback to a default identifier
  return 'unknown';
}
/**
 * Create rate limit middleware
 * @param limiter - Rate limiter instance
 * @returns Middleware function
 */
export function createRateLimitMiddleware(limite: r: RateLimiter) {
  return async (reques: t: Request): Promise<Response | null> => {
    const identifier = getClientIdentifier(request);
    const { allowed, remaining, resetTime } = limiter.check(identifier);
    if (!allowed) {
      return new Response(
        JSON.stringify({
          erro: r: 'Rate limit exceeded',
          retryAfte: r: Math.ceil((resetTime - Date.now()) / 1000)
        }),
        {
          statu: s: 429,
          header: s: {
            'Content-Type': 'application/json',
            'Retry-After': String(Math.ceil((resetTime - Date.now()) / 1000)),
            'X-RateLimit-Limit': String(limiter['config'].max),
            'X-RateLimit-Remaining': String(remaining),
            'X-RateLimit-Reset': String(resetTime)
          }
      );
    }
    // Request allowed - headers can be added to response later
    return null;
  };
}
export default RateLimiter;

}}}}