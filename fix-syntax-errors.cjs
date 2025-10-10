const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common syntax fixes
const fixes = [
  // Fix malformed closing tags
  { pattern: /  <\//g, replacement: '  </' },
  { pattern: /  <\/h1>/g, replacement: '  </h1>' },
  { pattern: /  <\/h2>/g, replacement: '  </h2>' },
  { pattern: /  <\/button>/g, replacement: '  </button>' },
  { pattern: /  <\/p>/g, replacement: '  </p>' },
  { pattern: /  <\/section>/g, replacement: '  </section>' },
  { pattern: /  <\/main>/g, replacement: '  </main>' },
  { pattern: /  <\/React\.Fragment>/g, replacement: '  </React.Fragment>' },
  { pattern: /  <\/>/g, replacement: '  </>' },
  
  // Fix missing semicolons in arrays
  { pattern: /  \];\nconst benefits = \[/g, replacement: '  ];\n\nconst benefits = [' },
  { pattern: /  \];\nreturn \(/g, replacement: '  ];\n\nreturn (' },
  
  // Fix malformed array syntax
  { pattern: /  \]\n\];/g, replacement: '  ]' },
  { pattern: /  \}\n  \];/g, replacement: '  }\n  ];' },
  
  // Fix missing closing brackets
  { pattern: /    'Gain competitive advantage with advanced technology';\n  \]/g, replacement: "    'Gain competitive advantage with advanced technology'\n  ];" },
  
  // Fix malformed JSX fragments
  { pattern: /    <\/React\.Fragment>\n  \),\n\};\n\nexport default \w+Page\n  <\/button>\n  <\/h2>\n  <\/button>\n  <\/button>\n  <\/h1>/g, replacement: '    </>\n  );\n};\n\nexport default AiAnalyticsPage;' },
  
  // Fix missing closing tags in arrays
  { pattern: /  \]\nconst benefits = \[/g, replacement: '  ];\n\nconst benefits = [' },
  
  // Fix malformed closing tags with extra characters
  { pattern: /  <\/h1>\n  <\/button>\n  <\/h2>\n  <\/button>\n  <\/button>\n  <\/h1>/g, replacement: '  </h1>' },
  
  // Fix missing semicolons
  { pattern: /  \]\nreturn \(/g, replacement: '  ];\n\nreturn (' },
  
  // Fix malformed JSX closing
  { pattern: /    <\/React\.Fragment>\n  \),\n\};\n\nexport default \w+Page\n  <\/button>\n  <\/h2>\n  <\/button>\n  <\/button>\n  <\/h1>/g, replacement: '    </>\n  );\n};\n\nexport default AiAnalyticsPage;' }
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
    
    // Additional specific fixes for common patterns
    // Fix missing closing tags
    content = content.replace(/<h1[^>]*>([^<]+)<\/h1>\s*<\/h1>/g, '<h1$1</h1>');
    content = content.replace(/<h2[^>]*>([^<]+)<\/h2>\s*<\/h2>/g, '<h2$1</h2>');
    content = content.replace(/<button[^>]*>([^<]+)<\/button>\s*<\/button>/g, '<button$1</button>');
    content = content.replace(/<p[^>]*>([^<]+)<\/p>\s*<\/p>/g, '<p$1</p>');
    
    // Fix malformed array syntax
    content = content.replace(/  \]\n\];/g, '  ]');
    content = content.replace(/  \}\n  \];/g, '  }\n  ];');
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*\]\s*\nconst benefits = \[/g, '$1 ];\n\nconst benefits = [');
    content = content.replace(/(\w+)\s*\]\s*\nreturn \(/g, '$1 ];\n\nreturn (');
    
    // Fix malformed JSX closing
    content = content.replace(/    <\/React\.Fragment>\n  \),\n\};\n\nexport default \w+Page\n  <\/button>\n  <\/h2>\n  <\/button>\n  <\/button>\n  <\/h1>/g, '    </>\n  );\n};\n\nexport default AiAnalyticsPage;');
    
    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JSX files in the app directory
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: process.cwd() });

console.log(`Found ${files.length} files to check...`);

let fixedCount = 0;
for (const file of files) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);