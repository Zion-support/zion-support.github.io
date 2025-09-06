<<<<<<< HEAD
}});
console.log(`Fixed ${fixedCount} files`);
;
};
});
console.log(`Fixed ${fixedCount} files`);
;
#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix remaining syntax errors
function fixSyntaxErrors(content) {
  // Fix object property syntax issues
  content = content.replace(/(\w+):\s*([^,}]+),\s*$/gm, '$1: $2,');
  
  // Fix missing semicolons after variable declarations
  content = content.replace(/(\w+)\s*=\s*[^;]+,\s*$/gm, (match) => {
    if (!match.includes(';')) {
      return match.replace(/,\s*$/, ';');
    }
    return match;
  });
  
  // Fix function parameter syntax
  content = content.replace(/function\s+\w+\s*\([^)]*\)\s*\{/g, (match) => {
    return match.replace(/,(\s*\))/g, '$1');
  });
  
  // Fix arrow function syntax
  content = content.replace(/\([^)]*\)\s*=>\s*\{/g, (match) => {
    return match.replace(/,(\s*\))/g, '$1');
  });
  
  // Fix object destructuring
  content = content.replace(/\{\s*([^}]+)\s*\}\s*=\s*/g, (match, props) => {
    const fixedProps = props.replace(/,(\s*[}])/g, '$1');
    return `{ ${fixedProps} } = `;
  });
  
  // Fix array destructuring
  content = content.replace(/\[\s*([^\]]+)\s*\]\s*=\s*/g, (match, props) => {
    const fixedProps = props.replace(/,(\s*\])/g, '$1');
    return `[ ${fixedProps} ] = `;
  });
  
  // Fix JSX attribute syntax
  content = content.replace(/(\w+)=\{([^}]+)\}/g, (match, attr, value) => {
    if (value.includes(',')) {
      const fixedValue = value.replace(/,(\s*\})/g, '$1');
      return `${attr}={${fixedValue}}`;
    }
    return match;
  });
  
  // Fix template literal syntax
  content = content.replace(/`([^`]*),`/g, '`$1`');
  
  // Fix string concatenation
  content = content.replace(/(['"`])\s*\+\s*(['"`])/g, '$1$2');
  
  return content;
}

// Function to process a single file
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

// Main function
async function main() {
  const patterns = [
    'src/**/*.tsx',
    'src/**/*.ts',
    'zion-os/**/*.tsx',
    'zion-os/**/*.ts'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    
    for (const file of files) {
      totalFiles++;
      if (processFile(file)) {
        fixedFiles++;
      }
    }
  }
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files`);
}

// Run the main function
main().catch(console.error);
=======
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

let totalFixed = 0;

files.forEach(file => {
  try {
    const filePath = path.join(process.cwd(), file);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing commas in object literals and function parameters
    content = content.replace(/(\w+)\s*=\s*\{([^}]*)\}\s*$/gm, (match, varName, objContent) => {
      if (objContent && !objContent.trim().endsWith(',') && objContent.trim() !== '') {
        modified = true;
        return `${varName} = {${objContent},}`;
      }
      return match;
    });
    
    // Fix missing semicolons after variable declarations
    content = content.replace(/^(\s*)(\w+)\s*=\s*[^;]+(?!;)\s*$/gm, (match, indent, varName) => {
      if (!match.includes('function') && !match.includes('if') && !match.includes('for') && !match.includes('while') && !match.includes('switch') && !match.includes('try') && !match.includes('catch') && !match.includes('finally') && !match.includes('return') && !match.includes('throw') && !match.includes('break') && !match.includes('continue') && !match.includes('debugger') && !match.includes('export') && !match.includes('import')) {
        modified = true;
        return match + ';';
      }
      return match;
    });
    
    // Fix missing commas in function parameters
    content = content.replace(/\(([^)]*)\s*\)\s*=>/g, (match, params) => {
      if (params && !params.trim().endsWith(',') && params.trim() !== '') {
        modified = true;
        return `(${params},) =>`;
      }
      return match;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${file}`);
      totalFixed++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`\nTotal files fixed: ${totalFixed}`);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
