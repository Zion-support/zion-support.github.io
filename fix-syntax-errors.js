#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix duplicate imports in the same import statement
    content = content.replace(/import\s+{([^}]+)}\s+from\s+'([^']+)';/g, (match, imports, module) => {
      const items = imports.split(',').map(item => item.trim()).filter(item => item);
      const uniqueItems = [...new Set(items)];
      return `import { ${uniqueItems.join(', ')} } from '${module}';`;
    });
    
    // Fix missing commas in import statements
    content = content.replace(/import\s+{([^}]*)\s+([A-Za-z][A-Za-z0-9]*)\s+from\s+'([^']+)';/g, (match, before, after, module) => {
      const beforeItems = before.split(',').map(item => item.trim()).filter(item => item);
      const allItems = [...beforeItems, after];
      const uniqueItems = [...new Set(allItems)];
      return `import { ${uniqueItems.join(', ')} } from '${module}';`;
    });
    
    // Fix malformed import statements with missing commas
    content = content.replace(/import\s+{([^}]*)\s+([A-Za-z][A-Za-z0-9]*)\s+from\s+'([^']+)';/g, (match, before, after, module) => {
      const beforeItems = before.split(',').map(item => item.trim()).filter(item => item);
      const allItems = [...beforeItems, after];
      const uniqueItems = [...new Set(allItems)];
      return `import { ${uniqueItems.join(', ')} } from '${module}';`;
    });
    
    // Fix specific pattern: "Users, Users from" -> "Users from"
    content = content.replace(/,\s*([A-Za-z][A-Za-z0-9]*)\s+from/g, ' from');
    
    // Fix specific pattern: "Users from 'lucide-react';" -> "Users } from 'lucide-react';"
    content = content.replace(/([A-Za-z][A-Za-z0-9]*)\s+from\s+'([^']+)';/g, (match, item, module) => {
      return `{ ${item} } from '${module}';`;
    });
    
    // Fix missing semicolons in import statements
    content = content.replace(/import\s+[^;]+$/gm, (match) => {
      if (!match.endsWith(';')) {
        return match + ';';
      }
      return match;
    });
    
    // Fix malformed component names
    content = content.replace(/const\s+Pagetsx:\s*React\.FC/g, 'const ApiPage: React.FC');
    
    // Remove extra spaces and fix formatting
    content = content.replace(/\s+/g, ' ');
    content = content.replace(/;\s*import/g, ';\nimport');
    content = content.replace(/}\s*from/g, ' } from');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// List of files with syntax errors
const filesWithErrors = [
  '/workspace/src/about/page.tsx',
  '/workspace/src/ai-ab-testing/page.tsx',
  '/workspace/src/api/page.tsx',
  '/workspace/src/blog/ai-2025-2026-mega-trends-breakthrough/page.tsx',
  '/workspace/src/blog/ai-2025-sept-30-operational-trust-scorecards-v3/page.tsx',
  '/workspace/src/blog/ai-enterprise-transformation-2025/page.tsx',
  '/workspace/src/blog/ai-innovation-labs-product-development-2025/page.tsx',
  '/workspace/src/enterprise/page.tsx',
  '/workspace/src/gdpr/page.tsx',
  '/workspace/src/marketing-tools/page.tsx',
  '/workspace/src/security/page.tsx',
  '/workspace/src/system-status/page.tsx',
  '/workspace/src/test-page.tsx'
];

console.log('Fixing syntax errors in specific files...');

let fixedCount = 0;
for (const file of filesWithErrors) {
  if (fs.existsSync(file)) {
    if (fixSyntaxErrors(file)) {
      fixedCount++;
    }
  }
}

console.log(`\nFixed syntax errors in ${fixedCount} files.`);