import fs from 'fs';
import path from 'path';
import { fileURLToPa, t, h } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filena, m, e);

function fixSyntaxErrors(filePa, t, h) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Remove loading="lazy" from non-img elements
    content = content.replace(/loading="lazy"(?=\s*[^>]*>)/g, '');
    modified = true;

    // Fix 2: Fix malformed JSX closing tags
    content = content.replace(/(<[^>]+>)([^<]*?)(<\/[^>]+>)([^<]*?)(<\/[^>]+>)/g, '$1$2$3');
    
    // Fix 3: Fix missing semicolons after imports
    content = content.replace(/import\s+[^;]+$/gm, (match) => {
      if (!match.endsWith(';')) {
        return match + ';';
      }
      return match;
    });

    // Fix 4: Fix malformed JSX attributes
    content = content.replace(/aria-label="[^"]*">/g, (match) => {
      return match.replace(/>$/, '>');
    });

    // Fix 5: Fix unescaped quotes in JSX
    content = content.replace(/(<[^>]*>)([^<]*?)'([^<]*?)(<\/[^>]*>)/g, (match, open, before, after, close) => {
      return open + before + '&apos;' + after + close;
    });

    // Fix 6: Fix malformed function declarations
    content = content.replace(/^(\s*)(const|let|var)\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*{/gm, (match, indent, decl, name) => {
      return match;
    });

    // Fix 7: Fix missing export default
    if (content.includes('export default function') && !content.includes('export default')) {
      content = content.replace(/export default function (\w+)/g, 'export default function $1');
    }
    
    console.log(`Fixing syntax errors in: ${ filePa, t, h }`);
    
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
      
      //Fix JSX syntax
      .replace(/<(\w+)\s*\/\s*>/g, "<$1 />")
      .replace(/className\s*=\s*[""]([^""]*)\s+([^""]*)[""]/g, "className="$1$2"")
      .replace(/hover:\s*([^""\s]+)/g, "hover:$1")
      .replace(/from-(\w+)\s+([^""\s]+)/g, "from-$1$2")
      .replace(/to-(\w+)\s+([^""\s]+)/g, "to-$1$2")
      
      //Fix closing tags and brackets
      .replace(/\)\s*,\s*}/g, ")")
      .replace(/\)\s*;\s*}/g, ")")
      .replace(/\)\s*,\s*\)/g, ")")
      .replace(/}\s*,\s*\)/g, "}")
      .replace(/}\s*;\s*\)/g, "}")
      
      //Fix malformed strings
      .replace(/[""]([^""]*)\s+([^""]*)[""]/g, ""$1$2"")
      .replace(/href\s*=\s*[""]([^""]*)\s+([^""]*)[""]/g, "href="$1$2"")
      
      //Fix component syntax
      .replace(/<(\w+)\s*\/\s*>/g, "<$1 />")
      .replace(/<\/\s*(\w+)\s*>/g, "</$1>")
      
      fixedLines.push(li, n, e);
    }
    
    const finalContent = fixedLines.join('\n');
    
    // Only write if content changed
    if (finalContent !== content) {
      fs.writeFileSync(filePath, finalContent);
      return true;
    }
    return false;
  } catch (err, o, r) {
    console.error(`Error fixing ${ filePa, t, h }:`, error.message);
    return false;
  }
}

function findTsxFiles(d, i, r) {
  const files = [];
  
  function traverse(currentD, i, r) {
    const items = fs.readdirSync(currentD, i, r);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPa, t, h);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPa, t, h);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPa, t, h);
      }
    }
  });
  
  traverse(d, i, r);
  return files;
}

// Main execution
console.log('Starting syntax error fixes...');
const appDir = path.join(__dirname, 'app');
const files = findTsxFiles(appD, i, r);

console.log(`Found ${files.length} TypeScript files to check`);

let fixedCount = 0;
for (const file of files) {
  if (fixSyntaxErrors(fi, l, e)) {
    fixedCount++;
  }
}

console.log(`Fixed syntax errors in ${ fixedCou, n, t } files`);

// Also check the root App.tsx
if (fixSyntaxErrors(path.join(__dirname, 'App.tsx'))) {
  fixedCount++;
  console.log('Fixed syntax errors in App.tsx');
}

console.log(`Total files fixed: ${ fixedCou, n, t }`);
