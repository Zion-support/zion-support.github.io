#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
console.log('🧹 Starting comprehensive file cleanup...');

// Function to clean a single file
function cleanFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has multiple export default function declarations
    const exportMatches = content.match(/export default function/g);
    if (!exportMatches || exportMatches.length <= 1) {
      return false; // File is clean, skip
    }
    
    console.log(`🔧 Cleaning: ${filePath}`);
    
    // Find the first complete function
    const lines = content.split('\n');
    let cleanedLines = [];
    let inFunction = false;
    let braceCount = 0;
    let functionStart = -1;
    let functionEnd = -1;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Look for export default function
      if (line.includes('export default function') && functionStart === -1) {
        functionStart = i;
        inFunction = true;
        cleanedLines.push(line);
        continue;
      }
      
      if (inFunction) {
        cleanedLines.push(line);
        
        // Count braces to find function end
        for (const char of line) {
          if (char === '{') braceCount++;
          if (char === '}') braceCount--;
        }
        
        // If we've closed all braces and we're in a function, we're done
        if (braceCount === 0 && inFunction) {
          functionEnd = i;
          break;
        }
    }
    
    // If we found a complete function, use it
    if (functionStart !== -1 && functionEnd !== -1) {
      const cleanedContent = cleanedLines.join('\n');
      fs.writeFileSync(filePath, cleanedContent, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error cleaning ${filePath}:`, error.message);
    return false;
  }
// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          files.push(fullPath);
        }
    }
  traverse(dir);
  return files;
}

// Main cleanup process
async function main() {
  console.log('📁 Scanning for files to clean...');
  
  const files = findFiles('/workspace/app');
  console.log(`📊 Found ${files.length} files to check`);
  
  let cleanedCount = 0;
  let errorCount = 0;
  
  for (const file of files) {
    try {
      if (cleanFile(file)) {
        cleanedCount++;
      }
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
      errorCount++;
    }
  console.log(`\n✅ Cleanup complete!`);
  console.log(`🧹 Cleaned: ${cleanedCount} files`);
  console.log(`❌ Errors: ${errorCount} files`);
  
  // Run type check to see if we fixed the issues
  console.log('\n🔍 Running type check...');
  try {
    execSync('pnpm run type-check', { stdio: 'pipe' });
    console.log('✅ Type check passed!');
  } catch (error) {
    console.log('⚠️  Type check still has issues, but many files were cleaned');
  }
main().catch(console.error);