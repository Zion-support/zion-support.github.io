import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all page files in the app directory
function getAllPageFiles() {
  const appDir = path.join(__dirname, 'app');
  const files = [];
  
  function scanDir(dir) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDir(fullPath);
      } else if (item === 'page.tsx') {
        files.push(path.relative(__dirname, fullPath));
      }
    }
  }
  
  scanDir(appDir);
  return files;
}

// Check which icons are actually used in a file
function getUsedIcons(content) {
  const usedIcons = new Set();
  
  // Common patterns for icon usage
  const patterns = [
    /<([A-Z][a-zA-Z]+)\s+className="w-[0-9]+ h-[0-9]+"/g,
    /<([A-Z][a-zA-Z]+)\s+className="w-[0-9]+ h-[0-9]+ mr-[0-9]+"/g,
    /<([A-Z][a-zA-Z]+)\s+className="w-[0-9]+ h-[0-9]+ ml-[0-9]+"/g,
    /<([A-Z][a-zA-Z]+)\s+className="w-[0-9]+ h-[0-9]+ text-[a-zA-Z0-9-]+"/g,
    /<([A-Z][a-zA-Z]+)\s+className="w-[0-9]+ h-[0-9]+ fill-current"/g
  ];
  
  patterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      usedIcons.add(match[1]);
    }
  });
  
  return usedIcons;
}

// Fix a single file
function fixFile(filePath) {
  const fullPath = path.join(__dirname, filePath);
  
  if (!fs.existsSync(fullPath)) {
    return;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  const originalContent = content;
  
  // Get used icons
  const usedIcons = getUsedIcons(content);
  
  // Always include these common icons
  const commonIcons = ['CheckCircle', 'Star', 'Phone', 'Mail', 'Play', 'ArrowRight'];
  commonIcons.forEach(icon => usedIcons.add(icon));
  
  // Find and fix lucide-react imports
  const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
  if (importMatch) {
    const currentImports = importMatch[1]
      .split(',')
      .map(imp => imp.trim())
      .filter(imp => imp.length > 0);
    
    // Filter to only used icons
    const filteredImports = currentImports.filter(imp => {
      const iconName = imp.split(' as ')[0].trim();
      return usedIcons.has(iconName);
    });
    
    if (filteredImports.length > 0) {
      const newImport = `import { \n  ${filteredImports.join(',\n  ')}\n} from 'lucide-react';`;
      content = content.replace(importMatch[0], newImport);
    } else {
      // Remove the import if no icons are used
      content = content.replace(importMatch[0], '');
    }
  }
  
  // Fix React imports - remove unused React import
  if (content.includes('import React, { useState, useEffect }') && !content.includes('<React.')) {
    content = content.replace('import React, { useState, useEffect }', 'import { useState, useEffect }');
  }
  
  // Remove unused activeTab variables
  content = content.replace(/const \[activeTab, setActiveTab\] = useState\('overview'\);/g, '');
  content = content.replace(/\/\/ const \[activeTab, setActiveTab\] = useState\('overview'\);/g, '');
  
  // Clean up multiple empty lines
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed ${filePath}`);
  }
}

// Get all page files and fix them
const pageFiles = getAllPageFiles();
console.log(`Found ${pageFiles.length} page files`);

pageFiles.forEach(fixFile);

console.log('Fixed all remaining errors');