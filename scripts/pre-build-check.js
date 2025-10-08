#!/usr/bin/env node

/**
 * Pre-build validation script
 * Checks for common issues before building the application
 */

import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

const errors = [];
const warnings = [];

console.log('🔍 Running pre-build checks...\n');

// Check Node version
const requiredNodeVersion = '18.0.0';
const currentNodeVersion = process.version.slice(1);
if (currentNodeVersion < requiredNodeVersion) {
  errors.push(`Node.js version ${requiredNodeVersion} or higher is required (current: ${currentNodeVersion})`);
} else {
  console.log('✅ Node.js version:', currentNodeVersion);
}

// Check for required files
const requiredFiles = [
  'package.json',
  'next.config.js',
  'tsconfig.json',
  'tailwind.config.cjs',
  'postcss.config.cjs',
];

requiredFiles.forEach((file) => {
  if (!existsSync(resolve(process.cwd(), file))) {
    errors.push(`Required file missing: ${file}`);
  } else {
    console.log(`✅ Found: ${file}`);
  }
});

// Check package.json for critical dependencies
try {
  const packageJson = JSON.parse(readFileSync(resolve(process.cwd(), 'package.json'), 'utf-8'));
  const requiredDeps = ['next', 'react', 'react-dom'];
  
  requiredDeps.forEach((dep) => {
    if (!packageJson.dependencies[dep]) {
      errors.push(`Missing required dependency: ${dep}`);
    }
  });
  
  console.log('✅ Critical dependencies present');
} catch (error) {
  errors.push('Failed to read package.json');
}

// Check TypeScript configuration
try {
  const tsConfig = JSON.parse(readFileSync(resolve(process.cwd(), 'tsconfig.json'), 'utf-8'));
  
  if (!tsConfig.compilerOptions) {
    warnings.push('tsconfig.json missing compilerOptions');
  } else {
    console.log('✅ TypeScript configuration valid');
  }
} catch (error) {
  errors.push('Failed to read tsconfig.json');
}

// Check environment variables setup
if (!existsSync(resolve(process.cwd(), '.env.example'))) {
  warnings.push('.env.example file not found - consider adding environment variable documentation');
} else {
  console.log('✅ Environment example file present');
}

// Report results
console.log('\n📊 Pre-build Check Results:\n');

if (errors.length > 0) {
  console.log('❌ Errors found:');
  errors.forEach((error) => console.log(`   - ${error}`));
}

if (warnings.length > 0) {
  console.log('\n⚠️  Warnings:');
  warnings.forEach((warning) => console.log(`   - ${warning}`));
}

if (errors.length === 0 && warnings.length === 0) {
  console.log('✅ All checks passed! Ready to build.\n');
  process.exit(0);
} else if (errors.length > 0) {
  console.log('\n❌ Build cannot proceed. Please fix the errors above.\n');
  process.exit(1);
} else {
  console.log('\n✅ Build can proceed (with warnings).\n');
  process.exit(0);
}