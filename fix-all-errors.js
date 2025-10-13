#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix duplicate React imports
    if (content.includes("import React from 'react';") && content.includes("import React, {")) {
      content = content.replace(/import React from 'react';\s*import React, {([^}]+)} from '([^']+)';/g, "import React, { $1 } from '$2';");
      modified = true;
    }

    // Fix malformed imports
    content = content.replace(/import React, {\s*([^}]+)\s*}\s*from\s*'([^']+)';/g, (match, imports, module) => {
      const cleanImports = imports.replace(/\s+/g, ' ').trim();
      return `import React, { ${cleanImports} } from '${module}';`;
    });

    // Fix incomplete component declarations
    if (content.includes('const Component = () => {') && content.includes('return (')) {
      // Remove duplicate component declaration
      content = content.replace(/const Component = \(\) => \{\s*/, '');
      modified = true;
    }

    // Fix malformed JSX returns
    if (content.includes('return (') && content.includes('</div>')) {
      // Ensure proper JSX structure
      const lines = content.split('\n');
      let newLines = [];
      let inReturn = false;
      let braceCount = 0;
      let jsxStarted = false;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('return (')) {
          inReturn = true;
          newLines.push(line);
          continue;
        }
        
        if (inReturn) {
          if (line.includes('<') && !jsxStarted) {
            jsxStarted = true;
          }
          
          if (line.includes('<div') || line.includes('<section') || line.includes('<main')) {
            braceCount++;
          }
          if (line.includes('</div>') || line.includes('</section>') || line.includes('</main>')) {
            braceCount--;
          }
          
          newLines.push(line);
          
          if (braceCount === 0 && jsxStarted && (line.includes('</div>') || line.includes('</section>') || line.includes('</main>'))) {
            newLines.push('  );');
            inReturn = false;
          }
        } else {
          newLines.push(line);
        }
      }
      
      content = newLines.join('\n');
      modified = true;
    }

    // Fix missing export statements
    if (content.includes('const ') && content.includes('return (') && !content.includes('export default')) {
      const lines = content.split('\n');
      const lastLine = lines[lines.length - 1].trim();
      
      if (lastLine === '}' || lastLine === '};') {
        lines.push('');
        lines.push('export default HomePage;');
        content = lines.join('\n');
        modified = true;
      }
    }

    // Fix unterminated string literals
    content = content.replace(/['"`]([^'"`]*)$/gm, (match, content) => {
      if (!match.endsWith('"') && !match.endsWith("'") && !match.endsWith('`')) {
        return match + '"';
      }
      return match;
    });

    // Fix missing semicolons
    content = content.replace(/(\w+)\s*$/gm, (match) => {
      if (match.trim() && !match.includes(';') && !match.includes('{') && !match.includes('}') && !match.includes('(') && !match.includes(')')) {
        return match + ';';
      }
      return match;
    });

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Main function
async function main() {
  // Find all TypeScript/JSX files
  const files = await glob('app/**/*.{ts,tsx}');

  console.log(`Found ${files.length} files to check...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);