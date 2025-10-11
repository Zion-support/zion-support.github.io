const fs = require('fs');
const path = require('path');

// Get all AI service directories
const appDir = path.join(__dirname, 'app');
const directories = fs.readdirSync(appDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)
  .filter(dir => dir.startsWith('ai-') && dir !== 'ai-services');

console.log('Found AI service directories:', directories);

// Generate import statements
const imports = directories.map(dir => {
  const componentName = dir.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  return `import ${componentName} from './app/${dir}/page'`;
}).join('\n');

// Generate route statements
const routes = directories.map(dir => {
  const componentName = dir.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  return `          <Route path="/${dir}" element={<${componentName} />} />`;
}).join('\n');

console.log('Generated imports:');
console.log(imports);
console.log('\nGenerated routes:');
console.log(routes);

// Write to a file for reference
fs.writeFileSync('generated_routes.txt', `IMPORTS:\n${imports}\n\nROUTES:\n${routes}`);