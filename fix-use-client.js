#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Fixing use client directive placement...');

// Function to fix 'use client' placement
function fixUseClient(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 'use client' placement - move to top if it exists
    if (content.includes("'use client'") && !content.startsWith("'use client'")) {
      // Remove 'use client' from wherever it is
      content = content.replace(/'use client';\n?/g, '');
      
      // Add it to the top
      content = "'use client';\n" + content;
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed use client: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/TSX files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
try {
  const appDir = path.join(__dirname, 'app');
  const files = findTsxFiles(appDir);
  
  console.log(`📁 Processing ${files.length} TypeScript files`);
  
  let fixedCount = 0;
  for (const file of files) {
    if (fixUseClient(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\n🎉 Fixed ${fixedCount} files`);
  
  // Run build to test
  console.log('\n🔨 Testing build...');
  try {
    execSync('npm run build', { stdio: 'pipe' });
    console.log('✅ Build successful!');
  } catch (buildError) {
    console.log('❌ Build still has issues, but use client directive is fixed.');
  }
  
} catch (error) {
  console.error('❌ Error during fix process:', error.message);
  process.exit(1);
}