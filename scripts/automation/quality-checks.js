#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Starting continuous quality checks automation...');

// Get automation interval from environment variable (default: 3 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 10800000; // 3 hours

async function runQualityChecks() {
  try {
    console.log(`🔍 Running quality checks at ${new Date().toISOString()}`);
    
    // Run linting
    console.log('🔍 Running ESLint...');
    try {
      execSync('npm run lint', { stdio: 'inherit' });
      console.log('✅ ESLint completed successfully');
    } catch (error) {
      console.log('⚠️  ESLint issues found but continuing...');
    }

    // Run type checking
    console.log('🔍 Running TypeScript type check...');
    try {
      execSync('npm run type-check', { stdio: 'inherit' });
      console.log('✅ Type checking completed successfully');
    } catch (error) {
      console.log('⚠️  Type checking issues found but continuing...');
    }

    // Run tests
    console.log('🧪 Running tests...');
    try {
      execSync('npm test', { stdio: 'inherit' });
      console.log('✅ Tests completed successfully');
    } catch (error) {
      console.log('⚠️  Some tests failed but continuing...');
    }

    // Check for security vulnerabilities
    console.log('🔒 Running security audit...');
    try {
      execSync('npm audit', { stdio: 'inherit' });
      console.log('✅ Security audit completed successfully');
    } catch (error) {
      console.log('⚠️  Security vulnerabilities found but continuing...');
    }

    // Check bundle size
    console.log('📦 Checking bundle size...');
    try {
      execSync('npm run build', { stdio: 'inherit' });
      
      const distDir = path.join(__dirname, '../../dist');
      if (fs.existsSync(distDir)) {
        const stats = fs.statSync(distDir);
        const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
        console.log(`📊 Bundle size: ${sizeInMB} MB`);
        
        if (stats.size > 50 * 1024 * 1024) { // 50MB
          console.log('⚠️  Bundle size is large, consider optimization');
        } else {
          console.log('✅ Bundle size is acceptable');
        }
      }
    } catch (error) {
      console.log('❌ Build failed during quality checks');
    }

    // Check for console.log statements in production code
    console.log('🔍 Checking for console.log statements...');
    try {
      const srcDir = path.join(__dirname, '../../src');
      const files = getAllFiles(srcDir, ['.js', '.jsx', '.ts', '.tsx']);
      let consoleLogCount = 0;
      
      for (const file of files) {
        if (file.includes('node_modules') || file.includes('.test.') || file.includes('.spec.')) {
          continue;
        }
        
        const content = fs.readFileSync(file, 'utf8');
        const matches = content.match(/console\.log/g);
        if (matches) {
          consoleLogCount += matches.length;
        }
      }
      
      if (consoleLogCount > 0) {
        console.log(`⚠️  Found ${consoleLogCount} console.log statements in production code`);
      } else {
        console.log('✅ No console.log statements found in production code');
      }
    } catch (error) {
      console.log('⚠️  Could not check for console.log statements');
    }

    console.log('🎉 Quality checks completed!');
    
  } catch (error) {
    console.error('❌ Quality checks failed:', error.message);
  }
}

function getAllFiles(dir, extensions) {
  const files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...getAllFiles(fullPath, extensions));
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    // Directory doesn't exist or can't be read
  }
  
  return files;
}

// Run immediately
runQualityChecks();

// Set up interval for continuous automation
setInterval(runQualityChecks, AUTOMATION_INTERVAL);

console.log(`⏰ Quality checks scheduled to run every ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);