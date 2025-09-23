#!/usr/bin/env node;

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
// Function to fix specific lint error patterns;
function fixSpecificLintErrors(content, filePath) {
  let fixed = content;
  // Fix malformed export statements with extra parentheses;
  // Pattern: )); -> );
  fixed = fixed.replace(/\),\);$/gm, ');');
  // Fix incomplete array definitions;
  // Pattern: const features = [] followed by incomplete object;
  if (fixed.includes('const features = []') && fixed.includes('},')) {
    // Find the incomplete array and close it properly;
    const lines = fixed.split('\n');
    let inArray = false;
    let arrayStartIndex = -1;
    for (let i = 0; i < lines.length; i++) {;
      if (lines[i].includes('const features = []') || ;
          lines[i].includes('const benefits = []') || ;
          lines[i].includes('const useCases = []') || ;
          lines[i].includes('const pricing = []')) {
        inArray = true;
        arrayStartIndex = i;
} else if (inArray && lines[i].includes('},')) {;
        // Found the end of the array, close it properly;
        lines[i] = lines[i].replace('},', '  }');
        // Add closing bracket and semicolon;
        lines.splice(i + 1, 0, '];');
        inArray = false;
        break;
}
    }
    fixed = lines.join('\n');
}

  // Fix missing closing tags in JSX;
  // Pattern: Missing </div> before export;
  if (fixed.includes('<div') && !fixed.includes('</div>') && fixed.includes('export default')) {
    const lines = fixed.split('\n');
    const exportIndex = lines.findIndex(line => line.includes('export default'));
    if (exportIndex > 0) {
      // Add missing closing div and parenthesis;
      lines.splice(exportIndex, 0, '    </div>');
      lines.splice(exportIndex + 1, 0, '  );');
      fixed = lines.join('\n');
}
  }

  // Fix unterminated JSX contents;
  // Pattern: JSX that's not properly closed;
  if (fixed.includes('return (') && !fixed.includes(');') && fixed.includes('export default')) {
    const lines = fixed.split('\n');
    const exportIndex = lines.findIndex(line => line.includes('export default'));
    if (exportIndex > 0) {
      // Add missing closing parenthesis;
      lines.splice(exportIndex, 0, '  );');
      fixed = lines.join('\n');
}
  }

  // Fix malformed try-catch blocks;
  if (fixed.includes('try {') && !fixed.includes('} catch') && !fixed.includes('} finally')) {
    const lines = fixed.split('\n');
    const exportIndex = lines.findIndex(line => line.includes('export default'));
    if (exportIndex > 0) {
      lines.splice(exportIndex, 0, '  } catch (error) {');
      lines.splice(exportIndex + 1, 0, '    console.error(error);');
      lines.splice(exportIndex + 2, 0, '  }');
      fixed = lines.join('\n');
}
  }

  // Fix malformed import statements;
  fixed = fixed.replace(/import\s+([^;]+);\s*$/gm, 'import $1;');
  // Fix missing semicolons after variable declarations;
  fixed = fixed.replace(/(\s*const\s+\w+\s*=\s*\[\s*)(\s*export default)/, '$1  ];\n$2');
  // Fix malformed JSX attributes with spaces;
  fixed = fixed.replace(/className="([^"]*)\s+([^"]*)"/g, 'className="$1 $2"');
  // Fix incomplete function definitions;
  if (fixed.includes('export default function') && !fixed.includes('}') && fixed.includes('export default')) {
    const lines = fixed.split('\n');
    const exportIndex = lines.findIndex(line => line.includes('export default'));
    if (exportIndex > 0) {
      lines.splice(exportIndex, 0, '}');
      fixed = lines.join('\n');
}
  }

  // Fix malformed object literals;
  if (fixed.includes('{') && !fixed.includes('}') && fixed.includes('export default')) {
    const lines = fixed.split('\n');
    const exportIndex = lines.findIndex(line => line.includes('export default'));
    if (exportIndex > 0) {
      lines.splice(exportIndex, 0, '}');
      fixed = lines.join('\n');
}
  }

  // Fix specific patterns for service files;
  if (filePath.includes('/services/')) {
    // Fix incomplete pricing arrays;
    if (fixed.includes('const pricing = []') && fixed.includes('name: "Professional"')) {
      const lines = fixed.split('\n');
      let pricingStartIndex = -1;
      let pricingEndIndex = -1;
      for (let i = 0; i < lines.length; i++) {;
        if (lines[i].includes('const pricing = []')) {;
          pricingStartIndex = i;
} else if (pricingStartIndex !== -1 && lines[i].includes('"24/7 dedicated support"')) {;
          pricingEndIndex = i;
          break;
}
      }

      if (pricingStartIndex !== -1 && pricingEndIndex !== -1) {;
        // Replace the incomplete array with proper structure;
        lines[pricingStartIndex] = '  const pricing = [';
        lines[pricingEndIndex] = '    }';
        lines.splice(pricingEndIndex + 1, 0, '  ];');
        fixed = lines.join('\n');
}
    }
  }

  return fixed;
}

// Main function;
async function main() {
  try {
    console.log('Starting targeted lint error fixing...');
    // Get all TypeScript/JavaScript files with errors;
    const files = await glob('src/**/*.{ts,tsx,js,jsx}', {;
      ignore: ['node_modules/**', '*.test.*', '*.spec.*'];
});
    console.log(`Found ${files.length} files to process...`);
    let fixedCount = 0;
    let errorCount = 0;
    for (const file of files) {;
      try {;
        const content = fs.readFileSync(file, 'utf8');
        const fixed = fixSpecificLintErrors(content, file);
        if (content !== fixed) {;
          fs.writeFileSync(file, fixed, 'utf8');
          console.log(`Fixed: ${file}`);
          fixedCount++;
}
      } catch (error) {;
        console.error(`Error processing ${file}:`, error.message);
        errorCount++;
}
    }

    console.log(`\nCompleted: ${fixedCount} files fixed, ${errorCount} errors`);
} catch (error) {;
    console.error('Error in main function:', error);
}
}

main().catch(console.error);