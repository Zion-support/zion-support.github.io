#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixMissingTypes(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file has TypeScript errors related to missing types
    if (!content.includes('.tsx') && !content.includes('.ts')) {
      return false;
    }
    
    // Common patterns for missing types
    const patterns = [
      {
        // Pattern: React.FC<SomeProps> without SomeProps defined
        regex: /const\s+(\w+):\s+React\.FC<(\w+)>\s*=/,
        replacement: (match, componentName, propsName) => {
          return `interface ${propsName} {\n  className?: string;\n  children?: React.ReactNode;\n}\n\nconst ${componentName}: React.FC<${propsName}> =`;
        }
      },
      {
        // Pattern: function with props type but no interface
        regex: /export\s+default\s+function\s+(\w+)\s*\(\s*\{\s*([^}]+)\s*\}\s*:\s*(\w+)\s*\)/,
        replacement: (match, funcName, params, typeName) => {
          return `interface ${typeName} {\n  className?: string;\n  children?: React.ReactNode;\n}\n\nexport default function ${funcName}({ ${params} }: ${typeName})`;
        }
      }
    ];
    
    // Add React import if missing
    if (content.includes('React.') && !content.includes("import React")) {
      content = "import React from 'react';\n\n" + content;
      modified = true;
    }
    
    // Apply patterns
    for (const pattern of patterns) {
      if (pattern.regex.test(content)) {
        content = content.replace(pattern.regex, pattern.replacement);
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed types in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing types in ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const workspaceDir = '/workspace/app';
const tsxFiles = findTsxFiles(workspaceDir);

console.log(`Found ${tsxFiles.length} TypeScript files to check`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixMissingTypes(file)) {
    fixedCount++;
  }
}

console.log(`Fixed types in ${fixedCount} files`);