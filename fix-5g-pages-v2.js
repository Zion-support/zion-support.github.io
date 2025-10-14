import fs from 'fs';
import { glob } from 'glob';

// Find all 5G page files
const pageFiles = glob.sync('app/5g-*/page.tsx');

console.log(`Found ${pageFiles.length} 5G page files to fix`);

let fixedCount = 0;

pageFiles.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix the function name that starts with a number
    if (content.includes('function 5g')) {
      // Extract the component name from the file path
      const pathParts = filePath.split('/');
      const folderName = pathParts[pathParts.length - 2];
      const componentName = 'FiveG' + folderName.split('-').slice(1).map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('') + 'Page';

      // Replace the function name
      content = content.replace(
        /function 5g\w+Page\(\)/g,
        `function ${componentName}()`
      );

      // Fix the export
      content = content.replace(
        /export default 5g\w+Page;/g,
        `export default ${componentName};`
      );

      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files`);