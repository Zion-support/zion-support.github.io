const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix the specific issue: &apos; in object property values should be regular apostrophes
    const apostropheFix = content.replace(/title:\s*&apos;([^']+)'/g, "title: '$1'");
    if (apostropheFix !== content) {
      content = apostropheFix;
      modified = true;
    }
    
    // Fix other similar patterns
    const otherApostropheFixes = [
      /description:\s*&apos;([^']+)'/g,
      /name:\s*&apos;([^']+)'/g,
      /label:\s*&apos;([^']+)'/g,
      /text:\s*&apos;([^']+)'/g,
      /content:\s*&apos;([^']+)'/g
    ];
    
    otherApostropheFixes.forEach(pattern => {
      const newContent = content.replace(pattern, (match, text) => {
        return match.replace('&apos;', "'");
      });
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed apostrophes in: ${filePath}`);
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

console.log('Fixing apostrophe issues...');
walkDirectory('./app');
walkDirectory('./src');
console.log('Apostrophe fixes completed!');