const fs = require('fs');
const path = require('path');

function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file is missing function declaration
    if (!content.includes('const ') && !content.includes('function ') && !content.includes('export default')) {
      console.log(`Fixing ${filePath}`);
      
      // Extract the page name from the file path
      const pageName = path.basename(path.dirname(filePath));
      const componentName = pageName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('') + 'Page';
      
      // Add function declaration if missing
      if (!content.includes('const ')) {
        const lines = content.split('\n');
        const importEndIndex = lines.findIndex(line => 
          line.includes('from ') && !line.includes('import ')
        );
        
        if (importEndIndex !== -1) {
          lines.splice(importEndIndex + 1, 0, `\nconst ${componentName}: React.FC = () => {`);
          content = lines.join('\n');
        }
      }
      
      // Add export if missing
      if (!content.includes('export default')) {
        content = content.replace(/\s*}\s*$/, '};\n\nexport default ' + componentName + ';');
      }
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDirectory(filePath);
    } else if (file === 'page.tsx') {
      fixPageFile(filePath);
    }
  }
}

// Start from the app directory
walkDirectory('./app');
console.log('Page fixing complete!');