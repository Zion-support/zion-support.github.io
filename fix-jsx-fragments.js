const fs = require('fs');
const path = require('path');

function fixJSXFragments(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix JSX fragments that are missing closing tags
    const fragmentPattern = /<>\s*([\s\S]*?)\s*$/gm;
    const matches = content.match(fragmentPattern);
    
    if (matches) {
      // Find the last opening fragment and add closing tag
      const lastFragmentIndex = content.lastIndexOf('<>');
      if (lastFragmentIndex !== -1) {
        const beforeFragment = content.substring(0, lastFragmentIndex);
        const afterFragment = content.substring(lastFragmentIndex);
        
        // Count opening and closing tags to determine if we need to close
        const openTags = (afterFragment.match(/<[^\/][^>]*>/g) || []).length;
        const closeTags = (afterFragment.match(/<\/[^>]*>/g) || []).length;
        
        if (openTags > closeTags) {
          // Add missing closing fragment tag
          content = content + '\n    </>\n  );\n};\n\nexport default';
          modified = true;
        }
      }
    }
    
    // Fix specific patterns
    const patterns = [
      // Fix JSX expressions with one parent element
      { pattern: /return\s*\(\s*<>\s*<([^>]+)>\s*([\s\S]*?)\s*<\/\1>\s*$/gm, replacement: 'return (\n    <$1>\n      $2\n    </$1>\n  );' },
      
      // Fix missing closing fragments
      { pattern: /<>\s*([\s\S]*?)\s*export default/gm, replacement: '<>\n    $1\n  </>\n);\n};\n\nexport default' },
      
      // Fix malformed JSX
      { pattern: /<>\s*([\s\S]*?)\s*\);\s*};/gm, replacement: '<>\n    $1\n  </>\n);' },
      
      // Fix incomplete JSX fragments
      { pattern: /<>\s*([\s\S]*?)\s*$/gm, replacement: '<>\n    $1\n  </>\n);' },
    ];
    
    patterns.forEach(pattern => {
      const newContent = content.replace(pattern.pattern, pattern.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX fragments in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixJSXFragments(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

console.log('Starting JSX fragment fixes...');
const fixedCount = walkDirectory('./app');
console.log(`Fixed JSX fragments in ${fixedCount} files.`);