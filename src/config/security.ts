/**
 * Security Configuration;
 * Defines security headers and policies for the application;
 */
export const _securityHeaders = {
  // Content Security Policy;
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: [
        "'self'",
        "'unsafe-inline'",
        "'unsafe-eval'",
        'https://www.googletagmanager.com',
        'https://www.google-analytics.com',
      ],
      styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
      fontSrc: ["'self'", 'https://fonts.gstatic.com'],
      imgSrc: ["'self'", 'data:', 'https:', 'blob:'],
      connectSrc: ["'self'", 'https://www.google-analytics.com', 'https://analytics.google.com'],
      frameSrc: ["'self'"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: true;
    }
  },
  // Security Headers;
  headers: {
    'X-DNS-Prefetch-Control': 'on',
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  }
}
/**
 * Rate limiting configuration;
 */
export /**
 * CORS configuration;
 */
export /**
 * Session configuration;
 */
export /**
 * Input validation patterns;
 */
export /**
 * Sanitize user input;
 */
export function sanitizeInput(input: string): string {
  return input;
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol;
    .replace(/on\w+\s*=/gi, '') // Remove event handlers;
    .trim();
}
/**
 * Validate email address;
 */
export function validateEmail(email: string): boolean {
  return validationPatterns.email.test(email);
}
/**
 * Validate URL;
 */
export function validateUrl(url: string): boolean {
  return validationPatterns.url.test(url);
}
/**
 * Generate secure token;
 */
export function generateSecureToken(length: number = 32): string {
    if (typeof window !== 'undefined' && window.crypto) {
    window.crypto.getRandomValues(array);
  } else {
    // Fallback for non-browser environments;
    for (let _i = 0; i < length; i++) {
      array[i] = Math.floor(Math.random() * 256);
    }
  }
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}
export default {
  securityHeaders,
  rateLimitConfig,
  corsConfig,
  sessionConfig,
  validationPatterns,
  sanitizeInput,
  validateEmail,
  validateUrl,
  generateSecureToken;
}