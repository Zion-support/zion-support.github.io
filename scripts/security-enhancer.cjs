
const fs = require('fs');
const path = require('path');
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SecurityEnhancer {
  constructor() {
    this.projectRoot = process.cwd();
  }

  async addSecurityHeaders() {
    console.log('🛡️ Adding security headers...');
    
    const securityConfig = `
// Security headers configuration
const securityHeaders = [
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
      value: "'self'"
    },
    {
      key: 'script-src',
      value: "'self' 'unsafe-eval' 'unsafe-inline'"
    },
    {
      key: 'style-src',
      value: "'self' 'unsafe-inline'"
    },
    {
      key: 'img-src',
      value: "'self' blob: data: https:"
    },
    {
      key: 'font-src',
      value: "'self' https:"
    },
    {
      key: 'object-src',
      value: "'none'"
    },
    {
      key: 'base-uri',
      value: "'self'"
    },
    {
      key: 'form-action',
      value: "'self'"
    },
    {
      key: 'frame-ancestors',
      value: "'none'"
    }
  ]
};

module.exports = { cspHeader };
`;

    fs.writeFileSync(path.join(this.projectRoot, 'csp.config.js'), cspConfig);
    console.log('✅ CSP configuration created');
  }

  async run() {
    await this.addSecurityHeaders();
    await this.addCSP();
    console.log('✅ Security enhancement completed!');
  }
}

const enhancer = new SecurityEnhancer();
enhancer.run().catch(console.error);
    this.reportsDir = path.join(this.projectRoot, 'security-reports');
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async auditDependencies() {
    this.log('🔍 Auditing dependencies for security vulnerabilities...');
    
    try {
      execSync('npm audit --audit-level=moderate', { cwd: this.projectRoot, stdio: 'inherit' });
      this.log('✅ Dependency audit completed');
    } catch (error) {
      this.log(`⚠️ Security vulnerabilities found: ${error.message}`);
    }
  }

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
      "'": '&#039;'
    };
    
    return text.replace(/[&<>"']/g, (m) => map[m]);
  }
}
`;

    const utilsDir = path.join(this.projectRoot, 'lib');
    if (!fs.existsSync(utilsDir)) {
      fs.mkdirSync(utilsDir, { recursive: true });
    }
    
    const utilsPath = path.join(utilsDir, 'security.js');
    fs.writeFileSync(utilsPath, securityUtils);
    this.log('✅ Security utility functions created');
  }

  async createEnvironmentSecurity() {
    this.log('🔒 Creating environment security configuration...');
    
    const envSecurity = `
# Environment Security Configuration
# Never commit sensitive data to version control

# Database
DATABASE_URL=your_database_url_here
DATABASE_PASSWORD=your_secure_password_here

# API Keys
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
API_SECRET_KEY=your_secret_key_here

# Authentication
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=https://yourdomain.com

# Third-party Services
STRIPE_SECRET_KEY=your_stripe_secret_key_here
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key_here

# Security
ENCRYPTION_KEY=your_encryption_key_here
JWT_SECRET=your_jwt_secret_here

# Monitoring
SENTRY_DSN=your_sentry_dsn_here
`;

    const envPath = path.join(this.projectRoot, '.env.security.example');
    fs.writeFileSync(envPath, envSecurity);
    this.log('✅ Environment security template created');
  }

  async generateSecurityReport() {
    this.log('📊 Generating security report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      securityMeasures: [
        'Dependency audit completed',
        'Security headers middleware created',
        'Security utility functions implemented',
        'Environment security template created'
      ],
      recommendations: [
        'Regularly update dependencies',
        'Implement rate limiting',
        'Use HTTPS in production',
        'Enable security monitoring',
        'Regular security audits',
        'Implement proper authentication',
        'Use environment variables for secrets',
        'Enable CORS properly',
        'Implement input validation',
        'Use secure session management'
      ],
      nextSteps: [
        'Review and customize security headers',
        'Implement authentication system',
        'Set up security monitoring',
        'Configure rate limiting',
        'Test security measures'
      ]
    };
    
    const reportPath = path.join(this.reportsDir, 'security-enhancement-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`✅ Security report saved to ${reportPath}`);
  }

  async run() {
    this.log('🛡️ Starting Security Enhancement');
    
    try {
      await this.auditDependencies();
      await this.createSecurityHeaders();
      await this.createSecurityUtils();
      await this.createEnvironmentSecurity();
      await this.generateSecurityReport();
      
      this.log('🎉 Security Enhancement completed successfully');
    } catch (error) {
      this.log(`❌ Security enhancement failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the security enhancer
const securityEnhancer = new SecurityEnhancer();
securityEnhancer.run();
