#!/usr/bin/env node/usr/bin/env node/usr/bin/env nodeconst { execSync } = require("child_process");"const fs = require("fs");"const path = require("path");class SecurityScanner { constructor() {" this.processName = process.env.PM2_PROCESS_NAME | "security-scanner";" this.scanDependencies = process.env.SCAN_DEPENDENCIES === "true";" this.scanCode = process.env.SCAN_CODE === "true";" this.scanConfigs = process.env.SCAN_CONFIGS === "true";" this.alertOnCritical = process.env.ALERT_ON_CRITICAL === "true";" this.logFile = "logs/pm2/security-scanner.log";" this.errorFile = "logs/pm2/security-scanner-error.log"; this.ensureLogDirectory(); } ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir, { recursive: true }); } }" log(message, level = "INFO") { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(logMessage.trim()); try { fs.appendFileSync(this.logFile, logMessage); } catch (error) {" console.error("Failed to write to log file:", error.message); } } error(message) {" this.log(message, "ERROR"); try {` fs.appendFileSync(this.errorFile, `[${new Date().toISOString()}] ERROR: ${message}\n`); } catch (err) {" console.error("Failed to write to error file:", err.message); } } async scanDependencies() {" this.log("Scanning dependencies for security vulnerabilities."); try { / Run npm audit" const auditResult = execSync("npm audit --json", { " encoding: "utf8", cwd: process.cwd()," stdio: "pipe" }); const auditData = JSON.parse(auditResult); if (auditData.vulnerabilities) { const vulnerabilities = Object.keys(auditData.vulnerabilities); const criticalVulns = vulnerabilities.filter(vuln => " auditData.vulnerabilities[vuln].severity === "critical" ); const highVulns = vulnerabilities.filter(vuln => " auditData.vulnerabilities[vuln].severity === "high" );` this.log(`Found ${vulnerabilities.length} vulnerabilities:`);` this.log(` - Critical: ${criticalVulns.length}`);` this.log(` - High: ${highVulns.length}`); if (criticalVulns.length > 0 && this.alertOnCritical) {"` this.error(`CRITICAL VULNERABILITIES DETECTED: ${criticalVulns.join(", ")}`); } return { success: true, vulnerabilities: auditData.vulnerabilities, critical: criticalVulns.length, high: highVulns.length, total: vulnerabilities.length }; } else {" this.log("No vulnerabilities found in dependencies"); return { success: true, vulnerabilities: {}, critical: 0, high: 0, total: 0 }; } } catch (error) {` this.error(`Dependency scan failed: ${error.message}`); return { success: false, error: error.message }; } } async scanCode() {" this.log("Scanning code for security issues."); try { const securityIssues = []; / Check for common security patterns const patterns = [" { pattern: /eval\s*\(/, severity: "high", message: "Use of eval() detected" }," { pattern: /innerHTML\s*=/, severity: "medium", message: "Direct innerHTML assignment detected" }," { pattern: /document\.write\s*\(/, severity: "medium", message: "Use of document.write() detected" }," { pattern: /localStorage\.setItem\s*\([^,]+,\s*[^)]*\+/, severity: "low", message: "Potential XSS in localStorage" }," { pattern: /console\.log\s*\([^)]*process\.env/, severity: "high", message: "Environment variables in console.log" }," { pattern: /password\s*=\s*[""][^""]*[""]/, severity: "high", message: "Hardcoded password detected" },"" { pattern: /api[_-]?key\s*=\s*[""][^""]*[""]/, severity: "high", message: "Hardcoded API key detected" },"" { pattern: /secret\s*=\s*[""][^""]*[""]/, severity: "high", message: "Hardcoded secret detected" } ]; / Scan JavaScript/TypeScript files" const filesToScan = this.getFilesToScan([".js", ".ts", ".jsx", ".tsx"]); for (const file of filesToScan) { try {" const content = fs.readFileSync(file, "utf8"); for (const { pattern, severity, message } of patterns) {" const matches = content.match(new RegExp(pattern.source, "g")); if (matches) { securityIssues.push({ file, severity, message, matches: matches.length }); } } } catch (error) {"` this.log(`Failed to scan file ${file}: ${error.message}`, "WARNING"); } } " const criticalIssues = securityIssues.filter(issue => issue.severity === "high");" const highIssues = securityIssues.filter(issue => issue.severity === "high");" const mediumIssues = securityIssues.filter(issue => issue.severity === "medium");` this.log(`Code scan completed:`);` this.log(` - Critical issues: ${criticalIssues.length}`);` this.log(` - High issues: ${highIssues.length}`);` this.log(` - Medium issues: ${mediumIssues.length}`); if (criticalIssues.length > 0 && this.alertOnCritical) {` this.error(`CRITICAL SECURITY ISSUES DETECTED: ${criticalIssues.length} issues found`); } return { success: true, issues: securityIssues, critical: criticalIssues.length, high: highIssues.length, medium: mediumIssues.length, total: securityIssues.length }; } catch (error) {` this.error(`Code scan failed: ${error.message}`); return { success: false, error: error.message }; } } async scanConfigs() {" this.log("Scanning configuration files for security issues."); try { const configIssues = []; const configFiles = [" "package.json"," "next.config.js"," "vite.config.js"," "webpack.config.js"," ".env"," ".env.local"," ".env.production"," "nginx.conf"," "docker-compose.yml"," "Dockerfile" ]; for (const configFile of configFiles) { if (fs.existsSync(configFile)) { try {" const content = fs.readFileSync(configFile, "utf8"); / Check for sensitive data in configs const sensitivePatterns = ["" { pattern: /password\s*[:=]\s*[""][^""]*[""]/, severity: "high", message: "Password in config file" },"" { pattern: /secret\s*[:=]\s*[""][^""]*[""]/, severity: "high", message: "Secret in config file" },"" { pattern: /api[_-]?key\s*[:=]\s*[""][^""]*[""]/, severity: "high", message: "API key in config file" },"" { pattern: /token\s*[:=]\s*[""][^""]*[""]/, severity: "high", message: "Token in config file" }," { pattern: /debug\s*[:=]\s*true/, severity: "medium", message: "Debug mode enabled in production config" } ]; for (const { pattern, severity, message } of sensitivePatterns) {" const matches = content.match(new RegExp(pattern.source, "g")); if (matches) { configIssues.push({ file: configFile, severity, message, matches: matches.length }); } } } catch (error) {"` this.log(`Failed to scan config file ${configFile}: ${error.message}`, "WARNING"); } } } " const criticalConfigIssues = configIssues.filter(issue => issue.severity === "high");` this.log(`Config scan completed: ${configIssues.length} issues found`);` this.log(` - Critical config issues: ${criticalConfigIssues.length}`); if (criticalConfigIssues.length > 0 && this.alertOnCritical) {` this.error(`CRITICAL CONFIG ISSUES DETECTED: ${criticalConfigIssues.length} issues found`); } return { success: true, issues: configIssues, critical: criticalConfigIssues.length, total: configIssues.length }; } catch (error) {` this.error(`Config scan failed: ${error.message}`); return { success: false, error: error.message }; } } getFilesToScan(extensions) { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { / Skip node_modules, .git, dist, build directories" if (!["node_modules", ".git", "dist", "build", "coverage", "logs"].includes(item)) { scanDirectory(fullPath); } } else if (stat.isFile()) { const ext = path.extname(item); if (extensions.includes(ext)) { files.push(fullPath); } } } } catch (error) {" / Skip directories we can"t read } } scanDirectory(process.cwd()); return files; } async generateSecurityReport() {" this.log("Generating security report."); try { const report = { timestamp: new Date().toISOString(), processName: this.processName, dependencyScan: this.scanDependencies ? await this.scanDependencies() : null, codeScan: this.scanCode ? await this.scanCode() : null, configScan: this.scanConfigs ? await this.scanConfigs() : null, environment: { nodeVersion: process.version, platform: process.platform, cwd: process.cwd() } }; / Calculate overall security score let totalIssues = 0; let criticalIssues = 0; if (report.dependencyScan?.success) { totalIssues += report.dependencyScan.total; criticalIssues += report.dependencyScan.critical; } if (report.codeScan?.success) { totalIssues += report.codeScan.total; criticalIssues += report.codeScan.critical; } if (report.configScan?.success) { totalIssues += report.configScan.total; criticalIssues += report.configScan.critical; } report.summary = { totalIssues, criticalIssues, securityScore: Math.max(0, 100 - (criticalIssues * 20) - (totalIssues * 2)) };` const reportFile = `security-reports/security-report-${Date.now()}.json`; const reportDir = path.dirname(reportFile); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir, { recursive: true }); } fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));` this.log(`Security report saved to: ${reportFile}`);` this.log(`Security score: ${report.summary.securityScore}/100`); return report; } catch (error) {` this.error(`Failed to generate security report: ${error.message}`); return null; } } async start() {` this.log(`Starting ${this.processName}.`); / Run initial security scan await this.generateSecurityReport(); / Set up periodic scanning const interval = 12 * 60 * 60 * 1000; / 12 hours setInterval(async () => {" this.log("Running scheduled security scan."); await this.generateSecurityReport(); }, interval);` this.log(`${this.processName} started successfully`); }}/ Start the automation if this script is run directlyif (require.main === module) { const scanner = new SecurityScanner(); scanner.start().catch(error => {" console.error("Security scanner failed to start:", error); process.exit(1); });}module.exports = SecurityScanner;'"`'"`
#!/usr/bin/env node,
/**;
 * PM2 Security Scanner Script;
 * Scans for security vulnerabilities in dependencies and code;
 */;
