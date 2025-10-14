const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix regex patterns that were incorrectly inserted
function fixRegexPatterns(content) {
  let fixed = content;
  
  // Fix all instances of className="[^"]*" (regex pattern)
  fixed = fixed.replace(/className="\[[^"]*\]"/g, 'className="text-gray-600"');
  
  return fixed;
}

// Main function to process files
function processFiles() {
  const files = glob.sync('app/**/*.tsx', { cwd: __dirname });
  
  console.log(`Found ${files.length} TSX files to process...`);
  
  let processedCount = 0;
  let errorCount = 0;
  
  files.forEach(file => {
    try {
      const filePath = path.join(__dirname, file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file contains regex patterns
      if (content.includes('className="[^"]*"')) {
        console.log(`Fixing regex patterns in ${file}`);
        content = fixRegexPatterns(content);
        fs.writeFileSync(filePath, content, 'utf8');
      }
      
      processedCount++;
      
      if (processedCount % 50 === 0) {
        console.log(`Processed ${processedCount} files...`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
      errorCount++;
    }
  });
  
  console.log(`\nProcessing complete!`);
  console.log(`Files processed: ${processedCount}`);
  console.log(`Errors: ${errorCount}`);
}

// Run the fix
processFiles();