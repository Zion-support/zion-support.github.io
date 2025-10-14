const fs = require('fs');
const path = require('path');

// Files that need function name fixes
const filesToFix = [
  'app/data/services.ts',
  'app/data/servicesData.ts',
  'app/global-error.tsx',
  'app/medical-records-manager/page.tsx',
  'app/not-found.tsx',
  'app/page-backup.tsx',
  'app/page-optimized.tsx',
  'app/service-template.tsx',
  'app/sitemap-page.tsx',
  'app/support/page.tsx',
  'app/types/next.d.ts',
  'app/utils/__tests__/performanceMonitoring.test.ts',
  'app/utils/accessibilityEnhancer.tsx',
  'app/utils/dynamic.tsx',
  'app/utils/errorHandler.tsx',
  'app/utils/image.tsx',
  'app/utils/link.tsx',
  'app/utils/navigation.tsx',
  'app/utils/testRunner.tsx',
  'vite-env.d.ts'
];

function fixFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Get the base name without extension
    const baseName = path.basename(filePath, path.extname(filePath));
    
    // Fix function names that include file extensions
    content = content.replace(new RegExp(`export default function ${baseName}\\.ts\\(\\)`, 'g'), `export default function ${baseName}()`);
    content = content.replace(new RegExp(`export default function ${baseName}\\.tsx\\(\\)`, 'g'), `export default function ${baseName}()`);
    content = content.replace(new RegExp(`export default function ${baseName}\\.js\\(\\)`, 'g'), `export default function ${baseName}()`);
    content = content.replace(new RegExp(`export default function ${baseName}\\.jsx\\(\\)`, 'g'), `export default function ${baseName}()`);
    
    // Fix const declarations
    content = content.replace(new RegExp(`const ${baseName}\\.ts:`, 'g'), `const ${baseName}:`);
    content = content.replace(new RegExp(`const ${baseName}\\.tsx:`, 'g'), `const ${baseName}:`);
    content = content.replace(new RegExp(`const ${baseName}\\.js:`, 'g'), `const ${baseName}:`);
    content = content.replace(new RegExp(`const ${baseName}\\.jsx:`, 'g'), `const ${baseName}:`);
    
    // Fix specific issues
    if (filePath.includes('medical-records-manager')) {
      content = content.replace(/""([^"]*);""/g, '"$1"');
    }
    
    if (filePath.includes('support/page.tsx')) {
      content = content.replace(/,\s*}/g, '\n  }');
    }
    
    if (filePath.includes('types/next.d.ts') || filePath.includes('vite-env.d.ts')) {
      content = content.replace(/declare module "next"\(\s*\)/g, 'declare module "next"');
    }
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);

console.log('Finished fixing function names');