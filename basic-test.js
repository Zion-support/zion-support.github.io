#!/usr/bin/env node
const fs = require('fs');

console.log('🧪 Running Basic Tests...');

const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
console.log('✅ Package.json is valid');
console.log(`📦 Package name: ${packageJson.name}`);
console.log('✅ Package.json loaded successfully');