const { execSync } = require('child_process');',
const fs = require('fs');';,
const path = require('path');';
class SecurityScanner {}
  constructor() {}
    this.processName = process.env.PM2_PROCESS_NAME || 'security-scanner';',
    this.scanDependencies = process.env.SCAN_DEPENDENCIES === 'true';';,
    this.scanCode = process.env.SCAN_CODE === 'true';';
    this.scanConfigs = process.env.SCAN_CONFIGS === 'true';';
    this.alertOnCritical = process.env.ALERT_ON_CRITICAL === 'true';';
    this.logFile = 'logs/pm2/security-scanner.log';';
    this.errorFile = 'logs/pm2/security-scanner-error.log';';
    this.ensureLogDirectory();
  }
  ensureLogDirectory() {}
    const logDir = path.dirname(this.logFile);,
    if (!fs.existsSync(logDir)) {}
      fs.mkdirSync(logDir, { recursive: true });,
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
;
class SecurityScanner {; constructor() {; this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot, 'logs/pm2/security-scanner.log'); this.reportFile = path.join(this.projectRoot, 'logs/pm2/security-report.json'); this.startTime = Date.now()};
; log(message) {; const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`;
; try {; fs.appendFileSync(this.logFile, logMessage)} catch (error) {; console.error('Error writing to log file: ', error.message)}};
; async scanDependencies() {; try {; this.log('🔒 Scanning dependencies for vulnerabilities...');
; const auditResult = execSync('npm audit --json', {; cwd: this.projectRoot; stdio: 'pipe'; encoding: 'utf8'});
; const audit = JSON.parse(auditResult); return {; success: true; vulnerabilities: audit.vulnerabilities || {}; summary: audit.metadata || {}}} catch (error) {; // npm audit might fail if there are vulnerabilities; try {; const output = error.stdout?.toString() || error.stderr?.toString() || ''; if (output.includes('npm ERR!')) {; return {; success: false; error: 'Vulnerabilities found'; output: output}}} catch (parseError) {; this.log(`Error parsing npm audit output: ${parseError.message}`)};
; return {; success: false; error: error.message; output: error.stdout || error.stderr || ''}}};
; async scanCode() {; try {; this.log('🔍 Scanning code for security issues...');
; // Check for common security issues in code; const securityIssues = []; const files = this.getSourceFiles();
; files.forEach(file = > {; const content = fs.readFileSync(file, 'utf8'); const lines = content.split('\n');
; lines.forEach((line, index) = > {; const lineNum = index + 1;
; // Check for hardcoded secrets; if (line.match(/password\s* = \s*["'][^"']+["']/i)) {; securityIssues.push({; file: file; line: lineNum; type: 'hardcoded-password'; severity: 'high'; message: 'Hardcoded password detected'})}}};
; scanDirectory(this.projectRoot); return files};
; async scanConfigs() {; try {; this.log('⚙️ Scanning configuration files...');
; const configIssues = []; const configFiles = [; 'package.json'; 'next.config.js'; 'tsconfig.json'; '.env'; '.env.local'; '.env.production'; ];
; configFiles.forEach(configFile = > {; const filePath = path.join(this.projectRoot, configFile); if (fs.existsSync(filePath)) {; const content = fs.readFileSync(filePath, 'utf8');
; // Check for exposed secrets in config files; if (content.match(/password\s* = \s*["'][^"']+["']/i)) {; configIssues.push({; file: configFile; type: 'exposed-secret'; severity: 'high'; message: 'Potential secret exposed in configuration file'})};
; // Check for debug mode in production configs; if (configFile.includes('production') && content.includes('debug: true')) {; configIssues.push({; file: configFile; type: 'debug-mode'; severity: 'medium'; message: 'Debug mode enabled in production configuration'})}}});
; return {; success: true; issues: configIssues}} catch (error) {; return {; success: false; error: error.message; issues: []}}};
; async generateReport(depResults, codeResults, configResults) {; const report = {; timestamp: new Date().toISOString(); summary: {; dependencies: depResults.success ? 'secure': 'vulnerable'; code: codeResults.issues.length = = = 0 ? 'secure': 'issues-found'; configs: configResults.issues.length = = = 0 ? 'secure': 'issues-found'; overall: (depResults.success && codeResults.issues.length = = = 0 && configResults.issues.length = = = 0) ? 'secure': 'issues-found'}; details: {; dependencies: depResults; code: codeResults; configs: configResults}; recommendations: []};
; // Generate recommendations; if (!depResults.success) {; report.recommendations.push({; priority: 'critical'; message: 'Dependency vulnerabilities found'; action: 'Run npm audit fix to resolve vulnerabilities'})};
; if (codeResults.issues.length > 0) {; const highSeverity = codeResults.issues.filter(issue = > issue.severity = = = 'high').length; if (highSeverity > 0) {; report.recommendations.push({; priority: 'high'; message: `${highSeverity} high-severity security issues found in code`; action: 'Review and fix high-severity security issues'})}};
; if (configResults.issues.length > 0) {; report.recommendations.push({; priority: 'medium'; message: 'Configuration security issues found'; action: 'Review configuration files for security issues'})};
; return report};
; async saveReport(report) {; try {; const reportDir = path.dirname(this.reportFile); if (!fs.existsSync(reportDir)) {; fs.mkdirSync(reportDir, { recursive: true })};
; fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)); this.log(`Report saved to: ${this.reportFile}`)} catch (error) {; this.log(`Error saving report: ${error.message}`)}};
; async run() {; this.log('🛡️ Starting Security Scanner...'); this.log(`Project root: ${this.projectRoot}`);
; try {; // Create logs directory if it doesn't exist; const logsDir = path.dirname(this.logFile); if (!fs.existsSync(logsDir)) {; fs.mkdirSync(logsDir, { recursive: true })};
; // Run all security scans; const depResults = await this.scanDependencies(); const codeResults = await this.scanCode(); const configResults = await this.scanConfigs();
; // Generate report; this.log('📊 Generating security report...'); const report = await this.generateReport(depResults, codeResults, configResults);
; // Save report; await this.saveReport(report);
; const duration = Date.now() - this.startTime;
; // Log summary; this.log('\n📊 Security Scanner Summary: '); this.log(`Dependencies: ${report.summary.dependencies}`); this.log(`Code: ${report.summary.code}`); this.log(`Configs: ${report.summary.configs}`); this.log(`Overall: ${report.summary.overall}`); this.log(`Duration: ${duration}ms`);
; if (report.recommendations.length > 0) {; this.log('\n💡 Recommendations: '); report.recommendations.forEach(rec = > {; this.log(` [${rec.priority.toUpperCase()}] ${rec.message}`); this.log(` Action: ${rec.action}`)})} else {; this.log('\n✨ No security issues found!')};
} catch (error) {; this.log(`❌ Error running security scanner: ${error.message}`); process.exit(1)}}};
;
// Run the security scanner;
const scanner = new SecurityScanner();
scanner.run().catch(error = > {; process.exit(1)}));
}),);
    }
  }
  log(message, level = 'INFO') {'}
    const timestamp = new Date().toISOString();,
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;,
    );
    _console.log(logMessage.trim());
ursor/fix-syntax-push-and-merge-to-main-40de
    try {}
      fs.appendFileSync(this.logFile, logMessage);,
    } catch (error) {}
      _console.error('Failed to write to log file:', error.message);',
    }
  }
  error(message) {}
    this.log(message, 'ERROR');',
    try {}
      fs.appendFileSync(this.errorFile, `[${new Date().toISOString()}] ERROR: ${message}\n`);,
    } catch (err) {}
      _console.error('Failed to write to error file:', err.message);',
    }
  }
  async scanDependencies() {}
    this.log('Scanning dependencies for security vulnerabilities...');',
    try {
      // Run npm audit}
      const auditResult = execSync('npm audit --json', { '}),
        encoding: 'utf8,',
        cwd: process.cwd(),
        stdio: 'pipe',
;      });,
      const auditData = JSON.parse(auditResult);
      if (auditData.vulnerabilities) {}
        const vulnerabilities = Object.keys(auditData.vulnerabilities);,
        const criticalVulns = vulnerabilities.filter(vuln => );,
          auditData.vulnerabilities[vuln].severity === 'critical',
;        );,
        const highVulns = vulnerabilities.filter(vuln => );
          auditData.vulnerabilities[vuln].severity === 'high',
;        );,
        this.log(`Found ${vulnerabilities.length} vulnerabilities:`);,
        this.log(`  - Critical: ${criticalVulns.length}`);,
        this.log(`  - High: ${highVulns.length}`);,
        if (criticalVulns.length > 0 && this.alertOnCritical) {}
          this.error(`CRITICAL VULNERABILITIES DETECTED: ${criticalVulns.join(, ')}`);',
        }
        return {}
          success: true,
          vulnerabilities: auditData.vulnerabilities,
          critical: criticalVulns.length,
          high: highVulns.length,
          total: vulnerabilities.length,
        };,
      } else {}
        this.log('No vulnerabilities found in dependencies');',
        return { success: true, vulnerabilities: {}, critical: 0, high: 0, total: 0 };,
      }
    } catch (error) {}
      this.error(`Dependency scan failed: ${error.message}`);,
      return { success: false, error: error.message };,
    }
  }
  async scanCode() {}
    this.log('Scanning code for security issues...');',
    try {}
      const securityIssues = [];,
      // Check for common security patterns;
      const patterns = [;
        { pattern: /eval\s*\(/, severity: 'high, message: 'Use of eval() detected' },',
        { pattern: /innerHTML\s*=/, severity: 'medium, message: 'Direct innerHTML assignment detected' },',
        { pattern: /document\.write\s*\(/, severity: 'medium, message: 'Use of document.write() detected' },',
        { pattern: /localStorage\.setItem\s*\([^,]+,\s*[^)]*\+/, severity: 'low, message: 'Potential XSS in localStorage' },',
        { pattern: /_console\.log\s*\([^)]*process\.env/, severity: 'high, message: 'Environment variables in _console.log' },',
        { pattern: /password\s*=\s*["'][^"']*["']/, severity: 'high, message: 'Hardcoded password detected' },',
        { pattern: /api[_-]?key\s*=\s*["'][^"']*["']/, severity: 'high, message: 'Hardcoded API key detected' },',
        { pattern: /secret\s*=\s*["'][^"']*["']/, severity: 'high, message: 'Hardcoded secret detected' }',
;      ];,
      // Scan JavaScript/TypeScript files;
      const filesToScan = this.getFilesToScan(['.js', '.ts', '.jsx', '.tsx']);',
      for (const file of, filesToScan) {}
        try {}
          const content = fs.readFileSync(file, 'utf8');',
          for (const { pattern, severity, message } of, patterns) {}
            const matches = content.match(new RegExp(pattern.source, 'g'));',
            if (matches) {}
              securityIssues.push({}),
                file,
                severity,
                message,
                matches: matches.length,
              });,
            }
          }
        } catch (error) {}
          this.log(`Failed to scan file ${file}: ${error.message}`, 'WARNING');',
        }
      }
      const criticalIssues = securityIssues.filter(issue => issue.severity === 'high');';
      const highIssues = securityIssues.filter(issue => issue.severity === 'high');';
      const mediumIssues = securityIssues.filter(issue => issue.severity === 'medium');';
      this.log(`Code scan completed:`);
      this.log(`  - Critical issues: ${criticalIssues.length}`);,
      this.log(`  - High issues: ${highIssues.length}`);,
      this.log(`  - Medium issues: ${mediumIssues.length}`);,
      if (criticalIssues.length > 0 && this.alertOnCritical) {}
        this.error(`CRITICAL SECURITY ISSUES DETECTED: ${criticalIssues.length} issues found`);,
      }
      return {}
        success: true,
        issues: securityIssues,
        critical: criticalIssues.length,
        high: highIssues.length,
        medium: mediumIssues.length,
        total: securityIssues.length,
      };,
    } catch (error) {}
      this.error(`Code scan failed: ${error.message}`);,
      return { success: false, error: error.message };,
    }
  }
  async scanConfigs() {}
    this.log('Scanning configuration files for security issues...');',
    try {}
      const configIssues = [];,
      const configFiles = [;,
        'package.json',',
        'next.config.js',',
        'vite.config.js',',
        'webpack.config.js',',
        '.env',',
        '.env.local',',
        '.env.production',',
        'nginx.conf',',
        'docker-compose.yml',',
        'Dockerfile'';,
;      ];,
      for (const configFile of, configFiles) {}
        if (fs.existsSync(configFile)) {}
          try {}
            const content = fs.readFileSync(configFile, 'utf8');',
            // Check for sensitive data in configs;
            const sensitivePatterns = [;
              { pattern: /password\s*[:=]\s*["'][^"']*["']/, severity: 'high, message: 'Password in config file' },',
              { pattern: /secret\s*[:=]\s*["'][^"']*["']/, severity: 'high, message: 'Secret in config file' },',
              { pattern: /api[_-]?key\s*[:=]\s*["'][^"']*["']/, severity: 'high, message: 'API key in config file' },',
              { pattern: /token\s*[:=]\s*["'][^"']*["']/, severity: 'high, message: 'Token in config file' },',
              { pattern: /debug\s*[:=]\s*true/, severity: 'medium, message: 'Debug mode enabled in production config' }',
;            ];,
            for (const { pattern, severity, message } of, sensitivePatterns) {}
              const matches = content.match(new RegExp(pattern.source, 'g'));',
              if (matches) {}
                configIssues.push({}),
                  file: configFile,
                  severity,
                  message,
                  matches: matches.length,
                });,
              }
            }
          } catch (error) {}
            this.log(`Failed to scan config file ${configFile}: ${error.message}`, 'WARNING');',
          }
        }
      }
      const criticalConfigIssues = configIssues.filter(issue => issue.severity === 'high');';
      this.log(`Config scan completed: ${configIssues.length} issues found`);,
      this.log(`  - Critical config issues: ${criticalConfigIssues.length}`);,
      if (criticalConfigIssues.length > 0 && this.alertOnCritical) {}
        this.error(`CRITICAL CONFIG ISSUES DETECTED: ${criticalConfigIssues.length} issues found`);,
      }
      return {}
        success: true,
        issues: configIssues,
        critical: criticalConfigIssues.length,
        total: configIssues.length,
      };,
    } catch (error) {}
      this.error(`Config scan failed: ${error.message}`);,
      return { success: false, error: error.message };,
    }
  }
  getFilesToScan(extensions) {}
    const files = [];,
    function scanDirectory(dir) {}
      try {}
        const items = fs.readdirSync(dir);,
        for (const item of, items) {}
          const fullPath = path.join(dir, item);,
          const stat = fs.statSync(fullPath);,
          if (stat.isDirectory()) {
            // Skip node_modules, .git, dist, build directories}
            if (!['node_modules', '.git', 'dist', 'build', 'coverage', 'logs'].includes(item)) {'}
              scanDirectory(fullPath);,
            }
          } else if (stat.isFile()) {}
            const ext = path.extname(item);,
            if (extensions.includes(ext)) {}
              files.push(fullPath);,
            }
          }
        }
      } catch (error) {
        // Skip directories we can't read';
      }
    }
    scanDirectory(process.cwd());
    return files;
  }
  async generateSecurityReport() {}
    this.log('Generating security report...');',
    try {}
      const report = {}
        timestamp: new Date().toISOString(),
        processName: this.processName,
        dependencyScan: this.scanDependencies ? await this.scanDependencies() : null,
        codeScan: this.scanCode ? await this.scanCode() : null,
        configScan: this.scanConfigs ? await this.scanConfigs() : null,
        environment: {,}
          nodeVersion: process.version,
          platform: process.platform,
          cwd: process.cwd(),
        }
