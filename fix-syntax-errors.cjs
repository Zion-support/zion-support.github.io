const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix missing closing tags and brackets
    content = fixMissingClosingTags(content);
    
    // Fix JSX syntax issues
    content = fixJSXIssues(content);
    
    // Fix TypeScript syntax issues
    content = fixTypeScriptIssues(content);
    
    // Clean up extra commas and semicolons
    content = cleanUpPunctuation(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function fixMissingClosingTags(content) {
  // Count opening and closing tags
  const openTags = (content.match(/<[^/][^>]*>/g) || []).length;
  const closeTags = (content.match(/<\/[^>]*>/g) || []).length;
  const fragments = (content.match(/<>/g) || []).length;
  const fragmentCloses = (content.match(/<\/>/g) || []).length;
  
  // Add missing closing tags for common patterns
  if (openTags > closeTags) {
    const missing = openTags - closeTags;
    
    // Try to add closing divs
    if (content.includes('<div') && !content.endsWith('</div>')) {
      content += '\n'.repeat(missing) + '</div>'.repeat(missing);
    }
    // Try to add closing sections
    else if (content.includes('<section') && !content.endsWith('</section>')) {
      content += '\n'.repeat(missing) + '</section>'.repeat(missing);
    }
    // Try to add closing main
    else if (content.includes('<main') && !content.endsWith('</main>')) {
      content += '\n'.repeat(missing) + '</main>'.repeat(missing);
    }
  }
  
  // Fix React fragments
  if (fragments > fragmentCloses) {
    const missing = fragments - fragmentCloses;
    content += '\n'.repeat(missing) + '</>'.repeat(missing);
  }
  
  return content;
}

function fixJSXIssues(content) {
  // Fix common JSX syntax issues
  content = content.replace(/\{\s*\}\s*>/g, '>');
  content = content.replace(/\{\s*\}\s*</g, '<');
  content = content.replace(/>\s*\{\s*\}\s*</g, '><');
  
  // Fix missing closing braces in JSX expressions
  content = content.replace(/\{([^}]*)$/gm, '{$1}');
  
  // Fix malformed JSX attributes
  content = content.replace(/=\s*\{\s*([^}]*)\s*\}\s*([^=])/g, '={$1} $2');
  
  return content;
}

function fixTypeScriptIssues(content) {
  // Fix missing semicolons
  content = content.replace(/([^;}])\n\s*const\s/g, '$1;\nconst ');
  content = content.replace(/([^;}])\n\s*let\s/g, '$1;\nlet ');
  content = content.replace(/([^;}])\n\s*var\s/g, '$1;\nvar ');
  
  // Fix missing commas in object literals
  content = content.replace(/(\w+)\s*\n\s*(\w+):/g, '$1,\n  $2:');
  
  // Fix missing commas in arrays
  content = content.replace(/(\w+)\s*\n\s*(\w+)\]/g, '$1,\n  $2]');
  
  return content;
}

function cleanUpPunctuation(content) {
  // Remove extra commas
  content = content.replace(/,\s*,/g, ',');
  content = content.replace(/,\s*}/g, '}');
  content = content.replace(/,\s*]/g, ']');
  
  // Remove extra semicolons
  content = content.replace(/;\s*;/g, ';');
  
  // Fix spacing around operators
  content = content.replace(/\s*=\s*=\s*/g, ' === ');
  content = content.replace(/\s*!\s*=\s*/g, ' !== ');
  
  return content;
}

// Function to recursively find all TypeScript/JavaScript files
function findSourceFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting syntax error resolution...');

const workspaceDir = '/workspace';
const sourceFiles = findSourceFiles(workspaceDir);

console.log(`Found ${sourceFiles.length} source files to check`);

let fixedCount = 0;
for (const filePath of sourceFiles) {
  if (fixSyntaxErrors(filePath)) {
    fixedCount++;
  }
}

console.log(`Fixed syntax errors in ${fixedCount} files`);