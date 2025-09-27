const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix import statements with missing commas
  content = content.replace(/import React \{ ([^}]+) \} from/g, (match, imports) => {
    const cleanImports = imports.replace(/\s+/g, ' ').trim();
    return `import React, { ${cleanImports} } from`;
  });

  // Fix variable names with spaces
  content = content.replace(/\b(\w+)\s+(\w+)\s*=/g, (match, part1, part2) => {
    if (part1.length > 1 && part2.length > 1) {
      return `${part1}${part2} =`;
    }
    return match;
  });

  // Fix object property names with spaces
  content = content.replace(/(\w+)\s+(\w+)\s*:/g, (match, part1, part2) => {
    if (part1.length > 1 && part2.length > 1) {
      return `${part1}${part2}:`;
    }
    return match;
  });

  // Fix destructuring with spaces
  content = content.replace(/\{\s*(\w+)\s+(\w+)\s*(\w+)\s*\}/g, (match, part1, part2, part3) => {
    if (part1.length > 1 && part2.length > 1 && part3.length > 1) {
      return `{ ${part1}${part2}${part3} }`;
    }
    return match;
  });

  // Fix function names with spaces
  content = content.replace(/\bfunction\s+(\w+)\s+(\w+)\s*\(/g, (match, part1, part2) => {
    if (part1.length > 1 && part2.length > 1) {
      return `function ${part1}${part2}(`;
    }
    return match;
  });

  // Fix const declarations with spaces
  content = content.replace(/\bconst\s+(\w+)\s+(\w+)\s*=/g, (match, part1, part2) => {
    if (part1.length > 1 && part2.length > 1) {
      return `const ${part1}${part2} =`;
    }
    return match;
  });

  // Fix string literals with spaces
  content = content.replace(/'([^']*)\s+([^']*)'/g, (match, part1, part2) => {
    if (part1.length > 1 && part2.length > 1) {
      return `'${part1}${part2}'`;
    }
    return match;
  });

  // Fix template literals with spaces
  content = content.replace(/`([^`]*)\s+([^`]*)`/g, (match, part1, part2) => {
    if (part1.length > 1 && part2.length > 1) {
      return `\`${part1}${part2}\``;
    }
    return match;
  });

  // Fix JSX className with spaces
  content = content.replace(/className="([^"]*)\s+([^"]*)"/g, (match, part1, part2) => {
    if (part1.length > 1 && part2.length > 1) {
      return `className="${part1}${part2}"`;
    }
    return match;
  });

  // Fix missing commas in object literals
  content = content.replace(/(\w+):\s*'([^']+)'\s*(\w+):/g, '$1: \'$2\',\n      $3:');
  content = content.replace(/(\w+):\s*"([^"]+)"\s*(\w+):/g, '$1: "$2",\n      $3:');

  // Fix missing commas in arrays
  content = content.replace(/(\w+)\s*(\w+)\s*\[/g, '$1$2[');

  // Fix missing semicolons
  content = content.replace(/(\w+)\s*(\w+)\s*=\s*\[/g, '$1$2 = [');
  content = content.replace(/(\w+)\s*(\w+)\s*\(/g, '$1$2(');

  return content;
}

// Function to process a file
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

// Function to recursively find and process files
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (processFile(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const fixedCount = processDirectory('./pages');
console.log(`Fixed ${fixedCount} files in pages directory`);

const srcFixedCount = processDirectory('./src');
console.log(`Fixed ${srcFixedCount} files in src directory`);

console.log('Syntax error fixes completed!');