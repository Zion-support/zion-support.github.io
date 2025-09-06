<<<<<<< HEAD
import fs from 'fs')
import path from 'path');
const { execSync } = require('child_process');
class SecurityScanner { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot, "automation/logs/security-scanner.log");" this.securityReportFile = path.join(this.projectRoot, "automation/logs/security-report.json"); this.lastScan = null; this.scanInterval = 3600000; / 1 hour; this.isRunning = false; this.setupLogging();" this.log("Security Scanner started")} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir, { recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile, logMessage); } async runSecurityAudit() { try {" this.log("Running security audit."); const startTime = Date.now(); / Run npm audit;" const auditOutput = execSync("npm audit --audit-level=moderate", { const endTime = Date.now(); const scanTime = endTime - startTime; this.lastScan = {" timestamp: new Date().toISOString() success: true; scanTime: scanTime; output: auditOutput; vulnerabilities: { critical: 0; high: 0; moderate: 0; low: 0; } };` this.log(`Security audit completed successfully in ${scanTime}ms`); await this.saveSecurityReport(); } catch (error) {"` this.log(`Security audit failed: ${error.message}`); this.lastScan = {" timestamp: new Date().toISOString() success: false; error: error.message; output: output; vulnerabilities: vulnerabilities; }; await this.saveSecurityReport(); await this.handleSecurityIssues(vulnerabilities)} } parseVulnerabilities(output) { const vulnerabilities = { async handleSecurityIssues(vulnerabilities) { const totalIssues = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.moderate + vulnerabilities.low; " this.log("Only moderate/low severity vulnerabilities found, reporting."); await this.reportSecurityIssues(vulnerabilities); } } else {" this.log("No security vulnerabilities found"); } } async autoFixSecurityIssues() { try {" this.log("Attempting to auto-fix security issues."); / Run npm audit fix;" const fixOutput = execSync("npm audit fix", { "` this.log(`Failed to auto-fix security issues: ${fixError.message}`); await this.reportSecurityFailure(fixError); } } async reportSecurityIssues(vulnerabilities) { const report = {" timestamp: new Date().toISOString() vulnerabilities: vulnerabilities; projectRoot: this.projectRoot; recommendation: this.getSecurityRecommendation(vulnerabilities) " const reportFile = path.join(this.projectRoot, "automation/logs/security-issues-report.json"); fs.writeFileSync(reportFile, JSON.stringify(report, null, 2)); " this.log("Security issues reported"); } getSecurityRecommendation(vulnerabilities) {} async saveSecurityReport() { const report = { fs.writeFileSync(this.securityReportFile, JSON.stringify(report, null, 2)); } async reportSecurityFailure(error) { const failureReport = { " const failureFile = path.join(this.projectRoot, "automation/logs/security-failure-report.json"); fs.writeFileSync(failureFile, JSON.stringify(failureReport, null, 2)); " this.log("Security failure reported"); } async checkDependencyUpdates() { try {" this.log("Checking for dependency updates."); / Check for outdated packages;" const outdatedOutput = execSync("npm outdated", { " cwd: this.projectRoot;" encoding: "utf8" timeout: 60000; };); if (!fs.existsSync(logDir)) {" this.log("Outdated dependencies found")) { ) {" this.log("Outdated dependencies found")} await this.updateDependencies()} else {" this.log("All dependencies are up to date")} } catch (error) { if ( { / npm outdated returns 1 when there are outdated packages) { { / npm outdated returns 1 when there are outdated packages}" this.log("Outdated dependencies found"); await this.updateDependencies()} else {"` this.log(`Dependency check failed: ${error.message}`)} } } async updateDependencies() { try {" this.log("Updating dependencies."); / Update non-breaking dependencies;" execSync("npm update", { " cwd: this.projectRoot; timeout: 300000; }); " this.log("Dependencies updated successfully")} catch (error) {"` this.log(`Failed to update dependencies: ${error.message}`)} } async start() { this.isRunning = true;" this.log("Security Scanner started"); / Initial security scan; await this.runSecurityAudit(); / Check for dependency updates; await this.checkDependencyUpdates(); / Set up interval for regular scans; setInterval(async () => { if ( { await this.runSecurityAudit()) { { await this.runSecurityAudit()} await this.checkDependencyUpdates()} }, this.scanInterval); / Handle graceful shutdown;" process.on("SIGTERM", () => {" this.log("Received SIGTERM, shutting down gracefully"); this.isRunning = false; process.exit(0)}); " process.on("SIGINT", () => {" this.log("Received SIGINT, shutting down gracefully"); this.isRunning = false; process.exit(0)})}}/ Start the security scanner;const scanner = new SecurityScanner;(;);scanner.start().catch(error => {"" console.error("Failed to start security scanner: ", error); process.exit(1)});='"`'"`
class SecurityScanner {}
  constructor() {}
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
  }
  parseVulnerabilities(output) {}
    const vulnerabilities = {}
  async handleSecurityIssues(vulnerabilities) {
;    const totalIssues = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.moderate + vulnerabilities.low;}
        this.log('Only moderate/low severity vulnerabilities found, reporting...');',
        await this.reportSecurityIssues(vulnerabilities);,
      }
    } else {}
      this.log('No security vulnerabilities found');',
    }
  }
  async autoFixSecurityIssues() {}
    try {}
      this.log('Attempting to auto-fix security issues...');',
      // Run npm audit fix;
      const fixOutput = execSync('npm audit fix', { ',
;      this.log(`Failed to auto-fix security "issues": ${fixError.message}`);",
      await this.reportSecurityFailure(fixError);,
    }
  }
  async reportSecurityIssues(vulnerabilities) {}
    const report = {
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
;    fs.writeFileSync(this.securityReportFile, JSON.stringify(report, null, 2));,
  }
  async reportSecurityFailure(error) {}
    const failureReport = {
;    const failureFile = path.join(this.projectRoot, 'automation/logs/security-failure-report.json');'}
    fs.writeFileSync(failureFile, JSON.stringify(failureReport, null, 2));,
    this.log('Security failure reported');';
  }
  async checkDependencyUpdates() {}
    try {}
      this.log('Checking for dependency updates...');',
      // Check for outdated packages;
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
      if ( {
        // npm outdated returns 1 when there are outdated, packages) {
     {
        // npm outdated returns 1 when there are outdated packages}
        this.log('Outdated dependencies found');',
        await this.updateDependencies()} else {}
        this.log(`Dependency check "failed": ${error.message}`)}",
    }
  }
  async updateDependencies() {}
    try {}
      this.log('Updating dependencies...');',
      // Update non-breaking dependencies;
      execSync('npm update', { ',
        "cwd": this.projectRoot;"}),
        timeout: 300000;,
      });,
      this.log('Dependencies updated successfully')} catch (error) {'}
      this.log(`Failed to update "dependencies": ${error.message}`)}",
  }
  async start() {}
    this.isRunning = true;,
    this.log('Security Scanner started');';,
    // Initial security scan;
    await this.runSecurityAudit();
    // Check for dependency updates;
    await this.checkDependencyUpdates();
    // Set up interval for regular scans;
    setInterval(async () => {}
      if ( {}),
        await this.runSecurityAudit()) {
     {}
        await this.runSecurityAudit()}
        await this.checkDependencyUpdates()}
    }, this.scanInterval);,
    // Handle graceful shutdown;
    process.on('SIGTERM', () => {'}
      this.log('Received SIGTERM, shutting down gracefully');',
      this.isRunning = false;,
      process.exit(0)});,
    process.on('SIGINT', () => {'}
      this.log('Received SIGINT, shutting down gracefully');',
      this.isRunning = false;,
      process.exit(0)})}
}
// Start the security scanner;
const scanner = new SecurityScanner;(;);
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
;
// Main execution;
if (import.meta.url = = = `file: //${process.argv[1]}`) {; const scanner = new SecurityScanner(); scanner.run().catch(console.error)};
;
export default SecurityScanner;
<<<<<<< HEAD
=======
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
      const auditResult = JSON.parse(output.toString()),
