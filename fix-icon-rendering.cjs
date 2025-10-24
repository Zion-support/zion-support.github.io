const fs = require('fs');
const path = require('path');

// Function to fix icon rendering in a file
function fixIconRendering(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file has the problematic pattern
    if (content.includes('<feature.icon className=')) {
      // Replace the features mapping to properly destructure the icon
      content = content.replace(
        /{features\.map\(\(feature, index\) => \(\s*<div key={index} className="[^"]*">\s*<div className="[^"]*">\s*<feature\.icon className="[^"]*" \/>/g,
        `{features.map((feature, index) => {
    const IconComponent = feature.icon;
    return (
    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
        <IconComponent className="h-6 w-6 text-white" />`
      );
      
      // Replace the closing of the features mapping
      content = content.replace(
        /<\/ul>\s*<\/div>\s*\)\)}/g,
        `</ul>
      </div>
      );
    })}`
      );
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed icon rendering in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all page files
function getAllPageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      const pageFile = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pageFile)) {
        files.push(pageFile);
      }
    }
  }
  
  return files;
}

// Fix all page files
const pageFiles = getAllPageFiles('app');
let fixedCount = 0;

pageFiles.forEach(filePath => {
  if (fixIconRendering(filePath)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files with icon rendering issues!`);