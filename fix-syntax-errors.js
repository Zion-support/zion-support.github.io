const fs = require('fs');
const path = require('path');

// Common fixes for syntax errors
const fixes = [
  // Fix unescaped entities
  {
    pattern: /'/g,
    replacement: '&apos;',
    description: 'Fix unescaped apostrophes'
  },
  // Fix merge conflict markers
  {
    pattern: /<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g,
    replacement: '',
    description: 'Remove merge conflict markers'
  },
  // Fix common JSX syntax issues
  {
    pattern: /(\w+)\s*=\s*{([^}]*?)}\s*>/g,
    replacement: '$1={$2}>',
    description: 'Fix JSX attribute spacing'
  },
  // Fix missing semicolons in imports
  {
    pattern: /import\s+([^;]+)\s+from\s+['"]([^'"]+)['"]\s*(?!;)/g,
    replacement: 'import $1 from \'$2\';',
    description: 'Add missing semicolons to imports'
  },
  // Fix common parsing errors
  {
    pattern: /(\w+)\s*=\s*\(\s*\)\s*=>\s*{/g,
    replacement: '$1 = () => {',
    description: 'Fix arrow function syntax'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Apply fixes
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
        console.log(`Applied fix: ${fix.description} to ${filePath}`);
      }
    });
    
    // Additional specific fixes
    // Fix common JSX closing tag issues
    if (content.includes('</div>') && !content.includes('<div')) {
      content = content.replace(/<\/div>/g, '');
    }
    
    // Fix missing closing braces
    const openBraces = (content.match(/{/g) || []).length;
    const closeBraces = (content.match(/}/g) || []).length;
    if (openBraces > closeBraces) {
      content += '}'.repeat(openBraces - closeBraces);
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      fixFile(filePath);
    }
  });
}

console.log('Starting syntax error fixes...');
walkDirectory('./app');
walkDirectory('./src');
console.log('Syntax error fixes completed!');