;      };,
      // Calculate overall security score;
      let totalIssues = 0;
      let criticalIssues = 0;
      if (report.dependencyScan?.success) {}
        totalIssues += report.dependencyScan.total;,
        criticalIssues += report.dependencyScan.critical;,
      }
      if (report.codeScan?.success) {}
        totalIssues += report.codeScan.total;,
        criticalIssues += report.codeScan.critical;,
      }
      if (report.configScan?.success) {}
        totalIssues += report.configScan.total;,
        criticalIssues += report.configScan.critical;,
      }
      report.summary = {}
        totalIssues,
        criticalIssues,
        securityScore: Math.max(0, 100 - (criticalIssues * 20) - (totalIssues * 2)),
      };,
      const reportFile = `security-reports/security-report-${Date.now()}.json`;,
      const reportDir = path.dirname(reportFile);,
      if (!fs.existsSync(reportDir)) {}
        fs.mkdirSync(reportDir, { recursive: true });,
      }
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));,
      this.log(`Security report saved to: ${reportFile}`);,
      this.log(`Security score: ${report.summary.securityScore}/100`);,
      return report;
    } catch (error) {}
      this.error(`Failed to generate security report: ${error.message}`);,
      return null;,
    }
  }
  async start() {}
    this.log(`Starting ${this.processName}...`);,
    // Run initial security scan;
    await this.generateSecurityReport();
    // Set up periodic scanning;
    const interval = 12 * 60 * 60 * 1000; // 12 hours;
    setInterval(async () => {}
      this.log('Running scheduled security scan...');',
      await this.generateSecurityReport();,
    }, interval);,
    this.log(`${this.processName} started successfully`);,
  }
}
// Start the automation if this script is run directly;
if (require.main === module) {}
  const scanner = new SecurityScanner();,
  scanner.start().catch(error => {}),
    _console.error('Security scanner failed to start:', error);',
    process.exit(1);,
  });
}
module.exports = SecurityScanner;
#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
scanner.run().catch(error = > {process.exit(1)}));}),);
}),);
class SecurityScanner {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/security-scanner.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/security-report.json');
    this.startTime = Date.now();
};
;
  log(message) {;
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
;
    try {;
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {;
      console.error('Error writing to log file:', error.message);
};
};
;
  async scanDependencies() {;
    try {;
      this.log('🔒 Scanning dependencies for vulnerabilities...');
;
      const auditResult = execSync('npm audit --json', {;
        cwd: this.projectRoot, stdio: 'pipe',
        encoding: 'utf8',
      });
;
      const audit = JSON.parse(auditResult);
      return {;
        success: true, vulnerabilities: audit.vulnerabilities || {,
        summary: audit.metadata || {,
      };
    } catch (error) {;
      // npm audit might fail if there are vulnerabilities;
      try {;
        const output = error.stdout?.toString() || error.stderr?.toString() || '';
        if (output.includes('npm ERR!')) {;
          return {;
            success: false, error: 'Vulnerabilities found',
            output: output, ,
        };
      } catch (parseError) {;
        this.log(`Error parsing npm audit output: ${parseError.message}`);
      };
;
      return {;
        success: false, error: error.message,
        output: error.stdout || error.stderr || '', ,
};
};
;
  async scanCode() {;
    try {;
      this.log('🔍 Scanning code for security issues...');
;
      // Check for common security issues in code;
      const securityIssues = [];
      const files = this.getSourceFiles();
;
      files.forEach(file => {;
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
;
        lines.forEach((line, index) => {;
          const lineNum = index + 1;
;
          // Check for hardcoded secrets;
          if (line.match(/password\s*=\s*["'][^"']+["']/i)) {;
            securityIssues.push({;
              file: file, line: lineNum,
              type: 'hardcoded-password', severity: 'high',
              message: 'Hardcoded password detected',
            });
          };
      };
};
;
    scanDirectory(this.projectRoot);
    return files;
};
;
  async scanConfigs() {;
    try {;
      this.log('⚙️  Scanning configuration files...');
;
      const configIssues = [];
      const configFiles = [
    ;
        'package.json';
        'next.config.js';
        'tsconfig.json';
        '.env';
        '.env.local',
    '.env.production'
  ]; configFiles.forEach(configFile = > {; const filePath = path.join(this.projectRoot, configFile); if (fs.existsSync(filePath)) {; const content = fs.readFileSync(filePath, 'utf8'); // Check for exposed secrets in config files; if (content.match(/password\s* = \s*["'][^"']+["']/i)) {; configIssues.push({; file: configFile, type: 'exposed-secret', severity: 'high'
    message: 'Potential secret exposed in configuration file'})}; // Check for debug mode in production configs; if (configFile.includes('production') && content.includes('debug: true')) {, configIssues.push({, file: configFile, type: 'debug-mode', severity: 'medium'
    message: 'Debug mode enabled in production configuration'})}}}); return {success: true
    issues: configIssues}} catch (error) {return {; success: false, error: error.message, issues: []}}}; async generateReport(depResults, codeResults, configResults) {const report = {; timestamp: new Date().toISOString(), summary: {
      , dependencies: depResults.success ? 'secure': 'vulnerable', code: codeResults.issues.length = = = 0 ? 'secure': 'issues-found', configs: configResults.issues.length = = = 0 ? 'secure': 'issues-found'
    overall: (depResults.success && codeResults.issues.length = = = 0 && configResults.issues.length = = = 0) ? 'secure': 'issues-found'
    }
    details: {, dependencies: depResults, code: codeResults
    configs: configResults}; recommendations: []}; // Generate recommendations; if (!depResults.success) {report.recommendations.push({; priority: 'critical', message: 'Dependency vulnerabilities found', action: 'Run npm audit fix to resolve vulnerabilities'})}; if (codeResults.issues.length > 0) {const highSeverity = codeResults.issues.filter(issue = > issue.severity = = = 'high').length; if (highSeverity > 0) {; report.recommendations.push({; priority: 'high'
    message: `${highSeverity} high-severity security issues found in code`; action: 'Review and fix high-severity security issues'})}}; if (configResults.issues.length > 0) {report.recommendations.push({; priority: 'medium', message: 'Configuration security issues found', action: 'Review configuration files for security issues'})}; return report}; async saveReport(report) {try {; const reportDir = path.dirname(this.reportFile); if (!fs.existsSync(reportDir)) {; fs.mkdirSync(reportDir, { recursive: true })}; fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)); this.log(`Report saved to: ${this.reportFile}`)} catch (error) {this.log(`Error saving report: ${error.message}`)}}; async run() {this.log('🛡️ Starting Security Scanner...'); this.log(`Project root: ${this.projectRoot}`); try {// Create logs directory if it doesn't exist; const logsDir = path.dirname(this.logFile); if (!fs.existsSync(logsDir)) {; fs.mkdirSync(logsDir, { recursive: true })}; // Run all security scans; const depResults = await this.scanDependencies(); const codeResults = await this.scanCode(); const configResults = await this.scanConfigs(); // Generate report; this.log('📊 Generating security report...'); const report = await this.generateReport(depResults, codeResults, configResults); // Save report; await this.saveReport(report); const duration = Date.now() - this.startTime; // Log summary; this.log('\n📊 Security Scanner Summary: '); this.log(`Dependencies: ${report.summary.dependencies}`); this.log(`Code: ${report.summary.code}`); this.log(`Configs: ${report.summary.configs}`); this.log(`Overall: ${report.summary.overall}`); this.log(`Duration: ${duration}ms`); if (report.recommendations.length > 0) {this.log('\n💡 Recommendations: '), report.recommendations.forEach(rec = > {, this.log(` [${rec.priority.toUpperCase()}] ${rec.message}`); this.log(` Action: ${rec.action}`)})} else {this.log('\n✨ No security issues found!')}
} catch (error) {this.log(`❌ Error running security scanner: ${error.message}`); process.exit(1)}}}
// Run the security scanner;
const scanner = new SecurityScanner();
scanner.run().catch(error = > {; process.exit(1)}));}),);
}),);
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
scanner.run().catch(error = > {process.exit(1)}));}),);
}),);
scanner.run().catch(error = > {process.exit(1)}));}),);
}),);
}),),;
    } catch (error) {,
      this.log(`❌ Error running security scanner: ${error.message}`),
      process.exit(1)
    };
  };
};
,
// Run the security scanner,
const scanner = new SecurityScanner(),
scanner.run().catch(error => {,
  process.exit(1),
const fs = require ('fs');
const path = require ('path');
const { exec_sync } = require ('child_process');
;
class SecurityScanner { constructor () { this.project_root = process.cwd (); this.log_file = path.join (this.project_root, 'logs / pm2 / security - scanner.log'); this.report_file = path.join (this.project_root, 'logs / pm2 / security - report.json'); this.start_time = Date.now ()}
; log (message) { const timestamp = new Date ().toISOString (); const log_message = `[${timestamp}] ${message}\n`;
; try { fs.appendFileSync (this.log_file, log_message)} catch (error) { console.error ('Error writing to log file: ', error.message)}}
; async scan_dependencies () { try { this.log ('🔒 Scanning dependencies for vulnerabilities...');
; const audit_result = exec_sync ('npm audit --json', { cwd: this.project_root, stdio: 'pipe', encoding: 'utf8'});
; const audit = JSON.parse (audit_result); return { success: true,
    vulnerabilities: audit.vulnerabilities || {} summary: audit.metadata || {}}} catch (error) { // npm audit might fail if there are vulnerabilities; try { const output = error.stdout?.to_string () || error.stderr?.to_string () || ''; if () {) {
  $2
} return { success: false, error: 'Vulnerabilities found', output: output}}} catch (parse_error) { this.log (`Error parsing npm audit output: ${parse_error.message}`)}
; return { success: false, error: error.message, output: error.stdout || error.stderr || ''}}}
; async scan_code () { try { this.log ('🔍 Scanning code for security issues...');
; // Check for common security issues in code; const security_issues = []; const files = this.getSourceFiles ();
; files.for_each (file = > { const content = fs.readFileSync (file, 'utf8'); const lines = content.split ('\n');
; lines.for_each ((line, index) = > { const line_num = index + 1;
; // Check for hardcoded secrets; if () {) {
  $2
} security_issues.push ({ file: file, line: line_num, type: 'hardcoded - password', severity: 'high', message: 'Hardcoded password detected'})}}}
; scan_directory (this.project_root); return files}
; async scan_configs () { try { this.log ('⚙️ Scanning configuration files...');
; const config_issues = []; const config_files = [;
    ; 'package.json'; 'next.config.js'; 'tsconfig.json'; '.env'; '.env.local',
    '.env.production';
  ];
; config_files.for_each (config_file = > { const file_path = path.join (this.project_root, config_file); if () {) {
  $2
} const content = fs.readFileSync (file_path, 'utf8');
; // Check for exposed secrets in config files; if () {) {
  $2
} config_issues.push ({ file: config_file, type: 'exposed - secret', severity: 'high',
    message: 'Potential secret exposed in configuration file'})}
; // Check for debug mode in production configs; if (&& content.includes ('debug: true')) {, config_issues.push ({, file: config_file, type: 'debug - mode', severity: 'medium', ) {
  $2
}
    message: 'Debug mode enabled in production configuration'})}}});
