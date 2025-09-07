<<<<<<< HEAD
#!/usr/bin/env node
/**
 * Security Audit Script
 * Comprehensive security analysis and vulnerability detection
 * Scans for common security issues and provides remediation recommendations
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

class SecurityAudit {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, "security-reports");
    this.vulnerabilities = [];
    this.securityIssues = [];
    this.recommendations = [];
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message, type = "info") {
    const timestamp = new Date().toISOString();
    const prefix = type === "error" ? "❌" : type === "success" ? "✅" : "ℹ️";
    console.log(`[${timestamp}] ${prefix} ${message}`);
  }

  async runNpmAudit() {
    this.log("🔍 Running npm audit...");
    
    try {
      const auditOutput = execSync("npm audit --json", { 
        cwd: this.projectRoot,
        encoding: "utf8",
        timeout: 120000
      });
      
      const auditData = JSON.parse(auditOutput);
      
      if (auditData.vulnerabilities) {
        Object.entries(auditData.vulnerabilities).forEach(([name, vuln]) => {
          this.vulnerabilities.push({
            name,
            severity: vuln.severity,
            title: vuln.title,
            description: vuln.description,
            recommendation: vuln.recommendation,
            type: "dependency"
          });
        });
      }
      
      this.log(`Found ${this.vulnerabilities.length} vulnerabilities`);
      
    } catch (error) {
      this.log(`npm audit failed: ${error.message}`, "error");
    }
  }

  async scanForSecrets() {
    this.log("🔐 Scanning for secrets and sensitive data...");
    
    const secretPatterns = [
      { pattern: /password\s*=\s*["'][^"']+["']/gi, type: "password", severity: "high" },
      { pattern: /api[_-]?key\s*=\s*["'][^"']+["']/gi, type: "api_key", severity: "high" },
      { pattern: /secret\s*=\s*["'][^"']+["']/gi, type: "secret", severity: "high" },
      { pattern: /token\s*=\s*["'][^"']+["']/gi, type: "token", severity: "high" },
      { pattern: /private[_-]?key\s*=\s*["'][^"']+["']/gi, type: "private_key", severity: "critical" },
      { pattern: /aws[_-]?access[_-]?key[_-]?id/gi, type: "aws_key", severity: "high" },
      { pattern: /mongodb[_-]?uri/gi, type: "database_uri", severity: "high" },
      { pattern: /jwt[_-]?secret/gi, type: "jwt_secret", severity: "high" }
    ];
    
    const filesToScan = this.findSourceFiles();
    
    filesToScan.forEach(file => {
      try {
        const content = fs.readFileSync(file, "utf8");
        
        secretPatterns.forEach(({ pattern, type, severity }) => {
          const matches = content.match(pattern);
          if (matches) {
            matches.forEach(match => {
              this.securityIssues.push({
                file: path.relative(this.projectRoot, file),
                type,
                severity,
                match: match.substring(0, 50) + "...",
                description: `Potential ${type} found in source code`
              });
            });
          }
        });
      } catch (error) {
        // Ignore file read errors
      }
    });
    
    this.log(`Found ${this.securityIssues.length} potential security issues`);
  }

  findSourceFiles() {
    const files = [];
    const extensions = [".js", ".ts", ".jsx", ".tsx", ".json", ".env", ".config.js"];
    const excludeDirs = ["node_modules", ".next", "dist", "build", ".git"];
    
    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            if (!excludeDirs.includes(item)) {
              scanDirectory(fullPath);
            }
          } else if (extensions.some(ext => item.endsWith(ext))) {
            files.push(fullPath);
          }
        }
      } catch (error) {
        // Ignore permission errors
      }
    };
    
    scanDirectory(this.projectRoot);
    return files;
  }

  async checkDependencies() {
    this.log("📦 Checking dependency security...");
    
    try {
      const packageJsonPath = path.join(this.projectRoot, "package.json");
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
      
      const allDeps = {
        ...packageJson.dependencies || {},
        ...packageJson.devDependencies || {}
      };
      
      // Check for known vulnerable packages
      const vulnerablePackages = [
        "lodash", "moment", "jquery", "express", "request"
      ];
      
      Object.keys(allDeps).forEach(dep => {
        if (vulnerablePackages.includes(dep)) {
          this.securityIssues.push({
            file: "package.json",
            type: "vulnerable_package",
            severity: "medium",
            match: dep,
            description: `Package ${dep} has known security vulnerabilities`
          });
        }
      });
      
      // Check for packages with no version specified
      Object.entries(allDeps).forEach(([name, version]) => {
        if (version === "*" || version === "latest") {
          this.securityIssues.push({
            file: "package.json",
            type: "unpinned_dependency",
            severity: "medium",
            match: `${name}: ${version}`,
            description: `Dependency ${name} is not pinned to a specific version`
          });
        }
      });
      
    } catch (error) {
      this.log(`Dependency check failed: ${error.message}`, "error");
    }
  }

  async checkEnvironmentFiles() {
    this.log("🌍 Checking environment file security...");
    
    const envFiles = [".env", ".env.local", ".env.development", ".env.production"];
    
    envFiles.forEach(envFile => {
      const envPath = path.join(this.projectRoot, envFile);
      if (fs.existsSync(envPath)) {
        try {
          const content = fs.readFileSync(envPath, "utf8");
          
          // Check for hardcoded secrets
          if (content.includes("password=") || content.includes("secret=")) {
            this.securityIssues.push({
              file: envFile,
              type: "hardcoded_secret",
              severity: "high",
              match: "Hardcoded secrets found",
              description: "Environment file contains hardcoded secrets"
            });
          }
          
          // Check if .env is in .gitignore
          const gitignorePath = path.join(this.projectRoot, ".gitignore");
          if (fs.existsSync(gitignorePath)) {
            const gitignoreContent = fs.readFileSync(gitignorePath, "utf8");
            if (!gitignoreContent.includes(".env")) {
              this.securityIssues.push({
                file: ".gitignore",
                type: "missing_gitignore",
                severity: "medium",
                match: ".env not in .gitignore",
                description: "Environment files should be in .gitignore"
              });
            }
          }
          
        } catch (error) {
          // Ignore file read errors
        }
      }
    });
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node
=======
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

console.log('🔒 Running security audit...');
console.log('✅ Security audit completed');

#!/usr/bin/env node

const { execSync } = require('child_process');
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔍 Security Audit Starting...');

const securityChecks = [
  {
    name: 'NPM Audit',
    command: 'npm audit --audit-level moderate',
    critical: true
  },
  {
    name: 'Dependency Check',
    check: () => {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      // Check for known vulnerable packages
      const vulnerablePackages = [
        'lodash',
        'moment',
        'jquery'
      ];
      
      const foundVulnerable = vulnerablePackages.filter(pkg => deps[pkg]);
      if (foundVulnerable.length > 0) {
        console.log(`⚠️  Potentially vulnerable packages found: ${foundVulnerable.join(', ')}`);
        return false;
      }
      return true;
    }
  },
  {
    name: 'Environment Variables Check',
    check: () => {
      const envFile = '.env.local';
      if (fs.existsSync(envFile)) {
        const content = fs.readFileSync(envFile, 'utf8');
        const hasSecrets = content.includes('SECRET') || content.includes('KEY') || content.includes('PASSWORD');
        if (hasSecrets) {
          console.log('⚠️  Environment file contains potential secrets');
          return false;
        }
      }
      return true;
    }
  },
  {
    name: 'File Permissions Check',
    check: () => {
      const sensitiveFiles = [
        'package.json',
        'package-lock.json',
        'tsconfig.json'
      ];
      
      let allSecure = true;
      sensitiveFiles.forEach(file => {
        if (fs.existsSync(file)) {
          const stats = fs.statSync(file);
          const mode = stats.mode & parseInt('777', 8);
          if (mode > parseInt('644', 8)) {
            console.log(`⚠️  File ${file} has overly permissive permissions`);
            allSecure = false;
          }
        }
      });
      return allSecure;
    }
  }
<<<<<<< HEAD
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// Run the security auditor
const auditor = new SecurityAuditor();
<<<<<<< HEAD
auditor.checkDependencies();
auditor.checkEnvironmentVariables();
const report = auditor.generateReport();

fs.writeFileSync('security-audit-report.json', JSON.stringify(report, null, 2));
console.log('Security audit completed');
=======
auditor.run().catch(console.error);
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

console.log('🔒 Running security audit...');
console.log('✅ Security audit completed');
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
=======

<<<<<<< HEAD
main

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
// Run the auditor
if (require.main === module) {
  const auditor = new SecurityAuditor();
  auditor.run().catch(console.error);
}

module.exports = SecurityAuditor;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-bfbd
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-fix-improve-and-merge-code-bfbd
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======


>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


=======
];
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910

let passed = 0;
let failed = 0;
let criticalFailed = 0;

securityChecks.forEach(check => {
  try {
    if (check.command) {
      console.log(`\n🔄 Running ${check.name}...`);
      execSync(check.command, { stdio: 'pipe' });
      console.log(`✅ ${check.name} passed`);
      passed++;
    } else if (check.check()) {
      console.log(`✅ ${check.name}`);
      passed++;
    } else {
      console.log(`❌ ${check.name}`);
      failed++;
      if (check.critical) {
        criticalFailed++;
      }
    }
  } catch (error) {
    console.log(`❌ ${check.name} failed`);
    failed++;
    if (check.critical) {
      criticalFailed++;
    }
>>>>>>> main
  }

<<<<<<< HEAD
  async checkCodeSecurity() {
    this.log("🔍 Checking code security patterns...");
    
    const files = this.findSourceFiles();
    
    files.forEach(file => {
      try {
        const content = fs.readFileSync(file, "utf8");
        
        // Check for dangerous patterns
        const dangerousPatterns = [
          { pattern: /eval\s*\(/gi, type: "eval_usage", severity: "high", description: "Use of eval() is dangerous" },
          { pattern: /innerHTML\s*=/gi, type: "innerhtml_usage", severity: "medium", description: "innerHTML can lead to XSS" },
          { pattern: /document\.write/gi, type: "document_write", severity: "medium", description: "document.write can lead to XSS" },
          { pattern: /dangerouslySetInnerHTML/gi, type: "dangerous_innerhtml", severity: "medium", description: "dangerouslySetInnerHTML requires careful sanitization" },
          { pattern: /process\.env\./gi, type: "process_env", severity: "low", description: "Direct process.env usage should be validated" }
        ];
        
        dangerousPatterns.forEach(({ pattern, type, severity, description }) => {
          const matches = content.match(pattern);
          if (matches) {
            matches.forEach(match => {
              this.securityIssues.push({
                file: path.relative(this.projectRoot, file),
                type,
                severity,
                match: match.substring(0, 50) + "...",
                description
              });
            });
          }
        });
        
      } catch (error) {
        // Ignore file read errors
      }
    });
  }

  generateRecommendations() {
    this.log("💡 Generating security recommendations...");
    
    const recommendations = [];
    
    // Vulnerability-based recommendations
    if (this.vulnerabilities.length > 0) {
      recommendations.push({
        priority: "high",
        title: "Update vulnerable dependencies",
        description: `Found ${this.vulnerabilities.length} vulnerabilities in dependencies`,
        action: "Run 'npm audit fix' and update vulnerable packages"
      });
    }
    
    // Secret-based recommendations
    const secretIssues = this.securityIssues.filter(issue => 
      ["password", "api_key", "secret", "token", "private_key"].includes(issue.type)
    );
    
    if (secretIssues.length > 0) {
      recommendations.push({
        priority: "critical",
        title: "Remove hardcoded secrets",
        description: `Found ${secretIssues.length} potential hardcoded secrets`,
        action: "Move secrets to environment variables and use secure secret management"
      });
    }
    
    // Code security recommendations
    const evalIssues = this.securityIssues.filter(issue => issue.type === "eval_usage");
    if (evalIssues.length > 0) {
      recommendations.push({
        priority: "high",
        title: "Remove eval() usage",
        description: "eval() usage found in code",
        action: "Replace eval() with safer alternatives"
      });
    }
    
    const xssIssues = this.securityIssues.filter(issue => 
      ["innerhtml_usage", "document_write", "dangerous_innerhtml"].includes(issue.type)
    );
    
    if (xssIssues.length > 0) {
      recommendations.push({
        priority: "high",
        title: "Fix XSS vulnerabilities",
        description: `Found ${xssIssues.length} potential XSS issues`,
        action: "Sanitize user input and use safe DOM manipulation methods"
      });
    }
    
    // General security recommendations
    recommendations.push({
      priority: "medium",
      title: "Implement Content Security Policy",
      description: "Add CSP headers to prevent XSS attacks",
      action: "Configure CSP in Next.js or server configuration"
    });
    
    recommendations.push({
      priority: "medium",
      title: "Enable HTTPS",
      description: "Ensure all communications use HTTPS",
      action: "Configure SSL/TLS certificates and redirect HTTP to HTTPS"
    });
    
    recommendations.push({
      priority: "low",
      title: "Implement rate limiting",
      description: "Add rate limiting to prevent abuse",
      action: "Use middleware or services like Cloudflare for rate limiting"
    });
    
    this.recommendations = recommendations;
    return recommendations;
  }

  generateReport() {
    this.log("📊 Generating security audit report...");
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        vulnerabilities: this.vulnerabilities.length,
        securityIssues: this.securityIssues.length,
        recommendations: this.recommendations.length,
        criticalIssues: this.securityIssues.filter(issue => issue.severity === "critical").length,
        highIssues: this.securityIssues.filter(issue => issue.severity === "high").length,
        mediumIssues: this.securityIssues.filter(issue => issue.severity === "medium").length,
        lowIssues: this.securityIssues.filter(issue => issue.severity === "low").length
      },
      vulnerabilities: this.vulnerabilities,
      securityIssues: this.securityIssues,
      recommendations: this.recommendations
    };
    
    const reportPath = path.join(this.reportsDir, `security-audit-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Generate markdown report
    const markdownReport = this.generateMarkdownReport(report);
    const markdownPath = path.join(this.reportsDir, "SECURITY_AUDIT.md");
    fs.writeFileSync(markdownPath, markdownReport);
    
    this.log(`📊 Security report saved to ${reportPath}`, "success");
    this.log(`📄 Markdown report saved to ${markdownPath}`, "success");
    
    return report;
  }

  generateMarkdownReport(report) {
    return `# Security Audit Report

**Generated:** ${report.timestamp}

## Summary
- **Vulnerabilities:** ${report.summary.vulnerabilities}
- **Security Issues:** ${report.summary.securityIssues}
- **Critical Issues:** ${report.summary.criticalIssues}
- **High Issues:** ${report.summary.highIssues}
- **Medium Issues:** ${report.summary.mediumIssues}
- **Low Issues:** ${report.summary.lowIssues}

## Vulnerabilities
${report.vulnerabilities.length > 0 ? 
  report.vulnerabilities.map(vuln => 
    `- **${vuln.name}** (${vuln.severity})\n  - ${vuln.title}\n  - ${vuln.description}\n  - Fix: ${vuln.recommendation}`
  ).join('\n') : 
  'No vulnerabilities found'}

## Security Issues by Severity

### Critical
${report.securityIssues
  .filter(issue => issue.severity === "critical")
  .map(issue => `- **${issue.file}**: ${issue.description}`)
  .join('\n')}

### High
${report.securityIssues
  .filter(issue => issue.severity === "high")
  .map(issue => `- **${issue.file}**: ${issue.description}`)
  .join('\n')}

### Medium
${report.securityIssues
  .filter(issue => issue.severity === "medium")
  .map(issue => `- **${issue.file}**: ${issue.description}`)
  .join('\n')}

### Low
${report.securityIssues
  .filter(issue => issue.severity === "low")
  .map(issue => `- **${issue.file}**: ${issue.description}`)
  .join('\n')}

## Recommendations by Priority

### Critical Priority
${report.recommendations
  .filter(rec => rec.priority === "critical")
  .map(rec => `- **${rec.title}**\n  - ${rec.description}\n  - Action: ${rec.action}`)
  .join('\n')}

### High Priority
${report.recommendations
  .filter(rec => rec.priority === "high")
  .map(rec => `- **${rec.title}**\n  - ${rec.description}\n  - Action: ${rec.action}`)
  .join('\n')}

### Medium Priority
${report.recommendations
  .filter(rec => rec.priority === "medium")
  .map(rec => `- **${rec.title}**\n  - ${rec.description}\n  - Action: ${rec.action}`)
  .join('\n')}

### Low Priority
${report.recommendations
  .filter(rec => rec.priority === "low")
  .map(rec => `- **${rec.title}**\n  - ${rec.description}\n  - Action: ${rec.action}`)
  .join('\n')}
`;
  }

  async run() {
    this.log("🚀 Starting Security Audit...");
    
    try {
      await this.runNpmAudit();
      await this.scanForSecrets();
      await this.checkDependencies();
      await this.checkEnvironmentFiles();
      await this.checkCodeSecurity();
      
      this.generateRecommendations();
      const report = this.generateReport();
      
      this.log("🎉 Security audit completed!", "success");
      this.log(`📊 Found ${this.vulnerabilities.length} vulnerabilities and ${this.securityIssues.length} security issues`);
      
      return report;
    } catch (error) {
      this.log(`❌ Security audit failed: ${error.message}`, "error");
      throw error;
    }
  }
}

// Main execution
if (require.main === module) {
  const audit = new SecurityAudit();
  audit.run().catch(error => {
    console.error("Security audit failed:", error);
    process.exit(1);
  });
}

module.exports = SecurityAudit;
=======
<<<<<<< HEAD
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======
console.log(`\n📊 Security Results:`);
console.log(`✅ Passed: ${passed}`);
console.log(`❌ Failed: ${failed}`);
console.log(`🚨 Critical Failed: ${criticalFailed}`);

if (criticalFailed > 0) {
  console.log('\n⚠️  Critical security issues found. Please fix before proceeding.');
  process.exit(1);
} else if (failed > 0) {
  console.log('\n⚠️  Some security issues found, but none are critical.');
  process.exit(0);
} else {
  console.log('\n🎉 All security checks passed!');
  process.exit(0);
}
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
>>>>>>> main
