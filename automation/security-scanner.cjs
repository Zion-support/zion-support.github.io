#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const { execSync } = require("child_process");"console.log(" Starting Security Scan.");const report = { timestamp: new Date().toISOString()," checks: []," vulnerabilities: [],"" overallStatus: "healthy"};/ npm audit (non-fatal)try {" const auditJson = execSync("npm audit --json", {"" encoding: "utf8","" stdio: ["ignore", "pipe", "pipe"]}); const audit = JSON.parse(auditJson); const vulnCount audit.metadata && audit.metadata.vulnerabilities ? Object.values(audit.metadata.vulnerabilities).reduce((a, b) => a + b, 0) : 0; report.checks.push({"" name: "npm audit","" status: vulnCount ? "warning" : "pass"," summary: vulnCount}); if (vulnCount) {" report.overallStatus = "warning"; }} catch (e) {"" report.checks.push({ name: "npm audit", status: "error", error: e.message });}/ sensitive files"const sensitiveFiles = [".env"," ".env.local"," ".env.production"," "private-key.pem",];const found = sensitiveFiles.filter(f => fs.existsSync(f));report.checks.push({"" name: "sensitive files","" status: found.length ? "warning" : "pass", found});"if (found.length) report.overallStatus = "warning";const out = `security-scan-report-${Date.now()}.json`;fs.writeFileSync(out, JSON.stringify(report, null, 2));"`console.log(` Security scan completed. Report: ${out}`);""`"`
#!/usr/bin/env node;
    const files = this.findSourceFiles()
    for (const file of files) {
  try {
  const content = fs.readFileSync(file, "utf8")
        for (const pattern of sensitivePatterns) {
  if (pattern.test(content)) {
  this.vulnerabilities.push(`Potential secret in ${path.relative(this.projectRoot, file)}`)
            this.recommendations.push(`Review ${path.relative(this.projectRoot, file)} for exposed secrets`),
}
        }
      } catch (error) {
  // Skip files that can"t be read;
}
    }
    console.log("✅ Secret scanning completed"),
}
  findSourceFiles() {
  const files = []
    const dirs = ["src", "components", "pages", "utils", "hooks"]
    dirs.forEach(dir => {
  const fullPath = path.join(this.projectRoot, dir)
      if (fs.existsSync(fullPath)) {
  this.findFilesRecursively(fullPath, files),
}
    })
    return files.filter(file => ;
      file.endsWith(".js") || ;
      file.endsWith(".jsx") || ;
      file.endsWith(".ts") || ;
      file.endsWith(".tsx")
    ),
}
  findFilesRecursively(dir, files) {
  const items = fs.readdirSync(dir)
    for (const item of items) {
  const fullPath = path.join(dir, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
  this.findFilesRecursively(fullPath, files),
} else {
  files.push(fullPath),
}
    }
  }
  async scanConfiguration() {
  console.log("⚙️  Scanning configuration files...")
    const configFiles = ["package.json", "next.config.js", ".env", ".env.local"]
    for (const file of configFiles) {
  const filePath = path.join(this.projectRoot, file)
      if (fs.existsSync(filePath)) {
  try {
  const content = fs.readFileSync(filePath, "utf8")
          // Check for insecure configurations;
          if (content.includes("NODE_ENV=development") && file.includes(".env")) {
  this.recommendations.push(`Review ${file} for production-ready configuration`),
}
        } catch (error) {
  // Skip files that can"t be read;}
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

#!/usr/bin/env node

/**
 * Security Scanner
 * Automatically scans for security vulnerabilities
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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
    }
    }
};
function runSecurityCheck(name, checkFunction) {
    securityReport.summary.total++;
    console.log(`\n🔍 Security Check: ${name}`);
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