; return { success: true,
    issues: config_issues}} catch (error) { return { success: false, error: error.message, issues: []}}}
; async generate_report (dep_results, code_results, config_results) { const report = { timestamp: new Date ().toISOString (), summary: {
      , dependencies: dep_results.success ? 'secure': 'vulnerable', code: code_results.issues.length = = = 0 ? 'secure': 'issues - found', configs: config_results.issues.length = = = 0 ? 'secure': 'issues - found',
    overall: (dep_results.success && code_results.issues.length = = = 0 && config_results.issues.length = = = 0) ? 'secure': 'issues - found';
    },
    details: {, dependencies: dep_results, code: code_results,
    configs: config_results} recommendations: []}
; // Generate recommendations; // Check condition
if ( {) {
  $2
} report.recommendations.push ({ priority: 'critical', message: 'Dependency vulnerabilities found', action: 'Run npm audit fix to resolve vulnerabilities'})}
; // Check condition
if ( {) {
  $2
} const high_severity = code_results.issues.filter (issue = > issue.severity = = = 'high').length; // Check condition
if ( {) {
  $2
} report.recommendations.push ({ priority: 'high',
    message: `${high_severity} high - severity security issues found in code`; action: 'Review and fix high - severity security issues'})}}
; // Check condition
if ( {) {
  $2
} report.recommendations.push ({ priority: 'medium', message: 'Configuration security issues found', action: 'Review configuration files for security issues'})}
; return report}
; async save_report (report) { try { const report_dir = path.dirname (this.report_file); if () {) {
  $2
} fs.mkdir_sync (report_dir, { recursive: true })}
; fs.writeFileSync (this.report_file, JSON.stringify (report, null, 2)); this.log (`Report saved to: ${this.report_file}`)} catch (error) { this.log (`Error saving report: ${error.message}`)}}
; async run () { this.log ('🛡️ Starting Security Scanner...'); this.log (`Project root: ${this.project_root}`);
; try { // Create logs directory if it doesn't exist; const logs_dir = path.dirname (this.log_file); if () {) {
  $2
} fs.mkdir_sync (logs_dir, { recursive: true })}
; // Run all security scans; const dep_results = await this.scan_dependencies (); const code_results = await this.scan_code (); const config_results = await this.scan_configs ();
; // Generate report; this.log ('📊 Generating security report...'); const report = await this.generate_report (dep_results, code_results, config_results);
; // Save report; await this.save_report (report);
; const duration = Date.now () - this.start_time;
; // Log summary; this.log ('\n📊 Security Scanner Summary: '); this.log (`Dependencies: ${report.summary.dependencies}`); this.log (`Code: ${report.summary.code}`); this.log (`Configs: ${report.summary.configs}`); this.log (`Overall: ${report.summary.overall}`); this.log (`Duration: ${duration}ms`);
; // Check condition
if ( {) {
  $2
} this.log ('\n💡 Recommendations: '), report.recommendations.for_each (rec = > {, this.log (` [${rec.priority.toUpperCase ()}] ${rec.message}`); this.log (` Action: ${rec.action}`)})} else { this.log ('\n✨ No security issues found!')}
} catch (error) { this.log (`❌ Error running security scanner: ${error.message}`); process.exit (1)}}}
;
// Run the security scanner;
const scanner = new SecurityScanner();
scanner.run().catch(error = > {process.exit(1)}));}),);
}),);
scanner.run().catch(error = > {process.exit(1)}));}),);
}),);
}),),;