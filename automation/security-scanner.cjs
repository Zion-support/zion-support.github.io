const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SecurityScanner {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'security-scanner.log');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runSecurityAudit() {
    this.log('Running npm security audit...');
    try {
      const result = execSync('npm audit --audit-level moderate', { 
        encoding: 'utf8', 
        cwd: '/workspace',
        stdio: 'pipe'
      });
      this.log('Security audit completed');
      return { success: true, output: result };
    } catch (error) {
      this.log(`Security audit found issues: ${error.message}`);
      return { success: false, error: error.message, output: error.stdout };
    }
  }

  async checkDependencies() {
    this.log('Checking for vulnerable dependencies...');
    try {
      const result = execSync('npm audit --audit-level high', { 
        encoding: 'utf8', 
        cwd: '/workspace',
        stdio: 'pipe'
      });
      this.log('Dependency security check completed');
      return { success: true, output: result };
    } catch (error) {
      this.log(`High-severity vulnerabilities found: ${error.message}`);
      return { success: false, error: error.message, output: error.stdout };
    }
  }

  async scanForSecrets() {
    this.log('Scanning for potential secrets...');
    try {
      // This would typically use a tool like truffleHog or git-secrets
      const sensitivePatterns = [
        'password',
        'secret',
        'key',
        'token',
        'api_key',
        'private_key'
      ];
      
      let foundSecrets = [];
      const files = this.getAllFiles('/workspace');
      
      for (const file of files) {
        if (file.includes('node_modules') || file.includes('.git')) continue;
        
        try {
          const content = fs.readFileSync(file, 'utf8');
          for (const pattern of sensitivePatterns) {
            if (content.toLowerCase().includes(pattern)) {
              foundSecrets.push({ file, pattern });
            }
          }
        } catch (err) {
          // Skip binary files
        }
      }
      
      if (foundSecrets.length > 0) {
        this.log(`Potential secrets found in ${foundSecrets.length} files`);
        return { success: false, secrets: foundSecrets };
      } else {
        this.log('No potential secrets found');
        return { success: true };
      }
    } catch (error) {
      this.log(`Secret scanning failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  getAllFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        this.getAllFiles(filePath, fileList);
      } else {
        fileList.push(filePath);
      }
    });
    
    return fileList;
  }

  async generateSecurityReport() {
    this.log('Generating security report...');
    
    const results = {
      audit: await this.runSecurityAudit(),
      dependencies: await this.checkDependencies(),
      secrets: await this.scanForSecrets(),
    };

    const report = {
      timestamp: new Date().toISOString(),
      results,
      summary: {
        totalChecks: Object.keys(results).length,
        passedChecks: Object.values(results).filter(r => r.success).length,
        failedChecks: Object.values(results).filter(r => !r.success).length,
      }
    };

    const reportFile = path.join(__dirname, 'logs', 'security-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`Security report generated: ${reportFile}`);
    
    return report;
  }
}

// Run the security scanner
if (require.main === module) {
  const scanner = new SecurityScanner();
  scanner.generateSecurityReport().catch(console.error);
}

module.exports = SecurityScanner;