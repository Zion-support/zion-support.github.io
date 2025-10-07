#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Fix lucide-react import paths to use the main package
function fixLucideImports(content) {
  // Replace all lucide-react/dist/esm/icons/* imports with lucide-react
  content = content.replace(
    /import\s+{([^}]+)}\s+from\s+['"]lucide-react\/dist\/esm\/icons\/[^'"]+['"];?/g,
    (match, imports) => {
      // Clean up the imports and add them to a single lucide-react import
      const cleanImports = imports.split(',').map(imp => imp.trim()).join(', ');
      return `import { ${cleanImports} } from 'lucide-react';`;
    }
  );

  // Fix individual icon imports
  const iconMappings = {
    'arrowleft': 'ArrowLeft',
    'arrowright': 'ArrowRight', 
    'calendar': 'Calendar',
    'user': 'User',
    'tag': 'Tag',
    'trendingup': 'TrendingUp',
    'dollarsign': 'DollarSign',
    'users': 'Users',
    'target': 'Target',
    'brain': 'Brain',
    'map': 'Map',
    'shield': 'Shield',
    'globe': 'Globe',
    'rocket': 'Rocket',
    'cpu': 'Cpu',
    'bot': 'Bot',
    'share2': 'Share2',
    'bookmark': 'Bookmark',
    'checkcircle': 'CheckCircle',
    'bookopen': 'BookOpen',
    'barchart3': 'BarChart3',
    'auge': 'Gauge',
    'hieldcheck': 'ShieldCheck',
    'ctivity': 'Activity',
    'tom': 'Atom',
    'satellite': 'Satellite',
    'zap': 'Zap',
    'award': 'Award'
  };

  // Fix any remaining individual imports
  Object.entries(iconMappings).forEach(([oldName, newName]) => {
    const regex = new RegExp(`import\\s+{[^}]*}\\s+from\\s+['"]lucide-react/dist/esm/icons/${oldName}['"];?`, 'g');
    content = content.replace(regex, `import { ${newName} } from 'lucide-react';`);
  });

  return content;
}

// Fix duplicate Link imports
function fixDuplicateLinkImports(content) {
  // Remove duplicate Link imports
  const lines = content.split('\n');
  const seenImports = new Set();
  const filteredLines = [];
  
  for (const line of lines) {
    if (line.includes('import') && line.includes('Link')) {
      if (!seenImports.has('Link')) {
        seenImports.add('Link');
        filteredLines.push(line);
      }
    } else {
      filteredLines.push(line);
    }
  }
  
  return filteredLines.join('\n');
}

// Fix Link component usage (to -> href)
function fixLinkUsage(content) {
  // Fix Link component props
  content = content.replace(/<Link\s+to=/g, '<Link href=');
  return content;
}

// Add missing icon imports for case studies
function addMissingIconImports(content) {
  const icons = [
    'ArrowLeft', 'Calendar', 'Clock', 'User', 'DollarSign', 'TrendingUp', 
    'Target', 'Share2', 'Bookmark', 'Brain', 'CheckCircle', 'Rocket', 
    'Satellite', 'Zap', 'Globe', 'Award'
  ];
  
  const usedIcons = icons.filter(icon => content.includes(`<${icon}`) || content.includes(`${icon} `));
  
  if (usedIcons.length > 0 && !content.includes("from 'lucide-react'")) {
    const importLine = `import { ${usedIcons.join(', ')} } from 'lucide-react';\n`;
    const lines = content.split('\n');
    lines.splice(1, 0, importLine);
    return lines.join('\n');
  }
  
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
      
      // Apply all fixes
      content = fixLucideImports(content);
      content = fixDuplicateLinkImports(content);
      content = fixLinkUsage(content);
      content = addMissingIconImports(content);
      
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