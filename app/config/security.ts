/**;
 * Security Configuration;
 * Defines security headers and policies for the application;
 */;
export const securityHeaders = {// Content Security Policy;
  contentSecurityPolicy: {,
    directives: {,
      upgradeInsecureRequests: true,},
  },;
  // Security Headers;
  headers: {,
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',;
    'X-XSS-Protection': '1; mode=block',;
    'X-Frame-Options': 'SAMEORIGIN',;
    'X-Content-Type-Options': 'nosniff',;
    'Referrer-Policy': 'strict-origin-when-cross-origin',;
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',},
/**;
 * Rate limiting configuration;
 */;
export const rateLimitConfig = {windowMs: 15 * 60 * 1000, // 15 minutes;
export const corsConfig = {origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http: //localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],;
  allowedHeaders: ['Content-Type', 'Authorization'],;
  maxAge: 86400, // 24 hours;}}
/**;
 * Session configuration;
 */;
export const sessionConfig = {secret: process.env.SESSION_SECRET || 'your-secret-key-change-in-production',
    maxAge: 24 * 60 * 60 * 1000, // 24 hours;
    sameSite: 'strict' as const,},
}
/**;
 * Input validation patterns;
 */;
export const validationPatterns = {}email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,;
  phone: /^\+?[1-9]\d {1,14}}$/,;
  url: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,;
/**;
 * Sanitize user input;
 */;
export function sanitizeInput(input: string): string {,}
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
export default {securityHeaders,;}
  rateLimitConfig,;
  corsConfig,;
  sessionConfig,;
  validationPatterns,;
  sanitizeInput,;
  validateEmail,;
  validateUrl,;
  generateSecureToken,}}
