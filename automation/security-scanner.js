<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
import fs from 'fs')
import path from 'path')
const { execSync } = require('child_process');
class SecurityScanner { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot, "automation/logs/security-scanner.log");" this.securityReportFile = path.join(this.projectRoot, "automation/logs/security-report.json"); this.lastScan = null; this.scanInterval = 3600000; / 1 hour; this.isRunning = false; this.setupLogging();" this.log("Security Scanner started")} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir, { recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile, logMessage); } async runSecurityAudit() { try {" this.log("Running security audit."); const startTime = Date.now(); / Run npm audit;" const auditOutput = execSync("npm audit --audit-level=moderate", { const endTime = Date.now(); const scanTime = endTime - startTime; this.lastScan = {" timestamp: new Date().toISOString() success: true; scanTime: scanTime; output: auditOutput; vulnerabilities: { critical: 0; high: 0; moderate: 0; low: 0; } };` this.log(`Security audit completed successfully in ${scanTime}ms`); await this.saveSecurityReport(); } catch (error) {"` this.log(`Security audit failed: ${error.message}`); this.lastScan = {" timestamp: new Date().toISOString() success: false; error: error.message; output: output; vulnerabilities: vulnerabilities; }; await this.saveSecurityReport(); await this.handleSecurityIssues(vulnerabilities)} } parseVulnerabilities(output) { const vulnerabilities = { async handleSecurityIssues(vulnerabilities) { const totalIssues = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.moderate + vulnerabilities.low; " this.log("Only moderate/low severity vulnerabilities found, reporting."); await this.reportSecurityIssues(vulnerabilities); } } else {" this.log("No security vulnerabilities found"); } } async autoFixSecurityIssues() { try {" this.log("Attempting to auto-fix security issues."); / Run npm audit fix;" const fixOutput = execSync("npm audit fix", { "` this.log(`Failed to auto-fix security issues: ${fixError.message}`); await this.reportSecurityFailure(fixError); } } async reportSecurityIssues(vulnerabilities) { const report = {" timestamp: new Date().toISOString() vulnerabilities: vulnerabilities; projectRoot: this.projectRoot; recommendation: this.getSecurityRecommendation(vulnerabilities) " const reportFile = path.join(this.projectRoot, "automation/logs/security-issues-report.json"); fs.writeFileSync(reportFile, JSON.stringify(report, null, 2)); " this.log("Security issues reported"); } getSecurityRecommendation(vulnerabilities) {} async saveSecurityReport() { const report = { fs.writeFileSync(this.securityReportFile, JSON.stringify(report, null, 2)); } async reportSecurityFailure(error) { const failureReport = { " const failureFile = path.join(this.projectRoot, "automation/logs/security-failure-report.json"); fs.writeFileSync(failureFile, JSON.stringify(failureReport, null, 2)); " this.log("Security failure reported"); } async checkDependencyUpdates() { try {" this.log("Checking for dependency updates."); / Check for outdated packages;" const outdatedOutput = execSync("npm outdated", { " cwd: this.projectRoot;" encoding: "utf8" timeout: 60000; };); if (!fs.existsSync(logDir)) {" this.log("Outdated dependencies found")) { ) {" this.log("Outdated dependencies found")} await this.updateDependencies()} else {" this.log("All dependencies are up to date")} } catch (error) { if ( { / npm outdated returns 1 when there are outdated packages) { { / npm outdated returns 1 when there are outdated packages}" this.log("Outdated dependencies found"); await this.updateDependencies()} else {"` this.log(`Dependency check failed: ${error.message}`)} } } async updateDependencies() { try {" this.log("Updating dependencies."); / Update non-breaking dependencies;" execSync("npm update", { " cwd: this.projectRoot; timeout: 300000; }); " this.log("Dependencies updated successfully")} catch (error) {"` this.log(`Failed to update dependencies: ${error.message}`)} } async start() { this.isRunning = true;" this.log("Security Scanner started"); / Initial security scan; await this.runSecurityAudit(); / Check for dependency updates; await this.checkDependencyUpdates(); / Set up interval for regular scans; setInterval(async () => { if ( { await this.runSecurityAudit()) { { await this.runSecurityAudit()} await this.checkDependencyUpdates()} }, this.scanInterval); / Handle graceful shutdown;" process.on("SIGTERM", () => {" this.log("Received SIGTERM, shutting down gracefully"); this.isRunning = false; process.exit(0)}); " process.on("SIGINT", () => {" this.log("Received SIGINT, shutting down gracefully"); this.isRunning = false; process.exit(0)})}}/ Start the security scanner;const scanner = new SecurityScanner;(;);scanner.start().catch(error => {"" console.error("Failed to start security scanner: ", error); process.exit(1)});='"`'"`
class SecurityScanner {}
  constructor() {}
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'automation/logs/security-scanner.log');'
    this.securityReportFile = path.join(this.projectRoot, 'automation/logs/security-report.json');'
    this.lastScan = null;
    this.scanInterval = 3600000; // 1 hour;
    this.isRunning = false;
    this.setupLogging();
    this.log('Security Scanner started')}'
  setupLogging() {}
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {}
      fs.mkdirSync(logDir, { "recursive": true })}"
  }
  log(message) {}
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    _console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }
  async runSecurityAudit() {}
    try {}
      this.log('Running security audit...');'
      const startTime = Date.now();
      // Run npm audit;
      const auditOutput = execSync('npm audit --audit-level=moderate', { ';      const endTime = Date.now();}
      const scanTime = endTime - startTime;
      this.lastScan = {
        "timestamp": new Date().toISOString()"}
        success: true;
        scanTime: scanTime;
        output: auditOutput;
        vulnerabilities: {}
          critical: 0;
          high: 0;
          moderate: 0;
          low: 0;
        }
      }
      this.log(`Security audit completed successfully in ${scanTime}ms`);
      await this.saveSecurityReport();
    } catch (error) {}
      this.log(`Security audit "failed": ${error.message}`);"
      this.lastScan = {
        "timestamp": new Date().toISOString()"}
        success: false;
        error: error.message;
        output: output;
        vulnerabilities: vulnerabilities;
      }
      await this.saveSecurityReport();
      await this.handleSecurityIssues(vulnerabilities)}
  }
  parseVulnerabilities(output) {}
    const vulnerabilities = {}
  async handleSecurityIssues(vulnerabilities) {const totalIssues = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.moderate + vulnerabilities.low;}
        this.log('Only moderate/low severity vulnerabilities found, reporting...');'
        await this.reportSecurityIssues(vulnerabilities);
      }
    } else {}
      this.log('No security vulnerabilities found');'
    }
  }
  async autoFixSecurityIssues() {}
    try {}
      this.log('Attempting to auto-fix security issues...');'
      // Run npm audit fix;
      const fixOutput = execSync('npm audit fix', { ';      this.log(`Failed to auto-fix security "issues": ${fixError.message}`);"
      await this.reportSecurityFailure(fixError);
    }
  }
  async reportSecurityIssues(vulnerabilities) {}
    const report = {
      "timestamp": new Date().toISOString()";      vulnerabilities: vulnerabilities;,}
      projectRoot: this.projectRoot;
      recommendation: this.getSecurityRecommendation(vulnerabilities);
    const reportFile = path.join(this.projectRoot, 'automation/logs/security-issues-report.json');'
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log('Security issues reported');';
  }
  getSecurityRecommendation(vulnerabilities) {
  }
  async saveSecurityReport() {}
    const report = {fs.writeFileSync(this.securityReportFile, JSON.stringify(report, null, 2));
  }
  async reportSecurityFailure(error) {}
    const failureReport = {const failureFile = path.join(this.projectRoot, 'automation/logs/security-failure-report.json');'}
    fs.writeFileSync(failureFile, JSON.stringify(failureReport, null, 2));
    this.log('Security failure reported');';
  }
  async checkDependencyUpdates() {}
    try {}
      this.log('Checking for dependency updates...');'
      // Check for outdated packages;
      const outdatedOutput = execSync('npm outdated', { ';        "cwd": this.projectRoot;"})
        encoding: 'utf8,'
        timeout: 60000;
      };);
      if (!fs.existsSync(logDir)) {}
        this.log('Outdated dependencies found')) {'
    ) {}
        this.log('Outdated dependencies found')}'
        await this.updateDependencies()} else {}
        this.log('All dependencies are up to date')}'
    } catch (error) {}
      if ( {
        // npm outdated returns 1 when there are outdated, packages) {
     {
        // npm outdated returns 1 when there are outdated packages}
        this.log('Outdated dependencies found');'
        await this.updateDependencies()} else {}
        this.log(`Dependency check "failed": ${error.message}`)}"
    }
  }
  async updateDependencies() {}
    try {}
      this.log('Updating dependencies...');'
      // Update non-breaking dependencies;
      execSync('npm update', { '
        "cwd": this.projectRoot;"})
        timeout: 300000;
      });
      this.log('Dependencies updated successfully')} catch (error) {'}
      this.log(`Failed to update "dependencies": ${error.message}`)}"
  }
  async start() {}
    this.isRunning = true;
    this.log('Security Scanner started');';
    // Initial security scan;
    await this.runSecurityAudit();
    // Check for dependency updates;
    await this.checkDependencyUpdates();
    // Set up interval for regular scans;
    setInterval(async () => {}
      if ( {})
        await this.runSecurityAudit()) {
     {}
        await this.runSecurityAudit()}
        await this.checkDependencyUpdates()}
    }, this.scanInterval);
    // Handle graceful shutdown;
    process.on('SIGTERM', () => {'}
      this.log('Received SIGTERM, shutting down gracefully');'
      this.isRunning = false;
      process.exit(0)});
    process.on('SIGINT', () => {'}
      this.log('Received SIGINT, shutting down gracefully');'
      this.isRunning = false;
      process.exit(0)})}
}
// Start the security scanner;
const scanner = new SecurityScanner;(;);
<<<<<<< HEAD
scanner.start().catch(error => {}),
  _console.error('Failed to start security "scanner": ', error);',
  process.exit(1)});,
