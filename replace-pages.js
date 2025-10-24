const fs = require('fs');
const path = require('path');

// Read the template
const template = fs.readFileSync('page-template.tsx', 'utf8');

// Function to replace page content with template
function replacePageFile(filePath) {
  try {
    // Extract the service name from the file path
    const pathParts = filePath.split('/');
    const serviceName = pathParts[pathParts.length - 2]; // Get the directory name
    
    // Replace "Service" with the actual service name
    let content = template.replace(/Service/g, serviceName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()));
    
    // Replace the description
    content = content.replace(
      'Professional services and solutions for modern businesses.',
      `Professional ${serviceName.replace(/-/g, ' ')} services and solutions for modern businesses.`
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Replaced: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error replacing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and replace all page.tsx files
function replaceAllPages(dir) {
  const files = fs.readdirSync(dir);
  let replacedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other non-page directories
      if (!['node_modules', '.next', '.git', 'components', 'utils', 'api'].includes(file)) {
        replacedCount += replaceAllPages(filePath);
      }
    } else if (file === 'page.tsx') {
      if (replacePageFile(filePath)) {
        replacedCount++;
      }
    }
  });
  
  return replacedCount;
}

// Main execution
console.log('Starting page replacement...');
const appDir = path.join(__dirname, 'app');
const replacedCount = replaceAllPages(appDir);
console.log(`Replaced ${replacedCount} files`);