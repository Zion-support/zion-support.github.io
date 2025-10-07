#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// All the icons that are actually used in the codebase
const allIcons = [
  'ArrowLeft', 'ArrowRight', 'Calendar', 'Clock', 'User', 'Users', 'Tag', 'TrendingUp', 
  'DollarSign', 'Target', 'Brain', 'Map', 'Shield', 'Zap', 'Cpu', 'Bot', 'Share', 
  'Bookmark', 'CheckCircle', 'BookOpen', 'BarChart3', 'Gauge', 'ShieldCheck', 'Activity', 
  'Atom', 'Globe', 'Rocket', 'Satellite', 'Award', 'Cog', 'Cogs', 'Factory', 'Calculator',
  'ListChecks', 'FileWarning', 'RefreshCw', 'Link'
];

// Fix icon names to correct lucide-react names
const iconMappings = {
  'Globe2': 'Globe',
  'RocketIcon': 'Rocket',
  'BookmarkIcon': 'Bookmark',
  'Share2': 'Share'
};

// Clean up imports and add all missing icons
function fixImports(content) {
  const lines = content.split('\n');
  const cleanedLines = [];
  let hasLucideImport = false;
  let hasLinkImport = false;
  let usedIcons = new Set();
  
  // Find all used icons in the content
  allIcons.forEach(icon => {
    if (content.includes(`<${icon}`) || content.includes(`${icon} `) || content.includes(`${icon}`)) {
      usedIcons.add(icon);
    }
  });
  
  // Apply icon name mappings
  usedIcons.forEach(icon => {
    if (iconMappings[icon]) {
      usedIcons.delete(icon);
      usedIcons.add(iconMappings[icon]);
    }
  });
  
  for (const line of lines) {
    if (line.includes('import') && line.includes('lucide-react')) {
      if (!hasLucideImport && usedIcons.size > 0) {
        hasLucideImport = true;
        const iconList = Array.from(usedIcons).sort().join(', ');
        cleanedLines.push(`import { ${iconList} } from 'lucide-react';`);
      }
      // Skip duplicate lucide imports
    } else if (line.includes('import') && line.includes('Link')) {
      if (!hasLinkImport) {
        hasLinkImport = true;
        cleanedLines.push(line);
      }
      // Skip duplicate Link imports
    } else if (line.includes('import') && line.includes('next/link')) {
      if (!hasLinkImport) {
        hasLinkImport = true;
        cleanedLines.push(line);
      }
      // Skip duplicate Link imports
    } else {
      cleanedLines.push(line);
    }
  }
  
  // If we need Link but don't have it, add it
  if (content.includes('<Link') && !hasLinkImport) {
    const insertIndex = cleanedLines.findIndex(line => line.includes('import') && line.includes('react'));
    if (insertIndex !== -1) {
      cleanedLines.splice(insertIndex + 1, 0, "import Link from 'next/link';");
    } else {
      cleanedLines.unshift("import Link from 'next/link';");
    }
  }
  
  return cleanedLines.join('\n');
}

// Fix icon names in the content
function fixIconNames(content) {
  Object.entries(iconMappings).forEach(([oldName, newName]) => {
    content = content.replace(new RegExp(`\\b${oldName}\\b`, 'g'), newName);
  });
  return content;
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
      content = fixImports(content);
      content = fixIconNames(content);
      
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