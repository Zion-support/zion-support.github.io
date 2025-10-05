#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Map missing icons to existing ones or remove them
const iconReplacements = {
  'ListChecks': 'CheckCircle',
  'FileWarning': 'AlertTriangle',
  'RefreshCw': 'RefreshCw',
  'Tag': 'Tag',
  'BarChart3': 'BarChart3',
  'Cog': 'Settings',
  'Globe': 'Globe',
  'Rocket': 'Rocket',
  'Cpu': 'Cpu',
  'Share2': 'Share2',
  'Bookmark': 'Bookmark',
  'Bot': 'Bot',
  'BookOpen': 'BookOpen',
  'Gauge': 'Gauge',
  'ShieldCheck': 'ShieldCheck',
  'Atom': 'Atom',
  'Satellite': 'Satellite',
  'Calculator': 'Calculator',
  'Factory': 'Building',
  'Cogs': 'Settings',
  'Star': 'Star',
  'Sparkles': 'Sparkles',
  'ShoppingBag': 'ShoppingBag',
  'Award': 'Award'
};

// Fix missing icons and other issues
function fixMissingIcons(content) {
  // Replace missing icons with existing ones
  Object.entries(iconReplacements).forEach(([missing, replacement]) => {
    // Replace in JSX usage
    content = content.replace(new RegExp(`<${missing}\\s+`, 'g'), `<${replacement} `);
    content = content.replace(new RegExp(`<${missing}>`, 'g'), `<${replacement}>`);
    
    // Replace in imports
    const importRegex = new RegExp(`import\\s+{[^}]*\\b${missing}\\b[^}]*}\\s+from\\s+['"]lucide-react['"];?`, 'g');
    content = content.replace(importRegex, (match) => {
      return match.replace(missing, replacement);
    });
  });
  
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
  
  // Fix icon className issues - remove className from self-closing icon tags
  content = content.replace(/<(\w+)\s+className=["'][^"']*["']\s*\/>/g, '<$1 />');
  
  return content;
}

// Process all TypeScript/TSX files
async function processFiles() {
  const files = await glob('app/**/*.{ts,tsx}', { cwd: process.cwd() });
  
  files.forEach(file => {
    try {
      let content = fs.readFileSync(file, 'utf8');
      const originalContent = content;
      
      // Fix missing icons and other issues
      content = fixMissingIcons(content);
      
      // Only write if content changed
      if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed missing icons in: ${file}`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });
}

processFiles().then(() => {
  console.log('Missing icon fixes completed!');
}).catch(console.error);