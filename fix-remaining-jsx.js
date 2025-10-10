import fs from 'fs';
import { glob } from 'glob';

// More specific JSX fixes
const fixes = [
  // Fix JSX fragments
  {
    pattern: /<>([^<]*?)(?![^<]*<\/>)/g,
    replacement: '<>{$1}</>'
  },
  // Fix malformed closing tags
  {
    pattern: /<\/\s*>/g,
    replacement: ''
  },
  // Fix JSX expressions that need wrapping
  {
    pattern: /(\w+)\s*>\s*(\w+)\s*<\/\w+>/g,
    replacement: '<$1>$2</$1>'
  },
  // Fix malformed return statements
  {
    pattern: /return\s*\(\s*<\/[^>]+>\s*([^)]+)\s*\)/g,
    replacement: 'return ($1)'
  },
  // Fix unclosed JSX elements in specific patterns
  {
    pattern: /<(\w+)([^>]*)>([^<]*?)(?![^<]*<\/\1>)(?=\s*$)/gm,
    replacement: '<$1$2>$3</$1>'
  },
  // Fix JSX expressions that should be wrapped
  {
    pattern: /(\w+)\s*>\s*(\w+)/g,
    replacement: (match, tag, content) => {
      if (content.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*$/)) {
        return `<${tag}>${content}</${tag}>`;
      }
      return match;
    }
  },
  // Fix specific malformed patterns
  {
    pattern: /<(\w+)><\/\1>/g,
    replacement: '<$1></$1>'
  },
  // Fix JSX expressions with missing closing tags
  {
    pattern: /<(\w+)([^>]*)>([^<]*?)(?![^<]*<\/\1>)(?=\s*<)/g,
    replacement: '<$1$2>$3</$1>'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Apply fixes
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Additional specific fixes
    // Fix JSX expressions that need proper wrapping
    content = content.replace(/(\w+)\s*>\s*(\w+)\s*<\/\w+>/g, '<$1>$2</$1>');
    
    // Fix malformed JSX fragments
    content = content.replace(/<>([^<]*?)(?![^<]*<\/>)/g, '<>{$1}</>');
    
    // Fix unclosed JSX elements
    content = content.replace(/<(\w+)([^>]*)>([^<]*?)(?![^<]*<\/\1>)(?=\s*$)/gm, '<$1$2>$3</$1>');
    
    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
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

// Main function
async function main() {
  // Focus on the most problematic files first
  const priorityFiles = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'App.tsx',
    'ai-*-disabled/**/*.tsx'
  ];
  
  let allFiles = [];
  for (const pattern of priorityFiles) {
    const files = await glob(pattern, {
      ignore: ['node_modules/**', 'dist/**', '.next/**', 'out/**']
    });
    allFiles = [...allFiles, ...files];
  }
  
  // Remove duplicates
  allFiles = [...new Set(allFiles)];
  
  console.log(`Found ${allFiles.length} priority files to check...`);

  let fixedCount = 0;
  for (const file of allFiles) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);