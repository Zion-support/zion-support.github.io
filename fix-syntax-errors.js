#!/usr/bin/env node

import fs from 'fs';

// List of files that need syntax fixes
const filesToFix = [
  './app/about/page.tsx',
  './app/5g-implementation/page.tsx',
  './app/accessibility/page.tsx',
  './app/accessibility-page/page.tsx',
  './app/ai-3d-generation/page.tsx',
  './app/ai-accounting-assistant/page.tsx',
  './app/ai-agricultural-intelligence-pro/page.tsx',
  './app/ai-analytics-dashboard/page.tsx'
];

function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix duplicate imports
  fixed = fixed.replace(/import\s+{[^}]+}\s+from\s+'[^']+';\s*\n\s*import\s+{[^}]+}\s+from\s+'[^']+';/g, (match) => {
    const lines = match.split('\n').filter(line => line.trim().startsWith('import'));
    const imports = new Map();
    
    lines.forEach(line => {
      const match = line.match(/import\s+{([^}]+)}\s+from\s+'([^']+)'/);
      if (match) {
        const [, items, module] = match;
        if (!imports.has(module)) {
          imports.set(module, new Set());
        }
        items.split(',').forEach(item => {
          imports.get(module).add(item.trim());
        });
      }
    });
    
    return Array.from(imports.entries())
      .map(([module, items]) => `import { ${Array.from(items).join(', ')} } from '${module}';`)
      .join('\n');
  });
  
  // Fix missing commas in object properties
  fixed = fixed.replace(/(\w+):\s*([^,}]+)\s*\n\s*(\w+):/g, '$1: $2,\n    $3:');
  
  // Fix missing commas in arrays
  fixed = fixed.replace(/(\w+)\s*\n\s*(\w+):/g, '$1,\n    $2:');
  
  // Fix duplicate object properties
  fixed = fixed.replace(/(\w+):\s*([^,}]+)\s*\n\s*\1:/g, '$1: $2');
  
  // Fix missing closing braces and parentheses
  fixed = fixed.replace(/(\w+):\s*([^,}]+)\s*\n\s*}/g, '$1: $2\n  }');
  
  return fixed;
}

function fixFile(filePath) {
  try {
    console.log(`Fixing syntax errors in ${filePath}...`);
    
    if (!fs.existsSync(filePath)) {
      console.log(`File ${filePath} does not exist, skipping...`);
      return;
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
    fs.writeFileSync(filePath, fixed, 'utf8');
    console.log(`✓ Fixed ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
console.log('Starting syntax error fixes...');
filesToFix.forEach(fixFile);
console.log('Syntax error fixes completed!');