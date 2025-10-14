#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix unterminated string literals in import statements
  fixed = fixed.replace(/import\s+.*?from\s+"([^"]*?)(?:\n|$)/g, (match, importPath) => {
    if (!match.includes('"') || match.split('"').length % 2 === 0) {
      return match.replace(/([^"]*?)(?:\n|$)/, '$1"\n');
    }
    return match;
  });
  
  // Fix unterminated string literals in general
  fixed = fixed.replace(/"([^"]*?)(?:\n|$)/g, (match, str) => {
    if (match.endsWith('\n') && !match.endsWith('"\n')) {
      return `"${str}"\n`;
    }
    return match;
  });
  
  // Fix malformed import statements
  fixed = fixed.replace(/import\s+([^"]*?)\s+from\s+"([^"]*?)"([^;]*?)(?:\n|$)/g, (match, imports, module, rest) => {
    if (rest && !rest.includes(';')) {
      return `import ${imports} from "${module}";\n`;
    }
    return match;
  });
  
  // Fix broken JSX attributes
  fixed = fixed.replace(/className="([^"]*?)(?:\n|$)/g, (match, className) => {
    if (match.endsWith('\n') && !match.endsWith('"\n')) {
      return `className="${className}"\n`;
    }
    return match;
  });
  
  // Fix merge conflict markers
  fixed = fixed.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, '');
  fixed = fixed.replace(/<<<<<<< [^\n]*[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, '');
  
  // Fix malformed function declarations
  fixed = fixed.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{([^}]*?)(?:\n|$)/g, (match, name, body) => {
    if (!match.includes('}')) {
      return `const ${name}: React.FC = () => {\n${body}\n};\n`;
    }
    return match;
  });
  
  // Fix broken JSX structure - add missing closing tags
  const openTags = (fixed.match(/<(\w+)(?:\s[^>]*)?>/g) || []).length;
  const closeTags = (fixed.match(/<\/(\w+)>/g) || []).length;
  
  // Fix common JSX issues
  fixed = fixed.replace(/<(\w+)([^>]*?)(?:\n|$)/g, (match, tag, attrs) => {
    if (match.endsWith('\n') && !match.includes('>')) {
      return `<${tag}${attrs}>\n`;
    }
    return match;
  });
  
  // Fix missing semicolons in object properties
  fixed = fixed.replace(/(\w+):\s*([^,}]+)(?:\n|$)/g, (match, key, value) => {
    if (match.endsWith('\n') && !match.includes(',')) {
      return `${key}: ${value},\n`;
    }
    return match;
  });
  
  return fixed;
}

// Function to fix specific file patterns
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixSyntaxErrors(content);
    
    // If content changed, write it back
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
async function main() {
  console.log('Starting syntax error fixes...');
  
  // Find all TypeScript and TSX files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    '**/*.tsx',
    '**/*.ts'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { 
      ignore: ['node_modules/**', 'dist/**', '.next/**'] 
    });
    
    for (const file of files) {
      if (fixFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`Fixed ${totalFixed} files`);
}

main().catch(console.error);