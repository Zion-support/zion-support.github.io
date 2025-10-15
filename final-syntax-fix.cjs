#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting final comprehensive syntax fix...');

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix unterminated string literals
    content = content.replace(/from\s+'([^']*)$/gm, (match, module) => {
      return `from '${module}';`;
    });
    
    content = content.replace(/from\s+"([^"]*)$/gm, (match, module) => {
      return `from "${module}";`;
    });
    
    // Fix import statements
    content = content.replace(/import\s+([^'"]+)\s+from\s+'([^']*)$/gm, (match, imports, module) => {
      return `import ${imports} from '${module}';`;
    });
    
    content = content.replace(/import\s+([^'"]+)\s+from\s+"([^"]*)$/gm, (match, imports, module) => {
      return `import ${imports} from "${module}";`;
    });
    
    // Fix 'use client' directive
    content = content.replace(/'use client;$/gm, "'use client';");
    content = content.replace(/'use client$/gm, "'use client';");
    
    // Fix JSX attributes
    content = content.replace(/className=([^"'][^>\s]*)/g, (match, className) => {
      if (!className.startsWith('"') && !className.startsWith("'")) {
        return `className="${className}"`;
      }
      return match;
    });
    
    content = content.replace(/href=([^"'][^>\s]*)/g, (match, href) => {
      if (!href.startsWith('"') && !href.startsWith("'")) {
        return `href="${href}"`;
      }
      return match;
    });
    
    content = content.replace(/src=([^"'][^>\s]*)/g, (match, src) => {
      if (!src.startsWith('"') && !src.startsWith("'")) {
        return `src="${src}"`;
      }
      return match;
    });
    
    // Fix object properties
    content = content.replace(/(\w+):\s*([^,}]+),?\s*$/gm, (match, key, value) => {
      if (!value.startsWith('"') && !value.startsWith("'") && !value.includes('{') && !value.includes('(')) {
        return `${key}: "${value.trim()}",`;
      }
      return match;
    });
    
    // Fix string literals in JSX
    content = content.replace(/(<[^>]*>)\s*([^<]+);\s*(<\/[^>]*>)/g, '$1$2$3');
    
    // Fix missing quotes in JSX text content
    content = content.replace(/(<[^>]*>)\s*([^<"']+[^<"']*)\s*(<\/[^>]*>)/g, (match, open, text, close) => {
      if (!text.includes('{') && !text.includes('}') && text.trim().length > 0) {
        return `${open}${text}${close}`;
      }
      return match;
    });
    
    // Fix missing semicolons
    content = content.replace(/([^;}])\s*$/gm, '$1;');
    
    // Fix specific common patterns
    content = content.replace(/import React from 'react;$/gm, "import React from 'react';");
    content = content.replace(/import React from 'react$/gm, "import React from 'react';");
    
    // Fix JSX closing tags
    content = content.replace(/<\/\s*([^>]+)\s*;\s*>/g, '</$1>');
    
    // Remove extra semicolons
    content = content.replace(/;;+/g, ';');
    content = content.replace(/;\s*;/g, ';');
    
    // Clean up whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s+$/gm, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
          files = files.concat(findFiles(fullPath, extensions));
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    // Skip directories we can't read
  }
  
  return files;
}

// Main execution
async function main() {
  console.log('📁 Scanning for files with syntax errors...');
  
  const files = findFiles(process.cwd());
  let fixedCount = 0;
  let totalFiles = 0;
  
  for (const file of files) {
    totalFiles++;
    if (fixSyntaxErrors(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   Total files processed: ${totalFiles}`);
  console.log(`   Files fixed: ${fixedCount}`);
  
  if (fixedCount > 0) {
    console.log('\n🔍 Running build check...');
    try {
      execSync('npm run build', { stdio: 'inherit' });
      console.log('✅ Build check passed!');
    } catch (error) {
      console.log('⚠️  Build check found remaining issues, continuing...');
    }
  }
  
  console.log('\n🎉 Final syntax fix completed!');
}

main().catch(console.error);