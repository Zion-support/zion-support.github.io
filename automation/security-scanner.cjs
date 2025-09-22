<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
=======

#!/usr/bin/env node

const fs = require('fs');
const path = require('path');















class SecurityScanner {
  // TODO: Implement
}
  constructor() {

    this.ensureReportsDir();

  ensureReportsDir() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });

  log(message) {
    const timestamp = new Date().toISOString();

    ];

    const results = [];
    let passedChecks = 0;

    for (const check of securityChecks) {
      try {
  // TODO: Implement
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');
const report = {
  timestamp: new Date().toISOString(),
  checks: [],
  vulnerabilities: [],

// npm audit (non-fatal)
  // TODO: Implement

  });
  const audit = JSON.parse(auditJson);
  const vulnCount =
    audit.metadata && audit.metadata.vulnerabilities;
      ? Object.values(audit.metadata.vulnerabilities).reduce((a, b) => a + b, 0)
      : 0;
  report.checks.push({

if (found.length) report.overallStatus = 'warning';

<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
console.log('🔒 Starting Security Scanner...');
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======

console.log('🔒 Starting Security Scanner...');
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
      checks: {};
  async runAllChecks() {}
    try {}
      await this.checkNpmAudit();
      await this.checkDependencies();
      await this.checkSensitiveFiles();
      await this.checkEnvironmentVariables();
      this.determineOverallStatus();
      this.saveReport();

      return false;
  async checkNpmAudit() {}

      const audit = JSON.parse(auditResult);
      const vulnerabilities = audit.vulnerabilities || {};
      const vulnCount = Object.keys(vulnerabilities).length;
      this.securityReport.checks.npmAudit = {}

      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      // Check for known vulnerable packages;
      const vulnerablePackages = [];
      for (const [name, version] of Object.entries(dependencies)) {}
        // This is a simplified check - in production, you'd use a proper vulnerability database;

    const foundFiles = [];
    for (const file of sensitiveFiles) {}
      if (fs.existsSync(file)) {}
        foundFiles.push(file);

    const foundSensitiveVars = [];
    for (const [key, value] of Object.entries(envVars)) {}
      if (sensitiveVars.some(sensitive => key.toUpperCase().includes(sensitive))) {}
        foundSensitiveVars.push(key);

    if (hasErrors) {}
      this.securityReport.overallStatus = 'error';
    } else if (hasVulnerabilities) {}
      this.securityReport.overallStatus = 'vulnerable';
    } else if (hasWarnings) {}
      this.securityReport.overallStatus = 'warning';
    } else {}
      this.securityReport.overallStatus = 'secure';

    process.exit(success ? 0 : 1);
module.exports = SecurityScanner;














>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

class SecurityScanner {
  // TODO: Implement
}
  constructor() {
    this.projectRoot = process.cwd();
    this.results = {

    };
  }




/**
 * Security Scanner;
 * Comprehensive security scanning and enhancement automation;
 */

console.log('🔒 Zion Tech Group - Security Scanner');
<<<<<<< HEAD
console.log('

#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Security Scanner
 * Comprehensive security scanning and enhancement automation
 */
class SecurityScanner {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.results = {
      dependencyAudit: { success: false, vulnerabilities: 0, fixes: [] },
      codeSecurity: { success: false, issues: [], fixes: [] },
      headersSecurity: { success: false, headers: [], recommendations: [] },
      contentSecurityPolicy: { success: false, policy: '', recommendations: [] },
      authenticationSecurity: { success: false, checks: [], recommendations: [] }
    };
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description, options = {}) {
    this.log(`Running: ${description}`);

    try {
      const result = execSync("npm audit --json", {
        cwd: this.projectRoot,
        encoding: "utf8"
      });
      
      const auditData = JSON.parse(result);
      
      if (auditData.vulnerabilities) {
        const vulnCount = Object.keys(auditData.vulnerabilities).length;
        if (vulnCount > 0) {
          this.vulnerabilities.push(`Found ${vulnCount} vulnerabilities in dependencies`);
          this.log(`⚠️ Found ${vulnCount} vulnerabilities in dependencies`, "WARN");
        } else {
          this.fixes.push("No vulnerabilities found in dependencies");
          this.log("✅ No vulnerabilities found in dependencies");
        }
      }
    } catch (error) {
      this.log(`❌ NPM audit failed: ${error.message}`, "ERROR");
      this.errors.push(error.message);
    }

}

// Check for sensitive data in files
runSecurityCheck('Sensitive Data Scan', () => {
    const sensitivePatterns = [
        { pattern: /password\s*[:=]\s*['"][^'"]+['"]/gi, name: 'Hardcoded Password' },
        { pattern: /api[_-]?key\s*[:=]\s*['"][^'"]+['"]/gi, name: 'API Key' },
        { pattern: /secret\s*[:=]\s*['"][^'"]+['"]/gi, name: 'Secret' },
        { pattern: /token\s*[:=]\s*['"][^'"]+['"]/gi, name: 'Token' },
        { pattern: /private[_-]?key\s*[:=]\s*['"][^'"]+['"]/gi, name: 'Private Key' }
    ];
    
    const filesToCheck = [
        'package.json',
        'next.config.js',
        '.env',
        '.env.local',
        '.env.production'
    ];
    
    const foundIssues = [];
    
    filesToCheck.forEach(file => {
        if (fs.existsSync(file)) {
            const content = fs.readFileSync(file, 'utf8');
            sensitivePatterns.forEach(({ pattern, name }) => {
                if (pattern.test(content)) {
                    foundIssues.push(`${name} found in ${file}`);
                }
            });
        }
    });
    
    if (foundIssues.length === 0) {
        return {
            status: 'pass',
            message: 'No sensitive data found in configuration files'
        };
    } else {
        return {
            status: 'fail',
            severity: 'high',
            message: `Sensitive data found: ${foundIssues.join(', ')}`,
            recommendation: 'Remove hardcoded credentials and use environment variables'
        };
    }
});

class SecurityScanner {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'security-scanner.log');
    this.ensureLogDir();
  }

// Check for outdated dependencies
runSecurityCheck('Dependency Security', () => {

  }

  async auditDependencies() {
    this.log('\n🔍 AUDITING DEPENDENCIES');

    try {
        if (!fs.existsSync('package.json')) {
            return {
                status: 'fail',
                message: 'package.json not found'
            };

    try {
      const sensitiveFiles = [
        ".env",
        ".env.local",
        ".env.production",
        ".env.development",
        "config.json",
        "secrets.json",
        "private.key",
        "id_rsa",
        "id_dsa"
      ];
      
      let foundSensitive = false;
      
      for (const file of sensitiveFiles) {
        const filePath = path.join(this.projectRoot, file);
        if (fs.existsSync(filePath)) {
          this.vulnerabilities.push(`Sensitive file found: ${file}`);
          this.log(`⚠️ Sensitive file found: ${file}`, "WARN");
          foundSensitive = true;
        }

        // Check for known vulnerable packages
        const vulnerablePackages = [
          "lodash@4.17.0",
          "moment@2.19.0",
          "handlebars@4.0.0"
        ];

        }
        
        if (!foundVulnerable) {
          this.fixes.push("No known vulnerable packages found");
          this.log("✅ No known vulnerable packages found");
        }
      }
    } catch (error) {
      this.log(`❌ Failed to check dependencies: ${error.message}`, "ERROR");
      this.errors.push(error.message);
    }

        }

      }

      // Try to fix vulnerabilities
      if (vulnerabilities > 0) {
        const fixResult = await this.runCommand(
          'npm audit fix',
          'Fix Security Vulnerabilities'
        );
        
        if (fixResult.success) {
          fixes.push('Successfully applied automatic fixes');
        }
      }

      this.results.dependencyAudit = {
        success: auditResult.success,
        vulnerabilities,
        fixes
      };

    } catch (error) {
      this.log(`❌ Failed to check file permissions: ${error.message}`, "ERROR");
      this.errors.push(error.message);
    }

});

