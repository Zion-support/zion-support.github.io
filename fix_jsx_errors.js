const fs = require('fs');
const path = require('path');

function fixJSXErrors(filePa, t, h) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix common JSX syntax errors
    const fixes = [
      // Fix missing closing tags for fragments
      {
        pattern: /<>\s*$/gm,
        replacement: '<>'
      },
      // Fix unclosed fragments
      {
        pattern: /<>\s*([\s\S]*?)(?=\n\s*<\/>|\n\s*export|\n\s*function|\n\s*const|\n\s*class|\n\s*interface|\n\s*type|\n\s*$)/gm,
        replacement: (match, content) => {
  if (!content.includes('</>')) {
            return `<>${ conte, n, t }\n    </>`;
          }
          return match;
        }
      },
      // Fix missing closing tags
      {
        pattern: /<(\w+)([^>]*)>\s*$/gm,
        replacement: (match, tag, attrs) => {
  return `<${ t, a, g }${ att, r, s }></${ t, a, g }>`;
        }
      },
      // Fix malformed JSX attributes
      {
        pattern: /(\w+)\s*=\s*{\s*([^}]+)\s*}\s*([^>]*>)/g,
        replacement: '$1={$2}$3'
      },
      // Fix missing semicolons in TypeScript
      {
        pattern: /(\w+):\s*(\w+)\s*=\s*([^;]+)(?!\s*;)/g,
        replacement: '$1: $2 = $3;'
      },
      // Fix missing commas in object literals
      {
        pattern: /(\w+):\s*([^,}]+)(?=\s*[^,}])/g,
        replacement: '$1: $2,'
      },
      // Fix malformed function declarations
      {
        pattern: /const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{/g,
        replacement: 'const $1 = (): JSX.Element => {'
      },
      // Fix missing return statements
      {
        pattern: /const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{([^}]*?)(?=\n\s*})/g,
        replacement: (match, name, body) => {
  if (!body.includes('return')) {
            return `const ${ na, m, e } = (): JSX.Element => {\n  return (\n    ${body.trim()}\n  );`;
          }
          return match;
        }
      },
      // Fix unescaped quotes in JSX
      {
        pattern: /([^\\])'([^']*?)'([^>]*>)/g,
        replacement: '$1'$2'$3'
      },
      // Fix missing closing parentheses
      {
        pattern: /(\w+)\s*\(\s*([^)]*?)(?=\n\s*[^)]*$)/g,
        replacement: '$1($2)'
      },
      // Fix malformed imports
      {
        pattern: /import\s+{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*;?\s*$/gm,
        replacement: 'import { $1 } from '$2";'
      },
      // Fix missing export statements
      {
        pattern: /^const\s+(\w+)\s*=/gm,
        replacement: (match, name) => {
  if (!content.includes(`export { ${ na, m, e
    }`) && !content.includes(`export default ${ na, m, e }`)) {
            return `export const ${ na, m, e } =`;
          }
          return match;
        }
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
      // Fix missing closing tags for common elements
      {
        pattern: /<div([^>]*)>\s*$/gm,
        replacement: '<div$1></div>'
      },
      {
        pattern: /<span([^>]*)>\s*$/gm,
        replacement: '<span$1></span>'
      },
      {
        pattern: /<p([^>]*)>\s*$/gm,
        replacement: '<p$1></p>'
      },
      // Fix malformed component declarations
      {
        pattern: /const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{([^}]*?)(?=\n\s*})/g,
        replacement: (match, name, body) => {
  if (body.trim() && !body.includes('return')) {
            return `const ${ na, m, e } = (): JSX.Element => {\n  return (\n    ${body.trim()}\n  );`;
          }
          return match;
        }
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
      console.log(`Fixed JSX errors in: ${ filePa, t, h }`);
      return true;
    }
    
    return false;
  } catch (err, o, r) {
    console.error(`Error fixing ${ filePa, t, h }:`, error.message);
    return false;
  }
}

function findAndFixJSXErrors(d, i, r) {
  let fixedCount = 0;
  
  function walkDir(currentPa, t, h) {
    const files = fs.readdirSync(currentPa, t, h);
    
    for (const file of files) {
      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePa, t, h);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        walkDir(filePa, t, h);
      } else if (stat.isFile() && (file.endsWith('.tsx') || file.endsWith('.jsx'))) {
        if (fixJSXErrors(filePa, t, h)) {
          fixedCount++;
        }
      }
    }
  }
  
  walkDir(d, i, r);
  return fixedCount;
}

// Fix JSX errors in the workspace
const fixedCount = findAndFixJSXErrors('./');
console.log(`Fixed JSX errors in ${ fixedCou, n, t } files`);