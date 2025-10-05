#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common icon name mappings
const iconMappings = {
  'rrowleft': 'ArrowLeft',
  'alendar': 'Calendar',
  'ser': 'User',
  'ag': 'Tag',
  'rendingup': 'TrendingUp',
  'ollarsign': 'DollarSign',
  'sers': 'Users',
  'arget': 'Target',
  'rain': 'Brain',
  'ap': 'Map',
  'hield': 'Shield',
  'og': 'Log',
  'archart3': 'BarChart3',
  'lobe': 'Globe',
  'ocket': 'Rocket',
  'pu': 'Cpu',
  'ot': 'Bot',
  'hare2': 'Share2',
  'ookmark': 'Bookmark',
  'ookopen': 'BookOpen',
  'heckcircle': 'CheckCircle',
  'rrowright': 'ArrowRight'
};

// Fix lucide-react imports
function fixLucideImports(content) {
  // Fix malformed icon imports
  Object.entries(iconMappings).forEach(([wrong, correct]) => {
    const regex = new RegExp(`from 'lucide-react/dist/esm/icons/${wrong}'`, 'g');
    content = content.replace(regex, `from 'lucide-react'`);
  });
  
  // Fix import statements to use the correct format
  const lucideImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/g;
  content = content.replace(lucideImportRegex, (match, imports) => {
    // Extract icon names and map them to correct names
    const iconNames = imports.split(',').map(name => {
      const trimmed = name.trim();
      const mapped = iconMappings[trimmed] || trimmed;
      return mapped;
    });
    return `import { ${iconNames.join(', ')} } from 'lucide-react'`;
  });
  
  return content;
}

// Add missing Link import
function addLinkImport(content) {
  // Check if Link is used but not imported
  if (content.includes('<Link') && !content.includes("import { Link }")) {
    // Find the first import statement and add Link import
    const importMatch = content.match(/import\s+.*?from\s+['"][^'"]+['"];?\s*\n/);
    if (importMatch) {
      const firstImport = importMatch[0];
      const linkImport = "import { Link } from 'react-router-dom';\n";
      content = content.replace(firstImport, linkImport + firstImport);
    }
  }
  return content;
}

// Process all TypeScript/TSX files
async function processFiles() {
  const files = await glob('app/**/*.{ts,tsx}', { cwd: process.cwd() });
  
  files.forEach(file => {
    try {
      let content = fs.readFileSync(file, 'utf8');
      const originalContent = content;
      
      // Fix lucide imports
      content = fixLucideImports(content);
      
      // Add Link import if needed
      content = addLinkImport(content);
      
      // Only write if content changed
      if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed imports in: ${file}`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });
}

processFiles().then(() => {
  console.log('Import fixes completed!');
}).catch(console.error);