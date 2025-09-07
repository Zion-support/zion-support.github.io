<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/security-scanner.cjs

<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/security-scanner.cjs
=======
=======
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/security-scanner.cjs
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/security-scanner.cjs
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class SecurityScanner {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/security-scanner.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/security-report.json');
    this.startTime = Date.now();
  }
  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Error writing to log file:', error.message);
    }
  }
  async scanDependencies() {
    try {
      this.log('🔒 Scanning dependencies for vulnerabilities...');
      const auditResult = execSync('npm audit --json', {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8'
      });
      const audit = JSON.parse(auditResult);
      return audit;
    } catch (error) {
      this.log(`Dependency scan failed: ${error.message}`);
      return { vulnerabilities: { info: 0, low: 0, moderate: 0, high: 0, critical: 0 } };
    }
  }
  async scanCode() {
    try {
      this.log('🔍 Scanning code for security issues...');
      const issues = [];
      const files = this.getCodeFiles();
      for (const file of files) {
        const content = fs.readFileSync(file, 'utf8');
        const fileIssues = this.analyzeFileForSecurityIssues(file, content);
        issues.push(...fileIssues);
      }
      return issues;
    } catch (error) {
      this.log(`Code scan failed: ${error.message}`);
      return [];
    }
  }
  getCodeFiles() {
    const files = [];
    const extensions = ['.js', '.jsx', '.ts', '.tsx', '.json'];
    const walkDir = (dir) => {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          if (!fullPath.includes('node_modules') &&
              !fullPath.includes('.git') &&
              !fullPath.includes('dist') &&
              !fullPath.includes('build')) {
            walkDir(fullPath);
          }
        } else if (stat.isFile()) {
          const ext = path.extname(fullPath);
          if (extensions.includes(ext)) {
            files.push(fullPath);
          }
        }
      }
    };
    walkDir(this.projectRoot);
    return files;
  }
  analyzeFileForSecurityIssues(filePath, content) {
    const issues = [];
    const lines = content.split('\n');
    lines.forEach((line, index) => {
      const lineNum = index + 1;
      // Check for hardcoded secrets
      if (line.match(/password\s*[:=]\s*['"][^'"]+['"]/i)) {
        issues.push({
          file: filePath,
          line: lineNum,
          type: 'hardcoded-password',
          severity: 'high',
          message: 'Hardcoded password detected'
        });
      }
      // Check for API keys
      if (line.match(/api[_-]?key\s*[:=]\s*['"][^'"]+['"]/i)) {
        issues.push({
          file: filePath,
          line: lineNum,
          type: 'hardcoded-api-key',
          severity: 'high',
          message: 'Hardcoded API key detected'
        });
      }
      // Check for eval usage
      if (line.match(/\beval\s*\(/)) {
        issues.push({
          file: filePath,
          line: lineNum,
          type: 'eval-usage',
          severity: 'high',
          message: 'eval() usage detected - potential security risk'
        });
      }
      // Check for innerHTML usage
      if (line.match(/\.innerHTML\s*=/)) {
        issues.push({
          file: filePath,
          line: lineNum,
          type: 'innerhtml-usage',
          severity: 'medium',
          message: 'innerHTML usage detected - potential XSS risk'
        });
      }
      // Check for dangerous regex
      if (line.match(/new RegExp\([^)]*\+[^)]*\)/)) {
        issues.push({
          file: filePath,
          line: lineNum,
          type: 'dangerous-regex',
          severity: 'medium',
          message: 'Potentially dangerous regex with string concatenation'
        });
      }
      // Check for console.log with sensitive data
      if (line.match(/console\.(log|warn|error)\s*\([^)]*(password|token|key|secret)[^)]*\)/i)) {
        issues.push({
          file: filePath,
          line: lineNum,
          type: 'sensitive-console-log',
          severity: 'medium',
          message: 'Console log with potentially sensitive data'
        });
      }
    });
    return issues;
  }
  async scanConfigs() {
    try {
      this.log('⚙️  Scanning configuration files...');
      const configFiles = [
        'package.json',
        'next.config.js',
        'next.config.mjs',
        'tsconfig.json',
        'eslint.config.js',
        '.env',
        '.env.local',
        '.env.production'
      ];
      const issues = [];
      for (const configFile of configFiles) {
        const filePath = path.join(this.projectRoot, configFile);
        if (fs.existsSync(filePath)) {
          const content = fs.readFileSync(filePath, 'utf8');
          const fileIssues = this.analyzeConfigFile(filePath, content);
          issues.push(...fileIssues);
        }
      }
      return issues;
    } catch (error) {
      this.log(`Config scan failed: ${error.message}`);
      return [];
    }
  }
  analyzeConfigFile(filePath, content) {
    const issues = [];
    const lines = content.split('\n');
    lines.forEach((line, index) => {
      const lineNum = index + 1;
      // Check for exposed ports
      if (line.match(/port\s*[:=]\s*(\d+)/)) {
        const port = parseInt(line.match(/port\s*[:=]\s*(\d+)/)[1]);
        if (port < 1024 && port !== 80 && port !== 443) {
          issues.push({
            file: filePath,
            line: lineNum,
            type: 'privileged-port',
            severity: 'medium',
            message: `Using privileged port ${port}`
          });
        }
      }
      // Check for debug mode in production
      if (line.match(/debug\s*[:=]\s*true/i) && filePath.includes('production')) {
        issues.push({
          file: filePath,
          line: lineNum,
          type: 'debug-in-production',
          severity: 'high',
          message: 'Debug mode enabled in production configuration'
        });
      }
      // Check for insecure CORS settings
      if (line.match(/cors\s*[:=]\s*{\s*origin\s*:\s*['"]\*['"]/)) {
        issues.push({
          file: filePath,
          line: lineNum,
          type: 'insecure-cors',
          severity: 'high',
          message: 'CORS configured to allow all origins'
        });
      }
    });
    return issues;
  }
  generateReport(dependencies, codeIssues, configIssues) {
    const totalVulnerabilities = dependencies.vulnerabilities ?
      Object.values(dependencies.vulnerabilities).reduce((sum, count) => sum + count, 0) : 0;
    const totalCodeIssues = codeIssues.length;
    const totalConfigIssues = configIssues.length;
    const issuesBySeverity = {
      low: 0,
      medium: 0,
      high: 0,
      critical: 0
    };
    [...codeIssues, ...configIssues].forEach(issue => {
      issuesBySeverity[issue.severity]++;
    });
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        dependencyVulnerabilities: totalVulnerabilities,
        codeIssues: totalCodeIssues,
        configIssues: totalConfigIssues,
        totalIssues: totalCodeIssues + totalConfigIssues,
        issuesBySeverity,
        criticalIssues: issuesBySeverity.critical + issuesBySeverity.high
      },
      dependencies,
      codeIssues,
      configIssues,
      recommendations: this.generateRecommendations(totalVulnerabilities, issuesBySeverity)
    };
    return report;
  }
  generateRecommendations(vulnerabilities, issuesBySeverity) {
    const recommendations = [];
    if (vulnerabilities > 0) {
      recommendations.push({
        type: 'dependencies',
        priority: 'high',
        message: `${vulnerabilities} dependency vulnerabilities found`,
        action: 'Run npm audit fix to resolve vulnerabilities'
      });
    }
    if (issuesBySeverity.critical > 0) {
      recommendations.push({
        type: 'critical',
        priority: 'critical',
        message: `${issuesBySeverity.critical} critical security issues found`,
        action: 'Address critical security issues immediately'
      });
    }
    if (issuesBySeverity.high > 0) {
      recommendations.push({
        type: 'high',
        priority: 'high',
        message: `${issuesBySeverity.high} high severity issues found`,
        action: 'Address high severity security issues as soon as possible'
      });
    }
    if (issuesBySeverity.medium > 5) {
      recommendations.push({
        type: 'medium',
        priority: 'medium',
        message: `${issuesBySeverity.medium} medium severity issues found`,
        action: 'Review and address medium severity issues'
      });
    }
    return recommendations;
  }
  async saveReport(report) {
    try {
      const reportDir = path.dirname(this.reportFile);
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
      }
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved to: ${this.reportFile}`);
    } catch (error) {
      this.log(`Error saving report: ${error.message}`);
    }
  }
  async run() {
    this.log('🔒 Starting Security Scanner...');
    this.log(`Project root: ${this.projectRoot}`);
    try {
      // Create logs directory if it doesn't exist
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }
      // Scan dependencies
      const dependencies = await this.scanDependencies();
      // Scan code
      const codeIssues = await this.scanCode();
      // Scan configs
      const configIssues = await this.scanConfigs();
      // Generate report
      const report = this.generateReport(dependencies, codeIssues, configIssues);
      // Save report
      await this.saveReport(report);
      const duration = Date.now() - this.startTime;
      // Log summary
      this.log('\n📊 Security Scanner Report:');
      this.log(`Dependency vulnerabilities: ${report.summary.dependencyVulnerabilities}`);
      this.log(`Code issues: ${report.summary.codeIssues}`);
      this.log(`Config issues: ${report.summary.configIssues}`);
      this.log(`Critical issues: ${report.summary.criticalIssues}`);
      this.log(`Duration: ${duration}ms`);
      if (report.summary.criticalIssues > 0) {
        this.log('\n🚨 Critical Security Issues:');
        [...codeIssues, ...configIssues]
          .filter(issue => issue.severity === 'critical' || issue.severity === 'high')
          .slice(0, 5)
          .forEach(issue => {
            this.log(`  ${issue.file}:${issue.line} - ${issue.message}`);
          });
      }
      if (report.recommendations.length > 0) {
        this.log('\n💡 Recommendations:');
        report.recommendations.forEach(rec => {
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
          this.log(`    Action: ${rec.action}`);
        });
      }
    } catch (error) {
      this.log(`❌ Error running security scanner: ${error.message}`);
      process.exit(1);
    }
  }
}
// Run the security scanner
const scanner = new SecurityScanner();
scanner.run().catch(error => {
  process.exit(1);
});
#!/usr/bin/env node/usr/bin/env nodeconst { execSync } = require("child_process");"const fs = require("fs");"const path = require("path");class SecurityScanner { constructor() {" this.processName = process.env.PM2_PROCESS_NAME | "security-scanner";" this.scanDependencies = process.env.SCAN_DEPENDENCIES === "true";" this.scanCode = process.env.SCAN_CODE === "true";" this.scanConfigs = process.env.SCAN_CONFIGS === "true";" this.alertOnCritical = process.env.ALERT_ON_CRITICAL === "true";" this.logFile = path.join(__dirname, "././logs/pm2/security-scanner.log"); this.ensureLogDir(); } ensureLogDir() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir, { recursive: true }); } } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`; console.log(logMessage.trim()); fs.appendFileSync(this.logFile, logMessage); } async scanDependencies() { if (!this.scanDependencies) {" this.log("Dependency scanning disabled"); return { scanned: false }; } try {" this.log("Scanning dependencies for vulnerabilities."); / Run npm audit" const auditResult = execSync("npm audit --json", { " encoding: "utf8"," stdio: "pipe", cwd: process.cwd() }); const auditData = JSON.parse(auditResult); const vulnerabilities = auditData.vulnerabilities | {};" const criticalCount = Object.values(vulnerabilities).filter(v => v.severity === "critical").length;" const highCount = Object.values(vulnerabilities).filter(v => v.severity === "high").length;" const moderateCount = Object.values(vulnerabilities).filter(v => v.severity === "moderate").length;` this.log(`Found ${criticalCount} critical, ${highCount} high, ${moderateCount} moderate vulnerabilities`); if (criticalCount > 0 && this.alertOnCritical) {" this.log("ALERT: Critical vulnerabilities found!"); } return { scanned: true, critical: criticalCount, high: highCount, moderate: moderateCount, total: Object.keys(vulnerabilities).length, vulnerabilities }; } catch (error) {` this.log(`Dependency scan failed: ${error.message}`); return { scanned: false, error: error.message }; } } async scanCode() { if (!this.scanCode) {" this.log("Code scanning disabled"); return { scanned: false }; } try {" this.log("Scanning code for security issues."); / Check for common security issues const securityIssues = []; / Check for hardcoded secrets const secretPatterns = [" /password\s*=\s*[""][^""]+[""]/gi,"" /api[_-]?key\s*=\s*[""][^""]+[""]/gi,"" /secret\s*=\s*[""][^""]+[""]/gi,"" /token\s*=\s*[""][^""]+[""]/gi ]; const sourceFiles = this.getSourceFiles(); for (const file of sourceFiles) { try {" const content = fs.readFileSync(file, "utf8"); for (const pattern of secretPatterns) { const matches = content.match(pattern); if (matches) { securityIssues.push({ file," type: "hardcoded_secret", matches: matches.length," severity: "high" }); } } } catch (err) {" / Skip files that can"t be read } }` this.log(`Found ${securityIssues.length} potential security issues in code`); return { scanned: true, issues: securityIssues, totalIssues: securityIssues.length }; } catch (error) {` this.log(`Code scan failed: ${error.message}`); return { scanned: false, error: error.message }; } } async scanConfigs() { if (!this.scanConfigs) {" this.log("Config scanning disabled"); return { scanned: false }; } try {" this.log("Scanning configuration files."); const configFiles = [" "package.json"," "next.config.js"," "vite.config.js"," "webpack.config.js", ].filter(file => fs.existsSync(file)); const configIssues = []; for (const file of configFiles) { try {" const content = fs.readFileSync(file, "utf8"); / Check for unsafe configurations" if (content.includes("eval(") | content.includes("Function(")) { configIssues.push({ file," type: "unsafe_eval"," severity: "high" }); }" if (content.includes("process.env") && !content.includes("process.env.NODE_ENV")) { configIssues.push({ file," type: "env_exposure"," severity: "medium" }); } } catch (err) {" / Skip files that can"t be read } }` this.log(`Found ${configIssues.length} configuration security issues`); return { scanned: true, issues: configIssues, totalIssues: configIssues.length }; } catch (error) {` this.log(`Config scan failed: ${error.message}`); return { scanned: false, error: error.message }; } } getSourceFiles() {" const extensions = [".js", ".jsx", ".ts", ".tsx", ".vue", ".svelte"]; const sourceFiles = []; const scanDir = (dir) => { try { const files = fs.readdirSync(dir); for (const file of files) { const filePath = path.join(dir, file); const stat = fs.statSync(filePath); " if (stat.isDirectory() && !file.startsWith(".") && file !== "node_modules") { scanDir(filePath); } else if (stat.isFile() && extensions.some(ext => file.endsWith(ext))) { sourceFiles.push(filePath); } } } catch (err) {" / Skip directories that can"t be read } }; scanDir(process.cwd()); return sourceFiles; } async generateReport() { const report = { timestamp: new Date().toISOString(), processName: this.processName, dependencyScan: await this.scanDependencies(), codeScan: await this.scanCode(), configScan: await this.scanConfigs(), environment: { NODE_ENV: process.env.NODE_ENV, scanDependencies: this.scanDependencies, scanCode: this.scanCode, scanConfigs: this.scanConfigs, alertOnCritical: this.alertOnCritical } };" const reportFile = path.join(__dirname, "././logs/pm2/security-scanner-report.json"); fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));` this.log(`Security report generated: ${reportFile}`); return report; } async start() {` this.log(`${this.processName} started`); try { const report = await this.generateReport(); const totalIssues = (report.dependencyScan.total | 0) (report.codeScan.totalIssues | 0) (report.configScan.totalIssues | 0); if (totalIssues === 0) {" this.log("Security scan completed - no issues found"); } else {` this.log(`Security scan completed - found ${totalIssues} issues`); if (report.dependencyScan.critical > 0 && this.alertOnCritical) {" this.log("ALERT: Critical vulnerabilities detected!"); } } } catch (error) {` this.log(`Security scan error: ${error.message}`); } }}/ Start the serviceif (require.main === module) { const securityScanner = new SecurityScanner(); securityScanner.start().catch(console.error);}module.exports = SecurityScanner;'"`'"`
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/security-scanner.cjs

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/security-scanner.cjs
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




<<<<<<< HEAD
main

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
#!/usr/bin/env node;
=======



>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
/**
 * PM2 Security Scanner Service;
 * Scans for security vulnerabilities and issues;
 */
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/security-scanner.cjs
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/security-scanner.cjs

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD

<<<<<<< HEAD:backup-problematic-files/scripts/pm2/security-scanner.cjs
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/security-scanner.cjs
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
class SecurityScanner {}
  constructor() {}
    this.processName = process.env.PM2_PROCESS_NAME ||security-scanner';
    this.scanDependencies = process.env.SCAN_DEPENDENCIES ===true;
    this.scanCode = process.env.SCAN_CODE ===true;
    this.scanConfigs = process.env.SCAN_CONFIGS ===true;
    this.alertOnCritical = process.env.ALERT_ON_CRITICAL ===true;
    this.logFile = path.join(__dirname,../../logs/pm2/security-scanner.log');
    this.ensureLogDir();
  };
  ensureLogDir() {}
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {}
      fs.mkdirSync(logDir, { recursive: true })
});
  log(message) {}
    const timestamp = new Date().toISOString();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/security-scanner.cjs

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;
    );
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/security-scanner.cjs
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

<<<<<<< HEAD
    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;
    );
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




<<<<<<< HEAD
main
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;`
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  async scanDependencies() {}
    if (!this.scanDependencies) {}
      this.log('Dependency scanning disabled');
      return { scanned: false };
    try {}
<<<<<<< HEAD
      this.log('Scanning dependencies for vulnerabilities...');
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/security-scanner.cjs

<<<<<<< HEAD
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      
      
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/security-scanner.cjs
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      // Run npm audit;
      const auditResult = execSync('npm audit --json, { })
        encoding: utf8,
        stdio: pipe,
        cwd: process.cwd();
      }

<<<<<<< HEAD:backup-problematic-files/scripts/pm2/security-scanner.cjs
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/security-scanner.cjs
      const auditData = JSON.parse(auditResult);
      const vulnerabilities = auditData.vulnerabilities || {};
      const criticalCount = Object.values(vulnerabilities).filter(v => v.severity === 'critical').length;
      const highCount = Object.values(vulnerabilities).filter(v => v.severity === 'high').length;
<<<<<<< HEAD
      const moderateCount = Object.values(vulnerabilities).filter(v => v.severity === 'moderate').length;
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/security-scanner.cjs
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

      this.log(`Found ${criticalCount} critical, ${highCount} high, ${moderateCount} moderate vulnerabilities`);

=======
      const moderateCount = Object.values(vulnerabilities).filter(v => v.severity === 'moderate').length;`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

      this.log(`Found ${criticalCount} critical, ${highCount} high, ${moderateCount} moderate vulnerabilities`);
`;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/security-scanner.cjs
      if (criticalCount > 0 && this.alertOnCritical) {}

      return {}
        scanned: true,
        critical: criticalCount,
        high: highCount,
        moderate: moderateCount,
        total: Object.keys(vulnerabilities).length,
        vulnerabilities;

      return { scanned: false, error: error.message };
  async scanCode() {}
    if (!this.scanCode) {}
      this.log('Code scanning disabled');
<<<<<<< HEAD
      return { scanned: false };
    };
    try {}
      this.log('Scanning code for security issues...');
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/security-scanner.cjs

      // Check for common security issues;
      const securityIssues = [];

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/security-scanner.cjs
      
      // Check for common security issues;
      const securityIssues = [];
      
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/security-scanner.cjs
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/security-scanner.cjs
=======

      // Check for common security issues;
      const securityIssues = [];
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      // Check for hardcoded secrets;
      const secretPatterns = []

<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/security-scanner.cjs
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
      ];
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/security-scanner.cjs
      const sourceFiles = this.getSourceFiles();
      for (const file of sourceFiles) {}
        try {}"

          for (const pattern of secretPatterns) {}
            const matches = content.match(pattern);
            if (matches) {}
              securityIssues.push({})
                file,
                type: hardcoded_secret,
                matches: matches.length,

        } catch (err) {}
          // Skip files that can't be read;
      };`;
      this.log(`Found ${securityIssues.length} potential security issues in code`);

<<<<<<< HEAD:backup-problematic-files/scripts/pm2/security-scanner.cjs
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/security-scanner.cjs
      return {}
        scanned: true,
        issues: securityIssues,
        totalIssues: securityIssues.length;
      };
    } catch (error) {}
      this.log(`Code scan failed: ${error.message});
      return { scanned: false, error: error.message };
    };
  };
  async scanConfigs() {}
    if (!this.scanConfigs) {}
      this.log('Config scanning disabled');
      return { scanned: false };
    };
    try {}
<<<<<<< HEAD
      this.log('Scanning configuration files...');
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/security-scanner.cjs

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      
      
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/security-scanner.cjs
      const configFiles = []
        'package.json',
        'next.config.js',
        'vite.config.js',
        'webpack.config.js',
      ].filter(file => fs.existsSync(file));
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/security-scanner.cjs

<<<<<<< HEAD
      const configIssues = [];
      for (const file of configFiles) {}
        try {}
          const content = fs.readFileSync(file, 'utf8');
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/security-scanner.cjs
=======


      const configFiles = []
        'package.json,next.config.js,vite.config.js,webpack.config.js,].filter(file => fs.existsSync(file));
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

      const configIssues = [];

      for (const file of configFiles) {}
<<<<<<< HEAD
        try {}
          const content = fs.readFileSync(file, 'utf8');
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/security-scanner.cjs

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
          
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/security-scanner.cjs
          // Check for unsafe configurations;
          if (content.includes('eval(') || content.includes('Function(')) {}
            configIssues.push({})
              file,
              type: 'unsafe_eval',
              severity: 'high'
            }
});
          };
          if (content.includes('process.env') && !content.includes('process.env.NODE_ENV')) {}
            configIssues.push({})
              file,
              type: 'env_exposure',
              severity: 'medium'
            }
});
          };
        } catch (err) {}
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          // Skip files that can't be read;
      this.log(`Found ${configIssues.length} configuration security issues`);

<<<<<<< HEAD:backup-problematic-files/scripts/pm2/security-scanner.cjs
<<<<<<< HEAD
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/security-scanner.cjs
      return {}
        scanned: true,
        issues: configIssues,
        totalIssues: configIssues.length;
      };
    } catch (error) {}
      this.log(`Config scan failed: ${error.message});
      return { scanned: false, error: error.message };
    };
  };

  getSourceFiles() {}
    const extensions = [.js,.jsx,.ts,.tsx,.vue,.svelte];
    const sourceFiles = [];

