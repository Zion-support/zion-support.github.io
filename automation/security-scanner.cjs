

/**
 * Security Scanner
 * Comprehensive security scanning and enhancement automation
 */
class SecurityScanner {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.results = {}

origin/cursor/expand-services-advertise-and-build-project-c28b

    try {
      await this.auditDependencies();
      await this.scanCodeSecurity();
      await this.setupSecurityHeaders();
      await this.setupContentSecurityPolicy();
      await this.checkAuthenticationSecurity();

origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/expand-services-advertise-and-build-project-c28b

    } catch (error) {
        return {
            status: 'fail,
            message: Could not check HTTPS configuration'
        }
    }
});

  }

});

  async runSecurityFix() {
    this.log("🔧 Running security fixes...);
    try {
      execSync(npm audit fix", {
        cwd: this.projectRoot,
        stdio: "inherit
      });
      this.fixes.push(Security vulnerabilities fixed");
      this.log("✅ Security vulnerabilities fixed);


    
    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      totalDuration,
      results: this.results,
      summary: {
        dependenciesAudited: this.results.dependencyAudit.success,
        codeScanned: this.results.codeSecurity.success,
        headersConfigured: this.results.headersSecurity.success,
        cspConfigured: this.results.contentSecurityPolicy.success,
        authChecked: this.results.authenticationSecurity.success
      }
    }
    
    this.log(`📊 Security scan completed! Report saved to: ${reportPath}`);
    this.log(`🔒 Security Score: ${report.securityScore}% (${passedChecks}/${securityChecks.length} checks passed)`);
    
    try {
      await this.auditDependencies();
      await this.scanCodeSecurity();
      await this.setupSecurityHeaders();
      await this.setupContentSecurityPolicy();
      await this.checkAuthenticationSecurity();

    } catch (error) {
      this.log(`⚠️ Security fix had issues: ${error.message}`, WARN");
    }
        
main
        sensitiveFiles.forEach(file => {
            if (fs.existsSync(file)) {
                const stats = fs.statSync(file);
                const mode = stats.mode & parseInt('777, 8);
                
main
                // Check if file is world-readable (should not be)
                if (mode & 4) {
                    issues.push(`${file} is world-readable`);
                }
            }
        });
        passedChecks++;
      } catch (error) {
        console.log(`⚠️ ${check.name} completed with warnings`);
        results.push({ 
          name: check.name, 
          status: warning', 
          description: check.description,
          error: error.message 
        });
      }
    }

    const report = {
      timestamp: new Date().toISOString(),
      totalChecks: securityChecks.length,
      passedChecks,
      warningChecks: results.filter(r => r.status === 'warning).length,
      results,
      securityScore: Math.round((passedChecks / securityChecks.length) * 100)
    }

    const reportPath = path.join(this.reportsDir, security-scan-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Security scan completed! Report saved to: ${reportPath}`);
    this.log(`🔒 Security Score: ${report.securityScore}% (${passedChecks}/${securityChecks.length} checks passed)`);
    
    return report;
  }
}
}
console.log(`\n📄 Report saved to: ${reportPath}`);

        });
  }

  async run() {
    this.log("🎯 Starting Security Scan Process...);
    this.log(====================================");
    try {
      await this.runNpmAudit();
      await this.checkSensitiveFiles();
      await this.checkPackageJsonSecurity();
      await this.checkDependenciesSecurity();
      await this.checkFilePermissions();
      await this.runSecurityFix();
      
      this.log("\n📊 SECURITY SCAN REPORT);
      this.log(=======================");
      this.log(`Vulnerabilities Found: ${this.vulnerabilities.length}`);
      this.log(`Fixes Applied: ${this.fixes.length}`);
      this.log(`Errors: ${this.errors.length}`);
      
      if (this.vulnerabilities.length > 0) {
        this.log("\n⚠️ Vulnerabilities Found:);
        this.vulnerabilities.forEach((vuln, index) => {
          this.log(`  ${index + 1}. ${vuln}`);
        });
      }
      
      if (this.fixes.length > 0) {
        this.log(\n✅ Fixes Applied:");
        this.fixes.forEach((fix, index) => {
          this.log(`  ${index + 1}. ${fix}`);
        });
      }
      
      if (this.errors.length > 0) {
        this.log("\n❌ Errors:);
        this.errors.forEach((error, index) => {
          this.log(`  ${index + 1}. ${error}`);
        });
      }
      
      const securityScore = this.fixes.length / (this.fixes.length + this.vulnerabilities.length) * 100;
      this.log(`\n🛡️ Security Score: ${securityScore.toFixed(1)}%`);
      
      if (securityScore >= 80) {
        this.log(🎉 System is secure!");
      } else if (securityScore >= 60) {
        this.log("⚠️ System has some security issues);
      } else {
        this.log(🚨 System has critical security issues");
      }
      
      this.log("\n🎉 Security scan completed!);


    } catch (error) {
      this.log(`💥 Fatal error: ${error.message}`, ERROR");
      process.exit(1);
    }
console.log(`Total Checks: ${securityReport.summary.total}`);
console.log(`✅ Passed: ${securityReport.summary.passed}`);
console.log(`⚠️  Warnings: ${securityReport.summary.warnings}`);
console.log(`❌ Failed: ${securityReport.summary.failed}`);
console.log(`🚨 Vulnerabilities: ${securityReport.summary.vulnerabilities}`);
console.log(`\nOverall Status: ${securityReport.status.toUpperCase()}`);

if (securityReport.vulnerabilities.length > 0) {
    console.log('\n🚨 Security Issues Found:);
    securityReport.vulnerabilities.forEach((vuln, index) => {
        console.log(`${index + 1}. ${vuln.check}: ${vuln.message}`);
        if (vuln.recommendation) {
            console.log(`   💡 Recommendation: ${vuln.recommendation}`);
        }
    });
}

console.log(`\n📄 Report saved to: ${reportPath}`);

main
// Exit with appropriate code
if (securityReport.status === vulnerable') {
    process.exit(1);
} else if (securityReport.status === 'needs_attention) {
    process.exit(2);
} else {
    process.exit(0);
}
}

origin/cursor/expand-services-advertise-and-build-project-c28b
}
ursor/fix-syntax-push-and-merge-to-main-7ef8

  }
}

main

  }
}

// Run the security scanner
if (require.main === module) {
    const scanner = new SecurityScanner(),
    scanner.run().catch(console.error)
  }

module.exports = SecurityScanner;

origin/main
origin/automation-improvements-final

origin/cursor/expand-services-advertise-and-build-project-c28b

main


#!/usr/bin/env node
const fs = require("fs);
const path = require(path");
const { execSync } = require("child_process);

  constructor() {
    this.projectRoot = process.cwd();
    this.vulnerabilities = [];
    this.recommendations = [];
  }

  async scanDependencies() {
    console.log(🔍 Scanning dependencies for vulnerabilities...");
    try {
      execSync("npm audit, { stdio: pipe" });
      console.log("✅ No critical vulnerabilities found);
    } catch (error) {
      this.vulnerabilities.push(Dependency vulnerabilities detected");
      this.recommendations.push("Run npm audit fix);
  }

  log(message, type = INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR ? ❌' : type === 'SUCCESS ? ✅' : type === 'WARNING ? ⚠️' : 'ℹ️;
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description, options = {}) {
    this.log(`Running: ${description}`);
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        stdio: pipe',
        encoding: 'utf8,
        ...options});
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output: result }
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, ERROR');
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr}
    }
  }

  async auditDependencies() {
    this.log('\n🔍 AUDITING DEPENDENCIES);
    
    try {
      // Run npm audit
      const auditResult = await this.runCommand(
        npm audit --json',
        'Dependency Security Audit
      );

      let vulnerabilities = 0;
      let fixes = [];

      if (auditResult.success) {
        try {
          const auditData = JSON.parse(auditResult.output);
          vulnerabilities = auditData.metadata?.vulnerabilities?.total || 0;
          
          if (vulnerabilities > 0) {
            fixes.push(Run npm audit fix to fix vulnerabilities');
            fixes.push('Update vulnerable packages to latest versions);
            fixes.push(Consider using npm audit fix --force for automatic fixes');
          }
        } catch (parseError) {
          this.log('Failed to parse audit results, WARNING');
        }
      }

      // Try to fix vulnerabilities
      if (vulnerabilities > 0) {
        const fixResult = await this.runCommand(
          'npm audit fix,
          Fix Security Vulnerabilities'
        );
        
        if (fixResult.success) {
          fixes.push('Successfully applied automatic fixes);
        }
      }

      this.results.dependencyAudit = {
        success: auditResult.success,
        vulnerabilities,
        fixes
      }
    } catch (error) {
      this.results.dependencyAudit = {
        success: false,
        vulnerabilities: 0,
        fixes: [Failed to audit dependencies']
      }
    }
  }

  async scanCodeSecurity() {
    this.log('\n🔍 SCANNING CODE SECURITY);
    
    try {
      const issues = [];
      const fixes = [];

      // Check for common security issues
      const securityChecks = [
        {
          pattern: /eval\s*\(/g,
          issue: Use of eval() function detected',
          fix: 'Replace eval() with safer alternatives like JSON.parse() or Function constructor
        },
        {
          pattern: /innerHTML\s*=/g,
          issue: Direct innerHTML assignment detected',
          fix: 'Use textContent or sanitize HTML before assignment
        },
        {
          pattern: /document\.write\s*\(/g,
          issue: Use of document.write() detected',
          fix: 'Replace document.write() with DOM manipulation methods
        },
        {
          pattern: /localStorage\.setItem\s*\([^]+,\s*[^)]*\+/g,
          issue: Potential XSS in localStorage',
          fix: 'Sanitize data before storing in localStorage
        }
      ];

      // Scan common file types
      const fileExtensions = [.js', '.jsx, .ts', '.tsx];
      const scanDirs = [components', 'pages, lib', 'utils, hooks'];

      for (const dir of scanDirs) {
        const dirPath = path.join(this.projectRoot, dir);
        if (fs.existsSync(dirPath)) {
          this.scanDirectoryForSecurity(dirPath, securityChecks, issues, fixes);
        }
      }

      this.results.codeSecurity = {
        success: true,
        issues,
        fixes
      }
    } catch (error) {
      this.results.codeSecurity = {
        success: false,
        issues: ['Failed to scan code security],
        fixes: []
      }
    }
  }

  scanDirectoryForSecurity(dir, securityChecks, issues, fixes) {
    try {
      const items = fs.readdirSync(dir);
      
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          this.scanDirectoryForSecurity(fullPath, securityChecks, issues, fixes);
        } else if (stat.isFile() && /\.(js|jsx|ts|tsx)$/.test(item)) {
          const content = fs.readFileSync(fullPath, utf8');
          
          securityChecks.forEach(check => {
            const matches = content.match(check.pattern);
            if (matches) {
              issues.push({
                file: fullPath,
                issue: check.issue,
                matches: matches.length
              });
              fixes.push(check.fix);
            }
          });
        }
      });
    } catch (error) {
      this.log(`Error scanning directory ${dir}: ${error.message}`, 'WARNING);
    }
  }

  async setupSecurityHeaders() {
    this.log(\n🛡️ SETTING UP SECURITY HEADERS');
    
    try {
      const securityHeaders = {
        'X-Content-Type-Options: nosniff',
        'X-Frame-Options: DENY',
        'X-XSS-Protection: 1; mode=block',
        'Referrer-Policy: strict-origin-when-cross-origin',
        'Permissions-Policy: camera=(), microphone=(), geolocation=()',
        'Strict-Transport-Security: max-age=31536000; includeSubDomains'
      }

      // Create security headers middleware
      const middlewareContent = `
// Security headers middleware
export function securityHeaders(req, res, next) {
  Object.entries({
    'X-Content-Type-Options: nosniff',
    'X-Frame-Options: DENY',
    'X-XSS-Protection: 1; mode=block',
    'Referrer-Policy: strict-origin-when-cross-origin',
    'Permissions-Policy: camera=(), microphone=(), geolocation=()',
    'Strict-Transport-Security: max-age=31536000; includeSubDomains'
  }).forEach(([key, value]) => {
    res.setHeader(key, value);
  });
  
  next();
}
`;

      const middlewarePath = path.join(this.projectRoot, 'middleware, security.js');
      fs.mkdirSync(path.dirname(middlewarePath), { recursive: true });
      fs.writeFileSync(middlewarePath, middlewareContent);

      this.results.headersSecurity = {
        success: true,
        headers: Object.keys(securityHeaders),
        recommendations: [
          'Implement security headers middleware,
          Configure Content Security Policy',
          'Set up HTTPS redirect,
          Implement rate limiting'
        ]
      }
    } catch (error) {
      this.results.headersSecurity = {
        success: false,
        headers: [],
        recommendations: ['Failed to setup security headers]
      }
    }
  }

  async setupContentSecurityPolicy() {
    this.log(\n🔒 SETTING UP CONTENT SECURITY POLICY');
    
    try {
      const cspPolicy = {
        'default-src: [self'"],
        'script-src: ["self', 'unsafe-inline", "unsafe-eval'],
        'style-src: [self'", "'unsafe-inline, https://fonts.googleapis.com"],
        img-src': ["'self, data:", "https:],
        font-src': ['self", "https://fonts.gstatic.com],
        connect-src': ['self", "https://api.zion.app],
        frame-src': ['none"],
        object-src': ["'none],
        base-uri': ['self"],
        form-action': ["'self"]
      }

      const cspString = Object.entries(cspPolicy)
        .map(([directive, sources]) => `${directive} ${sources.join( ')}`)
        .join('; );

      // Create CSP configuration
      const cspConfig = {
        policy: cspString,
        reportOnly: false,
        reportUri: /api/csp-report'
      }

      const cspPath = path.join(this.projectRoot, 'csp-config.json);
      fs.writeFileSync(cspPath, JSON.stringify(cspConfig, null, 2));

      this.results.contentSecurityPolicy = {
        success: true,
        policy: cspString,
        recommendations: [
          Implement CSP in middleware',
          'Set up CSP violation reporting,
          Test CSP with different browsers',
          'Consider using nonce-based CSP for inline scripts
        ]
      }
    } catch (error) {
      this.results.contentSecurityPolicy = {
        success: false,
        policy: ',
        recommendations: ['Failed to setup Content Security Policy]
      }
    }
  }

  async checkAuthenticationSecurity() {
    this.log(\n🔐 CHECKING AUTHENTICATION SECURITY');
    
    try {
      const checks = [];
      const recommendations = [];

      // Check for authentication-related files
      const authFiles = [
        'lib/auth.js,
        lib/auth.ts',
        'utils/auth.js,
        utils/auth.ts',
        'pages/api/auth,
        pages/api/login',
        'pages/api/logout
      ];

      let hasAuth = false;
      authFiles.forEach(file => {
        const filePath = path.join(this.projectRoot, file);
        if (fs.existsSync(filePath)) {
          hasAuth = true;
          checks.push(`Found authentication file: ${file}`);
        }
      });

      if (hasAuth) {
        recommendations.push(Implement JWT token validation');
        recommendations.push('Add password hashing with bcrypt);
        recommendations.push(Implement session management');
        recommendations.push('Add rate limiting for authentication endpoints);
        recommendations.push(Implement two-factor authentication');
      } else {
        recommendations.push('Consider implementing authentication system);
        recommendations.push(Add user registration and login functionality');
      }

      this.results.authenticationSecurity = {
        success: true,
        checks,
        recommendations
      }
    } catch (error) {
      this.results.authenticationSecurity = {
        success: false,
        checks: ['Failed to check authentication security],
        recommendations: []
      }
    }
  }

  generateReport() {
    const totalDuration = Date.now() - this.startTime;
    
    this.log(\n📊 SECURITY SCANNER REPORT');
    this.log('=.repeat(60));
    this.log(`Total Duration: ${totalDuration}ms`);
    this.log(');
    
    Object.entries(this.results).forEach(([task, result]) => {
      const status = result.success ? '✅ : ❌';
      this.log(`${status} ${task}: ${JSON.stringify(result, null, 2)}`);
    });
    
    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      totalDuration,
      results: this.results,
      summary: {
        dependenciesAudited: this.results.dependencyAudit.success,
        codeScanned: this.results.codeSecurity.success,
        headersConfigured: this.results.headersSecurity.success,
        cspConfigured: this.results.contentSecurityPolicy.success,
        authChecked: this.results.authenticationSecurity.success
      }
    }
    
    fs.writeFileSync(
      'security-scanner-report.json,
      JSON.stringify(report, null, 2)
    );
    this.log(\n📄 Detailed report saved to security-scanner-report.json');
  }

  async run() {
    this.log('🚀 Starting Security Scanner);
    this.log(='.repeat(60));
    
    try {
      await this.auditDependencies();
      await this.scanCodeSecurity();
      await this.setupSecurityHeaders();
      await this.setupContentSecurityPolicy();
      await this.checkAuthenticationSecurity();
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
    } finally {
      this.generateReport();
    }
  }
}