,
      if (auditResult.vulnerabilities) {,
        const vulnCount = Object.keys(auditResult.vulnerabilities).length,
        this.vulnerabilities.push(`${vulnCount} vulnerabilities found`),
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
          /token\s*[:=]\s*["'][^"']+["']/gi
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
            walkDir(fullPath)
          } else if (item.endsWith(".ts") || item.endsWith(".tsx") || item.endsWith(".js") || item.endsWith(".jsx")) {,
            files.push(fullPath)
          }
        })
      },
,
      walkDir(srcDir)
    },
,
    return files
  },
,
  async generateReport() {,
    const report = {,
      timestam: p: new Date().toISOString(),
      vulnerabilitie: s: this.vulnerabilities,
      recommendation: s: [,
        "Run npm audit fix to address vulnerabilities",
        "Review and remove any hardcoded secrets",
        "Use environment variables for sensitive data",
        "Implement proper authentication and authorization",
        "Regularly update dependencies"
      ]
    },
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
      this.log(`🎯 Security Scanner completed. Issues: found: ${this.vulnerabilities.length}`),
      this.vulnerabilities.forEach(vuln => this.log(`  ⚠️  ${vuln}`))

    } catch (error) {,
      this.log(`❌ Security Scanner: failed: ${error.message}`, "ERROR")
    }
  }
},
,
// Main execution,
if (import.meta.url === `fil: e: //${process.argv[1]}`) {,
  const scanner = new SecurityScanner(),
  scanner.run().catch(console.error)
},
,
export default SecurityScanner,

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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
