#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix missing closing main tags
    if (content.includes('<main') && !content.includes('</main>')) {
      content = content.replace(/(\s+)<\/div>\s*<\/>\s*$/m, '$1</main>\n    </>\n  );');
    }
    
    // Fix missing closing section tags
    content = content.replace(/<section([^>]*)>([\s\S]*?)<\/div>\s*$/gm, '<section$1>$2</section>');
    
    // Fix missing closing div tags
    content = content.replace(/<div([^>]*)>([\s\S]*?)<\/section>\s*$/gm, '<div$1>$2</div>\n      </section>');
    
    // Fix malformed object properties (remove extra commas)
    content = content.replace(/(\s+)([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:\s*([^,}]+),\s*$/gm, '$1$2: $3');
    
    // Fix missing semicolons in function declarations
    content = content.replace(/const\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*\([^)]*\)\s*=>\s*([^,{])/g, 'const $1 = ($2) => {');
    
    // Fix malformed JSX expressions
    content = content.replace(/(\s+)<([^>]+)>\s*([^<]+)\s*<\/\2>\s*([^<]+)/g, '$1<$2>$3</$2>$4');
    
    // Fix missing closing tags in JSX
    content = content.replace(/<([a-zA-Z][a-zA-Z0-9]*)[^>]*>([^<]*)<div/g, '<$1>$2</$1>\n<div');
    
    // Fix missing closing tags for main elements
    content = content.replace(/<main([^>]*)>([\s\S]*?)<\/div>\s*<\/>\s*$/m, '<main$1>$2</main>\n    </>\n  );');
    
    // Fix missing closing tags for section elements
    content = content.replace(/<section([^>]*)>([\s\S]*?)<\/div>\s*$/m, '<section$1>$2</section>');
    
    // Fix missing closing tags for div elements
    content = content.replace(/<div([^>]*)>([\s\S]*?)<\/section>\s*$/m, '<div$1>$2</div>\n      </section>');
    
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
  const appDir = path.join(__dirname, 'app');
  const pattern = path.join(appDir, '**/*.tsx');
  
  console.log('Scanning for TypeScript/JSX files...');
  const files = glob.sync(pattern);
  
  console.log(`Found ${files.length} files to check`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  files.forEach(file => {
    try {
      if (fixFile(file)) {
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
      errorCount++;
    }
  });
  
  console.log(`\nFixed ${fixedCount} files`);
  console.log(`Errors: ${errorCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixFile };