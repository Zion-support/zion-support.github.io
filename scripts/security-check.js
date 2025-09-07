#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

console.log('🔒 Running security check...');

// Check for .env files
if (fs.existsSync('.env')) {
  console.log('⚠️ .env file found - ensure it\'s in .gitignore');
} else {
  console.log('✅ No .env file in root');
}

// Run npm audit
try {
  execSync('npm audit --audit-level=high', { stdio: 'pipe' });
  console.log('✅ No high-severity vulnerabilities');
} catch (error) {
  console.log('⚠️ High-severity vulnerabilities found');
}

// Check package.json
try {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  console.log(`✅ Package.json valid (${Object.keys(pkg.dependencies || {}).length} dependencies)`);
} catch (error) {
  console.log('❌ Package.json invalid');
}

console.log('✅ Security check complete!');