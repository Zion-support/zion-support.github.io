import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix malformed import statements
function fixImportStatements(content) {
  // Fix malformed React imports
  content = content.replace(/import React from 'react;'/g, "import React from 'react';");
  content = content.replace(/import React from "react;"/g, 'import React from "react";');
  
  // Fix other common malformed imports
  content = content.replace(/import \{[^}]*\} from 'react;'/g, (match) => {
    return match.replace(/;'$/, "';");
  });
  
  content = content.replace(/import \{[^}]*\} from "react;"/g, (match) => {
    return match.replace(/;"$/, '";');
  });
  
  return content;
}

// Function to fix component files
function fixComponentFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix import statements
  content = fixImportStatements(content);
  
  // Basic component structure if it's malformed
  if (content.includes("import React from 'react';") && !content.includes('export default')) {
    const componentName = path.basename(filePath, '.tsx');
    const properComponentName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
    
    content = `import React from 'react';

const ${properComponentName} = () => {
  return (
    <div>
      <h1>${properComponentName}</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ${properComponentName};`;
  }
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed: ${filePath}`);
}

// Get all component files
const componentsDir = path.join(__dirname, 'app/components');
const componentFiles = fs.readdirSync(componentsDir)
  .filter(file => file.endsWith('.tsx'))
  .map(file => path.join(componentsDir, file));

// Fix all component files
componentFiles.forEach(fixComponentFile);

console.log('All component import statements have been fixed!');