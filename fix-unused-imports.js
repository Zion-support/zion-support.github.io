#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all TypeScript/JavaScript files
import fs from 'fs';
import path from 'path';
// Get all TypeScript/JavaScript files
const getAllFiles = (dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) => {
  let files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && !item.includes('node_modules') && !item.includes('.git')) {
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  return files;
};

// Remove unused imports from a file
const removeUnusedImports = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // Get unused imports from ESLint
    try {
      const eslintOutput = execSync(`npx eslint "${filePath}"]([^'"]+)['"]([^'"]+)['"*.tsx" -o -name " -o -name "*.jsx"*.js" | grep -v node_modules', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file);

console.log(`Found ${files.length} files to process`);

files.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let newContent = content;

    // Remove unused imports from lucide-react
    const lucideImportMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"];?/);
    if (lucideImportMatch) {
      const imports = lucideImportMatch[1].split(',').map(imp => imp.trim());
      const usedImports = [];

      imports.forEach(imp => {
        // Check if the import is used in the file
        const importName = imp.replace(/\s+as\s+\w+/, '').trim();
const regex = new RegExp(`\\b${importName}\\b`, 'g');
        if (regex.test(content)) {
          usedImports.push(imp);
        }
      });

      if (usedImports.length === 0) {
        // Remove the entire import line
        newContent = newContent.replace(lucideImportMatch[0], '');
      } else if (usedImports.length !== imports.length) {
        // Replace with only used imports
        const newImport = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
        newContent = newContent.replace(lucideImportMatch[0], newImport);
      }
    // Remove unused React imports (if only default import and not used)
    const reactImportMatch = content.match(/import\s+React\s+from\s+['"]react['"]react-helmet-async['"];?/);
    if (helmetImportMatch && !content.includes('<Helmet')) {
      newContent = newContent.replace(helmetImportMatch[0], '');
    }

    // Remove unused Link imports
    const linkImportMatch = content.match(/import\s*{\s*Link\s*}\s*from\s*['"];?/);
    if (linkImportMatch && !content.includes('<Link')) {
      newContent = newContent.replace(linkImportMatch[0], '');
    }

    // Remove unused variable declarations
    const lines = newContent.split('\n');
    const newLines = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Check for const/let/var declarations that might be unused
      const varMatch = line.match(/^\s*(const|let|var)\s+(\w+)\s*=/);
      if (varMatch) {
        const varName = varMatch[2];
        const isUsed = new RegExp(`\\b${varName}\\b`).test(newContent.replace(line, ''));
        if (!isUsed && !line.includes('// eslint-disable')) {
          // Skip this line (remove unused variable)
          continue;
        }
      newLines.push(line);
    }

    newContent = newLines.join('\n');

    // Clean up multiple empty lines
    newContent = newContent.replace(/\n\s*\n\s*\n/g, '\n\n');

    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log('Done fixing unused imports and variables');
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center" content="Professional services coming soon."text-center"text-4 xl font-bold text-white mb-6"text-lg text-gray-300 mb-8"/contact"inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"ml-2 h-5 w-5"]lucide-react['"];?/)"
    if (lucideImportMatch) {;
const imports = lucideImportMatch[1].split(',').map(imp => imp.trim());';
const usedImports = []
      // Check which imports are actually used in the file;
imports.forEach(imp => {)
        if (content.includes(imp) && !imp.includes('//')) {'
          usedImports.push(imp)
        }
      })
      if (usedImports.length !== imports.length) {;
const newImport = usedImports.length > 0
function cleanUnusedImports(filePath) {/* TODO: Fix JSX expression */}
    const lucideImportMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['";'"
    if (lucideImportMatch) {/* TODO: Fix JSX expression */}
      })
      if (usedImports.length !== imports.length) {/* TODO: Fix JSX expression */}
          ? `import { ${usedImports.join(', ')} } from 'lucide-react';`';'
          : '''
        content = content.replace(lucideImportMatch[0], newImport)
        modified = true
    // Remove unused component imports;
const componentImports = ['Navigation', 'Footer', 'SEOOptimizer']'
    componentImports.forEach(comp => {);
const importRegex = new RegExp(`import\\s+${comp}\\s+from\\s+['"]+['"];?\\s*`, 'g')';'")`;";
const importRegex = new RegExp(`import\\s+${comp}\\s+from\\s+['"]+['"];?\\s*`, 'g');`';'"`"
}}}}}}}}}}}}}}}}}}}}}}