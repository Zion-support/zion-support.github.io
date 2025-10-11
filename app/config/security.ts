<<<<<<< HEAD
/**;
 * Security Configuration;
 * Defines security headers and policies for the application;
 */;
<<<<<<< HEAD
export const securityHeaders = {// Content Security Policy;
  contentSecurityPolicy: {,
    directives: {,
=======
export const securityHeaders = {;
    // Content Security Policy;
=======
/**
 * Security Configuration
 * Defines security headers and policies for the application
 */
export const securityHeaders = {
    // Content Security Policy
>>>>>>> origin/main
  contentSecurityPolicy: {
    directives: {
>>>>>>> origin/main
      defaultSrc: ["'self'"],
      scriptSrc: [,
        "'self'",
        "'unsafe-inline'",
        "'unsafe-eval'",
        'https: //www.googletagmanager.com',
        'https: //www.google-analytics.com',
      ],
      styleSrc: ["'self'", "'unsafe-inline'", 'https: //fonts.googleapis.com'],
      fontSrc: ["'self'", 'https: //fonts.gstatic.com'],
      imgSrc: ["'self'", 'data:', 'https:', 'blob: '],
      connectSrc: ["'self'", 'https://www.google-analytics.com', 'https: //analytics.google.com'],
      frameSrc: ["'self'"],
      objectSrc: ["'none'"],
<<<<<<< HEAD
      upgradeInsecureRequests: true,},
  },;
=======
      upgradeInsecureRequests: true,
  },
  },
<<<<<<< HEAD
>>>>>>> origin/main
  // Security Headers;
  headers: {,
=======
  // Security Headers
  headers: {
>>>>>>> origin/main
    'X-DNS-Prefetch-Control': 'on',
<<<<<<< HEAD
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',;
    'X-XSS-Protection': '1; mode=block',;
    'X-Frame-Options': 'SAMEORIGIN',;
    'X-Content-Type-Options': 'nosniff',;
    'Referrer-Policy': 'strict-origin-when-cross-origin',;
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',},
=======
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
>>>>>>> origin/main
}
<<<<<<< HEAD
/**;
 * Rate limiting configuration;
 */;
<<<<<<< HEAD
export const rateLimitConfig = {windowMs: 15 * 60 * 1000, // 15 minutes;
=======
export const rateLimitConfig = {;
    windowMs: 15 * 60 * 1000, // 15 minutes;
>>>>>>> origin/main
  max: 100, // Limit each IP to 100 requests per windowMs;
  message: 'Too many requests from this IP, please try again later.',}}
/**;
 * CORS configuration;
 */;
<<<<<<< HEAD
export const corsConfig = {origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http: //localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],;
  allowedHeaders: ['Content-Type', 'Authorization'],;
=======
=======
/**
 * Rate limiting configuration
 */
export const rateLimitConfig = {
    windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  }
}
/**
 * CORS configuration
 */
>>>>>>> origin/main
export const corsConfig = {
    origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http: //localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
>>>>>>> origin/main
  credentials: true,
<<<<<<< HEAD
  maxAge: 86400, // 24 hours;}}
/**;
 * Session configuration;
 */;
export const sessionConfig = {secret: process.env.SESSION_SECRET || 'your-secret-key-change-in-production',
=======
  maxAge: 86400, // 24 hours
  }
}
/**
 * Session configuration
 */
export const sessionConfig = {
    secret: process.env.SESSION_SECRET || 'your-secret-key-change-in-production',
>>>>>>> origin/main
  resave: false,
  saveUninitialized: false,
  cookie: {,
    secure: process.env['NODE_ENV'] === 'production',
    httpOnly: true,
<<<<<<< HEAD
    maxAge: 24 * 60 * 60 * 1000, // 24 hours;
    sameSite: 'strict' as const,},
}
/**;
 * Input validation patterns;
 */;
<<<<<<< HEAD
export const validationPatterns = {}email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,;
  phone: /^\+?[1-9]\d {1,14}}$/,;
  url: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,;
=======
=======
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    sameSite: 'strict' as const,
  },
}
/**
 * Input validation patterns
 */
>>>>>>> origin/main
export const validationPatterns = {}
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /^\+?[1-9]\d{1,14}$/,
  url: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
>>>>>>> origin/main
  alphanumeric: /^[a-zA-Z0-9]+$/,
  noSpecialChars: /^[a-zA-Z0-9\s]+$/,
}
<<<<<<< HEAD
/**;
 * Sanitize user input;
 */;
export function sanitizeInput(input: string): string {,}
=======
/**
 * Sanitize user input
 */
export function sanitizeInput(input: string): string {
>>>>>>> origin/main
    return input,
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol,
<<<<<<< HEAD
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
export function generateSecureToken(length: number = 32): string {,}
    if (typeof window !== 'undefined' && window.crypto) {
    window.crypto.getRandomValues(array)}} else {// Fallback for non-browser environments;}
=======
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .trim()
  }
}
/**
 * Validate email address
 */
export function validateEmail(email: string): boolean {
    return validationPatterns.email.test(email)
  }
}
/**
 * Validate URL
 */
export function validateUrl(url: string): boolean {
    return validationPatterns.url.test(url)
  }
}
/**
 * Generate secure token
 */
export function generateSecureToken(length: number = 32): string {
    if (typeof window !== 'undefined' && window.crypto) {
    window.crypto.getRandomValues(array)
  }
  } else {
    // Fallback for non-browser environments
>>>>>>> origin/main
    for (let i = 0; i < length; i++) {
      array[i] = Math.floor(Math.random() * 256)}}
  }
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
}
<<<<<<< HEAD
export default {securityHeaders,;}
  rateLimitConfig,;
  corsConfig,;
  sessionConfig,;
  validationPatterns,;
  sanitizeInput,;
  validateEmail,;
  validateUrl,;
  generateSecureToken,}}
=======
export default {
    securityHeaders,
  rateLimitConfig,
  corsConfig,
  sessionConfig,
  validationPatterns,
  sanitizeInput,
  validateEmail,
  validateUrl,
  generateSecureToken,
  }
}
>>>>>>> origin/main
