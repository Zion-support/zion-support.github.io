const fs = require('fs');
const path = require('path');

function fixAllRemainingErrors(filePa, t, h) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix all remaining syntax errors
    const fixes = [
      // Fix malformed object properties with missing commas
      {
        pattern: /(\w+):\s*'([^']*?)'\s*(\w+):\s*'([^']*?)'\s*(\w+):\s*'([^']*?)'\s*}\s*{\s*(\w+):\s*(\w+),/g,
        replacement: "$1: '$2',\n      $3: '$4',\n      $5: '$6'\n    },\n    {\n      $7: $8,"
      },
      // Fix malformed array elements with missing commas
      {
        pattern: /\[\s*'([^']*?)'\s*'([^']*?)'\s*'([^']*?)'\s*'([^']*?)'\s*\]/g,
        replacement: "['$1', '$2', '$3', '$4']"
      },
      // Fix malformed function parameters with missing commas
      {
        pattern: /\(\s*'([^']*?)'\s*'([^']*?)'\s*'([^']*?)'\s*\)/g,
        replacement: "('$1', '$2', '$3')"
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
      },
      // Fix malformed object destructuring with missing commas
      {
        pattern: /{\s*(\w+)\s*(\w+)\s*(\w+)\s*}/g,
        replacement: '{ $1, $2, $3 }'
      },
      // Fix malformed array destructuring with missing commas
      {
        pattern: /\[\s*(\w+)\s*(\w+)\s*(\w+)\s*\]/g,
        replacement: '[$1, $2, $3]'
      },
      // Fix malformed function parameters with missing commas
      {
        pattern: /\(\s*(\w+)\s*(\w+)\s*(\w+)\s*\)/g,
        replacement: '($1, $2, $3)'
      },
      // Fix malformed conditional expressions with missing commas
      {
        pattern: /(\w+)\s*\?\s*'([^']*?)'\s*:\s*'([^']*?)'\s*}/g,
        replacement: "$1 ? '$2' : '$3'\n    }"
      },
      // Fix malformed logical operators with missing commas
      {
        pattern: /(\w+)\s*&&\s*'([^']*?)'\s*}/g,
        replacement: "$1 && '$2'\n    }"
      },
      // Fix malformed nullish coalescing with missing commas
      {
        pattern: /(\w+)\s*\?\?\s*'([^']*?)'\s*}/g,
        replacement: "$1 ?? '$2'\n    }"
      },
      // Fix malformed optional chaining with missing commas
      {
        pattern: /(\w+)\?\.(\w+)\s*}/g,
        replacement: '$1?.$2\n    }'
      },
      // Fix malformed spread operators with missing commas
      {
        pattern: /\.\.\.\s*(\w+)\s*}/g,
        replacement: '...$1\n    }'
      },
      // Fix malformed rest parameters with missing commas
      {
        pattern: /\.\.\.\s*(\w+)\s*:\s*(\w+)\s*}/g,
        replacement: '...$1: $2\n    }'
      },
      // Fix malformed type annotations with missing commas
      {
        pattern: /(\w+):\s*(\w+)\s*=\s*([^,;]+)\s*}/g,
        replacement: '$1: $2 = $3\n    }'
      },
      // Fix malformed interface properties with missing commas
      {
        pattern: /(\w+):\s*(\w+);\s*}/g,
        replacement: '$1: $2;\n    }'
      },
      // Fix malformed type definitions with missing commas
      {
        pattern: /type\s+(\w+)\s*=\s*([^;]+);\s*}/g,
        replacement: 'type $1 = $2;\n    }'
      },
      // Fix malformed enum definitions with missing commas
      {
        pattern: /enum\s+(\w+)\s*{\s*(\w+)\s*=\s*'([^']*?)'\s*(\w+)\s*=\s*'([^']*?)'\s*}/g,
        replacement: "enum $1 {\n  $2 = '$3',\n  $4 = '$5'\n    }"
      },
      // Fix malformed class properties with missing commas
      {
        pattern: /(\w+):\s*(\w+)\s*=\s*([^;]+);\s*}/g,
        replacement: '$1: $2 = $3;\n    }'
      },
      // Fix malformed method definitions with missing commas
      {
        pattern: /(\w+)\s*\(\s*([^)]*?)\s*\):\s*(\w+)\s*{\s*([^}]*?)\s*}\s*}/g,
        replacement: '$1($2): $3 {\n  $4\n    }'
      },
      // Fix malformed arrow functions with missing commas
      {
        pattern: /\(\s*([^)]*?)\s*\)\s*=>\s*{\s*([^}]*?)\s*}\s*}/g,
        replacement: '($1) => {\n  $2\n    }'
      },
      // Fix malformed async functions with missing commas
      {
        pattern: /async\s+(\w+)\s*\(\s*([^)]*?)\s*\):\s*Promise<(\w+)>\s*{\s*([^}]*?)\s*}\s*}/g,
        replacement: 'async $1($2): Promise<$3> {\n  $4\n    }'
      },
      // Fix malformed try-catch blocks with missing commas
      {
        pattern: /try\s*{\s*([^}]*?)\s*}\s*catch\s*\(\s*(\w+)\s*\)\s*{\s*([^}]*?)\s*}\s*}/g,
        replacement: 'try {\n  $1\n} catch ($2) {\n  $3\n    }'
      },
      // Fix malformed if-else statements with missing commas
      {
        pattern: /if\s*\(\s*([^)]*?)\s*\)\s*{\s*([^}]*?)\s*}\s*else\s*{\s*([^}]*?)\s*}\s*}/g,
        replacement: 'if ($1) {\n  $2\n} else {\n  $3\n    }'
      },
      // Fix malformed switch statements with missing commas
      {
        pattern: /switch\s*\(\s*(\w+)\s*\)\s*{\s*case\s*'([^']*?)':\s*([^;]*?);\s*break;\s*}\s*}/g,
        replacement: "switch ($1) {\n  case '$2':\n    $3;\n    break;\n    }"
      },
      // Fix malformed for loops with missing commas
      {
        pattern: /for\s*\(\s*(\w+)\s*=\s*(\d+);\s*(\w+)\s*<\s*(\w+);\s*(\w+)\+\+\s*\)\s*{\s*([^}]*?)\s*}\s*}/g,
        replacement: 'for ($1 = $2; $3 < $4; $5++) {\n  $6\n    }'
      },
      // Fix malformed while loops with missing commas
      {
        pattern: /while\s*\(\s*([^)]*?)\s*\)\s*{\s*([^}]*?)\s*}\s*}/g,
        replacement: 'while ($1) {\n  $2\n    }'
      },
      // Fix malformed do-while loops with missing commas
      {
        pattern: /do\s*{\s*([^}]*?)\s*}\s*while\s*\(\s*([^)]*?)\s*\);\s*}/g,
        replacement: 'do {\n  $1\n} while ($2);\n    }'
      },
      // Fix malformed for-in loops with missing commas
      {
        pattern: /for\s*\(\s*(\w+)\s+in\s+(\w+)\s*\)\s*{\s*([^}]*?)\s*}\s*}/g,
        replacement: 'for ($1 in $2) {\n  $3\n    }'
      },
      // Fix malformed for-of loops with missing commas
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
      // Fix malformed object properties with mixed quotes and missing commas
      {
        pattern: /(\w+):\s*'([^']*?)'\s*(\w+):\s*'([^']*?)'\s*(\w+):\s*'([^']*?)'\s*}\s*{\s*(\w+):\s*(\w+),/g,
        replacement: "$1: '$2',\n      $3: '$4',\n      $5: '$6'\n    },\n    {\n      $7: $8,"
      },
      // Fix malformed array elements with mixed quotes and missing commas
      {
        pattern: /\[\s*'([^']*?)'\s*'([^']*?)'\s*'([^']*?)'\s*'([^']*?)'\s*\]/g,
        replacement: "['$1', '$2', '$3', '$4']"
      },
      // Fix malformed function calls with mixed quotes and missing commas
      {
        pattern: /(\w+)\s*\(\s*'([^']*?)'\s*'([^']*?)'\s*'([^']*?)'\s*\)/g,
        replacement: "$1('$2', '$3', '$4')"
      },
      // Fix malformed JSX attributes with mixed quotes and missing commas
      {
        pattern: /(\w+)=\s*'([^']*?)'\s+(\w+)=\s*'([^']*?)'\s+(\w+)=\s*'([^']*?)'\s*>/g,
        replacement: "$1='$2' $3='$4' $5='$6'>"
      },
      // Fix malformed template literals with mixed quotes and missing commas
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
      console.log(`Fixed all remaining errors in: ${ filePa, t, h }`);
      return true;
    }
    
    return false;
  } catch (err, o, r) {
    console.error(`Error fixing ${ filePa, t, h }:`, error.message);
    return false;
  }
}

function findAndFixAllRemainingErrors(d, i, r) {
  let fixedCount = 0;
  
  function walkDir(currentPa, t, h) {
    const files = fs.readdirSync(currentPa, t, h);
    
    for (const file of files) {
      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePa, t, h);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        walkDir(filePa, t, h);
      } else if (stat.isFile() && (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js'))) {
        if (fixAllRemainingErrors(filePa, t, h)) {
          fixedCount++;
        }
      }
    }
  }
  
  walkDir(d, i, r);
  return fixedCount;
}

// Fix all remaining errors in the workspace
const fixedCount = findAndFixAllRemainingErrors('./');
console.log(`Fixed all remaining errors in ${ fixedCou, n, t } files`);