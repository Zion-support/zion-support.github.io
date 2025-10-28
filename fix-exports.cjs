const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all page.tsx files
const files = glob.sync('app/**/page.tsx');

files.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check if the file has 'export default Page;' but no Page function defined
    if (content.includes('export default Page;') && !content.includes('function Page(') && !content.includes('const Page =')) {
      // Find the function name that should be exported
      const functionMatch = content.match(/function\s+(\w+)\s*\(/);
      if (functionMatch) {
        const functionName = functionMatch[1];
        const newContent = content.replace('export default Page;', `export default ${functionName};`);
        fs.writeFileSync(file, newContent);
        console.log(`Fixed export in ${file}: ${functionName}`);
      }
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log('Export fixes completed!');