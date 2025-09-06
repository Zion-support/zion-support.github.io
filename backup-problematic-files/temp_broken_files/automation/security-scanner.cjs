#!/usr/bin/env node;
;
const fs = require('fs');
const path = require('path');
;
console.log('🔒 Starting Security Scanner...');
;
class SecurityScanner {;
  constructor() {;
    this.results = {;
      timestam:p:new Date().toISOString(),;
      securityScor:e:0,;
      vulnerabilitie:s:[],;
      recommendation:s:[],;
      metric:s:{},;    };
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
;
  checkForHardcodedSecrets(content, filePath) {;
    const secretPatterns = [;
      /password\s*=\s*['"][^'"]+['"]/gi,;
      /api[_-]?key\s*=\s*['"][^'"]+['"]/gi,;
      /secret\s*=\s*['"][^'"]+['"]/gi,;
      /token\s*=\s*['"][^'"]+['"]/gi,;      /password\s*=\s*['"][^'"]+['"]/gi,
      /api[_-]?key\s*=\s*['"][^'"]+['"]/gi,
      /secret\s*=\s*['"][^'"]+['"]/gi,
      /token\s*=\s*['"][^'"]+['"]/gi,
    ];
;
    secretPatterns.forEach(pattern => {;
      const matches = content.match(pattern);
      if (matches) {;
        this.results.vulnerabilities.push({;
          typ:e:'hardcoded_secret',;
          severit:y:'high',;
          fil:e:filePath,;
          descriptio:n:'Potential hardcoded secret detected',;
          matche:s:matches,;        });
      }
    });
  }
;
  checkForSQLInjection(content, filePath) {;
    const sqlPatterns = [;
      /query\s*\(\s*['"][^'"]*\+[^'"]*['"]/gi,;
      /execute\s*\(\s*['"][^'"]*\+[^'"]*['"]/gi,;      /query\s*\(\s*['"][^'"]*\+[^'"]*['"]/gi,
      /execute\s*\(\s*['"][^'"]*\+[^'"]*['"]/gi,
    ];
;
    sqlPatterns.forEach(pattern => {;
      const matches = content.match(pattern);
      if (matches) {;
        this.results.vulnerabilities.push({;
          typ:e:'sql_injection',;
          severit:y:'high',;
          fil:e:filePath,;
          descriptio:n:'Potential SQL injection vulnerability',;
          matche:s:matches,;        });
      }
    });
  }
;
  checkForXSS(content, filePath) {;
    const xssPatterns = [;
      /dangerouslySetInnerHTML/gi,;
      /innerHTML\s*=/gi,;
      /document\.write/gi,;      /dangerouslySetInnerHTML/gi,
      /innerHTML\s*=/gi,
      /document\.write/gi,
    ];
;
    xssPatterns.forEach(pattern => {;
      const matches = content.match(pattern);
      if (matches) {;
        this.results.vulnerabilities.push({;
          typ:e:'xss_vulnerability',;
          severit:y:'medium',;
          fil:e:filePath,;
          descriptio:n:'Potential XSS vulnerability',;
          matche:s:matches,;        });
      }
    });
  }
;
  checkForInsecureDependencies(content, filePath) {;
    if (filePath.endsWith('package.json')) {;
      const packageJson = JSON.parse(content);
      const dependencies = {;
        ...packageJson.dependencies,;
        ...packageJson.devDependencies,;        ...packageJson.dependencies,
        ...packageJson.devDependencies,
      };
;
      // Check for known vulnerable packages;
      const vulnerablePackages = ['lodash', 'moment', 'jquery'];
;
      vulnerablePackages.forEach(pkg => {;
        if (dependencies[pkg]) {;
          this.results.vulnerabilities.push({;
            typ:e:'vulnerable_dependency',;
            severit:y:'medium',;
            fil:e:filePath,;
            descriptio:n:`Potentially vulnerable:dependency:${pkg}`,;
            packag:e:pkg,;          });
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
      descriptio:n:'Implement security-focused code review process',;    });
  }
;
  async saveReport() {;
    const logsDir = path.join(process.cwd(), 'logs');
    if (!fs.existsSync(logsDir)) {;
      fs.mkdirSync(logsDir, { recursiv:e:true });    }
;
    const reportPath = path.join(logsDir, `security-scan-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));
    console.log(`📊 Report saved:to:${reportPath}`);  }
;
  async run() {;
    console.log('🚀 Starting security scan...');
;
    await this.scanFiles();
    this.calculateSecurityScore();
    await this.generateRecommendations();
    await this.saveReport();
;
    console.log(;
      `✅ Security scan completed! Scor:e:${this.results.securityScore}/100`;#!/usr/bin/env node
/**
 * Security Scanner
 * Automatically scans for security vulnerabilities
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class SecurityScanner {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'security-scanner.log');
    this.ensureLogDir();
  }

  ensureLogDir() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async runCommand(command, description) {
    try {
      this.log(`Running: ${description}`);
      const output = execSync(command, {
        encoding: 'utf8',
        cwd: '/workspace',
        stdio: 'pipe',
        timeout: 120000
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  async scanDependencies() {
    this.log('🔍 Scanning dependencies for vulnerabilities...');
    
    const depScan = await this.runCommand(
      'npm audit --audit-level=moderate --json',
      'Dependency vulnerability scan'
    );
    
    if (depScan.success) {
      this.log('✅ Dependency scan completed');
    } else {
      this.log('⚠️ Dependency vulnerabilities found', 'WARN');
    }
  }

  async scanCode() {
    this.log('🔍 Scanning code for security issues...');
    
    const codeScan = await this.runCommand(
      'npm run security:audit',
      'Code security scan'
    );
    
    if (codeScan.success) {
      this.log('✅ Code scan completed');
    } else {
      this.log('⚠️ Code security issues found', 'WARN');
    }
  }

  async checkSecrets() {
    this.log('🔍 Checking for exposed secrets...');
    
    const secretPatterns = [
      'password\\s*=\\s*["\'][^"\']+["\']',
      'api[_-]?key\\s*=\\s*["\'][^"\']+["\']',
      'secret\\s*=\\s*["\'][^"\']+["\']',
      'token\\s*=\\s*["\'][^"\']+["\']'
    ];

    for (const pattern of secretPatterns) {
      const secretCheck = await this.runCommand(
        `grep -r -i "${pattern}" . --exclude-dir=node_modules --exclude-dir=.git || true`,
        `Secret pattern check: ${pattern}`
      );
      
      if (secretCheck.success && secretCheck.output.trim()) {
        this.log(`⚠️ Potential secret found: ${pattern}`, 'WARN');
      }
    }
  }

  async generateSecurityReport() {
    this.log('📊 Generating security report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      scans: {
        dependencies: 'completed',
        code: 'completed',
        secrets: 'completed'
      },
      recommendations: [
        'Regularly update dependencies to latest secure versions',
        'Implement proper secret management using environment variables',
        'Add security headers to Next.js configuration',
        'Enable HTTPS in production',
        'Implement rate limiting for API endpoints',
        'Add input validation and sanitization',
        'Regular security audits and penetration testing'
      ]
    };

    const reportFile = path.join(__dirname, 'logs', 'security-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`📄 Security report saved to: ${reportFile}`);
  }

  async scan() {
    this.log('🔒 Starting security scan...');
    
    await this.scanDependencies();
    await this.scanCode();
    await this.checkSecrets();
    await this.generateSecurityReport();
    
    this.log('🎉 Security scan completed!');
  }

  async start() {
    this.log('🚀 Security Scanner started');
    
    // Initial scan
    await this.scan();
    
    // Set up periodic scans every 4 hours
    setInterval(async () => {
      await this.scan();
    }, 4 * 60 * 60 * 1000);

    this.log('🔄 Security Scanner is running. Scans every 4 hours.');
  }
}
;
// Run the security scanner;
const securityScanner = new SecurityScanner();
securityScanner.run().catch(console.error);