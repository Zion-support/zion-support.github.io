#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('📦 Starting weekly dependency updates automation...');

async function runDependencyUpdates() {
  try {
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
        process.exit(1);
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
      process.exit(1);
    }
    
    console.log('✅ Dependency updates completed successfully');
    
  } catch (error) {
    console.error('❌ Dependency updates failed:', error.message);
    process.exit(1);
  }
}

// Run the dependency updates
runDependencyUpdates();
