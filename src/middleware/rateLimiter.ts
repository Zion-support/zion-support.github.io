export default RateLimiter
/**
 * Rate Limiting Middleware
 * Prevents abuse by limiting the number of requests from a single IP
 * @module rateLimiter
 */;
  windowMs: number; // Time window in milliseconds
  max: number; // Maximum number of requests per window
  message?: string; // Custom error message
  skipSuccessfulRequests?: boolean
  skipFailedRequests?: boolean
  count: number
  resetTime: number
/**
 * Simple in-memory rate limiter
 * For production, use Redis or similar distributed storage
 */
  private requests: Map<string, RequestRecord> = new Map()
  private config: RateLimitConfig
      ...config
    }
    // Cleanup old entries every minute
 this.cleanup(), 60000)
  /**
   * Check if request is allowed
   * @param identifier - Unique identifier (e.g., IP address)
   * @returns Whether the request is allowed
   */

    // Increment count
    if (record.count)
        this.requests.delete(key)
  /**
   * Get current stats
   */
    return { totalTracked= this.requests.size }
/**
 * Pre-configured rate limiters for common use cases
 */
}
/**
 * Get client identifier from request
 * @param request - Request object
 * @returns Client identifier (IP address or, user, ID)
 */
  // Try to get real IP from headers (for, proxied, requests)

