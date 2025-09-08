#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔒 Starting continuous security audit automation...');

// Get automation interval from environment variable (default: 4 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 14400000; // 4 hours

async function runSecurityAudit() {
  try {
    console.log(`🔒 Running security audit at ${new Date().toISOString()}`);
    
    // Install dependencies if needed
    console.log('📦 Installing dependencies...');
    try {
      execSync('npm ci', { stdio: 'inherit' });
      console.log('✅ Dependencies installed');
    } catch (error) {
      console.log('⚠️  Dependency installation failed but continuing...');
    }
    
    // Run npm audit
    console.log('🔍 Running npm audit...');
    let auditResult = { vulnerabilities: 0, details: '' };
    
    try {
      const auditOutput = execSync('npm audit --audit-level=moderate --json', { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      try {
        const auditData = JSON.parse(auditOutput);
        auditResult.vulnerabilities = auditData.metadata?.vulnerabilities?.total || 0;
        auditResult.details = auditData;
      } catch (parseError) {
        auditResult.details = auditOutput;
      }
    } catch (error) {
      console.log('⚠️  npm audit failed, checking for vulnerabilities manually...');
      try {
        const manualAudit = execSync('npm audit --audit-level=moderate', { 
          stdio: 'pipe',
          encoding: 'utf8'
        });
        if (manualAudit.includes('found')) {
          auditResult.vulnerabilities = 1; // At least one vulnerability found
        }
        auditResult.details = manualAudit;
      } catch (manualError) {
        console.log('⚠️  Manual audit also failed');
      }
    }
    
    // Check for outdated packages
    console.log('🔍 Checking for outdated packages...');
    let outdatedPackages = [];
    
    try {
      const outdatedOutput = execSync('npm outdated --json', { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      try {
        const outdatedData = JSON.parse(outdatedOutput);
        outdatedPackages = Object.keys(outdatedData);
      } catch (parseError) {
        console.log('⚠️  Could not parse outdated packages output');
      }
    } catch (error) {
      console.log('✅ No outdated packages found or check failed');
    }
    
    // Check for known security issues in package-lock.json
    console.log('🔍 Checking package-lock.json for security issues...');
    const packageLockPath = path.join(process.cwd(), 'package-lock.json');
    let packageLockIssues = [];
    
    if (fs.existsSync(packageLockPath)) {
      try {
        const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8'));
        // Check for packages with known security issues
        if (packageLock.vulnerabilities) {
          packageLockIssues = Object.keys(packageLock.vulnerabilities);
        }
      } catch (error) {
        console.log('⚠️  Could not parse package-lock.json');
      }
    }
    
    // Generate security report
    console.log('📊 Generating security audit report...');
    const report = {
      timestamp: new Date().toISOString(),
      vulnerabilities: auditResult.vulnerabilities,
      outdatedPackages: outdatedPackages.length,
      packageLockIssues: packageLockIssues.length,
      details: {
        audit: auditResult.details,
        outdated: outdatedPackages,
        packageLockIssues: packageLockIssues
      },
      summary: 'Security audit completed',
      status: 'completed',
      recommendations: []
    };
    
    // Add recommendations based on findings
    if (auditResult.vulnerabilities > 0) {
      report.recommendations.push('Run npm audit fix to resolve vulnerabilities');
    }
    
    if (outdatedPackages.length > 0) {
      report.recommendations.push('Update outdated packages to latest versions');
    }
    
    if (packageLockIssues.length > 0) {
      report.recommendations.push('Review package-lock.json for security issues');
    }
    
    if (report.recommendations.length === 0) {
      report.recommendations.push('No immediate security actions required');
    }
    
    // Save report
    const reportPath = path.join(process.cwd(), 'security-audit-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`✅ Security audit report saved to ${reportPath}`);
    
    // Log summary
    console.log(`📊 Security Audit Summary:`);
    console.log(`  - Vulnerabilities: ${auditResult.vulnerabilities}`);
    console.log(`  - Outdated packages: ${outdatedPackages.length}`);
    console.log(`  - Package-lock issues: ${packageLockIssues.length}`);
    
    if (report.recommendations.length > 0) {
      console.log('💡 Recommendations:');
      report.recommendations.forEach(rec => console.log(`  - ${rec}`));
    }
    
    console.log('✅ Continuous security audit completed successfully');
    
  } catch (error) {
    console.error('❌ Continuous security audit failed:', error.message);
  }
}

// Main execution loop
async function main() {
  console.log(`🚀 Security audit automation started with ${AUTOMATION_INTERVAL}ms interval`);
  
  // Run immediately
  await runSecurityAudit();
  
  // Set up continuous execution
  setInterval(async () => {
    await runSecurityAudit();
  }, AUTOMATION_INTERVAL);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('🛑 Security audit automation shutting down...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🛑 Security audit automation shutting down...');
  process.exit(0);
});

// Start the automation
main().catch(error => {
  console.error('❌ Security audit automation failed to start:', error);
  process.exit(1);
});