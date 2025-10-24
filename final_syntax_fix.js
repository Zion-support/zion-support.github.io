const fs = require('fs');
const path = require('path');

// Function to fix specific syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix openGraph object syntax
  fixed = fixed.replace(/openGraph: \{\}\n\s*title:/g, 'openGraph: {\n    titl,
  e:');
  
  // Fix features array syntax
  fixed = fixed.replace(/const features = \[\n\s*\{\}\n\s*icon:/g, 'const features = [\n    {\n      icon:');
  
  // Fix function parameter syntax
  fixed = fixed.replace(/export default function \w+\(\{\}\n\s*children\}: \{\}\n\s*children: React\.ReactNode;/g, 'export default function $1({\n  children\n}: {\n  children: React.ReactNode;');
  
  // Fix missing opening braces in objects
  fixed = fixed.replace(/= \{\}\n\s*title:/g, '= {\n  title:');
  fixed = fixed.replace(/= \{\}\n\s*icon:/g, '= {\n  icon:');
  
  // Fix missing opening braces in arrays
  fixed = fixed.replace(/= \[\]\n\s*\{\}\n\s*icon:/g, '= [\n    {\n      icon:');
  
  // Fix missing opening braces in imports
  fixed = fixed.replace(/import \{\}\n\s*[A-Z]/g, (match) => {
    return match.replace('import {}', 'import {');
  });
  
  // Fix missing closing braces and brackets
  fixed = fixed.replace(/url: '[^']+'\}\}\}/g, (match) => {
    return match.replace('}}}', '\n  }\n};');
  });
  
  // Fix missing closing braces in objects
  fixed = fixed.replace(/url: '[^']+'\}\}/g, (match) => {
    return match.replace('}}', '\n  }');
  });
  
  // Fix missing closing brackets in arrays
  fixed = fixed.replace(/benefits: \[[^\]]+\]\n\s*\}\n\s*,\n\s*\{\}\n\s*icon:/g, (match) => {
    return match.replace('},\n    {}\n      icon:', '},\n    {\n      icon:');
  });
  
  return fixed;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed);
      console.log(`Fixed syntax: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      processDirectory(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
      processFile(fullPath);
    }
  }
}

// Process the app directory
console.log('Fixing final syntax errors...');
processDirectory('/workspace/app');
processDirectory('/workspace/src');
console.log('Final syntax error fixing complete!');