import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const files = [
  'app/5g-consulting/page.tsx',
  'app/5g-deployment/page.tsx',
  'app/5g-integration/page.tsx',
  'app/5g-maintenance/page.tsx',
  'app/5g-migration/page.tsx',
  'app/5g-modernization/page.tsx',
  'app/5g-monitoring/page.tsx',
  'app/5g-optimization/page.tsx'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix semicolons in object properties
    content = content.replace(/title: '([^']+)';,/g, "title: '$1',");
    content = content.replace(/description: '([^']+)';/g, "description: '$1'");
    
    // Fix other common syntax errors
    content = content.replace(/grid md: grid-cols/g, 'grid md:grid-cols');
    content = content.replace(/hover: border-/g, 'hover:border-');
    content = content.replace(/hover: from-/g, 'hover:from-');
    content = content.replace(/hover: to-/g, 'hover:to-');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${file}`);
  }
});

console.log('All 5G pages fixed!');