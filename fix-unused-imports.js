import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Common unused imports that appear frequently
const commonUnusedImports = [
  'ArrowRight', 'Star', 'TrendingUp', 'Cpu', 'Database', 'BarChart', 
  'Code', 'Cloud', 'Users', 'Globe', 'Lock', 'Award', 'Mail', 'MapPin',
  'Image', 'Zap', 'Shield', 'CheckCircle', 'Phone', 'Calendar', 'Target',
  'Brain', 'Navigation', 'Footer', 'SEOOptimizer'
];

// Files to process
const filesToProcess = [
  'src/ai-ab-testing/page.tsx',
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
  'src/ai-ecommerce-solutions/page.tsx'
];

function cleanUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove unused imports from lucide-react
    const lucideImportMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
    if (lucideImportMatch) {
      const imports = lucideImportMatch[1].split(',').map(imp => imp.trim());
      const usedImports = [];
      
      // Check which imports are actually used in the file
      imports.forEach(imp => {
        if (content.includes(imp) && !imp.includes('//')) {
          usedImports.push(imp);
        }
      });

      if (usedImports.length !== imports.length) {
        const newImport = usedImports.length > 0 
          ? `import { ${usedImports.join(', ')} } from 'lucide-react';`
          : '';
        
        content = content.replace(lucideImportMatch[0], newImport);
        modified = true;
      }
    }

    // Remove unused component imports
    const componentImports = ['Navigation', 'Footer', 'SEOOptimizer'];
    componentImports.forEach(comp => {
      const importRegex = new RegExp(`import\\s+${comp}\\s+from\\s+['"][^'"]+['"];?\\s*`, 'g');
      if (importRegex.test(content) && !content.includes(`<${comp}`) && !content.includes(`${comp}.`)) {
        content = content.replace(importRegex, '');
        modified = true;
      }
    });

    // Remove unused variable declarations
    const unusedVarPatterns = [
      /const\s+(\w+)\s*=\s*React\.FC.*?;\s*/g,
      /const\s+(\w+)\s*=\s*\(\)\s*=>\s*{[\s\S]*?};\s*/g
    ];

    unusedVarPatterns.forEach(pattern => {
      content = content.replace(pattern, (match, varName) => {
        if (!content.includes(varName) || content.indexOf(varName) === content.lastIndexOf(varName)) {
          return '';
        }
        return match;
      });
    });

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Cleaned: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Process all files
filesToProcess.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    cleanUnusedImports(fullPath);
  }
});

console.log('Unused imports cleanup completed!');