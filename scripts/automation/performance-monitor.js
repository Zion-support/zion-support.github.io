#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('📊 Starting continuous performance monitoring automation...');

// Get automation interval from environment variable (default: 2 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 7200000; // 2 hours

async function runPerformanceMonitor() {
  try {
    console.log(`📊 Running performance monitoring at ${new Date().toISOString()}`);
    
    // Build the project first
    console.log('🏗️ Building project for performance analysis...');
    execSync('npm run build', { stdio: 'inherit' });
    
    // Check bundle size
    console.log('📦 Analyzing bundle size...');
    try {
      const distDir = path.join(__dirname, '../../dist');
      if (fs.existsSync(distDir)) {
        const stats = fs.statSync(distDir);
        const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
        console.log(`📊 Total bundle size: ${sizeInMB} MB`);
        
        if (stats.size > 50 * 1024 * 1024) { // 50MB
          console.log('⚠️  Bundle size is large, consider optimization');
        } else {
          console.log('✅ Bundle size is acceptable');
        }
      }
    } catch (error) {
      console.log('⚠️  Could not analyze bundle size');
    }

    // Check for large files
    console.log('🔍 Checking for large files...');
    try {
      const srcDir = path.join(__dirname, '../../src');
      const files = getAllFiles(srcDir, ['.js', '.jsx', '.ts', '.tsx']);
      let largeFiles = 0;
      
      for (const file of files) {
        if (file.includes('node_modules')) continue;
        
        const stats = fs.statSync(file);
        if (stats.size > 100 * 1024) { // 100KB
          largeFiles++;
          console.log(`⚠️  Large file detected: ${file} (${(stats.size / 1024).toFixed(2)} KB)`);
        }
      }
      
      if (largeFiles === 0) {
        console.log('✅ No large files found');
      } else {
        console.log(`⚠️  Found ${largeFiles} large files`);
      }
    } catch (error) {
      console.log('⚠️  Could not check for large files');
    }

    // Check for unused imports
    console.log('🔍 Checking for unused imports...');
    try {
      const srcDir = path.join(__dirname, '../../src');
      const files = getAllFiles(srcDir, ['.js', '.jsx', '.ts', '.tsx']);
      let unusedImports = 0;
      
      for (const file of files) {
        if (file.includes('node_modules')) continue;
        
        try {
          const content = fs.readFileSync(file, 'utf8');
          const lines = content.split('\n');
          
          for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line.startsWith('import ') && !line.includes('// used')) {
              // Simple check for unused imports (not comprehensive)
              const importName = line.match(/import\s+.*?\s+from\s+['"]([^'"]+)['"]/);
              if (importName) {
                const moduleName = importName[1];
                const restOfFile = content.substring(content.indexOf(line) + line.length);
                if (!restOfFile.includes(moduleName.split('/').pop())) {
                  unusedImports++;
                }
              }
            }
          }
        } catch (error) {
          // File might be binary or unreadable
        }
      }
      
      if (unusedImports === 0) {
        console.log('✅ No obvious unused imports found');
      } else {
        console.log(`⚠️  Found ${unusedImports} potentially unused imports`);
      }
    } catch (error) {
      console.log('⚠️  Could not check for unused imports');
    }

    // Check memory usage
    console.log('💾 Checking memory usage...');
    try {
      const memoryUsage = process.memoryUsage();
      const usedMB = (memoryUsage.heapUsed / 1024 / 1024).toFixed(2);
      const totalMB = (memoryUsage.heapTotal / 1024 / 1024).toFixed(2);
      
      console.log(`📊 Memory usage: ${usedMB} MB used / ${totalMB} MB total`);
      
      if (memoryUsage.heapUsed > 100 * 1024 * 1024) { // 100MB
        console.log('⚠️  High memory usage detected');
      } else {
        console.log('✅ Memory usage is acceptable');
      }
    } catch (error) {
      console.log('⚠️  Could not check memory usage');
    }

    console.log('🎉 Performance monitoring completed!');
    
  } catch (error) {
    console.error('❌ Performance monitoring failed:', error.message);
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
runPerformanceMonitor();

// Set up interval for continuous automation
setInterval(runPerformanceMonitor, AUTOMATION_INTERVAL);

console.log(`⏰ Performance monitoring scheduled to run every ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);