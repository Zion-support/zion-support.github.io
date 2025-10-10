import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common JSX syntax fixes
const fixes = [
  // Fix unclosed JSX tags
  {
    pattern: /<h1([^></h1>]*)>([^<]*?)(?![^<]*<\/h1>)/g,
    replacement: '<h1$1>$2</h1>'
  },
  {
    pattern: /<h2([^></h2>]*)>([^<]*?)(?![^<]*<\/h2>)/g,
    replacement: '<h2$1>$2</h2>'
  },
  {
    pattern: /<h3([^></h3>]*)>([^<]*?)(?![^<]*<\/h3>)/g,
    replacement: '<h3$1>$2</h3>'
  },
  {
    pattern: /<p([^></p>]*)>([^<]*?)(?![^<]*<\/p>)/g,
    replacement: '<p$1>$2</p>'
  },
  {
    pattern: /<div([^></div>]*)>([^<]*?)(?![^<]*<\/div>)/g,
    replacement: '<div$1>$2</div>'
  },
  {
    pattern: /<span([^></span>]*)>([^<]*?)(?![^<]*<\/span>)/g,
    replacement: '<span$1>$2</span>'
  },
  {
    pattern: /<section([^></section>]*)>([^<]*?)(?![^<]*<\/section>)/g,
    replacement: '<section$1>$2</section>'
  },
  {
    pattern: /<Helmet([^></Helmet>]*)>([^<]*?)(?![^<]*<\/Helmet>)/g,
    replacement: '<Helmet$1>$2</Helmet>'
  },
  // Fix malformed JSX expressions
  {
    pattern: /return \(<\/[^>]+>/g,
    replacement: 'return ('
  },
  // Fix JSX fragments
  {
    pattern: /<>{}([^<]*?)(?![^<]*<\/>)/g,
    replacement: '<>{$1}'
  },
  // Fix common syntax errors
  {
    pattern: /(\w+)\s*>\s*const/g,
    replacement: '$1>\nconst'
  },
  {
    pattern: /(\w+)\s*>\s*function/g,
    replacement: '$1>\nfunction'
  },
  {
    pattern: /(\w+)\s*>\s*export/g,
    replacement: '$1>\nexport'
  },
  // Fix numeric literals in JSX
  {
    pattern: /(\d+)([a-zA-Z_])/g,
    replacement: '$1 $2'
  },
  // Fix malformed closing tags
  {
    pattern: /<\/\s*>/g,
    replacement: ''
  }
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
    // Fix unclosed JSX elements that span multiple lines
    content = content.replace(/<(\w+)([^>]*)>([^<]*?)(?![^<]*<\/\1>)(?=\s*$)/gm, '<$1$2>$3</$1>');
    
    // Fix malformed return statements
    content = content.replace(/return\s*\(\s*<\/[^>]+>\s*([^)]+)\s*\)/g, 'return ($1)');
    
    // Fix JSX expressions that should be wrapped
    content = content.replace(/(\w+)\s*>\s*(\w+)/g, (match, tag, content) => {
      if (content.match(/^[a-zA-Z_$][a-zA-Z0-9 _$]*$/)) {
        return `${tag}>${content}</${tag}>`;
      }
      return match;
    });
    
    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
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

// Main function
async function main() {
  // Find all TypeScript/JavaScript files
  const files = await glob('**/*.{ts,tsx,js,jsx}', {
    ignore: ['node_modules/**', 'dist/**', '.next/**', 'out/**']
  });

  console.log(`Found ${files.length} files to check...`);

  let fixedCount = 0;
  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);