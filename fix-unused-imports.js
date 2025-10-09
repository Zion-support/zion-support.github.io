import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files with unused imports based on linting output
const filesToFix = [
  {
    file: 'app/ai-crm/page.tsx',
    unused: ['Clock', 'TrendingUp', 'ArrowRight', 'Mail', 'MapPin']
  },
  {
    file: 'app/ai-cybersecurity/page.tsx',
    unused: ['ArrowRight', 'AlertTriangle', 'Database', 'Settings']
  },
  {
    file: 'app/ai-document-processing/page.tsx',
    unused: ['ArrowRight', 'Database', 'Globe', 'Settings']
  },
  {
    file: 'app/ai-lead-generation/page.tsx',
    unused: ['Phone', 'ArrowRight', 'TrendingUp', 'Globe', 'Database']
  },
  {
    file: 'app/ai-scheduler/page.tsx',
    unused: ['Clock', 'ArrowRight', 'Mail', 'MapPin', 'BarChart']
  },
  {
    file: 'app/ai-writing-assistant/page.tsx',
    unused: ['ArrowRight', 'MapPin', 'Users', 'BarChart']
  },
  {
    file: 'app/analytics-tools/page.tsx',
    unused: ['Star', 'Zap', 'Shield', 'Clock', 'Users', 'Globe', 'Cpu', 'MessageSquare', 'Eye', 'Sparkles', 'ArrowRight']
  },
  {
    file: 'app/careers/page.tsx',
    unused: ['Link', 'ArrowRight', 'Users', 'Award', 'Zap']
  },
  {
    file: 'app/components/Navigation.tsx',
    unused: ['Mail', 'MapPin', 'Shield', 'BarChart', 'Users', 'ArrowRight', 'Sparkles', 'Cpu', 'Target', 'Globe', 'Database', 'Smartphone', 'Lock', 'TrendingUp', 'Star', 'Settings', 'Calendar', 'CheckSquare', 'FileText']
  }
];

function fixUnusedImports(filePath, unusedImports) {
  try {
    const fullPath = path.join(__dirname, filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Find the import line with lucide-react
    const importRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/;
    const match = content.match(importRegex);
    
    if (match) {
      const currentImports = match[1].split(',').map(imp => imp.trim());
      const usedImports = currentImports.filter(imp => !unusedImports.includes(imp));
      
      if (usedImports.length > 0) {
        const newImportLine = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
        content = content.replace(importRegex, newImportLine);
      } else {
        // Remove the entire import line if no icons are used
        content = content.replace(importRegex, '');
      }
      
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`Fixed unused imports in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(({ file, unused }) => {
  fixUnusedImports(file, unused);
});

console.log('Unused imports fixed!');