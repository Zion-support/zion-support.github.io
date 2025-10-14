#!/usr/bin/env node;
import fs from 'fs';
import path from 'path';

// Function to fix common syntax errors;
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    console.log(`Processing ${filePath}...`);
    
    // Fix unterminated string literals
    if (content.includes('"') && content.match(/"[^"]*$/)) {"
      content = content.replace(/"([^"]*)$/gm, '"$1"');
      modified = true;
    }
    
    // Fix unclosed JSX tags
    content = content.replace(/<Helmet([^></Helmet>]*)>/g, '<Helmet$1></Helmet></Helmet>');
    content = content.replace(/<div([^></div>]*)>/g, (match, attrs) => {
      if (!match.includes('</div>')) {
        return match + '</div>';
      }
      return match;
    });
    
    // Fix JSX fragments
    content = content.replace(/<>([^<]*?)<\/>>/g, (match, inner) => {
      if (inner.trim()) {
        return `<div></div>${inner}</div>`;
      }
      return match;
    });
    
    // Fix missing closing parentheses
    content = content.replace(/\(([^)]*)$/gm, '($1)');
    
    // Fix missing semicolons
    content = content.replace(/([^;}])\n\s*export/g, '$1;\nexport');
    content = content.replace(/([^;}])\n\s*import/g, '$1;\nimport');
    content = content.replace(/([^;}])\n\s*const/g, '$1;\nconst');
    content = content.replace(/([^;}])\n\s*function/g, '$1;\nfunction');
    
    // Fix JSX syntax issues
    content = content.replace(/<([^>]*?)>/g, (match, inner) => {
      // Fix unclosed self-closing tags
      if (inner.includes('<') && !inner.includes('>')) {
        return match + '>';
      }
      return match;
    });
    
    // Fix React import issues"
    if (content.includes('React') && !content.includes("import React")) {"
      content = "import React from 'react';\n" + content;
      modified = true;
    }
    
    // Remove unused React imports"
    if (content.includes("import React from 'react';") && !content.match(/<[A-Z]/)) {
      content = content.replace(/import React from 'react';\n?/g, '');
      modified = true;
    }
    
    // Fix missing closing braces;
const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      content += '\n' + '}'.repeat(openBraces - closeBraces);
      modified = true;
    }
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.trim() + '\n';
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Fixed syntax issues in ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files;
function findSourceFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {;
const files = [];
  ;
function traverse(currentDir) {
    try {;
const items = fs.readdirSync(currentDir);
      
      for (const item of items) {;
const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          if (!['node_modules', '.git', 'dist', 'build', '.next', 'coverage'].includes(item)) {
            traverse(fullPath);
          }
        } else if (stat.isFile()) {;
const ext = path.extname(item);
          if (extensions.includes(ext)) {
            files.push(fullPath);
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('🔍 Scanning for source files...');
const sourceFiles = findSourceFiles('/workspace');

console.log(`Found ${sourceFiles.length} source files`);

console.log('\n🔧 Fixing syntax errors...');
let successCount = 0;
let errorCount = 0;

for (const file of sourceFiles) {
  if (fixSyntaxErrors(file)) {
    successCount++;
  } else {
    errorCount++;
  }
}

console.log(`\n📊 Results:`);
console.log(`  ✓ Successfully processed: ${successCount} files`);
console.log(`  ✗ Errors: ${errorCount} files`);

console.log('\n✨ Syntax error fixing complete!');"
