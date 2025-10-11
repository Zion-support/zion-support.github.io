const fs = require('fs');
const path = require('path');

console.log('🔒 Starting security enhancements...');

// 1. Create security headers configuration
const securityHeaders = `export const securityHeaders = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:; frame-ancestors 'none';",
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'X-DNS-Prefetch-Control': 'off'
};

export const applySecurityHeaders = (res) => {
  Object.entries(securityHeaders).forEach(([key, value]) => {
    res.setHeader(key, value);
  });
};`;

fs.writeFileSync('utils/securityUtils.ts', securityHeaders);
console.log('✅ Created security headers configuration');

// 2. Create input validation utilities
const inputValidation = `export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

export const validateUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const escapeHtml = (text: string): string => {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
};

export const sanitizeFormData = (data: Record<string, any>): Record<string, any> => {
  const sanitized: Record<string, any> = {};
  
  Object.entries(data).forEach(([key, value]) => {
    if (typeof value === 'string') {
      sanitized[key] = sanitizeInput(value);
    } else if (Array.isArray(value)) {
      sanitized[key] = value.map(item => 
        typeof item === 'string' ? sanitizeInput(item) : item
      );
    } else {
      sanitized[key] = value;
    }
  });
  
  return sanitized;
};`;

fs.writeFileSync('utils/inputValidation.ts', inputValidation);
console.log('✅ Created input validation utilities');

// 3. Create rate limiting utility
const rateLimiting = `interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
}

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

class RateLimiter {
  private store: RateLimitStore = {};
  private config: RateLimitConfig;

  constructor(config: RateLimitConfig) {
    this.config = config;
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const record = this.store[identifier];

    if (!record || now > record.resetTime) {
      this.store[identifier] = {
        count: 1,
        resetTime: now + this.config.windowMs
      };
      return true;
    }

    if (record.count >= this.config.maxRequests) {
      return false;
    }

    record.count++;
    return true;
  }

  getRemainingRequests(identifier: string): number {
    const record = this.store[identifier];
    if (!record) return this.config.maxRequests;
    return Math.max(0, this.config.maxRequests - record.count);
  }

  getResetTime(identifier: string): number {
    const record = this.store[identifier];
    return record ? record.resetTime : Date.now() + this.config.windowMs;
  }
}

export const createRateLimiter = (config: RateLimitConfig) => new RateLimiter(config);

export const defaultRateLimitConfig: RateLimitConfig = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 100 // 100 requests per window
};`;

fs.writeFileSync('utils/rateLimiting.ts', rateLimiting);
console.log('✅ Created rate limiting utilities');

// 4. Update package.json with security scripts
const packageJsonPath = 'package.json';
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

packageJson.scripts = {
  ...packageJson.scripts,
  'security:audit': 'npm audit --audit-level=moderate',
  'security:fix': 'npm audit fix',
  'security:check': 'npm audit && npm audit --audit-level moderate'
};

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('✅ Updated package.json with security scripts');

// 5. Create security middleware
const securityMiddleware = `import { Request, Response, NextFunction } from 'express';
import { securityHeaders, applySecurityHeaders } from '../utils/securityUtils';
import { createRateLimiter, defaultRateLimitConfig } from '../utils/rateLimiting';

const rateLimiter = createRateLimiter(defaultRateLimitConfig);

export const securityMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Apply security headers
  applySecurityHeaders(res);
  
  // Rate limiting
  const clientId = req.ip || req.connection.remoteAddress || 'unknown';
  if (!rateLimiter.isAllowed(clientId)) {
    return res.status(429).json({
      error: 'Too Many Requests',
      message: 'Rate limit exceeded. Please try again later.',
      retryAfter: Math.ceil((rateLimiter.getResetTime(clientId) - Date.now()) / 1000)
    });
  }
  
  // Add rate limit headers
  res.setHeader('X-RateLimit-Limit', defaultRateLimitConfig.maxRequests);
  res.setHeader('X-RateLimit-Remaining', rateLimiter.getRemainingRequests(clientId));
  res.setHeader('X-RateLimit-Reset', rateLimiter.getResetTime(clientId));
  
  next();
};

export const helmetMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Additional security headers
  res.setHeader('X-Permitted-Cross-Domain-Policies', 'none');
  res.setHeader('X-Download-Options', 'noopen');
  res.setHeader('X-Powered-By', '');
  
  next();
};`;

fs.writeFileSync('middleware/security.ts', securityMiddleware);
console.log('✅ Created security middleware');

console.log('🎉 Security enhancements completed!');
console.log('🔍 Run "npm run security:audit" to check for vulnerabilities');
console.log('🛠️ Run "npm run security:fix" to fix security issues');