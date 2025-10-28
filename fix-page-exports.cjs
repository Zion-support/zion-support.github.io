const fs = require('fs');
const path = require('path');

function fixPageExports(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixPageExports(filePath);
    } else if (file.endsWith('.tsx') && file === 'page.tsx') {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if it's a page file that needs export default
      if (content.includes('function ') && content.includes('Page()') && !content.includes('export default')) {
        console.log(`Fixing exports in: ${filePath}`);
        
        // Find the function declaration and add export default
        const functionMatch = content.match(/function\s+(\w+Page)\(/);
        if (functionMatch) {
          const functionName = functionMatch[1];
          const newContent = content.replace(
            new RegExp(`function\\s+${functionName}\\(`),
            `export default function ${functionName}(`
          );
          fs.writeFileSync(filePath, newContent);
          console.log(`  Fixed: ${functionName}`);
        }
      }
    }
  }
}

// Start from the app directory
const appDir = '/workspace/app';
if (fs.existsSync(appDir)) {
  fixPageExports(appDir);
  console.log('Page exports fixed successfully!');
} else {
  console.log('App directory not found');
}