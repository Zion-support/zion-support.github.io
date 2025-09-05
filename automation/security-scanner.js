=======
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
ursor/migrate-github-actions-to-pm2-and-clean-up-5599
  async runSecurityAudit() {
    try {
      this.log('Running security audit...');
      const startTime = Date.now();
      // Run npm audit;
      const auditOutput = execSync('npm audit --audit-level=moderate', { 
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
};ursor/migrate-github-actions-to-pm2-and-clean-up-5599
    const reportFile = path.join(this.projectRoot, 'automation/logs/security-issues-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log('Security issues reported');
  }
  getSecurityRecommendation(vulnerabilities) {
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
=======
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
"lastScan": this.lastScan,
      "projectRoot": this.projectRoot,
      "nodeVersion": process.version,
      "platform": process.platform
    };ursor/migrate-github-actions-to-pm2-and-clean-up-5599
    fs.writeFileSync(this.securityReportFile, JSON.stringify(report, null, 2));
  }
  async reportSecurityFailure(error) {
    const failureReport = {
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
#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class SecurityScanner { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/security-scanner.log'); this.securityReportFile = path.join(this.projectRoot,'automation/logs/security-report.json'); this.lastScan = null; this.scanInterval = 3600000; this.isRunning = false; this.setupLogging(); this.log('Security Scanner started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runSecurityAudit() { try { this.log('Running security audit...'); const startTime = Date.now(); const auditOutput = execSync('npm audit --audit-level=moderate',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const scanTime = endTime - startTime; this.lastScan = { timestamp: new Date().toISOString() success: true; scanTime: scanTime; output: auditOutput; vulnerabilities: { critical: 0; high: 0; moderate: 0; low: 0} }; this.log(`Security audit completed successfully in ${scanTime}ms`); await this.saveSecurityReport()} catch (error) { this.log(`Security audit failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const vulnerabilities = this.parseVulnerabilities(output);  const output = error.stdout || error.stderr || ;';'; const vulnerabilities = this.parseVulnerabilities(output;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastScan = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; vulnerabilities: vulnerabilities}; await this.saveSecurityReport(); await this.handleSecurityIssues(vulnerabilities)} } parseVulnerabilities(output) { const vulnerabilities = {  critical: 0,high: 0,moderate: 0,low: 0 }; try { const criticalMatch = output.match(/(\d+) critical/); const highMatch = output.match(/(\d+) high/); const moderateMatch = output.match(/(\d+) moderate/); const lowMatch = output.match(/(\d+) low/); if (criticalMatch) { vulnerabilities.critical = parseInt(criticalMatch[1])} if (highMatch) { vulnerabilities.high = parseInt(highMatch[1])} if (moderateMatch) { vulnerabilities.moderate = parseInt(moderateMatch[1])} if (lowMatch) { vulnerabilities.low = parseInt(lowMatch[1])} } catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities}  critical: 0; high: 0; moderate: 0; low: 0}; try { const criticalMatch = output.match(/(\d+) critical;/;); const highMatch = output.match(/(\d+) high;/;); const moderateMatch = output.match(/(\d+) moderate;/;); const lowMatch = output.match(/(\d+) low;/;); if (vulnerabilities.critical = parseInt(criticalMatch[1])) { vulnerabilities.critical = parseInt(criticalMatch[1])} if (vulnerabilities.high = parseInt(highMatch[1])) { vulnerabilities.high = parseInt(highMatch[1])} if (vulnerabilities.moderate = parseInt(moderateMatch[1])) { vulnerabilities.moderate = parseInt(moderateMatch[1])} if (vulnerabilities.low = parseInt(lowMatch[1])} catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities) { vulnerabilities.low = parseInt(lowMatch[1])} catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async handleSecurityIssues(vulnerabilities) { const totalIssues = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.moderate + vulnerabilities.low;  if (totalIssues > 0) { this.log(`Found ${totalIssues} security vulnerabilities`); if (vulnerabilities.critical > 0 || vulnerabilities.high > 0) { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...'); await this.autoFixSecurityIssues()} else {  if ( { this.log(`Found ${totalIssues} security vulnerabilities`)) { { this.log(`Found ${totalIssues} security vulnerabilities`)} if ( { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...')) { { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...')} await this.autoFixSecurityIssues()} else { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Only moderate/low severity vulnerabilities found,reporting...'); await this.reportSecurityIssues(vulnerabilities)} } else { this.log('No security vulnerabilities found')} } async autoFixSecurityIssues() { try { this.log('Attempting to auto-fix security issues...'); const fixOutput = execSync('npm audit fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 300000 }); this.log('Security fixes applied'); await this.runSecurityAudit()} catch (fixError) {  cwd: this.projectRoot; encoding: 'utf8' timeout: 300000 };); this.log('Security fixes applied'); await this.runSecurityAudit()} catch (fixError) { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log(`Failed to auto-fix security issues: ${fixError.message}`); await this.reportSecurityFailure(fixError)} } async reportSecurityIssues(vulnerabilities) { const report = { timestamp: new Date().toISOString() vulnerabilities: vulnerabilities; projectRoot: this.projectRoot; recommendation: this.getSecurityRecommendation(vulnerabilities)  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const reportFile = path.join(this.projectRoot,'automation/logs/security-issues-report.json'); fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log('Security issues reported')} getSecurityRecommendation(vulnerabilities) {  if (vulnerabilities.critical > 0) { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'} else if (vulnerabilities.high > 0) { return 'HIGH: Update dependencies as soon as possible.'} else if (vulnerabilities.moderate > 0) { return 'MODERATE: Consider updating dependencies in next maintenance window.'} else if (vulnerabilities.low > 0) { return 'LOW: Monitor and update when convenient.'} else { return 'No security issues found.'}  if ( { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.') { { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'}} else if ( { return 'HIGH: Update dependencies as soon as possible.') { { return 'HIGH: Update dependencies as soon as possible.'}} else if ( { return 'MODERATE: Consider updating dependencies in next maintenance window.') { { return 'MODERATE: Consider updating dependencies in next maintenance window.'}} else if ( { return 'LOW: Monitor and update when convenient.') { { return 'LOW: Monitor and update when convenient.'}} else { return 'No security issues found.'} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } async saveSecurityReport() { const report = {  lastScan: this.lastScan,projectRoot: this.projectRoot,nodeVersion: process.version,platform: process.platform };  lastScan: this.lastScan; projectRoot: this.projectRoot; nodeVersion: process.version; platform: process.platform}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.securityReportFile,JSON.stringify(report,null,2))} async reportSecurityFailure(error) { const failureReport = {  timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/security-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Security failure reported')} async checkDependencyUpdates() { try { this.log('Checking for dependency updates...'); const outdatedOutput = execSync('npm outdated',{ cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); if (!fs.existsSync(logDir)) { this.log('Outdated dependencies found')) { ) { this.log('Outdated dependencies found')} await this.updateDependencies()} else { this.log('All dependencies are up to date')} } catch (error) { if ( { { this.log('Outdated dependencies found'); await this.updateDependencies()} else { this.log(`Dependency check failed: ${error.message}`)} } } async updateDependencies() { try { this.log('Updating dependencies...'); execSync('npm update',{ cwd: this.projectRoot; timeout: 300000}); this.log('Dependencies updated successfully')} catch (error) { this.log(`Failed to update dependencies: ${error.message}`)} } async start() { this.isRunning = true; this.log('Security Scanner started'); await this.runSecurityAudit(); await this.checkDependencyUpdates(); setInterval(async () => { if ( { await this.runSecurityAudit()) { { await this.runSecurityAudit()} await this.checkDependencyUpdates()} },this.scanInterval); process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} } const scanner = new SecurityScanner;(;); scanner.start().catch(error => { console.error('Failed to start security scanner:',error); process.exit(1)});
