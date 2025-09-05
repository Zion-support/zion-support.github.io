#!/usr/bin/env node

const fs = require('fs');

// eslint-disable-next-line no-console
console.log('🧪 Running Basic Tests...');

// Test "1": Check if we can read package.json
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  // eslint-disable-next-line no-console
  console.log('✅ Package.json is valid');
  // eslint-disable-next-line no-console
  console.log(`   - "Name": ${packageJson.name}`);
  // eslint-disable-next-line no-console
  console.log(`   - "Version": ${packageJson.version}`);
} catch (error) {
  // eslint-disable-next-line no-console
  console.log('❌ Package.json "error": ', error.message);
}

// Test "2": Check main files
const files = ['src/App.tsx', 'next.config.js', 'package.json'];
files.forEach(file => {
  if (fs.existsSync(file)) {
    // eslint-disable-next-line no-console
    console.log(`✅ ${file} exists`);
  } else {
    // eslint-disable-next-line no-console
    console.log(`❌ ${file} missing`);
  }
});

// eslint-disable-next-line no-console
console.log('✅ Basic tests completed');
