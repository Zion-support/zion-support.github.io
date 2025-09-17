import fs from 'fs';
import path from 'path';

// Read the App.tsx file
const appPath = '/workspace/src/App.tsx';
let content = fs.readFileSync(appPath, 'utf8');

// Get all import lines from pages
const importLines = content.match(/^import .* from '\.\/pages\/[^']+';$/gm) || [];

console.log(`Found ${importLines.length} page imports to check...`);

let fixedCount = 0;
let commentedCount = 0;

for (const line of importLines) {
  // Extract the component name and file path
  const match = line.match(/import (\w+) from '\.\/pages\/([^']+)';$/);
  if (!match) continue;
  
  const [, componentName, filePath] = match;
  const fullPath = `/workspace/src/pages/${filePath}.tsx`;
  const componentPath = `/workspace/src/components/${filePath}.tsx`;
  
  // Check if file exists in pages
  if (fs.existsSync(fullPath)) {
    console.log(`✓ ${filePath} exists in pages`);
    continue;
  }
  
  // Check if file exists in components
  if (fs.existsSync(componentPath)) {
    console.log(`→ Moving ${filePath} from pages to components`);
    content = content.replace(
      `import ${componentName} from './pages/${filePath}';`,
      `import ${componentName} from './components/${filePath}';`
    );
    fixedCount++;
  } else {
    console.log(`✗ ${filePath} not found anywhere - commenting out`);
    content = content.replace(
      `import ${componentName} from './pages/${filePath}';`,
      `// import ${componentName} from './pages/${filePath}'; // File not found`
    );
    commentedCount++;
  }
}

// Write the fixed content back
fs.writeFileSync(appPath, content);

console.log(`\nFixed ${fixedCount} imports, commented out ${commentedCount} missing files.`);