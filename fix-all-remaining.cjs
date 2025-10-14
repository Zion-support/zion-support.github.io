#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to fix all remaining syntax errors
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix unterminated string literals in imports
    content = content.replace(/import\s+([^'"`]+)\s+from\s+['"`]([^'"`]+)['"`];/g, "import $1 from '$2';");
    content = content.replace(/import\s+([^'"`]+)\s+from\s+['"`]([^'"`]+)['"`]/g, "import $1 from '$2';");
    
    // Fix 'use client' directive
    content = content.replace(/'use client;'/g, "'use client';");
    content = content.replace(/'use client'/g, "'use client';");
    
    // Fix unterminated string literals in object properties
    content = content.replace(/description:\s*'([^']*?)\n\s*}/g, "description: '$1'\n    }");
    content = content.replace(/description:\s*"([^"]*?)\n\s*}/g, 'description: "$1"\n    }');
    
    // Fix malformed JSX closing tags
    content = content.replace(/<\/\$1>/g, '');
    content = content.replace(/<\/\$1/g, '');
    
    // Fix self-closing tags that are malformed
    content = content.replace(/<(\w+)\s+[^>]*><\/\1>/g, '<$1 />');
    
    // Fix JSX fragments
    content = content.replace(/<><\/>/g, '<></>');
    
    // Fix unterminated JSX elements
    content = content.replace(/(<[^>]+)>\s*<\/\1>/g, '$1></$1>');
    
    // Fix missing closing tags in JSX
    content = content.replace(/(<div[^>]*>)\s*<\/div>\s*<\/div>/g, '$1</div>');
    
    // Fix malformed Link components
    content = content.replace(/<Link([^>]*)>\s*<\/Link>/g, '<Link$1></Link>');
    
    // Fix unterminated comments
    content = content.replace(/\/\*\s*([^*]*?)\n\s*\*\//g, '/* $1 */');
    
    // Fix specific patterns that are causing issues
    content = content.replace(/import\s+([^'"`]+)\s+from\s+['"`]([^'"`]+)['"`];/g, "import $1 from '$2';");
    
    // Fix JSX structure issues
    content = content.replace(/return\s*\(\s*<>\s*<\/>\s*/g, 'return (\n    <>\n      ');
    content = content.replace(/<>\s*<\/>\s*<([^>]+)>\s*<\/\1>/g, '<$1></$1>');
    
    // Fix extra closing braces
    content = content.replace(/\);}/g, ');');
    content = content.replace(/}\s*}\s*$/g, '}');
    
    // Fix malformed className attributes
    content = content.replace(/className=';([^']*?)"/g, 'className="$1"');
    content = content.replace(/className=";([^"]*?)"/g, 'className="$1"');
    
    // Fix missing semicolons
    content = content.replace(/export default page$/g, 'export default page;');
    
    // Fix missing closing braces by checking brace count
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      content += '\n' + '}'.repeat(missingBraces);
    }
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  // Find all TypeScript and JavaScript files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    '*.tsx',
    '*.ts'
  ];

  let totalFixed = 0;

  for (const pattern of patterns) {
    const files = await glob(pattern, { ignore: ['node_modules/**', 'dist/**'] });
    
    for (const file of files) {
      if (fixFile(file)) {
        totalFixed++;
      }
    }
  }

  console.log(`\nFixed ${totalFixed} files`);
}

main().catch(console.error);