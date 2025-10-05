#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Icon name mappings from kebab-case to PascalCase
const iconMappings = {
  'arrow-left': 'ArrowLeft',
  'arrow-right': 'ArrowRight',
  'arrow-up': 'ArrowUp',
  'arrow-down': 'ArrowDown',
  'calendar': 'Calendar',
  'clock': 'Clock',
  'user': 'User',
  'users': 'Users',
  'tag': 'Tag',
  'trending-up': 'TrendingUp',
  'dollar-sign': 'DollarSign',
  'target': 'Target',
  'brain': 'Brain',
  'zap': 'Zap',
  'shield': 'Shield',
  'log': 'Log',
  'bar-chart-3': 'BarChart3',
  'globe': 'Globe',
  'rocket': 'Rocket',
  'bot': 'Bot',
  'share-2': 'Share2',
  'bookmark': 'Bookmark',
  'book-open': 'BookOpen',
  'cpu': 'Cpu',
  'check-circle': 'CheckCircle',
  'list-checks': 'ListChecks',
  'file-warning': 'FileWarning',
  'refresh-cw': 'RefreshCw',
  'gauge': 'Gauge',
  'shield-check': 'ShieldCheck',
  'activity': 'Activity',
  'atom': 'Atom',
  'satellite': 'Satellite',
  'award': 'Award'
};

// Find all TypeScript files with lucide-react import issues
const findFilesWithLucideIssues = () => {
  try {
    const result = execSync('find /workspace/app -name "*.tsx" -type f -exec grep -l "lucide-react" {} \\;', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
    console.log('No files found with lucide-react issues');
    return [];
  }
};

// Fix lucide-react imports in a file
const fixLucideImports = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Find all lucide-react imports
    const importRegex = /import\s+{([^}]+)}\s+from\s+['"]lucide-react['"];?/g;
    const matches = [...content.matchAll(importRegex)];
    
    if (matches.length > 0) {
      // Extract all icon names and convert them
      const allIcons = new Set();
      
      matches.forEach(match => {
        const iconList = match[1].split(',').map(icon => icon.trim());
        iconList.forEach(icon => {
          // Convert kebab-case to PascalCase if needed
          const convertedIcon = iconMappings[icon] || icon;
          allIcons.add(convertedIcon);
        });
      });
      
      if (allIcons.size > 0) {
        // Remove all old lucide-react imports
        content = content.replace(importRegex, '');
        
        // Add the new consolidated import
        const importStatement = `import { ${Array.from(allIcons).join(', ')} } from 'lucide-react';`;
        
        const lines = content.split('\n');
        let insertIndex = 0;
        
        // Find the last import statement
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].startsWith('import ')) {
            insertIndex = i + 1;
          }
        }
        
        lines.splice(insertIndex, 0, importStatement);
        content = lines.join('\n');
        
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed lucide imports in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing file ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const main = () => {
  console.log('Finding files with lucide-react import issues...');
  const files = findFilesWithLucideIssues();
  
  if (files.length === 0) {
    console.log('No files found with lucide-react issues');
    return;
  }

  console.log(`Found ${files.length} files with lucide-react imports`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (fixLucideImports(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed lucide imports in ${fixedCount} files`);
};

main();