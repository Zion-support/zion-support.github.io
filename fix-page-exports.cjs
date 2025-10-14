#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

async function fixPageExports() {
  // Find all page.tsx files that have function Page() but no export
  const pageFiles = await glob('app/**/page.tsx', { cwd: __dirname });

  let fixedCount = 0;

  for (const filePath of pageFiles) {
    const fullPath = path.join(__dirname, filePath);
    const content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if file has function Page() but no export default
    if (content.includes('function Page()') && !content.includes('export default')) {
      // Get the directory name to create a proper component name
      const dirName = path.dirname(filePath).split('/').pop();
      const componentName = dirName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('') + 'Page';
      
      // Replace function Page() with function ComponentName()
      const updatedContent = content
        .replace(/function Page\(\)/g, `function ${componentName}()`)
        .replace(/\n\s*$/, '\n\nexport default ' + componentName + ';');
      
      fs.writeFileSync(fullPath, updatedContent);
      console.log(`Fixed: ${filePath} -> ${componentName}`);
      fixedCount++;
    }
  }

  console.log(`\nFixed ${fixedCount} files`);
}

fixPageExports().catch(console.error);