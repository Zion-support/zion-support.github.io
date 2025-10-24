const fs = require('fs');
const path = require('path');

// Function to fix display name issues
function fixDisplayName(content, fileName) {
  const baseName = fileName.replace('page.tsx', '').replace('.tsx', '');
  const componentName = baseName.split('/').pop().replace(/-/g, '');
  const displayName = baseName
    .split('/')
    .pop()
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  // Fix anonymous default export
  content = content.replace(
    /export default function \w+\(\)/g,
    `export default function ${componentName}()`
  );
  
  // Add display name
  content = content.replace(
    /export default function \w+\(\) \{/g,
    `export default function ${componentName}() {\n  ${componentName}.displayName = '${displayName}';`
  );
  
  return content;
}

// Main processing function
function fixAllDisplayNames() {
  const directories = [
    path.join(__dirname, 'app'),
    path.join(__dirname, 'src')
  ];
  
  let processedCount = 0;
  
  directories.forEach(dir => {
    if (fs.existsSync(dir)) {
      processDirectory(dir);
    }
  });
  
  function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        processDirectory(filePath);
      } else if (file.endsWith('page.tsx')) {
        try {
          let content = fs.readFileSync(filePath, 'utf8');
          const originalContent = content;
          
          content = fixDisplayName(content, file);
          
          if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Fixed: ' + filePath);
            processedCount++;
          }
        } catch (error) {
          console.error('Error processing ' + filePath + ':', error.message);
        }
      }
    });
  }
  
  console.log('Display name fixes complete!');
  console.log('Processed files: ' + processedCount);
}

// Run the script
fixAllDisplayNames();