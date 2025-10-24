const fs = require('fs');
const path = require('path');

// Function to fix specific JSX structure issues
function fixSpecificJSXErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix the specific pattern: }}\n  );\n}\n\nexport default
    content = content.replace(/}\s*}\s*\n\s*\);\s*\n\s*}\s*\n\s*\n\s*export default/g, '  );\n};\n\nexport default');
    
    // Fix malformed closing tags like </a></div>
    content = content.replace(/<\/a><\/div>/g, '</a>\n          </div>');
    
    // Fix missing closing parentheses for return statements
    if (content.includes('return (') && !content.includes(');')) {
      content = content.replace(/(<\/div>\s*}\s*}\s*)/g, '$1\n  );\n};');
      modified = true;
    }
    
    // Fix extra closing braces
    content = content.replace(/}\s*}\s*$/gm, '  );\n};');
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed specific JSX errors in: ${filePath}`);
      modified = true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to recursively find and fix all TypeScript/TSX files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixSpecificJSXErrors(filePath);
    }
  });
}

// Start fixing from the workspace root
console.log('Starting to fix specific JSX errors...');
fixAllFiles('/workspace');
console.log('Finished fixing specific JSX errors.');