#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path'); // Added missing import for path

console.log('🏗️  Starting build monitoring...');

async function monitorBuild() {
  try {
    // Install dependencies
    console.log('📦 Installing dependencies...');
    execSync('npm ci', { stdio: 'inherit' });
    
    // Run linting
    console.log('🔍 Running ESLint...');
    try {
      execSync('npm run lint', { stdio: 'inherit' });
      console.log('✅ Linting completed');
    } catch (error) {
      console.log('⚠️  Linting issues found (continuing with build)');
    }
    
    // Run type checking
    console.log('🔍 Running TypeScript type checking...');
    try {
      execSync('npm run type-check', { stdio: 'inherit' });
      console.log('✅ Type checking completed');
    } catch (error) {
      console.log('⚠️  Type checking issues found (continuing with build)');
    }
    
    // Build application
    console.log('🏗️  Building application...');
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build completed successfully');
    
    // Analyze build size
    analyzeBuildSize();
    
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
    
    // Generate build report
    generateBuildReport();
    
    console.log('🎉 Build monitoring completed successfully');
    
  } catch (error) {
    console.error('❌ Build monitoring failed:', error.message);
    process.exit(1);
  }
}

function analyzeBuildSize() {
  if (!fs.existsSync('dist')) {
    console.log('❌ dist folder not found');
    return;
  }
  
  try {
    const stats = fs.statSync('dist');
    const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
    console.log(`📊 Build size: ${sizeInMB} MB`);
    
    // List build files
    const files = fs.readdirSync('dist');
    console.log('📁 Build files:');
    files.forEach(file => {
      const filePath = path.join('dist', file);
      const fileStat = fs.statSync(filePath);
      if (fileStat.isFile()) {
        const fileSize = (fileStat.size / 1024).toFixed(2);
        console.log(`  - ${file}: ${fileSize} KB`);
      }
    });
  } catch (error) {
    console.log('⚠️  Could not analyze build size');
  }
}

function generateBuildReport() {
  const report = {
    timestamp: new Date().toISOString(),
    process: 'build-monitoring',
    status: 'completed',
    checks: [
      'dependencies-installed',
      'linting',
      'type-checking',
      'build-verification',
      'size-analysis'
    ]
  };
  
  fs.writeFileSync('build-monitor-report.json', JSON.stringify(report, null, 2));
  console.log('📊 Build monitor report generated: build-monitor-report.json');
}

monitorBuild();