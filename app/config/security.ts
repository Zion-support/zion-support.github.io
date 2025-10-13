/**
 * Security Configuration
 * Defines security headers and policies for the application
 */

export const securityHeaders = {
  // Content Security Policy
  contentSecurityPolicy: {
    directives: {
      upgradeInsecureRequests: true,
    },
  },
  // Security Headers
  headers: {
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
};

/**
 * Rate limiting configuration
 */
export const rateLimitConfig = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
};

/**
 * CORS configuration
 */
export const corsConfig = {
  origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
  credentials: true,
  optionsSuccessStatus: 200,
};

export default {
  securityHeaders,
  rateLimitConfig,
  corsConfig,
};