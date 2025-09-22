#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class SecurityEnhancement {
  constructor() {
    this.improvements = [];
    this.issues = [];
  }

  async enhanceSecurity() {
    console.log('🔒 Starting security enhancements...');
    
    await this.fixFilePermissions();
    await this.createSecurityHeaders();
    await this.enhanceEnvironmentSecurity();
    await this.addContentSecurityPolicy();
    await this.improveAuthenticationSecurity();
    
    this.generateReport();
  }

  async fixFilePermissions() {
    console.log('📁 Fixing file permissions...');
    
    const sensitiveFiles = [
      '.env',
      '.env.production',
      '.env.local',
      'package.json',
      'package-lock.json'
    ];

    for (const file of sensitiveFiles) {
      const filePath = path.join(process.cwd(), file);
      if (fs.existsSync(filePath)) {
        try {
          // Set more restrictive permissions (read-only for owner)
          fs.chmodSync(filePath, 0o600);
          this.improvements.push({
            type: 'file-permissions',
            action: `Fixed permissions for ${file}`,
            status: 'completed'
          });
        } catch (error) {
          this.issues.push({
            type: 'file-permissions',
            issue: `Could not fix permissions for ${file}`,
            error: error.message
          });
        }
      }
    }
  }

  async createSecurityHeaders() {
    console.log('🛡️ Creating security headers configuration...');
    
    const netlifyHeadersPath = path.join(process.cwd(), 'public', '_headers');
    const headersContent = `/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://unpkg.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:; frame-src 'none';
`;

    try {
      // Ensure public directory exists
      const publicDir = path.join(process.cwd(), 'public');
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }
      
      fs.writeFileSync(netlifyHeadersPath, headersContent);
      this.improvements.push({
        type: 'security-headers',
        action: 'Created Netlify headers configuration',
        status: 'completed'
      });
    } catch (error) {
      this.issues.push({
        type: 'security-headers',
        issue: 'Could not create headers file',
        error: error.message
      });
    }
  }

  async enhanceEnvironmentSecurity() {
    console.log('🔐 Enhancing environment security...');
    
    const envPath = path.join(process.cwd(), '.env');
    if (fs.existsSync(envPath)) {
      try {
        let envContent = fs.readFileSync(envPath, 'utf8');
        
        // Check for hardcoded secrets
        const secretPatterns = [
          /password\s*=\s*['"][^'"]+['"]/gi,
          /secret\s*=\s*['"][^'"]+['"]/gi,
          /key\s*=\s*['"][^'"]+['"]/gi,
          /token\s*=\s*['"][^'"]+['"]/gi
        ];

        let hasSecrets = false;
        for (const pattern of secretPatterns) {
          if (pattern.test(envContent)) {
            hasSecrets = true;
            break;
          }
        }

        if (hasSecrets) {
          this.issues.push({
            type: 'environment-security',
            issue: 'Hardcoded secrets detected in .env file',
            recommendation: 'Use environment variables or secure secret management'
          });
        } else {
          this.improvements.push({
            type: 'environment-security',
            action: 'Environment file security check passed',
            status: 'completed'
          });
        }
      } catch (error) {
        this.issues.push({
          type: 'environment-security',
          issue: 'Could not read environment file',
          error: error.message
        });
      }
    }
  }

  async addContentSecurityPolicy() {
    console.log('🔒 Adding Content Security Policy...');
    
    const cspPath = path.join(process.cwd(), 'public', '_redirects');
    const cspContent = `# Security redirects
/api/* https://api.zion.app/:splat 200
`;

    try {
      fs.writeFileSync(cspPath, cspContent);
      this.improvements.push({
        type: 'content-security-policy',
        action: 'Created security redirects configuration',
        status: 'completed'
      });
    } catch (error) {
      this.issues.push({
        type: 'content-security-policy',
        issue: 'Could not create redirects file',
        error: error.message
      });
    }
  }

  async improveAuthenticationSecurity() {
    console.log('🔑 Improving authentication security...');
    
    // Create a basic auth configuration template
    const authConfigPath = path.join(process.cwd(), 'auth.config.js');
    const authConfigContent = `// Authentication security configuration
module.exports = {
  // Session security
  sessionConfig: {
    secret: process.env.SESSION_SECRET || 'your-secret-key-here',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      sameSite: 'strict'
    }
  },
  
  // Rate limiting
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  },
  
  // Password requirements
  passwordRequirements: {
    minLength: 8,
    requireUppercase: true,
    requireLowercase: true,
    requireNumbers: true,
    requireSpecialChars: true
  }
};
`;

    try {
      fs.writeFileSync(authConfigPath, authConfigContent);
      this.improvements.push({
        type: 'authentication-security',
        action: 'Created authentication security configuration',
        status: 'completed'
      });
    } catch (error) {
      this.issues.push({
        type: 'authentication-security',
        issue: 'Could not create auth configuration',
        error: error.message
      });
    }
  }

  generateReport() {
    console.log('\n🔒 Security Enhancement Report');
    console.log('=====================================\n');

    console.log('✅ Improvements Applied:');
    this.improvements.forEach(imp => {
      console.log(`  • ${imp.action}`);
    });

    if (this.issues.length > 0) {
      console.log('\n⚠️ Issues Found:');
      this.issues.forEach(issue => {
        console.log(`  • ${issue.issue}`);
        if (issue.recommendation) {
          console.log(`    → ${issue.recommendation}`);
        }
      });
    }

    console.log('\n✅ Security enhancement completed!');
  }
}

// Run the security enhancement
if (require.main === module) {
  const enhancer = new SecurityEnhancement();
  enhancer.enhanceSecurity().catch(console.error);
}

module.exports = SecurityEnhancement;