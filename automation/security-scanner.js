<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
;
// Main execution;
if (import.meta.url = = = `file: //${process.argv[1]}`) {; const scanner = new SecurityScanner(); scanner.run().catch(console.error)};
;
export default SecurityScanner;
};
};
;
  log(message, level = "INFO") {;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> f6b849a806966ab0803a1eba10ab812addf04f56
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
import fs from 'fs')
import path from 'path')
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/fix-syntax-push-and-merge-to-main-40de
origin/main
origin/automation-improvements-final
import fs from 'fs')
import path from 'path')
import fs from 'fs')
import path from 'path');




import fs from 'fs')
import path from 'path')
import fs from 'fs')
import path from 'path')
import fs from 'fs')
import path from 'path');
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/fix-syntax-push-and-merge-to-main-40de
origin/main
origin/automation-improvements-final
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
import fs from 'fs')
import path from 'path')
import fs from 'fs')
import path from 'path');




import fs from 'fs')
import path from 'path')




import fs from 'fs')
import path from 'path')
import fs from 'fs')
import path from 'path');
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
const { execSync } = require('child_process');
class SecurityScanner { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot, "automation/logs/security-scanner.log");" this.securityReportFile = path.join(this.projectRoot, "automation/logs/security-report.json"); this.lastScan = null; this.scanInterval = 3600000; / 1 hour; this.isRunning = false; this.setupLogging();" this.log("Security Scanner started")} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir, { recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile, logMessage); } async runSecurityAudit() { try {" this.log("Running security audit."); const startTime = Date.now(); / Run npm audit;" const auditOutput = execSync("npm audit --audit-level=moderate", { const endTime = Date.now(); const scanTime = endTime - startTime; this.lastScan = {" timestamp: new Date().toISOString() success: true; scanTime: scanTime; output: auditOutput; vulnerabilities: { critical: 0; high: 0; moderate: 0; low: 0; } };` this.log(`Security audit completed successfully in ${scanTime}ms`); await this.saveSecurityReport(); } catch (error) {"` this.log(`Security audit failed: ${error.message}`); this.lastScan = {" timestamp: new Date().toISOString() success: false; error: error.message; output: output; vulnerabilities: vulnerabilities; }; await this.saveSecurityReport(); await this.handleSecurityIssues(vulnerabilities)} } parseVulnerabilities(output) { const vulnerabilities = { async handleSecurityIssues(vulnerabilities) { const totalIssues = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.moderate + vulnerabilities.low; " this.log("Only moderate/low severity vulnerabilities found, reporting."); await this.reportSecurityIssues(vulnerabilities); } } else {" this.log("No security vulnerabilities found"); } } async autoFixSecurityIssues() { try {" this.log("Attempting to auto-fix security issues."); / Run npm audit fix;" const fixOutput = execSync("npm audit fix", { "` this.log(`Failed to auto-fix security issues: ${fixError.message}`); await this.reportSecurityFailure(fixError); } } async reportSecurityIssues(vulnerabilities) { const report = {" timestamp: new Date().toISOString() vulnerabilities: vulnerabilities; projectRoot: this.projectRoot; recommendation: this.getSecurityRecommendation(vulnerabilities) " const reportFile = path.join(this.projectRoot, "automation/logs/security-issues-report.json"); fs.writeFileSync(reportFile, JSON.stringify(report, null, 2)); " this.log("Security issues reported"); } getSecurityRecommendation(vulnerabilities) {} async saveSecurityReport() { const report = { fs.writeFileSync(this.securityReportFile, JSON.stringify(report, null, 2)); } async reportSecurityFailure(error) { const failureReport = { " const failureFile = path.join(this.projectRoot, "automation/logs/security-failure-report.json"); fs.writeFileSync(failureFile, JSON.stringify(failureReport, null, 2)); " this.log("Security failure reported"); } async checkDependencyUpdates() { try {" this.log("Checking for dependency updates."); / Check for outdated packages;" const outdatedOutput = execSync("npm outdated", { " cwd: this.projectRoot;" encoding: "utf8" timeout: 60000; };); if (!fs.existsSync(logDir)) {" this.log("Outdated dependencies found")) { ) {" this.log("Outdated dependencies found")} await this.updateDependencies()} else {" this.log("All dependencies are up to date")} } catch (error) { if ( { / npm outdated returns 1 when there are outdated packages) { { / npm outdated returns 1 when there are outdated packages}" this.log("Outdated dependencies found"); await this.updateDependencies()} else {"` this.log(`Dependency check failed: ${error.message}`)} } } async updateDependencies() { try {" this.log("Updating dependencies."); / Update non-breaking dependencies;" execSync("npm update", { " cwd: this.projectRoot; timeout: 300000; }); " this.log("Dependencies updated successfully")} catch (error) {"` this.log(`Failed to update dependencies: ${error.message}`)} } async start() { this.isRunning = true;" this.log("Security Scanner started"); / Initial security scan; await this.runSecurityAudit(); / Check for dependency updates; await this.checkDependencyUpdates(); / Set up interval for regular scans; setInterval(async () => { if ( { await this.runSecurityAudit()) { { await this.runSecurityAudit()} await this.checkDependencyUpdates()} }, this.scanInterval); / Handle graceful shutdown;" process.on("SIGTERM", () => {" this.log("Received SIGTERM, shutting down gracefully"); this.isRunning = false; process.exit(0)}); " process.on("SIGINT", () => {" this.log("Received SIGINT, shutting down gracefully"); this.isRunning = false; process.exit(0)})}}/ Start the security scanner;const scanner = new SecurityScanner;(;);scanner.start().catch(error => {"" console.error("Failed to start security scanner: ", error); process.exit(1)});='"`'"`
class SecurityScanner {}
  constructor() {}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

    this && this.projectRoot = process && process.cwd();,
    this && this.logFile = path && path.join(this && this.projectRoot, 'automation/logs/security-scanner && scanner.log');',
    this && this.securityReportFile = path && path.join(this && this.projectRoot, 'automation/logs/security-report && report.json');',
    this && this.lastScan = null;,
    this && this.scanInterval = 3600000; // 1 hour;
    this && this.isRunning = false;
    this && this.setupLogging();
    this && this.log('Security Scanner started')}',
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
  setupLogging() {}
    const logDir = path && path.dirname(this && this.logFile);,
    if (!fs && fs.existsSync(logDir)) {}
      fs && fs.mkdirSync(logDir, { "recursive": true })}",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
    this.projectRoot = process.cwd();,
    this.logFile = path.join(this.projectRoot, 'automation/logs/security-scanner.log');',
    this.securityReportFile = path.join(this.projectRoot, 'automation/logs/security-report.json');',
    this.lastScan = null;,
    this.scanInterval = 3600000; // 1 hour;
    this.isRunning = false;
    this.setupLogging();
        vulnerabilities: {}
          critical: 0;
          high: 0;
          moderate: 0;
          low: 0;
        }
    this.scanInterval = 3600000; // 1 hour;
    this.isRunning = false;
    this.setupLogging();
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
    this.log('Security Scanner started')}',
  setupLogging() {}
    const logDir = path.dirname(this.logFile);,
    if (!fs.existsSync(logDir)) {}
      fs.mkdirSync(logDir, { "recursive": true })}",
  }
  log(message) {}
    const timestamp = new Date().toISOString();,
    const logMessage = `[${timestamp}] ${message}\n`;,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

      },
      this.log (`Security audit completed successfully in ${scan_time}ms`);,
      await this.saveSecurityReport ();,
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
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
<<<<<<< HEAD
<<<<<<< HEAD
// Parse audit output for vulnerability counts
      const output = error.stdout || error.stderr || '';
      const vulnerabilities = this.parseVulnerabilities(output);ursor/migrate-github-actions-to-pm2-and-clean-up-5599
=======
<<<<<<< HEAD
=======
// Parse audit output for vulnerability counts
      const output = error.stdout || error.stderr || '';
      const vulnerabilities = this.parseVulnerabilities(output);ursor/migrate-github-actions-to-pm2-and-clean-up-5599
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
      };,
      this.log(`Security audit completed successfully in ${scanTime}ms`);,
      await this.saveSecurityReport();,
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      };,
      this.log(`Security audit completed successfully in ${scanTime}ms`);,
      await this.saveSecurityReport();,
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
    } catch (error) {}
      this.log(`Security audit "failed": ${error.message}`);",
      this.lastScan = {
        "timestamp": new Date().toISOString()"}
        success: false;,
        error: error.message;,
        output: output;,
        vulnerabilities: vulnerabilities;,
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
      };,
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
      };,
      await this.saveSecurityReport();
      await this.handleSecurityIssues(vulnerabilities)}
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

      };,

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      await this.saveSecurityReport();
      await this.handleSecurityIssues(vulnerabilities)}
  }
  parseVulnerabilities(output) {}
    const vulnerabilities = {}
<<<<<<< HEAD
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
      await this.saveSecurityReport();
      await this.handleSecurityIssues(vulnerabilities)}

  }
  parseVulnerabilities(output) {}
    const vulnerabilities = {}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  }
  parseVulnerabilities(output) {}
    const vulnerabilities = {}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  }
  parseVulnerabilities(output) {}
    const vulnerabilities = {}
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
  async handleSecurityIssues(vulnerabilities) {
;    const totalIssues = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.moderate + vulnerabilities.low;}
        this.log('Only moderate/low severity vulnerabilities found, reporting...');',
        await this.reportSecurityIssues(vulnerabilities);,
      }
    } else {}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      this.log('No security vulnerabilities found');',
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

  async handleSecurityIssues (vulnerabilities) {
;    const total_issues = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.moderate + vulnerabilities.low;}
        this.log ('Only moderate / low severity vulnerabilities found, reporting...');',
        await this.reportSecurityIssues (vulnerabilities);,
      }
    } else {}
      this.log ('No security vulnerabilities found');',

<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
      this.log('No security vulnerabilities found');',
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      this.log('No security vulnerabilities found');',
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
    }
  }
  async autoFixSecurityIssues() {}
    try {}

