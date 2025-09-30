#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🛡️ Starting Enhanced Security Automation...');

class EnhancedSecurityAutomation {
  constructor() {
    this.securityResults = {
      audit: { status: 'pending', vulnerabilities: [], summary: {} },
      dependencies: { status: 'pending', outdated: [], licenses: [] },
      codeAnalysis: { status: 'pending', issues: [], summary: {} },
      secrets: { status: 'pending', findings: [] },
      compliance: { status: 'pending', checks: [] }
    };
    this.reportDir = path.join(process.cwd(), 'security-reports');
    this.ensureReportDirectory();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async runSecurityAudit() {
    console.log('🔍 Running Security Audit...');
    try {
      // Run npm audit
      const auditOutput = execSync('npm audit --audit-level moderate --json', { 
        encoding: 'utf8',
        cwd: process.cwd()
      });
      
      const auditData = JSON.parse(auditOutput);
      
      this.securityResults.audit.status = 'success';
      this.securityResults.audit.vulnerabilities = auditData.vulnerabilities || [];
      this.securityResults.audit.summary = {
        total: auditData.metadata?.vulnerabilities?.total || 0,
        low: auditData.metadata?.vulnerabilities?.low || 0,
        moderate: auditData.metadata?.vulnerabilities?.moderate || 0,
        high: auditData.metadata?.vulnerabilities?.high || 0,
        critical: auditData.metadata?.vulnerabilities?.critical || 0
      };
      
      console.log(`✅ Security audit completed. Found ${this.securityResults.audit.summary.total} vulnerabilities`);
      
      // Save detailed audit results
      fs.writeFileSync(
        path.join(this.reportDir, 'security-audit.json'),
        JSON.stringify(auditData, null, 2)
      );
      
    } catch (error) {
      this.securityResults.audit.status = 'failure';
      this.securityResults.audit.vulnerabilities = [];
      this.securityResults.audit.summary = { total: 0, low: 0, moderate: 0, high: 0, critical: 0 };
      console.log('❌ Security audit failed:', error.message);
    }
  }

  async checkDependencies() {
    console.log('📦 Checking Dependencies...');
    try {
      // Check for outdated packages
      const outdatedOutput = execSync('npm outdated --json', { 
        encoding: 'utf8',
        cwd: process.cwd()
      });
      
      const outdatedData = JSON.parse(outdatedOutput);
      const outdatedPackages = Object.keys(outdatedData);
      
      // Check package licenses
      const licenseOutput = execSync('npm list --json', { 
        encoding: 'utf8',
        cwd: process.cwd()
      });
      
      const licenseData = JSON.parse(licenseOutput);
      const licenses = this.extractLicenses(licenseData);
      
      this.securityResults.dependencies.status = 'success';
      this.securityResults.dependencies.outdated = outdatedPackages;
      this.securityResults.dependencies.licenses = licenses;
      
      console.log(`✅ Dependency check completed. Found ${outdatedPackages.length} outdated packages`);
      
      // Save dependency results
      fs.writeFileSync(
        path.join(this.reportDir, 'dependency-check.json'),
        JSON.stringify({
          outdated: outdatedData,
          licenses: licenses
        }, null, 2)
      );
      
    } catch (error) {
      this.securityResults.dependencies.status = 'failure';
      this.securityResults.dependencies.outdated = [];
      this.securityResults.dependencies.licenses = [];
      console.log('❌ Dependency check failed:', error.message);
    }
  }

  extractLicenses(packageData) {
    const licenses = [];
    
    const extractFromDeps = (deps, level = 0) => {
      if (!deps) return;
      
      Object.entries(deps).forEach(([name, info]) => {
        if (info.license) {
          licenses.push({
            name,
            license: info.license,
            version: info.version,
            level
          });
        }
        
        if (info.dependencies) {
          extractFromDeps(info.dependencies, level + 1);
        }
      });
    };
    
    extractFromDeps(packageData.dependencies);
    return licenses;
  }

  async runCodeAnalysis() {
    console.log('🔍 Running Code Analysis...');
    try {
      const issues = [];
      
      // Run ESLint security rules
      try {
        const lintOutput = execSync('npm run lint -- --format json', { 
          encoding: 'utf8',
          cwd: process.cwd()
        });
        
        const lintData = JSON.parse(lintOutput);
        const securityIssues = lintData.filter(issue => 
          issue.ruleId && (
            issue.ruleId.includes('security') ||
            issue.ruleId.includes('no-eval') ||
            issue.ruleId.includes('no-implied-eval') ||
            issue.ruleId.includes('no-new-func')
          )
        );
        
        issues.push(...securityIssues.map(issue => ({
          type: 'lint',
          severity: issue.severity,
          message: issue.message,
          rule: issue.ruleId,
          file: issue.filePath,
          line: issue.line
        })));
        
      } catch (lintError) {
        console.log('⚠️ Lint security check failed:', lintError.message);
      }
      
      // Check for common security patterns
      const securityPatterns = this.checkSecurityPatterns();
      issues.push(...securityPatterns);
      
      this.securityResults.codeAnalysis.status = 'success';
      this.securityResults.codeAnalysis.issues = issues;
      this.securityResults.codeAnalysis.summary = {
        total: issues.length,
        high: issues.filter(i => i.severity === 2).length,
        medium: issues.filter(i => i.severity === 1).length,
        low: issues.filter(i => i.severity === 0).length
      };
      
      console.log(`✅ Code analysis completed. Found ${issues.length} security issues`);
      
      // Save code analysis results
      fs.writeFileSync(
        path.join(this.reportDir, 'code-analysis.json'),
        JSON.stringify({
          issues: issues,
          summary: this.securityResults.codeAnalysis.summary
        }, null, 2)
      );
      
    } catch (error) {
      this.securityResults.codeAnalysis.status = 'failure';
      this.securityResults.codeAnalysis.issues = [];
      this.securityResults.codeAnalysis.summary = { total: 0, high: 0, medium: 0, low: 0 };
      console.log('❌ Code analysis failed:', error.message);
    }
  }

  checkSecurityPatterns() {
    const issues = [];
    const srcDir = path.join(process.cwd(), 'src');
    
    if (!fs.existsSync(srcDir)) return issues;
    
    const checkFile = (filePath) => {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Check for dangerous patterns
        const patterns = [
          { pattern: /eval\s*\(/, rule: 'no-eval', severity: 2, message: 'eval() usage detected' },
          { pattern: /new\s+Function/, rule: 'no-new-func', severity: 2, message: 'new Function() usage detected' },
          { pattern: /innerHTML\s*=/, rule: 'no-inner-html', severity: 1, message: 'innerHTML assignment detected' },
          { pattern: /document\.write/, rule: 'no-document-write', severity: 1, message: 'document.write() usage detected' },
          { pattern: /localStorage\[.*\]\s*=/, rule: 'local-storage-security', severity: 1, message: 'localStorage assignment detected' },
          { pattern: /sessionStorage\[.*\]\s*=/, rule: 'session-storage-security', severity: 1, message: 'sessionStorage assignment detected' }
        ];
        
        patterns.forEach(({ pattern, rule, severity, message }) => {
          const matches = content.match(pattern);
          if (matches) {
            issues.push({
              type: 'pattern',
              severity: severity,
              message: message,
              rule: rule,
              file: filePath,
              line: content.substring(0, content.indexOf(matches[0])).split('\n').length
            });
          }
        });
        
      } catch (error) {
        // Skip files that can't be read
      }
    };
    
    const walkDir = (dir) => {
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          walkDir(filePath);
        } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx')) {
          checkFile(filePath);
        }
      });
    };
    
    walkDir(srcDir);
    return issues;
  }

  async scanForSecrets() {
    console.log('🔐 Scanning for Secrets...');
    try {
      const findings = [];
      
      // Check for hardcoded secrets in source files
      const secretPatterns = [
        { pattern: /api[_-]?key\s*[:=]\s*['"][^'"]{10,}['"]/i, type: 'API Key' },
        { pattern: /password\s*[:=]\s*['"][^'"]{8,}['"]/i, type: 'Password' },
        { pattern: /secret\s*[:=]\s*['"][^'"]{10,}['"]/i, type: 'Secret' },
        { pattern: /token\s*[:=]\s*['"][^'"]{10,}['"]/i, type: 'Token' },
        { pattern: /private[_-]?key\s*[:=]\s*['"][^'"]{10,}['"]/i, type: 'Private Key' }
      ];
      
      const srcDir = path.join(process.cwd(), 'src');
      if (fs.existsSync(srcDir)) {
        const walkDir = (dir) => {
          const files = fs.readdirSync(dir);
          files.forEach(file => {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);
            
            if (stat.isDirectory()) {
              walkDir(filePath);
            } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx')) {
              try {
                const content = fs.readFileSync(filePath, 'utf8');
                
                secretPatterns.forEach(({ pattern, type }) => {
                  const matches = content.match(pattern);
                  if (matches) {
                    findings.push({
                      type: type,
                      file: filePath,
                      line: content.substring(0, content.indexOf(matches[0])).split('\n').length,
                      match: matches[0].substring(0, 50) + '...'
                    });
                  }
                });
              } catch (error) {
                // Skip files that can't be read
              }
            }
          });
        };
        
        walkDir(srcDir);
      }
      
      this.securityResults.secrets.status = 'success';
      this.securityResults.secrets.findings = findings;
      
      console.log(`✅ Secret scan completed. Found ${findings.length} potential secrets`);
      
      // Save secret scan results
      fs.writeFileSync(
        path.join(this.reportDir, 'secret-scan.json'),
        JSON.stringify({
          findings: findings,
          timestamp: new Date().toISOString()
        }, null, 2)
      );
      
    } catch (error) {
      this.securityResults.secrets.status = 'failure';
      this.securityResults.secrets.findings = [];
      console.log('❌ Secret scan failed:', error.message);
    }
  }

  async runComplianceChecks() {
    console.log('📋 Running Compliance Checks...');
    try {
      const checks = [];
      
      // Check for security headers in build output
      const distDir = path.join(process.cwd(), 'dist');
      if (fs.existsSync(distDir)) {
        const htmlFiles = fs.readdirSync(distDir).filter(file => file.endsWith('.html'));
        
        htmlFiles.forEach(file => {
          const filePath = path.join(distDir, file);
          try {
            const content = fs.readFileSync(filePath, 'utf8');
            
            // Check for security meta tags
            const hasCSP = content.includes('Content-Security-Policy');
            const hasXFrame = content.includes('X-Frame-Options');
            const hasXContent = content.includes('X-Content-Type-Options');
            
            checks.push({
              file: file,
              csp: hasCSP,
              xFrame: hasXFrame,
              xContent: hasXContent
            });
          } catch (error) {
            // Skip files that can't be read
          }
        });
      }
      
      // Check package.json for security scripts
      const packagePath = path.join(process.cwd(), 'package.json');
      if (fs.existsSync(packagePath)) {
        try {
          const packageData = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
          const scripts = packageData.scripts || {};
          
          checks.push({
            type: 'package-scripts',
            hasSecurityScript: !!scripts.security,
            hasAuditScript: !!scripts.audit,
            hasLintScript: !!scripts.lint
          });
        } catch (error) {
          // Skip if package.json can't be parsed
        }
      }
      
      this.securityResults.compliance.status = 'success';
      this.securityResults.compliance.checks = checks;
      
      console.log(`✅ Compliance checks completed. Performed ${checks.length} checks`);
      
      // Save compliance results
      fs.writeFileSync(
        path.join(this.reportDir, 'compliance-checks.json'),
        JSON.stringify({
          checks: checks,
          timestamp: new Date().toISOString()
        }, null, 2)
      );
      
    } catch (error) {
      this.securityResults.compliance.status = 'failure';
      this.securityResults.compliance.checks = [];
      console.log('❌ Compliance checks failed:', error.message);
    }
  }

  async generateSecurityReport() {
    console.log('📋 Generating Security Report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalVulnerabilities: this.securityResults.audit.summary.total || 0,
        criticalVulnerabilities: this.securityResults.audit.summary.critical || 0,
        highVulnerabilities: this.securityResults.audit.summary.high || 0,
        outdatedPackages: this.securityResults.dependencies.outdated.length,
        securityIssues: this.securityResults.codeAnalysis.summary.total || 0,
        potentialSecrets: this.securityResults.secrets.findings.length
      },
      results: this.securityResults,
      riskLevel: this.calculateRiskLevel()
    };
    
    // Save JSON report
    fs.writeFileSync(
      path.join(this.reportDir, 'security-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    // Generate markdown report
    const markdownReport = this.generateMarkdownReport(report);
    fs.writeFileSync(
      path.join(this.reportDir, 'SECURITY_REPORT.md'),
      markdownReport
    );
    
    console.log('📋 Security report generated successfully');
    return report;
  }

  calculateRiskLevel() {
    const critical = this.securityResults.audit.summary.critical || 0;
    const high = this.securityResults.audit.summary.high || 0;
    const secrets = this.securityResults.secrets.findings.length;
    
    if (critical > 0 || high > 5 || secrets > 0) return 'HIGH';
    if (high > 0 || this.securityResults.audit.summary.total > 10) return 'MEDIUM';
    return 'LOW';
  }

  generateMarkdownReport(report) {
    return `# Security Report - ${new Date().toLocaleDateString()}

## 🚨 Risk Level: ${report.riskLevel}

## Summary
- **Total Vulnerabilities**: ${report.summary.totalVulnerabilities}
- **Critical Vulnerabilities**: ${report.summary.criticalVulnerabilities} 🔴
- **High Vulnerabilities**: ${report.summary.highVulnerabilities} 🟠
- **Outdated Packages**: ${report.summary.outdatedPackages}
- **Security Issues**: ${report.summary.securityIssues}
- **Potential Secrets**: ${report.summary.potentialSecrets}

## Detailed Results

### 🔍 Security Audit
- **Status**: ${this.securityResults.audit.status === 'success' ? '✅ Completed' : '❌ Failed'}
- **Vulnerabilities**: ${this.securityResults.audit.summary.total || 0}
- **Breakdown**: Low: ${this.securityResults.audit.summary.low || 0}, Moderate: ${this.securityResults.audit.summary.moderate || 0}, High: ${this.securityResults.audit.summary.high || 0}, Critical: ${this.securityResults.audit.summary.critical || 0}

### 📦 Dependencies
- **Status**: ${this.securityResults.dependencies.status === 'success' ? '✅ Completed' : '❌ Failed'}
- **Outdated Packages**: ${this.securityResults.dependencies.outdated.length}
- **License Check**: ${this.securityResults.dependencies.licenses.length} packages checked

### 🔍 Code Analysis
- **Status**: ${this.securityResults.codeAnalysis.status === 'success' ? '✅ Completed' : '❌ Failed'}
- **Security Issues**: ${this.securityResults.codeAnalysis.summary.total || 0}
- **Breakdown**: High: ${this.securityResults.codeAnalysis.summary.high || 0}, Medium: ${this.securityResults.codeAnalysis.summary.medium || 0}, Low: ${this.securityResults.codeAnalysis.summary.low || 0}

### 🔐 Secret Scan
- **Status**: ${this.securityResults.secrets.status === 'success' ? '✅ Completed' : '❌ Failed'}
- **Potential Secrets**: ${this.securityResults.secrets.findings.length}

### 📋 Compliance
- **Status**: ${this.securityResults.compliance.status === 'success' ? '✅ Completed' : '❌ Failed'}
- **Checks Performed**: ${this.securityResults.compliance.checks.length}

## 🚨 Immediate Actions Required

${report.summary.criticalVulnerabilities > 0 ? 
  `1. **CRITICAL**: Fix ${report.summary.criticalVulnerabilities} critical vulnerabilities immediately
2. **CRITICAL**: Update packages with critical security issues` : 
  '1. ✅ No critical vulnerabilities found'
}

${report.summary.highVulnerabilities > 0 ? 
  `3. **HIGH**: Address ${report.summary.highVulnerabilities} high-risk vulnerabilities
4. **HIGH**: Review and update high-risk packages` : 
  '2. ✅ No high-risk vulnerabilities found'
}

${report.summary.potentialSecrets > 0 ? 
  `5. **SECRETS**: Remove or secure ${report.summary.potentialSecrets} hardcoded secrets
6. **SECRETS**: Use environment variables for sensitive data` : 
  '3. ✅ No hardcoded secrets found'
}

## 📚 Recommendations

1. **Regular Updates**: Update dependencies weekly
2. **Security Scanning**: Run security audits daily
3. **Code Review**: Implement security-focused code reviews
4. **Training**: Provide security training for developers
5. **Monitoring**: Set up continuous security monitoring

---
*Report generated by Enhanced Security Automation*
`;
  }

  async runAllSecurityChecks() {
    console.log('🚀 Starting comprehensive security checks...');
    
    await this.runSecurityAudit();
    await this.checkDependencies();
    await this.runCodeAnalysis();
    await this.scanForSecrets();
    await this.runComplianceChecks();
    
    const report = await this.generateSecurityReport();
    
    console.log('\n🛡️ Security Check Summary:');
    console.log(`Vulnerabilities: ${report.summary.totalVulnerabilities}`);
    console.log(`Critical: ${report.summary.criticalVulnerabilities} 🔴`);
    console.log(`High: ${report.summary.highVulnerabilities} 🟠`);
    console.log(`Risk Level: ${report.riskLevel}`);
    
    return report;
  }
}

// Main execution
async function main() {
  const security = new EnhancedSecurityAutomation();
  
  try {
    await security.runAllSecurityChecks();
  } catch (error) {
    console.error('❌ Security automation failed:', error);
    process.exit(1);
  }
}

// Start the security automation
main().catch(console.error);
