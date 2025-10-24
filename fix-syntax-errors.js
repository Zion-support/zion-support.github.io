const fs = require('fs');
const glob = require('glob');

// Function to fix syntax errors
function fixSyntaxErrors(content) {
  // Remove semicolons after function declarations and JSX elements
  content = content.replace(/const\s+\w+\s*=\s*\(\)\s*=>\s*\{;\s*\n/g, 'const $1 = () => {\n');
  content = content.replace(/return\s*\(;\s*\n/g, 'return (\n');
  content = content.replace(/<>\s*;\s*\n/g, '<>\n');
  content = content.replace(/<\/>\s*;\s*\n/g, '</>\n');
  content = content.replace(/<Head>\s*;\s*\n/g, '<Head>\n');
  content = content.replace(/<\/Head>\s*;\s*\n/g, '</Head>\n');
  content = content.replace(/<div[^>]*>\s*;\s*\n/g, (match) => match.replace(';', ''));
  content = content.replace(/<[^>]*>\s*;\s*\n/g, (match) => match.replace(';', ''));
  
  // Fix property assignment errors
  content = content.replace(/property=\"og:\s*type\"/g, 'property="og:type"');
  content = content.replace(/content=\"website\";\s*;\/;>/g, 'content="website" />');
  
  // Remove extra semicolons at end of lines
  content = content.replace(/;\s*\n/g, '\n');
  
  // Fix missing closing braces
  const openBraces = (content.match(/\{/g) || []).length;
  const closeBraces = (content.match(/\}/g) || []).length;
  const missingBraces = openBraces - closeBraces;
  
  for (let i = 0; i < missingBraces; i++) {
    content += '\n}';
  }
  
  return content;
}

// Main function to process all files
function processFiles() {
  const files = glob.sync('app/**/*.tsx');
  let processedCount = 0;
  let errorCount = 0;
  
  files.forEach(file => {
    try {
      let content = fs.readFileSync(file, 'utf8');
      const originalContent = content;
      
      // Apply fixes
      content = fixSyntaxErrors(content);
      
      // Only write if content changed
      if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        processedCount++;
        console.log(`Fixed: ${file}`);
      }
    } catch (error) {
      errorCount++;
      console.error(`Error processing ${file}:`, error.message);
    }
  });
  
  console.log(`\nProcessed ${processedCount} files with ${errorCount} errors`);
}

processFiles();
