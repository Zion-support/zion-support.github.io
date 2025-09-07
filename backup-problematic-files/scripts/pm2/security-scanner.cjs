<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
#!/usr/bin/env node
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class SecurityScanner {
  // TODO: Implement
}
  constructor() {
    this.projectRoot = process.cwd();

    this.startTime = Date.now();
  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    try {
  // TODO: Implement
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {

  async scanDependencies() {
  // TODO: Implement

      return { vulnerabilities: { info: 0, low: 0, moderate: 0, high: 0, critical: 0 } };
  async scanCode() {
  // TODO: Implement

        const fileIssues = this.analyzeFileForSecurityIssues(file, content);
        issues.push(...fileIssues);
      return issues;

      return [];
  getCodeFiles() {
    const files = [];

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
        } else if (stat.isFile()) {
          const ext = path.extname(fullPath);
          if (extensions.includes(ext)) {
            files.push(fullPath);
    };
    walkDir(this.projectRoot);
    return files;
  analyzeFileForSecurityIssues(filePath, content) {
<<<<<<< HEAD
=======

>>>>>>> origin/chore/fix-lint-and-merge
    const lines = content.split('\n');
    lines.forEach((line, index) => {
      const lineNum = index + 1;
      // Check for hardcoded secrets;

  async scanConfigs() {
  // TODO: Implement

      ];
      for (const configFile of configFiles) {
        const filePath = path.join(this.projectRoot, configFile);
        if (fs.existsSync(filePath)) {
<<<<<<< HEAD
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
    lines.forEach((line, index) => {
      // Check for exposed ports
=======

      // Check for exposed ports;
>>>>>>> origin/chore/fix-lint-and-merge
      if (line.match(/port\s*[:=]\s*(\d+)/)) {
        const port = parseInt(line.match(/port\s*[:=]\s*(\d+)/)[1]);
        if (port < 1024 && port !== 80 && port !== 443) {

  generateReport(dependencies, codeIssues, configIssues) {
    const totalVulnerabilities = dependencies.vulnerabilities ? 
      Object.values(dependencies.vulnerabilities).reduce((sum, count) => sum + count, 0) : 0;
    const totalCodeIssues = codeIssues.length;
    const totalConfigIssues = configIssues.length;
    const issuesBySeverity = {
      low: 0,
      medium: 0,
      high: 0,
      critical: 0;
    [...codeIssues, ...configIssues].forEach(issue => {
      issuesBySeverity[issue.severity]++;)
    const report = {
      timestamp: new Date().toISOString(),
      summary: {,
  dependencyVulnerabilities: totalVulnerabilities,
        codeIssues: totalCodeIssues,
        configIssues: totalConfigIssues,
        totalIssues: totalCodeIssues + totalConfigIssues,
        issuesBySeverity,
        criticalIssues: issuesBySeverity.critical + issuesBySeverity.high;
      },
      dependencies,
      codeIssues,
      configIssues,
      recommendations: this.generateRecommendations(totalVulnerabilities, issuesBySeverity)
    return report;
  generateRecommendations(vulnerabilities, issuesBySeverity) {
    const recommendations = [];
    if (vulnerabilities > 0) {
      recommendations.push({

    return recommendations;
  async saveReport(report) {
  // TODO: Implement
      const reportDir = path.dirname(this.reportFile);
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });

      // Create logs directory if it doesn't exist;
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      // Scan dependencies;
      const dependencies = await this.scanDependencies();
      // Scan code;
      const codeIssues = await this.scanCode();
      // Scan configs;
      const configIssues = await this.scanConfigs();
      // Generate report;
      const report = this.generateReport(dependencies, codeIssues, configIssues);
      // Save report;
      await this.saveReport(report);
      const duration = Date.now() - this.startTime;
      // Log summary;

      process.exit(1);
// Run the security scanner;
const scanner = new SecurityScanner();
<<<<<<< HEAD
scanner.run().catch(error => {)

/**
 * PM2 Security Scanner Service;
 * Scans for security vulnerabilities and issues;
 */"

<<<<<<< HEAD

=======
scanner.run().catch(error => {
  process.exit(1);
});
#!/usr/bin/env node/usr/bin/env nodeconst { execSync } = require("child_process");"const fs = require("fs");"const path = require("path");class SecurityScanner { constructor() {" this.processName = process.env.PM2_PROCESS_NAME | "security-scanner";" this.scanDependencies = process.env.SCAN_DEPENDENCIES === "true";" this.scanCode = process.env.SCAN_CODE === "true";" this.scanConfigs = process.env.SCAN_CONFIGS === "true";" this.alertOnCritical = process.env.ALERT_ON_CRITICAL === "true";" this.logFile = path.join(__dirname, "././logs/pm2/security-scanner.log"); this.ensureLogDir(); } ensureLogDir() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir, { recursive: true }); } } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`; console.log(logMessage.trim()); fs.appendFileSync(this.logFile, logMessage); } async scanDependencies() { if (!this.scanDependencies) {" this.log("Dependency scanning disabled"); return { scanned: false }; } try {" this.log("Scanning dependencies for vulnerabilities."); / Run npm audit" const auditResult = execSync("npm audit --json", { " encoding: "utf8"," stdio: "pipe", cwd: process.cwd() }); const auditData = JSON.parse(auditResult); const vulnerabilities = auditData.vulnerabilities | {};" const criticalCount = Object.values(vulnerabilities).filter(v => v.severity === "critical").length;" const highCount = Object.values(vulnerabilities).filter(v => v.severity === "high").length;" const moderateCount = Object.values(vulnerabilities).filter(v => v.severity === "moderate").length;` this.log(`Found ${criticalCount} critical, ${highCount} high, ${moderateCount} moderate vulnerabilities`); if (criticalCount > 0 && this.alertOnCritical) {" this.log("ALERT: Critical vulnerabilities found!"); } return { scanned: true, critical: criticalCount, high: highCount, moderate: moderateCount, total: Object.keys(vulnerabilities).length, vulnerabilities }; } catch (error) {` this.log(`Dependency scan failed: ${error.message}`); return { scanned: false, error: error.message }; } } async scanCode() { if (!this.scanCode) {" this.log("Code scanning disabled"); return { scanned: false }; } try {" this.log("Scanning code for security issues."); / Check for common security issues const securityIssues = []; / Check for hardcoded secrets const secretPatterns = [" /password\s*=\s*[""][^""]+[""]/gi,"" /api[_-]?key\s*=\s*[""][^""]+[""]/gi,"" /secret\s*=\s*[""][^""]+[""]/gi,"" /token\s*=\s*[""][^""]+[""]/gi ]; const sourceFiles = this.getSourceFiles(); for (const file of sourceFiles) { try {" const content = fs.readFileSync(file, "utf8"); for (const pattern of secretPatterns) { const matches = content.match(pattern); if (matches) { securityIssues.push({ file," type: "hardcoded_secret", matches: matches.length," severity: "high" }); } } } catch (err) {" / Skip files that can"t be read } }` this.log(`Found ${securityIssues.length} potential security issues in code`); return { scanned: true, issues: securityIssues, totalIssues: securityIssues.length }; } catch (error) {` this.log(`Code scan failed: ${error.message}`); return { scanned: false, error: error.message }; } } async scanConfigs() { if (!this.scanConfigs) {" this.log("Config scanning disabled"); return { scanned: false }; } try {" this.log("Scanning configuration files."); const configFiles = [" "package.json"," "next.config.js"," "vite.config.js"," "webpack.config.js", ].filter(file => fs.existsSync(file)); const configIssues = []; for (const file of configFiles) { try {" const content = fs.readFileSync(file, "utf8"); / Check for unsafe configurations" if (content.includes("eval(") | content.includes("Function(")) { configIssues.push({ file," type: "unsafe_eval"," severity: "high" }); }" if (content.includes("process.env") && !content.includes("process.env.NODE_ENV")) { configIssues.push({ file," type: "env_exposure"," severity: "medium" }); } } catch (err) {" / Skip files that can"t be read } }` this.log(`Found ${configIssues.length} configuration security issues`); return { scanned: true, issues: configIssues, totalIssues: configIssues.length }; } catch (error) {` this.log(`Config scan failed: ${error.message}`); return { scanned: false, error: error.message }; } } getSourceFiles() {" const extensions = [".js", ".jsx", ".ts", ".tsx", ".vue", ".svelte"]; const sourceFiles = []; const scanDir = (dir) => { try { const files = fs.readdirSync(dir); for (const file of files) { const filePath = path.join(dir, file); const stat = fs.statSync(filePath); " if (stat.isDirectory() && !file.startsWith(".") && file !== "node_modules") { scanDir(filePath); } else if (stat.isFile() && extensions.some(ext => file.endsWith(ext))) { sourceFiles.push(filePath); } } } catch (err) {" / Skip directories that can"t be read } }; scanDir(process.cwd()); return sourceFiles; } async generateReport() { const report = { timestamp: new Date().toISOString(), processName: this.processName, dependencyScan: await this.scanDependencies(), codeScan: await this.scanCode(), configScan: await this.scanConfigs(), environment: { NODE_ENV: process.env.NODE_ENV, scanDependencies: this.scanDependencies, scanCode: this.scanCode, scanConfigs: this.scanConfigs, alertOnCritical: this.alertOnCritical } };" const reportFile = path.join(__dirname, "././logs/pm2/security-scanner-report.json"); fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));` this.log(`Security report generated: ${reportFile}`); return report; } async start() {` this.log(`${this.processName} started`); try { const report = await this.generateReport(); const totalIssues = (report.dependencyScan.total | 0) (report.codeScan.totalIssues | 0) (report.configScan.totalIssues | 0); if (totalIssues === 0) {" this.log("Security scan completed - no issues found"); } else {` this.log(`Security scan completed - found ${totalIssues} issues`); if (report.dependencyScan.critical > 0 && this.alertOnCritical) {" this.log("ALERT: Critical vulnerabilities detected!"); } } } catch (error) {` this.log(`Security scan error: ${error.message}`); } }}/ Start the serviceif (require.main === module) { const securityScanner = new SecurityScanner(); securityScanner.start().catch(console.error);}module.exports = SecurityScanner;'"`'"`
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
<<<<<<< HEAD
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
#!/usr/bin/env node;
/**
 * PM2 Security Scanner Service;
 * Scans for security vulnerabilities and issues;
 */
<<<<<<< HEAD
<<<<<<< HEAD
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
class SecurityScanner {}
  constructor() {}
    this.processName = process.env.PM2_PROCESS_NAME || 'security-scanner';
    this.scanDependencies = process.env.SCAN_DEPENDENCIES === 'true';
    this.scanCode = process.env.SCAN_CODE === 'true';
    this.scanConfigs = process.env.SCAN_CONFIGS === 'true';
    this.alertOnCritical = process.env.ALERT_ON_CRITICAL === 'true';
    this.logFile = path.join(__dirname, '../../logs/pm2/security-scanner.log');
=======
>>>>>>> origin/chore/fix-lint-and-merge
    this.ensureLogDir();
  ensureLogDir() {}
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {}
      fs.mkdirSync(logDir, { recursive: true })
  log(message) {}
<<<<<<< HEAD
=======
    const timestamp = new Date().toISOString();
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
<<<<<<< HEAD

=======
    const timestamp = new Date().toISOString();`;
    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;
<<<<<<< HEAD
    );`;
>>>>>>> origin/chore/fix-lint-and-merge
=======
    );
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
<<<<<<< HEAD
=======
    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;
    );
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;`
    console.log(logMessage.trim());
  async scanDependencies() {}
    if (!this.scanDependencies) {}
      this.log('Dependency scanning disabled');
      return { scanned: false };
<<<<<<< HEAD

        cwd: process.cwd();
=======
    };
    try {}
      this.log('Scanning dependencies for vulnerabilities...');
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
      
      
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
      
      
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD
      
      
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
      
      
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
=======
      
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Run npm audit;
      const auditResult = execSync('npm audit --json', { })
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: process.cwd();
      }
});
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339




<<<<<<< HEAD
      const auditData = JSON.parse(auditResult);
      const vulnerabilities = auditData.vulnerabilities || {};
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const auditData = JSON.parse(auditResult);
      const vulnerabilities = auditData.vulnerabilities || {};
      const criticalCount = Object.values(vulnerabilities).filter(v => v.severity === 'critical').length;
      const highCount = Object.values(vulnerabilities).filter(v => v.severity === 'high').length;
      const moderateCount = Object.values(vulnerabilities).filter(v => v.severity === 'moderate').length;
<<<<<<< HEAD
<<<<<<< HEAD
      this.log(`Found ${criticalCount} critical, ${highCount} high, ${moderateCount} moderate vulnerabilities`);
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      this.log(`Found ${criticalCount} critical, ${highCount} high, ${moderateCount} moderate vulnerabilities`);
`;


<<<<<<< HEAD
=======
      this.log(`Found ${criticalCount} critical, ${highCount} high, ${moderateCount} moderate vulnerabilities`);

=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main

      this.log(`Found ${criticalCount} critical, ${highCount} high, ${moderateCount} moderate vulnerabilities`);


      this.log(`Found ${criticalCount} critical, ${highCount} high, ${moderateCount} moderate vulnerabilities`);

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
      this.log(`Found ${criticalCount} critical, ${highCount} high, ${moderateCount} moderate vulnerabilities`);
=======

      this.log(`Found ${criticalCount} critical, ${highCount} high, ${moderateCount} moderate vulnerabilities`);

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      if (criticalCount > 0 && this.alertOnCritical) {}
        this.log('ALERT: Critical vulnerabilities found!');
      };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

=======
      return { scanned: false };
    };
    try {}
      this.log('Scanning code for security issues...');
<<<<<<< HEAD
<<<<<<< HEAD
      // Check for common security issues;
      const securityIssues = [];
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      // Check for common security issues;
      const securityIssues = [];
      // Check for common security issues;
      // Check for common security issues;
<<<<<<< HEAD
      // Check for common security issues;
      // Check for hardcoded secrets;
      const secretPatterns = []
=======
      const securityIssues = [];
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Check for hardcoded secrets;
      const secretPatterns = []
        /password\s*=\s*['"][^'"]+['"]/gi,
        /api[_-]?key\s*=\s*['"][^'"]+['"]/gi,
        /secret\s*=\s*['"][^'"]+['"]/gi,
        /token\s*=\s*['"][^'"]+['"]/gi;
      ];
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339





<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      const sourceFiles = this.getSourceFiles();
      for (const file of sourceFiles) {}
<<<<<<< HEAD
        try {}
=======
        try {}"

>>>>>>> origin/chore/fix-lint-and-merge
          for (const pattern of secretPatterns) {}
            const matches = content.match(pattern);
            if (matches) {}
              securityIssues.push({})
                file,

      this.log(`Found ${securityIssues.length} potential security issues in code`);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339




<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      return {}
        scanned: true,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        issues: securityIssues,
        totalIssues: securityIssues.length;
<<<<<<< HEAD
      };
    } catch (error) {}
      this.log(`Code scan failed: ${error.message}`);
      return { scanned: false, error: error.message };
    };
  };
  async scanConfigs() {}
    if (!this.scanConfigs) {}
      this.log('Config scanning disabled');
      return { scanned: false };
    };
    try {}
      this.log('Scanning configuration files...');
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
      
      
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
      
      
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD
      
      
<<<<<<< HEAD
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
      
      
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
=======
      
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      const configFiles = []
        'package.json',
        'next.config.js',
        'vite.config.js',
        'webpack.config.js',
      ].filter(file => fs.existsSync(file));
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const configIssues = [];
      for (const file of configFiles) {}
        try {}
          const content = fs.readFileSync(file, 'utf8');
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      const configIssues = [];

      for (const file of configFiles) {}
        try {}
          
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      const configIssues = [];
      for (const file of configFiles) {}
        try {}
          const content = fs.readFileSync(file, 'utf8');
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
          // Skip files that can't be read;
        };
      };
=======
>>>>>>> origin/chore/fix-lint-and-merge
      this.log(`Found ${configIssues.length} configuration security issues`);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339




<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      return {}
        scanned: true,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        issues: configIssues,
        totalIssues: configIssues.length;

    const sourceFiles = [];
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339




<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    const scanDir = (dir) => {}
        const files = fs.readdirSync(dir);
        for (const file of files) {}
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
          
          
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
          
          
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD
          
          
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
          
          
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
=======
          
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {}
            scanDir(filePath);
          } else if (stat.isFile() && extensions.some(ext => file.endsWith(ext))) {}
            sourceFiles.push(filePath);
          };
        };
      } catch (err) {}
        // Skip directories that can't be read;
      };
    };
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339





<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    scanDir(process.cwd());
    return sourceFiles;
  async generateReport() {}
    const report = {}
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

    this.log(`${this.processName} started`);
=======
      };
    };
<<<<<<< HEAD
<<<<<<< HEAD
    const reportFile = path.join(__dirname, '../../logs/pm2/security-scanner-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
    const reportFile = path.join(__dirname, '../../logs/pm2/security-scanner-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

    const reportFile = path.join(__dirname, '../../logs/pm2/security-scanner-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    const reportFile = path.join(__dirname, '../../logs/pm2/security-scanner-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    this.log(`Security report generated: ${reportFile}`);
    return report;
  };
  async start() {}
    this.log(`${this.processName} started`);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    try {}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      const report = await this.generateReport();
      const totalIssues = (report.dependencyScan.total || 0) + 
                         (report.codeScan.totalIssues || 0) + 
                         (report.configScan.totalIssues || 0);
<<<<<<< HEAD

        this.log(`Security scan completed - found ${totalIssues} issues`);
=======
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
    
    try {}
      const report = await this.generateReport();
      
      const totalIssues = (report.dependencyScan.total || 0) + 
                         (report.codeScan.totalIssues || 0) + 
                         (report.configScan.totalIssues || 0);
      
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    try {}
      const report = await this.generateReport();
      const totalIssues = (report.dependencyScan.total || 0) + 
                         (report.codeScan.totalIssues || 0) + 
                         (report.configScan.totalIssues || 0);
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      if (totalIssues === 0) {}
        this.log('Security scan completed - no issues found');
      } else {}
        this.log(`Security scan completed - found ${totalIssues} issues`);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
        
        
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
        
        
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD
        
        
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
        
        
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
=======
        
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        if (report.dependencyScan.critical > 0 && this.alertOnCritical) {}

// Start the service;
if (require.main === module) {}
  const securityScanner = new SecurityScanner();
  securityScanner.start().catch(console.error);
<<<<<<< HEAD
};
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
module.exports = SecurityScanner;module.exports = SecurityScanner;
module.exports = SecurityScanner;
=======
<<<<<<< HEAD
};
=======
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
module.exports = SecurityScanner;module.exports = SecurityScanner;
module.exports = SecurityScanner;module.exports = SecurityScanner;
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
<<<<<<< HEAD
module.exports = SecurityScanner;
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
<<<<<<< HEAD
module.exports = SecurityScanner;module.exports = SecurityScanner;
=======
module.exports = SecurityScanner;
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
<<<<<<< HEAD
module.exports = SecurityScanner;module.exports = SecurityScanner;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
module.exports = SecurityScanner;
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
module.exports = SecurityScanner;module.exports = SecurityScanner;
module.exports = SecurityScanner;module.exports = SecurityScanner;
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
