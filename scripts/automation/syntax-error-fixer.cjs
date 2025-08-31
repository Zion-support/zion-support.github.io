#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('[INFO] 🔧 Starting syntax error fix automation...');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fixes = 0;

    // Fix duplicate useEffect calls
    const duplicateUseEffectRegex = /useEffect\(\(\) => \{\s*\/\/ TODO: Add dependencies if needed\s*\}, \[\]\);\s*\/\/ TODO: Add dependencies if needed\s*\}, \[\]\);/g;
    content = content.replace(duplicateUseEffectRegex, 'useEffect(() => {\n  // TODO: Add dependencies if needed\n}, []);');

    // Fix malformed JSX with duplicate closing tags
    const malformedJSXRegex = /<\/>\);$/gm;
    content = content.replace(malformedJSXRegex, '</>');

    // Fix script tags with duplicate comments
    const duplicateCommentRegex = /\/\/ TODO: Sanitize content before using \/\/ TODO: Sanitize content before using \/\/ TODO: Sanitize content before using \/\/ TODO: Sanitize content before using \/\/ TODO: Sanitize content before using \/\/ TODO: Sanitize content before using \/\/ TODO: Sanitize content before using \/\/ TODO: Sanitize content before using \/\/ TODO: Sanitize content before using \/\/ TODO: Sanitize content before using/g;
    content = content.replace(duplicateCommentRegex, '// TODO: Sanitize content before using');

    // Fix duplicate semicolons in useEffect
    const duplicateSemicolonRegex = /}, \[\]\);;/g;
    content = content.replace(duplicateSemicolonRegex, '}, []);');

    // Fix malformed useEffect with extra commas
    const malformedUseEffectRegex = /}, \[\]\), \[\]\);/g;
    content = content.replace(malformedUseEffectRegex, '}, []);');

    // Fix orphaned closing braces
    const orphanedBraceRegex = /^\s*}, \[\]\);\s*$/gm;
    content = content.replace(orphanedBraceRegex, '');

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      fixes++;
      console.log(`[INFO] ✅ Fixed syntax errors in ${path.basename(filePath)}`);
    }

    return fixes;
  } catch (error) {
    console.log(`[ERROR] Failed to fix ${filePath}: ${error.message}`);
    return 0;
  }
}

function getAllFiles(dir, extensions = ['.jsx', '.tsx', '.js']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const srcDir = path.join(process.cwd(), 'src');
const files = getAllFiles(srcDir);

let totalFixes = 0;
const fixedFiles = [];

for (const file of files) {
  const fixes = fixSyntaxErrors(file);
  if (fixes > 0) {
    totalFixes += fixes;
    fixedFiles.push(path.basename(file));
  }
}

console.log(`\n🎯 Syntax Error Fixer Summary:`);
console.log(`✅ Total fixes applied: ${totalFixes}`);
console.log(`📁 Files fixed: ${fixedFiles.length}`);
console.log(`📋 Fixed files: ${fixedFiles.join(', ')}`);

// Generate report
const report = {
  timestamp: new Date().toISOString(),
  totalFixes,
  fixedFiles,
  summary: `Fixed ${totalFixes} syntax errors across ${fixedFiles.length} files`
};

const logsDir = path.join(process.cwd(), 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

fs.writeFileSync(
  path.join(logsDir, 'syntax-fixes.json'),
  JSON.stringify(report, null, 2)
);

console.log(`📊 Report generated: logs/syntax-fixes.json`);