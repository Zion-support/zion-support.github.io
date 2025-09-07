#!/usr/bin/env node
const { execSync } = require("child_process");
const fs = require('fs');
const path = require('path');

class SecurityEnhancementSuite {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.results = {
      securityChecks: [],
      vulnerabilities: [],
      fixes: [],
      errors: []
    };
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description, options = {}) {
    this.log(`Running: ${description}`, 'PROGRESS');
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8',
        timeout: 300000,
        maxBuffer: 1024 * 1024 * 10,
        ...options,
      });
      this.log(`${description} completed successfully`, 'SUCCESS');
      return { success: true, output: result };
    } catch (error) {
      this.log(`${description} failed: ${error.message}`, 'ERROR');
      this.results.errors.push({ command, description, error: error.message });
      return { success: false, error: error.message };
    }
  }

  async runSecurityAudit() {
    this.log("🔍 Running security audit...", 'PROGRESS');
    try {
      const auditResult = await this.runCommand("npm audit", "Running npm security audit");
      if (auditResult.success) {
        this.results.securityChecks.push("NPM security audit completed");
      }
      
      // Try to fix vulnerabilities
      const fixResult = await this.runCommand("npm audit fix", "Fixing security vulnerabilities");
      if (fixResult.success) {
        this.results.fixes.push("Security vulnerabilities fixed");
      }
      
      this.log("✅ Security audit completed", 'SUCCESS');
    } catch (error) {
      this.log(`❌ Security audit failed: ${error.message}`, 'ERROR');
    }
  }

  async checkDependencies() {
    this.log("📦 Checking dependencies for vulnerabilities...", 'PROGRESS');
    try {
      // Check for outdated packages
      const outdatedCheck = await this.runCommand("npm outdated", "Checking for outdated packages");
      
      // Check for known vulnerabilities
      const vulnCheck = await this.runCommand("npm audit --audit-level=moderate", "Checking for moderate+ vulnerabilities");
      
      this.results.securityChecks.push("Dependency security check completed");
      this.log("✅ Dependency check completed", 'SUCCESS');
    } catch (error) {
      this.log(`❌ Dependency check failed: ${error.message}`, 'ERROR');
    }
  }

  async generateSecurityHeaders() {
    this.log("🛡️ Generating security headers configuration...", 'PROGRESS');
    try {
      const securityHeaders = {
        "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'none';",
        "X-Frame-Options": "DENY",
        "X-Content-Type-Options": "nosniff",
        "X-XSS-Protection": "1; mode=block",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
        "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload"
      };
      
      fs.writeFileSync('security-headers.json', JSON.stringify(securityHeaders, null, 2));
      this.results.fixes.push("Security headers configuration created");
      
      this.log("✅ Security headers generated", 'SUCCESS');
    } catch (error) {
      this.log(`❌ Security headers generation failed: ${error.message}`, 'ERROR');
    }
  }

  async createSecurityConfig() {
    this.log("⚙️ Creating security configuration...", 'PROGRESS');
    try {
      const securityConfig = {
        "helmet": {
          "contentSecurityPolicy": {
            "directives": {
              "defaultSrc": ["'self'"],
              "scriptSrc": ["'self'", "'unsafe-inline'"],
              "styleSrc": ["'self'", "'unsafe-inline'"],
              "imgSrc": ["'self'", "data:", "https:"],
              "connectSrc": ["'self'", "https:"],
              "fontSrc": ["'self'", "data:"],
              "objectSrc": ["'none'"],
              "mediaSrc": ["'self'"],
              "frameSrc": ["'none'"]
            }
          },
          "hsts": {
            "maxAge": 31536000,
            "includeSubDomains": true,
            "preload": true
          }
        },
        "rateLimiting": {
          "windowMs": 15 * 60 * 1000,
          "max": 100,
          "message": "Too many requests from this IP, please try again later."
        },
        "cors": {
          "origin": process.env.NODE_ENV === 'production' ? ['https://ziontechgroup.com'] : true,
          "credentials": true
        }
      };
      
      fs.writeFileSync('security-config.json', JSON.stringify(securityConfig, null, 2));
      this.results.fixes.push("Security configuration created");
      
      this.log("✅ Security configuration created", 'SUCCESS');
    } catch (error) {
      this.log(`❌ Security configuration creation failed: ${error.message}`, 'ERROR');
    }
  }

  async generateSecurityReport() {
    this.log("📊 Generating security report...", 'PROGRESS');
    const totalDuration = Date.now() - this.startTime;
    
    const report = {
      timestamp: new Date().toISOString(),
      totalDuration: `${totalDuration}ms`,
      securityChecks: this.results.securityChecks,
      vulnerabilities: this.results.vulnerabilities,
      fixes: this.results.fixes,
      errors: this.results.errors,
      metrics: {
        totalChecks: this.results.securityChecks.length,
        totalFixes: this.results.fixes.length,
        totalErrors: this.results.errors.length,
        securityScore: this.calculateSecurityScore()
      },
      recommendations: [
        "Regularly update dependencies",
        "Implement Content Security Policy",
        "Use HTTPS in production",
        "Enable rate limiting",
        "Implement proper authentication",
        "Regular security audits",
        "Monitor for vulnerabilities",
        "Use security headers"
      ]
    };
    
    fs.writeFileSync('security-enhancement-report.json', JSON.stringify(report, null, 2));
    this.log("📊 Security report saved to security-enhancement-report.json", 'SUCCESS');
  }

  calculateSecurityScore() {
    const totalChecks = this.results.securityChecks.length + this.results.fixes.length;
    const errors = this.results.errors.length;
    if (totalChecks === 0) return 0;
    return Math.max(0, Math.min(100, ((totalChecks - errors) / totalChecks) * 100));
  }

  async run() {
    this.log("🚀 Starting Security Enhancement Suite...", 'PROGRESS');
    
    try {
      await this.runSecurityAudit();
      await this.checkDependencies();
      await this.generateSecurityHeaders();
      await this.createSecurityConfig();
      await this.generateSecurityReport();
      
      this.log("✅ Security Enhancement Suite completed successfully!", 'SUCCESS');
    } catch (error) {
      this.log(`❌ Security Enhancement Suite failed: ${error.message}`, 'ERROR');
      await this.generateSecurityReport();
      process.exit(1);
    }
  }
}

if (require.main === module) {
  const suite = new SecurityEnhancementSuite();
  suite.run().catch(console.error);
}

module.exports = SecurityEnhancementSuite;