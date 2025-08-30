#!/usr/bin/env node

console.log('Starting minimal test...');

try {
  console.log('About to run execSync...');
  const { execSync } = require('child_process');
  console.log('execSync imported successfully');
  
  console.log('Running npm run type-check...');
  const output = execSync('npm run type-check 2>&1', {
    encoding: 'utf8',
    maxBuffer: 10 * 1024 * 1024
  });
  console.log('Command completed successfully');
  console.log('Output length:', output.length);
} catch (error) {
  console.log('Command failed with error:');
  console.log('stderr:', error.stderr ? error.stderr.substring(0, 200) : 'none');
  console.log('stdout:', error.stdout ? error.stdout.substring(0, 200) : 'none');
  console.log('message:', error.message);
}

console.log('Minimal test completed');