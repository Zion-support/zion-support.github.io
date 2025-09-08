


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

#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔒 Starting Security Scanner...');
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
console.log('

#!/usr/bin/env node


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
      const result = execSync(command, {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8',
        ...options,
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
      const auditResult = await this.runCommand(
        'npm audit --json',
        'Dependency Security Audit'
      );

      let vulnerabilities = 0;
      let fixes = [];

      if (auditResult.success) {
        try {
          const auditData = JSON.parse(auditResult.output);
          vulnerabilities = auditData.metadata?.vulnerabilities?.total || 0;
          
          if (vulnerabilities > 0) {
            fixes.push('Run npm audit fix to fix vulnerabilities');
            fixes.push('Update vulnerable packages to latest versions');
            fixes.push('Consider using npm audit fix --force for automatic fixes');
          }
        } catch (parseError) {
          this.log('Failed to parse audit results', 'WARNING');
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
      this.results.dependencyAudit = {
        success: false,
        vulnerabilities: 0,
        fixes: ['Failed to audit dependencies']
      };
    }




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



#!/usr/bin/env node


const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
==============================');

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
    }
    }
};
function runSecurityCheck(name, checkFunction) {
    securityReport.summary.total++;
    console.log(`\n🔍 Security Check: ${name}`);

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


  ensureReportsDir() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }
  async runCommand(command, description, options = {}) {
    this.log(`Running: ${description}`);





    

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
const out = `security-scan-report-${Date.now()}.json`;
fs.writeFileSync(out, JSON.stringify(report, null, 2));
console.log(`✅ Security scan completed. Report: ${out}`);
// Check for outdated dependencies
runSecurityCheck('Dependency Security', () => {


  }

  async checkSensitiveFiles() {
    this.log("🔐 Checking for sensitive files...");


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


  }

  async auditDependencies() {
    this.log('\n🔍 AUDITING DEPENDENCIES');

        }
    
    try {
        if (!fs.existsSync('package.json')) {
            return {
                status: 'fail',
                message: 'package.json not found'
            };
        }
    try {
        if (!fs.existsSync('package.json')) {
            return {
                status: 'fail',
                message: 'package.json not found'
            };
        }




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





      }
      
      if (!permissionIssues) {
        this.fixes.push("File permissions are secure");
        this.log("✅ File permissions are secure");
      }
    } catch (error) {
      this.log(`❌ Failed to check file permissions: ${error.message}`, "ERROR");
      this.errors.push(error.message);
    }





});


    } catch (error) {
        return {
            status: 'fail',
            message: 'Could not check security headers configuration'
        };
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

    });




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

        
        if (stat.isDirectory()) {
          this.scanDirectoryForSecurity(fullPath, securityChecks, issues, fixes);
        } else if (stat.isFile() && /\.(js|jsx|ts|tsx)$/.test(item)) {
          const content = fs.readFileSync(fullPath, 'utf8');
          
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
      this.log(`Error scanning directory ${dir}: ${error.message}`, 'WARNING');
    }
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
        return {
            status: 'fail',
            severity: 'high',
            message: `Environment security issues: ${issues.join(', ')}`,
            recommendation: 'Fix environment file security issues'
        };
    }
});
  ensureLogDir() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

    } else {
      this.log('⚠️ Dependency vulnerabilities found', 'WARN');
    }

// Check for HTTPS configuration
runSecurityCheck('HTTPS Configuration', () => {
    try {
        if (fs.existsSync('next.config.js')) {
            const configContent = fs.readFileSync('next.config.js', 'utf8');

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

  }

    
    // Save detailed report




    
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

    
    fs.writeFileSync(
      'security-scanner-report.json',
      JSON.stringify(report, null, 2)


    );
    this.log('\n📄 Detailed report saved to security-scanner-report.json');
  }

  async run() {
    this.log('🚀 Starting Security Scanner');
    this.log('='.repeat(60));
    
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

        sensitiveFiles.forEach(file => {
            if (fs.existsSync(file)) {
                const stats = fs.statSync(file);
                const mode = stats.mode & parseInt('777', 8);


                // Check if file is world-readable (should not be)
                if (mode & 4) {
                    issues.push(`${file} is world-readable`);
                }
            }





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
    this.log('\n📄 Detailed report saved to security-scanner-report.json');
  }

  async run() {
    this.log('🚀 Starting Security Scanner');
    this.log('='.repeat(60));
    
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

// Run the security scanner
if (require.main === module) {

module.exports = SecurityScanner;

}
}
}
  const scanner = new SecurityScanner();
  scanner.run().catch(console.error);
}

module.exports = SecurityScanner;
  }
}
// Run the security scanner
if (require.main === module) {
    const scanner = new SecurityScanner(),
    scanner.run().catch(console.error)
  }


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



  const scanner = new SecurityScanner();
  scanner.run().catch(console.error);
}

module.exports = SecurityScanner;
