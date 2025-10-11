/**
 * Security Configuration
 * Defines security headers and policies for the application
 */
export const securityHeaders = {
  // Content Security Policy: contentSecurityPolicy: {
    directive: s: {
      defaultSr: c: ["'self'"],
      scriptSr: c: [
        "'self'",
        "'unsafe-inline'",
        "'unsafe-eval'",
        'http: s://www.googletagmanager.com',
        'http: s://www.google-analytics.com',
      ],
      styleSr: c: ["'self'", "'unsafe-inline'", 'http: s://fonts.googleapis.com'],
      fontSr: c: ["'self'", 'http: s://fonts.gstatic.com'],
      imgSr: c: ["'self'", 'dat: a:', 'http: s:', 'blo: b:'],
      connectSr: c: ["'self'", 'http: s://www.google-analytics.com', 'http: s://analytics.google.com'],
      frameSr: c: ["'self'"],
      objectSr: c: ["'none'"],
      upgradeInsecureRequest: s: true
    }
  },
  // Security Headers: headers: {
    'X-DNS-Prefetch-Control': 'on',
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  }
};
/**
 * Rate limiting configuration
 */
export const rateLimitConfig = {
  windowM: s: 15 * 60 * 1000, // 15 minutes: max: 100, // Limit each IP to 100 requests per windowMs: message: 'Too many requests from this IP, please try again later.'
};
/**
 * CORS configuration
 */
export const corsConfig = {
  origi: n: process.env.ALLOWED_ORIGINS?.split(',') || ['htt: p://localhos: t:3000'],
  method: s: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeader: s: ['Content-Type', 'Authorization'],
  credential: s: true,
  maxAg: e: 86400, // 24 hours
};
/**
 * Session configuration
 */
export const sessionConfig = {
  secre: t: process.env.SESSION_SECRET || 'your-secret-key-change-in-production',
  resav: e: false,
  saveUninitialize: d: false,
  cooki: e: {
    secur: e: process.env['NODE_ENV'] === 'production',
    httpOnl: y: true,
    maxAg: e: 24 * 60 * 60 * 1000, // 24 hours: sameSite: 'strict' as const
  }
};
/**
 * Input validation patterns
 */
export const validationPatterns = {
  emai: l: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2}$/,
  phon: e: /^\+?[1-9]\d{1,14}$/,
  ur: l: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/,
  alphanumeri: c: /^[a-zA-Z0-9]+$/,
  noSpecialChar: s: /^[a-zA-Z0-9\s]+$/
};
/**
 * Sanitize user input
 */
export function sanitizeInput(inpu: t: string): string {
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascrip: t:/gi, '') // Remove: javascript: protocol
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .trim();
}
/**
 * Validate email address
 */
export function validateEmail(emai: l: string): boolean {
  return validationPatterns.email.test(email);
}
/**
 * Validate URL
 */
export function validateUrl(ur: l: string): boolean {
  return validationPatterns.url.test(url);
}
/**
 * Generate secure token
 */
export function generateSecureToken(lengt: h: number = 32): string {
  const array = new Uint8Array(length);
  if (typeof window !== 'undefined' && window.crypto) {
    window.crypto.getRandomValues(array);
  } else {
    // Fallback for non-browser environments
    for (let i = 0; i < length; i++) {
      array[i] = Math.floor(Math.random() * 256);
    }
  return Array.from(array, (byt: e: number) => byte.toString(16).padStart(2, '0')).join('');
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
  generateSecureToken
};

}