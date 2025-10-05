#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix corrupted import statements
function fixCorruptedImports(content) {
  // Fix import statements with commas
  content = content.replace(/impo, r, t\s+/g, 'import ');
  content = content.replace(/import,\s+/g, 'import ');
  content = content.replace(/fr, o, m\s+/g, 'from ');
  content = content.replace(/from,\s+/g, 'from ');
  content = content.replace(/\{\s*([^}]+)\s*\}\s*fr, o, m/g, '{$1} from');
  content = content.replace(/\{\s*([^}]+)\s*,\s*\}\s*fr, o, m/g, '{$1} from');
  
  // Fix other common corrupted patterns
  content = content.replace(/const,\s+/g, 'const ');
  content = content.replace(/interface,\s+/g, 'interface ');
  content = content.replace(/class,\s+/g, 'class ');
  content = content.replace(/extends,\s+/g, 'extends ');
  content = content.replace(/React,\s+FC/g, 'React.FC');
  content = content.replace(/ReactNo, d, e/g, 'ReactNode');
  content = content.replace(/boole, a, n/g, 'boolean');
  content = content.replace(/stri, n, g/g, 'string');
  content = content.replace(/obje, c, t/g, 'object');
  content = content.replace(/functi, o, n/g, 'function');
  content = content.replace(/retu, r, n\s+/g, 'return ');
  content = content.replace(/retu, r, n\s*\(/g, 'return (');
  content = content.replace(/retu, r, n\s*\{/g, 'return {');
  content = content.replace(/retu, r, n\s*\[/g, 'return [');
  content = content.replace(/retu, r, n\s*;/g, 'return;');
  content = content.replace(/retu, r, n\s*$/g, 'return');
  
  // Fix JSX attributes
  content = content.replace(/classNam, e\s*=/g, 'className=');
  content = content.replace(/onCli, c, k\s*=/g, 'onClick=');
  content = content.replace(/onChan, g, e\s*=/g, 'onChange=');
  content = content.replace(/onSubmi, t\s*=/g, 'onSubmit=');
  content = content.replace(/onMou, s, eOve, r\s*=/g, 'onMouseOver=');
  content = content.replace(/onMou, s, eOut\s*=/g, 'onMouseOut=');
  content = content.replace(/onFocu, s\s*=/g, 'onFocus=');
  content = content.replace(/onBlu, r\s*=/g, 'onBlur=');
  
  // Fix common variable names
  content = content.replace(/th, i, s\./g, 'this.');
  content = content.replace(/th, i, s\[/g, 'this[');
  content = content.replace(/th, i, s\s*=/g, 'this =');
  content = content.replace(/th, i, s\s*;/g, 'this;');
  content = content.replace(/th, i, s\s*$/g, 'this');
  
  // Fix common function calls
  content = content.replace(/conso, l, e\./g, 'console.');
  content = content.replace(/wind, o, w\./g, 'window.');
  content = content.replace(/docum, e, n, t\./g, 'document.');
  
  // Fix common strings
  content = content.replace(/'([^']*),([^']*)'/g, (match, p1, p2) => {
    if (p1 && p2) return `'${p1}${p2}'`;
    return match;
  });
  content = content.replace(/"([^"]*),([^"]*)"/g, (match, p1, p2) => {
    if (p1 && p2) return `"${p1}${p2}"`;
    return match;
  });
  
  return content;
}

// Function to fix corrupted JSX
function fixCorruptedJSX(content) {
  // Fix JSX tags with commas
  content = content.replace(/<div,\s+/g, '<div ');
  content = content.replace(/<\/div,\s*>/g, '</div>');
  content = content.replace(/<span,\s+/g, '<span ');
  content = content.replace(/<\/span,\s*>/g, '</span>');
  content = content.replace(/<p,\s+/g, '<p ');
  content = content.replace(/<\/p,\s*>/g, '</p>');
  content = content.replace(/<h1,\s+/g, '<h1 ');
  content = content.replace(/<\/h1,\s*>/g, '</h1>');
  content = content.replace(/<h2,\s+/g, '<h2 ');
  content = content.replace(/<\/h2,\s*>/g, '</h2>');
  content = content.replace(/<h3,\s+/g, '<h3 ');
  content = content.replace(/<\/h3,\s*>/g, '</h3>');
  content = content.replace(/<button,\s+/g, '<button ');
  content = content.replace(/<\/button,\s*>/g, '</button>');
  content = content.replace(/<a,\s+/g, '<a ');
  content = content.replace(/<\/a,\s*>/g, '</a>');
  content = content.replace(/<img,\s+/g, '<img ');
  content = content.replace(/<input,\s+/g, '<input ');
  content = content.replace(/<form,\s+/g, '<form ');
  content = content.replace(/<\/form,\s*>/g, '</form>');
  content = content.replace(/<section,\s+/g, '<section ');
  content = content.replace(/<\/section,\s*>/g, '</section>');
  content = content.replace(/<article,\s+/g, '<article ');
  content = content.replace(/<\/article,\s*>/g, '</article>');
  content = content.replace(/<header,\s+/g, '<header ');
  content = content.replace(/<\/header,\s*>/g, '</header>');
  content = content.replace(/<footer,\s+/g, '<footer ');
  content = content.replace(/<\/footer,\s*>/g, '</footer>');
  content = content.replace(/<nav,\s+/g, '<nav ');
  content = content.replace(/<\/nav,\s*>/g, '</nav>');
  content = content.replace(/<ul,\s+/g, '<ul ');
  content = content.replace(/<\/ul,\s*>/g, '</ul>');
  content = content.replace(/<li,\s+/g, '<li ');
  content = content.replace(/<\/li,\s*>/g, '</li>');
  content = content.replace(/<ol,\s+/g, '<ol ');
  content = content.replace(/<\/ol,\s*>/g, '</ol>');
  content = content.replace(/<table,\s+/g, '<table ');
  content = content.replace(/<\/table,\s*>/g, '</table>');
  content = content.replace(/<tr,\s+/g, '<tr ');
  content = content.replace(/<\/tr,\s*>/g, '</tr>');
  content = content.replace(/<td,\s+/g, '<td ');
  content = content.replace(/<\/td,\s*>/g, '</td>');
  content = content.replace(/<th,\s+/g, '<th ');
  content = content.replace(/<\/th,\s*>/g, '</th>');
  
  return content;
}

// Function to remove duplicate imports
function removeDuplicateImports(content) {
  const lines = content.split('\n');
  const seenImports = new Set();
  const cleanedLines = [];
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    if (trimmedLine.startsWith('import ')) {
      if (!seenImports.has(trimmedLine)) {
        seenImports.add(trimmedLine);
        cleanedLines.push(line);
      }
    } else {
      cleanedLines.push(line);
    }
  }
  
  return cleanedLines.join('\n');
}

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixCorruptedImports(content);
    content = fixCorruptedJSX(content);
    content = removeDuplicateImports(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all corrupted files
function findCorruptedFiles(dir) {
  const corruptedFiles = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('impo, r, t') || content.includes('import,') || content.includes('fr, o, m') || content.includes('from,')) {
            corruptedFiles.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  scanDirectory(dir);
  return corruptedFiles;
}

// Main execution
console.log('Starting corrupted files fix...');

const srcDir = path.join(__dirname, 'src');
const corruptedFiles = findCorruptedFiles(srcDir);

console.log(`Found ${corruptedFiles.length} corrupted files`);

let fixedCount = 0;
for (const filePath of corruptedFiles) {
  if (fixFile(filePath)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);

// Test build after fixes
console.log('Testing build...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('Build successful!');
} catch (error) {
  console.log('Build still has errors, but files have been fixed.');
}