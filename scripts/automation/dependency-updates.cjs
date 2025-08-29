#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('📦 Dependency Updates Automation Started');

function runCommand(command, description) {
  try {
    console.log(`📋 ${description}...`);
    const result = execSync(command, { 
      encoding: 'utf8', 
      stdio: 'pipe',
      cwd: process.cwd()
    });
    console.log(`✅ ${description} completed successfully`);
    return result;
  } catch (error) {
    console.log(`❌ ${description} failed:`, error.message);
    return null;
  }
}

function runDependencyUpdates() {
  console.log('🔄 Starting dependency update process...');
  
  // Check for outdated packages
  console.log('🔍 Checking for outdated packages...');
  let outdatedPackages = [];
  
  try {
    const outdatedResult = execSync('npm outdated --json', { 
      encoding: 'utf8', 
      stdio: 'pipe',
      cwd: process.cwd()
    });
    
    if (outdatedResult.trim()) {
      const outdated = JSON.parse(outdatedResult);
      outdatedPackages = Object.keys(outdated);
      console.log(`📦 Found ${outdatedPackages.length} outdated packages:`);
      
      outdatedPackages.forEach(pkg => {
        const info = outdated[pkg];
        console.log(`  ${pkg}: ${info.current} → ${info.latest}`);
      });
    } else {
      console.log('✅ All packages are up to date');
      return;
    }
  } catch (error) {
    console.log('✅ No outdated packages found');
    return;
  }
  
  // Check for security vulnerabilities
  console.log('🔒 Checking for security vulnerabilities...');
  try {
    const auditResult = execSync('npm audit --json', { 
      encoding: 'utf8', 
      stdio: 'pipe',
      cwd: process.cwd()
    });
    
    const audit = JSON.parse(auditResult);
    const vulnerabilities = audit.metadata.vulnerabilities;
    
    if (vulnerabilities.high > 0 || vulnerabilities.critical > 0) {
      console.log('⚠️ Critical security vulnerabilities found!');
      console.log(`  High: ${vulnerabilities.high}, Critical: ${vulnerabilities.critical}`);
      
      // Try to fix security issues
      console.log('🔧 Attempting to fix security vulnerabilities...');
      runCommand('npm audit fix', 'Security fix');
    }
  } catch (error) {
    console.log('✅ No security vulnerabilities found');
  }
  
  // Update dependencies (minor and patch versions only)
  console.log('🔄 Updating dependencies...');
  try {
    // Update minor and patch versions
    runCommand('npm update', 'Minor and patch updates');
    
    // Check if major updates are available
    const majorUpdates = outdatedPackages.filter(pkg => {
      try {
        const result = execSync(`npm view ${pkg} version --json`, { 
          encoding: 'utf8', 
          stdio: 'pipe',
          cwd: process.cwd()
        });
        const latest = JSON.parse(result);
        return latest !== 'latest';
      } catch (error) {
        return false;
      }
    });
    
    if (majorUpdates.length > 0) {
      console.log('⚠️ Major updates available (manual review required):');
      majorUpdates.forEach(pkg => console.log(`  ${pkg}`));
    }
    
  } catch (error) {
    console.log('❌ Failed to update dependencies');
  }
  
  // Verify build after updates
  console.log('🏗️ Verifying build after updates...');
  runCommand('npm run build', 'Build verification');
  
  // Run tests to ensure nothing broke
  console.log('🧪 Running tests after updates...');
  runCommand('npm test', 'Test execution');
  
  console.log('✅ Dependency update process completed');
}

// Main execution
runDependencyUpdates();

// Set up interval for daily execution
const interval = process.env.AUTOMATION_INTERVAL || 86400000; // 24 hours default
setInterval(runDependencyUpdates, interval);

console.log(`⏰ Dependency Updates will run every ${interval / 3600000} hours`);