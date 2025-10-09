#!/usr/bin/env node

/**
 * Security Enhancement Script for Zion Tech Group Website
 * This script implements comprehensive security measures
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔒 Starting comprehensive security enhancement...');

// Security headers configuration
const securityHeaders = {
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://www.googletagmanager.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com",
    "frame-src 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests"
  ].join('; '),
  'Cross-Origin-Embedder-Policy': 'require-corp',
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Resource-Policy': 'same-origin'
};

// Generate security headers middleware
function generateSecurityHeaders() {
  const middlewareContent = `
import { NextRequest, NextResponse } from 'next/server';

export function securityHeaders(request: NextRequest) {
  const response = NextResponse.next();
  
  // Apply security headers
  Object.entries({
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
    'Content-Security-Policy': [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://www.googletagmanager.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests"
    ].join('; '),
    'Cross-Origin-Embedder-Policy': 'require-corp',
    'Cross-Origin-Opener-Policy': 'same-origin',
    'Cross-Origin-Resource-Policy': 'same-origin'
  }).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
  
  return response;
}
`;

  fs.writeFileSync('app/middleware/security.ts', middlewareContent);
  console.log('✅ Security headers middleware generated');
}

// Generate input sanitization utilities
function generateInputSanitization() {
  const sanitizationContent = `
/**
 * Input Sanitization Utilities
 * Comprehensive input validation and sanitization
 */

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  sanitizedValue?: string;
}

export class InputSanitizer {
  private static readonly MAX_STRING_LENGTH = 1000;
  private static readonly ALLOWED_HTML_TAGS = ['b', 'i', 'em', 'strong', 'p', 'br'];
  private static readonly DANGEROUS_PATTERNS = [
    /<script[^>]*>.*?<\/script>/gi,
    /<iframe[^>]*>.*?<\/iframe>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<link[^>]*>.*?<\/link>/gi,
    /<meta[^>]*>.*?<\/meta>/gi,
    /<style[^>]*>.*?<\/style>/gi
  ];

