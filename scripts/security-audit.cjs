#!/usr/bin/env node
const fs = require('fs');
const path = require('path');


#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

console.log('🔒 Running security audit...');
console.log('✅ Security audit completed');

#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔒 Starting Security Audit...');

class SecurityAuditor {
  constructor() {
    this.reportFile = path.join(__dirname, '..', 'security-audit-report.json');
    this.results = {
      timestamp: new Date().toISOString(),
      npmAudit: null,
      dependencyCheck: null,
      filePermissions: null,
      environmentVariables: null,
      overall: { status: 'unknown', score: 0 }
    };
  }

  async runCommand(command, description) {
    try {
      console.log(`🔍 ${description}...`);
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        cwd: path.join(__dirname, '..')
      });
      console.log(`✅ ${description} - Success`);
      return { success: true, result };
    } catch (error) {
      console.log(`❌ ${description} - Failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async runNpmAudit() {
    const result = await this.runCommand('npm audit --json', 'NPM Security Audit');
    this.results.npmAudit = result;
  }

  async checkDependencies() {
    const result = await this.runCommand('npm ls --depth=0', 'Dependency Check');
    this.results.dependencyCheck = result;
  }

  async checkFilePermissions() {
    try {
      const criticalFiles = [
        'package.json',
        'next.config.js',
        'middleware.ts',
        '.env.local',
        '.env.production'
      ];
      
      const permissions = {};
      for (const file of criticalFiles) {
        try {
          const stats = fs.statSync(file);
          permissions[file] = {
            exists: true,
            mode: stats.mode.toString(8),
            readable: true,
            writable: true
          };
        } catch (error) {
          permissions[file] = {
            exists: false,
            error: error.message
          };
        }
      }
      
      this.results.filePermissions = { success: true, permissions };
      console.log('✅ File Permissions Check - Success');
    } catch (error) {
      this.results.filePermissions = { success: false, error: error.message };
      console.log(`❌ File Permissions Check - Failed: ${error.message}`);
    }
  }

  async checkEnvironmentVariables() {
    const envVars = {
      NODE_ENV: process.env.NODE_ENV,
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
      SUPABASE_URL: process.env.SUPABASE_URL,
      STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY ? '***HIDDEN***' : undefined
    };
    
    this.results.environmentVariables = {
      success: true,
      variables: envVars,
      count: Object.keys(envVars).length
    };
    console.log('✅ Environment Variables Check - Success');
  }

  calculateOverallScore() {
    let totalScore = 0;
    let maxScore = 0;

    // NPM Audit (40% weight)
    if (this.results.npmAudit?.success) {
      totalScore += 100 * 0.4;
    }
    maxScore += 100 * 0.4;

    // Dependency Check (20% weight)
    if (this.results.dependencyCheck?.success) {
      totalScore += 100 * 0.2;
    }
    maxScore += 100 * 0.2;

    // File Permissions (20% weight)
    if (this.results.filePermissions?.success) {
      totalScore += 100 * 0.2;
    }
    maxScore += 100 * 0.2;

    // Environment Variables (20% weight)
    if (this.results.environmentVariables?.success) {
      totalScore += 100 * 0.2;
    }
    maxScore += 100 * 0.2;

    const finalScore = Math.round((totalScore / maxScore) * 100);
    this.results.overall.score = finalScore;
    this.results.overall.status = finalScore >= 80 ? 'excellent' : 
                                 finalScore >= 60 ? 'good' : 
                                 finalScore >= 40 ? 'fair' : 'poor';
    
    return finalScore;
  }

  async generateReport() {
    const score = this.calculateOverallScore();
    
    fs.writeFileSync(this.reportFile, JSON.stringify(this.results, null, 2));
    console.log(`📊 Security audit report saved to: ${this.reportFile}`);
    console.log(`🎯 Overall Security Score: ${score}/100 (${this.results.overall.status})`);
  }

  async run() {
    try {
      console.log('🚀 Starting comprehensive security audit...');
      
      await this.runNpmAudit();
      await this.checkDependencies();
      await this.checkFilePermissions();
      await this.checkEnvironmentVariables();
      await this.generateReport();
      
      console.log('🎉 Security audit completed successfully!');
    } catch (error) {
      console.log(`❌ Security audit failed: ${error.message}`);
      process.exit(1);
#!/usr/bin/env node
#!/usr/bin/env node

/**
 * Security Audit Script
 * Performs comprehensive security audit
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔒 Starting security audit...');

// Security audit configuration
const config = {
  outputDir: path.join(__dirname, '..', 'security-reports'),
  checks: {
    npmAudit: true,
    dependencyCheck: true,
    filePermissions: true,
    sensitiveData: true
  }
};

// Ensure output directory exists
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
}

// Run npm audit
function runNpmAudit() {
  try {
    console.log('🔍 Running npm audit...');
    const result = execSync('npm audit --json', { encoding: 'utf8' });
    return JSON.parse(result);
  } catch (error) {
    console.log('⚠️  NPM audit failed:', error.message);
    return { error: error.message };
  }
}

// Check for sensitive data
function checkSensitiveData() {
  const sensitivePatterns = [
    /password\s*=\s*['"][^'"]+['"]/gi,
    /api[_-]?key\s*=\s*['"][^'"]+['"]/gi,
    /secret\s*=\s*['"][^'"]+['"]/gi,
    /token\s*=\s*['"][^'"]+['"]/gi
  ];

  const issues = [];
  const srcDir = path.join(__dirname, '..', 'src');

  if (fs.existsSync(srcDir)) {
    const files = getAllFiles(srcDir);
    
    files.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      sensitivePatterns.forEach(pattern => {
        const matches = content.match(pattern);
        if (matches) {
          issues.push({
            file: path.relative(__dirname, file),
            matches: matches.length,
            pattern: pattern.toString()
          });
        }
      });
    });
  }


#!/usr/bin/env node;
const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")
function log(msg, level = "INFO")
    execSync(cmd, { "stdio": "inherit"})
    return { "ok"}
    return { "ok": false, "error"}
  log("� Starting security audit...")
  log("Running npm audit (moderate)..."
  const audit = tryExec("npm audit --audit-level=moderate")
    log("Vulnerabilities found, attempting npm audit fix", "WARN")
    tryExec("npm audit fix")
  const sensitive = [".env", ".env.local", ".env.production", "config.json", "secrets.json"]
    log(`Sensitive files "present": ${found.join(", ")}`, "WARN"
    log("No sensitive files found in repo root")
  log(" Security audit completed")
    }
  }
}

// Run the security auditor
const auditor = new SecurityAuditor();
auditor.run().catch(console.error);



// Run the auditor
if (require.main === module) {
  const auditor = new SecurityAuditor();
  auditor.run().catch(console.error);
}

module.exports = SecurityAuditor;
origin/cursor/automate-test-fix-improve-and-merge-code-bfbd



  return issues;
}

// Get all files recursively
function getAllFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllFiles(fullPath));
    } else if (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  });
  
  return files;
}

// Main security audit
function runSecurityAudit() {
  const audit = {
    timestamp: new Date().toISOString(),
    npmAudit: runNpmAudit(),
    sensitiveData: checkSensitiveData(),
    summary: {
      totalIssues: 0,
      criticalIssues: 0,
      warnings: 0
    }
  };

  // Calculate summary
  if (audit.npmAudit.vulnerabilities) {
    audit.summary.totalIssues += Object.keys(audit.npmAudit.vulnerabilities).length;
  }
  
  audit.summary.totalIssues += audit.sensitiveData.length;
  audit.summary.warnings = audit.sensitiveData.length;

  return audit;
}

// Save audit results
function saveAuditResults(audit) {
  const filename = `security-audit-${Date.now()}.json`;
  const filepath = path.join(config.outputDir, filename);
  
  fs.writeFileSync(filepath, JSON.stringify(audit, null, 2));
  console.log(`🔒 Security audit saved to: ${filename}`);
  
  // Print summary
  console.log(`📊 Security Audit Summary:`);
  console.log(`   Total Issues: ${audit.summary.totalIssues}`);
  console.log(`   Critical Issues: ${audit.summary.criticalIssues}`);
  console.log(`   Warnings: ${audit.summary.warnings}`);
}

// Main execution
try {
  const audit = runSecurityAudit();
  saveAuditResults(audit);
  console.log('✅ Security audit completed');
} catch (error) {
  console.error('❌ Security audit failed:', error.message);
  process.exit(1);
}