<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/security-scanner.cjs
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/security-scanner.cjs
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    const scanDir = (dir) => {}
        const files = fs.readdirSync(dir);
        for (const file of files) {}
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/security-scanner.cjs

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
          
          
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/security-scanner.cjs
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {}

            scanDir(filePath);
          } else if (stat.isFile() && extensions.some(ext => file.endsWith(ext))) {}
            sourceFiles.push(filePath);
        // Skip directories that can't be read;


<<<<<<< HEAD:backup-problematic-files/scripts/pm2/security-scanner.cjs
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/security-scanner.cjs
    scanDir(process.cwd());
    return sourceFiles;
  async generateReport() {}
    const report = {}
      timestamp: new Date().toISOString(),
      processName: this.processName,
      dependencyScan: await this.scanDependencies(),
      codeScan: await this.scanCode(),
      configScan: await this.scanConfigs(),
      environment: {}
        NODE_ENV: process.env.NODE_ENV,
        scanDependencies: this.scanDependencies,
        scanCode: this.scanCode,
        scanConfigs: this.scanConfigs,
        alertOnCritical: this.alertOnCritical;
<<<<<<< HEAD
      };
    };
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/security-scanner.cjs

    const reportFile = path.join(__dirname, '../../logs/pm2/security-scanner-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/security-scanner.cjs

    const reportFile = path.join(__dirname, '../../logs/pm2/security-scanner-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/security-scanner.cjs
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/security-scanner.cjs
    this.log(`Security report generated: ${reportFile}`);
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    return report;
  async start() {}`;
    this.log(`${this.processName} started`);
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/security-scanner.cjs

<<<<<<< HEAD
    try {}
      const report = await this.generateReport();
      const totalIssues = (report.dependencyScan.total || 0) +
                         (report.codeScan.totalIssues || 0) +
                         (report.configScan.totalIssues || 0);
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/security-scanner.cjs
    
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    try {}
      const report = await this.generateReport();

      const totalIssues = (report.dependencyScan.total || 0) +
                         (report.codeScan.totalIssues || 0) +
                         (report.configScan.totalIssues || 0);
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/security-scanner.cjs

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/security-scanner.cjs
=======
      const report = await this.generateReport();
      const totalIssues = (report.dependencyScan.total || 0) + 
                         (report.codeScan.totalIssues || 0) + 
                         (report.configScan.totalIssues || 0);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      if (totalIssues === 0) {}
        this.log('Security scan completed - no issues found');
      } else {}`;
        this.log(`Security scan completed - found ${totalIssues} issues`);
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/security-scanner.cjs

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
        
        
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/security-scanner.cjs
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        if (report.dependencyScan.critical > 0 && this.alertOnCritical) {}

// Start the service;
if (require.main === module) {}
  const securityScanner = new SecurityScanner();
  securityScanner.start().catch(console.error);
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/scripts/pm2/security-scanner.cjs
<<<<<<< HEAD
=======
};
<<<<<<< HEAD
module.exports = SecurityScanner;module.exports = SecurityScanner;
module.exports = SecurityScanner;module.exports = SecurityScanner;

module.exports = SecurityScanner;
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

module.exports = SecurityScanner;


<<<<<<< HEAD
module.exports = SecurityScanner;module.exports = SecurityScanner;
module.exports = SecurityScanner;module.exports = SecurityScanner;
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/pm2/security-scanner.cjs
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

main

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
