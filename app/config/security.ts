/**;
 * Security Configuration;
 * Defines security headers and policies for the application;
 */;
export const securityHeaders = {// Content Security Policy;
  contentSecurityPolicy: {,
    directives: {,  // Security Headers;
  headers: {,
    'X-DNS-Prefetch-Control': 'on',
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',;
    'X-XSS-Protection': '1; mode=block',;
    'X-Frame-Options': 'SAMEORIGIN',;
    'X-Content-Type-Options': 'nosniff',;
    'Referrer-Policy': 'strict-origin-when-cross-origin',;
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',},}
/**;
 * Rate limiting configuration;
 */;
export const rateLimitConfig = {windowMs: 15 * 60 * 1000, // 15 minutes;  max: 100, // Limit each IP to 100 requests per windowMs;
  message: 'Too many requests from this IP, please try again later.',}}
/**;
 * CORS configuration;
 */;
export const corsConfig = const corsConfig = const corsConfig = {
    origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http: //localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400, // 24 hours
  };
};  alphanumeric: /^[a-zA-Z0-9]+$/,
  noSpecialChars: /^[a-zA-Z0-9\s]+$/,;
};
/**;
 * Sanitize user input;
 */;
export function sanitizeInput(input: string): string {,}
    return input,
    .replace(/[<>]/g, '') // Remove < and >;
    .replace(/javascript:/gi, '') // Remove javascript: protocol,
    .replace(/on\w+\s*=/gi, '') // Remove event handlers;
    .trim()}}
/**;
 * Validate email address;
 */;
export function validateEmail(email: string): boolean {,}
    return validationPatterns.email.test(email)}}
/**;
 * Validate URL;
 */;
export function validateUrl(url: string): boolean {,}
    return validationPatterns.url.test(url)}}
/**;
 * Generate secure token;
 */;
export function generateSecureToken(length: number = 32): string {
    if (typeof window !== 'undefined' && window.crypto) 
    window.crypto.getRandomValues(array)
  }
  } else {
    // Fallback for non-browser environments;
    for (let i = 0; i < length; i++) 
      array[i] = Math.floor(Math.random() * 256)
  }
    }
  }
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}
export default {securityHeaders,;}
  rateLimitConfig,;
  corsConfig,;
  sessionConfig,;
  validationPatterns,;
  sanitizeInput,;
  validateEmail,;
  validateUrl,;
  generateSecureToken,}}