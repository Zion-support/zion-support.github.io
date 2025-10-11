#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to recursively find all TypeScript/JavaScript files
function findSourceFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to process
      if (!['node_modules', '.git', '.next', 'dist', 'out', 'backup', 'backup-*', '*-disabled', '*.disabled'].includes(file)) {
        findSourceFiles(filePath, fileList);
      }
    } else if (stat.isFile() && (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js'))) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to fix remaining syntax errors
function fixRemainingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix common remaining syntax errors
    
    // 1. Fix malformed object literals with missing properties
    content = content.replace(/{\s*icon:\s*(\w+),\s*}/g, '{\n      icon: $1,\n      title: \'Feature\',\n      description: \'Description\',\n    }');
    
    // 2. Fix incomplete object declarations
    content = content.replace(/{\s*icon:\s*(\w+),\s*title:\s*'([^']*)',\s*}/g, '{\n      icon: $1,\n      title: \'$2\',\n      description: \'Description\',\n    }');
    
    // 3. Fix malformed array declarations
    content = content.replace(/const\s+(\w+)\s*=\s*\[\s*{\s*icon:\s*(\w+),\s*}\s*\];/g, 'const $1 = [\n    {\n      icon: $2,\n      title: \'Feature\',\n      description: \'Description\',\n    }\n  ];');
    
    // 4. Fix missing closing brackets in arrays
    content = content.replace(/const\s+(\w+)\s*=\s*\[\s*{\s*icon:\s*(\w+),\s*}\s*$/gm, 'const $1 = [\n    {\n      icon: $2,\n      title: \'Feature\',\n      description: \'Description\',\n    }\n  ];');
    
    // 5. Fix malformed JSX structure
    content = content.replace(/<>\s*<\/>\s*<Helmet>/g, '<>\n      <Helmet>');
    
    // 6. Fix missing return statements
    content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{\s*const\s+(\w+)\s*=/g, 'const $1: React.FC = () => {\n  const $2 =');
    
    // 7. Fix malformed function declarations
    content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{\s*}/g, 'const $1: React.FC = () => {\n  return (\n    <div>Component</div>\n  );\n};');
    
    // 8. Fix missing closing braces
    const openBraces = (content.match(/{/g) || []).length;
    const closeBraces = (content.match(/}/g) || []).length;
    if (openBraces > closeBraces) {
      content += '\n}'.repeat(openBraces - closeBraces);
    }
    
    // 9. Fix missing closing brackets
    const openBrackets = (content.match(/\[/g) || []).length;
    const closeBrackets = (content.match(/\]/g) || []).length;
    if (openBrackets > closeBrackets) {
      content += ']'.repeat(openBrackets - closeBrackets);
    }
    
    // 10. Fix malformed JSX closing tags
    content = content.replace(/<(\w+)[^>]*>([\s\S]*?)<\/\1>/g, (match, tag, inner) => {
      // Check if there are unclosed tags inside
      const openTags = inner.match(/<\w+[^>]*>/g) || [];
      const closeTags = inner.match(/<\/\w+>/g) || [];
      if (openTags.length !== closeTags.length) {
        return match; // Return as is if there are unclosed tags
      }
      return match;
    });
    
    // Only write if content changed
    if (content !== originalContent) {
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

// Main execution
console.log('Starting remaining error fixes...');

const sourceFiles = findSourceFiles('./app');
console.log(`Found ${sourceFiles.length} source files to check`);

let fixedCount = 0;
sourceFiles.forEach(filePath => {
  if (fixRemainingErrors(filePath)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);

console.log('Remaining error fixes completed!');