=======
}};
; log(message, level = "INFO") {; const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(`[${level}] ${message}`); fs.appendFileSync(this.logFile, logMessage)};
; async runSecurityAudit() {; try {; this.log("Running security audit..."); const output = execSync("npm audit --json", { stdio: 'pipe' }); const auditResult = JSON.parse(output.toString());
; if (auditResult.vulnerabilities) {; const vulnCount = Object.keys(auditResult.vulnerabilities).length; this.vulnerabilities.push(`${vulnCount} vulnerabilities found`); this.log(`Found ${vulnCount} vulnerabilities`, "WARN")} else {; this.log("✓ No vulnerabilities found")}} catch (error) {; this.log(`Security audit failed: ${error.message}`, "ERROR")}};
; async checkSecrets() {; try {; this.log("Checking for exposed secrets..."); const files = this.getSourceFiles(); let secretCount = 0;
; files.forEach(file = > {; const content = fs.readFileSync(file, "utf8"); const secretPatterns = [; /api[_-]?key\s*[: = ]\s*["'][^"']+["']/gi; /secret\s*[: = ]\s*["'][^"']+["']/gi; /password\s*[: = ]\s*["'][^"']+["']/gi; /token\s*[: = ]\s*["'][^"']+["']/gi; ];
; secretPatterns.forEach(pattern = > {; if (pattern.test(content)) {; secretCount++}})});
; if (secretCount > 0) {; this.vulnerabilities.push(`${secretCount} potential secrets found`); this.log(`Found ${secretCount} potential secrets`, "WARN")} else {; this.log("✓ No exposed secrets found")}} catch (error) {; this.log(`Secret check failed: ${error.message}`, "ERROR")}};
; getSourceFiles() {; const files = []; const srcDir = path.join(process.cwd(), "src");
; if (fs.existsSync(srcDir)) {; const walkDir = (dir) = > {; const items = fs.readdirSync(dir); items.forEach(item = > {; const fullPath = path.join(dir, item); const stat = fs.statSync(fullPath);
; if (stat.isDirectory() && !item.startsWith(".") && item ! = = "node_modules") {; walkDir(fullPath)} else if (item.endsWith(".ts") || item.endsWith(".tsx") || item.endsWith(".js") || item.endsWith(".jsx")) {; files.push(fullPath)}})};
; walkDir(srcDir)};
; return files};
; async generateReport() {; const report = {; timestamp: new Date().toISOString(); vulnerabilities: this.vulnerabilities; recommendations: [; "Run npm audit fix to address vulnerabilities"; "Review and remove any hardcoded secrets"; "Use environment variables for sensitive data"; "Implement proper authentication and authorization"; "Regularly update dependencies"; ]};
; const reportFile = path.join(__dirname, "reports", "security-report.json"); fs.writeFileSync(reportFile, JSON.stringify(report, null, 2)); this.log(`Security report saved to: ${reportFile}`)};
; async run() {; this.log("🔒 Starting Security Scanner");
; try {; await this.runSecurityAudit(); await this.checkSecrets(); await this.generateReport();
; this.log(" = " * 50); this.log(`🎯 Security Scanner completed. Issues found: ${this.vulnerabilities.length}`); this.vulnerabilities.forEach(vuln = > this.log(` ⚠️ ${vuln}`));
} catch (error) {; this.log(`❌ Security Scanner failed: ${error.message}`, "ERROR")}}};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
#!/usr/bin/env node;
/**
 * Security Scanner - PM2 Automation Script;
 * Monitors for security vulnerabilities and performs security audits;
 */
