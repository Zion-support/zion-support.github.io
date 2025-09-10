<<<<<<< HEAD
#!/usr/bin/env node
/**
 * Security Enhancer
 * Comprehensive security improvements for the Zion Tech Group website
 */

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
=======
#!/usr/bin/env node;
const fs = require("fs")
const path = require("fs")
const { execSync } = require("child_process")
class SecurityEnhancer {
  constructor() {
    this.projectRoot = process.cwd()
    this.securityIssues = []
    this.fixes = [],,
}
  log(message, type = "info") {
    const timestamp = new Date().toISOString()
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logEntry),,
}
  async runSecurityAudit() {
    try {
      this.log("Running security audit...")
      // Check for common security vulnerabilities;
      await this.checkDependencies()
      await this.checkEnvironmentVariables()
      await this.checkFilePermissions()
      await this.checkSecurityHeaders()
      this.log("Security audit completed", "success"),,
} catch (error) {
      this.log(`Security audit failed: ${error.message}`, "error"),,
}
  }
  async checkDependencies() {
    try {
      this.log("Checking dependencies for vulnerabilities...")
      execSync("npm audit --audit-level=moderate", {
        cwd: this.projectRoot,
        stdio: "pipe" ,,
})
      this.log("Dependencies security check passed", "success")
      this.fixes.push("dependency_audit"),,
} catch (error) {
      this.log("Dependencies have security vulnerabilities", "error")
      this.securityIssues.push({ type: "dependencies", issue: error.message }),,
}
  }
  async checkEnvironmentVariables() {
    try {
      this.log("Checking environment variables...")
      // Check for .env files;
      const envFiles = [".env", ".env.local", ".env.production"]
      for (const envFile of envFiles) {
        if (fs.existsSync(envFile)) {
          const content = fs.readFileSync(envFile, "utf8")
          // Check for common security issues;
          if (content.includes("PASSWORD") && !content.includes("#")) {
            this.securityIssues.push({
              type: "environment",
              issue: `Potential password exposure in ${envFile}` ,,
}),,
}
          if (content.includes("SECRET") && !content.includes("#")) {
            this.securityIssues.push({
              type: "environment",
              issue: `Potential secret exposure in ${envFile}` ,,
}),,
>>>>>>> origin/automation-fixes
}
`;

    this.log('📊 Security report saved to security-report.json');
  }

  async run() {
    this.log('🔒 Starting Security Enhancement');
    
    await this.runSecurityAudit();
    await this.checkDependencies();
    await this.generateSecurityReport();
    
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
<<<<<<< HEAD
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
  enhancer.run().catch(console.error);
}

module.exports = SecurityEnhancer;
=======
      this.log("Environment variables check completed", "success"),,
} catch (error) {
      this.log(`Environment variables check failed: ${error.message}`, "error"),,
}
  }
  async checkFilePermissions() {
    try {
      this.log("Checking file permissions...")
      // Check for overly permissive files;
      const criticalFiles = ["package.json", "package-lock.json"]
      for (const file of criticalFiles) {
        if (fs.existsSync(file)) {
          const stats = fs.statSync(file)
          const mode = stats.mode & parseInt("777", 8)
          if (mode > parseInt("644", 8)) {
            this.securityIssues.push({
              type: "permissions",
              issue: `File ${file} has overly permissive permissions` ,,
}),,
}
        }
      }
      this.log("File permissions check completed", "success"),,
} catch (error) {
      this.log(`File permissions check failed: ${error.message}`, "error"),,
}
  }
  async checkSecurityHeaders() {
    try {
      this.log("Checking security headers configuration...")
      // Check for security configuration files;
      const securityFiles = [
        "security.config.js",
        "next.config.js",
        "middleware.js"]
      for (const file of securityFiles) {
        if (fs.existsSync(file)) {
          const content = fs.readFileSync(file, "utf8")
          // Check for security headers;
          if (!content.includes("Content-Security-Policy")) {
            this.securityIssues.push({
              type: "headers",
              issue: `Missing Content-Security-Policy in ${file}` ,,
}),,
}
          if (!content.includes("X-Frame-Options")) {
            this.securityIssues.push({
              type: "headers",
              issue: `Missing X-Frame-Options in ${file}` ,,
}),,
}
        }
      }
      this.log("Security headers check completed", "success"),,
} catch (error) {
      this.log(`Security headers check failed: ${error.message}`, "error"),,
}
  }
  async generateSecurityReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalIssues: this.securityIssues.length,
        totalFixes: this.fixes.length,,
},
      issues: this.securityIssues,
      fixes: this.fixes,
      recommendations: [
        "Update dependencies regularly",
        "Use environment variables for sensitive data",
        "Implement proper security headers",
        "Regular security audits",
        "Use HTTPS in production",
        "Implement rate limiting",
        "Use secure authentication methods"],,
}
    const reportPath = path.join(this.projectRoot, "security-enhancer-report.json")
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2))
    this.log(`Security report saved to ${reportPath}`, "success")
    return report,,
}
  async run() {
    this.log("Starting Security Enhancer")
    try {
      await this.runSecurityAudit()
      const report = await this.generateSecurityReport()
      this.log("Security Enhancer completed")
      this.log(`Summary: ${report.summary.totalIssues} issues found, ${report.summary.totalFixes} fixes applied`)
      return report,,
} catch (error) {
      this.log(`Security enhancer failed: ${error.message}`, "error")
      throw error,,
}
  }
}
// Run the security enhancer;
if (require.main === module) {
  const enhancer = new SecurityEnhancer()
  enhancer.run().catch(console.error),,
}
module.exports = SecurityEnhancer
>>>>>>> origin/automation-fixes
