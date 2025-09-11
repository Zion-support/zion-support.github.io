

<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import fs from 'fs')
import path from 'path');
=======


=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import fs from 'fs')
import path from 'path')
}
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/fix-syntax-push-and-merge-to-main-40de
origin/main
origin/automation-improvements-final
import fs from 'fs')
import path from 'path')
import fs from 'fs')
import path from 'path');
const { execSync } = require('child_process');
class SecurityScanner { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot, "automation/logs/security-scanner.log");" this.securityReportFile = path.join(this.projectRoot, "automation/logs/security-report.json"); this.lastScan = null; this.scanInterval = 3600000; / 1 hour; this.isRunning = false; this.setupLogging();" this.log("Security Scanner started")} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir, { recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile, logMessage); } async runSecurityAudit() { try {" this.log("Running security audit."); const startTime = Date.now(); / Run npm audit;" const auditOutput = execSync("npm audit --audit-level=moderate", { const endTime = Date.now(); const scanTime = endTime - startTime; this.lastScan = {" timestamp: new Date().toISOString() success: true; scanTime: scanTime; output: auditOutput; vulnerabilities: { critical: 0; high: 0; moderate: 0; low: 0; } };` this.log(`Security audit completed successfully in ${scanTime}ms`); await this.saveSecurityReport(); } catch (error) {"` this.log(`Security audit failed: ${error.message}`); this.lastScan = {" timestamp: new Date().toISOString() success: false; error: error.message; output: output; vulnerabilities: vulnerabilities; }; await this.saveSecurityReport(); await this.handleSecurityIssues(vulnerabilities)} } parseVulnerabilities(output) { const vulnerabilities = { async handleSecurityIssues(vulnerabilities) { const totalIssues = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.moderate + vulnerabilities.low; " this.log("Only moderate/low severity vulnerabilities found, reporting."); await this.reportSecurityIssues(vulnerabilities); } } else {" this.log("No security vulnerabilities found"); } } async autoFixSecurityIssues() { try {" this.log("Attempting to auto-fix security issues."); / Run npm audit fix;" const fixOutput = execSync("npm audit fix", { "` this.log(`Failed to auto-fix security issues: ${fixError.message}`); await this.reportSecurityFailure(fixError); } } async reportSecurityIssues(vulnerabilities) { const report = {" timestamp: new Date().toISOString() vulnerabilities: vulnerabilities; projectRoot: this.projectRoot; recommendation: this.getSecurityRecommendation(vulnerabilities) " const reportFile = path.join(this.projectRoot, "automation/logs/security-issues-report.json"); fs.writeFileSync(reportFile, JSON.stringify(report, null, 2)); " this.log("Security issues reported"); } getSecurityRecommendation(vulnerabilities) {} async saveSecurityReport() { const report = { fs.writeFileSync(this.securityReportFile, JSON.stringify(report, null, 2)); } async reportSecurityFailure(error) { const failureReport = { " const failureFile = path.join(this.projectRoot, "automation/logs/security-failure-report.json"); fs.writeFileSync(failureFile, JSON.stringify(failureReport, null, 2)); " this.log("Security failure reported"); } async checkDependencyUpdates() { try {" this.log("Checking for dependency updates."); / Check for outdated packages;" const outdatedOutput = execSync("npm outdated", { " cwd: this.projectRoot;" encoding: "utf8" timeout: 60000; };); if (!fs.existsSync(logDir)) {" this.log("Outdated dependencies found")) { ) {" this.log("Outdated dependencies found")} await this.updateDependencies()} else {" this.log("All dependencies are up to date")} } catch (error) { if ( { / npm outdated returns 1 when there are outdated packages) { { / npm outdated returns 1 when there are outdated packages}" this.log("Outdated dependencies found"); await this.updateDependencies()} else {"` this.log(`Dependency check failed: ${error.message}`)} } } async updateDependencies() { try {" this.log("Updating dependencies."); / Update non-breaking dependencies;" execSync("npm update", { " cwd: this.projectRoot; timeout: 300000; }); " this.log("Dependencies updated successfully")} catch (error) {"` this.log(`Failed to update dependencies: ${error.message}`)} } async start() { this.isRunning = true;" this.log("Security Scanner started"); / Initial security scan; await this.runSecurityAudit(); / Check for dependency updates; await this.checkDependencyUpdates(); / Set up interval for regular scans; setInterval(async () => { if ( { await this.runSecurityAudit()) { { await this.runSecurityAudit()} await this.checkDependencyUpdates()} }, this.scanInterval); / Handle graceful shutdown;" process.on("SIGTERM", () => {" this.log("Received SIGTERM, shutting down gracefully"); this.isRunning = false; process.exit(0)}); " process.on("SIGINT", () => {" this.log("Received SIGINT, shutting down gracefully"); this.isRunning = false; process.exit(0)})}}/ Start the security scanner;const scanner = new SecurityScanner;(;);scanner.start().catch(error => {"" console.error("Failed to start security scanner: ", error); process.exit(1)});='"`'"`
class SecurityScanner {}
  constructor() {}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    this && this.projectRoot = process && process.cwd();,
    this && this.logFile = path && path.join(this && this.projectRoot, 'automation/logs/security-scanner && scanner.log');',
    this && this.securityReportFile = path && path.join(this && this.projectRoot, 'automation/logs/security-report && report.json');',
    this && this.lastScan = null;,
    this && this.scanInterval = 3600000; // 1 hour;
    this && this.isRunning = false;
    this && this.setupLogging();
    this && this.log('Security Scanner started')}',
  setupLogging() {}
    const logDir = path && path.dirname(this && this.logFile);,
    if (!fs && fs.existsSync(logDir)) {}
      fs && fs.mkdirSync(logDir, { "recursive": true })}",
<<<<<<< HEAD

    this.projectRoot = process.cwd();,
    this.logFile = path.join(this.projectRoot, 'automation/logs/security-scanner.log');',
    this.securityReportFile = path.join(this.projectRoot, 'automation/logs/security-report.json');',
    this.lastScan = null;,
    this.scanInterval = 3600000; // 1 hour;
    this.isRunning = false;
    this.setupLogging();
    this.log('Security Scanner started')}',
  setupLogging() {}
    const logDir = path.dirname(this.logFile);,
    if (!fs.existsSync(logDir)) {}
      fs.mkdirSync(logDir, { "recursive": true })}",

  }
  log(message) {}
    const timestamp = new Date().toISOString();,
    const logMessage = `[${timestamp}] ${message}\n`;,

import fs from 'fs');
import path from 'path');
const { exec_sync } = require ('child_process');
class SecurityScanner { constructor () { this.project_root = process.cwd (); this.log_file = path.join (this.project_root, "automation / logs / security - scanner.log");" this.securityReportFile = path.join (this.project_root, "automation / logs / security - report.json"); this.last_scan = null; this.scan_interval = 3600000; / 1 hour; this.is_running = false; this.setup_logging ();" this.log ("Security Scanner started")} setup_logging () { const log_dir = path.dirname (this.log_file); if () { fs.mkdir_sync (log_dir, { recursive: true })} } log (message) { const timestamp = new Date ().toISOString ()) {
  $2
} const log_message = `[${timestamp}] ${message}\n`; console.log (message); fs.appendFileSync (this.log_file, log_message); } async runSecurityAudit () { try {" this.log ("Running security audit."); const start_time = Date.now (); / Run npm audit;" const audit_output = exec_sync ("npm audit --audit - level = moderate", { const end_time = Date.now (); const scan_time = end_time - start_time; this.last_scan = {" timestamp: new Date ().toISOString () success: true; scan_time: scan_time; output: audit_output; vulnerabilities: { critical: 0; high: 0; moderate: 0; low: 0; } }` this.log (`Security audit completed successfully in ${scan_time}ms`); await this.saveSecurityReport (); } catch (error) {"` this.log (`Security audit failed: ${error.message}`); this.last_scan = {" timestamp: new Date ().toISOString () success: false; error: error.message; output: output; vulnerabilities: vulnerabilities; } await this.saveSecurityReport (); await this.handleSecurityIssues (vulnerabilities)} } parse_vulnerabilities (output) { const vulnerabilities = { async handleSecurityIssues (vulnerabilities) { const total_issues = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.moderate + vulnerabilities.low; " this.log ("Only moderate / low severity vulnerabilities found, reporting."); await this.reportSecurityIssues (vulnerabilities); } } else {" this.log ("No security vulnerabilities found"); } } async autoFixSecurityIssues () { try {" this.log ("Attempting to auto - fix security issues."); / Run npm audit fix;" const fix_output = exec_sync ("npm audit fix", { "` this.log (`Failed to auto - fix security issues: ${fix_error.message}`); await this.reportSecurityFailure (fix_error); } } async reportSecurityIssues (vulnerabilities) { const report = {" timestamp: new Date ().toISOString () vulnerabilities: vulnerabilities; project_root: this.project_root; recommendation: this.getSecurityRecommendation (vulnerabilities) " const report_file = path.join (this.project_root, "automation / logs / security - issues - report.json"); fs.writeFileSync (report_file, JSON.stringify (report, null, 2)); " this.log ("Security issues reported"); } getSecurityRecommendation (vulnerabilities) {} async saveSecurityReport () { const report = { fs.writeFileSync (this.securityReportFile, JSON.stringify (report, null, 2)); } async reportSecurityFailure (error) { const failure_report = { " const failure_file = path.join (this.project_root, "automation / logs / security - failure - report.json"); fs.writeFileSync (failure_file, JSON.stringify (failure_report, null, 2)); " this.log ("Security failure reported"); } async checkDependencyUpdates () { try {" this.log ("Checking for dependency updates."); / Check for outdated packages;" const outdated_output = exec_sync ("npm outdated", { " cwd: this.project_root;" encoding: "utf8" timeout: 60000; }); if () {" this.log ("Outdated dependencies found")) { ) {" this.log ("Outdated dependencies found")} await this.update_dependencies ()} else {" this.log ("All dependencies are up to date")} } catch (error) { // Check condition
if ( { / npm outdated returns 1 when there are outdated packages) { { / npm outdated returns 1 when there are outdated packages}" this.log ("Outdated dependencies found")) {
  $2
} await this.update_dependencies ()} else {"` this.log (`Dependency check failed: ${error.message}`)} } } async update_dependencies () { try {" this.log ("Updating dependencies."); / Update non - breaking dependencies;" exec_sync ("npm update", { " cwd: this.project_root; timeout: 300000; }); " this.log ("Dependencies updated successfully")} catch (error) {"` this.log (`Failed to update dependencies: ${error.message}`)} } async start () { this.is_running = true;" this.log ("Security Scanner started"); / Initial security scan; await this.runSecurityAudit (); / Check for dependency updates; await this.checkDependencyUpdates (); / Set up interval for regular scans; set_interval (async () => { if () { { await this.runSecurityAudit ()} await this.checkDependencyUpdates ()} }, this.scan_interval)) {
  $2
} / Handle graceful shutdown;" process.on ("SIGTERM", () => {" this.log ("Received SIGTERM, shutting down gracefully"); this.is_running = false; process.exit (0)}); " process.on ("SIGINT", () => {" this.log ("Received SIGINT, shutting down gracefully"); this.is_running = false; process.exit (0)})}}/ Start the security scanner;const scanner = new SecurityScanner;();scanner.start ().catch (error => {"" console.error ("Failed to start security scanner: ", error); process.exit (1)});='"`'"`;
class SecurityScanner {}
  constructor () {}
    this.project_root = process.cwd ();,
    this.log_file = path.join (this.project_root, 'automation / logs / security - scanner.log');',
    this.securityReportFile = path.join (this.project_root, 'automation / logs / security - report.json');',
    this.last_scan = null;,
    this.scan_interval = 3600000; // 1 hour;
    this.is_running = false;
    this.setup_logging ();
    this.log ('Security Scanner started')}',
  setup_logging () {}
    const log_dir = path.dirname (this.log_file);,
    if () {}
      fs.mkdir_sync (log_dir, { "recursive": true })}", ) {
  $2
}
  }
  log (message) {}
    const timestamp = new Date ().toISOString ();,
    const log_message = `[${timestamp}] ${message}\n`;,
    _console.log (message);,
    fs.appendFileSync (this.log_file, log_message);,

  }
  async runSecurityAudit () {}
    try {}

      this.log ('Running security audit...');',
      const start_time = Date.now ();,
      // Run npm audit;
      const audit_output = exec_sync ('npm audit --audit - level = moderate', { ',
;      const end_time = Date.now ();}
      const scan_time = end_time - start_time;,
      this.last_scan = {
        "timestamp": new Date ().toISOString ()"}
        success: true;,
        scan_time: scan_time;,
        output: audit_output;,

<<<<<<< HEAD
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
  async autoFixSecurityIssues () {}
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        vulnerabilities: {}
          critical: 0;
          high: 0;
          moderate: 0;
          low: 0;
        }
<<<<<<< HEAD
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
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    this.projectRoot = process.cwd();,
    this.logFile = path.join(this.projectRoot, 'automation/logs/security-scanner.log');',
    this.securityReportFile = path.join(this.projectRoot, 'automation/logs/security-report.json');',
    this.lastScan = null;,
    this.scanInterval = 3600000; // 1 hour;
    this.isRunning = false;
    this.setupLogging();
    this.log('Security Scanner started')}',
  setupLogging() {}
    const logDir = path.dirname(this.logFile);,
    if (!fs.existsSync(logDir)) {}
      fs.mkdirSync(logDir, { "recursive": true })}",

  }
  log(message) {}
    const timestamp = new Date().toISOString();,
    const logMessage = `[${timestamp}] ${message}\n`;,