<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
      this.log ('Attempting to auto - fix security issues...');',
      // Run npm audit fix;
      const fix_output = exec_sync ('npm audit fix', { ',
;      this.log (`Failed to auto - fix security "issues": ${fix_error.message}`);",
      await this.reportSecurityFailure (fix_error);,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
      this.log('Attempting to auto-fix security issues...');',
      // Run npm audit fix;
      const fixOutput = execSync('npm audit fix', { ',
;      this.log(`Failed to auto-fix security "issues": ${fixError.message}`);",
      await this.reportSecurityFailure(fixError);,
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
    }
  }
  async reportSecurityIssues(vulnerabilities) {}
    const report = {

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
      "timestamp": new Date().toISOString()";
;      vulnerabilities: vulnerabilities;,}
      projectRoot: this && this.projectRoot;,
      recommendation: this && this.getSecurityRecommendation(vulnerabilities);,
    const reportFile = path && path.join(this && this.projectRoot, 'automation/logs/security-issues-report && report.json');',
    fs && fs.writeFileSync(reportFile, JSON && JSON.stringify(report, null, 2));,
    this && this.log('Security issues reported');';

=======
      "timestamp": new Date ().toISOString ()";
;      vulnerabilities: vulnerabilities;, }
      project_root: this.project_root;,
      recommendation: this.getSecurityRecommendation (vulnerabilities);,
    const report_file = path.join (this.project_root, 'automation / logs / security - issues - report.json');',
    fs.writeFileSync (report_file, JSON.stringify (report, null, 2));,
    this.log ('Security issues reported');';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

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
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
      "timestamp": new Date().toISOString()";
;      vulnerabilities: vulnerabilities;,}
      projectRoot: this.projectRoot;,
      recommendation: this.getSecurityRecommendation(vulnerabilities);,
    const reportFile = path.join(this.projectRoot, 'automation/logs/security-issues-report.json');',
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));,
    this.log('Security issues reported');';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
    this.log('Security issues reported');';
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c

    this.log('Security issues reported');';
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
  getSecurityRecommendation(vulnerabilities) {
  }
<<<<<<< HEAD
  async saveSecurityReport() {}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======

    this.log('Security issues reported');';
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
  }
  getSecurityRecommendation(vulnerabilities) {
  }
  async saveSecurityReport() {}
<<<<<<< HEAD
=======
  getSecurityRecommendation (vulnerabilities) {
  }
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
    const report = {
;    fs.writeFileSync(this.securityReportFile, JSON.stringify(report, null, 2));,
  }
  async reportSecurityFailure(error) {}
    const failureReport = {
;    const failureFile = path.join(this.projectRoot, 'automation/logs/security-failure-report.json');'}
    fs.writeFileSync(failureFile, JSON.stringify(failureReport, null, 2));,
    this.log('Security failure reported');';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  }
  async checkDependencyUpdates() {}
    try {}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  }
  async checkDependencyUpdates() {}
    try {}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
      this && this.log('Checking for dependency updates...');',
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      this.log('Checking for dependency updates...');',
=======
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      this.log('Checking for dependency updates...');',
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
  }
  async checkDependencyUpdates() {}
    try {}
      this.log('Checking for dependency updates...');',
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
      // Check for outdated packages;
      const outdatedOutput = execSync('npm outdated', { ',
;        "cwd": this.projectRoot;"}),
        encoding: 'utf8,',
        timeout: 60000;,
      };);,
      if (!fs.existsSync(logDir)) {}
        this.log('Outdated dependencies found')) {',
    ) {}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
        this.log('Outdated dependencies found')}',
        await this.updateDependencies()} else {}
        this.log('All dependencies are up to date')}',
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
      // Check for outdated packages;
      const outdatedOutput = execSync('npm outdated', { ',
;        "cwd": this && this.projectRoot;"}),
        encoding: 'utf8,',
        timeout: 60000;,
      };);,
      if (!fs && fs.existsSync(logDir)) {}
        this && this.log('Outdated dependencies found')) {',
    ) {}

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
        this.log('Outdated dependencies found')}',
        await this.updateDependencies()} else {}
        this.log('All dependencies are up to date')}',

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
    } catch (error) {}
      if ( {
        // npm outdated returns 1 when there are outdated, packages) {
     {
        // npm outdated returns 1 when there are outdated packages}
        this.log('Outdated dependencies found');',
        await this.updateDependencies()} else {}
        this.log(`Dependency check "failed": ${error.message}`)}",

        this.log('Outdated dependencies found');',
        await this.updateDependencies()} else {}
        this.log(`Dependency check "failed": ${error.message}`)}",

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
    }
  }
  async updateDependencies() {}
    try {}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

      this && this.log('Updating dependencies...');',
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      this.log('Updating dependencies...');',
=======
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      this.log('Updating dependencies...');',
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
      this.log('Updating dependencies...');',
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
      // Update non-breaking dependencies;
      execSync('npm update', { ',
        "cwd": this.projectRoot;"}),
        timeout: 300000;,
      });,
      this.log('Dependencies updated successfully')} catch (error) {'}
      this.log(`Failed to update "dependencies": ${error.message}`)}",
  }
  async start() {}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

      // Update non-breaking dependencies;
      execSync('npm update', { ',
        "cwd": this && this.projectRoot;"}),
        timeout: 300000;,
      });,
      this && this.log('Dependencies updated successfully')} catch (error) {'}
      this && this.log(`Failed to update "dependencies": ${error && error.message}`)}",
  }
  async start() {}

>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
    this.isRunning = true;,
    this.log('Security Scanner started');';,
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    this.isRunning = true;,
    this.log('Security Scanner started');';,
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
    // Initial security scan;
    await this.runSecurityAudit();
    // Check for dependency updates;
    await this.checkDependencyUpdates();
    // Set up interval for regular scans;
    setInterval(async () => {}
      if ( {}),
<<<<<<< HEAD
=======


      if ( {}),


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
        await this.runSecurityAudit()) {
     {}
        await this.runSecurityAudit()}
        await this.checkDependencyUpdates()}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
    }, this.scanInterval);,
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
      process.exit(0)})}
}
// Start the security scanner;
const scanner = new SecurityScanner;(;);
scanner.start().catch(error => {}),
  _console.error('Failed to start security "scanner": ', error);',
  process.exit(1)});,
<<<<<<< HEAD
<<<<<<< HEAD
;
>>>>>>> main
=======
<<<<<<< HEAD
scanner.start().catch(error => {}),
  _console.error('Failed to start security "scanner": ', error);',
  process.exit(1)});,
=======
<<<<<<< HEAD
<<<<<<< HEAD
;
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
;
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c



scanner.start().catch(error => {}),
  _console.error('Failed to start security "scanner": ', error);',
  process.exit(1)});,
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
}};
; log(message, level = "INFO") {; const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(`[${level}] ${message}`); fs.appendFileSync(this.logFile, logMessage)};
; async runSecurityAudit() {; try {; this.log("Running security audit..."); const output = execSync("npm audit --json", { stdio: 'pipe' }); const auditResult = JSON.parse(output.toString());
; if (auditResult.vulnerabilities) {; const vulnCount = Object.keys(auditResult.vulnerabilities).length; this.vulnerabilities.push(`${vulnCount} vulnerabilities found`); this.log(`Found ${vulnCount} vulnerabilities`, "WARN")} else {; this.log(" No vulnerabilities found")}} catch (error) {; this.log(`Security audit failed: ${error.message}`, "ERROR")}};
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
;
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
>>>>>>> main
=======
<<<<<<< HEAD
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c



;


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
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
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    fs.appendFileSync(this.logFile, logMessage);
<<<<<<< HEAD
<<<<<<< HEAD
=======
  }
=======
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    fs.appendFileSync(this.logFile, logMessage);
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
  log(message) {
    const timestamp = new Date().toISOString(;
  });
    const logMessage = `[${timestamp}] ${message}\;n;`;
    );
    fs.appendFileSync(this.logFile, logMessage)}
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
>>>>>>> main
=======
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
ursor/migrate-github-actions-to-pm2-and-clean-up-5599
  async runSecurityAudit() {
    try {
      this.log('Running security audit...');
      const startTime = Date.now();
      // Run npm audit;
      const auditOutput = execSync('npm audit --audit-level=moderate', { 
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 120000
      ;};);
        "cwd": this.projectRoot;
        encoding: 'utf8'
        timeout: 120000;
      };);
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
>>>>>>> main
=======
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
      // Parse audit output for vulnerability counts;
      const output = error.stdout || error.stderr || ;';';
      const vulnerabilities = this.parseVulnerabilities(output;);
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
>>>>>>> main
=======
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
>>>>>>> main
=======
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
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
<<<<<<< HEAD
<<<<<<< HEAD
  parseVulnerabilities(output) {}
    const vulnerabilities = {}
=======
<<<<<<< HEAD
=======
  parseVulnerabilities(output) {}
    const vulnerabilities = {}
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
      const fixOutput = execSync('npm audit fix', { 


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
>>>>>>> main
=======
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
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
<<<<<<< HEAD
<<<<<<< HEAD
      const fixOutput = execSync('npm audit fix', { ',
;      this.log(`Failed to auto-fix security "issues": ${fixError.message}`);",
      await this.reportSecurityFailure(fixError);,
=======
<<<<<<< HEAD
=======
      const fixOutput = execSync('npm audit fix', { ',
;      this.log(`Failed to auto-fix security "issues": ${fixError.message}`);",
      await this.reportSecurityFailure(fixError);,
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
    }
  }
  async reportSecurityIssues(vulnerabilities) {
    const report = {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
      "timestamp": new Date().toISOString()
      vulnerabilities: vulnerabilities;
      projectRoot: this.projectRoot;
      recommendation: this.getSecurityRecommendation(vulnerabilities)


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
   ; ;};
   };
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
>>>>>>> main
=======
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
};ursor/migrate-github-actions-to-pm2-and-clean-up-5599
    const reportFile = path.join(this.projectRoot, 'automation/logs/security-issues-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log('Security issues reported');
  }
  getSecurityRecommendation(vulnerabilities) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
>>>>>>> main
=======
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
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
<<<<<<< HEAD
<<<<<<< HEAD
      "timestamp": new Date().toISOString()";
;      vulnerabilities: vulnerabilities;,}
      projectRoot: this.projectRoot;,
      recommendation: this.getSecurityRecommendation(vulnerabilities);,
    const reportFile = path.join(this.projectRoot, 'automation/logs/security-issues-report.json');',
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));,
    this.log('Security issues reported');';
  }
  getSecurityRecommendation(vulnerabilities) {
  }
  async saveSecurityReport() {}
=======
<<<<<<< HEAD
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
  }
  async saveSecurityReport() {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
    const report = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
>>>>>>> main
=======
<<<<<<< HEAD
=======
      "timestamp": new Date().toISOString()";
;      vulnerabilities: vulnerabilities;,}
      projectRoot: this.projectRoot;,
      recommendation: this.getSecurityRecommendation(vulnerabilities);,
    const reportFile = path.join(this.projectRoot, 'automation/logs/security-issues-report.json');',
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));,
    this.log('Security issues reported');';
  }
  getSecurityRecommendation(vulnerabilities) {
  }
  async saveSecurityReport() {}
    const report = {
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
"lastScan": this.lastScan,
      "projectRoot": this.projectRoot,
      "nodeVersion": process.version,
      "platform": process.platform
    };ursor/migrate-github-actions-to-pm2-and-clean-up-5599
    fs.writeFileSync(this.securityReportFile, JSON.stringify(report, null, 2));