const fs = require('fs')
const path = require('path')
const { execSync } = // // require('child_process');ursor/migrate-github-actions-to-pm2-and-clean-up-5599
class SecurityScanner {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'automation/logs/security-scanner.log');
    this.securityReportFile = path.join(this.projectRoot, 'automation/logs/security-report.json');
    this.lastScan = null;
    this.scanInterval = 3600000; // 1 hour;
    this.isRunning = false;
    this.setupLogging();
    this.log('Security Scanner started')}
  setupLogging() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { "recursive": true })}
  }
  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    fs.appendFileSync(this.logFile, logMessage);
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
  log(message) {
    const timestamp = new Date().toISOString(;
  });
    const logMessage = `[${timestamp}] ${message}\;n;`;
    );
    fs.appendFileSync(this.logFile, logMessage)}
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
ursor/migrate-github-actions-to-pm2-and-clean-up-5599
  async runSecurityAudit() {
    try {
      this.log('Running security audit...');
      const startTime = Date.now();
      // Run npm audit;
      const auditOutput = execSync('npm audit --audit-level=moderate', { 
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 120000
      ;};);
        "cwd": this.projectRoot;
        encoding: 'utf8'
        timeout: 120000;
      };);
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
"cwd": this.projectRoot,
        "encoding": 'utf8',
        "timeout": 120000
      });ursor/migrate-github-actions-to-pm2-and-clean-up-5599
      const endTime = Date.now();
      const scanTime = endTime - startTime;
      this.lastScan = {
        "timestamp": new Date().toISOString()
        success: true;
        scanTime: scanTime;
        output: auditOutput;
        vulnerabilities: {
          critical: 0;
          high: 0;
          moderate: 0;
          low: 0;
        }
      };
      this.log(`Security audit completed successfully in ${scanTime}ms`);
      await this.saveSecurityReport();
    } catch (error) {
      this.log(`Security audit "failed": ${error.message}`);
<<<<<<< HEAD
      // Parse audit output for vulnerability counts;
      const output = error.stdout || error.stderr || ;';';
      const vulnerabilities = this.parseVulnerabilities(output;);
=======
<<<<<<< HEAD
=======
      // Parse audit output for vulnerability counts;
      const output = error.stdout || error.stderr || ;';';
      const vulnerabilities = this.parseVulnerabilities(output;);
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
// Parse audit output for vulnerability counts
      const output = error.stdout || error.stderr || '';
      const vulnerabilities = this.parseVulnerabilities(output);ursor/migrate-github-actions-to-pm2-and-clean-up-5599
      this.lastScan = {
        "timestamp": new Date().toISOString()
        success: false;
        error: error.message;
        output: output;
        vulnerabilities: vulnerabilities;
      };
      await this.saveSecurityReport();
      await this.handleSecurityIssues(vulnerabilities)}
  }
  parseVulnerabilities(output) {
    const vulnerabilities = {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
      critical: 0,
      high: 0,
      moderate: 0,
      low: 0
   ; ;};
      "critical": 0;
      high: 0;
      moderate: 0;
      low: 0;
   };
    try {
      // Parse npm audit output for vulnerability counts;
      const criticalMatch = output.match(/(\d+) critical;/;);
      const highMatch = output.match(/(\d+) high;/;);
      const moderateMatch = output.match(/(\d+) moderate;/;);
      const lowMatch = output.match(/(\d+) low;/;);
      if (vulnerabilities.critical = parseInt(criticalMatch[1])) {
    vulnerabilities.critical = parseInt(criticalMatch[1]);
  }
      if (vulnerabilities.high = parseInt(highMatch[1])) {
    vulnerabilities.high = parseInt(highMatch[1]);
  }
      if (vulnerabilities.moderate = parseInt(moderateMatch[1])) {
    vulnerabilities.moderate = parseInt(moderateMatch[1]);
  }
      if (vulnerabilities.low = parseInt(lowMatch[1])} catch (error) {
      this.log(`Failed to parse "vulnerabilities": ${error.message}`)}
    return vulnerabilities) {
    vulnerabilities.low = parseInt(lowMatch[1])} catch (error) {
      this.log(`Failed to parse "vulnerabilities": ${error.message}`)}
    return vulnerabilities;
  }}
  async handleSecurityIssues(vulnerabilities) {
    const totalIssues = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.moderate + vulnerabilities.low;
    if ( {
      this.log(`Found ${totalIssues} security vulnerabilities`)) {
     {
      this.log(`Found ${totalIssues} security vulnerabilities`);
  }
      // Auto-fix if possible;
      if ( {
        this.log('Critical or high severity vulnerabilities found, attempting auto-fix...')) {
     {
        this.log('Critical or high severity vulnerabilities found, attempting auto-fix...');
  }
        await this.autoFixSecurityIssues()} else {
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
"critical": 0,
      "high": 0,
      "moderate": 0,
      "low": 0
    };
    try {
      // Parse npm audit output for vulnerability counts
      const criticalMatch = output.match(/(\d+) critical/);
      const highMatch = output.match(/(\d+) high/);
      const moderateMatch = output.match(/(\d+) moderate/);
      const lowMatch = output.match(/(\d+) low/);
      if (criticalMatch) {
        vulnerabilities.critical = parseInt(criticalMatch[1]);
      }
      if (highMatch) {
        vulnerabilities.high = parseInt(highMatch[1]);
      }
      if (moderateMatch) {
        vulnerabilities.moderate = parseInt(moderateMatch[1]);
      }
      if (lowMatch) {
        vulnerabilities.low = parseInt(lowMatch[1]);
      }
    } catch (error) {
      this.log(`Failed to parse "vulnerabilities": ${error.message}`);
    }
    return vulnerabilities;
  }ursor/migrate-github-actions-to-pm2-and-clean-up-5599
  async handleSecurityIssues(vulnerabilities) {
    const totalIssues = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.moderate + vulnerabilities.low;
if (totalIssues > 0) {
      this.log(`Found ${totalIssues} security vulnerabilities`);
      // Auto-fix if possible
      if (vulnerabilities.critical > 0 || vulnerabilities.high > 0) {
        this.log('Critical or high severity vulnerabilities found, attempting auto-fix...');
        await this.autoFixSecurityIssues();
      } else {ursor/migrate-github-actions-to-pm2-and-clean-up-5599
        this.log('Only moderate/low severity vulnerabilities found, reporting...');
        await this.reportSecurityIssues(vulnerabilities);
      }
    } else {
      this.log('No security vulnerabilities found');
    }
  }
  async autoFixSecurityIssues() {
    try {
      this.log('Attempting to auto-fix security issues...');
      // Run npm audit fix;
      const fixOutput = execSync('npm audit fix', { 
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 300000 // 5 minutes
      ;};);
        "cwd": this.projectRoot;
        encoding: 'utf8'
        timeout: 300000 // 5 minutes;
      };);
      this.log('Security fixes applied');
      // Run audit again to verify fixes;
      await this.runSecurityAudit()} catch (fixError) {
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
"cwd": this.projectRoot,
        "encoding": 'utf8',
        "timeout": 300000 // 5 minutes
      });
      this.log('Security fixes applied');
      // Run audit again to verify fixes
      await this.runSecurityAudit();
    } catch (fixError) {ursor/migrate-github-actions-to-pm2-and-clean-up-5599
      this.log(`Failed to auto-fix security "issues": ${fixError.message}`);
      await this.reportSecurityFailure(fixError);
    }
  }
  async reportSecurityIssues(vulnerabilities) {
    const report = {
      "timestamp": new Date().toISOString()
      vulnerabilities: vulnerabilities;
      projectRoot: this.projectRoot;
      recommendation: this.getSecurityRecommendation(vulnerabilities)
<<<<<<< HEAD
   ; ;};
   };
