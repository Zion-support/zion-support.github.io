#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Security Enhancement Suite
 * Comprehensive security improvements and monitoring
 */
class SecurityEnhancementSuite {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.securityChecks = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix =
      type === 'ERROR'
        ? '❌'
        : type === 'SUCCESS'
          ? '✅'
          : type === 'WARNING'
            ? '⚠️'
            : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description) {
    this.log(`Running: ${description}`);
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8',
        maxBuffer: 1024 * 1024 * 10,
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr,
      };
    }
  }

  async auditDependencies() {
    this.log('\n🔍 AUDITING DEPENDENCIES');
    
    try {
      // Run npm audit
      const auditResult = await this.runCommand('npm audit --json', 'NPM Security Audit');
      
      if (auditResult.success) {
        const auditData = JSON.parse(auditResult.output);
        const vulnerabilities = auditData.vulnerabilities || {};
        const vulnCount = Object.keys(vulnerabilities).length;
        
        this.log(`Found ${vulnCount} vulnerabilities`);
        
        if (vulnCount > 0) {
          // Try to fix automatically
          await this.runCommand('npm audit fix', 'Auto-fix Vulnerabilities');
          
          // Check for remaining vulnerabilities
          const reauditResult = await this.runCommand('npm audit --json', 'Re-audit After Fix');
          if (reauditResult.success) {
            const reauditData = JSON.parse(reauditResult.output);
            const remainingVulns = Object.keys(reauditData.vulnerabilities || {}).length;
            this.log(`Remaining vulnerabilities after auto-fix: ${remainingVulns}`);
          }
        }
        
        this.securityChecks.push({
          type: 'dependency-audit',
          vulnerabilities: vulnCount,
          status: vulnCount === 0 ? 'secure' : 'needs-attention'
        });
      }
    } catch (error) {
      this.log(`❌ Dependency audit failed: ${error.message}`, 'ERROR');
    }
  }

  async setupSecurityHeaders() {
    this.log('\n🛡️ SETTING UP SECURITY HEADERS');
    
    try {
      // Create security headers configuration
      const securityConfig = {
        headers: [
          {
            source: '/(.*)',
            headers: [
              {
                key: 'X-Frame-Options',
                value: 'DENY'
              },
              {
                key: 'X-Content-Type-Options',
                value: 'nosniff'
              },
              {
                key: 'X-XSS-Protection',
                value: '1; mode=block'
              },
              {
                key: 'Referrer-Policy',
                value: 'strict-origin-when-cross-origin'
              },
              {
                key: 'Permissions-Policy',
                value: 'camera=(), microphone=(), geolocation=()'
              },
              {
                key: 'Strict-Transport-Security',
                value: 'max-age=31536000; includeSubDomains'
              },
              {
                key: 'Content-Security-Policy',
                value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'none';"
              }
            ]
          }
        ]
      };
      
      // Save security config
      fs.writeFileSync(
        path.join(this.projectRoot, 'security-headers.json'),
        JSON.stringify(securityConfig, null, 2)
      );
      
      this.log('✅ Security headers configuration created');
      
      this.securityChecks.push({
        type: 'security-headers',
        status: 'configured',
        recommendations: [
          'Implement CSP in your server configuration',
          'Consider using a security middleware',
          'Regularly review and update security policies'
        ]
      });
    } catch (error) {
      this.log(`❌ Security headers setup failed: ${error.message}`, 'ERROR');
    }
  }

  async scanForSecrets() {
    this.log('\n🔐 SCANNING FOR SECRETS');
    
    try {
      // Install secret scanning tool
      await this.runCommand(
        'npm install @trufflesecurity/trufflehog --save-dev',
        'Install TruffleHog Secret Scanner'
      );
      
      // Scan for secrets
      const scanResult = await this.runCommand(
        'npx trufflehog filesystem . --no-verification',
        'Scan for Secrets'
      );
      
      if (scanResult.success) {
        const output = scanResult.output;
        const secretCount = (output.match(/Found \d+ results/g) || []).length;
        
        this.log(`Secret scan completed. Found ${secretCount} potential secrets`);
        
        if (secretCount > 0) {
          this.log('⚠️ Potential secrets found. Review the output above.', 'WARNING');
        }
        
        this.securityChecks.push({
          type: 'secret-scan',
          findings: secretCount,
          status: secretCount === 0 ? 'clean' : 'needs-review'
        });
      }
    } catch (error) {
      this.log(`❌ Secret scanning failed: ${error.message}`, 'ERROR');
    }
  }

  async setupEnvironmentSecurity() {
    this.log('\n🔒 SETTING UP ENVIRONMENT SECURITY');
    
    try {
      // Create .env.example with security guidelines
      const envExample = `# Environment Variables Example
# Copy this file to .env.local and fill in your values

# Database
DATABASE_URL=your_database_url_here

# Authentication
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=http://localhost:3000

# API Keys (store securely)
OPENAI_API_KEY=your_openai_api_key_here
STRIPE_SECRET_KEY=your_stripe_secret_key_here

# Security
ENCRYPTION_KEY=your_encryption_key_here

# Rate Limiting
RATE_LIMIT_MAX=100
RATE_LIMIT_WINDOW=900000

# CORS
ALLOWED_ORIGINS=http://localhost:3000,https://yourdomain.com

# Security Headers
SECURITY_HEADERS_ENABLED=true
CSP_ENABLED=true
`;
      
      fs.writeFileSync(path.join(this.projectRoot, '.env.example'), envExample);
      
      // Create security checklist
      const securityChecklist = `# Security Checklist

## Environment Security
- [ ] All sensitive data stored in environment variables
- [ ] .env files added to .gitignore
- [ ] No hardcoded secrets in code
- [ ] Environment variables validated on startup

## Dependencies
- [ ] Regular security audits with npm audit
- [ ] Dependencies updated regularly
- [ ] No known vulnerabilities in dependencies
- [ ] Minimal dependency footprint

## Authentication & Authorization
- [ ] Strong password requirements
- [ ] Multi-factor authentication enabled
- [ ] Session management implemented
- [ ] Role-based access control

## Data Protection
- [ ] Input validation and sanitization
- [ ] SQL injection prevention
- [ ] XSS protection
- [ ] CSRF protection

## Infrastructure
- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] Rate limiting implemented
- [ ] Error handling doesn't leak information

## Monitoring
- [ ] Security logging enabled
- [ ] Intrusion detection
- [ ] Regular security reviews
- [ ] Incident response plan
`;
      
      fs.writeFileSync(path.join(this.projectRoot, 'SECURITY_CHECKLIST.md'), securityChecklist);
      
      this.log('✅ Environment security setup completed');
      
      this.securityChecks.push({
        type: 'environment-security',
        status: 'configured',
        recommendations: [
          'Review and implement the security checklist',
          'Set up proper environment variable management',
          'Implement secret rotation policies'
        ]
      });
    } catch (error) {
      this.log(`❌ Environment security setup failed: ${error.message}`, 'ERROR');
    }
  }

  async setupRateLimiting() {
    this.log('\n⏱️ SETTING UP RATE LIMITING');
    
    try {
      // Create rate limiting middleware
      const rateLimitMiddleware = `
const rateLimit = require('express-rate-limit');

// General rate limiting
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// Strict rate limiting for sensitive endpoints
const strictLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// API rate limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50, // limit each IP to 50 requests per windowMs
  message: 'API rate limit exceeded, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = {
  generalLimiter,
  strictLimiter,
  apiLimiter
};
`;
      
      fs.writeFileSync(path.join(this.projectRoot, 'middleware/rateLimiting.js'), rateLimitMiddleware);
      
      // Install rate limiting package
      await this.runCommand(
        'npm install express-rate-limit --save',
        'Install Rate Limiting Package'
      );
      
      this.log('✅ Rate limiting setup completed');
      
      this.securityChecks.push({
        type: 'rate-limiting',
        status: 'configured',
        recommendations: [
          'Apply rate limiting to all API endpoints',
          'Monitor rate limiting metrics',
          'Adjust limits based on usage patterns'
        ]
      });
    } catch (error) {
      this.log(`❌ Rate limiting setup failed: ${error.message}`, 'ERROR');
    }
  }

  async generateSecurityReport() {
    const totalDuration = Date.now() - this.startTime;
    
    this.log('\n📊 SECURITY ENHANCEMENT REPORT');
    this.log('='.repeat(60));
    this.log(`Total Duration: ${totalDuration}ms`);
    this.log(`Security Checks: ${this.securityChecks.length}`);
    this.log('');
    
    this.securityChecks.forEach((check, index) => {
      const status = check.status === 'secure' || check.status === 'clean' || check.status === 'configured' ? '✅' : '⚠️';
      this.log(`${status} ${check.type.toUpperCase()}: ${check.status}`);
      
      if (check.recommendations) {
        check.recommendations.forEach(rec => {
          this.log(`   • ${rec}`);
        });
      }
      this.log('');
    });
    
    // Calculate security score
    const secureChecks = this.securityChecks.filter(check => 
      check.status === 'secure' || check.status === 'clean' || check.status === 'configured'
    ).length;
    const securityScore = Math.round((secureChecks / this.securityChecks.length) * 100);
    
    this.log(`🔒 Overall Security Score: ${securityScore}/100`);
    
    // Save report
    const reportData = {
      timestamp: new Date().toISOString(),
      totalDuration,
      securityScore,
      checks: this.securityChecks
    };
    
    const reportPath = path.join(this.projectRoot, 'security-enhancement-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(reportData, null, 2));
    this.log(`📊 Report saved to: ${reportPath}`);
  }

  async run() {
    this.log('🚀 Starting Security Enhancement Suite');
    this.log('='.repeat(60));
    
    try {
      await this.auditDependencies();
      await this.setupSecurityHeaders();
      await this.scanForSecrets();
      await this.setupEnvironmentSecurity();
      await this.setupRateLimiting();
      
      await this.generateSecurityReport();
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
    }
  }
}

// Run the security suite
const securitySuite = new SecurityEnhancementSuite();
securitySuite.run().catch(console.error);

module.exports = SecurityEnhancementSuite;