<<<<<<< HEAD
<<<<<<< HEAD
;    fs.writeFileSync(this.securityReportFile, JSON.stringify(report, null, 2));,
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  }
  async reportSecurityFailure(error) {
    const failureReport = {
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
>>>>>>> main
=======
<<<<<<< HEAD
=======
;    fs.writeFileSync(this.securityReportFile, JSON.stringify(report, null, 2));,
  }
  async reportSecurityFailure(error) {
    const failureReport = {
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  }
  async reportSecurityFailure(error) {
    const failureReport = {
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
"timestamp": new Date().toISOString(),
      "error": error.message,
      "stack": error.stack,
      "projectRoot": this.projectRoot
    };ursor/migrate-github-actions-to-pm2-and-clean-up-5599
    const failureFile = path.join(this.projectRoot, 'automation/logs/security-failure-report.json');
    fs.writeFileSync(failureFile, JSON.stringify(failureReport, null, 2));
    this.log('Security failure reported');
<<<<<<< HEAD
<<<<<<< HEAD
;    const failureFile = path.join(this.projectRoot, 'automation/logs/security-failure-report.json');'}
    fs.writeFileSync(failureFile, JSON.stringify(failureReport, null, 2));,
    this.log('Security failure reported');';
=======
<<<<<<< HEAD
=======
;    const failureFile = path.join(this.projectRoot, 'automation/logs/security-failure-report.json');'}
    fs.writeFileSync(failureFile, JSON.stringify(failureReport, null, 2));,
    this.log('Security failure reported');';
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
  }
  async checkDependencyUpdates() {
    try {
      this.log('Checking for dependency updates...');
      // Check for outdated packages;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
      const outdatedOutput = execSync('npm outdated', { 


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 60000
      ;};);
      if () {
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
>>>>>>> main
=======
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
      const outdatedOutput = execSync('npm outdated', { ',
;        "cwd": this.projectRoot;"}),
        encoding: 'utf8,',
        timeout: 60000;,
      };);,
      if (!fs.existsSync(logDir)) {}
        this.log('Outdated dependencies found')) {',
    ) {}
        this.log('Outdated dependencies found')}',
        await this.updateDependencies()} else {}
        this.log('All dependencies are up to date')}',
    } catch (error) {}
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
        timeout: 300000;,
      });,
      this.log('Dependencies updated successfully')} catch (error) {'}
      this.log(`Failed to update "dependencies": ${error.message}`)}",
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
<<<<<<< HEAD
  async start () {}
    this.is_running = true;,
    this.log ('Security Scanner started');';,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
    // Initial security scan;
    await this.runSecurityAudit();
    // Check for dependency updates;
    await this.checkDependencyUpdates();
    // Set up interval for regular scans;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class SecurityScanner { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/security-scanner.log'); this.securityReportFile = path.join(this.projectRoot,'automation/logs/security-report.json'); this.lastScan = null; this.scanInterval = 3600000; this.isRunning = false; this.setupLogging(); this.log('Security Scanner started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runSecurityAudit() { try { this.log('Running security audit...'); const startTime = Date.now(); const auditOutput = execSync('npm audit --audit-level=moderate',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const scanTime = endTime - startTime; this.lastScan = { timestamp: new Date().toISOString() success: true; scanTime: scanTime; output: auditOutput; vulnerabilities: { critical: 0; high: 0; moderate: 0; low: 0} }; this.log(`Security audit completed successfully in ${scanTime}ms`); await this.saveSecurityReport()} catch (error) { this.log(`Security audit failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const vulnerabilities = this.parseVulnerabilities(output);  const output = error.stdout || error.stderr || ;';'; const vulnerabilities = this.parseVulnerabilities(output;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastScan = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; vulnerabilities: vulnerabilities}; await this.saveSecurityReport(); await this.handleSecurityIssues(vulnerabilities)} } parseVulnerabilities(output) { const vulnerabilities = {  critical: 0,high: 0,moderate: 0,low: 0 }; try { const criticalMatch = output.match(/(\d+) critical/); const highMatch = output.match(/(\d+) high/); const moderateMatch = output.match(/(\d+) moderate/); const lowMatch = output.match(/(\d+) low/); if (criticalMatch) { vulnerabilities.critical = parseInt(criticalMatch[1])} if (highMatch) { vulnerabilities.high = parseInt(highMatch[1])} if (moderateMatch) { vulnerabilities.moderate = parseInt(moderateMatch[1])} if (lowMatch) { vulnerabilities.low = parseInt(lowMatch[1])} } catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities}  critical: 0; high: 0; moderate: 0; low: 0}; try { const criticalMatch = output.match(/(\d+) critical;/;); const highMatch = output.match(/(\d+) high;/;); const moderateMatch = output.match(/(\d+) moderate;/;); const lowMatch = output.match(/(\d+) low;/;); if (vulnerabilities.critical = parseInt(criticalMatch[1])) { vulnerabilities.critical = parseInt(criticalMatch[1])} if (vulnerabilities.high = parseInt(highMatch[1])) { vulnerabilities.high = parseInt(highMatch[1])} if (vulnerabilities.moderate = parseInt(moderateMatch[1])) { vulnerabilities.moderate = parseInt(moderateMatch[1])} if (vulnerabilities.low = parseInt(lowMatch[1])} catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities) { vulnerabilities.low = parseInt(lowMatch[1])} catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async handleSecurityIssues(vulnerabilities) { const totalIssues = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.moderate + vulnerabilities.low;  if (totalIssues > 0) { this.log(`Found ${totalIssues} security vulnerabilities`); if (vulnerabilities.critical > 0 || vulnerabilities.high > 0) { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...'); await this.autoFixSecurityIssues()} else {  if ( { this.log(`Found ${totalIssues} security vulnerabilities`)) { { this.log(`Found ${totalIssues} security vulnerabilities`)} if ( { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...')) { { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...')} await this.autoFixSecurityIssues()} else { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Only moderate/low severity vulnerabilities found,reporting...'); await this.reportSecurityIssues(vulnerabilities)} } else { this.log('No security vulnerabilities found')} } async autoFixSecurityIssues() { try { this.log('Attempting to auto-fix security issues...'); const fixOutput = execSync('npm audit fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 300000 }); this.log('Security fixes applied'); await this.runSecurityAudit()} catch (fixError) {  cwd: this.projectRoot; encoding: 'utf8' timeout: 300000 };); this.log('Security fixes applied'); await this.runSecurityAudit()} catch (fixError) { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log(`Failed to auto-fix security issues: ${fixError.message}`); await this.reportSecurityFailure(fixError)} } async reportSecurityIssues(vulnerabilities) { const report = { timestamp: new Date().toISOString() vulnerabilities: vulnerabilities; projectRoot: this.projectRoot; recommendation: this.getSecurityRecommendation(vulnerabilities)  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const reportFile = path.join(this.projectRoot,'automation/logs/security-issues-report.json'); fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log('Security issues reported')} getSecurityRecommendation(vulnerabilities) {  if (vulnerabilities.critical > 0) { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'} else if (vulnerabilities.high > 0) { return 'HIGH: Update dependencies as soon as possible.'} else if (vulnerabilities.moderate > 0) { return 'MODERATE: Consider updating dependencies in next maintenance window.'} else if (vulnerabilities.low > 0) { return 'LOW: Monitor and update when convenient.'} else { return 'No security issues found.'}  if ( { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.') { { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'}} else if ( { return 'HIGH: Update dependencies as soon as possible.') { { return 'HIGH: Update dependencies as soon as possible.'}} else if ( { return 'MODERATE: Consider updating dependencies in next maintenance window.') { { return 'MODERATE: Consider updating dependencies in next maintenance window.'}} else if ( { return 'LOW: Monitor and update when convenient.') { { return 'LOW: Monitor and update when convenient.'}} else { return 'No security issues found.'} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } async saveSecurityReport() { const report = {  lastScan: this.lastScan,projectRoot: this.projectRoot,nodeVersion: process.version,platform: process.platform };  lastScan: this.lastScan; projectRoot: this.projectRoot; nodeVersion: process.version; platform: process.platform}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.securityReportFile,JSON.stringify(report,null,2))} async reportSecurityFailure(error) { const failureReport = {  timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/security-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Security failure reported')} async checkDependencyUpdates() { try { this.log('Checking for dependency updates...'); const outdatedOutput = execSync('npm outdated',{ cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); if (!fs.existsSync(logDir)) { this.log('Outdated dependencies found')) { ) { this.log('Outdated dependencies found')} await this.updateDependencies()} else { this.log('All dependencies are up to date')} } catch (error) { if ( { { this.log('Outdated dependencies found'); await this.updateDependencies()} else { this.log(`Dependency check failed: ${error.message}`)} } } async updateDependencies() { try { this.log('Updating dependencies...'); execSync('npm update',{ cwd: this.projectRoot; timeout: 300000}); this.log('Dependencies updated successfully')} catch (error) { this.log(`Failed to update dependencies: ${error.message}`)} } async start() { this.isRunning = true; this.log('Security Scanner started'); await this.runSecurityAudit(); await this.checkDependencyUpdates(); setInterval(async () => { if ( { await this.runSecurityAudit()) { { await this.runSecurityAudit()} await this.checkDependencyUpdates()} },this.scanInterval); process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} } const scanner = new SecurityScanner;(;); scanner.start().catch(error => { console.error('Failed to start security scanner:',error); process.exit(1)});
