import fs from 'fs';
import { glob } from 'glob';

// Find all 5g page files
const pageFiles = glob.sync('app/5g-*/page.tsx');

console.log(`Found ${pageFiles.length} 5G page files to fix`);

pageFiles.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file is missing the function declaration
    if (content.includes('import EnhancedSEO from') && !content.includes('function Page()')) {
      console.log(`Fixing missing function declaration in ${filePath}`);
      
      // Find the line with EnhancedSEO import and add function declaration after it
      const lines = content.split('\n');
      let insertIndex = -1;
      
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('import EnhancedSEO from')) {
          insertIndex = i + 1;
          break;
        }
      }
      
      if (insertIndex !== -1) {
        // Find the next non-empty line
        while (insertIndex < lines.length && lines[insertIndex].trim() === '') {
          insertIndex++;
        }
        
        // Insert function declaration
        lines.splice(insertIndex, 0, '');
        lines.splice(insertIndex + 1, 0, 'function Page(): JSX.Element {');
        
        content = lines.join('\n');
        fs.writeFileSync(filePath, content);
        console.log(`Fixed ${filePath}`);
      }
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log('5G pages fixes completed');