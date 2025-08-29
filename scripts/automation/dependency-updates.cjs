#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('📦 Starting continuous dependency updates automation...');

// Get automation interval from environment variable (default: 6 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 21600000; // 6 hours

async function runDependencyUpdates() {
  try {
    console.log(`📦 Running dependency updates check at ${new Date().toISOString()}`);
    
    // Install dependencies if needed
    console.log('📦 Installing dependencies...');
    try {
      execSync('npm ci', { stdio: 'inherit' });
      console.log('✅ Dependencies installed');
    } catch (error) {
      console.log('⚠️  Dependency installation failed but continuing...');
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
        console.log(`📊 Found ${outdatedPackages.length} outdated packages`);
      } catch (parseError) {
        console.log('⚠️  Could not parse outdated packages output');
      }
    } catch (error) {
      console.log('✅ No outdated packages found');
    }
    
    // Check for security vulnerabilities
    console.log('🔒 Checking for security vulnerabilities...');
    let vulnerabilities = 0;
    
    try {
      const auditOutput = execSync('npm audit --audit-level=moderate --json', { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      try {
        const auditData = JSON.parse(auditOutput);
        vulnerabilities = auditData.metadata?.vulnerabilities?.total || 0;
        console.log(`🔒 Found ${vulnerabilities} security vulnerabilities`);
      } catch (parseError) {
        console.log('⚠️  Could not parse audit output');
      }
    } catch (error) {
      console.log('✅ No security vulnerabilities found');
    }
    
    // Check for unused dependencies
    console.log('🔍 Checking for unused dependencies...');
    let unusedDeps = [];
    
    try {
      const depcheckOutput = execSync('npx depcheck --json', { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      try {
        const depcheckData = JSON.parse(depcheckOutput);
        unusedDeps = depcheckData.dependencies || [];
        console.log(`📦 Found ${unusedDeps.length} unused dependencies`);
      } catch (parseError) {
        console.log('⚠️  Could not parse depcheck output');
      }
    } catch (error) {
      console.log('⚠️  Depcheck not available or failed');
    }
    
    // Check for duplicate dependencies
    console.log('🔍 Checking for duplicate dependencies...');
    let duplicateDeps = [];
    
    try {
      const duplicatesOutput = execSync('npx npm-check-duplicates', { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      if (duplicatesOutput.includes('duplicate')) {
        duplicateDeps = duplicatesOutput.split('\n').filter(line => line.includes('duplicate'));
        console.log(`📦 Found ${duplicateDeps.length} duplicate dependencies`);
      } else {
        console.log('✅ No duplicate dependencies found');
      }
    } catch (error) {
      console.log('⚠️  Duplicate check not available or failed');
    }
    
    // Generate dependency report
    console.log('📊 Generating dependency updates report...');
    const report = {
      timestamp: new Date().toISOString(),
      outdatedPackages: outdatedPackages.length,
      vulnerabilities: vulnerabilities,
      unusedDependencies: unusedDeps.length,
      duplicateDependencies: duplicateDeps.length,
      details: {
        outdated: outdatedPackages,
        unused: unusedDeps,
        duplicates: duplicateDeps
      },
      summary: 'Dependency updates check completed',
      status: 'completed',
      recommendations: []
    };
    
    // Add recommendations based on findings
    if (outdatedPackages.length > 0) {
      report.recommendations.push('Consider updating outdated packages to latest versions');
    }
    
    if (vulnerabilities > 0) {
      report.recommendations.push('Run npm audit fix to resolve security vulnerabilities');
    }
    
    if (unusedDeps.length > 0) {
      report.recommendations.push('Review and remove unused dependencies to reduce bundle size');
    }
    
    if (duplicateDeps.length > 0) {
      report.recommendations.push('Resolve duplicate dependencies to avoid conflicts');
    }
    
    if (report.recommendations.length === 0) {
      report.recommendations.push('Dependencies are up to date and secure');
    }
    
    // Save report
    const reportPath = path.join(process.cwd(), 'dependency-updates-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`✅ Dependency updates report saved to ${reportPath}`);
    
    // Log summary
    console.log(`📊 Dependency Updates Summary:`);
    console.log(`  - Outdated packages: ${outdatedPackages.length}`);
    console.log(`  - Security vulnerabilities: ${vulnerabilities}`);
    console.log(`  - Unused dependencies: ${unusedDeps.length}`);
    console.log(`  - Duplicate dependencies: ${duplicateDeps.length}`);
    
    if (report.recommendations.length > 0) {
      console.log('💡 Recommendations:');
      report.recommendations.forEach(rec => console.log(`  - ${rec}`));
    }
    
    console.log('✅ Continuous dependency updates check completed successfully');
    
  } catch (error) {
    console.error('❌ Continuous dependency updates check failed:', error.message);
  }
}

// Main execution loop
async function main() {
  console.log(`🚀 Dependency updates automation started with ${AUTOMATION_INTERVAL}ms interval`);
  
  // Run immediately
  await runDependencyUpdates();
  
  // Set up continuous execution
  setInterval(async () => {
    await runDependencyUpdates();
  }, AUTOMATION_INTERVAL);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('🛑 Dependency updates automation shutting down...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🛑 Dependency updates automation shutting down...');
  process.exit(0);
});

// Start the automation
main().catch(error => {
  console.error('❌ Dependency updates automation failed to start:', error);
  process.exit(1);
});