#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Quality Checks Automation Started');

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

function runQualityChecks() {
  console.log('🎯 Starting quality checks process...');
  
  // Run ESLint
  console.log('🔍 Running ESLint...');
  const lintResult = runCommand('npm run lint', 'ESLint check');
  
  // Run TypeScript type checking
  console.log('🔍 Running TypeScript type check...');
  const typeCheckResult = runCommand('npm run type-check', 'TypeScript check');
  
  // Build project
  console.log('🏗️ Building project...');
  const buildResult = runCommand('npm run build', 'Project build');
  
  if (buildResult) {
    console.log('✅ Build successful!');
    
    // Check bundle size
    if (fs.existsSync('dist')) {
      console.log('📊 Checking bundle size...');
      const distStats = fs.statSync('dist');
      console.log(`  📁 dist folder size: ${(distStats.size / 1024 / 1024).toFixed(2)} MB`);
      
      // Check individual file sizes
      const files = fs.readdirSync('dist');
      files.forEach(file => {
        const filePath = path.join('dist', file);
        const stats = fs.statSync(filePath);
        if (stats.isFile()) {
          const sizeKB = (stats.size / 1024).toFixed(2);
          console.log(`  📄 ${file}: ${sizeKB} KB`);
        }
      });
    }
    
    // Check for common quality issues
    console.log('🔍 Checking for common quality issues...');
    
    // Check for console.log statements in production code
    if (fs.existsSync('dist')) {
      const jsFiles = findJsFiles('dist');
      let consoleLogs = 0;
      
      jsFiles.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        const matches = content.match(/console\.(log|warn|error|info)/g);
        if (matches) {
          consoleLogs += matches.length;
        }
      });
      
      if (consoleLogs > 0) {
        console.log(`⚠️ Found ${consoleLogs} console statements in production build`);
      } else {
        console.log('✅ No console statements found in production build');
      }
    }
    
    // Check for unused dependencies
    console.log('📦 Checking for unused dependencies...');
    try {
      const depcheckResult = execSync('npx depcheck --json', { 
        encoding: 'utf8', 
        stdio: 'pipe',
        cwd: process.cwd()
      });
      
      const depcheck = JSON.parse(depcheckResult);
      if (depcheck.dependencies.length > 0) {
        console.log(`⚠️ Found ${depcheck.dependencies.length} unused dependencies:`);
        depcheck.dependencies.forEach(dep => console.log(`  ${dep}`));
      } else {
        console.log('✅ No unused dependencies found');
      }
    } catch (error) {
      console.log('ℹ️ depcheck not available, skipping dependency analysis');
    }
    
  } else {
    console.log('❌ Build failed! Quality checks cannot continue');
  }
  
  // Run tests
  console.log('🧪 Running tests...');
  runCommand('npm test', 'Test execution');
  
  console.log('✅ Quality checks process completed');
}

function findJsFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findJsFiles(fullPath));
    } else if (item.endsWith('.js') || item.endsWith('.mjs')) {
      files.push(fullPath);
    }
  });
  
  return files;
}

// Main execution
runQualityChecks();

// Set up interval for continuous monitoring
const interval = process.env.AUTOMATION_INTERVAL || 3600000; // 1 hour default
setInterval(runQualityChecks, interval);

console.log(`⏰ Quality Checks will run every ${interval / 60000} minutes`);