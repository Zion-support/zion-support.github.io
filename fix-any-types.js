import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function fixAnyTypes() {
  // Find all page.tsx files in the app directory
  const files = await glob('app/**/page.tsx', { cwd: '/workspace' });

  
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join('/workspace', file);
    
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Replace the any type with a proper interface
      if (content.includes('export default function Wrapped(props: any)')) {
        content = content.replace(
          'export default function Wrapped(props: any)',
          'export default function Wrapped(props: Record<string, unknown>)'
        );
        
        fs.writeFileSync(filePath, content, 'utf8');
        fixedCount++;
              }
    } catch (error) {
    // Empty block
  }
  });

  }

fixAnyTypes().catch(console.error);