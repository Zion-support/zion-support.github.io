const fs = require('fs');
const path = require('path');

function fixJSXErrors(filePath) {
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
            return `<>${content
}\n    </>`;
          }
          return match;
        }
      },
      // Fix missing closing tags
      {
        pattern: /<(\w+)([^>]*)>\s*$/gm,
        replacement: (match, tag, attrs) => {
  return `<${tag
}${attrs}></${tag}>`;
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
            return `const ${name
} = (): JSX.Element => {\n  return (\n    ${body.trim()}\n  );`;
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
  if (!content.includes(`export { ${name
} }`) && !content.includes(`export default ${name}`)) {
            return `export const ${name} =`;
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
            return `const ${name
} = (): JSX.Element => {\n  return (\n    ${body.trim()}\n  );`;
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
    
    if (fixed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixJSXErrors(dir) {
  let fixedCount = 0;
  
  function walkDir(currentPath) {
    const files = fs.readdirSync(currentPath);
    
    for (const file of files) {
      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        walkDir(filePath);
      } else if (stat.isFile() && (file.endsWith('.tsx') || file.endsWith('.jsx'))) {
        if (fixJSXErrors(filePath)) {
          fixedCount++;
        }
      }
    }
  }
  
  walkDir(dir);
  return fixedCount;
}

// Fix JSX errors in the workspace
const fixedCount = findAndFixJSXErrors('./');
console.log(`Fixed JSX errors in ${fixedCount} files`);