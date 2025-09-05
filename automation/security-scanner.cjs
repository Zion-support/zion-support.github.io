#!/usr/bin/env node;
;
const fs = require('fs');
const path = require('path');
;
console.log('🔒 Starting Security Scanner...');
<<<<<<< HEAD
;
class SecurityScanner {;
  constructor() {;
    this.results = {;
      timestam:p:new Date().toISOString(),;
      securityScor:e:0,;
      vulnerabilitie:s:[],;
      recommendation:s:[],;
      metric:s:{},;
=======

class SecurityScanner {
  constructor() {
    this.results = {
      timestamp: new Date().toISOString(),
      securityScore: 0,
      vulnerabilities: [],
      recommendations: [],
      metrics: {},
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
    };
  }
;
  async scanFiles() {;
    console.log('🔍 Scanning files for security issues...');
;
    const filesToScan = this.findFilesToScan();
    this.results.metrics.totalFilesScanned = filesToScan.length;
;
    for (const file of filesToScan) {;
      await this.scanFile(file);
    }
  }
;
  findFilesToScan() {;
    const files = [];
    const extensions = ['.js', '.jsx', '.ts', '.tsx', '.json'];
;
    const scanDirectory = dir => {;
      if (!fs.existsSync(dir)) return;
;
      const items = fs.readdirSync(dir);
      items.forEach(item => {;
        const itemPath = path.join(dir, item);
        const stats = fs.statSync(itemPath);
;
        if (;
          stats.isDirectory() &&;
          !item.startsWith('.') &&;
          item !== 'node_modules';
        ) {;
          scanDirectory(itemPath);
        } else if (;
          stats.isFile() &&;
          extensions.some(ext => item.endsWith(ext));
        ) {;
          files.push(itemPath);
        }
      });
    };
;
    scanDirectory(process.cwd());
    return files;
  }
;
  async scanFile(filePath) {;
    try {;
      const content = fs.readFileSync(filePath, 'utf8');
;
      // Check for common security issues;
      this.checkForHardcodedSecrets(content, filePath);
      this.checkForSQLInjection(content, filePath);
      this.checkForXSS(content, filePath);
      this.checkForInsecureDependencies(content, filePath);
    } catch (error) {;
      console.error(`Error scanning file ${filePath} `, error.message);
    }
  }
<<<<<<< HEAD
;
  checkForHardcodedSecrets(content, filePath) {;
    const secretPatterns = [;
      /password\s*=\s*['"][^'"]+['"]/gi,;
      /api[_-]?key\s*=\s*['"][^'"]+['"]/gi,;
      /secret\s*=\s*['"][^'"]+['"]/gi,;
      /token\s*=\s*['"][^'"]+['"]/gi,;
=======

  checkForHardcodedSecrets(content, filePath) {
    const secretPatterns = [
<<<<<<< HEAD
      /password\s*=\s*['"][^'"]+['"]/gi;
      /api[_-]?key\s*=\s*['"][^'"]+['"]/gi;
      /secret\s*=\s*['"][^'"]+['"]/gi;
      /token\s*=\s*['"][^'"]+['"]/gi;
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
=======
      /password\s*=\s*['"][^'"]+['"]/gi,
      /api[_-]?key\s*=\s*['"][^'"]+['"]/gi,
      /secret\s*=\s*['"][^'"]+['"]/gi,
      /token\s*=\s*['"][^'"]+['"]/gi,
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
    ];
;
    secretPatterns.forEach(pattern => {;
      const matches = content.match(pattern);
<<<<<<< HEAD
      if (matches) {;
        this.results.vulnerabilities.push({;
          typ:e:'hardcoded_secret',;
          severit:y:'high',;
          fil:e:filePath,;
          descriptio:n:'Potential hardcoded secret detected',;
          matche:s:matches,;
=======
      if (matches) {
        this.results.vulnerabilities.push({
          type: 'hardcoded_secret',
          severity: 'high',
          file: filePath,
          description: 'Potential hardcoded secret detected',
          matches: matches,
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
        });
      }
    });
  }
<<<<<<< HEAD
;
  checkForSQLInjection(content, filePath) {;
    const sqlPatterns = [;
      /query\s*\(\s*['"][^'"]*\+[^'"]*['"]/gi,;
      /execute\s*\(\s*['"][^'"]*\+[^'"]*['"]/gi,;
=======

  checkForSQLInjection(content, filePath) {
    const sqlPatterns = [
<<<<<<< HEAD
      /query\s*\(\s*['"][^'"]*\+[^'"]*['"]/gi;
      /execute\s*\(\s*['"][^'"]*\+[^'"]*['"]/gi;
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
=======
      /query\s*\(\s*['"][^'"]*\+[^'"]*['"]/gi,
      /execute\s*\(\s*['"][^'"]*\+[^'"]*['"]/gi,
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
    ];
;
    sqlPatterns.forEach(pattern => {;
      const matches = content.match(pattern);
<<<<<<< HEAD
      if (matches) {;
        this.results.vulnerabilities.push({;
          typ:e:'sql_injection',;
          severit:y:'high',;
          fil:e:filePath,;
          descriptio:n:'Potential SQL injection vulnerability',;
          matche:s:matches,;
=======
      if (matches) {
        this.results.vulnerabilities.push({
          type: 'sql_injection',
          severity: 'high',
          file: filePath,
          description: 'Potential SQL injection vulnerability',
          matches: matches,
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
        });
      }
    });
  }
<<<<<<< HEAD
;
  checkForXSS(content, filePath) {;
    const xssPatterns = [;
      /dangerouslySetInnerHTML/gi,;
      /innerHTML\s*=/gi,;
      /document\.write/gi,;
=======

  checkForXSS(content, filePath) {
    const xssPatterns = [
<<<<<<< HEAD
      /dangerouslySetInnerHTML/gi;
      /innerHTML\s*=/gi;
      /document\.write/gi;
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
=======
      /dangerouslySetInnerHTML/gi,
      /innerHTML\s*=/gi,
      /document\.write/gi,
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
    ];
;
    xssPatterns.forEach(pattern => {;
      const matches = content.match(pattern);
<<<<<<< HEAD
      if (matches) {;
        this.results.vulnerabilities.push({;
          typ:e:'xss_vulnerability',;
          severit:y:'medium',;
          fil:e:filePath,;
          descriptio:n:'Potential XSS vulnerability',;
          matche:s:matches,;
=======
      if (matches) {
        this.results.vulnerabilities.push({
          type: 'xss_vulnerability',
          severity: 'medium',
          file: filePath,
          description: 'Potential XSS vulnerability',
          matches: matches,
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
        });
      }
    });
  }
;
  checkForInsecureDependencies(content, filePath) {;
    if (filePath.endsWith('package.json')) {;
      const packageJson = JSON.parse(content);
<<<<<<< HEAD
      const dependencies = {;
        ...packageJson.dependencies,;
        ...packageJson.devDependencies,;
=======
      const dependencies = {
<<<<<<< HEAD
        ...packageJson.dependencies;
        ...packageJson.devDependencies;
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
=======
        ...packageJson.dependencies,
        ...packageJson.devDependencies,
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
      };
;
      // Check for known vulnerable packages;
      const vulnerablePackages = ['lodash', 'moment', 'jquery'];
<<<<<<< HEAD
;
      vulnerablePackages.forEach(pkg => {;
        if (dependencies[pkg]) {;
          this.results.vulnerabilities.push({;
            typ:e:'vulnerable_dependency',;
            severit:y:'medium',;
            fil:e:filePath,;
            descriptio:n:`Potentially vulnerable:dependency:${pkg}`,;
            packag:e:pkg,;
=======

      vulnerablePackages.forEach(pkg => {
        if (dependencies[pkg]) {
          this.results.vulnerabilities.push({
            type: 'vulnerable_dependency',
            severity: 'medium',
            file: filePath,
            description: `Potentially vulnerable dependency: ${pkg}`,
            package: pkg,
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
          });
        }
      });
    }
  }
;
  calculateSecurityScore() {;
    const totalVulnerabilities = this.results.vulnerabilities.length;
    const highSeverityVulns = this.results.vulnerabilities.filter(;
      v => v.severity === 'high';
    ).length;
    const mediumSeverityVulns = this.results.vulnerabilities.filter(;
      v => v.severity === 'medium';
    ).length;
;
    let score = 100;
    score -= highSeverityVulns * 30;
    score -= mediumSeverityVulns * 15;
    score -=;
      (totalVulnerabilities - highSeverityVulns - mediumSeverityVulns) * 5;
;
    this.results.securityScore = Math.max(0, score);
  }
;
  async generateRecommendations() {;
    console.log('💡 Generating security recommendations...');
;
    const highSeverityVulns = this.results.vulnerabilities.filter(;
      v => v.severity === 'high';
    );
<<<<<<< HEAD
;
    if (highSeverityVulns.length > 0) {;
      this.results.recommendations.push({;
        typ:e:'immediate_fix',;
        priorit:y:'critical',;
        descriptio:n:'Fix high severity vulnerabilities immediately',;
      });
    }
;
    this.results.recommendations.push({;
      typ:e:'security_audit',;
      priorit:y:'high',;
      descriptio:n:'Run regular security audits with npm audit',;
    });
;
    this.results.recommendations.push({;
      typ:e:'dependency_update',;
      priorit:y:'medium',;
      descriptio:n:'Keep dependencies updated to latest secure versions',;
    });
;
    this.results.recommendations.push({;
      typ:e:'code_review',;
      priorit:y:'medium',;
      descriptio:n:'Implement security-focused code review process',;
=======

    if (highSeverityVulns.length > 0) {
      this.results.recommendations.push({
        type: 'immediate_fix',
        priority: 'critical',
        description: 'Fix high severity vulnerabilities immediately',
      });
    }

    this.results.recommendations.push({
      type: 'security_audit',
      priority: 'high',
      description: 'Run regular security audits with npm audit',
    });

    this.results.recommendations.push({
      type: 'dependency_update',
      priority: 'medium',
      description: 'Keep dependencies updated to latest secure versions',
    });

    this.results.recommendations.push({
      type: 'code_review',
      priority: 'medium',
      description: 'Implement security-focused code review process',
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
    });
  }
;
  async saveReport() {;
    const logsDir = path.join(process.cwd(), 'logs');
<<<<<<< HEAD
    if (!fs.existsSync(logsDir)) {;
      fs.mkdirSync(logsDir, { recursiv:e:true });
=======
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
    }
;
    const reportPath = path.join(logsDir, `security-scan-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));
<<<<<<< HEAD
    console.log(`📊 Report saved:to:${reportPath}`);
=======
    console.log(`📊 Report saved to: ${reportPath}`);
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
  }
;
  async run() {;
    console.log('🚀 Starting security scan...');
;
    await this.scanFiles();
    this.calculateSecurityScore();
    await this.generateRecommendations();
    await this.saveReport();
<<<<<<< HEAD
;
    console.log(;
      `✅ Security scan completed! Scor:e:${this.results.securityScore}/100`;
=======

    console.log(
      `✅ Security scan completed! Score: ${this.results.securityScore}/100`
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
    );
  }
}
;
// Run the security scanner;
const securityScanner = new SecurityScanner();
securityScanner.run().catch(console.error);
