#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common imports that are missing
const commonImports = {
  'react-helmet-async': ['Helmet', 'HelmetProvider'],
  'react-router-dom': ['Link', 'BrowserRouter', 'Routes', 'Route'],
  'lucide-react': [
    'ArrowRight', 'Star', 'Monitor', 'Cloud', 'Users', 'Award', 'CheckCircle',
    'TrendingUp', 'Sparkles', 'Brain', 'PieChart', 'Zap', 'Shield', 'Activity',
    'Clock', 'Target', 'Settings', 'BarChart3', 'Workflow', 'Home', 'Network',
    'Code', 'Phone', 'Mail', 'Smartphone', 'Globe', 'Search', 'Hand', 'Mic',
    'Database', 'Plus', 'Calendar', 'Edit', 'Pause', 'Download', 'Upload',
    'Cpu', 'MapPin', 'Heart', 'Eye', 'Bot', 'Lightbulb', 'TrendingDown',
    'PenTool', 'Video', 'AlertCircle'
  ],
  'framer-motion': ['motion'],
  'react': ['lazy', 'Suspense']
};

// Function to add missing imports to a file
function fixImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file has JSX/TSX content
    if (!content.includes('import') && !content.includes('export')) {
      return false;
    }
    
    // Extract existing imports
    const importLines = content.match(/^import.*$/gm) || [];
    const existingImports = new Set();
    
    importLines.forEach(line => {
      const match = line.match(/import\s*{([^}]+)}/);
      if (match) {
        match[1].split(',').forEach(imp => {
          existingImports.add(imp.trim());
        });
      }
    });
    
    // Find missing imports by checking for undefined variables
    const missingImports = new Map();
    
    Object.entries(commonImports).forEach(([module, imports]) => {
      imports.forEach(importName => {
        // Check if the import is used but not imported
        const regex = new RegExp(`\\b${importName}\\b`, 'g');
        if (regex.test(content) && !existingImports.has(importName)) {
          if (!missingImports.has(module)) {
            missingImports.set(module, []);
          }
          missingImports.set(module, [...missingImports.get(module), importName]);
        }
      });
    });
    
    // Add missing imports
    if (missingImports.size > 0) {
      let newImports = '';
      missingImports.forEach((imports, module) => {
        newImports += `import { ${imports.join(', ')} } from '${module}';\n`;
      });
      
      // Find the last import line to insert after it
      const lastImportIndex = content.lastIndexOf('import');
      if (lastImportIndex !== -1) {
        const lastImportLineEnd = content.indexOf('\n', lastImportIndex);
        content = content.slice(0, lastImportLineEnd + 1) + newImports + content.slice(lastImportLineEnd + 1);
        modified = true;
      }
    }
    
    // Fix common issues
    // Remove unused expressions (lines that are just expressions without assignment)
    content = content.replace(/^(\s*)([a-zA-Z_$][a-zA-Z0-9_$]*\s*\([^)]*\)\s*;?\s*)$/gm, (match, indent, expr) => {
      // Skip if it's a function call that should be kept
      if (expr.includes('console.') || expr.includes('useEffect') || expr.includes('useState')) {
        return match;
      }
      return '';
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  const files = await glob('app/**/*.{ts,tsx}', { cwd: process.cwd() });
  let fixedCount = 0;
  
  console.log(`Found ${files.length} files to process...`);
  
  files.forEach(file => {
    if (fixImports(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

main();