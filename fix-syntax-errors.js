import fs from 'fs';
import path from 'path';

// Function to fix common syntax errors in React/TypeScript files
function fixSyntaxErrors(content) {
  // Fix import statements with extra semicolons and quotes
  content = content.replace(/import\s+([^;]+);';';/g, 'import $1;');
  content = content.replace(/from\s+['"]([^'"]+)['"];';';/g, 'from "$1";');
  
  // Fix JSX attributes with extra quotes and semicolons
  content = content.replace(/className="([^"]+)">";";/g, 'className="$1">');
  content = content.replace(/content="([^"]+)">";";/g, 'content="$1">');
  content = content.replace(/title="([^"]+)">";";/g, 'title="$1">');
  content = content.replace(/name="([^"]+)">";";/g, 'name="$1">');
  
  // Fix malformed JSX closing tags
  content = content.replace(/<\/div>";";/g, '</div>');
  content = content.replace(/<\/h1>";";/g, '</h1>');
  content = content.replace(/<\/p>";";/g, '</p>');
  content = content.replace(/<\/span>";";/g, '</span>');
  content = content.replace(/<\/a>";";/g, '</a>');
  content = content.replace(/<\/button>";";/g, '</button>');
  
  // Fix malformed opening tags
  content = content.replace(/<div className="([^"]+)">";";/g, '<div className="$1">');
  content = content.replace(/<h1 className="([^"]+)">";";/g, '<h1 className="$1">');
  content = content.replace(/<p className="([^"]+)">";";/g, '<p className="$1">');
  content = content.replace(/<span className="([^"]+)">";";/g, '<span className="$1">');
  content = content.replace(/<a className="([^"]+)">";";/g, '<a className="$1">');
  content = content.replace(/<button className="([^"]+)">";";/g, '<button className="$1">');
  
  // Fix stray semicolons in JSX
  content = content.replace(/;";/g, '');
  content = content.replace(/;";/g, '');
  
  // Fix malformed function declarations
  content = content.replace(/export default function\s+(\w+)\(\)\s*\{\s*\}\s*return\s*\(/g, 'export default function $1() {\n  return (');
  
  // Fix duplicate return statements
  content = content.replace(/return\s*\(\s*<div>Page content<\/div>\s*\);\s*\}\s*return\s*\(\s*<div>Page content<\/div>\s*\);\s*\}/g, 'return (');
  
  // Fix malformed closing braces and parentheses
  content = content.replace(/\}\s*\);\s*\}/g, '}');
  content = content.replace(/\}\s*\);\s*\}\s*\);\s*\}/g, '}');
  
  // Fix stray closing tags
  content = content.replace(/\s*<\/\w+><\/\w+><\/\w+>\s*\);\s*\}/g, '');
  
  // Fix malformed JSX structure
  content = content.replace(/<>\s*<\/>\s*\);\s*\}/g, '');
  
  // Fix stray text and malformed content
  content = content.replace(/This page is under development\.;\s*<\/p>/g, 'This page is under development.</p>');
  
  // Fix malformed className values
  content = content.replace(/bg-gray-90o0/g, 'bg-gray-900');
  content = content.replace(/text-gray-30o0/g, 'text-gray-300');
  
  // Clean up extra whitespace and empty lines
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process all page.tsx files
function processDirectory(dirPath) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        fixedCount += processDirectory(fullPath);
      } else if (item === 'page.tsx') {
        if (processFile(fullPath)) {
          fixedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const fixedCount = processDirectory('./app');
console.log(`Fixed ${fixedCount} files.`);