const fs = require('fs);
const path = require(path');

      .replace(/^
      // Fix interface syntax
      .replace(/interface\s+(\w+)\s*\{/g, 'interface $1 {)
      .replace(/;\s*$/gm, ')
      // Clean up extra semicolons
      .replace(/;+/g, ';)
      .replace(/;\s*;/g, ;')
      .replace(/;\s*$/gm, ')
      .trim();
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed JSX: ${filePath}`);
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith(.tsx') || file.endsWith('.jsx')) {
      fixJsxFile(filePath);
    }
  }
}

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
