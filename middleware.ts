// Vite-compatible middleware for security headers
// This file provides security utilities for the Vite/React application

export interface SecurityHeaders {
  'X-Frame-Options': string;
  'X-Content-Type-Options': string;
  'X-XSS-Protection': string;
  'Referrer-Policy': string;
  'Permissions-Policy': string;
  'Strict-Transport-Security': string;
  'Content-Security-Policy': string;
}

export const securityHeaders: SecurityHeaders = {
  // Prevent clickjacking attacks
  'X-Frame-Options': 'SAMEORIGIN',
  
  // Prevent MIME type sniffing
  'X-Content-Type-Options': 'nosniff',
  
  // Enable XSS protection
  'X-XSS-Protection': '1; mode=block',
  
  // Referrer policy
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  
  // Permissions policy
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  
  // HSTS (HTTP Strict Transport Security)
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  
  // Content Security Policy
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https: blob:",
    "font-src 'self' data:",
    "connect-src 'self' https://www.google-analytics.com https://analytics.google.com",
    "frame-ancestors 'self'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join('; '),
};

/**
 * Apply security headers to a response
 * This is a utility function for server-side rendering or API responses
 */
export function applySecurityHeaders(headers: Headers): void {
  Object.entries(securityHeaders).forEach(([key, value]) => {
    headers.set(key, value);
  });
}

/**
 * Get CORS headers for API routes
 */
export function getCorsHeaders(): Record<string, string> {
  return {
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': process.env.ALLOWED_ORIGIN || '*',
    'Access-Control-Allow-Methods': 'GET,DELETE,PATCH,POST,PUT,OPTIONS',
    'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization',
  };
}