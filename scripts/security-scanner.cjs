#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔒 Zion Tech Group - Security Scanner');
console.log('====================================');

class SecurityScanner {
  constructor() {
    this.projectRoot = process.cwd();
    this.results = {
      vulnerabilities: [],
      securityIssues: [],
      recommendations: []
    }}

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'error' ? '❌' : type === 'success' ? '✅' : 'ℹ️';
    console.log(`[${timestamp}] ${prefix} ${message}`)}

  async scanDependencies() {
    this.log('📦 Scanning dependencies for vulnerabilities...');
    
    try {
      // Run npm audit
      const auditResult = execSync('npm audit --json', { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const auditData = JSON.parse(auditResult);
      
      if (auditData.vulnerabilities) {
        const vulnCount = Object.keys(auditData.vulnerabilities).length;
        this.log(`Found ${vulnCount} vulnerabilities in dependencies`);
        
        for (const [packageName, vuln] of Object.entries(auditData.vulnerabilities)) {
          this.results.vulnerabilities.push({
            package: packageName,
            severity: vuln.severity,
            title: vuln.title,
            description: vuln.description
          })}
      } else {
        this.log('No vulnerabilities found in dependencies', 'success')}
    } catch (error) {
      this.log(`Dependency scan failed: ${error.message}`, 'error')}
  }

  async scanEnvironmentFiles() {
    this.log('🔐 Scanning environment files for security issues...');
    
    const envFiles = ['.env', '.env.local', '.env.development', '.env.production'];
    const sensitivePatterns = [
      /password/i,
      /secret/i,
      /key/i,
      /token/i,
      /api[_-]?key/i,
      /private[_-]?key/i
    ];
    
    for (const envFile of envFiles) {
      const envPath = path.join(this.projectRoot, envFile);
      if (fs.existsSync(envPath)) {
        try {
          const content = fs.readFileSync(envPath, 'utf8');
          const lines = content.split('\n');
          
          for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line && !line.startsWith('#')) {
              for (const pattern of sensitivePatterns) {
                if (pattern.test(line)) {
                  this.results.securityIssues.push({
                    file: envFile,
                    line: i + 1,
                    issue: 'Potential sensitive data exposure',
                    content: line.split('=')[0] + '=***'
                  })}
              }
            }
          }
        } catch (error) {
          this.log(`Error reading ${envFile}: ${error.message}`, 'error')}
      }
    }
    
    if (this.results.securityIssues.length > 0) {
      this.log(`Found ${this.results.securityIssues.length} potential security issues in environment files`)} else {
      this.log('No security issues found in environment files', 'success')}
  }

  async scanCodeForSecurityIssues() {
    this.log('🔍 Scanning code for security vulnerabilities...');
    
    const securityPatterns = [
      {
        pattern: /eval\s*\(/g,
        issue: 'Use of eval() - potential code injection vulnerability',
        severity: 'high'
      },
      {
        pattern: /innerHTML\s*=/g,
        issue: 'Use of innerHTML - potential XSS vulnerability',
        severity: 'medium'
      },
      {
        pattern: /document\.write\s*\(/g,
        issue: 'Use of document.write() - potential XSS vulnerability',
        severity: 'medium'
      },
      {
        pattern: /localStorage\.setItem\s*\(/g,
        issue: 'Use of localStorage - potential data exposure',
        severity: 'low'
      },
      {
        pattern: /sessionStorage\.setItem\s*\(/g,
        issue: 'Use of sessionStorage - potential data exposure',
        severity: 'low'
      }
    ];
    
    const codeFiles = this.getCodeFiles();
    let issuesFound = 0;
    
    for (const file of codeFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        for (const { pattern, issue, severity } of securityPatterns) {
          const matches = content.match(pattern);
          if (matches) {
            issuesFound += matches.length;
            this.results.securityIssues.push({
              file: path.relative(this.projectRoot, file),
              issue,
              severity,
              count: matches.length
            })}
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }
    
    if (issuesFound > 0) {
      this.log(`Found ${issuesFound} potential security issues in code`)} else {
      this.log('No security issues found in code', 'success')}
  }

  getCodeFiles() {
    const codeFiles = [];
    const extensions = ['.js', '.jsx', '.ts', '.tsx'];
    
    const scanDirectory = (dir) => {
      try {
        const files = fs.readdirSync(dir);
        for (const file of files) {
          const fullPath = path.join(dir, file);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
            scanDirectory(fullPath)} else if (stat.isFile() && extensions.some(ext => file.endsWith(ext))) {
            codeFiles.push(fullPath)}
        }
      } catch (error) {
        // Skip directories that can't be read
      }
    };
    
    scanDirectory(this.projectRoot);
    return codeFiles}

  async generateSecurityReport() {
    this.log('📊 Generating security report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        vulnerabilities: this.results.vulnerabilities.length,
        securityIssues: this.results.securityIssues.length,
        totalIssues: this.results.vulnerabilities.length + this.results.securityIssues.length
      },
      results: this.results,
      recommendations: [
        'Update vulnerable dependencies immediately',
        'Use environment variables for sensitive data',
        'Implement Content Security Policy (CSP)',
        'Use HTTPS for all communications',
        'Implement proper input validation',
        'Use parameterized queries to prevent SQL injection',
        'Implement rate limiting',
        'Regular security audits and penetration testing',
        'Use security headers (HSTS, X-Frame-Options, etc.)',
        'Implement proper authentication and authorization'
      ]
    };

    const reportPath = path.join(this.projectRoot, 'security-scan-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`Security report saved to: ${reportPath}`, 'success');
    return report}

  async runSecurityScan() {
    try {
      this.log('🚀 Starting security scan...');
      
      await this.scanDependencies();
      await this.scanEnvironmentFiles();
      await this.scanCodeForSecurityIssues();
      
      const report = await this.generateSecurityReport();
      
      this.log('🎉 Security scan completed!');
      this.log(`📊 Summary: ${report.summary.totalIssues} security issues found`);
      
      if (report.summary.vulnerabilities > 0) {
        this.log(`⚠️ ${report.summary.vulnerabilities} dependency vulnerabilities found`)}
      
      if (report.summary.securityIssues > 0) {
        this.log(`⚠️ ${report.summary.securityIssues} code security issues found`)}
      
    } catch (error) {
      this.log(`❌ Security scan failed: ${error.message}`, 'error');
      process.exit(1)}
  }
}

// Run the security scanner
if (require.main === module) {
  const scanner = new SecurityScanner();
  scanner.runSecurityScan().catch(console.error)}

module.exports = SecurityScanner;