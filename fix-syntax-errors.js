#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common patterns to fix
const fixes = [
  // Fix malformed imports with extra text
  {
    pattern: /import.*?;.*?ursor\/analyze-improve-and-merge-code-4a9f/g,
    replacement: (match) => {
      const importMatch = match.match(/import.*?;/);
      return importMatch ? importMatch[0] : match;
    }
  },
  
  // Fix missing function declarations
  {
    pattern: /^  return \(<div/gm,
    replacement: 'export default function Page() {\n  return (<div'
  },
  
  // Fix missing function declarations with Helmet
  {
    pattern: /^  return \(<>/gm,
    replacement: 'export default function Page() {\n  return (<>'
  },
  
  // Fix missing closing tags for sections
  {
    pattern: /<section([^>]*)>([\s\S]*?)(?=<section|<\/div>|$)/g,
    replacement: (match, attributes, content) => {
      if (!content.includes('</section>')) {
        return `<section${attributes}>${content}</section>`;
      }
      return match;
    }
  },
  
  // Fix malformed export statements
  {
    pattern: /export default (\w+);$/gm,
    replacement: (match, name) => {
      // Convert to proper case
      const properName = name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, '$1');
      return `export default ${properName};`;
    }
  },
  
  // Fix missing imports
  {
    pattern: /<Helmet>/g,
    replacement: (match, offset, string) => {
      if (!string.includes('import { Helmet }')) {
        return 'import { Helmet } from "react-helmet-async";\n\n' + match;
      }
      return match;
    }
  },
  
  // Fix missing motion imports
  {
    pattern: /<motion\./g,
    replacement: (match, offset, string) => {
      if (!string.includes('import { motion }')) {
        return 'import { motion } from "framer-motion";\n\n' + match;
      }
      return match;
    }
  }
];

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Apply fixes
    fixes.forEach(fix => {
      if (typeof fix.replacement === 'function') {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      } else {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      }
    });
    
    // Additional specific fixes
    // Fix missing closing tags
    if (content.includes('<section') && !content.includes('</section>')) {
      content = content.replace(/(<section[^>]*>)([\s\S]*?)(?=<section|<\/div>|$)/g, '$1$2</section>');
      modified = true;
    }
    
    // Fix missing function wrapper
    if (content.includes('return (<') && !content.includes('function') && !content.includes('=>')) {
      content = `export default function Page() {\n${content}\n}`;
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
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
async function main() {
  console.log('Starting syntax error fixes...');
  
  // Find all TypeScript/JavaScript files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'api/**/*.js',
    'components/**/*.tsx',
    'components/**/*.ts'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      if (fixFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`Fixed ${totalFixed} files`);
}

main().catch(console.error);