/**
 * Security Configuration
 * Content Security Policy, Security Headers, and Security Best Practices
 */

export interface SecurityHeaders {
  'Content-Security-Policy'?: string;
  'X-Content-Type-Options'?: string;
  'X-Frame-Options'?: string;
  'X-XSS-Protection'?: string;
  'Referrer-Policy'?: string;
  'Permissions-Policy'?: string;
  'Strict-Transport-Security'?: string;
}

/**
 * Content Security Policy Configuration
 */
export const CSP_DIRECTIVES = {
  // Default fallback for fetch directives
  'default-src': ["'self'"],

  // Scripts - Allow self and trusted CDNs
  'script-src': [
    "'self'",
    "'unsafe-inline'", // Required for inline scripts (minimize usage)
    "'unsafe-eval'", // Required for some frameworks (minimize usage)
    'https://www.googletagmanager.com',
    'https://www.google-analytics.com',
    'https://cdn.jsdelivr.net',
  ],

  // Styles - Allow self and trusted sources
  'style-src': [
    "'self'",
    "'unsafe-inline'", // Required for styled-components/emotion
    'https://fonts.googleapis.com',
  ],

  // Images - Allow self, data URIs, and trusted CDNs
  'img-src': [
    "'self'",
    'data:',
    'blob:',
    'https:',
    'https://www.google-analytics.com',
  ],

  // Fonts - Allow self and Google Fonts
  'font-src': ["'self'", 'data:', 'https://fonts.gstatic.com'],

  // Media - Allow self
  'media-src': ["'self'"],

  // Objects - Disallow plugins
  'object-src': ["'none'"],

  // Connect - API endpoints and analytics
  'connect-src': [
    "'self'",
    'https://www.google-analytics.com',
    'https://api.github.com',
  ],

  // Frames - Control what can be framed
  'frame-src': ["'self'"],

  // Workers - Allow self
  'worker-src': ["'self'", 'blob:'],

  // Forms - Restrict form submission targets
  'form-action': ["'self'"],

  // Base URI - Restrict base tag
  'base-uri': ["'self'"],

  // Upgrade insecure requests
  'upgrade-insecure-requests': [],

  // Block all mixed content
  'block-all-mixed-content': [],
};

/**
 * Generate CSP string from directives
 */
export function generateCSP(
  directives: typeof CSP_DIRECTIVES = CSP_DIRECTIVES
): string {
  return Object.entries(directives)
    .map(([key, values]) => {
      if (values.length === 0) return key;
      return `${key} ${values.join(' ')}`;
    })
    .join('; ');
}

/**
 * Security Headers Configuration
 */
export const SECURITY_HEADERS: SecurityHeaders = {
  // Content Security Policy
  'Content-Security-Policy': generateCSP(),

  // Prevent MIME type sniffing
  'X-Content-Type-Options': 'nosniff',

  // Prevent clickjacking
  'X-Frame-Options': 'SAMEORIGIN',

  // XSS Protection (legacy, but still useful)
  'X-XSS-Protection': '1; mode=block',

  // Referrer Policy - Control referrer information
  'Referrer-Policy': 'strict-origin-when-cross-origin',

  // Permissions Policy - Control browser features
  'Permissions-Policy':
    'geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()',

  // HSTS - Force HTTPS (only add if using HTTPS)
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
};

/**
 * Sanitize HTML to prevent XSS
 */
export function sanitizeHTML(html: string): string {
  // Basic HTML sanitization - for production, use DOMPurify
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/on\w+="[^"]*"/gi, '')
    .replace(/on\w+='[^']*'/gi, '')
    .replace(/javascript:/gi, '');
}

/**
 * Validate and sanitize URL
 */
export function sanitizeURL(url: string): string {
  try {
    const parsed = new URL(url);

    // Only allow http and https protocols
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return '';
    }

    return parsed.toString();
  } catch {
    return '';
  }
}

/**
 * Generate secure random string
 */
export function generateSecureToken(length: number = 32): string {
  if (typeof window !== 'undefined' && window.crypto) {
//     const array = new Uint8Array(length);
    window.crypto.getRandomValues(array);
    return Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join(
      ''
    );
  }

  // Fallback for environments without crypto API
  return Array.from({ length }, () =>
    Math.floor(Math.random() * 16).toString(16)
  ).join('');
}

