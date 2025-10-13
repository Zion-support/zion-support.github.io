#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
// Function to fix critical syntax errors
function fixCriticalSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    // Fix duplicate return statements
    content = content.replace(/return\s*\(\s*\n\s*return\s*\(/g, 'return (');
    // Fix extra closing braces and parentheses
    content = content.replace(/\s*\)\s*\}\s*;\s*$/gm, ');');
    content = content.replace(/\s*\)\s*\}\s*$/gm, ');');
    // Fix semicolons in wrong places
    content = content.replace(/;\s*const\s+/g, '\nconst ');
    content = content.replace(/;\s*function\s+/g, '\nfunction ');
    content = content.replace(/;\s*export\s+/g, '\nexport ');
    // Fix missing semicolons after statements
    content = content.replace(/([^;}])\n\s*const\s+/g, '$1;\nconst ');
    content = content.replace(/([^;}])\n\s*let\s+/g, '$1;\nlet ');
    content = content.replace(/([^;}])\n\s*var\s+/g, '$1;\nvar ');
    content = content.replace(/([^;}])\n\s*function\s+/g, '$1;\nfunction ');
    // Fix JSX syntax issues
    content = content.replace(/return\s*\(\s*\n\s*if\s*\(/g, 'if (');
    content = content.replace(/if\s*\([^)]*\)\s*\{\s*;\s*/g, 'if ($1) { ');
    // Fix React component syntax
    content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{\s*;\s*/g, 'const $1: React.FC = () => {');
    // Fix arrow function syntax
    content = content.replace(/=\s*\(\s*\)\s*=>\s*\{\s*;\s*/g, '= () => {');
    // Fix useEffect and other hooks
    content = content.replace(/useEffect\s*\(\s*\(\s*\)\s*=>\s*\{/g, 'useEffect(() => {');
    content = content.replace(/useCallback\s*\(\s*\(\s*\)\s*=>\s*\{/g, 'useCallback(() => {');
    // Fix JSX closing tags
    content = content.replace(/<\/(\w+)>\s*\)\s*\}\s*;\s*$/gm, '</$1>');
    // Fix console.log statements
    content = content.replace(/console\.log\([^)]*\);?\s*\n?/g, '// console.log removed for production\n');
    content = content.replace(/console\.warn\([^)]*\);?\s*\n?/g, '// console.warn removed for production\n');
    content = content.replace(/console\.error\([^)]*\);?\s*\n?/g, '// console.error removed for production\n');
    // Fix unused variables
    content = content.replace(/const\s+__dirname\s*=\s*[^;]+;?\s*\n?/g, '// __dirname removed\n');
    content = content.replace(/const\s+withSentry\s*=\s*[^;]+;?\s*\n?/g, '// withSentry removed\n');
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      modified = true;
    };
    return modified;
  } catch (error) {
    console.error(`Error fixing syntax in ${filePath}:`, error.message);
    return false;
  };
};
// Function to find all TypeScript/JavaScript files in app directory
function findAppFiles(dir) {
  const files = [];
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        searchDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        files.push(fullPath);
      };
    };
  };
  searchDirectory(dir);
  return files;
};
// Main execution
console.log('Starting critical syntax fixes...');
const appDir = path.join(process.cwd(), 'app');
const appFiles = findAppFiles(appDir);
console.log(`Found ${appFiles.length} app files to check`);
let fixedCount = 0;
for (const file of appFiles) {
  if (fixCriticalSyntax(file)) {
    fixedCount++;
    console.log(`Fixed syntax in: ${file}`);
  };
};
console.log(`Fixed syntax in ${fixedCount} files`);
console.log('Critical syntax fixes complete!');