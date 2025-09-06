#!/usr/bin/env node
/**
 * Security Enhancement Suite
 * Comprehensive security improvements automation
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SecurityEnhancementSuite {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'security-enhancement.log');
    this.ensureLogDir();
    this.enhancements = [];
  }

  ensureLogDir() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async implementCSP() {
    this.log('🔒 Implementing Content Security Policy...');
    
    try {
      // Create CSP configuration
      const cspConfig = `
const cspConfig = {
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'", "https://cdn.jsdelivr.net"],
    styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
    fontSrc: ["'self'", "https://fonts.gstatic.com"],
    imgSrc: ["'self'", "data:", "https:"],
    connectSrc: ["'self'"],
    frameSrc: ["'none'"],
    objectSrc: ["'none'"],
    baseUri: ["'self'"],
    formAction: ["'self'"]
  }
};

export default cspConfig;
`;
      
      fs.writeFileSync(path.join(process.cwd(), 'src/config/csp.js'), cspConfig);
      
      this.enhancements.push('Content Security Policy implementation');
      this.log('✅ CSP implementation completed');
    } catch (error) {
      this.log(`❌ CSP implementation failed: ${error.message}`, 'ERROR');
    }
  }

  async setupSecurityHeaders() {
    this.log('🛡️ Setting up security headers...');
    
    try {
      // Create security headers middleware
      const securityHeaders = `
export const securityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'"
};

export const applySecurityHeaders = (req, res, next) => {
  Object.entries(securityHeaders).forEach(([key, value]) => {
    res.setHeader(key, value);
  });
  next();
};
`;
      
      fs.writeFileSync(path.join(process.cwd(), 'src/middleware/security-headers.js'), securityHeaders);
      
      this.enhancements.push('Security headers setup');
      this.log('✅ Security headers setup completed');
    } catch (error) {
      this.log(`❌ Security headers setup failed: ${error.message}`, 'ERROR');
    }
  }

  async implementRateLimiting() {
    this.log('🚦 Implementing rate limiting...');
    
    try {
      // Create rate limiting middleware
      const rateLimiting = `
import rateLimit from 'express-rate-limit';

export const createRateLimit = (windowMs, max, message) => {
  return rateLimit({
    windowMs,
    max,
    message: {
      error: message || 'Too many requests from this IP, please try again later.'
    },
    standardHeaders: true,
    legacyHeaders: false,
  });
};

export const generalRateLimit = createRateLimit(
  15 * 60 * 1000, // 15 minutes
  100, // limit each IP to 100 requests per windowMs
  'Too many requests from this IP, please try again later.'
);

export const authRateLimit = createRateLimit(
  15 * 60 * 1000, // 15 minutes
  5, // limit each IP to 5 requests per windowMs
  'Too many authentication attempts, please try again later.'
);
`;
      
      fs.writeFileSync(path.join(process.cwd(), 'src/middleware/rate-limiting.js'), rateLimiting);
      
      this.enhancements.push('Rate limiting implementation');
      this.log('✅ Rate limiting implementation completed');
    } catch (error) {
      this.log(`❌ Rate limiting implementation failed: ${error.message}`, 'ERROR');
    }
  }

  async setupInputValidation() {
    this.log('✅ Setting up input validation...');
    
    try {
      // Create input validation utilities
      const inputValidation = `
import Joi from 'joi';

export const validateEmail = (email) => {
  const schema = Joi.string().email().required();
  return schema.validate(email);
};

export const validatePassword = (password) => {
  const schema = Joi.string()
    .min(8)
    .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])'))
    .required();
  return schema.validate(password);
};

export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .trim();
};

export const validateUserInput = (data, schema) => {
  const { error, value } = schema.validate(data);
  if (error) {
    throw new Error(\`Validation error: \${error.details[0].message}\`);
  }
  return value;
};
`;
      
      fs.writeFileSync(path.join(process.cwd(), 'src/utils/input-validation.js'), inputValidation);
      
      this.enhancements.push('Input validation setup');
      this.log('✅ Input validation setup completed');
    } catch (error) {
      this.log(`❌ Input validation setup failed: ${error.message}`, 'ERROR');
    }
  }

  async setupSecurityMonitoring() {
    this.log('📊 Setting up security monitoring...');
    
    try {
      // Create security monitoring component
      const securityMonitoring = `
import { useEffect } from 'react';

export const SecurityMonitor = () => {
  useEffect(() => {
    // Monitor for suspicious activities
    const handleSecurityEvent = (event) => {
      // Log security events
      console.log('Security event detected:', event);
      
      // Send to security monitoring service
      if (process.env.NODE_ENV === 'production') {
        // Send to monitoring service
        fetch('/api/security/event', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: event.type,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href
          })
        });
      }
    };

    // Monitor for XSS attempts
    const originalConsoleLog = console.log;
    console.log = (...args) => {
      const message = args.join(' ');
      if (message.includes('<script>') || message.includes('javascript:')) {
        handleSecurityEvent({ type: 'XSS_ATTEMPT', message });
      }
      originalConsoleLog.apply(console, args);
    };

    return () => {
      console.log = originalConsoleLog;
    };
  }, []);

  return null;
};
`;
      
      fs.writeFileSync(path.join(process.cwd(), 'src/components/SecurityMonitor.tsx'), securityMonitoring);
      
      this.enhancements.push('Security monitoring setup');
      this.log('✅ Security monitoring setup completed');
    } catch (error) {
      this.log(`❌ Security monitoring setup failed: ${error.message}`, 'ERROR');
    }
  }

  async generateReport() {
    this.log('📊 Generating security enhancement report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      enhancements: this.enhancements,
      recommendations: [
        'Implement two-factor authentication',
        'Set up automated security scanning',
        'Implement session management',
        'Add encryption for sensitive data',
        'Set up intrusion detection system'
      ]
    };
    
    const reportPath = path.join(__dirname, 'reports', 'security-enhancement-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📄 Security enhancement report saved to: ${reportPath}`);
    return report;
  }

  async run() {
    this.log('🔒 Starting security enhancement suite...');
    
    await this.implementCSP();
    await this.setupSecurityHeaders();
    await this.implementRateLimiting();
    await this.setupInputValidation();
    await this.setupSecurityMonitoring();
    
    const report = await this.generateReport();
    
    this.log('✅ Security enhancement suite completed');
    return { success: true, report };
  }
}

// Run if called directly
if (require.main === module) {
  const securitySuite = new SecurityEnhancementSuite();
  securitySuite.run().catch(console.error);
}

module.exports = SecurityEnhancementSuite;