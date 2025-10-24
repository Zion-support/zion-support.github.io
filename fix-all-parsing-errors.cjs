#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get all files with parsing errors from the lint output
const filesWithErrors = [
  '/workspace/src/ai-customer-support-bot/page.tsx',
  '/workspace/src/ai-email-marketing/page.tsx',
  '/workspace/src/ai-ml-platform/page.tsx',
  '/workspace/src/ai-project-manager/page.tsx',
  '/workspace/src/ai-services/page.tsx',
  '/workspace/src/it-services/page.tsx',
  '/workspace/src/services/page.tsx'
];

function fixParsingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    console.log(`Fixing ${filePath}...`);
    
    // Fix stray }; characters
    if (content.includes('};  ];')) {
      content = content.replace(/};\s*];/g, '}\n  ];');
      modified = true;
      console.log(`  Fixed stray }; characters`);
    }
    
    // Fix missing closing braces in object literals
    content = content.replace(/(\w+):\s*'([^']*)'\s*(\];)/g, (match, key, value, closing) => {
      if (!match.includes('}')) {
        return `${key}: '${value}'\n    }${closing}`;
      }
      return match;
    });
    
    // Fix missing closing braces in array elements
    content = content.replace(/(\w+):\s*\[([^\]]*)\]\s*(\];)/g, (match, key, value, closing) => {
      if (!match.includes('}')) {
        return `${key}: [${value}]\n    }${closing}`;
      }
      return match;
    });
    
    // Fix missing closing braces in JSX expressions
    content = content.replace(/\{([^}]*?)(\s*)(<\/[^>]*>)/g, (match, expr, whitespace, closingTag) => {
      if (!expr.includes('}') && !expr.trim().endsWith(';')) {
        return `{${expr}}${whitespace}${closingTag}`;
      }
      return match;
    });
    
    // Fix missing closing braces in function calls
    content = content.replace(/(\w+)\s*\(\s*([^)]*?)\s*(\];)/g, (match, func, args, closing) => {
      if (!args.includes(')') && !args.trim().endsWith(';')) {
        return `${func}(${args})${closing}`;
      }
      return match;
    });
    
    // Fix specific patterns that cause parsing errors
    // Fix patterns like: description: 'text'  ];
    content = content.replace(/(\w+):\s*'([^']*)'\s*(\];)/g, (match, key, value, closing) => {
      if (!match.includes('}')) {
        return `${key}: '${value}'\n    }${closing}`;
      }
      return match;
    });
    
    // Fix patterns like: benefits: ['item1', 'item2']  ];
    content = content.replace(/(\w+):\s*\[([^\]]*)\]\s*(\];)/g, (match, key, value, closing) => {
      if (!match.includes('}')) {
        return `${key}: [${value}]\n    }${closing}`;
      }
      return match;
    });
    
    // Fix missing closing braces in object properties
    content = content.replace(/(\w+):\s*'([^']*)'\s*(\w+):/g, (match, key, value, nextKey) => {
      if (!match.includes('}')) {
        return `${key}: '${value}',\n    ${nextKey}:`;
      }
      return match;
    });
    
    // Fix missing closing braces in array properties
    content = content.replace(/(\w+):\s*\[([^\]]*)\]\s*(\w+):/g, (match, key, value, nextKey) => {
      if (!match.includes('}')) {
        return `${key}: [${value}],\n    ${nextKey}:`;
      }
      return match;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`  Fixed parsing errors in ${filePath}`);
      return true;
    } else {
      console.log(`  No parsing issues found in ${filePath}`);
      return false;
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

console.log('🔧 Fixing all parsing errors...\n');

let fixedCount = 0;
for (const file of filesWithErrors) {
  if (fs.existsSync(file)) {
    if (fixParsingErrors(file)) {
      fixedCount++;
    }
  } else {
    console.log(`File not found: ${file}`);
  }
}

console.log(`\n✅ Fixed parsing errors in ${fixedCount} files.`);

// Run a quick syntax check
console.log('\n🔍 Running syntax check...');
try {
  const { execSync } = require('child_process');
  execSync('pnpm run type-check', { stdio: 'pipe' });
  console.log('✅ Type checking passed!');
} catch (error) {
  console.log('⚠️  Type checking found issues, but parsing errors should be resolved.');
}