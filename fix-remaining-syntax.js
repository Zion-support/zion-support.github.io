#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix malformed import statements
function fixMalformedImports(content) {
  // Fix the specific pattern where imports are concatenated without proper separation
  content = content.replace(
    /import\s+{([^}]+)}\s+from\s+'([^']+)'\s+import\s+([^;]+);/g,
    (match, imports1, module1, imports2) => {
      return `import { ${imports1} } from '${module1}';\nimport ${imports2};`;
    }
  );
  
  // Fix missing semicolons and proper line breaks
  content = content.replace(
    /import\s+{([^}]+)}\s+from\s+'([^']+)'\s+import\s+([^;]+);\s+import\s+([^;]+);\s+const\s+(\w+):\s*React\.FC/g,
    (match, imports1, module1, import2, import3, componentName) => {
      return `import { ${imports1} } from '${module1}';\nimport ${import2};\nimport ${import3};\n\nconst ${componentName}: React.FC`;
    }
  );
  
  return content;
}

// Function to fix specific files
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix malformed imports
    content = fixMalformedImports(content);
    
    // Fix missing semicolons in import statements
    content = content.replace(/import\s+[^;]+$/gm, (match) => {
      if (!match.endsWith(';')) {
        return match + ';';
      }
      return match;
    });
    
    // Fix component names
    content = content.replace(/const\s+Pagetsx:\s*React\.FC/g, 'const ApiPage: React.FC');
    content = content.replace(/export default Pagetsx;/g, 'export default ApiPage;');
    
    // Fix title and description in Helmet
    content = content.replace(/<title>tsx - Zion Tech Group<\/title>/g, '<title>API - Zion Tech Group</title>');
    content = content.replace(/content="Advanced tsx solutions/g, 'content="Advanced API solutions');
    content = content.replace(/tsx solutions powered by AI/g, 'API solutions powered by AI');
    
    // Fix heading text
    content = content.replace(/tsx<\/h1>/g, 'API Solutions</h1>');
    content = content.replace(/Advanced tsx solutions powered by AI/g, 'Advanced API solutions powered by AI');
    
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

console.log('Fixing remaining syntax errors...');

let fixedCount = 0;
for (const file of filesToFix) {
  if (fs.existsSync(file)) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
}

console.log(`\nFixed ${fixedCount} files.`);