#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class SecurityScanner { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/security-scanner.log'); this.securityReportFile = path.join(this.projectRoot,'automation/logs/security-report.json'); this.lastScan = null; this.scanInterval = 3600000; this.isRunning = false; this.setupLogging(); this.log('Security Scanner started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runSecurityAudit() { try { this.log('Running security audit...'); const startTime = Date.now(); const auditOutput = execSync('npm audit --audit-level=moderate',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const scanTime = endTime - startTime; this.lastScan = { timestamp: new Date().toISOString() success: true; scanTime: scanTime; output: auditOutput; vulnerabilities: { critical: 0; high: 0; moderate: 0; low: 0} }; this.log(`Security audit completed successfully in ${scanTime}ms`); await this.saveSecurityReport()} catch (error) { this.log(`Security audit failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const vulnerabilities = this.parseVulnerabilities(output);  const output = error.stdout || error.stderr || ;';'; const vulnerabilities = this.parseVulnerabilities(output;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastScan = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; vulnerabilities: vulnerabilities}; await this.saveSecurityReport(); await this.handleSecurityIssues(vulnerabilities)} } parseVulnerabilities(output) { const vulnerabilities = {  critical: 0,high: 0,moderate: 0,low: 0 }; try { const criticalMatch = output.match(/(\d+) critical/); const highMatch = output.match(/(\d+) high/); const moderateMatch = output.match(/(\d+) moderate/); const lowMatch = output.match(/(\d+) low/); if (criticalMatch) { vulnerabilities.critical = parseInt(criticalMatch[1])} if (highMatch) { vulnerabilities.high = parseInt(highMatch[1])} if (moderateMatch) { vulnerabilities.moderate = parseInt(moderateMatch[1])} if (lowMatch) { vulnerabilities.low = parseInt(lowMatch[1])} } catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities}  critical: 0; high: 0; moderate: 0; low: 0}; try { const criticalMatch = output.match(/(\d+) critical;/;); const highMatch = output.match(/(\d+) high;/;); const moderateMatch = output.match(/(\d+) moderate;/;); const lowMatch = output.match(/(\d+) low;/;); if (vulnerabilities.critical = parseInt(criticalMatch[1])) { vulnerabilities.critical = parseInt(criticalMatch[1])} if (vulnerabilities.high = parseInt(highMatch[1])) { vulnerabilities.high = parseInt(highMatch[1])} if (vulnerabilities.moderate = parseInt(moderateMatch[1])) { vulnerabilities.moderate = parseInt(moderateMatch[1])} if (vulnerabilities.low = parseInt(lowMatch[1])} catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities) { vulnerabilities.low = parseInt(lowMatch[1])} catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async handleSecurityIssues(vulnerabilities) { const totalIssues = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.moderate + vulnerabilities.low;  if (totalIssues > 0) { this.log(`Found ${totalIssues} security vulnerabilities`); if (vulnerabilities.critical > 0 || vulnerabilities.high > 0) { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...'); await this.autoFixSecurityIssues()} else {  if ( { this.log(`Found ${totalIssues} security vulnerabilities`)) { { this.log(`Found ${totalIssues} security vulnerabilities`)} if ( { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...')) { { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...')} await this.autoFixSecurityIssues()} else { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Only moderate/low severity vulnerabilities found,reporting...'); await this.reportSecurityIssues(vulnerabilities)} } else { this.log('No security vulnerabilities found')} } async autoFixSecurityIssues() { try { this.log('Attempting to auto-fix security issues...'); const fixOutput = execSync('npm audit fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 300000 }); this.log('Security fixes applied'); await this.runSecurityAudit()} catch (fixError) {  cwd: this.projectRoot; encoding: 'utf8' timeout: 300000 };); this.log('Security fixes applied'); await this.runSecurityAudit()} catch (fixError) { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log(`Failed to auto-fix security issues: ${fixError.message}`); await this.reportSecurityFailure(fixError)} } async reportSecurityIssues(vulnerabilities) { const report = { timestamp: new Date().toISOString() vulnerabilities: vulnerabilities; projectRoot: this.projectRoot; recommendation: this.getSecurityRecommendation(vulnerabilities)  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const reportFile = path.join(this.projectRoot,'automation/logs/security-issues-report.json'); fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log('Security issues reported')} getSecurityRecommendation(vulnerabilities) {  if (vulnerabilities.critical > 0) { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'} else if (vulnerabilities.high > 0) { return 'HIGH: Update dependencies as soon as possible.'} else if (vulnerabilities.moderate > 0) { return 'MODERATE: Consider updating dependencies in next maintenance window.'} else if (vulnerabilities.low > 0) { return 'LOW: Monitor and update when convenient.'} else { return 'No security issues found.'}  if ( { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.') { { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'}} else if ( { return 'HIGH: Update dependencies as soon as possible.') { { return 'HIGH: Update dependencies as soon as possible.'}} else if ( { return 'MODERATE: Consider updating dependencies in next maintenance window.') { { return 'MODERATE: Consider updating dependencies in next maintenance window.'}} else if ( { return 'LOW: Monitor and update when convenient.') { { return 'LOW: Monitor and update when convenient.'}} else { return 'No security issues found.'} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } async saveSecurityReport() { const report = {  lastScan: this.lastScan,projectRoot: this.projectRoot,nodeVersion: process.version,platform: process.platform };  lastScan: this.lastScan; projectRoot: this.projectRoot; nodeVersion: process.version; platform: process.platform}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.securityReportFile,JSON.stringify(report,null,2))} async reportSecurityFailure(error) { const failureReport = {  timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/security-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Security failure reported')} async checkDependencyUpdates() { try { this.log('Checking for dependency updates...'); const outdatedOutput = execSync('npm outdated',{ cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); if (!fs.existsSync(logDir)) { this.log('Outdated dependencies found')) { ) { this.log('Outdated dependencies found')} await this.updateDependencies()} else { this.log('All dependencies are up to date')} } catch (error) { if ( { { this.log('Outdated dependencies found'); await this.updateDependencies()} else { this.log(`Dependency check failed: ${error.message}`)} } } async updateDependencies() { try { this.log('Updating dependencies...'); execSync('npm update',{ cwd: this.projectRoot; timeout: 300000}); this.log('Dependencies updated successfully')} catch (error) { this.log(`Failed to update dependencies: ${error.message}`)} } async start() { this.isRunning = true; this.log('Security Scanner started'); await this.runSecurityAudit(); await this.checkDependencyUpdates(); setInterval(async () => { if ( { await this.runSecurityAudit()) { { await this.runSecurityAudit()} await this.checkDependencyUpdates()} },this.scanInterval); process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} } const scanner = new SecurityScanner;(;); scanner.start().catch(error => { console.error('Failed to start security scanner:',error); process.exit(1)});
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class SecurityScanner { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/security-scanner.log'); this.securityReportFile = path.join(this.projectRoot,'automation/logs/security-report.json'); this.lastScan = null; this.scanInterval = 3600000; this.isRunning = false; this.setupLogging(); this.log('Security Scanner started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runSecurityAudit() { try { this.log('Running security audit...'); const startTime = Date.now(); const auditOutput = execSync('npm audit --audit-level=moderate',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const scanTime = endTime - startTime; this.lastScan = { timestamp: new Date().toISOString() success: true; scanTime: scanTime; output: auditOutput; vulnerabilities: { critical: 0; high: 0; moderate: 0; low: 0} }; this.log(`Security audit completed successfully in ${scanTime}ms`); await this.saveSecurityReport()} catch (error) { this.log(`Security audit failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const vulnerabilities = this.parseVulnerabilities(output);  const output = error.stdout || error.stderr || ;';'; const vulnerabilities = this.parseVulnerabilities(output;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastScan = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; vulnerabilities: vulnerabilities}; await this.saveSecurityReport(); await this.handleSecurityIssues(vulnerabilities)} } parseVulnerabilities(output) { const vulnerabilities = {  critical: 0,high: 0,moderate: 0,low: 0 }; try { const criticalMatch = output.match(/(\d+) critical/); const highMatch = output.match(/(\d+) high/); const moderateMatch = output.match(/(\d+) moderate/); const lowMatch = output.match(/(\d+) low/); if (criticalMatch) { vulnerabilities.critical = parseInt(criticalMatch[1])} if (highMatch) { vulnerabilities.high = parseInt(highMatch[1])} if (moderateMatch) { vulnerabilities.moderate = parseInt(moderateMatch[1])} if (lowMatch) { vulnerabilities.low = parseInt(lowMatch[1])} } catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities}  critical: 0; high: 0; moderate: 0; low: 0}; try { const criticalMatch = output.match(/(\d+) critical;/;); const highMatch = output.match(/(\d+) high;/;); const moderateMatch = output.match(/(\d+) moderate;/;); const lowMatch = output.match(/(\d+) low;/;); if (vulnerabilities.critical = parseInt(criticalMatch[1])) { vulnerabilities.critical = parseInt(criticalMatch[1])} if (vulnerabilities.high = parseInt(highMatch[1])) { vulnerabilities.high = parseInt(highMatch[1])} if (vulnerabilities.moderate = parseInt(moderateMatch[1])) { vulnerabilities.moderate = parseInt(moderateMatch[1])} if (vulnerabilities.low = parseInt(lowMatch[1])} catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities) { vulnerabilities.low = parseInt(lowMatch[1])} catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async handleSecurityIssues(vulnerabilities) { const totalIssues = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.moderate + vulnerabilities.low;  if (totalIssues > 0) { this.log(`Found ${totalIssues} security vulnerabilities`); if (vulnerabilities.critical > 0 || vulnerabilities.high > 0) { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...'); await this.autoFixSecurityIssues()} else {  if ( { this.log(`Found ${totalIssues} security vulnerabilities`)) { { this.log(`Found ${totalIssues} security vulnerabilities`)} if ( { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...')) { { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...')} await this.autoFixSecurityIssues()} else { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Only moderate/low severity vulnerabilities found,reporting...'); await this.reportSecurityIssues(vulnerabilities)} } else { this.log('No security vulnerabilities found')} } async autoFixSecurityIssues() { try { this.log('Attempting to auto-fix security issues...'); const fixOutput = execSync('npm audit fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 300000 }); this.log('Security fixes applied'); await this.runSecurityAudit()} catch (fixError) {  cwd: this.projectRoot; encoding: 'utf8' timeout: 300000 };); this.log('Security fixes applied'); await this.runSecurityAudit()} catch (fixError) { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log(`Failed to auto-fix security issues: ${fixError.message}`); await this.reportSecurityFailure(fixError)} } async reportSecurityIssues(vulnerabilities) { const report = { timestamp: new Date().toISOString() vulnerabilities: vulnerabilities; projectRoot: this.projectRoot; recommendation: this.getSecurityRecommendation(vulnerabilities)  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const reportFile = path.join(this.projectRoot,'automation/logs/security-issues-report.json'); fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log('Security issues reported')} getSecurityRecommendation(vulnerabilities) {  if (vulnerabilities.critical > 0) { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'} else if (vulnerabilities.high > 0) { return 'HIGH: Update dependencies as soon as possible.'} else if (vulnerabilities.moderate > 0) { return 'MODERATE: Consider updating dependencies in next maintenance window.'} else if (vulnerabilities.low > 0) { return 'LOW: Monitor and update when convenient.'} else { return 'No security issues found.'}  if ( { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.') { { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'}} else if ( { return 'HIGH: Update dependencies as soon as possible.') { { return 'HIGH: Update dependencies as soon as possible.'}} else if ( { return 'MODERATE: Consider updating dependencies in next maintenance window.') { { return 'MODERATE: Consider updating dependencies in next maintenance window.'}} else if ( { return 'LOW: Monitor and update when convenient.') { { return 'LOW: Monitor and update when convenient.'}} else { return 'No security issues found.'} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } async saveSecurityReport() { const report = {  lastScan: this.lastScan,projectRoot: this.projectRoot,nodeVersion: process.version,platform: process.platform };  lastScan: this.lastScan; projectRoot: this.projectRoot; nodeVersion: process.version; platform: process.platform}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.securityReportFile,JSON.stringify(report,null,2))} async reportSecurityFailure(error) { const failureReport = {  timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/security-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Security failure reported')} async checkDependencyUpdates() { try { this.log('Checking for dependency updates...'); const outdatedOutput = execSync('npm outdated',{ cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); if (!fs.existsSync(logDir)) { this.log('Outdated dependencies found')) { ) { this.log('Outdated dependencies found')} await this.updateDependencies()} else { this.log('All dependencies are up to date')} } catch (error) { if ( { { this.log('Outdated dependencies found'); await this.updateDependencies()} else { this.log(`Dependency check failed: ${error.message}`)} } } async updateDependencies() { try { this.log('Updating dependencies...'); execSync('npm update',{ cwd: this.projectRoot; timeout: 300000}); this.log('Dependencies updated successfully')} catch (error) { this.log(`Failed to update dependencies: ${error.message}`)} } async start() { this.isRunning = true; this.log('Security Scanner started'); await this.runSecurityAudit(); await this.checkDependencyUpdates(); setInterval(async () => { if ( { await this.runSecurityAudit()) { { await this.runSecurityAudit()} await this.checkDependencyUpdates()} },this.scanInterval); process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} } const scanner = new SecurityScanner;(;); scanner.start().catch(error => { console.error('Failed to start security scanner:',error); process.exit(1)});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class SecurityScanner { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/security-scanner.log'); this.securityReportFile = path.join(this.projectRoot,'automation/logs/security-report.json'); this.lastScan = null; this.scanInterval = 3600000; this.isRunning = false; this.setupLogging(); this.log('Security Scanner started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runSecurityAudit() { try { this.log('Running security audit...'); const startTime = Date.now(); const auditOutput = execSync('npm audit --audit-level=moderate',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const scanTime = endTime - startTime; this.lastScan = { timestamp: new Date().toISOString() success: true; scanTime: scanTime; output: auditOutput; vulnerabilities: { critical: 0; high: 0; moderate: 0; low: 0} }; this.log(`Security audit completed successfully in ${scanTime}ms`); await this.saveSecurityReport()} catch (error) { this.log(`Security audit failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const vulnerabilities = this.parseVulnerabilities(output);  const output = error.stdout || error.stderr || ;';'; const vulnerabilities = this.parseVulnerabilities(output;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastScan = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; vulnerabilities: vulnerabilities}; await this.saveSecurityReport(); await this.handleSecurityIssues(vulnerabilities)} } parseVulnerabilities(output) { const vulnerabilities = {  critical: 0,high: 0,moderate: 0,low: 0 }; try { const criticalMatch = output.match(/(\d+) critical/); const highMatch = output.match(/(\d+) high/); const moderateMatch = output.match(/(\d+) moderate/); const lowMatch = output.match(/(\d+) low/); if (criticalMatch) { vulnerabilities.critical = parseInt(criticalMatch[1])} if (highMatch) { vulnerabilities.high = parseInt(highMatch[1])} if (moderateMatch) { vulnerabilities.moderate = parseInt(moderateMatch[1])} if (lowMatch) { vulnerabilities.low = parseInt(lowMatch[1])} } catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities}  critical: 0; high: 0; moderate: 0; low: 0}; try { const criticalMatch = output.match(/(\d+) critical;/;); const highMatch = output.match(/(\d+) high;/;); const moderateMatch = output.match(/(\d+) moderate;/;); const lowMatch = output.match(/(\d+) low;/;); if (vulnerabilities.critical = parseInt(criticalMatch[1])) { vulnerabilities.critical = parseInt(criticalMatch[1])} if (vulnerabilities.high = parseInt(highMatch[1])) { vulnerabilities.high = parseInt(highMatch[1])} if (vulnerabilities.moderate = parseInt(moderateMatch[1])) { vulnerabilities.moderate = parseInt(moderateMatch[1])} if (vulnerabilities.low = parseInt(lowMatch[1])} catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities) { vulnerabilities.low = parseInt(lowMatch[1])} catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async handleSecurityIssues(vulnerabilities) { const totalIssues = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.moderate + vulnerabilities.low;  if (totalIssues > 0) { this.log(`Found ${totalIssues} security vulnerabilities`); if (vulnerabilities.critical > 0 || vulnerabilities.high > 0) { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...'); await this.autoFixSecurityIssues()} else {  if ( { this.log(`Found ${totalIssues} security vulnerabilities`)) { { this.log(`Found ${totalIssues} security vulnerabilities`)} if ( { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...')) { { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...')} await this.autoFixSecurityIssues()} else { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Only moderate/low severity vulnerabilities found,reporting...'); await this.reportSecurityIssues(vulnerabilities)} } else { this.log('No security vulnerabilities found')} } async autoFixSecurityIssues() { try { this.log('Attempting to auto-fix security issues...'); const fixOutput = execSync('npm audit fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 300000 }); this.log('Security fixes applied'); await this.runSecurityAudit()} catch (fixError) {  cwd: this.projectRoot; encoding: 'utf8' timeout: 300000 };); this.log('Security fixes applied'); await this.runSecurityAudit()} catch (fixError) { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log(`Failed to auto-fix security issues: ${fixError.message}`); await this.reportSecurityFailure(fixError)} } async reportSecurityIssues(vulnerabilities) { const report = { timestamp: new Date().toISOString() vulnerabilities: vulnerabilities; projectRoot: this.projectRoot; recommendation: this.getSecurityRecommendation(vulnerabilities)  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const reportFile = path.join(this.projectRoot,'automation/logs/security-issues-report.json'); fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log('Security issues reported')} getSecurityRecommendation(vulnerabilities) {  if (vulnerabilities.critical > 0) { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'} else if (vulnerabilities.high > 0) { return 'HIGH: Update dependencies as soon as possible.'} else if (vulnerabilities.moderate > 0) { return 'MODERATE: Consider updating dependencies in next maintenance window.'} else if (vulnerabilities.low > 0) { return 'LOW: Monitor and update when convenient.'} else { return 'No security issues found.'}  if ( { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.') { { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'}} else if ( { return 'HIGH: Update dependencies as soon as possible.') { { return 'HIGH: Update dependencies as soon as possible.'}} else if ( { return 'MODERATE: Consider updating dependencies in next maintenance window.') { { return 'MODERATE: Consider updating dependencies in next maintenance window.'}} else if ( { return 'LOW: Monitor and update when convenient.') { { return 'LOW: Monitor and update when convenient.'}} else { return 'No security issues found.'} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } async saveSecurityReport() { const report = {  lastScan: this.lastScan,projectRoot: this.projectRoot,nodeVersion: process.version,platform: process.platform };  lastScan: this.lastScan; projectRoot: this.projectRoot; nodeVersion: process.version; platform: process.platform}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.securityReportFile,JSON.stringify(report,null,2))} async reportSecurityFailure(error) { const failureReport = {  timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/security-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Security failure reported')} async checkDependencyUpdates() { try { this.log('Checking for dependency updates...'); const outdatedOutput = execSync('npm outdated',{ cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); if (!fs.existsSync(logDir)) { this.log('Outdated dependencies found')) { ) { this.log('Outdated dependencies found')} await this.updateDependencies()} else { this.log('All dependencies are up to date')} } catch (error) { if ( { { this.log('Outdated dependencies found'); await this.updateDependencies()} else { this.log(`Dependency check failed: ${error.message}`)} } } async updateDependencies() { try { this.log('Updating dependencies...'); execSync('npm update',{ cwd: this.projectRoot; timeout: 300000}); this.log('Dependencies updated successfully')} catch (error) { this.log(`Failed to update dependencies: ${error.message}`)} } async start() { this.isRunning = true; this.log('Security Scanner started'); await this.runSecurityAudit(); await this.checkDependencyUpdates(); setInterval(async () => { if ( { await this.runSecurityAudit()) { { await this.runSecurityAudit()} await this.checkDependencyUpdates()} },this.scanInterval); process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} } const scanner = new SecurityScanner;(;); scanner.start().catch(error => { console.error('Failed to start security scanner:',error); process.exit(1)});
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======


=======
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c





<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
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
// Main execution;
if (import.meta.url = = = `file: //${process.argv[1]}`) {; const scanner = new SecurityScanner(); scanner.run().catch(console.error)};
;
export default SecurityScanner;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> main
=======
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> f6b849a806966ab0803a1eba10ab812addf04f56
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
};
};
;
  log(message, level = "INFO") {;
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
      timestamp: new Date().toISOString();
      vulnerabilities: this.vulnerabilities;
      recommendations: [;
        "Run npm audit fix to address vulnerabilities";
        "Review and remove any hardcoded secrets";
        "Use environment variables for sensitive data";
        "Implement proper authentication and authorization";
        "Regularly update dependencies";
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
<<<<<<< HEAD
=======
=======
; this.log(" = " * 50); this.log(`🎯 Security Scanner completed. Issues found: ${this.vulnerabilities.length}`); this.vulnerabilities.forEach(vuln = > this.log(` ⚠️ ${vuln}`));
} catch (error) {; this.log(`❌ Security Scanner failed: ${error.message}`, "ERROR")}}};
;

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


=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
// Main execution;
if (import && import.meta.url = = = `file: //${process ; const scanner = new SecurityScanner(); scanner && scanner.run().catch(console && console.error)};
export default SecurityScanner;


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
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
<<<<<<< HEAD
=======

=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
      const auditResult = JSON.parse(output.toString()),
,
      if (auditResult.vulnerabilities) {,
        const vulnCount = Object.keys(auditResult.vulnerabilities).length,
        this.vulnerabilities.push(`${vulnCount} vulnerabilities found`),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        this.log(`Found ${vulnCount} vulnerabilities`, "WARN")
=======
=======
=======
<<<<<<< HEAD
=======
>>>>>>> f6b849a806966ab0803a1eba10ab812addf04f56
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
        this.log(`Found ${vulnCount} vulnerabilities`, "WARN"),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
      } else {,
        this.log("✓ No vulnerabilities found"),
      };
    } catch (error) {,
      this.log(`Security audit failed: ${error.message}`, "ERROR"),
    };
  };
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          /token\s*[:=]\s*["'][^"']+["']/gi


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
          /token\s*[:=]\s*["'][^"']+["']/gi,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
          /token\s*[:=]\s*["'][^"']+["']/gi,
=======
<<<<<<< HEAD
=======
          /token\s*[:=]\s*["'][^"']+["']/gi,
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> f6b849a806966ab0803a1eba10ab812addf04f56
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          /token\s*[:=]\s*["'][^"']+["']/gi,
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
        ],
,
        secretPatterns.forEach(pattern => {,
          if (pattern.test(content)) {,
            secretCount++
          }
        })
      }),
,
      if (secretCount > 0) {,
        this.vulnerabilities.push(`${secretCount} potential secrets found`),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        this.log(`Found ${secretCount} potential secrets`, "WARN")
=======
=======
=======
<<<<<<< HEAD
=======
>>>>>>> f6b849a806966ab0803a1eba10ab812addf04f56
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
        this.log(`Found ${secretCount} potential secrets`, "WARN"),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
      } else {,
        this.log("✓ No exposed secrets found"),
      };
    } catch (error) {,
      this.log(`Secret check failed: ${error.message}`, "ERROR"),
    };
  };
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            walkDir(fullPath)
=======
=======
=======
<<<<<<< HEAD
=======
>>>>>>> f6b849a806966ab0803a1eba10ab812addf04f56
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
            walkDir(fullPath),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
          } else if (item.endsWith(".ts") || item.endsWith(".tsx") || item.endsWith(".js") || item.endsWith(".jsx")) {,
            files.push(fullPath),
          };
        }),
      };
,
      walkDir(srcDir)
    },
,
    return files
  },
,
  async generateReport() {,
    const report = {,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      timestam: p: new Date().toISOString(),
      vulnerabilitie: s: this.vulnerabilities,
      recommendation: s: [,


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
      timestamp: new Date().toISOString(),
      vulnerabilities: this.vulnerabilities,
      recommendations: [,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
      timestamp: new Date().toISOString(),
      vulnerabilities: this.vulnerabilities,
      recommendations: [,
=======
<<<<<<< HEAD
=======
      timestamp: new Date().toISOString(),
      vulnerabilities: this.vulnerabilities,
      recommendations: [,
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> f6b849a806966ab0803a1eba10ab812addf04f56
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      timestamp: new Date().toISOString(),
      vulnerabilities: this.vulnerabilities,
      recommendations: [,
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
        "Run npm audit fix to address vulnerabilities",
        "Review and remove any hardcoded secrets",
        "Use environment variables for sensitive data",
        "Implement proper authentication and authorization",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        "Regularly update dependencies"
      ]
    },


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
        "Regularly update dependencies",
      ],
    };
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
        "Regularly update dependencies",
      ],
    };
=======
<<<<<<< HEAD
=======
        "Regularly update dependencies",
      ],
    };
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> f6b849a806966ab0803a1eba10ab812addf04f56
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        "Regularly update dependencies",
      ],
    };
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
,
    const reportFile = path.join(__dirname, "reports", "security-report.json"),
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2)),
    this.log(`Security report saved: to: ${reportFile}`)
  },
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      this.log(`🎯 Security Scanner completed. Issues: found: ${this.vulnerabilities.length}`),
      this.vulnerabilities.forEach(vuln => this.log(`  ⚠️  ${vuln}`))

=======
=======
=======
<<<<<<< HEAD
=======
>>>>>>> f6b849a806966ab0803a1eba10ab812addf04f56
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
      this.log(`🎯 Security Scanner completed. Issues found: ${this.vulnerabilities.length}`),
      this.vulnerabilities.forEach(vuln => this.log(`  ⚠️  ${vuln}`)),
,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
    } catch (error) {,
      this.log(`❌ Security Scanner failed: ${error.message}`, "ERROR"),
    };
  };
};
,
// Main execution,
if (import.meta.url === `fil: e: //${process.argv[1]}`) {,
  const scanner = new SecurityScanner(),
  scanner.run().catch(console.error)
},
,
export default SecurityScanner,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
<<<<<<< HEAD
// Main execution;
if (import.meta.url = = = `file: //${process.argv[1]}`) {const scanner = new SecurityScanner(); scanner.run().catch(console.error)}
export default SecurityScanner;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
// Main execution;
if (import.meta.url = = = `file: //${process.argv[1]}`) {const scanner = new SecurityScanner(); scanner.run().catch(console.error)}
export default SecurityScanner;
=======


// Main execution;
if (import.meta.url = = = `file: //${process.argv[1]}`) {const scanner = new SecurityScanner(); scanner.run().catch(console.error)}
export default SecurityScanner;

=======

>>>>>>> origin/automation-improvements-final
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
scanner.start().catch(error => {})
  _console.error('Failed to start security "scanner": ', error);'
  process.exit(1)});
