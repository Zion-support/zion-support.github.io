#!/usr/bin/env node;
import fs from "fs";"
import path from "path";"
import { fileURLToPath     } from "url";"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to recursively find all files;
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      // Skip node_modules and other common directories;
      if (!['node_modules', '.git', '.next', 'dist', 'out', 'build'].includes(file)) {''
        getAllFiles(fullPath, arrayOfFiles);
      }
    } else {
      // Only process TypeScript, JavaScript, and JSX files;
      if (file.match(/\.(ts|tsx|js|jsx)$/)) {
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
}

// Function to resolve merge conflicts;
function resolveMergeConflicts(content) {
  const lines = content.split('\n');'
  const resolvedLines = [];
  let i = 0;
  let conflictCount = 0;

  while (i < lines.length) {
    const line = lines[i];
    
        i++;
      }
      // Skip the separator line;
      if (i < lines.length) {
        i++;
      }
      // Skip until we find the end marker;
        // Keep the "incoming" changes (after )""
        resolvedLines.push(lines[i]);
        i++;
      }
      // Skip the end marker;
      if (i < lines.length) {
        i++;
      }
    } else {
      resolvedLines.push(line);
      i++;
    }
  }

  return {
    content: resolvedLines.join('\n'),''
    conflictsResolved: conflictCount;
  };
}

// Function to fix common syntax issues;
function fixSyntaxIssues(content) {
  let fixed = content;
  let fixesApplied = 0;

  // Fix common JSX issues;
  const fixes = [
    // Fix unclosed JSX tags;
    { pattern: /<(\w+)([^>]*?)(?<!\s)\s*>/g, replacement: '<$1$2>' },''
    // Fix missing closing tags (basic cases)
    { pattern: /<(\w+)([^>]*?)>\s*$/gm, replacement: '<$1$2></$1>' },''
    // Fix malformed quotes;
    { pattern: /"/g, replacement: '"' },'"'"
    { pattern: /'/g, replacement: "'" },'"'"
    // Fix common React issues;
    { pattern: /className=/g, replacement: 'className=' },''
    { pattern: /onClick=/g, replacement: 'onClick=' },''
    // Fix import statements;
    { pattern: /import\s+{\s*([^}]+)\s*}\s+from\s+['"]([^'"]+)['"];?/g, replacement: 'import { $1     } from "$2"; },'"'"
    // Fix export statements;
    { pattern: /export\s+default\s+([^;]+);?/g, replacement: 'export default $1; },''
    // Fix function declarations;
    { pattern: /function\s+(\w+)\s*\(/g, replacement: 'function $1(' },''
    // Fix arrow functions;
    { pattern: /const\s+(\w+)\s*=\s*\(/g, replacement: 'const $1 = (' },''
    // Fix missing semicolons;
    { pattern: /(\w+)\s*$/gm, replacement: '$1; },''
    // Fix React component issues;
    { pattern: /React\.FC/g, replacement: 'React.FC' },''
    { pattern: /React\.Component/g, replacement: 'React.Component' },''
  ];

  fixes.forEach(fix => {
    const before = fixed;
    fixed = fixed.replace(fix.pattern, fix.replacement);
    if (before !== fixed) {
      fixesApplied++;
    }
  });

  return { content: fixed, fixesApplied };
}

// Main function;
function main() {
  console.log('🔍 Scanning for files with merge conflicts...');'
  
  const allFiles = getAllFiles(process.cwd());
  const filesWithConflicts = [];
  let totalConflicts = 0;
  let totalFixes = 0;

  // First pass: identify files with conflicts;
  allFiles.forEach(file => {
    try {
      const content = fs.readFileSync(file, 'utf8');'
        filesWithConflicts.push(file);
      }
    } catch (error) {
      console.warn(`⚠️  Could not read file ${file}: ${error.message}`);```
    }
  });

  console.log(`📁 Found ${filesWithConflicts.length} files with merge conflicts`);```

  // Second pass: resolve conflicts;
  filesWithConflicts.forEach(file => {
    try {
      const originalContent = fs.readFileSync(file, 'utf8');'
      const { content: resolvedContent, conflictsResolved } = resolveMergeConflicts(originalContent);
      const { content: finalContent, fixesApplied } = fixSyntaxIssues(resolvedContent);
      
      if (conflictsResolved > 0 || fixesApplied > 0) {
        fs.writeFileSync(file, finalContent, 'utf8');'
        console.log(`✅ Fixed ${conflictsResolved} conflicts and ${fixesApplied} syntax issues in ${file}`);```
        totalConflicts += conflictsResolved;
        totalFixes += fixesApplied;
      }
    } catch (error) {
      console.error(`❌ Error processing ${file}: ${error.message}`);```
    }
  });

  console.log(`\n🎉 Summary:`);```
  console.log(`   Files processed: ${filesWithConflicts.length}`);```
  console.log(`   Merge conflicts resolved: ${totalConflicts}`);```
  console.log(`   Syntax fixes applied: ${totalFixes}`);```
  
  if (totalConflicts > 0 || totalFixes > 0) {
    console.log(`\n✨ All merge conflicts and syntax issues have been resolved!`);```
  } else {
    console.log(`\n✨ No issues found to fix.`);```
  }
}

// Run the script;
main();

export { resolveMergeConflicts, fixSyntaxIssues };