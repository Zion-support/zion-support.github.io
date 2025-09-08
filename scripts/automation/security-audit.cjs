#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

console.log('🔒 Starting Security Audit Automation...');

// Function to run npm audit
function runNpmAudit() {
  try {
    console.log('🔍 Running npm audit...');
    const result = execSync('npm audit --json', { encoding: 'utf8' });
    return JSON.parse(result);
  } catch (error) {
    if (error.status === 1) {
      // npm audit returns 1 when vulnerabilities are found
      try {
        return JSON.parse(error.stdout);
      } catch (parseError) {
        console.log('⚠️  npm audit found vulnerabilities but output could not be parsed');
        return null;
      }
    }
    throw error;
  }
}

// Function to run yarn audit if yarn.lock exists
function runYarnAudit() {
  try {
    if (fs.existsSync('./yarn.lock')) {
      console.log('🔍 Running yarn audit...');
      const result = execSync('yarn audit --json', { encoding: 'utf8' });
      return JSON.parse(result);
    }
    return null;
  } catch (error) {
    if (error.status === 1) {
      try {
        return JSON.parse(error.stdout);
      } catch (parseError) {
        console.log('⚠️  yarn audit found vulnerabilities but output could not be parsed');
        return null;
      }
    }
    return null;
  }
}

// Function to check for outdated packages
function checkOutdatedPackages() {
  try {
    console.log('📦 Checking for outdated packages...');
    const result = execSync('npm outdated --json', { encoding: 'utf8' });
    return JSON.parse(result);
  } catch (error) {
    if (error.status === 1) {
      // npm outdated returns 1 when packages are outdated
      try {
        return JSON.parse(error.stdout);
      } catch (parseError) {
        console.log('⚠️  Found outdated packages but output could not be parsed');
        return null;
      }
    }
    return null;
  }
}

// Function to check for known vulnerabilities in dependencies
function checkKnownVulnerabilities() {
  try {
    console.log('🚨 Checking for known vulnerabilities...');
    const result = execSync('npm ls --json', { encoding: 'utf8' });
    const dependencies = JSON.parse(result);
    
    // Check for packages with known security issues
    const vulnerablePackages = [];
    
    function checkPackage(pkg, path = '') {
      if (pkg.vulnerabilities) {
        vulnerablePackages.push({
          name: pkg.name,
          version: pkg.version,
          path: path,
          vulnerabilities: pkg.vulnerabilities
        });
      }
      
      if (pkg.dependencies) {
        Object.keys(pkg.dependencies).forEach(depName => {
          const dep = pkg.dependencies[depName];
          checkPackage(dep, `${path} > ${depName}`);
        });
      }
    }
    
    checkPackage(dependencies);
    return vulnerablePackages;
  } catch (error) {
    console.log('⚠️  Could not check package vulnerabilities:', error.message);
    return [];
  }
}

// Function to generate security report
function generateSecurityReport(npmAuditResult, yarnAuditResult, outdatedPackages, vulnerablePackages) {
  const report = {
    timestamp: new Date().toISOString(),
    npmAudit: npmAuditResult,
    yarnAudit: yarnAuditResult,
    outdatedPackages: outdatedPackages,
    vulnerablePackages: vulnerablePackages,
    summary: {
      totalVulnerabilities: 0,
      criticalVulnerabilities: 0,
      highVulnerabilities: 0,
      moderateVulnerabilities: 0,
      lowVulnerabilities: 0,
      outdatedPackagesCount: 0
    }
  };
  
  // Calculate summary from npm audit
  if (npmAuditResult && npmAuditResult.metadata) {
    const metadata = npmAuditResult.metadata;
    report.summary.totalVulnerabilities = metadata.vulnerabilities || 0;
    report.summary.criticalVulnerabilities = metadata.vulnerabilities?.critical || 0;
    report.summary.highVulnerabilities = metadata.vulnerabilities?.high || 0;
    report.summary.moderateVulnerabilities = metadata.vulnerabilities?.moderate || 0;
    report.summary.lowVulnerabilities = metadata.vulnerabilities?.low || 0;
  }
  
  // Calculate summary from yarn audit
  if (yarnAuditResult && yarnAuditResult.data) {
    const data = yarnAuditResult.data;
    report.summary.totalVulnerabilities += data.vulnerabilities || 0;
  }
  
  // Count outdated packages
  if (outdatedPackages) {
    report.summary.outdatedPackagesCount = Object.keys(outdatedPackages).length;
  }
  
  return report;
}

// Main function
async function runSecurityAudit() {
  try {
    console.log('🚀 Starting comprehensive security audit...');
    
    // Run various security checks
    const npmAuditResult = runNpmAudit();
    const yarnAuditResult = runYarnAudit();
    const outdatedPackages = checkOutdatedPackages();
    const vulnerablePackages = checkKnownVulnerabilities();
    
    // Generate comprehensive report
    const securityReport = generateSecurityReport(
      npmAuditResult,
      yarnAuditResult,
      outdatedPackages,
      vulnerablePackages
    );
    
    // Save detailed report
    fs.writeFileSync('./security-audit-report.json', JSON.stringify(securityReport, null, 2));
    
    // Display summary
    console.log('\n📊 Security Audit Summary:');
    console.log(`Total vulnerabilities: ${securityReport.summary.totalVulnerabilities}`);
    console.log(`Critical: ${securityReport.summary.criticalVulnerabilities}`);
    console.log(`High: ${securityReport.summary.highVulnerabilities}`);
    console.log(`Moderate: ${securityReport.summary.moderateVulnerabilities}`);
    console.log(`Low: ${securityReport.summary.lowVulnerabilities}`);
    console.log(`Outdated packages: ${securityReport.summary.outdatedPackagesCount}`);
    
    // Provide recommendations
    if (securityReport.summary.totalVulnerabilities > 0) {
      console.log('\n⚠️  Security vulnerabilities detected!');
      console.log('Recommendations:');
      console.log('1. Run: npm audit fix');
      console.log('2. Run: npm audit fix --force (if needed)');
      console.log('3. Update packages with: npm update');
    }
    
    if (securityReport.summary.outdatedPackagesCount > 0) {
      console.log('\n📦 Outdated packages detected!');
      console.log('Recommendations:');
      console.log('1. Review outdated packages: npm outdated');
      console.log('2. Update packages: npm update');
      console.log('3. Update to latest: npm update --latest');
    }
    
    if (securityReport.summary.totalVulnerabilities === 0 && securityReport.summary.outdatedPackagesCount === 0) {
      console.log('\n✅ No security issues or outdated packages found!');
    }
    
    console.log('\n🔒 Security Audit Automation completed successfully!');
    console.log('📄 Detailed report saved to: security-audit-report.json');
    
  } catch (error) {
    console.error('❌ Error in Security Audit Automation:', error);
    process.exit(1);
  }
}

// Run the automation
runSecurityAudit();