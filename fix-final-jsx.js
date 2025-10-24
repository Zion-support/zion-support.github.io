const fs = require('fs');
const path = require('path');

// Function to fix malformed JSX patterns
function fixMalformedJSX(content) {
  let fixed = content;
  
  // Fix malformed closing tags like </div> and <Footer />
  fixed = fixed.replace(/<\/div>\s*<\/div>/g, '</div>');
  fixed = fixed.replace(/<(\w+) \/><\/\1>/g, '<$1 />');
  fixed = fixed.replace(/<(\w+)><\/\1>/g, '<$1 />');
  
  // Fix specific patterns
  fixed = fixed.replace(/<\/div>\s*<\/div>\s*<(\w+) \/><\/\1>/g, '</div>\n      <$1 />');
  fixed = fixed.replace(/<\/div>\s*<\/div>\s*<(\w+)><\/\1>/g, '</div>\n      <$1 />');
  
  // Fix extra closing divs
  fixed = fixed.replace(/<\/div>\s*<\/div>\s*<\/div>/g, '</div>\n      </div>');
  
  // Fix broken JSX elements
  fixed = fixed.replace(/<(\w+)\s*;\s*>/g, '<$1>');
  fixed = fixed.replace(/<\/\w+>\s*;\s*$/gm, '');
  
  // Ensure proper JSX structure
  // Remove any extra closing tags that don't have matching opening tags
  const lines = fixed.split('\n');
  let openTags = [];
  let fixedLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Count opening tags
    const openMatches = line.match(/<(\w+)(?:\s[^>]*)?>/g) || [];
    const closeMatches = line.match(/<\/(\w+)>/g) || [];
    
    for (const match of openMatches) {
      const tagName = match.match(/<(\w+)/)[1];
      if (tagName !== 'br' && tagName !== 'hr' && tagName !== 'img' && tagName !== 'input' && tagName !== 'meta' && tagName !== 'link') {
        openTags.push(tagName);
      }
    }
    
    for (const match of closeMatches) {
      const tagName = match.match(/<\/(\w+)>/)[1];
      if (openTags.length > 0 && openTags[openTags.length - 1] === tagName) {
        openTags.pop();
      }
    }
    
    fixedLines.push(line);
  }
  
  // If there are unclosed tags, add them
  while (openTags.length > 0) {
    const tag = openTags.pop();
    fixedLines.push(`      </${tag}>`);
  }
  
  return fixedLines.join('\n');
}

// Function to fix a specific file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixMalformedJSX(content);
    
    if (content !== originalContent) {
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

// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and other directories
      if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(file)) {
        fixedCount += fixFilesInDirectory(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
console.log('Starting final JSX fixes...');
const fixedCount = fixFilesInDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);
      </Footer>