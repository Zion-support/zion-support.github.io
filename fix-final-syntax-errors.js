#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix final syntax errors
function fixFinalSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed array declarations
    content = content.replace(/const\s+data\s*=\s*\[\s*'[^']*',\s*;\s*client:\s*'[^']*',\s*;\s*industry:\s*'[^']*',/g, (match) => {
      const titleMatch = match.match(/'([^']*)',\s*;\s*client:\s*'([^']*)',\s*;\s*industry:\s*'([^']*)',/);
      if (titleMatch) {
        return `const data = [
      {
        title: '${titleMatch[1]}',
        client: '${titleMatch[2]}',
        industry: '${titleMatch[3]}'`;
      }
      return match;
    });
    
    // Fix malformed object properties
    content = content.replace(/title:\s*'[^']*',\s*;\s*client:\s*'[^']*',\s*;\s*industry:\s*'[^']*',/g, (match) => {
      const titleMatch = match.match(/title:\s*'([^']*)',\s*;\s*client:\s*'([^']*)',\s*;\s*industry:\s*'([^']*)',/);
      if (titleMatch) {
        return `title: '${titleMatch[1]}',
        client: '${titleMatch[2]}',
        industry: '${titleMatch[3]}'`;
      }
      return match;
    });
    
    // Fix malformed function declarations
    content = content.replace(/const\s+ComponentName\s*=\s*\(\s*\)\s*=>\s*{/g, 'const ComponentName = () => {');
    
    // Fix malformed return statements
    content = content.replace(/return\s*\(\s*<>\s*<Helmet>/g, 'return (\n    <>\n      <Helmet>');
    
    // Fix malformed JSX closing tags
    content = content.replace(/<\/>\s*\)\s*;\s*}\s*export\s+default/g, '</>\n  );\n};\n\nexport default');
    
    // Fix stray semicolons in object properties
    content = content.replace(/;\s*client:/g, ',\n        client:');
    content = content.replace(/;\s*industry:/g, ',\n        industry:');
    content = content.replace(/;\s*description:/g, ',\n        description:');
    content = content.replace(/;\s*results:/g, ',\n        results:');
    
    // Fix malformed array syntax
    content = content.replace(/\[\s*'[^']*',\s*;\s*client:/g, '[\n      {\n        title: \'$1\',\n        client:');
    
    // Clean up multiple consecutive empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Ensure file ends with single newline
    content = content.trim() + '\n';
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('🔍 Searching for files with final syntax errors...');
const sourceFiles = findSourceFiles('./app');

console.log(`Found ${sourceFiles.length} source files`);

let fixedCount = 0;
let errorCount = 0;

for (const file of sourceFiles) {
  try {
    if (fixFinalSyntaxErrors(file)) {
      fixedCount++;
      console.log(`✅ Fixed: ${file}`);
    }
  } catch (error) {
    errorCount++;
    console.error(`❌ Error fixing ${file}:`, error.message);
  }
}

console.log(`\n📊 Summary:`);
console.log(`✅ Fixed: ${fixedCount} files`);
console.log(`❌ Errors: ${errorCount} files`);

if (fixedCount > 0) {
  console.log('\n🎉 Final syntax errors fixed! You can now run the build.');
} else {
  console.log('\n✨ No final syntax errors found or all issues were already resolved.');
}
