#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix spaces in identifiers and component names
function fixIdentifierSpaces(content) {
  let fixed = content;

  // Fix spaces in component names and identifiers
  fixed = fixed.replace(/(\w+)\s+Page\s*:/g, '$1Page:');
  fixed = fixed.replace(/(\w+)\s+Page\s*=/g, '$1Page =');
  fixed = fixed.replace(/(\w+)\s+Page\s*>/g, '$1Page>');
  fixed = fixed.replace(/(\w+)\s+Page\s*\)/g, '$1Page)');
  fixed = fixed.replace(/(\w+)\s+Page\s*</g, '$1Page<');
  fixed = fixed.replace(/(\w+)\s+Page\s*$/gm, '$1Page');
  
  // Fix spaces in React.FC
  fixed = fixed.replace(/React\.F\s+C\s*=/g, 'React.FC =');
  fixed = fixed.replace(/React\.F\s+C/g, 'React.FC');
  
  // Fix spaces in import statements
  fixed = fixed.replace(/import\s+\{\s*([^}]+)\s*\}\s*from\s+'([^']+)';/g, (match, imports, module) => {
    const cleanImports = imports.replace(/\s+/g, ' ').trim();
    return `import { ${cleanImports} } from '${module}';`;
  });
  
  // Fix spaces in Arrow Right, Check Circle, etc.
  fixed = fixed.replace(/Arrow\s+Right/g, 'ArrowRight');
  fixed = fixed.replace(/Check\s+Circle/g, 'CheckCircle');
  fixed = fixed.replace(/Helmet\s+Provider/g, 'HelmetProvider');
  fixed = fixed.replace(/Browser\s+Router/g, 'BrowserRouter');
  fixed = fixed.replace(/Home\s+Page/g, 'HomePage');
  fixed = fixed.replace(/Enhanced\s+SE\s+O/g, 'EnhancedSEO');
  fixed = fixed.replace(/class\s+Name/g, 'className');
  
  // Fix spaces in variable names
  fixed = fixed.replace(/(\w+)\s+(\w+)\s*=/g, (match, part1, part2) => {
    if (part1 === 'const' || part1 === 'let' || part1 === 'var') {
      return match; // Don't fix const/let/var
    }
    return `${part1}${part2} =`;
  });
  
  // Fix spaces in object properties
  fixed = fixed.replace(/(\w+)\s+(\w+)\s*:/g, (match, part1, part2) => {
    if (part1 === 'title' || part1 === 'description' || part1 === 'icon' || part1 === 'href') {
      return match; // Don't fix common object properties
    }
    return `${part1}${part2}:`;
  });
  
  // Fix spaces in string content (but be careful not to break actual spaces)
  fixed = fixed.replace(/(\w+)\s+(\w+)\s+(\w+)/g, (match, part1, part2, part3) => {
    // Only fix if it looks like a broken identifier (no quotes around it)
    const before = fixed.substring(0, fixed.indexOf(match));
    const after = fixed.substring(fixed.indexOf(match) + match.length);
    
    // Check if it's inside quotes
    const beforeQuotes = before.split('"').length - 1;
    const afterQuotes = after.split('"').length - 1;
    
    if (beforeQuotes % 2 === 1) {
      return match; // Inside quotes, don't fix
    }
    
    return `${part1}${part2}${part3}`;
  });
  
  // Fix specific patterns
  fixed = fixed.replace(/5\s+G/g, '5G');
  fixed = fixed.replace(/SE\s+O/g, 'SEO');
  fixed = fixed.replace(/A\s+I/g, 'AI');
  fixed = fixed.replace(/I\s+T/g, 'IT');
  fixed = fixed.replace(/U\s+I/g, 'UI');
  fixed = fixed.replace(/U\s+X/g, 'UX');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixIdentifierSpaces(content);
    
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

// Main function
function main() {
  const pattern = 'app/**/*.tsx';
  const files = glob.sync(pattern);
  
  console.log(`Found ${files.length} TSX files to process...`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (processFile(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixIdentifierSpaces, processFile };