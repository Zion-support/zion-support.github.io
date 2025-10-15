import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files to fix
const filesToFix = [
  'app/ai-analytics-dashboard-pro/page.tsx',
  'app/ai-code-assistant-pro/page.tsx',
  'app/ai-cybersecurity-platform/page.tsx',
  'app/ai-database-solutions/page.tsx',
  'app/ai-ecommerce-platform/page.tsx'
];

// Fix React import issues
function fixReactImports(content) {
  // Remove unused React import if only useState and useEffect are used
  if (content.includes('import React, { useState, useEffect }') && !content.includes('<React.')) {
    content = content.replace('import React, { useState, useEffect }', 'import { useState, useEffect }');
  }
  return content;
}

// Fix unused imports by checking which icons are actually used
function fixUnusedImports(content) {
  // Common patterns to check for icon usage
  const iconUsagePatterns = [
    /<[A-Z][a-zA-Z]+ className="w-[0-9]+ h-[0-9]+"/g,
    /<[A-Z][a-zA-Z]+ className="w-[0-9]+ h-[0-9]+ mr-[0-9]+"/g,
    /<[A-Z][a-zA-Z]+ className="w-[0-9]+ h-[0-9]+ ml-[0-9]+"/g,
    /<[A-Z][a-zA-Z]+ className="w-[0-9]+ h-[0-9]+ text-[a-zA-Z0-9-]+"/g
  ];
  
  // Extract all used icon names
  const usedIcons = new Set();
  iconUsagePatterns.forEach(pattern => {
    const matches = content.match(pattern);
    if (matches) {
      matches.forEach(match => {
        const iconName = match.match(/<([A-Z][a-zA-Z]+)/);
        if (iconName) {
          usedIcons.add(iconName[1]);
        }
      });
    }
  });
  
  // Find the import statement and replace it
  const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
  if (importMatch) {
    const currentImports = importMatch[1].split(',').map(imp => imp.trim());
    const usedImports = currentImports.filter(imp => {
      const iconName = imp.trim();
      return usedIcons.has(iconName) || iconName.includes('ArrowRight') || iconName.includes('CheckCircle') || iconName.includes('Star') || iconName.includes('Phone') || iconName.includes('Mail') || iconName.includes('Play');
    });
    
    if (usedImports.length > 0) {
      const newImport = `import { \n  ${usedImports.join(',\n  ')}\n} from 'lucide-react';`;
      content = content.replace(importMatch[0], newImport);
    }
  }
  
  return content;
}

// Fix duplicate imports
function fixDuplicateImports(content) {
  // Remove duplicate ArrowRight imports
  const lines = content.split('\n');
  const seen = new Set();
  const filteredLines = lines.filter(line => {
    const trimmed = line.trim();
    if (trimmed.includes('ArrowRight') && seen.has('ArrowRight')) {
      return false;
    }
    if (trimmed.includes('ArrowRight')) {
      seen.add('ArrowRight');
    }
    return true;
  });
  return filteredLines.join('\n');
}

// Fix unused variables
function fixUnusedVariables(content) {
  // Remove unused activeTab and setActiveTab
  content = content.replace(/const \[activeTab, setActiveTab\] = useState\('overview'\);/g, '');
  content = content.replace(/\/\/ const \[activeTab, setActiveTab\] = useState\('overview'\);/g, '');
  
  return content;
}

// Process each file
filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Apply fixes
    content = fixReactImports(content);
    content = fixUnusedImports(content);
    content = fixDuplicateImports(content);
    content = fixUnusedVariables(content);
    
    // Clean up empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed ${filePath}`);
  }
});

console.log('Fixed all remaining errors');