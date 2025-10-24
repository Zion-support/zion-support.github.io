const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix merge conflicts
function fixMergeConflicts(content) {
  // Remove merge conflict markers and keep the second version (after =======)
  return content
    .replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g, '$1')
    .replace(/<<<<<<< HEAD[\s\S]*?=======/g, '')
    .replace(/>>>>>>> [^\n]+/g, '');
}

// Function to fix JSX syntax errors
function fixJSXSyntax(content) {
  // Fix missing closing tags by adding them at the end
  const openTags = content.match(/<[^/][^>]*>/g) || [];
  const closeTags = content.match(/<\/[^>]*>/g) || [];
  
  // Simple fix for common missing closing tags
  if (content.includes('<div') && !content.includes('</div>')) {
    content += '\n    </div>';
  }
  if (content.includes('<main') && !content.includes('</main>')) {
    content += '\n  </main>';
  }
  if (content.includes('<section') && !content.includes('</section>')) {
    content += '\n  </section>';
  }
  if (content.includes('<Link') && !content.includes('</Link>')) {
    content = content.replace(/<Link([^>]*)>/g, '<Link$1></Link>');
  }
  
  return content;
}

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix missing semicolons
  content = content.replace(/([^;}])\n/g, '$1;\n');
  
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
      content = fixMergeConflicts(content);
      content = fixJSXSyntax(content);
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
