#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common JSX structural issues
    const fixes = [
      // Fix unclosed divs before closing tags
      {
        pattern: /<div([^>]*)><\/div>\s*<\/div>/g,
        replacement: '<div$1></div></div>'
      },
      // Fix unclosed sections before closing tags
      {
        pattern: /<section([^>]*)><\/section>\s*<\/section>/g,
        replacement: '<section$1></section></section>'
      },
      // Fix malformed closing tags
      {
        pattern: /<\/div><\/div><\/div>/g,
        replacement: '</div></div></div>'
      },
      // Fix unclosed divs in the middle of JSX
      {
        pattern: /<div([^>]*)><\/div>\s*<([^>]+)>/g,
        replacement: '<div$1><$2>'
      },
      // Fix unclosed sections in the middle of JSX
      {
        pattern: /<section([^>]*)><\/section>\s*<([^>]+)>/g,
        replacement: '<section$1><$2>'
      },
      // Fix unclosed main before closing tags
      {
        pattern: /<main([^>]*)><\/main>\s*<\/main>/g,
        replacement: '<main$1></main></main>'
      },
      // Fix unclosed article before closing tags
      {
        pattern: /<article([^>]*)><\/article>\s*<\/article>/g,
        replacement: '<article$1></article></article>'
      },
      // Fix unclosed header before closing tags
      {
        pattern: /<header([^>]*)><\/header>\s*<\/header>/g,
        replacement: '<header$1></header></header>'
      },
      // Fix unclosed footer before closing tags
      {
        pattern: /<footer([^>]*)><\/footer>\s*<\/footer>/g,
        replacement: '<footer$1></footer></footer>'
      },
      // Fix specific patterns for container divs
      {
        pattern: /<div className="container[^"]*"><\/div>\s*<div/g,
        replacement: '<div className="container[^"]*"><div'
      },
      // Fix specific patterns for max-w divs
      {
        pattern: /<div className="max-w-[^"]*"><\/div>\s*<div/g,
        replacement: '<div className="max-w-[^"]*"><div'
      },
      // Fix specific patterns for relative divs
      {
        pattern: /<div className="relative[^"]*"><\/div>\s*<div/g,
        replacement: '<div className="relative[^"]*"><div'
      },
      // Fix specific patterns for text-center divs
      {
        pattern: /<div className="text-center[^"]*"><\/div>\s*<h/g,
        replacement: '<div className="text-center[^"]*"><h'
      },
      // Fix specific patterns for grid divs
      {
        pattern: /<div className="grid[^"]*"><\/div>\s*{/g,
        replacement: '<div className="grid[^"]*">{'
      },
      // Fix specific patterns for space-y divs
      {
        pattern: /<div className="space-y-[^"]*"><\/div>\s*{/g,
        replacement: '<div className="space-y-[^"]*">{'
      },
      // Fix specific patterns for flex divs
      {
        pattern: /<div className="flex[^"]*"><\/div>\s*<button/g,
        replacement: '<div className="flex[^"]*"><button'
      },
      // Fix specific patterns for absolute divs
      {
        pattern: /<div className="absolute[^"]*"><\/div>\s*<div/g,
        replacement: '<div className="absolute[^"]*"><div'
      },
      // Fix specific patterns for bg-white divs
      {
        pattern: /<div className="bg-white[^"]*"><\/div>\s*<h/g,
        replacement: '<div className="bg-white[^"]*"><h'
      },
      // Fix specific patterns for backdrop-blur divs
      {
        pattern: /<div className="bg-white\/5 backdrop-blur[^"]*"><\/div>\s*<div/g,
        replacement: '<div className="bg-white/5 backdrop-blur[^"]*"><div'
      },
      // Fix specific patterns for gradient divs
      {
        pattern: /<div className="bg-gradient[^"]*"><\/div>\s*<h/g,
        replacement: '<div className="bg-gradient[^"]*"><h'
      },
      // Fix specific patterns for rounded divs
      {
        pattern: /<div className="rounded[^"]*"><\/div>\s*<h/g,
        replacement: '<div className="rounded[^"]*"><h'
      },
      // Fix specific patterns for shadow divs
      {
        pattern: /<div className="shadow[^"]*"><\/div>\s*<h/g,
        replacement: '<div className="shadow[^"]*"><h'
      },
      // Fix specific patterns for p-8 divs
      {
        pattern: /<div className="p-8[^"]*"><\/div>\s*<h/g,
        replacement: '<div className="p-8[^"]*"><h'
      },
      // Fix specific patterns for mb-16 divs
      {
        pattern: /<div className="mb-16[^"]*"><\/div>\s*<h/g,
        replacement: '<div className="mb-16[^"]*"><h'
      },
      // Fix specific patterns for mx-auto divs
      {
        pattern: /<div className="mx-auto[^"]*"><\/div>\s*<h/g,
        replacement: '<div className="mx-auto[^"]*"><h'
      },
      // Fix specific patterns for text-center divs
      {
        pattern: /<div className="text-center[^"]*"><\/div>\s*<h/g,
        replacement: '<div className="text-center[^"]*"><h'
      },
      // Fix specific patterns for about page
      {
        pattern: /<div className="min-h-screen[^"]*"><\/div>\s*<Navigation/g,
        replacement: '<div className="min-h-screen[^"]*"><Navigation'
      },
      // Fix specific patterns for sections
      {
        pattern: /<section className="py-20[^"]*"><\/section>\s*<div/g,
        replacement: '<section className="py-20[^"]*"><div'
      },
      // Fix specific patterns for hero sections
      {
        pattern: /<section className="relative py-20[^"]*"><\/section>\s*<div/g,
        replacement: '<section className="relative py-20[^"]*"><div'
      },
      // Fix specific patterns for main sections
      {
        pattern: /<main([^>]*)><\/main>\s*<div/g,
        replacement: '<main$1><div'
      },
      // Fix specific patterns for article sections
      {
        pattern: /<article([^>]*)><\/article>\s*<div/g,
        replacement: '<article$1><div'
      },
      // Fix specific patterns for header sections
      {
        pattern: /<header([^>]*)><\/header>\s*<div/g,
        replacement: '<header$1><div'
      },
      // Fix specific patterns for footer sections
      {
        pattern: /<footer([^>]*)><\/footer>\s*<div/g,
        replacement: '<footer$1><div'
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
    
    // Additional specific fixes for common patterns
    const additionalFixes = [
      // Fix unclosed divs before other elements
      /<div([^>]*)><\/div>\s*<([^>]+)>/g,
      '<div$1><$2>',
      
      // Fix unclosed sections before other elements
      /<section([^>]*)><\/section>\s*<([^>]+)>/g,
      '<section$1><$2>',
      
      // Fix unclosed main before other elements
      /<main([^>]*)><\/main>\s*<([^>]+)>/g,
      '<main$1><$2>',
      
      // Fix unclosed article before other elements
      /<article([^>]*)><\/article>\s*<([^>]+)>/g,
      '<article$1><$2>',
      
      // Fix unclosed header before other elements
      /<header([^>]*)><\/header>\s*<([^>]+)>/g,
      '<header$1><$2>',
      
      // Fix unclosed footer before other elements
      /<footer([^>]*)><\/footer>\s*<([^>]+)>/g,
      '<footer$1><$2>'
    ];
    
    for (let i = 0; i < additionalFixes.length; i += 2) {
      const newContent = content.replace(additionalFixes[i], additionalFixes[i + 1]);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
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

// Main function
async function main() {
  // Find all TSX files in the app directory
  const files = await glob('app/**/*.tsx');

  console.log(`Found ${files.length} TSX files to check...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);