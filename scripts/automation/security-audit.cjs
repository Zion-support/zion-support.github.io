#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

<<<<<<< HEAD
console.log('🔒 Starting continuous security audit automation...');
=======
class SecurityAuditor {
  constructor() {
    this.projectRoot = process.cwd();
    this.vulnerabilities = [];
    this.recommendations = [];
    this.securityScore = 100;
  }
>>>>>>> c85b090ce825e411719bdab0fc9c351cfd986e27

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'error' ? '🚨' : type === 'success' ? '✅' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

<<<<<<< HEAD
async function runSecurityAudit() {
  try {
    console.log(`🔒 Running security audit at ${new Date().toISOString()}`);

    // Run npm audit
    console.log(`'🔍 Running npm security audit...');
=======
  async auditDependencies() {
>>>>>>> c85b090ce825e411719bdab0fc9c351cfd986e27
    try {
      this.log('Auditing dependencies for security vulnerabilities...');
      
      // Run npm audit
      try {
        execSync('npm audit --audit-level=moderate', { stdio: 'pipe' });
        this.log('No dependency vulnerabilities found', 'success');
      } catch (error) {
        this.log('Dependency vulnerabilities detected', 'error');
        this.vulnerabilities.push('Dependency vulnerabilities found');
        this.recommendations.push('Run "npm audit fix" to resolve dependency issues');
        this.securityScore -= 20;
      }
    } catch (error) {
      this.log(`Dependency audit failed: ${error.message}`, 'error');
    }
  }

  async checkEnvironmentVariables() {
    try {
      this.log('Checking environment variables...');
      
      const envFiles = ['.env', '.env.local', '.env.production', '.env.development'];
      let hasEnvFile = false;
      
      for (const envFile of envFiles) {
        const envPath = path.join(this.projectRoot, envFile);
        if (fs.existsSync(envPath)) {
          hasEnvFile = true;
          const content = fs.readFileSync(envPath, 'utf8');
          
          // Check for sensitive data
          if (content.includes('password') || content.includes('secret') || content.includes('key')) {
            this.vulnerabilities.push(`Sensitive data in ${envFile}`);
            this.recommendations.push(`Review ${envFile} for sensitive information`);
            this.securityScore -= 15;
          }
        }
      }
      
      if (!hasEnvFile) {
        this.recommendations.push('Create .env file for environment variables');
      }
    } catch (error) {
      this.log(`Environment variables check failed: ${error.message}`, 'error');
    }
  }

  async checkCodeSecurity() {
    try {
      this.log('Checking code for security issues...');
      
      const srcDir = path.join(this.projectRoot, 'src');
      if (fs.existsSync(srcDir)) {
        const files = this.getAllFiles(srcDir, ['.tsx', '.ts', '.jsx', '.js']);
        
        for (const file of files) {
          const content = fs.readFileSync(file, 'utf8');
          
          // Check for common security issues
          if (content.includes('dangerouslySetInnerHTML')) {
            this.vulnerabilities.push(`XSS risk in ${path.basename(file)}`);
            this.recommendations.push(`Sanitize HTML in ${path.basename(file)}`);
            this.securityScore -= 10;
          }
          
          if (content.includes('eval(') || content.includes('Function(')) {
            this.vulnerabilities.push(`Code injection risk in ${path.basename(file)}`);
            this.recommendations.push(`Remove eval/Function usage in ${path.basename(file)}`);
            this.securityScore -= 15;
          }
          
          if (content.includes('localStorage') && content.includes('password')) {
            this.vulnerabilities.push(`Password storage in localStorage in ${path.basename(file)}`);
            this.recommendations.push(`Use secure storage for passwords in ${path.basename(file)}`);
            this.securityScore -= 20;
          }
        }
      }
    } catch (error) {
      this.log(`Code security check failed: ${error.message}`, 'error');
    }
  }

  async checkHTTPSConfiguration() {
    try {
      this.log('Checking HTTPS configuration...');
      
      const nextConfigPath = path.join(this.projectRoot, 'next.config.cjs');
      if (fs.existsSync(nextConfigPath)) {
        const content = fs.readFileSync(nextConfigPath, 'utf8');
        
        if (!content.includes('https') && !content.includes('secure')) {
          this.recommendations.push('Configure HTTPS for production');
        }
      }
    } catch (error) {
      this.log(`HTTPS configuration check failed: ${error.message}`, 'error');
    }
  }

  async checkCORSConfiguration() {
    try {
      this.log('Checking CORS configuration...');
      
      const srcDir = path.join(this.projectRoot, 'src');
      if (fs.existsSync(srcDir)) {
        const files = this.getAllFiles(srcDir, ['.tsx', '.ts', '.jsx', '.js']);
        
        for (const file of files) {
          const content = fs.readFileSync(file, 'utf8');
          
          if (content.includes('Access-Control-Allow-Origin') && content.includes('*')) {
            this.vulnerabilities.push(`Overly permissive CORS in ${path.basename(file)}`);
            this.recommendations.push(`Restrict CORS origins in ${path.basename(file)}`);
            this.securityScore -= 10;
          }
        }
      }
    } catch (error) {
      this.log(`CORS configuration check failed: ${error.message}`, 'error');
    }
  }

  async generateSecurityReport() {
    try {
      this.log('Generating security report...');
      
      const report = {
        timestamp: new Date().toISOString(),
        securityScore: this.securityScore,
        vulnerabilities: this.vulnerabilities,
        recommendations: this.recommendations,
        summary: this.generateSummary()
      };
      
      const reportPath = path.join(this.projectRoot, 'security-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      this.log(`Security report saved to: ${reportPath}`, 'success');
    } catch (error) {
      this.log(`Report generation failed: ${error.message}`, 'error');
    }
  }

  generateSummary() {
    const summary = [];
    
    if (this.securityScore >= 90) {
      summary.push('🟢 Excellent security posture');
    } else if (this.securityScore >= 70) {
      summary.push('🟡 Good security with room for improvement');
    } else if (this.securityScore >= 50) {
      summary.push('🟠 Moderate security concerns');
    } else {
      summary.push('🔴 Critical security issues detected');
    }
    
    summary.push(`Security Score: ${this.securityScore}/100`);
    summary.push(`Vulnerabilities: ${this.vulnerabilities.length}`);
    summary.push(`Recommendations: ${this.recommendations.length}`);
    
    return summary;
  }

  getAllFiles(dir, extensions) {
    const files = [];
    
    if (!fs.existsSync(dir)) {
      return files;
    }
    
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          files.push(...this.getAllFiles(fullPath, extensions));
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  async run() {
    this.log('Starting security audit...');
    
    await this.auditDependencies();
    await this.checkEnvironmentVariables();
    await this.checkCodeSecurity();
    await this.checkHTTPSConfiguration();
    await this.checkCORSConfiguration();
    await this.generateSecurityReport();
    
    this.log('\n=== SECURITY AUDIT SUMMARY ===');
    this.log(`Security Score: ${this.securityScore}/100`);
    this.log(`Vulnerabilities found: ${this.vulnerabilities.length}`);
    this.log(`Recommendations: ${this.recommendations.length}`);
    
    if (this.vulnerabilities.length === 0) {
      this.log('🎉 No security vulnerabilities detected!', 'success');
    } else {
      this.log('⚠️  Security vulnerabilities detected. Check the report for details.', 'error');
    }
    
    // Exit with appropriate code
    process.exit(this.securityScore >= 80 ? 0 : 1);
  }
}

<<<<<<< HEAD
// Main continuous loop
async function runContinuous() {
  console.log(🚀 Starting continuous security audit with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals'
  );

  // Run initial security audit
  await runSecurityAudit();

  // Set up continuous execution
  setInterval(async () => {
    await runSecurityAudit();
  }, AUTOMATION_INTERVAL);

  console.log(`✅ Continuous security audit running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
}

async function runContinuous() {
  console.log('🔄 Starting continuous security audit...');
  
  // Run initial security audit
  await runSecurityAudit();

  // Set up continuous execution
  setInterval(async () => {
    await runSecurityAudit();
  }, AUTOMATION_INTERVAL);

  console.log(`✅ Continuous security audit running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Start the continuous security audit
runContinuous().catch(error => {
  console.error('❌ Failed to start continuous security audit:', error);
  process.exit(1);
});
=======
// Run security audit
const auditor = new SecurityAuditor();
auditor.run().catch(console.error);
>>>>>>> c85b090ce825e411719bdab0fc9c351cfd986e27
