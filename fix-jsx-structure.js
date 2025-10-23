const fs = require('fs');
const path = require('path');

// Function to fix JSX structure issues
function fixJSXStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing closing braces for function components
    if (content.includes('return (') && !content.includes('export default')) {
      // Add export default if missing
      if (!content.includes('export default')) {
        content = content.replace(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*{/, 'const $1 = () => {');
        content += '\n\nexport default About;';
        modified = true;
      }
    }
    
    // Fix malformed JSX closing tags
    content = content.replace(/<\/a><a/g, '</a>\n            <a');
    content = content.replace(/<\/div><\/div><\/section><\/div>/g, '</div>\n        </div>\n      </section>\n    </div>');
    
    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      content += '\n}'.repeat(openBraces - closeBraces);
      modified = true;
    }
    
    // Fix missing closing parentheses for return statements
    if (content.includes('return (') && !content.includes(');')) {
      content = content.replace(/(<\/div>\s*}\s*})/g, '$1\n  );\n}');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed JSX structure in: ${filePath}`);
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
      fixJSXStructure(filePath);
    }
  });
}

// Start fixing from the workspace root
console.log('Starting to fix JSX structure...');
fixAllFiles('/workspace');
console.log('Finished fixing JSX structure.');