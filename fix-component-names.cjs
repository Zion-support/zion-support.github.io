const fs = require('fs');
const path = require('path');

// Get all .tsx files in the app directory
function getAllTsxFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllTsxFiles(filePath));
    } else if (file.endsWith('.tsx')) {
      results.push(filePath);
    }
  });
  
  return results;
}

// Function to get page info from file path
function getPageInfo(filePath) {
  const pathParts = filePath.split('/');
  const fileName = pathParts[pathParts.length - 1];
  const pageName = pathParts[pathParts.length - 2];
  
  let title;
  if (fileName === 'page.tsx') {
    title = pageName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  } else {
    title = fileName.replace('.tsx', '').split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }
  
  const description = `Professional ${title.toLowerCase()} solutions powered by advanced AI and cutting-edge technology.`;
  const keywords = `${title.toLowerCase()}, AI solutions, IT services, automation, technology, business solutions`;
  
  return { title, description, keywords };
}

// Function to create a valid component name
function createValidComponentName(title) {
  // Remove special characters and numbers, then convert to PascalCase
  return title.replace(/[^a-zA-Z\s]/g, '').split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('').replace(/^\d+/, ''); // Remove leading numbers
}

// Get all .tsx files
const allTsxFiles = getAllTsxFiles('./app');

console.log(`Found ${allTsxFiles.length} .tsx files`);

let fixedCount = 0;

// Fix component names in all files
allTsxFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { title } = getPageInfo(filePath);
    const validComponentName = createValidComponentName(title);
    
    // Replace the component name in the file
    const updatedContent = content.replace(
      /const \w+Page: React\.FC = \(\) => \{/g,
      `const ${validComponentName}Page: React.FC = () => {`
    ).replace(
      /export default \w+Page;/g,
      `export default ${validComponentName}Page;`
    );
    
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Fixed: ${filePath} -> ${validComponentName}Page`);
    fixedCount++;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`\nSummary:`);
console.log(`- Fixed: ${fixedCount} files`);
console.log(`- Total: ${allTsxFiles.length} files`);