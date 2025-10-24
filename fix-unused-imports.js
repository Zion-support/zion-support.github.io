<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional services coming soon." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Coming Soon
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Professional services coming soon.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact Us
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
=======
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
import { execSync } from 'child_process';

// Function to remove unused imports from a file
function removeUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file doesn't exist or is not a TypeScript/JavaScript file
    if (!fs.existsSync(filePath) || (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts') && !filePath.endsWith('.jsx') && !filePath.endsWith('.js'))) {
      return;
    }

    // Use ESLint to fix unused imports
    try {
      execSync(`npx eslint "${filePath}" --fix --no-eslintrc --config '{"extends": ["@typescript-eslint/recommended"], "parser": "@typescript-eslint/parser", "rules": {"@typescript-eslint/no-unused-vars": "error"}}'`, { 
        stdio: 'pipe',
        cwd: '/workspace'
      });
      console.log(`Fixed unused imports in: ${filePath}`);
    } catch (error) {
      // If ESLint fails, try a simple approach to remove unused imports
      console.log(`ESLint failed for ${filePath}, trying manual approach...`);
      
      // Simple regex to remove unused imports (this is a basic approach)
      const lines = content.split('\n');
      const newLines = lines.filter(line => {
        // Keep import statements that are likely used
        if (line.trim().startsWith('import ')) {
          // Check if any of the imported items are used in the file
          const importMatch = line.match(/import\s*\{([^}]+)\}/);
          if (importMatch) {
            const imports = importMatch[1].split(',').map(imp => imp.trim());
            const isUsed = imports.some(imp => {
              const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim();
              return content.includes(cleanImp) && !line.includes(cleanImp);
            });
            return isUsed || imports.length === 0;
          }
          return true;
        }
        return true;
      });
      
      if (newLines.length !== lines.length) {
        fs.writeFileSync(filePath, newLines.join('\n'));
        console.log(`Manually fixed unused imports in: ${filePath}`);
      }    }
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03b1
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

<<<<<<< HEAD
// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.includes('node_modules') && !file.includes('.git')) {
      findFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Main execution
console.log('Starting to fix unused imports...');

const files = findFiles('/workspace/app');files.forEach(file => {
  removeUnusedImports(file);
});

// Also fix component files
const componentFiles = findFiles('/workspace/app/components');
componentFiles.forEach(file => {
  removeUnusedImports(file);
});

console.log('Finished fixing unused imports.');
>>>>>>> cursor/fix-errors-and-merge-to-main-fbfa
=======
// Process all files
filesToProcess.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    cleanUnusedImports(fullPath);
  }
});

console.log('Unused imports cleanup completed!');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03b1
