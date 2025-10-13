const fs = require('fs');
const path = require('path');

function fixHtmlEntities(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common HTML entities
    const replacements = [
      { from: /&apos;/g, to: "'" },
      { from: /&quot;/g, to: '"' },
      { from: /&lt;/g, to: '<' },
      { from: /&gt;/g, to: '>' },
      { from: /&amp;/g, to: '&' },
      { from: /&nbsp;/g, to: ' ' },
      { from: /&rbrace;/g, to: '}' },
      { from: /&lbrace;/g, to: '{' },
      { from: /&rpar;/g, to: ')' },
      { from: /&lpar;/g, to: '(' },
      { from: /&rsqb;/g, to: ']' },
      { from: /&lsqb;/g, to: '[' },
      { from: /&comma;/g, to: ',' },
      { from: /&semi;/g, to: ';' },
      { from: /&colon;/g, to: ':' },
      { from: /&period;/g, to: '.' },
      { from: /&excl;/g, to: '!' },
      { from: /&quest;/g, to: '?' },
      { from: /&plus;/g, to: '+' },
      { from: /&minus;/g, to: '-' },
      { from: /&times;/g, to: '*' },
      { from: /&divide;/g, to: '/' },
      { from: /&equals;/g, to: '=' },
      { from: /&hash;/g, to: '#' },
      { from: /&dollar;/g, to: '$' },
      { from: /&percent;/g, to: '%' },
      { from: /&at;/g, to: '@' },
      { from: /&caret;/g, to: '^' },
      { from: /&tilde;/g, to: '~' },
      { from: /&grave;/g, to: '`' },
      { from: /&bar;/g, to: '|' },
      { from: /&bsol;/g, to: '\\' },
      { from: /&sol;/g, to: '/' },
      { from: /&lowbar;/g, to: '_' },
    ];

    replacements.forEach(({ from, to }) => {
      if (from.test(content)) {
        content = content.replace(from, to);
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed HTML entities in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next', 'coverage'].includes(item)) {
          fixedCount += processDirectory(fullPath);
        }
      } else if (stat.isFile() && /\.(tsx?|jsx?|ts|js)$/.test(item)) {
        if (fixHtmlEntities(fullPath)) {
          fixedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error.message);
  }
  
  return fixedCount;
}

console.log('Starting HTML entity fix...');
const totalFixed = processDirectory('./app');
console.log(`Fixed HTML entities in ${totalFixed} files.`);
