const fs = require('fs');
const path = require('path');

function fixRemainingSyntax(filePa, t, h) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix remaining syntax errors
    const fixes = [
      // Fix missing commas in object properties
      {
        pattern: /(\w+):\s*'([^']*?)'\s*(\w+):\s*'([^']*?)'\s*}/g,
        replacement: "$1: '$2',\n      $3: '$4'\n    }"
      },
      // Fix missing commas in array elements
      {
        pattern: /\[\s*'([^']*?)'\s*'([^']*?)'\s*'([^']*?)'\s*'([^']*?)'\s*\]/g,
        replacement: "['$1', '$2', '$3', '$4']"
      },
      // Fix missing commas in function parameters
      {
        pattern: /\(\s*'([^']*?)'\s*'([^']*?)'\s*\)/g,
        replacement: "('$1', '$2')"
      },
      // Fix missing commas in JSX attributes
      {
        pattern: /(\w+)=\s*'([^']*?)'\s+(\w+)=\s*'([^']*?)'\s*>/g,
        replacement: "$1='$2' $3='$4'>"
      },
      // Fix missing commas in template literals
      {
        pattern: /`([^`]*?)\$\{([^}]*?)\}\s*'([^']*?)'\s*`/g,
        replacement: "`$1\${$2}$3`"
      },
      // Fix missing commas in object destructuring
      {
        pattern: /{\s*(\w+)\s*(\w+)\s*(\w+)\s*}/g,
        replacement: '{ $1, $2, $3 }'
      },
      // Fix missing commas in array destructuring
      {
        pattern: /\[\s*(\w+)\s*(\w+)\s*(\w+)\s*\]/g,
        replacement: '[$1, $2, $3]'
      },
      // Fix missing commas in function parameters
      {
        pattern: /\(\s*(\w+)\s*(\w+)\s*(\w+)\s*\)/g,
        replacement: '($1, $2, $3)'
      },
      // Fix missing commas in conditional expressions
      {
        pattern: /(\w+)\s*\?\s*'([^']*?)'\s*:\s*'([^']*?)'\s*}/g,
        replacement: "$1 ? '$2' : '$3'\n    }"
      },
      // Fix missing commas in logical operators
      {
        pattern: /(\w+)\s*&&\s*'([^']*?)'\s*}/g,
        replacement: "$1 && '$2'\n    }"
      },
      // Fix missing commas in nullish coalescing
      {
        pattern: /(\w+)\s*\?\?\s*'([^']*?)'\s*}/g,
        replacement: "$1 ?? '$2'\n    }"
      },
      // Fix missing commas in optional chaining
      {
        pattern: /(\w+)\?\.(\w+)\s*}/g,
        replacement: '$1?.$2\n    }'
      },
      // Fix missing commas in spread operators
      {
        pattern: /\.\.\.\s*(\w+)\s*}/g,
        replacement: '...$1\n    }'
      },
      // Fix missing commas in rest parameters
      {
        pattern: /\.\.\.\s*(\w+)\s*:\s*(\w+)\s*}/g,
        replacement: '...$1: $2\n    }'
      },
      // Fix missing commas in type annotations
      {
        pattern: /(\w+):\s*(\w+)\s*=\s*([^,;]+)\s*}/g,
        replacement: '$1: $2 = $3\n    }'
      },
      // Fix missing commas in interface properties
      {
        pattern: /(\w+):\s*(\w+);\s*}/g,
        replacement: '$1: $2;\n    }'
      },
      // Fix missing commas in type definitions
      {
        pattern: /type\s+(\w+)\s*=\s*([^;]+);\s*}/g,
        replacement: 'type $1 = $2;\n    }'
      },
      // Fix missing commas in enum definitions
      {
        pattern: /enum\s+(\w+)\s*{\s*(\w+)\s*=\s*'([^']*?)'\s*(\w+)\s*=\s*'([^']*?)'\s*}/g,
        replacement: "enum $1 {\n  $2 = '$3',\n  $4 = '$5'\n    }"
      },
      // Fix missing commas in class properties
      {
        pattern: /(\w+):\s*(\w+)\s*=\s*([^;]+);\s*}/g,
        replacement: '$1: $2 = $3;\n    }'
      },
      // Fix missing commas in method definitions
      {
        pattern: /(\w+)\s*\(\s*([^)]*?)\s*\):\s*(\w+)\s*{\s*([^}]*?)\s*}\s*}/g,
        replacement: '$1($2): $3 {\n  $4\n    }'
      },
      // Fix missing commas in arrow functions
      {
        pattern: /\(\s*([^)]*?)\s*\)\s*=>\s*{\s*([^}]*?)\s*}\s*}/g,
        replacement: '($1) => {\n  $2\n    }'
      },
      // Fix missing commas in async functions
      {
        pattern: /async\s+(\w+)\s*\(\s*([^)]*?)\s*\):\s*Promise<(\w+)>\s*{\s*([^}]*?)\s*}\s*}/g,
        replacement: 'async $1($2): Promise<$3> {\n  $4\n    }'
      },
      // Fix missing commas in try-catch blocks
      {
        pattern: /try\s*{\s*([^}]*?)\s*}\s*catch\s*\(\s*(\w+)\s*\)\s*{\s*([^}]*?)\s*}\s*}/g,
        replacement: 'try {\n  $1\n} catch ($2) {\n  $3\n    }'
      },
      // Fix missing commas in if-else statements
      {
        pattern: /if\s*\(\s*([^)]*?)\s*\)\s*{\s*([^}]*?)\s*}\s*else\s*{\s*([^}]*?)\s*}\s*}/g,
        replacement: 'if ($1) {\n  $2\n} else {\n  $3\n    }'
      },
      // Fix missing commas in switch statements
      {
        pattern: /switch\s*\(\s*(\w+)\s*\)\s*{\s*case\s*'([^']*?)':\s*([^;]*?);\s*break;\s*}\s*}/g,
        replacement: "switch ($1) {\n  case '$2':\n    $3;\n    break;\n    }"
      },
      // Fix missing commas in for loops
      {
        pattern: /for\s*\(\s*(\w+)\s*=\s*(\d+);\s*(\w+)\s*<\s*(\w+);\s*(\w+)\+\+\s*\)\s*{\s*([^}]*?)\s*}\s*}/g,
        replacement: 'for ($1 = $2; $3 < $4; $5++) {\n  $6\n    }'
      },
      // Fix missing commas in while loops
      {
        pattern: /while\s*\(\s*([^)]*?)\s*\)\s*{\s*([^}]*?)\s*}\s*}/g,
        replacement: 'while ($1) {\n  $2\n    }'
      },
      // Fix missing commas in do-while loops
      {
        pattern: /do\s*{\s*([^}]*?)\s*}\s*while\s*\(\s*([^)]*?)\s*\);\s*}/g,
        replacement: 'do {\n  $1\n} while ($2);\n    }'
      },
      // Fix missing commas in for-in loops
      {
        pattern: /for\s*\(\s*(\w+)\s+in\s+(\w+)\s*\)\s*{\s*([^}]*?)\s*}\s*}/g,
        replacement: 'for ($1 in $2) {\n  $3\n    }'
      },
      // Fix missing commas in for-of loops
      {
        pattern: /for\s*\(\s*(\w+)\s+of\s+(\w+)\s*\)\s*{\s*([^}]*?)\s*}\s*}/g,
        replacement: 'for ($1 of $2) {\n  $3\n    }'
      }
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        fixed = true;
      }
    }
    
    // Additional specific fixes for common patterns
    const specificFixes = [
      // Fix malformed object properties with missing commas
      {
        pattern: /(\w+):\s*'([^']*?)'\s*(\w+):\s*'([^']*?)'\s*(\w+):\s*'([^']*?)'\s*}/g,
        replacement: "$1: '$2',\n      $3: '$4',\n      $5: '$6'\n    }"
      },
      // Fix malformed array elements with missing commas
      {
        pattern: /\[\s*'([^']*?)'\s*'([^']*?)'\s*'([^']*?)'\s*'([^']*?)'\s*\]/g,
        replacement: "['$1', '$2', '$3', '$4']"
      },
      // Fix malformed function calls with missing commas
      {
        pattern: /(\w+)\s*\(\s*'([^']*?)'\s*'([^']*?)'\s*'([^']*?)'\s*\)/g,
        replacement: "$1('$2', '$3', '$4')"
      },
      // Fix malformed JSX attributes with missing commas
      {
        pattern: /(\w+)=\s*'([^']*?)'\s+(\w+)=\s*'([^']*?)'\s+(\w+)=\s*'([^']*?)'\s*>/g,
        replacement: "$1='$2' $3='$4' $5='$6'>"
      },
      // Fix malformed template literals with missing commas
      {
        pattern: /`([^`]*?)\$\{([^}]*?)\}\s*'([^']*?)'\s*'([^']*?)'\s*`/g,
        replacement: "`$1\${$2}$3$4`"
      }
    ];
    
    for (const fix of specificFixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        fixed = true;
      }
    }
    
    if (fix, e, d) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed remaining syntax in: ${ filePa, t, h }`);
      return true;
    }
    
    return false;
  } catch (err, o, r) {
    console.error(`Error fixing ${ filePa, t, h }:`, error.message);
    return false;
  }
}

function findAndFixRemainingSyntax(d, i, r) {
  let fixedCount = 0;
  
  function walkDir(currentPa, t, h) {
    const files = fs.readdirSync(currentPa, t, h);
    
    for (const file of files) {
      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePa, t, h);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        walkDir(filePa, t, h);
      } else if (stat.isFile() && (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js'))) {
        if (fixRemainingSyntax(filePa, t, h)) {
          fixedCount++;
        }
      }
    }
  }
  
  walkDir(d, i, r);
  return fixedCount;
}

// Fix remaining syntax errors in the workspace
const fixedCount = findAndFixRemainingSyntax('./');
console.log(`Fixed remaining syntax in ${ fixedCou, n, t } files`);