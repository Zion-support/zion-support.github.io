#!/usr/bin/env node

const fs = require('fs');

// Function to fix all JSX syntax errors comprehensively
function fixAllJSXErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing closing tags for common patterns
    const fixes = [
      // Fix missing closing tags for p elements
      {
        pattern: /<p([^>]*)>([^<]+)(?!<\/p>)/g,
        replacement: '<p$1>$2</p>'
      },
      // Fix missing closing tags for h1, h2, h3 elements
      {
        pattern: /<h([1-6])([^>]*)>([^<]+)(?!<\/h[1-6]>)/g,
        replacement: '<h$1$2>$3</h$1>'
      },
      // Fix missing closing tags for div elements
      {
        pattern: /<div([^>]*)>([^<]+)(?!<\/div>)/g,
        replacement: '<div$1>$2</div>'
      },
      // Fix missing closing tags for span elements
      {
        pattern: /<span([^>]*)>([^<]+)(?!<\/span>)/g,
        replacement: '<span$1>$2</span>'
      },
      // Fix missing closing tags for button elements
      {
        pattern: /<button([^>]*)>([^<]+)(?!<\/button>)/g,
        replacement: '<button$1>$2</button>'
      },
      // Fix missing closing tags for a elements
      {
        pattern: /<a([^>]*)>([^<]+)(?!<\/a>)/g,
        replacement: '<a$1>$2</a>'
      },
      // Fix missing closing tags for article elements
      {
        pattern: /<article([^>]*)>([^<]+)(?!<\/article>)/g,
        replacement: '<article$1>$2</article>'
      },
      // Fix missing closing tags for section elements
      {
        pattern: /<section([^>]*)>([^<]+)(?!<\/section>)/g,
        replacement: '<section$1>$2</section>'
      },
      // Fix missing closing tags for ul elements
      {
        pattern: /<ul([^>]*)>([^<]+)(?!<\/ul>)/g,
        replacement: '<ul$1>$2</ul>'
      },
      // Fix missing closing tags for li elements
      {
        pattern: /<li([^>]*)>([^<]+)(?!<\/li>)/g,
        replacement: '<li$1>$2</li>'
      }
    ];
    
    // Apply fixes
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    // Fix specific malformed patterns
    const specificFixes = [
      // Fix patterns like "Text; </" -> "Text"
      {
        pattern: /([^<>\s][^<>]*);\s*<\/\s*$/gm,
        replacement: '$1'
      },
      // Fix patterns like "Text; </" -> "Text"
      {
        pattern: /([^<>\s][^<>]*);\s*<\/\s*<([^>]+)>/g,
        replacement: '$1\n          </$2>'
      },
      // Fix orphaned closing tags
      {
        pattern: /^\s*<\/[^>]+>\s*$/gm,
        replacement: ''
      },
      // Fix malformed JSX with unexpected characters
      {
        pattern: /(\s+)<\/[^>]+>\s*[^<\s][^<]*<\/[^>]+>/g,
        replacement: (match) => {
          const cleanMatch = match.replace(/[^<\s>\/]+<\/[^>]+>/, '');
          return cleanMatch;
        }
      },
      // Fix broken JSX attributes
      {
        pattern: /(\s+)<\/[^>]+>\s*;\s*<\/[^>]+>/g,
        replacement: (match) => {
          const parts = match.split(';');
          if (parts.length === 2) {
            return parts[0] + parts[1];
          }
          return match;
        }
      }
    ];
    
    specificFixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    // Write back if modified
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing JSX syntax in ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting comprehensive JSX error fixes...');

const filesToFix = [
  './app/page.tsx',
  './app/about/page.tsx',
  './app/accessibility/page.tsx',
  './app/components/Breadcrumb.tsx',
  './app/components/EnhancedPerformanceOptimizer.tsx'
];

let fixedCount = 0;

filesToFix.forEach(filePath => {
  if (fixAllJSXErrors(filePath)) {
    console.log(`Fixed JSX syntax errors in: ${filePath}`);
    fixedCount++;
  }
});

console.log(`\nComprehensive JSX fix complete:`);
console.log(`- Files processed: ${filesToFix.length}`);
console.log(`- Files fixed: ${fixedCount}`);