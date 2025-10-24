const fs = require('fs');
const glob = require('glob');

// Function to fix malformed JSX structure
function fixMalformedJSX(content) {
  // Fix the specific pattern where we have malformed main tags
  content = content.replace(/<main><\/div><\/main>/g, '</div>');
  content = content.replace(/<main><\/div>/g, '</div>');
  content = content.replace(/<\/main><\/div>/g, '</div>');
  
  // Remove extra closing divs at the end
  content = content.replace(/\n\s*<\/div>\s*$/g, '');
  content = content.replace(/\n\s*<\/div>\s*\n\s*<\/div>\s*$/g, '');
  
  // Fix identifier expected errors
  content = content.replace(/const\s+\w+\s*=\s*\(\)\s*=>\s*\{;\s*\n/g, 'const $1 = () => {\n');
  
  // Fix property assignment errors
  content = content.replace(/property="og:\s*type"/g, 'property="og:type"');
  content = content.replace(/content="website";\s*;\/;>/g, 'content="website" />');
  
  // Fix merge conflicts
  if (content.includes('=======')) {
    content = content.replace(/=======.*?>>>>>>> [^\n]+/gs, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======/g, '');
  }
  
  return content;
}

// Function to ensure proper JSX structure
function ensureProperJSXStructure(content) {
  const lines = content.split('\n');
  let inJSX = false;
  let braceCount = 0;
  let divCount = 0;
  let mainCount = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.includes('return (') || line.includes('return(')) {
      inJSX = true;
    }
    
    if (inJSX) {
      // Count braces
      braceCount += (line.match(/\{/g) || []).length;
      braceCount -= (line.match(/\}/g) || []).length;
      
      // Count divs
      divCount += (line.match(/<div[^>]*>/g) || []).length;
      divCount -= (line.match(/<\/div>/g) || []).length;
      
      // Count mains
      mainCount += (line.match(/<main[^>]*>/g) || []).length;
      mainCount -= (line.match(/<\/main>/g) || []).length;
    }
  }
  
  // Add missing closing tags
  for (let i = 0; i < mainCount; i++) {
    content += '\n      </main>';
  }
  for (let i = 0; i < divCount; i++) {
    content += '\n    </div>';
  }
  
  // Add missing closing brace
  if (braceCount > 0) {
    for (let i = 0; i < braceCount; i++) {
      content += '\n}';
    }
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
      content = fixMalformedJSX(content);
      content = ensureProperJSXStructure(content);
      
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
