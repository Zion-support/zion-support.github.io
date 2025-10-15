#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

console.log('🔧 Starting merge conflict resolution...'

// Function to fix common merge conflict patterns
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8'
    let modified = false;

    // Fix merge conflict markers
    if (content.includes('
      console.log(`Fixing merge conflicts in: ${filePath}`);
      
      // Remove merge conflict markers and keep the main branch content
      content = content
        .replace(//g, '
        .replace(//g, '
        .replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> cursor\/fix-errors-and-merge-to-main-[a-zA-Z0-9-]+/g, '
        .replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> cursor\/fix-errors-and-merge-to-main-[a-zA-Z0-9-]+/g, '
      
      modified = true;
    }

    // Fix common syntax errors
    if (content.includes(';) || content.includes('
      content = content
        .replace(/;/g, '
        .replace(/"/g, '
        .replace(/'/g, "'
        .replace(/;/g, ";"
        .replace(/'/g, "'
      modified = true;
    }

    // Fix unterminated string literals
    if (content.includes('Unterminated string literal'
      content = content
        .replace(/([^\\])"([^"]*?)$/gm, '
        .replace(/([^\\])'([^']*?)$/gm, "$1'
      modified = true;
    }

    // Fix JSX syntax errors
    if (content.includes('className =') || content.includes('href =') || content.includes('to ='
      content = content
        .replace(/className\s*=\s*"/g, '
        .replace(/href\s*=\s*"/g, '
        .replace(/to\s*=\s*"/g, '
        .replace(/onClick\s*=\s*{/g, 'onClick={'
        .replace(/onChange\s*=\s*{/g, 'onChange={'
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'
          traverse(fullPath);
        }
      } else if (item.match(/\.(ts|tsx|js|jsx)$/)) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const sourceFiles = findSourceFiles(process.cwd());
let fixedCount = 0;

console.log(`Found ${sourceFiles.length} source files to check...`);

for (const file of sourceFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`🎉 Fixed ${fixedCount} files with merge conflicts and syntax errors`);

// Run build to check if issues are resolved
console.log('🔨 Running build to verify fixes...'
try {
  execSync('npm run build', { stdio: 'inherit'
  console.log('✅ Build successful!'
} catch (error) {
  console.log('❌ Build still has issues, but many conflicts were resolved'
}