import fs from 'fs');
import path from 'path');
const { exec_sync } = require ('child_process');
class SecurityScanner { constructor () { this.project_root = process.cwd (); this.log_file = path.join (this.project_root, "automation / logs / security - scanner.log");" this.securityReportFile = path.join (this.project_root, "automation / logs / security - report.json"); this.last_scan = null; this.scan_interval = 3600000; / 1 hour; this.is_running = false; this.setup_logging ();" this.log ("Security Scanner started")} setup_logging () { const log_dir = path.dirname (this.log_file); if () { fs.mkdir_sync (log_dir, { recursive: true })} } log (message) { const timestamp = new Date ().toISOString ()) {
  $2
} const log_message = `[${timestamp}] ${message}\n`; console.log (message); fs.appendFileSync (this.log_file, log_message); } async runSecurityAudit () { try {" this.log ("Running security audit."); const start_time = Date.now (); / Run npm audit;" const audit_output = exec_sync ("npm audit --audit - level = moderate", { const end_time = Date.now (); const scan_time = end_time - start_time; this.last_scan = {" timestamp: new Date ().toISOString () success: true; scan_time: scan_time; output: audit_output; vulnerabilities: { critical: 0; high: 0; moderate: 0; low: 0; } }` this.log (`Security audit completed successfully in ${scan_time}ms`); await this.saveSecurityReport (); } catch (error) {"` this.log (`Security audit failed: ${error.message}`); this.last_scan = {" timestamp: new Date ().toISOString () success: false; error: error.message; output: output; vulnerabilities: vulnerabilities; } await this.saveSecurityReport (); await this.handleSecurityIssues (vulnerabilities)} } parse_vulnerabilities (output) { const vulnerabilities = { async handleSecurityIssues (vulnerabilities) { const total_issues = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.moderate + vulnerabilities.low; " this.log ("Only moderate / low severity vulnerabilities found, reporting."); await this.reportSecurityIssues (vulnerabilities); } } else {" this.log ("No security vulnerabilities found"); } } async autoFixSecurityIssues () { try {" this.log ("Attempting to auto - fix security issues."); / Run npm audit fix;" const fix_output = exec_sync ("npm audit fix", { "` this.log (`Failed to auto - fix security issues: ${fix_error.message}`); await this.reportSecurityFailure (fix_error); } } async reportSecurityIssues (vulnerabilities) { const report = {" timestamp: new Date ().toISOString () vulnerabilities: vulnerabilities; project_root: this.project_root; recommendation: this.getSecurityRecommendation (vulnerabilities) " const report_file = path.join (this.project_root, "automation / logs / security - issues - report.json"); fs.writeFileSync (report_file, JSON.stringify (report, null, 2)); " this.log ("Security issues reported"); } getSecurityRecommendation (vulnerabilities) {} async saveSecurityReport () { const report = { fs.writeFileSync (this.securityReportFile, JSON.stringify (report, null, 2)); } async reportSecurityFailure (error) { const failure_report = { " const failure_file = path.join (this.project_root, "automation / logs / security - failure - report.json"); fs.writeFileSync (failure_file, JSON.stringify (failure_report, null, 2)); " this.log ("Security failure reported"); } async checkDependencyUpdates () { try {" this.log ("Checking for dependency updates."); / Check for outdated packages;" const outdated_output = exec_sync ("npm outdated", { " cwd: this.project_root;" encoding: "utf8" timeout: 60000; }); if () {" this.log ("Outdated dependencies found")) { ) {" this.log ("Outdated dependencies found")} await this.update_dependencies ()} else {" this.log ("All dependencies are up to date")} } catch (error) { // Check condition
if ( { / npm outdated returns 1 when there are outdated packages) { { / npm outdated returns 1 when there are outdated packages}" this.log ("Outdated dependencies found")) {
  $2
} await this.update_dependencies ()} else {"` this.log (`Dependency check failed: ${error.message}`)} } } async update_dependencies () { try {" this.log ("Updating dependencies."); / Update non - breaking dependencies;" exec_sync ("npm update", { " cwd: this.project_root; timeout: 300000; }); " this.log ("Dependencies updated successfully")} catch (error) {"` this.log (`Failed to update dependencies: ${error.message}`)} } async start () { this.is_running = true;" this.log ("Security Scanner started"); / Initial security scan; await this.runSecurityAudit (); / Check for dependency updates; await this.checkDependencyUpdates (); / Set up interval for regular scans; set_interval (async () => { if () { { await this.runSecurityAudit ()} await this.checkDependencyUpdates ()} }, this.scan_interval)) {
  $2
} / Handle graceful shutdown;" process.on ("SIGTERM", () => {" this.log ("Received SIGTERM, shutting down gracefully"); this.is_running = false; process.exit (0)}); " process.on ("SIGINT", () => {" this.log ("Received SIGINT, shutting down gracefully"); this.is_running = false; process.exit (0)})}}/ Start the security scanner;const scanner = new SecurityScanner;();scanner.start ().catch (error => {"" console.error ("Failed to start security scanner: ", error); process.exit (1)});='"`'"`;
class SecurityScanner {}
  constructor () {}
    this.project_root = process.cwd ();,
    this.log_file = path.join (this.project_root, 'automation / logs / security - scanner.log');',
    this.securityReportFile = path.join (this.project_root, 'automation / logs / security - report.json');',
    this.last_scan = null;,
    this.scan_interval = 3600000; // 1 hour;
    this.is_running = false;
    this.setup_logging ();
    this.log ('Security Scanner started')}',
  setup_logging () {}
    const log_dir = path.dirname (this.log_file);,
    if () {}
      fs.mkdir_sync (log_dir, { "recursive": true })}", ) {
  $2
}
  }
  log (message) {}
    const timestamp = new Date ().toISOString ();,
    const log_message = `[${timestamp}] ${message}\n`;,
    _console.log (message);,
    fs.appendFileSync (this.log_file, log_message);,

  }
  async runSecurityAudit () {}
    try {}

      this.log ('Running security audit...');',
      const start_time = Date.now ();,
      // Run npm audit;
      const audit_output = exec_sync ('npm audit --audit - level = moderate', { ',
;      const end_time = Date.now ();}
      const scan_time = end_time - start_time;,
      this.last_scan = {
        "timestamp": new Date ().toISOString ()"}
        success: true;,
        scan_time: scan_time;,
        output: audit_output;,

        vulnerabilities: {}
          critical: 0;
          high: 0;
          moderate: 0;
          low: 0;
        }

      },
      this.log (`Security audit completed successfully in ${scan_time}ms`);,
      await this.saveSecurityReport ();,
=======
    _console.log(message);,
    fs.appendFileSync(this.logFile, logMessage);,
  }
  async runSecurityAudit() {}
    try {}
      this.log('Running security audit...');',
      const startTime = Date.now();,
      // Run npm audit;
      const auditOutput = execSync('npm audit --audit-level=moderate', { ',
;      const endTime = Date.now();}
      const scanTime = endTime - startTime;,
      this.lastScan = {
        "timestamp": new Date().toISOString()"}
        success: true;,
        scanTime: scanTime;,
        output: auditOutput;,
        vulnerabilities: {}
          critical: 0;,
          high: 0;,
          moderate: 0;,
          low: 0;,
        }
      };,
      this.log(`Security audit completed successfully in ${scanTime}ms`);,
      await this.saveSecurityReport();,

    } catch (error) {}
      this.log(`Security audit "failed": ${error.message}`);",
      this.lastScan = {
        "timestamp": new Date().toISOString()"}
        success: false;,
        error: error.message;,
        output: output;,
        vulnerabilities: vulnerabilities;,

      };,

      await this.saveSecurityReport();
      await this.handleSecurityIssues(vulnerabilities)}
<<<<<<< HEAD
=======

      };,

      await this.saveSecurityReport();
      await this.handleSecurityIssues(vulnerabilities)}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  parseVulnerabilities(output) {}
    const vulnerabilities = {}

