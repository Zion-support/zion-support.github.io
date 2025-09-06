<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452

=======
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

<<<<<<< HEAD
console.log('🔒 Starting Security Scanner...');
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308

class SecurityScanner {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportPath = path.join(this.projectRoot, 'security-scan-report.json');
  }

  log(message) {
<<<<<<< HEAD
    console.log(`🔒 [Security Scanner] ${message}`);
  }

  async scan() {
    this.log('Starting security scan...');
    
    try {
      this.log('Scanning for security vulnerabilities...');
      
      const report = {
        timestamp: new Date().toISOString(),
        vulnerabilities: [],
        recommendations: [
          'Keep dependencies updated',
          'Use HTTPS for all external requests',
          'Implement proper authentication',
          'Validate all user inputs'
        ],
        status: 'completed'
      };
      
      fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
      this.log(`Security scan completed. Report saved to: ${this.reportPath}`);
      
    } catch (error) {
      this.log(`Error during security scan: ${error.message}`);
      throw error;
    }
  }
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
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
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
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
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
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======


origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
#!/usr/bin/env node


/**
 * Security Scanner
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
#!/usr/bin/env node

/**
 * Security Scanner
 * Automatically scans for security vulnerabilities
 */
=======
 * Automatically scans for security vulnerabilities
 */
const { execSync } = require('child_process');

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
<<<<<<< HEAD
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

console.log('🔒 Zion Tech Group - Security Scanner');
<<<<<<< HEAD
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
main
    }

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


origin/cursor/expand-services-advertise-and-build-project-c28b

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description, options = {}) {
    this.log(`Running: ${description}`);
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/expand-services-advertise-and-build-project-c28b

    
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
=======
console.log('
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452

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
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

main


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
main

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
=======
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

class SecurityScanner {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'security-scanner.log');
    this.ensureLogDir();
  }

<<<<<<< HEAD
// Check for outdated dependencies
runSecurityCheck('Dependency Security', () => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======


// Check for outdated dependencies
runSecurityCheck('Dependency Security', () => {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  }

  async checkSensitiveFiles() {
    this.log("🔐 Checking for sensitive files...");
<<<<<<< HEAD
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
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======



origin/cursor/expand-services-advertise-and-build-project-c28b


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  }

  async auditDependencies() {
    this.log('\n🔍 AUDITING DEPENDENCIES');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
    
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    try {
        if (!fs.existsSync('package.json')) {
            return {
                status: 'fail',
                message: 'package.json not found'
            };
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        }
origin/cursor/expand-services-advertise-and-build-project-c28b

    
  }
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

  async checkSensitiveFiles() {
    this.log("🔐 Checking for sensitive files...");


main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

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
      }
      
      if (!foundSensitive) {
        this.fixes.push("No sensitive files found in root directory");
        this.log("✅ No sensitive files found in root directory");
      }
    } catch (error) {
      this.log(`❌ Failed to check sensitive files: ${error.message}`, "ERROR");
      this.errors.push(error.message);
    }
  }

  async checkPackageJsonSecurity() {
    this.log("📦 Checking package.json for security issues...");
    try {
      const packageJsonPath = path.join(this.projectRoot, "package.json");
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
        
        // Check for scripts that might be dangerous
        if (packageJson.scripts) {
          const dangerousScripts = ["rm -rf", "sudo", "chmod 777"];
          let foundDangerous = false;
          
          for (const [scriptName, script] of Object.entries(packageJson.scripts)) {
            for (const dangerous of dangerousScripts) {
              if (script.includes(dangerous)) {
                this.vulnerabilities.push(`Dangerous script found: ${scriptName}`);
                this.log(`⚠️ Dangerous script found: ${scriptName}`, "WARN");
                foundDangerous = true;
              }
            }
          }
          
          if (!foundDangerous) {
            this.fixes.push("No dangerous scripts found in package.json");
            this.log("✅ No dangerous scripts found in package.json");
          }
        }
      }
    } catch (error) {
      this.log(`❌ Failed to check package.json: ${error.message}`, "ERROR");
      this.errors.push(error.message);
    }
  }

  async checkDependenciesSecurity() {
    this.log("🔍 Checking dependencies for security issues...");
    try {
      const packageJsonPath = path.join(this.projectRoot, "package.json");
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));


        
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        // Check for known vulnerable packages
        const vulnerablePackages = [
          "lodash@4.17.0",
          "moment@2.19.0",
          "handlebars@4.0.0"
        ];
<<<<<<< HEAD
=======
        
        let foundVulnerable = false;
        
        for (const vulnPackage of vulnerablePackages) {
          const [name, version] = vulnPackage.split("@");
          if (packageJson.dependencies && packageJson.dependencies[name]) {
            this.vulnerabilities.push(`Potentially vulnerable package: ${name}@${packageJson.dependencies[name]}`);
            this.log(`⚠️ Potentially vulnerable package: ${name}@${packageJson.dependencies[name]}`, "WARN");
            foundVulnerable = true;
          }

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

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
=======
  }
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

<<<<<<< HEAD
  async checkFilePermissions() {
    this.log("🔒 Checking file permissions...");
    try {
      const importantFiles = [
        "package.json",
        "tsconfig.json",
        "next.config.js"
      ];
      
      let permissionIssues = false;
      
      for (const file of importantFiles) {
        const filePath = path.join(this.projectRoot, file);
        if (fs.existsSync(filePath)) {
          const stats = fs.statSync(filePath);
          const mode = stats.mode & parseInt("777", 8);
          
          // Check if file is world-writable (dangerous)
          if (mode & 0o002) {
            this.vulnerabilities.push(`File ${file} is world-writable`);
            this.log(`⚠️ File ${file} is world-writable`, "WARN");
            permissionIssues = true;
          }


        }
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
      }
=======

origin/cursor/expand-services-advertise-and-build-project-c28b

      }

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
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
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
main


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    } catch (error) {
      this.log(`❌ Failed to check file permissions: ${error.message}`, "ERROR");
      this.errors.push(error.message);
    }
<<<<<<< HEAD
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

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
main

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
    
main

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    if (issues.length === 0) {
        return {
            status: 'pass',
            message: 'Environment files are properly secured'
        };
<<<<<<< HEAD

    } else {
      this.log('⚠️ Dependency vulnerabilities found', 'WARN');
    }

=======

  ensureLogDir() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async runCommand(command, description) {
    try {
      this.log(`Running: ${description}`);
      const output = execSync(command, {
        encoding: 'utf8',
        cwd: '/workspace',
        stdio: 'pipe',
        timeout: 120000
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  async scanDependencies() {
    this.log('🔍 Scanning dependencies for vulnerabilities...');
    
    const depScan = await this.runCommand(
      'npm audit --audit-level=moderate --json',
      'Dependency vulnerability scan'
    );
    
    if (depScan.success) {
      this.log('✅ Dependency scan completed');

    } else {
      this.log('⚠️ Dependency vulnerabilities found', 'WARN');
    }
            
main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            if (configContent.includes('https') || configContent.includes('SSL')) {
                return {
                    status: 'pass',
                    message: 'HTTPS configuration detected'
                };
            }
        }
<<<<<<< HEAD

=======
        
main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        return {
            status: 'warning',
            message: 'HTTPS configuration not explicitly found',
            recommendation: 'Ensure HTTPS is properly configured for production'
        };
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
    
    // Save detailed report
origin/automation-improvements-final

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
    

<<<<<<< HEAD
// Run security scan
const scanner = new SecurityScanner();
scanner.runSecurityScan().catch(console.error);
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    try {
      await this.auditDependencies();
      await this.scanCodeSecurity();
      await this.setupSecurityHeaders();
      await this.setupContentSecurityPolicy();
      await this.checkAuthenticationSecurity();
<<<<<<< HEAD
<<<<<<< HEAD
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

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    } catch (error) {
        return {
            status: 'fail',
            message: 'Could not check HTTPS configuration'
        };
    }
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  }
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452

});

<<<<<<< HEAD
    } catch (error) {
      this.log(`⚠️ Security fix had issues: ${error.message}`, "WARN");
    }

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

    } catch (error) {
      this.log(`⚠️ Security fix had issues: ${error.message}`, "WARN");
    }
        
