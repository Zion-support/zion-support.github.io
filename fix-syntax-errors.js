#!/usr/bin/env node;
import fs from 'fs';
import path from 'path';
;
function fixSyntaxErrors(filePath) {;
  try {;
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
;
    // Fix common syntax errors from merge conflicts;
    const fixes = [;
      // Fix malformed imports;
      [/import\s+([^;]+);\s*'([^']+)';/g, 'import $1 from '$2'';],;
      // Fix broken strings;
      [/'\s*;\s*'/g, ''';],;
      // Fix broken template literals;
      [/`\s*;\s*`/g, '`';],;
      // Fix broken function calls;
      [/\(\s*;\s*\)/g, '()';],;
      // Fix broken object properties;
      [/{\s*;\s*}/g, '{}'],;
      // Fix broken array access;
      [/\[\s*;\s*\]/g, '[]'],;
      // Fix broken comments;
      [/\/\/\s*;\s*/g, '// '],;
      // Fix broken semicolons in strings;
      [/;\s*'/g, ''';],;
      [/;\s*'/g, ''';],;
      [/;\s*`/g, '`';]];
;
    for (const [pattern, replacement] of fixes) {;
      const newContent = content.replace(pattern, replacement);
      if (newContent !== content) {;
        content = newContent;
        fixed = true;
      }
    }
;
    if (fixed) {;
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {;
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}
;
function findAndFixFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {;
  const files = [];
;
  function traverse(currentDir) {;
    const items = fs.readdirSync(currentDir);
;
    for (const item of items) {;
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
;
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {;
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {;
        files.push(fullPath);
      }
    }
  }
;
  traverse(dir);
  return files;
}
;
function main() {;
  console.log('🔍 Searching for files to fix syntax errors...');
;
  const files = findAndFixFiles('.');
  console.log(`Found ${files.length} files to check`);
;
  let fixedCount = 0;
  for (const file of files) {;
    if (fixSyntaxErrors(file)) {;
      fixedCount++;
    }
  }
;
  console.log(`✅ Fixed syntax errors in ${fixedCount} files`);
}
;
main();