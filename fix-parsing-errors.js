import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common patterns to fix
const fixes = [
  // Fix semicolons in arrays
  {
    pattern: /(\s*'[^']*',\s*;)/g,
    replacement: '$1'.replace(';', '')
  },
  // Fix missing semicolons after arrays/objects
  {
    pattern: /(\]\s*)(const|let|var|function|return|export|import)/g,
    replacement: '];\n$2'
  },
  // Fix missing semicolons after object declarations
  {
    pattern: /(\}\s*)(const|let|var|function|return|export|import)/g,
    replacement: '};\n$2'
  },
  // Fix missing closing tags in meta elements
  {
    pattern: /<meta>\s*<meta>/g,
    replacement: '<meta name="description" content="AI-powered solutions" />\n        <meta name="keywords" content="AI, artificial intelligence, business solutions" />'
  },
  // Fix missing closing tags for single meta elements
  {
    pattern: /<meta>\s*<\/Helmet>/g,
    replacement: '<meta name="description" content="AI-powered solutions" />\n      </Helmet>'
  },
  // Fix missing function declarations
  {
    pattern: /^(\s*const\s+\w+\s*=\s*useState)/gm,
    replacement: 'const Component: React.FC = () => {\n  $1'
  },
  // Fix missing imports for Eye icon
  {
    pattern: /import.*from 'lucide-react';/,
    replacement: (match) => {
      if (!match.includes('Eye')) {
        return match.replace('}', ', Eye }');
      }
      return match;
    }
  },
  // Fix missing commas in object properties
  {
    pattern: /(\w+):\s*(\w+)\s*$/gm,
    replacement: '$1: $2,'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
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

// Find all TypeScript/JavaScript files
const files = await glob('app/**/*.{ts,tsx,js,jsx}', {
  ignore: [
    '**/node_modules/**',
    '**/dist/**',
    '**/.next/**',
    '**/backup*/**',
    '**/disabled*/**',
    '**/disabled/**'
  ]
});

console.log(`Found ${files.length} files to check...`);

let fixedCount = 0;
for (const file of files) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);