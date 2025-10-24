const fs = require('fs');
const path = require('path');

// Function to fix final syntax errors
function fixFinalSyntax(content) {
  // Fix malformed URLs
  content = content.replace(/url=\"https:\/\/ ziontechgroup\.com\//g, 'url="https://ziontechgroup.com/');
  content = content.replace(/url=\"https:\/\/ ziontechgroup\.com/g, 'url="https://ziontechgroup.com');
  
  // Fix malformed closing parentheses and braces
  content = content.replace(/<Footer\s+\/>\s*<\/div>\)\s*\)\}/g, '<Footer />\n    </div>\n  );\n}');
  content = content.replace(/<Footer\s+\/>\s*<\/div>\)\s*\)\s*}/g, '<Footer />\n    </div>\n  );\n}');
  content = content.replace(/<Footer\s+\/>\s*<\/div>\)\s*\)\s*}\s*$/gm, '<Footer />\n    </div>\n  );\n}');
  
  // Fix malformed JSX fragments
  content = content.replace(/<\/>\)\s*\)\}/g, '</>\n  );\n}');
  content = content.replace(/<\/>\)\s*\)\s*}/g, '</>\n  );\n}');
  content = content.replace(/<\/>\)\s*\)\s*}\s*$/gm, '</>\n  );\n}');
  
  // Fix malformed quotes at the end of files
  content = content.replace(/}\s*'$/gm, '}');
  content = content.replace(/;\s*'$/gm, ';');
  content = content.replace(/\)\s*'$/gm, ')');
  content = content.replace(/\]\s*'$/gm, ']');
  content = content.replace(/\}\s*'$/gm, '}');
  
  // Fix malformed quotes in JSX attributes
  content = content.replace(/content="([^"]*)"\s*"/g, 'content="$1"');
  content = content.replace(/href="([^"]*)"\s*"/g, 'href="$1"');
  content = content.replace(/className="([^"]*)"\s*"/g, 'className="$1"');
  content = content.replace(/name="([^"]*)"\s*"/g, 'name="$1"');
  content = content.replace(/property="([^"]*)"\s*"/g, 'property="$1"');
  content = content.replace(/url="([^"]*)"\s*"/g, 'url="$1"');
  
  // Fix malformed quotes in JSX text content
  content = content.replace(/>([^<]*)"\s*</g, '>$1<');
  content = content.replace(/>([^<]*);"\s*</g, '>$1<');
  
  // Fix malformed quotes in JSX closing tags
  content = content.replace(/<\/\s*([^>]*)\s*>\s*"/g, '</$1>');
  content = content.replace(/<\/\s*([^>]*)\s*>\s*;\s*"/g, '</$1>');
  
  // Fix malformed quotes in JSX opening tags
  content = content.replace(/<\s*([^>]*)\s*>\s*"/g, '<$1>');
  content = content.replace(/<\s*([^>]*)\s*>\s*;\s*"/g, '<$1>');
  
  // Fix malformed quotes in function returns
  content = content.replace(/return\s*\(\s*([^)]*)\s*\)\s*;\s*"/g, 'return ($1);');
  content = content.replace(/return\s*\(\s*([^)]*)\s*\)\s*"/g, 'return ($1)');
  
  // Fix malformed quotes in function definitions
  content = content.replace(/\)\s*}\s*;\s*"/g, ')}');
  content = content.replace(/\)\s*}\s*"/g, ')}');
  
  // Fix malformed quotes in array definitions
  content = content.replace(/\[\s*([^\]]*)\s*\]\s*;\s*"/g, '[$1];');
  content = content.replace(/\[\s*([^\]]*)\s*\]\s*"/g, '[$1]');
  
  // Fix malformed quotes in object definitions
  content = content.replace(/\{\s*([^}]*)\s*\}\s*;\s*"/g, '{$1};');
  content = content.replace(/\{\s*([^}]*)\s*\}\s*"/g, '{$1}');
  
  // Fix malformed quotes in string literals
  content = content.replace(/"([^"]*)"\s*"/g, '"$1"');
  content = content.replace(/'([^']*)'\s*"/g, "'$1'");
  
  // Fix malformed quotes in comments
  content = content.replace(/\/\*\s*([^*]*)\s*\*\/\s*"/g, '/* $1 */');
  content = content.replace(/\/\/\s*([^\n]*)\s*"/g, '// $1');
  
  // Fix function declaration syntax
  content = content.replace(/export default function ServicePage\(\) \{return \(/g, 'export default function ServicePage() {\n  return (');
  
  // Remove all semicolons that are incorrectly placed
  content = content.replace(/;\s*$/gm, '');
  content = content.replace(/;\s*"/g, '"');
  content = content.replace(/;\s*>/g, '>');
  content = content.replace(/;\s*\)/g, ')');
  content = content.replace(/;\s*}/g, '}');
  content = content.replace(/;\s*]/g, ']');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {;
const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixFinalSyntax(content);
    
    // Only write if content changed
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx and .ts files
function findFiles(dir, extensions = ['.tsx', '.ts', '.js']) {;
const files = [];
  
  function traverse(currentDir) {;
const items = fs.readdirSync(currentDir);
    
    for (const item of items) {;
const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          traverse(fullPath);
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting final syntax error fixes...');
;
const files = findFiles('./app');
let fixedCount = 0;

for (const file of files) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files.`);