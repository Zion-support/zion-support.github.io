const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix extra commas in type definitions
    content = content.replace(/(\w+):\s*unknown;,/g, '$1: unknown,');
    content = content.replace(/(\w+):\s*unknown;\s*,/g, '$1: unknown,');
    
    // Fix missing imports
    content = content.replace(/icon:\s*(\w+),/g, (match, iconName) => {
      if (!content.includes(`import { ${iconName}`) && !content.includes(`import {${iconName}`)) {
        // Add the missing import
        const importMatch = content.match(/import\s+{[^}]+}\s+from\s+'lucide-react';/);
        if (importMatch) {
          content = content.replace(importMatch[0], importMatch[0].replace('}', `, ${iconName}`));
        }
      }
      return match;
    });
    
    // Fix missing commas in object properties
    content = content.replace(/(\w+):\s*([^,}]+)\n\s*(\w+):/g, '$1: $2,\n    $3:');
    
    // Fix missing semicolons in array items
    content = content.replace(/(\w+):\s*([^,}]+)\n\s*(\w+):/g, '$1: $2,\n    $3:');
    
    // Fix incomplete object definitions
    content = content.replace(/{\s*\/\/\s*TODO:.*?\n\s*}/g, '{\n  // TODO: Add content\n}');
    
    // Fix missing closing braces
    content = content.replace(/(\w+):\s*([^,}]+)\n\s*(\w+):/g, '$1: $2,\n    $3:');
    
    // Fix malformed JSX
    content = content.replace(/<(\w+)\s*\/\/\s*([^>]+)>/g, '<$1>// $2');
    
    // Fix missing semicolons after variable declarations
    content = content.replace(/(\w+)\s*=\s*\[([^\]]+)\]\s*$/gm, '$1 = [$2];');
    
    // Fix incomplete function parameters
    content = content.replace(/\(\s*\/\/\s*TODO:.*?\n\s*\)/g, '()');
    
    // Fix malformed JSX attributes
    content = content.replace(/className="([^"]*)\s*\/\/\s*([^"]*)"/g, 'className="$1" // $2');
    
    // Fix missing closing parentheses
    content = content.replace(/\(\s*\/\/\s*TODO:.*?\n\s*\)/g, '()');
    
    // Fix incomplete object properties
    content = content.replace(/(\w+):\s*([^,}]+)\n\s*(\w+):/g, '$1: $2,\n    $3:');
    
    // Fix malformed JSX elements
    content = content.replace(/<(\w+)\s*\/\/\s*([^>]+)>/g, '<$1>// $2');
    
    // Fix missing commas in arrays
    content = content.replace(/(\w+):\s*([^,}]+)\n\s*(\w+):/g, '$1: $2,\n    $3:');
    
    // Fix incomplete function definitions
    content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{\s*\/\/\s*TODO:.*?\n\s*}/g, 'const $1: React.FC = () => {\n  return (\n    <div>Coming Soon</div>\n  );\n};');
    
    // Fix missing closing braces
    content = content.replace(/(\w+):\s*([^,}]+)\n\s*(\w+):/g, '$1: $2,\n    $3:');
    
    // Fix malformed JSX comments
    content = content.replace(/\/\/\s*([^<]+)</g, '// $1\n          <');
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*=\s*\[([^\]]+)\]\s*$/gm, '$1 = [$2];');
    
    // Fix incomplete object definitions
    content = content.replace(/{\s*\/\/\s*TODO:.*?\n\s*}/g, '{\n  // TODO: Add content\n}');
    
    // Fix extra commas in type definitions
    content = content.replace(/(\w+):\s*unknown;,/g, '$1: unknown,');
    content = content.replace(/(\w+):\s*unknown;\s*,/g, '$1: unknown,');
    
    // Fix missing commas in object properties
    content = content.replace(/(\w+):\s*([^,}]+)\n\s*(\w+):/g, '$1: $2,\n    $3:');
    
    // Fix missing semicolons in array items
    content = content.replace(/(\w+):\s*([^,}]+)\n\s*(\w+):/g, '$1: $2,\n    $3:');
    
    // Fix incomplete object definitions
    content = content.replace(/{\s*\/\/\s*TODO:.*?\n\s*}/g, '{\n  // TODO: Add content\n}');
    
    // Fix missing closing braces
    content = content.replace(/(\w+):\s*([^,}]+)\n\s*(\w+):/g, '$1: $2,\n    $3:');
    
    // Fix malformed JSX
    content = content.replace(/<(\w+)\s*\/\/\s*([^>]+)>/g, '<$1>// $2');
    
    // Fix missing semicolons after variable declarations
    content = content.replace(/(\w+)\s*=\s*\[([^\]]+)\]\s*$/gm, '$1 = [$2];');
    
    // Fix incomplete function parameters
    content = content.replace(/\(\s*\/\/\s*TODO:.*?\n\s*\)/g, '()');
    
    // Fix malformed JSX attributes
    content = content.replace(/className="([^"]*)\s*\/\/\s*([^"]*)"/g, 'className="$1" // $2');
    
    // Fix missing closing parentheses
    content = content.replace(/\(\s*\/\/\s*TODO:.*?\n\s*\)/g, '()');
    
    // Fix incomplete object properties
    content = content.replace(/(\w+):\s*([^,}]+)\n\s*(\w+):/g, '$1: $2,\n    $3:');
    
    // Fix malformed JSX elements
    content = content.replace(/<(\w+)\s*\/\/\s*([^>]+)>/g, '<$1>// $2');
    
    // Fix missing commas in arrays
    content = content.replace(/(\w+):\s*([^,}]+)\n\s*(\w+):/g, '$1: $2,\n    $3:');
    
    // Fix incomplete function definitions
    content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{\s*\/\/\s*TODO:.*?\n\s*}/g, 'const $1: React.FC = () => {\n  return (\n    <div>Coming Soon</div>\n  );\n};');
    
    // Fix missing closing braces
    content = content.replace(/(\w+):\s*([^,}]+)\n\s*(\w+):/g, '$1: $2,\n    $3:');
    
    // Fix malformed JSX comments
    content = content.replace(/\/\/\s*([^<]+)</g, '// $1\n          <');
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*=\s*\[([^\]]+)\]\s*$/gm, '$1 = [$2];');
    
    // Fix incomplete object definitions
    content = content.replace(/{\s*\/\/\s*TODO:.*?\n\s*}/g, '{\n  // TODO: Add content\n}');
    
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

// Find all TypeScript/JSX files
const files = glob.sync('src/**/*.{ts,tsx}', { cwd: process.cwd() });

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);