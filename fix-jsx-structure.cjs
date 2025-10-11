const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixJSXStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common JSX structure issues
    const fixes = [
      // Fix missing closing tags for main elements
      {
        pattern: /<main[^>]*>\s*{/g,
        replacement: '<main $1>\n        {'
      },
      // Fix missing closing tags for sections
      {
        pattern: /<section[^>]*>\s*{/g,
        replacement: '<section $1>\n          {'
      },
      // Fix missing closing tags for divs
      {
        pattern: /<div[^>]*>\s*{/g,
        replacement: '<div $1>\n            {'
      },
      // Fix missing closing tags for buttons
      {
        pattern: /<button[^>]*>\s*([^<]+)\s*$/gm,
        replacement: '<button $1>\n                  $2\n                </button>'
      },
      // Fix missing closing tags for h1, h2, h3, etc.
      {
        pattern: /<h([1-6])[^>]*>\s*([^<]+)\s*$/gm,
        replacement: '<h$1 $1>\n                  $2\n                </h$1>'
      },
      // Fix missing closing tags for p elements
      {
        pattern: /<p[^>]*>\s*([^<]+)\s*$/gm,
        replacement: '<p $1>\n                  $2\n                </p>'
      },
      // Fix missing closing tags for span elements
      {
        pattern: /<span[^>]*>\s*([^<]+)\s*$/gm,
        replacement: '<span $1>\n                  $2\n                </span>'
      },
      // Fix missing closing tags for ul elements
      {
        pattern: /<ul[^>]*>\s*{/g,
        replacement: '<ul $1>\n            {'
      },
      // Fix missing closing tags for ol elements
      {
        pattern: /<ol[^>]*>\s*{/g,
        replacement: '<ol $1>\n            {'
      },
      // Fix missing closing tags for li elements
      {
        pattern: /<li[^>]*>\s*([^<]+)\s*$/gm,
        replacement: '<li $1>\n                  $2\n                </li>'
      },
      // Fix missing closing tags for a elements
      {
        pattern: /<a[^>]*>\s*([^<]+)\s*$/gm,
        replacement: '<a $1>\n                  $2\n                </a>'
      },
      // Fix missing closing tags for img elements
      {
        pattern: /<img[^>]*>\s*$/gm,
        replacement: '<img $1 />'
      },
      // Fix missing closing tags for input elements
      {
        pattern: /<input[^>]*>\s*$/gm,
        replacement: '<input $1 />'
      },
      // Fix missing closing tags for br elements
      {
        pattern: /<br[^>]*>\s*$/gm,
        replacement: '<br $1 />'
      },
      // Fix missing closing tags for hr elements
      {
        pattern: /<hr[^>]*>\s*$/gm,
        replacement: '<hr $1 />'
      }
    ];
    
    // Apply fixes
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // Additional specific fixes for common patterns
    // Fix missing closing tags in JSX expressions
    content = content.replace(/(<[^>]+>)\s*{([^}]+)}\s*$/gm, '$1\n            {$2}\n          </div>');
    
    // Fix missing closing tags for nested elements
    content = content.replace(/(<div[^>]*>)\s*{([^}]+)}\s*$/gm, '$1\n            {$2}\n          </div>');
    
    // Fix missing closing tags for sections
    content = content.replace(/(<section[^>]*>)\s*{([^}]+)}\s*$/gm, '$1\n          {$2}\n        </section>');
    
    // Fix missing closing tags for main
    content = content.replace(/(<main[^>]*>)\s*{([^}]+)}\s*$/gm, '$1\n        {$2}\n      </main>');
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX structure: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing JSX structure in ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JSX files
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: process.cwd() });

console.log(`Found ${files.length} files to check for JSX structure issues...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixJSXStructure(file)) {
    fixedCount++;
  }
});

console.log(`Fixed JSX structure in ${fixedCount} files`);