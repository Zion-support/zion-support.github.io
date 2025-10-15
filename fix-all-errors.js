#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Common icon imports that are frequently used
const commonIcons = [
  'ArrowRight', 'TestTube', 'Target', 'CheckCircle', 'Globe', 'Bug', 'Zap', 
  'BarChart3', 'Clock', 'Shield', 'Settings', 'Mail', 'TrendingUp', 'Database', 
  'Eye', 'Users', 'FileText', 'Star', 'Play', 'Pause', 'RefreshCw', 'Download',
  'Upload', 'Search', 'Filter', 'Menu', 'X', 'Plus', 'Minus', 'Edit', 'Trash2',
  'Save', 'Copy', 'Share', 'Heart', 'ThumbsUp', 'MessageCircle', 'Phone',
  'MapPin', 'Calendar', 'Clock', 'User', 'Users', 'Building', 'Home', 'Laptop',
  'Smartphone', 'Tablet', 'Monitor', 'Server', 'Cloud', 'Wifi', 'Bluetooth',
  'Battery', 'Charging', 'Volume', 'VolumeX', 'Camera', 'Video', 'Image',
  'File', 'Folder', 'Archive', 'Lock', 'Unlock', 'Key', 'Shield', 'AlertTriangle',
  'AlertCircle', 'Info', 'HelpCircle', 'Check', 'XCircle', 'MinusCircle',
  'PlusCircle', 'Circle', 'Square', 'Triangle', 'Hexagon', 'Octagon'
];

// Get all TypeScript/JSX files in the app directory
function getAllTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Extract used icons from a file
function extractUsedIcons(content) {
  const iconMatches = content.match(/<(\w+)\s+className/g);
  if (!iconMatches) return [];
  
  const usedIcons = new Set();
  iconMatches.forEach(match => {
    const iconName = match.match(/<(\w+)\s+className/)[1];
    if (commonIcons.includes(iconName)) {
      usedIcons.add(iconName);
    }
  });
  
  return Array.from(usedIcons);
}

// Fix imports in a file
function fixImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if it's a script file
    if (filePath.includes('scripts/') || filePath.includes('.js') || filePath.includes('.cjs')) {
      return;
    }
    
    // Extract used icons
    const usedIcons = extractUsedIcons(content);
    
    if (usedIcons.length === 0) return;
    
    // Check if lucide-react is already imported
    const hasLucideImport = content.includes("from 'lucide-react'");
    
    if (hasLucideImport) {
      // Update existing import
      const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
      if (importMatch) {
        const existingIcons = importMatch[1].split(',').map(icon => icon.trim());
        const allIcons = [...new Set([...existingIcons, ...usedIcons])].sort();
        const newImport = `import { ${allIcons.join(', ')} } from 'lucide-react';`;
        content = content.replace(importMatch[0], newImport);
      }
    } else {
      // Add new import
      const sortedIcons = usedIcons.sort();
      const newImport = `import { ${sortedIcons.join(', ')} } from 'lucide-react';\n`;
      
      // Find the best place to insert the import
      const lines = content.split('\n');
      let insertIndex = 0;
      
      // Look for existing imports
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('import ')) {
          insertIndex = i + 1;
        } else if (lines[i].trim() === '' && insertIndex > 0) {
          break;
        }
      }
      
      lines.splice(insertIndex, 0, newImport);
      content = lines.join('\n');
    }
    
    // Fix unescaped entities
    content = content.replace(/'/g, '&apos;');
    content = content.replace(/"/g, '&quot;');
    
    // Fix malformed JSX structure (like the early return issue)
    if (content.includes('export default function') && content.includes('return;')) {
      // This is a malformed file, try to fix it
      const functionMatch = content.match(/export default function\s+(\w+)\s*\(\s*\)\s*{\s*return;\s*},?\s*(\[.*?\])/s);
      if (functionMatch) {
        const functionName = functionMatch[1];
        const arrayContent = functionMatch[2];
        
        // Reconstruct the function properly
        const beforeFunction = content.substring(0, content.indexOf('export default function'));
        const afterArray = content.substring(content.indexOf(arrayContent) + arrayContent.length);
        
        content = beforeFunction + 
          `export default function ${functionName}() {\n` +
          `  const features = ${arrayContent};\n` +
          afterArray;
      }
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed imports in: ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Main execution
console.log('Starting comprehensive error fix...');

const appDir = path.join(__dirname, 'app');
const files = getAllTsxFiles(appDir);

console.log(`Found ${files.length} files to process`);

files.forEach(file => {
  fixImports(file);
});

console.log('Error fixing completed!');