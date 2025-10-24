
<<<<<<< HEAD
const fs = require('fs')
const path = require('path')
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    let modified = false
    // Fix malformed JSX closing tags
    const fixes = [
      // Fix incomplete closing tags
      { pattern: /  <\/\s*$/gm, replacement: '  </' }
      { pattern: /  <\/\s*\n/gm, replacement: '  </\n' }
      { pattern: /  <\/\s*$/gm, replacement: '  </' }
      // Fix specific malformed patterns
      { pattern: /  <\/\s*$/gm, replacement: '  </' }
      { pattern: /  <\/\s*\n/gm, replacement: '  </\n' }
      // Fix incomplete h1, h2, p, button tags
      { pattern: /  <\/h1>\s*$/gm, replacement: '  </h1>' }
      { pattern: /  <\/h2>\s*$/gm, replacement: '  </h2>' }
      { pattern: /  <\/p>\s*$/gm, replacement: '  </p>' }
      { pattern: /  <\/button>\s*$/gm, replacement: '  </button>' }
      { pattern: /  <\/div>\s*$/gm, replacement: '  </div>' }
      // Fix incomplete closing tags with specific patterns
      { pattern: /  <\/\s*$/gm, replacement: '  </' }
      { pattern: /  <\/\s*\n/gm, replacement: '  </\n' }]
    for (const fix of fixes) {
  const newContent = content.replace(fix.pattern, fix.replacement)
      if (newContent !== content) {
        content = newContent
        modified = true
}
    }
    // Additional specific fixes
    content = content.replace(/  <\/\s*$/gm, '  </')
    content = content.replace(/  <\/\s*\n/gm, '  </\n')
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8')
      // eslint-disable-next-line no-console
    console.log(`Fixed: ${filePath}`)
      return true
    }
    return false
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error fixing ${filePath}:`, error.message)
    return false
  }
}
function walkDir(dir) {
  const files = fs.readdirSync(dir)
  let fixedCount = 0
  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      fixedCount += walkDir(filePath)
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
  if (fixFile(filePath)) {
        fixedCount++
}
    }
  }
  return fixedCount
}
// Start fixing
// eslint-disable-next-line no-console
    console.log('Starting comprehensive JSX fixes...')
const fixedCount = walkDir('./app')
// eslint-disable-next-line no-console
    console.log(`Fixed ${fixedCount} files`)
=======
function fixJSXComprehensive(content) {
  // Fix self-closing divs that should be opening divs (with className)
  content = content.replace(/<div className="[^"]*"><\/div>\s*{/g, (match) => {
    const className = match.match(/className="([^"]*)"/)[1];
    return `<div className="${className}">\n            {`;
  });
  
  // Fix self-closing sections that should be opening sections
  content = content.replace(/<section className="[^"]*"><\/section>\s*{/g, (match) => {
    const className = match.match(/className="([^"]*)"/)[1];
    return `<section className="${className}">\n          {`;
  });
  
  // Fix self-closing divs that should be opening divs (without className)
  content = content.replace(/<div><\/div>\s*{/g, '<div>\n            {');
  
  // Fix self-closing divs that should be opening divs (with className, no braces after)
  content = content.replace(/<div className="[^"]*"><\/div>\s*<[^>]*>/g, (match) => {
    const className = match.match(/className="([^"]*)"/)[1];
    const rest = match.replace(/<div className="[^"]*"><\/div>\s*/, '');
    return `<div className="${className}">\n            ${rest}`;
  });
  
  // Fix self-closing sections that should be opening sections (with className, no braces after)
  content = content.replace(/<section className="[^"]*"><\/section>\s*<[^>]*>/g, (match) => {
    const className = match.match(/className="([^"]*)"/)[1];
    const rest = match.replace(/<section className="[^"]*"><\/section>\s*/, '');
    return `<section className="${className}">\n          ${rest}`;
  });
  
  return content;
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixJSXComprehensive(content);
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Process all TSX files in app/components
const componentsDir = path.join(__dirname, 'app', 'components');
const files = fs.readdirSync(componentsDir).filter(file => file.endsWith('.tsx'));

files.forEach(file => {
  processFile(path.join(componentsDir, file));
});

console.log('Comprehensive JSX fixes completed');
>>>>>>> cursor/fix-errors-and-merge-to-main-4eef