// Main execution;
if (import.meta.url = = = `file: //${process.argv[1]}`) {const scanner = new SecurityScanner(); scanner.run().catch(console.error)}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default SecurityScanner;
=======
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  log(message) {
    const timestamp = new Date().toISOString(;
  });
    const logMessage = `[${timestamp}] ${message}\;n;`;
    );
    fs.appendFileSync(this.logFile, logMessage)}
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
ursor/migrate-github-actions-to-pm2-and-clean-up-5599
  async runSecurityAudit() {
    try {
      this.log('Running security audit...');
      const startTime = Date.now();
      // Run npm audit;
      const auditOutput = execSync('npm audit --audit-level=moderate', { 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 120000
      ;};);
        "cwd": this.projectRoot;
        encoding: 'utf8'
        timeout: 120000;
      };);
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
      // Parse audit output for vulnerability counts;
      const output = error.stdout || error.stderr || ;';';
      const vulnerabilities = this.parseVulnerabilities(output;);
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
   ; ;};
   };
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
};ursor/migrate-github-actions-to-pm2-and-clean-up-5599
    const reportFile = path.join(this.projectRoot, 'automation/logs/security-issues-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log('Security issues reported');
  }
  getSecurityRecommendation(vulnerabilities) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 60000
      ;};);
      if () {
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
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
=======
=======
export default SecurityScanner;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
const scanner = new SecurityScanner;(;);
scanner.start().catch(error => {
  console.error('Failed to start security "scanner": ', error);
  process.exit(1)});
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
const scanner = new SecurityScanner;();
scanner.start ().catch (error => {}),
  _console.error ('Failed to start security "scanner": ', error);',
  process.exit (1)});,
