#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Starting comprehensive fix...');

// Function to fix a specific file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
<<<<<<< HEAD
    
    // Remove all merge conflict markers and branch names
    content = content.replace(/^<<<<<<< .*$/gm, '');
    content = content.replace(/^=======.*$/gm, '');
    content = content.replace(/^>>>>>>> .*$/gm, '');
    content = content.replace(/^ origin\/main$/gm, '');
    content = content.replace(/^ cursor\/fix-errors-and-merge-to-main-[a-z0-9]+$/gm, '');
    content = content.replace(/^ cursor\/fix-errors-and-merge-to-main-[a-z0-9]+$/gm, '');
    
    // Fix incomplete lazy imports - add missing closing parentheses and commas
    content = content.replace(/lazy\(\s*\(\s*\)\s*=>\s*import\("([^"]+)"\)\s*\n\s*const/g, 'lazy(() => import("$1")),\nconst');
    content = content.replace(/lazy\(\s*\(\s*\)\s*=>\s*import\("([^"]+)"\)\s*\n\s*\/\//g, 'lazy(() => import("$1")),\n//');
    content = content.replace(/lazy\(\s*\(\s*\)\s*=>\s*import\("([^"]+)"\)\s*\n\s*$/gm, 'lazy(() => import("$1")),');
    
    // Fix incomplete function calls
    content = content.replace(/lazy\(\s*\(\s*\)\s*=>\s*import\("([^"]+)"\)\s*\n\s*([a-zA-Z_$])/g, 'lazy(() => import("$1")),\n$2');
    
    // Fix missing closing parentheses in multi-line lazy imports
    content = content.replace(/lazy\(\s*\(\s*\)\s*=>\s*import\("([^"]+)"\)\s*\n\s*\)\s*$/gm, 'lazy(() => import("$1"))');
    
    // Fix object literal syntax errors
    content = content.replace(/([a-zA-Z_$][a-zA-Z0-9_$]*\s*:\s*[^,\n}]+)\n\s*([a-zA-Z_$][a-zA-Z0-9_$]*\s*:)/g, '$1,\n  $2');
    
    // Fix missing commas in arrays
    content = content.replace(/([^,\n])\n\s*([a-zA-Z_$][a-zA-Z0-9_$]*\s*:)/g, '$1,\n  $2');
    
    // Fix JSX syntax errors
    content = content.replace(/(<[^>]+)\n\s*([a-zA-Z_$])/g, '$1>\n  $2');
    
    // Fix incomplete JSX elements
    content = content.replace(/(<[^>]+)\n\s*<\/[^>]+>/g, '$1>\n  </div>');
    
    // Fix missing closing tags
    content = content.replace(/(<[^>]+)\n\s*([a-zA-Z_$])/g, '$1>\n  $2');
    
    // Fix function declarations
    content = content.replace(/function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(\s*\)\s*{\s*\n\s*return\s*\(\s*\n\s*<[^>]*>\s*\n\s*\)\s*;\s*\n\s*}\s*\n\s*([a-zA-Z_$])/g, 
      'function $1() {\n  return (\n    <div>\n      {/* Content */}\n    </div>\n  );\n}\n\n$2');
    
    // Fix export statements
    content = content.replace(/}\s*\n\s*([a-zA-Z_$][a-zA-Z0-9_$]*\s*:)/g, '}\n\nexport { $1');
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Remove any remaining orphaned markers
    content = content.replace(/^<<<<<<<|^=======|^>>>>>>>/gm, '');
    
    // Fix specific patterns for React components
    if (filePath.includes('.tsx') || filePath.includes('.jsx')) {
      // Fix missing closing tags in JSX
      content = content.replace(/(<[^>]+)\n\s*([a-zA-Z_$])/g, '$1>\n  $2');
      
      // Fix incomplete JSX elements
      content = content.replace(/(<[^>]+)\n\s*<\/[^>]+>/g, '$1>\n  </div>');
    }
    
=======

    // Fix common patterns
    const patterns = [
      // Fix merge conflict markers
      {
        pattern: /        replacement: "",
      },
      // Fix incomplete JSX tags
      {
        pattern: /<([^>]+?)\s*$/gm,
        replacement: (match, tag) => {
          // If it looks like an incomplete tag, close it
          if (
            tag.includes("className") ||
            tag.includes("src") ||
            tag.includes("alt")
          ) {
            return match + ">";
          }
          return match;
        },
      },
      // Fix missing closing braces in JSX
      {
        pattern: /(\s*)([^}]+?)(\s*)(\n\s*)(<\/[^>]+>)/g,
        replacement: (match, before, content, after, newline, closingTag) => {
          if (content.includes("{") && !content.includes("}")) {
            return before + content + "}" + after + newline + closingTag;
          }
          return match;
        },
      },
      // Fix missing semicolons after variable declarations
      {
        pattern:
          /(const|let|var)\s+(\w+)\s*=\s*([^;]+?)(\n\s*)(const|let|var|\n|$)/g,
        replacement: (match, decl, name, value, newline, next) => {
          if (
            !value.includes(";") &&
            !value.includes("{") &&
            !value.includes("(")
          ) {
            return decl + " " + name + " = " + value + ";" + newline + next;
          }
          return match;
        },
      },
    ];

    // Apply patterns
    patterns.forEach(({ pattern, replacement }) => {
      content = content.replace(pattern, replacement);
    });

    // If content changed, write it back
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`  ❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip node_modules, .git, and other irrelevant directories
          if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
            scanDirectory(fullPath);
          }
        } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
try {
  const workspaceDir = process.cwd();
  console.log(`📁 Scanning workspace: ${workspaceDir}`);
  
  const sourceFiles = findSourceFiles(workspaceDir);
  console.log(`🔍 Found ${sourceFiles.length} source files`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const file of sourceFiles) {
    try {
      if (fixFile(file)) {
        fixedCount++;
        console.log(`  ✅ Fixed: ${file}`);
      }
    } catch (error) {
      console.error(`❌ Failed to fix ${file}:`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\n📊 Fix Summary:`);
  console.log(`  ✅ Successfully fixed: ${fixedCount} files`);
  console.log(`  ❌ Failed to fix: ${errorCount} files`);
  console.log(`  📁 Total files processed: ${sourceFiles.length}`);
  
} catch (error) {
  console.error('💥 Script failed:', error.message);
  process.exit(1);
}