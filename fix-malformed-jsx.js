const fs = require('fs');
const path = require('path');

// Function to fix malformed JSX closing tags
function fixMalformedJSX(content) {
  let fixed = content;
  
  // Fix malformed closing tags like </div> and </Footer>
  fixed = fixed.replace(/<\/div><\/div>/g, '</div>\n      </div>');
  fixed = fixed.replace(/<\/\w+><\/\w+>/g, (match) => {
    const tag = match.match(/<\/(\w+)>/)[1];
    return `</${tag}>`;
  });
  
  // Fix specific patterns
  fixed = fixed.replace(/<\/div><\/div>\s*<Footer \/><\/Footer>/g, '</div>\n      </div>\n      <Footer />');
  fixed = fixed.replace(/<\/div><\/div>\s*<Footer><\/Footer>/g, '</div>\n      </div>\n      <Footer />');
  
  // Fix missing closing tags by ensuring proper nesting
  // Count opening and closing div tags
  const openDivs = (fixed.match(/<div[^>]*>/g) || []).length;
  const closeDivs = (fixed.match(/<\/div>/g) || []).length;
  
  // If there are more opening divs than closing divs, add the missing ones
  const missingDivs = openDivs - closeDivs;
  
  if (missingDivs > 0) {
    // Find the last closing tag and add missing divs before the final closing tags
    const lastClosingDiv = fixed.lastIndexOf('</div>');
    if (lastClosingDiv !== -1) {
      const beforeLastDiv = fixed.substring(0, lastClosingDiv);
      const afterLastDiv = fixed.substring(lastClosingDiv);
      
      // Add missing closing divs
      const missingClosingDivs = '</div>'.repeat(missingDivs);
      fixed = beforeLastDiv + missingClosingDivs + afterLastDiv;
    }
  }
  
  // Fix specific malformed patterns
  fixed = fixed.replace(/<\/div><\/div>\s*<Footer \/><\/Footer>/g, '</div>\n      </div>\n      <Footer />');
  fixed = fixed.replace(/<\/div><\/div>\s*<Footer><\/Footer>/g, '</div>\n      </div>\n      <Footer />');
  
  // Fix broken JSX elements
  fixed = fixed.replace(/<(\w+)\s*;\s*>/g, '<$1>');
  fixed = fixed.replace(/<\/\w+>\s*;\s*$/gm, '');
  
  return fixed;
}

// Function to fix a specific file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixMalformedJSX(content);
    
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

// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and other directories
      if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(file)) {
        fixedCount += fixFilesInDirectory(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
console.log('Starting malformed JSX fixes...');
const fixedCount = fixFilesInDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);
      </Footer>
      </Footer>
      </Footer>
      </Footer>
      </Footer>
      </Footer>
      </Footer>
      </Footer>