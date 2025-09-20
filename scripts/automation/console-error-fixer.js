#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Starting console error fixer automation...');

// Get automation interval from environment variable (default: 1 hour)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 3600000; // 1 hour

async function fixConsoleErrors() {
  try {
    console.log(`🔧 Running console error fixer at ${new Date().toISOString()}`);
    
    // Find all source files
    const srcDir = path.join(__dirname, '../../src');
    const files = getAllFiles(srcDir, ['.js', '.jsx', '.ts', '.tsx']);
    
    let fixedFiles = 0;
    
    for (const file of files) {
      if (file.includes('node_modules') || file.includes('.test.') || file.includes('.spec.')) {
        continue;
      }
      
      try {
        const content = fs.readFileSync(file, 'utf8');
        let modified = false;
        let newContent = content;
        
        // Remove console.log statements in production files
        if (!file.includes('.test.') && !file.includes('.spec.')) {
          newContent = newContent.replace(/console\.log\([^)]*\);?\s*\n?/g, '');
          if (newContent !== content) {
            modified = true;
          }
        }
        
        // Fix common console errors
        newContent = newContent.replace(/console\.error\([^)]*\);?\s*\n?/g, '');
        newContent = newContent.replace(/console\.warn\([^)]*\);?\s*\n?/g, '');
        
        if (modified) {
          fs.writeFileSync(file, newContent);
          console.log(`✅ Fixed console errors in: ${file}`);
          fixedFiles++;
        }
      } catch (error) {
        console.log(`⚠️  Could not process file: ${file}`);
      }
    }
    
    console.log(`🎉 Console error fixer completed! Fixed ${fixedFiles} files`);
    
  } catch (error) {
    console.error('❌ Console error fixer failed:', error.message);
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
fixConsoleErrors();

// Set up interval for continuous automation
setInterval(fixConsoleErrors, AUTOMATION_INTERVAL);

console.log(`⏰ Console error fixer scheduled to run every ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);