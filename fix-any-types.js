import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function fixAnyTypes() {
  // Find all TypeScript/TSX files in the app directory
  const files = await glob('app/**/*.{ts,tsx}');

  console.log(`Found ${files.length} files to check`);

  let fixedCount = 0;

  for (const file of files) {
    try {
      const filePath = path.join(process.cwd(), file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if the file contains the problematic pattern
      if (content.includes('export default function Wrapped(props: any)')) {
        console.log(`Fixing ${file}...`);
        
        // Replace the any type with a proper interface
        const fixedContent = content.replace(
          /export default function Wrapped\(props: any\)/g,
          'export default function Wrapped(props: Record<string, unknown>)'
        );
        
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        fixedCount++;
        console.log(`✓ Fixed ${file}`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }

  console.log(`\nFixed ${fixedCount} files`);
}

fixAnyTypes().catch(console.error);