import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has syntax issues
    if (!content.includes(';') || !content.includes('</')) {
      return false; // No obvious syntax issues
    }
    
    console.log(`Fixing syntax errors in: ${filePath}`);
    
    // Fix common syntax issues
    let fixedContent = content
      // Remove trailing semicolons that shouldn't be there
      .replace(/;\s*$/gm, '')
      // Fix JSX closing tags that have semicolons
      .replace(/<\/([^>]+)>;\s*$/gm, '</$1>')
      // Fix JSX opening tags that have semicolons
      .replace(/<([^>]+)>;\s*$/gm, '<$1>')
      // Fix JSX attributes that have semicolons
      .replace(/(\w+)="([^"]*)"\s*;\s*$/gm, '$1='$2'')
      // Fix JSX expressions that have semicolons
      .replace(/\{\s*([^}]+)\s*\}\s*;\s*$/gm, '{$1}')
      // Remove standalone semicolons
      .replace(/^\s*;\s*$/gm, '')
      // Fix multiple empty lines
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      // Fix JSX fragments
      .replace(/<>\s*;\s*$/gm, '<>')
      .replace(/<\/>\s*;\s*$/gm, '</>')
      // Fix React.Fragment
      .replace(/<React\.Fragment>\s*;\s*$/gm, '<React.Fragment>')
      .replace(/<\/React\.Fragment>\s*;\s*$/gm, '</React.Fragment>')
      // Fix common JSX syntax issues
      .replace(/>\s*;\s*</gm, '><')
      .replace(/>\s*;\s*$/gm, '>')
      // Fix function declarations
      .replace(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*\(\s*;\s*$/gm, 'const $1 = () => (')
      .replace(/const\s+(\w+)\s*=\s*\(\s*;\s*$/gm, 'const $1 = (')
      // Fix return statements
      .replace(/return\s*\(\s*;\s*$/gm, 'return(')
      // Fix JSX elements that are missing closing tags
      .replace(/<(\w+)([^>]*)>\s*;\s*$/gm, '<$1$2>')
      // Clean up extra whitespace
      .replace(/\s+$/gm, '')
      .replace(/^\s+/gm, '');
    
    // Try to fix incomplete JSX structures
    const lines = fixedContent.split('\n');
    const fixedLines = [];
    let inJSX = false;
    let jsxDepth = 0;
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      
      // Skip lines that are just semicolons or empty
      if (line.trim() === ';' || line.trim() === '') {
        continue;
      }
      
      // Skip lines that are just closing braces with semicolons
      if (line.trim() === '};' || line.trim() === '}') {
        if (jsxDepth > 0) {
          jsxDepth--;
        }
        fixedLines.push(line.replace(/;+$/, ''));
        continue;
      }
      
      // Skip lines that are just opening braces with semicolons
      if (line.trim() === '{;' || line.trim() === '{') {
        jsxDepth++;
        fixedLines.push(line.replace(/;+$/, ''));
        continue;
      }
      
      // Fix lines that end with semicolons inappropriately
      if (line.includes(';') && !line.includes('//') && !line.includes('*')) {
        // Check if this is a JSX line
        if (line.includes('<') && line.includes('>')) {
          line = line.replace(/;\s*$/, '');
        } else if (line.includes('return') || line.includes('const') || line.includes('let') || line.includes('var')) {
          // Keep semicolons for regular JavaScript
        } else {
          line = line.replace(/;\s*$/, '');
        }
      }
      
      fixedLines.push(line);
    }
    
    const finalContent = fixedLines.join('\n');
    
    // Only write if content changed
    if (finalContent !== content) {
      fs.writeFileSync(filePath, finalContent);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findTsxFiles(appDir);

console.log(`Found ${files.length} TypeScript files to check`);

let fixedCount = 0;
for (const file of files) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed syntax errors in ${fixedCount} files`);

// Also check the root App.tsx
if (fixSyntaxErrors(path.join(__dirname, 'App.tsx'))) {
  fixedCount++;
  console.log('Fixed syntax errors in App.tsx');
}

console.log(`Total files fixed: ${fixedCount}`);