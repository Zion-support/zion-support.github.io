import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function main() {
  // Find all page.tsx files in the app directory
  const pageFiles = await glob('app/**/page.tsx', { cwd: '/workspace' });

  console.log(`Found ${pageFiles.length} page files to process`);

  let fixedCount = 0;
  let errorCount = 0;

  for (const filePath of pageFiles) {
    try {
      const fullPath = path.join('/workspace', filePath);
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Check if the file has unused Page function (no export default)
      if (content.includes('function Page()') && !content.includes('export default function')) {
        // Extract the directory name to create a proper component name
        const pathParts = filePath.split('/');
        const pageName = pathParts[pathParts.length - 2]; // Get the directory name before page.tsx
        const componentName = pageName
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join('') + 'Page';
        
        // Replace the function Page() with export default function ComponentName()
        content = content.replace(/function Page\(\)/, `export default function ${componentName}()`);
        
        // Update the metadata title and description
        content = content.replace(
          /title: 'Page \| Zion Tech Group'/g,
          `title: '${pageName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} | Zion Tech Group'`
        );
        content = content.replace(
          /description: 'Professional page services and solutions by Zion Tech Group\.'/g,
          `description: 'Professional ${pageName.split('-').join(' ')} services by Zion Tech Group.'`
        );
        content = content.replace(
          /keywords: 'page, technology, services'/g,
          `keywords: '${pageName.split('-').join(', ')}, technology, services'`
        );
        content = content.replace(
          /title: 'Page \| Zion Tech Group'/g,
          `title: '${pageName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} | Zion Tech Group'`
        );
        content = content.replace(
          /description: 'Professional page services and solutions by Zion Tech Group\.'/g,
          `description: 'Professional ${pageName.split('-').join(' ')} services by Zion Tech Group.'`
        );
        
        // Update the h1 title in the JSX
        content = content.replace(
          /<h1[^>]*>\s*Page\s*<\/h1>/g,
          `<h1 className="text-4xl font-bold text-white mb-6">\n            ${pageName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}\n          </h1>`
        );
        
        // Update the description in the JSX
        content = content.replace(
          /<p[^>]*>\s*Professional services by Zion Tech Group\.\s*<\/p>/g,
          `<p className="text-xl text-gray-300 mb-8">\n            Professional ${pageName.split('-').join(' ')} services by Zion Tech Group.\n          </p>`
        );
        
        fs.writeFileSync(fullPath, content);
        fixedCount++;
        console.log(`Fixed: ${filePath} -> ${componentName}`);
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
      errorCount++;
    }
  }

  console.log(`\nProcessing complete:`);
  console.log(`- Fixed: ${fixedCount} files`);
  console.log(`- Errors: ${errorCount} files`);
}

main().catch(console.error);