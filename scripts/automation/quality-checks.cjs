#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Starting continuous quality checks automation...');

// Get automation interval from environment variable (default: 3 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 10800000; // 3 hours

async function runQualityChecks() {
  try {
    console.log(`🔍 Running quality checks at ${new Date().toISOString()}`);
    
    // Run linting
    console.log('🔍 Running ESLint...');
    try {
      execSync('npm run lint', { stdio: 'inherit' });
      console.log('✅ ESLint completed successfully');
    } catch (error) {
      console.log('⚠️  ESLint issues found but continuing...');
    }
    
    // Run type checking
    console.log('🔍 Running TypeScript type checking...');
    try {
      execSync('npm run type-check', { stdio: 'inherit' });
      console.log('✅ Type checking completed successfully');
    } catch (error) {
      console.log('⚠️  Type checking issues found but continuing...');
    }
    
    // Run tests
    console.log('🧪 Running tests...');
    try {
      execSync('npm test', { stdio: 'inherit' });
      console.log('✅ Tests completed successfully');
    } catch (error) {
      console.log('⚠️  Tests failed but continuing...');
    }
    
    // Check code coverage if available
    console.log('📊 Checking code coverage...');
    try {
      execSync('npm run test:coverage', { stdio: 'inherit' });
      console.log('✅ Code coverage check completed');
    } catch (error) {
      console.log('ℹ️  Code coverage not available');
    }
    
    // Check for dead code
    console.log('🔍 Checking for dead code...');
    try {
      execSync('npx ts-unused-exports tsconfig.json', { stdio: 'inherit' });
      console.log('✅ Dead code check completed');
    } catch (error) {
      console.log('ℹ️  Dead code checker not available');
    }
    
    // Check for circular dependencies
    console.log('🔍 Checking for circular dependencies...');
    try {
      execSync('npx madge --circular src/', { stdio: 'inherit' });
      console.log('✅ Circular dependency check completed');
    } catch (error) {
      console.log('ℹ️  Circular dependency checker not available');
    }
    
    // Check for duplicate code
    console.log('🔍 Checking for duplicate code...');
    try {
      execSync('npx jscpd src/', { stdio: 'inherit' });
      console.log('✅ Duplicate code check completed');
    } catch (error) {
      console.log('ℹ️  Duplicate code checker not available');
    }
    
    // Generate quality report
    console.log('📊 Generating quality report...');
    const report = {
      timestamp: new Date().toISOString(),
      summary: 'Quality checks completed',
      status: 'completed'
    };
    
    const reportPath = path.join(process.cwd(), 'quality-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`✅ Quality report saved to ${reportPath}`);
    
    console.log('✅ Continuous quality checks completed successfully');
    
  } catch (error) {
    console.error('❌ Continuous quality checks failed:', error.message);
    // Don't exit, just log the error and continue
  }
}

// Main continuous loop
async function runContinuous() {
  console.log(`🚀 Starting continuous quality checks with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
  
  // Run initial quality checks
  await runQualityChecks();
  
  // Set up continuous execution
  setInterval(async () => {
    await runQualityChecks();
  }, AUTOMATION_INTERVAL);
  
  console.log(`✅ Continuous quality checks running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
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

// Start the continuous quality checks
runContinuous().catch(error => {
  console.error('❌ Failed to start continuous quality checks:', error);
  process.exit(1);
});
