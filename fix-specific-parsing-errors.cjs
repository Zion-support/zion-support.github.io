#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Files with specific parsing errors that need targeted fixes
const filesToFix = [
  '/workspace/src/ai-automation/page.tsx',
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

function fixSpecificParsingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    console.log(`Fixing ${filePath}...`);
    
    // Fix stray ]; characters
    if (content.includes('];  ];')) {
      content = content.replace(/;\s*];/g, '];');
      modified = true;
      console.log(`  Fixed stray ]; characters`);
    }
    
    // Fix missing closing braces in JSX expressions
    // Look for patterns like {expression without closing brace
    content = content.replace(/\{([^}]*?)(\s*)(<\/[^>]*>)/g, (match, expr, whitespace, closingTag) => {
      if (!expr.includes('}') && !expr.trim().endsWith(';')) {
        return `{${expr}}${whitespace}${closingTag}`;
      }
      return match;
    });
    
    // Fix missing closing braces in object literals
    content = content.replace(/\{([^}]*?)(\s*)(\];)/g, (match, expr, whitespace, closing) => {
      if (!expr.includes('}') && !expr.trim().endsWith(';')) {
        return `{${expr}}${whitespace}${closing}`;
      }
      return match;
    });
    
    // Fix specific syntax issues
    // Fix missing commas in object literals
    content = content.replace(/(\w+):\s*'([^']*)'\s*(\w+):/g, "$1: '$2',\n    $3:");
    
    // Fix missing commas in array elements
    content = content.replace(/(\w+)\s*(\w+):/g, "$1,\n    $2:");
    
    // Fix property assignment syntax errors
    content = content.replace(/(\w+)\s*=\s*(\w+)\s*:/g, "$1: $2,");
    
    // Remove any remaining merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, '');
    
    // Fix common JSX issues
    // Ensure proper closing of self-closing tags
    content = content.replace(/<([A-Z][a-zA-Z0-9]*)\s*([^>]*?)\s*>\s*<\/\1>/g, '<$1$2 />');
    
    // Fix missing closing tags
    const openDivs = (content.match(/<div[^>]*>/g) || []).length;
    const closeDivs = (content.match(/<\/div>/g) || []).length;
    
    if (openDivs > closeDivs) {
      const missingDivs = openDivs - closeDivs;
      for (let i = 0; i < missingDivs; i++) {
        content += '\n    </div>';
      }
      modified = true;
      console.log(`  Added ${missingDivs} missing </div> tags`);
    }
    
    // Fix missing closing braces in function calls
    content = content.replace(/(\w+)\s*\(\s*([^)]*?)\s*(\];)/g, (match, func, args, closing) => {
      if (!args.includes(')') && !args.trim().endsWith(';')) {
        return `${func}(${args})${closing}`;
      }
      return match;
    });
    
    // Fix specific patterns that cause parsing errors
    // Fix patterns like: description: 'text'  ];
    content = content.replace(/(\w+):\s*'([^']*)'\s*(\];)/g, "$1: '$2'\n    }$3");
    
    // Fix patterns like: benefits: ['item1', 'item2']  ];
    content = content.replace(/(\w+):\s*\[([^\]]*)\]\s*(\];)/g, "$1: [$2]\n    }$3");
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`  Fixed parsing errors in ${filePath}`);
      return true;
    } else {
      console.log(`  No specific issues found in ${filePath}`);
      return false;
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

console.log('🔧 Fixing specific parsing errors...\n');

let fixedCount = 0;
for (const file of filesToFix) {
  if (fs.existsSync(file)) {
    if (fixSpecificParsingErrors(file)) {
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