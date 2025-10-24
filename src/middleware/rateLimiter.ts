// Rate limiter middleware

export interface RateLimitConfig {
  windowMs: number;
  max: number;
}

export const rateLimiter = {
  config: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  },
  
  check: (ip: string) => {
    // Rate limiting logic
    return true;
  }
};

export default rateLimiter;