<<<<<<< HEAD
<<<<<<< HEAD

  async handleSecurityIssues(vulnerabilities) {const totalIssues = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.moderate + vulnerabilities.low;}
        this.log('Only moderate/low severity vulnerabilities found, reporting...');'
        await this.reportSecurityIssues(vulnerabilities);
      }
    } else {}
      this.log('No security vulnerabilities found');'
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      };,
      this && this.log(`Security audit completed successfully in ${scanTime}ms`);,
      await this && this.saveSecurityReport();,
    } catch (error) {}
      this && this.log(`Security audit "failed": ${error && error.message}`);",
      this && this.lastScan = {
        "timestamp": new Date().toISOString()"}
        success: false;,
        error: error && error.message;,
        output: output;,
        vulnerabilities: vulnerabilities;,
      };,
      await this && this.saveSecurityReport();
      await this && this.handleSecurityIssues(vulnerabilities)}
  }
  parseVulnerabilities(output) {}
    const vulnerabilities = {}
=======


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  async handleSecurityIssues(vulnerabilities) {
;    const totalIssues = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.moderate + vulnerabilities.low;}
        this.log('Only moderate/low severity vulnerabilities found, reporting...');',
        await this.reportSecurityIssues(vulnerabilities);,
      }
    } else {}
<<<<<<< HEAD
<<<<<<< HEAD
      this.log('No security vulnerabilities found');',

      this.log('No security vulnerabilities found');',
=======

  async handleSecurityIssues (vulnerabilities) {
;    const total_issues = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.moderate + vulnerabilities.low;}
        this.log ('Only moderate / low severity vulnerabilities found, reporting...');',
        await this.reportSecurityIssues (vulnerabilities);,
      }
    } else {}
      this.log ('No security vulnerabilities found');',

=======
      this.log('No security vulnerabilities found');',

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  async handleSecurityIssues (vulnerabilities) {
;    const total_issues = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.moderate + vulnerabilities.low;}
        this.log ('Only moderate / low severity vulnerabilities found, reporting...');',
        await this.reportSecurityIssues (vulnerabilities);,
      }
    } else {}
      this.log ('No security vulnerabilities found');',

=======
      this.log('No security vulnerabilities found');',

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  }
  async autoFixSecurityIssues() {}
    try {}
<<<<<<< HEAD
<<<<<<< HEAD
      this.log('Attempting to auto-fix security issues...');'
      // Run npm audit fix;
      const fixOutput = execSync('npm audit fix', { ';      this.log(`Failed to auto-fix security "issues": ${fixError.message}`);"
      await this.reportSecurityFailure(fixError);
      this.log('Attempting to auto-fix security issues...');',
      // Run npm audit fix;
      const fixOutput = execSync('npm audit fix', { ',
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      this && this.log('Attempting to auto-fix security issues...');',
      // Run npm audit fix;
      const fixOutput = execSync('npm audit fix', { ',
;      this && this.log(`Failed to auto-fix security "issues": ${fixError && fixError.message}`);",
      await this && this.reportSecurityFailure(fixError);,

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      this.log ('Attempting to auto - fix security issues...');',
      // Run npm audit fix;
      const fix_output = exec_sync ('npm audit fix', { ',
;      this.log (`Failed to auto - fix security "issues": ${fix_error.message}`);",
      await this.reportSecurityFailure (fix_error);,
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      this.log('Attempting to auto-fix security issues...');',
      // Run npm audit fix;
      const fixOutput = execSync('npm audit fix', { ',
;      this.log(`Failed to auto-fix security "issues": ${fixError.message}`);",
      await this.reportSecurityFailure(fixError);,

<<<<<<< HEAD
<<<<<<< HEAD
;      this.log(`Failed to auto-fix security "issues": ${fixError.message}`);",
      await this.reportSecurityFailure(fixError);,
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  }
  async reportSecurityIssues (vulnerabilities) {}
    const report = {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      "timestamp": new Date().toISOString()";
;      vulnerabilities: vulnerabilities;,}
      projectRoot: this && this.projectRoot;,
      recommendation: this && this.getSecurityRecommendation(vulnerabilities);,
    const reportFile = path && path.join(this && this.projectRoot, 'automation/logs/security-issues-report && report.json');',
    fs && fs.writeFileSync(reportFile, JSON && JSON.stringify(report, null, 2));,
    this && this.log('Security issues reported');';
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      "timestamp": new Date ().toISOString ()";
;      vulnerabilities: vulnerabilities;, }
      project_root: this.project_root;,
      recommendation: this.getSecurityRecommendation (vulnerabilities);,
    const report_file = path.join (this.project_root, 'automation / logs / security - issues - report.json');',
    fs.writeFileSync (report_file, JSON.stringify (report, null, 2));,
    this.log ('Security issues reported');';
<<<<<<< HEAD
<<<<<<< HEAD

      "timestamp": new Date().toISOString()";      vulnerabilities: vulnerabilities;,}
      projectRoot: this.projectRoot;
      recommendation: this.getSecurityRecommendation(vulnerabilities);
    const reportFile = path.join(this.projectRoot, 'automation/logs/security-issues-report.json');'
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      "timestamp": new Date().toISOString()";
;      vulnerabilities: vulnerabilities;,}
      projectRoot: this.projectRoot;,
      recommendation: this.getSecurityRecommendation(vulnerabilities);,
    const reportFile = path.join(this.projectRoot, 'automation/logs/security-issues-report.json');',
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));,
<<<<<<< HEAD
<<<<<<< HEAD
    this.log('Security issues reported');';
=======

    this.log('Security issues reported');';
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    this.log('Security issues reported');';
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  getSecurityRecommendation (vulnerabilities) {
  }


<<<<<<< HEAD
    const report = {
;    fs.writeFileSync(this.securityReportFile, JSON.stringify(report, null, 2));,
  }
  async reportSecurityFailure(error) {}
    const failureReport = {
;    const failureFile = path.join(this.projectRoot, 'automation/logs/security-failure-report.json');'}
    fs.writeFileSync(failureFile, JSON.stringify(failureReport, null, 2));,


    this.log('Security failure reported');';
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  async saveSecurityReport () {}
    const report = {
;    fs.writeFileSync (this.securityReportFile, JSON.stringify (report, null, 2));,
  }
  async reportSecurityFailure (error) {}
    const failure_report = {
;    const failure_file = path.join (this.project_root, 'automation / logs / security - failure - report.json');'}
    fs.writeFileSync (failure_file, JSON.stringify (failure_report, null, 2));,
    this.log ('Security failure reported');';
  }
  async checkDependencyUpdates () {}
    try {}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const report = {
;    fs && fs.writeFileSync(this && this.securityReportFile, JSON && JSON.stringify(report, null, 2));,
  }
  async reportSecurityFailure(error) {}
    const failureReport = {
;    const failureFile = path && path.join(this && this.projectRoot, 'automation/logs/security-failure-report && report.json');'}
    fs && fs.writeFileSync(failureFile, JSON && JSON.stringify(failureReport, null, 2));,
    this && this.log('Security failure reported');';
  }
  async checkDependencyUpdates() {}
    try {}
      this && this.log('Checking for dependency updates...');',
<<<<<<< HEAD
  async saveSecurityReport() {}
    const report = {fs.writeFileSync(this.securityReportFile, JSON.stringify(report, null, 2));
  }
  async reportSecurityFailure(error) {}
    const failureReport = {const failureFile = path.join(this.projectRoot, 'automation/logs/security-failure-report.json');'}
    fs.writeFileSync(failureFile, JSON.stringify(failureReport, null, 2));
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const report = {
;    fs.writeFileSync(this.securityReportFile, JSON.stringify(report, null, 2));,
  }
  async reportSecurityFailure(error) {}
    const failureReport = {
;    const failureFile = path.join(this.projectRoot, 'automation/logs/security-failure-report.json');'}
    fs.writeFileSync(failureFile, JSON.stringify(failureReport, null, 2));,


    this.log('Security failure reported');';
=======
  async saveSecurityReport () {}
    const report = {
;    fs.writeFileSync (this.securityReportFile, JSON.stringify (report, null, 2));,
  }
  async reportSecurityFailure (error) {}
    const failure_report = {
;    const failure_file = path.join (this.project_root, 'automation / logs / security - failure - report.json');'}
    fs.writeFileSync (failure_file, JSON.stringify (failure_report, null, 2));,
    this.log ('Security failure reported');';
  }
  async checkDependencyUpdates () {}
    try {}

    const report = {
;    fs && fs.writeFileSync(this && this.securityReportFile, JSON && JSON.stringify(report, null, 2));,
  }
  async reportSecurityFailure(error) {}
    const failureReport = {
;    const failureFile = path && path.join(this && this.projectRoot, 'automation/logs/security-failure-report && report.json');'}
    fs && fs.writeFileSync(failureFile, JSON && JSON.stringify(failureReport, null, 2));,
    this && this.log('Security failure reported');';
  }
  async checkDependencyUpdates() {}
    try {}
<<<<<<< HEAD
      this.log('Checking for dependency updates...');'
=======
=======

      this.log('Checking for dependency updates...');',

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Check for outdated packages;
      const outdatedOutput = execSync('npm outdated', { ',
;        "cwd": this && this.projectRoot;"}),
        encoding: 'utf8,',
        timeout: 60000;,
      };);,
      if (!fs && fs.existsSync(logDir)) {}
        this && this.log('Outdated dependencies found')) {',
    ) {}
<<<<<<< HEAD
        this.log('Outdated dependencies found')}',
        await this.updateDependencies()} else {}
        this.log('All dependencies are up to date')}',

        this.log('Outdated dependencies found')}'
        await this.updateDependencies()} else {}
        this.log('All dependencies are up to date')}'
=======
      this && this.log('Checking for dependency updates...');',
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      this.log('Checking for dependency updates...');',

      // Check for outdated packages;
      const outdatedOutput = execSync('npm outdated', { ',
;        "cwd": this && this.projectRoot;"}),
        encoding: 'utf8,',
        timeout: 60000;,
      };);,
      if (!fs && fs.existsSync(logDir)) {}
        this && this.log('Outdated dependencies found')) {',
    ) {}

      this.log ('Checking for dependency updates...');',
      // Check for outdated packages;
      const outdated_output = exec_sync ('npm outdated', { ',
;        "cwd": this.project_root;"}),
        encoding: 'utf8, ',
        timeout: 60000;,
      });,
      if () {}
        this.log ('Outdated dependencies found')) {', ) {
  $2
}
    ) {}
        this.log ('Outdated dependencies found')}',
        await this.update_dependencies ()} else {}
        this.log ('All dependencies are up to date')}',

=======
        this.log('Outdated dependencies found')}',
        await this.updateDependencies()} else {}
        this.log('All dependencies are up to date')}',
