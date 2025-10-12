const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all component files that might be missing exports
const files = glob.sync('app/components/*.tsx');

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  // Check if the file has a component but no export
  if (content.includes('const ') && content.includes(': React.FC') && !content.includes('export default')) {
    console.log(`Adding export to ${file}...`);
    
    // Extract component name
    const componentMatch = content.match(/const (\w+): React\.FC/);
    if (componentMatch) {
      const componentName = componentMatch[1];
      
      // Add export statement
      let fixedContent = content.replace(
        /    \);\n  \}/,
        `    );
  };

export default ${componentName};`
      );
      
      fs.writeFileSync(file, fixedContent);
      console.log(`Added export to ${file}`);
    }
  }
});

console.log('Done fixing exports!');