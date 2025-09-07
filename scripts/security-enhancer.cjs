const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SecurityEnhancer {
  constructor() {
    this.reportFile = path.join(__dirname, '..', 'security-enhancement-report.json');
    this.enhancements = [];
  }

  log(message) {
    console.log(`[Security Enhancer] ${message}`);
  }

  async auditDependencies() {
    this.log('Auditing dependencies for security vulnerabilities...');
    try {
      const result = execSync('npm audit --json', { encoding: 'utf8' });
      const audit = JSON.parse(result);
      
      this.enhancements.push({
        type: 'dependency_audit',
        vulnerabilities: audit.vulnerabilities || 0,
        status: 'completed'
      });
    } catch (error) {
      this.log(`Error auditing dependencies: ${error.message}`);
    }
  }

  async checkSecurityHeaders() {
    this.log('Checking security headers configuration...');
    try {
      const nextConfigPath = path.join(__dirname, '..', 'next.config.js');
      if (fs.existsSync(nextConfigPath)) {
        const config = fs.readFileSync(nextConfigPath, 'utf8');
        
        const securityHeaders = [
          'X-Frame-Options',
          'X-Content-Type-Options',
          'X-XSS-Protection',
          'Strict-Transport-Security',
          'Content-Security-Policy'
        ];
        
        const foundHeaders = securityHeaders.filter(header => 
          config.includes(header)
        );
        
        this.enhancements.push({
          type: 'security_headers_check',
          configured_headers: foundHeaders.length,
          total_headers: securityHeaders.length,
          status: 'completed'
        });
      }
    } catch (error) {
      this.log(`Error checking security headers: ${error.message}`);
    }
  }

  async scanForSecrets() {
    this.log('Scanning for potential secrets in code...');
    try {
      const patterns = [
        /api[_-]?key\s*[:=]\s*['"][^'"]+['"]/gi,
        /secret\s*[:=]\s*['"][^'"]+['"]/gi,
        /password\s*[:=]\s*['"][^'"]+['"]/gi,
        /token\s*[:=]\s*['"][^'"]+['"]/gi
      ];
      
      const files = this.getAllFiles(path.join(__dirname, '..'));
      const codeFiles = files.filter(file => 
        /\.(js|ts|jsx|tsx|json)$/.test(file) && 
        !file.includes('node_modules') &&
        !file.includes('.git')
      );
      
      let secretCount = 0;
      codeFiles.forEach(file => {
        try {
          const content = fs.readFileSync(file, 'utf8');
          patterns.forEach(pattern => {
            if (pattern.test(content)) {
              secretCount++;
            }
          });
        } catch (error) {
          // Skip files that can't be read
        }
      });
      
      this.enhancements.push({
        type: 'secret_scan',
        potential_secrets: secretCount,
        files_scanned: codeFiles.length,
        status: 'completed'
      });
    } catch (error) {
      this.log(`Error scanning for secrets: ${error.message}`);
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      enhancements: this.enhancements,
      summary: {
        total_checks: this.enhancements.length,
        completed: this.enhancements.filter(enh => enh.status === 'completed').length
      }
    };

    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`Report saved to ${this.reportFile}`);
  }

  getAllFiles(dir) {
    let results = [];
    try {
      const list = fs.readdirSync(dir);
      
      list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat && stat.isDirectory()) {
          results = results.concat(this.getAllFiles(filePath));
        } else {
          results.push(filePath);
        }
      });
    } catch (error) {
      // Skip directories that can't be read
    }
    
    return results;
  }

  async run() {
    this.log('Starting security enhancement...');
    
    await this.auditDependencies();
    await this.checkSecurityHeaders();
    await this.scanForSecrets();
    await this.generateReport();
    
    this.log('Security enhancement completed!');
  }
}

if (require.main === module) {
  const enhancer = new SecurityEnhancer();
  enhancer.run().catch(console.error);
}

module.exports = SecurityEnhancer;