// Check for environment file security
runSecurityCheck('Environment Security', () => {
    const envFiles = ['.env', '.env.local', '.env.production'];
    const issues = [];
    
    envFiles.forEach(file => {
        if (fs.existsSync(file)) {
            const content = fs.readFileSync(file, 'utf8');
            
            // Check if .env files are in .gitignore
            if (fs.existsSync('.gitignore')) {
                const gitignore = fs.readFileSync('.gitignore', 'utf8');
                if (!gitignore.includes(file)) {
                    issues.push(`${file} not in .gitignore`);
                }
            }
            
            // Check for weak passwords
            const weakPasswordPattern = /password\s*=\s*(123|password|admin|test)/gi;
            if (weakPasswordPattern.test(content)) {
                issues.push(`Weak password detected in ${file}`);
            }

  }

  async scanCodeSecurity() {
    this.log('\n🔍 SCANNING CODE SECURITY');
    
    try {
      const issues = [];
      const fixes = [];

      // Check for common security issues
      const securityChecks = [
        {
          pattern: /eval\s*\(/g,
          issue: 'Use of eval() function detected',
          fix: 'Replace eval() with safer alternatives like JSON.parse() or Function constructor'
        },
        {
          pattern: /innerHTML\s*=/g,
          issue: 'Direct innerHTML assignment detected',
          fix: 'Use textContent or sanitize HTML before assignment'
        },
        {
          pattern: /document\.write\s*\(/g,
          issue: 'Use of document.write() detected',
          fix: 'Replace document.write() with DOM manipulation methods'
        },
        {
          pattern: /localStorage\.setItem\s*\([^,]+,\s*[^)]*\+/g,
          issue: 'Potential XSS in localStorage',
          fix: 'Sanitize data before storing in localStorage'

        }
      ];

      // Scan common file types
      const fileExtensions = ['.js', '.jsx', '.ts', '.tsx'];
      const scanDirs = ['components', 'pages', 'lib', 'utils', 'hooks'];

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
      };
    } catch (error) {
      this.results.codeSecurity = {
        success: false,
        issues: ['Failed to scan code security'],
        fixes: []
      };
    }
  }

  scanDirectoryForSecurity(dir, securityChecks, issues, fixes) {
    try {
      const items = fs.readdirSync(dir);
      
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
  async runSecurityScan() {
    const securityChecks = [
      { name: 'NPM Audit', command: 'npm audit', description: 'Checking for vulnerable dependencies' },
      { name: 'Security Fix', command: 'npm audit fix --force', description: 'Fixing security vulnerabilities' },
      { name: 'Dependency Check', command: 'npm outdated', description: 'Checking for outdated dependencies' },
      { name: 'License Check', command: 'npm audit --audit-level moderate', description: 'Checking license compliance' }
    ];

    const results = [];
    let passedChecks = 0;

    for (const check of securityChecks) {
      try {
        this.log(`🔍 Running ${check.name}...`);
        this.log(`📝 ${check.description}`);
        
        execSync(check.command, { stdio: 'pipe' });
        }
        
        console.log(`✅ ${check.name} completed successfully`);
        results.push({ 
          name: check.name, 
          status: 'passed', 
          description: check.description,
          error: null 
        });
        passedChecks++;
      } catch (error) {
        console.log(`⚠️ ${check.name} completed with warnings`);
        results.push({ 
          name: check.name, 
          status: 'warning', 
          description: check.description,
          error: error.message 
        });
      }
    }

  async setupSecurityHeaders() {
    this.log('\n🛡️ SETTING UP SECURITY HEADERS');
    
    try {
      const securityHeaders = {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
      };

      // Create security headers middleware
      const middlewareContent = `
// Security headers middleware
export function securityHeaders(req, res, next) {
  Object.entries({
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
  }).forEach(([key, value]) => {
    res.setHeader(key, value);
  });
  
  next();
}
`;

      const middlewarePath = path.join(this.projectRoot, 'middleware', 'security.js');
      fs.mkdirSync(path.dirname(middlewarePath), { recursive: true });
      fs.writeFileSync(middlewarePath, middlewareContent);

      this.results.headersSecurity = {
        success: true,
        headers: Object.keys(securityHeaders),
        recommendations: [
          'Implement security headers middleware',
          'Configure Content Security Policy',
          'Set up HTTPS redirect',
          'Implement rate limiting'
        ]
      };
    } catch (error) {
      this.results.headersSecurity = {
        success: false,
        headers: [],
        recommendations: ['Failed to setup security headers']
      };
    }
  }

  async setupContentSecurityPolicy() {
    this.log('\n🔒 SETTING UP CONTENT SECURITY POLICY');
    
    try {
      const cspPolicy = {
        'default-src': ["'self'"],
        'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
        'style-src': ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        'img-src': ["'self'", "data:", "https:"],
        'font-src': ["'self'", "https://fonts.gstatic.com"],
        'connect-src': ["'self'", "https://api.zion.app"],
        'frame-src': ["'none'"],
        'object-src': ["'none'"],
        'base-uri': ["'self'"],
        'form-action': ["'self'"]
      };

      const cspString = Object.entries(cspPolicy)
        .map(([directive, sources]) => `${directive} ${sources.join(' ')}`)
        .join('; ');

      // Create CSP configuration
      const cspConfig = {
        policy: cspString,
        reportOnly: false,
        reportUri: '/api/csp-report'
      };

      const cspPath = path.join(this.projectRoot, 'csp-config.json');
      fs.writeFileSync(cspPath, JSON.stringify(cspConfig, null, 2));

      this.results.contentSecurityPolicy = {
        success: true,
        policy: cspString,
        recommendations: [
          'Implement CSP in middleware',
          'Set up CSP violation reporting',
          'Test CSP with different browsers',
          'Consider using nonce-based CSP for inline scripts'
        ]
      };
    } catch (error) {
      this.results.contentSecurityPolicy = {
        success: false,
        policy: '',
        recommendations: ['Failed to setup Content Security Policy']
      };
    }
  }

  async checkAuthenticationSecurity() {
    this.log('\n🔐 CHECKING AUTHENTICATION SECURITY');
    
    try {
      const checks = [];
      const recommendations = [];

      // Check for authentication-related files
      const authFiles = [
        'lib/auth.js',
        'lib/auth.ts',
        'utils/auth.js',
        'utils/auth.ts',
        'pages/api/auth',
        'pages/api/login',
        'pages/api/logout'
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
        recommendations.push('Implement JWT token validation');
        recommendations.push('Add password hashing with bcrypt');
        recommendations.push('Implement session management');
        recommendations.push('Add rate limiting for authentication endpoints');
        recommendations.push('Implement two-factor authentication');
      } else {
    recommendations.push('Consider implementing authentication system'),
    recommendations.push('Add user registration and login functionality')
  }

      this.results.authenticationSecurity = {
        success: true,
        checks,
        recommendations
      };
    } catch (error) {
      this.results.authenticationSecurity = {
        success: false,
        checks: ['Failed to check authentication security'],
        recommendations: []
      };
    }
  }

  generateReport() {
    const totalDuration = Date.now() - this.startTime;
    
    this.log('\n📊 SECURITY SCANNER REPORT');
    this.log('='.repeat(60));
    this.log(`Total Duration: ${totalDuration}ms`);
    this.log('');
    
    Object.entries(this.results).forEach(([task, result]) => {
      const status = result.success ? '✅' : '❌';
      this.log(`${status} ${task}: ${JSON.stringify(result, null, 2)}`);
    });

    if (issues.length === 0) {
        return {
            status: 'pass',
            message: 'Environment files are properly secured'
        };

    } else {
      this.log('⚠️ Dependency vulnerabilities found', 'WARN');
    }

            if (configContent.includes('https') || configContent.includes('SSL')) {
                return {
                    status: 'pass',
                    message: 'HTTPS configuration detected'
                };
            }
        }

        return {
            status: 'warning',
            message: 'HTTPS configuration not explicitly found',
            recommendation: 'Ensure HTTPS is properly configured for production'
        };

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
    };
    
    this.log(`📊 Security scan completed! Report saved to: ${reportPath}`);
    this.log(`🔒 Security Score: ${report.securityScore}% (${passedChecks}/${securityChecks.length} checks passed)`);

    try {
      await this.auditDependencies();
      await this.scanCodeSecurity();
      await this.setupSecurityHeaders();
      await this.setupContentSecurityPolicy();
      await this.checkAuthenticationSecurity();

    } catch (error) {
        return {
            status: 'fail',
            message: 'Could not check HTTPS configuration'
        };
    }

});

    } catch (error) {
      this.log(`⚠️ Security fix had issues: ${error.message}`, "WARN");
    }

        sensitiveFiles.forEach(file => {
            if (fs.existsSync(file)) {
                const stats = fs.statSync(file);
                const mode = stats.mode & parseInt('777', 8);

                // Check if file is world-readable (should not be)
                if (mode & 4) {
                    issues.push(`${file} is world-readable`);
                }
            }

  }

  log(message) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async runSecurityScan() {
    const securityChecks = [
      { name: 'NPM Audit', command: 'npm audit', description: 'Checking for vulnerable dependencies' },
      { name: 'Security Fix', command: 'npm audit fix --force', description: 'Fixing security vulnerabilities' },
      { name: 'Dependency Check', command: 'npm outdated', description: 'Checking for outdated dependencies' },
      { name: 'License Check', command: 'npm audit --audit-level moderate', description: 'Checking license compliance' }
    ];

    const results = [];
    let passedChecks = 0;

    for (const check of securityChecks) {
      try {
        this.log(`🔍 Running ${check.name}...`);
        this.log(`📝 ${check.description}`);
        
        execSync(check.command, { stdio: 'pipe' });
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const { execSync } = require("child_process");"console.log(" Starting Security Scan.");const report = { timestamp: new Date().toISOString()," checks: []," vulnerabilities: [],"" overallStatus: "healthy"};/ npm audit (non-fatal)try {" const auditJson = execSync("npm audit --json", {"" encoding: "utf8","" stdio: ["ignore", "pipe", "pipe"]}); const audit = JSON.parse(auditJson); const vulnCount audit.metadata && audit.metadata.vulnerabilities ? Object.values(audit.metadata.vulnerabilities).reduce((a, b) => a + b, 0) : 0; report.checks.push({"" name: "npm audit","" status: vulnCount ? "warning" : "pass"," summary: vulnCount}); if (vulnCount) {" report.overallStatus = "warning"; }} catch (e) {"" report.checks.push({ name: "npm audit", status: "error", error: e.message });}/ sensitive files"const sensitiveFiles = [".env"," ".env.local"," ".env.production"," "private-key.pem",];const found = sensitiveFiles.filter(f => fs.existsSync(f));report.checks.push({"" name: "sensitive files","" status: found.length ? "warning" : "pass", found});"if (found.length) report.overallStatus = "warning";const out = `security-scan-report-${Date.now()}.json`;fs.writeFileSync(out, JSON.stringify(report, null, 2));"`console.log(` Security scan completed. Report: ${out}`);""`"`
#!/usr/bin/env node;
const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');
const report = {
  timestamp: new Date().toISOString(),
  checks: [],
  vulnerabilities: [],
  overallStatus: 'healthy',
};
// npm audit (non-fatal)
try {
  const auditJson = execSync('npm audit --json', {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  const audit = JSON.parse(auditJson);
  const vulnCount =
    audit.metadata && audit.metadata.vulnerabilities
      ? Object.values(audit.metadata.vulnerabilities).reduce((a, b) => a + b, 0)
      : 0;
  report.checks.push({
    name: 'npm audit',
    status: vulnCount ? 'warning' : 'pass',
    summary: vulnCount,
  });
  if (vulnCount) {
    report.overallStatus = 'warning';
  }
} catch (e) {
  report.checks.push({ name: 'npm audit', status: 'error', error: e.message });
}
// sensitive files
const sensitiveFiles = [
  '.env',
  '.env.local',
  '.env.production',
  'private-key.pem',
];
const found = sensitiveFiles.filter(f => fs.existsSync(f));
report.checks.push({
  name: 'sensitive files',
  status: found.length ? 'warning' : 'pass',
  found,
});
if (found.length) report.overallStatus = 'warning';
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD

>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
class SecurityScanner {}
  constructor() {}
    this.securityReport = {}
      timestamp: new Date().toISOString(),
      overallStatus: 'unknown',
      checks: {};
    };
  };
  async runAllChecks() {}
    try {}
      await this.checkNpmAudit();
      await this.checkDependencies();
      await this.checkSensitiveFiles();
      await this.checkEnvironmentVariables();
      this.determineOverallStatus();
      this.saveReport();
      return this.securityReport.overallStatus === 'secure';
    } catch (error) {}
      console.error('Security scan failed:', error);
      return false;
    };
  };
  async checkNpmAudit() {}
    try {}
      const auditResult = execSync('npm audit --json', { })
        encoding: 'utf8',
        stdio: 'pipe'
      }
});
      const audit = JSON.parse(auditResult);
      const vulnerabilities = audit.vulnerabilities || {};
      const vulnCount = Object.keys(vulnerabilities).length;
      this.securityReport.checks.npmAudit = {}
        status: vulnCount === 0 ? 'secure' : 'vulnerable',
        vulnerabilities: vulnCount,
        message: vulnCount === 0 ? 'No vulnerabilities found' : `${vulnCount} vulnerabilities found
      };
    } catch (error) {}
      this.securityReport.checks.npmAudit = {}
        status: 'error',
        message: 'Failed to run npm audit'
      };
    };
  };
  async checkDependencies() {}
    try {}
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      // Check for known vulnerable packages;
      const vulnerablePackages = [];
      for (const [name, version] of Object.entries(dependencies)) {}
        // This is a simplified check - in production, you'd use a proper vulnerability database;
        if (name.includes('test') && version.includes('0.0.0')) {}
          vulnerablePackages.push(name);
        };
      };
      this.securityReport.checks.dependencies = {}
        status: vulnerablePackages.length === 0 ? 'secure' : 'warning',
        vulnerablePackages,
        message: vulnerablePackages.length === 0 ? 'Dependencies look secure' : `Found ${vulnerablePackages.length} potentially vulnerable packages
      };
    } catch (error) {}
      this.securityReport.checks.dependencies = {}
        status: 'error',
        message: 'Failed to check dependencies'
      };
    };
  };
  async checkSensitiveFiles() {}
    const sensitiveFiles = []
      '.env',
      '.env.local',
      '.env.production',
      'config.json',
      'secrets.json'
    ];
    const foundFiles = [];
    for (const file of sensitiveFiles) {}
      if (fs.existsSync(file)) {}
        foundFiles.push(file);
      };
    };
    this.securityReport.checks.sensitiveFiles = {}
      status: foundFiles.length === 0 ? 'secure' : 'warning',
      foundFiles,
      message: foundFiles.length === 0 ? 'No sensitive files found in root' : `Found ${foundFiles.length} sensitive files
    };
  };
  async checkEnvironmentVariables() {}
    const envVars = process.env;
    const sensitiveVars = ['API_KEY', 'SECRET', 'PASSWORD', 'TOKEN', 'PRIVATE'];
    const foundSensitiveVars = [];
    for (const [key, value] of Object.entries(envVars)) {}
      if (sensitiveVars.some(sensitive => key.toUpperCase().includes(sensitive))) {}
        foundSensitiveVars.push(key);
      };
    };
    this.securityReport.checks.environmentVariables = {}
      status: foundSensitiveVars.length === 0 ? 'secure' : 'warning',
      foundSensitiveVars,
      message: foundSensitiveVars.length === 0 ? 'No sensitive environment variables found' : `Found ${foundSensitiveVars.length} sensitive environment variables
    };
  };
  determineOverallStatus() {}
    const checks = Object.values(this.securityReport.checks);
    const hasErrors = checks.some(check => check.status === 'error');
    const hasVulnerabilities = checks.some(check => check.status === 'vulnerable');
    const hasWarnings = checks.some(check => check.status === 'warning');
    if (hasErrors) {}
      this.securityReport.overallStatus = 'error';
    } else if (hasVulnerabilities) {}
      this.securityReport.overallStatus = 'vulnerable';
    } else if (hasWarnings) {}
      this.securityReport.overallStatus = 'warning';
    } else {}
      this.securityReport.overallStatus = 'secure';
    };
  };
  saveReport() {}
    const reportPath = path.join(process.cwd(), 'security-report.json');
    try {}
      fs.writeFileSync(reportPath, JSON.stringify(this.securityReport, null, 2));
      console.log(`Security report saved to ${reportPath}`);
    } catch (error) {}
      console.error('Failed to save security report:', error);
    };
  };
};
// Run if called directly;
if (require.main === module) {}
  const scanner = new SecurityScanner();
  scanner.runAllChecks().then(success => {})
    console.log(`Security scan ${success ? 'passed' : 'failed'}`);
    process.exit(success ? 0 : 1);
  }
});
};
module.exports = SecurityScanner;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
#!/usr/bin/env node
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Security Scanner
 * Comprehensive security scanning and enhancement automation
 */
