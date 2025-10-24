const fs = require('fs');
const path = require('path');

// Function to fix icon issues in a file
function fixIconIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Pattern to match icon: <Component className="..." />
    const iconPattern = /icon:\s*<(\w+)\s+className="([^"]+)"/g;
    
    // Replace icon: <Component className="..." /> with icon: Component, iconProps: { className: "..." }
    content = content.replace(iconPattern, (match, component, className) => {
      modified = true;
      return `icon: ${component},\n      iconProps: { className: "${className}" }`;
    });

    // Pattern to match <object.icon className="..." />
    const usagePattern = /<(\w+)\.icon\s+className="([^"]+)"/g;
    
    // Replace <object.icon className="..." /> with <object.icon {...object.iconProps} />
    content = content.replace(usagePattern, (match, object) => {
      modified = true;
      return `<${object}.icon {...${object}.iconProps}`;
    });

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all .tsx files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to process
      if (!['node_modules', '.next', '.git'].includes(file)) {
        fixedCount += fixAllFiles(filePath);
      }
    } else if (file.endsWith('.tsx')) {
      if (fixIconIssues(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
console.log('Starting to fix icon issues...');
const fixedCount = fixAllFiles(appDir);
console.log(`Fixed ${fixedCount} files`);