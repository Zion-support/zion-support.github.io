const fs = require('fs');
const path = require('path');

// Function to fix common syntax issues
function fixSyntaxIssues(content) {
  // Fix unterminated string literals by adding quotes
  content = content.replace(/([^"'])\s*$/gm, '$1"');
  
  // Fix missing semicolons after import statements
  content = content.replace(/import\s+.*from\s+['"][^'"]*['"]\s*$/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix JSX closing tags
  content = content.replace(/<(\w+)([^>]*?)(?<!\/)>/g, (match, tagName, attributes) => {
    if (attributes.includes('=') && !match.endsWith('/>')) {
      return match.replace(/>$/, ' />');
    }
    return match;
  });
  
  // Fix unterminated JSX elements
  content = content.replace(/<(\w+)([^>]*?)>\s*$/gm, '<$1$2></$1>');
  
  // Fix numeric literal issues
  content = content.replace(/(\d+)([a-zA-Z_])/g, '$1 $2');
  
  // Fix missing colons in object properties
  content = content.replace(/(\w+)\s+(\w+)/g, (match, p1, p2) => {
    if (p1 === 'title' || p1 === 'description' || p1 === 'keywords') {
      return `${p1}: "${p2}"`;
    }
    return match;
  });
  
  return content;
}

// Function to check if a file has syntax issues
function hasSyntaxIssues(content) {
  return content.includes('Unterminated string literal') ||
         content.includes('JSX element') ||
         content.includes('Identifier expected') ||
         content.includes('Declaration or statement expected') ||
         content.includes('Expression expected') ||
         content.includes('An identifier or keyword cannot immediately follow a numeric literal');
}

// Function to recursively process files
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip certain directories
      if (['node_modules', '.git', 'dist', '.next', 'backup', 'backup-problematic', 'corrupted-src-backup'].includes(item)) {
        continue;
      }
      processDirectory(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        
        // Check if file has issues and fix them
        if (content.includes('Unterminated string literal') || 
            content.includes('JSX element') ||
            content.includes('Identifier expected') ||
            content.includes('Declaration or statement expected') ||
            content.includes('Expression expected') ||
            content.includes('An identifier or keyword cannot immediately follow a numeric literal')) {
          
          console.log(`Fixing syntax issues in: ${fullPath}`);
          const fixedContent = fixSyntaxIssues(content);
          fs.writeFileSync(fullPath, fixedContent, 'utf8');
        }
      } catch (error) {
        console.log(`Error processing ${fullPath}: ${error.message}`);
      }
    }
  }
}

// Start processing from the workspace root
console.log('Starting comprehensive cleanup of syntax issues...');
processDirectory('/workspace');
console.log('Comprehensive cleanup completed!');
