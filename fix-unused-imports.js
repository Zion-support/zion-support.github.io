import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of files with unused imports and their unused imports
const filesToFix = [
  {
    file: 'app/ai-data-visualizer/page.tsx',
    unused: ['CogIcon', 'ArrowRightIcon', 'CurrencyDollarIcon', 'ClockIcon', 'ShieldCheckIcon']
  },
  {
    file: 'app/ai-email-optimizer/page.tsx',
    unused: ['EnvelopeIcon', 'CogIcon', 'ArrowRightIcon', 'CurrencyDollarIcon', 'ClockIcon']
  },
  {
    file: 'app/expense-tracker-pro/page.tsx',
    unused: ['CurrencyDollarIcon', 'CogIcon', 'ArrowRightIcon', 'ClockIcon', 'ShieldCheckIcon', 'EyeIcon']
  },
  {
    file: 'app/it-solutions/page.tsx',
    unused: ['CogIcon', 'ArrowRightIcon', 'CurrencyDollarIcon', 'ClockIcon', 'CpuChipIcon', 'EyeIcon', 'RocketLaunchIcon', 'ChartBarIcon']
  },
  {
    file: 'app/social-media-scheduler/page.tsx',
    unused: ['CogIcon', 'ArrowRightIcon', 'CurrencyDollarIcon', 'ClockIcon', 'ShieldCheckIcon', 'EyeIcon']
  }
];

function removeUnusedImports(filePath, unusedImports) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find the import statement
    const importRegex = /import\s*\{([^}]+)\}\s*from\s*['"]@heroicons\/react\/24\/outline['"];?/g;
    const match = importRegex.exec(content);
    
    if (match) {
      const importContent = match[1];
      const imports = importContent.split(',').map(imp => imp.trim());
      
      // Remove unused imports
      const filteredImports = imports.filter(imp => {
        const cleanImp = imp.replace(/\s+/g, ' ').trim();
        return !unusedImports.some(unused => cleanImp.includes(unused));
      });
      
      if (filteredImports.length > 0) {
        const newImport = `import {\n  ${filteredImports.join(',\n  ')}\n} from '@heroicons/react/24/outline';`;
        content = content.replace(importRegex, newImport);
      } else {
        // Remove the entire import line if no imports remain
        content = content.replace(importRegex, '');
      }
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed unused imports in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(({ file, unused }) => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    removeUnusedImports(fullPath, unused);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log('Unused imports fixed!');