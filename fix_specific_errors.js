const fs = require('fs');
const path = require('path');

function fixSpecificErrors(filePa, t, h) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix specific syntax errors
    const fixes = [
      // Fix malformed icon properties with double commas
      {
        pattern: /icon:\s*(\w+),,/g,
        replacement: 'icon: $1,'
      },
      // Fix malformed title properties with HTML entities
      {
        pattern: /title:\s*'([^']*?)&apos;,/g,
        replacement: "title: '$1',"
      },
      {
        pattern: /title:\s*"([^"]*?)&quot;,/g,
        replacement: 'title: "$1",'
      },
      // Fix malformed description properties with trailing commas
      {
        pattern: /description:\s*'([^']*?)",/g,
        replacement: "description: '$1',"
      },
      {
        pattern: /description:\s*"([^"]*?)",/g,
        replacement: 'description: "$1",'
      },
      // Fix malformed object properties with trailing commas
      {
        pattern: /(\w+):\s*'([^']*?)',\s*,/g,
        replacement: "$1: '$2',"
      },
      {
        pattern: /(\w+):\s*"([^"]*?)",\s*,/g,
        replacement: '$1: "$2",'
      },
      // Fix malformed array elements with trailing commas
      {
        pattern: /\[\s*'([^']*?)',\s*'([^']*?)',\s*'([^']*?)',\s*'([^']*?)',\s*\]/g,
        replacement: "['$1', '$2', '$3', '$4']"
      },
      // Fix malformed function calls with trailing commas
      {
        pattern: /(\w+)\s*\(\s*'([^']*?)',\s*'([^']*?)',\s*\)/g,
        replacement: "$1('$2', '$3')"
      },
      // Fix malformed JSX attributes with trailing commas
      {
        pattern: /(\w+)=\s*'([^']*?)',\s*/g,
        replacement: "$1='$2' "
      },
      {
        pattern: /(\w+)=\s*"([^"]*?)",\s*/g,
        replacement: '$1="$2" '
      },
      // Fix malformed template literals with trailing commas
      {
        pattern: /`([^`]*?)\$\{([^}]*?)\}\s*,\s*`/g,
        replacement: "`$1\${$2}`"
      },
      // Fix malformed object destructuring with trailing commas
      {
        pattern: /{\s*(\w+),\s*(\w+),\s*(\w+),\s*}/g,
        replacement: '{ $1, $2, $3 }'
      },
      // Fix malformed array destructuring with trailing commas
      {
        pattern: /\[\s*(\w+),\s*(\w+),\s*(\w+),\s*\]/g,
        replacement: '[$1, $2, $3]'
      },
      // Fix malformed function parameters with trailing commas
      {
        pattern: /\(\s*(\w+),\s*(\w+),\s*(\w+),\s*\)/g,
        replacement: '($1, $2, $3)'
      },
      // Fix malformed conditional expressions with trailing commas
      {
        pattern: /(\w+)\s*\?\s*'([^']*?)'\s*:\s*'([^']*?)',/g,
        replacement: "$1 ? '$2' : '$3'"
      },
      // Fix malformed logical operators with trailing commas
      {
        pattern: /(\w+)\s*&&\s*'([^']*?)',/g,
        replacement: "$1 && '$2'"
      },
      // Fix malformed nullish coalescing with trailing commas
      {
        pattern: /(\w+)\s*\?\?\s*'([^']*?)',/g,
        replacement: "$1 ?? '$2'"
      },
      // Fix malformed optional chaining with trailing commas
      {
        pattern: /(\w+)\?\.(\w+),/g,
        replacement: '$1?.$2'
      },
      // Fix malformed spread operators with trailing commas
      {
        pattern: /\.\.\.\s*(\w+),/g,
        replacement: '...$1'
      },
      // Fix malformed rest parameters with trailing commas
      {
        pattern: /\.\.\.\s*(\w+)\s*:\s*(\w+),/g,
        replacement: '...$1: $2'
      },
      // Fix malformed type annotations with trailing commas
      {
        pattern: /(\w+):\s*(\w+)\s*=\s*([^,;]+),/g,
        replacement: '$1: $2 = $3'
      },
      // Fix malformed interface properties with trailing commas
      {
        pattern: /(\w+):\s*(\w+);,/g,
        replacement: '$1: $2;'
      },
      // Fix malformed type definitions with trailing commas
      {
        pattern: /type\s+(\w+)\s*=\s*([^;]+);,/g,
        replacement: 'type $1 = $2;'
      },
      // Fix malformed enum definitions with trailing commas
      {
        pattern: /enum\s+(\w+)\s*{\s*(\w+)\s*=\s*'([^']*?)',\s*(\w+)\s*=\s*'([^']*?)',\s*}/g,
        replacement: "enum $1 {\n  $2 = '$3',\n  $4 = '$5'\n}"
      },
      // Fix malformed class properties with trailing commas
      {
        pattern: /(\w+):\s*(\w+)\s*=\s*([^;]+);,/g,
        replacement: '$1: $2 = $3;'
      },
      // Fix malformed method definitions with trailing commas
      {
        pattern: /(\w+)\s*\(\s*([^)]*?)\s*\):\s*(\w+)\s*{\s*([^}]*?)\s*},/g,
        replacement: '$1($2): $3 {\n  $4\n}'
      },
      // Fix malformed arrow functions with trailing commas
      {
        pattern: /\(\s*([^)]*?)\s*\)\s*=>\s*{\s*([^}]*?)\s*},/g,
        replacement: '($1) => {\n  $2\n}'
      },
      // Fix malformed async functions with trailing commas
      {
        pattern: /async\s+(\w+)\s*\(\s*([^)]*?)\s*\):\s*Promise<(\w+)>\s*{\s*([^}]*?)\s*},/g,
        replacement: 'async $1($2): Promise<$3> {\n  $4\n}'
      },
      // Fix malformed try-catch blocks with trailing commas
      {
        pattern: /try\s*{\s*([^}]*?)\s*}\s*catch\s*\(\s*(\w+)\s*\)\s*{\s*([^}]*?)\s*},/g,
        replacement: 'try {\n  $1\n} catch ($2) {\n  $3\n}'
      },
      // Fix malformed if-else statements with trailing commas
      {
        pattern: /if\s*\(\s*([^)]*?)\s*\)\s*{\s*([^}]*?)\s*}\s*else\s*{\s*([^}]*?)\s*},/g,
        replacement: 'if ($1) {\n  $2\n} else {\n  $3\n}'
      },
      // Fix malformed switch statements with trailing commas
      {
        pattern: /switch\s*\(\s*(\w+)\s*\)\s*{\s*case\s*'([^']*?)':\s*([^;]*?);\s*break;\s*},/g,
        replacement: "switch ($1) {\n  case '$2':\n    $3;\n    break;\n}"
      },
      // Fix malformed for loops with trailing commas
      {
        pattern: /for\s*\(\s*(\w+)\s*=\s*(\d+);\s*(\w+)\s*<\s*(\w+);\s*(\w+)\+\+\s*\)\s*{\s*([^}]*?)\s*},/g,
        replacement: 'for ($1 = $2; $3 < $4; $5++) {\n  $6\n}'
      },
      // Fix malformed while loops with trailing commas
      {
        pattern: /while\s*\(\s*([^)]*?)\s*\)\s*{\s*([^}]*?)\s*},/g,
        replacement: 'while ($1) {\n  $2\n}'
      },
      // Fix malformed do-while loops with trailing commas
      {
        pattern: /do\s*{\s*([^}]*?)\s*}\s*while\s*\(\s*([^)]*?)\s*\);,/g,
        replacement: 'do {\n  $1\n} while ($2);'
      },
      // Fix malformed for-in loops with trailing commas
      {
        pattern: /for\s*\(\s*(\w+)\s+in\s+(\w+)\s*\)\s*{\s*([^}]*?)\s*},/g,
        replacement: 'for ($1 in $2) {\n  $3\n}'
      },
      // Fix malformed for-of loops with trailing commas
      {
        pattern: /for\s*\(\s*(\w+)\s+of\s+(\w+)\s*\)\s*{\s*([^}]*?)\s*},/g,
        replacement: 'for ($1 of $2) {\n  $3\n}'
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
      // Fix malformed object properties with mixed quotes and trailing commas
      {
        pattern: /(\w+):\s*'([^']*?)',\s*(\w+):\s*'([^']*?)',\s*,/g,
        replacement: "$1: '$2',\n      $3: '$4',"
      },
      // Fix malformed array elements with mixed quotes and trailing commas
      {
        pattern: /\[\s*'([^']*?)',\s*'([^']*?)',\s*'([^']*?)',\s*'([^']*?)',\s*\]/g,
        replacement: "['$1', '$2', '$3', '$4']"
      },
      // Fix malformed function calls with mixed quotes and trailing commas
      {
        pattern: /(\w+)\s*\(\s*'([^']*?)',\s*'([^']*?)',\s*\)/g,
        replacement: "$1('$2', '$3')"
      },
      // Fix malformed JSX attributes with mixed quotes and trailing commas
      {
        pattern: /(\w+)=\s*'([^']*?)'\s+(\w+)=\s*'([^']*?)',\s*/g,
        replacement: "$1='$2' $3='$4' "
      },
      // Fix malformed template literals with mixed quotes and trailing commas
      {
        pattern: /`([^`]*?)\$\{([^}]*?)\}\s*\+\s*'([^']*?)',\s*`/g,
        replacement: "`$1\${$2}$3`"
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
      console.log(`Fixed specific errors in: ${ filePa, t, h }`);
      return true;
    }
    
    return false;
  } catch (err, o, r) {
    console.error(`Error fixing ${ filePa, t, h }:`, error.message);
    return false;
  }
}

function findAndFixSpecificErrors(d, i, r) {
  let fixedCount = 0;
  
  function walkDir(currentPa, t, h) {
    const files = fs.readdirSync(currentPa, t, h);
    
    for (const file of files) {
      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePa, t, h);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        walkDir(filePa, t, h);
      } else if (stat.isFile() && (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js'))) {
        if (fixSpecificErrors(filePa, t, h)) {
          fixedCount++;
        }
      }
    }
  }
  
  walkDir(d, i, r);
  return fixedCount;
}

// Fix specific errors in the workspace
const fixedCount = findAndFixSpecificErrors('./');
console.log(`Fixed specific errors in ${ fixedCou, n, t } files`);