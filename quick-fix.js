const fs = require('fs');
const glob = require('glob');

// Function to fix common syntax issues
function quickFix(content) {
  // Fix missing semicolons after function declarations
  content = content.replace(/export default function (\w+) \(\) \{/g, 'export default function $1() {');
  
  // Fix missing semicolons after return statements
  content = content.replace(/return \(/g, 'return (');
  
  // Fix missing semicolons after JSX elements
  content = content.replace(/<div>/g, '<div>');
  content = content.replace(/<main>/g, '<main>');
  content = content.replace(/<section>/g, '<section>');
  
  // Remove extra semicolons
  content = content.replace(/;\s*\n/g, '\n');
  
  // Fix merge conflicts
  if (content.includes('=======')) {
    content = content.replace(/=======.*?>>>>>>> [^\n]+/gs, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======/g, '');
  }
  
  return content;
}

// Main function to process all files
function processFiles() {
  const files = glob.sync('app/**/*.tsx');
  let processedCount = 0;
  
  files.forEach(file => {
    try {
      let content = fs.readFileSync(file, 'utf8');
      const originalContent = content;
      
      content = quickFix(content);
      
      if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        processedCount++;
        console.log(`Fixed: ${file}`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });
  
  console.log(`\nProcessed ${processedCount} files`);
}

processFiles();