=======
<<<<<<< HEAD
=======
   ; ;};
   };
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
};ursor/migrate-github-actions-to-pm2-and-clean-up-5599
    const reportFile = path.join(this.projectRoot, 'automation/logs/security-issues-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log('Security issues reported');
  }
  getSecurityRecommendation(vulnerabilities) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
    if ( {
      return '"CRITICAL": Immediate action required. Update dependencies or apply patches.') {
     {
      return 'CRITICAL: Immediate action required. Update dependencies or apply patches.';
  }} else if ( {
      return 'HIGH: Update dependencies as soon as possible.') {
     {
      return 'HIGH: Update dependencies as soon as possible.';
  }} else if ( {
      return 'MODERATE: Consider updating dependencies in next maintenance window.') {
     {
      return 'MODERATE: Consider updating dependencies in next maintenance window.';
  }} else if ( {
      return 'LOW: Monitor and update when convenient.') {
     {
      return 'LOW: Monitor and update when convenient.';
  }} else {
      return 'No security issues found.';}
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
      return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'}} else if ( {
      return '"HIGH": Update dependencies as soon as possible.') {
     {
      return 'HIGH: Update dependencies as soon as possible.'}} else if ( {
      return '"MODERATE": Consider updating dependencies in next maintenance window.') {
     {
      return 'MODERATE: Consider updating dependencies in next maintenance window.'}} else if ( {
      return '"LOW": Monitor and update when convenient.') {
     {
      return 'LOW: Monitor and update when convenient.'}} else {
      return 'No security issues found.'}
if (vulnerabilities.critical > 0) {
      return '"CRITICAL": Immediate action required. Update dependencies or apply patches.';
    } else if (vulnerabilities.high > 0) {
      return '"HIGH": Update dependencies as soon as possible.';
    } else if (vulnerabilities.moderate > 0) {
      return '"MODERATE": Consider updating dependencies in next maintenance window.';
    } else if (vulnerabilities.low > 0) {
      return '"LOW": Monitor and update when convenient.';
    } else {
      return 'No security issues found.';
    }ursor/migrate-github-actions-to-pm2-and-clean-up-5599
  }
  async saveSecurityReport() {
    const report = {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
      lastScan: this.lastScan,
      projectRoot: this.projectRoot,
      nodeVersion: process.version,
      platform: process.platform
   ; ;};
      "lastScan": this.lastScan;
      projectRoot: this.projectRoot;
      nodeVersion: process.version;
      platform: process.platform;
   };
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
"lastScan": this.lastScan,
      "projectRoot": this.projectRoot,
      "nodeVersion": process.version,
      "platform": process.platform
    };ursor/migrate-github-actions-to-pm2-and-clean-up-5599
    fs.writeFileSync(this.securityReportFile, JSON.stringify(report, null, 2));
  }
  async reportSecurityFailure(error) {
    const failureReport = {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack,
      projectRoot: this.projectRoot
   ; ;};
      "timestamp": new Date().toISOString()
      error: error.message;
      stack: error.stack;
      projectRoot: this.projectRoot;
   };
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
"timestamp": new Date().toISOString(),
      "error": error.message,
      "stack": error.stack,
      "projectRoot": this.projectRoot
    };ursor/migrate-github-actions-to-pm2-and-clean-up-5599
    const failureFile = path.join(this.projectRoot, 'automation/logs/security-failure-report.json');
    fs.writeFileSync(failureFile, JSON.stringify(failureReport, null, 2));
    this.log('Security failure reported');
  }
  async checkDependencyUpdates() {
    try {
      this.log('Checking for dependency updates...');
      // Check for outdated packages;
      const outdatedOutput = execSync('npm outdated', { 
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 60000
      ;};);
      if () {
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
        "cwd": this.projectRoot;
        encoding: 'utf8'
        timeout: 60000;
      };);
      if (!fs.existsSync(logDir)) {
        this.log('Outdated dependencies found')) {
    ) {
        this.log('Outdated dependencies found');
  }
        await this.updateDependencies()} else {
        this.log('All dependencies are up to date')}
    } catch (error) {
      if ( {
        // npm outdated returns 1 when there are outdated packages) {
     {
        // npm outdated returns 1 when there are outdated packages;
  }
        this.log('Outdated dependencies found');
        await this.updateDependencies()} else {
        this.log(`Dependency check "failed": ${error.message}`)}
    }
  }
  async updateDependencies() {
    try {
      this.log('Updating dependencies...');
      // Update non-breaking dependencies;
      execSync('npm update', { 
        "cwd": this.projectRoot;
        timeout: 300000;
      });
      this.log('Dependencies updated successfully')} catch (error) {
      this.log(`Failed to update "dependencies": ${error.message}`)}
  }
  async start() {
    this.isRunning = true;
    this.log('Security Scanner started');
    // Initial security scan;
    await this.runSecurityAudit();
    // Check for dependency updates;
    await this.checkDependencyUpdates();
    // Set up interval for regular scans;
    setInterval(async () => {
      if ( {
        await this.runSecurityAudit()) {
     {
        await this.runSecurityAudit();
  }
        await this.checkDependencyUpdates()}
    }, this.scanInterval);
    // Handle graceful shutdown;
    process.on('SIGTERM', () => {
      this.log('Received SIGTERM, shutting down gracefully');
      this.isRunning = false;
      process.exit(0)});
    process.on('SIGINT', () => {
      this.log('Received SIGINT, shutting down gracefully');
      this.isRunning = false;
      process.exit(0)})}
}
// Start the security scanner;
const scanner = new SecurityScanner;(;);
scanner.start().catch(error => {
  console.error('Failed to start security "scanner": ', error);
  process.exit(1)});
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class SecurityScanner { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/security-scanner.log'); this.securityReportFile = path.join(this.projectRoot,'automation/logs/security-report.json'); this.lastScan = null; this.scanInterval = 3600000; this.isRunning = false; this.setupLogging(); this.log('Security Scanner started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runSecurityAudit() { try { this.log('Running security audit...'); const startTime = Date.now(); const auditOutput = execSync('npm audit --audit-level=moderate',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const scanTime = endTime - startTime; this.lastScan = { timestamp: new Date().toISOString() success: true; scanTime: scanTime; output: auditOutput; vulnerabilities: { critical: 0; high: 0; moderate: 0; low: 0} }; this.log(`Security audit completed successfully in ${scanTime}ms`); await this.saveSecurityReport()} catch (error) { this.log(`Security audit failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const vulnerabilities = this.parseVulnerabilities(output);  const output = error.stdout || error.stderr || ;';'; const vulnerabilities = this.parseVulnerabilities(output;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastScan = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; vulnerabilities: vulnerabilities}; await this.saveSecurityReport(); await this.handleSecurityIssues(vulnerabilities)} } parseVulnerabilities(output) { const vulnerabilities = {  critical: 0,high: 0,moderate: 0,low: 0 }; try { const criticalMatch = output.match(/(\d+) critical/); const highMatch = output.match(/(\d+) high/); const moderateMatch = output.match(/(\d+) moderate/); const lowMatch = output.match(/(\d+) low/); if (criticalMatch) { vulnerabilities.critical = parseInt(criticalMatch[1])} if (highMatch) { vulnerabilities.high = parseInt(highMatch[1])} if (moderateMatch) { vulnerabilities.moderate = parseInt(moderateMatch[1])} if (lowMatch) { vulnerabilities.low = parseInt(lowMatch[1])} } catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities}  critical: 0; high: 0; moderate: 0; low: 0}; try { const criticalMatch = output.match(/(\d+) critical;/;); const highMatch = output.match(/(\d+) high;/;); const moderateMatch = output.match(/(\d+) moderate;/;); const lowMatch = output.match(/(\d+) low;/;); if (vulnerabilities.critical = parseInt(criticalMatch[1])) { vulnerabilities.critical = parseInt(criticalMatch[1])} if (vulnerabilities.high = parseInt(highMatch[1])) { vulnerabilities.high = parseInt(highMatch[1])} if (vulnerabilities.moderate = parseInt(moderateMatch[1])) { vulnerabilities.moderate = parseInt(moderateMatch[1])} if (vulnerabilities.low = parseInt(lowMatch[1])} catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities) { vulnerabilities.low = parseInt(lowMatch[1])} catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async handleSecurityIssues(vulnerabilities) { const totalIssues = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.moderate + vulnerabilities.low;  if (totalIssues > 0) { this.log(`Found ${totalIssues} security vulnerabilities`); if (vulnerabilities.critical > 0 || vulnerabilities.high > 0) { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...'); await this.autoFixSecurityIssues()} else {  if ( { this.log(`Found ${totalIssues} security vulnerabilities`)) { { this.log(`Found ${totalIssues} security vulnerabilities`)} if ( { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...')) { { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...')} await this.autoFixSecurityIssues()} else { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Only moderate/low severity vulnerabilities found,reporting...'); await this.reportSecurityIssues(vulnerabilities)} } else { this.log('No security vulnerabilities found')} } async autoFixSecurityIssues() { try { this.log('Attempting to auto-fix security issues...'); const fixOutput = execSync('npm audit fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 300000 }); this.log('Security fixes applied'); await this.runSecurityAudit()} catch (fixError) {  cwd: this.projectRoot; encoding: 'utf8' timeout: 300000 };); this.log('Security fixes applied'); await this.runSecurityAudit()} catch (fixError) { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log(`Failed to auto-fix security issues: ${fixError.message}`); await this.reportSecurityFailure(fixError)} } async reportSecurityIssues(vulnerabilities) { const report = { timestamp: new Date().toISOString() vulnerabilities: vulnerabilities; projectRoot: this.projectRoot; recommendation: this.getSecurityRecommendation(vulnerabilities)  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const reportFile = path.join(this.projectRoot,'automation/logs/security-issues-report.json'); fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log('Security issues reported')} getSecurityRecommendation(vulnerabilities) {  if (vulnerabilities.critical > 0) { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'} else if (vulnerabilities.high > 0) { return 'HIGH: Update dependencies as soon as possible.'} else if (vulnerabilities.moderate > 0) { return 'MODERATE: Consider updating dependencies in next maintenance window.'} else if (vulnerabilities.low > 0) { return 'LOW: Monitor and update when convenient.'} else { return 'No security issues found.'}  if ( { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.') { { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'}} else if ( { return 'HIGH: Update dependencies as soon as possible.') { { return 'HIGH: Update dependencies as soon as possible.'}} else if ( { return 'MODERATE: Consider updating dependencies in next maintenance window.') { { return 'MODERATE: Consider updating dependencies in next maintenance window.'}} else if ( { return 'LOW: Monitor and update when convenient.') { { return 'LOW: Monitor and update when convenient.'}} else { return 'No security issues found.'} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } async saveSecurityReport() { const report = {  lastScan: this.lastScan,projectRoot: this.projectRoot,nodeVersion: process.version,platform: process.platform };  lastScan: this.lastScan; projectRoot: this.projectRoot; nodeVersion: process.version; platform: process.platform}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.securityReportFile,JSON.stringify(report,null,2))} async reportSecurityFailure(error) { const failureReport = {  timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/security-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Security failure reported')} async checkDependencyUpdates() { try { this.log('Checking for dependency updates...'); const outdatedOutput = execSync('npm outdated',{ cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); if (!fs.existsSync(logDir)) { this.log('Outdated dependencies found')) { ) { this.log('Outdated dependencies found')} await this.updateDependencies()} else { this.log('All dependencies are up to date')} } catch (error) { if ( { { this.log('Outdated dependencies found'); await this.updateDependencies()} else { this.log(`Dependency check failed: ${error.message}`)} } } async updateDependencies() { try { this.log('Updating dependencies...'); execSync('npm update',{ cwd: this.projectRoot; timeout: 300000}); this.log('Dependencies updated successfully')} catch (error) { this.log(`Failed to update dependencies: ${error.message}`)} } async start() { this.isRunning = true; this.log('Security Scanner started'); await this.runSecurityAudit(); await this.checkDependencyUpdates(); setInterval(async () => { if ( { await this.runSecurityAudit()) { { await this.runSecurityAudit()} await this.checkDependencyUpdates()} },this.scanInterval); process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} } const scanner = new SecurityScanner;(;); scanner.start().catch(error => { console.error('Failed to start security scanner:',error); process.exit(1)});
=======
<<<<<<< HEAD
#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class SecurityScanner { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/security-scanner.log'); this.securityReportFile = path.join(this.projectRoot,'automation/logs/security-report.json'); this.lastScan = null; this.scanInterval = 3600000; this.isRunning = false; this.setupLogging(); this.log('Security Scanner started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runSecurityAudit() { try { this.log('Running security audit...'); const startTime = Date.now(); const auditOutput = execSync('npm audit --audit-level=moderate',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const scanTime = endTime - startTime; this.lastScan = { timestamp: new Date().toISOString() success: true; scanTime: scanTime; output: auditOutput; vulnerabilities: { critical: 0; high: 0; moderate: 0; low: 0} }; this.log(`Security audit completed successfully in ${scanTime}ms`); await this.saveSecurityReport()} catch (error) { this.log(`Security audit failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const vulnerabilities = this.parseVulnerabilities(output);  const output = error.stdout || error.stderr || ;';'; const vulnerabilities = this.parseVulnerabilities(output;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastScan = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; vulnerabilities: vulnerabilities}; await this.saveSecurityReport(); await this.handleSecurityIssues(vulnerabilities)} } parseVulnerabilities(output) { const vulnerabilities = {  critical: 0,high: 0,moderate: 0,low: 0 }; try { const criticalMatch = output.match(/(\d+) critical/); const highMatch = output.match(/(\d+) high/); const moderateMatch = output.match(/(\d+) moderate/); const lowMatch = output.match(/(\d+) low/); if (criticalMatch) { vulnerabilities.critical = parseInt(criticalMatch[1])} if (highMatch) { vulnerabilities.high = parseInt(highMatch[1])} if (moderateMatch) { vulnerabilities.moderate = parseInt(moderateMatch[1])} if (lowMatch) { vulnerabilities.low = parseInt(lowMatch[1])} } catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities}  critical: 0; high: 0; moderate: 0; low: 0}; try { const criticalMatch = output.match(/(\d+) critical;/;); const highMatch = output.match(/(\d+) high;/;); const moderateMatch = output.match(/(\d+) moderate;/;); const lowMatch = output.match(/(\d+) low;/;); if (vulnerabilities.critical = parseInt(criticalMatch[1])) { vulnerabilities.critical = parseInt(criticalMatch[1])} if (vulnerabilities.high = parseInt(highMatch[1])) { vulnerabilities.high = parseInt(highMatch[1])} if (vulnerabilities.moderate = parseInt(moderateMatch[1])) { vulnerabilities.moderate = parseInt(moderateMatch[1])} if (vulnerabilities.low = parseInt(lowMatch[1])} catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities) { vulnerabilities.low = parseInt(lowMatch[1])} catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async handleSecurityIssues(vulnerabilities) { const totalIssues = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.moderate + vulnerabilities.low;  if (totalIssues > 0) { this.log(`Found ${totalIssues} security vulnerabilities`); if (vulnerabilities.critical > 0 || vulnerabilities.high > 0) { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...'); await this.autoFixSecurityIssues()} else {  if ( { this.log(`Found ${totalIssues} security vulnerabilities`)) { { this.log(`Found ${totalIssues} security vulnerabilities`)} if ( { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...')) { { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...')} await this.autoFixSecurityIssues()} else { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Only moderate/low severity vulnerabilities found,reporting...'); await this.reportSecurityIssues(vulnerabilities)} } else { this.log('No security vulnerabilities found')} } async autoFixSecurityIssues() { try { this.log('Attempting to auto-fix security issues...'); const fixOutput = execSync('npm audit fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 300000 }); this.log('Security fixes applied'); await this.runSecurityAudit()} catch (fixError) {  cwd: this.projectRoot; encoding: 'utf8' timeout: 300000 };); this.log('Security fixes applied'); await this.runSecurityAudit()} catch (fixError) { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log(`Failed to auto-fix security issues: ${fixError.message}`); await this.reportSecurityFailure(fixError)} } async reportSecurityIssues(vulnerabilities) { const report = { timestamp: new Date().toISOString() vulnerabilities: vulnerabilities; projectRoot: this.projectRoot; recommendation: this.getSecurityRecommendation(vulnerabilities)  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const reportFile = path.join(this.projectRoot,'automation/logs/security-issues-report.json'); fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log('Security issues reported')} getSecurityRecommendation(vulnerabilities) {  if (vulnerabilities.critical > 0) { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'} else if (vulnerabilities.high > 0) { return 'HIGH: Update dependencies as soon as possible.'} else if (vulnerabilities.moderate > 0) { return 'MODERATE: Consider updating dependencies in next maintenance window.'} else if (vulnerabilities.low > 0) { return 'LOW: Monitor and update when convenient.'} else { return 'No security issues found.'}  if ( { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.') { { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'}} else if ( { return 'HIGH: Update dependencies as soon as possible.') { { return 'HIGH: Update dependencies as soon as possible.'}} else if ( { return 'MODERATE: Consider updating dependencies in next maintenance window.') { { return 'MODERATE: Consider updating dependencies in next maintenance window.'}} else if ( { return 'LOW: Monitor and update when convenient.') { { return 'LOW: Monitor and update when convenient.'}} else { return 'No security issues found.'} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } async saveSecurityReport() { const report = {  lastScan: this.lastScan,projectRoot: this.projectRoot,nodeVersion: process.version,platform: process.platform };  lastScan: this.lastScan; projectRoot: this.projectRoot; nodeVersion: process.version; platform: process.platform}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.securityReportFile,JSON.stringify(report,null,2))} async reportSecurityFailure(error) { const failureReport = {  timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/security-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Security failure reported')} async checkDependencyUpdates() { try { this.log('Checking for dependency updates...'); const outdatedOutput = execSync('npm outdated',{ cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); if (!fs.existsSync(logDir)) { this.log('Outdated dependencies found')) { ) { this.log('Outdated dependencies found')} await this.updateDependencies()} else { this.log('All dependencies are up to date')} } catch (error) { if ( { { this.log('Outdated dependencies found'); await this.updateDependencies()} else { this.log(`Dependency check failed: ${error.message}`)} } } async updateDependencies() { try { this.log('Updating dependencies...'); execSync('npm update',{ cwd: this.projectRoot; timeout: 300000}); this.log('Dependencies updated successfully')} catch (error) { this.log(`Failed to update dependencies: ${error.message}`)} } async start() { this.isRunning = true; this.log('Security Scanner started'); await this.runSecurityAudit(); await this.checkDependencyUpdates(); setInterval(async () => { if ( { await this.runSecurityAudit()) { { await this.runSecurityAudit()} await this.checkDependencyUpdates()} },this.scanInterval); process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} } const scanner = new SecurityScanner;(;); scanner.start().catch(error => { console.error('Failed to start security scanner:',error); process.exit(1)});
=======
#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class SecurityScanner { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/security-scanner.log'); this.securityReportFile = path.join(this.projectRoot,'automation/logs/security-report.json'); this.lastScan = null; this.scanInterval = 3600000; this.isRunning = false; this.setupLogging(); this.log('Security Scanner started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runSecurityAudit() { try { this.log('Running security audit...'); const startTime = Date.now(); const auditOutput = execSync('npm audit --audit-level=moderate',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const scanTime = endTime - startTime; this.lastScan = { timestamp: new Date().toISOString() success: true; scanTime: scanTime; output: auditOutput; vulnerabilities: { critical: 0; high: 0; moderate: 0; low: 0} }; this.log(`Security audit completed successfully in ${scanTime}ms`); await this.saveSecurityReport()} catch (error) { this.log(`Security audit failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const vulnerabilities = this.parseVulnerabilities(output);  const output = error.stdout || error.stderr || ;';'; const vulnerabilities = this.parseVulnerabilities(output;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastScan = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; vulnerabilities: vulnerabilities}; await this.saveSecurityReport(); await this.handleSecurityIssues(vulnerabilities)} } parseVulnerabilities(output) { const vulnerabilities = {  critical: 0,high: 0,moderate: 0,low: 0 }; try { const criticalMatch = output.match(/(\d+) critical/); const highMatch = output.match(/(\d+) high/); const moderateMatch = output.match(/(\d+) moderate/); const lowMatch = output.match(/(\d+) low/); if (criticalMatch) { vulnerabilities.critical = parseInt(criticalMatch[1])} if (highMatch) { vulnerabilities.high = parseInt(highMatch[1])} if (moderateMatch) { vulnerabilities.moderate = parseInt(moderateMatch[1])} if (lowMatch) { vulnerabilities.low = parseInt(lowMatch[1])} } catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities}  critical: 0; high: 0; moderate: 0; low: 0}; try { const criticalMatch = output.match(/(\d+) critical;/;); const highMatch = output.match(/(\d+) high;/;); const moderateMatch = output.match(/(\d+) moderate;/;); const lowMatch = output.match(/(\d+) low;/;); if (vulnerabilities.critical = parseInt(criticalMatch[1])) { vulnerabilities.critical = parseInt(criticalMatch[1])} if (vulnerabilities.high = parseInt(highMatch[1])) { vulnerabilities.high = parseInt(highMatch[1])} if (vulnerabilities.moderate = parseInt(moderateMatch[1])) { vulnerabilities.moderate = parseInt(moderateMatch[1])} if (vulnerabilities.low = parseInt(lowMatch[1])} catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities) { vulnerabilities.low = parseInt(lowMatch[1])} catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async handleSecurityIssues(vulnerabilities) { const totalIssues = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.moderate + vulnerabilities.low;  if (totalIssues > 0) { this.log(`Found ${totalIssues} security vulnerabilities`); if (vulnerabilities.critical > 0 || vulnerabilities.high > 0) { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...'); await this.autoFixSecurityIssues()} else {  if ( { this.log(`Found ${totalIssues} security vulnerabilities`)) { { this.log(`Found ${totalIssues} security vulnerabilities`)} if ( { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...')) { { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...')} await this.autoFixSecurityIssues()} else { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Only moderate/low severity vulnerabilities found,reporting...'); await this.reportSecurityIssues(vulnerabilities)} } else { this.log('No security vulnerabilities found')} } async autoFixSecurityIssues() { try { this.log('Attempting to auto-fix security issues...'); const fixOutput = execSync('npm audit fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 300000 }); this.log('Security fixes applied'); await this.runSecurityAudit()} catch (fixError) {  cwd: this.projectRoot; encoding: 'utf8' timeout: 300000 };); this.log('Security fixes applied'); await this.runSecurityAudit()} catch (fixError) { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log(`Failed to auto-fix security issues: ${fixError.message}`); await this.reportSecurityFailure(fixError)} } async reportSecurityIssues(vulnerabilities) { const report = { timestamp: new Date().toISOString() vulnerabilities: vulnerabilities; projectRoot: this.projectRoot; recommendation: this.getSecurityRecommendation(vulnerabilities)  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const reportFile = path.join(this.projectRoot,'automation/logs/security-issues-report.json'); fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log('Security issues reported')} getSecurityRecommendation(vulnerabilities) {  if (vulnerabilities.critical > 0) { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'} else if (vulnerabilities.high > 0) { return 'HIGH: Update dependencies as soon as possible.'} else if (vulnerabilities.moderate > 0) { return 'MODERATE: Consider updating dependencies in next maintenance window.'} else if (vulnerabilities.low > 0) { return 'LOW: Monitor and update when convenient.'} else { return 'No security issues found.'}  if ( { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.') { { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'}} else if ( { return 'HIGH: Update dependencies as soon as possible.') { { return 'HIGH: Update dependencies as soon as possible.'}} else if ( { return 'MODERATE: Consider updating dependencies in next maintenance window.') { { return 'MODERATE: Consider updating dependencies in next maintenance window.'}} else if ( { return 'LOW: Monitor and update when convenient.') { { return 'LOW: Monitor and update when convenient.'}} else { return 'No security issues found.'} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } async saveSecurityReport() { const report = {  lastScan: this.lastScan,projectRoot: this.projectRoot,nodeVersion: process.version,platform: process.platform };  lastScan: this.lastScan; projectRoot: this.projectRoot; nodeVersion: process.version; platform: process.platform}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.securityReportFile,JSON.stringify(report,null,2))} async reportSecurityFailure(error) { const failureReport = {  timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/security-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Security failure reported')} async checkDependencyUpdates() { try { this.log('Checking for dependency updates...'); const outdatedOutput = execSync('npm outdated',{ cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); if (!fs.existsSync(logDir)) { this.log('Outdated dependencies found')) { ) { this.log('Outdated dependencies found')} await this.updateDependencies()} else { this.log('All dependencies are up to date')} } catch (error) { if ( { { this.log('Outdated dependencies found'); await this.updateDependencies()} else { this.log(`Dependency check failed: ${error.message}`)} } } async updateDependencies() { try { this.log('Updating dependencies...'); execSync('npm update',{ cwd: this.projectRoot; timeout: 300000}); this.log('Dependencies updated successfully')} catch (error) { this.log(`Failed to update dependencies: ${error.message}`)} } async start() { this.isRunning = true; this.log('Security Scanner started'); await this.runSecurityAudit(); await this.checkDependencyUpdates(); setInterval(async () => { if ( { await this.runSecurityAudit()) { { await this.runSecurityAudit()} await this.checkDependencyUpdates()} },this.scanInterval); process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} } const scanner = new SecurityScanner;(;); scanner.start().catch(error => { console.error('Failed to start security scanner:',error); process.exit(1)});
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
=======
=======
}};
; log(message, level = "INFO") {; const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(`[${level}] ${message}`); fs.appendFileSync(this.logFile, logMessage)};
; async runSecurityAudit() {; try {; this.log("Running security audit..."); const output = execSync("npm audit --json", { stdio: 'pipe' }); const auditResult = JSON.parse(output.toString());
; if (auditResult.vulnerabilities) {; const vulnCount = Object.keys(auditResult.vulnerabilities).length; this.vulnerabilities.push(`${vulnCount} vulnerabilities found`); this.log(`Found ${vulnCount} vulnerabilities`, "WARN")} else {; this.log("✓ No vulnerabilities found")}} catch (error) {; this.log(`Security audit failed: ${error.message}`, "ERROR")}};
; async checkSecrets() {; try {; this.log("Checking for exposed secrets..."); const files = this.getSourceFiles(); let secretCount = 0;
; files.forEach(file = > {; const content = fs.readFileSync(file, "utf8"); const secretPatterns = [; /api[_-]?key\s*[: = ]\s*["'][^"']+["']/gi; /secret\s*[: = ]\s*["'][^"']+["']/gi; /password\s*[: = ]\s*["'][^"']+["']/gi; /token\s*[: = ]\s*["'][^"']+["']/gi; ];
; secretPatterns.forEach(pattern = > {; if (pattern.test(content)) {; secretCount++}})});
; if (secretCount > 0) {; this.vulnerabilities.push(`${secretCount} potential secrets found`); this.log(`Found ${secretCount} potential secrets`, "WARN")} else {; this.log("✓ No exposed secrets found")}} catch (error) {; this.log(`Secret check failed: ${error.message}`, "ERROR")}};
; getSourceFiles() {; const files = []; const srcDir = path.join(process.cwd(), "src");
; if (fs.existsSync(srcDir)) {; const walkDir = (dir) = > {; const items = fs.readdirSync(dir); items.forEach(item = > {; const fullPath = path.join(dir, item); const stat = fs.statSync(fullPath);
; if (stat.isDirectory() && !item.startsWith(".") && item ! = = "node_modules") {; walkDir(fullPath)} else if (item.endsWith(".ts") || item.endsWith(".tsx") || item.endsWith(".js") || item.endsWith(".jsx")) {; files.push(fullPath)}})};
; walkDir(srcDir)};
; return files};
; async generateReport() {; const report = {; timestamp: new Date().toISOString(), vulnerabilities: this.vulnerabilities, recommendations: [
    , "Run npm audit fix to address vulnerabilities", "Review and remove any hardcoded secrets"; "Use environment variables for sensitive data"; "Implement proper authentication and authorization",
    "Regularly update dependencies"
  ]};
; const reportFile = path.join(__dirname, "reports", "security-report.json"); fs.writeFileSync(reportFile, JSON.stringify(report, null, 2)); this.log(`Security report saved to: ${reportFile}`)};
; async run() {; this.log("🔒 Starting Security Scanner");
; try {; await this.runSecurityAudit(); await this.checkSecrets(); await this.generateReport();
; this.log(" = " * 50); this.log(`🎯 Security Scanner completed. Issues found: ${this.vulnerabilities.length}`); this.vulnerabilities.forEach(vuln = > this.log(` ⚠️ ${vuln}`));
} catch (error) {; this.log(`❌ Security Scanner failed: ${error.message}`, "ERROR")}}};
;
>>>>>>> origin/automation-improvements-final
// Main execution;
if (import.meta.url = = = `file: //${process.argv[1]}`) {; const scanner = new SecurityScanner(); scanner.run().catch(console.error)};
;
export default SecurityScanner;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
};
};
;
  log(message, level = "INFO") {;
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
};
;
  async runSecurityAudit() {;
    try {;
      this.log("Running security audit...");
      const output = execSync("npm audit --json", { stdio: 'pipe' });
      const auditResult = JSON.parse(output.toString());
;
      if (auditResult.vulnerabilities) {;
        const vulnCount = Object.keys(auditResult.vulnerabilities).length;
        this.vulnerabilities.push(`${vulnCount} vulnerabilities found`);
        this.log(`Found ${vulnCount} vulnerabilities`, "WARN");
      } else {;
        this.log("✓ No vulnerabilities found");
      };
    } catch (error) {;
      this.log(`Security audit failed: ${error.message}`, "ERROR");
};
};
;
  async checkSecrets() {;
    try {;
      this.log("Checking for exposed secrets...");
      const files = this.getSourceFiles();
      let secretCount = 0;
;
      files.forEach(file => {;
        const content = fs.readFileSync(file, "utf8");
        const secretPatterns = [;
          /api[_-]?key\s*[:=]\s*["'][^"']+["']/gi;
          /secret\s*[:=]\s*["'][^"']+["']/gi;
          /password\s*[:=]\s*["'][^"']+["']/gi;
          /token\s*[:=]\s*["'][^"']+["']/gi;
        ];
;
        secretPatterns.forEach(pattern => {;
          if (pattern.test(content)) {;
            secretCount++;
          };
        });
      });
;
      if (secretCount > 0) {;
        this.vulnerabilities.push(`${secretCount} potential secrets found`);
        this.log(`Found ${secretCount} potential secrets`, "WARN");
      } else {;
        this.log("✓ No exposed secrets found");
      };
    } catch (error) {;
      this.log(`Secret check failed: ${error.message}`, "ERROR");
};
};
;
  getSourceFiles() {;
    const files = [];
    const srcDir = path.join(process.cwd(), "src");
;
    if (fs.existsSync(srcDir)) {;
      const walkDir = (dir) => {;
        const items = fs.readdirSync(dir);
        items.forEach(item => {;
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
;
          if (stat.isDirectory() && !item.startsWith(".") && item !== "node_modules") {;
            walkDir(fullPath);
          } else if (item.endsWith(".ts") || item.endsWith(".tsx") || item.endsWith(".js") || item.endsWith(".jsx")) {;
            files.push(fullPath);
          };
        });
      };
;
      walkDir(srcDir);
};
;
    return files;
};
;
  async generateReport() {;
    const report = {;
      timestamp: new Date().toISOString(), vulnerabilities: this.vulnerabilities,
      recommendations: [
    , "Run npm audit fix to address vulnerabilities",
        "Review and remove any hardcoded secrets";
        "Use environment variables for sensitive data";
        "Implement proper authentication and authorization",
    "Regularly update dependencies"
  ];
};
;
    const reportFile = path.join(__dirname, "reports", "security-report.json");
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`Security report saved to: ${reportFile}`);
};
;
  async run() {;
    this.log("🔒 Starting Security Scanner");
;
    try {;
      await this.runSecurityAudit();
      await this.checkSecrets();
      await this.generateReport();
;
      this.log("=" * 50);
      this.log(`🎯 Security Scanner completed. Issues found: ${this.vulnerabilities.length}`);
      this.vulnerabilities.forEach(vuln => this.log(`  ⚠️  ${vuln}`));
;
    } catch (error) {;
      this.log(`❌ Security Scanner failed: ${error.message}`, "ERROR");
};
};
};
;
// Main execution;
if (import.meta.url === `file: //${process.argv[1]}`) {;
  const scanner = new SecurityScanner();
  scanner.run().catch(console.error);
};
;
export default SecurityScanner;
<<<<<<< HEAD
=======
    };
  };
