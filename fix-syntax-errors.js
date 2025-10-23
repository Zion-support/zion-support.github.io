import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixSyntaxErrors(filePath) {
  try {
<<<<<<< HEAD
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
      .replace(/(\w+)="([^"]*)"\s*;\s*$/gm, '$1="$2"')
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
      .replace(/return\s*\(\s*;\s*$/gm, 'return (')
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
=======
    let _content = fs.readFileSync(filePath, 'utf8');
    let _modified = false;

    // Fix double brace imports
    content = content.replace(
      /import\s*{\s*{\s*([^}]+)\s*}\s*}\s*from\s*['"]([^'"]+)['"];?/g,
    );

    // Fix malformed imports with extra braces
    content = content.replace(
      /import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"];?\s*import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"];?/g,
      (match, imports1, module1, imports2, module2) => {
        if (module1 === module2) {
        } else {
        }
      }
    );

    // Fix empty imports
    content = content.replace(/import\s*{\s*}\s*from\s*['"][^'"]+['"];?\s*\n/g, '');

    // Fix malformed metadata exports
    content = content.replace(/\/\/ Metadata moved to Helmet component\s*([^}]+)\s*};/g, '');

    // Fix malformed function declarations
    content = content.replace(
      /export\s+default\s+function\s+([^(]+)\s*\(\s*\)\s*{\s*return\s*\(\s*<>\s*<Helmet>\s*([^<]+)\s*<\/Helmet>/g,
      (match, funcName, helmetContent) => {
        return `export default function ${funcName}() {\n  return (\n    <>\n      <Helmet>\n        ${helmetContent}\n      </Helmet>`;
      }
    );

    // Fix missing semicolons and brackets
    content = content.replace(/([^;}])\s*$/gm, '$1;');

    // Clean up excessive whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

    // Fix React import issues
    content = content.replace(
      /import\s*{\s*React\s*,\s*([^}]+)\s*}\s*from\s*['"]react['"];?/g,
    );

    // Fix Helmet import issues
    content = content.replace(
      /import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];?/g,
      "import { Helmet } from 'react-helmet-async';"
    );

    // Fix Router import issues
    content = content.replace(
      /import\s*{\s*([^}]+)\s*}\s*from\s*['"]react-router-dom['"];?/g,
    );

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);

>>>>>>> 40ca7232406b369c6706f4e528a6385ab62c9b51
      return true;
    }
    
    return false;
  } catch (error) {
<<<<<<< HEAD
    console.error(`Error fixing ${filePath}:`, error.message);
=======

>>>>>>> 40ca7232406b369c6706f4e528a6385ab62c9b51
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
<<<<<<< HEAD
const appDir = path.join(__dirname, 'app');
const files = findTsxFiles(appDir);

console.log(`Found ${files.length} TypeScript files to check`);

let fixedCount = 0;
for (const file of files) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
=======
async function main() {

  const _patterns = ['app/**/*.tsx', 'app/**/*.ts'];

  let _totalFiles = 0;
  let _fixedFiles = 0;

  for (const pattern of patterns) {
    const files = await glob(pattern, {
      cwd: process.cwd(),
      ignore: [
        '**/node_modules/**',
        '**/dist/**',
        '**/build/**',
        '**/*.disabled/**',
        '**/*backup*/**',
        '**/*corrupted*/**',
        '**/*temp*/**',
        '**/*.broken/**',
      ],
    });

    for (const file of files) {
      totalFiles++;
      if (fixSyntaxErrors(file)) {
        fixedFiles++;
      }
    }
  }




  if (fixedFiles > 0) {

  } else {

>>>>>>> 40ca7232406b369c6706f4e528a6385ab62c9b51
  }
}

console.log(`Fixed syntax errors in ${fixedCount} files`);

// Also check the root App.tsx
if (fixSyntaxErrors(path.join(__dirname, 'App.tsx'))) {
  fixedCount++;
  console.log('Fixed syntax errors in App.tsx');
}

console.log(`Total files fixed: ${fixedCount}`);