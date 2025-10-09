#!/usr/bin/env node

const fs = require('fs');

// Files with syntax errors
const filesToFix = [
  '/workspace/src/ai-crm/page.tsx',
  '/workspace/src/ai-customer-support-bot/page.tsx',
  '/workspace/src/ai-email-marketing/page.tsx',
  '/workspace/src/ai-ml-platform/page.tsx',
  '/workspace/src/ai-project-manager/page.tsx',
  '/workspace/src/ai-services/page.tsx',
  '/workspace/src/it-services/page.tsx',
  '/workspace/src/page-minimal.tsx',
  '/workspace/src/services/page.tsx'
];

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    console.log(`Fixing ${filePath}...`);
    
    // Fix stray ]; characters
    if (content.includes('};  ];')) {
      content = content.replace(/};\s*];/g, '}\n  ];');
      modified = true;
      console.log(`  Fixed stray ]; characters`);
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
    
    // Fix property assignment syntax errors
    content = content.replace(/(\w+)\s*=\s*(\w+)\s*:/g, '$1: $2,');
    
    // Fix missing closing braces in JSX expressions
    content = content.replace(/\{([^}]*?)(\s*)(<\/[^>]*>)/g, (match, expr, whitespace, closingTag) => {
      if (!expr.includes('}') && !expr.trim().endsWith(';')) {
        return `{${expr}}${whitespace}${closingTag}`;
      }
      return match;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`  Fixed syntax errors in ${filePath}`);
      return true;
    } else {
      console.log(`  No syntax issues found in ${filePath}`);
      return false;
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

console.log('🔧 Fixing syntax errors...\n');

let fixedCount = 0;
for (const file of filesToFix) {
  if (fs.existsSync(file)) {
    if (fixSyntaxErrors(file)) {
      fixedCount++;
    }
  } else {
    console.log(`File not found: ${file}`);
  }
}

console.log(`\n✅ Fixed syntax errors in ${fixedCount} files.`);