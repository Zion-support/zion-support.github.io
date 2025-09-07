<<<<<<< HEAD
#!/usr/bin/env node;
=======
#!/usr/bin/env node
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class SecurityScanner {
  // TODO: Implement
}
  constructor() {
    this.projectRoot = process.cwd();
<<<<<<< HEAD
    this.logFile = path.join(this.projectRoot, 'logs/pm2/security-scanner.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/security-report.json');
=======
    this.logFile = path.join(this.projectRoot,logs/pm2/security-scanner.log');
    this.reportFile = path.join(this.projectRoot,logs/pm2/security-report.json');
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    this.startTime = Date.now();
  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    try {
  // TODO: Implement
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
<<<<<<< HEAD
      console.error('Error writing to log file:', error.message);
=======
      console.error('Error writing to log file: , error.message);
    }
  }
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  async scanDependencies() {
  // TODO: Implement
<<<<<<< HEAD
      this.log('🔒 Scanning dependencies for vulnerabilities...');
      const auditResult = execSync('npm audit --json', {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8)
      });
      const audit = JSON.parse(auditResult);
      return audit;
    } catch (error) {`;
      this.log(`Dependency scan failed: ${error.message}`);
=======
}
      this.log('🔒 Scanning dependencies for vulnerabilities...);
      const auditResult = execSync('npm audit --json, {
        cwd: this.projectRoot,
        stdio: pipe,
        encoding: utf8)
      });
      const audit = JSON.parse(auditResult);
      return audit;
    } catch (error) {
      this.log(`Dependency scan failed: ${error.message});
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      return { vulnerabilities: { info: 0, low: 0, moderate: 0, high: 0, critical: 0 } };
  async scanCode() {
  // TODO: Implement
<<<<<<< HEAD
      this.log('🔍 Scanning code for security issues...');
      const issues = [];
      const files = this.getCodeFiles();
      for (const file of files) {
        const content = fs.readFileSync(file, 'utf8');
=======
}
      this.log('🔍 Scanning code for security issues...);
      const issues = [];
      const files = this.getCodeFiles();
      for (const file of files) {
        const content = fs.readFileSync(file,utf8);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
        const fileIssues = this.analyzeFileForSecurityIssues(file, content);
        issues.push(...fileIssues);
      return issues;
<<<<<<< HEAD
      this.log(`Code scan failed: ${error.message}`);
=======
    } catch (error) {
      this.log(`Code scan failed: ${error.message});
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      return [];
  getCodeFiles() {
    const files = [];
<<<<<<< HEAD
    const extensions = ['.js', '.jsx', '.ts', '.tsx', '.json'];
=======
    const extensions = [.js,.jsx,.ts,.tsx,.json];
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
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
    const issues = [];
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    const lines = content.split('\n');
    lines.forEach((line, index) => {
      const lineNum = index + 1;
      // Check for hardcoded secrets;
<<<<<<< HEAD
      if (line.match(/password\s*[:=]\s*['"][^'"]+['"]/i)) {"
        issues.push({
          file: filePath,
          line: lineNum,"
          type: 'hardcoded-password',
          severity: 'high',
          message: 'Hardcoded password detected)
      // Check for API keys;
      if (line.match(/api[_-]?key\s*[:=]\s*['"][^'"]+['"]/i)) {"
          type: 'hardcoded-api-key',
          message: 'Hardcoded API key detected)
      // Check for eval usage;
      if (line.match(/\beval\s*\(/)) {
          line: lineNum,
          type: 'eval-usage',
          severity: 'high',')
          message: 'eval() usage detected - potential security risk
      // Check for innerHTML usage;
      if (line.match(/\.innerHTML\s*=/)) {
          type: 'innerhtml-usage',
          severity: 'medium',
          message: 'innerHTML usage detected - potential XSS risk)
      // Check for dangerous regex;
      if (line.match(/new RegExp\([^)]*\+[^)]*\)/)) {
          type: 'dangerous-regex',
          message: 'Potentially dangerous regex with string concatenation)
      // Check for console.log with sensitive data;
      if (line.match(/console\.(log|warn|error)\s*\([^)]*(password|token|key|secret)[^)]*\)/i)) {
          type: 'sensitive-console-log',
          message: 'Console log with potentially sensitive data)
=======
      if (line.match(/password\s*[:=]\s*["][^'"]+["]/i)) {"
        issues.push({
          file: filePath,
          line: lineNum,"
          type: hardcoded-password,
          severity: high,
          message: Hardcoded password detected)
        });
      }
      // Check for API keys;
      if (line.match(/api[_-]?key\s*[:=]\s*["][^'"]+["]/i)) {"
        issues.push({
          file: filePath,
          line: lineNum,"
          type: hardcoded-api-key,
          severity: high,
          message: Hardcoded API key detected)
        });
      }
      // Check for eval usage;
      if (line.match(/\beval\s*\(/)) {
        issues.push({
          file: filePath,
          line: lineNum,
          type: eval-usage,
          severity: high,)
          message: eval() usage detected - potential security risk
        });
      }
      // Check for innerHTML usage;
      if (line.match(/\.innerHTML\s*=/)) {
        issues.push({
          file: filePath,
          line: lineNum,
          type: innerhtml-usage,
          severity: medium,
          message: innerHTML usage detected - potential XSS risk)
        });
      }
      // Check for dangerous regex;
      if (line.match(/new RegExp\([^)]*\+[^)]*\)/)) {
        issues.push({
          file: filePath,
          line: lineNum,
          type: dangerous-regex,
          severity: medium,
          message: Potentially dangerous regex with string concatenation)
        });
      }
      // Check for console.log with sensitive data;
      if (line.match(/console\.(log|warn|error)\s*\([^)]*(password|token|key|secret)[^)]*\)/i)) {
        issues.push({
          file: filePath,
          line: lineNum,
          type: sensitive-console-log,
          severity: medium,
          message: Console log with potentially sensitive data)
        });
      }
    });
    return issues;
  }
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  async scanConfigs() {
  // TODO: Implement
<<<<<<< HEAD
      this.log('⚙️  Scanning configuration files...');
      const configFiles = [
        'package.json',
        'next.config.js',
        'next.config.mjs',
        'tsconfig.json',
        'eslint.config.js',
        '.env',
        '.env.local',
        '.env.production]
=======
}
      this.log('⚙️  Scanning configuration files...);
      const configFiles = [
        'package.json,next.config.js,next.config.mjs,tsconfig.json,eslint.config.js,.env,.env.local,.env.production]
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      ];
      for (const configFile of configFiles) {
        const filePath = path.join(this.projectRoot, configFile);
        if (fs.existsSync(filePath)) {
<<<<<<< HEAD
          const content = fs.readFileSync(filePath, 'utf8');
          const fileIssues = this.analyzeConfigFile(filePath, content);
      this.log(`Config scan failed: ${error.message}`);
  analyzeConfigFile(filePath, content) {
=======
          const content = fs.readFileSync(filePath,utf8);
          const fileIssues = this.analyzeConfigFile(filePath, content);
          issues.push(...fileIssues);
        }
      }
      return issues;
    } catch (error) {
      this.log(`Config scan failed: ${error.message});
      return [];
    }
  }
  analyzeConfigFile(filePath, content) {
    const issues = [];
    const lines = content.split('\n');
    lines.forEach((line, index) => {
      const lineNum = index + 1;
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      // Check for exposed ports;
      if (line.match(/port\s*[:=]\s*(\d+)/)) {
        const port = parseInt(line.match(/port\s*[:=]\s*(\d+)/)[1]);
        if (port < 1024 && port !== 80 && port !== 443) {
<<<<<<< HEAD
            type: 'privileged-port',
            severity: 'medium',`;
            message: `Using privileged port ${port}`)
      // Check for debug mode in production;
      if (line.match(/debug\s*[:=]\s*true/i) && filePath.includes('production')) {
          type: 'debug-in-production',
          message: 'Debug mode enabled in production configuration)
      // Check for insecure CORS settings;
      if (line.match(/cors\s*[:=]\s*{\s*origin\s*:\s*['"]\*['"]/)) {"
          type: 'insecure-cors',
          message: 'CORS configured to allow all origins)
=======
          issues.push({
            file: filePath,
            line: lineNum,
            type: privileged-port,
            severity: medium,
            message: `Using privileged port ${port})
          });
        }
      }
      // Check for debug mode in production;
      if (line.match(/debug\s*[:=]\s*true/i) && filePath.includes('production')) {
        issues.push({
          file: filePath,
          line: lineNum,
          type: debug-in-production,
          severity: high,
          message: Debug mode enabled in production configuration)
        });
      }
      // Check for insecure CORS settings;
      if (line.match(/cors\s*[:=]\s*{\s*origin\s*:\s*["]\*["]/)) {"
        issues.push({
          file: filePath,
          line: lineNum,"
          type: insecure-cors,
          severity: high,
          message: CORS configured to allow all origins)
        });
      }
    });
    return issues;
  }
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
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
<<<<<<< HEAD
        type: 'dependencies',
        priority: 'high',`;
        message: `${vulnerabilities} dependency vulnerabilities found`,
        action: 'Run npm audit fix to resolve vulnerabilities)
    if (issuesBySeverity.critical > 0) {
        type: 'critical',
        priority: 'critical',`;
        message: `${issuesBySeverity.critical} critical security issues found`,
        action: 'Address critical security issues immediately)
    if (issuesBySeverity.high > 0) {
        type: 'high',
        message: `${issuesBySeverity.high} high severity issues found`,
        action: 'Address high severity security issues as soon as possible)
    if (issuesBySeverity.medium > 5) {
        type: 'medium',
        priority: 'medium',`;
        message: `${issuesBySeverity.medium} medium severity issues found`,
        action: 'Review and address medium severity issues)
=======
        type: dependencies,
        priority: high,
        message: `${vulnerabilities} dependency vulnerabilities found`,
        action: Run npm audit fix to resolve vulnerabilities)
      });
    }
    if (issuesBySeverity.critical > 0) {
      recommendations.push({
        type: critical,
        priority: critical,
        message: `${issuesBySeverity.critical} critical security issues found`,
        action: Address critical security issues immediately)
      });
    }
    if (issuesBySeverity.high > 0) {
      recommendations.push({
        type: high,
        priority: high,
        message: `${issuesBySeverity.high} high severity issues found`,
        action: Address high severity security issues as soon as possible)
      });
    }
    if (issuesBySeverity.medium > 5) {
      recommendations.push({
        type: medium,
        priority: medium,
        message: `${issuesBySeverity.medium} medium severity issues found`,
        action: Review and address medium severity issues)
      });
    }
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    return recommendations;
  async saveReport(report) {
  // TODO: Implement
      const reportDir = path.dirname(this.reportFile);
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
<<<<<<< HEAD
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));`;
      this.log(`Report saved to: ${this.reportFile}`);
      this.log(`Error saving report: ${error.message}`);
  async run() {
    this.log('🔒 Starting Security Scanner...');`;
    this.log(`Project root: ${this.projectRoot}`);
  // TODO: Implement
=======
      }
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved to: ${this.reportFile});
    } catch (error) {
      this.log(`Error saving report: ${error.message});
    }
  }
  async run() {
    this.log('🔒 Starting Security Scanner...);
    this.log(`Project root: ${this.projectRoot});
    try {
  // TODO: Implement
}
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
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
<<<<<<< HEAD
      this.log('\n📊 Security Scanner Report:');`;
      this.log(`Dependency vulnerabilities: ${report.summary.dependencyVulnerabilities}`);`;
      this.log(`Code issues: ${report.summary.codeIssues}`);`;
      this.log(`Config issues: ${report.summary.configIssues}`);`;
      this.log(`Critical issues: ${report.summary.criticalIssues}`);`;
      this.log(`Duration: ${duration}ms`);
      if (report.summary.criticalIssues > 0) {
        this.log('\n🚨 Critical Security Issues:');
        [...codeIssues, ...configIssues]
          .filter(issue => issue.severity === 'critical' || issue.severity === 'high')
          .slice(0, 5)
          .forEach(issue => {)`;
            this.log(`  ${issue.file}:${issue.line} - ${issue.message}`);
      if (report.recommendations.length > 0) {
        this.log('\n💡 Recommendations:');
        report.recommendations.forEach(rec => {)`;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);`;
          this.log(`    Action: ${rec.action}`);
      this.log(`❌ Error running security scanner: ${error.message}`);
=======
      this.log('\n📊 Security Scanner Report: );
      this.log(`Dependency vulnerabilities: ${report.summary.dependencyVulnerabilities});
      this.log(`Code issues: ${report.summary.codeIssues});
      this.log(`Config issues: ${report.summary.configIssues});
      this.log(`Critical issues: ${report.summary.criticalIssues});
      this.log(`Duration: ${duration}ms`);
      if (report.summary.criticalIssues > 0) {
        this.log('\n🚨 Critical Security Issues: );
        [...codeIssues, ...configIssues]
          .filter(issue => issue.severity ===critical' || issue.severity ===high')
          .slice(0, 5)
          .forEach(issue => {)
            this.log(`  ${issue.file}:${issue.line} - ${issue.message});
          });
      }
      if (report.recommendations.length > 0) {
        this.log('\n💡 Recommendations: );
        report.recommendations.forEach(rec => {)
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message});
          this.log(`    Action: ${rec.action});
        });
      }
    } catch (error) {
      this.log(`❌ Error running security scanner: ${error.message});
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      process.exit(1);
// Run the security scanner;
const scanner = new SecurityScanner();
scanner.run().catch(error => {)
<<<<<<< HEAD
});`;
#!/usr/bin/env node/usr/bin/env nodeconst { execSync } = require("child_process");"const fs = require("fs");"const path = require("path");class SecurityScanner { constructor() {" this.processName = process.env.PM2_PROCESS_NAME | "security-scanner";" this.scanDependencies = process.env.SCAN_DEPENDENCIES === "true";" this.scanCode = process.env.SCAN_CODE === "true";" this.scanConfigs = process.env.SCAN_CONFIGS === "true";" this.alertOnCritical = process.env.ALERT_ON_CRITICAL === "true";" this.logFile = path.join(__dirname, "././logs/pm2/security-scanner.log"); this.ensureLogDir(); } ensureLogDir() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir, { recursive: true }); } } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`; console.log(logMessage.trim()); fs.appendFileSync(this.logFile, logMessage); } async scanDependencies() { if (!this.scanDependencies) {" this.log("Dependency scanning disabled"); return { scanned: false }; } try {" this.log("Scanning dependencies for vulnerabilities."); / Run npm audit" const auditResult = execSync("npm audit --json", { " encoding: "utf8"," stdio: "pipe", cwd: process.cwd() }); const auditData = JSON.parse(auditResult); const vulnerabilities = auditData.vulnerabilities | {};" const criticalCount = Object.values(vulnerabilities).filter(v => v.severity === "critical").length;" const highCount = Object.values(vulnerabilities).filter(v => v.severity === "high").length;" const moderateCount = Object.values(vulnerabilities).filter(v => v.severity === "moderate").length;` this.log(`Found ${criticalCount} critical, ${highCount} high, ${moderateCount} moderate vulnerabilities`); if (criticalCount > 0 && this.alertOnCritical) {" this.log("ALERT: Critical vulnerabilities found!"); } return { scanned: true, critical: criticalCount, high: highCount, moderate: moderateCount, total: Object.keys(vulnerabilities).length, vulnerabilities }; } catch (error) {` this.log(`Dependency scan failed: ${error.message}`); return { scanned: false, error: error.message }; } } async scanCode() { if (!this.scanCode) {" this.log("Code scanning disabled"); return { scanned: false }; } try {" this.log("Scanning code for security issues."); / Check for common security issues const securityIssues = []; / Check for hardcoded secrets const secretPatterns = [" /password\s*=\s*[""][^""]+[""]/gi,"" /api[_-]?key\s*=\s*[""][^""]+[""]/gi,"" /secret\s*=\s*[""][^""]+[""]/gi,"" /token\s*=\s*[""][^""]+[""]/gi ]; const sourceFiles = this.getSourceFiles(); for (const file of sourceFiles) { try {" const content = fs.readFileSync(file, "utf8"); for (const pattern of secretPatterns) { const matches = content.match(pattern); if (matches) { securityIssues.push({ file," type: "hardcoded_secret", matches: matches.length," severity: "high" }); } } } catch (err) {" / Skip files that can"t be read } }` this.log(`Found ${securityIssues.length} potential security issues in code`); return { scanned: true, issues: securityIssues, totalIssues: securityIssues.length }; } catch (error) {` this.log(`Code scan failed: ${error.message}`); return { scanned: false, error: error.message }; } } async scanConfigs() { if (!this.scanConfigs) {" this.log("Config scanning disabled"); return { scanned: false }; } try {" this.log("Scanning configuration files."); const configFiles = [" "package.json"," "next.config.js"," "vite.config.js"," "webpack.config.js", ].filter(file => fs.existsSync(file)); const configIssues = []; for (const file of configFiles) { try {" const content = fs.readFileSync(file, "utf8"); / Check for unsafe configurations" if (content.includes("eval(") | content.includes("Function(")) { configIssues.push({ file," type: "unsafe_eval"," severity: "high" }); }" if (content.includes("process.env") && !content.includes("process.env.NODE_ENV")) { configIssues.push({ file," type: "env_exposure"," severity: "medium" }); } } catch (err) {" / Skip files that can"t be read } }` this.log(`Found ${configIssues.length} configuration security issues`); return { scanned: true, issues: configIssues, totalIssues: configIssues.length }; } catch (error) {` this.log(`Config scan failed: ${error.message}`); return { scanned: false, error: error.message }; } } getSourceFiles() {" const extensions = [".js", ".jsx", ".ts", ".tsx", ".vue", ".svelte"]; const sourceFiles = []; const scanDir = (dir) => { try { const files = fs.readdirSync(dir); for (const file of files) { const filePath = path.join(dir, file); const stat = fs.statSync(filePath); " if (stat.isDirectory() && !file.startsWith(".") && file !== "node_modules") { scanDir(filePath); } else if (stat.isFile() && extensions.some(ext => file.endsWith(ext))) { sourceFiles.push(filePath); } } } catch (err) {" / Skip directories that can"t be read } }; scanDir(process.cwd()); return sourceFiles; } async generateReport() { const report = { timestamp: new Date().toISOString(), processName: this.processName, dependencyScan: await this.scanDependencies(), codeScan: await this.scanCode(), configScan: await this.scanConfigs(), environment: { NODE_ENV: process.env.NODE_ENV, scanDependencies: this.scanDependencies, scanCode: this.scanCode, scanConfigs: this.scanConfigs, alertOnCritical: this.alertOnCritical } };" const reportFile = path.join(__dirname, "././logs/pm2/security-scanner-report.json"); fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));` this.log(`Security report generated: ${reportFile}`); return report; } async start() {` this.log(`${this.processName} started`); try { const report = await this.generateReport(); const totalIssues = (report.dependencyScan.total | 0) (report.codeScan.totalIssues | 0) (report.configScan.totalIssues | 0); if (totalIssues === 0) {" this.log("Security scan completed - no issues found"); } else {` this.log(`Security scan completed - found ${totalIssues} issues`); if (report.dependencyScan.critical > 0 && this.alertOnCritical) {" this.log("ALERT: Critical vulnerabilities detected!"); } } } catch (error) {` this.log(`Security scan error: ${error.message}`); } }}/ Start the serviceif (require.main === module) { const securityScanner = new SecurityScanner(); securityScanner.start().catch(console.error);}module.exports = SecurityScanner;'"`'"`"
=======
  process.exit(1);
});
#!/usr/bin/env node/usr/bin/env nodeconst { execSync } = require("child_process");"const fs = require("fs");"const path = require("path");class SecurityScanner { constructor() {" this.processName = process.env.PM2_PROCESS_NAME | "security-scanner";" this.scanDependencies = process.env.SCAN_DEPENDENCIES === "true";" this.scanCode = process.env.SCAN_CODE === "true";" this.scanConfigs = process.env.SCAN_CONFIGS === "true";" this.alertOnCritical = process.env.ALERT_ON_CRITICAL === "true";" this.logFile = path.join(__dirname, "././logs/pm2/security-scanner.log"); this.ensureLogDir(); } ensureLogDir() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir, { recursive: true }); } } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`; console.log(logMessage.trim()); fs.appendFileSync(this.logFile, logMessage); } async scanDependencies() { if (!this.scanDependencies) {" this.log("Dependency scanning disabled"); return { scanned: false }; } try {" this.log("Scanning dependencies for vulnerabilities."); / Run npm audit" const auditResult = execSync("npm audit --json", { " encoding: "utf8"," stdio: "pipe", cwd: process.cwd() }); const auditData = JSON.parse(auditResult); const vulnerabilities = auditData.vulnerabilities | {};" const criticalCount = Object.values(vulnerabilities).filter(v => v.severity === "critical").length;" const highCount = Object.values(vulnerabilities).filter(v => v.severity === "high").length;" const moderateCount = Object.values(vulnerabilities).filter(v => v.severity === "moderate").length;` this.log(`Found ${criticalCount} critical, ${highCount} high, ${moderateCount} moderate vulnerabilities`); if (criticalCount > 0 && this.alertOnCritical) {" this.log("ALERT: Critical vulnerabilities found!"); } return { scanned: true, critical: criticalCount, high: highCount, moderate: moderateCount, total: Object.keys(vulnerabilities).length, vulnerabilities }; } catch (error) {` this.log(`Dependency scan failed: ${error.message}); return { scanned: false, error: error.message }; } } async scanCode() { if (!this.scanCode) {" this.log("Code scanning disabled"); return { scanned: false }; } try {" this.log("Scanning code for security issues."); / Check for common security issues const securityIssues = []; / Check for hardcoded secrets const secretPatterns = [" /password\s*=\s*[][^]+[]/gi, /api[_-]?key\s*=\s*[][^]+[]/gi, /secret\s*=\s*[][^]+[]/gi, /token\s*=\s*[][^]+[]/gi ]; const sourceFiles = this.getSourceFiles(); for (const file of sourceFiles) { try {" const content = fs.readFileSync(file, "utf8"); for (const pattern of secretPatterns) { const matches = content.match(pattern); if (matches) { securityIssues.push({ file," type: "hardcoded_secret", matches: matches.length," severity: "high" }); } } } catch (err) {" / Skip files that can"t be read } }` this.log(`Found ${securityIssues.length} potential security issues in code`); return { scanned: true, issues: securityIssues, totalIssues: securityIssues.length }; } catch (error) {` this.log(`Code scan failed: ${error.message}); return { scanned: false, error: error.message }; } } async scanConfigs() { if (!this.scanConfigs) {" this.log("Config scanning disabled"); return { scanned: false }; } try {" this.log("Scanning configuration files."); const configFiles = [" "package.json"," "next.config.js"," "vite.config.js"," "webpack.config.js", ].filter(file => fs.existsSync(file)); const configIssues = []; for (const file of configFiles) { try {" const content = fs.readFileSync(file, "utf8"); / Check for unsafe configurations" if (content.includes("eval(") | content.includes("Function(")) { configIssues.push({ file," type: "unsafe_eval"," severity: "high" }); }" if (content.includes("process.env") && !content.includes("process.env.NODE_ENV")) { configIssues.push({ file," type: "env_exposure"," severity: "medium" }); } } catch (err) {" / Skip files that can"t be read } }` this.log(`Found ${configIssues.length} configuration security issues`); return { scanned: true, issues: configIssues, totalIssues: configIssues.length }; } catch (error) {` this.log(`Config scan failed: ${error.message}); return { scanned: false, error: error.message }; } } getSourceFiles() {" const extensions = [".js", ".jsx", ".ts", ".tsx", ".vue", ".svelte"]; const sourceFiles = []; const scanDir = (dir) => { try { const files = fs.readdirSync(dir); for (const file of files) { const filePath = path.join(dir, file); const stat = fs.statSync(filePath); " if (stat.isDirectory() && !file.startsWith(".") && file !== "node_modules") { scanDir(filePath); } else if (stat.isFile() && extensions.some(ext => file.endsWith(ext))) { sourceFiles.push(filePath); } } } catch (err) {" / Skip directories that can"t be read } }; scanDir(process.cwd()); return sourceFiles; } async generateReport() { const report = { timestamp: new Date().toISOString(), processName: this.processName, dependencyScan: await this.scanDependencies(), codeScan: await this.scanCode(), configScan: await this.scanConfigs(), environment: { NODE_ENV: process.env.NODE_ENV, scanDependencies: this.scanDependencies, scanCode: this.scanCode, scanConfigs: this.scanConfigs, alertOnCritical: this.alertOnCritical } };" const reportFile = path.join(__dirname, "././logs/pm2/security-scanner-report.json"); fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));` this.log(`Security report generated: ${reportFile}); return report; } async start() {` this.log(`${this.processName} started`); try { const report = await this.generateReport(); const totalIssues = (report.dependencyScan.total | 0) (report.codeScan.totalIssues | 0) (report.configScan.totalIssues | 0); if (totalIssues === 0) {" this.log("Security scan completed - no issues found"); } else {` this.log(`Security scan completed - found ${totalIssues} issues`); if (report.dependencyScan.critical > 0 && this.alertOnCritical) {" this.log("ALERT: Critical vulnerabilities detected!"); } } } catch (error) {` this.log(`Security scan error: ${error.message}); } }}/ Start the serviceif (require.main === module) { const securityScanner = new SecurityScanner(); securityScanner.start().catch(console.error);}module.exports = SecurityScanner;"`"`"
#!/usr/bin/env node
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
/**
 * PM2 Security Scanner Service;
 * Scans for security vulnerabilities and issues;
 */"
<<<<<<< HEAD
class SecurityScanner {}
  constructor() {}
    this.processName = process.env.PM2_PROCESS_NAME || 'security-scanner';
    this.scanDependencies = process.env.SCAN_DEPENDENCIES === 'true';
    this.scanCode = process.env.SCAN_CODE === 'true';
    this.scanConfigs = process.env.SCAN_CONFIGS === 'true';
    this.alertOnCritical = process.env.ALERT_ON_CRITICAL === 'true';
    this.logFile = path.join(__dirname, '../../logs/pm2/security-scanner.log');
=======
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
class SecurityScanner {}
  constructor() {}
    this.processName = process.env.PM2_PROCESS_NAME ||security-scanner';
    this.scanDependencies = process.env.SCAN_DEPENDENCIES ===true;
    this.scanCode = process.env.SCAN_CODE ===true;
    this.scanConfigs = process.env.SCAN_CONFIGS ===true;
    this.alertOnCritical = process.env.ALERT_ON_CRITICAL ===true;
    this.logFile = path.join(__dirname,../../logs/pm2/security-scanner.log');
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    this.ensureLogDir();
  ensureLogDir() {}
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {}
      fs.mkdirSync(logDir, { recursive: true })
  log(message) {}
    const timestamp = new Date().toISOString();`;
    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;
    );`;
    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;`
    console.log(logMessage.trim());
  async scanDependencies() {}
    if (!this.scanDependencies) {}
      this.log('Dependency scanning disabled');
      return { scanned: false };
<<<<<<< HEAD
    try {}
      this.log('Scanning dependencies for vulnerabilities...');
      // Run npm audit;
      const auditResult = execSync('npm audit --json', { })
        encoding: 'utf8',
=======
    };
    try {}
      this.log('Scanning dependencies for vulnerabilities...);
      // Run npm audit;
      const auditResult = execSync('npm audit --json, { })
        encoding: utf8,
        stdio: pipe,
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
        cwd: process.cwd();




      const auditData = JSON.parse(auditResult);
      const vulnerabilities = auditData.vulnerabilities || {};
<<<<<<< HEAD
      const criticalCount = Object.values(vulnerabilities).filter(v => v.severity === 'critical').length;
      const highCount = Object.values(vulnerabilities).filter(v => v.severity === 'high').length;
      const moderateCount = Object.values(vulnerabilities).filter(v => v.severity === 'moderate').length;`;
=======
      const criticalCount = Object.values(vulnerabilities).filter(v => v.severity ===critical').length;
      const highCount = Object.values(vulnerabilities).filter(v => v.severity ===high').length;
      const moderateCount = Object.values(vulnerabilities).filter(v => v.severity ===moderate').length;
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      this.log(`Found ${criticalCount} critical, ${highCount} high, ${moderateCount} moderate vulnerabilities`);
`;

<<<<<<< HEAD
      if (criticalCount > 0 && this.alertOnCritical) {}
        this.log('ALERT: Critical vulnerabilities found!');
=======
      this.log(`Found ${criticalCount} critical, ${highCount} high, ${moderateCount} moderate vulnerabilities`);

      this.log(`Found ${criticalCount} critical, ${highCount} high, ${moderateCount} moderate vulnerabilities`);

      this.log(`Found ${criticalCount} critical, ${highCount} high, ${moderateCount} moderate vulnerabilities`);

      if (criticalCount > 0 && this.alertOnCritical) {}
        this.log('ALERT: Critical vulnerabilities found!);
      };
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      return {}
        scanned: true,
        critical: criticalCount,
        high: highCount,
        moderate: moderateCount,
        total: Object.keys(vulnerabilities).length,
        vulnerabilities;
<<<<<<< HEAD
    } catch (error) {}`;
=======
      };
    } catch (error) {}
      this.log(`Dependency scan failed: ${error.message});
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      return { scanned: false, error: error.message };
  async scanCode() {}
    if (!this.scanCode) {}
      this.log('Code scanning disabled');
<<<<<<< HEAD
      this.log('Scanning code for security issues...');
=======
      return { scanned: false };
    };
    try {}
      this.log('Scanning code for security issues...);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      // Check for common security issues;
      const securityIssues = [];
      // Check for common security issues;
      
      // Check for common security issues;
      
      // Check for common security issues;
      // Check for hardcoded secrets;
      const secretPatterns = []
<<<<<<< HEAD
        /password\s*=\s*['"][^'"]+['"]/gi,""
        /api[_-]?key\s*=\s*['"][^'"]+['"]/gi,""
        /secret\s*=\s*['"][^'"]+['"]/gi,""
        /token\s*=\s*['"][^'"]+['"]/gi;"
=======
        /password\s*=\s*["][^'"]+["]/gi,
        /api[_-]?key\s*=\s*["][^'"]+["]/gi,
        /secret\s*=\s*["][^'"]+["]/gi,
        /token\s*=\s*["][^'"]+["]/gi;"
      ];
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a




      const sourceFiles = this.getSourceFiles();
      for (const file of sourceFiles) {}
        try {}"
<<<<<<< HEAD
=======
          const content = fs.readFileSync(file,utf8);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
          for (const pattern of secretPatterns) {}
            const matches = content.match(pattern);
            if (matches) {}
              securityIssues.push({})
                file,
<<<<<<< HEAD
                type: 'hardcoded_secret',
                matches: matches.length,
                severity: 'high
        } catch (err) {}
          // Skip files that can't be read;
      };`;
=======
                type: hardcoded_secret,
                matches: matches.length,
                severity: high
              }
});
            };
          };
        } catch (err) {}
          // Skip files that can't be read;
        };
      };
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      this.log(`Found ${securityIssues.length} potential security issues in code`);




        issues: securityIssues,
        totalIssues: securityIssues.length;
