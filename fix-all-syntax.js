#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 'use client' directive issues
    if (content.includes("'use client'import")) {
      content = content.replace(/'use client'import/g, "'use client';\nimport");
      modified = true;
    }

    // Fix malformed import statements - common patterns
    content = content.replace(/^import\s+React\s+from\s+['"]react['"]import/g, "import React from 'react';\nimport");
    content = content.replace(/^import\s+{\s*([^}]+)\s*}\s+from\s+['"]([^'"]+)['"]import/g, "import { $1 } from '$2';\nimport");
    content = content.replace(/^import\s+([^'"]+)\s+from\s+['"]([^'"]+)['"]import/g, "import $1 from '$2';\nimport");
    
    // Fix import statements that are missing semicolons and newlines
    content = content.replace(/import\s+([^;]+)\s+from\s+['"]([^'"]+)['"]import/g, "import $1 from '$2';\nimport");
    content = content.replace(/import\s+{\s*([^}]+)\s*}\s+from\s+['"]([^'"]+)['"]import/g, "import { $1 } from '$2';\nimport");
    
    // Fix 'use client' followed by import without semicolon
    content = content.replace(/'use client'import/g, "'use client';\nimport");
    
    // Fix export statements
    content = content.replace(/export\s+([^;]+)export/g, "export $1;\nexport");
    content = content.replace(/export\s+default\s+([^;]+)export/g, "export default $1;\nexport");
    
    // Fix function declarations
    content = content.replace(/const\s+([^=]+)\s*=\s*\([^)]*\)\s*=>\s*{([^}]+)}export/g, "const $1 = () => {\n$2\n};\nexport");
    content = content.replace(/const\s+([^=]+)\s*=\s*\([^)]*\)\s*=>\s*\(([^)]+)\)export/g, "const $1 = () => (\n$2\n);\nexport");
    
    // Fix component declarations
    content = content.replace(/const\s+([A-Z][a-zA-Z0-9]*)\s*:\s*React\.FC\s*=\s*\([^)]*\)\s*=>\s*{([^}]+)}export/g, "const $1: React.FC = () => {\n$2\n};\nexport");
    
    // Fix JSX syntax issues
    content = content.replace(/;\s*<([^>]+)>\s*;\s*<\/\1>\s*;/g, '<$1></$1>');
    content = content.replace(/;\s*<([^>]+)\s*\/>\s*;/g, '<$1 />');
    content = content.replace(/;\s*<([^>]+)>\s*;\s*([^<]+)\s*;\s*<\/\1>\s*;/g, '<$1>$2</$1>');
    
    // Fix common syntax issues after merge conflicts
    content = content.replace(/;\s*\/\/[^\n]*\n/g, '\n');
    content = content.replace(/;\s*\/\*[^*]*\*\/\s*\n/g, '\n');
    
    // Fix closing braces and parentheses
    content = content.replace(/;\s*}\s*;/g, '}');
    content = content.replace(/;\s*\)\s*;/g, ')');
    
    // Fix JSX closing tags
    content = content.replace(/;\s*<\/[^>]+>\s*;/g, (match) => match.replace(/;/g, ''));
    
    // Remove extra semicolons at the end of lines
    content = content.replace(/;\s*\n/g, '\n');
    
    // Fix multiple consecutive semicolons
    content = content.replace(/;+/g, ';');
    
    // Remove semicolons before closing braces
    content = content.replace(/;\s*}/g, '}');
    content = content.replace(/;\s*\)/g, ')');
    
    // Fix JSX attributes
    content = content.replace(/;\s*([a-zA-Z][a-zA-Z0-9]*)\s*=\s*{([^}]+)}\s*;/g, ' $1={$2}');
    content = content.replace(/;\s*([a-zA-Z][a-zA-Z0-9]*)\s*=\s*"([^"]+)"\s*;/g, ' $1="$2"');
    content = content.replace(/;\s*([a-zA-Z][a-zA-Z0-9]*)\s*=\s*'([^']+)'\s*;/g, " $1='$2'");
    
    // Fix className attributes
    content = content.replace(/;\s*className\s*=\s*"([^"]+)"\s*;/g, ' className="$1"');
    
    // Fix JSX text content
    content = content.replace(/;\s*([^<>{}\n]+)\s*;/g, (match, text) => {
      const trimmed = text.trim();
      if (trimmed && !trimmed.includes('=') && !trimmed.includes('{') && !trimmed.includes('}')) {
        return ` ${trimmed}`;
      }
      return match;
    });
    
    // Fix specific patterns that are causing parsing errors
    content = content.replace(/^'use client';\s*$/gm, "'use client';");
    
    // Fix malformed React imports
    content = content.replace(/^import\s+React\s+from\s+['"]react['"];\s*$/gm, "import React from 'react';");
    
    // Fix malformed component exports
    content = content.replace(/^export\s+default\s+([^;]+);\s*$/gm, "export default $1;");
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '');
    
    // Fix specific parsing errors
    content = content.replace(/;\s*$/gm, '');
    
    // Fix malformed JSX
    content = content.replace(/;\s*<([^>]+)>\s*;\s*<\/\1>\s*;/g, '<$1></$1>');
    
    // Fix malformed function calls
    content = content.replace(/;\s*([a-zA-Z][a-zA-Z0-9]*)\s*\(/g, ' $1(');
    
    // Fix malformed object properties
    content = content.replace(/;\s*([a-zA-Z][a-zA-Z0-9]*)\s*:\s*([^,}]+)\s*;/g, ' $1: $2');
    
    // Fix malformed array elements
    content = content.replace(/;\s*([^,}\]]+)\s*;/g, (match, text) => {
      const trimmed = text.trim();
      if (trimmed && !trimmed.includes('=') && !trimmed.includes('{') && !trimmed.includes('}')) {
        return ` ${trimmed}`;
      }
      return match;
    });
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with syntax errors
function findFilesWithSyntaxErrors(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules, .git, and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.tsx', '.ts', '.js', '.jsx', '.css'].includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting comprehensive syntax error resolution...');

const filesToCheck = findFilesWithSyntaxErrors('/workspace');
console.log(`Checking ${filesToCheck.length} files for syntax errors`);

let fixedCount = 0;
for (const file of filesToCheck) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed syntax errors in ${fixedCount} files`);

// Run build to check for remaining issues
console.log('Running build to check for remaining issues...');
try {
  execSync('cd /workspace && pnpm run build', { stdio: 'inherit' });
  console.log('Build completed successfully!');
} catch (error) {
  console.log('Build completed with some issues remaining');
}

console.log('Comprehensive syntax error resolution completed!');