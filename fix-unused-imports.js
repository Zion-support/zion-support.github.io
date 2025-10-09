import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files with unused imports that need fixing
const filesToFix = [
  'app/ai-content-generation/page.tsx',
  'app/ai-crm/page.tsx',
  'app/ai-cybersecurity/page.tsx',
  'app/ai-document-processing/page.tsx',
  'app/ai-lead-generation/page.tsx',
  'app/ai-scheduler/page.tsx',
  'app/ai-writing-assistant/page.tsx',
  'app/analytics-tools/page.tsx',
  'app/careers/page.tsx',
  'app/components/Navigation.tsx'
];

// Unused imports to remove for each file
const unusedImports = {
  'app/ai-content-generation/page.tsx': ['Star', 'Globe', 'Target', 'MessageSquare', 'ArrowRight'],
  'app/ai-crm/page.tsx': ['Clock', 'TrendingUp', 'ArrowRight', 'Mail', 'MapPin'],
  'app/ai-cybersecurity/page.tsx': ['ArrowRight', 'AlertTriangle', 'Database', 'Settings'],
  'app/ai-document-processing/page.tsx': ['ArrowRight', 'Database', 'Globe', 'Settings'],
  'app/ai-lead-generation/page.tsx': ['Phone', 'ArrowRight', 'TrendingUp', 'Globe', 'Database'],
  'app/ai-scheduler/page.tsx': ['Clock', 'ArrowRight', 'Mail', 'MapPin', 'BarChart'],
  'app/ai-writing-assistant/page.tsx': ['ArrowRight', 'MapPin', 'Users', 'BarChart'],
  'app/analytics-tools/page.tsx': ['Star', 'Zap', 'Shield', 'Clock', 'Users', 'Globe', 'Cpu', 'MessageSquare', 'Eye', 'Sparkles', 'ArrowRight'],
  'app/careers/page.tsx': ['Link', 'ArrowRight', 'Users', 'Award', 'Zap'],
  'app/components/Navigation.tsx': ['Mail', 'MapPin', 'Shield', 'BarChart', 'Users', 'ArrowRight', 'Sparkles', 'Cpu', 'Target', 'Globe', 'Database', 'Smartphone', 'Lock', 'TrendingUp', 'Star', 'Settings', 'Calendar', 'CheckSquare', 'FileText']
};

function removeUnusedImports(filePath, unusedImportsList) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find the import statement with lucide-react
    const importRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/;
    const match = content.match(importRegex);
    
    if (match) {
      const currentImports = match[1].split(',').map(imp => imp.trim());
      const filteredImports = currentImports.filter(imp => !unusedImportsList.includes(imp));
      
      if (filteredImports.length > 0) {
        const newImportStatement = `import { ${filteredImports.join(', ')} } from 'lucide-react';`;
        content = content.replace(importRegex, newImportStatement);
      } else {
        // Remove the entire import line if no imports remain
        content = content.replace(importRegex, '');
      }
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed unused imports in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix each file
filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath) && unusedImports[filePath]) {
    removeUnusedImports(fullPath, unusedImports[filePath]);
  }
});

console.log('Unused imports cleanup completed!');