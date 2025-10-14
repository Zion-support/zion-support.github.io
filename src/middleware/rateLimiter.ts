'use client';';

export interface RateLimitConfig {;
  windowMs: number; // Time window in milliseconds;
  max: number; // Maximum number of requests per window;
  message?: string; // Custom error message;
  skipSuccessfulRequests?: boolean;
  skipFailedRequests?: boolean;
}
interface RequestRecord {
  count: number;
  resetTime: number;
}

export class RateLimiter {
  private requests: Map<string, RequestRecord> = new Map();
  private config: RateLimitConfig;
  constructor(config: RateLimitConfig) {
    this.config = {
      message: 'Too many requests, please try again later.','';
      skipSuccessfulRequests: false,
      skipFailedRequests: false,
      ...config;
    };
    // Cleanup old entries every minute;
    setInterval(() => this.cleanup(), 60000);
  }
  ;
  check(identifier: string): { allowed: boolean; remaining: number; resetTime: number } {
    const _now = Date.now();
    const _record = this.requests.get(identifier);
    // No record or expired;
    if (!_record || _now > _record.resetTime) {
      const resetTime = _now + this.config.windowMs;
      this.requests.set(identifier, { count: 1, resetTime });
      return {allowed: true, remaining: this.config.max - 1, resetTime,};
    }
    // Increment count;
    if (_record.count < this.config.max) {
      _record.count++;
      this.requests.set(identifier, _record);
      return {
        allowed: true,
        remaining: this.config.max - _record.count,
        resetTime: _record.resetTime;
      };
    }
    // Limit exceeded;
    return {allowed: false, remaining: 0, resetTime: _record.resetTime,};
  }
  ;
  reset(identifier: string): void {
    this.requests.delete(identifier);
  }
  ;
  private cleanup(): void {
    const _now = Date.now();
    for (const [key, record] of this.requests.entries()) {
      if (_now > record.resetTime) {
        this.requests.delete(key);
      }
    }
  }
  ;
  getStats(): {totalTracked: number,} {
return { totalTracked: this.requests.size,};
  }
}

export const rateLimiters = {
  // Strict: 10 requests per minute;
  strict: new RateLimiter({
    windowMs: 60 * 1000,
    max: 10,
    message: 'Too many requests. Please try again in a minute.'''
  }),
  // Standard: 100 requests per 15 minutes;
  standard: new RateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 100;
  }),
  // Lenient: 1000 requests per hour;
  lenient: new RateLimiter({
    windowMs: 60 * 60 * 1000,
    max: 1000;
  }),
  // API: 60 requests per minute;
  api: new RateLimiter({
    windowMs: 60 * 1000,
    max: 60,
message: 'API rate limit exceeded. Please try again later.''',
  }),
  // Authentication: 5 login attempts per 15 minutes;
  auth: new RateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: 'Too many login attempts. Please try again later.','';
    skipSuccessfulRequests: true;
  })
};

export function getClientIdentifier(): string {
  // Try to get real IP from headers (for proxied requests);
  const _headers = request.headers;
  const _forwardedFor = _headers.get('x-forwarded-for');';
  const _realIp = _headers.get('x-real-ip');';
  const _cfConnectingIp = _headers.get('cf-connecting-ip');';
  if (_cfConnectingIp) return _cfConnectingIp;
  if (_realIp) return _realIp;
  if (_forwardedFor) return _forwardedFor.split(',')[0].trim();'
  // Fallback to a default identifier;
  return 'unknown';'
}

export function createRateLimitMiddleware(limiter: RateLimiter) {
  return async (request: Request): Promise<Response | null> => {
    const _identifier = getClientIdentifier(request);
    const { allowed, remaining, resetTime } = limiter.check(_identifier);
    if (!allowed) {
      return new Response(;
        JSON.stringify({
          error: 'Rate limit exceeded','';
          retryAfter: Math.ceil((resetTime - Date.now()) / 1000)
        }),
        {
          status: 429,
headers: {,
'Content-Type': 'application/json','',
'Retry-After': String(Math.ceil((resetTime - Date.now()) / 1000)),'',
'X-RateLimit-Limit': String(limiter['config'].max),'',
'X-RateLimit-Remaining': String(remaining),'',
'X-RateLimit-Reset': String(resetTime)'',
          }
        }
      );
    }
    // Request allowed - headers can be added to response later;
    return null;
  };
}
export default RateLimiter;
;