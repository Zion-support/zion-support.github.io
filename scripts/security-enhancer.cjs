
const fs = require('fs');
const path = require('path');
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
class SecurityEnhancer {
  constructor() {
    this.projectRoot = process.cwd();
<<<<<<< HEAD
  }

  async addSecurityHeaders() {
    console.log('🛡️ Adding security headers...');
    
    const securityConfig = `
// Security headers configuration
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on';
},
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload';
},
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block';
},
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN';
},
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff';
},
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin';
}
];

module.exports = { securityHeaders };
`;

    fs.writeFileSync(path.join(this.projectRoot, 'security.config.js'), securityConfig);
    console.log('✅ Security headers configuration created');
  }

  async addCSP() {
    console.log('🔐 Adding Content Security Policy...');
    
    const cspConfig = `
// Content Security Policy configuration
const cspHeader = {
  'Content-Security-Policy': [
    {
      key: 'default-src',
      value: "'self'";
},
    {
      key: 'script-src',
      value: "'self' 'unsafe-eval' 'unsafe-inline'";
},
    {
      key: 'style-src',
      value: "'self' 'unsafe-inline'";
},
    {
      key: 'img-src',
      value: "'self' blob: data: https:";
},
    {
      key: 'font-src',
      value: "'self' https:";
},
    {
      key: 'object-src',
      value: "'none'";
},
    {
      key: 'base-uri',
      value: "'self'";
},
    {
      key: 'form-action',
      value: "'self'";
},
    {
      key: 'frame-ancestors',
      value: "'none'";
}
  ]
};

module.exports = { cspHeader };
`;

    fs.writeFileSync(path.join(this.projectRoot, 'csp.config.js'), cspConfig);
    console.log('✅ CSP configuration created');
=======
    this.securityEnhancements = [];    } catch (error) {
      this.log(`❌ Security headers creation failed: ${error.message}`);
    }
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
  }

  async createSecurityMiddleware() {
    this.log('🛡️ Creating security middleware...');
    try {
      const securityMiddleware = `
import { NextRequest, NextResponse } from 'next/server';
import { securityHeaders, contentSecurityPolicy } from '../lib/security';

export function securityMiddleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Apply security headers
  securityHeaders.forEach(({ key, value }) => {
    response.headers.set(key, value);
  });
  
  // Apply Content Security Policy
  const cspString = Object.entries(contentSecurityPolicy.directives)
    .map(([key, values]) => \`\${key} \${values.join(' ')}\`)
    .join('; ');
  
  response.headers.set('Content-Security-Policy', cspString);
  
  // Rate limiting headers
  response.headers.set('X-RateLimit-Limit', '100');
  response.headers.set('X-RateLimit-Remaining', '99');
  response.headers.set('X-RateLimit-Reset', new Date(Date.now() + 3600000).toISOString());
  
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)']};
`;
      
      fs.writeFileSync(
        path.join(this.projectRoot, 'middleware.security.ts'),
        securityMiddleware
      );
      
      this.securityEnhancements.push('Security middleware created');
      this.log('✅ Security middleware created');
    } catch (error) {
      this.log(`❌ Security middleware creation failed: ${error.message}`);    }
  }

  async createSecurityAuditScript() {
    this.log('🔍 Creating security audit script...');
    try {
      const auditScript = `
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class SecurityAuditor {
  constructor() {
    this.reportsDir = path.join(process.cwd(), 'security-reports');
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  async runNpmAudit() {
    console.log('🔍 Running npm audit...');
    try {
      const command = 'npm audit --audit-level=moderate --json > ./security-reports/npm-audit.json';
      execSync(command, { stdio: 'inherit' });
      console.log('✅ NPM audit completed');
    } catch (error) {
      console.log('❌ NPM audit failed:', error.message);
    }
  }

<<<<<<< HEAD
  async createSecurityHeaders() {
    this.log('🛡️ Creating security headers configuration...');
    
    const securityConfig = `
// Security headers middleware
export function middleware(request) {
  const response = NextResponse.next();
  
  // Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  response.headers.set('Content-Security-Policy', 
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "font-src 'self' https://fonts.gstatic.com; " +
    "img-src 'self' data: https:; " +
    "connect-src 'self' https://api.vercel.com;"
  );
  
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)']};
`;

    const middlewarePath = path.join(this.projectRoot, 'middleware.security.js');
    fs.writeFileSync(middlewarePath, securityConfig);
    this.log('✅ Security headers middleware created');
  }

  async createSecurityUtils() {
    this.log('🔐 Creating security utility functions...');
    
    const securityUtils = `
// Security utility functions
import crypto from 'crypto';

export class SecurityUtils {
  static sanitizeInput(input) {
    if (typeof input !== 'string') return input;
    
    return input
      .replace(/[<>]/g, '') // Remove potential HTML tags
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\\w+=/gi, '') // Remove event handlers
      .trim();
  }

  static validateEmail(email) {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return emailRegex.test(email);
  }

  static generateCSRFToken() {
    return crypto.randomBytes(32).toString('hex');
  }

  static hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
  }

  static validatePassword(password) {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d@$!%*?&]{8}$/;
    return passwordRegex.test(password);
  }

  static escapeHtml(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;';
};
    
    return text.replace(/[&<>"']/g, (m) => map[m]);
  }
}
`;

    const utilsDir = path.join(this.projectRoot, 'lib');
    if (!fs.existsSync(utilsDir)) {
      fs.mkdirSync(utilsDir, { recursive: true });
=======
  async runSnykAudit() {
    console.log('🔍 Running Snyk audit...');
    try {
      const command = 'npx snyk test --json > ./security-reports/snyk-audit.json';
      execSync(command, { stdio: 'inherit' });
      console.log('✅ Snyk audit completed');
    } catch (error) {
      console.log('❌ Snyk audit failed:', error.message);
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
    }
  }

  async generateSecurityReport() {
    console.log('📊 Generating security report...');
    const report = {
      timestamp: new Date().toISOString(),
      audits: {
        npm: 'npm-audit.json',
        snyk: 'snyk-audit.json'
      },
      recommendations: [
        'Keep dependencies updated',
        'Use security headers',
        'Implement rate limiting',
        'Use HTTPS only',
        'Validate all inputs',
        'Use environment variables for secrets'
      ]
};
    
    fs.writeFileSync(
      path.join(this.reportsDir, 'security-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    console.log('✅ Security report generated');
  }
}

const auditor = new SecurityAuditor();
auditor.runNpmAudit();
auditor.runSnykAudit();
auditor.generateSecurityReport();
`;
      
      fs.writeFileSync(
        path.join(this.projectRoot, 'scripts', 'security-audit.cjs'),
        auditScript
      );
      
      this.securityEnhancements.push('Security audit script created');
      this.log('✅ Security audit script created');
    } catch (error) {
      this.log(`❌ Security audit script creation failed: ${error.message}`);
    }
  }

  async run() {
    this.log('🚀 Starting security enhancement...');
    
    await this.createSecurityHeaders();
    await this.createSecurityMiddleware();
    await this.createSecurityAuditScript();
    
    this.log(`🎉 Security enhancement completed with ${this.securityEnhancements.length} enhancements`);
    this.securityEnhancements.forEach(enhancement => this.log(`  - ${enhancement}`));
  }
}

const enhancer = new SecurityEnhancer();
enhancer.run().catch(console.error);