#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Starting comprehensive app fixing...');

// Function to fix common syntax issues
function fixSyntaxIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common issues
    const fixes = [
      // Fix missing semicolons
      { pattern: /(\w+)\s*$/gm, replacement: '$1;' },
      // Fix missing imports
      { pattern: /^import\s+{([^}]+)}\s+from\s+['"]([^'"]+)['"];?\s*$/gm, replacement: 'import { $1 } from "$2";' },
      // Fix missing exports
      { pattern: /^export\s+default\s+(\w+);?\s*$/gm, replacement: 'export default $1;' },
      // Fix missing function declarations
      { pattern: /^function\s+(\w+)\s*\(\s*\)\s*{\s*}\s*$/gm, replacement: 'function $1() {\n  // TODO: Implement function\n}' },
      // Fix missing class declarations
      { pattern: /^class\s+(\w+)\s*{\s*}\s*$/gm, replacement: 'class $1 {\n  // TODO: Implement class\n}' },
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed syntax issues in: ${filePath}`);
    }
    
    return modified;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix package.json issues
function fixPackageJson() {
  try {
    const packagePath = '/workspace/package.json';
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    
    // Ensure all required dependencies are present
    const requiredDeps = {
      '@eslint/eslintrc': '^2.1.4',
      '@next/bundle-analyzer': '^15.5.2',
      'next': '^15.5.2'
    };
    
    let modified = false;
    
    for (const [dep, version] of Object.entries(requiredDeps)) {
      if (!packageJson.devDependencies[dep]) {
        packageJson.devDependencies[dep] = version;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2), 'utf8');
      console.log('✅ Fixed package.json dependencies');
    }
    
    return modified;
  } catch (error) {
    console.error('❌ Error fixing package.json:', error.message);
    return false;
  }
}

// Function to fix Next.js config
function fixNextConfig() {
  try {
    const configPath = '/workspace/next.config.js';
    if (fs.existsSync(configPath)) {
      let content = fs.readFileSync(configPath, 'utf8');
      
      // Fix bundle analyzer import
      if (content.includes('@next/bundle-analyzer')) {
        content = content.replace(
          /const withBundleAnalyzer = require\('@next\/bundle-analyzer'\)/g,
          "const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true' })"
        );
        
        fs.writeFileSync(configPath, content, 'utf8');
        console.log('✅ Fixed Next.js config');
        return true;
      }
    }
    return false;
  } catch (error) {
    console.error('❌ Error fixing Next.js config:', error.message);
    return false;
  }
}

// Function to run tests and build
async function runTestsAndBuild() {
  try {
    console.log('🧪 Running tests...');
    execSync('npm run test:smoke', { cwd: '/workspace', stdio: 'inherit' });
    console.log('✅ Tests passed');
    
    console.log('🏗️ Building application...');
    execSync('npm run build', { cwd: '/workspace', stdio: 'inherit' });
    console.log('✅ Build successful');
    
    return true;
  } catch (error) {
    console.error('❌ Tests or build failed:', error.message);
    return false;
  }
}

// Main execution
async function main() {
  try {
    console.log('🔍 Fixing package.json...');
    fixPackageJson();
    
    console.log('🔍 Fixing Next.js config...');
    fixNextConfig();
    
    console.log('🔍 Installing dependencies...');
    execSync('npm install', { cwd: '/workspace', stdio: 'inherit' });
    
    console.log('🔍 Running lint fix...');
    try {
      execSync('npm run lint:fix', { cwd: '/workspace', stdio: 'inherit' });
      console.log('✅ Lint fix completed');
    } catch (error) {
      console.log('⚠️ Lint fix had issues, continuing...');
    }
    
    console.log('🔍 Running type check...');
    try {
      execSync('npm run type-check', { cwd: '/workspace', stdio: 'inherit' });
      console.log('✅ Type check passed');
    } catch (error) {
      console.log('⚠️ Type check had issues, continuing...');
    }
    
    console.log('🔍 Running tests and build...');
    const success = await runTestsAndBuild();
    
    if (success) {
      console.log('🎉 Comprehensive app fixing completed successfully!');
    } else {
      console.log('⚠️ Some issues remain, but basic fixes applied');
    }
    
  } catch (error) {
    console.error('❌ Error during comprehensive fixing:', error);
    process.exit(1);
  }
}

main();