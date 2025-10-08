/**
 * Security Headers Configuration
 * Implements best practices for web application security
 */

export interface SecurityHeadersConfig {
  enableCSP?: boolean;
  enableHSTS?: boolean;
  enableXFrameOptions?: boolean;
  enableContentTypeOptions?: boolean;
  enableReferrerPolicy?: boolean;
  enablePermissionsPolicy?: boolean;
}

/**
 * Content Security Policy (CSP) configuration
 */
export const getCSPHeader = () => {
  const cspDirectives = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://www.googletagmanager.com https://cdn.jsdelivr.net",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src 'self' data: https: http:",
    "font-src 'self' data: https://fonts.gstatic.com",
    "connect-src 'self' https://api.github.com https://www.google-analytics.com",
    "frame-ancestors 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-src 'self' https://www.youtube.com",
    "object-src 'none'",
    "upgrade-insecure-requests",
  ];
  
  return cspDirectives.join('; ');
};

/**
 * Get all security headers as an object
 */
export const getSecurityHeaders = (config: SecurityHeadersConfig = {}): Record<string, string> => {
  const {
    enableCSP = true,
    enableHSTS = true,
    enableXFrameOptions = true,
    enableContentTypeOptions = true,
    enableReferrerPolicy = true,
    enablePermissionsPolicy = true,
  } = config;

  const headers: Record<string, string> = {};

  // Content Security Policy
  if (enableCSP) {
    headers['Content-Security-Policy'] = getCSPHeader();
  }

  // HTTP Strict Transport Security (HSTS)
  if (enableHSTS) {
    headers['Strict-Transport-Security'] = 'max-age=31536000; includeSubDomains; preload';
  }

  // X-Frame-Options (prevents clickjacking)
  if (enableXFrameOptions) {
    headers['X-Frame-Options'] = 'SAMEORIGIN';
  }

  // X-Content-Type-Options (prevents MIME sniffing)
  if (enableContentTypeOptions) {
    headers['X-Content-Type-Options'] = 'nosniff';
  }

  // Referrer-Policy
  if (enableReferrerPolicy) {
    headers['Referrer-Policy'] = 'strict-origin-when-cross-origin';
  }

  // Permissions-Policy (formerly Feature-Policy)
  if (enablePermissionsPolicy) {
    const permissions = [
      'camera=()',
      'microphone=()',
      'geolocation=()',
      'interest-cohort=()',
      'payment=()',
      'usb=()',
    ];
    headers['Permissions-Policy'] = permissions.join(', ');
  }

  // Additional security headers
  headers['X-DNS-Prefetch-Control'] = 'on';
  headers['X-Download-Options'] = 'noopen';
  headers['X-Permitted-Cross-Domain-Policies'] = 'none';
  headers['X-XSS-Protection'] = '1; mode=block';

  return headers;
};

/**
 * Apply security headers to a Response object
 */
export const applySecurityHeaders = (response: Response, config?: SecurityHeadersConfig): Response => {
  const headers = getSecurityHeaders(config);
  
  Object.entries(headers).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
  
  return response;
};

/**
 * Get security headers as middleware format
 */
export const getSecurityHeadersMiddleware = (config?: SecurityHeadersConfig) => {
  const headers = getSecurityHeaders(config);
  
  return Object.entries(headers).map(([key, value]) => ({
    key,
    value,
  }));
};

/**
 * CORS configuration for API endpoints
 */
export const getCORSHeaders = (origin: string = '*') => ({
  'Access-Control-Allow-Origin': origin,
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Max-Age': '86400',
});

/**
 * Rate limiting configuration
 */
export interface RateLimitConfig {
  windowMs?: number;
  maxRequests?: number;
}

export const getRateLimitConfig = (config: RateLimitConfig = {}) => ({
  windowMs: config.windowMs || 15 * 60 * 1000, // 15 minutes
  maxRequests: config.maxRequests || 100,
});

/**
 * Security utilities for input validation
 */
export const sanitizeInput = (input: string): string => {
  // Remove potentially dangerous characters
  return input
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .trim();
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidURL = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};