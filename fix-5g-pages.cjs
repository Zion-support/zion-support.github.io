const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix 5G page component names
function fix5GPages() {
  const pattern = 'app/5g-*/page.tsx';
  const files = glob.sync(pattern);
  
  console.log(`Found ${files.length} 5G pages to fix...`);
  
  for (const file of files) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      
      // Fix component names that start with numbers
      content = content.replace(/const 5g(\w+)Page: React\.FC = \(\) => \{/g, (match, pageName) => {
        const properName = 'FiveG' + pageName.charAt(0).toUpperCase() + pageName.slice(1);
        return `const ${properName}Page: React.FC = () => {`;
      });
      
      // Fix export statements
      content = content.replace(/export default 5g(\w+)Page;/g, (match, pageName) => {
        const properName = 'FiveG' + pageName.charAt(0).toUpperCase() + pageName.slice(1);
        return `export default ${properName}Page;`;
      });
      
      // Fix titles to be properly capitalized
      content = content.replace(/<title>5g ([^<]*)<\/title>/g, (match, title) => {
        return `<title>5G ${title.charAt(0).toUpperCase() + title.slice(1)}</title>`;
      });
      
      // Fix descriptions to be properly capitalized
      content = content.replace(/content="Professional 5g ([^"]*)"/g, (match, desc) => {
        return `content="Professional 5G ${desc.charAt(0).toUpperCase() + desc.slice(1)}"`;
      });
      
      // Fix keywords to be properly capitalized
      content = content.replace(/content="5g, ([^"]*)"/g, (match, keywords) => {
        return `content="5G, ${keywords}"`;
      });
      
      // Fix h1 titles to be properly capitalized
      content = content.replace(/<h1 className="[^"]*">5g ([^<]*)<\/h1>/g, (match, title) => {
        return match.replace('5g', '5G');
      });
      
      // Fix p descriptions to be properly capitalized
      content = content.replace(/<p className="[^"]*">Professional 5g ([^<]*)<\/p>/g, (match, desc) => {
        return match.replace('5g', '5G');
      });
      
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Fixed: ${file}`);
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  console.log('All 5G pages fixed!');
}

// Run the fix
fix5GPages();