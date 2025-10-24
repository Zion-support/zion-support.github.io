const fs = require('fs');
const path = require('path');

function fixQuotesAndSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix common quote and syntax issues
    const fixes = [
      // Fix malformed quotes in imports
      {
        pattern: /import\s+(\w+)\s+from\s+&apos;([^&]+)&apos;/g,
        replacement: 'import $1 from '$2'"
      },
      {
        pattern: /import\s+(\w+)\s+from\s+&quot;([^&]+)&quot;/g,
        replacement: 'import $1 from '$2"'
      },
      // Fix malformed use client
      {
        pattern: /'use client'/g,
        replacement: "'use client'"
      },
      {
        pattern: /'use client'/g,
        replacement: "'use client'"
      },
      // Fix malformed string literals
      {
        pattern: /&apos;([^&]+)&apos;/g,
        replacement: "'$1'"
      },
      {
        pattern: /&quot;([^&]+)&quot;/g,
        replacement: '"$1"'
      },
      // Fix malformed JSX attributes
      {
        pattern: /(\w+)=\s*&apos;([^&]+)&apos;/g,
        replacement: '$1='$2'"
      },
      {
        pattern: /(\w+)=\s*&quot;([^&]+)&quot;/g,
        replacement: '$1='$2''
      },
      // Fix malformed object properties
      {
        pattern: /(\w+):\s*&apos;([^&]+)&apos;/g,
        replacement: '$1: '$2'"
      },
      {
        pattern: /(\w+):\s*&quot;([^&]+)&quot;/g,
        replacement: '$1: '$2"'
      },
      // Fix malformed array elements
      {
        pattern: /\[\s*&apos;([^&]+)&apos;/g,
        replacement: '['$1'"
      },
      {
        pattern: /\[\s*&quot;([^&]+)&quot;/g,
        replacement: '['$1''
      },
      // Fix malformed template literals
      {
        pattern: /`([^`]*?)'([^`]*?)`/g,
        replacement: '`$1'$2`"
      },
      {
        pattern: /`([^`]*?)"([^`]*?)`/g,
        replacement: '`$1'$2`'
      },
      // Fix malformed function calls
      {
        pattern: /(\w+)\s*\(\s*'([^&]+)&apos;/g,
        replacement: '$1('$2'"
      },
      {
        pattern: /(\w+)\s*\(\s*"([^&]+)&quot;/g,
        replacement: '$1('$2''
      },
      // Fix malformed JSX text content
      {
        pattern: />\s*&apos;([^&]+)&apos;\s*</g,
        replacement: '>'$1'<"
      },
      {
        pattern: />\s*&quot;([^&]+)&quot;\s*</g,
        replacement: '>'$1"<'
      },
      // Fix malformed closing tags
      {
        pattern: /<\/\w+>\s*&apos;/g,
        replacement: '</>'
      },
      {
        pattern: /<\/\w+>\s*&quot;/g,
        replacement: '</>'
      },
      // Fix malformed commas in objects
      {
        pattern: /(\w+):\s*(\w+),\s*&apos;/g,
        replacement: '$1: $2,'
      },
      {
        pattern: /(\w+):\s*(\w+),\s*&quot;/g,
        replacement: '$1: $2,'
      },
      // Fix malformed array syntax
      {
        pattern: /\[\s*(\w+),\s*&apos;/g,
        replacement: '[$1,'
      },
      {
        pattern: /\[\s*(\w+),\s*&quot;/g,
        replacement: '[$1,'
      },
      // Fix malformed destructuring
      {
        pattern: /{\s*(\w+),\s*&apos;/g,
        replacement: '{$1,'
      },
      {
        pattern: /{\s*(\w+),\s*&quot;/g,
        replacement: '{$1,'
      },
      // Fix malformed function parameters
      {
        pattern: /\(\s*(\w+),\s*&apos;/g,
        replacement: '($1,'
      },
      {
        pattern: /\(\s*(\w+),\s*&quot;/g,
        replacement: '($1,'
      },
      // Fix malformed JSX fragments
      {
        pattern: /<>\s*&apos;/g,
        replacement: '<>'
      },
      {
        pattern: /<>\s*&quot;/g,
        replacement: '<>'
      },
      // Fix malformed closing fragments
      {
        pattern: /&apos;\s*<\/>/g,
        replacement: '</>'
      },
      {
        pattern: /&quot;\s*<\/>/g,
        replacement: '</>'
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
      // Fix malformed imports with mixed quotes
      {
        pattern: /import\s+(\w+)\s+from\s+['"]([^'"]+)['"]\s*;\s*$/gm,
        replacement: 'import $1 from '$2';"
      },
      // Fix malformed JSX attributes with mixed quotes
      {
        pattern: /(\w+)=\s*['"]([^'"]+)['"]/g,
        replacement: '$1='$2'"
      },
      // Fix malformed object properties with mixed quotes
      {
        pattern: /(\w+):\s*['"]([^'"]+)['"]/g,
        replacement: '$1: '$2'"
      },
      // Fix malformed string literals in arrays
      {
        pattern: /\[\s*['"]([^'"]+)['"]/g,
        replacement: '['$1'"
      },
      // Fix malformed string literals in function calls
      {
        pattern: /(\w+)\s*\(\s*['"]([^'"]+)['"]/g,
        replacement: '$1('$2'"
      }
    ];
    
    for (const fix of specificFixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        fixed = true;
      }
    }
    
    if (fixed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed quotes and syntax in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixQuotesAndSyntax(dir) {
  let fixedCount = 0;
  
  function walkDir(currentPath) {
    const files = fs.readdirSync(currentPath);
    
    for (const file of files) {
      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        walkDir(filePath);
      } else if (stat.isFile() && (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js'))) {
        if (fixQuotesAndSyntax(filePath)) {
          fixedCount++;
        }
      }
    }
  }
  
  walkDir(dir);
  return fixedCount;
}

// Fix quotes and syntax in the workspace
const fixedCount = findAndFixQuotesAndSyntax('./');
console.log(`Fixed quotes and syntax in ${fixedCount} files`);