<<<<<<< HEAD
  async scanConfigs() {}
    if (!this.scanConfigs) {}
      this.log('Config scanning disabled');
      this.log('Scanning configuration files...');
      const configFiles = []
        'vite.config.js',
        'webpack.config.js',
      ].filter(file => fs.existsSync(file));
      const configIssues = [];
      for (const file of configFiles) {}

          // Check for unsafe configurations;
          if (content.includes('eval(') || content.includes('Function(')) {}
            configIssues.push({})
              type: 'unsafe_eval',
          if (content.includes('process.env') && !content.includes('process.env.NODE_ENV')) {}
              type: 'env_exposure',
              severity: 'medium
          // Skip files that can't be read;
=======
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
      this.log('Scanning configuration files...);
      const configFiles = []
        'package.json,next.config.js,vite.config.js,webpack.config.js,].filter(file => fs.existsSync(file));
      const configIssues = [];
      for (const file of configFiles) {}
        try {}
          const content = fs.readFileSync(file,utf8);
      const configIssues = [];

      for (const file of configFiles) {}
        try {}
          const content = fs.readFileSync(file,utf8);
      const configIssues = [];
      for (const file of configFiles) {}
        try {}
          const content = fs.readFileSync(file,utf8);
          // Check for unsafe configurations;
          if (content.includes('eval(') || content.includes('Function(')) {}
            configIssues.push({})
              file,
              type: unsafe_eval,
              severity: high
            }
});
          };
          if (content.includes('process.env') && !content.includes('process.env.NODE_ENV')) {}
            configIssues.push({})
              file,
              type: env_exposure,
              severity: medium
            }
});
          };
        } catch (err) {}
          // Skip files that can't be read;
        };
      };
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      this.log(`Found ${configIssues.length} configuration security issues`);




        issues: configIssues,
        totalIssues: configIssues.length;
