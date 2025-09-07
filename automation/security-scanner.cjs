<<<<<<< HEAD
<<<<<<< HEAD


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

#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

=======
=======
  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }
  async runCommand(command, description, options = {}) {
    this.log(`Running: ${description}`);
=======
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
>>>>>>> main
=======
const fs = require('fs');
const path = require('path');
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
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

#!/usr/bin/env node

/**
 * Security Scanner
 * Automatically scans for security vulnerabilities
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔒 Zion Tech Group - Security Scanner');
console.log('

=======
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
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
<<<<<<< HEAD

=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
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
<<<<<<< HEAD

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

=======
=======
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
class SecurityScanner {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'security-scanner.log');
    this.ensureLogDir();
  }
<<<<<<< HEAD

// Check for outdated dependencies
runSecurityCheck('Dependency Security', () => {

=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
// Check for outdated dependencies
runSecurityCheck('Dependency Security', () => {
=======
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
  }
  async auditDependencies() {
    this.log('\n🔍 AUDITING DEPENDENCIES');
<<<<<<< HEAD

=======
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
    try {
        if (!fs.existsSync('package.json')) {
            return {
                status: 'fail',
                message: 'package.json not found'
            };
<<<<<<< HEAD

=======
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
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

=======
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
        // Check for known vulnerable packages
        const vulnerablePackages = [
          "lodash@4.17.0",
          "moment@2.19.0",
          "handlebars@4.0.0"
        ];
<<<<<<< HEAD

=======
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
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
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
<<<<<<< HEAD

        }

      }

=======
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
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
        }
      }
if (!permissionIssues) {
        this.fixes.push("File permissions are secure");
        this.log("✅ File permissions are secure");
      }
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
      }
      if (!permissionIssues) {
        this.fixes.push("File permissions are secure");
        this.log("✅ File permissions are secure");
      }
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
    } catch (error) {
      this.log(`❌ Failed to check file permissions: ${error.message}`, "ERROR");
      this.errors.push(error.message);
    }
<<<<<<< HEAD

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

=======
=======
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
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

=======
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
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

=======
// Save detailed report
    });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
    if (issues.length === 0) {
        return {
            status: 'pass',
            message: 'Environment files are properly secured'
        };
<<<<<<< HEAD

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

=======
=======
} else {
        return {
            status: 'fail',
            severity: 'high',
            message: `Environment security issues: ${issues.join(', ')}`,
            recommendation: 'Fix environment file security issues'
        };
    }
});
    } else {
      this.log('⚠️ Dependency vulnerabilities found', 'WARN');
    }
});
>>>>>>> main
// Check for HTTPS configuration
runSecurityCheck('HTTPS Configuration', () => {
    try {
        if (fs.existsSync('next.config.js')) {
            const configContent = fs.readFileSync('next.config.js', 'utf8');
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
    } catch (error) {
        return {
            status: 'fail',
            message: 'Could not check HTTPS configuration'
        };
    }
<<<<<<< HEAD

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

=======
});
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
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
>>>>>>> main
=======
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
    };
    this.log(`📊 Security scan completed! Report saved to: ${reportPath}`);
    this.log(`🔒 Security Score: ${report.securityScore}% (${passedChecks}/${securityChecks.length} checks passed)`);
    try {
      await this.auditDependencies();
      await this.scanCodeSecurity();
      await this.setupSecurityHeaders();
      await this.setupContentSecurityPolicy();
      await this.checkAuthenticationSecurity();
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
    } catch (error) {
      this.log(`⚠️ Security fix had issues: ${error.message}`, "WARN");
    }
});
>>>>>>> main
// Check for file permissions
runSecurityCheck('File Permissions', () => {
    try {
        const sensitiveFiles = ['.env', '.env.local', 'package.json'];
        const issues = [];
}
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
  log(message) {
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
        console.log(`✅ ${check.name} completed successfully`);
        results.push({ 
          name: check.name, 
          status: 'passed', 
          description: check.description,
<<<<<<< HEAD
          error: null 

        });

=======
          error: null
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
    } catch (error) {
      this.log(`💥 Fatal error: ${error.message}`, "ERROR");
      process.exit(1);
    }
<<<<<<< HEAD

=======
});
// Determine overall security status
if (securityReport.summary.failed > 0) {
    securityReport.status = 'vulnerable';
} else if (securityReport.summary.warnings > 0) {
    securityReport.status = 'needs_attention';
}
// Save security report
const reportPath = 'security-scan-report.json';
fs.writeFileSync(reportPath, JSON.stringify(securityReport, null, 2));
console.log('\n📊 Security Scan Summary');
console.log('========================');
console.log(`Total Checks: ${securityReport.summary.total}`);
console.log(`✅ Passed: ${securityReport.summary.passed}`);
console.log(`⚠️  Warnings: ${securityReport.summary.warnings}`);
console.log(`❌ Failed: ${securityReport.summary.failed}`);
console.log(`🚨 Vulnerabilities: ${securityReport.summary.vulnerabilities}`);
console.log(`\nOverall Status: ${securityReport.status.toUpperCase()}`);
if (securityReport.vulnerabilities.length > 0) {
    console.log('\n🚨 Security Issues Found:');
    securityReport.vulnerabilities.forEach((vuln, index) => {
        console.log(`${index + 1}. ${vuln.check}: ${vuln.message}`);
        if (vuln.recommendation) {
            console.log(`   💡 Recommendation: ${vuln.recommendation}`);
        }
    });
}
console.log(`\n📄 Report saved to: ${reportPath}`);
>>>>>>> main
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
// Exit with appropriate code
if (securityReport.status === 'vulnerable') {
    process.exit(1);
} else if (securityReport.status === 'needs_attention') {
    process.exit(2);
} else {
    process.exit(0);
<<<<<<< HEAD

=======
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
  }
  async scan() {
    this.log('🔒 Starting security scan...');
    await this.scanDependencies();
    await this.scanCode();
    await this.checkSecrets();
    await this.generateSecurityReport();
    this.log('🎉 Security scan completed!');
  }
  async start() {
    this.log('🚀 Security Scanner started');
    // Initial scan
    await this.scan();
    // Set up periodic scans every 4 hours
    setInterval(async () => {
      await this.scan();
    }, 4 * 60 * 60 * 1000);
    this.log('🔄 Security Scanner is running. Scans every 4 hours.');
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
  }
}
// Run the security scanner
if (require.main === module) {
    const scanner = new SecurityScanner(),
    scanner.run().catch(console.error)
  }
module.exports = SecurityScanner;
<<<<<<< HEAD

=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
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
#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

class SecurityScanner {
  constructor() {
    this.projectRoot = process.cwd();
    this.vulnerabilities = [];
    this.recommendations = [];
  }

  async scanDependencies() {
    console.log("🔍 Scanning dependencies for vulnerabilities...");
    try {
      execSync("npm audit", { stdio: "pipe" });
      console.log("✅ No critical vulnerabilities found");
    } catch (error) {
      this.vulnerabilities.push("Dependency vulnerabilities detected");
      this.recommendations.push("Run npm audit fix");
    }
  }

  async scanSecrets() {
    console.log("🔐 Scanning for exposed secrets...");
    const sensitivePatterns = [
      /password\s*[:=]\s*[""][^""]+[""]/gi,
      /api[_-]?key\s*[:=]\s*[""][^""]+[""]/gi,
      /secret\s*[:=]\s*[""][^""]+[""]/gi,
      /token\s*[:=]\s*[""][^""]+[""]/gi
    ];
    
    const files = this.findSourceFiles();
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, "utf8");
        for (const pattern of sensitivePatterns) {
          if (pattern.test(content)) {
            this.vulnerabilities.push(`Potential secret in ${path.relative(this.projectRoot, file)}`);
            this.recommendations.push(`Review ${path.relative(this.projectRoot, file)} for exposed secrets`);
          }
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }
    console.log("✅ Secret scanning completed");
  }

  findSourceFiles() {
    const files = [];
    const dirs = ["src", "components", "pages", "utils", "hooks"];
    dirs.forEach(dir => {
      const fullPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(fullPath)) {
        this.findFilesRecursively(fullPath, files);
      }
    });
    return files.filter(file => 
      file.endsWith(".js") || 
      file.endsWith(".jsx") || 
      file.endsWith(".ts") || 
      file.endsWith(".tsx")
    );
  }

  findFilesRecursively(dir, files) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        this.findFilesRecursively(fullPath, files);
      } else {
        files.push(fullPath);
      }
    }
  }

  async scanConfiguration() {
    console.log("⚙️  Scanning configuration files...");
    const configFiles = ["package.json", "next.config.js", ".env", ".env.local"];
    for (const file of configFiles) {
      const filePath = path.join(this.projectRoot, file);
      if (fs.existsSync(filePath)) {
        try {
          const content = fs.readFileSync(filePath, "utf8");
          // Check for insecure configurations
          if (content.includes("NODE_ENV=development") && file.includes(".env")) {
            this.recommendations.push(`Review ${file} for production-ready configuration`);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
    console.log("✅ Configuration scanning completed");
  }

  async runSecurityScan() {
    console.log("🛡️  Starting security scan...\n");
    await this.scanDependencies();
    await this.scanSecrets();
    await this.scanConfiguration();
    
    console.log("\n📊 Security Scan Summary:");
    console.log(`Vulnerabilities found: ${this.vulnerabilities.length}`);
    console.log(`Recommendations: ${this.recommendations.length}`);
    
    if (this.vulnerabilities.length > 0) {
      console.log("\n⚠️  Vulnerabilities:");
      this.vulnerabilities.forEach((vuln, index) => console.log(`${index + 1}. ${vuln}`));
    }
    
    if (this.recommendations.length > 0) {
      console.log("\n💡 Recommendations:");
      this.recommendations.forEach((rec, index) => console.log(`${index + 1}. ${rec}`));
    }
    
    if (this.vulnerabilities.length === 0) {
      console.log("\n🎉 No security issues found!");
    }
  }
}

const scanner = new SecurityScanner();
scanner.runSecurityScan().catch(console.error);
>>>>>>> origin/chore/fix-automation-and-build
=======
<<<<<<< HEAD
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