<<<<<<< HEAD
=======

      this.log ('Checking for dependency updates...');',
      // Check for outdated packages;
      const outdated_output = exec_sync ('npm outdated', { ',
;        "cwd": this.project_root;"}),
        encoding: 'utf8, ',
        timeout: 60000;,
      });,
      if () {}
        this.log ('Outdated dependencies found')) {', ) {
  $2
}
    ) {}
        this.log ('Outdated dependencies found')}',
        await this.update_dependencies ()} else {}
        this.log ('All dependencies are up to date')}',

=======
        this.log('Outdated dependencies found')}',
        await this.updateDependencies()} else {}
        this.log('All dependencies are up to date')}',

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } catch (error) {}
      // Check condition
if ( {) {
  $2
}
    {
        // npm outdated returns 1 when there are outdated packages}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        this && this.log('Outdated dependencies found');',
        await this && this.updateDependencies()} else {}
        this && this.log(`Dependency check "failed": ${error && error.message}`)}",

<<<<<<< HEAD
<<<<<<< HEAD
        this.log ('Outdated dependencies found');',
        await this.update_dependencies ()} else {}
        this.log (`Dependency check "failed": ${error.message}`)}",
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
        this.log ('Outdated dependencies found');',
        await this.update_dependencies ()} else {}
        this.log (`Dependency check "failed": ${error.message}`)}",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        this.log('Outdated dependencies found');',
        await this.updateDependencies()} else {}
        this.log(`Dependency check "failed": ${error.message}`)}",

<<<<<<< HEAD
<<<<<<< HEAD
        this && this.log('Outdated dependencies found');',
        await this && this.updateDependencies()} else {}
        this && this.log(`Dependency check "failed": ${error && error.message}`)}",
        this.log ('Outdated dependencies found');',
        await this.update_dependencies ()} else {}
        this.log (`Dependency check "failed": ${error.message}`)}",
        this.log('Outdated dependencies found');'
        await this.updateDependencies()} else {}
        this.log(`Dependency check "failed": ${error.message}`)}"
        this.log('Outdated dependencies found');',
        await this.updateDependencies()} else {}
        this.log(`Dependency check "failed": ${error.message}`)}",
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  }
  async update_dependencies () {}
    try {}
<<<<<<< HEAD
<<<<<<< HEAD
      this && this.log('Updating dependencies...');',

      this.log('Updating dependencies...');',

      this && this.log('Updating dependencies...');',
      this.log('Updating dependencies...');'
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      this && this.log('Updating dependencies...');',
=======

<<<<<<< HEAD
      this.log('Updating dependencies...');',

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Update non-breaking dependencies;
      execSync('npm update', { ',
        "cwd": this && this.projectRoot;"}),
        timeout: 300000;,
      });,
      this && this.log('Dependencies updated successfully')} catch (error) {'}
      this && this.log(`Failed to update "dependencies": ${error && error.message}`)}",
  }
  async start() {}
<<<<<<< HEAD
    this.isRunning = true;
    this.log('Security Scanner started');';
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      this.log('Updating dependencies...');',

      // Update non-breaking dependencies;
      execSync('npm update', { ',
        "cwd": this && this.projectRoot;"}),
        timeout: 300000;,
      });,
      this && this.log('Dependencies updated successfully')} catch (error) {'}
      this && this.log(`Failed to update "dependencies": ${error && error.message}`)}",
  }
  async start() {}

    this.isRunning = true;,
    this.log('Security Scanner started');';,
<<<<<<< HEAD
=======

    this.isRunning = true;,
    this.log('Security Scanner started');';,


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Initial security scan;
    await this && this.runSecurityAudit();
    // Check for dependency updates;
    await this && this.checkDependencyUpdates();
    // Set up interval for regular scans;
    setInterval(async () => {}


      if ( {}),
<<<<<<< HEAD
=======


      if ( {}),


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        await this.runSecurityAudit()) {
     {}
        await this.runSecurityAudit()}
        await this.checkDependencyUpdates()}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    }, this.scanInterval);,
    }, this.scanInterval);
    // Handle graceful shutdown;
    process.on('SIGTERM', () => {'}
      this.log('Received SIGTERM, shutting down gracefully');',
      this.isRunning = false;,
      process.exit(0)});,
    process.on('SIGINT', () => {'}
      this.log('Received SIGINT, shutting down gracefully');'
      this.isRunning = false;
    }, this.scanInterval);,
=======


    }, this.scanInterval);,
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    // Handle graceful shutdown;
    process.on('SIGTERM', () => {'}
      this.log('Received SIGTERM, shutting down gracefully');',
      this.isRunning = false;,
      process.exit(0)});,
    process.on('SIGINT', () => {'}
      this.log('Received SIGINT, shutting down gracefully');',
      this.isRunning = false;,
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      process.exit(0)})}
}
// Start the security scanner;
const scanner = new SecurityScanner;(;);


<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
scanner.start().catch(error => {}),
  _console.error('Failed to start security "scanner": ', error);',
  process.exit(1)});,

scanner.start().catch(error => {}),
  _console.error('Failed to start security "scanner": ', error);',
  process.exit(1)});,
scanner.start().catch(error => {}),
  _console.error('Failed to start security "scanner": ', error);',
  process.exit(1)});,
=======

scanner.start().catch(error => {}),
  _console.error('Failed to start security "scanner": ', error);',
  process.exit(1)});,
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
;

;
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
<<<<<<< HEAD


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
ursor/fix-syntax-push-and-merge-to-main-40de
  log(message) {
    const timestamp = new Date().toISOString(;
  });
    const logMessage = `[${timestamp}] ${message}\;n;`;
    );
    fs.appendFileSync(this.logFile, logMessage)}
<<<<<<< HEAD

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
ursor/migrate-github-actions-to-pm2-and-clean-up-5599
  async runSecurityAudit() {
    try {
      this.log('Running security audit...');
      const startTime = Date.now();
      // Run npm audit;
      const auditOutput = execSync('npm audit --audit-level=moderate', { 
ursor/fix-syntax-push-and-merge-to-main-40de
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 120000
      ;};);
        "cwd": this.projectRoot;
        encoding: 'utf8'
        timeout: 120000;
      };);
<<<<<<< HEAD

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      // Parse audit output for vulnerability counts;
      const output = error.stdout || error.stderr || ;';';
      const vulnerabilities = this.parseVulnerabilities(output;);
<<<<<<< HEAD
      // Parse audit output for vulnerability counts;
      const output = error.stdout || error.stderr || ;';';
      const vulnerabilities = this.parseVulnerabilities(output;);
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
ursor/fix-syntax-push-and-merge-to-main-40de
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

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
ursor/fix-syntax-push-and-merge-to-main-40de
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

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
   ; ;};
   };
<<<<<<< HEAD
   ; ;};
   };
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
};ursor/migrate-github-actions-to-pm2-and-clean-up-5599
    const reportFile = path.join(this.projectRoot, 'automation/logs/security-issues-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log('Security issues reported');
  }
  getSecurityRecommendation(vulnerabilities) {
ursor/fix-syntax-push-and-merge-to-main-40de
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

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
ursor/fix-syntax-push-and-merge-to-main-40de
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

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
"lastScan": this.lastScan,
      "projectRoot": this.projectRoot,
      "nodeVersion": process.version,
      "platform": process.platform
    };ursor/migrate-github-actions-to-pm2-and-clean-up-5599
    fs.writeFileSync(this.securityReportFile, JSON.stringify(report, null, 2));
  }
  async reportSecurityFailure(error) {
    const failureReport = {
ursor/fix-syntax-push-and-merge-to-main-40de
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

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
ursor/fix-syntax-push-and-merge-to-main-40de
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 60000
      ;};);
      if () {
<<<<<<< HEAD

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      this.log ('Updating dependencies...');',
      // Update non - breaking dependencies;
      exec_sync ('npm update', { ',
        "cwd": this.project_root;"}),
        timeout: 300000;,
      });,
      this.log ('Dependencies updated successfully')} catch (error) {'}
      this.log (`Failed to update "dependencies": ${error.message}`)}",
  }
<<<<<<< HEAD
  async start () {}
    this.is_running = true;,
    this.log ('Security Scanner started');';,
    // Initial security scan;
    await this.runSecurityAudit();
    // Check for dependency updates;
    await this.checkDependencyUpdates();
    // Set up interval for regular scans;
