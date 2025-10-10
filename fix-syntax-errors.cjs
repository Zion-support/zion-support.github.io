#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common syntax error patterns and their fixes
const fixes = [
  // Fix missing semicolons after imports
  {
    pattern: /from 'lucide-react';\s*;\s*const/g,
    replacement: "from 'lucide-react';\n\nconst"
  },
  {
    pattern: /from 'lucide-react';\s*;\s*export/g,
    replacement: "from 'lucide-react';\n\nexport"
  },
  {
    pattern: /from 'lucide-react';\s*;\s*function/g,
    replacement: "from 'lucide-react';\n\nfunction"
  },
  
  // Fix malformed JSX closing tags
  {
    pattern: /<title><\/titl>/g,
    replacement: '<title>'
  },
  
  // Fix missing closing braces in try-catch blocks
  {
    pattern: /try\s*{;\s*const/g,
    replacement: 'try {\n    const'
  },
  {
    pattern: /}\s*}\s*catch/g,
    replacement: '  }\n} catch'
  },
  
  // Fix missing return statements
  {
    pattern: /if\s*\([^)]+\)\s*{\s*return\s*}\s*$/gm,
    replacement: 'if ($1) {\n    return res.status(405).json({ error: \'Method not allowed\' });\n  }'
  },
  
  // Fix malformed function declarations
  {
    pattern: /const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{const\s+(\w+)\s*=\s*\[/g,
    replacement: 'const $1: React.FC = () => {\n  const $2 = ['
  },
  
  // Fix missing closing braces in JSX
  {
    pattern: /<div[^>]*>\s*<\/div>\s*;\s*\/\* Hero Section \*\/\s*<div/g,
    replacement: '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n        {/* Hero Section */}\n        <div'
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

function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'api/**/*.js'
  ];
  
  let totalFixed = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: '/workspace' });
    files.forEach(file => {
      const fullPath = path.join('/workspace', file);
      if (fixFile(fullPath)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

main();