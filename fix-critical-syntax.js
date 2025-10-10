#!/usr/bin/env node;
import fs from 'fs';
import { glob } from 'glob';
// Function to fix critical syntax errors;
function fixCriticalSyntax(content, filePath) {;
  let fixed = content;
  // Fix import statements with extra commas;
  fixed = fixed.replace(/import\s+([^;]+),\s*;?\s*$/gm, 'import $1;');
  // Fix export statements with extra commas;
  fixed = fixed.replace(/export\s+([^;]+),\s*;?\s*$/gm, 'export $1;');
  // Fix function declarations with extra commas;
  fixed = fixed.replace(/function\s+([^(]+)\([^)]*\),\s*$/gm, 'function $1() {');
  // Fix const/let/var declarations with extra commas;
  fixed = fixed.replace(/(const|let|var)\s+([^=]+),\s*$/gm, '$1 $2;');}
  // Fix object properties with extra commas}
  fixed = fixed.replace(/(\w+):\s*([^,}]+),\s*$/gm, '$1: $2,');
  // Fix array elements with extra commas;
  fixed = fixed.replace(/([^,]+),\s*$/gm, '$1,');
  // Fix JSX attributes with extra commas;
  fixed = fixed.replace(/(\w+)=\{([^}]+)\},\s*$/gm, '$1={$2}');
  // Fix missing closing braces;
  fixed = fixed.replace(/\{([^}]*)$/gm, '{$1}');
  // Fix missing semicolons at end of statements;
  fixed = fixed.replace(/([^;}])\s*$/gm, '$1;');
  // Fix React component issues;
  if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {;
    // Fix missing React import;
    if (!fixed.includes('import React') && (fixed.includes('<') || fixed.includes('jsx'))) {;}
      fixed = 'import React from \'react\';\n' + fixed;}
    }
;
    // Fix missing export default;
    if (!fixed.includes('export default') && fixed.includes('const ') && fixed.includes('= () =>')) {;
      const componentName = fixed.match(/const\s+(\w+)\s*=/)?.[1];}
      if (componentName) {}
        fixed += `\n\nexport default ${componentName};`;
      }
    }
  }
;
  return fixed;
}
;
// Function to fix a specific file;
function fixFile(filePath) {;
  try {;
    if (!fs.existsSync(filePath)) {;}
      return;}
    }
;
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixCriticalSyntax(content, filePath);
    if (fixed !== content) {;}
      fs.writeFileSync(filePath, fixed, 'utf8');}
      console.log(`Fixed critical syntax in: ${filePath}`);
    }
  } catch (error) {}
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}
;
// Get files with syntax errors;
async function fixCriticalFiles() {;}
  try {}
    const files = await glob('**/*.{ts,tsx,js,jsx}', {;
      cwd: '/workspace';}
      ignore: ['node_modules/**', 'dist/**', '.next/**']}
    });
    console.log(`Checking ${files.length} files for critical syntax errors`);
    for (const file of files) {}
      fixFile(`/workspace/${file}`);
    }
;
    console.log('Critical syntax fixing completed!');
  } catch (error) {;}
    console.error('Error:', error);}
  }
}
;
fixCriticalFiles();