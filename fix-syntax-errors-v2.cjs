const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix import statements
function fixImports(content) {
  // Fix patterns like: import {A,  B,  C from 'module'
  content = content.replace(/import\s*\{\s*([^}]+?)\s*\}\s*from\s*['"]([^'"]+)['"];?/g, (match, imports, module) => {
    // Clean up the imports - remove extra spaces and duplicates
    const cleanImports = imports
      .split(',')
      .map(s => s.trim())
      .filter(s => s && s.length > 0)
      .filter((value, index, self) => self.indexOf(value) === index); // Remove duplicates
    
    return `import { ${cleanImports.join(', ')} } from '${module}';`;
  });

  // Fix missing semicolons in imports
  content = content.replace(/from\s*['"][^'"]+['"]\s*(?=\n|$)/g, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });

  return content;
}

// Function to fix object definitions
function fixObjects(content) {
  // Fix patterns like: {, name: 'value'
  content = content.replace(/\{\s*,\s*/g, '{\n    ');
  
  // Fix patterns like: { name: 'value',, other: 'value'
  content = content.replace(/,\s*,/g, ',');
  
  // Fix patterns like: { // TODO: Add content }
  content = content.replace(/\{\s*\/\/ TODO: Add content\s*\}/g, '{\n    // TODO: Add content\n  }');
  
  return content;
}

// Function to fix function definitions
function fixFunctions(content) {
  // Fix duplicate function declarations
  content = content.replace(/(const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[^}]*\})\s*(const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[^}]*\})/g, '$1');
  
  // Fix malformed function declarations
  content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[^}]*\}\s*const\s+\1:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[^}]*\}/g, (match, name) => {
    // Keep only the first function declaration
    const parts = match.split('const ' + name + ':');
    return 'const ' + name + ':' + parts[1].split('const ' + name + ':')[0];
  });
  
  return content;
}

// Function to fix JSX syntax
function fixJSX(content) {
  // Fix missing closing braces in JSX
  content = content.replace(/\}\s*\)\s*$/gm, '}\n  )');
  
  // Fix missing semicolons in JSX
  content = content.replace(/;\s*$/gm, '');
  
  // Fix malformed JSX tags
  content = content.replace(/<(\w+)\s*([^>]*?)\s*>\s*<\/(\w+)>/g, '<$1 $2></$3>');
  
  return content;
}

// Function to fix specific patterns
function fixSpecificPatterns(content) {
  // Fix the specific pattern in various files
  content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[^}]*\}\s*const\s+\1:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[^}]*\}/g, (match, name) => {
    // Extract the first function body
    const firstMatch = match.match(/const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{([^}]*)\}/);
    if (firstMatch) {
      return `const ${name}: React.FC = () => {\n${firstMatch[1]}\n}`;
    }
    return match;
  });

  // Fix malformed object properties
  content = content.replace(/\{\s*\/\/ TODO: Add content\s*\}\s*icon:\s*(\w+),/g, '{\n    icon: $1,');
  
  return content;
}

// Function to fix TypeScript declarations
function fixTypeScript(content) {
  // Fix malformed type declarations
  content = content.replace(/:\s*React\.ReactNode\s*;\s*\)\s*\{/g, ': React.ReactNode;\n}) {');
  
  return content;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    const originalContent = content;

    // Apply fixes in order
    content = fixImports(content);
    content = fixObjects(content);
    content = fixFunctions(content);
    content = fixJSX(content);
    content = fixSpecificPatterns(content);
    content = fixTypeScript(content);

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      modified = true;
    }

    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JavaScript files
const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { 
  cwd: process.cwd(),
  ignore: ['node_modules/**', 'dist/**', 'build/**']
});

console.log(`Found ${files.length} files to process...`);

let fixedCount = 0;
files.forEach(file => {
  if (processFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);