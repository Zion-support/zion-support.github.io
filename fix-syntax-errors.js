import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common syntax error patterns to fix
const fixes = [
  // Fix unterminated string literals with extra quotes
  { pattern: /import\s+.*?from\s+['"](.*?)['"];['"];?/g, replacement: "import $1 from '$1';" },
  { pattern: /import\s+.*?from\s+['"](.*?)['"];['"]/g, replacement: "import $1 from '$1';" },
  { pattern: /import\s+.*?from\s+['"](.*?)['"];['"]/g, replacement: "import $1 from '$1';" },
  
// Fix unterminated strings with trailing quotes and commas
  fixed = fixed.replace(/(\w+):\s*'([^']*),'\s*$/gm, '$1: \'$2\'');
  fixed = fixed.replace(/(\w+):\s*"([^"]*),"\s*$/gm, '$1: "$2"');
  
  // Fix malformed object properties with extra quotes
  fixed = fixed.replace(/(\w+):\s*"([^"]*)",\s*"$/gm, '$1: "$2"');
  fixed = fixed.replace(/(\w+):\s*'([^']*)',\s*'$/gm, '$1: \'$2\'');
  
  // Fix missing closing braces in objects
  fixed = fixed.replace(/(\w+):\s*<(\w+)\s+className="[^"]*"\s*\/>,\s*$/gm, '$1: <$2 className="w-6 h-6" />,');
  
  // Fix missing properties in objects
  fixed = fixed.replace(/(\w+):\s*<(\w+)\s+className="[^"]*"\s*\/>,\s*$/gm, '$1: <$2 className="w-6 h-6" />,');
  
  // Fix missing closing brackets in arrays
  fixed = fixed.replace(/(\w+):\s*\[([^\]]*)\s*$/gm, (match, key, value) => {
    if (value.trim().endsWith(',')) {
      return `${key}: [${value.trim().slice(0, -1)}]`;
    }
    return match;
  });
  
  // Fix missing closing parentheses
  fixed = fixed.replace(/(\w+):\s*\(([^)]*)\s*$/gm, (match, key, value) => {
    if (value.trim().endsWith(',')) {
      return `${key}: (${value.trim().slice(0, -1)})`;
    }
    return match;
  });
  
  // Fix JSX fragment issues
  fixed = fixed.replace(/<>\s*$/gm, '<>');
  fixed = fixed.replace(/<\/>\s*$/gm, '</>');
  
  // Fix missing semicolons
  fixed = fixed.replace(/(\w+)\s*}\s*$/gm, '$1;');
  
  // Fix import statements
  fixed = fixed.replace(/import\s*{\s*([^}]*)\s*}\s*from\s*'([^']*)';?\s*$/gm, (match, imports, module) => {
    const cleanImports = imports.replace(/,\s*$/, '').trim();
    return `import { ${cleanImports} } from '${module}';`;
  });
  
  // Fix unterminated template literals
  { pattern: /`([^`]*)$/gm, replacement: "`$1`" },
  
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
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply all fixes
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // Additional specific fixes for common patterns
    content = content
      // Fix unterminated string literals by finding and closing them
      .replace(/import\s+([^;]+);['"]/g, (match, importPart) => {
        const cleanImport = importPart.replace(/['"]/g, '');
        return `import ${cleanImport};`;
      })
      // Fix malformed JSX
      .replace(/<>[\s]*<div[^>]*>[\s]*<\/div>[\s]*""[\s]*<\/>/g, '<><div></div></>')
      // Fix extra quotes in strings
      .replace(/""/g, '')
      .replace(/''/g, '')
      // Fix malformed function declarations
      .replace(/const\s+([^=]+)=\s*\([^)]*\)\s*=>\s*{[\s]*};[\s]*};/g, 'const $1 = () => {\n  return null;\n};')
      // Fix interface names that start with numbers
      .replace(/interface\s+404\s*{/g, 'interface NotFoundProps {')
      .replace(/const\s+404:/g, 'const NotFound:')
      // Fix malformed JSX closing tags
      .replace(/<Helmet><\/Helmet>/g, '<Helmet></Helmet>')
      // Fix extra semicolons
      .replace(/;;/g, ';')
      // Fix malformed template literals
      .replace(/`([^`]*)$/gm, '`$1`')
      // Fix extra quotes in JSX attributes
      .replace(/="([^"]+)""/g, '="$1"')
      .replace(/='([^']+)''/g, "='$1'")
      // Clean up extra whitespace
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      .replace(/[\s]+$/gm, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('Starting syntax error fixes...');
  
  // Find all TypeScript and JSX files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    '*.tsx',
    '*.ts',
    '__tests__/**/*.tsx',
    '__tests__/**/*.ts'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      totalFiles++;
if (processFile(file)) {
        fixedFiles++;
      }
    }
  }
  
console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixSyntaxErrors, processFile };
