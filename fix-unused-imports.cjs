const fs = require('fs');
const path = require('path');

// List of files to fix
const files = [
  'src/ai-analytics-dashboard/page.tsx',
  'src/ai-analytics/page.tsx',
  'src/ai-automation/page.tsx',
  'src/ai-computer-vision/page.tsx',
  'src/ai-content-generation/page.tsx',
  'src/ai-content-studio/page.tsx',
  'src/ai-crm/page.tsx',
  'src/ai-customer-insights/page.tsx',
  'src/ai-customer-support-bot/page.tsx',
  'src/ai-customer-support/page.tsx',
  'src/ai-cybersecurity/page.tsx',
  'src/ai-data-analytics/page.tsx',
  'src/ai-data-visualization/page.tsx',
  'src/ai-design-assistant/page.tsx',
  'src/ai-document-processing/page.tsx',
  'src/ai-document-processor/page.tsx',
  'src/ai-ecommerce-optimizer/page.tsx',
  'src/ai-ecommerce-solutions/page.tsx',
  'src/ai-edge-computing/page.tsx'
];

// Common unused imports to remove
const unusedImports = [
  'ArrowRight', 'Star', 'TrendingUp', 'Cpu', 'Database', 'BarChart', 
  'Code', 'Cloud', 'Users', 'Globe', 'Lock', 'Award', 'Brain', 'Zap', 
  'Shield', 'CheckCircle', 'Mail', 'MapPin', 'Image', 'Target', 'Phone', 
  'Calendar', 'Navigation', 'Footer'
];

files.forEach(filePath => {
  try {
    const fullPath = path.join(process.cwd(), filePath);
    if (fs.existsSync(fullPath)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Find the import line with lucide-react
      const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
      if (importMatch) {
        const currentImports = importMatch[1].split(',').map(imp => imp.trim());
        const usedImports = [];
        
        // Check which imports are actually used in the file
        currentImports.forEach(imp => {
          if (!unusedImports.includes(imp) || content.includes(imp)) {
            usedImports.push(imp);
          }
        });
        
        if (usedImports.length !== currentImports.length) {
          const newImportLine = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
          content = content.replace(importMatch[0], newImportLine);
          
          // Also remove unused component imports
          if (content.includes('Navigation') && !content.includes('<Navigation')) {
            content = content.replace(/import\s+Navigation\s+from\s+['"][^'"]+['"];?\s*\n?/g, '');
          }
          if (content.includes('Footer') && !content.includes('<Footer')) {
            content = content.replace(/import\s+Footer\s+from\s+['"][^'"]+['"];?\s*\n?/g, '');
          }
          
          fs.writeFileSync(fullPath, content);
          console.log(`Fixed ${filePath}`);
        }
      }
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Done fixing unused imports');