<<<<<<< HEAD
#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class SecurityScanner { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/security-scanner.log'); this.securityReportFile = path.join(this.projectRoot,'automation/logs/security-report.json'); this.lastScan = null; this.scanInterval = 3600000; this.isRunning = false; this.setupLogging(); this.log('Security Scanner started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runSecurityAudit() { try { this.log('Running security audit...'); const startTime = Date.now(); const auditOutput = execSync('npm audit --audit-level=moderate',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const scanTime = endTime - startTime; this.lastScan = { timestamp: new Date().toISOString() success: true; scanTime: scanTime; output: auditOutput; vulnerabilities: { critical: 0; high: 0; moderate: 0; low: 0} }; this.log(`Security audit completed successfully in ${scanTime}ms`); await this.saveSecurityReport()} catch (error) { this.log(`Security audit failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const vulnerabilities = this.parseVulnerabilities(output);  const output = error.stdout || error.stderr || ;';'; const vulnerabilities = this.parseVulnerabilities(output;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastScan = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; vulnerabilities: vulnerabilities}; await this.saveSecurityReport(); await this.handleSecurityIssues(vulnerabilities)} } parseVulnerabilities(output) { const vulnerabilities = {  critical: 0,high: 0,moderate: 0,low: 0 }; try { const criticalMatch = output.match(/(\d+) critical/); const highMatch = output.match(/(\d+) high/); const moderateMatch = output.match(/(\d+) moderate/); const lowMatch = output.match(/(\d+) low/); if (criticalMatch) { vulnerabilities.critical = parseInt(criticalMatch[1])} if (highMatch) { vulnerabilities.high = parseInt(highMatch[1])} if (moderateMatch) { vulnerabilities.moderate = parseInt(moderateMatch[1])} if (lowMatch) { vulnerabilities.low = parseInt(lowMatch[1])} } catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities}  critical: 0; high: 0; moderate: 0; low: 0}; try { const criticalMatch = output.match(/(\d+) critical;/;); const highMatch = output.match(/(\d+) high;/;); const moderateMatch = output.match(/(\d+) moderate;/;); const lowMatch = output.match(/(\d+) low;/;); if (vulnerabilities.critical = parseInt(criticalMatch[1])) { vulnerabilities.critical = parseInt(criticalMatch[1])} if (vulnerabilities.high = parseInt(highMatch[1])) { vulnerabilities.high = parseInt(highMatch[1])} if (vulnerabilities.moderate = parseInt(moderateMatch[1])) { vulnerabilities.moderate = parseInt(moderateMatch[1])} if (vulnerabilities.low = parseInt(lowMatch[1])} catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities) { vulnerabilities.low = parseInt(lowMatch[1])} catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async handleSecurityIssues(vulnerabilities) { const totalIssues = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.moderate + vulnerabilities.low;  if (totalIssues > 0) { this.log(`Found ${totalIssues} security vulnerabilities`); if (vulnerabilities.critical > 0 || vulnerabilities.high > 0) { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...'); await this.autoFixSecurityIssues()} else {  if ( { this.log(`Found ${totalIssues} security vulnerabilities`)) { { this.log(`Found ${totalIssues} security vulnerabilities`)} if ( { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...')) { { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...')} await this.autoFixSecurityIssues()} else { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Only moderate/low severity vulnerabilities found,reporting...'); await this.reportSecurityIssues(vulnerabilities)} } else { this.log('No security vulnerabilities found')} } async autoFixSecurityIssues() { try { this.log('Attempting to auto-fix security issues...'); const fixOutput = execSync('npm audit fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 300000 }); this.log('Security fixes applied'); await this.runSecurityAudit()} catch (fixError) {  cwd: this.projectRoot; encoding: 'utf8' timeout: 300000 };); this.log('Security fixes applied'); await this.runSecurityAudit()} catch (fixError) { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log(`Failed to auto-fix security issues: ${fixError.message}`); await this.reportSecurityFailure(fixError)} } async reportSecurityIssues(vulnerabilities) { const report = { timestamp: new Date().toISOString() vulnerabilities: vulnerabilities; projectRoot: this.projectRoot; recommendation: this.getSecurityRecommendation(vulnerabilities)  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const reportFile = path.join(this.projectRoot,'automation/logs/security-issues-report.json'); fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log('Security issues reported')} getSecurityRecommendation(vulnerabilities) {  if (vulnerabilities.critical > 0) { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'} else if (vulnerabilities.high > 0) { return 'HIGH: Update dependencies as soon as possible.'} else if (vulnerabilities.moderate > 0) { return 'MODERATE: Consider updating dependencies in next maintenance window.'} else if (vulnerabilities.low > 0) { return 'LOW: Monitor and update when convenient.'} else { return 'No security issues found.'}  if ( { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.') { { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'}} else if ( { return 'HIGH: Update dependencies as soon as possible.') { { return 'HIGH: Update dependencies as soon as possible.'}} else if ( { return 'MODERATE: Consider updating dependencies in next maintenance window.') { { return 'MODERATE: Consider updating dependencies in next maintenance window.'}} else if ( { return 'LOW: Monitor and update when convenient.') { { return 'LOW: Monitor and update when convenient.'}} else { return 'No security issues found.'} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } async saveSecurityReport() { const report = {  lastScan: this.lastScan,projectRoot: this.projectRoot,nodeVersion: process.version,platform: process.platform };  lastScan: this.lastScan; projectRoot: this.projectRoot; nodeVersion: process.version; platform: process.platform}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.securityReportFile,JSON.stringify(report,null,2))} async reportSecurityFailure(error) { const failureReport = {  timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/security-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Security failure reported')} async checkDependencyUpdates() { try { this.log('Checking for dependency updates...'); const outdatedOutput = execSync('npm outdated',{ cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); if (!fs.existsSync(logDir)) { this.log('Outdated dependencies found')) { ) { this.log('Outdated dependencies found')} await this.updateDependencies()} else { this.log('All dependencies are up to date')} } catch (error) { if ( { { this.log('Outdated dependencies found'); await this.updateDependencies()} else { this.log(`Dependency check failed: ${error.message}`)} } } async updateDependencies() { try { this.log('Updating dependencies...'); execSync('npm update',{ cwd: this.projectRoot; timeout: 300000}); this.log('Dependencies updated successfully')} catch (error) { this.log(`Failed to update dependencies: ${error.message}`)} } async start() { this.isRunning = true; this.log('Security Scanner started'); await this.runSecurityAudit(); await this.checkDependencyUpdates(); setInterval(async () => { if ( { await this.runSecurityAudit()) { { await this.runSecurityAudit()} await this.checkDependencyUpdates()} },this.scanInterval); process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} } const scanner = new SecurityScanner;(;); scanner.start().catch(error => { console.error('Failed to start security scanner:',error); process.exit(1)});
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
  async start () {}
    this.is_running = true;,
    this.log ('Security Scanner started');';,
    // Initial security scan;
    await this.runSecurityAudit ();
    // Check for dependency updates;
    await this.checkDependencyUpdates ();
    // Set up interval for regular scans;


