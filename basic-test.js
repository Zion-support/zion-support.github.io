#!/usr/bin/env node

import fs from 'fs';

console.log('🧪 Running Basic Tests...');

try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  console.log('✅ Package.json is valid');
  console.log(` - Name: ${packageJson.name}`);
  console.log(` - Version: ${packageJson.version}`);
} catch(error) {
  console.log('❌ Package.json error:', error.message);
}

const files = ['app/page.tsx', 'next.config.js', 'package.json'];
files.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} exists`);
  } else {
    console.log(`❌ ${file} missing`);
  }
});

console.log('✅ Basic tests completed');