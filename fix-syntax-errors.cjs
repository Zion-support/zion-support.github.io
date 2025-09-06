#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common syntax fixes
const fixes = [
  // Fix import statements - replace comma with semicolon
  {
    pattern: /import\s+.*?from\s+['"][^'"]+['"],\s*$/gm,
    replacement: (match) => match.replace(/,$/, ';')
  },
  // Fix interface properties - replace comma with semicolon
  {
    pattern: /(\s+)(\w+)(\?)?:\s*([^,;]+),\s*$/gm,
    replacement: '$1$2$3: $4;'
  },
  // Fix function parameters - replace comma with semicolon in destructuring
  {
    pattern: /(\s+)(\w+):\s*([^,;]+),\s*$/gm,
    replacement: '$1$2: $3;'
  },
  // Fix statements ending with comma instead of semicolon
  {
    pattern: /([^;])\s*,\s*$/gm,
    replacement: '$1;'
  },
  // Fix specific patterns
  {
    pattern: /setErrors\(newErrors\),\s*$/gm,
    replacement: 'setErrors(newErrors);'
  },
  {
    pattern: /return\s+Object\.keys\([^)]+\)\.length\s*===\s*0\s*$/gm,
    replacement: (match) => match.replace(/,$/, ';')
  },
  {
    pattern: /e\.preventDefault\(\),\s*$/gm,
    replacement: 'e.preventDefault();'
  },
  {
    pattern: /setIsSubmitting\(true\),\s*$/gm,
    replacement: 'setIsSubmitting(true);'
  },
  {
    pattern: /await\s+new\s+Promise\([^)]+\)\s*,\s*$/gm,
    replacement: (match) => match.replace(/,$/, ';')
  },
  {
    pattern: /setIsSubmitted\(true\),\s*$/gm,
    replacement: 'setIsSubmitted(true);'
  },
  {
    pattern: /showSuccess\([^)]+\)\s*,\s*$/gm,
    replacement: (match) => match.replace(/,$/, ';')
  },
  {
    pattern: /setFormData\(\{[^}]+\}\)\s*,\s*$/gm,
    replacement: (match) => match.replace(/,$/, ';')
  },
  {
    pattern: /setErrors\(\{\}\)\s*$/gm,
    replacement: 'setErrors({});'
  },
  {
    pattern: /console\.error\([^)]+\)\s*,\s*$/gm,
    replacement: (match) => match.replace(/,$/, ';')
  },
  {
    pattern: /showError\([^)]+\)\s*$/gm,
    replacement: (match) => match.replace(/,$/, ';')
  },
  {
    pattern: /setIsSubmitting\(false\)\s*$/gm,
    replacement: 'setIsSubmitting(false);'
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
    'components/**/*.tsx',
    'components/**/*.ts',
    'pages/**/*.tsx',
    'pages/**/*.ts',
    'src/**/*.tsx',
    'src/**/*.ts',
    'hooks/**/*.ts',
    'lib/**/*.ts',
    'utils/**/*.ts'
  ];
  
  let totalFixed = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    files.forEach(file => {
      if (fixFile(file)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, fixes };