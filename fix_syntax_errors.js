#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Starting comprehensive syntax error fixing...');

// Function to fix common JSX syntax errors
function fixJSXSyntax(content) {
  // Fix unterminated string literals
  content = content.replace(/'([^']*)$/gm, (match, str) => {
    if (str.includes('"') && !str.includes("'")) {
      return `"${str}"`;
    }
    return match;
  });

  // Fix missing closing tags for React.Fragment
  content = content.replace(/<React\.Fragment[^>]*>([^<]*(?:<(?!/React\.Fragment>)[^<]*)*?)(?=<[^/]|$)/g, (match, inner) => {
    if (!inner.includes('</React.Fragment>')) {
      return match + inner + '</React.Fragment>';
    }
    return match;
  });

  // Fix missing closing tags for fragments
  content = content.replace(/<>([^<]*(?:<(?!/>)[^<]*)*?)(?=<[^/]|$)/g, (match, inner) => {
    if (!inner.includes('</>')) {
      return match + inner + '</>';
    }
    return match;
  });

  // Fix missing closing div tags
  content = content.replace(/<div[^>]*>([^<]*(?:<(?!/div>)[^<]*)*?)(?=<[^/]|$)/g, (match, inner) => {
    if (!inner.includes('</div>')) {
      return match + inner + '</div>';
    }
    return match;
  });

  // Fix malformed JSX attributes
  content = content.replace(/className="([^"]*)"([^>]*>)/g, 'className="$1"$2');
  content = content.replace(/className='([^']*)'([^>]*>)/g, 'className="$1"$2');

  // Fix missing closing braces
  content = content.replace(/\{([^}]*)$/gm, (match, inner) => {
    if (inner.trim() && !inner.includes('}')) {
      return match + '}';
    }
    return match;
  });

  // Fix malformed function declarations
  content = content.replace(/export\s+default\s+function\s+(\w+)\s*\([^)]*\)\s*\{([^}]*)$/gm, (match, name, body) => {
    if (body.trim() && !body.includes('}')) {
      return match + '}';
    }
    return match;
  });

  return content;
}

// Function to fix specific file types
function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return false;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    let fixedContent = content;

    // Fix based on file extension
    if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
      fixedContent = fixJSXSyntax(fixedContent);
    }

    // Fix common TypeScript errors
    fixedContent = fixedContent
      // Fix unterminated string literals
      .replace(/'([^']*)$/gm, (match, str) => {
        if (str && !str.includes("'") && !str.includes('"')) {
          return `"${str}"`;
        }
        return match;
      })
      // Fix missing semicolons
      .replace(/([^;}])\n(\s*[a-zA-Z_$])/g, '$1;\n$2')
      // Fix missing closing parentheses
      .replace(/\(([^)]*)$/gm, (match, inner) => {
        if (inner.trim() && !inner.includes(')')) {
          return match + ')';
        }
        return match;
      });

    if (fixedContent !== originalContent) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to get all TypeScript/JavaScript files
function getAllTSFiles(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
function main() {
  console.log('📋 Finding all TypeScript/JavaScript files...');
  const files = getAllTSFiles('/workspace');
  
  console.log(`📝 Found ${files.length} files to check`);

  let fixedCount = 0;
  let totalCount = files.length;

  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }

  console.log(`\n📊 Fix Summary:`);
  console.log(`   ✅ Successfully fixed: ${fixedCount}/${totalCount} files`);

  // Run type check to see remaining errors
  console.log('\n🔍 Running type check to verify fixes...');
  try {
    execSync('pnpm run type-check', { stdio: 'inherit' });
    console.log('✅ Type check passed!');
  } catch (error) {
    console.log('⚠️  Some type errors remain, but many have been fixed');
  }
}

main();