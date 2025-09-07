const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class SecurityAuditor {
  constructor() {
    this.reportPath = '/workspace/security-report.json';
    this.vulnerabilities = [];
    this.recommendations = [];
  }

  log(message) {
    console.log(`ℹ️ [${new Date().toISOString()}] ${message}`);
  }

  async checkDependencies() {
    this.log('Checking for vulnerable dependencies...');
    
    try {
      const auditOutput = execSync('npm audit --json', { stdio: 'pipe', encoding: 'utf8' });
      const auditData = JSON.parse(auditOutput);
      
      if (auditData.vulnerabilities) {
        Object.entries(auditData.vulnerabilities).forEach(([name, vuln]) => {
          this.vulnerabilities.push({
            type: 'dependency',
            name,
            severity: vuln.severity,
            description: vuln.description,
            recommendation: `Update ${name} to version ${vuln.fixAvailable?.version || 'latest'}`
          });
        });
      }
      
      this.log(`✅ Found ${this.vulnerabilities.length} dependency vulnerabilities`);
    } catch (error) {
      this.log(`❌ Dependency check failed: ${error.message}`);
    }
  }

  async checkSecrets() {
    this.log('Scanning for exposed secrets...');
    
    try {
      const secretPatterns = [
        /api[_-]?key\s*[:=]\s*['"][^'"]{20,}['"]/gi,
        /secret[_-]?key\s*[:=]\s*['"][^'"]{20,}['"]/gi,
        /password\s*[:=]\s*['"][^'"]{8,}['"]/gi,
        /token\s*[:=]\s*['"][^'"]{20,}['"]/gi,
        /private[_-]?key\s*[:=]\s*['"][^'"]{20,}['"]/gi
      ];
      
      const filesToCheck = this.getFilesToCheck();
      let secretCount = 0;
      
      for (const file of filesToCheck) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          
          secretPatterns.forEach(pattern => {
            const matches = content.match(pattern);
            if (matches) {
              matches.forEach(match => {
                this.vulnerabilities.push({
                  type: 'secret',
                  file,
                  pattern: match.substring(0, 20) + '...',
                  recommendation: 'Remove or move secret to environment variables'
                });
                secretCount++;
              });
            }
          });
        } catch (error) {
          // Skip files that can't be read
        }
      }
      
      this.log(`✅ Found ${secretCount} potential secret exposures`);
    } catch (error) {
      this.log(`❌ Secret scan failed: ${error.message}`);
    }
  }

  getFilesToCheck() {
    const files = [];
    const extensions = ['.js', '.jsx', '.ts', '.tsx', '.json', '.env'];
    
    const scanDir = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            scanDir(fullPath);
          } else if (stat.isFile()) {
            const ext = path.extname(item);
            if (extensions.includes(ext)) {
              files.push(fullPath);
            }
          }
        }
      } catch (error) {
        // Skip directories that can't be read
      }
    };
    
    scanDir('/workspace');
    return files;
  }

  async checkHTTPS() {
    this.log('Checking HTTPS configuration...');
    
    try {
      const nextConfigPath = '/workspace/next.config.js';
      
      if (fs.existsSync(nextConfigPath)) {
        const config = fs.readFileSync(nextConfigPath, 'utf8');
        
        if (!config.includes('https') && !config.includes('secure')) {
          this.recommendations.push('Consider enabling HTTPS in production');
        }
      }
    } catch (error) {
      this.log(`❌ HTTPS check failed: ${error.message}`);
    }
  }

  async checkHeaders() {
    this.log('Checking security headers...');
    
    try {
      const middlewarePath = '/workspace/middleware.ts';
      
      if (fs.existsSync(middlewarePath)) {
        const middleware = fs.readFileSync(middlewarePath, 'utf8');
        
        const securityHeaders = [
          'X-Frame-Options',
          'X-Content-Type-Options',
          'X-XSS-Protection',
          'Strict-Transport-Security',
          'Content-Security-Policy'
        ];
        
        const missingHeaders = securityHeaders.filter(header => 
          !middleware.includes(header)
        );
        
        if (missingHeaders.length > 0) {
          this.recommendations.push(`Add security headers: ${missingHeaders.join(', ')}`);
        }
      }
    } catch (error) {
      this.log(`❌ Headers check failed: ${error.message}`);
    }
  }

  async checkEnvironmentVariables() {
    this.log('Checking environment variable security...');
    
    try {
      const envFiles = ['.env', '.env.local', '.env.production'];
      
      for (const envFile of envFiles) {
        const envPath = path.join('/workspace', envFile);
        
        if (fs.existsSync(envPath)) {
          const envContent = fs.readFileSync(envPath, 'utf8');
          
          if (envContent.includes('NODE_ENV=development') && envFile === '.env.production') {
            this.vulnerabilities.push({
              type: 'environment',
              file: envFile,
              issue: 'Development environment in production file',
              recommendation: 'Set NODE_ENV=production in production environment'
            });
          }
        }
      }
    } catch (error) {
      this.log(`❌ Environment check failed: ${error.message}`);
    }
  }

  generateReport() {
    this.log('Generating security report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      vulnerabilities: this.vulnerabilities,
      recommendations: this.recommendations,
      summary: {
        totalVulnerabilities: this.vulnerabilities.length,
        criticalVulnerabilities: this.vulnerabilities.filter(v => v.severity === 'critical').length,
        highVulnerabilities: this.vulnerabilities.filter(v => v.severity === 'high').length,
        mediumVulnerabilities: this.vulnerabilities.filter(v => v.severity === 'medium').length,
        lowVulnerabilities: this.vulnerabilities.filter(v => v.severity === 'low').length
      }
    };
    
    fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
    this.log(`✅ Security report saved to ${this.reportPath}`);
    
    // Display summary
    console.log('\n🔒 SECURITY AUDIT SUMMARY');
    console.log('==========================================');
    console.log(`Total Vulnerabilities: ${report.summary.totalVulnerabilities}`);
    console.log(`Critical: ${report.summary.criticalVulnerabilities}`);
    console.log(`High: ${report.summary.highVulnerabilities}`);
    console.log(`Medium: ${report.summary.mediumVulnerabilities}`);
    console.log(`Low: ${report.summary.lowVulnerabilities}`);
    
    if (this.recommendations.length > 0) {
      console.log('\n💡 RECOMMENDATIONS');
      this.recommendations.forEach((rec, index) => {
        console.log(`${index + 1}. ${rec}`);
      });
    }
  }

  async run() {
    this.log('🔒 Starting Security Audit...');
    
    try {
      await this.checkDependencies();
      await this.checkSecrets();
      await this.checkHTTPS();
      await this.checkHeaders();
      await this.checkEnvironmentVariables();
      
      this.generateReport();
      
      this.log('✅ Security audit completed successfully!');
    } catch (error) {
      this.log(`❌ Security audit failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const auditor = new SecurityAuditor();
  auditor.run();
}

module.exports = SecurityAuditor;