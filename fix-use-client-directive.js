#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Fixing "use client" directive placement...');

// Function to fix "use client" directive placement
function fixUseClientDirective(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Check if file has "use client" directive
  if (fixed.includes("'use client';")) {
    // Check if "use client" is not at the top
    const lines = fixed.split('\n');
    const useClientIndex = lines.findIndex(line => line.trim() === "'use client';");
    
    if (useClientIndex > 0) {
      // Move "use client" to the top
      const useClientLine = lines[useClientIndex];
      lines.splice(useClientIndex, 1);
      lines.unshift(useClientLine);
      
      fixed = lines.join('\n');
      changes++;
    }
  }

  return { content: fixed, changes };
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const result = fixUseClientDirective(content, filePath);
    
    if (result.changes > 0) {
      fs.writeFileSync(filePath, result.content);
      console.log(`✅ Fixed "use client" directive in ${filePath}`);
      return result.changes;
    }
    
    return 0;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return 0;
  }
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
try {
  const appDir = path.join(__dirname, 'app');
  const files = findFiles(appDir);
  
  console.log(`📁 Found ${files.length} files to process...`);
  
  let totalChanges = 0;
  let processedFiles = 0;
  
  for (const file of files) {
    const changes = processFile(file);
    totalChanges += changes;
    if (changes > 0) processedFiles++;
  }
  
  console.log(`\n🎉 "use client" directive fixes completed!`);
  console.log(`📊 Processed ${processedFiles} files with changes`);
  console.log(`🔧 Total fixes applied: ${totalChanges}`);
  
} catch (error) {
  console.error('❌ Error during "use client" directive fixes:', error.message);
  process.exit(1);
}