/**
 * Hash sensitive data (client-side hashing for non-critical use)
 */
export async function hashData(data: string): Promise<string> {
  if (typeof window !== 'undefined' && window.crypto && window.crypto.subtle) {
    const encoder = new TextEncoder();
//     const dataBuffer = encoder.encode(data);
//     const hashBuffer = await window.crypto.subtle.digest('SHA-256', dataBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((byte) => byte.toString(16).padStart(2, '0')).join('');
  }

  // Fallback: Basic hash (not cryptographically secure)
  let hash = 0;
  for (let i = 0; i < data.length; i++) {
//     const char = data.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return hash.toString(16);
}

/**
 * Validate input against common injection patterns
 */
export function validateInput(
  input: string,
  maxLength: number = 1000
): { valid: boolean; reason?: string } {
  // Check length
  if (input.length > maxLength) {
    return { valid: false, reason: 'Input too long' };
  }

  // Check for SQL injection patterns
  const sqlPatterns = [
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE)\b)/gi,
    /(;|--|\/\*|\*\/|xp_|sp_)/gi,
  ];

  for (const pattern of sqlPatterns) {
    if (pattern.test(input)) {
      return { valid: false, reason: 'Potentially malicious pattern detected' };
    }
  }

  // Check for XSS patterns
  const xssPatterns = [
    /<script[^>]*>.*?<\/script>/gi,
    /<iframe[^>]*>.*?<\/iframe>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
  ];

  for (const pattern of xssPatterns) {
    if (pattern.test(input)) {
      return { valid: false, reason: 'Potentially malicious script detected' };
    }
  }

  return { valid: true };
}

/**
 * Rate limiting implementation (client-side)
 */
export class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  private limit: number;
  private windowMs: number;

  constructor(limit: number = 10, windowMs: number = 60000) {
    this.limit = limit;
    this.windowMs = windowMs;
  }

  /**
   * Check if request should be allowed
   */
  allowRequest(identifier: string): boolean {
    const now = Date.now();
    const requests = this.requests.get(identifier) || [];

    // Remove old requests outside the window
    const recentRequests = requests.filter(
      (timestamp) => now - timestamp < this.windowMs
    );

    if (recentRequests.length >= this.limit) {
      return false;
    }

    recentRequests.push(now);
    this.requests.set(identifier, recentRequests);

    return true;
  }

  /**
   * Get remaining requests
   */
  getRemainingRequests(identifier: string): number {
    const requests = this.requests.get(identifier) || [];
    const now = Date.now();
    const recentRequests = requests.filter(
      (timestamp) => now - timestamp < this.windowMs
    );

    return Math.max(0, this.limit - recentRequests.length);
  }

  /**
   * Clear rate limit for identifier
   */
  clear(identifier: string): void {
    this.requests.delete(identifier);
  }

  /**
   * Clear all rate limits
   */
  clearAll(): void {
    this.requests.clear();
  }
}

/**
 * CSRF Token Management
 */
export class CSRFTokenManager {
  private static TOKEN_KEY = '__csrf_token__';

  /**
   * Generate and store CSRF token
   */
  static generateToken(): string {
//     const token = generateSecureToken();

    if (typeof window !== 'undefined') {
      sessionStorage.setItem(this.TOKEN_KEY, token);
    }

    return token;
  }

  /**
   * Get stored CSRF token
   */
  static getToken(): string | null {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem(this.TOKEN_KEY);
    }
    return null;
  }

  /**
   * Validate CSRF token
   */
  static validateToken(token: string): boolean {
//     const storedToken = this.getToken();
    return storedToken !== null && storedToken === token;
  }

  /**
   * Clear CSRF token
   */
  static clearToken(): void {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem(this.TOKEN_KEY);
    }
  }
}

export default {
  SECURITY_HEADERS,
  generateCSP,
  sanitizeHTML,
  sanitizeURL,
  generateSecureToken,
  hashData,
  validateInput,
  RateLimiter,
  CSRFTokenManager,
};