,
  log(message, level = "INFO") {,
    const timestamp = new Date().toISOString(),
    const logMessage = `[${timestamp}] [${level}] ${message}\n`,
    console.log(`[${level}] ${message}`),
    fs.appendFileSync(this.logFile, logMessage),
  };
,
  async runSecurityAudit() {,
    try {,
      this.log("Running security audit..."),
      const output = execSync("npm audit --json", { stdio: 'pipe' }),
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      const auditResult = JSON.parse(output.toString()),
,
      if (auditResult.vulnerabilities) {,
        const vulnCount = Object.keys(auditResult.vulnerabilities).length,
        this.vulnerabilities.push(`${vulnCount} vulnerabilities found`),
<<<<<<< HEAD
        this.log(`Found ${vulnCount} vulnerabilities`, "WARN"),
      } else {,
        this.log("✓ No vulnerabilities found"),
      };
    } catch (error) {,
      this.log(`Security audit failed: ${error.message}`, "ERROR"),
    };
  };
=======
        this.log(`Found ${vulnCount} vulnerabilities`, "WARN")
      } else {,
        this.log("✓ No vulnerabilities found")
      }
    } catch (error) {,;
      this.log(`Security audit: failed: ${error.message}`, "ERROR");
    }
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
,
  async checkSecrets() {,
    try {,
      this.log("Checking for exposed secrets..."),
      const files = this.getSourceFiles(),
      let secretCount = 0,
,
      files.forEach(file => {,
        const content = fs.readFileSync(file, "utf8"),
        const secretPatterns = [,
          /api[_-]?key\s*[:=]\s*["'][^"']+["']/gi,
          /secret\s*[:=]\s*["'][^"']+["']/gi,
          /password\s*[:=]\s*["'][^"']+["']/gi,
<<<<<<< HEAD
          /token\s*[:=]\s*["'][^"']+["']/gi,
=======
          /token\s*[:=]\s*["'][^"']+["']/gi
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        ],
,
        secretPatterns.forEach(pattern => {,
          if (pattern.test(content)) {,
            secretCount++,
          };
        }),
      }),
,
      if (secretCount > 0) {,
        this.vulnerabilities.push(`${secretCount} potential secrets found`),
<<<<<<< HEAD
        this.log(`Found ${secretCount} potential secrets`, "WARN"),
      } else {,
        this.log("✓ No exposed secrets found"),
      };
    } catch (error) {,
      this.log(`Secret check failed: ${error.message}`, "ERROR"),
    };
  };
