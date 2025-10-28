import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function fixMissingExports() {
  try {
    const files = await glob('**/*.tsx', { cwd: '/workspace/app/components' });
    
    for (const file of files) {
      const filePath = path.join('/workspace/app/components', file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file has a component definition but no export
      if (content.includes('const ') && content.includes(': React.FC') && !content.includes('export default')) {
        // Find the component name
        const match = content.match(/const\s+(\w+):\s+React\.FC/);
        if (match) {
          const componentName = match[1];
          content += `\n\nexport default ${componentName};`;
          fs.writeFileSync(filePath, content);
          console.log(`Added export for ${componentName} in ${file}`);
        }
      }
    }
    
    console.log('All missing exports fixed');
  } catch (error) {
    console.error('Error fixing missing exports:', error);
  }
}

fixMissingExports();