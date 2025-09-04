#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🩺 Starting Health Check...');

const healthCheck = {
  timestamp: new Date().toISOString(),
  checks: {},
  status: 'healthy'
};

// Check if package.json exists
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  healthCheck.checks.packageJson = {
    status: 'ok',
    message: 'Package.json found',
    version: packageJson.version
  };
} catch (error) {
  healthCheck.checks.packageJson = {
    status: 'error',
    message: 'Package.json not found or invalid'
  };
  healthCheck.status = 'unhealthy';
}

// Check if node_modules exists
try {
  if (fs.existsSync('node_modules')) {
    healthCheck.checks.dependencies = {
      status: 'ok',
      message: 'Dependencies installed'
    };
  } else {
    healthCheck.checks.dependencies = {
      status: 'warning',
      message: 'Dependencies not installed'
    };
  }
} catch (error) {
  healthCheck.checks.dependencies = {
    status: 'error',
    message: 'Error checking dependencies'
  };
}

// Check disk space
try {
  const stats = execSync('df -h .', { encoding: 'utf8' });
  healthCheck.checks.diskSpace = {
    status: 'ok',
    message: 'Disk space available',
    details: stats.split('\n')[1]
  };
} catch (error) {
  healthCheck.checks.diskSpace = {
    status: 'warning',
    message: 'Could not check disk space'
  };
}

// Check memory usage
try {
  const memInfo = execSync('free -h', { encoding: 'utf8' });
  healthCheck.checks.memory = {
    status: 'ok',
    message: 'Memory check completed',
    details: memInfo.split('\n')[1]
  };
} catch (error) {
  healthCheck.checks.memory = {
    status: 'warning',
    message: 'Could not check memory usage'
  };
}

// Check if build directory exists
try {
  if (fs.existsSync('.next') || fs.existsSync('dist') || fs.existsSync('build')) {
    healthCheck.checks.build = {
      status: 'ok',
      message: 'Build directory found'
    };
  } else {
    healthCheck.checks.build = {
      status: 'info',
      message: 'No build directory found (normal for development)'
    };
  }
} catch (error) {
  healthCheck.checks.build = {
    status: 'warning',
    message: 'Could not check build directory'
  };
}

// Save health check report
const reportPath = 'health-check-report.json';
fs.writeFileSync(reportPath, JSON.stringify(healthCheck, null, 2));

console.log('✅ Health check completed');
console.log(`📄 Report saved to: ${reportPath}`);

// Print summary
const totalChecks = Object.keys(healthCheck.checks).length;
const okChecks = Object.values(healthCheck.checks).filter(check => check.status === 'ok').length;
const errorChecks = Object.values(healthCheck.checks).filter(check => check.status === 'error').length;

console.log(`📊 Health Check Summary:`);
console.log(`   - Total checks: ${totalChecks}`);
console.log(`   - OK: ${okChecks}`);
console.log(`   - Errors: ${errorChecks}`);
console.log(`   - Status: ${healthCheck.status.toUpperCase()}`);

if (healthCheck.status === 'healthy') {
  console.log('🎉 System is healthy!');
  process.exit(0);
} else {
  console.log('⚠️  System has issues that need attention');
  process.exit(1);
}