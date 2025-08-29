#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

console.log('📦 Starting Dependency Updates Automation...');

// Function to check for outdated packages
function checkOutdatedPackages() {
  try {
    console.log('🔍 Checking for outdated packages...');
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

// Function to check for available updates
function checkAvailableUpdates() {
  try {
    console.log('🔄 Checking for available updates...');
    const result = execSync('npm update --dry-run --json', { encoding: 'utf8' });
    return JSON.parse(result);
  } catch (error) {
    console.log('⚠️  Could not check available updates:', error.message);
    return null;
  }
}

// Function to check for major version updates
function checkMajorUpdates() {
  try {
    console.log('🚀 Checking for major version updates...');
    const result = execSync('npx npm-check-updates --json', { encoding: 'utf8' });
    return JSON.parse(result);
  } catch (error) {
    console.log('⚠️  Could not check major updates:', error.message);
    return null;
  }
}

// Function to check package.json for dependency types
function analyzeDependencies() {
  try {
    const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    
    const analysis = {
      dependencies: {
        count: Object.keys(packageJson.dependencies || {}).length,
        packages: packageJson.dependencies || {}
      },
      devDependencies: {
        count: Object.keys(packageJson.devDependencies || {}).length,
        packages: packageJson.devDependencies || {}
      },
      peerDependencies: {
        count: Object.keys(packageJson.peerDependencies || {}).length,
        packages: packageJson.peerDependencies || {}
      },
      optionalDependencies: {
        count: Object.keys(packageJson.optionalDependencies || {}).length,
        packages: packageJson.optionalDependencies || {}
      }
    };
    
    return analysis;
  } catch (error) {
    console.log('⚠️  Could not analyze package.json:', error.message);
    return null;
  }
}

// Function to check for security vulnerabilities
function checkSecurityVulnerabilities() {
  try {
    console.log('🔒 Checking for security vulnerabilities...');
    const result = execSync('npm audit --json', { encoding: 'utf8' });
    return JSON.parse(result);
  } catch (error) {
    if (error.status === 1) {
      try {
        return JSON.parse(error.stdout);
      } catch (parseError) {
        console.log('⚠️  npm audit found vulnerabilities but output could not be parsed');
        return null;
      }
    }
    return null;
  }
}

// Function to generate dependency report
function generateDependencyReport(outdatedPackages, availableUpdates, majorUpdates, dependencies, securityAudit) {
  const report = {
    timestamp: new Date().toISOString(),
    outdatedPackages: outdatedPackages,
    availableUpdates: availableUpdates,
    majorUpdates: majorUpdates,
    dependencies: dependencies,
    securityAudit: securityAudit,
    summary: {
      totalDependencies: 0,
      outdatedCount: 0,
      updateableCount: 0,
      majorUpdateCount: 0,
      securityVulnerabilities: 0
    }
  };
  
  // Calculate summary
  if (dependencies) {
    report.summary.totalDependencies = 
      dependencies.dependencies.count + 
      dependencies.devDependencies.count + 
      dependencies.peerDependencies.count + 
      dependencies.optionalDependencies.count;
  }
  
  if (outdatedPackages) {
    report.summary.outdatedCount = Object.keys(outdatedPackages).length;
  }
  
  if (availableUpdates) {
    report.summary.updateableCount = Object.keys(availableUpdates).length;
  }
  
  if (majorUpdates) {
    report.summary.majorUpdateCount = Object.keys(majorUpdates).length;
  }
  
  if (securityAudit && securityAudit.metadata) {
    report.summary.securityVulnerabilities = securityAudit.metadata.vulnerabilities || 0;
  }
  
  return report;
}

// Function to provide update recommendations
function provideRecommendations(report) {
  console.log('\n📋 Dependency Update Recommendations:');
  
  if (report.summary.outdatedCount > 0) {
    console.log('\n🔄 Outdated packages found:');
    console.log(`Total: ${report.summary.outdatedCount}`);
    console.log('Recommendations:');
    console.log('1. Run: npm update (for minor/patch updates)');
    console.log('2. Review major updates carefully before applying');
  }
  
  if (report.summary.majorUpdateCount > 0) {
    console.log('\n🚀 Major version updates available:');
    console.log(`Total: ${report.summary.majorUpdateCount}`);
    console.log('Recommendations:');
    console.log('1. Review breaking changes in changelogs');
    console.log('2. Test thoroughly before updating');
    console.log('3. Consider updating incrementally');
  }
  
  if (report.summary.securityVulnerabilities > 0) {
    console.log('\n🔒 Security vulnerabilities detected:');
    console.log(`Total: ${report.summary.securityVulnerabilities}`);
    console.log('Recommendations:');
    console.log('1. Run: npm audit fix');
    console.log('2. Update packages with known vulnerabilities');
    console.log('3. Consider using: npm audit fix --force (if needed)');
  }
  
  if (report.summary.outdatedCount === 0 && report.summary.majorUpdateCount === 0) {
    console.log('\n✅ All dependencies are up to date!');
  }
  
  console.log('\n📚 General recommendations:');
  console.log('1. Regularly check for updates: npm outdated');
  console.log('2. Use semantic versioning for your own packages');
  console.log('3. Lock dependency versions when needed');
  console.log('4. Test thoroughly after major updates');
}

// Main function
async function runDependencyUpdates() {
  try {
    console.log('🚀 Starting comprehensive dependency analysis...');
    
    // Run various dependency checks
    const outdatedPackages = checkOutdatedPackages();
    const availableUpdates = checkAvailableUpdates();
    const majorUpdates = checkMajorUpdates();
    const dependencies = analyzeDependencies();
    const securityAudit = checkSecurityVulnerabilities();
    
    // Generate comprehensive report
    const dependencyReport = generateDependencyReport(
      outdatedPackages,
      availableUpdates,
      majorUpdates,
      dependencies,
      securityAudit
    );
    
    // Save detailed report
    fs.writeFileSync('./dependency-updates-report.json', JSON.stringify(dependencyReport, null, 2));
    
    // Display summary
    console.log('\n📊 Dependency Analysis Summary:');
    console.log(`Total dependencies: ${dependencyReport.summary.totalDependencies}`);
    console.log(`Outdated packages: ${dependencyReport.summary.outdatedCount}`);
    console.log(`Updateable packages: ${dependencyReport.summary.updateableCount}`);
    console.log(`Major updates available: ${dependencyReport.summary.majorUpdateCount}`);
    console.log(`Security vulnerabilities: ${dependencyReport.summary.securityVulnerabilities}`);
    
    // Provide recommendations
    provideRecommendations(dependencyReport);
    
    console.log('\n📦 Dependency Updates Automation completed successfully!');
    console.log('📄 Detailed report saved to: dependency-updates-report.json');
    
  } catch (error) {
    console.error('❌ Error in Dependency Updates Automation:', error);
    process.exit(1);
  }
}

// Run the automation
runDependencyUpdates();