import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix all syntax errors
function fixAllSyntax(content) {
  // Fix array declarations missing = and [
  content = content.replace(/const\s+(\w+)\s*=\s*\[\]\s*\{/g, 'const $1 = [\n  {');
  
  // Fix standalone objects that should be in arrays
  content = content.replace(/\n\s*\{([^}]+)\}\s*,?\s*\n/g, (match, objContent) => {
    return `\n  {${objContent}},\n`;
  });
  
  // Fix missing commas between array items
  content = content.replace(/\}\s*\n\s*\{/g, '},\n  {');
  
  // Fix semicolons that should be commas in arrays
  content = content.replace(/;\s*\n\s*\]/g, '\n]');
  
  // Fix malformed function returns
  content = content.replace(/return\s*\(\)\s*\n\s*<([^>]+);/g, 'return (\n    <$1');
  
  // Fix unterminated strings and malformed JSX
  content = content.replace(/<([^>]+);"/g, '<$1');
  content = content.replace(/<\/[^>]+>"/g, '</$1>');
  
  // Fix missing opening parentheses in return statements
  content = content.replace(/return\s*\(\)\s*\n\s*<([^>]+)/g, 'return (\n    <$1');
  
  // Fix missing closing parentheses in return statements
  content = content.replace(/<\/[^>]+>\s*$/g, '</div>\n  );');
  
  // Fix array items that are outside array brackets
  content = content.replace(/\]\s*\n\s*\{([^}]+)\}/g, ',\n  {$1}');
  
  // Fix missing opening brackets for arrays
  content = content.replace(/const\s+(\w+)\s*=\s*\[\s*\{/g, 'const $1 = [\n  {');
  
  // Fix trailing commas in arrays
  content = content.replace(/,(\s*\])/g, '$1');
  
  // Fix missing closing brackets
  const lines = content.split('\n');
  let fixedLines = [];
  let inArray = false;
  let bracketCount = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.includes('const') && line.includes('= [')) {
      inArray = true;
      bracketCount = 1;
    } else if (inArray) {
      if (line.includes('[')) bracketCount++;
      if (line.includes(']')) bracketCount--;
      if (bracketCount === 0) {
        inArray = false;
      }
    }
    
    // Fix array items that are outside brackets
    if (inArray && line.trim().startsWith('{') && !line.includes('[') && !line.includes(']')) {
      if (!line.includes(',')) {
        fixedLines.push(line + ',');
      } else {
        fixedLines.push(line);
      }
    } else {
      fixedLines.push(line);
    }
  }
  
  content = fixedLines.join('\n');
  
  // Fix function declarations
  content = content.replace(/export default function (\w+)\(\)\s*\{\s*return\s*\(\s*<div>Content<\/div>\s*\);\s*\}/g, 
    'export default function $1() {\n  return (\n    <div>Content</div>\n  );\n}');
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixAllSyntax(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Process all .tsx files in pages directory
const pagesDir = './pages';
const files = fs.readdirSync(pagesDir)
  .filter(file => file.endsWith('.tsx'))
  .map(file => path.join(pagesDir, file));

console.log(`Processing ${files.length} .tsx files`);

let fixedCount = 0;
files.forEach(file => {
  if (processFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);