#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix malformed import statements
function fixMalformedImports(content) {
  const lines = content.split('\n');
  const result = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check for malformed import with duplicate braces
    if (line.includes('}, {') && line.includes('from')) {
      // Fix pattern like: import React, { lazy }, { Suspense, lazy } from 'react';
      const match = line.match(/import\s+([^,]+),\s*{([^}]+)},\s*{([^}]+)}\s+from\s+['"]([^'"]+)['"];?/);
      if (match) {
        const defaultImport = match[1].trim();
        const firstNamed = match[2].trim();
        const secondNamed = match[3].trim();
        const moduleName = match[4];
        
        // Combine all named imports
        const allNamed = [...firstNamed.split(','), ...secondNamed.split(',')]
          .map(imp => imp.trim())
          .filter(imp => imp)
          .join(', ');
        
        const newImport = `import ${defaultImport}, { ${allNamed} } from '${moduleName}';`;
        result.push(newImport);
        continue;
      }
    }
    
    // Check for other malformed patterns
    if (line.includes('}, {') && !line.includes('from')) {
      // This might be a multi-line malformed import, skip it
      continue;
    }
    
    result.push(line);
  }
  
  return result.join('\n');
}

// Function to fix a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix malformed imports
    content = fixMalformedImports(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed malformed imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// List of files with known malformed import issues
const problematicFiles = [
  'app/ai-customer-support-pro/page.tsx',
  'app/ai-cybersecurity-platform/page.tsx',
  'app/ai-ecommerce-platform/page.tsx',
  'app/ai-financial-platform/page.tsx'
];

console.log(`Fixing ${problematicFiles.length} files with malformed import issues...`);

let fixedCount = 0;
for (const file of problematicFiles) {
  if (fs.existsSync(file)) {
    if (fixFile(file)) {
      fixedCount++;
    }
  } else {
    console.log(`File not found: ${file}`);
  }
}

console.log(`Fixed ${fixedCount} files`);