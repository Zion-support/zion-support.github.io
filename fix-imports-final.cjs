#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Clean up duplicate imports and fix icon names
function cleanImports(content) {
  const lines = content.split('\n');
  const cleanedLines = [];
  const seenImports = new Set();
  let hasLucideImport = false;
  let lucideIcons = new Set();
  
  for (const line of lines) {
    if (line.includes('import') && line.includes('lucide-react')) {
      if (!hasLucideImport) {
        hasLucideImport = true;
        // Extract all icons from this line
        const match = line.match(/\{([^}]+)\}/);
        if (match) {
          const icons = match[1].split(',').map(icon => icon.trim());
          icons.forEach(icon => lucideIcons.add(icon));
        }
        cleanedLines.push(line);
      }
      // Skip duplicate lucide imports
    } else if (line.includes('import') && line.includes('Link')) {
      if (!seenImports.has('Link')) {
        seenImports.add('Link');
        cleanedLines.push(line);
      }
      // Skip duplicate Link imports
    } else {
      cleanedLines.push(line);
    }
  }
  
  // Fix icon names that don't exist in lucide-react
  const iconMappings = {
    'Globe': 'Globe2',
    'Rocket': 'RocketIcon', 
    'Share2': 'Share',
    'Bookmark': 'BookmarkIcon'
  };
  
  let result = cleanedLines.join('\n');
  
  // Replace incorrect icon names
  Object.entries(iconMappings).forEach(([oldName, newName]) => {
    result = result.replace(new RegExp(`\\b${oldName}\\b`, 'g'), newName);
  });
  
  return result;
}

// Remove individual icon imports that are now in the main import
function removeIndividualImports(content) {
  // Remove lines that import individual icons from lucide-react/dist/esm/icons/*
  return content.replace(/import\s+{[^}]+}\s+from\s+['"]lucide-react\/dist\/esm\/icons\/[^'"]+['"];?\n?/g, '');
}

// Process all TypeScript/JSX files
async function processFiles() {
  const files = await glob('app/**/*.{ts,tsx}', { cwd: process.cwd() });
  
  let fixedCount = 0;
  
  files.forEach(file => {
    try {
      const filePath = path.join(process.cwd(), file);
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      // Apply fixes
      content = cleanImports(content);
      content = removeIndividualImports(content);
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed: ${file}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });
  
  console.log(`\nFixed ${fixedCount} files`);
}

processFiles().catch(console.error);