#!/usr/bin/env node
/**
 * Security Enhancer
 * Comprehensive security improvements for the Zion Tech Group website
 */

const fs = require('fs');
const path = require('path');

class SecurityEnhancer {
  constructor() {
    this.securityImprovements = [];
    this.errors = [];
    this.projectRoot = process.cwd();
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  // Add security headers
  async addSecurityHeaders() {
    this.log('🔒 Adding security headers...');
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
}
`;

      fs.writeFileSync(path.join(this.projectRoot, 'middleware/security.js'), middlewareScript);
      this.log('✅ Security middleware added');
      this.securityImprovements.push('Security middleware');
    } catch (error) {
      this.errors.push(`Security middleware failed: ${error.message}`);
    }
  }

  // Add environment security
  async addEnvironmentSecurity() {
    this.log('🔧 Adding environment security...');
    try {
      const envSecurityScript = `
// Environment security configuration
export const securityConfig = {
  // Ensure sensitive environment variables are not exposed
  validateEnvVars: () => {
    const requiredVars = ['NEXT_PUBLIC_API_URL'];
    const missingVars = requiredVars.filter(varName => !process.env[varName]);
    
    if (missingVars.length > 0) {
      console.warn('Missing required environment variables:', missingVars);
    }
    
    return missingVars.length === 0;
  },
  
  // Sanitize environment variables for client-side use
  getClientEnvVars: () => {
    const clientVars = {};
    const allowedClientVars = ['NEXT_PUBLIC_API_URL', 'NEXT_PUBLIC_APP_NAME'];
    
    allowedClientVars.forEach(varName => {
      if (process.env[varName]) {
        clientVars[varName] = process.env[varName];
      }
    });
    
    return clientVars;
  }
};
`;

      fs.writeFileSync(path.join(this.projectRoot, 'utils/env-security.js'), envSecurityScript);
      this.log('✅ Environment security added');
      this.securityImprovements.push('Environment security');
    } catch (error) {
      this.errors.push(`Environment security failed: ${error.message}`);
    }
  }

  // Run all security enhancements
  async runAllSecurityEnhancements() {
    this.log('🚀 Starting Security Enhancement...\n');
    
    try {
      await this.addSecurityHeaders();
      await this.addInputValidation();
      await this.addRateLimiting();
      await this.addCSRFProtection();
      await this.addSecurityMiddleware();
      await this.addEnvironmentSecurity();

      // Generate report
      const report = {
        timestamp: new Date().toISOString(),
        securityImprovements: this.securityImprovements,
        errors: this.errors,
        success: this.errors.length === 0
      };

      fs.writeFileSync(
        path.join(this.projectRoot, 'security-enhancement-report.json'),
        JSON.stringify(report, null, 2)
      );

      this.log('\n📊 Security Enhancement Summary:');
      this.log(`- Security improvements applied: ${this.securityImprovements.length}`);
      this.log(`- Errors: ${this.errors.length}`);
      
      if (this.securityImprovements.length > 0) {
        this.log('\n✅ Applied security improvements:');
        this.securityImprovements.forEach(improvement => this.log(`  - ${improvement}`));
      }

      if (this.errors.length > 0) {
        this.log('\n❌ Errors encountered:');
        this.errors.forEach(error => this.log(`  - ${error}`));
      }

      return report;
    } catch (error) {
      this.log(`❌ Security enhancement failed: ${error.message}`);
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const enhancer = new SecurityEnhancer();
  enhancer.runAllSecurityEnhancements().catch(console.error);
}

module.exports = SecurityEnhancer;
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
    this.reportFile = path.join(__dirname, '../logs/security-enhancement-report.json')
    console.log('� Enhancing security...')
    const files = this.getAllFiles(this.projectRoot, ['.js', '.jsx', '.ts', '.tsx')]
        const content = fs.readFileSync(file, 'utf8')
    if (content.includes('eval(')
      issues.push('Use of eval() - potential security risk'
    if (content.includes('innerHTML')
      issues.push('Use of innerHTML - consider using textContent for security')
    if (content.includes('document.write')
      issues.push('Use of document.write - potential XSS risk')
    if (content.includes('localStorage.setItem')
      issues.push('Use of localStorage - ensure sensitive data is not stored')
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules'
      // Skip directories that can'
