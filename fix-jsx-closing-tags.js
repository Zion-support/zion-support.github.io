const fs = require('fs');
const glob = require('glob');

// Function to fix JSX closing tags
function fixJSXClosingTags(content) {
  // Count opening and closing tags
  const openDivs = (content.match(/<div[^>]*>/g) || []).length;
  const closeDivs = (content.match(/<\/div>/g) || []).length;
  const openMains = (content.match(/<main[^>]*>/g) || []).length;
  const closeMains = (content.match(/<\/main>/g) || []).length;
  const openSections = (content.match(/<section[^>]*>/g) || []).length;
  const closeSections = (content.match(/<\/section>/g) || []).length;
  
  // Add missing closing tags
  let missingDivs = openDivs - closeDivs;
  let missingMains = openMains - closeMains;
  let missingSections = openSections - closeSections;
  
  // Add closing tags at the end
  for (let i = 0; i < missingSections; i++) {
    content += '\n  </section>';
  }
  for (let i = 0; i < missingMains; i++) {
    content += '\n  </main>';
  }
  for (let i = 0; i < missingDivs; i++) {
    content += '\n    </div>';
  }
  
  return content;
}

// Function to fix specific syntax issues
function fixSpecificIssues(content) {
  // Fix the about page merge conflict
  if (content.includes('=======')) {
    content = content.replace(/=======.*?>>>>>>> [^\n]+/gs, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======/g, '');
  }
  
  // Fix property assignment errors
  content = content.replace(/property="og:\s*type"/g, 'property="og:type"');
  content = content.replace(/content="website";\s*;\/;>/g, 'content="website" />');
  
  // Fix identifier expected errors
  content = content.replace(/const\s+\w+\s*=\s*\(\)\s*=>\s*\{;\s*\n/g, 'const $1 = () => {\n');
  
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
      content = fixSpecificIssues(content);
      content = fixJSXClosingTags(content);
      
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
