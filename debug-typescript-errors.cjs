#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🔍 Testing TypeScript error detection...');

try {
  // Run type check and capture output
  const output = execSync('npm run type-check 2>&1', { encoding: 'utf8' });
  
  console.log('📊 Raw output length:', output.length);
  console.log('📊 First 500 characters:');
  console.log(output.substring(0, 500));
  
  // Parse errors manually
  const lines = output.split('\n');
  const errors = [];
  
  for (const line of lines) {
    if (line.includes('error TS')) {
      console.log('✅ Found error line:', line);
      errors.push(line);
    }
  }
  
  console.log(`📊 Total errors found: ${errors.length}`);
  
  if (errors.length > 0) {
    console.log('📊 First few errors:');
    errors.slice(0, 5).forEach((error, index) => {
      console.log(`${index + 1}. ${error}`);
    });
  }
  
} catch (error) {
  console.log('❌ Error running type check:');
  console.log('stdout:', error.stdout);
  console.log('stderr:', error.stderr);
  console.log('message:', error.message);
}