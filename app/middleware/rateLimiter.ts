/**
 * Rate Limiting Middleware
 * Prevents abuse by limiting the number of requests from a single IP
 * @module rateLimiter
 */

export interface RateLimitConfig {
  windowMs: number; // Time window in milliseconds
  max: number; // Maximum number of requests per window
  message?: string; // Custom error message
  skipSuccessfulRequests?: boolean;
  skipFailedRequests?: boolean;
}

interface RequestRecord {
  count: number;
  resetTime: number;
}

/**
 * Simple in-memory rate limiter
 * For production, use Redis or similar distributed storage
 */
export class RateLimiter {
  private requests: Map<string, RequestRecord> = new Map();
  private config: RateLimitConfig;

  constructor(config: RateLimitConfig) {
    this.config = {
      message: 'Too many requests, please try again later.',
      skipSuccessfulRequests: false,
      skipFailedRequests: false,
      ...config,
    };
  }

  /**
   * Check if request should be allowed
   */
  isAllowed(identifier: string): { allowed: boolean; remaining: number; resetTime: number } {
    const now = Date.now();
    const record = this.requests.get(identifier);

    if (!record || now > record.resetTime) {
      // Create new record or reset expired one
      this.requests.set(identifier, {
        count: 1,
        resetTime: now + this.config.windowMs,
      });

      return {
        allowed: true,
        remaining: this.config.max - 1,
        resetTime: now + this.config.windowMs,
      };
    }

    if (record.count >= this.config.max) {
      return {
        allowed: false,
        remaining: 0,
        resetTime: record.resetTime,
      };
    }

    // Increment count
    record.count++;
    this.requests.set(identifier, record);

    return {
      allowed: true,
      remaining: this.config.max - record.count,
      resetTime: record.resetTime,
    };
  }

  /**
   * Clean up expired records
   */
  cleanup(): void {
    const now = Date.now();
    for (const [key, record] of this.requests.entries()) {
      if (now > record.resetTime) {
        this.requests.delete(key);
      }
    }
  }

  /**
   * Get current stats for an identifier
   */
  getStats(identifier: string): { count: number; remaining: number; resetTime: number } | null {
    const record = this.requests.get(identifier);
    if (!record) return null;

    const now = Date.now();
    if (now > record.resetTime) {
      this.requests.delete(identifier);
      return null;
    }

    return {
      count: record.count,
      remaining: Math.max(0, this.config.max - record.count),
      resetTime: record.resetTime,
    };
  }
}

// Default rate limiter instance
export const defaultRateLimiter = new RateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per window
  message: 'Too many requests from this IP, please try again later.',
});

// Cleanup expired records every 5 minutes
setInterval(() => {
  defaultRateLimiter.cleanup();
}, 5 * 60 * 1000);

export default RateLimiter;