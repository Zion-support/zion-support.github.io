import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Define the replacements for Next.js imports
const replacements = [
  {
    pattern: /import\s+{\s*Metadata\s*}\s+from\s+['"]next['"];?/g,
    replacement: 'import React from \'react\';\nimport { Helmet } from \'react-helmet-async\';'
  },
  {
    pattern: /import\s+.*\s+from\s+['"]next\/link['"];?/g,
    replacement: 'import { Link } from \'react-router-dom\';'
  },
  {
    pattern: /import\s+.*\s+from\s+['"]next\/image['"];?/g,
    replacement: 'import React from \'react\';'
  },
  {
    pattern: /import\s+.*\s+from\s+['"]next\/navigation['"];?/g,
    replacement: 'import { useNavigate, useLocation } from \'react-router-dom\';'
  },
  {
    pattern: /import\s+.*\s+from\s+['"]next\/dynamic['"];?/g,
    replacement: 'import { lazy, Suspense } from \'react\';'
  },
  {
    pattern: /import\s+.*\s+from\s+['"]next['"];?/g,
    replacement: 'import React from \'react\';'
  },
  {
    pattern: /'use client';?\s*/g,
    replacement: ''
  },
  {
    pattern: /dynamic\(\(\)\s*=>\s*import\(['"]([^'"]+)['"]\)\s*,\s*{\s*loading:\s*\(\)\s*=>\s*<([^>]+)>\s*<\/[^>]+>\s*\}\)/g,
    replacement: 'lazy(() => import(\'$1\'))'
  }
];

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Apply all replacements
    replacements.forEach(({ pattern, replacement }) => {
      const newContent = content.replace(pattern, replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    // Additional fixes for specific patterns
    // Fix Link components
    content = content.replace(/<Link\s+href=/g, '<Link to=');
    
    // Fix Image components - replace with regular img tags
    content = content.replace(/<Image\s+([^>]*?)src={([^}]+)}([^>]*?)>/g, '<img $1src={$2}$3>');
    content = content.replace(/<Image\s+([^>]*?)alt={([^}]+)}([^>]*?)>/g, '<img $1alt={$2}$3>');
    content = content.replace(/<Image\s+([^>]*?)width={([^}]+)}([^>]*?)>/g, '<img $1width={$2}$3>');
    content = content.replace(/<Image\s+([^>]*?)height={([^}]+)}([^>]*?)>/g, '<img $1height={$2}$3>');
    
    // Fix metadata exports
    content = content.replace(/export\s+const\s+metadata:\s*Metadata\s*=\s*{[\s\S]*?};/g, '');
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  const appDir = path.join(process.cwd(), 'app');
  
  // Find all TypeScript/JavaScript files in the app directory
  const files = await glob('**/*.{ts,tsx,js,jsx}', { 
    cwd: appDir,
    ignore: ['**/node_modules/**', '**/dist/**', '**/build/**']
  });
  
  console.log(`Found ${files.length} files to process in app directory`);
  
  let fixedCount = 0;
  for (const file of files) {
    const fullPath = path.join(appDir, file);
    if (fixFile(fullPath)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed ${fixedCount} files`);
}

main();