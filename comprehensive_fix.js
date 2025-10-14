import fs from 'fs';
import { glob } from 'glob';

// Comprehensive syntax fixes for merged files
function fixSyntaxErrors(content) {
  // Remove any merge conflict markers
  content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  content = content.replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  
  // Fix JSX expressions that need one parent element
  // Look for patterns like: import ... from ...; <Component>...</Component>
  const lines = content.split('\n');
  let inJSX = false;
  let jsxStart = -1;
  let braceCount = 0;
  let fixedLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if this line starts JSX
    if (line.trim().startsWith('<') && !inJSX) {
      inJSX = true;
      jsxStart = i;
      braceCount = 0;
    }
    
    if (inJSX) {
      // Count braces to track JSX depth
      for (const char of line) {
        if (char === '<') braceCount++;
        if (char === '>') braceCount--;
      }
      
      // If we've closed all JSX tags
      if (braceCount === 0 && line.trim().endsWith('>')) {
        // Check if we need to wrap in a fragment
        const jsxContent = lines.slice(jsxStart, i + 1).join('\n');
        const hasMultipleRootElements = (jsxContent.match(/<[A-Z][^>]*>/g) || []).length > 1;
        
        if (hasMultipleRootElements && !jsxContent.includes('<>')) {
          fixedLines.push('<>');
          fixedLines.push(...lines.slice(jsxStart, i + 1).map(l => '  ' + l));
          fixedLines.push('</>');
        } else {
          fixedLines.push(...lines.slice(jsxStart, i + 1));
        }
        
        inJSX = false;
        jsxStart = -1;
      }
    } else {
      fixedLines.push(line);
    }
  }
  
  content = fixedLines.join('\n');
  
  // Fix specific patterns that cause syntax errors
  content = content.replace(/^(\s*)(<[A-Z][^>]*>[\s\S]*?<\/[A-Z][^>]*>)\s*$/gm, (match, indent, jsx) => {
    // If this JSX is not wrapped and has multiple elements, wrap it
    if (!jsx.includes('<>') && !jsx.includes('<div') && jsx.split('\n').length > 1) {
      return `${indent}<>\n${jsx.split('\n').map(l => indent + '  ' + l).join('\n')}\n${indent}</>`;
    }
    return match;
  });
  
  // Fix missing semicolons after JSX
  content = content.replace(/(<[A-Z][^>]*>[\s\S]*?<\/[A-Z][^>]*>)\s*$/gm, '$1;');
  
  // Fix broken JSX syntax
  content = content.replace(/<([A-Z][^>]*>[\s\S]*?<\/[A-Z][^>]*>)\s*$/gm, '<>$1</>');
  
  // Fix missing closing tags
  content = content.replace(/<section([^>]*)>([\s\S]*?)(?=<section|$)/g, (match, attrs, body) => {
    if (!body.includes('</section>')) {
      return `<section${attrs}>${body}</section>`;
    }
    return match;
  });
  
  // Fix common syntax issues
  content = content.replace(/;\s*<[A-Z]/g, ';\n<');
  content = content.replace(/}\s*<[A-Z]/g, '}\n<');
  content = content.replace(/\)\s*<[A-Z]/g, ')\n<');
  
  return content;
}

// Find all TypeScript/TSX files in the app directory
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: process.cwd() });

console.log(`Found ${files.length} files to process...`);

let fixedCount = 0;
files.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(file, fixedContent);
      console.log(`Fixed: ${file}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files.`);