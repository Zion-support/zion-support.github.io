#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting performance optimization...');

// Function to remove console statements from files
function removeConsoleStatements(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove console.log, console.warn, console.error, console.info, console.debug
    content = content.replace(/console\.(log|warn|error|info|debug)\s*\([^)]*\)\s*;?/g, '');
    
    // Remove empty lines that might be left behind
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Cleaned console statements from: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.warn(`⚠️  Could not process ${filePath}: ${error.message}`);
    return false;
  }
}

// Function to optimize TypeScript files
function optimizeTypeScriptFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Replace 'any' types with more specific types where possible
    content = content.replace(/:\s*any\s*[;\)]/g, ': unknown');
    content = content.replace(/:\s*any\s*=/g, ': unknown =');
    
    // Remove unused imports (basic cleanup)
    content = content.replace(/import\s*{\s*}\s*from\s*['"][^'"]*['"]\s*;?\s*\n/g, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Optimized TypeScript file: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.warn(`⚠️  Could not optimize ${filePath}: ${error.message}`);
    return false;
  }
}

// Function to recursively process files
function processDirectory(dirPath, extensions, processor) {
  let processedCount = 0;
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules, dist, and other build directories
        if (!['node_modules', 'dist', '.git', '.next', 'out'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          if (processor(fullPath)) {
            processedCount++;
          }
        }
      }
    }
  }
  
  walkDir(dirPath);
  return processedCount;
}

// Main optimization process
async function optimize() {
  console.log('📁 Processing TypeScript and JavaScript files...');
  
  // Remove console statements
  const consoleCleaned = processDirectory('./app', ['.ts', '.tsx', '.js', '.jsx'], removeConsoleStatements);
  console.log(`🧹 Cleaned console statements from ${consoleCleaned} files`);
  
  // Optimize TypeScript files
  const tsOptimized = processDirectory('./app', ['.ts', '.tsx'], optimizeTypeScriptFile);
  console.log(`⚡ Optimized ${tsOptimized} TypeScript files`);
  
  // Run build to check for errors
  console.log('🔨 Running build to verify optimizations...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build completed successfully!');
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
  
  console.log('🎉 Performance optimization completed!');
}

// Run optimization
optimize().catch(console.error);