#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class SecurityScanner { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/security-scanner.log'); this.securityReportFile = path.join(this.projectRoot,'automation/logs/security-report.json'); this.lastScan = null; this.scanInterval = 3600000; this.isRunning = false; this.setupLogging(); this.log('Security Scanner started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runSecurityAudit() { try { this.log('Running security audit...'); const startTime = Date.now(); const auditOutput = execSync('npm audit --audit-level=moderate',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const scanTime = endTime - startTime; this.lastScan = { timestamp: new Date().toISOString() success: true; scanTime: scanTime; output: auditOutput; vulnerabilities: { critical: 0; high: 0; moderate: 0; low: 0} }; this.log(`Security audit completed successfully in ${scanTime}ms`); await this.saveSecurityReport()} catch (error) { this.log(`Security audit failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const vulnerabilities = this.parseVulnerabilities(output);  const output = error.stdout || error.stderr || ;';'; const vulnerabilities = this.parseVulnerabilities(output;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastScan = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; vulnerabilities: vulnerabilities}; await this.saveSecurityReport(); await this.handleSecurityIssues(vulnerabilities)} } parseVulnerabilities(output) { const vulnerabilities = {  critical: 0,high: 0,moderate: 0,low: 0 }; try { const criticalMatch = output.match(/(\d+) critical/); const highMatch = output.match(/(\d+) high/); const moderateMatch = output.match(/(\d+) moderate/); const lowMatch = output.match(/(\d+) low/); if (criticalMatch) { vulnerabilities.critical = parseInt(criticalMatch[1])} if (highMatch) { vulnerabilities.high = parseInt(highMatch[1])} if (moderateMatch) { vulnerabilities.moderate = parseInt(moderateMatch[1])} if (lowMatch) { vulnerabilities.low = parseInt(lowMatch[1])} } catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities}  critical: 0; high: 0; moderate: 0; low: 0}; try { const criticalMatch = output.match(/(\d+) critical;/;); const highMatch = output.match(/(\d+) high;/;); const moderateMatch = output.match(/(\d+) moderate;/;); const lowMatch = output.match(/(\d+) low;/;); if (vulnerabilities.critical = parseInt(criticalMatch[1])) { vulnerabilities.critical = parseInt(criticalMatch[1])} if (vulnerabilities.high = parseInt(highMatch[1])) { vulnerabilities.high = parseInt(highMatch[1])} if (vulnerabilities.moderate = parseInt(moderateMatch[1])) { vulnerabilities.moderate = parseInt(moderateMatch[1])} if (vulnerabilities.low = parseInt(lowMatch[1])} catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities) { vulnerabilities.low = parseInt(lowMatch[1])} catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async handleSecurityIssues(vulnerabilities) { const totalIssues = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.moderate + vulnerabilities.low;  if (totalIssues > 0) { this.log(`Found ${totalIssues} security vulnerabilities`); if (vulnerabilities.critical > 0 || vulnerabilities.high > 0) { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...'); await this.autoFixSecurityIssues()} else {  if ( { this.log(`Found ${totalIssues} security vulnerabilities`)) { { this.log(`Found ${totalIssues} security vulnerabilities`)} if ( { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...')) { { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...')} await this.autoFixSecurityIssues()} else { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Only moderate/low severity vulnerabilities found,reporting...'); await this.reportSecurityIssues(vulnerabilities)} } else { this.log('No security vulnerabilities found')} } async autoFixSecurityIssues() { try { this.log('Attempting to auto-fix security issues...'); const fixOutput = execSync('npm audit fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 300000 }); this.log('Security fixes applied'); await this.runSecurityAudit()} catch (fixError) {  cwd: this.projectRoot; encoding: 'utf8' timeout: 300000 };); this.log('Security fixes applied'); await this.runSecurityAudit()} catch (fixError) { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log(`Failed to auto-fix security issues: ${fixError.message}`); await this.reportSecurityFailure(fixError)} } async reportSecurityIssues(vulnerabilities) { const report = { timestamp: new Date().toISOString() vulnerabilities: vulnerabilities; projectRoot: this.projectRoot; recommendation: this.getSecurityRecommendation(vulnerabilities)  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const reportFile = path.join(this.projectRoot,'automation/logs/security-issues-report.json'); fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log('Security issues reported')} getSecurityRecommendation(vulnerabilities) {  if (vulnerabilities.critical > 0) { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'} else if (vulnerabilities.high > 0) { return 'HIGH: Update dependencies as soon as possible.'} else if (vulnerabilities.moderate > 0) { return 'MODERATE: Consider updating dependencies in next maintenance window.'} else if (vulnerabilities.low > 0) { return 'LOW: Monitor and update when convenient.'} else { return 'No security issues found.'}  if ( { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.') { { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'}} else if ( { return 'HIGH: Update dependencies as soon as possible.') { { return 'HIGH: Update dependencies as soon as possible.'}} else if ( { return 'MODERATE: Consider updating dependencies in next maintenance window.') { { return 'MODERATE: Consider updating dependencies in next maintenance window.'}} else if ( { return 'LOW: Monitor and update when convenient.') { { return 'LOW: Monitor and update when convenient.'}} else { return 'No security issues found.'} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } async saveSecurityReport() { const report = {  lastScan: this.lastScan,projectRoot: this.projectRoot,nodeVersion: process.version,platform: process.platform };  lastScan: this.lastScan; projectRoot: this.projectRoot; nodeVersion: process.version; platform: process.platform}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.securityReportFile,JSON.stringify(report,null,2))} async reportSecurityFailure(error) { const failureReport = {  timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/security-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Security failure reported')} async checkDependencyUpdates() { try { this.log('Checking for dependency updates...'); const outdatedOutput = execSync('npm outdated',{ cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); if (!fs.existsSync(logDir)) { this.log('Outdated dependencies found')) { ) { this.log('Outdated dependencies found')} await this.updateDependencies()} else { this.log('All dependencies are up to date')} } catch (error) { if ( { { this.log('Outdated dependencies found'); await this.updateDependencies()} else { this.log(`Dependency check failed: ${error.message}`)} } } async updateDependencies() { try { this.log('Updating dependencies...'); execSync('npm update',{ cwd: this.projectRoot; timeout: 300000}); this.log('Dependencies updated successfully')} catch (error) { this.log(`Failed to update dependencies: ${error.message}`)} } async start() { this.isRunning = true; this.log('Security Scanner started'); await this.runSecurityAudit(); await this.checkDependencyUpdates(); setInterval(async () => { if ( { await this.runSecurityAudit()) { { await this.runSecurityAudit()} await this.checkDependencyUpdates()} },this.scanInterval); process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} } const scanner = new SecurityScanner;(;); scanner.start().catch(error => { console.error('Failed to start security scanner:',error); process.exit(1)});
#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class SecurityScanner { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/security-scanner.log'); this.securityReportFile = path.join(this.projectRoot,'automation/logs/security-report.json'); this.lastScan = null; this.scanInterval = 3600000; this.isRunning = false; this.setupLogging(); this.log('Security Scanner started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runSecurityAudit() { try { this.log('Running security audit...'); const startTime = Date.now(); const auditOutput = execSync('npm audit --audit-level=moderate',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const scanTime = endTime - startTime; this.lastScan = { timestamp: new Date().toISOString() success: true; scanTime: scanTime; output: auditOutput; vulnerabilities: { critical: 0; high: 0; moderate: 0; low: 0} }; this.log(`Security audit completed successfully in ${scanTime}ms`); await this.saveSecurityReport()} catch (error) { this.log(`Security audit failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const vulnerabilities = this.parseVulnerabilities(output);  const output = error.stdout || error.stderr || ;';'; const vulnerabilities = this.parseVulnerabilities(output;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastScan = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; vulnerabilities: vulnerabilities}; await this.saveSecurityReport(); await this.handleSecurityIssues(vulnerabilities)} } parseVulnerabilities(output) { const vulnerabilities = {  critical: 0,high: 0,moderate: 0,low: 0 }; try { const criticalMatch = output.match(/(\d+) critical/); const highMatch = output.match(/(\d+) high/); const moderateMatch = output.match(/(\d+) moderate/); const lowMatch = output.match(/(\d+) low/); if (criticalMatch) { vulnerabilities.critical = parseInt(criticalMatch[1])} if (highMatch) { vulnerabilities.high = parseInt(highMatch[1])} if (moderateMatch) { vulnerabilities.moderate = parseInt(moderateMatch[1])} if (lowMatch) { vulnerabilities.low = parseInt(lowMatch[1])} } catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities}  critical: 0; high: 0; moderate: 0; low: 0}; try { const criticalMatch = output.match(/(\d+) critical;/;); const highMatch = output.match(/(\d+) high;/;); const moderateMatch = output.match(/(\d+) moderate;/;); const lowMatch = output.match(/(\d+) low;/;); if (vulnerabilities.critical = parseInt(criticalMatch[1])) { vulnerabilities.critical = parseInt(criticalMatch[1])} if (vulnerabilities.high = parseInt(highMatch[1])) { vulnerabilities.high = parseInt(highMatch[1])} if (vulnerabilities.moderate = parseInt(moderateMatch[1])) { vulnerabilities.moderate = parseInt(moderateMatch[1])} if (vulnerabilities.low = parseInt(lowMatch[1])} catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities) { vulnerabilities.low = parseInt(lowMatch[1])} catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async handleSecurityIssues(vulnerabilities) { const totalIssues = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.moderate + vulnerabilities.low;  if (totalIssues > 0) { this.log(`Found ${totalIssues} security vulnerabilities`); if (vulnerabilities.critical > 0 || vulnerabilities.high > 0) { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...'); await this.autoFixSecurityIssues()} else {  if ( { this.log(`Found ${totalIssues} security vulnerabilities`)) { { this.log(`Found ${totalIssues} security vulnerabilities`)} if ( { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...')) { { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...')} await this.autoFixSecurityIssues()} else { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Only moderate/low severity vulnerabilities found,reporting...'); await this.reportSecurityIssues(vulnerabilities)} } else { this.log('No security vulnerabilities found')} } async autoFixSecurityIssues() { try { this.log('Attempting to auto-fix security issues...'); const fixOutput = execSync('npm audit fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 300000 }); this.log('Security fixes applied'); await this.runSecurityAudit()} catch (fixError) {  cwd: this.projectRoot; encoding: 'utf8' timeout: 300000 };); this.log('Security fixes applied'); await this.runSecurityAudit()} catch (fixError) { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log(`Failed to auto-fix security issues: ${fixError.message}`); await this.reportSecurityFailure(fixError)} } async reportSecurityIssues(vulnerabilities) { const report = { timestamp: new Date().toISOString() vulnerabilities: vulnerabilities; projectRoot: this.projectRoot; recommendation: this.getSecurityRecommendation(vulnerabilities)  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const reportFile = path.join(this.projectRoot,'automation/logs/security-issues-report.json'); fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log('Security issues reported')} getSecurityRecommendation(vulnerabilities) {  if (vulnerabilities.critical > 0) { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'} else if (vulnerabilities.high > 0) { return 'HIGH: Update dependencies as soon as possible.'} else if (vulnerabilities.moderate > 0) { return 'MODERATE: Consider updating dependencies in next maintenance window.'} else if (vulnerabilities.low > 0) { return 'LOW: Monitor and update when convenient.'} else { return 'No security issues found.'}  if ( { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.') { { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'}} else if ( { return 'HIGH: Update dependencies as soon as possible.') { { return 'HIGH: Update dependencies as soon as possible.'}} else if ( { return 'MODERATE: Consider updating dependencies in next maintenance window.') { { return 'MODERATE: Consider updating dependencies in next maintenance window.'}} else if ( { return 'LOW: Monitor and update when convenient.') { { return 'LOW: Monitor and update when convenient.'}} else { return 'No security issues found.'} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } async saveSecurityReport() { const report = {  lastScan: this.lastScan,projectRoot: this.projectRoot,nodeVersion: process.version,platform: process.platform };  lastScan: this.lastScan; projectRoot: this.projectRoot; nodeVersion: process.version; platform: process.platform}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.securityReportFile,JSON.stringify(report,null,2))} async reportSecurityFailure(error) { const failureReport = {  timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/security-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Security failure reported')} async checkDependencyUpdates() { try { this.log('Checking for dependency updates...'); const outdatedOutput = execSync('npm outdated',{ cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); if (!fs.existsSync(logDir)) { this.log('Outdated dependencies found')) { ) { this.log('Outdated dependencies found')} await this.updateDependencies()} else { this.log('All dependencies are up to date')} } catch (error) { if ( { { this.log('Outdated dependencies found'); await this.updateDependencies()} else { this.log(`Dependency check failed: ${error.message}`)} } } async updateDependencies() { try { this.log('Updating dependencies...'); execSync('npm update',{ cwd: this.projectRoot; timeout: 300000}); this.log('Dependencies updated successfully')} catch (error) { this.log(`Failed to update dependencies: ${error.message}`)} } async start() { this.isRunning = true; this.log('Security Scanner started'); await this.runSecurityAudit(); await this.checkDependencyUpdates(); setInterval(async () => { if ( { await this.runSecurityAudit()) { { await this.runSecurityAudit()} await this.checkDependencyUpdates()} },this.scanInterval); process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} } const scanner = new SecurityScanner;(;); scanner.start().catch(error => { console.error('Failed to start security scanner:',error); process.exit(1)});
#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class SecurityScanner { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/security-scanner.log'); this.securityReportFile = path.join(this.projectRoot,'automation/logs/security-report.json'); this.lastScan = null; this.scanInterval = 3600000; this.isRunning = false; this.setupLogging(); this.log('Security Scanner started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runSecurityAudit() { try { this.log('Running security audit...'); const startTime = Date.now(); const auditOutput = execSync('npm audit --audit-level=moderate',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const scanTime = endTime - startTime; this.lastScan = { timestamp: new Date().toISOString() success: true; scanTime: scanTime; output: auditOutput; vulnerabilities: { critical: 0; high: 0; moderate: 0; low: 0} }; this.log(`Security audit completed successfully in ${scanTime}ms`); await this.saveSecurityReport()} catch (error) { this.log(`Security audit failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const vulnerabilities = this.parseVulnerabilities(output);  const output = error.stdout || error.stderr || ;';'; const vulnerabilities = this.parseVulnerabilities(output;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastScan = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; vulnerabilities: vulnerabilities}; await this.saveSecurityReport(); await this.handleSecurityIssues(vulnerabilities)} } parseVulnerabilities(output) { const vulnerabilities = {  critical: 0,high: 0,moderate: 0,low: 0 }; try { const criticalMatch = output.match(/(\d+) critical/); const highMatch = output.match(/(\d+) high/); const moderateMatch = output.match(/(\d+) moderate/); const lowMatch = output.match(/(\d+) low/); if (criticalMatch) { vulnerabilities.critical = parseInt(criticalMatch[1])} if (highMatch) { vulnerabilities.high = parseInt(highMatch[1])} if (moderateMatch) { vulnerabilities.moderate = parseInt(moderateMatch[1])} if (lowMatch) { vulnerabilities.low = parseInt(lowMatch[1])} } catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities}  critical: 0; high: 0; moderate: 0; low: 0}; try { const criticalMatch = output.match(/(\d+) critical;/;); const highMatch = output.match(/(\d+) high;/;); const moderateMatch = output.match(/(\d+) moderate;/;); const lowMatch = output.match(/(\d+) low;/;); if (vulnerabilities.critical = parseInt(criticalMatch[1])) { vulnerabilities.critical = parseInt(criticalMatch[1])} if (vulnerabilities.high = parseInt(highMatch[1])) { vulnerabilities.high = parseInt(highMatch[1])} if (vulnerabilities.moderate = parseInt(moderateMatch[1])) { vulnerabilities.moderate = parseInt(moderateMatch[1])} if (vulnerabilities.low = parseInt(lowMatch[1])} catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities) { vulnerabilities.low = parseInt(lowMatch[1])} catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async handleSecurityIssues(vulnerabilities) { const totalIssues = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.moderate + vulnerabilities.low;  if (totalIssues > 0) { this.log(`Found ${totalIssues} security vulnerabilities`); if (vulnerabilities.critical > 0 || vulnerabilities.high > 0) { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...'); await this.autoFixSecurityIssues()} else {  if ( { this.log(`Found ${totalIssues} security vulnerabilities`)) { { this.log(`Found ${totalIssues} security vulnerabilities`)} if ( { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...')) { { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...')} await this.autoFixSecurityIssues()} else { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Only moderate/low severity vulnerabilities found,reporting...'); await this.reportSecurityIssues(vulnerabilities)} } else { this.log('No security vulnerabilities found')} } async autoFixSecurityIssues() { try { this.log('Attempting to auto-fix security issues...'); const fixOutput = execSync('npm audit fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 300000 }); this.log('Security fixes applied'); await this.runSecurityAudit()} catch (fixError) {  cwd: this.projectRoot; encoding: 'utf8' timeout: 300000 };); this.log('Security fixes applied'); await this.runSecurityAudit()} catch (fixError) { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log(`Failed to auto-fix security issues: ${fixError.message}`); await this.reportSecurityFailure(fixError)} } async reportSecurityIssues(vulnerabilities) { const report = { timestamp: new Date().toISOString() vulnerabilities: vulnerabilities; projectRoot: this.projectRoot; recommendation: this.getSecurityRecommendation(vulnerabilities)  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const reportFile = path.join(this.projectRoot,'automation/logs/security-issues-report.json'); fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log('Security issues reported')} getSecurityRecommendation(vulnerabilities) {  if (vulnerabilities.critical > 0) { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'} else if (vulnerabilities.high > 0) { return 'HIGH: Update dependencies as soon as possible.'} else if (vulnerabilities.moderate > 0) { return 'MODERATE: Consider updating dependencies in next maintenance window.'} else if (vulnerabilities.low > 0) { return 'LOW: Monitor and update when convenient.'} else { return 'No security issues found.'}  if ( { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.') { { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'}} else if ( { return 'HIGH: Update dependencies as soon as possible.') { { return 'HIGH: Update dependencies as soon as possible.'}} else if ( { return 'MODERATE: Consider updating dependencies in next maintenance window.') { { return 'MODERATE: Consider updating dependencies in next maintenance window.'}} else if ( { return 'LOW: Monitor and update when convenient.') { { return 'LOW: Monitor and update when convenient.'}} else { return 'No security issues found.'} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } async saveSecurityReport() { const report = {  lastScan: this.lastScan,projectRoot: this.projectRoot,nodeVersion: process.version,platform: process.platform };  lastScan: this.lastScan; projectRoot: this.projectRoot; nodeVersion: process.version; platform: process.platform}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.securityReportFile,JSON.stringify(report,null,2))} async reportSecurityFailure(error) { const failureReport = {  timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/security-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Security failure reported')} async checkDependencyUpdates() { try { this.log('Checking for dependency updates...'); const outdatedOutput = execSync('npm outdated',{ cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); if (!fs.existsSync(logDir)) { this.log('Outdated dependencies found')) { ) { this.log('Outdated dependencies found')} await this.updateDependencies()} else { this.log('All dependencies are up to date')} } catch (error) { if ( { { this.log('Outdated dependencies found'); await this.updateDependencies()} else { this.log(`Dependency check failed: ${error.message}`)} } } async updateDependencies() { try { this.log('Updating dependencies...'); execSync('npm update',{ cwd: this.projectRoot; timeout: 300000}); this.log('Dependencies updated successfully')} catch (error) { this.log(`Failed to update dependencies: ${error.message}`)} } async start() { this.isRunning = true; this.log('Security Scanner started'); await this.runSecurityAudit(); await this.checkDependencyUpdates(); setInterval(async () => { if ( { await this.runSecurityAudit()) { { await this.runSecurityAudit()} await this.checkDependencyUpdates()} },this.scanInterval); process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} } const scanner = new SecurityScanner;(;); scanner.start().catch(error => { console.error('Failed to start security scanner:',error); process.exit(1)});
#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class SecurityScanner { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/security-scanner.log'); this.securityReportFile = path.join(this.projectRoot,'automation/logs/security-report.json'); this.lastScan = null; this.scanInterval = 3600000; this.isRunning = false; this.setupLogging(); this.log('Security Scanner started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runSecurityAudit() { try { this.log('Running security audit...'); const startTime = Date.now(); const auditOutput = execSync('npm audit --audit-level=moderate',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const scanTime = endTime - startTime; this.lastScan = { timestamp: new Date().toISOString() success: true; scanTime: scanTime; output: auditOutput; vulnerabilities: { critical: 0; high: 0; moderate: 0; low: 0} }; this.log(`Security audit completed successfully in ${scanTime}ms`); await this.saveSecurityReport()} catch (error) { this.log(`Security audit failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const vulnerabilities = this.parseVulnerabilities(output);  const output = error.stdout || error.stderr || ;';'; const vulnerabilities = this.parseVulnerabilities(output;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastScan = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; vulnerabilities: vulnerabilities}; await this.saveSecurityReport(); await this.handleSecurityIssues(vulnerabilities)} } parseVulnerabilities(output) { const vulnerabilities = {  critical: 0,high: 0,moderate: 0,low: 0 }; try { const criticalMatch = output.match(/(\d+) critical/); const highMatch = output.match(/(\d+) high/); const moderateMatch = output.match(/(\d+) moderate/); const lowMatch = output.match(/(\d+) low/); if (criticalMatch) { vulnerabilities.critical = parseInt(criticalMatch[1])} if (highMatch) { vulnerabilities.high = parseInt(highMatch[1])} if (moderateMatch) { vulnerabilities.moderate = parseInt(moderateMatch[1])} if (lowMatch) { vulnerabilities.low = parseInt(lowMatch[1])} } catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities}  critical: 0; high: 0; moderate: 0; low: 0}; try { const criticalMatch = output.match(/(\d+) critical;/;); const highMatch = output.match(/(\d+) high;/;); const moderateMatch = output.match(/(\d+) moderate;/;); const lowMatch = output.match(/(\d+) low;/;); if (vulnerabilities.critical = parseInt(criticalMatch[1])) { vulnerabilities.critical = parseInt(criticalMatch[1])} if (vulnerabilities.high = parseInt(highMatch[1])) { vulnerabilities.high = parseInt(highMatch[1])} if (vulnerabilities.moderate = parseInt(moderateMatch[1])) { vulnerabilities.moderate = parseInt(moderateMatch[1])} if (vulnerabilities.low = parseInt(lowMatch[1])} catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities) { vulnerabilities.low = parseInt(lowMatch[1])} catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async handleSecurityIssues(vulnerabilities) { const totalIssues = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.moderate + vulnerabilities.low;  if (totalIssues > 0) { this.log(`Found ${totalIssues} security vulnerabilities`); if (vulnerabilities.critical > 0 || vulnerabilities.high > 0) { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...'); await this.autoFixSecurityIssues()} else {  if ( { this.log(`Found ${totalIssues} security vulnerabilities`)) { { this.log(`Found ${totalIssues} security vulnerabilities`)} if ( { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...')) { { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...')} await this.autoFixSecurityIssues()} else { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Only moderate/low severity vulnerabilities found,reporting...'); await this.reportSecurityIssues(vulnerabilities)} } else { this.log('No security vulnerabilities found')} } async autoFixSecurityIssues() { try { this.log('Attempting to auto-fix security issues...'); const fixOutput = execSync('npm audit fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 300000 }); this.log('Security fixes applied'); await this.runSecurityAudit()} catch (fixError) {  cwd: this.projectRoot; encoding: 'utf8' timeout: 300000 };); this.log('Security fixes applied'); await this.runSecurityAudit()} catch (fixError) { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log(`Failed to auto-fix security issues: ${fixError.message}`); await this.reportSecurityFailure(fixError)} } async reportSecurityIssues(vulnerabilities) { const report = { timestamp: new Date().toISOString() vulnerabilities: vulnerabilities; projectRoot: this.projectRoot; recommendation: this.getSecurityRecommendation(vulnerabilities)  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const reportFile = path.join(this.projectRoot,'automation/logs/security-issues-report.json'); fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log('Security issues reported')} getSecurityRecommendation(vulnerabilities) {  if (vulnerabilities.critical > 0) { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'} else if (vulnerabilities.high > 0) { return 'HIGH: Update dependencies as soon as possible.'} else if (vulnerabilities.moderate > 0) { return 'MODERATE: Consider updating dependencies in next maintenance window.'} else if (vulnerabilities.low > 0) { return 'LOW: Monitor and update when convenient.'} else { return 'No security issues found.'}  if ( { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.') { { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'}} else if ( { return 'HIGH: Update dependencies as soon as possible.') { { return 'HIGH: Update dependencies as soon as possible.'}} else if ( { return 'MODERATE: Consider updating dependencies in next maintenance window.') { { return 'MODERATE: Consider updating dependencies in next maintenance window.'}} else if ( { return 'LOW: Monitor and update when convenient.') { { return 'LOW: Monitor and update when convenient.'}} else { return 'No security issues found.'} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } async saveSecurityReport() { const report = {  lastScan: this.lastScan,projectRoot: this.projectRoot,nodeVersion: process.version,platform: process.platform };  lastScan: this.lastScan; projectRoot: this.projectRoot; nodeVersion: process.version; platform: process.platform}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.securityReportFile,JSON.stringify(report,null,2))} async reportSecurityFailure(error) { const failureReport = {  timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/security-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Security failure reported')} async checkDependencyUpdates() { try { this.log('Checking for dependency updates...'); const outdatedOutput = execSync('npm outdated',{ cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); if (!fs.existsSync(logDir)) { this.log('Outdated dependencies found')) { ) { this.log('Outdated dependencies found')} await this.updateDependencies()} else { this.log('All dependencies are up to date')} } catch (error) { if ( { { this.log('Outdated dependencies found'); await this.updateDependencies()} else { this.log(`Dependency check failed: ${error.message}`)} } } async updateDependencies() { try { this.log('Updating dependencies...'); execSync('npm update',{ cwd: this.projectRoot; timeout: 300000}); this.log('Dependencies updated successfully')} catch (error) { this.log(`Failed to update dependencies: ${error.message}`)} } async start() { this.isRunning = true; this.log('Security Scanner started'); await this.runSecurityAudit(); await this.checkDependencyUpdates(); setInterval(async () => { if ( { await this.runSecurityAudit()) { { await this.runSecurityAudit()} await this.checkDependencyUpdates()} },this.scanInterval); process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} } const scanner = new SecurityScanner;(;); scanner.start().catch(error => { console.error('Failed to start security scanner:',error); process.exit(1)});
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======


