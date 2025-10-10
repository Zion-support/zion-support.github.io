import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixBrokenFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if this is a React component file
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) {
      return false;
    }
    
    // Skip if it's a test file or config file
    if (filePath.includes('test') || filePath.includes('config') || filePath.includes('utils')) {
      return false;
    }
    
    // Look for common broken patterns and fix them
    const originalContent = content;
    
    // Fix broken JSX structure where component definition appears in the middle
    if (content.includes('const ') && content.includes('React.FC') && content.includes('=> {')) {
      // Extract the component definition
      const componentMatch = content.match(/const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{[\s\S]*?}/);
      if (componentMatch) {
        const componentDef = componentMatch[0];
        const componentName = componentMatch[1];
        
        // Remove the broken component definition from the middle
        content = content.replace(componentMatch[0], '');
        
        // Find the JSX content
        const jsxMatch = content.match(/<[^>]*>[\s\S]*?<\/[^>]*>/);
        if (jsxMatch) {
          const jsxContent = jsxMatch[0];
          
          // Reconstruct the file properly
          const imports = content.match(/import[\s\S]*?from[\s\S]*?;[\s\S]*?(?=const|$)/g) || [];
          const importsText = imports.join('\n');
          
          // Create a proper component structure
          const newContent = `${importsText}

const ${componentName}: React.FC = () => {
  return (
    ${jsxContent}
  );
};

export default ${componentName};`;
          
          content = newContent;
          modified = true;
        }
      }
    }
    
    // Fix other common issues
    const fixes = [
      // Fix malformed JSX closing tags
      { pattern: /;\s*<\/\s*$/gm, replacement: '>' },
      { pattern: /;\s*<\/\s*(\w+)\s*$/gm, replacement: '</$1>' },
      
      // Fix semicolons at end of lines that should be removed
      { pattern: /;\s*$/gm, replacement: '' },
      
      // Fix specific JSX patterns
      { pattern: /(\w+);\s*$/gm, replacement: '$1' },
      { pattern: /(\w+);\s*<\/\s*$/gm, replacement: '$1>' },
      
      // Fix React component declarations
      { pattern: /const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{;\s*$/gm, replacement: 'const $1: React.FC = () => {' },
      
      // Fix array declarations
      { pattern: /const\s+(\w+)\s*=\s*\[;\s*$/gm, replacement: 'const $1 = [' },
      
      // Fix object declarations
      { pattern: /{\s*;\s*$/gm, replacement: '{' },
      
      // Fix return statements
      { pattern: /return\s*\(\s*;\s*$/gm, replacement: 'return (' },
      
      // Fix JSX fragments
      { pattern: /<>\s*;\s*$/gm, replacement: '<>' },
      { pattern: /<\/>\s*;\s*$/gm, replacement: '</>' },
      
      // Fix Helmet tags
      { pattern: /<Helmet>\s*;\s*$/gm, replacement: '<Helmet>' },
      { pattern: /<\/Helmet>\s*;\s*$/gm, replacement: '</Helmet>' },
      
      // Fix div tags
      { pattern: /<div[^>]*>\s*;\s*$/gm, replacement: (match) => match.replace(/;\s*$/, '>') },
      { pattern: /<\/div>\s*;\s*$/gm, replacement: '</div>' },
      
      // Fix section tags
      { pattern: /<section[^>]*>\s*;\s*$/gm, replacement: (match) => match.replace(/;\s*$/, '>') },
      { pattern: /<\/section>\s*;\s*$/gm, replacement: '</section>' },
      
      // Fix button tags
      { pattern: /<button[^>]*>\s*;\s*$/gm, replacement: (match) => match.replace(/;\s*$/, '>') },
      { pattern: /<\/button>\s*;\s*$/gm, replacement: '</button>' },
      
      // Fix h1, h2, h3 tags
      { pattern: /<(h[1-6])[^>]*>\s*;\s*$/gm, replacement: (match) => match.replace(/;\s*$/, '>') },
      { pattern: /<\/(h[1-6])>\s*;\s*$/gm, replacement: (match) => match.replace(/;\s*$/, '>') },
      
      // Fix p tags
      { pattern: /<p[^>]*>\s*;\s*$/gm, replacement: (match) => match.replace(/;\s*$/, '>') },
      { pattern: /<\/p>\s*;\s*$/gm, replacement: '</p>' },
      
      // Fix span tags
      { pattern: /<span[^>]*>\s*;\s*$/gm, replacement: (match) => match.replace(/;\s*$/, '>') },
      { pattern: /<\/span>\s*;\s*$/gm, replacement: '</span>' },
      
      // Fix ul, li tags
      { pattern: /<(ul|li)[^>]*>\s*;\s*$/gm, replacement: (match) => match.replace(/;\s*$/, '>') },
      { pattern: /<\/(ul|li)>\s*;\s*$/gm, replacement: (match) => match.replace(/;\s*$/, '>') },
    ];
    
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    if (modified) {
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

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
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

console.log(`Found ${files.length} TypeScript/TSX files to check...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixBrokenFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);