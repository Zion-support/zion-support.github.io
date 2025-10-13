import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Find all .tsx files in app/components
const componentsDir = path.join(__dirname, 'app', 'components');
const files = fs.readdirSync(componentsDir).filter(file => file.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix the pattern: export default ComponentName;\n  );\n}
  const pattern = /export default \w+;\s*\n\s*\);\s*\n\}/g;
  const replacement = 'export default ComponentName;';
  
  // More specific pattern matching
  const lines = content.split('\n');
  let modified = false;
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === 'export default' && i + 2 < lines.length) {
      const nextLine = lines[i + 1];
      const nextNextLine = lines[i + 2];
      
      if (nextLine.trim() === '  );' && nextNextLine.trim() === '}') {
        // Remove the extra lines
        lines.splice(i + 1, 2);
        modified = true;
        break;
      }
    }
  }
  
  if (modified) {
    const newContent = lines.join('\n');
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Fixed: ${file}`);
  }
});

console.log('Syntax error fixes completed');