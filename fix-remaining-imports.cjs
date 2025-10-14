const fs = require('fs');
const path = require('path');

// Function to fix unused imports
function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix unused named imports
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip empty import lines
      if (line.trim() === "import { } from 'react';" || 
          line.trim() === "import React, { } from 'react';" ||
          line.trim() === "import { } from 'lucide-react';" ||
          line.trim() === "import { } from '@heroicons/react';") {
        continue;
      }
      
      // Check for unused named imports
      if (line.includes('import {') && line.includes('} from')) {
        const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const source = importMatch[2];
          const usedImports = [];
          
          for (const imp of imports) {
            const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim();
            // Check if the import is used in the file
            const isUsed = content.includes(`<${cleanImp}`) || 
                          content.includes(`</${cleanImp}>`) ||
                          content.includes(`${cleanImp}(`) ||
                          content.includes(`${cleanImp}.`) ||
                          content.includes(` ${cleanImp} `) ||
                          content.includes(`{${cleanImp}}`) ||
                          content.includes(`[${cleanImp}]`) ||
                          content.includes(`"${cleanImp}"`) ||
                          content.includes(`'${cleanImp}'`) ||
                          content.includes(`${cleanImp}:`) ||
                          content.includes(`${cleanImp}=`) ||
                          content.includes(`${cleanImp} `) ||
                          content.includes(`${cleanImp}\n`) ||
                          content.includes(`${cleanImp};`) ||
                          content.includes(`${cleanImp},`) ||
                          content.includes(`${cleanImp})`) ||
                          content.includes(`${cleanImp}]`) ||
                          (content.includes(`${cleanImp}`) && content.split(`${cleanImp}`).length > 2);
            
            if (isUsed) {
              usedImports.push(imp);
            }
          }
          
          if (usedImports.length === 0) {
            // All imports are unused, remove the entire line
            continue;
          } else if (usedImports.length < imports.length) {
            // Some imports are unused, keep only the used ones
            const newLine = `import { ${usedImports.join(', ')} } from '${source}';`;
            newLines.push(newLine);
            modified = true;
            continue;
          }
        }
      }
      
      newLines.push(line);
    }
    
    if (modified || newLines.length !== lines.length) {
      fs.writeFileSync(filePath, newLines.join('\n'));
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Specific files to fix based on the error output
const specificFiles = [
  'app/careers/page.tsx',
  'app/components/About.tsx',
  'app/components/AdvancedPerformanceOptimizer.tsx',
  'app/components/ContentCarousel.tsx',
  'app/components/ContentStatistics.tsx',
  'app/components/DynamicContentShowcase.tsx',
  'app/components/ErrorBoundary.tsx',
  'app/components/Sidebar.tsx',
  'app/config/errorBoundaryConfig.tsx',
  'app/hooks/useAnalytics.ts',
  'app/micro-saas/page.tsx',
  'app/support/page.tsx'
];

console.log(`Processing ${specificFiles.length} specific files`);

let fixedCount = 0;
for (const file of specificFiles) {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    if (fixUnusedImports(fullPath)) {
      fixedCount++;
    }
  } else {
    console.log(`File not found: ${fullPath}`);
  }
}

console.log(`Fixed ${fixedCount} files`);