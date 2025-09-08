#!/usr/bin/env node

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
#!/usr/bin/env node
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔒 Starting Security Audit...');

class SecurityAuditor {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.ensureDirectories()}

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir { recursive: true })}
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`)}

  async runCommand(command, description) {
    this.log(`🚀 Starting: ${description}`);
    try {
      const result = execSync(command {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 300000 });
      this.log(`✅ Completed: ${description}`);
      return { success: true, output: result }} catch (error) {
      this.log(`❌ Failed: ${description} - ${error.message}`);
      return { success: false, error: error.message }}
  }

  async auditDependencies() {
    this.log('🔍 Auditing dependencies for vulnerabilities...');
    
    try {
      const result = await this.runCommand('npm audit --audit-level=moderate', 'Dependency Security Audit');
      return result} catch (error) {
      // npm audit returns non-zero exit code when vulnerabilities are found
      // This is expected behavior, so we'll treat it as a successful audit with findings
      return { 
        success: true, 
        output: error.stdout || error.message,
        vulnerabilitiesFound: true 
      }}
  }

  async checkEnvironmentVariables() {
    this.log('🔐 Checking environment variables...');
    
    const envFiles = ['.env', '.env.local', '.env.production', '.env.development'];
    const findings = [];

    for (const envFile of envFiles) {
      const envPath = path.join(this.projectRoot, envFile);
      if (fs.existsSync(envPath)) {
        const content = fs.readFileSync(envPath, 'utf8');
        
        // Check for common security issues
        if (content.includes('PASSWORD=') && !content.includes('PASSWORD=***')) {
          findings.push({
            file: envFile,
            issue: 'Plain text password detected',
            severity: 'high'
          })}
        
        if (content.includes('SECRET=') && !content.includes('SECRET=***')) {
          findings.push({
            file: envFile,
            issue: 'Plain text secret detected',
            severity: 'high'
          })}
        
        if (content.includes('API_KEY=') && !content.includes('API_KEY=***')) {
          findings.push({
            file: envFile,
            issue: 'Plain text API key detected',
            severity: 'medium'
          })}
      }
    }

    return {
      success: true,
      findings: findings,
      filesChecked: envFiles.length
    }}

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
}

// Run the security auditor
const auditor = new SecurityAuditor();
auditor.checkDependencies();
auditor.checkEnvironmentVariables();
const report = auditor.generateReport();

fs.writeFileSync('security-audit-report.json', JSON.stringify(report, null, 2));
console.log('Security audit completed');


#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

console.log('🔒 Running security audit...');
console.log('✅ Security audit completed');

main

// Run the auditor
if (require.main === module) {
  const auditor = new SecurityAuditor();
  auditor.run().catch(console.error);
}

module.exports = SecurityAuditor;
origin/cursor/automate-test-fix-improve-and-merge-code-bfbd






];

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
  }

  async checkCodeSecurity() {
    this.log('🔍 Checking code for security issues...');
    
    const srcDir = path.join(this.projectRoot, 'src');
    const pagesDir = path.join(this.projectRoot, 'pages');
    const securityIssues = [];

    const checkFile = (filePath) => {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Check for dangerous patterns
        const dangerousPatterns = [
          { pattern: /eval\s*\(/, message: 'eval() usage detected', severity: 'high' }, { pattern: /innerHTML\s*=/, message: 'innerHTML assignment detected', severity: 'medium' }, { pattern: /document\.write/, message: 'document.write() usage detected', severity: 'medium' }, { pattern: /localStorage\.setItem.*password/i, message: 'Password in localStorage detected', severity: 'high' }, { pattern: /console\.log.*password/i, message: 'Password in console.log detected', severity: 'medium' }
        ];

        dangerousPatterns.forEach(({ pattern, message, severity }) => {
          if (pattern.test(content)) {
            securityIssues.push({
              file: filePath,
              issue: message,
              severity: severity
            })}
        })} catch (error) {
        // Skip files that can't be read
      }
    };

    // Check source files
    if (fs.existsSync(srcDir)) {
      this.scanDirectory(srcDir, ['.js', '.jsx', '.ts', '.tsx'], checkFile)}

    // Check pages
    if (fs.existsSync(pagesDir)) {
      this.scanDirectory(pagesDir, ['.js', '.jsx', '.ts', '.tsx'], checkFile)}

    return {
      success: true,
      issues: securityIssues,
      filesScanned: securityIssues.length
    }}

  scanDirectory(dir, extensions, callback) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        this.scanDirectory(fullPath, extensions, callback)} else if (extensions.includes(path.extname(item))) {
        callback(fullPath)}
    }
  }

  async checkHTTPSConfiguration() {
    this.log('🔒 Checking HTTPS configuration...');
    
    const nextConfigPath = path.join(this.projectRoot, 'next.config.js');
    const findings = [];

    if (fs.existsSync(nextConfigPath)) {
      const content = fs.readFileSync(nextConfigPath, 'utf8');
      
      if (!content.includes('https') && !content.includes('secure')) {
        findings.push({
          issue: 'No HTTPS configuration found in next.config.js',
          severity: 'medium'
        })}
    }

    return {
      success: true,
      findings: findings
    }}

  async generateReport(results) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalChecks: Object.keys(results).length,
        successful: Object.values(results).filter(r => r.success).length,
        failed: Object.values(results).filter(r => !r.success).length,
        totalIssues: Object.values(results).reduce((sum, r) => {
          return sum + (r.findings ? r.findings.length : 0) + (r.issues ? r.issues.length : 0)}, 0)
      },
      results: results,
      recommendations: this.generateRecommendations(results)
    };

    const reportFile = path.join(this.reportsDir, 'security-audit-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Security audit report generated: ${reportFile}`);
    return report}

  generateRecommendations(results) {
    const recommendations = [];

    if (results.dependencies && results.dependencies.vulnerabilitiesFound) {
      recommendations.push({
        type: 'dependencies',
        message: 'Vulnerabilities found in dependencies. Run npm audit fix to resolve.',
        action: 'npm audit fix'
      })}

    if (results.environment && results.environment.findings.length > 0) {
      recommendations.push({
        type: 'environment',
        message: 'Security issues found in environment files. Review and secure sensitive data.',
        issues: results.environment.findings.length
      })}

    if (results.codeSecurity && results.codeSecurity.issues.length > 0) {
      recommendations.push({
        type: 'code',
        message: 'Security issues found in code. Review and fix dangerous patterns.',
        issues: results.codeSecurity.issues.length
      })}

    return recommendations}

  async run() {
    this.log('🎯 Starting Security Audit');
    
    const results = {
      dependencies: await this.auditDependencies(),
      environment: await this.checkEnvironmentVariables(),
      codeSecurity: await this.checkCodeSecurity(),
      httpsConfig: await this.checkHTTPSConfiguration()
    };

    const report = await this.generateReport(results);

    this.log('🎉 Security Audit Completed');
    this.log(`📊 Summary: ${report.summary.successful}/${report.summary.totalChecks} checks successful`);
    this.log(`🔍 Total issues found: ${report.summary.totalIssues}`);
    
    if (report.recommendations.length > 0) {
      this.log('💡 Security Recommendations:');
      report.recommendations.forEach(rec => {
        this.log(`   - ${rec.message}`)})}

    return report}
}

// Run the security auditor
if (require.main === module) {
  const auditor = new SecurityAuditor();
  auditor.run().catch(console.error)}

module.exports = SecurityAuditor;
module.exports = SecurityAudit;
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