<<<<<<< HEAD
  getSourceFiles() {}
    const extensions = ['.js', '.jsx', '.ts', '.tsx', '.vue', '.svelte'];
=======
      };
    } catch (error) {}
      this.log(`Config scan failed: ${error.message});
      return { scanned: false, error: error.message };
    };
  };
  getSourceFiles() {}
    const extensions = [.js,.jsx,.ts,.tsx,.vue,.svelte];
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    const sourceFiles = [];




    const scanDir = (dir) => {}
        const files = fs.readdirSync(dir);
        for (const file of files) {}
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          
          
          
<<<<<<< HEAD
          
          if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {}
            scanDir(filePath);
          } else if (stat.isFile() && extensions.some(ext => file.endsWith(ext))) {}
            sourceFiles.push(filePath);
        // Skip directories that can't be read;
=======
          '
          if (stat.isDirectory() && !file.startsWith('.) && file !==node_modules') {}
            scanDir(filePath);
          } else if (stat.isFile() && extensions.some(ext => file.endsWith(ext))) {}
            sourceFiles.push(filePath);
          };
        };
      } catch (err) {}
        // Skip directories that can't be read;
      };
    };
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a




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
    const reportFile = path.join(__dirname, '../../logs/pm2/security-scanner-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));`;
    this.log(`Security report generated: ${reportFile}`);
  async start() {}`;
=======
      };
    };
    const reportFile = path.join(__dirname,../../logs/pm2/security-scanner-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    const reportFile = path.join(__dirname,../../logs/pm2/security-scanner-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
'
    const reportFile = path.join(__dirname,../../logs/pm2/security-scanner-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    '
    const reportFile = path.join(__dirname,../../logs/pm2/security-scanner-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`Security report generated: ${reportFile});
    return report;
  };
  async start() {}
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    this.log(`${this.processName} started`);
      const report = await this.generateReport();
      const totalIssues = (report.dependencyScan.total || 0) + 
                         (report.codeScan.totalIssues || 0) + 
                         (report.configScan.totalIssues || 0);
    
      
      
<<<<<<< HEAD
      if (totalIssues === 0) {}
        this.log('Security scan completed - no issues found');
      } else {}`;
=======
    try {}
      const report = await this.generateReport();
      const totalIssues = (report.dependencyScan.total || 0) + 
                         (report.codeScan.totalIssues || 0) + 
                         (report.configScan.totalIssues || 0);
      if (totalIssues === 0) {}
        this.log('Security scan completed - no issues found');
      } else {}
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
        this.log(`Security scan completed - found ${totalIssues} issues`);
        
        
        
        
        if (report.dependencyScan.critical > 0 && this.alertOnCritical) {}
<<<<<<< HEAD
          this.log('ALERT: Critical vulnerabilities detected!');
      this.log(`Security scan error: ${error.message}`);
=======
          this.log('ALERT: Critical vulnerabilities detected!);
        };
      };
    } catch (error) {}
      this.log(`Security scan error: ${error.message});
    };
  };
};
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
// Start the service;
if (require.main === module) {}
  const securityScanner = new SecurityScanner();
  securityScanner.start().catch(console.error);
module.exports = SecurityScanner;module.exports = SecurityScanner;
module.exports = SecurityScanner;