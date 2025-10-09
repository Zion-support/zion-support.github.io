#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix malformed import statements and add proper formatting
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix the specific pattern where imports are concatenated
    content = content.replace(
      /import\s+{([^}]+)}\s+from\s+'([^']+)';\s+const\s+(\w+):\s*React\.FC/g,
      (match, imports, module, componentName) => {
        return `import { ${imports} } from '${module}';\n\nconst ${componentName}: React.FC`;
      }
    );
    
    // Fix missing semicolons in import statements
    content = content.replace(/import\s+[^;]+$/gm, (match) => {
      if (!match.endsWith(';')) {
        return match + ';';
      }
      return match;
    });
    
    // Fix missing line breaks between imports and component definition
    content = content.replace(/};\s+const\s+(\w+):\s*React\.FC/g, '};\n\nconst $1: React.FC');
    
    // Fix missing line breaks between imports
    content = content.replace(/;\s+import\s+{/g, ';\nimport {');
    content = content.replace(/;\s+import\s+[A-Z]/g, ';\nimport ');
    
    // Fix malformed object literals in arrays
    content = content.replace(/benefits:\s*\[([^\]]+)\];\s*}/g, 'benefits: [$1]\n    }');
    
    // Fix missing commas in object properties
    content = content.replace(/}\s*}\s*];/g, '}\n  }\n];');
    
    // Fix missing line breaks in return statements
    content = content.replace(/return\s+\(/g, 'return (\n    ');
    content = content.replace(/\);\s*};/g, '\n  );\n};');
    
    // Fix missing line breaks in JSX
    content = content.replace(/<div\s+className="min-h-screen/g, '<div className="min-h-screen');
    content = content.replace(/<Navigation\s+\/>/g, '<Navigation />');
    content = content.replace(/<Footer\s+\/>/g, '<Footer />');
    
    // Ensure proper spacing
    content = content.replace(/\n{3,}/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed file: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// List of files to fix
const filesToFix = [
  '/workspace/src/ai-ab-testing/page.tsx',
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

console.log('Applying final syntax fixes...');

let fixedCount = 0;
for (const file of filesToFix) {
  if (fs.existsSync(file)) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
}

console.log(`\nFixed ${fixedCount} files.`);