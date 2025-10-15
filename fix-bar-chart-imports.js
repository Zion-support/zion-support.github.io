import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files that need BarChart3 added
const filesNeedingBarChart3 = [
  'app/5g-implementation/page.tsx',
  'app/ai-analytics-dashboard-pro/page.tsx',
  'app/ai-customer-support-pro/page.tsx',
  'app/ai-cybersecurity-platform/page.tsx',
  'app/ai-database-solutions/page.tsx',
  'app/ai-ecommerce-platform/page.tsx',
  'app/ai-education-solutions-pro/page.tsx'
];

// Fix BarChart3 imports
filesNeedingBarChart3.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Find the lucide-react import
    const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
    if (importMatch) {
      let currentImports = importMatch[1].split(',').map(imp => imp.trim());
      
      // Add BarChart3 if not already present
      if (!currentImports.includes('BarChart3')) {
        currentImports.push('BarChart3');
        currentImports.sort();
        
        const newImport = `import { \n  ${currentImports.join(',\n  ')}\n} from 'lucide-react';`;
        content = content.replace(importMatch[0], newImport);
        
        fs.writeFileSync(fullPath, content);
        console.log(`Added BarChart3 to ${filePath}`);
      }
    }
  }
});

// Fix duplicate imports in ai-financial-platform
const financialPlatformPath = path.join(__dirname, 'app/ai-financial-platform/page.tsx');
if (fs.existsSync(financialPlatformPath)) {
  let content = fs.readFileSync(financialPlatformPath, 'utf8');
  
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
  
  content = filteredLines.join('\n');
  
  // Also fix unused imports
  const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
  if (importMatch) {
    const currentImports = importMatch[1].split(',').map(imp => imp.trim());
    const usedImports = currentImports.filter(imp => {
      const iconName = imp.split(' as ')[0].trim();
      return content.includes(`<${iconName}`) || ['CheckCircle', 'Star', 'Phone', 'Mail', 'Play'].includes(iconName);
    });
    
    if (usedImports.length > 0) {
      const newImport = `import { \n  ${usedImports.join(',\n  ')}\n} from 'lucide-react';`;
      content = content.replace(importMatch[0], newImport);
    }
  }
  
  fs.writeFileSync(financialPlatformPath, content);
  console.log('Fixed ai-financial-platform duplicate imports');
}

console.log('Fixed BarChart3 imports and duplicate issues');