const fs = require('fs');
const path = require('path');

// Function to fix syntax errors in a file
function fixSyntaxErrors(content) {
  let lines = content.split('\n');
  let fixed = false;
  
  // Fix 1: Remove return statements that are not inside functions
  const returnOutsideFunction = /^\s*return\s*\(/;
  for (let i = 0; i < lines.length; i++) {
    if (returnOutsideFunction.test(lines[i])) {
      // Check if this return is inside a function
      let inFunction = false;
      let braceCount = 0;
      
      for (let j = 0; j < i; j++) {
        const line = lines[j].trim();
        if (line.includes('function') || line.includes('=>') || line.includes('const') && line.includes('=')) {
          inFunction = true;
        }
        if (line.includes('{')) braceCount++;
        if (line.includes('}')) braceCount--;
      }
      
      if (!inFunction || braceCount <= 0) {
        // This return is not inside a function, remove it
        lines[i] = lines[i].replace(/^\s*return\s*/, '');
        fixed = true;
      }
    }
  }
  
  // Fix 2: Fix missing closing quotes in href attributes
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('href="/contact') && !lines[i].includes('href="/contact"')) {
      lines[i] = lines[i].replace('href="/contact', 'href="/contact"');
      fixed = true;
    }
    if (lines[i].includes('href="/about') && !lines[i].includes('href="/about"')) {
      lines[i] = lines[i].replace('href="/about', 'href="/about"');
      fixed = true;
    }
  }
  
  // Fix 3: Fix missing closing quotes in className attributes
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors') && 
        !lines[i].includes('className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"')) {
      lines[i] = lines[i].replace('className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors', 
                                  'className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"');
      fixed = true;
    }
    if (lines[i].includes('className="inline-flex items-center px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors') && 
        !lines[i].includes('className="inline-flex items-center px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors"')) {
      lines[i] = lines[i].replace('className="inline-flex items-center px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors', 
                                  'className="inline-flex items-center px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors"');
      fixed = true;
    }
  }
  
  // Fix 4: Fix duplicate ArrowRight imports
  const arrowRightImports = [];
  const otherImports = [];
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('import { ArrowRight }')) {
      arrowRightImports.push(i);
    } else if (lines[i].includes('import {') && lines[i].includes('ArrowRight')) {
      otherImports.push(i);
    }
  }
  
  // Remove duplicate ArrowRight imports, keep only the first one
  if (arrowRightImports.length > 1) {
    for (let i = 1; i < arrowRightImports.length; i++) {
      lines[arrowRightImports[i]] = '';
    }
    fixed = true;
  }
  
  // Fix 5: Fix duplicate export default statements
  const exportLines = [];
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim().startsWith('export default ')) {
      exportLines.push(i);
    }
  }
  
  // Keep only the last export default
  if (exportLines.length > 1) {
    for (let i = 0; i < exportLines.length - 1; i++) {
      lines[exportLines[i]] = '';
    }
    fixed = true;
  }
  
  // Fix 6: Fix missing closing braces and parentheses
  let braceCount = 0;
  let parenCount = 0;
  let inJSX = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Count braces and parentheses
    for (const char of line) {
      if (char === '{') {
        braceCount++;
        if (line.includes('<') && line.includes('>')) {
          inJSX = true;
        }
      }
      if (char === '}') {
        braceCount--;
        if (braceCount === 0) {
          inJSX = false;
        }
      }
      if (char === '(') parenCount++;
      if (char === ')') parenCount--;
    }
    
    // Fix missing closing parenthesis in return statements
    if (line.includes('return (') && !line.includes(');') && i < lines.length - 1) {
      // Look for the matching closing parenthesis
      let found = false;
      for (let j = i + 1; j < lines.length; j++) {
        if (lines[j].includes(');')) {
          found = true;
          break;
        }
      }
      if (!found && i < lines.length - 1) {
        // Add missing closing parenthesis
        lines[i + 1] = lines[i + 1] + ');';
        fixed = true;
      }
    }
  }
  
  return { content: lines.join('\n'), fixed };
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: cleanedContent, fixed } = fixSyntaxErrors(content);
    
    if (fixed) {
      fs.writeFileSync(filePath, cleanedContent);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to process`);

for (const file of tsxFiles) {
  processFile(file);
}

console.log('Done fixing syntax errors!');