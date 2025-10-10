import fs from 'fs';
import { glob } from 'glob';

// More specific patterns to fix
const fixes = [
  // Fix missing commas in object properties
  {
    pattern: /(\w+):\s*(\w+)\s*$/gm,
    replacement: '$1: $2,'
  },
  // Fix missing commas after object properties in arrays
  {
    pattern: /(\s*benefits:\s*\[[^\]]*\])\s*$/gm,
    replacement: '$1,'
  },
  // Fix missing closing braces in object definitions
  {
    pattern: /(\s*benefits:\s*\[[^\]]*\])\s*$/gm,
    replacement: '$1\n    }'
  },
  // Fix missing semicolons after array declarations
  {
    pattern: /(\]\s*)(const|let|var|function|return|export|import)/g,
    replacement: '];\n$2'
  },
  // Fix missing semicolons after object declarations
  {
    pattern: /(\}\s*)(const|let|var|function|return|export|import)/g,
    replacement: '};\n$2'
  },
  // Fix missing closing tags in JSX fragments
  {
    pattern: /<>\s*$/gm,
    replacement: '<>'
  },
  // Fix missing closing tags for meta elements
  {
    pattern: /<meta>\s*$/gm,
    replacement: '<meta name="description" content="AI-powered solutions" />'
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
  // Fix missing closing parentheses in function calls
  {
    pattern: /(\w+)\s*$/gm,
    replacement: '$1'
  },
  // Fix missing semicolons in variable declarations
  {
    pattern: /(\w+)\s*=\s*(\w+)\s*$/gm,
    replacement: '$1 = $2;'
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

    // Additional specific fixes for common patterns
    const specificFixes = [
      // Fix missing commas in object properties
      {
        pattern: /(\s*benefits:\s*\[[^\]]*\])\s*$/gm,
        replacement: '$1,\n    }'
      },
      // Fix missing semicolons after array declarations
      {
        pattern: /(\]\s*)(const|let|var|function|return|export|import)/g,
        replacement: '];\n$2'
      },
      // Fix missing semicolons after object declarations
      {
        pattern: /(\}\s*)(const|let|var|function|return|export|import)/g,
        replacement: '};\n$2'
      },
      // Fix missing closing tags in JSX fragments
      {
        pattern: /<>\s*$/gm,
        replacement: '<>'
      },
      // Fix missing closing tags for meta elements
      {
        pattern: /<meta>\s*$/gm,
        replacement: '<meta name="description" content="AI-powered solutions" />'
      }
    ];

    specificFixes.forEach(fix => {
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