class SecurityScanner {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.results = {
      dependencyAudit: { success: false, vulnerabilities: 0, fixes: [] },
      codeSecurity: { success: false, issues: [], fixes: [] },
      headersSecurity: { success: false, headers: [], recommendations: [] },
      contentSecurityPolicy: { success: false, policy: '', recommendations: [] },
      authenticationSecurity: { success: false, checks: [], recommendations: [] }
    };
  }

<<<<<<< HEAD
<<<<<<< HEAD
  ensureReportsDir() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
=======
=======





>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Security Scanner
 * Comprehensive security scanning and enhancement automation
 */
class SecurityScanner {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.results = {
      dependencyAudit: { success: false, vulnerabilities: 0, fixes: [] },
      codeSecurity: { success: false, issues: [], fixes: [] },
      headersSecurity: { success: false, headers: [], recommendations: [] },
      contentSecurityPolicy: { success: false, policy: '', recommendations: [] },
      authenticationSecurity: { success: false, checks: [], recommendations: [] }
    };
  }

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  ensureReportsDir() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
=======
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
#!/usr/bin/env node

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
/**
 * Security Scanner
 * Automatically scans for security vulnerabilities
 */

<<<<<<< HEAD
<<<<<<< HEAD
=======
const { execSync } = require('child_process');
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358

