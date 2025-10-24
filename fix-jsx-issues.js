const fs = require('fs');
const path = require('path');

// Function to fix JSX elements in icon properties
function fixJSXElements(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix icon: <Component className="..." /> patterns
    const iconPattern = /icon:\s*<(\w+)\s+className="[^"]*"\s*\/>/g;
    content = content.replace(iconPattern, (match, componentName) => {
      modified = true;
      return `icon: ${componentName},`;
    });

    // Fix {feature.icon} patterns to use component rendering
    const featureIconPattern = /\{\s*feature\.icon\s*\}/g;
    content = content.replace(featureIconPattern, () => {
      modified = true;
      return '<feature.icon className="w-8 h-8 text-cyan-400" />';
    });

    // Fix {stat.icon} patterns
    const statIconPattern = /\{\s*stat\.icon\s*\}/g;
    content = content.replace(statIconPattern, () => {
      modified = true;
      return '<stat.icon className="w-6 h-6 text-cyan-400" />';
    });

    // Fix {item.icon} patterns
    const itemIconPattern = /\{\s*item\.icon\s*\}/g;
    content = content.replace(itemIconPattern, () => {
      modified = true;
      return '<item.icon className="w-8 h-8 text-cyan-400" />';
    });

    // Fix {value.icon} patterns
    const valueIconPattern = /\{\s*value\.icon\s*\}/g;
    content = content.replace(valueIconPattern, () => {
      modified = true;
      return '<value.icon className="w-8 h-8 text-cyan-400" />';
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX issues in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files
function findTSXFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTSXFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTSXFiles(appDir);

console.log(`Found ${tsxFiles.length} TSX files to process...`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixJSXElements(file)) {
    fixedCount++;
  }
}

console.log(`Fixed JSX issues in ${fixedCount} files.`);