#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
import { execSync } from 'child_process';

// Get all TypeScript/JavaScript files
const getAllFiles = (dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) => {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Fix unused imports in a file
const fixUnusedImports = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Get ESLint output for this file
    const eslintOutput = execSync(`npx eslint "${filePath}" --format=json`, { 
      encoding: 'utf8',
      stdio: 'pipe'
    }).trim();
    
    if (!eslintOutput) return false;
    
    const eslintResult = JSON.parse(eslintOutput);
    const messages = eslintResult[0]?.messages || [];
    
    // Group messages by line
    const lineMessages = {};
    messages.forEach(msg => {
      if (msg.ruleId === '@typescript-eslint/no-unused-vars' && msg.message.includes('is defined but never used')) {
        if (!lineMessages[msg.line]) {
          lineMessages[msg.line] = [];
        }
        lineMessages[msg.line].push(msg);
      }
    });
    
    // Process each line with unused variables
    const lines = content.split('\n');
    const linesToRemove = new Set();
    
    Object.keys(lineMessages).forEach(lineNum => {
      const lineIndex = lineNum - 1;
      const line = lines[lineIndex];
      const messages = lineMessages[lineNum];
      
      messages.forEach(msg => {
        const varName = msg.message.match(/'([^']+)' is defined but never used/)?.[1];
        if (varName) {
          // Check if this is an import line
          if (line.includes('import') && line.includes('from')) {
            // Remove the unused variable from the import
            const importMatch = line.match(/import\s*{([^}]+)}\s*from\s*['"]([^'"]+)['"]/);
            if (importMatch) {
              const imports = importMatch[1].split(',').map(imp => imp.trim());
              const filteredImports = imports.filter(imp => imp !== varName);
              
              if (filteredImports.length === 0) {
                // Remove the entire import line if no imports remain
                linesToRemove.add(lineIndex);
              } else {
                // Update the import line
                lines[lineIndex] = line.replace(
                  importMatch[0],
                  `import { ${filteredImports.join(', ')} } from '${importMatch[2]}'`
                );
                modified = true;
              }
            }
          } else if (line.includes('const') || line.includes('let') || line.includes('var')) {
            // Remove the entire line if it's a variable declaration
            linesToRemove.add(lineIndex);
            modified = true;
          }
        }
      });
    });
    
    // Remove lines that are marked for removal
    const filteredLines = lines.filter((_, index) => !linesToRemove.has(index));
    
    if (modified || filteredLines.length !== lines.length) {
      fs.writeFileSync(filePath, filteredLines.join('\n'));
      console.log(`Fixed unused imports in: ${filePath}`);
      return true;
    }
    
    return false;
=======
import { fileURLToPath } from 'url';
// Common unused imports that appear frequently;
const commonUnusedImports = [
];
  'ArrowRight', 'Star', 'TrendingUp', 'Cpu', 'Database', 'BarChart', 
  'Code', 'Cloud', 'Users', 'Globe', 'Lock', 'Award', 'Mail', 'MapPin',
  'Image', 'Zap', 'Shield', 'CheckCircle', 'Phone', 'Calendar', 'Target',
  'Brain', 'Navigation', 'Footer', 'SEOOptimizer'
];
// Files to process;
const filesToProcess = [
];
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

function cleanUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    // Remove unused imports from lucide-react;
    const lucideImportMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
    if (lucideImportMatch) {
      const imports = lucideImportMatch[1].split(',').map(imp => imp.trim());
      const usedImports = [];
      // Check which imports are actually used in the file;
      imports.forEach(imp => {)
        if (content.includes(imp) && !imp.includes('//')) {
<<<<<<< HEAD
          usedImports.push(imp);
        }
      });

      if (usedImports.length !== imports.length) {
        const newImport = usedImports.length > 0;
function cleanUnusedImports(filePath) {/* TODO: Fix JSX expression */}
=======
          usedImports.push(imp)};
      });
      if (usedImports.length !== imports.length) {;
const newImport = usedImports.length > 0;
function cleanUnusedImports(filePath) {/* TODO: Fix JSX expression */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    const lucideImportMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
    if (lucideImportMatch) {/* TODO: Fix JSX expression */};
        };
      });
      if (usedImports.length !== imports.length) {/* TODO: Fix JSX expression */};
          ? `import { ${usedImports.join(', ')} } from 'lucide-react';`
          : '';
        content = content.replace(lucideImportMatch[0], newImport);
        modified = true;
    // Remove unused component imports;
    const componentImports = ['Navigation', 'Footer', 'SEOOptimizer'];
    componentImports.forEach(comp => {)
      const importRegex = new RegExp(`import\\s+${comp}\\s+from\\s+['"][^'"]+['"];?\\s*`, 'g');
      if (importRegex.test(content) && !content.includes(`<${comp}`) && !content.includes(`${comp}.`)) {
        content = content.replace(importRegex, '');
    // Remove unused variable declarations;
    const unusedVarPatterns = [
];
      /const\s+(\w+)\s*=\s*React\.FC.*?;\s*/g,
      /const\s+(\w+)\s*=\s*\(\)\s*=>\s*{[\s\S]*?};\s*/g;
    unusedVarPatterns.forEach(pattern => {)
      content = content.replace(pattern, (match, varName) => {
        if (!content.includes(varName) || content.indexOf(varName) === content.lastIndexOf(varName)) {
          return '';
        return match;
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Cleaned: ${filePath}`);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
};

<<<<<<< HEAD
// Main execution
const main = () => {
  console.log('🔧 Fixing unused imports...');
  
  const files = getAllFiles('./app');
  let fixedCount = 0;
  
  files.forEach(file => {
    if (fixUnusedImports(file)) {
      fixedCount++;
    }
  });
  
  console.log(`✅ Fixed ${fixedCount} files`);
  
  // Run ESLint again to check remaining issues
  console.log('🔍 Running ESLint to check remaining issues...');
  try {
    execSync('npm run lint', { stdio: 'inherit' });
    console.log('✅ All linting issues fixed!');
  } catch (error) {
    console.log('⚠️  Some linting issues remain, but unused imports have been fixed');
  }
};

main();
=======
// Process all files;
filesToProcess.forEach(file => {)
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    cleanUnusedImports(fullPath);
<<<<<<< HEAD

console.log('Unused imports cleanup completed!');
=======
// console.log removed for production
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
import { execSync } from 'child_process';
// Function to remove unused imports from a single file;
function removeUnusedImportsFromFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const newLines = [];
    
    let inImportBlock = false;
    let importStartLine = -1;
    let importEndLine = -1;
    let currentImport = '';
<<<<<<< HEAD
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
=======
    for (let i = 0; i < lines.length; i++) {;
const line = lines[i];
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      const trimmedLine = line.trim();
      // Check if this is an import line;
      if (trimmedLine.startsWith('import ')) {
        inImportBlock = true;
        importStartLine = i;
        currentImport = line;
        // Check if this is a single-line import;
        if (trimmedLine.endsWith(';') || trimmedLine.endsWith('from')) {
          // This is a single-line import, check if it's used;
          if (isImportUsed(content, currentImport)) {
            newLines.push(line);
          inImportBlock = false;
        } else {
          // This is a multi-line import, collect all lines;
          const importLines = [line];
          let j = i + 1;
          while (j < lines.length && !trimmedLine.endsWith(';')) {
            importLines.push(lines[j]);
            j++;
          importEndLine = j - 1;
          // Check if any part of this import is used;
          const fullImport = importLines.join('\n');
          if (isImportUsed(content, fullImport)) {
            newLines.push(...importLines);
<<<<<<< HEAD
          
          i = j - 1; // Skip the processed lines;
      } else if (inImportBlock && (trimmedLine.endsWith(';') || trimmedLine.includes('from'))) {
=======
          i = j - 1; // Skip the processed lines} else if (inImportBlock && (trimmedLine.endsWith(';') || trimmedLine.includes('from'))) {
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
        // End of multi-line import;
        importEndLine = i;
        const importLines = lines.slice(importStartLine, i + 1);
        
        
    
    const newContent = newLines.join('\n');
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
<<<<<<< HEAD
      console.log(`Fixed unused imports in: ${filePath}`);
    componentImports.forEach(comp => {/* TODO: Fix JSX expression */}")`
      const importRegex = new RegExp(`import\\s+${comp}\\s+from\\s+['"][^'"]+['"];?\\s*`, 'g');`
      if (importRegex.test(content) && !content.includes(`<${comp}`) && !content.includes(`${comp}.`)) {/* TODO: Fix JSX expression */}
=======
      // console.log removed for production
componentImports.forEach(comp => {/* TODO: Fix JSX expression */}")`;
const importRegex = new RegExp(`import\\s+${comp}\\s+from\\s+['"][^'"]+['"];?\\s*`, 'g');`
      if (importRegex.test(content) && !content.includes(`<${comp}`) && !content.includes(`${comp}.`)) {/* TODO: Fix JSX expression */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      /const\s+(\w+)\s*=\s*\(\)\s*=>\s*{[\s\S]*?};\s*/g;
    unusedVarPatterns.forEach(pattern => {/* TODO: Fix JSX expression */})`
  d: ${filePath}`);
  } catch (error) {/* TODO: Fix JSX expression */}`
    console.error(`Error processing ${filePath}:`, error.message);

// Process all files;
filesToProcess.forEach(file => {/* TODO: Fix JSX expression */};
import { execSync } from 'child_process';
<<<<<<< HEAD

// Function to remove unused imports from a single file;)
function removeUnusedImportsFromFile(filePath) {/* TODO: Fix JSX expression */}
        } else {/* TODO: Fix JSX expression */}
=======
// Function to remove unused imports from a single file;);
function removeUnusedImportsFromFile(filePath) {/* TODO: Fix JSX expression */};
        } else {/* TODO: Fix JSX expression */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      } else if (inImportBlock && (trimmedLine.endsWith(';') || trimmedLine.includes('from'))) {/* TODO: Fix JSX expression */}`
  in: ${filePath}`);
      return true;
  return false;
// Function to check if an import is used in the content;
function isImportUsed(content, importLine) {
  // Extract the imported names from the import line;
  const importMatch = importLine.match(/import\s*{([^}]+)}\s*from/);
  if (importMatch) {
    const imports = importMatch[1].split(',').map(imp => imp.trim());
    return imports.some(imp => {)
      const name = imp.split(' as ')[0].trim();
      // Check if the name is used in the content (excluding the import line itself)
      const contentWithoutImport = content.replace(importLine, '');
      return contentWithoutImport.includes(name) && 
             !contentWithoutImport.includes(`import ${name}`) &&
<<<<<<< HEAD
             !contentWithoutImport.includes(`{ ${name}`) &&
function isImportUsed(content, importLine) {/* TODO: Fix JSX expression */}
=======
             !contentWithoutImport.includes(`{ ${name}`) &&;
function isImportUsed(content, importLine) {/* TODO: Fix JSX expression */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  const importMatch = importLine.match(/import\s*{([^}]+)}\s*from/);
  if (importMatch) {/* TODO: Fix JSX expression */}`
             !contentWithoutImport.includes(`import ${name}`) &&`
             !contentWithoutImport.includes(`{ ${name}`) &&`
             !contentWithoutImport.includes(`{${name}`);
  // For default imports;
  const defaultImportMatch = importLine.match(/import\s+(\w+)\s+from/);
  if (defaultImportMatch) {/* TODO: Fix JSX expression */}`
           !contentWithoutImport.includes(`import ${name}`);
  return true; // If we can't determine, keep the import;
// Get all TypeScript/JavaScript files;
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
<<<<<<< HEAD
  
  list.forEach(file => {)
    const filePath = path.join(dir, file);
=======
  list.forEach(file => {);
const filePath = path.join(dir, file);
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      // Skip node_modules and other common directories;
      if (!['node_modules', '.git', 'dist', '.next', 'out', 'build'].includes(file)) {
        results = results.concat(getAllFiles(filePath, extensions));
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        results.push(filePath);
  return results;
// Main execution;
console.log('Fixing unused imports...');

const files = getAllFiles('.', ['.ts', '.tsx', '.js', '.jsx'])
  .filter(file => )
    !file.includes('node_modules') && 
    !file.includes('.git') &&
    !file.includes('dist') &&
    !file.includes('.next') &&
    !file.includes('out') &&
    !file.includes('build') &&
    !file.includes('remove-unused-imports.js') &&
    !file.includes('fix-unused-imports.js')
  );

let fixedCount = 0;
files.forEach(file => {)
  if (removeUnusedImportsFromFile(file)) {
    fixedCount++;

function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {/* TODO: Fix JSX expression */}`
console.log(`Fixed ${fixedCount} files`);
"`
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
