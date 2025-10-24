const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix merge conflict markers
  fixed = fixed.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  
  // Fix JSX closing tag issues - remove extra closing tags
  fixed = fixed.replace(/<\/[^>]+><\/[^>]+>/g, (match) => {
    const tags = match.match(/<\/[^>]+>/g);
    return tags[tags.length - 1]; // Keep only the last closing tag
  });
  
  // Fix JSX self-closing tags that are incorrectly closed
  fixed = fixed.replace(/<([A-Z][a-zA-Z0-9]*)\s+[^>]*><\/\1>/g, (match, tagName) => {
    return match.replace(`></${tagName}>`, ' />');
  });
  
  // Fix missing closing tags for common elements
  fixed = fixed.replace(/<div([^>]*)>\s*$/gm, '<div$1></div>');
  fixed = fixed.replace(/<span([^>]*)>\s*$/gm, '<span$1></span>');
  fixed = fixed.replace(/<p([^>]*)>\s*$/gm, '<p$1></p>');
  
  // Fix JSX expressions that need parent elements
  fixed = fixed.replace(/(<[^>]+>)\s*(<[^>]+>)\s*(<[^>]+>)/g, (match, p1, p2, p3) => {
    if (p1.includes('return') && p2.includes('<') && p3.includes('<')) {
      return `${p1}\n        <>\n          ${p2}\n          ${p3}\n        </>`;
    }
    return match;
  });
  
  // Fix missing semicolons in TypeScript
  fixed = fixed.replace(/([^;}])\s*$/gm, (match, content) => {
    if (content.trim() && !content.includes('{') && !content.includes('}') && !content.includes(';')) {
      return content + ';';
    }
    return match;
  });
  
  // Fix broken JSX attributes
  fixed = fixed.replace(/className="([^"]*),\s*([^"]*)"/g, 'className="$1 $2"');
  
  // Fix missing closing braces in JSX
  fixed = fixed.replace(/(\{[^}]*)\s*$/gm, (match) => {
    if (match.includes('{') && !match.includes('}')) {
      return match + '}';
    }
    return match;
  });
  
  return fixed;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          fixedCount += processDirectory(fullPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
        if (processFile(fullPath)) {
          fixedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting comprehensive syntax error fix...');
const fixedCount = processDirectory('./app');
console.log(`Fixed ${fixedCount} files`);