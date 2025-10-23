const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix extra closing div tags
    content = content.replace(/<Footer \/>\n      <\/div>\n    <\/>\n  \)\n\}\n\nexport default/g, '<Footer />\n    </>\n  )\n}\n\nexport default');
    content = content.replace(/<Footer \/>\n      <\/div>\n    <\/>\n  \)\n\}\n\nexport default/g, '<Footer />\n    </>\n  )\n}\n\nexport default');
    
    // Fix extra closing div tags in different patterns
    content = content.replace(/<Footer \/>\n      <\/div>\n    <\/>\n  \)\n\}\n\nexport default/g, '<Footer />\n    </>\n  )\n}\n\nexport default');
    
    // Fix specific pattern with extra div
    content = content.replace(/<Footer \/>\n      <\/div>\n    <\/>\n  \)\n\}\n\nexport default/g, '<Footer />\n    </>\n  )\n}\n\nexport default');
    
    // Fix any remaining extra closing divs before Footer
    content = content.replace(/<\/div>\n      <Footer \/>/g, '\n      <Footer />');
    
    // Fix any remaining extra closing divs after Footer
    content = content.replace(/<Footer \/>\n      <\/div>/g, '<Footer />');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✓ Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(file)) {
        walkDirectory(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      fixFile(filePath);
    }
  }
}

console.log('Starting final cleanup...');
walkDirectory('./app');
console.log('Final cleanup completed!');