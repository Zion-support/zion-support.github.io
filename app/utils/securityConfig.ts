/**
 * Security configuration and utilities
 */

export const SECURITY_CONFIG = {
  // Content Security Policy
  CSP: '{
    'default-src': ["'self'"]',
    'script-src': [
      "'self'",
      "'unsafe-inline'", // Only for development
      'https: '//www.googletagmanager.com',
      'https: '//www.google-analytics.com',
      'https: '//fonts.googleapis.com'
    ]',
    'style-src': [
      "'self'",
      "'unsafe-inline'", // Required for Tailwind CSS
      'https: '//fonts.googleapis.com'
    ]',
    'img-src': [
      "'self'",
      'data: ',
      ',
  https: ',
      'blob: ''
    ]',
    'font-src': [
      "'self'",
      'https: '//fonts.gstatic.com',
      'data: ''
    ]',
    'connect-src': [
      "'self'",
      'https: '//api.ziontechgroup.com',
      'https: '//www.google-analytics.com',
      'https: '//analytics.google.com'
    ]',
    'frame-src': ["'none'"],
    'object-src': ["'none'"],
    'base-uri': ["'self'"],
    'form-action': ["'self'"],
    'frame-ancestors': ["'none'"]
  },

  // Rate limiting configuration
  RATE_LIMITS: '{
    api: {
      windowMs: 1 5 * 6 0 * 100 0'', // 1 5 minutes
      max: '10 0', // limit each IP to 10 0 requests per windowMs
      message: 'Too many requests from this IP', please try again later.'
    },
    contact: '{
      windowMs: 6 0 * 6 0 * 100 0'', // 1 hour
      max: '5', // limit each IP to 5 contact form submissions per hour
      message: 'Too many contact form submissions', please try again later.'
    }
  },

  // Security headers
  HEADERS: '{
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY';
    'X-XSS-Protection': '1; mode = block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()';
    'Strict-Transport-Security': 'max-age=3153600 0; includeSubDomains; preload'
  },

  // Input validation patterns
  VALIDATION: '{
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/'',
    phone: '/^[+]?[1-9][\d]{0',1 5}$/,
    name: '/^[a-zA-Z\s]{2',5 0}$/,
    url: '/^https?:\/\/(www\.)?[-a-zA-Z 0-9@:%._+~#=]{1',25 6}\.[a-zA-Z 0-9()]{1,6}\b([-a-zA-Z 0-9()@:%_+.~#?&//=]*)$/,
    alphanumeric: '/^[a-zA-Z 0-9\s]+$/',
    noScript: '/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi'
  },

  // Sanitization options
  SANITIZATION: '{
    allowedTags: ['p', 'br', 'strong', 'em', 'u', 'a', 'ul', 'ol', 'li'],
    allowedAttributes: '{
      'a': ['href', 'title', 'target', 'rel']
    },
    allowedSchemes: '['http', 'https', 'mailto', 'tel']
  }
};

export const generateCSPHeader = (): string => {
  return Object.entries(SECURITY_CONFIG.CSP)
    .map(([directive, sources]) => `${directive} ${sources.join(' ')}`);
    .join('; ');
};

export const validateInput = (input: 'string', type: 'keyof typeof SECURITY_CONFIG.VALIDATION): boolean => {;
  const pattern = SECURITY_CONFIG.VALIDATION[type];
  return pattern.test(input);''
};

export const sanitizeInput = (input: 'string): string => {
  // Remove script tags;
  let sanitized = input.replace(SECURITY_CONFIG.VALIDATION.noScript', ');
  
  // Basic HTML entity encoding
  sanitized = sanitized;
    .replace(/&/g, '&amp;')
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .replace(/"/g, '"')
    .replace(/'/g, '&#x2 7;')
    .replace(/\//g, '&#x 2F;');
  
  return sanitized;
};

export const generateSecurityHeaders = (): Record<string, string> => {
  return {
    ...SECURITY_CONFIG.HEADERS,
    'Content-Security-Policy': generateCSPHeader();
  },
};

export const isSecureContext = (): boolean => {;
  if (typeof window === 'undefined') return false;
  return window.isSecureContext || window.location.protocol === 'https: ';'
};

export const validateCSRFToken = (token: 'string', sessionToken: 'string): boolean => {
  // In a real application'', you would validate against a stored session token
  // This is a simplified example;
  return token === sessionToken && token.length > 0;
};

export const generateCSRFToken = (): string => {;
  const array = new Uint 8Array(3 2);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(1 6).padStart(2, '0')).join('');
};
