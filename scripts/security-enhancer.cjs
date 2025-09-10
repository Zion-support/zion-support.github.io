const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SecurityEnhancer {
  constructor() {
    this.projectRoot = process.cwd();
    this.vulnerabilities = [];
    this.recommendations = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  async runSecurityAudit() {
    this.log('🔍 Running security audit...');
    try {
      const securityHeadersScript = `
// Security headers configuration
export const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  },
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'self';"
  }
];

export const getSecurityHeaders = () => securityHeaders;
`;

      fs.writeFileSync(path.join(this.projectRoot, 'utils/security-headers.js'), securityHeadersScript);
      this.log('✅ Security headers added');
      this.securityImprovements.push('Security headers');
    } catch (error) {
      this.errors.push(`Security headers failed: ${error.message}`);
    }
  }

  // Add input validation
  async addInputValidation() {
    this.log('🛡️ Adding input validation...');
    try {
      const validationScript = `
// Input validation utilities
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

export const validateUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const sanitizeHtml = (html) => {
  if (typeof html !== 'string') return html;
  
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '');
};
`;

      fs.writeFileSync(path.join(this.projectRoot, 'utils/input-validation.js'), validationScript);
      this.log('✅ Input validation added');
      this.securityImprovements.push('Input validation');
    } catch (error) {
      this.errors.push(`Input validation failed: ${error.message}`);
    }
  }

  // Add rate limiting
  async addRateLimiting() {
    this.log('⏱️ Adding rate limiting...');
    try {
      const rateLimitScript = `
// Rate limiting utilities
class RateLimiter {
  constructor(maxRequests = 100, windowMs = 15 * 60 * 1000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
    this.requests = new Map();
  }

  isAllowed(identifier) {
    const now = Date.now();
    const windowStart = now - this.windowMs;
    
    if (!this.requests.has(identifier)) {
      this.requests.set(identifier, []);
    }
    
    const userRequests = this.requests.get(identifier);
    
    // Remove old requests outside the window
    const validRequests = userRequests.filter(time => time > windowStart);
    this.requests.set(identifier, validRequests);
    
    if (validRequests.length >= this.maxRequests) {
      return false;
    }
    
    validRequests.push(now);
    return true;
  }
}

export const rateLimiter = new RateLimiter();
export { RateLimiter };
`;

      fs.writeFileSync(path.join(this.projectRoot, 'utils/rate-limiting.js'), rateLimitScript);
      this.log('✅ Rate limiting added');
      this.securityImprovements.push('Rate limiting');
    } catch (error) {
      this.errors.push(`Rate limiting failed: ${error.message}`);
    }
  }

  // Add CSRF protection
  async addCSRFProtection() {
    this.log('🔐 Adding CSRF protection...');
    try {
      const csrfScript = `
// CSRF protection utilities
export const generateCSRFToken = () => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

export const validateCSRFToken = (token, sessionToken) => {
  return token && sessionToken && token === sessionToken;
};

export const getCSRFTokenFromCookie = (cookieHeader) => {
  if (!cookieHeader) return null;
  
  const cookies = cookieHeader.split(';').reduce((acc, cookie) => {
    const [key, value] = cookie.trim().split('=');
    acc[key] = value;
    return acc;
  }, {});
  
  return cookies.csrfToken;
};
`;

      fs.writeFileSync(path.join(this.projectRoot, 'utils/csrf-protection.js'), csrfScript);
      this.log('✅ CSRF protection added');
      this.securityImprovements.push('CSRF protection');
    } catch (error) {
      this.errors.push(`CSRF protection failed: ${error.message}`);
    }
  }

  // Add security middleware
  async addSecurityMiddleware() {
    this.log('🛡️ Adding security middleware...');
    try {
      const middlewareScript = `
// Security middleware
import { NextResponse } from 'next/server';
import { getSecurityHeaders } from '../utils/security-headers';

export function securityMiddleware(request) {
  const response = NextResponse.next();
  
  // Add security headers
  const headers = getSecurityHeaders();
  headers.forEach(({ key, value }) => {
    response.headers.set(key, value);
  });
  
  // Add HSTS header for HTTPS
  if (request.nextUrl.protocol === 'https:') {
    response.headers.set(
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains; preload'
    );
  }
  
  return response;