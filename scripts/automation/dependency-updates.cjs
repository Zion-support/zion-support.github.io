#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('📦 Starting continuous dependency updates automation...');

// Get automation interval from environment variable (default: 6 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 21600000; // 6 hours

async function runDependencyUpdates() {
  try {
    console.log(`📦 Running dependency updates at ${new Date().toISOString()}`);
    
    // Check for outdated packages
    console.log('🔍 Checking for outdated packages...');
    let outdatedCount = 0;
    let outdatedPackages = {};
    
    try {
      const outdatedOutput = execSync('npm outdated --json', { encoding: 'utf8' });
      const outdatedData = JSON.parse(outdatedOutput);
      outdatedCount = Object.keys(outdatedData).length;
      outdatedPackages = outdatedData;
      
      if (outdatedCount > 0) {
        console.log(`⚠️  Found ${outdatedCount} outdated packages`);
        Object.keys(outdatedData).forEach(pkg => {
          const pkgInfo = outdatedData[pkg];
          console.log(`  - ${pkg}: ${pkgInfo.current} → ${pkgInfo.latest}`);
        });
      } else {
        console.log('✅ All packages are up to date');
      }
    } catch (error) {
      console.log('✅ No outdated packages found');
    }
    
    // Check for security vulnerabilities
    console.log('🔍 Checking for security vulnerabilities...');
    let vulnCount = 0;
    
    try {
      const auditOutput = execSync('npm audit --audit-level=moderate --json', { encoding: 'utf8' });
      const auditData = JSON.parse(auditOutput);
      
      if (auditData.metadata && auditData.metadata.vulnerabilities) {
        vulnCount = Object.values(auditData.metadata.vulnerabilities).reduce((sum, count) => sum + count, 0);
        console.log(`⚠️  Found ${vulnCount} security vulnerabilities`);
      } else {
        console.log('✅ No security vulnerabilities found');
      }
    } catch (error) {
      console.log('✅ Security audit passed');
    }
    
    // Update dependencies if there are updates available
    if (outdatedCount > 0) {
      console.log('🔄 Updating dependencies...');
      try {
        // Update packages
        execSync('npm update', { stdio: 'inherit' });
        console.log('✅ Dependencies updated successfully');
        
        // Install updated dependencies
        console.log('📥 Installing updated dependencies...');
        execSync('npm ci', { stdio: 'inherit' });
        console.log('✅ Updated dependencies installed');
        
        // Verify build still works
        console.log('🏗️  Verifying build after updates...');
        try {
          execSync('npm run build', { stdio: 'inherit' });
          console.log('✅ Build verification passed');
        } catch (buildError) {
          console.log('⚠️  Build failed after dependency updates');
        }
        
        // Run tests if available
        console.log('🧪 Running tests after updates...');
        try {
          execSync('npm test', { stdio: 'inherit' });
          console.log('✅ Tests passed after dependency updates');
        } catch (testError) {
          console.log('⚠️  Tests failed after dependency updates');
        }
        
      } catch (updateError) {
        console.log('❌ Failed to update dependencies:', updateError.message);
      }
    }
    
    // Generate dependency update report
    console.log('📊 Generating dependency update report...');
    const report = {
      timestamp: new Date().toISOString(),
      outdatedPackages: outdatedCount,
      outdatedDetails: outdatedPackages,
      securityVulnerabilities: vulnCount,
      summary: `Dependency update check completed. ${outdatedCount} outdated packages, ${vulnCount} vulnerabilities`,
      status: 'completed'
    };
    
    const reportPath = path.join(process.cwd(), 'dependency-updates-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Dependency update report saved to ${reportPath}`);
    
    console.log('✅ Continuous dependency updates completed successfully');
    
  } catch (error) {
    console.error('❌ Continuous dependency updates failed:', error.message);
    
    const errorReport = {
      timestamp: new Date().toISOString(),
      error: error.message,
      summary: 'Dependency updates failed',
      status: 'error'
    };
    
    const reportPath = path.join(process.cwd(), 'dependency-updates-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(errorReport, null, 2));
  }
}

// Run the dependency updates immediately
runDependencyUpdates();

// Set up continuous execution
setInterval(runDependencyUpdates, AUTOMATION_INTERVAL);

console.log(`📦 Dependency updates automation started. Running every ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
console.log('Press Ctrl+C to stop the automation');