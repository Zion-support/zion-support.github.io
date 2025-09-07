#!/usr/bin/env node

/**
 * Security Audit Script
 * Performs comprehensive security audit
 */

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

// Run if called directly
if (require.main === module) {
  const auditor = new SecurityAuditor();
  auditor.runAudit().catch(console.error);
}

module.exports = SecurityAuditor;
origin/cursor/automate-test-fix-improve-and-merge-code-bfbd






];

let passed = 0;
let failed = 0;
let criticalFailed = 0;

securityChecks.forEach(check => {
  try {
    console.log('🔍 Running npm audit...');
    const result = execSync('npm audit --json', { encoding: 'utf8' });
    return JSON.parse(result);
  } catch (error) {
    console.log(`❌ ${check.name} failed`);
    failed++;
    if (check.critical) {
      criticalFailed++;
    }
  }
}

  async checkCodeSecurity() {
    this.log("🔍 Checking code security patterns...");
    
    const files = this.findSourceFiles();
    
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
if (require.main === module) {
  const audit = new SecurityAudit();
  audit.run().catch(error => {
    console.error("Security audit failed:", error);
    process.exit(1);
  });
}

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
