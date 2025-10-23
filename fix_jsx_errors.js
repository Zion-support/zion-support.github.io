const fs = require('fs');
const path = require('path');

// Common JSX fixes
const fixes = [
  // Fix malformed closing tags
  { pattern: /  <\//g, replacement: '  </' },
  { pattern: /  <\/h1>/g, replacement: '  </h1>' },
  { pattern: /  <\/h2>/g, replacement: '  </h2>' },
  { pattern: /  <\/p>/g, replacement: '  </p>' },
  { pattern: /  <\/button>/g, replacement: '  </button>' },
  { pattern: /  <\/div>/g, replacement: '  </div>' },
  
  // Fix React.Fragment issues
  { pattern: /<React\.Fragment>/g, replacement: '<>' },
  { pattern: /<\/React\.Fragment>/g, replacement: '</>' },
  
  // Fix malformed JSX closing tags
  { pattern: /  <\/\n/g, replacement: '  </\n' },
  { pattern: /  <\/\s*\n/g, replacement: '  </\n' },
  
  // Fix specific malformed patterns
  { pattern: /  <\/\s*$/gm, replacement: '  </' },
  { pattern: /  <\/\s*\n\s*$/gm, replacement: '  </\n' },
];

function fixFile(filePath) {
  try {
<<<<<<< HEAD
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Apply fixes
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
=======
    let _content = fs.readFileSync(filePath, 'utf8');
    let _modified = false;

    //Fix malformed JSX elements like: className="..." <span> -> className="..." /> <span>
    const patterns = [
      {
        //Fix CheckCircleIcon and similar patterns
        pattern: /(<CheckCircleIcon[^>]*>)\s*<span/g,
        replacement: '$1 />\n                  <span',
      },
      {
        //Fix other icon patterns
        pattern: /(<[A-Z][a-zA-Z]*Icon[^>]*>)\s*<[^/]/g,
        replacement: '$1 />\n                <',
      },
      {
        //Fix closing tag issues
        pattern: /(<[A-Z][a-zA-Z]*Icon[^>]*>)\s*<\/[^>]*>/g,
        replacement: '$1 />\n              </',
      },
      {
        //Fix ArrowRightIcon patterns
        pattern: /(<ArrowRightIcon[^>]*>)\s*<\/Link>/g,
        replacement: '$1 />\n            </Link>',
      },
      {
        //Fix TruckIcon patterns
        pattern: /(<TruckIcon[^>]*>)\s*<\/div>/g,
        replacement: '$1 />\n          </div>',
      },
    ];

    patterns.forEach(fix => {
      //       const newContent = content.replace(fix.pattern, fix.replacement);
>>>>>>> 40ca7232406b369c6706f4e528a6385ab62c9b51
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Fix specific malformed closing tags
    content = content.replace(/  <\/\s*$/gm, '  </');
    content = content.replace(/  <\/\s*\n/gm, '  </\n');
    
    // Fix unterminated regexp literals
    content = content.replace(/  <\/\s*$/gm, '  </');
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
<<<<<<< HEAD
      console.log(`Fixed: ${filePath}`);
      return true;
=======
      //       return true;
>>>>>>> 40ca7232406b369c6706f4e528a6385ab62c9b51
    }
    
    return false;
  } catch (error) {
<<<<<<< HEAD
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Start fixing
console.log('Starting JSX fixes...');
const fixedCount = walkDir('./app');
console.log(`Fixed ${fixedCount} files`);
=======
    //     return false;
  }
}

// Fix the specific file
// const filePath = process.argv[2];
if (filePath) {
  fixJSXErrors(filePath);
} else {
  //   }
>>>>>>> 40ca7232406b369c6706f4e528a6385ab62c9b51
