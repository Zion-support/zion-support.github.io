#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all files with syntax errors
function getFilesWithErrors() {
  try {
    const result = execSync('npm run lint 2>&1', { encoding: 'utf8' });
    const lines = result.split('\n');
    const files = new Set();
    
    lines.forEach(line => {
      const match = line.match(/^\/workspace\/(.+?):\d+:\d+\s+error/);
      if (match) {
        files.add(match[1]);
      }
    });
    
    return Array.from(files);
  } catch (error) {
    console.error('Error getting files with errors:', error.message);
    return [];
  }
}

// Fix unterminated string literals in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common patterns
    const patterns = [
      // Fix import statements missing closing quotes
      { 
        regex: /import\s+([^'"]+)\s+from\s+'([^']*)$/gm, 
        replacement: (match, imports, module) => `import ${imports} from '${module}';`
      },
      // Fix require statements missing closing quotes
      { 
        regex: /require\(([^)]*)$/gm, 
        replacement: (match, module) => `require(${module});`
      },
      // Fix string literals missing closing quotes
      { 
        regex: /'([^']*)$/gm, 
        replacement: (match, str) => `'${str}';`
      },
      // Fix double quotes missing closing quotes
      { 
        regex: /"([^"]*)$/gm, 
        replacement: (match, str) => `"${str}";`
      },
      // Fix JSX attributes missing closing quotes
      { 
        regex: /className="([^"]*)$/gm, 
        replacement: (match, className) => `className="${className}"`
      },
      // Fix JSX attributes missing closing quotes with single quotes
      { 
        regex: /className='([^']*)$/gm, 
        replacement: (match, className) => `className='${className}'`
      },
      // Fix Route path attributes
      { 
        regex: /path="([^"]*)$/gm, 
        replacement: (match, path) => `path="${path}"`
      },
      // Fix Route element attributes
      { 
        regex: /element=\{([^}]*)$/gm, 
        replacement: (match, element) => `element={${element}}`
      },
      // Fix semicolons after variable declarations
      { 
        regex: /const\s+([^=]+)=([^;]*)$/gm, 
        replacement: (match, varName, value) => `const ${varName}=${value};`
      },
      // Fix function calls missing closing parentheses
      { 
        regex: /(\w+)\(([^)]*)$/gm, 
        replacement: (match, func, args) => `${func}(${args});`
      }
    ];
    
    patterns.forEach(pattern => {
      const newContent = content.replace(pattern.regex, pattern.replacement);
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

// Main function
function main() {
  console.log('Getting files with syntax errors...');
  const files = getFilesWithErrors();
  
  if (files.length === 0) {
    console.log('No files with syntax errors found.');
    return;
  }
  
  console.log(`Found ${files.length} files with syntax errors:`);
  files.forEach(file => console.log(`  - ${file}`));
  
  console.log('\nFixing files...');
  let fixedCount = 0;
  
  files.forEach(file => {
    const fullPath = path.join('/workspace', file);
    if (fs.existsSync(fullPath)) {
      if (fixFile(fullPath)) {
        fixedCount++;
      }
    }
  });
  
  console.log(`\nFixed ${fixedCount} files.`);
  
  // Run lint again to check remaining errors
  console.log('\nChecking remaining errors...');
  try {
    execSync('npm run lint 2>&1 | head -20', { stdio: 'inherit' });
  } catch (error) {
    console.log('Some errors may still remain.');
  }
}

main();