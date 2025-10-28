import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const files = glob.sync('app/**/*.{ts,tsx}', { cwd: '/workspace' });

files.forEach(file => {
  const filePath = path.join('/workspace', file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Remove unused lucide-react imports
  if (content.includes("import { ArrowRight } from 'lucide-react'") && !content.includes('<ArrowRight')) {
    content = content.replace(/import \{ ArrowRight \} from 'lucide-react'\n?/g, '');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed unused lucide-react imports: ${file}`);
  }
});

console.log('Unused lucide-react import fixes completed');