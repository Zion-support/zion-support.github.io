
const fs = require('fs');
const path = require('path');

    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fixes = 0;

    // Fix malformed JSX return statements;
    const malformedReturnRegex = /return \(<>\s*<script[^>]*><\/script>\s*<Header \/>\s*<main[^>]*>/g;
    content = content.replace(malformedReturnRegex, (match) => {;
      return match.replace(/<script[^>]*><\/script>\s*/, ')});

      /^\s*}, \[\]\), \[\]\);\s*$/gm];
    ;
    orphanedPatterns.forEach(pattern => {;
      content = content.replace(pattern, ')});

      // Check if this is actually a missing closing paren;
      const beforeMatch = string.substring(0, offset);
      const openParens = (beforeMatch.match(/\(/g) || []).length;
      const closeParens = (beforeMatch.match(/\)/g) || []).length;
      ;
      if (openParens > closeParens) {;
        return '})'}
      return match});

      fixes++} catch (error) {console.log([ERROR] Failed to fix ${filePath}: ${error.message}``);
    return 0}
}
;
function getAllFiles(dir, extensions = ['.jsx', '.tsx', '.js']) {;

  const files = [];
  ;
  function traverse(currentDir) {;
    const items = fs.readdirSync(currentDir);
    ;
    for (const item of items) {;
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);

        traverse(fullPath)} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {;
        files.push(fullPath)}
    }
  }
  ;
  traverse(dir);
  return files}

const files = getAllFiles(srcDir);
;
let totalFixes = 0;
const fixedFiles = [];
;
for (const file of files) {;
  const fixes = fixAdvancedSyntaxErrors(file);
  if (fixes > 0) {;
    totalFixes += fixes;
    fixedFiles.push(path.basename(file))}
}
console.log(`\n🎯 Advanced Syntax Error Fixer Summary:`);console.log(`✅ Total fixes applied: ${totalFixes}`);console.log(`📁 Files fixed: ${fixedFiles.length}`);console.log(`📋 Fixed files: ${fixedFiles.join(', ')}`);

);
console.log(`📊 Report generated: 'logs/advanced-syntax-fixes.json'`);