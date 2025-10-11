#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixJavaScriptSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common JavaScript syntax issues
    const fixes = [
      // Fix semicolons in object properties
      {
        pattern: /(\w+):\s*([^,}]+);/g,
        replacement: '$1: $2'
      },
      // Fix semicolons in function calls
      {
        pattern: /(\w+)\s*\(\s*([^)]*?);\s*\)/g,
        replacement: '$1($2)'
      },
      // Fix semicolons in array elements
      {
        pattern: /\[\s*([^\]]*?);\s*\]/g,
        replacement: '[$1]'
      },
      // Fix semicolons in object literals
      {
        pattern: /\{\s*([^}]*?);\s*\}/g,
        replacement: '{$1}'
      },
      // Fix semicolons in function parameters
      {
        pattern: /\(\s*([^)]*?);\s*\)/g,
        replacement: '($1)'
      },
      // Fix semicolons in destructuring
      {
        pattern: /\{\s*([^}]*?);\s*\}/g,
        replacement: '{$1}'
      },
      // Fix semicolons in template literals
      {
        pattern: /`([^`]*?);`/g,
        replacement: '`$1`'
      },
      // Fix semicolons in string literals
      {
        pattern: /"([^"]*?);"/g,
        replacement: '"$1"'
      },
      {
        pattern: /'([^']*?);'/g,
        replacement: "'$1'"
      },
      // Fix semicolons in comments
      {
        pattern: /\/\*\s*([^*]*?);\s*\*\//g,
        replacement: '/* $1 */'
      },
      {
        pattern: /\/\/\s*([^\n]*?);/g,
        replacement: '// $1'
      },
      // Fix semicolons in arrow functions
      {
        pattern: /\(\s*([^)]*?);\s*\)\s*=>/g,
        replacement: '($1) =>'
      },
      // Fix semicolons in class methods
      {
        pattern: /(\w+)\s*\(\s*([^)]*?);\s*\)\s*\{/g,
        replacement: '$1($2) {'
      },
      // Fix semicolons in if statements
      {
        pattern: /if\s*\(\s*([^)]*?);\s*\)/g,
        replacement: 'if ($1)'
      },
      // Fix semicolons in for loops
      {
        pattern: /for\s*\(\s*([^;]*?);\s*([^;]*?);\s*([^)]*?);\s*\)/g,
        replacement: 'for ($1; $2; $3)'
      },
      // Fix semicolons in while loops
      {
        pattern: /while\s*\(\s*([^)]*?);\s*\)/g,
        replacement: 'while ($1)'
      },
      // Fix semicolons in switch statements
      {
        pattern: /switch\s*\(\s*([^)]*?);\s*\)/g,
        replacement: 'switch ($1)'
      },
      // Fix semicolons in catch blocks
      {
        pattern: /catch\s*\(\s*([^)]*?);\s*\)/g,
        replacement: 'catch ($1)'
      },
      // Fix semicolons in import statements
      {
        pattern: /import\s*\(\s*([^)]*?);\s*\)/g,
        replacement: 'import($1)'
      },
      // Fix semicolons in require statements
      {
        pattern: /require\s*\(\s*([^)]*?);\s*\)/g,
        replacement: 'require($1)'
      },
      // Fix semicolons in export statements
      {
        pattern: /export\s*\(\s*([^)]*?);\s*\)/g,
        replacement: 'export($1)'
      },
      // Fix semicolons in module.exports
      {
        pattern: /module\.exports\s*=\s*([^;]+);/g,
        replacement: 'module.exports = $1'
      },
      // Fix semicolons in return statements
      {
        pattern: /return\s+([^;]+);/g,
        replacement: 'return $1'
      },
      // Fix semicolons in throw statements
      {
        pattern: /throw\s+([^;]+);/g,
        replacement: 'throw $1'
      },
      // Fix semicolons in new statements
      {
        pattern: /new\s+([^(]+)\s*\(\s*([^)]*?);\s*\)/g,
        replacement: 'new $1($2)'
      },
      // Fix semicolons in typeof statements
      {
        pattern: /typeof\s+([^;]+);/g,
        replacement: 'typeof $1'
      },
      // Fix semicolons in instanceof statements
      {
        pattern: /([^;]+)\s+instanceof\s+([^;]+);/g,
        replacement: '$1 instanceof $2'
      },
      // Fix semicolons in in statements
      {
        pattern: /([^;]+)\s+in\s+([^;]+);/g,
        replacement: '$1 in $2'
      },
      // Fix semicolons in of statements
      {
        pattern: /([^;]+)\s+of\s+([^;]+);/g,
        replacement: '$1 of $2'
      },
      // Fix semicolons in delete statements
      {
        pattern: /delete\s+([^;]+);/g,
        replacement: 'delete $1'
      },
      // Fix semicolons in void statements
      {
        pattern: /void\s+([^;]+);/g,
        replacement: 'void $1'
      },
      // Fix semicolons in yield statements
      {
        pattern: /yield\s+([^;]+);/g,
        replacement: 'yield $1'
      },
      // Fix semicolons in await statements
      {
        pattern: /await\s+([^;]+);/g,
        replacement: 'await $1'
      },
      // Fix semicolons in async statements
      {
        pattern: /async\s+([^;]+);/g,
        replacement: 'async $1'
      },
      // Fix semicolons in function declarations
      {
        pattern: /function\s+(\w+)\s*\(\s*([^)]*?);\s*\)/g,
        replacement: 'function $1($2)'
      },
      // Fix semicolons in class declarations
      {
        pattern: /class\s+(\w+)\s+extends\s+([^;]+);/g,
        replacement: 'class $1 extends $2'
      },
      // Fix semicolons in interface declarations
      {
        pattern: /interface\s+(\w+)\s+extends\s+([^;]+);/g,
        replacement: 'interface $1 extends $2'
      },
      // Fix semicolons in type declarations
      {
        pattern: /type\s+(\w+)\s*=\s*([^;]+);/g,
        replacement: 'type $1 = $2'
      },
      // Fix semicolons in enum declarations
      {
        pattern: /enum\s+(\w+)\s*\{([^}]*?);\s*\}/g,
        replacement: 'enum $1 {$2}'
      },
      // Fix semicolons in namespace declarations
      {
        pattern: /namespace\s+(\w+)\s*\{([^}]*?);\s*\}/g,
        replacement: 'namespace $1 {$2}'
      },
      // Fix semicolons in module declarations
      {
        pattern: /module\s+(\w+)\s*\{([^}]*?);\s*\}/g,
        replacement: 'module $1 {$2}'
      },
      // Fix semicolons in declare statements
      {
        pattern: /declare\s+([^;]+);/g,
        replacement: 'declare $1'
      },
      // Fix semicolons in const assertions
      {
        pattern: /as\s+const\s*;?/g,
        replacement: 'as const'
      },
      // Fix semicolons in satisfies statements
      {
        pattern: /satisfies\s+([^;]+);/g,
        replacement: 'satisfies $1'
      },
      // Fix semicolons in keyof statements
      {
        pattern: /keyof\s+([^;]+);/g,
        replacement: 'keyof $1'
      },
      // Fix semicolons in typeof statements
      {
        pattern: /typeof\s+([^;]+);/g,
        replacement: 'typeof $1'
      },
      // Fix semicolons in infer statements
      {
        pattern: /infer\s+([^;]+);/g,
        replacement: 'infer $1'
      },
      // Fix semicolons in extends statements
      {
        pattern: /extends\s+([^;]+);/g,
        replacement: 'extends $1'
      },
      // Fix semicolons in implements statements
      {
        pattern: /implements\s+([^;]+);/g,
        replacement: 'implements $1'
      },
      // Fix semicolons in readonly statements
      {
        pattern: /readonly\s+([^;]+);/g,
        replacement: 'readonly $1'
      },
      // Fix semicolons in optional statements
      {
        pattern: /(\w+)\?\s*:\s*([^;]+);/g,
        replacement: '$1?: $2'
      },
      // Fix semicolons in required statements
      {
        pattern: /(\w+)\s*:\s*([^;]+);/g,
        replacement: '$1: $2'
      },
      // Fix semicolons in index signatures
      {
        pattern: /\[\s*([^:]+):\s*([^\]]+)\s*\]\s*:\s*([^;]+);/g,
        replacement: '[$1: $2]: $3'
      },
      // Fix semicolons in call signatures
      {
        pattern: /\(\s*([^)]*?);\s*\)\s*:\s*([^;]+);/g,
        replacement: '($1): $2'
      },
      // Fix semicolons in construct signatures
      {
        pattern: /new\s*\(\s*([^)]*?);\s*\)\s*:\s*([^;]+);/g,
        replacement: 'new ($1): $2'
      },
      // Fix semicolons in function types
      {
        pattern: /\(\s*([^)]*?);\s*\)\s*=>\s*([^;]+);/g,
        replacement: '($1) => $2'
      },
      // Fix semicolons in union types
      {
        pattern: /([^|]+)\s*\|\s*([^|]+);/g,
        replacement: '$1 | $2'
      },
      // Fix semicolons in intersection types
      {
        pattern: /([^&]+)\s*&\s*([^&]+);/g,
        replacement: '$1 & $2'
      },
      // Fix semicolons in conditional types
      {
        pattern: /([^?]+)\s*\?\s*([^:]+):\s*([^;]+);/g,
        replacement: '$1 ? $2 : $3'
      },
      // Fix semicolons in mapped types
      {
        pattern: /\{\s*\[([^:]+):\s*([^\]]+)\]\s*:\s*([^;]+);\s*\}/g,
        replacement: '{[$1: $2]: $3}'
      },
      // Fix semicolons in template literal types
      {
        pattern: /`([^`]*?);`/g,
        replacement: '`$1`'
      },
      // Fix semicolons in keyof mapped types
      {
        pattern: /keyof\s+([^;]+);/g,
        replacement: 'keyof $1'
      },
      // Fix semicolons in readonly mapped types
      {
        pattern: /readonly\s+([^;]+);/g,
        replacement: 'readonly $1'
      },
      // Fix semicolons in partial mapped types
      {
        pattern: /Partial\s*<\s*([^>]+);\s*>/g,
        replacement: 'Partial<$1>'
      },
      // Fix semicolons in required mapped types
      {
        pattern: /Required\s*<\s*([^>]+);\s*>/g,
        replacement: 'Required<$1>'
      },
      // Fix semicolons in pick mapped types
      {
        pattern: /Pick\s*<\s*([^,]+),\s*([^>]+);\s*>/g,
        replacement: 'Pick<$1, $2>'
      },
      // Fix semicolons in omit mapped types
      {
        pattern: /Omit\s*<\s*([^,]+),\s*([^>]+);\s*>/g,
        replacement: 'Omit<$1, $2>'
      },
      // Fix semicolons in record mapped types
      {
        pattern: /Record\s*<\s*([^,]+),\s*([^>]+);\s*>/g,
        replacement: 'Record<$1, $2>'
      },
      // Fix semicolons in exclude mapped types
      {
        pattern: /Exclude\s*<\s*([^,]+),\s*([^>]+);\s*>/g,
        replacement: 'Exclude<$1, $2>'
      },
      // Fix semicolons in extract mapped types
      {
        pattern: /Extract\s*<\s*([^,]+),\s*([^>]+);\s*>/g,
        replacement: 'Extract<$1, $2>'
      },
      // Fix semicolons in nonnullable mapped types
      {
        pattern: /NonNullable\s*<\s*([^>]+);\s*>/g,
        replacement: 'NonNullable<$1>'
      },
      // Fix semicolons in return type mapped types
      {
        pattern: /ReturnType\s*<\s*([^>]+);\s*>/g,
        replacement: 'ReturnType<$1>'
      },
      // Fix semicolons in parameters mapped types
      {
        pattern: /Parameters\s*<\s*([^>]+);\s*>/g,
        replacement: 'Parameters<$1>'
      },
      // Fix semicolons in constructor parameters mapped types
      {
        pattern: /ConstructorParameters\s*<\s*([^>]+);\s*>/g,
        replacement: 'ConstructorParameters<$1>'
      },
      // Fix semicolons in instance type mapped types
      {
        pattern: /InstanceType\s*<\s*([^>]+);\s*>/g,
        replacement: 'InstanceType<$1>'
      },
      // Fix semicolons in this parameter type mapped types
      {
        pattern: /ThisParameterType\s*<\s*([^>]+);\s*>/g,
        replacement: 'ThisParameterType<$1>'
      },
      // Fix semicolons in omit this parameter mapped types
      {
        pattern: /OmitThisParameter\s*<\s*([^>]+);\s*>/g,
        replacement: 'OmitThisParameter<$1>'
      },
      // Fix semicolons in this type mapped types
      {
        pattern: /ThisType\s*<\s*([^>]+);\s*>/g,
        replacement: 'ThisType<$1>'
      },
      // Fix semicolons in intrinsic mapped types
      {
        pattern: /Uppercase\s*<\s*([^>]+);\s*>/g,
        replacement: 'Uppercase<$1>'
      },
      {
        pattern: /Lowercase\s*<\s*([^>]+);\s*>/g,
        replacement: 'Lowercase<$1>'
      },
      {
        pattern: /Capitalize\s*<\s*([^>]+);\s*>/g,
        replacement: 'Capitalize<$1>'
      },
      {
        pattern: /Uncapitalize\s*<\s*([^>]+);\s*>/g,
        replacement: 'Uncapitalize<$1>'
      }
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JavaScript syntax in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findJavaScriptFiles(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && /\.(ts|tsx|js|jsx)$/.test(item)) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
const files = findJavaScriptFiles('.');
console.log(`Checking ${files.length} JavaScript/TypeScript files for syntax errors`);

let fixedCount = 0;
for (const file of files) {
  if (fixJavaScriptSyntax(file)) {
    fixedCount++;
  }
}

console.log(`Fixed JavaScript syntax in ${fixedCount} files`);