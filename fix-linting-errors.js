#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all TypeScript/TSX files in the app directory
function getAllTsxFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files = files.concat(getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix common linting issues in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix 1: Remove unused React imports (when React is not used in JSX)
    if (content.includes("import React from 'react';") && !content.includes('<')) {
      content = content.replace(/import React from 'react';\n?/g, '');
      modified = true;
    }
    
    // Fix 2: Add React import if JSX is used but React is not imported
    if (content.includes('<') && !content.includes("import React") && !content.includes("import * as React")) {
      content = "import React from 'react';\n" + content;
      modified = true;
    }
    
    // Fix 3: Remove unused imports (basic patterns)
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip if it's an import line that might be unused
      if (line.includes('import') && line.includes('from')) {
        // Check if all imported items are used
        const importMatch = line.match(/import\s*{([^}]+)}\s*from/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          let hasUsedImports = false;
          
          for (const imp of imports) {
            const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim();
            if (content.includes(cleanImp) && !line.includes(cleanImp)) {
              hasUsedImports = true;
              break;
            }
          }
          
          if (!hasUsedImports) {
            // Remove the entire import line
            continue;
          }
        }
      }
      
      newLines.push(line);
    }
    
    if (newLines.length !== lines.length) {
      content = newLines.join('\n');
      modified = true;
    }
    
    // Fix 4: Remove unused variable declarations
    content = content.replace(/const\s+(\w+)\s*=\s*[^;]+;\s*\n(?![^]*\1[^]*[^=])/g, '');
    
    // Fix 5: Add missing React import for components that use JSX
    if (content.includes('export default function') && content.includes('<') && !content.includes("import React")) {
      content = "import React from 'react';\n" + content;
      modified = true;
    }
    
    // Fix 6: Remove unused interface/type definitions
    content = content.replace(/interface\s+\w+Props\s*{[^}]*}\s*\n(?![^]*\w+Props[^]*[^:])/g, '');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
            return true;
    }
    
    return false;
  } catch (error) {
        return false;
  }
}

// Main execution

const appDir = path.join(__dirname, 'app');
const files = getAllTsxFiles(appDir);

let fixedCount = 0;
for (const file of files) {
  if (fixFile(file)) {
    fixedCount++;
  }
}


// Run ESLint with --fix to handle remaining issues
try {
    execSync('npx eslint app --ext .ts,.tsx --fix', { stdio: 'inherit' });
  } catch (error) {
    // Empty block
  }

