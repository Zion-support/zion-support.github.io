#!/usr/bin/env node
const fs = require('fs');
const { execSync } = require('child_process');

console.log('🔍 Running code quality checks...');

const results = {
  timestamp: new Date().toISOString(),
  checks: []
};

// Check if package.json exists
if (fs.existsSync('package.json')) {
  results.checks.push({ name: 'package.json', status: 'exists' });
  console.log('✅ package.json exists');
} else {
  results.checks.push({ name: 'package.json', status: 'missing' });
  console.log('❌ package.json missing');
}

// Check if node_modules exists
if (fs.existsSync('node_modules')) {
  results.checks.push({ name: 'node_modules', status: 'exists' });
  console.log('✅ node_modules exists');
} else {
  results.checks.push({ name: 'node_modules', status: 'missing' });
  console.log('❌ node_modules missing');
}

fs.writeFileSync('code-quality-report.json', JSON.stringify(results, null, 2));
console.log('📄 Code quality report saved');
