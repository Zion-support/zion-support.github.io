const fs = require('fs');
const glob = require('glob');

// Function to fix JSX structure issues
function fixJSXStructure(content) {
  // Remove extra closing tags at the end
  content = content.replace(/\n\s*<\/div>\s*$/g, '');
  content = content.replace(/\n\s*<\/main>\s*$/g, '');
  content = content.replace(/\n\s*<\/section>\s*$/g, '');
  
  // Fix missing opening tags
  if (content.includes('</main>') && !content.includes('<main')) {
    content = content.replace(/(<div[^>]*>[\s\S]*?)(<\/div>)/g, '$1<main>$2</main>');
  }
  
  // Fix the specific pattern where we have </main> but no <main>
  if (content.includes('</main>') && !content.includes('<main')) {
    content = content.replace(/(<div[^>]*>[\s\S]*?)(<\/div>)/g, (match, p1, p2) => {
      if (p1.includes('</main>')) {
        return p1.replace('</main>', '') + '<main>' + p2 + '</main>';
      }
      return match;
    });
  }
  
  // Fix merge conflicts
  if (content.includes('=======')) {
    content = content.replace(/=======.*?>>>>>>> [^\n]+/gs, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======/g, '');
  }
  
  // Fix identifier expected errors
  content = content.replace(/const\s+\w+\s*=\s*\(\)\s*=>\s*\{;\s*\n/g, 'const $1 = () => {\n');
  
  // Fix property assignment errors
  content = content.replace(/property="og:\s*type"/g, 'property="og:type"');
  content = content.replace(/content="website";\s*;\/;>/g, 'content="website" />');
  
  return content;
}

// Function to validate and fix JSX structure
function validateJSXStructure(content) {
  const lines = content.split('\n');
  const stack = [];
  let inJSX = false;
  let braceCount = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Track when we're in JSX
    if (line.includes('return (') || line.includes('return(')) {
      inJSX = true;
    }
    
    if (inJSX) {
      // Count braces
      braceCount += (line.match(/\{/g) || []).length;
      braceCount -= (line.match(/\}/g) || []).length;
      
      // Track opening tags
      const openTags = line.match(/<([a-zA-Z][a-zA-Z0-9]*)[^>]*>/g) || [];
      const closeTags = line.match(/<\/([a-zA-Z][a-zA-Z0-9]*)>/g) || [];
      
      openTags.forEach(tag => {
        const tagName = tag.match(/<([a-zA-Z][a-zA-Z0-9]*)/)[1];
        if (tagName !== 'Head' && tagName !== 'Link' && !tag.includes('/>')) {
          stack.push(tagName);
        }
      });
      
      closeTags.forEach(tag => {
        const tagName = tag.match(/<\/([a-zA-Z][a-zA-Z0-9]*)>/)[1];
        const lastOpen = stack.pop();
        if (lastOpen !== tagName) {
          // Mismatch - try to fix
          if (lastOpen) {
            stack.push(lastOpen); // Put it back
          }
        }
      });
    }
  }
  
  // Add missing closing tags
  while (stack.length > 0) {
    const tag = stack.pop();
    content += `\n  </${tag}>`;
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
      content = fixJSXStructure(content);
      content = validateJSXStructure(content);
      
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
