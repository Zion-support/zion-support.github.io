import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const files = glob.sync('app/**/*.{ts,tsx}', { cwd: '/workspace' });

files.forEach(file => {
  const filePath = path.join('/workspace', file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Remove unused Footer imports
  if (content.includes("import Footer from '../components/Footer'") && !content.includes('<Footer')) {
    content = content.replace(/import Footer from '\.\.\/components\/Footer'\n?/g, '');
    modified = true;
  }
  
  if (content.includes("import Footer from '../../components/Footer'") && !content.includes('<Footer')) {
    content = content.replace(/import Footer from '\.\.\/\.\.\/components\/Footer'\n?/g, '');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed unused Footer imports: ${file}`);
  }
});

console.log('All unused Footer import fixes completed');