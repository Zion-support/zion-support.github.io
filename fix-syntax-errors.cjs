const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common syntax fixes
const fixes = [
  // Fix missing commas after benefits arrays
  {
    pattern: /benefits:\s*\[[^\]]+\];/g,
    replacement: (match) => match.replace(';', '')
  },
  // Fix missing commas after icon properties
  {
    pattern: /{\s*icon:\s*(\w+),\s*title:/g,
    replacement: '{\n      icon: $1,\n      title:'
  },
  // Fix missing commas after title properties
  {
    pattern: /title:\s*'[^']+',\s*description:/g,
    replacement: (match) => match.replace(/,(\s*description:)/, ',\n      $1')
  },
  // Fix missing commas after description properties
  {
    pattern: /description:\s*'[^']+',\s*benefits:/g,
    replacement: (match) => match.replace(/,(\s*benefits:)/, ',\n      $1')
  },
  // Fix missing commas after closing brackets
  {
    pattern: /}\s*{\s*icon:/g,
    replacement: '},\n    {\n      icon:'
  },
  // Fix missing commas in object properties
  {
    pattern: /(\w+):\s*'[^']+'\s*(\w+):/g,
    replacement: '$1: \'$2\',\n      $3:'
  }
];

// Get all AI service page files
const files = glob.sync('app/ai-*/page.tsx');

console.log(`Found ${files.length} AI service files to fix`);

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;
    
    // Apply fixes
    fixes.forEach(fix => {
      if (typeof fix.replacement === 'function') {
        content = content.replace(fix.pattern, fix.replacement);
      } else {
        content = content.replace(fix.pattern, fix.replacement);
      }
    });
    
    // Additional specific fixes
    // Fix missing commas in features array
    content = content.replace(/benefits:\s*\[[^\]]+\]\s*}/g, (match) => {
      return match.replace(']', '],');
    });
    
    // Fix missing commas after closing brackets in features array
    content = content.replace(/}\s*];/g, '}\n  ];');
    
    // Fix missing commas in object properties
    content = content.replace(/(\w+):\s*'[^']+'\s*(\w+):/g, '$1: \'$2\',\n      $3:');
    
    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Fixed: ${file}`);
    } else {
      console.log(`No changes needed: ${file}`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log('Syntax error fixes completed!');