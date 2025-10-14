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

    // Remove the lazy loading statements at the end
    if (content.includes('const page = React.lazy(() => import(\'./page\'));')) {
      content = content.replace(
        /const page = React\.lazy\(\(\) => import\('\.\/page'\)\);\nexport default page;/g,
        ''
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