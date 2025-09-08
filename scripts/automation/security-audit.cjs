#!/usr/bin/env node

/**
 * Security Audit Automation Script
 * Replaces GitHub Actions security.yml workflow
 * Runs every 4 hours via PM2
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class SecurityAuditor {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'security-reports');
    this.ensureReportsDirectory();
  }

  ensureReportsDirectory() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  async runSecurityAudit() {
    console.log('🔒 Starting security audit...');
    
    try {
      // Run npm audit
      console.log('📋 Running npm audit...');
      const auditResult = this.runNpmAudit();
      
      // Check for outdated packages
      console.log('📦 Checking for outdated packages...');
      const outdatedResult = this.checkOutdatedPackages();
      
      // Generate security report
      const report = this.generateSecurityReport(auditResult, outdatedResult);
      
      // Save report
      this.saveReport(report);
      
      console.log('✅ Security audit completed successfully');
      return true;
      
    } catch (error) {
      console.error('❌ Security audit failed:', error.message);
      return false;
    }
  }

  runNpmAudit() {
    try {
      const output = execSync('npm audit --audit-level=moderate --json', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      const auditData = JSON.parse(output);
      return {
        success: true,
        vulnerabilities: auditData.metadata?.vulnerabilities || {},
        advisories: auditData.advisories || {},
        summary: auditData.metadata?.summary || {}
      };
      
    } catch (error) {
      // npm audit returns non-zero exit code when vulnerabilities are found
      if (error.status === 1 && error.stdout) {
        try {
          const auditData = JSON.parse(error.stdout);
          return {
            success: false,
            vulnerabilities: auditData.metadata?.vulnerabilities || {},
            advisories: auditData.advisories || {},
            summary: auditData.metadata?.summary || {}
          };
        } catch (parseError) {
          return { success: false, error: 'Failed to parse audit output' };
        }
      }
      return { success: false, error: error.message };
    }
  }

  checkOutdatedPackages() {
    try {
      const output = execSync('npm outdated --json', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      const outdatedData = JSON.parse(output);
      return {
        success: true,
        packages: Object.keys(outdatedData).length,
        details: outdatedData
      };
      
    } catch (error) {
      // npm outdated returns non-zero when packages are outdated
      if (error.status === 1 && error.stdout) {
        try {
          const outdatedData = JSON.parse(error.stdout);
          return {
            success: true,
            packages: Object.keys(outdatedData).length,
            details: outdatedData
          };
        } catch (parseError) {
          return { success: false, error: 'Failed to parse outdated output' };
        }
      }
      return { success: true, packages: 0, details: {} };
    }
  }

  generateSecurityReport(auditResult, outdatedResult) {
    const timestamp = new Date().toISOString();
    const report = {
      timestamp,
      summary: {
        vulnerabilities: {
          critical: auditResult.vulnerabilities?.critical || 0,
          high: auditResult.vulnerabilities?.high || 0,
          moderate: auditResult.vulnerabilities?.moderate || 0,
          low: auditResult.vulnerabilities?.low || 0,
          info: auditResult.vulnerabilities?.info || 0
        },
        outdatedPackages: outdatedResult.packages || 0,
        totalIssues: (auditResult.vulnerabilities?.critical || 0) + 
                    (auditResult.vulnerabilities?.high || 0) + 
                    (auditResult.vulnerabilities?.moderate || 0) +
                    (outdatedResult.packages || 0)
      },
      details: {
        audit: auditResult,
        outdated: outdatedResult
      },
      recommendations: this.generateRecommendations(auditResult, outdatedResult)
    };

    return report;
  }

  generateRecommendations(auditResult, outdatedResult) {
    const recommendations = [];
    
    // Security recommendations
    if (auditResult.vulnerabilities?.critical > 0) {
      recommendations.push('🚨 CRITICAL: Address critical vulnerabilities immediately');
    }
    if (auditResult.vulnerabilities?.high > 0) {
      recommendations.push('⚠️ HIGH: Fix high-severity vulnerabilities as soon as possible');
    }
    if (auditResult.vulnerabilities?.moderate > 0) {
      recommendations.push('⚠️ MODERATE: Consider fixing moderate vulnerabilities');
    }
    
    // Dependency recommendations
    if (outdatedResult.packages > 0) {
      recommendations.push('📦 Update outdated packages to reduce security risks');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('✅ No immediate security concerns detected');
    }
    
    return recommendations;
  }

  saveReport(report) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `security-audit-${timestamp}.json`;
    const filepath = path.join(this.reportsDir, filename);
    
    fs.writeFileSync(filepath, JSON.stringify(report, null, 2));
    console.log(`📄 Security report saved: ${filename}`);
    
    // Also save a latest version
    const latestFilepath = path.join(this.reportsDir, 'security-audit-latest.json');
    fs.writeFileSync(latestFilepath, JSON.stringify(report, null, 2));
    
    // Generate markdown summary
    this.generateMarkdownSummary(report, timestamp);
  }

  generateMarkdownSummary(report, timestamp) {
    const markdown = `# Security Audit Report - ${timestamp}

## Summary
- **Critical Vulnerabilities**: ${report.summary.vulnerabilities.critical}
- **High Vulnerabilities**: ${report.summary.vulnerabilities.high}
- **Moderate Vulnerabilities**: ${report.summary.vulnerabilities.moderate}
- **Low Vulnerabilities**: ${report.summary.vulnerabilities.low}
- **Outdated Packages**: ${report.summary.outdatedPackages}
- **Total Issues**: ${report.summary.totalIssues}

## Recommendations
${report.recommendations.map(rec => `- ${rec}`).join('\n')}

## Status
${report.summary.totalIssues === 0 ? '✅ All Clear' : '⚠️ Issues Detected'}

---
*Report generated automatically by PM2 Security Auditor*
`;

    const filename = `security-audit-${timestamp}.md`;
    const filepath = path.join(this.reportsDir, filename);
    fs.writeFileSync(filepath, markdown);
    
    const latestFilepath = path.join(this.reportsDir, 'security-audit-latest.md');
    fs.writeFileSync(latestFilepath, markdown);
  }
}

// Main execution
async function main() {
  const auditor = new SecurityAuditor();
  await auditor.runSecurityAudit();
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = SecurityAuditor;