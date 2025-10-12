#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix JSX structure issues
function fixJSXStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common JSX structure issues
    const lines = content.split('\n');
    const fixedLines = [];
    let braceCount = 0;
    let parenCount = 0;
    let inJSX = false;
    let jsxDepth = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Track JSX depth
      if (trimmedLine.includes('<') && !trimmedLine.includes('</')) {
        jsxDepth++;
      }
      if (trimmedLine.includes('</') && !trimmedLine.includes('<')) {
        jsxDepth--;
      }
      
      // Fix malformed JSX structure
      if (trimmedLine === ');' && jsxDepth > 0) {
        // Add missing closing tags
        for (let j = 0; j < jsxDepth; j++) {
          fixedLines.push('      </div>');
        }
        fixedLines.push('    </div>');
        fixedLines.push('  );');
        modified = true;
        continue;
      }
      
      // Fix unexpected closing tags
      if (trimmedLine.includes('</div>') && jsxDepth < 0) {
        // Skip this line as it's likely a duplicate
        continue;
      }
      
      // Fix missing return statement
      if (trimmedLine.startsWith('<') && !inJSX && i > 0) {
        const prevLine = lines[i-1].trim();
        if (!prevLine.includes('return') && !prevLine.includes('{')) {
          fixedLines.push('  return (');
          inJSX = true;
          modified = true;
        }
      }
      
      fixedLines.push(line);
    }
    
    if (modified) {
      const fixedContent = fixedLines.join('\n');
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✓ Fixed JSX structure in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
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
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.ts', '.tsx', '.js', '.jsx'].includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main function
function main() {
  console.log('🔧 Starting JSX structure fixes...');
  
  const sourceFiles = findSourceFiles(process.cwd());
  let fixedCount = 0;
  
  console.log(`Found ${sourceFiles.length} source files to check`);
  
  for (const file of sourceFiles) {
    if (fixJSXStructure(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\n✅ Fixed JSX structure in ${fixedCount} files`);
  
  // Try to run build to check for remaining issues
  try {
    console.log('\n🔍 Running build to check for remaining issues...');
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build passed!');
  } catch (error) {
    console.log('⚠️  Build found issues, but JSX structure should be improved');
  }
  
  console.log('\n🎉 JSX structure fixes complete!');
}

// Run the main function
main();

export { fixJSXStructure, findSourceFiles };