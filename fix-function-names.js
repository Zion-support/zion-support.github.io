const fs = require('fs');
const path = require('path');

// List of pages that need function name fixes
const pagesToFix = [
  '5g-implementation',
  '5g-iot-solutions',
  '5g-mobile-applications',
  '5g-network-infrastructure',
  '5g-private-networks',
  '5g-smart-city-solutions',
  '5g-solutions'
];

// Function to convert page name to valid function name
function getValidFunctionName(pageName) {
  // Remove numbers and convert to PascalCase
  const cleanName = pageName.replace(/[0-9]/g, '').replace(/-/g, '');
  return cleanName.charAt(0).toUpperCase() + cleanName.slice(1) + 'Page';
}

// Fix function names in pages
pagesToFix.forEach(pageName => {
  const pagePath = path.join(__dirname, 'app', pageName, 'page.tsx');
  
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // Replace the function name
    const oldFunctionName = pageName.charAt(0).toUpperCase() + pageName.slice(1).replace(/-/g, '') + 'Page';
    const newFunctionName = getValidFunctionName(pageName);
    
    content = content.replace(new RegExp(`function ${oldFunctionName}`, 'g'), `function ${newFunctionName}`);
    
    fs.writeFileSync(pagePath, content);
    console.log(`Fixed function name in: ${pageName}/page.tsx (${oldFunctionName} -> ${newFunctionName})`);
  }
});

console.log('All function names have been fixed!');