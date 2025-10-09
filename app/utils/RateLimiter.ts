
/**
 * Rate Limiting Configuration
 * Implements various rate limiting strategies
 */

export interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
  message: string;
  skipSuccessfulRequests?: boolean;
  skipFailedRequests?: boolean;
}

export const rateLimitConfigs = {
  // General API rate limiting
  api: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 100,
    message: 'Too many requests from this IP, please try again later.',
  },
  
  // Contact form rate limiting
  contactForm: {
    windowMs: 60 * 60 * 1000, // 1 hour
    maxRequests: 5,
    message: 'Too many contact form submissions, please try again later.',
  },
  
  // Newsletter signup rate limiting
  newsletter: {
    windowMs: 24 * 60 * 60 * 1000, // 24 hours
    maxRequests: 3,
    message: 'Too many newsletter signups, please try again later.',
  },
  
  // Authentication rate limiting
  auth: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 5,
    message: 'Too many authentication attempts, please try again later.',
  },
  
  // File upload rate limiting
  upload: {
    windowMs: 60 * 60 * 1000, // 1 hour
    maxRequests: 10,
    message: 'Too many file uploads, please try again later.',
  }
};

export class RateLimiter {
  private static requests: Map<string, { count: number; resetTime: number }> = new Map();
  
  static isAllowed(identifier: string, config: RateLimitConfig): boolean {
    const now = Date.now();
    const key = `${identifier}:${config.windowMs}`;
    
    const requestData = this.requests.get(key);
    
    if (!requestData || now > requestData.resetTime) {
      // Reset or create new window
      this.requests.set(key, {
        count: 1,
        resetTime: now + config.windowMs
      });
      return true;
    }
    
    if (requestData.count >= config.maxRequests) {
      return false;
    }
    
    requestData.count++;
    return true;
  }
  
  static getRemainingRequests(identifier: string, config: RateLimitConfig): number {
    const now = Date.now();
    const key = `${identifier}:${config.windowMs}`;
    
    const requestData = this.requests.get(key);
    
    if (!requestData || now > requestData.resetTime) {
      return config.maxRequests;
    }
    
    return Math.max(0, config.maxRequests - requestData.count);
  }
  
  static getResetTime(identifier: string, config: RateLimitConfig): number {
    const now = Date.now();
    const key = `${identifier}:${config.windowMs}`;
    
    const requestData = this.requests.get(key);
    
    if (!requestData || now > requestData.resetTime) {
      return now + config.windowMs;
    }
    
    return requestData.resetTime;
  }
  
  static cleanup(): void {
    const now = Date.now();
    
    for (const [key, data] of this.requests.entries()) {
      if (now > data.resetTime) {
        this.requests.delete(key);
      }
    }
  }
}

// Cleanup old entries every 5 minutes
setInterval(() => {
  RateLimiter.cleanup();
}, 5 * 60 * 1000);
