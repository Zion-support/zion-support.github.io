#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all TypeScript and JavaScript files
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to modify
      if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
        files = files.concat(getAllFiles(fullPath, extensions));
      }
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix unterminated string literals in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common unterminated string patterns
    const fixes = [
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
      // Fix string literals missing closing quotes (single quotes)
      { 
        regex: /'([^']*)$/gm, 
        replacement: (match, str) => `'${str}';`
      },
      // Fix string literals missing closing quotes (double quotes)
      { 
        regex: /"([^"]*)$/gm, 
        replacement: (match, str) => `"${str}";`
      },
      // Fix JSX className attributes missing closing quotes
      { 
        regex: /className="([^"]*)$/gm, 
        replacement: (match, className) => `className="${className}"`
      },
      // Fix JSX className attributes missing closing quotes (single quotes)
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
      // Fix object properties missing closing quotes
      { 
        regex: /href:\s*'([^']*)$/gm, 
        replacement: (match, href) => `href: '${href}'`
      },
      { 
        regex: /href:\s*"([^"]*)$/gm, 
        replacement: (match, href) => `href: "${href}"`
      },
      // Fix array elements missing closing quotes
      { 
        regex: /name:\s*'([^']*)$/gm, 
        replacement: (match, name) => `name: '${name}'`
      },
      { 
        regex: /name:\s*"([^"]*)$/gm, 
        replacement: (match, name) => `name: "${name}"`
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
      },
      // Fix array declarations missing closing brackets
      { 
        regex: /const\s+(\w+)\s*=\s*\[([^\]]*)$/gm, 
        replacement: (match, varName, content) => `const ${varName} = [${content}];`
      },
      // Fix object declarations missing closing braces
      { 
        regex: /const\s+(\w+)\s*=\s*\{([^}]*)$/gm, 
        replacement: (match, varName, content) => `const ${varName} = {${content}};`
      }
    ];
    
    // Apply fixes
    fixes.forEach(fix => {
      content = content.replace(fix.regex, fix.replacement);
    });
    
    // Additional specific fixes for common patterns
    // Fix unterminated template literals
    content = content.replace(/`([^`]*)$/gm, (match, str) => `\`${str}\`;`);
    
    // Fix unterminated JSX attributes
    content = content.replace(/className="([^"]*)$/gm, (match, className) => `className="${className}"`);
    content = content.replace(/className='([^']*)$/gm, (match, className) => `className='${className}'`);
    
    // Fix unterminated object properties
    content = content.replace(/href:\s*'([^']*)$/gm, (match, href) => `href: '${href}'`);
    content = content.replace(/href:\s*"([^"]*)$/gm, (match, href) => `href: "${href}"`);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
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
  console.log('Finding all TypeScript and JavaScript files...');
  const files = getAllFiles('/workspace');
  
  console.log(`Found ${files.length} files to check.`);
  
  let fixedCount = 0;
  let processedCount = 0;
  
  for (const file of files) {
    processedCount++;
    if (processedCount % 100 === 0) {
      console.log(`Processed ${processedCount}/${files.length} files...`);
    }
    
    try {
      if (fixFile(file)) {
        fixedCount++;
        console.log(`Fixed: ${file}`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`\nProcessed ${processedCount} files.`);
  console.log(`Fixed ${fixedCount} files.`);
  
  // Run lint to check remaining errors
  console.log('\nChecking remaining errors...');
  try {
    const result = execSync('npm run lint 2>&1', { encoding: 'utf8' });
    const errorCount = (result.match(/error/g) || []).length;
    console.log(`Remaining errors: ${errorCount}`);
    
    if (errorCount > 0) {
      console.log('\nFirst 10 remaining errors:');
      const lines = result.split('\n');
      let errorLines = lines.filter(line => line.includes('error')).slice(0, 10);
      errorLines.forEach(line => console.log(line));
    }
  } catch (error) {
    console.log('Error running lint:', error.message);
  }
}

main();