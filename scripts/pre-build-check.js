#!/usr/bin/env node

/**
 * Pre-build validation script
 * Checks for common issues before building the application
 */

import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

const _errors = [];
const _warnings = [];

// // Check Node version
// const requiredNodeVersion = '18.0.0';
// const currentNodeVersion = process.version.slice(1);
if (currentNodeVersion < requiredNodeVersion) {
  errors.push(`Node.js version ${requiredNodeVersion} or higher is required (current: ${currentNodeVersion})`);
} else {
//   }

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
//     }
});

// Check package.json for critical dependencies
try {
  const _packageJson = JSON.parse(readFileSync(resolve(process.cwd(), 'package.json'), 'utf-8'));
  const _requiredDeps = ['next', 'react', 'react-dom'];
  
  requiredDeps.forEach((dep) => {
    if (!packageJson.dependencies[dep]) {
      errors.push(`Missing required dependency: ${dep}`);
    }
  });
  
//   } catch (error) {
  errors.push('Failed to read package.json');
}

// Check TypeScript configuration
try {
  const _tsConfig = JSON.parse(readFileSync(resolve(process.cwd(), 'tsconfig.json'), 'utf-8'));
  
  if (!tsConfig.compilerOptions) {
    warnings.push('tsconfig.json missing compilerOptions');
  } else {
//     }
} catch (error) {
  errors.push('Failed to read tsconfig.json');
}

// Check environment variables setup
if (!existsSync(resolve(process.cwd(), '.env.example'))) {
  warnings.push('.env.example file not found - consider adding environment variable documentation');
} else {
//   }

// Report results
// if (errors.length > 0) {
//   //   errors.forEach((error) => console.log(`   - ${error}`));
}

if (warnings.length > 0) {
//   //   warnings.forEach((warning) => console.log(`   - ${warning}`));
}

if (errors.length === 0 && warnings.length === 0) {
//   process.exit(0);
} else if (errors.length > 0) {
//   process.exit(1);
} else {
//   console.log('\n✅ Build can proceed (with warnings).\n');
  process.exit(0);
}