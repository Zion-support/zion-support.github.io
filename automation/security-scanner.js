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
    this.logFile = path.join(__dirname, "logs", "security-scanner.log");
    this.vulnerabilities = [];
    this.ensureDirectories();
  }
  ensureDirectories() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }
  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    // // console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
  }
  log(message) {
    const timestamp = new Date().toISOString(;
  });
    const logMessage = `[${timestamp}] ${message}\;n;`;
    );
    fs.appendFileSync(this.logFile, logMessage)}
ursor/migrate-github-actions-to-pm2-and-clean-up-5599
  async runSecurityAudit() {
    try {
      this.log('Running security audit...');
      const startTime = Date.now();
      // Run npm audit;
      const auditOutput = execSync('npm audit --audit-level=moderate', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 120000
      ;};);
        "cwd": this.projectRoot;
        encoding: 'utf8'
        timeout: 120000;
      };);
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
      // Parse audit output for vulnerability counts;
      const output = error.stdout || error.stderr || ;';';
      const vulnerabilities = this.parseVulnerabilities(output;);
// Parse audit output for vulnerability counts
      const output = error.stdout || error.stderr || '';
      const vulnerabilities = this.parseVulnerabilities(output);ursor/migrate-github-actions-to-pm2-and-clean-up-5599
      this.lastScan = {
        "timestamp": new Date().toISOString()
        success: false;

        error: error.message;
        output: output;
        vulnerabilities: vulnerabilities;
    } catch (error) {"`;
      this.log(`Security audit "failed": ${error.message}`);"
// Parse audit output for vulnerability counts;"
      const output = error.stdout || error.stderr || ;
      const vulnerabilities = this.parseVulnerabilities(output);ursor/migrate-github-actions-to-pm2-and-clean-up-5599;
  error: error.message;
  vulnerabilities: vulnerabilities;
      };
  parseVulnerabilities(output) {
    const vulnerabilities = {
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
"critical": 0,
      "high": 0,
      "moderate": 0,
      "low": 0
    };
    try {
      // Parse npm audit output for vulnerability counts
    const vulnerabilities = {"
"critical": 0,""
      "high": 0,""
      "moderate": 0,""
      "low": 0;"
  // TODO: Implement
      // Parse npm audit output for vulnerability counts;
      const criticalMatch = output.match(/(\d+) critical/);
      const highMatch = output.match(/(\d+) high/);
      const moderateMatch = output.match(/(\d+) moderate/);
      const lowMatch = output.match(/(\d+) low/);
      if (criticalMatch) {
        vulnerabilities.critical = parseInt(criticalMatch[1]);
      if (highMatch) {
        vulnerabilities.high = parseInt(highMatch[1]);
      if (moderateMatch) {
        vulnerabilities.moderate = parseInt(moderateMatch[1]);
      if (lowMatch) {
        vulnerabilities.low = parseInt(lowMatch[1]);
      this.log(`Failed to parse "vulnerabilities": ${error.message}`);"
    return vulnerabilities;
  }ursor/migrate-github-actions-to-pm2-and-clean-up-5599
parseVulnerabilities(output) {}
    const vulnerabilities = {}
  async handleSecurityIssues(vulnerabilities) {
  }ursor/migrate-github-actions-to-pm2-and-clean-up-5599;
    const totalIssues = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.moderate + vulnerabilities.low;
if (totalIssues > 0) {`;
      this.log(`Found ${totalIssues} security vulnerabilities`);
      // Auto-fix if possible;
      if (vulnerabilities.critical > 0 || vulnerabilities.high > 0) {"
        this.log('Critical or high severity vulnerabilities found, attempting auto-fix...');
        await this.autoFixSecurityIssues();
      } else {ursor/migrate-github-actions-to-pm2-and-clean-up-5599;
        this.log('Only moderate/low severity vulnerabilities found, reporting...');
        await this.reportSecurityIssues(vulnerabilities);
    } else {
  // TODO: Implement
      this.log('No security vulnerabilities found');
  async autoFixSecurityIssues() {
  // TODO: Implement
      this.log('Attempting to auto-fix security issues...');
      // Run npm audit fix;

      const fixOutput = execSync('npm audit fix', { 
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
const fixOutput = execSync('npm audit fix', { ',
;      this.log(`Failed to auto-fix security "issues": ${fixError.message}`);",
      await this.reportSecurityFailure(fixError);,
    }
  }
  async checkSecrets() {
    try {
      this.log("Checking for exposed secrets...");
      const files = this.getSourceFiles();
      let secretCount = 0;
      files.forEach(file => {
        const content = fs.readFileSync(file, "utf8");
        const secretPatterns = [
          /api[_-]?key\s*[:=]\s*["'][^"']+["']/gi
          /secret\s*[:=]\s*["'][^"']+["']/gi
          /password\s*[:=]\s*["'][^"']+["']/gi
          /token\s*[:=]\s*["'][^"']+["']/gi
        ];
        secretPatterns.forEach(pattern => {
          if (pattern.test(content)) {
            secretCount++;
          }
        });
      });
      if (secretCount > 0) {
        this.vulnerabilities.push(`${secretCount} potential secrets found`);
        this.log(`Found ${secretCount} potential secrets`, "WARN");
      } else {
        this.log("✓ No exposed secrets found");
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
"cwd": this.projectRoot,
        "encoding": 'utf8',
        "timeout": 300000 // 5 minutes
      });
      this.log('Security fixes applied');
      // Run audit again to verify fixes
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
