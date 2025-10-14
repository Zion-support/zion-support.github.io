import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common JSX syntax errors
function fixJSXErrors(content) {
  // Fix malformed JSX elements with missing spaces
  content = content.replace(/(\w+)(\d+)(\w+)/g, '$1 $2 $3'); // Add spaces between words and numbers
  
  // Fix malformed className attributes
  content = content.replace(/className="([^"]*?)(\w+)(\d+)(\w+)([^"]*?)"/g, (match, before, word1, num, word2, after) => {
    return `className="${before}${word1} ${num} ${word2}${after}"`;
  });
  
  // Fix malformed JSX elements like <p className="...">$2</p>
  content = content.replace(/<p[^>]*>\$(\d+)<\/p>/g, '');
  
  // Fix malformed text content with extra spaces and quotes
  content = content.replace(/>\s*"([^"]*?)\s*"\s*</g, '>$1<');
  
  // Fix malformed closing tags
  content = content.replace(/<\/\s*>/g, '');
  
  // Fix malformed JSX fragments - ensure proper opening and closing
  const fragmentRegex = /<>\s*([\s\S]*?)\s*<\/>/g;
  content = content.replace(fragmentRegex, (match, innerContent) => {
    // Clean up the inner content
    innerContent = innerContent.trim();
    return `<>${innerContent}</>`;
  });
  
  // Fix malformed div structures
  content = content.replace(/<div[^>]*>\s*<\/div>\s*<\/div>/g, '</div>');
  
  // Fix malformed className attributes with missing spaces
  content = content.replace(/className="([^"]*?)(\w+)(\d+)(\w+)([^"]*?)"/g, (match, before, word1, num, word2, after) => {
    return `className="${before}${word1} ${num} ${word2}${after}"`;
  });
  
  // Fix malformed text content
  content = content.replace(/>\s*"([^"]*?)\s*"\s*</g, '>$1<');
  
  // Fix malformed closing tags
  content = content.replace(/<\/\s*>/g, '');
  
  return content;
}

// Function to fix specific file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixJSXErrors(content);
    
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

// Main function
async function main() {
  // Find all page.tsx files
  const pageFiles = await glob('app/**/page.tsx', { cwd: process.cwd() });

  console.log(`Found ${pageFiles.length} page files to check...`);

  let fixedCount = 0;
  pageFiles.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);