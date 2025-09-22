#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing file permissions...');

// Files that should have restricted permissions
const sensitiveFiles = [
  '.env',
  '.env.production',
  '.env.local',
  'package.json',
  'package-lock.json',
  'next.config.js',
  'tsconfig.json'
];

// Set proper permissions for sensitive files
sensitiveFiles.forEach(file => {
  if (fs.existsSync(file)) {
    try {
      fs.chmodSync(file, 0o600); // Read/write for owner only
      console.log(`✅ Fixed permissions for ${file}`);
    } catch (error) {
      console.log(`⚠️  Could not fix permissions for ${file}: ${error.message}`);
    }
  }
});

// Set proper permissions for directories
const directories = [
  'src',
  'components',
  'scripts',
  'automation'
];

directories.forEach(dir => {
  if (fs.existsSync(dir)) {
    try {
      fs.chmodSync(dir, 0o755); // Read/write/execute for owner, read/execute for others
      console.log(`✅ Fixed permissions for directory ${dir}`);
    } catch (error) {
      console.log(`⚠️  Could not fix permissions for directory ${dir}: ${error.message}`);
    }
  }
});

console.log('🔧 File permissions fixed!');