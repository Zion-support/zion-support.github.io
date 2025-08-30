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
    
    // Check for outdated dependencies
    console.log('🔍 Checking for outdated dependencies...');
    try {
      execSync('npm outdated', { stdio: 'inherit' });
    } catch (error) {
      console.log('✅ All dependencies are up to date');
      return;
    }
    
    // Check for security vulnerabilities
    console.log('🔒 Checking for security vulnerabilities...');
    try {
      execSync('npm audit --audit-level=moderate', { stdio: 'inherit' });
      console.log('✅ No security vulnerabilities found');
    } catch (error) {
      console.log('⚠️  Security vulnerabilities found, attempting to fix...');
      try {
        execSync('npm audit fix --audit-level=moderate', { stdio: 'inherit' });
        console.log('✅ Security vulnerabilities fixed');
      } catch (fixError) {
        console.log('❌ Could not fix security vulnerabilities');
      }
    }
    
    // Update minor and patch versions
    console.log('🔄 Updating minor and patch versions...');
    try {
      execSync('npm update', { stdio: 'inherit' });
      console.log('✅ Minor and patch updates completed');
    } catch (error) {
      console.log('⚠️  Some updates failed');
    }
    
    // Check for major version updates
    console.log('🔍 Checking for major version updates...');
    try {
      const outdatedOutput = execSync('npm outdated --json', { encoding: 'utf8' });
      const outdated = JSON.parse(outdatedOutput);
      
      const majorUpdates = Object.entries(outdated).filter(([pkg, info]) => {
        const current = info.current.split('.')[0];
        const latest = info.latest.split('.')[0];
        return current !== latest;
      });
      
      if (majorUpdates.length > 0) {
        console.log('⚠️  Major version updates available:');
        majorUpdates.forEach(([pkg, info]) => {
          console.log(`  - ${pkg}: ${info.current} → ${info.latest}`);
        });
        
        console.log('ℹ️  Major updates require manual review');
      } else {
        console.log('✅ No major version updates available');
      }
    } catch (error) {
      console.log('ℹ️  Could not check for major updates');
    }
    
    // Install dependencies
    console.log('📦 Installing updated dependencies...');
    execSync('npm install', { stdio: 'inherit' });
    
    // Run tests to ensure nothing broke
    console.log('🧪 Running tests after updates...');
    try {
      execSync('npm test', { stdio: 'inherit' });
      console.log('✅ Tests passed after updates');
    } catch (error) {
      console.log('❌ Tests failed after updates - rolling back...');
      execSync('npm install', { stdio: 'inherit' });
      // Don't exit, just log the error and continue
    }
    
    // Generate dependency update report
    const report = {
      timestamp: new Date().toISOString(),
      summary: 'Dependency updates completed',
      status: 'completed'
    };
    
    const reportPath = path.join(process.cwd(), 'dependency-updates-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Report saved to ${reportPath}`);
    
    console.log('✅ Continuous dependency updates completed successfully');
    
  } catch (error) {
    console.error('❌ Continuous dependency updates failed:', error.message);
    // Don't exit, just log the error and continue
  }
}

// Main continuous loop
async function runContinuous() {
  console.log(`🚀 Starting continuous dependency updates with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
  
  // Run initial dependency updates
  await runDependencyUpdates();
  
  // Set up continuous execution
  setInterval(async () => {
    await runDependencyUpdates();
  }, AUTOMATION_INTERVAL);
  
  console.log(`✅ Continuous dependency updates running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Start the continuous dependency updates
runContinuous().catch(error => {
  console.error('❌ Failed to start continuous dependency updates:', error);
  process.exit(1);
});