console.log('🔒 Zion Tech Group - Security Scanner');
console.log('=====================================');

const securityReport = {
    timestamp: new Date().toISOString(),
    status: 'secure',
    checks: {},
    vulnerabilities: [],
    summary: {
        total: 0,
        passed: 0,
        failed: 0,
        warnings: 0,
        vulnerabilities: 0
<<<<<<< HEAD
    }
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
};
function runSecurityCheck(name, checkFunction) {
    securityReport.summary.total++;
    console.log(`\n🔍 Security Check: ${name}`);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
    }




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Security Scanner
 * Comprehensive security scanning and enhancement automation
 */
class SecurityScanner {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.results = {
      dependencyAudit: { success: false, vulnerabilities: 0, fixes: [] },
      codeSecurity: { success: false, issues: [], fixes: [] },
      headersSecurity: { success: false, headers: [], recommendations: [] },
      contentSecurityPolicy: { success: false, policy: '', recommendations: [] },
      authenticationSecurity: { success: false, checks: [], recommendations: [] }
    };
  }

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
#!/usr/bin/env node
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
/**
 * Security Scanner
 * Comprehensive security scanning and enhancement automation
 */
class SecurityScanner {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.results = {
      dependencyAudit: { success: false, vulnerabilities: 0, fixes: [] },
      codeSecurity: { success: false, issues: [], fixes: [] },
      headersSecurity: { success: false, headers: [], recommendations: [] },
      contentSecurityPolicy: { success: false, policy: '', recommendations: [] },
      authenticationSecurity: { success: false, checks: [], recommendations: [] }
    };
  }

