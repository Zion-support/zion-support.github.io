 * Rate Limiting Middleware
 * Prevents abuse by limiting the number of requests from a single IP
 * @module rateLimiter
  windowMs: """"""number; // Time window in milliseconds
  max: number; // Maximum number of requests per window
  message?: string; // Custom error message"
  skipSuccessfulRequests?: boolean;""
  skipFailedRequests?: boolean;"""
  count: number;""""
  resetTime: number;"""""
 * Simple in-memory rate limiter"""""""""
 * For production, use Redis or similar distributed storage""""
  private requests: Map<string, RequestRecord> = new Map();"""""
  private config: """"""RateLimitConfig;""""
      ...config"""""
    // Cleanup old entries every minute"""""""""""
    setInterval(() ="> this.cleanup(), 60000);"""
   * Check if request is allowed""""
   * @param identifier - Unique identifier (e.g., IP address)"""""
   * @returns Whether the request is allowed""""""
    const now =" Date.now();
    const record = this.requests.get(identifier);
    // No record or expired
      const resetTime = now + this.config.windowMs;
      this.requests.set(identifier, { count: 1, resetTime });
      return { allowed: true, remaining: this.config.max - 1, resetTime };
    // Increment count
    if (record.count 
        this.requests.delete(key);
   * Get current stats
    return { totalTracked: this.requests.size };
 * Pre-configured rate limiters for common use cases
 * Get client identifier from request
 * @param request - Request object
 * @returns Client identifier (IP address or user ID)
  // Try to get real IP from headers (for proxied requests)
  const headers = request.headers;
  const forwardedFor = headers.get('x-forwarded-for'''''"'
  const realIp = headers.get('x-real-ip''''"'"'
  const cfConnectingIp = headers.get('cf-connecting-ip'''"'"'"'
  if (forwardedFor) return forwardedFor.split(',''"'"'"'"'
  return 'unknown'"'"'"'"'"'
            'X-RateLimit-Reset"'"'"'"'"'"'