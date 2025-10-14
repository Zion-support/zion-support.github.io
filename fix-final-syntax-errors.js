#!/usr/bin/env node

import fs from "fs";'
import path from "path";'
import { fileURLToPath  } from "url";'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to recursively find all files
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      // Skip node_modules and other common directories
      if (!['node_modules', '.git', '.next', 'dist', 'out', 'build'].includes(file)) {'
        getAllFiles(fullPath, arrayOfFiles);
      }
    } else {
      // Only process TypeScript, JavaScript, and JSX files
      if (file.match(/\.(ts|tsx|js|jsx)$/)) {
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
}

// Function to fix specific syntax issues
function fixSyntaxIssues(content) {
  let fixed = content;
  let fixesApplied = 0;

  // Fix unterminated string literals
  const stringFixes = [
    { pattern: /'([^']*?)$/gm, replacement: "'$1'" },'"
    { pattern: /"([^"]*?)$/gm, replacement: '"$1"' },'"
    { pattern: /`([^`]*?)$/gm, replacement: '`$1`' },'`
  ];

  stringFixes.forEach(fix => {
    const before = fixed;
    fixed = fixed.replace(fix.pattern, fix.replacement);
    if (before !== fixed) {
      fixesApplied++;
    }
  });

  // Fix JSX fragment issues
  if (fixed.includes('<>') && !fixed.includes('</>')) {'
    const lines = fixed.split('\n');'
    let inFragment = false;
    let fragmentStart = -1;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim().startsWith('<>')) {'
        inFragment = true;
        fragmentStart = i;
      } else if (inFragment && line.trim().includes('</div>') && i > fragmentStart + 1) {'
        // Find the last closing div and add fragment close
        lines[i] = line + '\n    </>';'
        inFragment = false;
        fixesApplied++;
        break;
      }
    }
    
    fixed = lines.join('\n');'
  }

  // Fix malformed JSX tags
  const jsxFixes = [
    // Fix self-closing tags
    { pattern: /<(\w+)([^>]*?)(?<!\s)\s*>/g, replacement: '<$1$2>' },'
    // Fix unclosed tags
    { pattern: /<(\w+)([^>]*?)>\s*$/gm, replacement: '<$1$2></$1>' },'
    // Fix malformed closing tags
    { pattern: /<\/\s*>/g, replacement: '</>' },'
  ];

  jsxFixes.forEach(fix => {
    const before = fixed;
    fixed = fixed.replace(fix.pattern, fix.replacement);
    if (before !== fixed) {
      fixesApplied++;
    }
  });

  // Fix malformed imports
  const importFixes = [
    { pattern: /import\s+{\s*([^}]+)\s*}\s+from\s+['"]([^'"]+)['"];?/g, replacement: 'import { $1  } from "$2";' },'"
    { pattern: /import\s+([^'"]+)\s+from\s+['"]([^'"]+)['"];?/g, replacement: 'import $1 from "$2";' },'"
  ];

  importFixes.forEach(fix => {
    const before = fixed;
    fixed = fixed.replace(fix.pattern, fix.replacement);
    if (before !== fixed) {
      fixesApplied++;
    }
  });

  // Fix malformed exports
  const exportFixes = [
    { pattern: /export\s+default\s+([^;]+);?/g, replacement: 'export default $1;' },'
  ];

  exportFixes.forEach(fix => {
    const before = fixed;
    fixed = fixed.replace(fix.pattern, fix.replacement);
    if (before !== fixed) {
      fixesApplied++;
    }
  });

  // Fix malformed function declarations
  const functionFixes = [
    { pattern: /function\s+(\w+)\s*\(/g, replacement: 'function $1(' },'
    { pattern: /const\s+(\w+)\s*=\s*\(/g, replacement: 'const $1 = (' },'
    { pattern: /const\s+(\w+)\s*=\s*async\s*\(/g, replacement: 'const $1 = async (' },'
  ];

  functionFixes.forEach(fix => {
    const before = fixed;
    fixed = fixed.replace(fix.pattern, fix.replacement);
    if (before !== fixed) {
      fixesApplied++;
    }
  });

  // Fix malformed object literals
  const objectFixes = [
    { pattern: /{\s*}/g, replacement: '{}' },'
    { pattern: /{\s*,\s*}/g, replacement: '{}' },'
  ];

  objectFixes.forEach(fix => {
    const before = fixed;
    fixed = fixed.replace(fix.pattern, fix.replacement);
    if (before !== fixed) {
      fixesApplied++;
    }
  });

  // Fix malformed JSX attributes
  const jsxAttributeFixes = [
    { pattern: /className=/g, replacement: 'className=' },'
    { pattern: /onClick=/g, replacement: 'onClick=' },'
    { pattern: /onChange=/g, replacement: 'onChange=' },'
    { pattern: /onSubmit=/g, replacement: 'onSubmit=' },'
  ];

  jsxAttributeFixes.forEach(fix => {
    const before = fixed;
    fixed = fixed.replace(fix.pattern, fix.replacement);
    if (before !== fixed) {
      fixesApplied++;
    }
  });

  // Fix malformed template literals
  const templateFixes = [
    { pattern: /`([^`]*?)\$\{([^}]*?)\}([^`]*?)`/g, replacement: '`$1${$2}$3`' },'`
  ];

  templateFixes.forEach(fix => {
    const before = fixed;
    fixed = fixed.replace(fix.pattern, fix.replacement);
    if (before !== fixed) {
      fixesApplied++;
    }
  });

  // Fix malformed comments
  const commentFixes = [
    { pattern: /\/\*([^*]|\*[^/])*\*\/\s*$/gm, replacement: '' },'
    { pattern: /\/\/.*$/gm, replacement: (match) => match.trim() },
  ];

  commentFixes.forEach(fix => {
    const before = fixed;
    fixed = fixed.replace(fix.pattern, fix.replacement);
    if (before !== fixed) {
      fixesApplied++;
    }
  });

  // Fix extra semicolons
  fixed = fixed.replace(/;+/g, ';');'

  // Fix malformed return statements
  if (fixed.includes('return (') && !fixed.includes('return <')) {'
    fixed = fixed.replace(/return\s*\(([\s\S]*?)\);?/g, (match, content) => {
      const trimmed = content.trim();
      if (trimmed.startsWith('<') && !trimmed.startsWith('<>')) {'
        // Check if multiple top-level elements
        const elements = trimmed.split('\n').filter(line => line.trim().startsWith('<'));'
        if (elements.length > 1) {
          return `return (\n  <>\n    ${content.trim()}\n  </>\n);`;`
        }
      }
      return match;
    });
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
      const { content: fixedContent, fixesApplied } = fixSyntaxIssues(originalContent);
      
      if (fixesApplied > 0) {
        fs.writeFileSync(file, fixedContent, 'utf8');'
        console.log(`✅ Fixed ${fixesApplied} syntax issues in ${file}`);`
        totalFixes += fixesApplied;
        filesProcessed++;
      }
    } catch (error) {
      console.warn(`⚠️  Could not process file ${file}: ${error.message}`);`
    }
  });

  console.log(`\n🎉 Summary:`);`
  console.log(`   Files processed: ${filesProcessed}`);`
  console.log(`   Total fixes applied: ${totalFixes}`);`
  
  if (totalFixes > 0) {
    console.log(`\n✨ All syntax issues have been fixed!`);`
  } else {
    console.log(`\n✨ No syntax issues found to fix.`);`
  }
}

// Run the script
main();

export { fixSyntaxIssues };