#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Files that need import order fixes
const filesToFix = [
  'app/blog/ai-2026-agent-platform-operations/page.tsx',
  'app/blog/ai-2026-multimodal-agents-enterprise-blueprint/page.tsx',
  'app/blog/ai-2026-secure-agent-architecture/page.tsx',
  'app/components/ErrorBoundary.tsx',
  'app/components/Navigation.tsx',
  'app/components/ScrollToTop.tsx',
  'app/components/Testimonials.tsx'
];

function fixImportOrder(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    const lines = content.split('\n');
    const newLines = [];
    
    let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      
      // Check if this is an import line
      if (line.trim().startsWith('import ')) {
        newLines.push(line);
        i++;
        
        // Look for the next non-import line
        while (i < lines.length && lines[i].trim().startsWith('import ')) {
          newLines.push(lines[i]);
          i++;
        }
        
        // Add empty line after import group if next line is not empty
        if (i < lines.length && lines[i].trim() !== '' && !lines[i].trim().startsWith('//')) {
          newLines.push('');
        }
      } else {
        newLines.push(line);
        i++;
      }
    }
    
    const newContent = newLines.join('\n');
    if (newContent !== content) {
      fs.writeFileSync(fullPath, newContent);
      console.log(`Fixed import order in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixImportOrder);

console.log('Import order fixes completed!');