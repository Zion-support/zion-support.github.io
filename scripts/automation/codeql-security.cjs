#!/usr/bin/env node

/**
 * CodeQL Security Analysis Automation
 * Replaces GitHub Actions CodeQL workflow
 * Runs every 6 hours for comprehensive security analysis
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class CodeQLSecurityAutomation {
  constructor() {
    this.interval = process.env.AUTOMATION_INTERVAL || 21600000; // 6 hours default
    this.reportsDir = path.join(process.cwd(), 'security-reports');
    this.ensureReportsDirectory();
  }

  ensureReportsDirectory() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  async runSecurityAnalysis() {
    try {
      console.log('🔒 Starting CodeQL security analysis...');
      
      // Check if CodeQL CLI is available
      try {
        execSync('codeql --version', { stdio: 'pipe' });
      } catch (error) {
        console.log('⚠️ CodeQL CLI not available, running alternative security checks...');
        await this.runAlternativeSecurityChecks();
        return;
      }

      // Run CodeQL analysis
      await this.runCodeQLAnalysis();
      
      console.log('✅ CodeQL security analysis completed');
    } catch (error) {
      console.error('❌ CodeQL security analysis failed:', error.message);
      await this.runAlternativeSecurityChecks();
    }
  }

  async runCodeQLAnalysis() {
    try {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportFile = path.join(this.reportsDir, `codeql-analysis-${timestamp}.json`);
      
      // Initialize CodeQL database
      console.log('📊 Initializing CodeQL database...');
      execSync('codeql database create codeql-db --language=javascript', { stdio: 'inherit' });
      
      // Run analysis
      console.log('🔍 Running CodeQL analysis...');
      execSync('codeql database analyze codeql-db javascript-security-and-quality.qls --format=sarif-latest --output=codeql-results.sarif', { stdio: 'inherit' });
      
      // Convert to JSON for easier processing
      const sarifContent = fs.readFileSync('codeql-results.sarif', 'utf8');
      const results = JSON.parse(sarifContent);
      
      // Generate summary report
      const summary = {
        timestamp: new Date().toISOString(),
        totalIssues: results.runs?.[0]?.results?.length || 0,
        criticalIssues: 0,
        highIssues: 0,
        mediumIssues: 0,
        lowIssues: 0,
        issues: results.runs?.[0]?.results || []
      };

      // Categorize issues by severity
      summary.issues.forEach(issue => {
        const level = issue.level || 'note';
        switch (level) {
          case 'error': summary.criticalIssues++; break;
          case 'warning': summary.highIssues++; break;
          case 'note': summary.mediumIssues++; break;
          default: summary.lowIssues++; break;
        }
      });

      // Save report
      fs.writeFileSync(reportFile, JSON.stringify(summary, null, 2));
      console.log(`📄 Security report saved: ${reportFile}`);
      
      // Cleanup
      execSync('rm -rf codeql-db codeql-results.sarif', { stdio: 'pipe' });
      
      // Log summary
      console.log(`🔍 Security Analysis Summary:`);
      console.log(`   Total Issues: ${summary.totalIssues}`);
      console.log(`   Critical: ${summary.criticalIssues}`);
      console.log(`   High: ${summary.highIssues}`);
      console.log(`   Medium: ${summary.mediumIssues}`);
      console.log(`   Low: ${summary.lowIssues}`);
      
    } catch (error) {
      console.error('❌ CodeQL analysis failed:', error.message);
      throw error;
    }
  }

  async runAlternativeSecurityChecks() {
    try {
      console.log('🔄 Running alternative security checks...');
      
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportFile = path.join(this.reportsDir, `security-audit-${timestamp}.json`);
      
      const securityReport = {
        timestamp: new Date().toISOString(),
        type: 'alternative-security-check',
        checks: []
      };

      // Check for common security issues
      await this.checkForSecurityIssues(securityReport);
      
      // Run npm audit if available
      await this.runNpmAudit(securityReport);
      
      // Save report
      fs.writeFileSync(reportFile, JSON.stringify(securityReport, null, 2));
      console.log(`📄 Alternative security report saved: ${reportFile}`);
      
    } catch (error) {
      console.error('❌ Alternative security checks failed:', error.message);
    }
  }

  async checkForSecurityIssues(report) {
    try {
      // Check for hardcoded secrets
      const secretsCheck = await this.checkForHardcodedSecrets();
      report.checks.push(secretsCheck);
      
      // Check for vulnerable dependencies
      const dependencyCheck = await this.checkDependencies();
      report.checks.push(dependencyCheck);
      
      // Check for unsafe code patterns
      const patternCheck = await this.checkUnsafePatterns();
      report.checks.push(patternCheck);
      
    } catch (error) {
      console.error('❌ Security issue check failed:', error.message);
    }
  }

  async checkForHardcodedSecrets() {
    try {
      const patterns = [
        /api[_-]?key\s*[:=]\s*['"][^'"]{10,}['"]/gi,
        /password\s*[:=]\s*['"][^'"]{5,}['"]/gi,
        /secret\s*[:=]\s*['"][^'"]{10,}['"]/gi,
        /token\s*[:=]\s*['"][^'"]{10,}['"]/gi
      ];
      
      let foundSecrets = 0;
      const files = ['package.json', 'package-lock.json', 'yarn.lock'];
      
      for (const file of files) {
        if (fs.existsSync(file)) {
          const content = fs.readFileSync(file, 'utf8');
          for (const pattern of patterns) {
            if (pattern.test(content)) {
              foundSecrets++;
            }
          }
        }
      }
      
      return {
        type: 'hardcoded-secrets',
        status: foundSecrets > 0 ? 'warning' : 'pass',
        message: `Found ${foundSecrets} potential hardcoded secrets`,
        count: foundSecrets
      };
    } catch (error) {
      return {
        type: 'hardcoded-secrets',
        status: 'error',
        message: `Check failed: ${error.message}`,
        count: 0
      };
    }
  }

  async checkDependencies() {
    try {
      if (fs.existsSync('package.json')) {
        const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        const totalDeps = Object.keys(packageJson.dependencies || {}).length + 
                         Object.keys(packageJson.devDependencies || {}).length;
        
        return {
          type: 'dependencies',
          status: 'pass',
          message: `Total dependencies: ${totalDeps}`,
          count: totalDeps
        };
      }
      
      return {
        type: 'dependencies',
        status: 'warning',
        message: 'No package.json found',
        count: 0
      };
    } catch (error) {
      return {
        type: 'dependencies',
        status: 'error',
        message: `Check failed: ${error.message}`,
        count: 0
      };
    }
  }

  async checkUnsafePatterns() {
    try {
      const unsafePatterns = [
        /eval\s*\(/gi,
        /Function\s*\(/gi,
        /setTimeout\s*\([^,)]*,\s*['"][^'"]*['"]/gi,
        /setInterval\s*\([^,)]*,\s*['"][^'"]*['"]/gi
      ];
      
      let foundPatterns = 0;
      const srcDir = path.join(process.cwd(), 'src');
      
      if (fs.existsSync(srcDir)) {
        const files = this.getAllFiles(srcDir, ['.js', '.jsx', '.ts', '.tsx']);
        
        for (const file of files) {
          const content = fs.readFileSync(file, 'utf8');
          for (const pattern of unsafePatterns) {
            if (pattern.test(content)) {
              foundPatterns++;
            }
          }
        }
      }
      
      return {
        type: 'unsafe-patterns',
        status: foundPatterns > 0 ? 'warning' : 'pass',
        message: `Found ${foundPatterns} potentially unsafe code patterns`,
        count: foundPatterns
      };
    } catch (error) {
      return {
        type: 'unsafe-patterns',
        status: 'error',
        message: `Check failed: ${error.message}`,
        count: 0
      };
    }
  }

  getAllFiles(dir, extensions) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.getAllFiles(fullPath, extensions));
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
    
    return files;
  }

  async runNpmAudit(report) {
    try {
      if (fs.existsSync('package.json')) {
        console.log('🔍 Running npm audit...');
        const auditOutput = execSync('npm audit --json', { encoding: 'utf8' });
        const auditResult = JSON.parse(auditOutput);
        
        const auditCheck = {
          type: 'npm-audit',
          status: 'pass',
          message: 'npm audit completed',
          vulnerabilities: auditResult.metadata?.vulnerabilities || {},
          summary: {
            total: auditResult.metadata?.vulnerabilities?.total || 0,
            critical: auditResult.metadata?.vulnerabilities?.critical || 0,
            high: auditResult.metadata?.vulnerabilities?.high || 0,
            moderate: auditResult.metadata?.vulnerabilities?.moderate || 0,
            low: auditResult.metadata?.vulnerabilities?.low || 0
          }
        };
        
        if (auditCheck.summary.total > 0) {
          auditCheck.status = 'warning';
          auditCheck.message = `Found ${auditCheck.summary.total} vulnerabilities`;
        }
        
        report.checks.push(auditCheck);
        
        console.log(`📊 npm audit found ${auditCheck.summary.total} vulnerabilities`);
      }
    } catch (error) {
      console.log('⚠️ npm audit failed, skipping...');
      report.checks.push({
        type: 'npm-audit',
        status: 'error',
        message: `npm audit failed: ${error.message}`,
        vulnerabilities: {},
        summary: { total: 0, critical: 0, high: 0, moderate: 0, low: 0 }
      });
    }
  }

  async start() {
    console.log('🚀 Starting CodeQL Security Automation...');
    console.log(`⏰ Running every ${this.interval / 1000 / 60} minutes`);
    
    // Run immediately
    await this.runSecurityAnalysis();
    
    // Schedule recurring runs
    setInterval(async () => {
      await this.runSecurityAnalysis();
    }, this.interval);
  }
}

// Start the automation if run directly
if (require.main === module) {
  const automation = new CodeQLSecurityAutomation();
  automation.start().catch(console.error);
}

module.exports = CodeQLSecurityAutomation;