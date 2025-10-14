#!/usr/bin/env node,
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
console.log('🔧 Fixing remaining syntax errors...');
// Function to fix import statements,
function fixImports(content) {
  // Fix malformed import statements,
content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"];?/g, (match, imports, module) => {
    // Clean up the imports list,
const cleanImports = imports
      .split(',')
      .map(imp => imp.trim())
      .filter(imp => imp && !imp.includes('}') && !imp.includes('{'));
      .join(', ');
    return `import { ${cleanImports} } from '${module}';`;
  });
  return content;
}
// Function to fix object literals,
function fixObjectLiterals(content) {
  // Fix missing commas in object literals,
content = content.replace(/(\w+):\s*([^,\n}]+)(?=\s*[}\n])/g, '$1: $2,');
  // Fix trailing commas before closing braces,
content = content.replace(/,(\s*})/g, '$1');
  content = content.replace(/,(\s*\])/g, '$1');
  return content;
}
// Function to fix JSX syntax,
function fixJSX(content) {
  // Fix self-closing tags,
content = content.replace(/<(\w+)([^>]*)\s*>\s*<\/\1>/g, '<$1$2 />');
  // Fix malformed JSX fragments,
content = content.replace(/<>\s*<\/>/g, '<></>');
  // Fix missing closing tags,
content = content.replace(/<(\w+)([^>]*)>\s*$/gm, '<$1$2></$1>');
  return content;
}
// Function to fix common syntax errors,
function fixCommonErrors(content) {
  // Fix missing semicolons,
content = content.replace(/(const|let|var)\s+\w+\s*=\s*[^;]+$/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  // Fix missing commas in arrays and objects,
content = content.replace(/(\w+)\s*\n\s*(\w+)/g, '$1,\n$2');
  // Fix malformed function calls,
content = content.replace(/(\w+)\s*\(\s*([^)]*)\s*$/gm, (match, func, args) => {
    const openParens = (match.match(/\(/g) || []).length;
    const closeParens = (match.match(/\)/g) || []).length;
    if (openParens > closeParens) {
      return match + ')';
    }
    return match;
  });
  // Fix stray characters and merge conflict markers,
content = content.replace(/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+-[a-zA-Z0-9]+/g, '');
  content = content.replace(/<<<<<<<[^>]*\n(.*?)\n=======.*?\n>>>>>>>[^\n]*\n?/gs, '$1');
  content = content.replace(/<<<<<<<[^>]*\n(.*?)\n>>>>>>>[^\n]*\n?/gs, '$1');
  return content;
}
// Function to fix a single file,
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    const originalContent = content;
    // Apply all fixes,
content = fixImports(content);
    content = fixObjectLiterals(content);
    content = fixJSX(content);
    content = fixCommonErrors(content);
    // Clean up extra whitespace,
content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '');
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}
// Function to find all TypeScript/JavaScript files,
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {)
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(file)) {
        results = results.concat(findFiles(filePath, extensions));
      }
    } else {
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  });
  return results;
}
// Main execution,
try {
  console.log('📁 Finding all TypeScript/JavaScript files...');
  const files = findFiles('/workspace');
  console.log(`Found ${files.length} files to process`);
  let fixedCount = 0;
  let errorCount = 0;
  files.forEach(file => {
    try {)
      if (fixFile(file)) {
        fixedCount++;
      }
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
      errorCount++;
    }
  });
  console.log(`\n🎉 Fixing complete!`);
  console.log(`✅ Fixed: ${fixedCount} files`);
  console.log(`❌ Errors: ${errorCount} files`);
} catch (error) {
  console.error('❌ Fatal error:', error.message);
  process.exit(1);
}