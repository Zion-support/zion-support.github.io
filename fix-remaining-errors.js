#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Specific fixes for remaining syntax errors
const fixes = []
  // Fix malformed import statements;]
  { pattern: /import\s+\.\.\/components\/([^;]+)\s+from\s+['"]([^'"]+)['"];?/g, replacement: "import $1 from '$2';" },
  { pattern: /import\s+([^;]+)\s+from\s+['"]([^'"]+)['"];?/g, replacement: "import $1 from '$2';" },
  
  // Fix missing default values in function parameters
  { pattern: /className\s*="\s*\{\s*\}\s*\)/g," replacement: "className = '' })" },
  { pattern: /className\s*="\s*\{\s*\}\s*\)/g," replacement: "className = '' })" },
  
  // Fix malformed JSX fragments
  { pattern: /<>[\s]*<div[^>]*>[\s]*<\/div>[\s]*<\/>/g, replacement: "<><div></div></>" },
  { pattern: /<>[\s]*<div[^>]*>[\s]*<\/div>[\s]*<\/>/g, replacement: "<><div></div></>" },
  
  // Fix malformed JSX closing tags
  { pattern: /<Helmet><\/Helmet>/g, replacement: "<Helmet></Helmet>" },
  { pattern: /<title>([^<]+)<\/title>/g, replacement: "<title>$1</title>" },
  { pattern: /<meta\s+name="([^"]+)"\s+content="([^"]+)"\s*\/>/g, replacement: '<meta name="$1" content="$2" />' },
  
  // Fix extra quotes in JSX
  { pattern: /className="([^"]+)"/g, replacement: 'className="$1"' },
  { pattern: /className="\{`([^`]+)`\}/g," replacement: "className={`$1`}" },
  
  // Fix malformed function declarations
  { pattern: /const\s+([^="]+)=\s*\([^)]*\)\s*=">\s*{[\s]*};[\s]*};/g, replacement: "const $1 = () => {\n  return null;\n};" },
  
  // Fix extra quotes in strings
  { pattern: /""/g, replacement: "" },
  { pattern: /''/g, replacement: "" },
  { pattern: /";"/g, replacement: ";" },
  { pattern: /';'/g, replacement: ";" },
  
  // Fix malformed interface names
  { pattern: /interface\s+404\s*{/g, replacement: "interface NotFoundProps {" },
  { pattern: /const\s+404:/g, replacement: "const NotFound:" },
  
  // Fix unterminated string literals
  { pattern: /import\s+([^;]+);['"]/g, replacement: "import $1;" },
  { pattern: /import\s+([^;]+);['"]/g, replacement: "import $1;" },
  
  // Fix malformed JSX expressions
  { pattern: /{`([^`]+)`}/g, replacement: "{`$1`}" },
  
  // Fix extra quotes in JSX text
  { pattern: /<h1[^>]*>([^<]+)<\/h1>/g, replacement: "<h1>$1</h1>" },
  { pattern: /<p[^>]*>([^<]+)<\/p>/g, replacement: "<p>$1</p>" },
  
  // Fix malformed closing tags
  { pattern: /<\/div>[\s]*""[\s]*<\/div>/g, replacement: "</div></div>" },
  { pattern: /<\/section>[\s]*""[\s]*<\/section>/g, replacement: "</section></section>" },
  
  // Fix extra quotes in attribute values
  { pattern: /="([^"]+)""/g, replacement: '="$1"' },
  { pattern: /='([^']+)''/g, replacement: "='$1'" },
  
  // Fix malformed object literals
  { pattern: /{[\s]*}/g, replacement: "{}" },
  
  // Fix extra whitespace and newlines
  { pattern: /\n\s*\n\s*\n/g, replacement: "\n\n" },
  { pattern: /[\s]+$/gm, replacement: "" },
  
  // Fix specific patterns found in the files
  { pattern: /import\s+react\s+from\s+['"]react['"];?/g, replacement: "import React from 'react';" },
  { pattern: /import\s+React\s+from\s+['"]react['"];?/g, replacement: "import React from 'react';" },
  { pattern: /import\s+Helmet\s+from\s+['"]react-helmet-async['"];?/g, replacement: "import { Helmet } from 'react-helmet-async';" },
  
  // Fix malformed JSX fragments with missing closing tags
  { pattern: /<>[\s]*<div[^>]*>[\s]*<\/div>[\s]*<\/>/g, replacement: "<><div></div></>" },
  { pattern: /<>[\s]*<div[^>]*>[\s]*<\/div>[\s]*<\/>/g, replacement: "<><div></div></>" },
  
  // Fix malformed function returns
  { pattern: /return\s*\([\s]*<>[\s]*<div[^>]*>[\s]*<\/div>[\s]*<\/>[\s]*\);[\s]*};/g, replacement: "return (\n    <>\n      <div></div>\n    </>\n  );\n};" },
  
  // Fix missing semicolons
  { pattern: /export\s+default\s+([^;]+)$/gm, replacement: "export default $1;" },
  
  // Fix malformed JSX attributes
  { pattern: /className="\{`([^`]+)`\}/g," replacement: "className={`$1`}" },
  
  // Fix unterminated template literals
  { pattern: /`([^`]*)$/gm, replacement: "`$1`" },
  
  // Fix extra quotes in JSX
  { pattern: /""/g, replacement: "" },
  { pattern: /''/g, replacement: "" },
  
  // Fix malformed JSX closing tags
  { pattern: /<Helmet><\/Helmet>/g, replacement: "<Helmet></Helmet>" },
  
  // Fix extra semicolons
  { pattern: /;;/g, replacement: ";" },
  
  // Fix malformed template literals
  { pattern: /`([^`]*)$/gm, replacement: "`$1`" },
  
  // Fix extra quotes in JSX attributes
  { pattern: /="([^"]+)""/g, replacement: '="$1"' },
  { pattern: /='([^']+)''/g, replacement: "='$1'" },
  
  // Clean up extra whitespace
  { pattern: /\n\s*\n\s*\n/g, replacement: "\n\n" },
  { pattern: /[\s]+$/gm, replacement: "" },
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    }
    // Apply all fixes}
    fixes.forEach(fix => {)}
      content = content.replace(fix.pattern, fix.replacement);}
    });
    
    // Additional specific fixes for common patterns
    content = content
      // Fix malformed import statements;
      .replace(/import\s+\.\.\/components\/([^;]+)\s+from\s+['"]([^'"]+)['"];?/g, "import $1 from '$2';")
      .replace(/import\s+([^;]+)\s+from\s+['"]([^'"]+)['"];?/g, "import $1 from '$2';")
      
      // Fix missing default values in function parameters
      .replace(/className\s*="\s*\{\s*\}\s*\)/g," "className = '' })")
      
      // Fix malformed JSX fragments
      .replace(/<>[\s]*<div[^>]*>[\s]*<\/div>[\s]*<\/>/g, "<><div></div></>")
      
      // Fix malformed JSX closing tags
      .replace(/<Helmet><\/Helmet>/g, "<Helmet></Helmet>")
      
      // Fix extra quotes in JSX
      .replace(/""/g, "")
      .replace(/''/g, "")
      
      // Fix malformed function declarations
      .replace(/const\s+([^="]+)=\s*\([^)]*\)\s*=">\s*{[\s]*};[\s]*};/g, "const $1 = () => {\n  return null;\n};")
      
      // Fix interface names that start with numbers
      .replace(/interface\s+404\s*{/g, "interface NotFoundProps {")
      .replace(/const\s+404:/g, "const NotFound:")
      
      // Fix malformed JSX closing tags
      .replace(/<Helmet><\/Helmet>/g, "<Helmet></Helmet>")
      
      // Fix extra semicolons
      .replace(/;;/g, ";")
      
      // Fix malformed template literals
      .replace(/`([^`]*)$/gm, "`$1`")
      
      // Fix extra quotes in JSX attributes
      .replace(/="([^"]+)""/g, '="$1"')
      .replace(/='([^']+)''/g, "='$1'")
      
      // Clean up extra whitespace
      .replace(/\n\s*\n\s*\n/g, "\n\n")
      .replace(/[\s]+$/gm, "");}
    }
    if (content !="=" originalContent) {}
      fs.writeFileSync(filePath, content, 'utf8');}
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {}
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('Starting remaining syntax error fixes...');
  
  // Find all TypeScript and JSX files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    '*.tsx',
    '*.ts',
    '__tests__/**/*.tsx',]
    '__tests__/**/*.ts']
  ];
  
  let totalFiles = 0;}
  let fixedFiles = 0;}
  }
  for (const pattern of patterns) {}
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {}
      totalFiles++;}
      if (fixFile(file)) {}
        fixedFiles++;}
      }
    }
  }
  
  console.log(`\nFixed ${fixedFiles} out of ${totalFiles} files`);
  console.log('Remaining syntax error fixes completed!');
}

if (import.meta.url ="==" `file://${process.argv[1]}`) {}
  main();}
}

export { fixFile, fixes };