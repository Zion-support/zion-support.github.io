#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common syntax error patterns and their fixes
const syntaxFixes = [
  // Fix missing imports for Eye icon
  {
    pattern: /import { ([^}]+) } from 'lucide-react';/g,
    replacement: (match, imports) => {
      if (!imports.includes('Eye') && match.includes('icon: Eye')) {
        return `import { ${imports}, Eye } from 'lucide-react';`;
      }
      return match;
    }
  },
  
  // Fix duplicate imports
  {
    pattern: /import { ([^}]+) } from 'lucide-react';\s*import { ([^}]+) } from 'lucide-react';/g,
    replacement: (match, imports1, imports2) => {
      const allImports = [...new Set([...imports1.split(','), ...imports2.split(',')])].join(', ');
      return `import { ${allImports} } from 'lucide-react';`;
    }
  },
  
  // Fix missing commas in arrays
  {
    pattern: /(\s+)([^,\s]+)\s*\n\s*([^,\s]+)\s*\]/g,
    replacement: '$1$2,\n$1$3]'
  },
  
  // Fix missing closing braces
  {
    pattern: /(\s+benefits: \[[^\]]+\])\s*\n\s*title:/g,
    replacement: '$1\n    },\n    {\n      title:'
  },
  
  // Fix missing commas after object properties
  {
    pattern: /(\s+benefits: \[[^\]]+\])\s*\n\s*([a-zA-Z]+):/g,
    replacement: '$1\n    },\n    {\n      $2:'
  },
  
  // Fix malformed JSX attributes
  {
    pattern: /className="([^"]*)"\s*onClick/g,
    replacement: 'className="$1" onClick'
  },
  
  // Fix missing semicolons
  {
    pattern: /(\s+const [^=]+ = [^;]+)\s*\n\s*const/g,
    replacement: '$1;\n\n  const'
  },
  
  // Fix console.log statements (remove them)
  {
    pattern: /console\.(log|warn|error|info|debug)\([^)]*\);\s*\n?/g,
    replacement: ''
  },
  
  // Fix duplicate component declarations
  {
    pattern: /const (\w+): React\.FC = \(\) => \{\s*import/g,
    replacement: 'import'
  },
  
  // Fix missing closing parentheses in function calls
  {
    pattern: /(\w+\([^)]*)\s*\n\s*const/g,
    replacement: '$1);\n\n  const'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Apply all syntax fixes
    syntaxFixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    // Additional specific fixes for common patterns
    const additionalFixes = [
      // Fix missing closing braces in features arrays
      {
        pattern: /(\s+benefits: \[[^\]]+\])\s*\n\s*title: '([^']+)',/g,
        replacement: '$1\n    },\n    {\n      title: \'$2\','
      },
      
      // Fix missing commas in object properties
      {
        pattern: /(\s+benefits: \[[^\]]+\])\s*\n\s*([a-zA-Z]+): '([^']+)',/g,
        replacement: '$1\n    },\n    {\n      $2: \'$3\','
      },
      
      // Fix malformed component structure
      {
        pattern: /const (\w+): React\.FC = \(\) => \{\s*import { ([^}]+) } from 'lucide-react';\s*const (\w+): React\.FC = \(\) => \{/g,
        replacement: 'import { $2 } from \'lucide-react\';\n\nconst $3: React.FC = () => {'
      }
    ];
    
    additionalFixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    if (modified) {
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

async function main() {
  console.log('Starting syntax error fixes...');
  
  // Find all TypeScript/JavaScript files in the app directory
  const files = await glob('app/**/*.{ts,tsx,js,jsx}');
  
  let fixedCount = 0;
  let totalFiles = files.length;
  
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });
  
  console.log(`\nFixed ${fixedCount} out of ${totalFiles} files`);
  console.log('Syntax error fixes completed!');
}

main().catch(console.error);

export { fixFile, syntaxFixes };