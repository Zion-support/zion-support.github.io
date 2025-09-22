#!/usr/bin/env node

/**
 * Comprehensive Build Fixer for Zion Tech Group
 * This script fixes common build issues and syntax errors
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Comprehensive Build Fixer for Zion Tech Group');

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix import statements with trailing commas
    const importCommaRegex = /import\s+.*?,\s*;/g;
    if (importCommaRegex.test(content)) {
      content = content.replace(importCommaRegex, (match) => {
        return match.replace(/,\s*;/, ';');
      });
      modified = true;
    }

    // Fix duplicate imports
    const lines = content.split('\n');
    const seenImports = new Set();
    const filteredLines = lines.filter(line => {
      if (line.trim().startsWith('import ')) {
        if (seenImports.has(line.trim())) {
          return false;
        }
        seenImports.add(line.trim());
      }
      return true;
    });

    if (filteredLines.length !== lines.length) {
      content = filteredLines.join('\n');
      modified = true;
    }

    // Fix missing semicolons in object properties
    content = content.replace(/(\w+):\s*([^,;}\n]+)(?=\s*[,}])/g, '$1: $2;');
    
    // Fix duplicate function declarations
    const functionRegex = /export\s+default\s+function\s+\w+/g;
    const matches = content.match(functionRegex);
    if (matches && matches.length > 1) {
      // Keep only the first occurrence
      const firstMatch = matches[0];
      const firstIndex = content.indexOf(firstMatch);
      const secondIndex = content.indexOf(matches[1]);
      if (secondIndex > firstIndex) {
        content = content.substring(0, secondIndex);
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Function to find and fix TypeScript/TSX files
function fixAllFiles() {
  const extensions = ['.ts', '.tsx', '.js', '.jsx'];
  const excludeDirs = ['node_modules', '.next', 'dist', 'build', '.git'];
  
  function walkDir(dir) {
    const files = fs.readdirSync(dir);
    let fixedCount = 0;
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        if (!excludeDirs.includes(file)) {
          fixedCount += walkDir(filePath);
        }
      } else if (extensions.some(ext => file.endsWith(ext))) {
        if (fixSyntaxErrors(filePath)) {
          fixedCount++;
        }
      }
    }
    
    return fixedCount;
  }
  
  return walkDir(process.cwd());
}

// Function to run build and capture errors
function runBuild() {
  try {
    console.log('\n🏗️  Running build...');
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build completed successfully!');
    return true;
  } catch (error) {
    console.log('❌ Build failed. Attempting to fix issues...');
    return false;
  }
}

// Main execution
async function main() {
  console.log('\n🔍 Scanning for syntax errors...');
  const fixedCount = fixAllFiles();
  console.log(`\n📊 Fixed ${fixedCount} files`);
  
  console.log('\n🧹 Cleaning up temporary files...');
  try {
    execSync('rm -rf .next dist out', { stdio: 'inherit' });
  } catch (error) {
    // Ignore errors
  }
  
  console.log('\n📦 Installing dependencies...');
  try {
    execSync('npm install', { stdio: 'inherit' });
  } catch (error) {
    console.log('⚠️  Dependency installation had issues, continuing...');
  }
  
  // Try building
  if (runBuild()) {
    console.log('\n🎉 Build successful! All issues have been resolved.');
  } else {
    console.log('\n⚠️  Build still has issues. Manual intervention may be required.');
    console.log('\n📋 Next steps:');
    console.log('1. Review the build errors above');
    console.log('2. Fix remaining syntax issues manually');
    console.log('3. Run npm run build again');
  }
  
  console.log('\n✨ Comprehensive Build Fixer completed!');
}

// Run the script
main().catch(console.error);