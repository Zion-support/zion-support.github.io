#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common JSX error patterns to fix
const fixes = [
  // Fix malformed closing tags (missing >)
  {
    pattern: /<\/([a-zA-Z][a-zA-Z0-9]*)\s*$/gm,
    replacement: (match, tagName) => `</${tagName}>`
  },
  // Fix semicolons after JSX closing tags
  {
    pattern: /<\/([a-zA-Z][a-zA-Z0-9]*)>;/gm,
    replacement: (match, tagName) => `</${tagName}>`
  },
  // Fix semicolons after JSX self-closing tags
  {
    pattern: /<([a-zA-Z][a-zA-Z0-9]*)\s*\/>;/gm,
    replacement: (match, tagName) => `<${tagName} />`
  },
  // Fix malformed JSX fragments
  {
    pattern: /<React\.Fragment>;/gm,
    replacement: '<React.Fragment>'
  },
  {
    pattern: /<\/React\.Fragment>;/gm,
    replacement: '</React.Fragment>'
  },
  // Fix malformed Routes closing
  {
    pattern: /<\/Routes>;/gm,
    replacement: '</Routes>'
  },
  // Fix malformed Suspense closing
  {
    pattern: /<\/Suspense>;/gm,
    replacement: '</Suspense>'
  },
  // Fix malformed div closing
  {
    pattern: /<\/div>;/gm,
    replacement: '</div>'
  },
  // Fix malformed BrowserRouter closing
  {
    pattern: /<\/BrowserRouter>;/gm,
    replacement: '</BrowserRouter>'
  },
  // Fix malformed HelmetProvider closing
  {
    pattern: /<\/HelmetProvider>;/gm,
    replacement: '</HelmetProvider>'
  },
  // Fix malformed ErrorBoundary closing
  {
    pattern: /<\/ErrorBoundary>;/gm,
    replacement: '</ErrorBoundary>'
  },
  // Fix extra semicolons at end of JSX expressions
  {
    pattern: /;\s*$/gm,
    replacement: ''
  },
  // Fix malformed h1 closing tags
  {
    pattern: /<\/h1\s*$/gm,
    replacement: '</h1>'
  },
  // Fix malformed h2 closing tags
  {
    pattern: /<\/h2\s*$/gm,
    replacement: '</h2>'
  },
  // Fix malformed p closing tags
  {
    pattern: /<\/p\s*$/gm,
    replacement: '</p>'
  },
  // Fix malformed span closing tags
  {
    pattern: /<\/span\s*$/gm,
    replacement: '</span>'
  },
  // Fix malformed button closing tags
  {
    pattern: /<\/button\s*$/gm,
    replacement: '</button>'
  },
  // Fix malformed section closing tags
  {
    pattern: /<\/section\s*$/gm,
    replacement: '</section>'
  },
  // Fix malformed div closing tags
  {
    pattern: /<\/div\s*$/gm,
    replacement: '</div>'
  },
  // Fix malformed header closing tags
  {
    pattern: /<\/header\s*$/gm,
    replacement: '</header>'
  },
  // Fix malformed footer closing tags
  {
    pattern: /<\/footer\s*$/gm,
    replacement: '</footer>'
  },
  // Fix malformed main closing tags
  {
    pattern: /<\/main\s*$/gm,
    replacement: '</main>'
  },
  // Fix malformed article closing tags
  {
    pattern: /<\/article\s*$/gm,
    replacement: '</article>'
  },
  // Fix malformed aside closing tags
  {
    pattern: /<\/aside\s*$/gm,
    replacement: '</aside>'
  },
  // Fix malformed nav closing tags
  {
    pattern: /<\/nav\s*$/gm,
    replacement: '</nav>'
  },
  // Fix malformed ul closing tags
  {
    pattern: /<\/ul\s*$/gm,
    replacement: '</ul>'
  },
  // Fix malformed ol closing tags
  {
    pattern: /<\/ol\s*$/gm,
    replacement: '</ol>'
  },
  // Fix malformed li closing tags
  {
    pattern: /<\/li\s*$/gm,
    replacement: '</li>'
  },
  // Fix malformed a closing tags
  {
    pattern: /<\/a\s*$/gm,
    replacement: '</a>'
  },
  // Fix malformed img self-closing tags
  {
    pattern: /<img([^>]*)\s*$/gm,
    replacement: (match, attributes) => {
      if (!match.includes('/>')) {
        return `<img${attributes} />`
      }
      return match
    }
  },
  // Fix malformed input self-closing tags
  {
    pattern: /<input([^>]*)\s*$/gm,
    replacement: (match, attributes) => {
      if (!match.includes('/>')) {
        return `<input${attributes} />`
      }
      return match
    }
  },
  // Fix malformed br self-closing tags
  {
    pattern: /<br\s*$/gm,
    replacement: '<br />'
  },
  // Fix malformed hr self-closing tags
  {
    pattern: /<hr\s*$/gm,
    replacement: '<hr />'
  },
  // Fix malformed meta self-closing tags
  {
    pattern: /<meta([^>]*)\s*$/gm,
    replacement: (match, attributes) => {
      if (!match.includes('/>')) {
        return `<meta${attributes} />`
      }
      return match
    }
  },
  // Fix malformed link self-closing tags
  {
    pattern: /<link([^>]*)\s*$/gm,
    replacement: (match, attributes) => {
      if (!match.includes('/>')) {
        return `<link${attributes} />`
      }
      return match
    }
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply all fixes
    fixes.forEach(fix => {
      if (typeof fix.replacement === 'function') {
        content = content.replace(fix.pattern, fix.replacement);
      } else {
        content = content.replace(fix.pattern, fix.replacement);
      }
    });
    
    // Only write if content changed
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

function main() {
  console.log('Starting JSX error fixes...');
  
  // Find all TypeScript/JSX files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    totalFiles += files.length;
    
    files.forEach(file => {
      if (fixFile(file)) {
        fixedFiles++;
      }
    });
  });
  
  console.log(`\nFixed ${fixedFiles} out of ${totalFiles} files`);
  console.log('JSX error fixes completed!');
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, fixes };