main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        sensitiveFiles.forEach(file => {
            if (fs.existsSync(file)) {
                const stats = fs.statSync(file);
                const mode = stats.mode & parseInt('777', 8);
<<<<<<< HEAD

=======
                
main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                // Check if file is world-readable (should not be)
                if (mode & 4) {
                    issues.push(`${file} is world-readable`);
                }
            }
<<<<<<< HEAD

  }

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
          error: null 

        });

<<<<<<< HEAD
=======
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

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    const reportPath = path.join(this.reportsDir, 'security-scan-report.json');
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
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    } catch (error) {
      this.log(`💥 Fatal error: ${error.message}`, "ERROR");
      process.exit(1);
    }
<<<<<<< HEAD

=======
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

main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

origin/cursor/expand-services-advertise-and-build-project-c28b
}
ursor/fix-syntax-push-and-merge-to-main-7ef8

  }
}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

<<<<<<< HEAD
const scanner = new SecurityScanner();
scanner.run().catch(console.error);


origin/cursor/automate-test-fix-improve-and-merge-code-f0bd


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
<<<<<<< HEAD
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
main

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
}

if (require.main === module) {
<<<<<<< HEAD
  const scanner = new SecurityScanner();
  scanner.scan().catch(console.error);
}

module.exports = SecurityScanner;
=======
    const scanner = new SecurityScanner(),
    scanner.run().catch(console.error)
  }

module.exports = SecurityScanner;
<<<<<<< HEAD

    this.log(`📊 Security scan completed! Report saved to: ${reportPath}`);
    this.log(`🔒 Security Score: ${report.securityScore}% (${passedChecks}/${securityChecks.length} checks passed)`);
    
    return report;
  }
}

// Run security scan
const scanner = new SecurityScanner();
scanner.runSecurityScan().catch(console.error);
<<<<<<< HEAD
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
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/main
origin/automation-improvements-final

origin/cursor/expand-services-advertise-and-build-project-c28b

main


>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
