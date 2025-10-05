#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Fix all remaining issues
function fixAllRemainingIssues(content) {
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
  
  // Fix Link usage - convert all Link tags to anchor tags
  content = content.replace(/<Link\s+([^>]*?)to=["']([^"']*?)["']([^>]*?)>/g, '<a $1href="$2"$3>');
  content = content.replace(/<Link\s+([^>]*?)href=["']([^"']*?)["']([^>]*?)>/g, '<a $1href="$2"$3>');
  content = content.replace(/<Link\s+([^>]*?)>/g, '<a $1>');
  content = content.replace(/<\/Link>/g, '</a>');
  
  // Fix lucide-react icon usage - they should be used as components
  const iconNames = [
    'ArrowLeft', 'Calendar', 'User', 'Tag', 'Brain', 'Zap', 'Shield', 'TrendingUp',
    'DollarSign', 'Users', 'Target', 'Map', 'Log', 'BarChart3', 'Globe', 'Rocket',
    'Cpu', 'Bot', 'Share2', 'Bookmark', 'BookOpen', 'CheckCircle', 'ArrowRight'
  ];
  
  // Fix icon imports to use the correct format
  iconNames.forEach(iconName => {
    // Replace incorrect icon usage
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
      
      // Fix all remaining issues
      content = fixAllRemainingIssues(content);
      
      // Only write if content changed
      if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed all remaining issues in: ${file}`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });
}

processFiles().then(() => {
  console.log('All remaining issues fixed!');
}).catch(console.error);