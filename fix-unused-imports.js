import fs from 'fs';
import path from 'path';
// Get list of files with linting errors;
function getFilesWithErrors() {try {
&1', { encoding: 'utf8'});
    const lines = output.split('\n');
    const files = new Set();

      if (line.includes('error') && line.includes('is defined but never used')) {const match = line.match(/^\/workspace\/([^:]+):/);
        if (match) {
          files.add(match[1]);});

    return Array.from(files);
  } catch (error) {console.log('Error getting files with errors: ', error.message);
    return [];

// Function to remove unused imports from a file
function removeUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
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

    const lines = content.split('\n');
    const newLines = [];
    const usedImports = new Set();

    // First pass: collect all used imports by scanning the file;
    const fileContent = content.toLowerCase();

    // Check for common icon usage patterns;
    const iconPatterns = ['w-6 h-6', 'w-5 h-5', 'w-4 h-4', 'w-8 h-8', 'w-10 h-10',
      'className="', 'text-', 'bg-', 'hover: ', 'focus:'];

    // Check for JSX usage patterns;
    const jsxPatterns = ['
      '
      '
      '
      '];

      // Skip import lines for now;
      if (line.trim().startsWith('import ')) {
        newLines.push(line);
        return;

      // Check if this line uses any imports;
      const lineLower = line.toLowerCase();
      let hasUsedImport = false;

      // Check for icon usage;
        if (lineLower.includes(pattern)) {
          hasUsedImport = true;});

      // Check for JSX usage;
        if (line.includes(pattern)) {hasUsedImport = true;});

      // Check for direct variable usage;
      if (line.includes('Helmet') || line.includes('Link') || line.includes('ArrowRight')) {hasUsedImport = true;

      if (hasUsedImport) {
        newLines.push(line);} else {newLines.push(line);});

    // Now process import lines and remove unused ones;
    const finalLines = [];
    let inImportBlock = false;
    let importLines = [];

      if (line.trim().startsWith('import ')) {if (!inImportBlock) {
          inImportBlock = true;
          importLines = [];
        importLines.push(line);} else {if (inImportBlock) {
          // Process accumulated import lines;
          const processedImports = processImportLines(importLines, newLines.join('\n'));
          finalLines.push(...processedImports);
          inImportBlock = false;
          importLines = [];
        finalLines.push(line);});

    // Handle any remaining import lines;
    if (inImportBlock) {const processedImports = processImportLines(importLines, newLines.join('\n'));
      finalLines.push(...processedImports);

    const newContent = finalLines.join('\n');
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed unused imports in ${filePath}`);

  } catch (error) {console.log(`Error fixing ${filePath}:`, error.message);

function processImportLines(importLines, fullContent) {const result = [];

    // Extract imported names;
    const importMatch = line.match(/import\s+.*?\s+from\s+['"]([^'"]+)['"]/);
    if (!importMatch) {
      result.push(line);
      return;

    const moduleName = importMatch[1];
    const isDefaultImport = line.includes('import React') || line.includes('import { Helmet}') || line.includes('import {Link}');

    if (isDefaultImport) {// For default imports, check if they're used;
      const isUsed = fullContent.includes('React') || fullContent.includes('Helmet') || fullContent.includes('Link');
      if (isUsed) {
        result.push(line);} else {// For named imports, extract the names and check usage;
      const namedImportsMatch = line.match(/import\s*{\s*([^}]+)\s*}/);
      if (namedImportsMatch) {imp.trim());
          const cleanName = imp.replace(/\s+as\s+\w+/, '').trim();
          return fullContent.includes(cleanName);});

 0) {if (usedImports.length === imports.length) {
            result.push(line);} else {const newLine = line.replace(/\{[^}]+\}/, `{${usedImports.join(', ')} }`);
            result.push(newLine);
      } else {result.push(line);});

  return result;

// Main execution
console.log('Starting to fix unused imports...');

  const fullPath = path.join('/workspace', file);
  if (fs.existsSync(fullPath)) {fixUnusedImports(fullPath);});

// Also fix component files
const componentFiles = findFiles('/workspace/app/components');
componentFiles.forEach(file => {
  removeUnusedImports(file);
});

console.log('Finished fixing unused imports.');
// Process all files
filesToProcess.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    cleanUnusedImports(fullPath);
  }
});

console.log('Unused imports cleanup completed!');
