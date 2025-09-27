import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Fix critical syntax errors in template literals and string concatenations
const fixTemplateLiterals = (content) => {
  // Fix malformed template literals with spaces
  content = content.replace(/\`([^`]*)\s+([^`]*)\`/g, (match, part1, part2) => {
    // If it looks like a malformed template literal, fix it
    if (part1.includes('${') && part2.includes('}')) {
      return `\`${part1}${part2}\``;
    }
    return match;
  });

  // Fix malformed variable references in template literals
  content = content.replace(/\$\{\s*([^}]+)\s*\}/g, (match, varName) => {
    // Remove spaces from variable names
    const cleanVarName = varName.replace(/\s+/g, '');
    return `\${${cleanVarName}}`;
  });

  // Fix malformed string concatenations
  content = content.replace(/\+\s*['"`]([^'"`]*)\s*([^'"`]*)\s*['"`]/g, (match, part1, part2) => {
    if (part1 && part2) {
      return `+ '${part1}${part2}'`;
    }
    return match;
  });

  return content;
};

// Fix malformed function calls and parameters
const fixFunctionCalls = (content) => {
  // Fix malformed function parameters with spaces
  content = content.replace(/\(\s*([^)]+)\s*\)/g, (match, params) => {
    // Fix parameters that have spaces in the middle
    const fixedParams = params.replace(/(\w+)\s+(\w+)/g, '$1, $2');
    return `(${fixedParams})`;
  });

  // Fix malformed array/object destructuring
  content = content.replace(/\{\s*([^}]+)\s*\}/g, (match, props) => {
    // Fix properties that have spaces in the middle
    const fixedProps = props.replace(/(\w+)\s+(\w+)/g, '$1, $2');
    return `{${fixedProps}}`;
  });

  return content;
};

// Main function to fix files
async function fixCriticalErrors() {
  console.log('🔧 Fixing critical syntax errors...');
  
  try {
    // Get all TypeScript and JavaScript files
    const files = await glob('src/**/*.{ts,tsx,js,jsx}', { 
      ignore: ['node_modules/**', 'dist/**', 'build/**'] 
    });

    let fixedCount = 0;
    let errorCount = 0;

    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        const originalContent = content;

        // Apply fixes
        content = fixTemplateLiterals(content);
        content = fixFunctionCalls(content);

        // Only write if content changed
        if (content !== originalContent) {
          fs.writeFileSync(file, content, 'utf8');
          console.log(`✅ Fixed: ${file}`);
          fixedCount++;
        }
      } catch (error) {
        console.error(`❌ Error fixing ${file}:`, error.message);
        errorCount++;
      }
    }

    console.log(`\n🎉 Fixed ${fixedCount} files with ${errorCount} errors`);
  } catch (error) {
    console.error('❌ Error during fix process:', error.message);
  }
}

fixCriticalErrors();