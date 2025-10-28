#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Fixing "use client" directive placement...');

// Function to fix "use client" directive placement
function fixUseClientDirective(content) {
  // Remove "use client" from anywhere in the file
  content = content.replace(/^'use client';\s*\n/gm, '');
  content = content.replace(/^"use client";\s*\n/gm, '');
  content = content.replace(/^'use client'\s*\n/gm, '');
  content = content.replace(/^"use client"\s*\n/gm, '');
  
  // Add "use client" at the very top if it's not already there
  if (content.includes('use client') || content.includes('useState') || content.includes('useEffect')) {
    if (!content.startsWith("'use client'") && !content.startsWith('"use client"')) {
      content = "'use client';\n" + content;
    }
  }
  
  return content;
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

// Function to process a single file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixUseClientDirective(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  const appDir = path.join(__dirname, 'app');
  const files = findFiles(appDir);
  
  console.log(`📁 Found ${files.length} files to process...`);
  
  let fixedCount = 0;
  
  for (const file of files) {
    if (processFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\n🎉 Fixed ${fixedCount} files!`);
  
  // Run build again to check results
  console.log('\n🔍 Running build to check results...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build passed!');
  } catch (error) {
    console.log('⚠️  Some build issues may remain. Check the output above.');
  }
}

main().catch(console.error);