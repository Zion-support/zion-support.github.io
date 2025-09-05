import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix array syntax errors
function fixArraySyntax(content) {
  // Fix const arrayName = [] followed by {}
  content = content.replace(/const\s+(\w+)\s*=\s*\[\]\s*\{\}/g, 'const $1 = [\n  {');
  
  // Fix standalone {} that should be {
  content = content.replace(/\n\s*\{\}\s*\n/g, '\n  {\n');
  
  // Fix array items that are missing proper syntax
  content = content.replace(/\{\}\s*\n\s*(\w+):/g, '{\n    $1:');
  
  // Fix missing quotes in array items
  content = content.replace(/features:\s*\[([^\]]*)\]/g, (match, features) => {
    const fixedFeatures = features
      .split(',')
      .map(f => f.trim())
      .map(f => f.startsWith('"') || f.startsWith("'") ? f : `"${f}"`)
      .join(', ');
    return `features: [${fixedFeatures}]`;
  });
  
  // Fix missing quotes in other array properties
  content = content.replace(/\[([^\[\]]*[^"'][^\[\]]*)\]/g, (match, items) => {
    if (items.includes('"') || items.includes("'")) return match;
    const fixedItems = items
      .split(',')
      .map(item => item.trim())
      .map(item => item.startsWith('"') || item.startsWith("'") ? item : `"${item}"`)
      .join(', ');
    return `[${fixedItems}]`;
  });
  
  // Fix semicolons that should be commas in objects
  content = content.replace(/;\s*\n\s*\}/g, '\n  }');
  
  // Fix missing closing brackets for arrays
  const openBrackets = (content.match(/\[/g) || []).length;
  const closeBrackets = (content.match(/\]/g) || []).length;
  if (openBrackets > closeBrackets) {
    content += '\n]';
  }
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixArraySyntax(content);
    
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

// Find all .tsx files in pages directory
const pagesDir = './pages';
const files = fs.readdirSync(pagesDir)
  .filter(file => file.endsWith('.tsx'))
  .map(file => path.join(pagesDir, file));

console.log(`Found ${files.length} .tsx files to process`);

let fixedCount = 0;
files.forEach(file => {
  if (processFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);