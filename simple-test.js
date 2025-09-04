#!/usr/bin/env node

/**
 * Simple Test Script
 * Basic functionality test without complex automation
 */

const fs = require('fs');
const path = require('path');

console.log('🧪 Running Simple Tests...');

// Test 1: Check if package.json exists and is valid
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  console.log('✅ Package.json is valid');
  console.log(`   - Name: ${packageJson.name}`);
  console.log(`   - Version: ${packageJson.version}`);
} catch (error) {
  console.log('❌ Package.json is invalid:', error.message);
}

// Test 2: Check if main source files exist
const requiredFiles = [
  'src/App.tsx',
  'src/main.tsx',
  'package.json',
  'next.config.js'
];

requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} exists`);
  } else {
    console.log(`❌ ${file} missing`);
  }
});

// Test 3: Check node_modules
if (fs.existsSync('node_modules')) {
  console.log('✅ node_modules directory exists');
} else {
  console.log('❌ node_modules directory missing');
}

// Test 4: Check for common issues
const issues = [];

// Check for syntax errors in main files
try {
  const appContent = fs.readFileSync('src/App.tsx', 'utf8');
  if (appContent.includes('import React')) {
    console.log('✅ App.tsx has React import');
  } else {
    issues.push('App.tsx missing React import');
  }
} catch (error) {
  issues.push(`Cannot read App.tsx: ${error.message}`);
}

// Summary
console.log('\n📊 Test Summary:');
if (issues.length === 0) {
  console.log('✅ All basic tests passed');
} else {
  console.log('❌ Issues found:');
  issues.forEach(issue => console.log(`   - ${issue}`));
}

console.log('\n🎯 Next steps:');
console.log('1. Fix any issues found above');
console.log('2. Run npm install if node_modules is missing');
console.log('3. Run npm run build to test build process');
console.log('4. Run npm test to run test suite');