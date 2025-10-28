#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get all component files
function getAllComponentFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...getAllComponentFiles(fullPath));
    } else if (item.endsWith('.tsx') && fullPath.includes('components')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix component files that have missing definitions
function fixComponentDefinition(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    const componentName = path.basename(filePath, '.tsx');
    
    // Check if component is exported but not defined
    if (content.includes(`export default ${componentName}`) && !content.includes(`const ${componentName}`) && !content.includes(`function ${componentName}`)) {
      console.log(`Fixing component definition: ${filePath}`);
      
      // Extract props interface if it exists
      const propsMatch = content.match(/interface _(\w+Props) \{[\s\S]*?\}/);
      const propsInterface = propsMatch ? propsMatch[0] : `interface _${componentName}Props {
  className?: string;
  children?: React.ReactNode;
}`;
      
      // Create the component definition
      const componentDefinition = `const ${componentName}: React.FC<_${componentName}Props> = ({ className = '', children }) => {
  return (
    <div className={\`${componentName.toLowerCase().replace(/([A-Z])/g, '-$1').substring(1)} \${className}\`}>
      {children}
    </div>
  );
};

${componentName}.displayName = '${componentName}';`;
      
      // Replace the export statements with the component definition
      content = content.replace(/export default \w+;[\s\S]*?export default \w+;?/g, componentDefinition + '\n\nexport default ' + componentName + ';');
      
      // If there are multiple export statements, clean them up
      const exportMatches = content.match(/export default \w+;/g);
      if (exportMatches && exportMatches.length > 1) {
        content = content.replace(/export default \w+;\n/g, '');
        content += '\nexport default ' + componentName + ';';
      }
      
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting component definition fixes...');

const appDir = path.join(__dirname, 'app');
const files = getAllComponentFiles(appDir);

let fixedCount = 0;
for (const file of files) {
  if (fixComponentDefinition(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} component files`);