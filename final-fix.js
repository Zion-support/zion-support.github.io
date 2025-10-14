import fs from 'fs';
import path from 'path';

// Function to fix the specific issues caused by the previous script
function fixFinalErrors(content) {
  let fixed = content;
  
  // Remove trailing commas from imports and statements
  fixed = fixed.replace(/import\s+.*?from\s+"[^"]*";,/g, (match) => {
    return match.replace(/,$/, '');
  });
  
  // Fix malformed JSX closing tags
  fixed = fixed.replace(/<\/\/div>/g, '</div>');
  fixed = fixed.replace(/<\/\/([^>]+)>/g, '</$1>');
  
  // Remove trailing commas from JSX elements
  fixed = fixed.replace(/<([^>]+)>,/g, '<$1>');
  fixed = fixed.replace(/<\/[^>]+>,/g, (match) => {
    return match.replace(/,$/, '');
  });
  
  // Fix malformed return statements
  fixed = fixed.replace(/return\s*\(\s*,/g, 'return (');
  fixed = fixed.replace(/\)\s*,/g, ')');
  
  // Fix malformed function declarations
  fixed = fixed.replace(/export\s+default\s+function\s+[^{]*\{\s*,/g, (match) => {
    return match.replace(/,$/, '');
  });
  
  // Fix malformed arrow functions
  fixed = fixed.replace(/const\s+[^=]*=\s*\(\)\s*=>\s*\{\s*,/g, (match) => {
    return match.replace(/,$/, '');
  });
  
  // Fix broken JSX structure
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<\/\/div>/g, '<div>');
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<\/\/div>/g, '<div>');
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/className="([^"]*?)",/g, 'className="$1"');
  fixed = fixed.replace(/title="([^"]*?)",/g, 'title="$1"');
  fixed = fixed.replace(/content="([^"]*?)",/g, 'content="$1"');
  
  // Fix broken JSX fragments
  fixed = fixed.replace(/<>\s*,/g, '<>');
  fixed = fixed.replace(/<\/>\s*,/g, '</>');
  
  // Fix malformed object literals
  fixed = fixed.replace(/\{\s*([^}]*?)\s*,\s*\}/g, (match, content) => {
    if (content.trim()) {
      return '{' + content + '}';
    }
    return '{}';
  });
  
  // Fix broken array literals
  fixed = fixed.replace(/\[\s*([^\]]*?)\s*,\s*\]/g, (match, content) => {
    if (content.trim()) {
      return '[' + content + ']';
    }
    return '[]';
  });
  
  // Fix malformed JSX with missing opening tags
  fixed = fixed.replace(/<\/\/div>\s*<([^>]+)>/g, '<$1>');
  
  // Fix broken closing tags
  fixed = fixed.replace(/<\/\/([^>]+)>/g, '</$1>');
  
  // Fix malformed JSX structure
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<\/\/div>/g, '<div>');
  
  // Fix broken return statements
  fixed = fixed.replace(/return\s*\(\s*,/g, 'return (');
  fixed = fixed.replace(/\)\s*,/g, ')');
  
  // Fix malformed function calls
  fixed = fixed.replace(/\(\s*,/g, '(');
  fixed = fixed.replace(/\)\s*,/g, ')');
  
  // Fix broken JSX with missing opening tags
  fixed = fixed.replace(/<\/\/div>\s*<([^>]+)>/g, '<$1>');
  
  // Fix malformed JSX structure
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<\/\/div>/g, '<div>');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixFinalErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process all TypeScript files
function processDirectory(dirPath) {
  let fixedCount = 0;
  let totalCount = 0;
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        totalCount++;
        if (processFile(fullPath)) {
          fixedCount++;
        }
      }
    }
  }
  
  walkDir(dirPath);
  return { fixedCount, totalCount };
}

// Main execution
console.log('Starting final syntax error fixes...');
const { fixedCount, totalCount } = processDirectory('./app');
console.log(`\nCompleted! Fixed ${fixedCount} out of ${totalCount} files.`);