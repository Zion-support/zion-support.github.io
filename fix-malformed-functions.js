const fs = require('fs');
const path = require('path');

// Function to fix malformed function names
function fixMalformedFunctions(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed function names that start with "Page" followed by random characters
    const functionNameRegex = /function\s+(Page[a-zA-Z0-9]+)\s*\(/g;
    const matches = content.match(functionNameRegex);
    
    if (matches) {
      // Extract the directory name to create a proper function name
      const dirName = path.basename(path.dirname(filePath));
      const properFunctionName = dirName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('') + 'Page';
      
      // Replace all instances of the malformed function name
      matches.forEach(match => {
        const oldFunctionName = match.match(/function\s+(Page[a-zA-Z0-9]+)/)[1];
        content = content.replace(new RegExp(oldFunctionName, 'g'), properFunctionName);
        modified = true;
      });
    }

    // Fix empty h1 tags
    content = content.replace(/<h1[^>]*>\s*<\/h1>/g, '<h1 className="text-4xl font-bold text-gray-900 mb-8">Page Title</h1>');
    
    // Fix empty displayName assignments
    content = content.replace(/(\w+)\.displayName\s*=\s*'';?\s*$/gm, '');
    
    // Fix generic content in paragraphs
    content = content.replace(/Professional\s+services and solutions\./g, 'Professional services and solutions for your business needs.');

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed malformed functions in ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find and fix all files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') && file === 'page.tsx') {
      if (fixMalformedFunctions(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

// Main execution
console.log('Starting malformed function fixes...');

// Fix files in app directory
const appFixed = fixAllFiles('./app');
console.log(`Fixed ${appFixed} files in app directory.`);

console.log('Malformed function fixes completed.');