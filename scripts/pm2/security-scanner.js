#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class SecurityScanner {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/security-scanner.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/security-report.json');
    this.startTime = Date.now();
  };
  log(message) {;
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    try {;
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {;
      console.error('Error writing to log file:', error.message);
    };
  };
  async scanDependencies() {;
    try {;
      this.log('🔒 Scanning dependencies for vulnerabilities...');
      const auditResult = execSync('npm audit --json', {;
        cwd: this.projectRoot;
        stdio: 'pipe';
        encoding: 'utf8';});
      const audit = JSON.parse(auditResult);
      return {;
        success: true;
        vulnerabilities: audit.vulnerabilities || {};
        summary: audit.metadata || {};
      };
    } catch (error) {;
      // npm audit might fail if there are vulnerabilities;
      try {;
        const output = error.stdout?.toString() || error.stderr?.toString() || '';
        if (output.includes('npm ERR!')) {;
          return {;
            success: false;
            error: 'Vulnerabilities found';
            output: output;};
        };
      } catch (parseError) {;
        this.log(`Error parsing npm audit output: ${parseError.message}`);
      };
      return {;
        success: false;
        error: error.message;
        output: error.stdout || error.stderr || '';};
    };
  };
  async scanCode() {;
    try {;
      this.log('🔍 Scanning code for security issues...');
      // Check for common security issues in code;
      const securityIssues = [];
      const files = this.getSourceFiles();
      files.forEach(file => {;
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        lines.forEach((line, index) => {;
          const lineNum = index + 1;
          // Check for hardcoded secrets;
          if (line.match(/password\s*=\s*["'][^"']+["']/i)) {;
            securityIssues.push({;
              file: file;
              line: lineNum;
              type: 'hardcoded-password';
              severity: 'high';
              message: 'Hardcoded password detected';});
          };
        }
      } catch (parseError) {
        this.log(`Error parsing npm audit output: ${parseError.message}`);
      }
      return {
        success: false
        error: error.message
        output: error.stdout || error.stderr || ''
      };
    }
  }
  async scanCode() {
    try {
      this.log('🔍 Scanning code for security issues...');
      // Check for common security issues in code
      const securityIssues = [];
      const files = this.getSourceFiles();
      files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        lines.forEach((line, index) => {
          const lineNum = index + 1;
          // Check for hardcoded secrets
          if (line.match(/password\s*=\s*["'][^"']+["']/i)) {
            securityIssues.push({
              file: file
              line: lineNum
              type: 'hardcoded-password'
              severity: 'high'
              message: 'Hardcoded password detected'
            });
          }
          // Check for eval usage
          if (line.includes('eval(')) {
            securityIssues.push({
              file: file
              line: lineNum
              type: 'eval-usage'
              severity: 'high'
              message: 'eval() usage detected - potential security risk'
            });
          }
          // Check for innerHTML usage
          if (line.includes('.innerHTML')) {
            securityIssues.push({
              file: file
              line: lineNum
              type: 'innerhtml-usage'
              severity: 'medium'
              message: 'innerHTML usage detected - potential XSS risk'
            });
          }
          // Check for console.log with sensitive data
          if (line.match(/console\.log.*password|token|key|secret/i)) {
            securityIssues.push({
              file: file
              line: lineNum
              type: 'sensitive-logging'
              severity: 'medium'
              message: 'Potential sensitive data in console.log'
            });
          }
        });
      });
      return {
        success: true
        issues: securityIssues
      };
    } catch (error) {
      return {
        success: false
        error: error.message
        issues: []
      };
    }
  }
  getSourceFiles() {
    const files = [];
    const extensions = ['.js.jsx.ts.tsx'];
    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        items.forEach(item => {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory()) {
            if (!item.includes('node_modules') && !item.includes('.git') && !item.includes('dist')) {
              scanDirectory(fullPath);
            }
          } else if (stat.isFile()) {
            const ext = path.extname(fullPath);
            if (extensions.includes(ext)) {
              files.push(fullPath);
            }
            securityIssues.push({,;
              }
              "fil": "e": file,;
              "lin": "e": lineNum,;
              "typ": "e": 'hardcoded-password',;'
              "severit": "y": 'high',;'
              "messag": "e": 'Hardcoded password detected';'
            });
          }
      }
    };
    scanDirectory(this.projectRoot);
    return files;
  }
  async scanConfigs() {
    try {
      this.log('⚙️  Scanning configuration files...');
      const configIssues = [];
      const configFiles = [
        'package.jsonnext.config.jstsconfig.json.env.env.local.env.production'
      ];
      configFiles.forEach(configFile => {
        const filePath = path.join(this.projectRoot, configFile);
        if (fs.existsSync(filePath)) {
          const content = fs.readFileSync(filePath, 'utf8');
          // Check for exposed secrets in config files
          if (content.match(/password\s*=\s*["'][^"']+["']/i)) {
            configIssues.push({
              file: configFile
              type: 'exposed-secret'
              severity: 'high'
              message: 'Potential secret exposed in configuration file'
            });
          }
          // Check for debug mode in production configs
          if (configFile.includes('production') && content.includes('debug: true')) {
            configIssues.push({
              file: configFile
              type: 'debug-mode'
              severity: 'medium'
              message: 'Debug mode enabled in production configuration'
            });
          }
        }
      });
      return {
        success: true
        issues: configIssues
      };
    };
    scanDirectory(this.projectRoot);
    return files;
  };
  async scanConfigs() {;
    try {;
      this.log('⚙️  Scanning configuration files...');
      const configIssues = [];
      const configFiles = [;
        'package.json';
        'next.config.js';
        'tsconfig.json';
        '.env';
        '.env.local';
        '.env.production';
      ];
      configFiles.forEach(configFile => {;
        const filePath = path.join(this.projectRoot, configFile);
        if (fs.existsSync(filePath)) {;
          const content = fs.readFileSync(filePath, 'utf8');
          // Check for exposed secrets in config files;
          if (content.match(/password\s*=\s*["'][^"']+["']/i)) {;
            configIssues.push({;
              file: configFile;
              type: 'exposed-secret';
              severity: 'high';
              message: 'Potential secret exposed in configuration file';});
          };
          // Check for debug mode in production configs;
          if (configFile.includes('production') && content.includes('debug: true')) {;
            configIssues.push({;
              file: configFile;
              type: 'debug-mode';
              severity: 'medium';
              message: 'Debug mode enabled in production configuration';});
          };
        };
      });
      return {;
        success: true;
        issues: configIssues;};
    } catch (error) {;
      return {;
        success: false;
        error: error.message;
        issues: [];};
    };
  };
  async generateReport(depResults, codeResults, configResults) {;
    const report = {;
      timestamp: new Date().toISOString();
      summary: {;
        dependencies: depResults.success ? 'secure' : 'vulnerable';
        code: codeResults.issues.length === 0 ? 'secure' : 'issues-found';
        configs: configResults.issues.length === 0 ? 'secure' : 'issues-found';
        overall: (depResults.success && codeResults.issues.length === 0 && configResults.issues.length === 0) ? 'secure' : 'issues-found';};
      details: {;
        dependencies: depResults;
        code: codeResults;
        configs: configResults;};
      recommendations: [];};
    // Generate recommendations;
    if (!depResults.success) {;
      report.recommendations.push({;
        priority: 'critical';
        message: 'Dependency vulnerabilities found';
        action: 'Run npm audit fix to resolve vulnerabilities';});
    };
    if (codeResults.issues.length > 0) {;
      const highSeverity = codeResults.issues.filter(issue => issue.severity === 'high').length;
      if (highSeverity > 0) {;
        report.recommendations.push({;
          priority: 'high';
          message: `${highSeverity} high-severity security issues found in code`;
          action: 'Review and fix high-severity security issues';});
      };
    };
    if (configResults.issues.length > 0) {;
      report.recommendations.push({;
        priority: 'medium';
        message: 'Configuration security issues found';
        action: 'Review configuration files for security issues';});
    };
    return report;
  };
  async saveReport(report) {;
    try {;
      const reportDir = path.dirname(this.reportFile);
      if (!fs.existsSync(reportDir)) {;
        fs.mkdirSync(reportDir, { recursive: true });
      };
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved to: ${this.reportFile}`);
    } catch (error) {;
      this.log(`Error saving report: ${error.message}`);
    };
  };
  async run() {;
    this.log('🛡️  Starting Security Scanner...');
    this.log(`Project root: ${this.projectRoot}`);
    try {;
      // Create logs directory if it doesn't exist;
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {;
        fs.mkdirSync(logsDir, { recursive: true });
      };
      // Run all security scans;
      const depResults = await this.scanDependencies();
      const codeResults = await this.scanCode();
      const configResults = await this.scanConfigs();
      // Generate report;
      this.log('📊 Generating security report...');
      const report = await this.generateReport(depResults, codeResults, configResults);
      // Save report;
      await this.saveReport(report);
      const duration = Date.now() - this.startTime;
      // Log summary;
      this.log('\n📊 Security Scanner Summary: ');
      this.log(`Dependencies: ${report.summary.dependencies}`);
      this.log(`Code: ${report.summary.code}`);
      this.log(`Configs: ${report.summary.configs}`);
      this.log(`Overall: ${report.summary.overall}`);
      this.log(`Duration: ${duration}ms`);
      if (report.recommendations.length > 0) {;
        this.log('\n💡 Recommendations: ');
        report.recommendations.forEach(rec => {;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
          this.log(`    Action: ${rec.action}`);
        });
      } else {;
        this.log('\n✨ No security issues found!');
      };
    } catch (error) {;
      this.log(`❌ Error running security scanner: ${error.message}`);
      process.exit(1);
    };
  };
};
// Run the security scanner;
const scanner = new SecurityScanner();
scanner.run().catch(error => {;
  process.exit(1);
}));