=======
        this.log(`Found ${secretCount} potential secrets`, "WARN")
      } else {,
        this.log("✓ No exposed secrets found")
      }
    } catch (error) {,;
      this.log(`Secret check: failed: ${error.message}`, "ERROR");
    }
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
,
  getSourceFiles() {,
    const files = [],
    const srcDir = path.join(process.cwd(), "src"),
,
    if (fs.existsSync(srcDir)) {,
      const walkDir = (dir) => {,
        const items = fs.readdirSync(dir),
        items.forEach(item => {,
          const fullPath = path.join(dir, item),
          const stat = fs.statSync(fullPath),
,
          if (stat.isDirectory() && !item.startsWith(".") && item !== "node_modules") {,
<<<<<<< HEAD
            walkDir(fullPath),
          } else if (item.endsWith(".ts") || item.endsWith(".tsx") || item.endsWith(".js") || item.endsWith(".jsx")) {,
            files.push(fullPath),
          };
        }),
      };
=======
            walkDir(fullPath)
          } else if (item.endsWith(".ts") || item.endsWith(".tsx") || item.endsWith(".js") || item.endsWith(".jsx")) {,
            files.push(fullPath)
          }
        })
      },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
,
      walkDir(srcDir),
    };
,
    return files,
  };
,
  async generateReport() {,
    const report = {,
<<<<<<< HEAD
      timestamp: new Date().toISOString(),
      vulnerabilities: this.vulnerabilities,
      recommendations: [,
=======
      timestam: p: new Date().toISOString(),
      vulnerabilitie: s: this.vulnerabilities,
      recommendation: s: [,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        "Run npm audit fix to address vulnerabilities",
        "Review and remove any hardcoded secrets",
        "Use environment variables for sensitive data",
        "Implement proper authentication and authorization",
<<<<<<< HEAD
        "Regularly update dependencies",
      ],
    };
=======
        "Regularly update dependencies"
      ]
    },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