=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description, options = {}) {
    this.log(`Running: ${description}`);
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    

#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

class SecurityScanner {
  constructor() {
    this.projectRoot = process.cwd();
    this.vulnerabilities = [];
    this.fixes = [];
    this.errors = [];
  }

  log(message, type = "INFO") {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type}] ${message}`);
  }

  async runNpmAudit() {
    this.log("🔍 Running npm audit...");
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
<<<<<<< HEAD
=======
const fs = require('fs');
const path = require('path');

/**
 * Security Scanner
 * Comprehensive security scanning and enhancement automation
 */
class SecurityScanner {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.results = {
      dependencyAudit: { success: false, vulnerabilities: 0, fixes: [] },
      codeSecurity: { success: false, issues: [], fixes: [] },
      headersSecurity: { success: false, headers: [], recommendations: [] },
      contentSecurityPolicy: { success: false, policy: '', recommendations: [] },
      authenticationSecurity: { success: false, checks: [], recommendations: [] }
    };
  }

#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Security Scanner
 * Comprehensive security scanning and enhancement automation
 */
class SecurityScanner {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.results = {
      dependencyAudit: { success: false, vulnerabilities: 0, fixes: [] },
      codeSecurity: { success: false, issues: [], fixes: [] },
      headersSecurity: { success: false, headers: [], recommendations: [] },
      contentSecurityPolicy: { success: false, policy: '', recommendations: [] },
      authenticationSecurity: { success: false, checks: [], recommendations: [] }
    };
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description, options = {}) {
    this.log(`Running: ${description}`);
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    try {
        const result = checkFunction();
        if (result.status === 'pass') {
            securityReport.checks[name] = result;
            securityReport.summary.passed++;
            console.log(`✅ ${name}: ${result.message}`);
        } else if (result.status === 'warning') {
            securityReport.checks[name] = result;
            securityReport.summary.warnings++;
            console.log(`⚠️  ${name}: ${result.message}`);
        } else {
            securityReport.checks[name] = result;
            securityReport.summary.failed++;
            securityReport.summary.vulnerabilities++;
            securityReport.vulnerabilities.push({
                check: name,
                severity: result.severity || 'medium',
                message: result.message,
                recommendation: result.recommendation
            });
            console.log(`❌ ${name}: ${result.message}`);
        }
    } catch (error) {
        securityReport.checks[name] = {
            status: 'fail',
            message: `Error: ${error.message}`,
            error: error.toString()
        };
        securityReport.summary.failed++;
        console.log(`❌ ${name}: Error - ${error.message}`);
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
}
// Check for sensitive data in files
runSecurityCheck('Sensitive Data Scan', () => {
    const sensitivePatterns = [
        { pattern: /password\s*[:=]\s*['"][^'"]+['"]/gi, name: 'Hardcoded Password' },
        { pattern: /api[_-]?key\s*[:=]\s*['"][^'"]+['"]/gi, name: 'API Key' },
        { pattern: /secret\s*[:=]\s*['"][^'"]+['"]/gi, name: 'Secret' },
        { pattern: /token\s*[:=]\s*['"][^'"]+['"]/gi, name: 'Token' },
        { pattern: /private[_-]?key\s*[:=]\s*['"][^'"]+['"]/gi, name: 'Private Key' }
    ];
    const filesToCheck = [
        'package.json',
        'next.config.js',
        '.env',
        '.env.local',
        '.env.production'
    ];
    const foundIssues = [];
    filesToCheck.forEach(file => {
        if (fs.existsSync(file)) {
            const content = fs.readFileSync(file, 'utf8');
            sensitivePatterns.forEach(({ pattern, name }) => {
                if (pattern.test(content)) {
                    foundIssues.push(`${name} found in ${file}`);
                }
            });
        }
    });
    if (foundIssues.length === 0) {
        return {
            status: 'pass',
            message: 'No sensitive data found in configuration files'
        };
    } else {
        return {
            status: 'fail',
            severity: 'high',
            message: `Sensitive data found: ${foundIssues.join(', ')}`,
            recommendation: 'Remove hardcoded credentials and use environment variables'
        };
    }
});
<<<<<<< HEAD
const out = `security-scan-report-${Date.now()}.json`;
fs.writeFileSync(out, JSON.stringify(report, null, 2));
console.log(`✅ Security scan completed. Report: ${out}`);
// Check for outdated dependencies
runSecurityCheck('Dependency Security', () => {
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
  }

  async checkSensitiveFiles() {
    this.log("🔐 Checking for sensitive files...");
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');


class SecurityScanner {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'security-scanner.log');
    this.ensureLogDir();
  }



// Check for outdated dependencies
runSecurityCheck('Dependency Security', () => {


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  }

  async auditDependencies() {
    this.log('\n🔍 AUDITING DEPENDENCIES');
<<<<<<< HEAD
<<<<<<< HEAD

  }
  async auditDependencies() {
    this.log('\n🔍 AUDITING DEPENDENCIES');
    
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
    try {
        if (!fs.existsSync('package.json')) {
            return {
                status: 'fail',
                message: 'package.json not found'
            };
        }
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    try {
        if (!fs.existsSync('package.json')) {
            return {
                status: 'fail',
                message: 'package.json not found'
            };
        }

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    try {
        if (!fs.existsSync('package.json')) {
            return {
                status: 'fail',
                message: 'package.json not found'
            };
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
        }
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
=======
=======

    


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  }

  async checkSensitiveFiles() {
    this.log("🔐 Checking for sensitive files...");
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    try {
      const sensitiveFiles = [
        ".env",
        ".env.local",
        ".env.production",
        ".env.development",
        "config.json",
        "secrets.json",
        "private.key",
        "id_rsa",
        "id_dsa"
      ];
      
      let foundSensitive = false;
      
      for (const file of sensitiveFiles) {
        const filePath = path.join(this.projectRoot, file);
        if (fs.existsSync(filePath)) {
          this.vulnerabilities.push(`Sensitive file found: ${file}`);
          this.log(`⚠️ Sensitive file found: ${file}`, "WARN");
          foundSensitive = true;
        }
<<<<<<< HEAD
<<<<<<< HEAD
        
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
=======




        
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        // Check for known vulnerable packages
        const vulnerablePackages = [
            'lodash', // Known for prototype pollution
            'moment', // Deprecated, use date-fns or dayjs
            'request' // Deprecated
        ];
<<<<<<< HEAD
        const foundVulnerable = Object.keys(dependencies).filter(dep =>
            vulnerablePackages.includes(dep)
        );
        if (foundVulnerable.length === 0) {
            return {
                status: 'pass',
                message: 'No known vulnerable packages detected',
                packageCount: Object.keys(dependencies).length
            };
        } else {
            return {
                status: 'warning',
                message: `Potentially vulnerable packages: ${foundVulnerable.join(', ')}`,
                recommendation: 'Consider updating or replacing these packages'
            };
=======
        




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        }
    } catch (error) {
        return {
            status: 'fail',
            message: 'Could not analyze dependencies'
        };
    }
<<<<<<< HEAD
});
// Check for security headers in Next.js config
runSecurityCheck('Security Headers', () => {
    try {
        if (!fs.existsSync('next.config.js')) {
            return {
                status: 'warning',
                message: 'next.config.js not found - security headers not configured'
            };
        }
        const configContent = fs.readFileSync('next.config.js', 'utf8');
        const securityHeaders = [
            'X-Frame-Options',
            'X-Content-Type-Options',
            'X-XSS-Protection',
            'Strict-Transport-Security',
            'Content-Security-Policy'
        ];
        const foundHeaders = securityHeaders.filter(header =>
            configContent.includes(header)
        );
        if (foundHeaders.length === securityHeaders.length) {
            return {
                status: 'pass',
                message: 'All recommended security headers are configured',
                headers: foundHeaders
            };
        } else {
            return {
                status: 'warning',
                message: `Only ${foundHeaders.length}/${securityHeaders.length} security headers configured`,
                recommendation: 'Add missing security headers to next.config.js'
            };
        }
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======




        }


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      }
<<<<<<< HEAD
<<<<<<< HEAD
      
      if (!permissionIssues) {
        this.fixes.push("File permissions are secure");
        this.log("✅ File permissions are secure");
      }
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358

      // Try to fix vulnerabilities
      if (vulnerabilities > 0) {
        const fixResult = await this.runCommand(
          'npm audit fix',
          'Fix Security Vulnerabilities'
        );
        
        if (fixResult.success) {
          fixes.push('Successfully applied automatic fixes');
        }
      }

      this.results.dependencyAudit = {
        success: auditResult.success,
        vulnerabilities,
        fixes
      };
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      }
      
      if (!permissionIssues) {
        this.fixes.push("File permissions are secure");
        this.log("✅ File permissions are secure");
      }
<<<<<<< HEAD
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    } catch (error) {
      this.log(`❌ Failed to check file permissions: ${error.message}`, "ERROR");
      this.errors.push(error.message);
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
});
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    } catch (error) {
        return {
            status: 'fail',
            message: 'Could not check security headers configuration'
        };
    }

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
});
// Check for environment file security
runSecurityCheck('Environment Security', () => {
    const envFiles = ['.env', '.env.local', '.env.production'];
    const issues = [];
    envFiles.forEach(file => {
        if (fs.existsSync(file)) {
            const content = fs.readFileSync(file, 'utf8');
            // Check if .env files are in .gitignore
            if (fs.existsSync('.gitignore')) {
                const gitignore = fs.readFileSync('.gitignore', 'utf8');
                if (!gitignore.includes(file)) {
                    issues.push(`${file} not in .gitignore`);
                }
            }
            // Check for weak passwords
            const weakPasswordPattern = /password\s*=\s*(123|password|admin|test)/gi;
            if (weakPasswordPattern.test(content)) {
                issues.push(`Weak password detected in ${file}`);
            }
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  }

  async scanCodeSecurity() {
    this.log('\n🔍 SCANNING CODE SECURITY');
    
    try {
      const issues = [];
      const fixes = [];

      // Check for common security issues
      const securityChecks = [
        {
          pattern: /eval\s*\(/g,
          issue: 'Use of eval() function detected',
          fix: 'Replace eval() with safer alternatives like JSON.parse() or Function constructor'
        },
        {
          pattern: /innerHTML\s*=/g,
          issue: 'Direct innerHTML assignment detected',
          fix: 'Use textContent or sanitize HTML before assignment'
        },
        {
          pattern: /document\.write\s*\(/g,
          issue: 'Use of document.write() detected',
          fix: 'Replace document.write() with DOM manipulation methods'
        },
        {
          pattern: /localStorage\.setItem\s*\([^,]+,\s*[^)]*\+/g,
          issue: 'Potential XSS in localStorage',
          fix: 'Sanitize data before storing in localStorage'
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        }

    });

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        }
      ];

      // Scan common file types
      const fileExtensions = ['.js', '.jsx', '.ts', '.tsx'];
      const scanDirs = ['components', 'pages', 'lib', 'utils', 'hooks'];

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
      };
    } catch (error) {
      this.results.codeSecurity = {
        success: false,
        issues: ['Failed to scan code security'],
        fixes: []
      };
    }
  }

  scanDirectoryForSecurity(dir, securityChecks, issues, fixes) {
    try {
      const items = fs.readdirSync(dir);
      
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
  async runSecurityScan() {
    const securityChecks = [
      { name: 'NPM Audit', command: 'npm audit', description: 'Checking for vulnerable dependencies' },
      { name: 'Security Fix', command: 'npm audit fix --force', description: 'Fixing security vulnerabilities' },
      { name: 'Dependency Check', command: 'npm outdated', description: 'Checking for outdated dependencies' },
      { name: 'License Check', command: 'npm audit --audit-level moderate', description: 'Checking license compliance' }
    ];

    const results = [];
    let passedChecks = 0;

    for (const check of securityChecks) {
      try {
        this.log(`🔍 Running ${check.name}...`);
        this.log(`📝 ${check.description}`);
        
        execSync(check.command, { stdio: 'pipe' });
        }
        
        console.log(`✅ ${check.name} completed successfully`);
        results.push({ 
          name: check.name, 
          status: 'passed', 
          description: check.description,
          error: null 
        });
        passedChecks++;
      } catch (error) {
        console.log(`⚠️ ${check.name} completed with warnings`);
        results.push({ 
          name: check.name, 
          status: 'warning', 
          description: check.description,
          error: error.message 
        });
      }
    }

  async setupSecurityHeaders() {
    this.log('\n🛡️ SETTING UP SECURITY HEADERS');
    
    try {
      const securityHeaders = {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
      };

      // Create security headers middleware
      const middlewareContent = `
// Security headers middleware
export function securityHeaders(req, res, next) {
  Object.entries({
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
  }).forEach(([key, value]) => {
    res.setHeader(key, value);
  });
  
  next();
}
`;

      const middlewarePath = path.join(this.projectRoot, 'middleware', 'security.js');
      fs.mkdirSync(path.dirname(middlewarePath), { recursive: true });
      fs.writeFileSync(middlewarePath, middlewareContent);

      this.results.headersSecurity = {
        success: true,
        headers: Object.keys(securityHeaders),
        recommendations: [
          'Implement security headers middleware',
          'Configure Content Security Policy',
          'Set up HTTPS redirect',
          'Implement rate limiting'
        ]
      };
    } catch (error) {
      this.results.headersSecurity = {
        success: false,
        headers: [],
        recommendations: ['Failed to setup security headers']
      };
    }
  }

  async setupContentSecurityPolicy() {
    this.log('\n🔒 SETTING UP CONTENT SECURITY POLICY');
    
    try {
      const cspPolicy = {
        'default-src': ["'self'"],
        'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
        'style-src': ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        'img-src': ["'self'", "data:", "https:"],
        'font-src': ["'self'", "https://fonts.gstatic.com"],
        'connect-src': ["'self'", "https://api.zion.app"],
        'frame-src': ["'none'"],
        'object-src': ["'none'"],
        'base-uri': ["'self'"],
        'form-action': ["'self'"]
      };

      const cspString = Object.entries(cspPolicy)
        .map(([directive, sources]) => `${directive} ${sources.join(' ')}`)
        .join('; ');

      // Create CSP configuration
      const cspConfig = {
        policy: cspString,
        reportOnly: false,
        reportUri: '/api/csp-report'
      };

      const cspPath = path.join(this.projectRoot, 'csp-config.json');
      fs.writeFileSync(cspPath, JSON.stringify(cspConfig, null, 2));

      this.results.contentSecurityPolicy = {
        success: true,
        policy: cspString,
        recommendations: [
          'Implement CSP in middleware',
          'Set up CSP violation reporting',
          'Test CSP with different browsers',
          'Consider using nonce-based CSP for inline scripts'
        ]
      };
    } catch (error) {
      this.results.contentSecurityPolicy = {
        success: false,
        policy: '',
        recommendations: ['Failed to setup Content Security Policy']
      };
    }
  }

  async checkAuthenticationSecurity() {
    this.log('\n🔐 CHECKING AUTHENTICATION SECURITY');
    
    try {
      const checks = [];
      const recommendations = [];

      // Check for authentication-related files
      const authFiles = [
        'lib/auth.js',
        'lib/auth.ts',
        'utils/auth.js',
        'utils/auth.ts',
        'pages/api/auth',
        'pages/api/login',
        'pages/api/logout'
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
        recommendations.push('Implement JWT token validation');
        recommendations.push('Add password hashing with bcrypt');
        recommendations.push('Implement session management');
        recommendations.push('Add rate limiting for authentication endpoints');
        recommendations.push('Implement two-factor authentication');
      } else {
    recommendations.push('Consider implementing authentication system'),
    recommendations.push('Add user registration and login functionality')
  }

      this.results.authenticationSecurity = {
        success: true,
        checks,
        recommendations
      };
    } catch (error) {
      this.results.authenticationSecurity = {
        success: false,
        checks: ['Failed to check authentication security'],
        recommendations: []
      };
    }
  }

  generateReport() {
    const totalDuration = Date.now() - this.startTime;
    
    this.log('\n📊 SECURITY SCANNER REPORT');
    this.log('='.repeat(60));
    this.log(`Total Duration: ${totalDuration}ms`);
    this.log('');
    
    Object.entries(this.results).forEach(([task, result]) => {
      const status = result.success ? '✅' : '❌';
      this.log(`${status} ${task}: ${JSON.stringify(result, null, 2)}`);
    });
<<<<<<< HEAD
<<<<<<< HEAD
    // Save detailed report
    });
=======
<<<<<<< HEAD
<<<<<<< HEAD
    // Save detailed report
    });
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
    
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======



    

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    if (issues.length === 0) {
        return {
            status: 'pass',
            message: 'Environment files are properly secured'
        };
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
    } else {
        return {
            status: 'fail',
            severity: 'high',
            message: `Environment security issues: ${issues.join(', ')}`,
            recommendation: 'Fix environment file security issues'
        };
    }
});
<<<<<<< HEAD
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
  ensureLogDir() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

    } else {
      this.log('⚠️ Dependency vulnerabilities found', 'WARN');
    }

<<<<<<< HEAD
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
// Check for HTTPS configuration
runSecurityCheck('HTTPS Configuration', () => {
    try {
        if (fs.existsSync('next.config.js')) {
            const configContent = fs.readFileSync('next.config.js', 'utf8');
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
            
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            if (configContent.includes('https') || configContent.includes('SSL')) {
                return {
                    status: 'pass',
                    message: 'HTTPS configuration detected'
                };
            }
        }
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
        
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        return {
            status: 'warning',
            message: 'HTTPS configuration not explicitly found',
            recommendation: 'Ensure HTTPS is properly configured for production'
        };
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
    
    // Save detailed report
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
    };
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
    
    this.log(`📊 Security scan completed! Report saved to: ${reportPath}`);
    this.log(`🔒 Security Score: ${report.securityScore}% (${passedChecks}/${securityChecks.length} checks passed)`);
    
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    return report;
  }
}

// Run security scan
const scanner = new SecurityScanner();
scanner.runSecurityScan().catch(console.error);
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    try {
      await this.auditDependencies();
      await this.scanCodeSecurity();
      await this.setupSecurityHeaders();
      await this.setupContentSecurityPolicy();
      await this.checkAuthenticationSecurity();
<<<<<<< HEAD

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    } catch (error) {
        return {
            status: 'fail',
            message: 'Could not check HTTPS configuration'
        };
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
});
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  async runSecurityFix() {
    this.log("🔧 Running security fixes...");
    try {
      execSync("npm audit fix", {
        cwd: this.projectRoot,
        stdio: "inherit"
      });
      this.fixes.push("Security vulnerabilities fixed");
      this.log("✅ Security vulnerabilities fixed");
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
    
    // Save detailed report
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
    };
    
    this.log(`📊 Security scan completed! Report saved to: ${reportPath}`);
    this.log(`🔒 Security Score: ${report.securityScore}% (${passedChecks}/${securityChecks.length} checks passed)`);
    
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    try {
      await this.auditDependencies();
      await this.scanCodeSecurity();
      await this.setupSecurityHeaders();
      await this.setupContentSecurityPolicy();
      await this.checkAuthenticationSecurity();
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
    } catch (error) {
      this.log(`⚠️ Security fix had issues: ${error.message}`, "WARN");
    }
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
});
<<<<<<< HEAD
=======

>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
// Check for file permissions
runSecurityCheck('File Permissions', () => {
    try {
        const sensitiveFiles = ['.env', '.env.local', 'package.json'];
        const issues = [];
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
        
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



    } catch (error) {
        return {
            status: 'fail',
            message: 'Could not check HTTPS configuration'
        };
    }


});


  }

  async runSecurityFix() {
    this.log("🔧 Running security fixes...");
    try {
      execSync("npm audit fix", {
        cwd: this.projectRoot,
        stdio: "inherit"
      });
      this.fixes.push("Security vulnerabilities fixed");
      this.log("✅ Security vulnerabilities fixed");


    } catch (error) {
      this.log(`⚠️ Security fix had issues: ${error.message}`, "WARN");
    }

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        sensitiveFiles.forEach(file => {
            if (fs.existsSync(file)) {
                const stats = fs.statSync(file);
                const mode = stats.mode & parseInt('777', 8);
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
                
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                // Check if file is world-readable (should not be)
                if (mode & 4) {
                    issues.push(`${file} is world-readable`);
                }
            }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  }
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




<<<<<<< HEAD
    for (const check of securityChecks) {
      try {
        this.log(`🔍 Running ${check.name}...`);
        this.log(`📝 ${check.description}`);
        
        execSync(check.command, { stdio: 'pipe' });
        
        console.log(`✅ ${check.name} completed successfully`);
        results.push({ 
          name: check.name, 
          status: 'passed', 
          description: check.description,
          error: null 
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
        });
        passedChecks++;
      } catch (error) {
        console.log(`⚠️ ${check.name} completed with warnings`);
        results.push({
          name: check.name,
          status: 'warning',
          description: check.description,
          error: error.message
        });
      }
    }

    const report = {
      timestamp: new Date().toISOString(),
      totalChecks: securityChecks.length,
      passedChecks,
      warningChecks: results.filter(r => r.status === 'warning').length,
      results,
      securityScore: Math.round((passedChecks / securityChecks.length) * 100)
    };

    const reportPath = path.join(this.reportsDir, 'security-scan-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    this.log(`📊 Security scan completed! Report saved to: ${reportPath}`);
    this.log(`🔒 Security Score: ${report.securityScore}% (${passedChecks}/${securityChecks.length} checks passed)`);

    return report;
  }
}
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
}
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
=======
console.log(`\n📄 Report saved to: ${reportPath}`);
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
        });
<<<<<<< HEAD
        
        if (issues.length === 0) {
            return {
                status: 'pass',
                message: 'File permissions are secure'
            };
        } else {
            return {
                status: 'warning',
                message: `Permission issues: ${issues.join(', ')}`,
                recommendation: 'Restrict file permissions for sensitive files'
            };
        }
=======
  }

  async run() {
    this.log("🎯 Starting Security Scan Process...");
    this.log("====================================");
    try {
      await this.runNpmAudit();
      await this.checkSensitiveFiles();
      await this.checkPackageJsonSecurity();
      await this.checkDependenciesSecurity();
      await this.checkFilePermissions();
      await this.runSecurityFix();
      
      this.log("\n📊 SECURITY SCAN REPORT");
      this.log("=======================");
      this.log(`Vulnerabilities Found: ${this.vulnerabilities.length}`);
      this.log(`Fixes Applied: ${this.fixes.length}`);
      this.log(`Errors: ${this.errors.length}`);
      
      if (this.vulnerabilities.length > 0) {
        this.log("\n⚠️ Vulnerabilities Found:");
        this.vulnerabilities.forEach((vuln, index) => {
          this.log(`  ${index + 1}. ${vuln}`);
        });
      }
      
      if (this.fixes.length > 0) {
        this.log("\n✅ Fixes Applied:");
        this.fixes.forEach((fix, index) => {
          this.log(`  ${index + 1}. ${fix}`);
        });
      }
      
      if (this.errors.length > 0) {
        this.log("\n❌ Errors:");
        this.errors.forEach((error, index) => {
          this.log(`  ${index + 1}. ${error}`);
        });
      }
      
      const securityScore = this.fixes.length / (this.fixes.length + this.vulnerabilities.length) * 100;
      this.log(`\n🛡️ Security Score: ${securityScore.toFixed(1)}%`);
      
      if (securityScore >= 80) {
        this.log("🎉 System is secure!");
      } else if (securityScore >= 60) {
        this.log("⚠️ System has some security issues");
      } else {
        this.log("🚨 System has critical security issues");
      }
      
      this.log("\n🎉 Security scan completed!");
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    } catch (error) {
      this.log(`💥 Fatal error: ${error.message}`, "ERROR");
      process.exit(1);
    }

// Exit with appropriate code
if (securityReport.status === 'vulnerable') {
    process.exit(1);
} else if (securityReport.status === 'needs_attention') {
    process.exit(2);
} else {
    process.exit(0);



}




  }
}

const scanner = new SecurityScanner();
scanner.run().catch(console.error);








  }

  async scanCode() {
    this.log('🔍 Scanning code for security issues...');
    
    const codeScan = await this.runCommand(
      'npm run security:audit',
      'Code security scan'
    );
    
    if (codeScan.success) {
      this.log('✅ Code scan completed');
    } else {
      this.log('⚠️ Code security issues found', 'WARN');
    }
  }

  async checkSecrets() {
    this.log('🔍 Checking for exposed secrets...');
    
    const secretPatterns = [
      'password\\s*=\\s*["\'][^"\']+["\']',
      'api[_-]?key\\s*=\\s*["\'][^"\']+["\']',
      'secret\\s*=\\s*["\'][^"\']+["\']',
      'token\\s*=\\s*["\'][^"\']+["\']'
    ];

    for (const pattern of secretPatterns) {
      const secretCheck = await this.runCommand(
        `grep -r -i "${pattern}" . --exclude-dir=node_modules --exclude-dir=.git || true`,
        `Secret pattern check: ${pattern}`
      );
      
      if (secretCheck.success && secretCheck.output.trim()) {
        this.log(`⚠️ Potential secret found: ${pattern}`, 'WARN');
<<<<<<< HEAD
      }
    }
  }

  async generateSecurityReport() {
    this.log('📊 Generating security report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      scans: {
        dependencies: 'completed',
        code: 'completed',
        secrets: 'completed'
      },
      recommendations: [
        'Regularly update dependencies to latest secure versions',
        'Implement proper secret management using environment variables',
        'Add security headers to Next.js configuration',
        'Enable HTTPS in production',
        'Implement rate limiting for API endpoints',
        'Add input validation and sanitization',
        'Regular security audits and penetration testing'
      ]
    };

    const reportFile = path.join(__dirname, 'logs', 'security-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`📄 Security report saved to: ${reportFile}`);
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    console.log(`🔒 [Security Scanner] ${message}`);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    console.log(`🔒 [Security Scanner] ${message}`);
=======
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }

  async runSecurityScan() {
    const securityChecks = [
      { name: 'NPM Audit', command: 'npm audit', description: 'Checking for vulnerable dependencies' },
      { name: 'Security Fix', command: 'npm audit fix --force', description: 'Fixing security vulnerabilities' },
      { name: 'Dependency Check', command: 'npm outdated', description: 'Checking for outdated dependencies' },
      { name: 'License Check', command: 'npm audit --audit-level moderate', description: 'Checking license compliance' }
    ];

    const results = [];
    let passedChecks = 0;

    for (const check of securityChecks) {
      try {
        this.log(`🔍 Running ${check.name}...`);
        this.log(`📝 ${check.description}`);
        
        execSync(check.command, { stdio: 'pipe' });
        
        console.log(`✅ ${check.name} completed successfully`);
        results.push({ 
          name: check.name, 
          status: 'passed', 
          description: check.description,
          error: null 

        });

    } catch (error) {
      this.log(`💥 Fatal error: ${error.message}`, "ERROR");
      process.exit(1);
    }

// Exit with appropriate code
if (securityReport.status === 'vulnerable') {
    process.exit(1);
} else if (securityReport.status === 'needs_attention') {
    process.exit(2);
} else {
    process.exit(0);

  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async runSecurityScan() {
    const securityChecks = [
      { name: 'NPM Audit', command: 'npm audit', description: 'Checking for vulnerable dependencies' },
      { name: 'Security Fix', command: 'npm audit fix --force', description: 'Fixing security vulnerabilities' },
      { name: 'Dependency Check', command: 'npm outdated', description: 'Checking for outdated dependencies' },
      { name: 'License Check', command: 'npm audit --audit-level moderate', description: 'Checking license compliance' }
    ];

    const results = [];
    let passedChecks = 0;

    for (const check of securityChecks) {
      try {
        this.log(`🔍 Running ${check.name}...`);
        this.log(`📝 ${check.description}`);
        
        execSync(check.command, { stdio: 'pipe' });


origin/cursor/expand-services-advertise-and-build-project-c28b

#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Security Scanner
 * Comprehensive security scanning and enhancement automation
 */
class SecurityScanner {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.results = {
      dependencyAudit: { success: false, vulnerabilities: 0, fixes: [] },
      codeSecurity: { success: false, issues: [], fixes: [] },
      headersSecurity: { success: false, headers: [], recommendations: [] },
      contentSecurityPolicy: { success: false, policy: '', recommendations: [] },
      authenticationSecurity: { success: false, checks: [], recommendations: [] }
    };
  }


#!/usr/bin/env node


/**
 * Security Scanner
 * Automatically scans for security vulnerabilities
 */
const { execSync } = require('child_process');


const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');


console.log('🔒 Zion Tech Group - Security Scanner');
console.log('=====================================');

const securityReport = {
=======
console.log(
const securityReport = {)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    timestamp: new Date().toISOString(),
    status: secure,

    checks: {},
    summary: {,
  total: 0,
        passed: 0,
        failed: 0,
        warnings: 0,















/**
  // TODO: Implement






/**
  // TODO: Implement







  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type ===ERROR' ? '❌: type ===SUCCESS' ? '✅: type ===WARNING' ? '⚠️: ℹ️';
    console.log(`${prefix} [${timestamp}] ${message});
  }

  async runCommand(command, description, options = {}) {















const { execSync } = require("child_process");"
  // TODO: Implement
    this.vulnerabilities = [];
    this.fixes = [];
    this.errors = [];
"
  log(message, type = "INFO") {"

const fs = require('fs');
const path = require('path');

/**
  // TODO: Implement

/**
  // TODO: Implement







      });


      this.errors.push(error.message);



















// Check for sensitive data in files;"

    const foundIssues = [];
    filesToCheck.forEach(file => {)
        if (fs.existsSync(file)) {

    if (foundIssues.length === 0) {
        return {
  // TODO: Implement

  // TODO: Implement
  // TODO: Implement



  // TODO: Implement

    this.ensureLogDir();



  async checkSensitiveFiles() {
    this.log("🔐 Checking for sensitive files...");"


  async auditDependencies() {"
    this.log('\n🔍 AUDITING DEPENDENCIES');

    try {
  // TODO: Implement
}
        if (!fs.existsSync('package.json')) {
            return {
  // TODO: Implement
}
                status: fail,
                message: package.json not found
            };








      const sensitiveFiles = [
        ".env",
        ".env.local",
        ".env.production",
        ".env.development",
        "config.json",
        "secrets.json",
        "private.key",
        "id_rsa",
        "id_dsa]
      ];

      let foundSensitive = false;
      for (const file of sensitiveFiles) {
        const filePath = path.join(this.projectRoot, file);

          foundSensitive = true;


        if (!foundVulnerable) {"
          this.fixes.push("No known vulnerable packages found");
          this.log("✅ No known vulnerable packages found");"




  async checkFilePermissions() {"
    this.log("🔒 Checking file permissions...");"
  // TODO: Implement
      const importantFiles = ["

      let permissionIssues = false;
      for (const file of importantFiles) {
        if (fs.existsSync(filePath)) {
          const stats = fs.statSync(filePath);"
          const mode = stats.mode & parseInt("777", 8);"
          // Check if file is world-writable (dangerous)
          if (mode & 0o002) {`;
            this.vulnerabilities.push(`File ${file} is world-writable`);"`;
            this.log(`⚠️ File ${file} is world-writable`, "WARN");"
            permissionIssues = true;





















      // Try to fix vulnerabilities;
      if (vulnerabilities > 0) {
        const fixResult = await this.runCommand("

        );
        if (fixResult.success) {
          fixes.push('Successfully applied automatic fixes');


      this.results.dependencyAudit = {
        success: auditResult.success,
        vulnerabilities,







      if (!permissionIssues) {

        this.log("✅ File permissions are secure");"


























// Check for environment file security;"

                    issues.push(`${file} not in .gitignore`);
            // Check for weak passwords;
            const weakPasswordPattern = /password\s*=\s*(123|password|admin|test)/gi;


















  async scanCodeSecurity() {
    this.log('\n🔍 SCANNING CODE SECURITY');

  // TODO: Implement
      const fixes = [];

      // Check for common security issues;
        {

        },
          pattern: /innerHTML\s*=/g,
          issue: 'Direct innerHTML assignment detected',
          fix: 'Use textContent or sanitize HTML before assignment
          pattern: /document\.write\s*\(/g,)
          issue: 'Use of document.write() detected',
          fix: 'Replace document.write() with DOM manipulation methods
        {]

        }
      ];

      // Scan common file types;
      const fileExtensions = [.js,.jsx,.ts,.tsx];
      const scanDirs = [components,pages,lib,utils,hooks];

      for (const dir of scanDirs) {
        const dirPath = path.join(this.projectRoot, dir);
        if (fs.existsSync(dirPath)) {
          this.scanDirectoryForSecurity(dirPath, securityChecks, issues, fixes);

      this.results.codeSecurity = {
        success: true,
        issues,
    } catch (error) {

        fixes: []

  scanDirectoryForSecurity(dir, securityChecks, issues, fixes) {
  // TODO: Implement
      const items = fs.readdirSync(dir);
      items.forEach(item => {)
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);



  // TODO: Implement

        execSync(check.command, { stdio: 'pipe' });
        `;
        console.log(`✅ ${check.name} completed successfully`);
        results.push({ 

          description: check.description,
          error: null;)
        passedChecks++;
      } catch (error) {`;
        console.log(`⚠️ ${check.name} completed with warnings`);

          error: error.message;)

  async setupSecurityHeaders() {
    this.log('\n🛡️ SETTING UP SECURITY HEADERS');


      // Create security headers middleware;`;
      const middlewareContent = `
// Security headers middleware;
export function securityHeaders(req, res, next) {
  Object.entries({

  }).forEach(([key, value]) => {
    res.setHeader(key, value);
  next();

      fs.mkdirSync(path.dirname(middlewarePath), { recursive: true });
      fs.writeFileSync(middlewarePath, middlewareContent);

      this.results.headersSecurity = {
        headers: Object.keys(securityHeaders),
        recommendations: [

        .join('; ');
      // Create CSP configuration;
      const cspConfig = {
        policy: cspString,
        reportOnly: false,

  // TODO: Implement
      const checks = [];
      const recommendations = [];

      // Check for authentication-related files;
      const authFiles = [


      if (hasAuth) {
        recommendations.push('Implement JWT token validation');
        recommendations.push('Add password hashing with bcrypt');
        recommendations.push('Implement session management');
        recommendations.push('Add rate limiting for authentication endpoints');
        recommendations.push('Implement two-factor authentication');


      this.results.authenticationSecurity = {
        checks,
        recommendations;

        recommendations: []

  generateReport() {
    const totalDuration = Date.now() - this.startTime;



    // Save detailed report;



    // Save detailed report;












    if (issues.length === 0) {
  // TODO: Implement


  // TODO: Implement

            if (configContent.includes('https') || configContent.includes('SSL')) {
                return {
  // TODO: Implement
}
                    status: pass,
                    message: HTTPS configuration detected
                };
            }
        }


            if (configContent.includes('https') || configContent.includes('SSL')) {
  // TODO: Implement






    // Save detailed report;
      totalDuration,
      results: this.results,
  dependenciesAudited: this.results.dependencyAudit.success,
        codeScanned: this.results.codeSecurity.success,
        headersConfigured: this.results.headersSecurity.success,
        cspConfigured: this.results.contentSecurityPolicy.success,
        authChecked: this.results.authenticationSecurity.success;

    this.log(`🔒 Security Score: ${report.securityScore}% (${passedChecks}/${securityChecks.length} checks passed)`);






    return report;

// Run security scan;
scanner.runSecurityScan().catch(console.error);







  // TODO: Implement
      await this.auditDependencies();
      await this.scanCodeSecurity();
      await this.setupSecurityHeaders();
      await this.setupContentSecurityPolicy();
      await this.checkAuthenticationSecurity();






















        sensitiveFiles.forEach(file => {)
                const stats = fs.statSync(file);"


                // Check if file is world-readable (should not be)
                if (mode & 4) {`;
                    issues.push(`${file} is world-readable`);



  // TODO: Implement




console.log(`\n📄 Report saved to: ${reportPath});



  // TODO: Implement

  // TODO: Implement
  // TODO: Implement



  async run() {

  // TODO: Implement
})
      await this.runNpmAudit();
      await this.checkPackageJsonSecurity();
      await this.checkDependenciesSecurity();
      await this.checkFilePermissions();
      await this.runSecurityFix();

      const securityScore = this.fixes.length / (this.fixes.length + this.vulnerabilities.length) * 100;`;
      this.log(`\n🛡️ Security Score: ${securityScore.toFixed(1)}%`);
      if (securityScore >= 80) {"
        this.log("🎉 System is secure!");"
      } else if (securityScore >= 60) {"
        this.log("⚠️ System has some security issues");"
  // TODO: Implement
        this.log("🚨 System has critical security issues");"
      this.log("\n🎉 Security scan completed!");"

      process.exit(1);

// Exit with appropriate code;"

    process.exit(2);
  // TODO: Implement
    process.exit(0);


scanner.run().catch(console.error);














  async scanCode() {

<<<<<<< HEAD
  async checkSecrets() {
    this.log('🔍 Checking for exposed secrets...');
    
    const secretPatterns = [
      'password\\s*=\\s*["\'][^"\']+["\']',
      'api[_-]?key\\s*=\\s*["\'][^"\']+["\']',
      'secret\\s*=\\s*["\'][^"\']+["\']',
      'token\\s*=\\s*["\'][^"\']+["\']'
    ];

    for (const pattern of secretPatterns) {
      const secretCheck = await this.runCommand(
        `grep -r -i "${pattern}" . --exclude-dir=node_modules --exclude-dir=.git || true`,
        `Secret pattern check: ${pattern}`
      );
      
      if (secretCheck.success && secretCheck.output.trim()) {
        this.log(`⚠️ Potential secret found: ${pattern}`, 'WARN');
        passedChecks++;
      } catch (error) {
        console.log(`⚠️ ${check.name} completed with warnings`);
        results.push({ 
          name: check.name, 
          status: 'warning', 
          description: check.description,
          error: error.message 
        });

      }
    }
  }
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

  async generateSecurityReport() {
    this.log('📊 Generating security report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      scans: {
        dependencies: 'completed',
        code: 'completed',
        secrets: 'completed'
      },
      recommendations: [
        'Regularly update dependencies to latest secure versions',
        'Implement proper secret management using environment variables',
        'Add security headers to Next.js configuration',
        'Enable HTTPS in production',
        'Implement rate limiting for API endpoints',
        'Add input validation and sanitization',
        'Regular security audits and penetration testing'
      ]
    };

    const reportFile = path.join(__dirname, 'logs', 'security-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`📄 Security report saved to: ${reportFile}`);
  }

  async scan() {
    this.log('🔒 Starting security scan...');
    
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    await this.scanDependencies();
    await this.scanCode();
    await this.checkSecrets();
    await this.generateSecurityReport();


  async start() {
    this.log('🚀 Security Scanner started');
    // Initial scan;
    await this.scan();
    // Set up periodic scans every 4 hours;
    setInterval(async () => {
    }, 4 * 60 * 60 * 1000);

<<<<<<< HEAD
    this.log('🔄 Security Scanner is running. Scans every 4 hours.');
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  }
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
main

  }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
}

// Run the security scanner
if (require.main === module) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    const scanner = new SecurityScanner(),
    scanner.run().catch(console.error)
  }
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

module.exports = SecurityScanner;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
    this.log(`📊 Security scan completed! Report saved to: ${reportPath}`);
    this.log(`🔒 Security Score: ${report.securityScore}% (${passedChecks}/${securityChecks.length} checks passed)`);
    
    return report;
  }
}

// Run security scan
const scanner = new SecurityScanner();
scanner.runSecurityScan().catch(console.error);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
<<<<<<< HEAD
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const scanner = new SecurityScanner();
  scanner.scan().catch(console.error);
}

module.exports = SecurityScanner;
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
    const scanner = new SecurityScanner(),
    scanner.run().catch(console.error)
  }

module.exports = SecurityScanner;
origin/main
origin/automation-improvements-final

origin/cursor/expand-services-advertise-and-build-project-c28b

main


>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======








>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
    const scanner = new SecurityScanner(),
    scanner.run().catch(console.error)
  }
=======

// Run if called directly;
if (require.main === module) {
  scanner.start().catch(console.error);


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

      } catch (error) {
        console.log(`⚠️ ${check.name} completed with warnings`);
        results.push({ 
          name: check.name,
          status: warning,
          description: check.description,
          error: error.message;)
        });





    // Initial scan;
    // Set up periodic scans every 4 hours;

  }
}


<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
// Run the security scanner;
    const scanner = new SecurityScanner(),
    scanner.run().catch(console.error)



// Run security scan;






















>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
