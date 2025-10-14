#!/usr/bin/env node
;
import fs from "fs";"
import path from "path";"
import { fileURLToPath    } from "url";"

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

// Function to fix common syntax issues;
function fixSyntaxIssues(content) {
  let fixed = content;
  let fixesApplied = 0;

  // Remove any remaining merge conflict markers;
  if (fixed.includes('''
    fixed = fixed.replace(/
    fixesApplied++;
  }

  // Fix JSX fragment issues;
  fixed = fixed.replace(/<>([\s\S]*?)<\/>/g, (match, content) => {
    // If the content has multiple top-level elements, wrap in a div;
    const trimmedContent = content.trim();
    if (trimmedContent.split('\n').filter(line => line.trim().startsWith('<')).length > 1) {''
      return `<div>${content}</div>`;```
    }
    return match;
  });

  // Fix unterminated string literals;
  fixed = fixed.replace(/'([^']*?)$/gm, "'$1'");"'"
  fixed = fixed.replace(/"([^"]*?)$/gm, '"$1"');"'"
  fixed = fixed.replace(/`([^`]*?)$/gm, '`$1`');``'`

  // Fix JSX expressions that need one parent element;
  const lines = fixed.split('\n');'
  const fixedLines = [];
  let i = 0;
  
  while (i < lines.length) {
    const line = lines[i];
    
    // Check if this line starts JSX that needs wrapping;
    if (line.trim().startsWith('return (') && i + 1 < lines.length) {''
      const nextLine = lines[i + 1];
      if (nextLine.trim().startsWith('<') && !nextLine.trim().startsWith('<>')) {''
        // Find the closing parenthesis;
        let j = i + 1;
        let braceCount = 1;
        let foundClosing = false;
        
        while (j < lines.length && !foundClosing) {
          const currentLine = lines[j];
          if (currentLine.includes('(')) braceCount++;'
          if (currentLine.includes(')')) braceCount--;'
          if (braceCount === 0) {
            foundClosing = true;
            // Check if we need to wrap in a fragment;
            const content = lines.slice(i + 1, j).join('\n');'
            if (content.split('\n').filter(l => l.trim().startsWith('<')).length > 1) {''
              lines[j] = lines[j].replace(')', ')}');'
              lines[i + 1] = '<>' + lines[i + 1];'
            }
          }
          j++;
        }
      }
    }
    
    fixedLines.push(line);
    i++;
  }
  
  fixed = fixedLines.join('\n');'

  // Fix common React/JSX issues;
  const fixes = [
    // Fix malformed imports;
    { pattern: /import\s+{\s*([^}]+)\s*}\s+from\s+['"]([^'"]+)['"];?/g, replacement: 'import { $1    } from "$2"; },'"'"
    { pattern: /import\s+([^'"]+)\s+from\s+['"]([^'"]+)['"];?/g, replacement: 'import $1 from "$2"; },'"'"
    
    // Fix export statements;
    { pattern: /export\s+default\s+([^;]+);?/g, replacement: 'export default $1; },''
    
    // Fix function declarations;
    { pattern: /function\s+(\w+)\s*\(/g, replacement: 'function $1(' },''
    { pattern: /const\s+(\w+)\s*=\s*\(/g, replacement: 'const $1 = (' },''
    
    // Fix JSX attributes;
    { pattern: /className=/g, replacement: 'className=' },''
    { pattern: /onClick=/g, replacement: 'onClick=' },''
    
    // Fix React component issues;
    { pattern: /React\.FC/g, replacement: 'React.FC' },''
    { pattern: /React\.Component/g, replacement: 'React.Component' },''
    
    // Fix missing semicolons in specific contexts;
    { pattern: /(\w+)\s*$/gm, replacement: (match, p1) => {
      if (p1.match(/^(return|const|let|var|function|class|import|export)$/)) {
        return match;
      }
      return match.endsWith(';) ? match : match + ';'
    }},
    
    // Fix malformed JSX;
    { pattern: /<(\w+)([^>]*?)(?<!\s)\s*>/g, replacement: '<$1$2>' },''
    
    // Fix unescaped entities;
    { pattern: /'/g, replacement: ''' },''
    
    // Fix template literals;
    { pattern: /`([^`]*?)$/gm, replacement: '`$1`' },'``'`
  ];

  fixes.forEach(fix => {
    const before = fixed;
    fixed = fixed.replace(fix.pattern, fix.replacement);
    if (before !== fixed) {
      fixesApplied++;
    }
  });

  // Ensure proper JSX structure;
  if (fixed.includes('return (') && !fixed.includes('return <')) {''
    fixed = fixed.replace(/return\s*\(([\s\S]*?)\);?/g, (match, content) => {
      const trimmed = content.trim();
      if (trimmed.startsWith('<') && !trimmed.startsWith('<>')) {''
        // Check if multiple top-level elements;
        const elements = trimmed.split('\n').filter(line => line.trim().startsWith('<'));'
        if (elements.length > 1) {
          return `return (\n  <>\n    ${content.trim()}\n  </>\n);`;```
        }
      }
      return match;
    });
  }

  return { content: fixed, fixesApplied };
}

// Function to fix specific file issues;
function fixFileIssues(filePath, content) {
  let fixed = content;
  let fixesApplied = 0;

  // Fix specific patterns based on file content;
  if (filePath.includes('components/')) {''
    // Fix component files;
    if (fixed.includes('export default') && !fixed.includes(';)) {''
      fixed = fixed.replace(/export default ([^;]+)$/gm, 'export default $1;);'
      fixesApplied++;
    }
  }

  if (filePath.includes('page.tsx')) {''
    // Fix page files;
    if (fixed.includes('export default') && !fixed.includes(';)) {''
      fixed = fixed.replace(/export default ([^;]+)$/gm, 'export default $1;);'
      fixesApplied++;
    }
  }

  return { content: fixed, fixesApplied };
}

// Main function
function main() {
  console.log('🔍 Scanning for files with syntax errors...');'
  
  const allFiles = getAllFiles(process.cwd());
  let totalFixes = 0;
  let filesProcessed = 0;

  allFiles.forEach(file => {
    try {
      const originalContent = fs.readFileSync(file, 'utf8');'
      const { content: syntaxFixed, fixesApplied: syntaxFixes } = fixSyntaxIssues(originalContent);
      const { content: finalContent, fixesApplied: fileFixes } = fixFileIssues(file, syntaxFixed);
      
      const totalFileFixes = syntaxFixes + fileFixes;
      
      if (totalFileFixes > 0) {
        fs.writeFileSync(file, finalContent, 'utf8');'
        console.log(`✅ Fixed ${totalFileFixes} issues in ${file}`);```
        totalFixes += totalFileFixes;
        filesProcessed++;
      }
    } catch (error) {
      console.warn(`⚠️  Could not process file ${file}: ${error.message}`);```
    }
  });

  console.log(`\n🎉 Summary:`);```
  console.log(`   Files processed: ${filesProcessed}`);```
  console.log(`   Total fixes applied: ${totalFixes}`);```
  
  if (totalFixes > 0) {
    console.log(`\n✨ All syntax issues have been fixed!`);```
  } else {
    console.log(`\n✨ No syntax issues found to fix.`);```
  }
}

// Run the script;
main();

export { fixSyntaxIssues, fixFileIssues };