#!/usr/bin/env node

/**
 * Security Enhancer
 * Comprehensive security improvements and monitoring
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔒 Starting security enhancement...');

// Configuration
const config = {
  outputDir: path.join(__dirname, '..', 'security-reports'),
  securityFeatures: {
    csp: true,
    headers: true,
    rateLimiting: true,
    inputValidation: true,
    authentication: true,
    monitoring: true
  }
};

// Ensure output directory exists
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
}

// Content Security Policy setup
function setupCSP() {
  console.log('🛡️ Setting up Content Security Policy...');
  
  try {
    const cspConfig = {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "https://cdn.jsdelivr.net"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", "data:", "https:"],
        connectSrc: ["'self'", "https://api.zion.app"],
        frameSrc: ["'none'"],
        objectSrc: ["'none'"],
        baseUri: ["'self'"],
        formAction: ["'self'"],
        upgradeInsecureRequests: []
      }
    };
    
    const cspPath = path.join(__dirname, '..', 'middleware', 'csp.js');
    fs.writeFileSync(cspPath, `module.exports = ${JSON.stringify(cspConfig, null, 2)};`);
    
    console.log('✅ CSP configuration created');
    return { success: true, message: 'CSP configured' };
  } catch (error) {
    console.log(`❌ CSP setup failed: ${error.message}`);
    return { success: false, error: error.message };
  }
}

// Security headers setup
function setupSecurityHeaders() {
  console.log('🔐 Setting up security headers...');
  
  try {
    const securityHeaders = `
// Security headers middleware
export const securityHeaders = (req, res, next) => {
  // Prevent clickjacking
  res.setHeader('X-Frame-Options', 'DENY');
  
  // Prevent MIME type sniffing
  res.setHeader('X-Content-Type-Options', 'nosniff');
  
  // Enable XSS protection
  res.setHeader('X-XSS-Protection', '1; mode=block');
  
  // Strict Transport Security
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  
  // Referrer Policy
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Permissions Policy
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  next();
};
`;
    
    const headersPath = path.join(__dirname, '..', 'middleware', 'security-headers.js');
    fs.writeFileSync(headersPath, securityHeaders);
    
    console.log('✅ Security headers middleware created');
    return { success: true, message: 'Security headers configured' };
  } catch (error) {
    console.log(`❌ Security headers setup failed: ${error.message}`);
    return { success: false, error: error.message };
  }
}

// Rate limiting setup
function setupRateLimiting() {
  console.log('⏱️ Setting up rate limiting...');
  
  try {
    const rateLimitConfig = `
// Rate limiting configuration
export const rateLimitConfig = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
};

// API rate limiting
export const apiRateLimit = {
  windowMs: 15 * 60 * 1000,
  max: 50,
  message: 'API rate limit exceeded',
};
`;
    
    const rateLimitPath = path.join(__dirname, '..', 'middleware', 'rate-limiting.js');
    fs.writeFileSync(rateLimitPath, rateLimitConfig);
    
    console.log('✅ Rate limiting configuration created');
    return { success: true, message: 'Rate limiting configured' };
  } catch (error) {
    console.log(`❌ Rate limiting setup failed: ${error.message}`);
    return { success: false, error: error.message };
  }
}

// Input validation setup
function setupInputValidation() {
  console.log('✅ Setting up input validation...');
  
  try {
    const validationSchema = `
// Input validation schemas
import Joi from 'joi';

export const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  name: Joi.string().min(2).max(50).required(),
});

export const sanitizeInput = (input) => {
  if (typeof input === 'string') {
    return input.replace(/<script\\b[^<]*(?:(?!<\\/script>)<[^<]*)*<\\/script>/gi, '');
  }
  return input;
};

export const validateInput = (schema, data) => {
  const { error, value } = schema.validate(data);
  if (error) {
    throw new Error(\`Validation error: \${error.details[0].message}\`);
  }
  return value;
};
`;
    
    const validationPath = path.join(__dirname, '..', 'src', 'utils', 'validation.js');
    fs.writeFileSync(validationPath, validationSchema);
    
    console.log('✅ Input validation utilities created');
    return { success: true, message: 'Input validation configured' };
  } catch (error) {
    console.log(`❌ Input validation setup failed: ${error.message}`);
    return { success: false, error: error.message };
  }
}

// Security monitoring setup
function setupSecurityMonitoring() {
  console.log('📊 Setting up security monitoring...');
  
  try {
    const securityMonitor = `
// Security monitoring and logging
export const securityLogger = {
  logAttempt: (type, details) => {
    console.log(\`[SECURITY] \${type}:\`, details);
    // In production, send to security monitoring service
  },
  
  logSuspiciousActivity: (activity) => {
    console.warn(\`[SECURITY ALERT] Suspicious activity:\`, activity);
    // Send alert to security team
  },
  
  logAuthFailure: (ip, userAgent) => {
    console.log(\`[SECURITY] Auth failure from IP: \${ip}, UA: \${userAgent}\`);
  }
};

export const securityMiddleware = (req, res, next) => {
  // Log all requests
  securityLogger.logAttempt('REQUEST', {
    ip: req.ip,
    userAgent: req.get('User-Agent'),
    url: req.url,
    method: req.method
  });
  
  next();
};
`;
    
    const monitorPath = path.join(__dirname, '..', 'middleware', 'security-monitor.js');
    fs.writeFileSync(monitorPath, securityMonitor);
    
    console.log('✅ Security monitoring setup created');
    return { success: true, message: 'Security monitoring configured' };
  } catch (error) {
    console.log(`❌ Security monitoring setup failed: ${error.message}`);
    return { success: false, error: error.message };
  }
}

// Main security enhancement function
function runSecurityEnhancement() {
  const results = {
    timestamp: new Date().toISOString(),
    securityFeatures: {
      csp: setupCSP(),
      headers: setupSecurityHeaders(),
      rateLimiting: setupRateLimiting(),
      inputValidation: setupInputValidation(),
      monitoring: setupSecurityMonitoring()
    },
    summary: {
      totalFeatures: 5,
      successfulFeatures: 0,
      failedFeatures: 0
    }
  };

  // Calculate summary
  Object.values(results.securityFeatures).forEach(feature => {
    if (feature.success) {
      results.summary.successfulFeatures++;
    } else {
      results.summary.failedFeatures++;
    }
  });

  return results;
}

// Save security report
function saveSecurityReport(results) {
  const filename = `security-enhancement-${Date.now()}.json`;
  const filepath = path.join(config.outputDir, filename);
  
  fs.writeFileSync(filepath, JSON.stringify(results, null, 2));
  console.log(`🔒 Security enhancement report saved to: ${filename}`);
  
  // Print summary
  console.log(`📊 Security Enhancement Summary:`);
  console.log(`   Total Features: ${results.summary.totalFeatures}`);
  console.log(`   Successful: ${results.summary.successfulFeatures}`);
  console.log(`   Failed: ${results.summary.failedFeatures}`);
}

// Main execution
try {
  const results = runSecurityEnhancement();
  saveSecurityReport(results);
  console.log('✅ Security enhancement completed');
} catch (error) {
  console.error('❌ Security enhancement failed:', error.message);
  process.exit(1);
}