=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      if ( {}),
        await this && this.runSecurityAudit()) {
     {}
        await this && this.runSecurityAudit()}
        await this && this.checkDependencyUpdates()}
    }, this && this.scanInterval);,
    // Handle graceful shutdown;
    process && process.on('SIGTERM', () => {'}
      this && this.log('Received SIGTERM, shutting down gracefully');',
      this && this.isRunning = false;,
      process && process.exit(0)});,
    process && process.on('SIGINT', () => {'}
      this && this.log('Received SIGINT, shutting down gracefully');',
      this && this.isRunning = false;,
      process && process.exit(0)})}
}
// Start the security scanner;
const scanner = new SecurityScanner;(;);
scanner && scanner.start().catch(error => {}),
  _console && _console.error('Failed to start security "scanner": ', error);',
  process && process.exit(1)});,

<<<<<<< HEAD
origin/automation-improvements-final
// Main execution;
if (import && import.meta.url = = = `file: //${process ; const scanner = new SecurityScanner(); scanner && scanner.run().catch(console && console.error)};
export default SecurityScanner;
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
=======

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
// Main execution;
if (import && import.meta.url = = = `file: //${process ; const scanner = new SecurityScanner(); scanner && scanner.run().catch(console && console.error)};
export default SecurityScanner;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


      const auditResult = JSON.parse(output.toString()),
,
      if (auditResult.vulnerabilities) {,
        const vulnCount = Object.keys(auditResult.vulnerabilities).length,
        this.vulnerabilities.push(`${vulnCount} vulnerabilities found`),

<<<<<<< HEAD
        this.log(`Found ${vulnCount} vulnerabilities`, "WARN")
      } else {,
        this.log(`Found ${vulnCount} vulnerabilities`, "WARN"),
      } else {,
        this.log("✓ No vulnerabilities found"),
      };
    } catch (error) {,
      this.log(`Security audit failed: ${error.message}`, "ERROR"),
    };
  };
        this.log(`Found ${vulnCount} vulnerabilities`, "WARN")
      } else {,
=======

        this.log(`Found ${vulnCount} vulnerabilities`, "WARN")
      } else {,
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        this.log("✓ No vulnerabilities found")
      }
    } catch (error) {,;
      this.log(`Security audit: failed: ${error.message}`, "ERROR");
    }
  },
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
          /token\s*[:=]\s*["'][^"']+["']/gi


          /token\s*[:=]\s*["'][^"']+["']/gi,
          /token\s*[:=]\s*["'][^"']+["']/gi
