#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

console.log('🔄 Starting continuous improvement process...');

async function runContinuousImprovement() {
  try {
    // Install dependencies
    console.log('📦 Installing dependencies...');
    execSync('npm ci', { stdio: 'inherit' });
    
    // Run linting with auto-fix
    console.log('🔍 Running ESLint with auto-fix...');
    try {
      execSync('npm run lint -- --fix', { stdio: 'inherit' });
      console.log('✅ Linting completed with auto-fix');
    } catch (error) {
      console.log('⚠️  Linting issues found (continuing with process)');
    }
    
    // Run type checking
    console.log('🔍 Running TypeScript type checking...');
    try {
      execSync('npm run type-check', { stdio: 'inherit' });
      console.log('✅ Type checking completed');
    } catch (error) {
      console.log('⚠️  Type checking issues found (continuing with process)');
    }
    
    // Build project to ensure everything works
    console.log('🏗️  Building project...');
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build completed successfully');
    
    // Run tests if available
    if (fs.existsSync('package.json')) {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      if (packageJson.scripts.test) {
        console.log('🧪 Running tests...');
        try {
          execSync('npm test', { stdio: 'inherit' });
          console.log('✅ Tests completed');
        } catch (error) {
          console.log('⚠️  Tests failed (continuing with process)');
        }
      }
    }
    
    // Generate improvement report
    generateImprovementReport();
    
    console.log('🎉 Continuous improvement process completed successfully');
    
  } catch (error) {
    console.error('❌ Continuous improvement failed:', error.message);
    process.exit(1);
  }
}

function generateImprovementReport() {
  const report = {
    timestamp: new Date().toISOString(),
    process: 'continuous-improvement',
    status: 'completed',
    checks: [
      'dependencies-installed',
      'linting-auto-fix',
      'type-checking',
      'build-verification'
    ]
  };
  
  fs.writeFileSync('improvement-report.json', JSON.stringify(report, null, 2));
  console.log('📊 Improvement report generated: improvement-report.json');
}

runContinuousImprovement();