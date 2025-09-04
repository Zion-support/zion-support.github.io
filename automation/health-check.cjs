#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🏥 Health Check System');
console.log('======================');

const healthChecks = [];

// Function to check file system health
function checkFileSystem() {
  console.log('📁 Checking file system...');
  try {
    const stats = fs.statSync('.');
    healthChecks.push({
      name: 'File System',
      status: 'healthy',
      details: 'File system accessible'
    });
    console.log('✅ File system is healthy');
  } catch (error) {
    healthChecks.push({
      name: 'File System',
      status: 'unhealthy',
      details: error.message
    });
    console.log('❌ File system check failed:', error.message);
  }
}

// Function to check Node.js version
function checkNodeVersion() {
  console.log('🟢 Checking Node.js version...');
  try {
    const version = process.version;
    const majorVersion = parseInt(version.slice(1).split('.')[0]);
    
    if (majorVersion >= 16) {
      healthChecks.push({
        name: 'Node.js Version',
        status: 'healthy',
        details: `Node.js ${version} (compatible)`
      });
      console.log(`✅ Node.js version ${version} is compatible`);
    } else {
      healthChecks.push({
        name: 'Node.js Version',
        status: 'warning',
        details: `Node.js ${version} (recommend upgrading to 16+)`
      });
      console.log(`⚠️ Node.js version ${version} is outdated`);
    }
  } catch (error) {
    healthChecks.push({
      name: 'Node.js Version',
      status: 'unhealthy',
      details: error.message
    });
    console.log('❌ Node.js version check failed:', error.message);
  }
}

// Function to check package.json
function checkPackageJson() {
  console.log('📦 Checking package.json...');
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    
    if (packageJson.name && packageJson.version) {
      healthChecks.push({
        name: 'Package.json',
        status: 'healthy',
        details: `Package: ${packageJson.name} v${packageJson.version}`
      });
      console.log(`✅ Package.json is valid: ${packageJson.name} v${packageJson.version}`);
    } else {
      healthChecks.push({
        name: 'Package.json',
        status: 'unhealthy',
        details: 'Missing name or version'
      });
      console.log('❌ Package.json is missing required fields');
    }
  } catch (error) {
    healthChecks.push({
      name: 'Package.json',
      status: 'unhealthy',
      details: error.message
    });
    console.log('❌ Package.json check failed:', error.message);
  }
}

// Function to check dependencies
function checkDependencies() {
  console.log('🔗 Checking dependencies...');
  try {
    if (fs.existsSync('node_modules')) {
      healthChecks.push({
        name: 'Dependencies',
        status: 'healthy',
        details: 'node_modules directory exists'
      });
      console.log('✅ Dependencies are installed');
    } else {
      healthChecks.push({
        name: 'Dependencies',
        status: 'warning',
        details: 'node_modules not found, run npm install'
      });
      console.log('⚠️ Dependencies not installed');
    }
  } catch (error) {
    healthChecks.push({
      name: 'Dependencies',
      status: 'unhealthy',
      details: error.message
    });
    console.log('❌ Dependencies check failed:', error.message);
  }
}

// Function to check build system
function checkBuildSystem() {
  console.log('🏗️ Checking build system...');
  try {
    if (fs.existsSync('next.config.js') || fs.existsSync('next.config.mjs')) {
      healthChecks.push({
        name: 'Build System',
        status: 'healthy',
        details: 'Next.js configuration found'
      });
      console.log('✅ Next.js build system configured');
    } else {
      healthChecks.push({
        name: 'Build System',
        status: 'warning',
        details: 'No Next.js configuration found'
      });
      console.log('⚠️ No Next.js configuration found');
    }
  } catch (error) {
    healthChecks.push({
      name: 'Build System',
      status: 'unhealthy',
      details: error.message
    });
    console.log('❌ Build system check failed:', error.message);
  }
}

// Function to check source files
function checkSourceFiles() {
  console.log('📄 Checking source files...');
  try {
    const requiredDirs = ['pages', 'components'];
    const missingDirs = [];
    
    requiredDirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        missingDirs.push(dir);
      }
    });
    
    if (missingDirs.length === 0) {
      healthChecks.push({
        name: 'Source Files',
        status: 'healthy',
        details: 'Required directories present'
      });
      console.log('✅ Required source directories present');
    } else {
      healthChecks.push({
        name: 'Source Files',
        status: 'warning',
        details: `Missing directories: ${missingDirs.join(', ')}`
      });
      console.log(`⚠️ Missing directories: ${missingDirs.join(', ')}`);
    }
  } catch (error) {
    healthChecks.push({
      name: 'Source Files',
      status: 'unhealthy',
      details: error.message
    });
    console.log('❌ Source files check failed:', error.message);
  }
}

// Function to check environment
function checkEnvironment() {
  console.log('🌍 Checking environment...');
  try {
    const envVars = ['NODE_ENV'];
    const missingVars = [];
    
    envVars.forEach(varName => {
      if (!process.env[varName]) {
        missingVars.push(varName);
      }
    });
    
    if (missingVars.length === 0) {
      healthChecks.push({
        name: 'Environment',
        status: 'healthy',
        details: 'Required environment variables set'
      });
      console.log('✅ Environment variables configured');
    } else {
      healthChecks.push({
        name: 'Environment',
        status: 'warning',
        details: `Missing environment variables: ${missingVars.join(', ')}`
      });
      console.log(`⚠️ Missing environment variables: ${missingVars.join(', ')}`);
    }
  } catch (error) {
    healthChecks.push({
      name: 'Environment',
      status: 'unhealthy',
      details: error.message
    });
    console.log('❌ Environment check failed:', error.message);
  }
}

// Main execution
async function main() {
  const startTime = Date.now();
  
  try {
    console.log('Starting comprehensive health check...\n');
    
    // Run all health checks
    checkFileSystem();
    checkNodeVersion();
    checkPackageJson();
    checkDependencies();
    checkBuildSystem();
    checkSourceFiles();
    checkEnvironment();
    
    const duration = Date.now() - startTime;
    
    // Calculate overall health
    const healthyCount = healthChecks.filter(check => check.status === 'healthy').length;
    const warningCount = healthChecks.filter(check => check.status === 'warning').length;
    const unhealthyCount = healthChecks.filter(check => check.status === 'unhealthy').length;
    
    const overallStatus = unhealthyCount > 0 ? 'unhealthy' : 
                         warningCount > 0 ? 'warning' : 'healthy';
    
    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      overallStatus,
      summary: {
        total: healthChecks.length,
        healthy: healthyCount,
        warnings: warningCount,
        unhealthy: unhealthyCount
      },
      checks: healthChecks
    };
    
    // Save report
    const reportPath = 'health-check-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('\n📊 Health Check Summary:');
    console.log(`   Overall Status: ${overallStatus.toUpperCase()}`);
    console.log(`   Total Checks: ${healthChecks.length}`);
    console.log(`   Healthy: ${healthyCount}`);
    console.log(`   Warnings: ${warningCount}`);
    console.log(`   Unhealthy: ${unhealthyCount}`);
    console.log(`   Duration: ${duration}ms`);
    console.log(`\n📄 Report saved to: ${reportPath}`);
    
    if (overallStatus === 'healthy') {
      console.log('\n🎉 All health checks passed!');
      process.exit(0);
    } else if (overallStatus === 'warning') {
      console.log('\n⚠️ Health checks completed with warnings');
      process.exit(0);
    } else {
      console.log('\n❌ Health checks failed');
      process.exit(1);
    }
    
  } catch (error) {
    console.error('❌ Health check system failed:', error.message);
    process.exit(1);
  }
}

main();