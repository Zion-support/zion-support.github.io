import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Find all page.tsx files in the app directory
const pageFiles = glob.sync('app/**/page.tsx');

console.log(`Found ${pageFiles.length} page files to fix`);

pageFiles.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file has the problematic pattern
    if (content.includes('const page = React.lazy(() => import(\'./page\'));')) {
      console.log(`Fixing circular import in ${filePath}`);
      
      // Replace the circular import with proper export
      content = content.replace(
        /const page = React\.lazy\(\(\) => import\('\.\/page'\)\);\nexport default page;/g,
        'export default Page;'
      );
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed ${filePath}`);
    }
    
    // Fix implicit any errors by adding proper type annotations
    if (content.includes('function Page()') && !content.includes('function Page(): JSX.Element')) {
      content = content.replace(
        /function Page\(\)/g,
        'function Page(): JSX.Element'
      );
      fs.writeFileSync(filePath, content);
      console.log(`Added return type to ${filePath}`);
    }
    
    // Remove unused Page variable declarations
    if (content.includes('const Page =') && content.includes('export default Page;')) {
      content = content.replace(
        /const Page = [^;]+;\n/g,
        ''
      );
      fs.writeFileSync(filePath, content);
      console.log(`Removed unused Page variable in ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log('TypeScript error fixes completed');