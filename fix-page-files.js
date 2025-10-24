const fs = require('fs');
const path = require('path');

// Function to fix a single page file
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the corrupted function parameter syntax
    const corruptedPattern = /const WorkingPage = \(\{ title: "([^"]+)", description: "([^"]+)" \}: \{ title: string; description: string \}\) => \{/g;
    const fixedPattern = 'const WorkingPage = ({ title = "$1", description = "$2" }: { title?: string; description?: string }) => {';
    
    content = content.replace(corruptedPattern, fixedPattern);
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to recursively find and fix all page.tsx files
function fixAllPageFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixAllPageFiles(filePath);
    } else if (file === 'page.tsx') {
      fixPageFile(filePath);
    }
  }
}

// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
if (fs.existsSync(appDir)) {
  console.log('Starting to fix page files...');
  fixAllPageFiles(appDir);
  console.log('Finished fixing page files.');
} else {
  console.log('App directory not found.');
}