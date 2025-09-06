#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SecurityScanner {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'security-scan.log');
    this.resultsFile = path.join(__dirname, 'reports', 'security-results.json');
    this.ensureDirectories();
    this.vulnerabilities = [];
    this.results = {
      timestamp: new Date().toISOString(),
      vulnerabilities: [],
      status: 'pending'
    };
  }

  ensureDirectories() {
    const dirs = ['logs', 'reports'];
    dirs.forEach(dir => {
      const dirPath = path.join(__dirname, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runSecurityAudit() {
    try {
      this.log('Running security audit...');
      const output = execSync('npm audit --json', { stdio: 'pipe' });
      const auditResult = JSON.parse(output.toString());
      
      if (auditResult.vulnerabilities) {
        const vulnCount = Object.keys(auditResult.vulnerabilities).length;
        this.vulnerabilities.push(`${vulnCount} vulnerabilities found`);
        this.log(`${vulnCount} vulnerabilities found`, 'WARN');
      } else {
        this.log('No vulnerabilities found');
      }
      
      this.results.vulnerabilities = auditResult.vulnerabilities || {};
      this.results.status = 'completed';
      
    } catch (error) {
      this.log(`Security audit failed: ${error.message}`, 'ERROR');
      this.results.status = 'failed';
      this.results.error = error.message;
    }
  }

  async scanDependencies() {
    try {
      this.log('Scanning dependencies...');
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      const depCount = Object.keys(dependencies).length;
      this.log(`Found ${depCount} dependencies`);
      
      // Check for known problematic packages
      const problematicPackages = ['eval', 'vm', 'child_process'];
      const foundProblematic = Object.keys(dependencies).filter(dep => 
        problematicPackages.some(problematic => dep.includes(problematic))
      );
      
      if (foundProblematic.length > 0) {
        this.vulnerabilities.push(`Potentially problematic packages: ${foundProblematic.join(', ')}`);
        this.log(`Potentially problematic packages found: ${foundProblematic.join(', ')}`, 'WARN');
      }
      
    } catch (error) {
      this.log(`Dependency scan failed: ${error.message}`, 'ERROR');
    }
  }

  async scanFiles() {
    try {
      this.log('Scanning files for security issues...');
      const files = this.getSourceFiles();
      let issuesFound = 0;
      
      files.forEach(file => {
        try {
          const content = fs.readFileSync(file, 'utf8');
          
          // Check for common security issues
          if (content.includes('eval(')) {
            this.vulnerabilities.push(`eval() usage found in ${file}`);
            issuesFound++;
          }
          
          if (content.includes('innerHTML')) {
            this.vulnerabilities.push(`innerHTML usage found in ${file}`);
            issuesFound++;
          }
          
          if (content.includes('document.write')) {
            this.vulnerabilities.push(`document.write usage found in ${file}`);
            issuesFound++;
          }
          
        } catch (error) {
          this.log(`Error scanning file ${file}: ${error.message}`, 'WARN');
        }
      });
      
      if (issuesFound > 0) {
        this.log(`${issuesFound} potential security issues found in files`, 'WARN');
      } else {
        this.log('No security issues found in files');
      }
      
    } catch (error) {
      this.log(`File scan failed: ${error.message}`, 'ERROR');
    }
  }

  getSourceFiles() {
    const files = [];
    const walkDir = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        items.forEach(item => {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            walkDir(fullPath);
          } else if (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.tsx')) {
            files.push(fullPath);
          }
        });
      } catch (error) {
        // Skip directories we can't read
      }
    };
    walkDir(process.cwd());
    return files;
  }

  saveResults() {
    try {
      this.results.vulnerabilities = this.vulnerabilities;
      this.results.timestamp = new Date().toISOString();
      fs.writeFileSync(this.resultsFile, JSON.stringify(this.results, null, 2));
      this.log(`Security scan results saved to ${this.resultsFile}`);
    } catch (error) {
      this.log(`Error saving results: ${error.message}`, 'ERROR');
    }
  }

  async run() {
    try {
      this.log('Starting security scan...');
      
      await this.runSecurityAudit();
      await this.scanDependencies();
      await this.scanFiles();
      
      this.saveResults();
      
      const vulnCount = this.vulnerabilities.length;
      if (vulnCount > 0) {
        this.log(`Security scan completed with ${vulnCount} issues found`, 'WARN');
      } else {
        this.log('Security scan completed - no issues found');
      }
      
    } catch (error) {
      this.log(`Security scan failed: ${error.message}`, 'ERROR');
      this.results.status = 'failed';
      this.saveResults();
    }
  }
}

if (require.main === module) {
  const scanner = new SecurityScanner();
  scanner.run();
}

module.exports = SecurityScanner;