  /**
   * Sanitize HTML content
   */
  static sanitizeHtml(input: string): string {
    if (!input || typeof input !== 'string') {
      return '';
    }

    // Remove dangerous patterns
    let sanitized = input;
    this.DANGEROUS_PATTERNS.forEach(pattern => {
      sanitized = sanitized.replace(pattern, '');
    });

    // Remove all HTML tags except allowed ones
    const allowedTagsRegex = new RegExp(
      \`<(?!/?(?:\${this.ALLOWED_HTML_TAGS.join('|')})(?:\\s|>)).*?>\`,
      'gi'
    );
    sanitized = sanitized.replace(allowedTagsRegex, '');

    // Decode HTML entities
    sanitized = sanitized
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#x27;/g, "'")
      .replace(/&#x2F;/g, '/');

    return sanitized.trim();
  }

  /**
   * Sanitize plain text input
   */
  static sanitizeText(input: string): string {
    if (!input || typeof input !== 'string') {
      return '';
    }

    return input
      .replace(/[<>]/g, '') // Remove angle brackets
      .replace(/[&"']/g, '') // Remove potentially dangerous characters
      .trim()
      .substring(0, this.MAX_STRING_LENGTH);
  }

  /**
   * Validate email address
   */
  static validateEmail(email: string): ValidationResult {
    const errors: string[] = [];
    
    if (!email || typeof email !== 'string') {
      errors.push('Email is required');
      return { isValid: false, errors };
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      errors.push('Invalid email format');
    }

    if (email.length > 254) {
      errors.push('Email is too long');
    }

    return {
      isValid: errors.length === 0,
      errors,
      sanitizedValue: this.sanitizeText(email)
    };
  }

  /**
   * Validate phone number
   */
  static validatePhone(phone: string): ValidationResult {
    const errors: string[] = [];
    
    if (!phone || typeof phone !== 'string') {
      errors.push('Phone number is required');
      return { isValid: false, errors };
    }

    // Remove all non-digit characters
    const digitsOnly = phone.replace(/\\D/g, '');
    
    if (digitsOnly.length < 10 || digitsOnly.length > 15) {
      errors.push('Phone number must be between 10 and 15 digits');
    }

    return {
      isValid: errors.length === 0,
      errors,
      sanitizedValue: digitsOnly
    };
  }

  /**
   * Validate URL
   */
  static validateUrl(url: string): ValidationResult {
    const errors: string[] = [];
    
    if (!url || typeof url !== 'string') {
      errors.push('URL is required');
      return { isValid: false, errors };
    }

    try {
      const urlObj = new URL(url);
      
      // Only allow http and https protocols
      if (!['http:', 'https:'].includes(urlObj.protocol)) {
        errors.push('Only HTTP and HTTPS URLs are allowed');
      }

      // Check for suspicious patterns
      if (urlObj.hostname.includes('..') || urlObj.hostname.includes('//')) {
        errors.push('Invalid URL format');
      }

    } catch (error) {
      errors.push('Invalid URL format');
    }

    return {
      isValid: errors.length === 0,
      errors,
      sanitizedValue: url
    };
  }

  /**
   * Validate and sanitize form data
   */
  static validateFormData(data: Record<string, any>): {
    isValid: boolean;
    errors: Record<string, string[]>;
    sanitizedData: Record<string, any>;
  } {
    const errors: Record<string, string[]> = {};
    const sanitizedData: Record<string, any> = {};

    Object.entries(data).forEach(([key, value]) => {
      if (typeof value === 'string') {
        const sanitized = this.sanitizeText(value);
        sanitizedData[key] = sanitized;
        
        if (sanitized !== value) {
          errors[key] = errors[key] || [];
          errors[key].push('Input contains potentially dangerous characters');
        }
      } else {
        sanitizedData[key] = value;
      }
    });

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
      sanitizedData
    };
  }

  /**
   * Check for SQL injection patterns
   */
  static detectSqlInjection(input: string): boolean {
    const sqlPatterns = [
      /('|(\\-\\-)|(;)|(\\|\\|)|(union)|(select)|(insert)|(update)|(delete)|(drop)|(create)|(alter)|(exec)|(execute))/gi
    ];

    return sqlPatterns.some(pattern => pattern.test(input));
  }

  /**
   * Check for XSS patterns
   */
  static detectXss(input: string): boolean {
    const xssPatterns = [
      /<script[^>]*>.*?<\\/script>/gi,
      /<iframe[^>]*>.*?<\\/iframe>/gi,
      /javascript:/gi,
      /on\\w+\\s*=/gi,
      /<link[^>]*>.*?<\\/link>/gi,
      /<meta[^>]*>.*?<\\/meta>/gi,
      /<style[^>]*>.*?<\\/style>/gi
    ];

    return xssPatterns.some(pattern => pattern.test(input));
  }
}

export default InputSanitizer;
`;

  fs.writeFileSync('app/utils/InputSanitizer.ts', sanitizationContent);
  console.log('✅ Input sanitization utilities generated');
}

// Generate rate limiting configuration
function generateRateLimiting() {
  const rateLimitContent = `
/**
 * Rate Limiting Configuration
 * Implements various rate limiting strategies
 */

export interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
  message: string;
  skipSuccessfulRequests?: boolean;
  skipFailedRequests?: boolean;
}

export const rateLimitConfigs = {
  // General API rate limiting
  api: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 100,
    message: 'Too many requests from this IP, please try again later.',
  },
  
  // Contact form rate limiting
  contactForm: {
    windowMs: 60 * 60 * 1000, // 1 hour
    maxRequests: 5,
    message: 'Too many contact form submissions, please try again later.',
  },
  
  // Newsletter signup rate limiting
  newsletter: {
    windowMs: 24 * 60 * 60 * 1000, // 24 hours
    maxRequests: 3,
    message: 'Too many newsletter signups, please try again later.',
  },
  
  // Authentication rate limiting
  auth: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 5,
    message: 'Too many authentication attempts, please try again later.',
  },
  
  // File upload rate limiting
  upload: {
    windowMs: 60 * 60 * 1000, // 1 hour
    maxRequests: 10,
    message: 'Too many file uploads, please try again later.',
  }
};

export class RateLimiter {
  private static requests: Map<string, { count: number; resetTime: number }> = new Map();
  
  static isAllowed(identifier: string, config: RateLimitConfig): boolean {
    const now = Date.now();
    const key = \`\${identifier}:\${config.windowMs}\`;
    
    const requestData = this.requests.get(key);
    
    if (!requestData || now > requestData.resetTime) {
      // Reset or create new window
      this.requests.set(key, {
        count: 1,
        resetTime: now + config.windowMs
      });
      return true;
    }
    
    if (requestData.count >= config.maxRequests) {
      return false;
    }
    
    requestData.count++;
    return true;
  }
  
  static getRemainingRequests(identifier: string, config: RateLimitConfig): number {
    const now = Date.now();
    const key = \`\${identifier}:\${config.windowMs}\`;
    
    const requestData = this.requests.get(key);
    
    if (!requestData || now > requestData.resetTime) {
      return config.maxRequests;
    }
    
    return Math.max(0, config.maxRequests - requestData.count);
  }
  
  static getResetTime(identifier: string, config: RateLimitConfig): number {
    const now = Date.now();
    const key = \`\${identifier}:\${config.windowMs}\`;
    
    const requestData = this.requests.get(key);
    
    if (!requestData || now > requestData.resetTime) {
      return now + config.windowMs;
    }
    
    return requestData.resetTime;
  }
  
  static cleanup(): void {
    const now = Date.now();
    
    for (const [key, data] of this.requests.entries()) {
      if (now > data.resetTime) {
        this.requests.delete(key);
      }
    }
  }
}

// Cleanup old entries every 5 minutes
setInterval(() => {
  RateLimiter.cleanup();
}, 5 * 60 * 1000);
`;

  fs.writeFileSync('app/utils/RateLimiter.ts', rateLimitContent);
  console.log('✅ Rate limiting utilities generated');
}

// Generate security audit script
function generateSecurityAudit() {
  const auditContent = `
/**
 * Security Audit Script
 * Comprehensive security checks and monitoring
 */

import fs from 'fs';
import path from 'path';

export interface SecurityAuditResult {
  level: 'low' | 'medium' | 'high' | 'critical';
  category: string;
  message: string;
  recommendation: string;
  file?: string;
  line?: number;
}

export class SecurityAuditor {
  private static readonly DANGEROUS_PATTERNS = [
    {
      pattern: /eval\\s*\\(/g,
      level: 'critical',
      message: 'Use of eval() function detected',
      recommendation: 'Replace eval() with safer alternatives like Function constructor or JSON.parse'
    },
    {
      pattern: /innerHTML\\s*=/g,
      level: 'high',
      message: 'Direct innerHTML assignment detected',
      recommendation: 'Use textContent or sanitize HTML before assignment'
    },
    {
      pattern: /document\\.write/g,
      level: 'high',
      message: 'Use of document.write detected',
      recommendation: 'Replace with DOM manipulation methods'
    },
    {
      pattern: /\\$\\{.*\\}/g,
      level: 'medium',
      message: 'Template literal with potential injection',
      recommendation: 'Sanitize template literal inputs'
    },
    {
      pattern: /localStorage\\.setItem.*\\+.*\\+/g,
      level: 'medium',
      message: 'String concatenation in localStorage',
      recommendation: 'Use proper serialization methods'
    },
    {
      pattern: /window\\[.*\\]/g,
      level: 'low',
      message: 'Dynamic property access on window object',
      recommendation: 'Use explicit property access when possible'
    }
  ];

  static async auditFile(filePath: string): Promise<SecurityAuditResult[]> {
    const results: SecurityAuditResult[] = [];
    
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      const lines = content.split('\\n');
      
      lines.forEach((line, index) => {
        this.DANGEROUS_PATTERNS.forEach(({ pattern, level, message, recommendation }) => {
          if (pattern.test(line)) {
            results.push({
              level,
              category: 'Code Security',
              message,
              recommendation,
              file: filePath,
              line: index + 1
            });
          }
        });
      });
      
    } catch (error) {
      console.error(\`Error auditing file \${filePath}:\`, error);
    }
    
    return results;
  }

  static async auditDirectory(dirPath: string): Promise<SecurityAuditResult[]> {
    const results: SecurityAuditResult[] = [];
    
    try {
      const files = fs.readdirSync(dirPath, { withFileTypes: true });
      
      for (const file of files) {
        const fullPath = path.join(dirPath, file.name);
        
        if (file.isDirectory()) {
          const subResults = await this.auditDirectory(fullPath);
          results.push(...subResults);
        } else if (file.name.endsWith('.ts') || file.name.endsWith('.tsx') || file.name.endsWith('.js') || file.name.endsWith('.jsx')) {
          const fileResults = await this.auditFile(fullPath);
          results.push(...fileResults);
        }
      }
      
    } catch (error) {
      console.error(\`Error auditing directory \${dirPath}:\`, error);
    }
    
    return results;
  }

  static generateReport(results: SecurityAuditResult[]): string {
    const critical = results.filter(r => r.level === 'critical');
    const high = results.filter(r => r.level === 'high');
    const medium = results.filter(r => r.level === 'medium');
    const low = results.filter(r => r.level === 'low');

    let report = \`# Security Audit Report\\n\\n\`;
    report += \`Generated: \${new Date().toISOString()}\\n\\n\`;
    report += \`## Summary\\n\`;
    report += \`- Critical: \${critical.length}\\n\`;
    report += \`- High: \${high.length}\\n\`;
    report += \`- Medium: \${medium.length}\\n\`;
    report += \`- Low: \${low.length}\\n\\n\`;

    if (critical.length > 0) {
      report += \`## Critical Issues\\n\`;
      critical.forEach(result => {
        report += \`### \${result.message}\\n\`;
        report += \`**File:** \${result.file}:\${result.line}\\n\`;
        report += \`**Recommendation:** \${result.recommendation}\\n\\n\`;
      });
    }

    if (high.length > 0) {
      report += \`## High Priority Issues\\n\`;
      high.forEach(result => {
        report += \`### \${result.message}\\n\`;
        report += \`**File:** \${result.file}:\${result.line}\\n\`;
        report += \`**Recommendation:** \${result.recommendation}\\n\\n\`;
      });
    }

    return report;
  }
}

export default SecurityAuditor;
`;

  fs.writeFileSync('app/utils/SecurityAuditor.ts', auditContent);
  console.log('✅ Security audit utilities generated');
}

// Generate .htaccess for Apache servers
function generateHtaccess() {
  const htaccessContent = `
# Security Headers
<IfModule mod_headers.c>
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-Frame-Options "DENY"
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
    Header always set Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=()"
    Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests"
    Header always set Cross-Origin-Embedder-Policy "require-corp"
    Header always set Cross-Origin-Opener-Policy "same-origin"
    Header always set Cross-Origin-Resource-Policy "same-origin"
</IfModule>

# Hide server information
ServerTokens Prod
ServerSignature Off

# Disable directory browsing
Options -Indexes

# Protect sensitive files
<FilesMatch "\\.(htaccess|htpasswd|ini|log|sh|inc|bak)$">
    Order Allow,Deny
    Deny from all
</FilesMatch>

# Block access to version control directories
RedirectMatch 404 /\\.git
RedirectMatch 404 /\\.svn

# Block access to backup files
RedirectMatch 404 /\\.bak$
RedirectMatch 404 /\\.backup$

# Rate limiting (if mod_evasive is available)
<IfModule mod_evasive24.c>
    DOSHashTableSize    2048
    DOSPageCount        20
    DOSSiteCount        50
    DOSPageInterval     1
    DOSSiteInterval     1
    DOSBlockingPeriod   600
</IfModule>

# Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache control
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType font/woff "access plus 1 year"
    ExpiresByType font/woff2 "access plus 1 year"
</IfModule>
`;

  fs.writeFileSync('public/.htaccess', htaccessContent);
  console.log('✅ .htaccess security configuration generated');
}

// Main execution
function main() {
  try {
    // Create necessary directories
    const dirs = ['app/middleware', 'app/utils', 'public'];
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });

    // Generate security enhancements
    generateSecurityHeaders();
    generateInputSanitization();
    generateRateLimiting();
    generateSecurityAudit();
    generateHtaccess();

    console.log('🎉 Security enhancement completed successfully!');
    console.log('🔒 Generated security files:');
    console.log('  - app/middleware/security.ts (Security headers)');
    console.log('  - app/utils/InputSanitizer.ts (Input sanitization)');
    console.log('  - app/utils/RateLimiter.ts (Rate limiting)');
    console.log('  - app/utils/SecurityAuditor.ts (Security auditing)');
    console.log('  - public/.htaccess (Apache security config)');

  } catch (error) {
    console.error('❌ Error during security enhancement:', error);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { securityHeaders, generateSecurityHeaders, generateInputSanitization, generateRateLimiting, generateSecurityAudit };