
<<<<<<< HEAD
// More targeted fixes for syntax errors
const fixes = [
  // Fix merge conflict markers
  {
    pattern: /<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g,
    replacement: '',
    description: 'Remove merge conflict markers'
  },
  // Fix common JSX syntax issues - only fix actual syntax problems
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
  // Fix common parsing errors - missing closing braces
  {
    pattern: /(\w+)\s*=\s*\(\s*\)\s*=>\s*{/g,
    replacement: '$1 = () => {',
    description: 'Fix arrow function syntax'
  },
  // Fix unescaped entities in JSX text content only
  {
    pattern: /(>[^<]*?)'([^<]*?<)/g,
    replacement: '$1&apos;$2',
    description: 'Fix unescaped apostrophes in JSX text content'
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
    // Fix missing closing braces
    const openBraces = (content.match(/{/g) || []).length;
    const closeBraces = (content.match(/}/g) || []).length;
    if (openBraces > closeBraces) {
      content += '}'.repeat(openBraces - closeBraces);
      modified = true;
    }
    
    // Fix missing closing parentheses
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    if (openParens > closeParens) {
      content += ')'.repeat(openParens - closeParens);
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

console.log('Starting targeted syntax error fixes...');
walkDirectory('./app');
walkDirectory('./src');
console.log('Targeted syntax error fixes completed!');
=======
const fs = require('fs''
const path = require('path''
  'app/ai-data-analytics/page.tsx''
  'app/ai-healthcare/page.tsx''
  'app/ai-marketing/page.tsx''
  'app/ai-sales-automation/page.tsx''
    'app/ai-workflow-automation/page.tsx''
    let content = fs.readFileSync(fullPath, 'utf8''
    content = content.replace(/<\/div>\s*\)\s*\)/g, '\n    </div>\n  )\n}''
    if (content.includes('))''
    content = content.replace(/<\/div>\s*\)\s*}/g, '\n    </div>\n  )\n}''
  content = content.replace(extraDivPattern, '\n    </div>\n  )''
    content = content.replace(/<\s*\/\s*>/g, '</div>''
    if (content.includes('</>''
    if (!content.includes('    </div>\n  )\n}''
      const lastDivIndex = content.lastIndexOf('</div>''
        const cleanedAfter = afterLastDiv.replace(/^\s*\)\s*\)\s*}/, '\n  )\n}''
        content = beforeLastDiv + '</div>''
    console.log('Starting syntax error fixes v2...''
    console.log('Syntax error fixes v2 completed!''
>>>>>>> origin/main
