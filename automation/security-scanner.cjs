#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SecurityScanner {
  constructor() {
    this.projectRoot = process.cwd();
    this.results = {
      timestamp: new Date().toISOString(),
      status: 'running',
      scans: [],
      vulnerabilities: [],
      summary: {
        total: 0,
        critical: 0,
        high: 0,
        medium: 0,
        low: 0,
        info: 0
      }
    };
  }

  async runScan(name, scanFunction) {
    console.log(`🔍 Running scan: ${name}`);
    const start = Date.now();
    
    try {
      const result = await scanFunction();
      const duration = Date.now() - start;
      
      this.results.scans.push({
        name,
        status: result.status || 'success',
        duration,
        findings: result.findings || [],
        message: result.message || 'Scan completed'
      });
      
      if (result.findings) {
        this.results.vulnerabilities.push(...result.findings);
        result.findings.forEach(finding => {
          this.results.summary.total++;
          this.results.summary[finding.severity] = (this.results.summary[finding.severity] || 0) + 1;
        });
      }
      
      console.log(`✅ ${name}: ${result.message || 'Completed'}`);
      return result;
    } catch (error) {
      const duration = Date.now() - start;
      this.results.scans.push({
        name,
        status: 'error',
        duration,
        message: error.message,
        error: true
      });
      
      console.log(`❌ ${name}: ${error.message}`);
      return { status: 'error', message: error.message };
    }
  }

  async scanDependencies() {
    try {
      execSync('npm audit --audit-level=moderate', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 60000
      });
      return { 
        status: 'success', 
        message: 'No known vulnerabilities in dependencies',
        findings: []
      };
    } catch (error) {
      const output = error.stdout ? error.stdout.toString() : '';
      const findings = this.parseAuditOutput(output);
      
      return { 
        status: 'warning', 
        message: `Found ${findings.length} vulnerabilities in dependencies`,
        findings
      };
    }
  }

  parseAuditOutput(output) {
    const findings = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('vulnerabilities found')) {
        const match = line.match(/(\d+)\s+(critical|high|moderate|low|info)/);
        if (match) {
          findings.push({
            type: 'dependency',
            severity: match[2],
            description: line.trim(),
            recommendation: 'Run npm audit fix to resolve'
          });
        }
      }
    }
    
    return findings;
  }

  async scanSecrets() {
    const findings = [];
    const sensitivePatterns = [
      { pattern: /password\s*=\s*["'][^"']+["']/gi, severity: 'high', type: 'hardcoded_password' },
      { pattern: /api[_-]?key\s*=\s*["'][^"']+["']/gi, severity: 'high', type: 'hardcoded_api_key' },
      { pattern: /secret\s*=\s*["'][^"']+["']/gi, severity: 'high', type: 'hardcoded_secret' },
      { pattern: /token\s*=\s*["'][^"']+["']/gi, severity: 'medium', type: 'hardcoded_token' },
      { pattern: /private[_-]?key\s*=\s*["'][^"']+["']/gi, severity: 'critical', type: 'hardcoded_private_key' }
    ];
    
    const filesToScan = [
      'pages/**/*.{js,jsx,ts,tsx}',
      'components/**/*.{js,jsx,ts,tsx}',
      'lib/**/*.{js,jsx,ts,tsx}',
      'utils/**/*.{js,jsx,ts,tsx}',
      '*.{js,jsx,ts,tsx}',
      '*.json',
      '*.env*'
    ];
    
    for (const pattern of filesToScan) {
      try {
        const files = this.globFiles(pattern);
        for (const file of files) {
          const content = fs.readFileSync(file, 'utf8');
          
          for (const { pattern: regex, severity, type } of sensitivePatterns) {
            const matches = content.match(regex);
            if (matches) {
              findings.push({
                type,
                severity,
                file,
                description: `Potential hardcoded ${type.replace('_', ' ')} found`,
                recommendation: 'Use environment variables instead'
              });
            }
          }
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }
    
    return {
      status: findings.length > 0 ? 'warning' : 'success',
      message: findings.length > 0 ? `Found ${findings.length} potential secrets` : 'No hardcoded secrets found',
      findings
    };
  }

  globFiles(pattern) {
    const glob = require('glob');
    return glob.sync(pattern, { cwd: this.projectRoot });
  }

  async scanFilePermissions() {
    const findings = [];
    const sensitiveFiles = [
      'package.json',
      'package-lock.json',
      '.env',
      '.env.local',
      '.env.production'
    ];
    
    for (const file of sensitiveFiles) {
      const filePath = path.join(this.projectRoot, file);
      if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        const mode = stats.mode & parseInt('777', 8);
        
        if (mode > parseInt('644', 8)) {
          findings.push({
            type: 'file_permission',
            severity: 'medium',
            file,
            description: `File has overly permissive permissions (${mode.toString(8)})`,
            recommendation: 'Set file permissions to 644 or more restrictive'
          });
        }
      }
    }
    
    return {
      status: findings.length > 0 ? 'warning' : 'success',
      message: findings.length > 0 ? `Found ${findings.length} permission issues` : 'File permissions are secure',
      findings
    };
  }

  async scanContentSecurityPolicy() {
    const findings = [];
    const pagesDir = path.join(this.projectRoot, 'pages');
    
    if (fs.existsSync(pagesDir)) {
      const files = this.globFiles('pages/**/*.{js,jsx,ts,tsx}');
      
      for (const file of files) {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for unsafe inline scripts
        if (content.includes('dangerouslySetInnerHTML')) {
          findings.push({
            type: 'csp_violation',
            severity: 'medium',
            file,
            description: 'Use of dangerouslySetInnerHTML detected',
            recommendation: 'Sanitize content or use safer alternatives'
          });
        }
        
        // Check for eval usage
        if (content.includes('eval(') || content.includes('Function(')) {
          findings.push({
            type: 'csp_violation',
            severity: 'high',
            file,
            description: 'Use of eval() or Function() detected',
            recommendation: 'Avoid dynamic code execution'
          });
        }
      }
    }
    
    return {
      status: findings.length > 0 ? 'warning' : 'success',
      message: findings.length > 0 ? `Found ${findings.length} CSP issues` : 'No CSP violations found',
      findings
    };
  }

  async run() {
    console.log('🔒 Starting Security Scan...\n');
    
    await this.runScan('Dependency Vulnerabilities', () => this.scanDependencies());
    await this.runScan('Hardcoded Secrets', () => this.scanSecrets());
    await this.runScan('File Permissions', () => this.scanFilePermissions());
    await this.runScan('Content Security Policy', () => this.scanContentSecurityPolicy());
    
    this.results.status = this.results.summary.critical > 0 || this.results.summary.high > 0 ? 'failed' : 'success';
    
    console.log('\n📊 Security Scan Summary:');
    console.log(`   Total findings: ${this.results.summary.total}`);
    console.log(`   🔴 Critical: ${this.results.summary.critical}`);
    console.log(`   🟠 High: ${this.results.summary.high}`);
    console.log(`   🟡 Medium: ${this.results.summary.medium}`);
    console.log(`   🔵 Low: ${this.results.summary.low}`);
    console.log(`   ℹ️  Info: ${this.results.summary.info}`);
    
    // Save report
    const reportPath = path.join(this.projectRoot, 'security-scan-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));
    console.log(`\n📄 Report saved to: ${reportPath}`);
    
    if (this.results.summary.critical > 0 || this.results.summary.high > 0) {
      console.log('\n❌ Security scan failed - critical or high severity issues found');
      process.exit(1);
    } else {
      console.log('\n✅ Security scan passed - no critical issues found');
      process.exit(0);
    }
  }
}

// Run security scan if called directly
if (require.main === module) {
  const securityScanner = new SecurityScanner();
  securityScanner.run().catch(error => {
    console.error('Security scan failed:', error);
    process.exit(1);
  });
}

module.exports = SecurityScanner;