const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all files that might have unused variables
const files = glob.sync('app/**/*.tsx', { cwd: '/workspace' });

let fixedCount = 0;

files.forEach(file => {
  const filePath = path.join('/workspace', file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Common unused variable patterns
  const patterns = [
    // Remove unused function declarations
    {
      regex: /^function\s+Home\(\)\s*\{[\s\S]*?\n\}$/gm,
      replacement: ''
    },
    {
      regex: /^function\s+PagePage\(\)\s*\{[\s\S]*?\n\}$/gm,
      replacement: ''
    },
    {
      regex: /^function\s+Page\(\)\s*\{[\s\S]*?\n\}$/gm,
      replacement: ''
    },
    {
      regex: /^function\s+AboutLayout\(\)\s*\{[\s\S]*?\n\}$/gm,
      replacement: ''
    },
    {
      regex: /^function\s+FiveGMobileApplications\(\)\s*\{[\s\S]*?\n\}$/gm,
      replacement: ''
    },
    // Remove unused imports
    {
      regex: /^import\s+\{[^}]*Home[^}]*\}\s+from\s+['"][^'"]*['"];?\s*$/gm,
      replacement: ''
    },
    {
      regex: /^import\s+\{[^}]*PagePage[^}]*\}\s+from\s+['"][^'"]*['"];?\s*$/gm,
      replacement: ''
    },
    {
      regex: /^import\s+\{[^}]*Page[^}]*\}\s+from\s+['"][^'"]*['"];?\s*$/gm,
      replacement: ''
    },
    {
      regex: /^import\s+\{[^}]*AboutLayout[^}]*\}\s+from\s+['"][^'"]*['"];?\s*$/gm,
      replacement: ''
    },
    {
      regex: /^import\s+\{[^}]*FiveGMobileApplications[^}]*\}\s+from\s+['"][^'"]*['"];?\s*$/gm,
      replacement: ''
    },
    // Remove unused ErrorBoundary imports
    {
      regex: /^import\s+ErrorBoundary\s+from\s+['"][^'"]*['"];?\s*$/gm,
      replacement: ''
    }
  ];

  patterns.forEach(pattern => {
    if (pattern.regex.test(content)) {
      content = content.replace(pattern.regex, pattern.replacement);
      modified = true;
    }
  });

  // Clean up multiple empty lines
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

  if (modified) {
    fs.writeFileSync(filePath, content);
    fixedCount++;
    console.log(`Fixed: ${file}`);
  }
});

console.log(`\nFixed ${fixedCount} files with unused variable issues.`);