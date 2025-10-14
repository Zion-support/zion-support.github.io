import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix JSX fragment issues
function fixJSXFragment(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing closing tags for JSX fragments
    // Look for patterns like: <div>...</div> without proper closing
    const lines = content.split('\n');
    const fixedLines = [];
    let openTags = [];
    let inJSX = false;
    let braceCount = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();

      // Track JSX context
      if (trimmedLine.includes('return (') || trimmedLine.includes('return(')) {
        inJSX = true;
        braceCount = 0;
      }

      if (inJSX) {
        // Count braces to track JSX context
        braceCount += (line.match(/\{/g) || []).length;
        braceCount -= (line.match(/\}/g) || []).length;

        // Check for unclosed JSX fragments
        if (trimmedLine.includes('<>') && !trimmedLine.includes('</>')) {
          // Look ahead to see if there's a closing tag
          let foundClosing = false;
          for (let j = i + 1; j < lines.length; j++) {
            if (lines[j].trim().includes('</>')) {
              foundClosing = true;
              break;
            }
            if (lines[j].trim().includes('return') && !lines[j].trim().includes('return (')) {
              break;
            }
          }
          if (!foundClosing) {
            // Add closing tag at the end of the component
            for (let j = lines.length - 1; j > i; j--) {
              if (lines[j].trim().includes('}') && !lines[j].trim().includes('{')) {
                lines[j] = lines[j].replace('}', '  </>\n}');
                modified = true;
                break;
              }
            }
          }
        }
      }

      // Reset JSX context when we exit the return statement
      if (inJSX && braceCount <= 0 && trimmedLine.includes('}')) {
        inJSX = false;
      }

      fixedLines.push(line);
    }

    // Fix specific malformed JSX patterns
    let fixedContent = fixedLines.join('\n');

    // Fix malformed paragraph tags
    fixedContent = fixedContent.replace(/<p className="[^"]*">([^<]*)\n\s*">([^<]*)<\/p>/g, '<p className="$1">$2</p>');
    
    // Fix malformed content with stray characters
    fixedContent = fixedContent.replace(/<p className="[^"]*">([^<]*)\n\s*">\$/g, '<p className="$1">');
    
    // Fix unclosed tags
    fixedContent = fixedContent.replace(/<h3 className="[^"]*"[^>]*>\s*([^<]+)\s*$/gm, '<h3 className="$1">$1</h3>');
    
    // Fix malformed closing tags
    fixedContent = fixedContent.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g, '</div>');

    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed JSX errors in: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix unescaped entities
function fixUnescapedEntities(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix unescaped apostrophes
    content = content.replace(/'/g, '&apos;');
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed unescaped entities in: ${filePath}`);
      modified = true;
    }

    return modified;
  } catch (error) {
    console.error(`Error fixing entities in ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting JSX error fixes...');

// Get all page.tsx files
const pageFiles = await glob('app/**/page.tsx', { cwd: import.meta.url.replace('file://', '').replace('/fix-jsx-errors.js', '') });

let fixedCount = 0;
let entityFixedCount = 0;

pageFiles.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fixJSXFragment(fullPath)) {
    fixedCount++;
  }
  if (fixUnescapedEntities(fullPath)) {
    entityFixedCount++;
  }
});

console.log(`Fixed JSX fragments in ${fixedCount} files`);
console.log(`Fixed unescaped entities in ${entityFixedCount} files`);
console.log('JSX error fixes completed!');