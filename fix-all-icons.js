#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Comprehensive icon mapping for lucide-react
const iconMappings = {
  // Standard icons that exist in lucide-react
  'ArrowLeft': 'ArrowLeft',
  'Calendar': 'Calendar', 
  'User': 'User',
  'Tag': 'Tag',
  'TrendingUp': 'TrendingUp',
  'DollarSign': 'DollarSign',
  'Users': 'Users',
  'Target': 'Target',
  'Brain': 'Brain',
  'Zap': 'Zap',
  'Shield': 'Shield',
  'Map': 'Map',
  'Log': 'Log',
  'BarChart3': 'BarChart3',
  'Globe': 'Globe',
  'Rocket': 'Rocket',
  'Cpu': 'Cpu',
  'Bot': 'Bot',
  'Share2': 'Share2',
  'Bookmark': 'Bookmark',
  'BookOpen': 'BookOpen',
  'CheckCircle': 'CheckCircle',
  'ArrowRight': 'ArrowRight',
  'Clock': 'Clock',
  'Lock': 'Lock',
  'Award': 'Award',
  'Calculator': 'Calculator',
  'Satellite': 'Satellite',
  'Cog': 'Cog',
  'Activity': 'Activity',
  'Gauge': 'Gauge',
  'ShieldCheck': 'ShieldCheck',
  'Atom': 'Atom'
};

// Fix all icon and import issues
function fixAllIcons(content) {
  // Remove all existing lucide-react imports
  content = content.replace(/import\s+.*?from\s+['"]lucide-react['"];?\s*\n/g, '');
  content = content.replace(/import\s+.*?from\s+['"]lucide-react\/dist\/esm\/icons\/[^'"]*['"];?\s*\n/g, '');
  
  // Find all used icons in the content
  const usedIcons = new Set();
  Object.keys(iconMappings).forEach(iconName => {
    if (content.includes(`<${iconName}`) || content.includes(`<${iconName} `)) {
      usedIcons.add(iconName);
    }
  });
  
  // Add a single correct import for all used icons
  if (usedIcons.size > 0) {
    const importStatement = `import { ${Array.from(usedIcons).join(', ')} } from 'lucide-react';\n`;
    
    // Find the first import and add after it
    const firstImportMatch = content.match(/import\s+.*?from\s+['"][^'"]+['"];?\s*\n/);
    if (firstImportMatch) {
      content = content.replace(firstImportMatch[0], firstImportMatch[0] + importStatement);
    } else {
      content = importStatement + content;
    }
  }
  
  // Fix Link usage - convert to anchor tags
  content = content.replace(/<Link\s+([^>]*?)to=["']([^"']*?)["']([^>]*?)>/g, '<a $1href="$2"$3>');
  content = content.replace(/<Link\s+([^>]*?)href=["']([^"']*?)["']([^>]*?)>/g, '<a $1href="$2"$3>');
  content = content.replace(/<Link\s+([^>]*?)>/g, '<a $1>');
  content = content.replace(/<\/Link>/g, '</a>');
  
  // Remove duplicate Link imports
  const lines = content.split('\n');
  let foundLinkImport = false;
  const filteredLines = lines.filter(line => {
    if (line.includes("import") && line.includes("Link") && line.includes("from")) {
      if (!foundLinkImport) {
        foundLinkImport = true;
        return true;
      }
      return false;
    }
    return true;
  });
  content = filteredLines.join('\n');
  
  return content;
}

// Process all TypeScript/TSX files
async function processFiles() {
  const files = await glob('app/**/*.{ts,tsx}', { cwd: process.cwd() });
  
  files.forEach(file => {
    try {
      let content = fs.readFileSync(file, 'utf8');
      const originalContent = content;
      
      // Fix all icon and import issues
      content = fixAllIcons(content);
      
      // Only write if content changed
      if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed all icons in: ${file}`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });
}

processFiles().then(() => {
  console.log('All icon fixes completed!');
}).catch(console.error);