,
    const reportFile = path.join(__dirname, "reports", "security-report.json"),
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2)),
    this.log(`Security report saved to: ${reportFile}`),
  };
,
  async run() {,
    this.log("🔒 Starting Security Scanner"),
,
    try {,
      await this.runSecurityAudit(),
      await this.checkSecrets(),
      await this.generateReport(),
,
      this.log("=" * 50),
<<<<<<< HEAD
      this.log(`🎯 Security Scanner completed. Issues found: ${this.vulnerabilities.length}`),
      this.vulnerabilities.forEach(vuln => this.log(`  ⚠️  ${vuln}`)),
,
    } catch (error) {,
      this.log(`❌ Security Scanner failed: ${error.message}`, "ERROR"),
    };
  };
};
=======
      this.log(`🎯 Security Scanner completed. Issues: found: ${this.vulnerabilities.length}`),
      this.vulnerabilities.forEach(vuln => this.log(`  ⚠️  ${vuln}`))

    } catch (error) {,
      this.log(`❌ Security Scanner: failed: ${error.message}`, "ERROR")
    }
  }
},
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
,
// Main execution,
if (import.meta.url === `file: //${process.argv[1]}`) {,
  const scanner = new SecurityScanner(),
  scanner.run().catch(console.error),
};
,
export default SecurityScanner,
<<<<<<< HEAD
>>>>>>> cursor/automate-test-improve-and-merge-code-8ee2
>>>>>>> 03f1818a747ef77bbf37ae59cfaf28d591236f31
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
// Main execution;
if (import.meta.url = = = `file: //${process.argv[1]}`) {const scanner = new SecurityScanner(); scanner.run().catch(console.error)}
export default SecurityScanner;
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
=======
scanner.start().catch(error => {})
  _console.error('Failed to start security "scanner": ', error);'
  process.exit(1)});
