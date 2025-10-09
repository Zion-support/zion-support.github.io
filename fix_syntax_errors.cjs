const fs = require('fs');
const path = require('path');

// Get all files with errors
const { execSync } = require('child_process');

try {
  const lintOutput = execSync('cd /workspace && pnpm run lint 2>&1', { encoding: 'utf8' });
  const lines = lintOutput.split('\n');
  
  const problematicFiles = new Set();
  
  lines.forEach(line => {
    if (line.includes('.tsx:') || line.includes('.ts:')) {
      const match = line.match(/^\/workspace\/(.+?):/);
      if (match) {
        problematicFiles.add(match[1]);
      }
    }
  });
  
  console.log(`Found ${problematicFiles.size} problematic files:`);
  problematicFiles.forEach(file => console.log(`- ${file}`));
  
  // Fix common patterns
  problematicFiles.forEach(filePath => {
    const fullPath = path.join('/workspace', filePath);
    
    try {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      
      // Fix common syntax errors
      const fixes = [
        // Fix malformed object literals
        {
          pattern: /{\s*\/\/ TODO: Add content\s*}\s*([^,}])/g,
          replacement: '{\n      $1'
        },
        // Fix missing commas in arrays
        {
          pattern: /}\s*([^,}\s])/g,
          replacement: '},\n    $1'
        },
        // Fix malformed function parameters
        {
          pattern: /\(\s*\/\/ TODO: Add parameters,\s*\)/g,
          replacement: '()'
        },
        // Fix malformed JSX
        {
          pattern: /\/\/ TODO: Add parameters,\s*\)/g,
          replacement: ')'
        },
        // Fix malformed return statements
        {
          pattern: /return\s*\(\s*\/\/ TODO: Add parameters,\s*\)/g,
          replacement: 'return ('
        },
        // Fix malformed JSX attributes
        {
          pattern: /\/\/ TODO: Add content\s*}/g,
          replacement: ''
        },
        // Fix malformed array items
        {
          pattern: /\/\/ TODO: Add items,\s*]/g,
          replacement: ']'
        },
        // Fix malformed object properties
        {
          pattern: /\/\/ TODO: Add content\s*}\s*([^,}])/g,
          replacement: '},\n    $1'
        }
      ];
      
      fixes.forEach(fix => {
        if (fix.pattern.test(content)) {
          content = content.replace(fix.pattern, fix.replacement);
          modified = true;
        }
      });
      
      if (modified) {
        fs.writeFileSync(fullPath, content);
        console.log(`Fixed: ${filePath}`);
      }
      
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  });
  
} catch (error) {
  console.error('Error running lint command:', error.message);
}