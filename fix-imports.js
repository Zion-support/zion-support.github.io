<<<<<<< HEAD
=======
#!/usr/bin/env node

>>>>>>> origin/merged-prs
import fs from 'fs';
import path from 'path';

// Read the App.tsx file
<<<<<<< HEAD
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
=======
const appPath = './src/App.tsx';
let content = fs.readFileSync(appPath, 'utf8');

// Get all files in the pages directory
const pagesDir = './src/pages';
const pageFiles = fs.readdirSync(pagesDir)
  .filter(file => file.endsWith('.tsx') || file.endsWith('.jsx'))
  .map(file => file.replace(/\.(tsx|jsx)$/, ''));

console.log('Available page files:', pageFiles.length);

// Find all import statements that reference pages
const importRegex = /import\s+(\w+)\s+from\s+['"]\.\/pages\/([^'"]+)['"];?/g;
const routeRegex = /<Route\s+path="[^"]*"\s+element={<(\w+)\s*\/>}\s*\/>/g;

let match;
const imports = new Map();
const routes = new Map();

// Extract all imports
while ((match = importRegex.exec(content)) !== null) {
  const [fullMatch, componentName, filePath] = match;
  imports.set(componentName, filePath);
}

// Extract all routes
while ((match = routeRegex.exec(content)) !== null) {
  const [fullMatch, componentName] = match;
  routes.set(componentName, true);
}

console.log('Found imports:', imports.size);
console.log('Found routes:', routes.size);

// Find missing files and suggest replacements
let fixes = 0;
for (const [componentName, filePath] of imports) {
  const fullPath = path.join(pagesDir, filePath + '.tsx');
  const fullPathJsx = path.join(pagesDir, filePath + '.jsx');
  
  if (!fs.existsSync(fullPath) && !fs.existsSync(fullPathJsx)) {
    console.log(`Missing file: ${filePath}`);
    
    // Find a similar file
    const baseName = filePath.replace(/\d+$/, '');
    const similarFiles = pageFiles.filter(file => 
      file.toLowerCase().includes(baseName.toLowerCase()) ||
      baseName.toLowerCase().includes(file.toLowerCase())
    );
    
    if (similarFiles.length > 0) {
      const replacement = similarFiles[0];
      console.log(`  -> Suggesting replacement: ${replacement}`);
      
      // Update import
      const oldImport = `import ${componentName} from './pages/${filePath}';`;
      const newImport = `import ${componentName} from './pages/${replacement}';`;
      content = content.replace(oldImport, newImport);
      fixes++;
    }
  }
}

if (fixes > 0) {
  fs.writeFileSync(appPath, content);
  console.log(`Fixed ${fixes} imports`);
} else {
  console.log('No fixes needed');
}
>>>>>>> origin/merged-prs
