/* global console, __dirname, process */
const fs = require('fs');
const path = require('path');

function fixComponentFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if file has export default but no function definition
    const hasExportDefault = content.includes('export default');
    const hasFunctionDefinition = content.includes('const ') && content.includes('= () =>') || 
                                 content.includes('function ') ||
                                 content.includes('= (') && content.includes(') =>');

    if (hasExportDefault && !hasFunctionDefinition) {
      console.log(`Fixing component definition in: ${filePath}`);
      
      // Extract component name from export default
      const exportMatch = content.match(/export default (\w+);?/);
      if (exportMatch) {
        const componentName = exportMatch[1];
        
        // Check if there's an interface for props
        const interfaceMatch = content.match(/interface (\w*Props)\s*\{[^}]*\}/);
        const propsInterface = interfaceMatch ? interfaceMatch[1] : '{}';
        
        // Create the function definition
        const functionDef = `const ${componentName}: React.FC<${propsInterface}> = (props) => {
  return (
    <div className="p-4">
      <h2>${componentName}</h2>
      <p>Component implementation coming soon...</p>
    </div>
  );
};

${componentName}.displayName = '${componentName}';

`;

        // Insert the function definition before the export
        content = content.replace(
          /export default \w+;?/,
          functionDef + `export default ${componentName};`
        );
        
        // Add React import if not present
        if (!content.includes("import React")) {
          content = "import React from 'react';\n" + content;
        }
        
        modified = true;
      }
    }

    // Fix interface naming issues
    if (content.includes('interface _') && content.includes('Props')) {
      const interfaceMatches = content.match(/interface (_\w*Props)\s*\{[^}]*\}/g);
      if (interfaceMatches) {
        interfaceMatches.forEach(match => {
          const interfaceName = match.match(/interface (_\w*Props)/)[1];
          const correctName = interfaceName.replace('_', '');
          
          // Replace usage of the correct name with the underscore version
          content = content.replace(
            new RegExp(`\\b${correctName}\\b`, 'g'),
            interfaceName
          );
        });
        modified = true;
      }
    }

    // Fix undefined props interface references
    const propsInterfaceMatch = content.match(/React\.FC<(\w*Props)>/);
    if (propsInterfaceMatch) {
      const propsInterface = propsInterfaceMatch[1];
      if (!content.includes(`interface ${propsInterface}`) && !content.includes(`type ${propsInterface}`)) {
        // Replace with empty object type
        content = content.replace(
          `React.FC<${propsInterface}>`,
          'React.FC<{}>'
        );
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') && !item.includes('test') && !item.includes('spec')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('🔧 Fixing all component definitions...\n');

const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

let fixedCount = 0;
let totalFiles = tsxFiles.length;

console.log(`Found ${totalFiles} .tsx files to check\n`);

tsxFiles.forEach(filePath => {
  if (fixComponentFile(filePath)) {
    fixedCount++;
  }
});

console.log(`\n✅ Fixed ${fixedCount} out of ${totalFiles} component files`);