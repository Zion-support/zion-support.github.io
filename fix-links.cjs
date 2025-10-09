const fs = require('fs');

function fixLinksInFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace to= with href= in Link components
    content = content.replace(/to="/g, 'href="');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix Navigation component
fixLinksInFile('app/components/Navigation.tsx');

// Fix Footer component
fixLinksInFile('app/components/Footer.tsx');

console.log('Link fixes completed!');
