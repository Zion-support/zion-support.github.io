const fs = require('fs');
const path = require('path');

function fixJSXFragments(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix JSX fragment closing tags
    // Look for patterns like <></> that are missing closing tags
    const fragmentPattern = /<>\s*([^<]*?)\s*$/gm;
    const matches = content.match(fragmentPattern);
    
    if (matches) {
      // Find the last opening fragment and ensure it has a closing tag
      const lines = content.split('\n');
      let inFragment = false;
      let fragmentStart = -1;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Check for opening fragment
        if (line.includes('<>') && !line.includes('</>')) {
          inFragment = true;
          fragmentStart = i;
        }
        
        // Check for closing fragment
        if (line.includes('</>')) {
          inFragment = false;
          fragmentStart = -1;
        }
        
        // If we're in a fragment and reach the end of the component, close it
        if (inFragment && (line.includes('export default') || line.includes('return null') || line.includes('};'))) {
          // Insert closing fragment before the export/default
          lines[i] = '  </>\n' + line;
          inFragment = false;
          modified = true;
        }
      }
      
      if (modified) {
        content = lines.join('\n');
      }
    }

    // Fix specific patterns that are common
    // Fix missing closing tags for common elements
    const commonFixes = [
      // Fix missing closing tags
      {
        pattern: /<(\w+)([^>]*)>\s*$/gm,
        replacement: '<$1$2></$1>'
      },
      // Fix JSX expressions that need parent elements
      {
        pattern: /return\s*\(\s*([^<]*?)\s*\)\s*;?\s*$/gm,
        replacement: 'return (\n    <>\n      $1\n    </>\n  );'
      },
      // Fix malformed JSX attributes
      {
        pattern: /(\w+)=\{([^}]+)\}/g,
        replacement: '$1={$2}'
      },
      // Fix missing semicolons
      {
        pattern: /(\w+)\s*\n\s*export/g,
        replacement: '$1;\n\nexport'
      }
    ];

    commonFixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed JSX fragments in: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
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
console.log(`Fixed JSX fragments in ${fixedCount} files`);