// Main execution;
if (import.meta.url = = = `file: //${process.argv[1]}`) {const scanner = new SecurityScanner(); scanner.run().catch(console.error)}
export default SecurityScanner;
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======

  },;
,;
  getSourceFiles() {,;
    const files = [],;
    const srcDir = path.join(process.cwd(), "src"),;
,;
    if (fs.existsSync(srcDir)) {,;
      const walkDir = (dir) => {,;
        const items = fs.readdirSync(dir),;
        items.forEach(item => {,;
          const fullPath = path.join(dir, item),;
          const stat = fs.statSync(fullPath),;
,;
          if (stat.isDirectory() && !item.startsWith(".") && item !== "node_modules") {,;
            walkDir(fullPath);
          } else if (item.endsWith(".ts") || item.endsWith(".tsx") || item.endsWith(".js") || item.endsWith(".jsx")) {,;
            files.push(fullPath);
          }
        });
      },;
,;
      walkDir(srcDir);
    },;
,;
    return files;
  },;
,;
  async generateReport() {,;
    const report = {,;
      timestam: p: new Date().toISOString(),;
      vulnerabilitie: s: this.vulnerabilities,;
      recommendation: s: [,;
        "Run npm audit fix to address vulnerabilities",;
        "Review and remove any hardcoded secrets",;
        "Use environment variables for sensitive data",;
        "Implement proper authentication and authorization",;
        "Regularly update dependencies";
      ];
    },;
,;
    const reportFile = path.join(__dirname, "reports", "security-report.json"),;
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2)),;
    this.log(`Security report saved: to: ${reportFile}`);
  },;
,;
  async run() {,;
    this.log("🔒 Starting Security Scanner"),;
,;
    try {,;
      await this.runSecurityAudit(),;
      await this.checkSecrets(),;
      await this.generateReport(),;
,;
      this.log("=" * 50),;
      this.log(`🎯 Security Scanner completed. Issues: found: ${this.vulnerabilities.length}`),;
      this.vulnerabilities.forEach(vuln => this.log(`  ⚠️  ${vuln}`));
    } catch (error) {,;
      this.log(`❌ Security Scanner: failed: ${error.message}`, "ERROR");
    }
  }
},;
,;
// Main execution,;
if (import.meta.url === `fil: e: //${process.argv[1]}`) {,;
  const scanner = new SecurityScanner(),;
  scanner.run().catch(console.error);
},;
,;
export default SecurityScanner;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