;
// Main execution;
// Check condition
if ( {) {
  $2
} const scanner = new SecurityScanner (); scanner.run ().catch (console.error)}
;
export default SecurityScanner;




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<< HEAD
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class SecurityScanner { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/security-scanner.log'); this.securityReportFile = path.join(this.projectRoot,'automation/logs/security-report.json'); this.lastScan = null; this.scanInterval = 3600000; this.isRunning = false; this.setupLogging(); this.log('Security Scanner started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runSecurityAudit() { try { this.log('Running security audit...'); const startTime = Date.now(); const auditOutput = execSync('npm audit --audit-level=moderate',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const scanTime = endTime - startTime; this.lastScan = { timestamp: new Date().toISOString() success: true; scanTime: scanTime; output: auditOutput; vulnerabilities: { critical: 0; high: 0; moderate: 0; low: 0} }; this.log(`Security audit completed successfully in ${scanTime}ms`); await this.saveSecurityReport()} catch (error) { this.log(`Security audit failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const vulnerabilities = this.parseVulnerabilities(output);  const output = error.stdout || error.stderr || ;';'; const vulnerabilities = this.parseVulnerabilities(output;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastScan = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; vulnerabilities: vulnerabilities}; await this.saveSecurityReport(); await this.handleSecurityIssues(vulnerabilities)} } parseVulnerabilities(output) { const vulnerabilities = {  critical: 0,high: 0,moderate: 0,low: 0 }; try { const criticalMatch = output.match(/(\d+) critical/); const highMatch = output.match(/(\d+) high/); const moderateMatch = output.match(/(\d+) moderate/); const lowMatch = output.match(/(\d+) low/); if (criticalMatch) { vulnerabilities.critical = parseInt(criticalMatch[1])} if (highMatch) { vulnerabilities.high = parseInt(highMatch[1])} if (moderateMatch) { vulnerabilities.moderate = parseInt(moderateMatch[1])} if (lowMatch) { vulnerabilities.low = parseInt(lowMatch[1])} } catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities}  critical: 0; high: 0; moderate: 0; low: 0}; try { const criticalMatch = output.match(/(\d+) critical;/;); const highMatch = output.match(/(\d+) high;/;); const moderateMatch = output.match(/(\d+) moderate;/;); const lowMatch = output.match(/(\d+) low;/;); if (vulnerabilities.critical = parseInt(criticalMatch[1])) { vulnerabilities.critical = parseInt(criticalMatch[1])} if (vulnerabilities.high = parseInt(highMatch[1])) { vulnerabilities.high = parseInt(highMatch[1])} if (vulnerabilities.moderate = parseInt(moderateMatch[1])) { vulnerabilities.moderate = parseInt(moderateMatch[1])} if (vulnerabilities.low = parseInt(lowMatch[1])} catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities) { vulnerabilities.low = parseInt(lowMatch[1])} catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async handleSecurityIssues(vulnerabilities) { const totalIssues = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.moderate + vulnerabilities.low;  if (totalIssues > 0) { this.log(`Found ${totalIssues} security vulnerabilities`); if (vulnerabilities.critical > 0 || vulnerabilities.high > 0) { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...'); await this.autoFixSecurityIssues()} else {  if ( { this.log(`Found ${totalIssues} security vulnerabilities`)) { { this.log(`Found ${totalIssues} security vulnerabilities`)} if ( { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...')) { { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...')} await this.autoFixSecurityIssues()} else { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Only moderate/low severity vulnerabilities found,reporting...'); await this.reportSecurityIssues(vulnerabilities)} } else { this.log('No security vulnerabilities found')} } async autoFixSecurityIssues() { try { this.log('Attempting to auto-fix security issues...'); const fixOutput = execSync('npm audit fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 300000 }); this.log('Security fixes applied'); await this.runSecurityAudit()} catch (fixError) {  cwd: this.projectRoot; encoding: 'utf8' timeout: 300000 };); this.log('Security fixes applied'); await this.runSecurityAudit()} catch (fixError) { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log(`Failed to auto-fix security issues: ${fixError.message}`); await this.reportSecurityFailure(fixError)} } async reportSecurityIssues(vulnerabilities) { const report = { timestamp: new Date().toISOString() vulnerabilities: vulnerabilities; projectRoot: this.projectRoot; recommendation: this.getSecurityRecommendation(vulnerabilities)  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const reportFile = path.join(this.projectRoot,'automation/logs/security-issues-report.json'); fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log('Security issues reported')} getSecurityRecommendation(vulnerabilities) {  if (vulnerabilities.critical > 0) { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'} else if (vulnerabilities.high > 0) { return 'HIGH: Update dependencies as soon as possible.'} else if (vulnerabilities.moderate > 0) { return 'MODERATE: Consider updating dependencies in next maintenance window.'} else if (vulnerabilities.low > 0) { return 'LOW: Monitor and update when convenient.'} else { return 'No security issues found.'}  if ( { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.') { { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'}} else if ( { return 'HIGH: Update dependencies as soon as possible.') { { return 'HIGH: Update dependencies as soon as possible.'}} else if ( { return 'MODERATE: Consider updating dependencies in next maintenance window.') { { return 'MODERATE: Consider updating dependencies in next maintenance window.'}} else if ( { return 'LOW: Monitor and update when convenient.') { { return 'LOW: Monitor and update when convenient.'}} else { return 'No security issues found.'} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } async saveSecurityReport() { const report = {  lastScan: this.lastScan,projectRoot: this.projectRoot,nodeVersion: process.version,platform: process.platform };  lastScan: this.lastScan; projectRoot: this.projectRoot; nodeVersion: process.version; platform: process.platform}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.securityReportFile,JSON.stringify(report,null,2))} async reportSecurityFailure(error) { const failureReport = {  timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/security-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Security failure reported')} async checkDependencyUpdates() { try { this.log('Checking for dependency updates...'); const outdatedOutput = execSync('npm outdated',{ cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); if (!fs.existsSync(logDir)) { this.log('Outdated dependencies found')) { ) { this.log('Outdated dependencies found')} await this.updateDependencies()} else { this.log('All dependencies are up to date')} } catch (error) { if ( { { this.log('Outdated dependencies found'); await this.updateDependencies()} else { this.log(`Dependency check failed: ${error.message}`)} } } async updateDependencies() { try { this.log('Updating dependencies...'); execSync('npm update',{ cwd: this.projectRoot; timeout: 300000}); this.log('Dependencies updated successfully')} catch (error) { this.log(`Failed to update dependencies: ${error.message}`)} } async start() { this.isRunning = true; this.log('Security Scanner started'); await this.runSecurityAudit(); await this.checkDependencyUpdates(); setInterval(async () => { if ( { await this.runSecurityAudit()) { { await this.runSecurityAudit()} await this.checkDependencyUpdates()} },this.scanInterval); process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} } const scanner = new SecurityScanner;(;); scanner.start().catch(error => { console.error('Failed to start security scanner:',error); process.exit(1)});
#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class SecurityScanner { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/security-scanner.log'); this.securityReportFile = path.join(this.projectRoot,'automation/logs/security-report.json'); this.lastScan = null; this.scanInterval = 3600000; this.isRunning = false; this.setupLogging(); this.log('Security Scanner started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runSecurityAudit() { try { this.log('Running security audit...'); const startTime = Date.now(); const auditOutput = execSync('npm audit --audit-level=moderate',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const scanTime = endTime - startTime; this.lastScan = { timestamp: new Date().toISOString() success: true; scanTime: scanTime; output: auditOutput; vulnerabilities: { critical: 0; high: 0; moderate: 0; low: 0} }; this.log(`Security audit completed successfully in ${scanTime}ms`); await this.saveSecurityReport()} catch (error) { this.log(`Security audit failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const vulnerabilities = this.parseVulnerabilities(output);  const output = error.stdout || error.stderr || ;';'; const vulnerabilities = this.parseVulnerabilities(output;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastScan = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; vulnerabilities: vulnerabilities}; await this.saveSecurityReport(); await this.handleSecurityIssues(vulnerabilities)} } parseVulnerabilities(output) { const vulnerabilities = {  critical: 0,high: 0,moderate: 0,low: 0 }; try { const criticalMatch = output.match(/(\d+) critical/); const highMatch = output.match(/(\d+) high/); const moderateMatch = output.match(/(\d+) moderate/); const lowMatch = output.match(/(\d+) low/); if (criticalMatch) { vulnerabilities.critical = parseInt(criticalMatch[1])} if (highMatch) { vulnerabilities.high = parseInt(highMatch[1])} if (moderateMatch) { vulnerabilities.moderate = parseInt(moderateMatch[1])} if (lowMatch) { vulnerabilities.low = parseInt(lowMatch[1])} } catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities}  critical: 0; high: 0; moderate: 0; low: 0}; try { const criticalMatch = output.match(/(\d+) critical;/;); const highMatch = output.match(/(\d+) high;/;); const moderateMatch = output.match(/(\d+) moderate;/;); const lowMatch = output.match(/(\d+) low;/;); if (vulnerabilities.critical = parseInt(criticalMatch[1])) { vulnerabilities.critical = parseInt(criticalMatch[1])} if (vulnerabilities.high = parseInt(highMatch[1])) { vulnerabilities.high = parseInt(highMatch[1])} if (vulnerabilities.moderate = parseInt(moderateMatch[1])) { vulnerabilities.moderate = parseInt(moderateMatch[1])} if (vulnerabilities.low = parseInt(lowMatch[1])} catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities) { vulnerabilities.low = parseInt(lowMatch[1])} catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async handleSecurityIssues(vulnerabilities) { const totalIssues = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.moderate + vulnerabilities.low;  if (totalIssues > 0) { this.log(`Found ${totalIssues} security vulnerabilities`); if (vulnerabilities.critical > 0 || vulnerabilities.high > 0) { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...'); await this.autoFixSecurityIssues()} else {  if ( { this.log(`Found ${totalIssues} security vulnerabilities`)) { { this.log(`Found ${totalIssues} security vulnerabilities`)} if ( { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...')) { { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...')} await this.autoFixSecurityIssues()} else { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Only moderate/low severity vulnerabilities found,reporting...'); await this.reportSecurityIssues(vulnerabilities)} } else { this.log('No security vulnerabilities found')} } async autoFixSecurityIssues() { try { this.log('Attempting to auto-fix security issues...'); const fixOutput = execSync('npm audit fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 300000 }); this.log('Security fixes applied'); await this.runSecurityAudit()} catch (fixError) {  cwd: this.projectRoot; encoding: 'utf8' timeout: 300000 };); this.log('Security fixes applied'); await this.runSecurityAudit()} catch (fixError) { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log(`Failed to auto-fix security issues: ${fixError.message}`); await this.reportSecurityFailure(fixError)} } async reportSecurityIssues(vulnerabilities) { const report = { timestamp: new Date().toISOString() vulnerabilities: vulnerabilities; projectRoot: this.projectRoot; recommendation: this.getSecurityRecommendation(vulnerabilities)  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const reportFile = path.join(this.projectRoot,'automation/logs/security-issues-report.json'); fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log('Security issues reported')} getSecurityRecommendation(vulnerabilities) {  if (vulnerabilities.critical > 0) { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'} else if (vulnerabilities.high > 0) { return 'HIGH: Update dependencies as soon as possible.'} else if (vulnerabilities.moderate > 0) { return 'MODERATE: Consider updating dependencies in next maintenance window.'} else if (vulnerabilities.low > 0) { return 'LOW: Monitor and update when convenient.'} else { return 'No security issues found.'}  if ( { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.') { { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'}} else if ( { return 'HIGH: Update dependencies as soon as possible.') { { return 'HIGH: Update dependencies as soon as possible.'}} else if ( { return 'MODERATE: Consider updating dependencies in next maintenance window.') { { return 'MODERATE: Consider updating dependencies in next maintenance window.'}} else if ( { return 'LOW: Monitor and update when convenient.') { { return 'LOW: Monitor and update when convenient.'}} else { return 'No security issues found.'} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } async saveSecurityReport() { const report = {  lastScan: this.lastScan,projectRoot: this.projectRoot,nodeVersion: process.version,platform: process.platform };  lastScan: this.lastScan; projectRoot: this.projectRoot; nodeVersion: process.version; platform: process.platform}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.securityReportFile,JSON.stringify(report,null,2))} async reportSecurityFailure(error) { const failureReport = {  timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/security-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Security failure reported')} async checkDependencyUpdates() { try { this.log('Checking for dependency updates...'); const outdatedOutput = execSync('npm outdated',{ cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); if (!fs.existsSync(logDir)) { this.log('Outdated dependencies found')) { ) { this.log('Outdated dependencies found')} await this.updateDependencies()} else { this.log('All dependencies are up to date')} } catch (error) { if ( { { this.log('Outdated dependencies found'); await this.updateDependencies()} else { this.log(`Dependency check failed: ${error.message}`)} } } async updateDependencies() { try { this.log('Updating dependencies...'); execSync('npm update',{ cwd: this.projectRoot; timeout: 300000}); this.log('Dependencies updated successfully')} catch (error) { this.log(`Failed to update dependencies: ${error.message}`)} } async start() { this.isRunning = true; this.log('Security Scanner started'); await this.runSecurityAudit(); await this.checkDependencyUpdates(); setInterval(async () => { if ( { await this.runSecurityAudit()) { { await this.runSecurityAudit()} await this.checkDependencyUpdates()} },this.scanInterval); process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} } const scanner = new SecurityScanner;(;); scanner.start().catch(error => { console.error('Failed to start security scanner:',error); process.exit(1)});
#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class SecurityScanner { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/security-scanner.log'); this.securityReportFile = path.join(this.projectRoot,'automation/logs/security-report.json'); this.lastScan = null; this.scanInterval = 3600000; this.isRunning = false; this.setupLogging(); this.log('Security Scanner started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runSecurityAudit() { try { this.log('Running security audit...'); const startTime = Date.now(); const auditOutput = execSync('npm audit --audit-level=moderate',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const scanTime = endTime - startTime; this.lastScan = { timestamp: new Date().toISOString() success: true; scanTime: scanTime; output: auditOutput; vulnerabilities: { critical: 0; high: 0; moderate: 0; low: 0} }; this.log(`Security audit completed successfully in ${scanTime}ms`); await this.saveSecurityReport()} catch (error) { this.log(`Security audit failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const vulnerabilities = this.parseVulnerabilities(output);  const output = error.stdout || error.stderr || ;';'; const vulnerabilities = this.parseVulnerabilities(output;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastScan = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; vulnerabilities: vulnerabilities}; await this.saveSecurityReport(); await this.handleSecurityIssues(vulnerabilities)} } parseVulnerabilities(output) { const vulnerabilities = {  critical: 0,high: 0,moderate: 0,low: 0 }; try { const criticalMatch = output.match(/(\d+) critical/); const highMatch = output.match(/(\d+) high/); const moderateMatch = output.match(/(\d+) moderate/); const lowMatch = output.match(/(\d+) low/); if (criticalMatch) { vulnerabilities.critical = parseInt(criticalMatch[1])} if (highMatch) { vulnerabilities.high = parseInt(highMatch[1])} if (moderateMatch) { vulnerabilities.moderate = parseInt(moderateMatch[1])} if (lowMatch) { vulnerabilities.low = parseInt(lowMatch[1])} } catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities}  critical: 0; high: 0; moderate: 0; low: 0}; try { const criticalMatch = output.match(/(\d+) critical;/;); const highMatch = output.match(/(\d+) high;/;); const moderateMatch = output.match(/(\d+) moderate;/;); const lowMatch = output.match(/(\d+) low;/;); if (vulnerabilities.critical = parseInt(criticalMatch[1])) { vulnerabilities.critical = parseInt(criticalMatch[1])} if (vulnerabilities.high = parseInt(highMatch[1])) { vulnerabilities.high = parseInt(highMatch[1])} if (vulnerabilities.moderate = parseInt(moderateMatch[1])) { vulnerabilities.moderate = parseInt(moderateMatch[1])} if (vulnerabilities.low = parseInt(lowMatch[1])} catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities) { vulnerabilities.low = parseInt(lowMatch[1])} catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async handleSecurityIssues(vulnerabilities) { const totalIssues = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.moderate + vulnerabilities.low;  if (totalIssues > 0) { this.log(`Found ${totalIssues} security vulnerabilities`); if (vulnerabilities.critical > 0 || vulnerabilities.high > 0) { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...'); await this.autoFixSecurityIssues()} else {  if ( { this.log(`Found ${totalIssues} security vulnerabilities`)) { { this.log(`Found ${totalIssues} security vulnerabilities`)} if ( { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...')) { { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...')} await this.autoFixSecurityIssues()} else { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Only moderate/low severity vulnerabilities found,reporting...'); await this.reportSecurityIssues(vulnerabilities)} } else { this.log('No security vulnerabilities found')} } async autoFixSecurityIssues() { try { this.log('Attempting to auto-fix security issues...'); const fixOutput = execSync('npm audit fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 300000 }); this.log('Security fixes applied'); await this.runSecurityAudit()} catch (fixError) {  cwd: this.projectRoot; encoding: 'utf8' timeout: 300000 };); this.log('Security fixes applied'); await this.runSecurityAudit()} catch (fixError) { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log(`Failed to auto-fix security issues: ${fixError.message}`); await this.reportSecurityFailure(fixError)} } async reportSecurityIssues(vulnerabilities) { const report = { timestamp: new Date().toISOString() vulnerabilities: vulnerabilities; projectRoot: this.projectRoot; recommendation: this.getSecurityRecommendation(vulnerabilities)  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const reportFile = path.join(this.projectRoot,'automation/logs/security-issues-report.json'); fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log('Security issues reported')} getSecurityRecommendation(vulnerabilities) {  if (vulnerabilities.critical > 0) { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'} else if (vulnerabilities.high > 0) { return 'HIGH: Update dependencies as soon as possible.'} else if (vulnerabilities.moderate > 0) { return 'MODERATE: Consider updating dependencies in next maintenance window.'} else if (vulnerabilities.low > 0) { return 'LOW: Monitor and update when convenient.'} else { return 'No security issues found.'}  if ( { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.') { { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'}} else if ( { return 'HIGH: Update dependencies as soon as possible.') { { return 'HIGH: Update dependencies as soon as possible.'}} else if ( { return 'MODERATE: Consider updating dependencies in next maintenance window.') { { return 'MODERATE: Consider updating dependencies in next maintenance window.'}} else if ( { return 'LOW: Monitor and update when convenient.') { { return 'LOW: Monitor and update when convenient.'}} else { return 'No security issues found.'} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } async saveSecurityReport() { const report = {  lastScan: this.lastScan,projectRoot: this.projectRoot,nodeVersion: process.version,platform: process.platform };  lastScan: this.lastScan; projectRoot: this.projectRoot; nodeVersion: process.version; platform: process.platform}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.securityReportFile,JSON.stringify(report,null,2))} async reportSecurityFailure(error) { const failureReport = {  timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/security-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Security failure reported')} async checkDependencyUpdates() { try { this.log('Checking for dependency updates...'); const outdatedOutput = execSync('npm outdated',{ cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); if (!fs.existsSync(logDir)) { this.log('Outdated dependencies found')) { ) { this.log('Outdated dependencies found')} await this.updateDependencies()} else { this.log('All dependencies are up to date')} } catch (error) { if ( { { this.log('Outdated dependencies found'); await this.updateDependencies()} else { this.log(`Dependency check failed: ${error.message}`)} } } async updateDependencies() { try { this.log('Updating dependencies...'); execSync('npm update',{ cwd: this.projectRoot; timeout: 300000}); this.log('Dependencies updated successfully')} catch (error) { this.log(`Failed to update dependencies: ${error.message}`)} } async start() { this.isRunning = true; this.log('Security Scanner started'); await this.runSecurityAudit(); await this.checkDependencyUpdates(); setInterval(async () => { if ( { await this.runSecurityAudit()) { { await this.runSecurityAudit()} await this.checkDependencyUpdates()} },this.scanInterval); process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} } const scanner = new SecurityScanner;(;); scanner.start().catch(error => { console.error('Failed to start security scanner:',error); process.exit(1)});
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class SecurityScanner { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/security-scanner.log'); this.securityReportFile = path.join(this.projectRoot,'automation/logs/security-report.json'); this.lastScan = null; this.scanInterval = 3600000; this.isRunning = false; this.setupLogging(); this.log('Security Scanner started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runSecurityAudit() { try { this.log('Running security audit...'); const startTime = Date.now(); const auditOutput = execSync('npm audit --audit-level=moderate',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const scanTime = endTime - startTime; this.lastScan = { timestamp: new Date().toISOString() success: true; scanTime: scanTime; output: auditOutput; vulnerabilities: { critical: 0; high: 0; moderate: 0; low: 0} }; this.log(`Security audit completed successfully in ${scanTime}ms`); await this.saveSecurityReport()} catch (error) { this.log(`Security audit failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const vulnerabilities = this.parseVulnerabilities(output);  const output = error.stdout || error.stderr || ;';'; const vulnerabilities = this.parseVulnerabilities(output;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastScan = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; vulnerabilities: vulnerabilities}; await this.saveSecurityReport(); await this.handleSecurityIssues(vulnerabilities)} } parseVulnerabilities(output) { const vulnerabilities = {  critical: 0,high: 0,moderate: 0,low: 0 }; try { const criticalMatch = output.match(/(\d+) critical/); const highMatch = output.match(/(\d+) high/); const moderateMatch = output.match(/(\d+) moderate/); const lowMatch = output.match(/(\d+) low/); if (criticalMatch) { vulnerabilities.critical = parseInt(criticalMatch[1])} if (highMatch) { vulnerabilities.high = parseInt(highMatch[1])} if (moderateMatch) { vulnerabilities.moderate = parseInt(moderateMatch[1])} if (lowMatch) { vulnerabilities.low = parseInt(lowMatch[1])} } catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities}  critical: 0; high: 0; moderate: 0; low: 0}; try { const criticalMatch = output.match(/(\d+) critical;/;); const highMatch = output.match(/(\d+) high;/;); const moderateMatch = output.match(/(\d+) moderate;/;); const lowMatch = output.match(/(\d+) low;/;); if (vulnerabilities.critical = parseInt(criticalMatch[1])) { vulnerabilities.critical = parseInt(criticalMatch[1])} if (vulnerabilities.high = parseInt(highMatch[1])) { vulnerabilities.high = parseInt(highMatch[1])} if (vulnerabilities.moderate = parseInt(moderateMatch[1])) { vulnerabilities.moderate = parseInt(moderateMatch[1])} if (vulnerabilities.low = parseInt(lowMatch[1])} catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities) { vulnerabilities.low = parseInt(lowMatch[1])} catch (error) { this.log(`Failed to parse vulnerabilities: ${error.message}`)} return vulnerabilities}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async handleSecurityIssues(vulnerabilities) { const totalIssues = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.moderate + vulnerabilities.low;  if (totalIssues > 0) { this.log(`Found ${totalIssues} security vulnerabilities`); if (vulnerabilities.critical > 0 || vulnerabilities.high > 0) { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...'); await this.autoFixSecurityIssues()} else {  if ( { this.log(`Found ${totalIssues} security vulnerabilities`)) { { this.log(`Found ${totalIssues} security vulnerabilities`)} if ( { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...')) { { this.log('Critical or high severity vulnerabilities found,attempting auto-fix...')} await this.autoFixSecurityIssues()} else { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Only moderate/low severity vulnerabilities found,reporting...'); await this.reportSecurityIssues(vulnerabilities)} } else { this.log('No security vulnerabilities found')} } async autoFixSecurityIssues() { try { this.log('Attempting to auto-fix security issues...'); const fixOutput = execSync('npm audit fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 300000 }); this.log('Security fixes applied'); await this.runSecurityAudit()} catch (fixError) {  cwd: this.projectRoot; encoding: 'utf8' timeout: 300000 };); this.log('Security fixes applied'); await this.runSecurityAudit()} catch (fixError) { ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log(`Failed to auto-fix security issues: ${fixError.message}`); await this.reportSecurityFailure(fixError)} } async reportSecurityIssues(vulnerabilities) { const report = { timestamp: new Date().toISOString() vulnerabilities: vulnerabilities; projectRoot: this.projectRoot; recommendation: this.getSecurityRecommendation(vulnerabilities)  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const reportFile = path.join(this.projectRoot,'automation/logs/security-issues-report.json'); fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log('Security issues reported')} getSecurityRecommendation(vulnerabilities) {  if (vulnerabilities.critical > 0) { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'} else if (vulnerabilities.high > 0) { return 'HIGH: Update dependencies as soon as possible.'} else if (vulnerabilities.moderate > 0) { return 'MODERATE: Consider updating dependencies in next maintenance window.'} else if (vulnerabilities.low > 0) { return 'LOW: Monitor and update when convenient.'} else { return 'No security issues found.'}  if ( { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.') { { return 'CRITICAL: Immediate action required. Update dependencies or apply patches.'}} else if ( { return 'HIGH: Update dependencies as soon as possible.') { { return 'HIGH: Update dependencies as soon as possible.'}} else if ( { return 'MODERATE: Consider updating dependencies in next maintenance window.') { { return 'MODERATE: Consider updating dependencies in next maintenance window.'}} else if ( { return 'LOW: Monitor and update when convenient.') { { return 'LOW: Monitor and update when convenient.'}} else { return 'No security issues found.'} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } async saveSecurityReport() { const report = {  lastScan: this.lastScan,projectRoot: this.projectRoot,nodeVersion: process.version,platform: process.platform };  lastScan: this.lastScan; projectRoot: this.projectRoot; nodeVersion: process.version; platform: process.platform}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.securityReportFile,JSON.stringify(report,null,2))} async reportSecurityFailure(error) { const failureReport = {  timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/security-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Security failure reported')} async checkDependencyUpdates() { try { this.log('Checking for dependency updates...'); const outdatedOutput = execSync('npm outdated',{ cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); if (!fs.existsSync(logDir)) { this.log('Outdated dependencies found')) { ) { this.log('Outdated dependencies found')} await this.updateDependencies()} else { this.log('All dependencies are up to date')} } catch (error) { if ( { { this.log('Outdated dependencies found'); await this.updateDependencies()} else { this.log(`Dependency check failed: ${error.message}`)} } } async updateDependencies() { try { this.log('Updating dependencies...'); execSync('npm update',{ cwd: this.projectRoot; timeout: 300000}); this.log('Dependencies updated successfully')} catch (error) { this.log(`Failed to update dependencies: ${error.message}`)} } async start() { this.isRunning = true; this.log('Security Scanner started'); await this.runSecurityAudit(); await this.checkDependencyUpdates(); setInterval(async () => { if ( { await this.runSecurityAudit()) { { await this.runSecurityAudit()} await this.checkDependencyUpdates()} },this.scanInterval); process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} } const scanner = new SecurityScanner;(;); scanner.start().catch(error => { console.error('Failed to start security scanner:',error); process.exit(1)});
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
<<<<<<< HEAD
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> f6b849a806966ab0803a1eba10ab812addf04f56
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