=======

          /token\s*[:=]\s*["'][^"']+["']/gi


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
        this.log(`Found ${secretCount} potential secrets`, "WARN")
      } else {,
        this.log(`Found ${secretCount} potential secrets`, "WARN"),
      } else {,
        this.log("✓ No exposed secrets found"),
      };
    } catch (error) {,
      this.log(`Secret check failed: ${error.message}`, "ERROR"),
    };
  };
        this.log(`Found ${secretCount} potential secrets`, "WARN")
      } else {,
=======

        this.log(`Found ${secretCount} potential secrets`, "WARN")
      } else {,
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        this.log("✓ No exposed secrets found")
      }
    } catch (error) {,;
      this.log(`Secret check: failed: ${error.message}`, "ERROR");
    }
  },
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
            walkDir(fullPath)
          } else if (item.endsWith(".ts") || item.endsWith(".tsx") || item.endsWith(".js") || item.endsWith(".jsx")) {,
            walkDir(fullPath),
          } else if (item.endsWith(".ts") || item.endsWith(".tsx") || item.endsWith(".js") || item.endsWith(".jsx")) {,
            files.push(fullPath),
          };
        }),
      };
            walkDir(fullPath)
          } else if (item.endsWith(".ts") || item.endsWith(".tsx") || item.endsWith(".js") || item.endsWith(".jsx")) {,
=======

            walkDir(fullPath)
          } else if (item.endsWith(".ts") || item.endsWith(".tsx") || item.endsWith(".js") || item.endsWith(".jsx")) {,
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            files.push(fullPath)
          }
        })
      },
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      timestam: p: new Date().toISOString(),
      vulnerabilitie: s: this.vulnerabilities,
      recommendation: s: [,


<<<<<<< HEAD
      timestamp: new Date().toISOString(),
      vulnerabilities: this.vulnerabilities,
      recommendations: [,
      timestam: p: new Date().toISOString(),
      vulnerabilitie: s: this.vulnerabilities,
      recommendation: s: [,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        "Run npm audit fix to address vulnerabilities",
        "Review and remove any hardcoded secrets",
        "Use environment variables for sensitive data",
        "Implement proper authentication and authorization",

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        "Regularly update dependencies"
      ]
    },


<<<<<<< HEAD
        "Regularly update dependencies",
      ],
    };
        "Regularly update dependencies"
      ]
    },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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


      this.log(`🎯 Security Scanner completed. Issues: found: ${this.vulnerabilities.length}`),
      this.vulnerabilities.forEach(vuln => this.log(`  ⚠️  ${vuln}`))

    } catch (error) {,
<<<<<<< HEAD
      this.log(`🎯 Security Scanner completed. Issues found: ${this.vulnerabilities.length}`),
      this.vulnerabilities.forEach(vuln => this.log(`  ⚠️  ${vuln}`)),
,
    } catch (error) {,
      this.log(`❌ Security Scanner failed: ${error.message}`, "ERROR"),
    };
  };
};
      this.log(`🎯 Security Scanner completed. Issues: found: ${this.vulnerabilities.length}`),
      this.vulnerabilities.forEach(vuln => this.log(`  ⚠️  ${vuln}`))

    } catch (error) {,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      this.log(`❌ Security Scanner: failed: ${error.message}`, "ERROR")
    }
  }
},
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
,
// Main execution,
if (import.meta.url === `file: //${process.argv[1]}`) {,
  const scanner = new SecurityScanner(),
  scanner.run().catch(console.error),
};
,
export default SecurityScanner,
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

// Main execution;
if (import.meta.url = = = `file: //${process.argv[1]}`) {const scanner = new SecurityScanner(); scanner.run().catch(console.error)}
export default SecurityScanner;
<<<<<<< HEAD
ursor/automate-test-improve-and-merge-code-8ee2
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
// Main execution;
if (import.meta.url = = = `file: //${process.argv[1]}`) {const scanner = new SecurityScanner(); scanner.run().catch(console.error)}
export default SecurityScanner;
origin/main
origin/automation-improvements-final
=======

=======

>>>>>>> origin/automation-improvements-final
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
scanner.start().catch(error => {})
  _console.error('Failed to start security "scanner": ', error);'
  process.exit(1)});
// Main execution;
if (import.meta.url = = = `file: //${process.argv[1]}`) {const scanner = new SecurityScanner(); scanner.run().catch(console.error)}
export default SecurityScanner;
    set_interval (async () => {}
      // Check condition
if (, ) {
  $2
}
        await this.runSecurityAudit ()) {
    {}
        await this.runSecurityAudit ()}
        await this.checkDependencyUpdates ()}
    }, this.scan_interval);,
    // Handle graceful shutdown;
    process.on ('SIGTERM', () => {'}
      this.log ('Received SIGTERM, shutting down gracefully');',
      this.is_running = false;,
      process.exit (0)});,
    process.on ('SIGINT', () => {'}
      this.log ('Received SIGINT, shutting down gracefully');',
      this.is_running = false;,
      process.exit (0)})}
}
// Start the security scanner;
const scanner = new SecurityScanner;();
scanner.start ().catch (error => {}),
  _console.error ('Failed to start security "scanner": ', error);',
  process.exit (1)});,
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
origin/automation-improvements-final
// Main execution;
if (import && import.meta.url = = = `file: //${process ; const scanner = new SecurityScanner(); scanner && scanner.run().catch(console && console.error)};
export default SecurityScanner;
<<<<<<< HEAD
;

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
=======


<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
      const auditResult = JSON.parse(output.toString()),
,
      if (auditResult.vulnerabilities) {,
        const vulnCount = Object.keys(auditResult.vulnerabilities).length,
        this.vulnerabilities.push(`${vulnCount} vulnerabilities found`),
        this.log(`Found ${vulnCount} vulnerabilities`, "WARN"),
      } else {,
        this.log("✓ No vulnerabilities found"),
      };
    } catch (error) {,
      this.log(`Security audit failed: ${error.message}`, "ERROR"),
    };
  };
        this.log(`Found ${vulnCount} vulnerabilities`, "WARN")
      } else {,
        this.log("✓ No vulnerabilities found")
      }
    } catch (error) {,;
      this.log(`Security audit: failed: ${error.message}`, "ERROR");
    }
  },
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
          /token\s*[:=]\s*["'][^"']+["']/gi,
          /token\s*[:=]\s*["'][^"']+["']/gi
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
        this.log(`Found ${secretCount} potential secrets`, "WARN"),
      } else {,
        this.log("✓ No exposed secrets found"),
      };
    } catch (error) {,
      this.log(`Secret check failed: ${error.message}`, "ERROR"),
    };
  };
        this.log(`Found ${secretCount} potential secrets`, "WARN")
      } else {,
        this.log("✓ No exposed secrets found")
      }
    } catch (error) {,;
      this.log(`Secret check: failed: ${error.message}`, "ERROR");
    }
  },
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
            walkDir(fullPath),
          } else if (item.endsWith(".ts") || item.endsWith(".tsx") || item.endsWith(".js") || item.endsWith(".jsx")) {,
            files.push(fullPath),
          };
        }),
      };
            walkDir(fullPath)
          } else if (item.endsWith(".ts") || item.endsWith(".tsx") || item.endsWith(".js") || item.endsWith(".jsx")) {,
            files.push(fullPath)
          }
        })
      },
,
      walkDir(srcDir),
    };
,
    return files,
  };
,
  async generateReport() {,
    const report = {,
      timestamp: new Date().toISOString(),
      vulnerabilities: this.vulnerabilities,
      recommendations: [,
      timestam: p: new Date().toISOString(),
      vulnerabilitie: s: this.vulnerabilities,
      recommendation: s: [,
        "Run npm audit fix to address vulnerabilities",
        "Review and remove any hardcoded secrets",
        "Use environment variables for sensitive data",
        "Implement proper authentication and authorization",
        "Regularly update dependencies",
      ],
    };
        "Regularly update dependencies"
      ]
    },
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
      this.log(`🎯 Security Scanner completed. Issues found: ${this.vulnerabilities.length}`),
      this.vulnerabilities.forEach(vuln => this.log(`  ⚠️  ${vuln}`)),
,
    } catch (error) {,
      this.log(`❌ Security Scanner failed: ${error.message}`, "ERROR"),
    };
  };
};
      this.log(`🎯 Security Scanner completed. Issues: found: ${this.vulnerabilities.length}`),
      this.vulnerabilities.forEach(vuln => this.log(`  ⚠️  ${vuln}`))

    } catch (error) {,
      this.log(`❌ Security Scanner: failed: ${error.message}`, "ERROR")
    }
  }
},
,
// Main execution,
if (import.meta.url === `file: //${process.argv[1]}`) {,
  const scanner = new SecurityScanner(),
  scanner.run().catch(console.error),
};
,
export default SecurityScanner,
ursor/automate-test-improve-and-merge-code-8ee2
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
// Main execution;
if (import.meta.url = = = `file: //${process.argv[1]}`) {const scanner = new SecurityScanner(); scanner.run().catch(console.error)}
export default SecurityScanner;

=======

>>>>>>> origin/automation-improvements-final
=======
scanner.start().catch(error => {})
  _console.error('Failed to start security "scanner": ', error);'
  process.exit(1)});
// Main execution;
if (import.meta.url = = = `file: //${process.argv[1]}`) {const scanner = new SecurityScanner(); scanner.run().catch(console.error)}
export default SecurityScanner;




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
