#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Fix Link import and usage issues
function fixLinkIssues(content) {
  // Remove duplicate Link imports
  const lines = content.split('\n');
  const linkImportLines = lines.filter(line => 
    line.includes("import { Link }") && line.includes("react-router-dom")
  );
  
  if (linkImportLines.length > 1) {
    // Keep only the first Link import
    let foundFirst = false;
    content = lines.filter(line => {
      if (line.includes("import { Link }") && line.includes("react-router-dom")) {
        if (!foundFirst) {
          foundFirst = true;
          return true;
        }
        return false;
      }
      return true;
    }).join('\n');
  }
  
  // Fix Link usage - replace with regular anchor tags since this appears to be a static site
  content = content.replace(/<Link\s+([^>]*?)href=["']([^"']*?)["']([^>]*?)>/g, '<a $1href="$2"$3>');
  content = content.replace(/<\/Link>/g, '</a>');
  
  return content;
}

// Fix lucide-react icon usage
function fixLucideIcons(content) {
  // Fix icon usage - they should be used as components, not as objects
  const iconNames = [
    'ArrowLeft', 'Calendar', 'User', 'Tag', 'Brain', 'Zap', 'Shield', 'TrendingUp',
    'DollarSign', 'Users', 'Target', 'Map', 'Log', 'BarChart3', 'Globe', 'Rocket',
    'Cpu', 'Bot', 'Share2', 'Bookmark', 'BookOpen', 'CheckCircle', 'ArrowRight'
  ];
  
  iconNames.forEach(iconName => {
    // Fix cases where icons are used as objects instead of components
    const regex = new RegExp(`<${iconName}\\s+`, 'g');
    content = content.replace(regex, `<${iconName} `);
  });
  
  return content;
}

// Process all TypeScript/TSX files
async function processFiles() {
  const files = await glob('app/**/*.{ts,tsx}', { cwd: process.cwd() });
  
  files.forEach(file => {
    try {
      let content = fs.readFileSync(file, 'utf8');
      const originalContent = content;
      
      // Fix Link issues
      content = fixLinkIssues(content);
      
      // Fix lucide icons
      content = fixLucideIcons(content);
      
      // Only write if content changed
      if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed issues in: ${file}`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });
}

processFiles().then(() => {
  console.log('Link and icon fixes completed!');
}).catch(console.error);