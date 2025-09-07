#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class SecurityEnhancementSuite {
  constructor() {
    this.projectRoot = process.cwd();
    this.securityChecks = [];
    this.vulnerabilities = [];
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async runCommand(command, description) {
    this.log(`🚀 Starting: ${description}`);
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: "utf8",
        timeout: 300000,
        stdio: "pipe"
      });
      this.log(`✅ Completed: ${description}`);
      this.securityChecks.push({
        command,
        description,
        success: true,
        output: result
      });
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ Failed: ${description} - ${error.message}`);
      this.vulnerabilities.push(`${description}: ${error.message}`);
      this.securityChecks.push({
        command,
        description,
        success: false,
        error: error.message
      });
      return { success: false, error: error.message };
    }
  }

  async auditDependencies() {
    this.log("🔒 Auditing dependencies for security vulnerabilities...");
    try {
      await this.runCommand("npm audit", "Security audit");
      await this.runCommand("npm audit fix", "Fixing security vulnerabilities");
    } catch (error) {
      this.log(`Dependency audit failed: ${error.message}`);
    }
  }

  async checkEnvironmentVariables() {
    this.log("🔐 Checking environment variables...");
    
    const envFiles = ['.env', '.env.local', '.env.production', '.env.development'];
    const issues = [];
    
    for (const envFile of envFiles) {
      const envPath = path.join(this.projectRoot, envFile);
      if (fs.existsSync(envPath)) {
        try {
          const content = fs.readFileSync(envPath, 'utf8');
          const lines = content.split('\n');
          
          for (const line of lines) {
            if (line.includes('=') && !line.startsWith('#')) {
              const [key, value] = line.split('=');
              
              // Check for sensitive data
              if (key.toLowerCase().includes('password') || 
                  key.toLowerCase().includes('secret') || 
                  key.toLowerCase().includes('key') || 
                  key.toLowerCase().includes('token')) {
                
                if (!value || value.length < 8) {
                  issues.push(`Weak ${key} in ${envFile}`);
                }
                
                if (value.includes('123456') || value.includes('password')) {
                  issues.push(`Insecure ${key} in ${envFile}`);
                }
              }
            }
          }
        } catch (error) {
          this.log(`Failed to check ${envFile}: ${error.message}`);
        }
      }
    }
    
    if (issues.length > 0) {
      this.log("⚠️ Environment variable issues found:");
      issues.forEach(issue => this.log(`  - ${issue}`));
    } else {
      this.log("✅ Environment variables look secure");
    }
  }

  async checkHTTPSConfiguration() {
    this.log("🔒 Checking HTTPS configuration...");
    
    const nextConfigPath = path.join(this.projectRoot, 'next.config.js');
    if (fs.existsSync(nextConfigPath)) {
      try {
        const content = fs.readFileSync(nextConfigPath, 'utf8');
        
        if (!content.includes('https') && !content.includes('secure')) {
          this.log("⚠️ Consider adding HTTPS configuration to next.config.js");
        }
        
        if (!content.includes('headers')) {
          this.log("⚠️ Consider adding security headers to next.config.js");
        }
      } catch (error) {
        this.log(`Failed to check next.config.js: ${error.message}`);
      }
    }
  }

  async checkContentSecurityPolicy() {
    this.log("🛡️ Checking Content Security Policy...");
    
    // Look for CSP configuration
    const files = ['next.config.js', 'middleware.ts', 'pages/_document.tsx'];
    
    for (const file of files) {
      const filePath = path.join(this.projectRoot, file);
      if (fs.existsSync(filePath)) {
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          
          if (!content.includes('Content-Security-Policy') && 
              !content.includes('csp') && 
              !content.includes('CSP')) {
            this.log(`⚠️ Consider adding CSP to ${file}`);
          }
        } catch (error) {
          this.log(`Failed to check ${file}: ${error.message}`);
        }
      }
    }
  }

  async checkDependencies() {
    this.log("📦 Checking for outdated dependencies...");
    try {
      await this.runCommand("npm outdated", "Checking outdated packages");
    } catch (error) {
      this.log(`Dependency check failed: ${error.message}`);
    }
  }

  async checkSecrets() {
    this.log("🔍 Scanning for secrets and sensitive data...");
    
    const sensitivePatterns = [
      /password\s*=\s*['"][^'"]+['"]/gi,
      /secret\s*=\s*['"][^'"]+['"]/gi,
      /key\s*=\s*['"][^'"]+['"]/gi,
      /token\s*=\s*['"][^'"]+['"]/gi,
      /api[_-]?key\s*=\s*['"][^'"]+['"]/gi,
      /private[_-]?key\s*=\s*['"][^'"]+['"]/gi
    ];
    
    const filesToCheck = this.findCodeFiles(this.projectRoot);
    const foundSecrets = [];
    
    for (const file of filesToCheck) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        for (const pattern of sensitivePatterns) {
          const matches = content.match(pattern);
          if (matches) {
            matches.forEach(match => {
              foundSecrets.push(`${file}: ${match}`);
            });
          }
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }
    
    if (foundSecrets.length > 0) {
      this.log("⚠️ Potential secrets found:");
      foundSecrets.forEach(secret => this.log(`  - ${secret}`));
    } else {
      this.log("✅ No obvious secrets found in code");
    }
  }

  findCodeFiles(dir) {
    const codeFiles = [];
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !file.includes('node_modules') && !file.includes('.git')) {
        codeFiles.push(...this.findCodeFiles(fullPath));
      } else if (stat.isFile()) {
        const ext = path.extname(file).toLowerCase();
        if (['.js', '.jsx', '.ts', '.tsx', '.json', '.env'].includes(ext)) {
          codeFiles.push(fullPath);
        }
      }
    }
    
    return codeFiles;
  }

  async generateSecurityReport() {
    this.log("📊 Generating security report...");
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalChecks: this.securityChecks.length,
        successful: this.securityChecks.filter(c => c.success).length,
        failed: this.securityChecks.filter(c => !c.success).length,
        vulnerabilities: this.vulnerabilities.length
      },
      securityChecks: this.securityChecks,
      vulnerabilities: this.vulnerabilities,
      recommendations: [
        "Regularly update dependencies",
        "Use environment variables for sensitive data",
        "Implement Content Security Policy",
        "Enable HTTPS in production",
        "Regular security audits",
        "Use strong passwords and API keys",
        "Implement rate limiting",
        "Add security headers"
      ]
    };
    
    fs.writeFileSync('security-report.json', JSON.stringify(report, null, 2));
    this.log("📊 Security report saved to security-report.json");
    return report;
  }

  async run() {
    this.log("🚀 Starting Security Enhancement Suite...");
    try {
      await this.auditDependencies();
      await this.checkEnvironmentVariables();
      await this.checkHTTPSConfiguration();
      await this.checkContentSecurityPolicy();
      await this.checkDependencies();
      await this.checkSecrets();
      
      const report = await this.generateSecurityReport();
      
      this.log("✅ Security Enhancement Suite completed successfully!");
      this.log("📊 Summary:");
      this.log(`  - Total checks: ${report.summary.totalChecks}`);
      this.log(`  - Successful: ${report.summary.successful}`);
      this.log(`  - Failed: ${report.summary.failed}`);
      this.log(`  - Vulnerabilities: ${report.summary.vulnerabilities}`);
      
      if (report.recommendations.length > 0) {
        this.log("💡 Security recommendations:");
        report.recommendations.forEach(rec => this.log(`  - ${rec}`));
      }
      
      return report;
    } catch (error) {
      this.log(`❌ Security Enhancement Suite failed: ${error.message}`);
      throw error;
    }
  }
}

// Run the security enhancement suite
const suite = new SecurityEnhancementSuite();
suite.run().catch(console.error);