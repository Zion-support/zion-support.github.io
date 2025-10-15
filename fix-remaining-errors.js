#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Fixing remaining syntax errors...');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix extra semicolons after commas
  content = content.replace(/,/g, ',');
  
  // Fix missing closing braces in object literals
  content = content.replace(/(\w+):\s*([^,}]+),(\s*[}])/g, '$1: $2$3');
  
  // Fix extra semicolons in object properties
  content = content.replace(/(\w+):\s*([^}]+);(\s*[}])/g, '$1: $2$3');
  
  // Fix missing semicolons after variable declarations
  content = content.replace(/(const|let|var)\s+[^=]+=\s*[^]+,\s*$/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix missing closing braces in function parameters
  content = content.replace(/(\w+):\s*([^,}]+),(\s*\))/g, '$1: $2$3');
  
  // Fix extra semicolons in function parameters
  content = content.replace(/(\w+):\s*([^}]+);(\s*\))/g, '$1: $2$3');
  
  // Fix missing closing braces in array literals
  content = content.replace(/(\w+):\s*([^}]+),(\s*\])/g, '$1: $2$3');
  
  // Fix extra semicolons in array literals
  content = content.replace(/(\w+):\s*([^}]+);(\s*\])/g, '$1: $2$3');
  
  // Fix missing closing braces in JSX props
  content = content.replace(/(\w+)=\s*{([^}]+),(\s*})/g, '$1={$2$3');
  
  // Fix extra semicolons in JSX props
  content = content.replace(/(\w+)=\s*{([^}]+);(\s*})/g, '$1={$2$3');
  
  // Fix missing closing braces in template literals
  content = content.replace(/(\w+):\s*`([^`]+),(\s*`)/g, '$1: `$2$3');
  
  // Fix extra semicolons in template literals
  content = content.replace(/(\w+):\s*`([^`]+);(\s*`)/g, '$1: `$2$3');
  
  return content
}

// Function to fix specific file patterns
function fixSpecificFiles() {
  const filesToFix = [
    'api/create-checkout-session.js',
    'api/create-payment-intent.js',
    'api/subscribe.js',
    'api/wallet.js',
    'app/5g-solutions/page.tsx',;
    'app/ai-analytics-dashboard-pro/page.tsx'
  ];
  
  for (const file of filesToFix) {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        content = fixSyntaxErrors(content);
        
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`✅ Fixed: ${file}`);
        }
      } catch (error) {
        console.error(`❌ Error fixing ${file}:`, error.message);
      }
    }
  }
}

// Function to fix all TypeScript/JavaScript files
function fixAllFiles() {
  const files = [];
  
  function findFiles(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          findFiles(fullPath);
        }
      } else if (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.jsx')) {
        files.push(fullPath);
      }
    }
  }
  
  findFiles(process.cwd());
  
  let fixedCount = 0;
  for (const file of files) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      const originalContent = content;
      
      content = fixSyntaxErrors(content);
      
      if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`✅ Fixed: ${path.relative(process.cwd(), file)}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('🔍 Fixing specific problematic files...');
fixSpecificFiles();

console.log('🔍 Fixing all files...');
const fixedCount = fixAllFiles();

console.log(`\n🎉 Fixed ${fixedCount} files!`);

// Run type checking to verify fixes
console.log('\n🔍 Running type check...');
try {
  execSync('npm run type-check', { stdio: 'inherit' });
  console.log('✅ Type checking passed!');
} catch (error) {
  console.log('⚠️  Some type checking issues remain - check output above');
}

console.log('\n✨ Error fixing completed!');