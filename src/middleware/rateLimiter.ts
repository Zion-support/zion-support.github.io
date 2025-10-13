// Rate limiting middleware for API endpoints
interface RateLimitConfig {
  windowMs: number;
  max: number;
  message?: string;
  standardHeaders?: boolean;
  legacyHeaders?: boolean;
}

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

class RateLimiter {
  private store: RateLimitStore = {};
  private config: RateLimitConfig;

  constructor(config: RateLimitConfig) {
    this.config = {
      message: "Too many requests, please try again later.",
      standardHeaders: true,
      legacyHeaders: false,
      ...config,
    };
  }

  private getKey(identifier: string): string {
    return `rate_limit_${identifier}`;
  }

  private cleanup(): void {
    const now = Date.now();
    Object.keys(this.store).forEach((key) => {
      if (this.store[key].resetTime < now) {
        delete this.store[key];
      }
    });
  }

  isAllowed(identifier: string): {
    allowed: boolean;
    remaining: number;
    resetTime: number;
  } {
    this.cleanup();

    const key = this.getKey(identifier);
    const now = Date.now();
    const windowStart = now - this.config.windowMs;

    if (!this.store[key] || this.store[key].resetTime < windowStart) {
      // First request or window expired
      this.store[key] = {
        count: 1,
        resetTime: now + this.config.windowMs,
      };

      return {
        allowed: true,
        remaining: this.config.max - 1,
        resetTime: this.store[key].resetTime,
      };
    }

    if (this.store[key].count >= this.config.max) {
      // Rate limit exceeded
      return {
        allowed: false,
        remaining: 0,
        resetTime: this.store[key].resetTime,
      };
    }

    // Increment counter
    this.store[key].count++;

    return {
      allowed: true,
      remaining: this.config.max - this.store[key].count,
      resetTime: this.store[key].resetTime,
    };
  }

  getHeaders(identifier: string): Record<string, string> {
    const result = this.isAllowed(identifier);
    const headers: Record<string, string> = {};

    if (this.config.standardHeaders) {
      headers["X-RateLimit-Limit"] = this.config.max.toString();
      headers["X-RateLimit-Remaining"] = result.remaining.toString();
      headers["X-RateLimit-Reset"] = new Date(result.resetTime).toISOString();
    }

    if (this.config.legacyHeaders) {
      headers["X-RateLimit-Limit"] = this.config.max.toString();
      headers["X-RateLimit-Remaining"] = result.remaining.toString();
      headers["X-RateLimit-Reset"] = Math.ceil(
        result.resetTime / 1000,
      ).toString();
    }

    return headers;
  }
}

// Default rate limiter instance
export const defaultRateLimiter = new RateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

// Create custom rate limiter
export const createRateLimiter = (config: RateLimitConfig): RateLimiter => {
  return new RateLimiter(config);
};

// Express.js middleware factory
export const rateLimitMiddleware = (config?: Partial<RateLimitConfig>) => {
  const limiter = config
    ? new RateLimiter(config as RateLimitConfig)
    : defaultRateLimiter;

  return (req: any, res: any, next: any) => {
    const identifier = req.ip || req.connection?.remoteAddress || "unknown";
    const result = limiter.isAllowed(identifier);

    // Set rate limit headers
    const headers = limiter.getHeaders(identifier);
    Object.entries(headers).forEach(([key, value]) => {
      res.setHeader(key, value);
    });

    if (!result.allowed) {
      return res.status(429).json({
        error: limiter["config"].message,
        retryAfter: Math.ceil((result.resetTime - Date.now()) / 1000),
      });
    }

    next();
  };
};

export type { RateLimitConfig, RateLimiter };
