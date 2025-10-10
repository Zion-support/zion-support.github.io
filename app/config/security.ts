/**
 * Security Configuration
 * Defines security headers and policies for the application
 */export const securityHeaders = {
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
      upgradeInsecureRequests: true,}
    },
  },
  headers: {
    'X-DNS-Prefetch-Control': 'on',
    'Strict-Transport-Security': 'max-age=63072000 includeSubDomains preload',
    'X-XSS-Protection': '1; mode;

export default {
  securityHeaders,
  rateLimitConfig,
  corsConfig,
  sessionConfig,
  validationPatterns,
  sanitizeInput,
  validateEmail,
  validateUrl,
  generateSecureToken,}
}
