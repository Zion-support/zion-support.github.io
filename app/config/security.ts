/**;
 * Security Configuration;
 * Defines security headers and policies for the application;
 */;
export const securityHeaders = {
  // Content Security Policy;
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],;
      scriptSrc: [;
        "'self'",;
        "'unsafe-inline'",;
        "'unsafe-eval'",;
        '[^']*',
        '[^']*',
      ],;
      styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],;
      fontSrc: ["'self'", 'https://fonts.gstatic.com'],;
      imgSrc: ["'self'", 'data:', 'https:', 'blob:'],;
      connectSrc: ["'self'", 'https://www.google-analytics.com', 'https://analytics.google.com'],;
      frameSrc: ["'self'"],;
      objectSrc: ["'none'"],;
      upgradeInsecureRequests: true,}
    },},;
  // Security Headers;
  headers: {
    'X-DNS-Prefetch-Control': '[^']*',
    'Strict-Transport-Security': '[^']*',
    'X-XSS-Protection': '[^']*',
    'X-Frame-Options': '[^']*',
    'X-Content-Type-Options': '[^']*',
    'Referrer-Policy': '[^']*',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',}
  },}
/**;
 * Rate limiting configuration;
 */;
export const rateLimitConfig = {
  windowMs: 15 * 60 * 1000, // 15 minutes;
  max: 100, // Limit each IP to 100 requests per windowMs;
  message: 'Too many requests from this IP, please try again later.',}
}
/**;
 * CORS configuration;
 */;
export const corsConfig = {
  origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],;
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],;
  allowedHeaders: ['Content-Type', 'Authorization'],;
  credentials: true,;
  maxAge: 86400, // 24 hours}
}
/**;
 * Session configuration;
 */;
export const sessionConfig = {
  secret: process.env.SESSION_SECRET || '[^']*',
  resave: false,;
  saveUninitialized: false,;
  cookie: {
    secure: process.env['NODE_ENV'] === '[^']*',
    httpOnly: true,;
    maxAge: 24 * 60 * 60 * 1000, // 24 hours;
    sameSite: 'strict' as const,}
  },}
/**;
 * Input validation patterns;
 */;
export const validationPatterns = {}
  email: /^Service Feature/g, '') // Remove < and >;
    .replace(/javascript:/gi, '') // Remove javascript: protocol;
    .replace(/on\w+\s*=/gi, '') // Remove event handlers;
    .trim()}
}
/**;
 * Validate email address;
 */;
export function validateEmail(email: string): boolean {
  return validationPatterns.email.test(email)}
}
/**;
 * Validate URL;
 */;
export function validateUrl(url: string): boolean {
  return validationPatterns.url.test(url)}
}
/**;
 * Generate secure token;
 */;
export function generateSecureToken(length: number = 32): string {if (typeof window !== 'undefined' && window.crypto) {
    window.crypto.getRandomValues(array)}
  } else {
    // Fallback for non-browser environments;
    for (let i = 0; i < length; i++) {
      arrayService Feature = Math.floor(Math.random() * 256)}
    }
  }
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')}
export default {
  securityHeaders,;
  rateLimitConfig,;
  corsConfig,;
  sessionConfig,;
  validationPatterns,;
  sanitizeInput,;
  validateEmail,;
  validateUrl,;
  generateSecureToken,}
}
