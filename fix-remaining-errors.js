#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// More comprehensive fixes
const fixes = [
  // Fix missing closing braces in object literals
  {
    pattern: /(\w+):\s*\[([^\]]*)\],?\s*$/gm,
    replacement: (match, key, value) => {
      if (!value.includes(']')) {
        return `${key}: [${value}],`;
      }
      return match;
    }
  },
  // Fix missing closing braces in JSX
  {
    pattern: /<(\w+)([^>]*)>\s*$/gm,
    replacement: '<$1$2>'
  },
  // Fix incomplete function declarations
  {
    pattern: /const\s+(\w+)\s*=\s*\(\)\s*=>\s*{\s*$/gm,
    replacement: 'const $1 = () => {\n  '
  },
  // Fix missing export statements
  {
    pattern: /^const\s+(\w+)\s*=\s*\(\)\s*=>\s*{[\s\S]*?^};?\s*$/gm,
    replacement: (match, componentName) => {
      if (!match.includes('export')) {
        return match + '\n\nexport default ' + componentName + ';';
      }
      return match;
    }
  },
  // Fix incomplete JSX returns
  {
    pattern: /return\s*\(\s*$/gm,
    replacement: 'return (\n    <div>\n    </div>\n  )'
  },
  // Fix missing closing parentheses
  {
    pattern: /return\s*\(\s*<[^>]*>\s*$/gm,
    replacement: (match) => {
      return match + '\n  )';
    }
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Apply fixes
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    // Additional specific fixes
    // Fix common JSX structure issues
    if (content.includes('return (') && !content.includes('export default')) {
      const lines = content.split('\n');
      const lastLine = lines[lines.length - 1].trim();
      
      if (lastLine === '}' || lastLine === '};') {
        const componentName = 'Component';
        lines.push('');
        lines.push(`export default ${componentName};`);
        content = lines.join('\n');
        modified = true;
      }
    }

    // Fix incomplete object literals
    if (content.includes('{') && content.includes('[') && !content.includes('}]')) {
      content = content.replace(/(\w+):\s*\[([^\]]*)\s*$/gm, '$1: [$2]');
      modified = true;
    }

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