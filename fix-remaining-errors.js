const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix JSX expressions must have one parent element
    if (content.includes('JSX expressions must have one parent element')) {
      // Wrap multiple JSX elements in a fragment or div
      const lines = content.split('\n');
      let inJSX = false;
      let jsxStart = -1;
      let jsxCount = 0;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('return (') && !inJSX) {
          inJSX = true;
          jsxStart = i;
          jsxCount = 0;
        } else if (inJSX && line.includes(');')) {
          inJSX = false;
          if (jsxCount > 1) {
            // Wrap multiple JSX elements in a fragment
            lines[jsxStart] = lines[jsxStart].replace('return (', 'return (\n    <>');
            lines[i] = '    </>\n  );';
            modified = true;
          }
        } else if (inJSX && line.trim().startsWith('<') && !line.trim().startsWith('</')) {
          jsxCount++;
        }
      }
      
      if (modified) {
        content = lines.join('\n');
      }
    }
    
    // Fix missing commas in object literals
    content = content.replace(/(\w+):\s*(\w+)\s*\n(\s*)(\w+):/g, '$1: $2,\n$3$4:');
    content = content.replace(/(\w+):\s*(\w+)\s*\n(\s*)(\w+)\s*=/g, '$1: $2,\n$3$4 =');
    
    // Fix missing semicolons
    content = content.replace(/(\w+):\s*(\w+)\s*$/gm, '$1: $2;');
    
    // Fix malformed function declarations
    content = content.replace(/function\s+(\w+)\s*\(\s*\)\s*\{/g, 'function $1() {');
    
    // Fix missing return statements in arrow functions
    content = content.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*\{/g, 'const $1 = () => {');
    
    // Fix JSX fragments that are not properly closed
    if (content.includes('<>') && !content.includes('</>')) {
      content = content.replace(/<>/g, '<div>').replace(/<\/>/g, '</div>');
      modified = true;
    }
    
    // Fix missing closing tags for common elements
    const openTags = content.match(/<(div|span|section|article|header|footer|main|aside|nav)([^>]*)>/g);
    if (openTags) {
      openTags.forEach(tag => {
        const tagName = tag.match(/<(\w+)/)[1];
        const closingTag = `</${tagName}>`;
        if (!content.includes(closingTag)) {
          content += `\n${closingTag}`;
          modified = true;
        }
      });
    }
    
    // Fix specific patterns for common errors
    content = content.replace(/className=\{([^}]*)\}/g, 'className={$1}');
    content = content.replace(/href=\{([^}]*)\}/g, 'href={$1}');
    content = content.replace(/src=\{([^}]*)\}/g, 'src={$1}');
    
    // Fix missing commas in arrays
    content = content.replace(/(\w+)\s*\n(\s*)(\w+)\s*\]/g, '$1,\n$2$3]');
    
    // Fix missing commas in function parameters
    content = content.replace(/(\w+):\s*(\w+)\s*\n(\s*)(\w+):/g, '$1: $2,\n$3$4:');
    
    if (modified) {
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

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting remaining error fixes...');
const fixedCount = walkDirectory('./app');
console.log(`Fixed ${fixedCount} files`);