#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Fix lucide-react imports and Link issues
function fixLucideAndLinks(content) {
  // Remove duplicate Link imports - keep only the first one
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
  
  // Fix lucide-react imports - they should import specific icons
  const iconMappings = {
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
    'Lock': 'Lock'
  };
  
  // Fix individual icon imports
  Object.entries(iconMappings).forEach(([iconName, correctName]) => {
    const regex = new RegExp(`import\\s+${iconName}\\s+from\\s+['"]lucide-react['"];?`, 'g');
    content = content.replace(regex, '');
  });
  
  // Add a single correct import for all icons
  const usedIcons = Object.keys(iconMappings).filter(icon => 
    content.includes(`<${icon}`) || content.includes(`<${icon} `)
  );
  
  if (usedIcons.length > 0) {
    // Remove any existing lucide-react import
    content = content.replace(/import\s+.*?from\s+['"]lucide-react['"];?\s*\n/g, '');
    
    // Add the correct import
    const importStatement = `import { ${usedIcons.join(', ')} } from 'lucide-react';\n`;
    
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
  
  return content;
}

// Process all TypeScript/TSX files
async function processFiles() {
  const files = await glob('app/**/*.{ts,tsx}', { cwd: process.cwd() });
  
  files.forEach(file => {
    try {
      let content = fs.readFileSync(file, 'utf8');
      const originalContent = content;
      
      // Fix lucide and Link issues
      content = fixLucideAndLinks(content);
      
      // Only write if content changed
      if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed lucide and Link issues in: ${file}`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });
}

processFiles().then(() => {
  console.log('Lucide and Link fixes completed!');
}).catch(console.error);