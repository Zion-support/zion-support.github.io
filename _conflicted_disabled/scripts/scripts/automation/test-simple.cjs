#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🔧 Simple Test Starting...');

try {
  console.log('Running npm run type-check...');
  const output = execSync('npm run type-check 2>&1', {
    encoding: 'utf8',
    maxBuffer: 10 * 1024 * 1024
  });
  console.log('Command completed successfully');
  console.log('Output length:', output.length);
  console.log('First 500 characters:', output.substring(0, 500));
} catch (error) {
  console.log('Command failed with error:');
  console.log('stderr:', error.stderr ? error.stderr.substring(0, 500) : 'none');
  console.log('stdout:', error.stdout ? error.stdout.substring(0, 500) : 'none');
  console.log('message:', error.message);
}

console.log('Test completed');